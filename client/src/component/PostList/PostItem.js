import React, { useState } from "react";
import styles from "./PostList.module.scss"; // Sử dụng CSS Modules
import classNames from "classnames/bind";
import Comment from "../Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import Button from "../Button/Button";

const cx = classNames.bind(styles);

function PostItem({ post }) {
  const handleLike = () => {};
  const handleComment = () => {};
  return (
    <div key={post.id} className={cx("post")}>
      <h2 className={cx("post-title")}>{post.title}</h2>
      <p className={cx("post-content")}>{post.content}</p>

      {post.image && (
        <div className={cx("post-image-wrapper")}>
          <img src={post.image} alt="Post" className={cx("post-image")} />
        </div>
      )}

      <p className={cx("post-meta")}>
        <p>
          <em>
            <FontAwesomeIcon className={cx("icon")} icon={faHeart} />
            <span className={cx("text")}>97</span>
          </em>
          <em className={cx("comment")}>
            <FontAwesomeIcon className={cx("icon")} icon={faComment} />
            <span className={cx("text")}>31.120</span>
          </em>
        </p>
        <em>
          Posted by <span className={cx("post-author")}>{post.author}</span> on{" "}
          {new Date(post.date).toLocaleDateString()}
        </em>
      </p>

      {/* <div className={cx("post-actions")}>
        <button
          className={cx("btn", "like-btn")}
          onClick={() => handleLike(post.id)}
        >
          <FontAwesomeIcon className={cx("icon")} icon={faHeart} />
          Like
        </button>
        <button
          className={cx("btn", "comment-btn")}
          onClick={() => handleComment(post.id)}
        >
          💬 Comment
        </button>
        </div> */}
      {/* <Comment /> */}
        {/* <Button>
          Comment
        </Button> */}
    </div>
  );
}

export default PostItem;
