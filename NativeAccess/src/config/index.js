import Config from "react-native-config";
// import {API_HOST} from "@env"
const config = {
  api: {
    host: Config.FIREBASE_DB,
    // timeout: 20000
  }
};

const API_HOST = config.api.host;
console.log(API_HOST)
export {
  API_HOST
}

export default config