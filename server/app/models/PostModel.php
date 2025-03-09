<?php
class PostModel extends Model
{
    // public function readPosts($id = 0)
    // {
    //     return $this->read('posts', empty($id[0]) ? '' : "id=$id[0]");
    // }
    public function readPostDetail($id)
    {

        $sql = "
                SELECT 
                    p.id,
                    p.title,
                    p.content,
                    p.img,
                    p.date_create,
                    p.likes,
                    COUNT(c.id) AS comment_count
                FROM 
                    post p
                LEFT JOIN 
                    comment c ON p.id = c.post_id
                WHERE 
                    p.id = :id
                GROUP BY 
                    p.id,
                    p.title,
                    p.content,
                    p.img,
                    p.date_create,
                    p.likes;
            ";
        try {
            $stmt = $this->conn->prepare($sql);
            $stmt->execute([':id' => $id[0]]);
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            handleError($e);
        }
    }
    public function readPost()
    {
        $sql = "SELECT 
                    p.id,
                    p.title,
                    p.content,
                    p.img,
                    p.date_create,
                    p.likes,
                    COUNT(c.id) AS comment_count
                FROM 
                    post p
                LEFT JOIN 
                    comment c ON p.id = c.post_id
                GROUP BY 
                    p.id,
                    p.title,
                    p.content,
                    p.img,
                    p.date_create,
                    p.likes
                ORDER BY 
                    p.date_create DESC;
                ";
        try {
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            handleError($e);
        }
    }
    public function readComment($id)
    {
        $sql = "SELECT 
            cmt.id,
            cmt.content,
            cmt.date_create
        FROM 
            post p
        LEFT JOIN 
            comment cmt ON p.id = cmt.post_id
        WHERE 
            p.id = :id
        ORDER BY 
            cmt.date_create ASC;
            ";
        try {
            $comments = [];
            $stmt = $this->conn->prepare($sql);
            $stmt->execute([":id" => $id[0]]);
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                if ($row['id'] !== null) { // Chỉ thêm nếu có dữ liệu bình luận
                    $comments[] = $row;
                }
            }

            return $comments;
            // return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            handleError($e);
        }
    }
    public function createPost($data)
    {

        if (checkLogin($this->conn)) {
            return $this->create("post", $data);
        }
    }
    public function createComment($data)
    {
        return $this->create("comment", $data);
    }
    public function likePost($id)
    {
        $sql = "UPDATE post SET likes = likes + 1 WHERE id = :id";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute([':id' => $id]);

        // Kiểm tra xem có dòng nào bị ảnh hưởng không
        return $stmt->rowCount() > 0;
    }

    public function updatePost($data, $id = 0)
    {

        if (checkLogin($this->conn)) {
            if (empty($id)) {
                handleError('Vui lòng chọn mọt bài viết');
            }

            $conditions = "id=$id";
            return $this->update('post', $data, $conditions);
        }
    }
    public function deletePost($id)
    {

        if (checkLogin($this->conn)) {
            return $this->delete("post", "id=$id");
        }
    }
}

