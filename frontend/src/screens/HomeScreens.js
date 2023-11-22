import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Data1 from '../components/Data1'
import axios from 'axios'
import { useEffect,useState } from 'react'

function HomeScreens() {
   const[Data,setData] = useState([])
   useEffect(()=>{
    async function fetchdata(){
    const{data} = await axios.get('http://127.0.0.1:8000/')
      setData(data)}
      fetchdata()
    },[]
    )
  return (
    <div>

      <h1 className="text-decoration-underline"> Global Whether</h1>
    
      <Row>
        {Data.map(data =>
        (<Col key={data.id} sm={12} md={6} Lg={4} xl={3}>
           <Data1 data= {data}/></Col>
        ))}
      </Row>  
    </div>
  )
}

export default HomeScreens
