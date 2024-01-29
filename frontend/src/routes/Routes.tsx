import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

// strore
// All layouts containers
import DefaultLayout from "../layouts/Default";
import VerticalLayout from "../layouts/Vertical";

import { authProtectedFlattenRoutes, publicProtectedFlattenRoutes } from "./index";
import { RootState } from "../store";
import PrivateRoute from "./PrivateRoute";

interface IRoutesProps {}

const AllRoutes = (props: IRoutesProps) => {
  const { layout } = useSelector((state: RootState) => ({
    layout: state.Layout,
  }));

  const getLayout = () => {
    let layoutCls = VerticalLayout;

    return layoutCls;
  };

  let Layout = getLayout();

  return (
    <React.Fragment>
      <Routes>
        <Route>
          {publicProtectedFlattenRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <DefaultLayout {...props} layout={layout}>
                  {route.element}
                </DefaultLayout>
              }
              key={idx}
            />
          ))}
        </Route>

        <Route>
          {authProtectedFlattenRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <PrivateRoute roles={route.roles}>
                  <Layout {...props}>{route.element}</Layout>
                </PrivateRoute>
              }
              key={idx}
            />
          ))}
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default AllRoutes;
