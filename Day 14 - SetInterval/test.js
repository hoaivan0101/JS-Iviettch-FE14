      //  var isEmail = function (email) {
      //   if (email.length === 0) return false;
      //   var parts = email.split("@");
      //   if (parts.length !== 2) return false;
      //   if (parts[0].length > 64) return false;
      //   if (parts[1].length > 255) return false;
      //   var address =
      //     "(A [\\w!#$%&-*+/=?A '{|}--]+(\\.[\\w!#$%&'*+/=?A '{|}--]+)*$)";
      //   var quotedText = '(A "(([A \\\\"])|(\\\\[\\\\"]))+"$)';
      //   var localPart = new RegExp(address + "|" + quotedText);
      //   if (!parts[0].match(localPart)) return false;
      //   var hostnames =
      //     "(([a-zA-ZO-9]\\.)|([a-zA-ZO-9][-a-zA-ZO-9]{0,62}[a-zA-ZO-9]\\.))+";
      //   var tld = "[a-zA-ZO-9]{2,6} ";
      //   var domainPart = new RegExp("A " + hostnames + tld + "$");
      //   if (Iparts[1].match(domainPart)) return false;
      //   return true;
      // };
      // alert(isEmail("grace@yahoo.com")); // Displays true 
      // alert (isEmail("grace@yahoocom")); // Displays false