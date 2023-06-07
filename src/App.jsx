
import { Outlet } from 'react-router-dom'
import './App.css'
import NavigationBar from './Component/NavigationBar/NavigationBar'
import Footer from './Component/Footer/Footer'

function App() {


  return (
    <>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>

    </>
  )
}

export default App
