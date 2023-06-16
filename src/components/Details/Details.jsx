import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


export default function Details() {

  let { id } = useParams()

  const [details, setDetails] = useState({})



  async function getDetails() {
    let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    console.log(data.meals[0]);
    setDetails(data.meals[0])
  }

  useEffect(() => {

    getDetails()

  }, [])

  return <>

    <div className="row py-3">

      <div className="col-md-4">
        <img src={details.strMealThumb} className='w-100 rounded-3' alt="" />
        <h3 className='py-2'>{details.strMeal}</h3>
        <Link to={'/'} className='btn btn-warning w-100'>back to home</Link>
      </div>

      <div className="col-md-8">


        <div className="instructions">
        <h2>Instructions</h2>
        <p>{details.strInstructions}</p>
        </div>

        <div className=''>
          <h3>Area : <span>{details.strArea}</span></h3>
        </div>

        <div>
          <h3>category :<span>{details.strCategory}</span> </h3>
        </div>


        {/* //recipes */}
        <div>
          

        </div>
{/* tags */}

        <div>
          <h3>Tags :</h3>
          <span className='btn btn-primary m-2'>{details.strTags}</span>

          <div className=''>

            <Link className='btn btn-success mx-2' to={details.strSource}>Source</Link>

            <Link className='btn btn-danger' to={details.strYoutube}>youtube</Link>

          </div>

        </div>


      </div>

    </div>
  </>
}
