import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import CheckoutPage from "./pages/checkout/checkout.component";



const HatsPage = () => {
  return (
    <div>
      <h1>HATS</h1>
      
    </div>
  );
};
const SneakersPage = () => {
  return (
    <div>
      <h1>Sneakers Page</h1>
      
    </div>
  );
};
const JacketsPage = () => {
  return (
    <div>
      <h1>Jackets Page</h1>
    </div>
  );
};
const MensPage = () => {
  return (
    <div>
      <h1>Men's Page</h1>
    </div>
  );
};
const WomensPage = () => {
  return (
    <div>
      <h1>Women's Page</h1>
    </div>
  );
};

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route path={"/"} exact component={HomePage} />

          <Route exact path={"/signinandsignup"} render={()=>this.props.currentUser? (<Redirect to="/"/>) : (<SignInAndSignUpPage/>)} />

          <Route path={"/shop"} component={ShopPage} />

          <Route path={"/hats"} component={HatsPage} />

          <Route path={"/sneakers"} component={SneakersPage} />

          <Route path={"/jackets"} component={JacketsPage} />
          <Route path={"/womens"} component={WomensPage} />
          <Route path={"/mens"} component={MensPage} />
          <Route exact path={"/checkout"} component={CheckoutPage} />


        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
