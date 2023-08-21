import React from 'react'

const ImageShow = (props) => {
  const { alt, src } = props;
  return (
    <div>
      <img src={src}></img>
    </div>
  )
}

export default ImageShow