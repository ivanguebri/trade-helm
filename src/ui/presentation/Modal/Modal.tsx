import { PropsWithChildren } from "react";

import styles from "./Modal.module.scss";

type Props = {
  onClose: VoidFunction;
};

export default function Modal({
  children,
  onClose,
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <aside className={styles.container}>
      <div onClick={onClose}></div>
      <div>{children}</div>
    </aside>
  );
}
