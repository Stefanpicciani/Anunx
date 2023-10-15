import UsersModel from '../../models/users'
import dbConnect from '../../utils/dbConnect'
import { crypto, compare } from '../../utils/password'

const get = async (req, res) => {
  await dbConnect()
  const users = await UsersModel.find()
  res.status(200).json({ success: true, users })
}


const post = async (req, res) => {
  const {  
    email,
    password,
  } = req.body

  await dbConnect()

  const user = await UsersModel.findOne({ email })

  if(!user) {
    return res.status(401).json({ success: false, message: 'invalid'})
  }

  const passIsCorrect = compare(password, user.password)

  if(passIsCorrect)
  {
    return res.status(200).json({ 
        _id: user.id,
        name: user.name,
        email: user.email,
     })
  }

  res.status(401).json({ success: false, message: 'invalid' })
}


export {
  post,
}