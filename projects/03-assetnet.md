---
title: "AssetNet"
problem: "It can be difficult to keep track of the prices of your favorite assets, such as cryptocurrencies and stocks."
solution: "User-friendly web application that presents the latest data on users' selected assets in 
a customizable and easily accessible interface."
thumbnail: images/assetnet-thumbnail.png
siteUrl: "https://assetnet.co/"
codeUrl: "https://github.com/patrick-potocny/asset_net"
technologies:
  - REACT
  - CHART.JS
  - SCSS
  - API
  - JEST
toc: 
  - overview
  - goals
  - design
  - development
  - conclusion
---

## Overview

AssetNet is a web-app that provides users with the ability to effortlessly view and monitor the prices and fluctuations of their selected assets. The application's user-friendly interface allows users to customize their preferences, such as the displayed assets and appearance, and retain them for future use, providing a seamless experience upon each return visit.

## Goals

- Providing users with easy access to asset prices and fluctuations
- Creating a personalized user experience

## Design

The design process for AssetNet began with the creation of a brand identity that encompasses a name, logo, color palette, and font. I chose the name AssetNet as it conveys the app's focus on assets. When it comes to color palette and font i got inspired by Apples iOS operating system.

To optimize the user experience, I made the strategic decision to create a single page application for AssetNet without any additional landing page. Upon launching the app, users can immediately view and monitor the prices and fluctuations of their selected assets.

In order to display the data in a clear and visually appealing way, I opted to use cards, drawing inspiration from the design of the iPhone's Stocks app. This approach allowed for easy visualization of the current price of each asset, as well as its historical fluctuations over time. To further enhance the user experience, I also incorporated a dark mode option, giving users the ability to select between light or dark themes. This feature not only adds a personal touch to the app, but also helps to reduce eye strain and improve readability in low light environments.

![Figma design](/images/assetnet-figma.png)

## Development

### Tech stack

This project utilizes several technologies, including React, CRA, SCSS, and Two APIs. Each technology was chosen carefully to ensure the application is highly efficient, user-friendly, and visually appealing.

In determining the tool for building the React app, I carefully evaluated my options and ultimately chose Create-React-App (CRA) due to its ease of use and simplicity in getting the app up and running, as well as the app's lack of need for server-side rendering since the data is always changing.

React was selected as the front-end library for this project because of its declarative syntax, which allows me to create reusable components that can be easily rendered and updated on the fly. React also facilitates the creation of highly interactive user interfaces, which was crucial for the success of this project.

For styling the app, I utilized SCSS, a CSS preprocessor that is known for streamlining the process of writing and maintaining CSS code to a higher standard. Since the app was not large enough, I didn't need to use SCSS modules to avoid class name collisions. However, to keep the class names up to a certain standard, the BEM naming convention was employed. At the end, all the SCSS files were compiled into one single CSS file.

Next, I sourced reliable and fast APIs for real-time and historical data of cryptocurrencies and stocks, ultimately selecting [Coinranking](https://developers.coinranking.com/api) for crypto data and [Alpha Vantage](https://www.alphavantage.co/) for stocks, because of their good reliability and speed.

### Process

In the development of my web application, I placed a strong emphasis on following best coding practices, such as adhering to SOLID principles, utilizing Git for version control, and implementing unit testing using Jest. By implementing these practices, I ensured that my code was organized, modular, and easy to maintain.

To enhance the user experience, I aimed to ensure simplicity in the application design. Therefore, I opted not to include any login or registration requirements, which could be time-consuming and complicated. Instead, I utilized local storage as a means of storing user preferences, such as selected digital assets, preferred time frames, and color schemes (light or dark mode). This approach ensures users can effortlessly access and edit their preferred assets, with real-time price and performance data readily available upon opening the application.

Throughout the development process, I began by creating a high-level architecture of the application and breaking it down into smaller components. I made sure that each component had a clear responsibility, adhering to the Single Responsibility Principle of SOLID, and corresponded with a unit test to test its main functionality. This approach made it easy to modify the codebase as the project progressed.

### Challenges

#### **API request limits:**

- Given that both APIs come with request limits per day and per minute, it was crucial to ensure that the application provides a smooth user experience even when there are multiple users accessing it concurrently. To achieve this, I employed a development approach that made as few API requests as possible. I accomplished this by fetching all the necessary data at the beginning and taking advantage of the React Context API to store the data in a context that is accessible throughout the application. This design approach ensures that when users filter the data or choose different asset types, the application does not need to make new API requests, thereby avoiding any potential performance issues or delays.

#### **Two different APIs data structures:**

- As a result of utilizing two distinct API providers, one for cryptocurrency data and the other for stock data, there were notable differences in their responses like different time zones, and the provided data. I developed numerous utility functions to convert the data into a uniform type, incorporating all the relevant data in the correct formats to enable seamless integration across the entire application.

## Conclusion

During the development of AssetNet, I acquired various skills and best practices that will be helpful for my future projects. I gained more experience in utilizing design implementation tools such as Figma.

Throughout the development process, I encountered multiple challenges, such as integrating data from two different APIs, avoiding exceeding API rate limits, and implementing dark mode. These challenges enabled me to enhance my problem-solving abilities and learn effective troubleshooting and debugging techniques.

Working with my primary tech stack, which includes React and SCSS, I obtained a better understanding of how to utilize each technology's strengths to design a highly efficient, user-friendly, and visually appealing web application. I gained proficiency in creating reusable components, managing state with React, and styling the app with SCSS.

AssetNet achieved the goals of providing users with easy access to asset prices and fluctuations, and creating a personalized user experience. The web application's user-friendly interface allows users to customize their preferences, such as the displayed assets and appearance, and retain them for future use, providing a seamless experience upon each return visit. The use of cards to display the data in a clear and visually appealing way, along with the incorporation of a dark mode option, further enhance the user experience. 
