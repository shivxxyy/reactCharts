import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Chart from './components/Chart'
import Cards from './components/Cards'
import Sidebar from './components/Sibebar'
import SidebarData from './components/SidebarData'
//import { Chart } from 'react-charts'

function App() {
  
  return (
    <div style={{backgroundColor:'#f2f2f2'}} className="app">
    <Sidebar/>
    <Chart/>
    <Cards/>
   
    </div>
  )
}

export default App;
