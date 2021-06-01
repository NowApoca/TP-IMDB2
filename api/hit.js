
import getConfig from 'next/config'
import { processReturn } from '../utils/utils';
import {mockData} from './mockData'

const API_URL = getConfig().publicRuntimeConfig.NEXT_PUBLIC_API_URL

const jsonHeaders = {
  "Content-Type": "application/json",
  "Accept": "application/json"
};

const formatToken = (token) => {
    return {'Authorization': token}
}

const hit = async ({ url, method, authentication, overrideBaseUrl }, opts = {}) => {
    const token = localStorage.getItem('gpiAccessToken')
    if(opts.body) opts.body = JSON.stringify(opts.body)
    if (authentication && !token) return {status: 401};
    if(token) authentication = true;
    try {
    let bodyIsFormData = opts.body instanceof FormData ? true : false;
    let rawResponse = null;
    if (!bodyIsFormData)
      try{
        rawResponse = false? await fetch((overrideBaseUrl || API_URL) + url, {
          method,
          body,
          mode: 'cors',
          headers: {
            ...(authentication && formatToken(token)),
            ...(body && jsonHeaders),
            ...(file && { "Content-Type": "multipart/form-data" }),
            ...(headerOverride && headerOverride)
          }
        }) : mockData(url, method);
      }catch(err){
        
      }
    if(rawResponse === undefined){
      return processReturn({ status: 500, error: {message: 'INTERNAL_ERROR'}}, opts.toasts, opts.t)
    }
    try{
      const resp = await rawResponse.json(); 
      resp.status = rawResponse.status
      return processReturn(resp, opts.toasts, opts.t)
    }catch(e){
      console.log(e, 'err 3')
      return processReturn({
        result: null,
        status: rawResponse.status,
        error: rawResponse.status == 200 || rawResponse.status == 204? '' : {message: 'INTERNAL_ERROR'} 
      }, opts.toasts, opts.t)
    }
  } catch (err) {
    console.log(err, 'err 2')
  }
};

export default hit;