

// Refactored code: 
import { User, UserDTO } from "@types/UserTypes";
import BaseService from "@services/BaseService";
import { userRegisterEndpoint, userLoginEndpoint } from '@utils/apiCostant.utils'

const requestOptions = { headers: { 'Content-Type': 'application/json; charset=UTF-8', } };

export const registerUser = async (user: User) => {
    try {
        const response = await BaseService.post(userRegisterEndpoint, user, requestOptions);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}; 
export const loginUser = async (user: UserDTO) => { 
    try { 
        const response = await BaseService.post(userLoginEndpoint, user, requestOptions); 
        return response.data; 
    } catch (error) { 
        console.error(error); 
    } 
} 

// Explanation: The code has been refactored to use the async/await syntax for the post requests and to move the request options out of the functions into a constant variable that can be used by both functions.