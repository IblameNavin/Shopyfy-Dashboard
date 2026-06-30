export type Coupon = {
    id: string;
    couponCode: string;
    discountTyoe: "percentage" | "fixed";
    discountValue: number;

    status: "active" | "inactive";
    startDate: string;
    endDate: string;
    createdAt: string;
}