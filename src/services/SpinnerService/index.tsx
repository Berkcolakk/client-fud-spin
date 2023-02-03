

// Refactored code: 
import BaseService from "@services/BaseService";
import { getAllSpinnerDataEndpoint, spinnerLogEndpoint } from '@utils/apiCostant.utils'

export const getAllSpinnerData = async () => {
    try {
        const response = await BaseService.get(getAllSpinnerDataEndpoint); // Added await keyword to the BaseService call 
        const { data } = response; // Removed await keyword from response 
        return data;
    } catch (error) {
        console.error(error);
    }
};

 export const spinnerLog = async (obj: any) => { // Changed the name of the function to be more descriptive 
    try {
        const response = await BaseService.post(spinnerLogEndpoint, obj, { // Added await keyword to the BaseService call 
            headers: { 'Content-Type': 'application/json; charset=UTF-8', } // Added a comma after the endpoint URL 
        }); 

        const { data } = response; // Removed await keyword from response  

        return data; 

    } catch (error) { 
        console.error(error); 
    }  
}