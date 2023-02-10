import { v4 as uuidv4 } from 'uuid';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const body = JSON.parse(req.body)
    res.status(200).json(body)
}
