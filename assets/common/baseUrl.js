import { Platform } from "react-native";

let baseUrl = "";
{
  Platform.OS == "android"
    ? (baseUrl = "http://10.0.2.2:3000/api/")
    : (baseUrl = "http://loacalhost:3000/api/");
}

export default baseUrl;
