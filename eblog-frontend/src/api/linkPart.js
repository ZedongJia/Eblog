import axios from 'axios'

export function requireLinkParts () {
  return axios({
    url: 'http://localhost:8000/linkPart',
    method: 'get'
  })
}
