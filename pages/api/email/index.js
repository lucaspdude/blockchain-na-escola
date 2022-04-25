import axios from 'axios'

import { CourierClient } from '@trycourier/courier'

export default async function emailHandler(req, res) {
  const { email } = req.body

  const { body } = req

  const courier = CourierClient({
    authorizationToken: process.env.TOKEN,
  })

  const parsedBody = JSON.parse(JSON.stringify(body))

  console.log(parsedBody)
  try {
    await await courier.send({
      message: {
        content: {
          title: 'Mensagem de contato pelo site',
          body: `${parsedBody.name} (${parsedBody.email}) enviou: \n ${parsedBody.message}`,
        },
        to: {
          email: process.env.MAIL,
        },
      },
    })
  } catch (e) {
    console.log(e)
    res.status(400).json({
      message: 'Ocorreu um erro ao enviar sua mensagem',
      error: e,
    })
    return
  }

  res.status(200).json(JSON.stringify({ message: 'Send Mail' }))
}
