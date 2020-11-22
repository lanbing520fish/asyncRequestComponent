import ajaxRequest from "./ajaxRequest";
import urlConfig from "./urlConfig";

const request = new ajaxRequest();

// request.get(urlConfig.getUrl).then((data) => {
//   console.log("data===", data);
// });

request
  .post(urlConfig.postUrl, {
    a: 1,
    b: 1,
  })
  .then((data) => {
    console.log(data);
  });
