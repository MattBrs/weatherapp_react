import { useState } from 'react'
import './Dashboard.css'

function Dashboard({place}){
  const [count, setCount] = useState(0)


  return (
    <>
      <div className="card">
        <h2>This is where i'll put chart.js charts with openweathermap data</h2>
        <h3>It's basically a dashboard :)</h3>
        <p>Work in progress. You are searching: {place}</p>
      </div>
    </>
  )
}

export default Dashboard
