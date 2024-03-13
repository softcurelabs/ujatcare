import React from "react";
import { Route, Navigate, RouteProps } from "react-router-dom";

// components
import PrivateRoute from "./PrivateRoute";
import FAQ from "../pages/other/FAQ";
import AboutUs from "../pages/other/AboutUs";
const Notices = React.lazy(() => import("../pages/tables/Notices"));
const CustomerLogin = React.lazy(() => import("../pages/auth/CustomerLogin"));
const MaintananceReport = React.lazy(() => import("../pages/tables/MaintananceReport"));
const Ticket = React.lazy(() => import("../pages/forms/Ticket"));
const Orders = React.lazy(() => import("../pages/apps/Ecommerce/Orders"));
const Create = React.lazy(() => import("../pages/maintanance/Create"));
const CreateApplication = React.lazy(() => import("../pages/application/Create"));

const CreateInspection = React.lazy(() => import("../pages/inspection/Create"));
const EditInspection = React.lazy(() => import("../pages/inspection/Edit"));
const ListApplication = React.lazy(() => import("../pages/application/List"));

// import Root from './Root';

// lazy load all the views

// auth
const Login = React.lazy(() => import("../pages/auth/Login"));
const Logout = React.lazy(() => import("../pages/auth/Logout"));
const Confirm = React.lazy(() => import("../pages/auth/Confirm"));
const ForgetPassword = React.lazy(() => import("../pages/auth/ForgetPassword"));
const ResetPassword = React.lazy(() => import("../pages/auth/ResetPassword"));
const Register = React.lazy(() => import("../pages/auth/Register"));
const SignInSignUp = React.lazy(() => import("../pages/auth/SignInSignUp"));
const LockScreen = React.lazy(() => import("../pages/auth/LockScreen"));

// landing
const Landing = React.lazy(() => import("../pages/landing/"));

// dashboard
const Dashboard1 = React.lazy(() => import("../pages/dashboard/Dashboard1/"));
const Dashboard2 = React.lazy(() => import("../pages/dashboard/Dashboard2/"));
const Dashboard3 = React.lazy(() => import("../pages/dashboard/Dashboard3/"));
const Dashboard4 = React.lazy(() => import("../pages/dashboard/Dashboard4/"));

// apps
const CalendarApp = React.lazy(() => import("../pages/apps/Calendar/"));
// extra pages
const Error404 = React.lazy(() => import("../pages/error/Error404"));
const Error404Two = React.lazy(() => import("../pages/error/Error404Two"));
const Error500 = React.lazy(() => import("../pages/error/Error500"));
const Error500Two = React.lazy(() => import("../pages/error/Error500Two"));
// - other
const Upcoming = React.lazy(() => import("../pages/other/Upcoming"));
const Maintenance = React.lazy(() => import("../pages/other/Maintenance"));

const Inspection = React.lazy(() => import("../pages/inspection"));
const NoticeList = React.lazy(() => import("../pages/notice/Notices"));
const NewNotice = React.lazy(() => import("../pages/notice/NewNotice"));
const EditNotice = React.lazy(() => import("../pages/notice/EditNotice"));
const NoticeHighlight = React.lazy(() => import("../pages/notice/CustomerNotices"));

const UserList = React.lazy(() => import("../pages/user/Users"));
const RecidentList = React.lazy(() => import("../pages/user/Recidents"));
const EditUser = React.lazy(() => import("../pages/user/EditUser"));
const EditUserStaff = React.lazy(() => import("../pages/user/EditUserStaff"));
const NewUser = React.lazy(() => import("../pages/user/NewUser"));
const NewRecident = React.lazy(() => import("../pages/user/NewRecident"));

const AssignPermission = React.lazy(() => import("../pages/user/AssignPermission"));
const AssignPermissionAdmin = React.lazy(() => import("../pages/user/AssignPermissionAdmin"));
const MyAccount = React.lazy(() => import("../pages/user/MyAccount"));
const MyAccountStaff = React.lazy(() => import("../pages/user/MyAccountStaff"));
const MaintananceList = React.lazy(() => import("../pages/maintanance/List"));
const MaintananceEdit = React.lazy(() => import("../pages/maintanance/Edit"));
const MaintananceEditAdmin = React.lazy(() => import("../pages/maintanance/EditAdmin"));
const MaintananceListAdmin = React.lazy(() => import("../pages/maintanance/ListAdmin"));

