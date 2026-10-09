import { Receipt } from "@/types/receipt";

export const mockReceipts: Receipt[] = [
  {
    id: "1",
    date: "2023-06-01",
    merchant: "Carrefour Supermarket",
    items: [
      { name: "Milk", quantity: 2, price: 3.5 },
      { name: "Bread", quantity: 1, price: 2.0 },
    ],
    tax: 0.5,
    total: 9.5,
    imageUri: "https://www.dreamstime.com/illustration/receipt-template.html",
  },
  {
    id: "2",
    date: "2026-06-02",
    merchant: "Naivas Supermarket",
    items: [
      { name: "Eggs", quantity: 1, price: 2.5 },
      { name: "Cheese", quantity: 1, price: 4.0 },
    ],
    tax: 0.6,
    total: 7.1,
    // imageUri: "https://www.dreamstime.com/illustration/receipt-template.html",
  },
];
