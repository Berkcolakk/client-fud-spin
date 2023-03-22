import { v4 as uuidv4 } from 'uuid';
import type { NextApiRequest, NextApiResponse } from 'next'
import { loginUserWithApi } from '@services/UserService';
import { ILoginDTO } from "@interfaces/Users/UsersInterfaces";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const LoginProp: ILoginDTO = JSON.parse(req.body);
    const data =await loginUserWithApi({
        UserName: LoginProp.Email,
        Password: LoginProp.Password
    });
    console.log(data);
    res.status(200).json(data)
}
