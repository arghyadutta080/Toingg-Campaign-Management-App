import { Campaign } from "@/lib/types/campaign";

export const checkCampaignFormValidation = (formData: Campaign) => {
    if (
        formData.title === "" ||
        formData.language === "" ||
        formData.voice === "" ||
        formData.script.length < 200 ||
        formData.purpose === "" ||
        formData.knowledgeBase === "" ||
        formData.calendar === "" ||
        formData.firstLine === "" ||
        formData.tone === ""
    ) return false;
    
    return true;
}