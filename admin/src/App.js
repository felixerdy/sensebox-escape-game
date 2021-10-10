import "./App.css";
import { useEffect, useState, createContext } from "react";

import { ArwesThemeProvider, StylesBaseline } from "@arwes/core";
import { Animator, AnimatorGeneralProvider } from "@arwes/animation";
import { Loader } from "./components/Loader";
import MainScreen from "./components/MainScreen";

export const AppContext = createContext();

function App() {
  const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
  const FONT_FAMILY_CODE = '"Source Code Pro", monospace';

  const [loading, setLoading] = useState(true);
  const [isDestroyed, setIsDestroyed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  });

  return (
    <div className="app">
      <ArwesThemeProvider>
        <AnimatorGeneralProvider
          animator={{
            duration: { enter: 200, exit: 200 },
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
              duration: { stagger: 100 },
            }}
          >
            <AppContext.Provider
              value={{
                isDestroyed,
                setIsDestroyed,
              }}
            >
              {isDestroyed ? <Loader /> : loading ? <Loader /> : <MainScreen />}
            </AppContext.Provider>
          </Animator>
        </AnimatorGeneralProvider>
      </ArwesThemeProvider>
    </div>
  );
}

export default App;
