
function loadDokument() {
    "use strict";
    document.getElementById("appdiv").innerHTML = 'Tryk så <a href="javascript:startEtude(0);return(0);" >her</a> for at starte';
}

function startEtude(nummer) {
    
    "use strict";
    switch (nummer) {
    case 0:
        document.getElementById("appdiv").innerHTML = 'Tryk herefter <a href="javascript:startEtude(1);return(0);" >her</a> for at gå videre';
        break;
    case 1:
        document.getElementById("appdiv").innerHTML = 'Tryk endelg <a href="javascript:startEtude(2);return(0);" >her</a> for at gå endnu videre';
        break;
    }
  
}