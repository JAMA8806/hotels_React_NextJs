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
  const selectRef = useRef(null)
  const resetFilters = ()=>{
    updateReset();
    selectRef.current.selectedIndex = 0;
  }
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Book It</h1>
      <div className={styles.filtersBox}>
        <select
          onChange={(e) => updateCountry(e.target.value)}
          ref={selectRef}
          name=""
          id=""
          defaultValue={"all"}
          className={`${styles.filtersBox__country} ${styles.input}`}>
          <option value="all">All Countries</option>
          <option value="argentina">Argentina</option>
          <option value="brasil">Brasil</option>
          <option value="chile">Chile</option>
          <option value="uruguay">Uruguay</option>
        </select>

        <input
          onChange={(e) => updateFrom(e.target.value)}
          ref={selectRef}
          type="date"
          defaultValue={"all"}
          className={`${styles.input} ${styles.filtersBox__input}`}
          id=""
          min={`${new Date().toISOString().split("T")[0]}`}
          />
        <input
          ref={selectRef}
          onChange={(e) => updateTo(e.target.value)}
          type="date"
          defaultValue={"all"}
          className={`${styles.input} ${styles.filtersBox__input}`}
          id=""
          min={`${new Date().toISOString().split("T")[0]}`}
          />

        <select
          ref={selectRef}
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
          ref={selectRef}
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
