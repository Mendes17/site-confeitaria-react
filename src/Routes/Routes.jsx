import { Routes as RoutesDom, Route } from "react-router-dom";
import Localizacao from "../pages/Localizacao/Localizacao";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Contatos from "../pages/Contatos/Contatos";
import SignIn from "../components/SignIn/SignIn.jsx"
import BackOffice from "../pages/BackOffice/BackOffice.jsx"

function Routes() {
  return (
    <RoutesDom>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/localizacao" element={<Localizacao />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/#ifood-section" element={<Home />} />
        <Route path="/sign-in/*" element={<SignIn />} />
        <Route path="/BackOffice" element={<BackOffice />} />
      </Route>
    </RoutesDom>
  );
}

export default Routes;
