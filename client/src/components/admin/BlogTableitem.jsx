import React from 'react'
import { assets } from '../../assets/assets';
import { useAppContext } from '../../../context/AppContext';
import {toast} from "react-hot-toast";

const BlogTableitem = ({blog,fetchBlogs,index}) => {
    const {title,createdAt}=blog;
    const BlogDate=new Date(createdAt); //This will Create a Date

    const {axios}=useAppContext();

    const deleteBlog = async ()=>{
      const confirm = window.confirm('Want to Delete this Blog?')
      if(!confirm) return;
      try {
        const {data} = await axios.post('/api/blog/delete',{id:blog._id})
        if(data.sucess){
          toast.success(data.message);
          await fetchBlogs();
        }
        else{
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }

const togglePublish = async()=>{
  const {data}=await axios.post('/api/blog/toggle-publish',{id:blog._id});
  try{
  if(data.sucess){
          toast.success(data.message);
          await fetchBlogs();
        }
        else{
          toast.error(data.message);
        }
      }
      catch(error){
        toast.error(error.message);
      }
}
  return (
    <tr className='border-y border-gray-300'>
      <th className='px-2 py-4'>{index}</th>
      <td className='px-2 py-4'>{title}</td>
      <td className='px-2 py-4 max-sm:hidden'>{BlogDate.toLocaleString()}</td>
      <td className='px-2 py-4 max-sm:hidden'><p className={`${blog.isPublished?"text-green-500":"text-red-500"}`}> {blog.isPublished?'Published':'Not Published'}</p></td>
      <td className='px-2 py-4 flex text-xs gap-3'>
        <button onClick={togglePublish} className='border px-2 py-0.5 mt-1 rounded cursor-pointer'>{blog.isPublished?'Unpublish':'Publish'}</button>
        <img src={assets.cross_icon} alt="" className='w-8 hover:scale-110 transition-all cursor-pointer' onClick={deleteBlog} />
      </td>

    </tr>
  )
}

export default BlogTableitem
