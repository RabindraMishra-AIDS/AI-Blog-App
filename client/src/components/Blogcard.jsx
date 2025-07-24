import React from 'react'
import {} from "../assets/assets"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Blogcard = ({blog}) => {

    const {title,description,category,image}=blog;
    const navigate=useNavigate();
  return (
    <Link to={`/blog/${blog._id}`}>
    <div onClick={()=>navigate(`/blog/:id`)} className='w-full rounded-lg overflow-hiddenshadow hover:scale-102 hover:shadow-green/25 duration-300 cursor-pointer'>
      <img src={image} alt="" className='aspect-video' />
      <span className='ml-5 mt-4 px-3 py-1 inline-block bg-primary/25 rounded-full text-primary text-xs'>{category}</span>
      <div className='p-5'>
        <h5 className='mb-2 font-medium text-gray-900'>{title}</h5>
        <p className='mb-3 text-xs text-gray-600' dangerouslySetInnerHTML={{"__html":description.slice(0,80)}}></p>
      </div>
    </div>
    </Link>
  )
}

export default Blogcard
