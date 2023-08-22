import React from 'react'
import ImageShow from "./ImageShow"

const ImageList = (props) => {
  const { images } = props;

  const renderImages = (
    images.map((img, idx) => {
      const { alt_description, urls } = img;
      const { small } = urls;
      return (
        <div
          className='rounded img-fluid p-5 icon-link icon-link-hover'
          style={{
            border: "3px solid green",
            margin: "20px",
          }}
        >
          <ImageShow key={img.id} alt={alt_description} src={small} />
        </div>
      )
    })
  )

  return (
    <div
      style={{
        width: "100%",
        columns: "2",
        margin: "20px",
      }}>
      {renderImages}
    </div >
  )
}

export default ImageList
