function ajax(object){
  if(object.method.length > 0 && typeof object.method != undefined){
    var Request = new XMLHttpRequest();
    if(typeof object.url != 'undefined' && object.url.length > 0 && typeof object.method != 'undefined' && object.method.length > 0){
      if(object.method === "POST"){
        Request.open(object.method, object.url);
        Request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        sendOpts = "";
      } else if(object.method === "GET"){
        Request.open(object.method, object.url);
        sendOpts = "";
      } else {
        console.log("The AJAX Method must be either 'POST' or 'GET'");
        return false;
      }
    } else if(typeof object.url == 'undefined' || object.url.length === 0){
      console.log("The AJAX URL cannot be empty or undefined.");
      return false;
    } else if(typeof object.method == 'undefined' || object.method.length === 0){
      console.log("The AJAX Method cannot be empty or undefined.");
      return false;
    } else {
      console.log("The AJAX Method must be either 'POST' or 'GET'");
      return false;
    }
    Request.onload = function(){
      if(Request.status === 200){
        if(typeof object.success == "function"){
          object.success(Request.responseText);
        } else {
          console.log("The XMLHttpRequest succeeded, but no success function was supplied to the ajax() function.");
        }
      } else {
        if(typeof object.fail == "function"){
          object.fail(Request.statusText);
        } else {
          console.log("The XMLHttpRequest failed, but no fail function was supplied to the ajax() function.");
        }
      }
    }
    Request.send(sendOpts);
  }
}
