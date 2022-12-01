import React, { useState, useEffect } from "react";

import { TItem } from "../features/items/types";
import { TForm } from "./types";

import { ELoadingStatus } from "./enums";
import { EColorScheme, EVariant } from "../ui/controls/Button/enums";

import itemsAPI from "../features/items/api";

import Button from "../ui/controls/Button";
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

  const onOpenModal = () => {
    setIsModalVisible(true);
  };

  const onCloseModal = () => {
    setIsModalVisible(false);
  };

  const onRemove = (id: TItem["id"]) => {
    itemsAPI.remove(id).then((removedId) => {
      setItems(items.filter((item) => item.id !== removedId));
    });
  };

  const onAdd = (event: React.FormEvent<TForm>) => {
    event.preventDefault();

    const text = event.currentTarget.text.value.trim();
    if (text) {
      itemsAPI.create(text).then((newItem) => setItems(items.concat(newItem)));
    }

    onCloseModal();
  };

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
            <Button variant={EVariant.Link} onClick={() => onRemove(item.id)}>
              delete
            </Button>
          </li>
        ))}
      </ul>
      <Button colorScheme={EColorScheme.Primary} onClick={onOpenModal}>
        Add Item
      </Button>
      {isModalVisible && (
        <Modal onClose={onCloseModal}>
          <form onSubmit={onAdd}>
            <h2>Add Item</h2>
            <TextField name="text"></TextField>
            <ModalFooter>
              <Button type="button" onClick={onCloseModal}>
                Cancel
              </Button>
              <Button
                type="submit"
                colorScheme={EColorScheme.Primary}
                onClick={() => {}}
              >
                Add
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      )}
    </main>
  );
}
