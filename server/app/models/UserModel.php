<?php
class UserModel extends Model
{
    public function readUser($arg)
    {
        $sql = "SELECT * FROM users";

        try {
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            handleError($e);
        }
    }
    public function createUser($data)
    {
        return $this->create("users", $data);
    }


    public function loginUser($data)
    {
        $username = $data["username"];
        $password = $data["password"];
        // Kiểm tra username có tồn tại không
        $stmt = $this->conn->prepare("SELECT * FROM users WHERE username = :username");
        $stmt->execute(['username' => $username]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$user) {
            handleError("Tên đăng nhập không tồn tại.");
            return false;
        }

        // Kiểm tra mật khẩu
        if (!password_verify($password, $user['password'])) {
            handleError("Mật khẩu không chính xác.");
            return false;
        }

        // Tạo SESSION
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];

        // Tạo COOKIE (Lưu đăng nhập trong 7 ngày)
        setcookie("user_id", $user['id'], time() + (7 * 24 * 60 * 60), "/", "", false, true);
        setcookie("username", $user['username'], time() + (7 * 24 * 60 * 60), "/", "", false, true);

        handleSuccess("Đăng nhập thành công!");
        return true;
    }



}