import { useEffect, useState } from "react"
import classes from "./feed.module.scss"
import { Post } from "../Post/Post"
import { AddList } from "../AddPost/AddPost"
import type { Post as PostType } from "../../types/types"
import { apiConfig } from "../../api/api"

export default () => {
  const [posts, setPosts] = useState<PostType[]>([])

  const { getData } = apiConfig

  useEffect(() => {
    getData()
      .then(res => setPosts(res.data.posts))
  }, [])

  return (
    <div className={classes.feed}>
      <AddList setPosts={setPosts} />
      {posts.map((post: PostType) => (
        <Post key={post.id} post={post} setPosts={setPosts}/>
      ))}
    </div>
  )
}
