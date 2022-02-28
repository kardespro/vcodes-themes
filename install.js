const axios = require("axios");
const Nego_Lis_Key = "free"

let theme = "Yellow"



class install {
static initiliazeCss(){
let data = axios.get(`https://api.negodev.org/api/v1/vcodes-theme/css?lisance=${Nego_Lis_Key}&theme=${theme}`);
let res = data.data;
if(res.status === 404) return throw new TypeError(res.message);
return res.message
}
}

module.exports = install;
