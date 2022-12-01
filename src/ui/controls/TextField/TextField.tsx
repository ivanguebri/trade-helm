import styles from "./TextField.module.scss";

export default function TextField(
  props: React.InputHTMLAttributes<HTMLInputElement>
): JSX.Element {
  return <input className={styles.container} type="text" {...props}></input>;
}
