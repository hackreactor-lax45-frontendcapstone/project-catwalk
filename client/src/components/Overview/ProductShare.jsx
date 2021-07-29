import React from 'react';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, PinterestShareButton, PinterestIcon} from 'react-share';

export default (props) => (
  <div id="body-overview-share">
    <div id="col-1"></div>
    <div className="icons" id="col-2">
      <FacebookShareButton url={'http://127.0.0.1:8000/client/dist/'} quote="LOVE this! Check out what I found" hashtag="#nameofstore">
        <FacebookIcon id="facebook" size={40} round={true} iconFillColor="#002e2c" bgStyle={{ fill: '#eff1c5' }}
        onMouseEnter={() => {
          let icon = document.querySelector('#facebook');
          icon.children[1].attributes[1].value="#035e7b";
        }}
        onMouseLeave={() => {
          let icon = document.querySelector('#facebook');
          icon.children[1].attributes[1].value="#002e2c";
        }}/>
      </FacebookShareButton>
    </div>

    <div className="icons" id="col-3">
      <TwitterShareButton title="LOVE this! Check out what I found" hashtags={['nameofstore']} url={'http://127.0.0.1:8000/client/dist/'} >
        <TwitterIcon id="twitter" size={40} round={true} iconFillColor="#002e2c" bgStyle={{ fill: '#eff1c5' }}
        onMouseEnter={() => {
          let icon = document.querySelector('#twitter');
          icon.children[1].attributes[1].value="#035e7b";
        }}
        onMouseLeave={() => {
          let icon = document.querySelector('#twitter');
          icon.children[1].attributes[1].value="#002e2c";
        }}/>
      </TwitterShareButton>
    </div>

    <div className="icons" id="col-4">
      <PinterestShareButton url={'http://127.0.0.1:8000/client/dist/'} media={'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'} description="LOVE this! Check out what I found">
        <PinterestIcon id="pinterest" size={40} round={true} iconFillColor="#002e2c" bgStyle={{ fill: '#eff1c5' }}
        onMouseEnter={() => {
          let icon = document.querySelector('#pinterest');
          icon.children[1].attributes[1].value="#035e7b";
        }}
        onMouseLeave={() => {
          let icon = document.querySelector('#pinterest');
          icon.children[1].attributes[1].value="#002e2c";
        }}/>
      </PinterestShareButton>
    </div>

    <div id="col-5"></div>

  </div>
);