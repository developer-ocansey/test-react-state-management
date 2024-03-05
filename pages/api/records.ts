import type {NextApiRequest, NextApiResponse} from "next";
import dayjs from "dayjs";

export type Data = {
    name: string;
    nkey: number;
    updatedAt: number;
};

const now = dayjs()

const data: Data[] = [
    {nkey: 0, name: "John Doe", updatedAt: now.unix()},
    {nkey: 1, name: "Emma Elijah", updatedAt: now.unix()},
    {nkey: 2, name: "Michael Lucas", updatedAt: now.unix()},
    {nkey: 3, name: "Sophia Logan", updatedAt: now.unix()},
    {nkey: 4, name: "William Evelyn", updatedAt: now.unix()},
    {nkey: 5, name: "Olivia Mason", updatedAt: now.unix()},
    {nkey: 6, name: "James Mia", updatedAt: now.unix()},
    {nkey: 7, name: "Amelia Caden", updatedAt: now.unix()},
    {nkey: 8, name: "Benjamin Harper", updatedAt: now.unix()},
    {nkey: 9, name: "Isabella Grayson", updatedAt: now.unix()},
    {nkey: 10, name: "Noah Charlotte", updatedAt: now.unix()},
    {nkey: 11, name: "Ava Olivia", updatedAt: now.unix()},
    {nkey: 12, name: "Aiden Jackson", updatedAt: now.unix()},
]

const handler = (
    req: NextApiRequest,
    res: NextApiResponse<Data[]>,
) => {
    const now = dayjs()
    const indexToUpdate = Math.floor(Math.random() * data.length);
    data[indexToUpdate].updatedAt = now.unix();

    res.status(200).json(data);
}

export default handler