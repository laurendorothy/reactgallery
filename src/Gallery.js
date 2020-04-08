import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'

/* https://picsum.photos/200/300 */



const Gallery = props => {
  fetch('https://picsum.photos/200/300?random=1')
    .then(res => res.json())
    .then(

  return (
    <div>
      <Image />
    </div>
  )
}

Gallery.propTypes = {

}

export default Gallery

