function ajax(object){
  if(object.method.length > 0 && typeof object.method != undefined){
    var Request = new XMLHttpRequest();
    Request.open(object.method, object.url);
    if(object.method === "POST"){
      Request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      sendOpts = "";
    } else if(object.method !== "GET"){
      return false;
      console.log("Method must be POST or GET!");
    } else {
      sendOpts = ""; 
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
