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
};
export default Validation;
