import { getSupportedLanguages, getSupportedVoices } from "@/api/campaign";
import toast from "react-hot-toast";

export const fetchLanguages = async (setLanguages: React.Dispatch<React.SetStateAction<string[]>>) => {
    const languages = await getSupportedLanguages();
    if (!languages?.status) {
        toast.error("Failed to fetch languages");
    } else {
        console.log(languages?.result?.languages);
        setLanguages(languages?.result?.languages);
    }
};

export const fetchVoices = async (setVoices: React.Dispatch<React.SetStateAction<string[]>>) => {
    const voices = await getSupportedVoices();
    if (!voices?.status) {
        toast.error("Failed to fetch voices");
    } else {
        console.log(voices?.result?.voice.map((voice: any) => voice.name));
        setVoices(voices?.result?.voice.map((voice: any) => voice.name));
    }
};

export const selectOptions = (name: string, languages: string[] | [], voices: string[] | []) => {
    if (name === "language" && languages.length > 0) {
        return languages;
    } else if (name === "voice" && voices.length > 0) {
        return voices;
    } else return [];
};