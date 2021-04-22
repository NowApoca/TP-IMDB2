
import getConfig from 'next/config'
import { Component } from 'react';

const API_URL = getConfig().publicRuntimeConfig.NEXT_PUBLIC_API_URL

const jsonHeaders = {
  "Content-Type": "application/json",
  "Accept": "application/json"
};

const formatToken = (token) => {
    return {'Authorization': token}
}

const hit = async ({ url, method, authentication, overrideBaseUrl },
    body, file, headerOverride, params) => {
    const token = localStorage.getItem('incaAccessToken')
    if(body) body = JSON.stringify(body)
    if (authentication && !token) return {status: 401};
    if(token) authentication = true;
    try {
    let bodyIsFormData = body instanceof FormData ? true : false;
    let rawResponse = null;
    if (!bodyIsFormData)
      try{
        rawResponse = await fetch((overrideBaseUrl || API_URL) + url, {
          method,
          body,
          mode: 'cors',
          headers: {
            ...(authentication && formatToken(token)),
            ...(body && jsonHeaders),
            ...(file && { "Content-Type": "multipart/form-data" }),
            ...(headerOverride && headerOverride)
          }
        });
      }catch(err){
      }
    if(rawResponse === undefined){
      return { status: 500, error: true }
    }
    try{
      const resp = await rawResponse.json(); 
      resp.status = rawResponse.status
      return resp
    }catch(e){
      return { result: null, status: rawResponse.status, error: rawResponse.status == 200 || rawResponse.status == 204? null : true }
    }
  } catch (err) {
  }
};

export default hit;