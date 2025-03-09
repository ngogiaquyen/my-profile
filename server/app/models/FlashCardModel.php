<?php
class FlashCardModel extends Model
{

    public function readFlashCard()
    {
        return $this->read("flash_card");
    }

    public function createFlashCard($data)
    {
        return $this->create("flash_card", $data);
    }

    public function updateFlashCard($data, $id = 0)
    {

        // if (checkLogin($this->conn)) {
        //     if (empty($id)) {
        //         handleError('Vui lòng chọn mọt bài viết');
        //     }

        $conditions = "id=$id";
        return $this->update('flash_card', $data, $conditions);
        // }
    }

}

