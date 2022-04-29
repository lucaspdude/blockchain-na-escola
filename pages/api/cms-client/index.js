import axios from 'axios'

export default async function emailHandler(req, res) {
  try {
    const response = await axios.get('http://localhost:1337/api/clients/1')
    console.log(response.data)
    res.status(200).json(response.data)
  } catch (e) {
    console.log(e)
    res.status(400).json({
      message: 'Erro',
      error: e,
    })
    return
  }
}
