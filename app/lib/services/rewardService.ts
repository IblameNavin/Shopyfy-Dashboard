import { Reward } from "@/app/data/types/reward";
import { MockRewards } from "@/app/data/reward";

export const getRewards = async():Promise<Reward[]> => {
 return new Promise((resolve) => {
    setTimeout(() => {
        resolve(MockRewards)
    }, 200);
 } )
}