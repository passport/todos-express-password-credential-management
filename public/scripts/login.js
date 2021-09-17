window.onload = function() {
  console.log('load...');
  
  navigator.credentials.get({ 'password': true })
    .then(function(credential) {
      console.log('got cred!');
      console.log(credential)
      
      if (!credential) { return; }
      
      if (credential.type === 'password') {
        document.querySelector('input[name=username]').value = credential.id;
        document.querySelector('input[name=password]').value = credential.password;
        document.querySelector('form').submit();
      }
    });
  
  // https://web.dev/sign-in-form-best-practices/
  
  document.querySelector('form').addEventListener('submit', function(e) {
    //return
    
    e.preventDefault();
    
    console.log('FORM SUBMITTED');
    
    var c = new PasswordCredential(e.target);
    console.log(c);
    
    // NOTE: don't get redirected location with redirect manual, necessitates JSON-based API
    
    var opt = {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: new FormData(e.target),
      credentials: 'include',  // Send cookies.
      //redirect : 'manual'
    };
    fetch(e.target.action, opt).then(function(r) {
      console.log('got response');
      console.log(r)
      
      
      
      //if (/* |r| is a "successful" Response */)
      //navigator.credentials.store(c);
      
      navigator.credentials.store(c)
        .then(function() {
          console.log('stored!');
          
          // https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage/506004#506004
          window.location.href = '/';
        });
      
    });
    
  });
  
  
};
