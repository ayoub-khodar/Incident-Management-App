const BASE = 'http://localhost';
const PORT = 8080;
const PATH = '/api';


export const API_URLS = {
  ARTICLES_URL : BASE + ':' + PORT + PATH + '/article',
  USER_URL : BASE + ':' + PORT + PATH + '/user',
  USER_CRUD_URL : BASE + ':' + PORT + '/crud_user',
  EXPORT_URL : BASE + ':' + PORT + PATH + '/export/pdf'
  // FILES_URL : BASE + ':' + PORT + PATH + ''
  // RESET_URL:'http://localhost:8080/api/reset-password',
  // FORGOT_URL:'http://localhost:8080/api/forgot-password'
};
