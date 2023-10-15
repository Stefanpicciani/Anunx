import nextConnect from 'next-connect';
import { getUsers, createUser } from '../../src/controllers/users';

const handler = nextConnect();

handler.get(getUsers);
handler.post(createUser);

export default handler;
