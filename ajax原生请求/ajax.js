function formatParams(data) {
  var arr = [];
  for (var name in data) {
    arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
  }
  arr.push(("v=" + Math.random()).replace(".",""));
  return arr.join("&");
}

function ajax(url, method, data){
  var xhr = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  xhr.send(formatParams(data));
  xhr.onreadystatechange = function(){
    if(xhr.readyState==4){
      if(xhr.status == 200){
        console.log(xhr.responseText);
      }
    }
  }
}

export default ajax;
