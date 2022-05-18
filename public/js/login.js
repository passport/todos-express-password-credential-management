window.addEventListener('load', function() {
  console.log('load...');
  
  if (window.PasswordCredential) {
    navigator.credentials
      .get({ 'password': true, mediation: 'required' })
      .then(function(credential) {
        if (!credential) { return; }
      
        if (credential.type === 'password') {
          document.querySelector('input[name=username]').value = credential.id;
          document.querySelector('input[name=password]').value = credential.password;
          document.querySelector('form').submit();
        }
      });
    
    
    document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault();
      
      fetch('/login/password', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: new FormData(event.target),
      }).then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json)
        
        if (json.ok) {
          var credential = new PasswordCredential(event.target);
          navigator.credentials.store(credential)
            .catch(function(error) {
              console.log(error)
            });
        }
        
        window.location.href = json.location;
      }).catch(function(error) {
        console.log(error);
      });
    });
  }
});
