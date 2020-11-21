class httpRequest {
  ajax(type, url, async) {
    //type:请求类型；url:请求地址；sync:是否异步请求
    let httpAjax = new XMLHttpRequest();
    let ajaxData = null;
    httpAjax.onreadystatechange = () => {
      switch (httpAjax.readyState) {
        case 0:
          // 此时对象尚未初始化，也没有调用open方法
          console.log("创建请求...");
          break;
        case 1:
          // 此时对象已经调用了open方法，当没有调用send方法
          console.log("请求创建成功，准备发送请求...");
          break;
        case 2:
          // 此时调用了send方法，但服务器还没有给出响应
          console.log("请求发送完毕，等待接收响应...");
          break;
        case 3:
          // 此时正在接收服务器的请求，当还没有结束，一般这里不做处理
          break;
        case 4:
          // 此时已经得到了服务器放回的数据，可以开始处理
          console.log("接收响应成功，开始处理...");
          ajaxData = this.sendData(httpAjax.responseText);
          console.info("ajaxData=", ajaxData);
          // 调用自定义的函数处理结果
          console.log("响应处理完毕，本次AJAX结束。");
          break;
      }
    };
    httpAjax.open(type, url, async);
    httpAjax.send();
    return ajaxData;
  }
  sendData(val) {
    return JSON.parse(val);
  }
}

class ajaxRequest {
  get(url) {
    const getPromise = new Promise((resolve, reject) => {
      const getMethod = new httpRequest();
      let getData = getMethod.ajax("get", url, true);
      return resolve(getData);
    });
    return getPromise;
  }
  post(url) {
    const postPromise = new Promise((resolve, reject) => {
      const postMethod = new httpRequest();
      let postData = postMethod.ajax("post", url, true);
      return resolve(postData);
    });
    return postPromise;
  }
}

export default ajaxRequest;
