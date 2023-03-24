---
title: "BeBetter"
problem: " Individuals struggle with finding direction and purpose in various areas of their lives such as health, career, and personal life, and need help unlocking their full potential."
solution: "An AI-powered chatbot that uses the most advanced NLP model available can provide personalized advice on any topic, as it is able to understand and respond to users' needs."
thumbnail: images/bebetter-thumbnail.png
siteUrl: "https://bebetter.chat/"
codeUrl: "https://github.com/patrick-potocny/be_better"
technologies:
  - REACT
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

BeBetter is an AI-powered chatbot that employs the latest advancements in Natural Language Processing (NLP) technology to provide personalized advice and assistance to its users. With its amazing ability to comprehend and respond to users' needs, BeBetter can help users unlock their full potential in all areas of their lives, including health, career, and personal development. By engaging users in full conversations about their unique challenges and goals, BeBetter can guide them through the process of achieving their desired outcomes.

## Goals

- Providing guidance and support to users through full-on conversations about any issue related to health, career, or personal life
- Utilizing the most advanced NLP model available, enabling the chatbot to understand and respond to users' needs in a personalized way
- To reduce barriers to entry and ensure universal access, it is essential to optimize the application for seamless use across all internet-connected devices

## Design

The design process for BeBetter began with the creation of a brand identity that encompasses a name, logo, color palette, and font. I chose the name BeBetter as it clearly conveys the app's purpose and motivates users to strive for self-improvement.

The next step in the design process was to create a simple landing page that provides a clear description of the chatbot's purpose and encourages users to start a conversation. This was achieved by including a prominent call-to-action button in the middle of the page.

Lastly, the main feature of the app. The chat was designed with the primary goal of keeping it as simple and easy to use as possible. I drew some inspiration from Instagram's chat, specifically with regards to the font and shape of the chat and its elements.

Every part was designed using Figma.
![Figma design](/images/bebetter-figma.png)

## Development

### Tech stack

This project utilizes several technologies, including React, CRA, SCSS, and [OpenAI's](https://openai.com/) `text-davinci-003` NLP model. Each technology was chosen carefully to ensure the application is highly efficient, user-friendly, and visually appealing.

In determining the tool for building the React app, I carefully evaluated my options and ultimately chose Create-React-App (CRA) due to its ease of use and simplicity in getting the app up and running, as well as the app's lack of need for server-side rendering.

React was selected as the front-end library for this project because of its declarative syntax, which allows me to create reusable components that can be easily rendered and updated on the fly. React also facilitates the creation of highly interactive user interfaces, which was crucial for the success of this project.

For styling the app, I utilized SCSS, a CSS preprocessor that is known for streamlining the process of writing and maintaining CSS code to a higher standard. Since the app was not large enough, I didn't need to use SCSS modules to avoid class name collisions. However, to keep the class names up to a certain standard, the BEM naming convention was employed. At the end, all the SCSS files were compiled into one single CSS file.

After thorough research of various NLP models, we have chosen OpenAI's `text-davinci-003` as the backbone of my chatbot application. This model stands out as one of the most advanced NLP models available today, with the ability to understand and respond to natural language with remarkable accuracy and coherence. Trained on massive amounts of data, the model can generate human-like text and engage in conversational exchanges that offer personalized advice to users and help them achieve their goals. Moreover, the model comes with a well-documented API, and its flexibility allows for customization to meet my specific needs, making it an ideal choice for my chatbot.

### Process

In the development of my web application, I placed a strong emphasis on following best coding practices, such as adhering to SOLID principles, utilizing Git for version control, and implementing unit testing using Jest. By implementing these practices, I ensured that my code was organized, modular, and easy to maintain.

Throughout the development process, I began by creating a high-level architecture of the application and breaking it down into smaller components. I made sure that each component had a clear responsibility, adhering to the Single Responsibility Principle of SOLID, and corresponded with a unit test to test its main functionality. This approach made it easy to modify the codebase as the project progressed.

### Challenges

#### **Animations:**

- Animations can add an extra layer of interactivity and engagement to your React project, making it more visually appealing and user-friendly. They can help communicate changes, guide user attention, and create a more immersive experience.
- In my project, I required animation for only two components, the landing page, and the chat. Therefore, I did not feel the need to incorporate a whole animation library. Instead, I used CSS animations and classes, adding a class to the component leaving to animate its exit. Additionally, I added a delay to the removal of the landing page from the React DOM to ensure that the animation played smoothly. This approach allowed for efficient implementation of animations without adding unnecessary code or libraries to the project.
  ```
   // Delay the removing of LandingPage until animations finish
  async function openChat(params) {
    setChatOpen(true)
    await sleep(2000)
    setShowLp(false);
  }
  ```

#### **Chat height on mobile:**

- Initially, I set the chat height to `100vh`, as I intended it to span the entire viewport height. However, upon testing it on my phone, I discovered that the input field was not visible, and I had to scroll down to access it. Further research revealed that on mobile devices, the viewport height calculation excludes the address bar at the top. As a solution, I changed the height of the chat to 100%, which ensured that the address bar was included in the height calculation, and the input field was visible on all devices.

  ```
  width: 100vw;
  // Height set in % so that on mobile height will include the adress bar
  height: 100%;
  ```

#### **AI Model customization:**

- Without any customization, the `text-davinci-003` model is a Large Language Model (LLM) that focuses on providing text completions to given prompts. However, it is not particularly optimized for chat or providing personalized advice. OpenAI provides options to customize the model to my specific needs, with parameters such as `temperature`(number between 0 and 2 where higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic), and `context`(in my case previous messages).
- After thorough research of the documentation, I chose to set the `temperature` to `0.5` to ensure the output would be less random and more focused. At the start of the conversation, I instructed the AI to act as a mentor and provide personalized advice. During the conversation, I provided the AI with a few previous messages so it can better understand the context of the conversation.

  ```
  const options = {
     prompt: lastMessage.user + lastMessage.bot + userMessage,
     temperature: 0.5,
     max_tokens: 3000,
     model: "text-davinci-003",
   }
  ```

## Conclusion

During the development of BeBetter, I learned various things and practices that will be beneficial for future projects. I gained experience in using tools like Figma for design implementation.

Throughout the development process, I faced various challenges, such as implementing animations without using any library, troubleshooting height calculation issues on mobile devices, and fine-tuning the AI model. These challenges allowed me to improve my problem-solving skills and learn how to effectively troubleshoot and debug issues.

Working with my main tech stack that includes React, SCSS, and OpenAI's API, I gained a better understanding of how to leverage each technology's strengths to create a highly efficient, user-friendly, and visually appealing web application. I gained experience in creating reusable components, managing state with React, and styling the app with SCSS.

All set goals were successfully achieved, resulting in a user-friendly and efficient application that helps users unlock their full potential and achieve their desired outcomes.
