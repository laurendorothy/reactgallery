import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'

/* */
function GenerateImage(imageNumber) {
  for (let i = 0; i < imageNumber ; i += 1) {
    <Image image={`https://picsum.photos/200/300=random${i}`} />
  }
}

const Gallery = props => {
  return (
    <div>
      {GenerateImage(3)}
    </div>
  )
}

export default Gallery

