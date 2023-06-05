import axios from 'axios'

const url = 'http://localhost:8000/linkPart'

export function selectLinkPart () {
  return axios({
    url: url,
    method: 'get'
  })
}

export function updateLinkPart (params) {
  return axios({
    url: url,
    method: 'put',
    params
  })
}

export function insertLinkPart (params) {
  return axios({
    url: url,
    method: 'post',
    params
  })
}

export function deleteLinkPart (params) {
  return axios({
    url: url,
    method: 'delete',
    params
  })
}
