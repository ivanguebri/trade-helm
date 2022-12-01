import styles from "./List.module.scss";

import { TItem } from "../../../features/items/types";

import ListItem from "../ListItem";

type Props = {
  items: TItem[];
  onDelete: (id: TItem["id"]) => void;
};

export default function List({ items, onDelete }: Props): JSX.Element {
  return (
    <ul className={styles.container}>
      {items.map((item) => (
        <ListItem
          key={item.id}
          onDelete={() => onDelete(item.id)}
          item={item}
        />
      ))}
    </ul>
  );
}
