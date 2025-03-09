import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import FormGroup from '../FormGroup';

const cx = classNames.bind(styles);

function CvForm({ keyForm = 1, titleBtn = 'Cập nhật', handleSubmit, data, fileInputRef }) {
  return (
    <form className={cx('create-post')} key={keyForm} encType="multipart/form-data" onSubmit={handleSubmit}>
      <FormGroup type="file" name="avatar" value={data?.avatar} accept="image/*" ref={fileInputRef} />
      <FormGroup title="Họ và tên" name="name" value={data?.name} placeholder="Họ và tên" />
      <FormGroup title="Job position" name="job_position" value={data?.job_position} type="textarea" />
      <FormGroup title="Information" name="information" value={data?.information} type="table" row={1} col={2} />
      <FormGroup title="Language" name="language" value={data?.language} type="textarea" />
      <FormGroup title="skills" name="skills" value={data?.skills} type="textarea" />
      <FormGroup title="knowledge" name="knowledge" value={data?.knowledge} type="textarea" />
      <FormGroup title="Target" name="target" value={data?.target} type="textarea" />
      <FormGroup title="Education" name="education" value={data?.education} type="textarea" />
      <FormGroup title="githublink" name="githublink" value={data?.githublink} placeholder="githublink" />
      <button type="submit">{titleBtn}</button>
    </form>
  );
}

export default CvForm;

// id
// education
// githublink
// job_position
// knowledge
// language
// skills
// target
