import {each} from 'lodash';
import format from 'format-number';
export const customFetch = (url, method,token, body, contentType = 'application/json', ) => {
  const options = {
    headers: {
      'Content-Type': contentType,
      Accept: 'application/json',
    },
    method,
  };
  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }
  if (body) {
    options.body = JSON.stringify(body);
  }
  return fetch(url, options)
    .then(async (response) => {
      if (!response.ok) {
        const resp = await response.json();
        console.error('Error completo: ', resp);
        const { message } = resp;
        return Promise.reject(new Error(`Ocurrió un error en la ruta ${url}: ${JSON.stringify(resp.errors) || message}`));
      }
      return response.json();
    })
    .then(responseData => responseData)
    .catch(e => Promise.reject(e));
};

export const prepareArraySelect = (array, rowValue, rowLabel) => {
  const newArray = [];

  each(array, (item) => {
    const objectItem = {};
    objectItem.value = item[rowValue];
    objectItem.label = item[rowLabel];
    newArray.push(objectItem);
  });
  return newArray;
};

export const thousands = (number, decimals, decPoint = ',', thousandsSep = '.') => (format({ round: decimals, integerSeparator: thousandsSep, decimal: ',' })(number));