const RentPayment = React.lazy(() => import("../pages/rent/RentPayment"));
// icons
const TwoToneIcons = React.lazy(() => import("../pages/icons/TwoToneIcons/"));
const FeatherIcons = React.lazy(() => import("../pages/icons/FeatherIcons/"));
const Dripicons = React.lazy(() => import("../pages/icons/Dripicons/"));
const MDIIcons = React.lazy(() => import("../pages/icons/MDIIcons/"));
const FontAwesomeIcons = React.lazy(() => import("../pages/icons/FontAwesomeIcons/"));
const ThemifyIcons = React.lazy(() => import("../pages/icons/ThemifyIcons/"));
const SimpleLineIcons = React.lazy(() => import("../pages/icons/SimpleLineIcons/"));
const WeatherIcons = React.lazy(() => import("../pages/icons/WeatherIcons/"));

// forms
const BasicForms = React.lazy(() => import("../pages/forms/Basic"));
const FormAdvanced = React.lazy(() => import("../pages/forms/Advanced"));
const FormValidation = React.lazy(() => import("../pages/forms/Validation"));
const FormWizard = React.lazy(() => import("../pages/forms/Wizard"));
const FileUpload = React.lazy(() => import("../pages/forms/FileUpload"));
const Editors = React.lazy(() => import("../pages/forms/Editors"));

// tables
const BasicTables = React.lazy(() => import("../pages/tables/Basic"));
const AdvancedTables = React.lazy(() => import("../pages/tables/Advanced"));

export interface RoutesProps {
  path: RouteProps["path"];
  name?: string;
  element?: RouteProps["element"];
  route?: any;
  exact?: boolean;
  icon?: string;
  header?: string;
  roles?: string[];
  children?: RoutesProps[];
}

// root routes
// const rootRoute: RoutesProps = {
//     path: '/',
//     exact: true,
//     element: () => <Root />,
//     route: Route,
// };

// dashboards
const dashboardRoutes: RoutesProps = {
  path: "/dashboard",
  name: "Dashboards",
  route: PrivateRoute,
  icon: "airplay",
  header: "Navigation",
  children: [
    {
      path: "/dashboard-1",
      name: "Dashboard 1",
      element: <Dashboard1 />,
      route: PrivateRoute,
    },
    {
      path: "/dashboard-2",
      name: "Dashboard 2",
      roles: ["admin", "staff"],
      element: <Dashboard2 />,
      route: PrivateRoute,
    },
    {
      path: "/dashboard-3",
      name: "Dashboard 3",
      element: <Dashboard3 />,
      route: PrivateRoute,
    },
    {
      path: "/dashboard-4",
      name: "Dashboard 4",
      element: <Dashboard4 />,
      route: PrivateRoute,
    },
  ],
};

const calendarAppRoutes: RoutesProps = {
  path: "/apps/calendar",
  name: "Calendar",
  icon: "calendar",
  element: <CalendarApp />,
  header: "Apps",
};
const ecommerce: RoutesProps = {
  path: "apps/ecommerce/orders",
  name: "Calendar",
  icon: "calendar",
  element: <Orders />,
  header: "Apps",
};

const appRoutes = [calendarAppRoutes, ecommerce];

