import catchErrorFunc from "@/utils/errorResponseLog";
import { APIinstance } from "./axiosConfig";
import { Campaign } from "@/lib/types/campaign";

export const getCampaigns = async () => {
    try {
        const response = await APIinstance.get(
            'get_campaigns'
        )
        return response?.data;
    } catch (error) {
        return catchErrorFunc(error)
    }
}

export const getSupportedLanguages = async () => {
    try {
        const response = await APIinstance.get(
            'get_supported_languages'
        )
        return response?.data;
    } catch (error) {
        return catchErrorFunc(error)
    }
}

export const getSupportedVoices = async () => {
    try {
        const response = await APIinstance.get(
            'get_supported_voices'
        )
        return response?.data;
    } catch (error) {
        return catchErrorFunc(error)
    }
}


export const createNewCampaign = async (data: Campaign) => {
    try {
        const response = await APIinstance.post(
            'create_campaign',
            data
        )
        return response?.data;
    } catch (error) {
        return catchErrorFunc(error)
    }
}


export const updateCampaign = async (campaignModelData: Campaign | {}, campId: string) => {
    try {
        const response = await APIinstance.post(
            'update_campaign',
            { campaignModelData, campId }
        )
        return response?.data;
    } catch (error) {
        return catchErrorFunc(error)
    }
}