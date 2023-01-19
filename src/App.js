import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [data,setdata]=useState([]);
  useEffect(()=>fetch("https://data.covid19india.org/data.json").then(res=>res.json()).then(data=>setdata(data.statewise)))
  return (
    <div>
    <div style={{backgroundColor : '#D3D3D3'}}>
      <center><h1 style={{color : 'blue'}}>INDIA COVID-19 TRACKER APPLICATION</h1></center>
      </div>
      <div>
        <center>
      <tabel className="table">
            <thead className="thead-dark">
              <tr>
                    <th>STATE</th>
                    <th>ACTIVE</th>
                    <th>CONFIRMED</th>
                    <th>RECOVERED</th>
                    <th>DEATHS</th>
                    <th>LAST UPDATED TIME</th>
                    <th>DELTA CONFIRMED</th>
                </tr>
              </thead>
            <tbody>
            {
              data.map(item=>{
                return(
                <tr>
                      <th>{item.state}</th>
                      <th>{item.active}</th>
                      <th>{item.confirmed}</th>
                      <th>{item.recovered}</th>
                      <th>{item.deaths}</th>
                      <th>{item.lastupdatedtime}</th>
                      <th>{item.deltaconfirmed}</th>
                  </tr>
                )
              })
            }
          </tbody>
      </tabel>
      </center>
      </div>
      </div>

  );
}

export default App;
