import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils'

const HatsPage = () => {
  return <div><h1>HATS</h1></div>
}
const SneakersPage = () => {
  return <div><h1>Sneakers Page</h1></div>
}
const JacketsPage = () => {
  return <div><h1>Jackets Page</h1></div>
}
const MensPage = () => {
  return <div><h1>Men's Page</h1></div>
}
const WomensPage = () => {
  return <div><h1>Women's Page</h1></div>
}
let route=[
    {
      id:0,
      path:'/',
      component:HomePage,
    },
    {
      id:7,
      path:'/signinandsignup',
      component:SignInAndSignUpPage
    },

    {
      id:6,
      path:'/shop',
      component:ShopPage
    },
    {
      id:1,
      path:'/hats',
      component:HatsPage,
    },
    {
      id:2,
      path:'/sneakers',
      component:SneakersPage,
    },
    {
      id:3,
      path:'/jackets',
      component:JacketsPage,
    },
    {
      id:4,
      path:'/womens',
      component:WomensPage,
    },
    {
      id:5,
      path:'/mens',
      component:MensPage,
    }

]
class App extends React.Component {
  constructor(){
    super();


    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user});
      console.log(user.displayName)
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
  
        <Switch>
      {route.map(e=><Route path={e.path} exact component={e.component} />)}
      </Switch>
      </div>
    );
  }

}

export default App;
