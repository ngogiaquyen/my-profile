<?php
class LoginModel extends Model
{
    public function checkLogin($arg)
    {
        if (checkLogin($this->conn)) {
            echo json_encode([
                'status' => 'success',
                'is_login' => true,
                'user_id' => $_COOKIE['user_id'],
                'title' => 'Thông báo',
                'content' => "Đã đăng nhập",
                'keep' => false
            ]);
        } else {
            echo json_encode([
                'status' => 'error',
                'is_login' => false,
                'title' => 'Thông báo',
                'content' => "Chưa đăng nhập",
                'keep' => false
            ]);
        }
        exit;
    }
}