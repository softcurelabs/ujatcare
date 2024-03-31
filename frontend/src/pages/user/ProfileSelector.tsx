import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import MyAccount from "./MyAccount";
import MyAccountStaff from "./MyAccountStaff";

const ProfileSelector = () => {
  let { user, userCustomer } = useSelector((state: RootState) => ({
    user: state.Auth.user,
    userCustomer: state.CustomerAuth.user,
  }));
  if (userCustomer) {
    user = userCustomer;
  }

  return <>{user && (user.user_role.includes("recident") ? <MyAccount /> : <MyAccountStaff />)}</>;
};

export default ProfileSelector;
