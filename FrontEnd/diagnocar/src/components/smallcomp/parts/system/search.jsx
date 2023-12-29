import * as React from "react";
import { Typography } from "@mui/material";



export default function Search() {


  return (
    <div className='bg-base-200 text-base-content' dir='rtl'>

    <Typography paragraph >
  گەڕان

  </Typography>
  <Typography>


    <div sx={{display:'flex'}}>

      <div  className="stats stats-vertical lg:stats-horizontal bg-primary text-primary-content lg:flex md:flex">

        <div className="stat">
          <div className="stat-title text-white ">پاکێجی</div>
          <div className="stat-value">$80</div>
          <div className="stat-actions">
            <button className="btn btn-sm ">نوێکردنەوەی پاکێج</button>
          </div>
        </div>

        <div className="stat ">
        <div className="stat-title text-white">بە ڕێژەی سەدی</div>
          <div className="stat-value text-sm">
          <div className="  radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 70 }} role="progressbar">70%</div>
            </div>

        </div>

        <div className="stat">
          <div className="stat-title text-white">ڕۆژی ماوە</div>
          <div className="stat-value">30</div>
         
        </div>

      </div>
     



     
    </div>

  </Typography>
  

  </div>
  )
}
