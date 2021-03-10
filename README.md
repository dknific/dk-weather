# dk-weather

[Click here for a Live Demo!](http://jsdemos.s3-website-us-east-1.amazonaws.com/) (Mobile browsers compatible!)

---
A React.js implementation of the classic "weather app" format using the [Open Weather API](https://openweathermap.org/api) to fetch real-time 7-day forecast info.

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Get a Free OpenWeather API Key!

First things first: you'll need your own (free) API key if you want to run this repo on your own machine.

Getting your own OpenWeather API key is simple - just head to [their website and sign up for free!](https://openweathermap.org/api)

## How to Run on Your Machine
Clone this repo. Then:
1) Make a new file in the project's root directory called `.env`, and
2) Copy the contents of `.env.example` into it, replacing with your own API key.

Then, just install the dependencies and you're good to go!
```
yarn add
yarn start
```

## Building the App

When you're ready to build and deploy the app, in the project directory you can run:


```
yarn build
```


**yarn build** builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
