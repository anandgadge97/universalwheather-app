import React from 'react'
import {Card} from 'react-bootstrap'

const Data1 = ({data}) => {
  return (
    <Card className='my-3 p-3 rounded bg-blue'>
      <Card.Body>
        <Card.Header class ="fa-sharp fa-regular fa-location-crosshairs">
        <h4 >Location-{data.Location}-{data.State}-{data.Code}</h4>
        </Card.Header>
        <br>
        </br>
        <Card.Title as ="div">
          Year of <strong> {data.Year} </strong>in the month of<strong> {data.Month} </strong>and<strong>{data.Week}</strong> Week 
        </Card.Title>
        <br>
        </br>
        <Card.Footer class ="fa-sharp fa-solid fa-temperature-three-quarters">
         <br></br>
         <br></br>Max temperature<h3>{data.MaxTemp}</h3> Min Temperature <h3> {data.MinTemp}</h3>
        </Card.Footer>
      </Card.Body>  

      </Card>
  )
}

export default Data1

