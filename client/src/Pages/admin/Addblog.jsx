import React, { useState,useRef, useEffect } from 'react';
import { assets, blogCategories } from "../../assets/assets";
import Quill from 'quill';
import {useAppContext} from "../../../context/AppContext";
import {toast} from "react-hot-toast";

const Addblog = () => {

const {axios}=useAppContext();

const [isAdding,setIsAdding]=useState(false);

const [image,setImage]=useState(false); //Storing state of loaded images
const [title,setTitle]=useState('');
const [subtitle,setSubtitle]=useState('');
const [category,setCategory]=useState('Startup');
const [isPublished,setisPublished]=useState(false);

const fileInputRef = useRef(null);
const editorRef =useRef(null);
const quillRef=useRef(null);

const generateContent= async()=>{

}
  

const onRemoveImage =() => {
    setImage(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

const onSubmitHandler =async(e)=>{
  try{
 e.preventDefault();
 setIsAdding(true)

 const blog ={
  title,subtitle,
  description:quillRef.current.root.innerHTML,
  category,isPublished

 }
 const formData=new FormData();
 formData.append('blog',JSON.stringify(blog));
 formData.append('image',image);

 const {data}=await axios.post(`/api/blog/add`,formData);
 if(data.sucess){
  toast.success(data.message);
  setImage(false);
  setTitle('');
  quillRef.current.root.innerHTML='';
  setCategory('Startup')
 }
 else{
  toast.error(data.message);
 }
  }
  catch(error){
toast.error(error.message);
  }
  finally{
    setIsAdding(false);
  }
}


useEffect( ()=>{
//Initiate quill only once
if(!quillRef.current && editorRef.current){
  quillRef.current= new Quill(editorRef.current,{theme:'snow'})
}

},[])


  return (
    <form action="" onSubmit={onSubmitHandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
<div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded'>
  <p>Upload Thumbnail</p>
  <label htmlFor="image">
    <img src={!image? assets.upload_area:URL.createObjectURL(image)} alt="" className='mt-2 h-16 rounded cursor-pointer' />
    <input type="file" id="image" hidden required onChange={(e)=>setImage(e.target.files[0])} ref={fileInputRef}/>  {/* To take file as an input */}
  </label>

{image && (
  <button
    className='bg-red-400 mt-4 w-30 p-1 rounded cursor-pointer'
    onClick={onRemoveImage}
    type='button'
  >
    Remove
  </button>
)}

  <p className='mt-4'>Blog Title</p>
  <input type="text" placeholder='Type Here ' required  className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none ' onChange={(e)=>setTitle(e.target.value)} value={title}/>

  <p className='mt-4'>Sub Title</p>
  <input type="text" placeholder='Type Here ' required  className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none ' onChange={(e)=>setSubtitle(e.target.value)} value={subtitle}/>

  <p className='mt-4'>Blog Description</p>
  <div className='max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative'>
    <div ref={editorRef}></div>
    <button className='absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer' type='button' onClick={generateContent}>Generate with AI</button>
  </div>

  <p className='mt-4'>Blog Category</p>
  <select name="Category" id="" className='outline-none rounded border-gray-300 mt-2 px-3 py-2 border' onChange={e=>setCategory(e.target.value)}>
    <option value="" disabled>Select Category</option>
    {
      blogCategories.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
      })
    }
  </select>

<div className='flex gap-2 mt-4'>
  <p>Publish Now</p>
  <input type="checkbox" className='scale-125 cursor-pointer' checked={isPublished} onChange={e=>setisPublished(e.target.checked)} />
</div>

<button disabled={isAdding} type='submit' className='mt-8 w-40 h-10 bg-green-600 text-white rounded cursor-pointer text-sm'>{isAdding ? 'Adding ..': 'Add Blog'}</button>

</div>
    </form>
  )
}

export default Addblog;
