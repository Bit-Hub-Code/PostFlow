import { Header } from '../Header/Header'
import classes from './postItem.module.scss'
import { apiConfig } from '../../api/api'
import { useEffect, useState } from 'react'
import type { Post } from '../../types/types'
import { useParams } from 'react-router-dom'

export const PostItem = () => {
    const [post, setPost] = useState<Post>()
    const { getPost } = apiConfig
    const { id } = useParams()

    useEffect(() => {
        getPost(id!)
            .then(res => setPost(res.data))
    }, [])

    return (
        <div className={classes.postItem}>
            <Header />
            <div className={classes.container}>
                <span>
                    <p>id:</p>
                    <p className={classes.text}>{post?.id}</p>
                </span>
                <span>
                    <p>body:</p>
                    <p className={classes.text}>{post?.body}</p>
                </span>
                <span>
                    <p>reaction:</p>
                    <p className={classes.text}>{post?.reactions.dislikes} and {post?.reactions.likes}</p>
                </span>
                <span>
                    <p>tags:</p>
                    <p className={classes.text}>{post?.tags}</p>
                </span>
                <span>
                    <p>title:</p>
                    <p className={classes.text}>{post?.title}</p>
                </span>
                <span>
                    <p>userId:</p>
                    <p className={classes.text}>{post?.userId}</p>
                </span>
                <span>
                    <p>viewa:</p>
                    <p className={classes.text}>{post?.viewa}</p>
                </span>
            </div>
        </div>
    )
}

