# My Todo List App

This is a small React based project created using React, JSX, HTML, CSS and Bootstrap.
This project was created as a part of my React learning journey. This project uses the basic concepts of React and Javascript along with JSX, a little bit of CSS and Bootstrap to make things look good.

## How the app works

#### Users can test this project locally by:

> ### Using the `npm start` start (If you have NPM installed)
>
> - Runs the app in the development mode.\
> - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## OR

> ### Using the Live Server
>
> - Go to the build directory of the project and start Live Server from index.html file using VS Code
> - Live Server extennsion can be found in the VS Code marketplace.
> - This will launch the application on Port 5500 [127.0.0.1:5500](127.0.0.1:5500)
> - Initially, the redirection address would be [127.0.0.1:5500/index.html](127.0.0.1:5500/index.html). Change it to [127.0.0.1:5500](127.0.0.1:5500) on the web browser. You'll see the application running.

## OR
#### Users can run the application on Code Sandbox

> ### Using the code-sandbox to view the project and source-code
>
> - Follow this URL to see the project in action: [Todo-List-React](https://zph2n1.csb.app/)
> - Follow this URL to see the source code of the Project on Code Sandbox along with the live project: [Todo-List-React:CodeSandbox](https://codesandbox.io/s/todo-list-react-zph2n1)

## How to use the Application?

- Once you see the application, everything happens on the same page since it's a Single Page Application created with the power of React library.
- Users can add the title and description (both mandatory fields) using the form at the top of the page and add it to their todo list below inside the grey box.
- Once a Todo item is completed, users can mark it as done which removes it from the list.
- The application uses the Javascript concept/feature of `localStorage` to store and retrieve the data from the browser itself as this project doesn't uses any backend technology like ExpressJS (NodeJs) along with a Database.
- This feature however allows users to store and retrieve data into their todo list. The data is persistent even after page reloads.