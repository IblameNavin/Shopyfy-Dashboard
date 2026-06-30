export type Product = {
    id: string;
    name?: string;
    description? :string;
    price: number;
    stock: number;
    sku: string;
    
    category: string;
    superCategory: string;
    subCategory: string[];
    optionalCategory: string;

    images?: string[];

    status?: "active" | "inactive";
    createdAt: string;  
}