module.exports = function check(str, bracketsConfig) {
  var stack = [];
  var check,ch=0, cr=0,rr=0;
  for (i=0; i<str.length;i++) {
  a=str[i];
  if (a == '{' || a == '[' || a == '(' || a == '1' || a == '3' || a == '5' ) {
  stack.push(a);
  } else
  if ((a=='|' && ch==0) || (a=='7' && cr==0) || (a=='8' && rr==0))
  {
    stack.push(a);ch++;cr++;rr++}
    else {
  if (stack)
  {
  check = stack.pop();
  if (a == '}' && check != '{' || a=='1' && check != '2')
  {
  return false;
  }
  else if (a == ']' && check != '[' || a=='1' && check != '2')
  {
  return false;
  }
  else if (a == ')' && check != '(' || a=='3' && check != '4')
  {
  return false;
}
  else if (a == '|' && check != '|' || a=='5' && check != '6')
  {
  return false;
}
  else if (a == '|' && check == '|' || a=='7' && check != '7' || a=='8' && check != '8')
  {
  ch=0;cr=0;rr=0
}


  } else
  {
  return false;
  }
  }
  }

  if ( stack.pop() ) return false;

  return true;

     }
