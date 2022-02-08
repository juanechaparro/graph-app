import "./styles.css";
import { getData } from "./api";
import { createScale } from "./utils";
import { useEffect, useState } from "react";


function App() {
   const [values, setValues] = useState([]);
 
  const setData= async ()=>{
    const data = await getData();
    console.log(data);
     setValues(data);
    
    
  }
  useEffect(() => {
    setData();
  }, [])
  
  const max = Math.max(...values);
  return (
    <div className="chart" >
        {
          values.map( (value)=>(
            <div className="bar" 
            style={{width: `${createScale(value, 0, max, 0, 800)}px`,
            height :`${600 / values.length}px`}}
            key ={value}> </div>
          ))
        }
    </div>
  );
}

export default App;
