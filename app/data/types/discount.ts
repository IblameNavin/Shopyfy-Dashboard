export type Discount = {
    id: string;
    ruleName: string;
    minAgeCriteria?: number,
    maxAgeCriteria?: number,
    status: "active" | "inactive";
    discountType: "percentage" | "fixed";
    discountValue: number; 
    category? :string;
    startDate: string;
    endDate: string;
    createdAt: string;

}