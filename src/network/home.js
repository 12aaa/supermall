import {request} from "./network";

export function getMultiData() {
  return request({
    url: '/api/wh/home/multidata'
  })
}

export function getProductData(type, page) {
  return request({
    url: '/api/wh/home/data',
    params: {
      type,
      page
    }
  })
}