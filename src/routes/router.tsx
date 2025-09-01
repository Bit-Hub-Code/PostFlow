import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import { PostItem } from "../components/PostItem/PostItem.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/post/:id',
        element: <PostItem />
    }
])