class httpRequest {
  ajax(type, url, async) {
    //type:请求类型；url:请求地址；sync:是否异步请求
    let httpAjax = new XMLHttpRequest();
    httpAjax.open(type, url, async);
    httpAjax.send();
    return httpAjax.responseText ? JSON.parse(httpAjax.responseText) : null;
  }
}

class ajaxRequest {
  get(url) {
    const getPromise = new Promise((resolve, reject) => {
      const getMethod = new httpRequest();
      let getData = getMethod.ajax("get", url, false);
      return resolve(getData);
    });
    return getPromise;
  }
  post(url) {
    const postPromise = new Promise((resolve, reject) => {
      const postMethod = new httpRequest();
      let postData = postMethod.ajax("post", url, false);
      return resolve(postData);
    });
    return postPromise;
  }
}

export default ajaxRequest;
