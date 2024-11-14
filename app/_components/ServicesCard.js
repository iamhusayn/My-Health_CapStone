import React from 'react'

const ServicesCard = ({ icon, tittle}) => {
  return (
    <div>
      <div>{icon}</div>
      <h1>{tittle}</h1>
      <p>
        Medicare dental services are an essential part of overall healthcare for older adults and individuals with disabilities, but they have historically been limited in scope under Medicare.
      </p>
    </div>
  );
}

export default ServicesCard