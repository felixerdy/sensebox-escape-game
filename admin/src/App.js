import "./App.css";
import { useEffect, useState } from "react";

import { ArwesThemeProvider, StylesBaseline } from "@arwes/core";
import { Animator } from "@arwes/animation";
import { Loader } from "./components/Loader";
import Konami from "./components/Konami";

function App() {
  const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
  const FONT_FAMILY_CODE = '"Source Code Pro", monospace';

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // setLoading(false);
    }, 10000);
  });

  return (
    <div class="app">
      <ArwesThemeProvider>
        <StylesBaseline
          styles={{
            "html, body": { fontFamily: FONT_FAMILY_ROOT },
            "code, pre": { fontFamily: FONT_FAMILY_CODE },
          }}
        />
        <Animator animator={{ animate: true }}>
          {loading ? <Loader /> : <Konami />}
        </Animator>
      </ArwesThemeProvider>
    </div>
  );
}

export default App;
