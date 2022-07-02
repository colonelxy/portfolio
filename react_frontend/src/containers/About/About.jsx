import React, { useState, useEffect }from 'react';
import { motion } from "framer-motion";

import { images } from '../../constants';
import './About.scss';
import { urlFor, client } from '../../client';

// const abouts = [
//   { title: 'Web3 Development', description: 'I am good at Web3 development.', imgUrl: images.aboutWeb3},
//   { title: 'AWS Solutions Architect', description: 'I solve cloud architecting problems.', imgUrl: images.aboutAwsSolutions},
//   { title: 'Blockchain Development', description: 'I eat Smart Contracts for breakfast.', imgUrl: images.aboutSmartContracts}
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type =="abouts"]';

    client.fetch(query)
    .then((data) => setAbouts(data))

  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Dev</span> <br /> means <span>Good Biz</span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
          whileInView={{ opacity: 1}}
          whileHover={{scale:1.1}}
          transition={{ duration: 0.5, type: 'tween'}}
          className='app__profile-item'
          key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title}/>
            <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop: 10}}>{about.description}</p>

          </motion.div>
        ))}

      </div>
    </>
  )
}

export default About