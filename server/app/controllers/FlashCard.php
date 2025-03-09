<?php
class FlashCard extends Controller
{
    private $model1;
    public function __construct()
    {
        $this->model1 = $this->createModel("FlashCardModel");
    }
    public function read($id)
    {
        validMethodGET();
        $result = $this->model1->readFlashCard();
        echo json_encode($result);
    }

    public function create()
    {
        validMethodPOST();
        $data = [
            "word"=>$_POST["word"],
            "meaning"=>$_POST["meaning"],
            "pinyin"=>$_POST["pinyin"],
            "examp"=>$_POST["examp"],
        ];
        if ($this->model1->createFlashCard($data)) {
            handleSuccess('Tạo flash card thành công');
        } else {
            handleError('Tạo flash card thất bại, vui lòng thử lại sau');
        }
    }

    public function update($arg)
    {
        validMethodPOST();

    }
}