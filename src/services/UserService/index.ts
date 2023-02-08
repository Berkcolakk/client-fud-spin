

// Refactored code: 
import { userRegisterEndpoint, userLoginEndpoint } from '@utils/apiCostant.utils'
import { ILoginDTO,IRegisterDTO } from "@interfaces/Users/UsersInterfaces";
import api from '@services/BaseService';
export const registerUser = async (user: IRegisterDTO) => {
    try {
        return await (await api({ Url: userRegisterEndpoint, Body: user, Method: "POST" })).json();
    } catch (error) {
        console.error(error);
    }
};
export const loginUser = async (user: ILoginDTO) => {
    try {
        return await (await api({ Url: userLoginEndpoint, Body: user, Method: "PUT" })).json();
    } catch (error) {
        console.error(error);
    }
}

// Explanation: The code has been refactored to use the async/await syntax for the post requests and to move the request options out of the functions into a constant variable that can be used by both functions.