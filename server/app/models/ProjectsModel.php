<?php
class ProjectsModel extends Model
{

    public function readProjects($id)
    {
        $sql = "SELECT * FROM projects ORDER BY date_create DESC";
        try{
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e){
            handleError($e);
        }
    }
    public function readProjectsDetail($id)
    {
        $sql = "SELECT * FROM projects WHERE id = :id";
        try{
            $stmt = $this->conn->prepare($sql);
            $stmt->execute([":id"=>$id[0]]);
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e){
            handleError($e);
        }
    }

    public function createProjects($data)
    {
        return $this->create("projects", $data);
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

    public function deleteProject($id)
    {

        if (checkLogin($this->conn)) {
            return $this->delete("projects", "id=$id");
        }
    }

}

