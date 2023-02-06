import type { NextApiRequest, NextApiResponse } from 'next'
import { IWheel } from '@interfaces/Wheels/WheelsInterfaces';
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<IWheel>>
) {
    const datas = [];
    res.status(200).json(datas)
}
