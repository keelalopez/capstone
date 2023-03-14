# BRIX: Capstone Project

## Description

Brix is an app to help Project Engineers in the Contractor and Construction Management field. It aims to seamlessly allow users to track procurement for materials for multiple projects. A User can create an account and add multiple projects. Materials have full CRUD and after specifying the date of material installation and the lead time, the app will provide the date the user needs to place the order before it risks being delayed. 

A User has many projects. A project has many materials. A project has many divisions, through materials. 

Users -< Projects -< Materials >- Divisions

## Demo

https://user-images.githubusercontent.com/113480086/218840111-33e38622-769f-46bd-a89e-2106b8dd2b4e.mov

## Tech
Front End
- React Framework 
- Semantic UI styled components
- Client-side routing via React BrowserRouter

Back End
- Ruby on Rails
- Model-View-Controller Architectural Development Patter
- RESTful API utilizing ActiveRecord and Active Model Serializers
- User Authentication and authorization
- PostgreSQL selational database
- User password encryption with BCryot Gem

## Installing Dependencies
From within root directory: 

- npm install semantic-ui --prefix client
- npm install --save react-browser-router

## Set up

After cloning repo, run front end and server to test functionality.

- rails s (runs the backend on http://localhost:3000)
- npm start --prefix client (runs the frontend on http://localhost:4000)

## How to Use

Create an account with Brix. Proceed to add projects and provide required details.
- Add materials related to each project
- Edit materials details as needed. If lead time changes or if date required changes, date-by will be updated via controller
- Go to the Projects section on side bar and click on materials to see materials filtered by project
- Go to the Materials section on side bar to see a list of all materials
- Within Materials, refer to the nested nav bar to see materials filtered by status or if they are critical
- Delete projects. Note this will delete all materials related to the project. 

## Wireframe
A diagram showing React component tree. 

![Screen Shot 2023-02-14 at 10 24 26](https://user-images.githubusercontent.com/113480086/218824701-52f5b01a-6625-4ac9-8886-ace1bbc5aa85.png)

A diagram showing database set up and CRDU actions available to each. 
![Screen Shot 2023-02-14 at 10 39 52](https://user-images.githubusercontent.com/113480086/218827938-c7a4e1e7-6355-456f-b957-7d19cbf92143.png)

![Screen Shot 2023-02-14 at 11 42 31](https://user-images.githubusercontent.com/113480086/218841494-f69255fb-d29c-44cb-80c3-c0d6d9ab0fe9.png)

## Demos
![Screen Shot 2023-02-14 at 10 32 51](https://user-images.githubusercontent.com/113480086/218826951-80795c53-5c67-45cd-bc02-da84ab849274.png)

![Screen Shot 2023-02-14 at 10 34 42](https://user-images.githubusercontent.com/113480086/218826974-0f42c7e3-c00f-4566-95ad-c486562fa3dd.png)

![Screen Shot 2023-02-14 at 10 34 58](https://user-images.githubusercontent.com/113480086/218826987-1444365b-0a1b-4e67-9a5b-ed04631b16d5.png)

