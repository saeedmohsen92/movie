import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';
import style from './Category.module.css'
import { Link } from 'react-router-dom';


export default function Category() {
const [categories, setCategories] = useState([])

async function getAllCategories()
{
  let {data} = await axios(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  console.log(data.categories);
  setCategories(data.categories)
}

useEffect(()=>{
getAllCategories()
}
,[])



  return <>

      {!categories.length ? (<Loading/>):(

           
  <div className="container">
  <div className="row">
    {categories.map((category ,index )=>


<div key={index} className="col-md-3 gy-4">
<Link to={`/categoryDetails/${category.strCategory}`} >
<div className={`${style.inner} position-relative rounded-3 overflow-hidden`}>
  <img src={category.strCategoryThumb} className='w-100' alt="mealtitle" />
  <div className='layer w-100 h-100 text-dark position-absolute start-0 d-flex align-items-center'>
    <h3>{category.strCategory}</h3>
  </div>
</div>
</Link>
</div>



    )}
    
  </div>
</div>

      
      )}





  </>
}
