import React from 'react';

const ClickTracker = (props) => {
  const handleInteraction = (e) => {
    console.log('element: ', e.target.localName);
    console.log('time: ', new Date().toLocaleTimeString());
    e.nativeEvent.path.forEach(element => {
      console.log(element.id);
    })
    // console.log(e.nativeEvent.path.slice(0, 5));
  }

  return (
    <div>
      {props.render(handleInteraction)}
    </div>
  )
}

export default ClickTracker;