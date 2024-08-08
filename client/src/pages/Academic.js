import React, { useState } from "react";
import ContentCard from "../components/ContentCard";
import AcademicCard from "../components/AcademicCard";
import * as dataController from "../controllers/DataController";

const Academic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [acadData, setAcadData] = useState(dataController.getAcademicData());

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <h1>Academic</h1>
      <p>This is the academic page.</p>

      <div>
        <div>
          {acadData.map((card, index) => (
            <button key={index} onClick={() => handleButtonClick(index)}>
              {card.title}
            </button>
          ))}
        </div>
        <AcademicCard
          title={acadData[currentIndex].title}
          year={acadData[currentIndex].year}
          field={acadData[currentIndex].field}
          level={acadData[currentIndex].level}
          country={acadData[currentIndex].country}
          imageUrl={acadData[currentIndex].image}
        />
      </div>
    </div>
  );
};

export default Academic;
