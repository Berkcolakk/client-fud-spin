

// Refactored code: 
import { getUser } from "@/utils/getUser.utils";
import { getAllSpinnerDataEndpoint, spinnerLogEndpoint } from '@utils/apiCostant.utils';
import api from '@services/BaseService';

export const getAllSpinnerData = async () => {
    try {
        return await (await api({ Url: getAllSpinnerDataEndpoint, Body: null, Method: "GET" })).json();
    } catch (error) {
        console.error(error);
    }
};

export const spinnerLog = async (obj: any) => { // Changed the name of the function to be more descriptive 
    try {
        return await (await api({ Url: spinnerLogEndpoint, Body: JSON.stringify(obj), Method: "POST" })).json();
    } catch (error) {
        console.error(error);
    }
}