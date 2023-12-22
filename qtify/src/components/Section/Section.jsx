import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";

function Section({ title,data }) {
  const [isCollapsed, setIsCollaped] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p style={{fontSize:"20px"}}>{title}</p>
        {isCollapsed ? (
          <button
            className={styles.button}
            onClick={() => {
              setIsCollaped(false);
            }}
          >
            Show all
          </button>
        ) : (
          <button
            className={styles.button}
            onClick={() => {
              setIsCollaped(true);
            }}
          >
            Collapse
          </button>
        )}
      </div>
      {isCollapsed ? (
        <div></div>
      ) : (
        <div className={styles.gridContainer}>
          {data.length>0 &&
            data.map((album) => {
                // console.log(album);
              return <div key={album.id}><Card data={album} type="album" /></div>;
            })}
        </div>
      )}
    </div>
  );
}

export default Section;
