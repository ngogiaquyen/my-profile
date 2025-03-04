import React, { useState } from "react";
import styles from "./PostList.module.scss"; // Sử dụng CSS Modules
import classNames from "classnames/bind";
import Comment from "../Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import routes from "~/configs";

const cx = classNames.bind(styles);

function PostItem({ post }) {
  const handleLike = () => {};
  const handleComment = () => {};
  return (
    <NavLink to={routes.postDetail} key={post.id} className={cx("post")}>
      <h2 className={cx("post-title")}>{post.title}</h2>
      <p className={cx("post-content")}>{post.content}</p>

      {post.image && (
        <div className={cx("post-image-wrapper")}>
          <img src={post.image} alt="Post" className={cx("post-image")} />
        </div>
      )}

      <p className={cx("post-meta")}>
        <p className={cx("post-meta-box")}> 
          <p className={cx("comment-box")}>
            <FontAwesomeIcon className={cx("icon")} icon={faHeart} />
            <span className={cx("text")}>97</span>
          </p>
          <p className={cx("comment-box")}>
            <FontAwesomeIcon className={cx("icon")} icon={faComment} />
            <span className={cx("text")}>31.120</span>
          </p>
        </p>
        <p className={cx("post-more")}>
          Posted by <span className={cx("post-author")}>{post.author}</span> on{" "}
          {new Date(post.date).toLocaleDateString()}
        </p>
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
    </NavLink>
  );
}

export default PostItem;
