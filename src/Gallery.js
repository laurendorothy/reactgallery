import React, {useState} from 'react'
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


// function handleChange(event, setNumber) {
//   setNumber(event.target.value);
// }

function Gallery(props) {
  const [ number, setNumber ] = useState(6);
  // const [ propNumber, setPropNumber ] = useState(number);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting Number ${number}`)
  }

//https://reactjs.org/docs/forms.html

  return (
    // add button, input, generate as many images as input
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          How many images?
          <input 
            type="number" 
            value={number} 
            onChange={(event) => setNumber(event.target.value)} />
        </label>
          <input type="submit" value="Submit" />
      </form>
      <div className="Gallery">
        {console.log('number:', number)}
        {GenerateImages(number)}
      </div>
    </div>
  )
}

export default Gallery

