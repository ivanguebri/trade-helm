import { useState, useEffect } from "react";

import { TItem } from "../features/items/types";

import itemsAPI from "../features/items/api";
import { ELoadingStatus } from "./enums";
import Button from "../ui/controls/Button";
import { EColorScheme } from "../ui/controls/Button/enums";
import Modal from "../ui/presentation/Modal";
import TextField from "../ui/controls/TextField";
import ModalFooter from "../ui/presentation/ModalFooter";

export default function App(): JSX.Element {
  const [items, setItems] = useState<TItem[]>([]);
  const [loadingStatus, setLoadingStatus] = useState<ELoadingStatus>(
    ELoadingStatus.Idle
  );
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

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
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button>delete</button>
          </li>
        ))}
      </ul>
      <Button
        colorScheme={EColorScheme.Primary}
        onClick={() => setIsModalVisible(true)}
      >
        Add Item
      </Button>
      {isModalVisible && (
        <Modal onClose={() => setIsModalVisible(false)}>
          <form>
            <h2>Add Item</h2>
            <TextField name="text"></TextField>
            <ModalFooter>
              <Button type="button">Cancel</Button>
              <Button type="submit" colorScheme={EColorScheme.Primary}>
                Add
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      )}
    </main>
  );
}
