import axios from 'axios'

export const parseFiltersToQueryString = (array?: string[]): string => {
  if (!array || array.length === 0) return ''
  const items = array.map((item: string) => {
    const arrItemFilter = item.split('=')
    const key = arrItemFilter[0]
    const val = arrItemFilter[1]
    return `filter[${key}]=${val}`
  })
  if (items.length === 0) return ''

  return items.reduce((objeto, atual, index) => {
    if (index === items.length - 1) {
      return `${objeto}&${atual}`
    } else {
      return `${objeto}&${atual}&`
    }
  })
}

const instance = axios.create({
  baseURL: '/api/',
  headers: {
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
})

instance.interceptors.response.use(
  (response) => {
    return response.data.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

const Server = instance
export const parseDataWithEmptyValues = (obj: object): object => {
  Object.keys(obj).forEach((key) => {
    if (obj[key as keyof object] === '' || obj[key as keyof object] === null) {
      delete obj[key as keyof object]
    }
  })
  return obj
}

class ApiService {
  async get(route: string): Promise<never> {
    return Server.get(`${route}`)
  }
  async post(route: string, data: object): Promise<never> {
    const parsedData = parseDataWithEmptyValues(data)
    return Server.post(route, parsedData)
  }
  async put(route: string, data: object): Promise<never> {
    const parsedData = parseDataWithEmptyValues(data)
    return Server.put(route, parsedData)
  }
  async delete(route: string): Promise<never> {
    return Server.delete(route)
  }
}

export default new ApiService()
