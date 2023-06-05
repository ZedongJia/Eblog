import axios from 'axios'

export function requireBlocks () {
  return axios({
    url: 'http://localhost:8000/block',
    method: 'get'
  })
}
