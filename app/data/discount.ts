import { Discount } from "./types/discount";

export const MockDiscount: Discount[] = [
  {
    id: "discount1",
    ruleName: "Age check: Younger than 10 or older than 75 years",
    minAgeCriteria: 10,
    maxAgeCriteria: 75,
    status: "active",
    discountType: "percentage",
    discountValue: 5,
    category: "Furniture",
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date().toISOString(),
  },

  {
    id: "discount2",
    ruleName: "Subtotal over NPR 5,000",
    status: "active",
    discountType: "fixed",
    discountValue: 400,
    category: "clothing",
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date().toISOString(),
  },

  {
    id: "discount3",
    ruleName: "New User Welcoming Campaign",
    status: "inactive",
    discountType: "percentage",
    discountValue: 8,
    category: "all",
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date().toISOString(),
  },

  {
    id: "discount4",
    ruleName: "Digital Incentive: 5% off on QR PAY transactions",
    status: "inactive",
    discountType: "percentage",
    discountValue: 5,
    category: "clothing",
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date().toISOString(),
  },

  {
    id: "discount5",
    ruleName: "Monsoon Mega Flash Sale Campaign",
    status: "inactive",
    discountType: "fixed",
    discountValue: 150,
    category: "Home and Lifestyle",
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date().toISOString(),
  },
];