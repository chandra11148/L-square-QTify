import React from "react";
import styles from "./Card.module.css";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";

function Card({ data, type }) {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        
        return (
          <Tooltip title={`${data.songs.length} songs`} placement="top" arrow>
            <a href={`/album/${data.slug}`} style={{textDecoration:"none",color:"white"}}>
              <div className={styles.wrapper}>
                <div className={styles.card}>
                  <img src={data.image} alt="songName" />

                  <div className={styles.banner}>
                    <Chip
                      label={`${data.follows} Follows`}
                      size="small"
                      className={styles.chip}
                    />
                  </div>
                </div>
                <div className={styles.titleWrapper}>
                  <p>{data.title}</p>
                </div>
              </div>
            </a>
          </Tooltip>
        
        );
      }
      case "song": {
        
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={data.image} alt="songName" />

              <div className={styles.banner}>
                <div className={styles.pill}>
                  <p>{data.likes} likes</p>
                </div>
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{data.title}</p>
            </div>
          </div>
        );
      }
      default: {
        return <></>;
      }
    }
  };
  return getCard(type);
}

export default Card;
