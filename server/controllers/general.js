import User from '../modeles/user.js'

const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json(`Somting get Worng ${error}`)
  }
}

export default getUser
