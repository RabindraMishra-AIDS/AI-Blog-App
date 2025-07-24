import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";
import Navbar from '../components/Navbar';
import Moment from "moment";
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { useAppContext } from '../../context/AppContext';
import {toast} from "react-hot-toast";

const Blog = () => {
  const { id } = useParams();

  const {axios}=useAppContext();
  const [data, setData] = useState(null);
  const [comment, setComment] = useState([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  //6805ee7dd8f584af5da78d37
//   const fetchBlogData = async () => {
//     try{
//       const {data}=await axios.get(`/api/blog/${id}`);
//       data.sucess ?setData(data.blog):toast.error(data.message);
//     }
//     catch(error){
// toast.error(error.message);
//     }
//   };


const fetchBlogData = async () => {
  try {
    console.log('Fetching blog with ID:', id); // Debug log
    const {data} = await axios.get(`/api/blog/${id}`);
    console.log('API Response:', data); // Debug log
    if (data.sucess) {
      setData(data.blog);
    } else {
      toast.error(data.message);
      setData(false); // Add this to handle failure case
    }
  } catch(error) {
    console.error('Error fetching blog:', error); // Debug log
    toast.error(error.message);
    setData(false); // Add this to handle error case
  }
};




  const fetchComment = async () => {
    try{
      const {data}=await axios.post('/api/blog/comments',{blogId:id})
      if(data.sucess){
        setComment(data.comments);
      }
      else{
        toast.error(data.message)
      }
    }
    catch(error){
toast.error(error.message);
    }
  }
  const addComment = async (e) => {
    e.preventDefault;
  }


  useEffect(() => {
    fetchBlogData();
    fetchComment();
  }, [])
  return data ? (
    <div className='relative'>
      <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50' />
      <Navbar />
      <div className='text-center mt-20 text-gray-600'>
        <p className='text-green py-4 font-medium'>Published on: {Moment(data.createdAT).format('MMMM Do YYYY')}</p>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800'>{data.title}</h1>
        <h2 className='my-5 max-w-lg truncate mx-auto'>{data.subTitle}</h2>
        <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-green/5 font-medium text-green'>Michael Obreion</p>
      </div>


      <div className='mx-5 max-w-5xl md:mx-auto my-10 mt-6'>
        <img src={data.image} alt="" className='rounded-3xl mb-5' />
        <div className='rich-text max-w-3xl mx-auto' dangerouslySetInnerHTML={{ __html: data.description }}></div>

        {/* Comments Section */}
        <div className='mt-14 mb-10 max-w-3xl mx-auto'>
          <p className='font-semibold mb-4'>Comments ({comment.length})</p>
          <div className='flex flex-col gap-4'>
            {comment.map((item, index) => (
              <div key={index} className='relative bg-green/2 border border-green/5 max-w-xl p-4 rounded text-gray-600'>

                <div className='flex items-center gap-2 mb-2'>
                  <img src={assets.user_icon} alt="" className='w-6' />
                  <p className='font-medium'>{item.name}</p>
                </div>
                <p className='text-sm max-w-md ml-8'>{item.content}</p>
                <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>{Moment(item.createdAt).fromNow()}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Comments Form */}
        <div className='max-w-3xl mx-auto'>
          <p className='font-semibold mb-4'>Add your Comments</p>
          <form action="" onSubmit={addComment} className='flex flex-col items-start max-w-lg gap-4'>
            <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} value={name} className='w-full outline-none border border-gray-300 p-2' required />
            <textarea name="" id="" placeholder='Comment' className='w-full h-48 outline-none border border-gray-300 p-2' onChange={(e) => setContent(e.target.value)} value={content} required></textarea>
            <button className='text-white bg-green-500 rounded text-center w-32 cursor-pointer h-8 mb-4' type='submit'>Submit</button>
          </form>
        </div>

        {/* Comments Form */}
        <div className='mx-auto max-w-3xl my-4'>
          <p className='font-semibold max-w-3xl'>Share your Article on Social Media</p>
          <div className='flex'>
            <img src={assets.facebook_icon} alt="facebook"  className='cursor-pointer'/>
            <img src={assets.twitter_icon} alt="twitter" className='cursor-pointer' />
            <img src={assets.googleplus_icon} alt="google_icon" className='cursor-pointer' />
          </div>
        </div>

      </div>
      <Footer/>

    </div>
  ) : <Loader/>
}

export default Blog
