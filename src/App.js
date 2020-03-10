import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
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
let route = [
  {
    id: 0,
    path: "/",
    component: HomePage
  },
  {
    id: 7,
    path: "/signinandsignup",
    component: SignInAndSignUpPage
  },

  {
    id: 6,
    path: "/shop",
    component: ShopPage
  },
  {
    id: 1,
    path: "/hats",
    component: HatsPage
  },
  {
    id: 2,
    path: "/sneakers",
    component: SneakersPage
  },
  {
    id: 3,
    path: "/jackets",
    component: JacketsPage
  },
  {
    id: 4,
    path: "/womens",
    component: WomensPage
  },
  {
    id: 5,
    path: "/mens",
    component: MensPage
  }
];
class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
const {setCurrentUser} = this.props;

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

      setCurrentUser( userAuth );
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
          {route.map(e => (
            <Route path={e.path} exact component={e.component} />
          ))}
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
