
import getConfig from 'next/config'
import { processReturn } from '../utils/utils';
import {mockData} from './mockData'

const API_URL = getConfig().publicRuntimeConfig.NEXT_PUBLIC_API_URL

const jsonHeaders = {
  "Content-Type": "text/plain",
  "Accept": "text/plain",
  'Access-Control-Allow-Origin': '*,'
};

const formatToken = (token) => {
    return {'Authorization': token}
}

const hit = async ({ url, method, authentication, overrideBaseUrl }, opts = {}) => {
    console.log('NO VENGO ACA?')
    const token = localStorage.getItem('gpiAccessToken') || 'asd'
    if(opts.body) opts.body = JSON.stringify(opts.body)
    if (authentication && !token) return {status: 401};
    if(token) authentication = true;
    try {
    let bodyIsFormData = opts.body instanceof FormData ? true : false;
    let rawResponse = null;
    if (!bodyIsFormData)
      try{
        rawResponse = true? await fetch( `https://localhost:44330/hello?prueba=5` /* (overrideBaseUrl || API_URL) + url */, {
          method,
          body: opts.body,
          mode: 'cors',
          headers: {
            ...(opts.body && jsonHeaders),
          }
        }) : mockData(url, method);
      }catch(err){
        console.log(err,'ERRRRRRR'); 
      }
    console.log(rawResponse, 'RESPONSEEEEEEE');
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