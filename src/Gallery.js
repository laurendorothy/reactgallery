import React, {useState} from 'react'
import Image from './Image'
import {useInput} from './hooks/customHooks.js'

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

function Gallery() {
  const [ number, setNumber ] = useState(6);
  const { value, bind, reset } = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting Name ${value}`);
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
            {...bind}
            // value={number} 
            // onChange={(event) => setNumber(event.target.value)} 
            />
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

