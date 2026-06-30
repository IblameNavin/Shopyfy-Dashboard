export type Order = {
    id: string;
    // orderName: string;
    orderStatus: "Delivered" | "Accepted" | "Declined" | "Pending";
    paymentMethod: "COD" | "QR PAY";
    userId: string;  // Will grab user name
    productIds: string[];   //will grab product name
    totalAmount: number;
    createdAt: string;
}