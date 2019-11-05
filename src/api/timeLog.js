import axios from 'axios'

export async function log (id) {
  const result = await axios({
    method: 'post',
    url: '/api/facade/saveParam',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      id: id
    }
  })
  return result
}
