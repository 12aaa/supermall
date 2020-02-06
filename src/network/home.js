import {request} from "./network";

export function getMultiData() {
  return request({
    url: '/api/hy/home/multidata'
  })
}

export function getProductData(type, page) {
  return request({
    url: '/api/hy/home/data',
    params: {
      type,
      page
    }
  })
}