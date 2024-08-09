import catchErrorFunc from "@/utils/errorResponseLog";
import { APIinstance } from "./axiosConfig";
import { Campaign } from "@/lib/types/campaign";

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

export const getSupportedLanguages = async () => {
    try {
        const response = await APIinstance.get(
            'get_supported_languages'
        )
        console.log(response?.data)
        return response?.data;
    } catch (error) {
        console.log(error);
        return catchErrorFunc(error)
    }
}

export const getSupportedVoices = async () => {
    try {
        const response = await APIinstance.get(
            'get_supported_voices'
        )
        console.log(response?.data)
        return response?.data;
    } catch (error) {
        console.log(error);
        return catchErrorFunc(error)
    }
}


export const createNewCampaign = async (data: Campaign) => {
    try {
        const response = await APIinstance.post(
            'create_campaign',
            data
        )
        console.log(response?.data)
        return response?.data;
    } catch (error) {
        console.log(error);
        return catchErrorFunc(error)
    }
}