import React, { Component } from 'react'
import Navbar from './components/navbar'
import NewsComponent from './components/NewsComponent'
import Loading from './components/loading'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
 
    return (

      <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<NewsComponent key={"general"} pageSize={9} country={"in"} category="general" />} />
            <Route path="/about" element={<NewsComponent key={"general"} pageSize={9} country={"in"} category="general" />} />
            <Route path="/business" element={<NewsComponent key={"business"} pageSize={9} country={"in"} category="business" />} />
            <Route path="/entertainment" element={<NewsComponent key={"entertainment"} pageSize={9} country={"in"} category="entertainment" />} />
            <Route path="/general" element={<NewsComponent key={"general"} pageSize={9} country={"in"} category="general" />} />
            <Route path="/health" element={<NewsComponent key={"health"} pageSize={9} country={"in"} category="health" />} />
            <Route path="/science" element={<NewsComponent key={"science"} pageSize={9} country={"in"} category="science" />} />
            <Route path="/sports" element={<NewsComponent key={"sports"} pageSize={9} country={"in"} category="sports" />} />
            <Route path="/technology" element={<NewsComponent key={"technology"} pageSize={9} country={"in"} category="technology" />} />


          </Routes>
      </div>


    )
  
}

