import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Instructor from './Component/Instructor/Instructor.jsx';
import SportClass from './Component/Classes/SportClass.jsx';
import Login from './Component/Login/Login.jsx';
import Registration from './Component/Registration/Registration.jsx';
import AuthContext from './Component/AuthContext/AuthContext.jsx';
import DashBoard from './Component/DashBoard/DashBoard.jsx';
import SelectedClass from './Component/DashBoard/SelectedClass/SelectedClass.jsx';
// import ManageClasses from './Component/DashBoard/ManageClasses/ManageUser.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import ManageUser from './Component/DashBoard/ManageClasses/ManageUser.jsx';
import AddClass from './Component/AddClass/AddClass.jsx';
import MyClass from './Component/DashBoard/MyClass/MyClass.jsx';
import ManageClass from './Component/DashBoard/ManageClass/ManageClass.jsx';
import Feedback from './Component/DashBoard/Feedback/Feedback.jsx';
import UpdateClass from './Component/DashBoard/MyClass/UpdateClass.jsx';
import PageNotFound from './Component/PageNotFound/PageNotFound.jsx';
// import { DarkReader } from 'react-darkreader';
// import PrivateRoute from './Component/PrivateRoute/PrivateRoute.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('fakedata.json')
      },
      {
        path: 'instructor',
        element: <Instructor></Instructor>
      },
      {
        path: 'classes',
        element: <SportClass></SportClass>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'registration',
        element: <Registration></Registration>
      }

    ]
  },
  {
    path: '/dashboard',
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: 'selectedclass',
        element: <SelectedClass></SelectedClass>

      },
      {
        path: 'manageuser',
        element: <ManageUser></ManageUser>
      },
      {
        path: 'addclass',
        element: <AddClass></AddClass>
      },
      {
        path: 'myclass',
        element: <MyClass></MyClass>
      },
      {
        path: 'myclass/update/:id',
        element: <UpdateClass></UpdateClass>
      },
      {
        path: 'manageclasses',
        element: <ManageClass></ManageClass>
      },
      {
        path: 'feedback',
        element: <Feedback></Feedback>
      }
    ]
  },
  {
    path: '/*',
    element: <PageNotFound></PageNotFound>
  }

]);
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthContext>

  </React.StrictMode>,
)
