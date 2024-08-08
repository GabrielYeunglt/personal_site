import React from 'react';
import '../css/ContentCard.css'

const ContentCard = (props) => {
    return (
      <div className="content-card">
        <img src={props.imageUrl} alt={props.title} className="content-card-image" />
        <div className="content-card-body">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    );
  };
  
  export default ContentCard;