import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import TopNews from "../Pages/TopNews/TopNews";
import DestinationToGo from "../Pages/DestinationToGo/DestinationToGo";
import GoalsToDo from "../Pages/GoalsToDo/GoalsToDo";
import BooksNotes from "../Pages/BooksNotes/BooksNotes";
import Jobs from "../Pages/Jobs/Jobs";
import PrivacyPolicy from "../Pages/Others/PrivacyPoilcy/PrivacyPolicy";
import WhoWeAre from "../Pages/AboutUs/WhoWeAre/WhoWeAre";
import OurStory from "../Pages/AboutUs/OurStory/OurStory";
import PhotoGallery from "../Pages/Others/PhotoGallery/PhotoGallery";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/topNews',
          element:<TopNews></TopNews>
        },
        {
          path:'/destinationToGo',
          element:<DestinationToGo></DestinationToGo>
        },
        {
          path:'/goalsToDo',
          element:<GoalsToDo></GoalsToDo>
        },
        {
          path:'/booksNotes',
          element:<BooksNotes></BooksNotes>
        },
        {
          path:'/jobs',
          element:<Jobs></Jobs>
        },
        {
          path:'/privacyPolicy',
          element:<PrivacyPolicy></PrivacyPolicy>
        },
        {
          path:'/whoWeAre',
          element:<WhoWeAre></WhoWeAre>
        },
        {
          path: '/outStory',
          element:<OurStory></OurStory>
        },
        {
          path: '/photoGallery',
          element:<PhotoGallery></PhotoGallery>
        }
      ]
    },
  ]);
  