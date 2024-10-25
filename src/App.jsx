
import './App.css'
import Blogs from './componenets/Blogs/Blogs'
import Bookmarks from './componenets/Bookmarks/Bookmarks'
import Header from './componenets/Header/Header'
function App() {
  
  return (
    <>
      
      <Header></Header>
      <div className='md:flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
