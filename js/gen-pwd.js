function genPwd() {
  var str = document.getElementById("pwd").value;
  copyToClipboard(str);

  var newPwd = '';
  var char2 = str.charCodeAt(2);
  var char1 = str.charCodeAt(1);
  var char0 = str.charCodeAt(0);
  if (char2 == 'z'.charCodeAt(0)) {       // xxz
    if (char1 == 'z'.charCodeAt(0)) {     // xzz
        if (char0 != 'z'.charCodeAt(0)) { // xzz
            newPwd = String.fromCharCode(char0 + 1, 'a'.charCodeAt(0), 'a'.charCodeAt(0));
        } else {            // zzz
            newPwd = String.fromCharCode(char0, char1, char2);
        }
    } else {                // xxz
        newPwd = String.fromCharCode(char0, char1 + 1, 'a'.charCodeAt(0));
    }
  } else {                  // xxx
    newPwd = String.fromCharCode(char0, char1, char2 + 1);
  }
  document.getElementById("pwd").value = newPwd;
}

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}