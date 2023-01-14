import React from 'react'
import { Carousel } from 'react-bootstrap'
import Simple from "./Simple.css"

function BoostrapCarouse() {
  return (
    <div>
      <div className='m'>
        <Carousel>
      <Carousel.Item className='manage' >
        <img
          className="d-block w-100" 
          src="image-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='manage'>
        <img
          className="d-block w-100" 
          src="image-2.jpg"
          alt="Second slide"
        />
{/* interval={500} */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='manage'>
        <img
          className="d-block w-100"
          src="image-3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  )
}

export default BoostrapCarouse;