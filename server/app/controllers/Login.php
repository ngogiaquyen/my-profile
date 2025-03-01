<?php
class Login extends Controller
{
    private $model;
    public function __construct()
    {
        $this->model = $this->createModel("LoginModel");
    }
    public function check($arg)
    {
        validMethodGET();
        echo json_encode($this->model->checkLogin($arg));
    }
}