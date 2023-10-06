import { useRef } from "react";
import BasicButtons from "../../atoms/button/button";
import styles from "./header.module.css";

export const Header = ({
  updateCountry,
  updatePrice,
  updateSize,
  updateFrom,
  updateTo,
  updateReset
}) => {
  const countryRef = useRef(null);
  const priceRef = useRef(null);
  const sizeRef = useRef(null);
  const fromRef = useRef(null);
  const toRef = useRef(null);
  const resetFilters = ()=>{
    updateReset();
    countryRef.current.selectedIndex = 0;
    priceRef.current.selectedIndex = 0;
    sizeRef.current.selectedIndex = 0;
    fromRef.current.selectedIndex = 0;
    toRef.current.selectedIndex = 0;
  }
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Book It</h1>
      <div className={styles.filtersBox}>
        <select
          ref={countryRef}
          onChange={(e) => updateCountry(e.target.value)}
          name=""
          id=""
          className={`${styles.filtersBox__country} ${styles.input}`}>
          <option value="all">All Countries</option>
          <option value="argentina">Argentina</option>
          <option value="brasil">Brasil</option>
          <option value="chile">Chile</option>
          <option value="uruguay">Uruguay</option>
        </select>

        <input
          onChange={(e) => updateFrom(e.target.value)}
          ref={fromRef}
          type="date"
          defaultValue={0}
          className={`${styles.input} ${styles.filtersBox__input}`}
          id=""
          min={`${new Date().toISOString().split("T")[0]}`}
          />
        <input
          ref={toRef}
          onChange={(e) => updateTo(e.target.value)}
          type="date"
          defaultValue={0}
          className={`${styles.input} ${styles.filtersBox__input}`}
          id=""
          min={`${new Date().toISOString().split("T")[0]}`}
          />

        <select
          ref={sizeRef}
          onChange={(e) => updateSize(e.target.value)}
          name=""
          id=""
          className={`${styles.filtersBox__input} ${styles.input}`}>
          <option value="all">All sizes</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <select
          ref={priceRef}
          onChange={(e) => updatePrice(e.target.value)}
          name=""
          id=""
          className={`${styles.filtersBox__input} ${styles.input}`}>
          <option value="all">All prices</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
        </select>
        <button
         onClick={resetFilters}
         className={`${styles.filtersBox__btn}`}
         btnText={"Clear"} >
          Reset
        </button>       
      </div>
    </header>
  );
};
