import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Shared/Header/Header';
import Home from './components/HomePage/Home/Home';
import AuthProvider from './components/contexts/AuthProvider';
import Services from './components/HomePage/Services/Services';
import Details from './components/Details/Details';
import NotFound from './components/NotFound/NotFound';
import Login from './components/LoginPage/Login/Login';
import SignUp from './components/LoginPage/SignUp/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Shared/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import MakeAppointment from './components/MakeAppointment/MakeAppointment';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute exact path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <PrivateRoute exact path="/service/:id">
            <Details></Details>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/appointment">
            <MakeAppointment></MakeAppointment>
          </PrivateRoute>
          <Route exact path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