// ui
const uiRoutes = {
  path: "/ui",
  name: "Components",
  icon: "pocket",
  header: "UI Elements",
  children: [
    {
      path: "/ui/base",
      name: "Base UI",
      children: [],
    },
    {
      path: "/ui/widgets",
      name: "Widgets",
      // element: <Widgets />,
      route: PrivateRoute,
    },
    {
      path: "/ui/icons",
      name: "Icons",
      children: [
        {
          path: "/ui/icons/two-tone",
          name: "Two Tone Icons",
          element: <TwoToneIcons />,
          route: PrivateRoute,
        },
        {
          path: "/ui/icons/feather",
          name: "Feather Icons",
          element: <FeatherIcons />,
          route: PrivateRoute,
        },
        {
          path: "/ui/icons/dripicons",
          name: "Dripicons",
          element: <Dripicons />,
          route: PrivateRoute,
        },
        {
          path: "/ui/icons/mdi",
          name: "Material Design",
          element: <MDIIcons />,
          route: PrivateRoute,
        },
        {
          path: "/ui/icons/font-awesome",
          name: "Font Awesome 5",
          element: <FontAwesomeIcons />,
          route: PrivateRoute,
        },
        {
          path: "/ui/icons/themify",
          name: "Themify",
          element: <ThemifyIcons />,
          route: PrivateRoute,
        },
        {
          path: "/ui/icons/simple-line",
          name: "Simple Line Icons",
          element: <SimpleLineIcons />,
          route: PrivateRoute,
        },
        {
          path: "/ui/icons/weather",
          name: "Weather Icons",
          element: <WeatherIcons />,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/ui/forms",
      name: "Forms",
      children: [
        {
          path: "/ui/forms/basic",
          name: "Basic Elements",
          element: <BasicForms />,
          route: PrivateRoute,
        },
        {
          path: "/ui/forms/notices",
          name: "Basic Elements",
          element: <Notices />,
          route: PrivateRoute,
        },
        {
          path: "/ui/forms/report",
          name: "Basic Elements",
          element: <MaintananceReport />,
          route: PrivateRoute,
        },
        {
          path: "/ui/forms/advanced",
          name: "Form Advanced",
          element: <FormAdvanced />,
          route: PrivateRoute,
        },
        {
          path: "/ui/forms/validation",
          name: "Form Validation",
          element: <FormValidation />,
          route: PrivateRoute,
        },
        {
          path: "/ui/forms/wizard",
          name: "Form Wizard",
          element: <FormWizard />,
          route: PrivateRoute,
        },
        {
          path: "/ui/forms/upload",
          name: "File Upload",
          element: <FileUpload />,
          route: PrivateRoute,
        },
        {
          path: "/ui/forms/editors",
          name: "Editors",
          element: <Editors />,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/",
      name: "Tables",
      children: [
        {
          path: "/maintanance/create",
          name: "Basic",
          element: <Create />,
        },
        {
          path: "/maintanance",
          name: "Basic",
          element: <MaintananceList />,
        },
        {
          path: "/maintanance/:id",
          name: "Basic",
          element: <MaintananceEdit />,
        },
        {
          path: "/maintanance-admin/:id",
          name: "Basic",
          element: <MaintananceEditAdmin />,
        },
        {
          path: "/maintanance-admin",
          name: "Basic",
          element: <MaintananceListAdmin />,
        },
      ],
    },
    {
      path: "/",
      name: "Tables",
      children: [
        {
          path: "/inspection",
          name: "Basic",
          element: <Inspection />,
          route: PrivateRoute,
        },
        {
          path: "/inspection/new",
          name: "Basic",
          element: <CreateInspection />,
          route: PrivateRoute,
        },
        {
          path: "/inspection/:id",
          name: "Basic",
          element: <EditInspection />,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/",
      children: [
        {
          path: "/notice-highlight",
          name: "Basic",
          element: <NoticeHighlight />,
        },
        {
          path: "/notice",
          name: "Basic",
          element: <NoticeList />,
        },
        {
          path: "/notice/new",
          name: "Basic",
          element: <NewNotice />,
        },
        {
          path: "/notice/:id",
          name: "Basic",
          element: <EditNotice />,
        },
      ],
    },
    {
      path: "/",
      children: [
        {
          path: "/user",
          name: "Basic",
          element: <UserList />,
        },
        {
          path: "/recident",
          name: "Basic",
          element: <RecidentList />,
        },

        {
          path: "/user/new",
          name: "Basic",
          element: <NewUser />,
        },
        {
          path: "/user-recident/new",
          name: "Basic",
          element: <NewRecident />,
        },
        {
          path: "/user/:id",
          name: "Basic",
          element: <EditUser />,
        },
        {
          path: "/applications",
          name: "Application",
          element: <ListApplication />,
          route: PrivateRoute,
        },
        {
          path: "/user-staff/:id",
          name: "Basic",
          element: <EditUserStaff />,
        },
        {
          path: "/assign-permission/:id",
          name: "Basic",
          element: <AssignPermission />,
        },
        {
          path: "/assign-permission-staff/:id",
          name: "Basic",
          element: <AssignPermissionAdmin />,
        },
        {
          path: "/my-account",
          name: "Basic",
          element: <MyAccount />,
        },
        {
          path: "/staff-account",
          name: "Basic",
          element: <MyAccountStaff />,
        },
      ],
    },
    {
      path: "/",
      children: [
        {
          path: "/rent-payment",
          name: "Basic",
          element: <RentPayment />,
        },
      ],
    },
    {
      path: "/ui/tables",
      name: "Tables",
      children: [
        {
          path: "/ui/tables/basic",
          name: "Basic",
          element: <BasicTables />,
          route: PrivateRoute,
        },
        {
          path: "/ui/tables/ticket",
          name: "Basic",
          element: <Ticket />,
          route: PrivateRoute,
        },
        {
          path: "/ui/tables/report",
          name: "Basic",
          element: <MaintananceReport />,
          route: PrivateRoute,
        },
        {
          path: "/ui/tables/advanced",
          name: "Advanced",
          element: <AdvancedTables />,
          route: PrivateRoute,
        },
      ],
    },
  ],
};

// auth
const authRoutes: RoutesProps[] = [
  {
    path: "/",
    name: "Root",
    element: <AboutUs />,
  },
  {
    path: "/auth/login",
    name: "Login",
    element: <Login />,
    route: Route,
  },
  {
    path: "/application",
    name: "Application",
    element: <CreateApplication />,
    route: Route,
  },

  {
    path: "/auth/customer-login",
    name: "Login",
    element: <CustomerLogin />,
    route: Route,
  },
  {
    path: "/auth/register",
    name: "Register",
    element: <Register />,
    route: Route,
  },
  {
    path: "/auth/confirm",
    name: "Confirm",
    element: <Confirm />,
    route: Route,
  },
  {
    path: "/auth/forget-password",
    name: "Forget Password",
    element: <ForgetPassword />,
    route: Route,
  },
  {
    path: "/reset-password/:token",
    name: "Reset Password",
    element: <ResetPassword />,
    route: Route,
  },
  {
    path: "/auth/signin-signup",
    name: "SignIn-SignUp",
    element: <SignInSignUp />,
    route: Route,
  },
  {
    path: "/auth/lock-screen",
    name: "Lock Screen",
    element: <LockScreen />,
    route: Route,
  },
  {
    path: "/auth/logout",
    name: "Logout",
    element: <Logout />,
    route: Route,
  },
];

// public routes
const otherPublicRoutes = [
  {
    path: "/landing",
    name: "landing",
    element: <Landing />,
    route: Route,
  },
  {
    path: "/maintenance",
    name: "Maintenance",
    element: <Maintenance />,
    route: Route,
  },
  {
    path: "/error-404",
    name: "Error - 404",
    element: <Error404 />,
    route: Route,
  },
  {
    path: "/error-404-two",
    name: "Error - 404 Two",
    element: <Error404Two />,
    route: Route,
  },
  {
    path: "/error-500",
    name: "Error - 500",
    element: <Error500 />,
    route: Route,
  },
  {
    path: "/error-500-two",
    name: "Error - 500 Two",
    element: <Error500Two />,
    route: Route,
  },
  {
    path: "/upcoming",
    name: "Coming Soon",
    element: <Upcoming />,
    route: Route,
  },
];

// flatten the list of all nested routes
const flattenRoutes = (routes: RoutesProps[]) => {
  let flatRoutes: RoutesProps[] = [];

  routes = routes || [];
  routes.forEach((item: RoutesProps) => {
    flatRoutes.push(item);

    if (typeof item.children !== "undefined") {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
    }
  });
  return flatRoutes;
};

// All routes
const authProtectedRoutes = [dashboardRoutes, ...appRoutes, uiRoutes];
const publicRoutes = [...authRoutes, ...otherPublicRoutes];

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);
export {
  publicRoutes,
  authProtectedRoutes,
  authProtectedFlattenRoutes,
  publicProtectedFlattenRoutes,
};
