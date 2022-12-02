import { TItem } from "./types";

const MOCK_ITEMS: TItem[] = [
  {
    id: 1,
    text: "Helado de pejelagarto",
  },
  {
    id: 2,
    text: "Leche",
  },
  {
    id: 3,
    text: "Queso",
  },
];

const API_TIMEOUT = 0;

export default {
  list: async (): Promise<TItem[]> => {
    const items: TItem[] = JSON.parse(localStorage.getItem("items") || "[]");
    return new Promise((resolve) =>
      setTimeout(() => resolve(items), API_TIMEOUT)
    );
  },
  create: async (text: TItem["text"]): Promise<TItem> =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ id: +new Date(), text }), API_TIMEOUT)
    ),
  remove: async (id: TItem["id"]): Promise<TItem["id"]> =>
    new Promise((resolve) => setTimeout(() => resolve(id))),
};
