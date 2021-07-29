import React from 'react';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, PinterestShareButton, PinterestIcon} from 'react-share';

export default (props) => (
  <div id="body-overview-share">
    <div id="col-1"></div>
    <div id="col-2">
      <FacebookShareButton url={'http://127.0.0.1:8000/client/dist/'} quote="LOVE this! Check out what I found" hashtag="#nameofstore">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </svg>
      </FacebookShareButton>
    </div>

    <div id="col-3">
      <TwitterShareButton title="LOVE this! Check out what I found" hashtags={['nameofstore']} className="twitter" url={'http://127.0.0.1:8000/client/dist/'} >
        <TwitterIcon size={40} round={true} iconFillColor="black" bgStyle={{ fill: 'white' }} />
      </TwitterShareButton>
    </div>

    <div id="col-4">
      <PinterestShareButton url={'http://127.0.0.1:8000/client/dist/'} media={'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'} description="LOVE this! Check out what I found" id="pinterest">
        <PinterestIcon size={40} round={true} iconFillColor="black" bgStyle={{ fill: 'white' }}/>
      </PinterestShareButton>
    </div>

    <div id="col-5"></div>

  </div>
);