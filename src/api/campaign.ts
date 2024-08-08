import catchErrorFunc from "@/utils/errorResponseLog";
import { APIinstance } from "./axiosConfig";

export const getCampaigns = async () => {
    try {
        const response = await APIinstance.get(
            'get_campaigns'
        )
        console.log(response?.data)
        return response?.data;
    } catch (error) {
        console.log(error);
        return catchErrorFunc(error)
    }
}