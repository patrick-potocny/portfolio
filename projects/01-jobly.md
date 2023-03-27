---
title: "Jobly"
problem: "Job seekers need to track multiple job postings, applications, and interview schedules, as well as research companies and gather important details about each job opportunity."
solution: "Web application that can help manage and organize all aspects of job search, including job postings, interviews, and notes, making life easier for job seekers."
thumbnail: images/jobly-thumbnail.png
siteUrl: "https://www.joblyapp.net/"
codeUrl: "https://github.com/patrick-potocny/jobly"
technologies:
  - NEXT.JS
  - REACT
  - TYPESCRIPT
  - SCSS
  - FIREBASE
toc:
  - overview
  - goals
  - design
  - development
  - conclusion
---

## Overview

Jobly is a web application that has been specifically designed to make the job search process easier and more efficient for job seekers. Its user-friendly interface allows users to organize and track multiple job postings, interviews, and other relevant information such as pay, position, and location. Additionally, Jobly provides users with the ability to create and add notes, which can be easily copied and utilized as needed. Jobly also includes an article containing important tips for users who are looking for a job.

## Goals

- Empower job seekers by streamlining their job search process.
- Enable users to save various important details about job postings and later access them from any device.
- Help users avoid making mistakes and make informed decisions about their job choices.

## Design

The design process for Jobly began with the creation of a brand image that includes a logo, color palette, and font. The logo was created using the online tool, [logo.com](https://logo.com/), and was fine-tuned to fit my preferences and the color palette generated using [coolors.co](https://coolors.co/).

The next step involved the creation of a simple landing page. Additionally, a demo button has been included to allow users to quickly try the app without having to create an account.

The main feature of the app is the jobs dashboard. I started with pen and paper and created wireframes to iterate over designs while keeping in mind the main goal of effortlessly adding and viewing job postings' details. After considering different options, I chose to use a table to display job details. This decision was based on the fact that there are many details to include in a job posting, and a table makes it easier to compare different jobs as the same details are presented in the same order.

Lastly, the notes dashboard consists of simple square cards that display the note's title and the first few rows of its content. To make it easier for users to copy the notes, a button has been included in the corner of each note that copies the note to the user's clipboard.

Then i brought theese drawings to life in Figma:
![Figma design](/images/jobly-figma.png)

## Development

### Tech stack

This project utilizes several technologies, including Next.js, React, TypeScript, SCSS, and Firebase. Each technology was chosen carefully to ensure the application is highly efficient, user-friendly, and visually appealing.

Next.js was chosen as the primary framework for this project because of its impressive speed, built-in pre-rendering options like SSG (Static Site Generation), image optimization, and much more. This framework provides a great development experience and improves the performance of the application by automatically optimizing the client and server-side rendering.

React was selected as the front-end library for this project because of its declarative syntax, which allows me to create reusable components that can be easily rendered and updated on the fly. React also facilitates the creation of highly interactive user interfaces, which was crucial for the success of this project.

TypeScript was used in this project to reduce errors and standardize the codebase, making it easier to maintain as the project grows. This language provides static typing and excellent tooling that ensures the code is well-organized and consistent.

To style the app, SCSS modules were utilized for each component to avoid class name collisions, as the app became increasingly complex. SCSS is a popular preprocessor for CSS that allows you to write CSS with variables, mixins, and more advanced features, making it easier to maintain and scale.

Finally, Firebase was selected as the backend solution for this project because of its popularity, comprehensive documentation, user-friendly interface, and ability to handle complex applications. Firebase provides all the necessary features, such as Authentication and Database, with a simple SDK, making it a perfect fit for this project.

### Process

In the development of my web application, I placed a strong emphasis on following best coding practices such as SOLID principles and using Git for version control. Implementing these practices ensured that my code was organized, modular, and easy to maintain.

During the development process, I began by creating a high-level architecture of the application and breaking it down into smaller components. I ensured that each component had a clear responsibility, adhering to the Single Responsibility Principle of SOLID. This approach made it easy to make modifications to the codebase as the project progressed.

### Challenges

#### **Animations:**

- Animations can add an extra layer of interactivity and engagement to your React project, making it more visually appealing and user-friendly. They can help communicate changes, guide user attention, and create a more immersive experience.
  To create them in React application there are several options to do so and after thurough research i chose [Framer Motion](https://www.framer.com/motion/). Firstly, it provides a simple and intuitive API for creating a wide range of animations, from basic to complex straight in the React code. Another great feature that is important to me is AnimatePresence which allows components to animate out when they're removed from the React tree.

#### **Firebase Authentication:**

- Firebase provides authentication functions to handle user authentication in a project. However, utilizing React's state management to handle user authentication can be time-consuming and error-prone. To avoid this, I decided to use a library called `react-firebase-hooks`. This library provides a `useAuth` hook that simplifies authentication, including user login, logout, and real-time user session management. By utilizing this library, I was able to save development time and ensure that the authentication process was efficient and reliable.

#### **Fallback font bug:**

- During the development process, I encountered an issue where approximately 1 out of 10 times, the entire page and dashboard were rendered using the Times New Roman font instead of Dosis font. To troubleshoot the issue, I utilized the Chrome developer tools to check the font set on the elements, which were correctly set to Dosis. However, the elements continued to be rendered in Times New Roman. After researching the issue in Next.js documentation, I discovered that Next.js uses Times New Roman as a fallback font when the custom font fails to load or is loading. To resolve this issue, I came across a similar case where the developer resolved the issue by setting the display property to swap. This ensures that the custom font is always swapped with the fallback font when it loads.

  ```
  import { Dosis } from "@next/font/google";
  const Dosis = Dosis({ subsets: ["latin"], display: "swap" });
  ```

## Conclusion

During the development of Jobly, I learned various things and practices that will be beneficial for future projects. I gained experience in creating wireframes and iterating designs, as well as using tools like Figma for design implementation.

I faced several challenges during the development process, such as implementing animations using Framer Motion, handling Firebase Authentication using the react-firebase-hooks library, and troubleshooting a fallback font bug. These challenges allowed me to improve my problem-solving skills and learn how to effectively troubleshoot and debug issues.

Moreover, working with my main tech stack that includes Next.js, React, Typescript, SCSS, and Firebase, allowed me to better understand how to leverage each technology's strengths to create a highly efficient, user-friendly, and visually appealing web application. I gained experience in creating reusable components, managing state with React, utilizing Firebase's Authentication and Database, and styling the app with SCSS modules.

Jobly has successfully achieved all of its set goals, empowering job seekers to streamline their job search process, save and access various important job details from any device, and make informed decisions about their job choices. Its user-friendly interface has made it easier for users to organize and track multiple job postings, interviews, and other relevant information. The app's notes feature has provided users with the ability to create and add notes that can be easily copied and utilized as needed. Furthermore, Jobly's article containing important tips for job seekers has enabled users to avoid making mistakes and make informed decisions about their job choices. Overall, Jobly has successfully provided a comprehensive and efficient job search platform for its users.
