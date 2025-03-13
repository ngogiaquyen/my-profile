import React from "react";
import styles from "./PostList.module.scss"; // Sử dụng CSS Modules
import classNames from "classnames/bind";
import PostItem from "./PostItem";

const cx = classNames.bind(styles);

function PostList({ title="Bài viết", type="row", posts = [] }) {
  console.log(posts)
  return (
    <div className={cx("post-container")}>
      <h2 className={cx('title')}>{title}</h2>
      <div className={cx("post-list", {col: type === "col"})}>
        {posts && posts.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export default PostList;
