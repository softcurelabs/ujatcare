import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// store
import { RootState } from "../store";
import ProfileDropdown from "../components/ProfileDropdown";

import profilePic from "../assets/images/users/user-1.jpg";
import { Button } from "react-bootstrap";

export interface NotificationItem {
  id: number;
  text: string;
  subText: string;
  icon?: string;
  avatar?: string;
  bgColor?: string;
}

// get the profilemenu
const ProfileMenus = [
  {
    label: "My Account",
    icon: "fe-user",
    redirectTo: "/staff-account",
  },
  {
    label: "Logout",
    icon: "fe-log-out",
    redirectTo: "/auth/logout",
  },
];

interface TopbarProps {
  hideLogo?: boolean;
  navCssClasses?: string;
  openLeftMenuCallBack?: () => void;
  topbarDark?: boolean;
}
const Topbar = ({ hideLogo, navCssClasses }: TopbarProps) => {
  // const { width } = useViewport();
  const navigate = useNavigate();
  const location = useLocation();

  let navbarCssClasses: string = navCssClasses || "";
  const containerCssClasses: string = !hideLogo ? "container-fluid" : "";

  let { user, customer } = useSelector((state: RootState) => ({
    user: state.Auth.user,
    customer: state.CustomerAuth.user,
  }));

  if (customer) {
    user = customer;
  }

  if (user && user.user_role.includes("recident")) {
    navbarCssClasses = "topnav-light";
  }

  // // create backdrop for leftsidebar
  // function showLeftSideBarBackdrop() {
  //   const backdrop = document.createElement("div");
  //   backdrop.id = "custom-backdrop";
  //   backdrop.className = "offcanvas-backdrop fade show";
  //   // backdrop.style.zIndex = '999'
  //   document.body.appendChild(backdrop);

  //   if (document.getElementsByTagName("html")[0]?.getAttribute("dir") !== "rtl") {
  //     document.body.style.overflow = "hidden";
  //     if (width > 1140) {
  //       document.body.style.paddingRight = "15px";
  //     }
  //   }

  //   backdrop.addEventListener("click", function (e) {
  //     document.getElementsByTagName("html")[0].classList.remove("sidebar-enable");
  //     // dispatch(changeSidebarType(SideBarTypes.LEFT_SIDEBAR_TYPE_FULL));
  //     hideLeftSideBarBackdrop();
  //   });
  // }

  // function hideLeftSideBarBackdrop() {
  //   var backdrop = document.getElementById("custom-backdrop");
  //   if (backdrop) {
  //     document.body.removeChild(backdrop);
  //     document.body.style.overflow = "visible";
  //   }
  // }

  /**
   * Toggles the left sidebar width
   */
  // const toggleLeftSidebarWidth = () => {
  //   if (leftSideBarType === 'default' || leftSideBarType === 'compact')
  //     dispatch(changeSidebarType(SideBarTypes.LEFT_SIDEBAR_TYPE_CONDENSED));
  //   if (leftSideBarType === 'condensed') dispatch(changeSidebarType(SideBarTypes.LEFT_SIDEBAR_TYPE_DEFAULT));
  // };
  let heading;
  let name: string = user.username;
  let link = "/dashboard-1";
  if (user && user.user_role.includes("recident")) {
    heading = (
      <>
        <h4 className="text-white"> Apt#: {user.flat}</h4>
        <h4 className="text-white">Name: {name}</h4>
      </>
    );
  } else {
    link = "/dashboard-2";
    heading = (
      <>
        <h4 className="text-muted">Name: {name}</h4>
      </>
    );
  }
  const pathname = location.pathname;
  const BackButton =
    pathname === "/dashboard-1" || pathname === "/dashboard-2" ? (
      <></>
    ) : (
      <Button onClick={() => navigate(link)} className="me-3">
        Back to Dashboard
      </Button>
    );

  return (
    <React.Fragment>
      <div className={`navbar-custom ${navbarCssClasses}`}>
        <div className={`topbar ${containerCssClasses}`}>
          <div className="col-lg-2">{BackButton}</div>
          <div className="topbar-menu mx-auto">
            <div className="text-center">{heading}</div>
          </div>

          <ul className="topbar-menu d-flex align-items-center">
            {/* <li className="dropdown notification-list">
              <NotificationDropdown notifications={Notifications} />
            </li> */}
            <li className="dropdown">
              <ProfileDropdown
                profilePic={user.profile_pic ? user.profile_pic : profilePic}
                menuItems={ProfileMenus}
                username={name}
                userTitle={"Founder"}
              />
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Topbar;
