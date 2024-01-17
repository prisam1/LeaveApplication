import AppServices from './config';

export const login = (payload: any) =>
  AppServices.client.post('/LoginInsData', payload);
 

 