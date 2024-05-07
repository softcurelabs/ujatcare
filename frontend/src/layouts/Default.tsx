import React, { useEffect, Suspense } from "react";
import { useSelector } from "react-redux";

// store
import { RootState } from "../store";

// utils
import { changeHTMLAttribute } from "../utils";
import { Navigate, useLocation } from "react-router-dom";

const loading = () => <div className=""></div>;

interface DefaultLayoutProps {
  layout: {
    layoutType: string;
    layoutWidth: string;
    leftSideBarTheme: string;
    leftSideBarType: string;
    showRightSidebar: boolean;
  };
  children?: any;
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  const location = useLocation();
  const { layoutColor, user, customerUser } = useSelector((state: RootState) => ({
    layoutColor: state.Layout.layoutColor,
    user: state.Auth.user,
    customerUser: state.CustomerAuth.user,
  }));
  // const pathname = location.pathname;


  useEffect(() => {
    changeHTMLAttribute("data-bs-theme", layoutColor);
  }, [layoutColor]);

  useEffect(() => {
    if (document.body)
      document.body.classList.add(
        "authentication-bg",
        "authentication-bg-pattern",
      );

    return () => {
      if (document.body)
        document.body.classList.remove(
          "authentication-bg",
          "authentication-bg-pattern",
        );
    };
  }, []);
  if (location.pathname !== '/auth/logout') {
    if (user) {
      return <Navigate to="/dashboard-1"/>;
    }
  
    if (customerUser) {
      return <Navigate to="/dashboard-2"/>;
    }
  }

  // get the child view which we would like to render
  const children = props["children"] || null;

  return (
    <>
      <Suspense fallback={loading()}>{children}</Suspense>
    </>
  );
};
export default DefaultLayout;
