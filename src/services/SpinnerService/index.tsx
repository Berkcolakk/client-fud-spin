

// Refactored code: 
import { getUser } from "@/utils/getUser.utils";
import { getAllSpinnerDataEndpoint, spinnerLogEndpoint } from '@utils/apiCostant.utils'
export const getAllSpinnerData = async () => {
    try {
        const result = await fetch(`${process.env.NEXT_PUBLIC_HOST}${getAllSpinnerDataEndpoint}`,{
            cache:"no-store"
        })
        return result.json();
    } catch (error) {
        console.error(error);
    }
};

export const spinnerLog = async (obj: any) => { // Changed the name of the function to be more descriptive 
    try {
        const result = await fetch(`${process.env.NEXT_PUBLIC_HOST}${spinnerLogEndpoint}`)
        return result.json();

    } catch (error) {
        console.error(error);
    }
}