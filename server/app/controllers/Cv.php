<?php
class Cv extends Controller
{
    private $model1;
    public function __construct()
    {
        $this->model1 = $this->createModel("CvModel");
    }
    public function read($id)
    {
        validMethodGET();
        $result = $this->model1->readCv();
        echo json_encode($result);
    }

    public function create($data)
    {
        validMethodPOST();
        if ($this->model1->createCv($data)) {
            handleSuccess('Tạo cv thành công');
        } else {
            handleError('Tạo cv thất bại, vui lòng thử lại sau');
        }
    }

    public function update($arg)
    {
        validMethodPOST();

        $id = 1;

        $data = [
            'name' => $_POST['name'],
            'job_position' => $_POST['job_position'],
            'information' => $_POST['information'],
            'language' => $_POST['language'],
            'skills' => $_POST['skills'],
            'knowledge' => $_POST['knowledge'],
            'target' => $_POST['target'],
            'education' => $_POST['education'],
            'githublink' => $_POST['githublink'],
        ];

        // Kiểm tra xem tệp ảnh có tồn tại trong yêu cầu hay không
        if (isset($_FILES['avatar']) && $_FILES['avatar']['error'] === UPLOAD_ERR_OK) {
            // Đặt tên tệp duy nhất để tránh ghi đè
            $targetDir = $_SERVER['DOCUMENT_ROOT'] . "/uploads/";
            $fileName = basename($_FILES['avatar']['name']);
            $newFileName = uniqid() . "_" . $fileName;
            $targetFilePath = $targetDir . $newFileName;

            $targetSave = "uploads/" . $newFileName;

            // Kiểm tra và tạo thư mục nếu chưa tồn tại
            if (!is_dir($targetDir)) {
                mkdir($targetDir, 0755, true);
            }

            // Di chuyển tệp ảnh đến thư mục đích
            if (move_uploaded_file($_FILES['avatar']['tmp_name'], $targetFilePath)) {
                // Lưu đường dẫn ảnh vào cơ sở dữ liệu
                $data['avatar'] = $targetSave;

                // kiểm tra xem có cv chưa

            } else {
                handleError('Không thể tải tệp ảnh lên, vui lòng thử lại');
            }

        }
        if ($this->model1->readCv()) {
            if ($this->model1->updateCv($data, $id)) {
                handleSuccess('Chỉnh sửa cv thành công');
            } else {
                handleError('Chỉnh sửa cv thất bại, vui lòng thử lại sau');
            }
        } else {
            // chưa có thì tạo
            $data['id'] = 1;
            $this->create($data);
        }
    }
}