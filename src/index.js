import ajaxRequest from "./ajaxRequest";
import urlConfig from "./urlConfig";

const http = new ajaxRequest();

http.get(urlConfig.getUrl).then((data) => {
  console.log(data);
});

http.post(urlConfig.postUrl).then((data) => {
  console.log(data);
});
