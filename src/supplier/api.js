import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_API_URL;

export function getSuppliers(token, page = 1) {
  return axios({
    method: 'GET',
    url: `${baseUrl}/suppliers?page=${page}`,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
}

export function postSupplier(token, payload) {
  const { name, email, phone, address } = payload;
  return axios({
    method: 'POST',
    url: `${baseUrl}/suppliers`,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    data: {
      name,
      email,
      phone,
      address
    }
  });
}