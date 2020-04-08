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
  const [ number, setNumber ] = useState(6);

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

//https://reactjs.org/docs/forms.html

  return (
    // add button, input, generate as many images as input
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          How many images?
          <input type="number" value={number} onChange={this.handleChange} />
        </label>
          <input type="submit" value="Submit" />
      </form>
      <div className="Gallery">
        {GenerateImages({number})}
      </div>
    </div>
  )
}

export default Gallery

