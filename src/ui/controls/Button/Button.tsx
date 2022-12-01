import { PropsWithChildren } from "react";

import { EColorScheme, EVariant } from "./enums";

import styles from "./Button.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  colorScheme?: EColorScheme;
  variant?: EVariant;
};

export default function Button({
  colorScheme = EColorScheme.Secondary,
  variant = EVariant.Normal,
  children,
  ...props
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <button
      className={`${styles.container} ${styles[colorScheme]} ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}
