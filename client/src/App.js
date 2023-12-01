import "./App.css";
import AuthModule from "./modules/auth/AuthModule";
import { Routes, Route } from "react-router-dom";
import PageURL from "./constants/PageURL";
import CountryModule from "./modules/countries/CountryModule";

function App() {
  console.log("APP");
  return (
    <div>
      <Routes>
        <Route path={PageURL.BASE} element={<AuthModule />}></Route>
        <Route path={PageURL.COUNTRYDEFAULT} element={<CountryModule />}>
          <Route path={PageURL.INDIA_GEN_SUMMARY} element={<CountryModule />} />
          <Route path={PageURL.INDIA_PRES_MODEL} element={<CountryModule />} />
          <Route
            path={PageURL.INDIA_PROJ_OVERVIEW}
            element={<CountryModule />}
          />
          <Route path={PageURL.INDIA_DIAGONISTIC} element={<CountryModule />}>
            <Route
              path={PageURL.INDIA_DIAGONISTIC_DETAILED}
              element={<CountryModule />}
            />
            <Route path={PageURL.INDIA_LOSS_FLOW} element={<CountryModule />} />
            <Route
              path={PageURL.INDIA_INVERTER_EFFICIENCY}
              element={<CountryModule />}
            />
            <Route
              path={PageURL.INDIA_INVERTER1_SCB_SMB1}
              element={<CountryModule />}
            />
            <Route
              path={PageURL.INDIA_INVERTER1_SCB_SMB2}
              element={<CountryModule />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
