class httpRequest {
  ajax(type, url, async, data) {
    //type:请求类型；url:请求地址；sync:是否异步请求
    return new Promise((resolve) => {
      let httpAjax = new XMLHttpRequest();
      httpAjax.onreadystatechange = () => {
        if (httpAjax.readyState == 4 && httpAjax.status == 200) {
          resolve(JSON.parse(httpAjax.responseText));
        }
      };
      httpAjax.open(type, url, async);
      httpAjax.send(data ? JSON.stringify(data) : null);
    });
  }
}

class ajaxRequest {
  get(url) {
    return new Promise((resolve, reject) => {
      const getMethod = new httpRequest();
      resolve(getMethod.ajax("get", url, true));
    });
  }
  post(url, data) {
    return new Promise((resolve, reject) => {
      const postMethod = new httpRequest();
      resolve(postMethod.ajax("post", url, true, data));
    });
  }
}

export default ajaxRequest;
