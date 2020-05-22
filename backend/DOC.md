# Doc

This file provides some explanations about the architecture and implementation of the Rails backend

## Functionality

The rails backend provides the following functionality:

- User registration and login
- CRUD for resources using REST

Currently we are using the Devise Gem to serve HTML forms for user registration, login, and authentication. _That is the only HTML that the Rails server should serve_. All other data responses from the Rails server should be **JSON**.

## REST Endpoints

Routes are formally configured in the file `config/routes.rb`

`rails routes` will allow you to visualize all endpoints. The following are some highlights:

- For user login via REST, use `POST /auth/sign_in`. You will need to provide the following:

```
{
    "user": {
        "email": string,
        "password": string
    }
}
```

- For user creation via REST, use `POST /auth`. You will need to provide the following:

```
{
    "user": {
        "email": string,
        "password": string,
        "password_confirmation": string
    }
}
```

- For user logout via REST, use `DELETE /auth/sign_out`

For the remaining routes, it is best to visit the controllers to see which parameters are permitted

## Controllers

Controllers are in the `app/controllers` folder. They generally follow the standard Ruby on Rails logic, but there are a few
important pieces of functionality to note:

- If you see the line `before_action :authenticate_user!, except: [:index]` at the top of a controller, this means that for all
  actions in the controller except the `index` action, if the user is not logged in, he will be redirected to the login page.

- If a controller action isn't working, and in the Rails logs, you see messages about `Inauthentic Token` or `Base Urls`, then there is a problem with the Rails CSRF protection. This is something you should bring up to the rest of the team, since CSRF protection needs to be configured carefully to whitelist the correct clients.
