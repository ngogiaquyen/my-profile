import FormGroup from '../FormGroup';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';

const cx = classNames.bind(styles);

function ProjectForm({ key, titleBtn = 'Submit', data = {}, handleSubmit = () => {}, fileInputRef }) {
  return (
    <form className={cx('create-post')} key={key} encType="multipart/form-data" onSubmit={handleSubmit}>
      <FormGroup title="Tên dự án" name="name" value={data?.name} placeholder="Title" />
      <FormGroup title="Mô tả" name="descriptions" value={data?.descriptions} type="textarea" />
      <FormGroup title="Github" name="github_link" value={data?.github_link} type="textarea" />
      <FormGroup title="Nội dung chi tiết" name="content" value={data?.content} type="textarea" />
      <FormGroup type="file" name="img" value={data?.img} accept="image/*" ref={fileInputRef} />
      <button type="submit">{titleBtn}</button>
    </form>
  );
}

export default ProjectForm;
