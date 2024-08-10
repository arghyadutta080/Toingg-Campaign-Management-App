import { Campaign, EditCampaign } from "@/lib/types/campaign";
import { createNewCampaign, updateCampaign } from "@/api/campaign";
import toast from "react-hot-toast";
import { checkCampaignFormValidation } from "../validation";

export const createCampaign = async (formData: Campaign) => {
    if (!checkCampaignFormValidation(formData)) {
        toast.error("Fill up all fields with properly");
        return;
    }
    const response = await createNewCampaign(formData);
    console.log(response);
    if (!response?.status) {
        toast.error(response?.detail);
        return;
    }
    toast.success("Created campaign");
};

export const updateCampaignData = async (campId: string, campaignDetails: EditCampaign[]) => {
    let updatedCampaign = {};
    campaignDetails.map((detail) => {
        updatedCampaign = { ...updatedCampaign, [detail.name]: detail.value };
    });
    updatedCampaign = {
        ...updatedCampaign,
        postCallAnalysis: false,
        postCallAnalysisSchema: {},
    };
    
    const response = await updateCampaign(updatedCampaign, campId);

    if (!response?.status) {
        toast.error(response?.detail);
        return;
    }
    toast.success(response?.message);
}