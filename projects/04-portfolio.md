---
title: "Portfolio"
problem: "Increase my visibility to potential employers and enhance my chances of getting hired by 
showcasing my skills and experience in a visually appealing and organized manner."
solution: "Portfolio website with a modern design and smooth/engaging user experience, 
that allows anyone to easily learn more about me and my capabilities. Each section is designed to 
highlight my strengths and demonstrate my expertise in front-end development."
thumbnail: images/portfolio-thumbnail.png
siteUrl: "https://www.patrikp.dev/"
codeUrl: "https://github.com/patrick-potocny/portfolio"
technologies:
  - NEXT.JS
  - REACT
  - TYPESCRIPT
  - SCSS
toc: 
  - overview
  - goals
  - design
  - development
  - conclusion
---

## Overview

The portfolio website is a visually appealing and modern platform that showcases the skills and experience of the owner, with a focus on front-end development. The website offers a smooth and engaging user experience, allowing potential employers or clients to easily learn more about the owner and their capabilities. Each section of the website is designed to highlight the owner's strengths and expertise, with a visually appealing layout that helps to make a strong impression on visitors. Through this portfolio website, the owner is able to increase their visibility to potential employers and enhance their chances of getting hired by demonstrating their skills and experience in a clear and organized manner.

## Goals

- Increase the owner's visibility to potential employers by showcasing their skills and experience in a visually appealing and organized manner
- Enhance the owner's chances of getting hired by providing a platform that effectively communicates their strengths and expertise in front-end development
- Create a smooth and engaging user experience that encourages visitors to spend more time on the website, learn more about the owner's capabilities, and potentially take action

## Design

The design of the website draws inspiration from the personal computer "Pip-Boy 3000 Mark IV" featured in the popular video game, Fallout 4. 

The website has been thoughtfully organized to showcase the owner's skills and experience. The portfolio has been divided into four key pages: Home, Projects, About, and Contact, which have been strategically chosen to ensure potential recruiters or employers have access to the most important information. By presenting their past work and achievements on the Projects page, providing a brief introduction of themselves on the About page, and including contact information on the Contact page, the owner aims to create an impressive and compelling digital presence that can effectively communicate their strengths and expertise to potential employers.

## Development

### Tech stack

This project utilizes several technologies, including React, Next.js, SCSS and TypeScript. Each technology was chosen carefully to ensure the application is highly efficient, user-friendly, and visually appealing.

Next.js was chosen as the primary framework for this project because of its impressive speed, image optimization, and mainly built-in pre-rendering options like SSG (Static Site Generation). Given that one of the primary goals of the website is to showcase the owner's previous work, it is essential to keep the website updated over time. Utilizing SSG, during the build process, we can automatically generate all the pages for every project and its corresponding case study using a markdown file. This approach helps to ensure that the website remains up-to-date without requiring a lot of manual effort. Additionally, using static site generation can improve website performance and reduce page load times, resulting in a better user experience.

React was selected as the front-end library for this project because of its declarative syntax, which allows me to create reusable components that can be easily rendered and updated on the fly. React also facilitates the creation of highly interactive user interfaces, which was crucial for the success of this project.

To style the app, SCSS modules were utilized for each component to avoid class name collisions, as the app became increasingly complex. SCSS is a popular preprocessor for CSS that allows you to write CSS with variables, mixins, and more advanced features, making it easier to maintain and scale.

### Process

In the development, I placed a strong emphasis on following coding best practices such as SOLID principles and using Git for version control. Implementing these practices ensured that my code was organized, modular, and easy to maintain.

During the development process, I began by creating a high-level architecture of the application and breaking it down into smaller components. I ensured that each component had a clear responsibility, adhering to the Single Responsibility Principle of SOLID. This approach made it easy to make modifications to the codebase as the project progressed.

### Challenges

#### **Typing effect:**

- Using the `react-type-animation` library to create a typed text effect worked well for the welcome screen, but it was not suitable to use on the home screen because the library's component doesn't allow me to style the individual parts of the output text. To resolve this issue, I had to create my own custom component to create the effect, which perfectly suited my needs.

#### **Page transition animations:**

- After creating a production build of the website, I noticed that when switching between pages, the transition created using Framer Motion was working, but the SCSS styles were being removed during the exit animation. After researching this issue, I found out that this was due to the way Next.js routing works and how Framer Motion's `AnimatePresence` component works. When we click a link, the Next.js router immediately removes the page we are transitioning from and loads the new one. We use Framer Motion's `AnimatePresence` component to keep the previous page in the DOM while the exit animation is running. Since we are using SCSS modules to style our components, these styles are not left in the DOM because the Next.js router removes them. Neither Next.js nor Framer Motion provides any fix for this issue.
- I had to go through many user-created hacky solutions. The one that worked best for me was to create a custom `AnimatePresence` component to replace the component of the Framer Motion library, and another component to replace the `next/link` component. The combination of these two components delays the routing to the next page until the exit animation is finished.

## Conclusion

During the development of this portfolio website, I acquired various skills and best practices that will be helpful for my future projects.

Throughout the development process, I encountered multiple challenges, such as creating typing effect, and page transition animations. These challenges enabled me to enhance my problem-solving abilities and learn effective troubleshooting and debugging techniques.

Working with my primary tech stack, which includes React, Next.js and SCSS, I obtained a better understanding of how to utilize each technology's strengths to design a highly efficient, user-friendly, and visually appealing website. I gained proficiency in creating reusable components, managing state with React, and styling the app with SCSS.

In conclusion, the goals set for this portfolio website have been achieved. The visually appealing and modern platform showcases the owner's skills and experience in front-end development, creating a smooth and engaging user experience that encourages visitors to spend more time on the website, learn more about the owner's capabilities, and potentially take action.