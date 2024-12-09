import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.jsx'
import { AuthLayout } from './conponents/index.js'

import Login from './pages/Login.jsx'
import AddPost from "./pages/AddPost.jsx"
import Signup from './pages/signup.jsx'
import EditPost from './pages/editpost.jsx'
import Post from './pages/Post.jsx'
import AllPosts from './pages/AllPosts.jsx'
const router= createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:"/login",
        element:(
          <AuthLayout authentication={false}>
            <Login/>
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
            <AuthLayout authentication={false}>
                <Signup />
            </AuthLayout>
        ),
    },
    {
        path: "/all-posts",
        element: (
            <AuthLayout authentication>
                {" "}
                <AllPosts />
            </AuthLayout>
        ),
    },
    {
        path: "/add-post",
        element: (
            <AuthLayout authentication>
                {" "}
                <AddPost />
            </AuthLayout>
        ),
    },
    {
        path: "/edit-post/:slug",
        element: (
            <AuthLayout authentication>
                {" "}
                <EditPost />
            </AuthLayout>
        ),
    },
    {
        path: "/post/:slug",
        element: <Post />,
    },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)