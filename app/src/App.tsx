import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import countries from "i18n-iso-countries";

const dynamicLanguage = "en";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const countryNames = await import(
        // NOTE: we need a relative path here due to Rollup dynamic import limitations
        // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
        `../../node_modules/i18n-iso-countries/langs/${dynamicLanguage}.json`
      );

      countries.registerLocale(countryNames);
      setIsLoading(false);
    };

    load();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        {isLoading && "Dynamically loading countries..."}
        {!isLoading && countries.langs()}
      </header>
    </div>
  );
}

export default App;
