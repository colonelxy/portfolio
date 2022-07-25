import React from 'react';
import { BsTwitter} from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter />
        </div>
        <div>
            <FaLinkedinIn/>
        </div>
        <div>
            <FaFacebookF />
        </div>
    </div>
  )
};

export default SocialMedia;