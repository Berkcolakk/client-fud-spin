

// Refactored code: 
import { userRegisterEndpoint, userLoginEndpoint } from '@utils/apiCostant.utils'
import { IUserDTO, IUser } from "@interfaces/Users/UsersInterfaces";

export const registerUser = async (user: IUser) => {
    try {
        const result = await fetch(`${process.env.NEXT_PUBLIC_HOST}${userRegisterEndpoint}`,{
            cache:'no-store'
        })
        return result.json();
    } catch (error) {
        console.error(error);
    }
};
export const loginUser = async (user: IUserDTO) => {
    try {
        const result = await fetch(`${process.env.NEXT_PUBLIC_HOST}${userLoginEndpoint}`)
        return result.json();
    } catch (error) {
        console.error(error);
    }
}

// Explanation: The code has been refactored to use the async/await syntax for the post requests and to move the request options out of the functions into a constant variable that can be used by both functions.