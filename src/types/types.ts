export interface Post {
  body: string;
  id: number;
  reactions: {
    dislikes: number;
    likes: number;
  };
  tags: string[];
  title: string;
  userId: number;
  viewa: number;
}

export interface Props {
  post?: Post;
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export interface PostResponse {
    posts: Post[];
    total: number;
    skip: number;
    limit: number;
}