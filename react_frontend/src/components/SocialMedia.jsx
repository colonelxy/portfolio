import React from 'react';
import { bsTwitter} from 'react-icons/bs';
import { FaFacebookF} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <bsTwitter />
        </div>
        <div>
            {/* <FaLinkedIn/> */}
        </div>
        <div>
            <FaFacebookF />
        </div>
    </div>
  )
}

export default SocialMedia;