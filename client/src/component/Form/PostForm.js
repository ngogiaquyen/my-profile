import FormGroup from '../FormGroup';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';

const cx = classNames.bind(styles);

function PostForm({ key, titleBtn = 'Submit', data = {}, handleSubmit = () => {}, fileInputRef }) {
  return (
    <form className={cx('create-post')} key={key} encType="multipart/form-data" onSubmit={handleSubmit}>
      <FormGroup title="Title" name="title" value={data?.title} placeholder="Title" />
      <FormGroup title="Content" name="content" value={data?.content} type="textarea" />
      <FormGroup type="file" name="img" value={data?.img} accept="image/*" ref={fileInputRef} />
      <button type="submit">{titleBtn}</button>
    </form>
  );
}

export default PostForm;
