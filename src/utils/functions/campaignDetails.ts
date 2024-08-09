import { Campaign } from "@/lib/types/campaign";

export const getCampaignDetails = (campaign: Campaign) => {
    const campaignDetails = [
        {
            title: "Campaign Title",
            desc: campaign?.title,
        },
        {
            title: "Voice",
            desc: campaign?.voice,
        },
        {
            title: "Language",
            desc: campaign?.language,
        },
        {
            title: "Purpose",
            desc: campaign?.purpose,
        },
        {
            title: "Script",
            desc: campaign?.script,
        },
        {
            title: "Knowledge Base",
            desc: campaign?.knowledgeBase,
        },
        {
            title: "Calendar",
            desc: campaign?.calendar,
        },
        {
            title: "First Line",
            desc: campaign?.firstLine,
        },
        {
            title: "Tone",
            desc: campaign?.tone,
        },
    ];
    return campaignDetails;
}