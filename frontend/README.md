# DevHub

DevHub is a web application for Developers to share their app portfolios with the public. This repo contains the code for the frontend. The backend code is [here](https://github.com/chingu-voyages/v19-bears-team-07-be).

Built with Gatsby, React, Reactstrap, and CSS, as part of Chingu Voyage 19.

## Features

- Browse apps by category
- Browse developer portfolios by a particular skill
- Search for developers and apps, with results that highlight matching terms
- Mobile-friendly navbar
- Responsive layout
- Users can rate and/or favorite apps, and see aggregate ratings
- Users can leave comments on the interesting apps they discover
- Developers can add, edit, and delete apps from their portfolio, and update their own profile.

## Major Dependencies

- Gatsby
- Reach Router
- React
- Formik
- Reactstrap
- Bootstrap
- FontAwesome

## Build/Deploy Instructions

Prerequisites:

- Node >= 10.18.1
- NPM >= 6.13.4

First, make sure the `gatsby` package is installed globally via NPM, and install all libraries with `npm install`. Run `gatsby build` to generate the production build, and then `gatsby serve` to deploy at `http://localhost:9000`.

You will then also have to build and deploy the [backend repo](https://github.com/chingu-voyages/v19-bears-team-07-be) by following its README instructions.

After that, visit `http://localhost:9000` to use the application.
