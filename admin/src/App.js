import "./App.css";
import { useEffect, useState, createContext } from "react";

import { ArwesThemeProvider, StylesBaseline } from "@arwes/core";
import { Animator, AnimatorGeneralProvider } from "@arwes/animation";
import { Loader } from "./components/Loader";
import { Destructure } from "./components/Destructure";
import MainScreen from "./components/MainScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const AppContext = createContext();

function App() {
  const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
  const FONT_FAMILY_CODE = '"Source Code Pro", monospace';

  const [isDestroyed, setIsDestroyed] = useState(false);

  return (
    <div className="app">
      <ArwesThemeProvider>
        <AnimatorGeneralProvider
          animator={{
            duration: { enter: 500, exit: 500 },
          }}
        >
          <StylesBaseline
            styles={{
              "html, body": { fontFamily: FONT_FAMILY_ROOT },
              "code, pre": { fontFamily: FONT_FAMILY_CODE },
            }}
          />
          <Animator
            animator={{
              manager: "stagger",
              combine: true,
              duration: { stagger: 200 },
            }}
          >
            <AppContext.Provider
              value={{
                isDestroyed,
                setIsDestroyed,
              }}
            >
              <Router>
                <Switch>
                  <Route path="/main">
                    <MainScreen />
                  </Route>
                  <Route path="/destructure">
                    <Destructure />
                  </Route>
                  <Route path="/">
                    <Loader />
                  </Route>
                </Switch>
              </Router>
            </AppContext.Provider>
          </Animator>
        </AnimatorGeneralProvider>
      </ArwesThemeProvider>
    </div>
  );
}

export default App;
