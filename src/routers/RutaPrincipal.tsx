import { Route, Routes } from "react-router-dom";
import { RutaPublica } from "./RutaPublica";
import { RutaPrivada } from "./RutaPrivada";
import { AuthPage } from "../views/auth/page/AuthPage";
import { CoreRouters } from "../views/core/routers/CoreRouters";





export const RutaPrincipal = () => {
    return (
        <div className="">
          
          <Routes>
            <Route
              path="auth/"
              element={
                <RutaPublica>
                  <Routes>
                    <Route path="/*" element={<AuthPage/>} />
                  </Routes>
                </RutaPublica>
              }
            />
            <Route path="/*"  element={
                <RutaPrivada>
                  <CoreRouters/>
                </RutaPrivada>
            } />
          </Routes>
        </div>
      );
}
