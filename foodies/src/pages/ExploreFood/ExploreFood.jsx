import React from 'react';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const ExploreFood = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="d-flex gap-2 mb-3">
                <select className='form-select' style={{ maxWidth: '150px' }}>
                  <option value="Briyani">Briyani</option>
                  <option value="Burger">Burger</option>
                  <option value="Cakes">Cakes</option>
                  <option value="Ice Creams">Ice Creams</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Rools">Rools</option>
                  <option value="Salad">Salad</option>
                </select>
                <input
                  type="text"
                  className='form-control'
                  placeholder="Search your favorite dish....."
                />
                <button className='btn btn-primary' type='submit'>
                  <i className='bi bi-search'></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FoodDisplay />
    </>
  )
}

export default ExploreFood;