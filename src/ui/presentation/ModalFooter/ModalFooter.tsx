import { PropsWithChildren } from "react";

import styles from "./ModalFooter.module.scss";

export default function ModalFooter({
  children,
}: PropsWithChildren): JSX.Element {
  return <footer className={styles.container}>{children}</footer>;
}
