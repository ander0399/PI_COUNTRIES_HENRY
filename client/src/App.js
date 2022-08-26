import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Home from './components/Home/Home.jsx';
import CountryId from './components/CountryId/CountryId.jsx';
import Activity from './components/Activity/activity.jsx';

function App() {
  return (
    <BrowserRouter>
      <nav />
      <Route exact path='/' component={Landing}/>
      <Route exact path='/countries' component={Home}/>
      <Route exact path='/countries/:id' component={CountryId}/>
      <Route exact path='/activities' component={Activity}/>
    </BrowserRouter>
  );
}

export default App;
