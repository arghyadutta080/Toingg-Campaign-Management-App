import axios from "axios";

export const APIinstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_API,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    },
}); 

