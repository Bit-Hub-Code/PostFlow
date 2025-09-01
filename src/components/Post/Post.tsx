import { type FC } from "react"
import classes from "./post.module.scss"
import type { Props } from "../../types/types"
import { apiConfig } from "../../api/api"
import { Link } from "react-router-dom"

export const Post: FC <Props> = ({ post, setPosts }) => {
  const { removeData } = apiConfig

  const dellItemList = () => {
    if (!post?.id || !post?.userId) return
    removeData(post.id)
    setPosts((prev) => prev.filter((item) => { return item.id !== post?.id }))
  }

  return (
    <div className={classes.post}>
      <Link to={`/post/${post?.id}`}><h1>{post?.title}</h1></Link>
      <button onClick={dellItemList}>Dell</button>
    </div>
  )
}