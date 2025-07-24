import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Layout from './Pages/admin/Layout';
import Addblog from './Pages/admin/Addblog';
import Listblog from './Pages/admin/Listblog';
import Comment from './Pages/admin/Comment';
import Dashboard from './Pages/admin/Dashboard';
import Login from './components/admin/Login';
import 'quill/dist/quill.snow.css';
import {Toaster} from 'react-hot-toast';
import { useAppContext } from '../context/AppContext';


const App = () => {

  const  {token} = useAppContext();
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog/:id' element={<Blog/>} />
        <Route path='/admin' element={token ?<Layout/>: <Login/>}>{/* Writing routing technique */}
        <Route index element={<Dashboard/>}/>
        <Route path='addBlog' element={<Addblog/>}/>
        <Route path='comments' element={<Comment/>}/>
        <Route path='listBlog' element={<Listblog/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
