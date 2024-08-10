export interface Campaign {
    // campaignId: string;
    title: string;
    voice: string;
    language: string;
    script: string;
    purpose: string;
    knowledgeBase: string;
    calendar: string;
    firstLine: string;
    tone: string;
    postCallAnalysis?: boolean;
    postCallAnalysisSchema?: object;
}

export interface FormField {
    label: string;
    type: "text" | "select" | "textarea" | "datetime" | "checkbox";
    name: string;
    placeholder?: string;
};

export interface EditCampaign {
    value: string | boolean;
    type: string;
    name: string;
    label: string;
};