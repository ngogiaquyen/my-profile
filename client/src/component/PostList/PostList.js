import React, { useState } from "react";
import styles from "./PostList.module.scss"; // Sử dụng CSS Modules
import classNames from "classnames/bind";
import Comment from "../Comment";
import PostItem from "./PostItem";

const cx = classNames.bind(styles);

function PostList({ posts }) {
  return (
    <div className={cx("post-container")}>
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
}

export default PostList;
