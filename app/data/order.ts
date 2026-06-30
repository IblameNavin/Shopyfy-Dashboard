import { Order } from "./types/order";

export const MockOrders: Order[] = [
    {
        id: "101",
        orderStatus: "Pending",
        paymentMethod: "QR PAY",
        userId: "1",
        productIds: ["product1"],
        totalAmount: 15000,
        createdAt: "2026-01-15T10:30:00.000Z" // January
    },
    {
        id: "102",
        orderStatus: "Delivered",
        paymentMethod: "COD",
        userId: "2",
        productIds: ["product2"],
        totalAmount: 3000,
        createdAt: "2026-02-20T14:22:00.000Z" // February
    },
    {
        id: "103",
        orderStatus: "Delivered",
        paymentMethod: "QR PAY",
        userId: "3",
        productIds: ["product3"],
        totalAmount: 23000,
        createdAt: "2026-03-10T09:15:00.000Z" // March
    },
    {
        id: "104",
        orderStatus: "Delivered",
        paymentMethod: "COD",
        userId: "4",
        productIds: ["product4"],
        totalAmount: 8000,
        createdAt: "2026-04-05T16:45:00.000Z" // April
    },
    {
        id: "105",
        orderStatus: "Delivered",
        paymentMethod: "COD",
        userId: "5",
        productIds: ["product5"],
        totalAmount: 12000,
        createdAt: "2026-05-18T11:00:00.000Z" // May
    },
    {
        id: "106",
        orderStatus: "Delivered",
        paymentMethod: "QR PAY",
        userId: "6",
        productIds: ["product6"],
        totalAmount: 27000,
        createdAt: "2026-06-02T13:10:00.000Z" // June
    },
      {
        id: "107",
        orderStatus: "Delivered",
        paymentMethod: "COD",
        userId: "7",
        productIds: ["product7"],
        totalAmount: 27000,
        createdAt: "2026-03-01T13:9:00.000Z" // June
    },
];