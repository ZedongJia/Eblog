import axios from 'axios'

const url = 'http://localhost:8000/blog'
const url1 = 'http://localhost:8000/blogAll'

export function selectBlog () {
  return axios({
    url: url1,
    method: 'get'
  })
}

export function updateBlog (params) {
  return axios({
    url: url,
    method: 'put',
    params
  })
}

export function insertBlog (params) {
  return axios({
    url: url,
    method: 'post',
    params
  })
}

export function deleteBlog (params) {
  return axios({
    url: url,
    method: 'delete',
    params
  })
}
