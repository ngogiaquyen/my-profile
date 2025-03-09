<?php
class CvModel extends Model
{

    public function readCv()
    {
        $sql = "SELECT * from cv WHERE id = 1";
        try {
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            handleError($e);
        }
    }

    public function createCv($data)
    {
        return $this->create("cv", $data);
    }

    public function updateCv($data, $id = 0)
    {

        // if (checkLogin($this->conn)) {
        //     if (empty($id)) {
        //         handleError('Vui lòng chọn mọt bài viết');
        //     }

        $conditions = "id=$id";
        return $this->update('cv', $data, $conditions);
        // }
    }

}

