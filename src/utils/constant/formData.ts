import { FormField } from "@/lib/types/campaign";

export const formDataSequence: FormField[][] = [
    [
        {
            label: "Campaign Title",
            type: "text",
            name: "title",
            placeholder: "Enter Campaign Title"
        },
        {
            label: "Select Voice",
            type: "select",
            name: "voice",
        },
        {
            label: "Select Language",
            type: "select",
            name: "language",
        }
    ],
    [
        {
            label: "Script (minimum 200 character)",
            type: "textarea",
            name: "script",
            placeholder: "Enter Script"
        }
    ],
    [
        {
            label: "Purpose",
            type: "textarea",
            name: "purpose",
            placeholder: "Enter Purpose of Campaign"
        },
        {
            label: "Knowledge Base",
            type: "textarea",
            name: "knowledgeBase",
            placeholder: "Enter Knowledge Base"
        }
    ],
    [
        {
            label: "Calendar",
            type: "datetime",
            name: "calendar",
            placeholder: "Select Date and Time"
        },
        {
            label: "First Line",
            type: "text",
            name: "firstLine",
            placeholder: "Enter First Line"
        },
        {
            label: "Tone",
            type: "text",
            name: "tone",
            placeholder: "Enter Tone"
        }
    ],
    // [
    //     {
    //         label: "Enable Post Call Analysis",
    //         type: "checkbox",
    //         name: "postCallAnalysis",
    //     }
    //     // {
    //     //     label: "Post Call Analysis Schema",
    //     //     type: "object",
    //     //     name: "postCallAnalysisSchema",
    //     //     placeholder: "Enter Post Call Analysis Schema"
    //     // }
    // ]
];
