import React from 'react'

const Pages = ({step,textSt,img,ttt,pp}) => {
  return (
    <>
      <div id="step1">
        <p><span>{step}:</span>{textSt}<br />
          {ttt}</p>
        <div id="body">
          <img id={pp} src={img} alt="" />
        </div>
        </div>
      </>
      )
}

      export default Pages