import { Route, Routes } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import HomeContext from './context/home/home-context';
import HomeState from './context/home/home-state'

function App() {
  return (
      <HomeState>
          <Routes>
            <Route path="/about" exact element={<About/>}/>
            <Route path="/contact" exact element={<Contact/>}/>
            <Route path="/" exact element={<Home/>}/>
          </Routes>
      </HomeState>
  );
}

export default App;
