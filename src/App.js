
import './App.css';
import {Outlet,NavLink,createBrowserRouter,createRoutesFromElements,Route,RouterProvider,router} from 'react-router-dom';
import Navbar from "./components/navbar";
import Footer from './components/Footer';
import Body from './pages/Body';
import Contact from './pages/Contact';
import About from './pages/About';
import Loginmenu from './pages/Loginmenu';
import Logindoc from './pages/Logindoc';
import Loginmed from './pages/Loginmed';

const Rootlayout=()=>{
  return(
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}
// const Router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Rootlayout/>,
//     children:[
//       {
//         path:"/",
//         element:<Body/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       },
//       {
//         path:"/contact",
//         element:<About/>2
//       }
//     ]
//   },
// ])

const Router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route path="body" element={<Body />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="about" element={<About />}/>
      <Route path="login" element={<Loginmenu />}/>
      <Route path="logindoc" element={<Logindoc />}/>
      <Route path="loginmed" element={<Loginmed />}/>

    </Route>
  )
)

function App(){
  return (
    <RouterProvider router={Router} />
  );
}
  


export default App;
