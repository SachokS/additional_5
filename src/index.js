module.exports = function check(str, bracketsConfig) {
  var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var f = 0;
    var g = 0;
    var t = 0;
    var s = 0;
    var aa = 0;
    var bb = 0;
    var cc = 0;
    var dd = 0;
    var ff = 0;
    var gg = 0;
    var ss = 0;
    var tt = 0;

    for(var i=0;i<str.length;i++)
    {
    if (str[i] = "(") {a++}
    if (str[i] = ")") {b++}
    if (str[i] = "{") {c++}
    if (str[i] = "}") {d++}
    if (str[i] = "[") {f++}
    if (str[i] = "]") {g++}
    if (str[i] = ",") {t++}
    if (str[i] = "|") {s++}
    if (str[i] = '1') {aa++}
    if (str[i] = '2') {bb++}
    if (str[i] = '3') {cc++}
    if (str[i] = '4') {dd++}
    if (str[i] = '5') {ff++}
    if (str[i] = '6') {gg++}
    if (str[i] = '7') {ss++}
    if (str[i] = '8') {tt++}
    }

    if((a-b+c-d+f-g)==0 && t%2==0 && s%2==0 && (aa-bb+cc-dd+ff-gg)==0 && ss%2==0 && tt%2==0 )
    {
      return true;
    }
    else
     {
      return false;
     } // your solution
}
