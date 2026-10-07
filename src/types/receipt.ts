export type ReceiptItem = {
  name: string;
  quantity: number;
  price: number;
};

export type Receipt = {
  id: string;
  date: string;
  merchant: string;
  items: ReceiptItem[];
  tax: number;
  total: number;
  imageUrl: string;
};
