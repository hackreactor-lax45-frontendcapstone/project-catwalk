import React from 'react';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, PinterestShareButton, PinterestIcon} from 'react-share';

export default (props) => (
  <div id="body-overview-share">
    <div id="col-1"></div>
    <div id="col-2">
      <FacebookShareButton url={'http://127.0.0.1:8000/client/dist/'} quote="LOVE this! Check out what I found" hashtag="#nameofstore" id="facebook">
        <FacebookIcon size={40} round={true} iconFillColor="black" bgStyle={{ fill: 'white' }}/>
      </FacebookShareButton>
      Share
    </div>

    <div id="col-3">
      <TwitterShareButton title="LOVE this! Check out what I found" hashtags={['nameofstore']} id="twitter" url={'http://127.0.0.1:8000/client/dist/'} >
        <TwitterIcon size={40} round={true} iconFillColor="black" bgStyle={{ fill: 'white' }} />
      </TwitterShareButton>
      Tweet
    </div>

    <div id="col-4">
      <PinterestShareButton url={'http://127.0.0.1:8000/client/dist/'} media={'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'} description="LOVE this! Check out what I found" id="pinterest">
        <PinterestIcon size={40} round={true} iconFillColor="black" bgStyle={{ fill: 'white' }}/>
      </PinterestShareButton>
      Pin it
    </div>

    <div id="col-5"></div>

  </div>
);