import { Environment } from "../enums/Environment";


const dev ={
    url: {
        API_URL: "https://00000/api/",
    },
};

const prod = {
    url: {
        API_URL: "https://anunx.api.devtech.io/api/",
    },
};


export const config = 
    process.env.NODE_ENV === Environment.DEVELOPMENT ? dev : prod;

