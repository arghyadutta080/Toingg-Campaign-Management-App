import axios from "axios";

export const APIinstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_API,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer tg_df1bf273-1a1a-4e28-a029-1da4563f2e78-QFEcACouDPN8z8_lvAJq4w`
    },
}); 

