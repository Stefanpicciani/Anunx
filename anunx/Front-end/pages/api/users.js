import dbConnect from "@/src/utils/dbConnect";
import UsersModel from '../../src/models/users';
import { crypto } from '../../src/utils/password';

const users = async (req, res) => {
    const { method} = req

    switch(method) {
        case 'GET':
            await dbConnect()
            res.status(200).json({ success: true })
            break

        case 'POST': 
            // PEGAR DADOS QUE VEM NO REQ
            //conectar ao banco
            //criptografar a senha
            //salvar dados
            // responder sucesso
            const {
                name,
                email,
                password,
            } = req.body

            await dbConnect()

            const passwordCrypto = await crypto(password)

            const user = new UsersModel({
                name,
                email,
                password: passwordCrypto,
            })

           await user.save()

            res.status(201).json({ success: true })
    }
};

export default users;