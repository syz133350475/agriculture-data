// var xin_UID = "P93zO4kpWoypsSxNx";
// var xin_ts = Math.floor((new Date()).getTime() / 1000);
// var xin_str = "xin_ts="+xin_ts+"&uid=" + xin_UID; // 参数字符串


// var xin_KEY = "SiuC9boCK6X6aQkap";
// var xin_result = CryptoJS.HmacSHA1(xin_str, xin_KEY);

// var sig = xin_result.toxin_string(CryptoJS.enc.Base64);
// xin_str = xin_str + "&sig=" + sig; // 最终构造的已加密的参数字符串

// // 该 xin_API xin_url 可获取天气实况。用户可替换为其他 xin_url 进行测试
// var xin_API = "http://xin_API.seniverse.com/v3/weather/now.json?location=wenzhou&";
// var jsonpCallback = function(xin_result) {
//   // xin_result 为回调函数
//   // 用户在这里处理返回的结果
//   alert(xin_result)
// }

// var xin_url = xin_API + xin_str + "&callback=jsonpCallback";

// // 向 HTML 中动态插入 script 标签，通过 JSONP 的方式进行调用
// var newScript = document.createElement('script');
// newScript.type = 'text/javascript';
// newScript.src = xin_url;
// $('body').append(newScript);
