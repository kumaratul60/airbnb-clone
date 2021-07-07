import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
      {/* HomePage */}

      {/* Header */}

      {/* Banner with date */}
      {/* Search */}

      {/* Cards */}

      {/* Footer */}

      {/* SearchPage */}
      {/* .... */}
    </div>
  );
}

export default App;
