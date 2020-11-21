class ajaxRequest {
  get(url) {
    const getPromise = new Promise((resolve, reject) => {
      let getRequest = new XMLHttpRequest();
      getRequest.open("GET", url, false);
      getRequest.send(null);
      return resolve(JSON.parse(getRequest.responseText));
    });
    return getPromise;
  }
  post(url) {
    const postPromise = new Promise((resolve, reject) => {
      let postRequest = new XMLHttpRequest();
      postRequest.open("POST", url, false);
      postRequest.send(null);
      return resolve(JSON.parse(postRequest.responseText));
    });
    return postPromise;
  }
}
export default ajaxRequest;
