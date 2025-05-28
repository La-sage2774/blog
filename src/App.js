import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import Create from './components/Create';
import 'react-toastify/dist/ReactToastify.css';
// import UseFetch from './components/UseFetch.js';
// import NotFound from './components/NotFound';
import BlogDetails from './components/BlogDetails';


function App() {
  return (
      <Router>
        <div className='App'>
         <Navbar/>
         <div className='content'>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>

              <Route path="/Create">
              <Create/>
             </Route>
               <Route path="/BlogDetails/:id">
                <BlogDetails/>
              </Route> 

              {/* <Route path="*">
                <NotFound/>
              </Route> */}
            </Switch> 
         </div>
        </div>
     </Router>
  );
}

export default App;
