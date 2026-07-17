import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar'
import Menubar from './Components/Menubar/Menubar';
import AddFood from './pages/AddFood/AddFood';
import ListsFood from './pages/ListsFood/ListFood';
import Orders from './pages/Orders/Orders';



const App = () => {

  const [sidebarVisible, setSidebarVisible] = useState(true);

  const togglesidebar = () => {
      setSidebarVisible(!sidebarVisible);
    }

  return (
    

    <div className="d-flex" id="wrapper">            
        <Sidebar sidebarVisible={sidebarVisible}/>            
      <div id="page-content-wrapper">               
        <Menubar togglesidebar={togglesidebar}/>        
          <div className="container-fluid">
                    <Routes>
                      <Route path='/add' element={<AddFood/>}/> 
                      <Route path='/List' element={<ListsFood/>} />
                      <Route path='/Orders' element={<Orders/>} />
                      <Route path='/List' element={<ListsFood/>} />
                    </Routes>
                </div>
            </div>
        </div>
  )
}

export default App