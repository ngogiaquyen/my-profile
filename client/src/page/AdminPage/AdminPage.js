import classNames from 'classnames/bind';
import styles from './AdminPage.module.scss';
import PageTitle from '~/component/PageTitle';
import CvForm from '~/component/Form/CvForm';
import { useContext, useEffect, useRef, useState } from 'react';
import { getData, postData } from '~/helper/apiService';
import { ToastContext } from '~/component/Context/ToastProvider';

const cx = classNames.bind(styles);

function AdminPage() {
  const [cvInfo, setCvInfo] = useState({});
  const [formKey, setFormKey] = useState(1);
  const imgRef = useRef();
  const { addToast } = useContext(ToastContext);
  const loadData = async () => {
    const res = await getData('/cv/read');
    setCvInfo(res[0]);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const res = await postData("/cv/update", formData);
    if(res.status === "success"){
      setFormKey(prev=>prev + 1);
      loadData();
    }
  };

  return (
    <div className={cx('wrapper')}>
      <PageTitle>edit cv page</PageTitle>
      <div className={cx('container')}>
        <CvForm keyForm={formKey} data={cvInfo} fileInputRef={imgRef} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AdminPage;
