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

export default {
  list: async (): Promise<TItem[]> =>
    new Promise((resolve) => setTimeout(() => resolve(MOCK_ITEMS), 2000)),
  create: async (text: TItem["text"]): Promise<TItem> =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ id: +new Date(), text }), 2000)
    ),
  remove: async (id: TItem["id"]): Promise<TItem["id"]> =>
    new Promise((resolve) => setTimeout(() => resolve(id))),
};
