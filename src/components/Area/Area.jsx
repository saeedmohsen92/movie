import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

export default function Area() {
const [mealsOfArea, setmealsOfArea] = useState([])

  async function allAreas()
  {
    let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`) 
    console.log(data.meals);
    setmealsOfArea(data.meals)
  }

  useEffect(() => {

    allAreas()
  
   
  }, [])
  
  return<>
  {!mealsOfArea.length ? (<Loading/>):(  <div className="container m-5">
    <div className="row">

      
  {mealsOfArea.map((country ,index)=>
     <div key={index}  className="col-md-3 text-cener py-3">
      <Link to={`/areaDetails/${country.strArea}`}>
      <i className="fa-solid fa-mountain-sun icon-size"></i>
      <h2 className='py-2'>{country.strArea}</h2>
      </Link> 
      </div>
      
    )}

    
    </div>
  </div>)}

  













 </>
}


