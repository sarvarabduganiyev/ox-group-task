import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./layout";

function ProtectedRoute() {
  const auth = useSelector((state) => state.auth.accessToken);
  return !auth ? (
    <Navigate to="/login" replace />
  ) : (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default ProtectedRoute;
