import { Coupon } from "./types/coupon";

export const MockCoupon:Coupon[] = [
    {
        id: "coupon1",
        couponCode: "223344",
        discountTyoe: "fixed",
        discountValue: 250,

        status: "active",
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        createdAt: new Date().toISOString()
    },

    {
        id: "coupon2",
        couponCode: "223311",
        discountTyoe: "percentage",
        discountValue: 4,

        status: "inactive",
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        createdAt: new Date().toISOString()
    },

    {
        id: "coupon3",
        couponCode: "223322",
        discountTyoe: "percentage",
        discountValue: 5,

        status: "active",
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        createdAt: new Date().toISOString()
    },

    {
        id: "coupon4",
        couponCode: "223346",
        discountTyoe: "fixed",
        discountValue: 350,

        status: "active",
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        createdAt: new Date().toISOString()
    },

    {
        id: "coupon5",
        couponCode: "223345",
        discountTyoe: "fixed",
        discountValue: 450,

        status: "active",
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        createdAt: new Date().toISOString()
    },
]