    function checkCPF(strCPF) {
        var sum;
        var rest;
        var toReturn = true;
        sum = 0;

        if (strCPF == "00000000000" || strCPF == "99999999999" || strCPF == "11111111111" || strCPF == "22222222222" || strCPF == "33333333333" || strCPF == "44444444444" || strCPF == "44444444444" || strCPF == "55555555555" || strCPF == "66666666666" || strCPF == "77777777777" || strCPF == "88888888888") toReturn = false;
        
        for (i=1; i<=9; i++) sum = sum + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        rest = (sum * 10) % 11;
        
        if ((rest == 10) || (rest == 11))  rest = 0;
        if (rest != parseInt(strCPF.substring(9, 10)) ) toReturn = false;
        
        sum = 0;
        for (i = 1; i <= 10; i++) sum = sum + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        rest = (sum * 10) % 11;
        
        if ((rest == 10) || (rest == 11))  rest = 0;
        if (rest != parseInt(strCPF.substring(10, 11) ) ) toReturn = false;  

        if(!toReturn){
            alert('CPF inválido!');
            clearCookie();        
            CPF.value = "";
        }
        return true;
    }

    function existCPF(cpf) {
        $.ajax({
          url: "/api/v1/elderly/"+cpf,
          contentType: "application/json",
          dataType: "json",
          method: "GET",
          success: function(response){
            alert("CPF encontrado!");
            return true;
          },
          error: function(response){
            alert("Erro ao buscar CPF");
            return false;
          }
        });
    }

    function onlyNumbers(evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode( key );
        var regex = /^\d+$/;
        if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
        }
    }

    function isLogged() {
        $.ajax({
          url: "/api/v1/elderly/isLogged",
          contentType: "application/json",
          dataType: "json",
          method: "GET",
          success: function(response){
            alert(response);
          },
          error: function(response){
            alert("Erro ao checar.");
          }
        });
    }

    function clearCookie() {      
      document.cookie = 'id_elderly=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    function setCookie(value, days) {
      if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          var expires = "; expires=" + date.toGMTString();
      } else {
        var expires = "";
        document.cookie = "id_elderly=" + JSON.stringify(value) + expires + "; path=/";
      }
    }

    function elderlyRedirect(){
      window.location.href = "/index";
    }