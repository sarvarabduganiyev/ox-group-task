import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./views/login";
import ProtectedRoute from "./layout/protected-route";
import { NotFound } from "./views/not-found/";
import { Dashboard } from "./views/Dashboard/";
import LoginLayout from "./layout/login-layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { hoc } from "./utils/hoc";
import { useAppProps } from "./app.props";

const App = hoc(useAppProps, () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Navigate to="/login" />} />
          <Route
            path={"/login"}
            element={
              <LoginLayout>
                <Login />
              </LoginLayout>
            }
          />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
});

export default App;
