let API_ROOT = (process.env.NODE_ENV === 'production') ? '/api' : '/api';

//要代理的url
let url = "http://dev.admin.cloudsdnet.com";

module.exports.url = url;
module.exports.api = API_ROOT;


