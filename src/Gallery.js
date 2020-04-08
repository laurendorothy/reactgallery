import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'

/* */
function GenerateImages(imageNumber) {
  const images = [];
  for (let i = 0; i < imageNumber ; i += 1) {
    images.push(<Image image={`https://picsum.photos/200/300?random=${i}`} key={i} />)
  }
  return images;
}

const Gallery = props => {
  return (
    // add button, input, generate as many images as input
    <div className="Gallery">
      {GenerateImages(3)}
    </div>
  )
}

export default Gallery

