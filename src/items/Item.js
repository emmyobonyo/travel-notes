import React from 'react';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import './item.css';

function Item({ data }) {
  return (
    <section className="section-component">
      <img className="mount-fuji" src={`./images/${data.imageUrl}`} alt={data.imageUrl}/>
      <div className="section-location">
        <div className="section-location-top">
          <AddLocationIcon sx={{ color: 'red' }} className="location-icon"/>
          <p className="country">{data.location}</p>
          <a href={data.googleMapsUrl} className="google-location">View on Google Maps</a>
        </div>
        <h1 className="image">{data.title}</h1>
        <p className="date"><b>{data.startDate} - {data.endDate}</b></p>
        <p className="description">
          {data.description}
        </p>
      </div>
    </section>
  )
}

export default Item