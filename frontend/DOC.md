# Doc

This file provides some explanations about the architecture and implementation of the Gatsby frontend.

## Pages

Page components live in `src/pages`. By default, each each Page component becomes an endpoint; if `HomePage` is a component defined in `src/pages/home-page.js`, then `HomePage` will be rendered at `localhost:8000/home-page`. These are "Server-side Pages" because the pages are generated on the server.

### Client-side Pages

Some pages need to be generated dynamically based on data we fetch at run-time in the browser. For example, if we have 3 apps, we may want to serve three pages at `localhost:8000/apps/1`, `localhost:8000/apps/2`, and `localhost:8000/apps/3`, which each display data about the respective app. In this case, we will use "Client-side Pages", where we generate a page for each app at run-time.

To set this up, you will need to edit `gatsby-node.js` and use the `@reach/router` package for client-routing. The Gatsby documentation describes how to do this: https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/#understanding-client-only-routes .

### Global Context

Each page is wrapped in a global `UserContext` that contains information about the current user: whether the user is logged in, what the user's `id` is, etc. You can use React's `useContext` hook to pull this information into a component.

## Components

Components that are not associated with a particular URL (i.e. not Pages) can be found in `src/components`

## Fetching Data From the Server

Functionality for fetching data from the server can be found in `src/shared`.

- Functions for fetching data can be found in `fetchActions`, and functions for converting them into the correct formats are in `convertForFrontend.js` and `convertForBackend.js`.
