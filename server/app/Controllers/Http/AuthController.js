'use strict'
const User = use('App/Models/User')
class AuthController {

  async register({request}){
    const data = request.only(['username','email', 'password', 'representation_type', 'representation'])

    const user = await User.create(data)

    return user 
  }
  async authenticate({request, auth}){
    const {email, password} = request.all()
    const token = await auth.attempt(email, password)
   
    return {token}
  }

  async getUserInfo({auth}){
    const userInfo = auth.getUser()
    return userInfo
  }
  async index(){
    const users = await User.all()
    return users
  }
}

module.exports = AuthController
