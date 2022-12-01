import styles from "./ListItem.module.scss";

import { TItem } from "../../../features/items/types";

import { EVariant } from "../../controls/Button/enums";

import Button from "../../controls/Button";

type Props = {
  item: TItem;
  onDelete: VoidFunction;
};

export default function ListItem({ item, onDelete }: Props): JSX.Element {
  return (
    <li className={styles.container}>
      <span>{item.text}</span>
      <Button variant={EVariant.Link} onClick={onDelete}>
        delete
      </Button>
    </li>
  );
}
