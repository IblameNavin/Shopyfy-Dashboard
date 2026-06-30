import { User } from "@/app/data/types/user";
import { MockUsers } from "@/app/data/user";

export const getUsers = async(): Promise <User[]> => {
        return new Promise((resolve)=> {
            setTimeout(()=> resolve(MockUsers),100)
        })
}