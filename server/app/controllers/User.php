<?php
class User extends Controller
{
    private $model1;
    public function __construct()
    {
        $this->model1 = $this->createModel("UserModel");
    }
    public function read($arg)
    {
        validMethodGET();
        echo json_encode($this->model1->readUser($arg));
    }
    public function create($arg)
    {
        validMethodPOST();
        $data = [
            'username' => $_POST['username'],
            'password' => password_hash($_POST['password'],PASSWORD_DEFAULT),
        ];
        if ($this->model1->createUser($data)) {
            handleSuccess(message: 'Tạo tài khoản thành công');
        } else {
            handleError('Tạo tài khoản thất bại, vui lòng thử lại sau, tên tk khác');
        }
    }
    public function login($arg)
    {
        validMethodPOST();
        
        $data = [
            'username' => $_POST['username'],
            'password' => $_POST['password'],
        ];
        if ($this->model1->loginUser($data)) {
            echo json_encode([
                'status' => 'success',
                'user_id' => $_COOKIE['user_id'],
                'title' => 'Thông báo',
                'content' => "Đã đăng nhập",
                'keep' => false
            ]);
        } else {
            handleError('Đăng nhập thất bại, vui lòng thử lại sau, tên tk khác');
        }
    }
    
}