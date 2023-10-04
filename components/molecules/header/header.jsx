import styles from './header.module.css'

export const Header = ()=> {
    return(
        <header className={styles.header}>
            <h1 className={styles.header__title}>Book It</h1>
            <div className={styles.filtersBox}>
                <select name="" id="" className={`${styles.filtersBox__country} ${styles.input}` }>
                    <option value="All">All Countries</option>
                    <option value="argentina">Argentina</option>
                    <option value="brasil">Brasil</option>
                    <option value="chile">Chile</option>
                    <option value="uruguay">Uruguay</option>
                </select>
                <input type="date" className={`${styles.input} ${styles.filtersBox__input}`} id="" />
                <input type="date" className={`${styles.input} ${styles.filtersBox__input}`} id="" />
                <select name="" id="" className={`${styles.filtersBox__input} ${styles.input}`}>
                    <option value="All">All sizes</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>                    
                </select>
                <select name="" id="" className={`${styles.filtersBox__input} ${styles.input}`}>
                    <option value="All">All prices</option>
                    <option value="$">$</option>
                    <option value="$$">$$</option>
                    <option value="$$$">$$$</option>                    
                </select>
            </div>
        </header>
    );
};