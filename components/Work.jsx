import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
    const [showPopup, setShowPopup] = useState(false);
    const handleProjectClick = (url) => {
        if (url) {
          window.open(url, '_blank');
        }
      };
      
    const displayedProjects = workData.slice(0, 4);

  return (
    <>
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

        <motion.h4 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className='text-center mb-2 text-lg font-Ovo'>
        My portfolio</motion.h4>

        <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className='text-center text-5xl font-Ovo'>
        My latest work</motion.h2>

        <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</motion.p>

      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
          {displayedProjects.map((project, index)=>(
              <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              key={index}
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
              style={{backgroundImage: `url(${project.bgImage})`}}>
                  <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-300 group-hover:bottom-7'>
                      <div>
                          <h2 className='font-semibold'>{project.title}</h2>
                          <p className='text-sm text-gray-700'>{project.description}</p>
                      </div>
                      <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'
                      onClick={() => handleProjectClick(project.url)}>
                          <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                      </div>
                  </div>
                  
              </motion.div>
          ))}
      </motion.div>

      <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.4 }}
      onClick={() => setShowPopup(true)}
      className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-300 dark:text-white dark:border-white dark:hover:bg-darkHover cursor-pointer'>
          View all projects 
          <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
      </motion.button>

      </motion.div>

      {/* Popup Modal */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4'
          onClick={() => setShowPopup(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className='bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden shadow-2xl'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'>
              <h2 className='text-xl font-semibold text-gray-800 dark:text-white'>All Projects</h2>
              <button
                onClick={() => setShowPopup(false)}
                className='w-8 h-8 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors'
              >
                ×
              </button>
            </div>
            
            <div className='p-4 max-h-[60vh] overflow-y-auto'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {workData.map((project, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className='aspect-square bg-no-repeat bg-cover bg-center rounded-xl relative cursor-pointer overflow-hidden group'
                    style={{ backgroundImage: `url(${project.bgImage})` }}
                  >
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent'></div>
                    <div className='absolute bottom-3 left-3 right-3'>
                      <h3 className='text-white font-medium text-sm mb-1'>{project.title}</h3>
                      <p className='text-white/80 text-xs mb-3 line-clamp-2'>{project.description}</p>
                      <div 
                        className='inline-flex items-center gap-2 bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg group-hover:bg-white transition-colors cursor-pointer'
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProjectClick(project.url);
                        }}
                      >
                        View Project
                        <Image src={assets.send_icon} alt='send icon' className='w-3 h-3'/>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

export default Work
