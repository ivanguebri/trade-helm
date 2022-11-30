import { useState, useEffect } from "react";

import { TItem } from "../features/items/types";

import itemsAPI from "../features/items/api";
import { ELoadingStatus } from "./enums";

export default function App(): JSX.Element {
  const [items, setItems] = useState<TItem[]>([]);
  const [loadingStatus, setLoadingStatus] = useState<ELoadingStatus>(
    ELoadingStatus.Idle
  );

  useEffect(() => {
    setLoadingStatus(ELoadingStatus.Loading);
    itemsAPI.list().then((items) => {
      setItems(items);
      setLoadingStatus(ELoadingStatus.Idle);
    });
  }, []);

  if (loadingStatus === ELoadingStatus.Loading) {
    return <span>Loading...</span>;
  }

  return (
    <main>
      <header>
        <h1>Supermarket List</h1>
        <h3>{items.length} item(s)</h3>
      </header>
    </main>
  );
}
