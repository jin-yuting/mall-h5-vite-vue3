/*
 * @Copyright: 
 * @file name: File name
 * @Data: Do not edit
 * @LastEditors: jinyt
 * @LastData: 
 * @Describe: 
 */
// 图片前缀方法
export const prefix = (url) => {
  if (url && url.startsWith('http')) {
    return url
  } else {
    url = `http://backend-api-01.newbee.ltd${url}`
    return url
  }
}