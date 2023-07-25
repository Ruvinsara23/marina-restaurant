import React from 'react'

const MenuItem = ({ item }) => {
    const { name, imageUrl, price, description } = item;
  return (
    <div className="menu-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="content">
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">${price.toFixed(2)}</p>
    </div>
  </div>
  )
}

export default MenuItem
