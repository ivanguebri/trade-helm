import { PropsWithChildren } from "react";

import { EColorScheme } from "./enums";

import styles from "./Button.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  colorScheme?: EColorScheme;
};

export default function Button({
  colorScheme = EColorScheme.Secondary,
  children,
  ...props
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <button className={`${styles.container} ${styles[colorScheme]}`} {...props}>
      {children}
    </button>
  );
}
