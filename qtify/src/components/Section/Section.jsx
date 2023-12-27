import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

function Section({ title, data, filterSource, type }) {
  const [isCollapsed, setIsCollaped] = useState(true);
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  useEffect(() => {
    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        setFilters([...filters, ...data]);
      });
    }
  }, []);
  const showFilters = filters.length > 1;
  const cardToRender = data.filter((card) =>
    showFilters && selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card
  );

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p style={{ fontSize: "20px" }}>{title}</p>

        {!showFilters && (
          <button
            className={styles.button}
            onClick={() => {
              setIsCollaped((prevIsCollapsed) => {
                return !prevIsCollapsed;
              });
            }}
          >
            {isCollapsed ? "Show all" : "Collapse"}
          </button>
        )}
      </div>
      {showFilters && (
        <div className={styles.filterWrapper}>
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}
      {isCollapsed ? (
        
        <Carousel
          data={cardToRender}
          renderComponent={(data) => <Card data={data} type={type} />}
        />
        
      ) : (
        // <h1>Carousel</h1>
        <div className={styles.gridContainer}>
          {
            cardToRender.map((album) => {
              // console.log(album);
              return (
                <div key={album.id}>
                  <Card data={album} type="album" />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default Section;
