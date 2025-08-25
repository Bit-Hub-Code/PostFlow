import { type FC } from "react";
import classes from "./post.module.scss";
import type { Props } from "../../types/types";
import { apiConfig } from "../../api/api";

export const Post: FC <Props> = ({ post, setPosts }) => {
  const { removeData } = apiConfig

  const dellItemList = () => {
    if (!post?.id) return;
    removeData(post.id)
    setPosts((prev) => prev.filter((item) => { return item.id !== post?.id }))
  }

  return (
    <div className={classes.post}>
      <h1>{post?.title}</h1>
      <button onClick={dellItemList}>Dell</button>
    </div>
  );
};
