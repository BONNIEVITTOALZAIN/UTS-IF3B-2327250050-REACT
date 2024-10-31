import React, {Suspense} from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import Create from './component/reservasi/Create'
import Listrev from './component/reservasi/List'


function App() {

  return (
    <>
       <Router>
      <nav className="navbar navbar-expand-lg bg-body-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Bookingin aja</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
               </button>
         <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className={({isActive}) =>
                `nav-link ${isActive ? "active" : " "}` 
              } to="/reservasi">Reservasi</NavLink>
            </li>
      </ul>
    </div>
  </div>
</nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/reservasi" element={<Listrev/>} />
          <Route path="/reservasi/create" element={<Create/>} />
        </Routes>
      </Suspense>
    </Router>
    </>
  )
}

export default App
