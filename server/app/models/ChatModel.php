<?php
class ChatModel extends Model
{
    public function readChat($arg)
    {
        $loginStatus = checkLogin($this->conn);

        if (isset($loginStatus['error'])) {
            handleError($loginStatus['error']);
            return;
        }

        $user_id = $_SESSION['user_id']; // Lấy user_id từ session sau khi checkLogin

        $sql = "SELECT message FROM messages WHERE sender_id = :user_id OR receiver_id = :user_id";

        try {
            $stmt = $this->conn->prepare($sql);
            $stmt->execute(['user_id' => $user_id]);

            return $stmt->fetchAll(PDO::FETCH_COLUMN); // Trả về danh sách tin nhắn
        } catch (PDOException $e) {
            handleError($e->getMessage());
        }
    }
    public function createChat($data)
    {
        if (checkLogin($this->conn)) {
            $data['sender_id'] = $_COOKIE['user_id'];
            return $this->create("messages", $data);
        } else {
            http_response_code(401); // Unauthorized
            return ["error" => "Bạn chưa đăng nhập"];
        }

    }
}