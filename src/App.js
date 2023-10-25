import {Routes, Route, Outlet} from  'react-router-dom'
import Home from './components/pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import RecipeDetails from './components/pages/RecipeDetails'




const Layout = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )

}

const App = () => {
  return (<div className='bg-black'>
    <Routes>
      <Route path='/' element={<Layout/>}/>
      <Route index element={<Home/>}/>
      <Route path='recipes/:id' element={<RecipeDetails/> }/>
    </Routes>
  </div>)
}

export default App