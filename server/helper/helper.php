<?php
//format date
function formatDate($date)
{
    if (!is_string($date)) {
        return '01011990';
    }

    $arr = explode('-', $date);
    return count($arr) === 3 ? sprintf('%02d%02d%02d', $arr[2], $arr[1], $arr[0]) : '01011990';
}
//upload file
$target_file = '';
function upload()
{
    global $target_file;

    if (!isset($_FILES['cv']) || $_FILES['cv']['error'] != UPLOAD_ERR_OK) {
        handleError('Có lỗi xảy ra khi tải lên tệp.');
    }

    $file_name = basename($_FILES['cv']['name']);
    $file_type = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
    validType($file_type);

    $unique_file_name = uniqid() . '_' . $file_name;
    $target_path = ROOT . '/public/uploads/';
    $target_file = $target_path . $unique_file_name;

    if (!is_dir($target_path)) {
        handleError('Thư mục đích không tồn tại');
    }

    if (!is_writable($target_path)) {
        handleError('Thư mục không có quyền ghi');
    }

    if (move_uploaded_file($_FILES['cv']['tmp_name'], $target_file)) {
        return $unique_file_name;
    } else {
        handleError('Có lỗi xảy ra khi di chuyển tệp tải lên.');
    }
}
function unload()
{
    global $target_file;

    if (file_exists($target_file)) {
        unlink($target_file);
    }
}

function removeFields($result, $fields)
{
    if (!is_array($result) || empty($fields)) {
        return $result;
    }

    $role_name = ['Trống', 'Ứng viên', 'Nhân viên', 'Phó phòng nhân sự', 'Trưởng phòng Nhân sự', 'Phó giám đốc', 'Giám đốc'];

    if ($result[0] && is_array($result[0])) {
        return array_map(function ($item) use ($fields, $role_name) {
            foreach ($fields as $field) {
                unset($item[$field]);
            }

            if (isset($item['role'])) {
                $item['role'] = $role_name[$item['role']];
            }

            return $item;
        }, $result);
    }

    foreach ($fields as $field) {
        unset($result[$field]);
    }

    if (isset($result['role'])) {
        $result['role'] = $role_name[$result['role']];
    }

    return $result;
}

function checkLogin($conn)
{
    if (!isset($_SESSION['user_id'])) {
        if (!isset($_COOKIE['user_id'])) {
            handleError("Bạn chưa đăng nhập");
            return false;
        }

        // Kiểm tra user_id trong database
        $stmt = $conn->prepare("SELECT id FROM users WHERE id = :id");
        $stmt->execute(['id' => $_COOKIE['user_id']]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$user) {
            http_response_code(403); // Forbidden
            handleError("Người dùng không hợp lệ");
            return false;
        }

        // Gán user_id vào session
        $_SESSION['user_id'] = $_COOKIE['user_id'];
    }

    return true;
}
