export type User = {
    uid: string;
    name: string;
    email: string;
    phoneNumber: string;
    avatar?: string;
    address?: string;
    status: "active" | "inactive";
    createdAt: string;
    totalOrders: number;
    totalSpent: number;

    role: "admin" | "user"
}
