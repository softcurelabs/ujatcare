import { Navigate } from "react-router-dom";

import { APICore } from "../helpers/api/apiCore";

/**
 * Private Route forces the authorization before the route can be accessed
 * @param {*} param0
 * @returns
 */
const PrivateRoute = ({ children, roles, ...rest }: any) => {
    const api = new APICore();
    if (api.isUserAuthenticated() === false) {
        // not logged in so redirect to login page with the return url
        return (
            <Navigate
                // state={from: props['path']}
                to={{
                    pathname: "/auth/customer-login",
                    // state: { from: props['path'] },
                }}
            />
        );
    }

    const loggedInUser = api.getLoggedInUser();
    // check if route is restricted by role
    if (roles && roles.includes(loggedInUser.user_role[0]) === false) {
        // role not authorised so redirect to login page
        return <Navigate to={{ pathname: "/error-500" }} />;
    }
    // authorised so return component
    return children;
};

export default PrivateRoute;
