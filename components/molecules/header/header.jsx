import styles from "./header.module.css";

export const Header = ({updateCountry, updatePrice, updateSize, updateFrom, updateTo}) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Book It</h1>
      <div className={styles.filtersBox}>
        <select
        onChange={(e)=>updateCountry(e.target.value)}
          name=""
          id=""
          className={`${styles.filtersBox__country} ${styles.input}`}>
          <option value="all">All Countries</option>
          <option value="agentina">Argentina</option>
          <option value="brasil">Brasil</option>
          <option value="chile">Chile</option>
          <option value="uruguay">Uruguay</option>
        </select>

        <input
        onChange={(e)=>updateFrom(e.target.value)}
        type="date"
        className={`${styles.input} ${styles.filtersBox__input}`}
          id=""
          min = {`${new Date().toISOString().split('T')[0]}`}
          />
        <input
        onChange={(e)=>updateTo(e.target.value)}
          type="date"
          className={`${styles.input} ${styles.filtersBox__input}`}
          id=""
          min = {`${new Date().toISOString().split('T')[0]}`}
        />

        <select
          onChange={(e)=>updateSize(e.target.value)}
          name=""
          id=""
          className={`${styles.filtersBox__input} ${styles.input}`}>
          <option value="all">All sizes</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <select
        onChange={(e)=>updatePrice(e.target.value)}
          name=""
          id=""
          className={`${styles.filtersBox__input} ${styles.input}`}>
          <option value="all">All prices</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
        </select>
      </div>
    </header>
  );
};
