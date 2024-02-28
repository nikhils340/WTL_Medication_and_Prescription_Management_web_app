
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
import { Provider } from 'react-redux';
import store from './utils/store';
import { useSelector} from "react-redux";
import Logout from "./pages/Logout";
import NavbarDoc from './components/NavbarDoc';
import NavbarMed from './components/NavbarMed';



const Navbarchoice=()=>{
  const userinfo=useSelector((store)=>store.user);
  if(userinfo.isLoggedIn==false)
  {
    return <Navbar />
  }
  else if(userinfo.userRole=="doctor")
  {
    return <NavbarDoc />
  }
  else 
  {
    return <NavbarMed />
  }

}


const Rootlayout=()=>{
  
  return(
    <>
      <Provider store={store}>
        <Navbarchoice />
        <Outlet />
        <Footer />
      </Provider>
      
  
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
      <Route path="home" element={<Body />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="about" element={<About />}/>
      <Route path="login" element={<Loginmenu />}/>
      <Route path="logindoc" element={<Logindoc />}/>
      <Route path="loginmed" element={<Loginmed />}/>
      <Route path='logout' element={<Logout />} />

    </Route>
  )
)

function App(){
  // const [state, dispatch] = useReducer(reducer,initialState);
  return (
    // <UserContext.Provider value={{state,dispatch}}>
    // <RouterProvider router={Router} />
    // </UserContext.Provider>
      // <UserProvider>    
      <RouterProvider router={Router} />
    
  );
}
  


export default App;
