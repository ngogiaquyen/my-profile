<?php
class Post extends Controller
{
    private $model1;
    public function __construct()
    {
        $this->model1 = $this->createModel("PostModel");
    }
    public function read($id)
    {
        validMethodGET();
        if (empty($id[0])) {
            $result = $this->model1->readPost($id);
        } else {
            $result = $this->model1->readPostDetail($id);
        }
        echo json_encode($result);
    }
    public function readcomment($id)
    {
        $result = $this->model1->readComment($id);
        echo json_encode($result);
    }
    public function create($arg)
    {
        validMethodPOST();

        // Kiểm tra xem tệp ảnh có tồn tại trong yêu cầu hay không
        if (isset($_FILES['img']) && $_FILES['img']['error'] === UPLOAD_ERR_OK) {
            // Đặt tên tệp duy nhất để tránh ghi đè
            $targetDir = $_SERVER['DOCUMENT_ROOT'] . "/uploads/";
            $fileName = basename($_FILES['img']['name']);
            $newFileName = uniqid() . "_" . $fileName;
            $targetFilePath = $targetDir . $newFileName;

            $targetSave = "uploads/" . $newFileName;

            // Kiểm tra và tạo thư mục nếu chưa tồn tại
            if (!is_dir($targetDir)) {
                mkdir($targetDir, 0755, true);
            }

            // Di chuyển tệp ảnh đến thư mục đích
            if (move_uploaded_file($_FILES['img']['tmp_name'], $targetFilePath)) {
                // Lưu đường dẫn ảnh vào cơ sở dữ liệu
                $data = [
                    'title' => $_POST['title'],
                    'content' => $_POST['content'],
                    'img' => $targetSave
                ];

                if ($this->model1->createPost($data)) {
                    handleSuccess('Tạo bài viết thành công');
                } else {
                    handleError('Tạo bài viết thất bại, vui lòng thử lại sau');
                }
            } else {
                handleError('Không thể tải tệp ảnh lên, vui lòng thử lại');
            }
        } else {
            handleError('Không có tệp ảnh nào được tải lên hoặc có lỗi trong quá trình tải tệp ảnh');
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
        validPostDelete();
        $id = $_POST['id'];
        if ($this->model1->deletePost($id)) {
            handleSuccess('Xoá bài viết thành công');
        } else {
            handleError('Xoá bài viết thất bại, vui lòng thử lại sau');
        }
    }

    public function createcomment($id)
    {
        validMethodPOST();
        $data = [
            "post_id" => $_POST['post_id'],
            "content" => $_POST['content'],
        ];
        if ($this->model1->createComment($data)) {
            handleSuccess('Bình luận thành công');
        } else {
            handleError('Bình luận thất bại, vui lòng thử lại sau');
        }
    }
    public function like($arg)
    {
        validMethodPOST();
        $id = $_POST['id'];
        if ($this->model1->likePost($id)) {
            handleSuccess('Thả tim thành công');
        } else {
            handleError('Thả tim thất bại, vui lòng thử lại sau');
        }
    }
}