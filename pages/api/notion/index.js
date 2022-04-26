import axios from 'axios'
import { Client } from '@notionhq/client'

export default async function notion(req, res) {
  try {
    const notion = new Client({ auth: process.env.NOTION_ACCESS_TOKEN })
    const pageId = '779fe2b80aa94d0cabf8114d9d71d224'

    const response = await notion.pages.retrieve({ page_id: pageId })
    console.log(response)
    res.status(200).json()
  } catch (e) {
    console.log(e)
    res.status(400).json({
      message: 'Ocorreu um erro ao enviar sua mensagem',
      error: e,
    })
    return
  }
}
