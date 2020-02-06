import {request} from './network'


export function getCategory() {
  return request({
    url: '/api/hy/category'
  })
}

export function getSubcategory(maitKey) {
  return request({
    url: '/api/hy/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: '/api/hy/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
