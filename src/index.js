import ajaxRequest from "./ajaxRequest";
import urlConfig from "./urlConfig";

const request = new ajaxRequest();

request.get(urlConfig.getUrl).then((data) => {
  console.log(data);
});

request.post(urlConfig.postUrl).then((data) => {
  console.log(data);
});
