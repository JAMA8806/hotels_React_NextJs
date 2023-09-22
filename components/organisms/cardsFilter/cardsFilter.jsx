import { hotelsData } from "../../../services/getHotelsServices";
import MediaCard from "../../molecules/card/card";
import { Header } from "../../molecules/header/header";
import styles from "./cardsFilter.module.css";

export const CardsFilter = () => {
    console.log(hotelsData[0]);
  return (
    <>
      <Header />
      <div className={styles.cardsContainer}>
        {hotelsData.map((hotel, index) => {
          console.log(hotel.name, index)
          return <MediaCard
              key={index}
              hotel={hotel}
            /> ;
        })}
      </div>
    </>
  );
};
