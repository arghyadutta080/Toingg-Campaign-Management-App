import catchErrorFunc from "@/utils/errorResponseLog";
import { APIinstance } from "./axiosConfig";
import { Call } from "@/lib/types/call";

export const creatCalls = async (data: Call) => {
    try {
        const response = await APIinstance.post(
            'make_call',
            data
        )
        console.log(response?.data)
        return response?.data;
    } catch (error) {
        console.log(error);
        return catchErrorFunc(error)
    }
}