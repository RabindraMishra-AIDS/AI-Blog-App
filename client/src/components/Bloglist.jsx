import React, { useState, useMemo } from 'react'
import { blog_data, blogCategories } from "../assets/assets";
import { motion } from "framer-motion";
import Blogcard from './Blogcard';

const Bloglist = () => {
  const [menu, setMenu] = useState("All");

  // Memoize the random selection so it doesn't reshuffle on every render
  const filteredBlogs = useMemo(() => {
    return blog_data
      .filter((blog) => menu === "All" ? true : blog.category === menu)
      .sort(() => Math.random() - 0.5)
      .slice(0, 60);
  }, [menu]);

  return (
    <div>
      {/* Category Buttons */}
      <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
        {blogCategories.map((cat) => (
          <div key={cat} className='relative'>
            <button
              onClick={() => setMenu(cat)}
              className={`cursor-pointer text-gray-500 ${menu === cat && 'text-white px-4 pt-0.5'}`}>
              {cat}
              {cat === menu && (
                <motion.div
                  layoutId='underline'
                  transition={{ damping: 30, type: 'spring', stiffness: 500 }}
                  className='absolute left-0 right-0 top-0 h-7 -z-1 bg-amber-600 rounded-full'></motion.div>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Blog Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
        {filteredBlogs.map((blog) => (
          <Blogcard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  )
}

export default Bloglist;
