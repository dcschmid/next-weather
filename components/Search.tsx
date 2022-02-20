import styles from "./Search.module.css";

export const Search = ({ value, onFocus, onChange, onKeyDown }: any) => {
  return (
    <input
      className={styles.search}
      type="text"
      value={value}
      onFocus={onFocus}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
