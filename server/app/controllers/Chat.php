<?php
class Chat extends Controller
{
    private $model;
    public function __construct()
    {
        $this->model = $this->createModel("ChatModel");
    }
    public function read($arg)
    {
        validMethodGET();
        echo json_encode($this->model->readChat($arg));
    }
    public function create($arg)
    {
        validMethodPOST();
        
        // tạo data 
        $data = [
            'sender_id' => "",
            'receiver_id' => $_POST['receiver_id'],
            'message' => $_POST['message']
        ];
        if ($this->model->createChat($data)) {
            handleSuccess(message: 'Gửi tin nhắn thành công');
        } else {
            handleError('Gửi tin nhắn thất bại, vui lòng thử lại sau');
        }
    }
}