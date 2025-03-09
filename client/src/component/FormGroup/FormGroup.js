import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './FormGroup.module.scss';
import { BASE_URL_IMG } from '~/helper/apiService';

const cx = classNames.bind(styles);

function FormGroup({ type = 'text', title, value: _value = '', row, col, placeholder, ...props }) {
  const [value, setValue] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [rows, setRows] = useState(row);
  const [tableData, setTableData] = useState({});

  const handleChange = (rowIndex, colIndex, value) => {
    setTableData((prevData) => {
      const newData = { ...prevData };

      // Kiểm tra nếu chưa có hàng này thì khởi tạo object rỗng
      if (!newData[rowIndex]) newData[rowIndex] = { key: '', value: '' };

      // Gán giá trị cho key hoặc value dựa vào colIndex
      if (colIndex === 0) {
        newData[rowIndex].key = value; // Cột đầu tiên là key
      } else {
        newData[rowIndex].value = value; // Cột thứ hai là value
      }

      getTableData(newData);
      return newData; // Trả về newData thay vì formattedData
    });
  };
  const getTableData = (newData) => {
    // Chuyển đổi tableData thành { key: value } format
    const formattedData = Object.fromEntries(
      Object.values(newData)
        .filter(({ key, value }) => key && value) // Chỉ lấy các dòng có đủ dữ liệu
        .map(({ key, value }) => [key, value]),
    );

    const formattedString = Object.entries(formattedData)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\\n');

    setValue(formattedString);
  };

  const parseStringToTable = (inputString) => {
    const lines = inputString.split('\\n'); // Tách từng dòng
    setRows(lines.length)
    const newTableData = {};

    lines.forEach((line, index) => {
      const [key, value] = line.split(':').map((item) => item.trim()); // Tách key và value
      if (key && value) {
        newTableData[index] = { key, value }; // Lưu vào tableData
      }
    });
    setTableData(newTableData); // Cập nhật state
  };

  useEffect(() => {
    if (type === 'table') {
      parseStringToTable(_value);
    }
  }, [_value]);

  const addRow = () => {
    setRows((prevRows) => prevRows + 1);
  };
  const removeRow = () => {
    setRows((prevRows) => (prevRows > 1 ? prevRows - 1 : prevRows));
  };

  useEffect(() => {
    setValue(_value);
  }, [_value]);

  const handleChangeValue = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (type === 'file') {
      handleImageChange(e);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };
  let InputTag = 'input';

  if (type === 'textarea') {
    InputTag = 'textarea';
  }

  return (
    <div className={cx('form-group')}>
      <label htmlFor={title}>{title}</label>

      {type === 'table' && (
        <div>
          <table className={cx('table')}>
            <tbody>
              {Array.from({ length: rows }, (_, rowIndex) => {
                const rowData = tableData[rowIndex] || {}; // Lấy dữ liệu theo hàng

                return (
                  <tr key={rowIndex} className={cx('row')}>
                    {Array.from({ length: col }, (_, colIndex) => {
                      const cellValue = colIndex === 0 ? rowData.key || '' : rowData.value || '';

                      return (
                        <td key={colIndex} className={cx('cell')}>
                          <input
                            className={cx('input')}
                            value={cellValue}
                            onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                          />
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button className={cx('addRowButton')} onClick={addRow}>
            ➕ Thêm dòng
          </button>
          <button className={cx('addRowButton')} onClick={removeRow}>
            ➕ Ẩn dòng
          </button>
        </div>
      )}

      {(imagePreview || (type === 'file' && value)) && (
        <img src={imagePreview || BASE_URL_IMG + value} alt="Image Preview" className={cx('image-preview')} />
      )}
      <InputTag
        className={cx('input', { hide: type === 'table' })}
        type={type}
        id={title}
        {...(type === 'file' ? {} : { value })}
        {...props}
        placeholder={placeholder}
        onChange={handleChangeValue}
      />
    </div>
  );
}

export default FormGroup;
