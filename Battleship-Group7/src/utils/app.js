
import Header from './header';
import NavBar from './navbar';
import About from './about';
import './about.css';

function App() {
  return (
    <div className='app'>
      <div className='header'> 
        <Header />
      </div>
      <div className='navbar'>
        <NavBar />
      </div>
      <div className="about-container">
        <About />
      </div>
    </div>
  )
}

export default App;