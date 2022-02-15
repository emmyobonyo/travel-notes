import React from 'react';
import mountFuji from '../images/mountfuji.png';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import './item.css';

function Item({ data }) {
  return (
    <section className="section-component">
      <img className="mount-fuji" src={mountFuji} alt="mount fuji"/>
      <div className="section-location">
        <div className="section-location-top">
          <AddLocationIcon sx={{ color: 'red' }} className="location-icon"/>
          <p className="country">{data.location}</p>
          <a href="https://www.google.com" className="google-location">View on Google Maps</a>
        </div>
        <h1 className="image">Mount Fuji</h1>
        <p className="date"><b>12 Jan, 2021 - 24 Feb, 2021</b></p>
        <p className="description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </section>
  )
}

export default Item