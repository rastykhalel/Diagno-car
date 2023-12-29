import * as React from 'react';


export default function MultiActionAreaCard(param) {
  return (
    <div className="bg-base-200 text-base-content rounded-box mb-4" >

<div className="card w-72 glass" id={param.Id}>
      <figure><img src={param.imageSource} alt="car diagno" /></figure>
      <div className="card-body ">
        <h2 className="card-title">{param.Title}</h2>
        <p>{param.Text.length > 100 ? `${param.Text.slice(0, 100)}...` : param.Text}</p>
        <div className="card-actions justify-start">
          <button className="link-info ">  خوێنەربە... </button>
        </div>
      </div>
    </div>
          </div>
  );
}