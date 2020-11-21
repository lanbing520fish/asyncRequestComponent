import ajaxRequest from "./ajaxRequest";

let getUrl = "https://mock.yonyoucloud.com/mock/6126/error";
let postUrl = "https://mock.yonyoucloud.com/mock/6126/ceshi";

const http = new ajaxRequest();

http.get(getUrl).then((data) => {
  console.log(data);
});

http.post(postUrl).then((data) => {
  console.log(data);
});
