import { v4 as uuidv4 } from 'uuid';
import type { NextApiRequest, NextApiResponse } from 'next'
import { IWheel } from '@interfaces/Wheels/WheelsInterfaces';
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<IWheel>>
) {
    const datas = [
        {
            id: uuidv4(),
            name: "Pizzas",
            color: "#AA5656"
        },
        {
            id: uuidv4(),
            name: "Hamburger",
            color: "#FFEA20"
        },
        {
            id: uuidv4(),
            name: "Pastas",
            color: "#CD0404"
        },
        {
            id: uuidv4(),
            name: "Risotto",
            color: "#A31ACB"
        },
        {
            id: uuidv4(),
            name: "Doner",
            color: "#FF6E31"
        }
    ]
    res.status(200).json(datas)
}
