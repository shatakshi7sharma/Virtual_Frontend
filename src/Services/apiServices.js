
import { BASE_URL } from '../constants';
import { getCookie } from './cookies';
//import { aes256decrypt, aes256encrypt } from './helper';


const appviewModel = {
  sendApiCall: async (
    url,
    payload,
    method,
  ) => {
    method = method || 'POST';

    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      // access_token : '',
    };
    const requestBody = {
      body: null,
      method,
      headers: null,
    };
    const token = getCookie('hype')?.token;
    //'613|XGrItXtPViGX8GOsQaAFQ7nxjiJmgGl3fjpN6t5L';
    headers.client_secret = "";


    if (token) {
      headers.access_token = `${token}`;
    }
    if ((method === 'POST' || method === 'PUT' || method === 'DELETE' || method === 'PATCH') && payload) {
      // const enc = aes256encrypt([payload]);

      // const newPayload = { ...enc[0] };
      requestBody.body = JSON.stringify(payload);

      //requestBody.body = JSON.stringify(payload);
    }
    requestBody.headers = headers;
    requestBody.method = method;
    const response = await fetch(BASE_URL + url, requestBody);
    const data = await response.json();
         return await data;

  },
};
export default appviewModel;

// = {
      //   'Content-Type': 'application/json',
      //   Authorization: 'Bearer'+ token,
      //   Accept: 'application/json'
      // }
