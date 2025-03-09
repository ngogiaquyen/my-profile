<?php
class Db
{
    private $conn = null;
    private static $instance;
    private function __construct()
    {
        $this->connect();
    }
    private function connect()
    {
        try {
            $this->conn = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME . ";charset=utf8", USERNAME, PASSWORD);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->createTables();
        } catch (PDOException $e) {
            if ($e->getCode() == 1049) {
                $this->initializeDatabase();
            } else {
                handleError($e->getMessage());
            }
        }
    }
    private function initializeDatabase()
    {
        try {
            $this->conn = new PDO("mysql:host=" . HOST . ";charset=utf8", USERNAME, PASSWORD);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conn->exec("CREATE DATABASE IF NOT EXISTS " . DBNAME);
            $this->connect();
            $this->createTables();
        } catch (PDOException $e) {
            handleError($e->getMessage());
        }
    }
    private function createTables()
    {
        $sql =
            "CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            );

            CREATE TABLE IF NOT EXISTS messages (
                id INT AUTO_INCREMENT PRIMARY KEY,
                sender_id INT NOT NULL,
                receiver_id INT NOT NULL,
                message TEXT NOT NULL,
                timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE CASCADE,
                FOREIGN KEY (receiver_id) REFERENCES users(id) ON DELETE CASCADE
            );
            CREATE TABLE IF NOT EXISTS profile (
                id INT AUTO_INCREMENT PRIMARY KEY,
                avatar TEXT,
                background TEXT,
                bio TEXT,
                email VARCHAR(100),
                name VARCHAR(100),
                phone VARCHAR(20),
                address TEXT
            );

            CREATE TABLE IF NOT EXISTS socials (
                id INT AUTO_INCREMENT PRIMARY KEY,
                img TEXT,
                link TEXT,
                title VARCHAR(100)
            );

            CREATE TABLE IF NOT EXISTS post (
                id INT AUTO_INCREMENT PRIMARY KEY,
                content TEXT,
                img TEXT,
                date_create DATETIME DEFAULT CURRENT_TIMESTAMP,
                likes INT DEFAULT 0,
                title VARCHAR(255)
            );

            CREATE TABLE IF NOT EXISTS comment (
                id INT AUTO_INCREMENT PRIMARY KEY,
                content TEXT,
                date_create DATETIME DEFAULT CURRENT_TIMESTAMP,
                post_id INT,
                FOREIGN KEY (post_id) REFERENCES post(id) ON DELETE CASCADE
            );

            CREATE TABLE IF NOT EXISTS cv (
                id INT AUTO_INCREMENT PRIMARY KEY,
                avatar TEXT,
                name VARCHAR(100),
                job_position TEXT,
                information TEXT,
                language TEXT,
                skills TEXT,
                knowledge TEXT,
                target TEXT,
                education TEXT,
                githublink TEXT
            );

            CREATE TABLE IF NOT EXISTS projects (
                id INT AUTO_INCREMENT PRIMARY KEY,
                date_create DATETIME,
                description TEXT,
                feature TEXT,
                github VARCHAR(255),
                img VARCHAR(255),
                name VARCHAR(100),
                technology VARCHAR(255)
            );

            CREATE TABLE IF NOT EXISTS language (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100),
                percent INT
            );

            CREATE TABLE IF NOT EXISTS experience (
                id INT AUTO_INCREMENT PRIMARY KEY,
                counter INT,
                title VARCHAR(100)
            );

            CREATE TABLE IF NOT EXISTS flash_card (
                id INT AUTO_INCREMENT PRIMARY KEY,
                word VARCHAR(100),
                meaning VARCHAR(100),
                pinyin VARCHAR(100),
                examp TEXT,
                date_create DATETIME DEFAULT CURRENT_TIMESTAMP
            );
        ";
        $this->conn->exec($sql);
    }
    public static function getInstance()
    {
        if (!isset(self::$instance)) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    public function getConnection()
    {
        return $this->conn;
    }
}