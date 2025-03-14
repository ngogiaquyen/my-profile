import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from "./Projects.module.scss";
// import image from '~/assets/image.png';
import ProjectList from '~/component/ProjectItem/ProjectList';
import { getData, postData } from '~/helper/apiService';
import { ModalOverLayContext } from '~/component/Context/ModalOverLayProvider';
import ConfirmModal from '~/component/ConfirmModal';

const cx = classNames.bind(styles);

function Projects() {
  const [projects, setProjects] = useState([]);
  const { setModalComponentContent } = useContext(ModalOverLayContext);

  const loadData = async () => {
    const data = await getData('/projects/read');
    console.log(data);
    if (data.length > 0) {
      setProjects(data);
    }
  };

  const handleRemoveProject = async (id) => {
    const formData = new FormData();
    formData.append('id', id);
    const res = await postData('/projects/delete', formData);
    console.log(res);
    if (res.status === 'success') {
      loadData();
      setModalComponentContent(null);
    }
  };

  const handleShowConfirm = (e, id) => {
    e.preventDefault();
    setModalComponentContent(
      <ConfirmModal
        title="Xác nhận xóa"
        handleConfirm={() => handleRemoveProject(id)}
        handleCancel={() => setModalComponentContent(null)}
      />,
    );
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={cx("project-container")}>
      <ProjectList data={projects} handleRemove={handleShowConfirm} />
    </div>
  );
}

export default Projects;
