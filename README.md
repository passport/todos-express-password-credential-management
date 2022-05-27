# todos-express-password-credential-management

This app illustrates how to use [Passport](https://www.passportjs.org/) with
[Express](https://expressjs.com/) to sign users in with a username and password.
It takes the [baseline example](https://github.com/passport/todos-express-password)
and extends it with [Credential Management](https://www.w3.org/TR/credential-management-1/),
allowing the browser to assist with the storage and selection of passwords.  Use
this example as a starting point for your own web applications.

## Quick Start

To run this app, clone the repository and install dependencies:

```bash
$ git clone https://github.com/passport/todos-express-password-credential-management.git
$ cd todos-express-password-credential-management
$ npm install
```

Then start the server.

```bash
$ npm start
```

Navigate to [`http://localhost:3000`](http://localhost:3000).

## Overview

This app illustrates how to build a todo app with sign in functionality using
Express, Passport, and the [`passport-local`](https://www.passportjs.org/packages/passport-local/)
strategy.

This app is a traditional web application, in which application logic and data
persistence resides on the server.  HTML pages and forms are rendered by the
server and client-side JavaScript is kept to a minimum.

This app is built using the Express web framework.  Data is persisted to a
[SQLite](https://www.sqlite.org/) database.  HTML pages are rendered using [EJS](https://ejs.co/)
templates, and are styled using vanilla CSS.

When a user first arrives at this app, they are prompted to sign in.  Once
authenticated, a login session is established and maintained between the server
and the user's browser with a cookie.

The sign in page is progressively enhanced with JavaScript in order to utilize
the Credential Management API.  For browsers that support it, form submission
is overridden and the user is offered the option to store their password making
it easy to select when they later return to the app.

After signing in, the user can view, create, and edit todo items.  Interaction
occurs by clicking links and submitting forms, which trigger HTTP requests.
The browser automatically includes the cookie set during login with each of
these requests.

When the server receives a request, it authenticates the cookie and restores the
login session, thus authenticating the user.  It then accesses or stores records
in the database associated with the authenticated user.

## License

[The Unlicense](https://opensource.org/licenses/unlicense)

## Credit

Created by [Jared Hanson](https://www.jaredhanson.me/)
