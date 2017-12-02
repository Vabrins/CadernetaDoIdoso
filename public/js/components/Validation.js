const Validation = {
  isNotEmpty:function (str) {
    var pattern =/\S+/;
    return pattern.test(str);
  },
  isNumber:function(str) {
    if (str == "") {
      return true;
    }
    var pattern = /^\d+$/;
    return pattern.test(str);
  },
  checkCpf:function(str) {
    var sum = 0;
    var rest;
    var toReturn = true;
    var i = 1;

    if (str == "00000000000" || str == "99999999999" || str == "11111111111" || str == "22222222222" || str == "33333333333" || str == "44444444444" || str == "44444444444" || str == "55555555555" || str == "66666666666" || str == "77777777777" || str == "88888888888") toReturn = false;

    if (str == "") toReturn = false;
    
    for (i=1; i<=9; i++) sum = sum + parseInt(str.substring(i-1, i)) * (11 - i);
    rest = (sum * 10) % 11;
    
    if ((rest == 10) || (rest == 11))  rest = 0;
    if (rest != parseInt(str.substring(9, 10)) ) toReturn = false;
    
    sum = 0;
    for (i = 1; i <= 10; i++) sum = sum + parseInt(str.substring(i-1, i)) * (12 - i);
    rest = (sum * 10) % 11;
    
    if ((rest == 10) || (rest == 11))  rest = 0;
    if (rest != parseInt(str.substring(10, 11) ) ) toReturn = false;

    return toReturn;
  },
};
export default Validation;
