import React, { useState } from 'react';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const ExploreFood = () => {
  const [category, setCategory] = useState('All');
  const [searchText, setSearchText] = useState('');
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="d-flex gap-2 mb-3">
                <select className='form-select' style={{ maxWidth: '150px' }} onChange={(e) => setCategory(e.target.value)}>
                  <option value="All" >All</option>
                  <option value="Briyani">Briyani</option>
                  <option value="Buger">Buger</option>
                  <option value="Cake">Cake</option>
                  <option value="Ice cream">Ice cream</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Salad">Salad</option>
                </select>
                <input
                  type="text"
                  className='form-control'
                  placeholder="Search your favorite dish....."
                  onChange={(e) => setSearchText(e.target.value)} value={searchText}
                />
                <button className='btn btn-primary' type='submit'>
                  <i className='bi bi-search'></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FoodDisplay category={category} searchText={searchText}/>
    </>
  )
}

export default ExploreFood;