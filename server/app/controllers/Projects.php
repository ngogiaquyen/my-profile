<?php
class Projects extends Controller
{
    private $model1;
    public function __construct()
    {
        $this->model1 = $this->createModel("ProjectsModel");
    }
    public function read($id)
    {
        validMethodGET();
        if (empty($id[0])) {
            $result = $this->model1->readProjects($id);
        } else {
            $result = $this->model1->readProjectsDetail($id);
        }
        echo json_encode($result);
    }

    public function create($arg)
    {
        validMethodPOST();

        $is_updated = uploadImage("img", "uploads");

        if ($is_updated['success']) {
            $content = $_POST["content"];
            // tách link ảnh từ content
            $extract = extractImageUrls($content );

            // chuyển ảnh từ upload temp sang upload chính

            foreach ($extract as $url) {
                $cp_result = copyImage($url, "uploads");
                // str_replace($chuoi_can_tim, $chuoi_thay_the, $chuoi_goc);
                if($cp_result["success"]){
                    str_replace($url, $cp_result["new_img_url"], $content);
                }
            }

            $data = [
                "name" => $_POST["name"],
                "descriptions" => $_POST["descriptions"],
                "github_link" => $_POST["github_link"],
                "content" => $content,
                "image" => $is_updated['img_url']
            ];
            if ($this->model1->createProjects($data)) {
                handleSuccess('Tạo project thành công');
            } else {
                handleError('Tạo project thất bại, vui lòng thử lại sau');
            }
        } else {
            handleError("up ảnh thất bại");
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


    }
    public function delete()
    {
        validMethodPOST();
        $id = $_POST['id'];
        if ($this->model1->deleteProject($id)) {
            handleSuccess('Xoá project thành công');
        } else {
            handleError('Xoá project thất bại, vui lòng thử lại sau');
        }
    }
}

