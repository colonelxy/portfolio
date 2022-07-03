import React, {useState, useEffect} from 'react';
import { AIFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animatedCard, setAnimatedCard] = useState({ y:0, opacity: 1});
  const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWorks(data);
      })
    }, [])
  


  const handleWorkFilter = (item) => {

  }
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span>Section 
      </h2>

      <div className='app__work-filter'>
        {['Web3 Apps', 'UI/UX', 'Web App', 'Mobile App', 'AWS Cloud Solutions', 'All'].map((item, index) => (
          <div
          key={index}
          onClick={() => handleWorkFilter(item)}
          className ={`app__work-filter-item app__flex p-text ${activeFilter ===item ? 'item-active' : ''}`}
        >
            {item}

        </div>

        ))}
      </div>
      <motion.div
        animate={animatedCard}
        transition={{ duration: 0.5, delayChildren:0.5}}
        className='app__work-portfolio'
      >
        {filterWorks.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={urlFor(work.imgUrl)} alt={work.name}/>

            </div>

          </div>
        ))}



      </motion.div>
    </>
  )
}

export default Work;