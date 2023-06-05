import axios from 'axios'

// 按从新到旧的顺序传进来，参数
// params: {
//   topicId: ''
// }
export function requireBlogs (params) {
  return axios({
    url: 'http://localhost:8000/blog',
    method: 'get',
    params
  })
}
