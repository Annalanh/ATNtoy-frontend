import axios1 from 'axios';
import config from "./config";
export default axios1.create({
    baseURL : config.rootPath,
    withCredentials: true 
});