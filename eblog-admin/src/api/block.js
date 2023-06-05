import axios from 'axios'

const url = 'http://localhost:8000/block'

export function selectBlock () {
  return axios({
    url: url,
    method: 'get'
  })
}

export function updateBlock (params) {
  return axios({
    url: url,
    method: 'put',
    params
  })
}

export function insertBlock (params) {
  return axios({
    url: url,
    method: 'post',
    params
  })
}

export function deleteBlock (params) {
  return axios({
    url: url,
    method: 'delete',
    params
  })
}
