import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets';
import BlogTableitem from '../../components/admin/BlogTableitem';
import { useAppContext } from '../../../context/AppContext';
import { data } from 'react-router-dom';
import {toast} from "react-hot-toast";

const Listblog = () => {
  const [blogs,setBlog]=useState([]);
  const {axios}=useAppContext();
  const fetchBlog=async()=>{
    try {
      const {data}=await axios.get('/api/admin/blogs');
      if(data.sucess){
        setBlog(data.blogs);
      }
      else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(()=>{
fetchBlog();
  },[])

  return (
    <div className='flex-1  p-4 md:p-10 bg-amber-100/100'>
      <h1 className='font-semibold mb-4'>All Blogs</h1>
      <div className='relative max-w-4xl h-29/31 shadow rounded-lg scrollbar-hide bg-white mt-5 overflow-x-hidden'>
          <table className='w-full text-sm text-gray-500 overflow-x-'>
            <thead className='text-xs text-gray-600 text-left uppercase'>
              <tr>
                <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
                <th scope='col' className='px-2 py-4 '>Blog Title</th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'>Date</th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'>Status</th>
                <th scope='col' className='px-2 py-4'>Actions</th>
              </tr>
            </thead>


            <tbody>
              {blogs.map((blog,index)=>{
                return <BlogTableitem key={blog._id} blog={blog} fetchBlogs={fetchBlog} index={index+1}/>
              })}
            </tbody>

          </table>

        </div>
      
    </div>
  )
}

export default Listblog
