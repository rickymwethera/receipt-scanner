export type ReceiptStatus =
  | "needs_review"
  | "processed"
  | "confirmed"
  | "rejected";
export type ReceiptSource = "scan" | "manual" | "import" | "email" | "other";

export type ReceiptItem = {
  name: string;
  quantity: number;
  price: number;
  detail?: string;
};

export type Receipt = {
  id: string;
  status: ReceiptStatus;
  merchant: string;
  date: string;
  time?: string;
  location?: string;
  currency?: string;
  items: ReceiptItem[];
  tax: number;
  total: number;
  category?: string;
  source?: ReceiptSource;
  paymentMethod?: string;
  taxDeductable?: boolean;
  notes?: string;
  ocrConfidence?: number;
  imageUri?: string;
};
