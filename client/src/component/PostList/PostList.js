import React, { useState } from "react";
import styles from "./PostList.module.scss"; // Sử dụng CSS Modules
import classNames from "classnames/bind";
import Comment from "../Comment";
import PostItem from "./PostItem";

const cx = classNames.bind(styles);

function PostList({ title="Bài viết", type="row", posts }) {
  return (
    <div className={cx("post-container")}>
      <h2 className={cx('title')}>{title}</h2>
      <div className={cx("post-list", {col: type === "col"})}>
        {posts.map((post) => (
          <PostItem post={post} />
        ))}
      </div>
    </div>
  );
}

export default PostList;
