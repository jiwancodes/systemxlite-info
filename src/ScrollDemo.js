import React, { Component, useRef, useEffect } from 'react';


 const ScrollDemo = (props) => {

  return (
    <>
      {' '}
      {/* React.Fragment*/}
      <div style={{ height: 600 }} /> {/* just to demonstrate scroll*/}
      <div ref={props.myRef}>I wanna be seen</div>
      {/* Attach ref object to a dom element */}
      <div style={{ height: 1500 }} /> {/* just to demonstrate scroll*/}
      <button onClick={props.executeScroll}>Click to scroll </button>
      {/* Scroll on click */}
    </>
  );
};
export default ScrollDemo;
