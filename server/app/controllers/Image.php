<?php
class Image extends Controller
{
    private $model1;
    public function __construct()
    {
        // $this->model1 = $this->createModel("ImageModel");
    }
    // public function read($id)
    // {
    //     validMethodGET();
    //     if (empty($id[0])) {
    //         $result = $this->model1->readImages($id);
    //     } else {
    //         $result = $this->model1->readImagesDetail($id);
    //     }
    //     echo json_encode($result);
    // }
    public function upload($arg)
    {
        validMethodPOST();

        $uploadResult = uploadImage('img', 'uploadsTemp');

        if ($uploadResult['success']) {
            handleSuccess('Up ảnh thành công');
        } else {
            handleError('Up ảnh thất bại, vui lòng thử lại sau');
        }
    }

    public function read()
    {
        $result = handleLoadImg('UploadsTemp');

        if ($result['success']) {
            handleSuccess ("Lấy ảnh thành công",$result['images']); // Danh sách ảnh trong thư mục
        } else {
            handleError($result['message']); // Hiển thị lỗi nếu có
        }

    }


    public function update($arg)
    {
        validMethodPOST();

        $id = $_POST["id"];

        $data = [
            'title' => $_POST['title'],
            'content' => $_POST['content']
        ];

        // Kiểm tra xem tệp ảnh có tồn tại trong yêu cầu hay không
        if (isset($_FILES['img']) && $_FILES['img']['error'] === UPLOAD_ERR_OK) {
            // Đặt tên tệp duy nhất để tránh ghi đè
            $targetDir = "uploads/";
            $fileName = basename($_FILES['img']['name']);
            $targetFilePath = $targetDir . uniqid() . "_" . $fileName;

            // Kiểm tra và tạo thư mục nếu chưa tồn tại
            if (!is_dir($targetDir)) {
                mkdir($targetDir, 0755, true);
            }

            // Di chuyển tệp ảnh đến thư mục đích
            if (move_uploaded_file($_FILES['img']['tmp_name'], $targetFilePath)) {
                // Lưu đường dẫn ảnh vào cơ sở dữ liệu
                $data['img'] = $targetFilePath;
            } else {
                handleError('Không thể tải tệp ảnh lên, vui lòng thử lại');
            }

        }
        if ($this->model1->updatePost($data, $id)) {
            handleSuccess('Chỉnh sửa bài viết thành công');
        } else {
            handleError('Chỉnh sửa bài viết thất bại, vui lòng thử lại sau');
        }

    }
    public function delete()
    {
        validMethodPOST();
        $url = $_POST['url'];
        deleteImage($url);
    }

}