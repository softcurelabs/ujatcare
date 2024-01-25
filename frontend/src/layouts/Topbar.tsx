import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import classNames from 'classnames';

// actions
// import { showRightSidebar, changeSidebarType } from "../redux/actions";

// store
import { RootState, AppDispatch } from "../store";

//constants
import { LayoutTypes, SideBarTypes } from "../constants/layout";

// components
import TopbarSearch from "../components/TopbarSearch";
import MaximizeScreen from "../components/MaximizeScreen";
import AppsDropdown from "../components/AppsDropdown/";
// import SearchDropdown from '../components/SearchDropdown';
import LanguageDropdown from "../components/LanguageDropdown";
import NotificationDropdown from "../components/NotificationDropdown";
import ProfileDropdown from "../components/ProfileDropdown";
import CreateNew from "../components/CreateNew";
import MegaMenu from "../components/MegaMenu";

import profilePic from "../assets/images/users/user-1.jpg";
import avatar4 from "../assets/images/users/user-4.jpg";
import { useViewport } from "../hooks/useViewPort";
import { Button, Row, ToggleButton } from "react-bootstrap";

export interface NotificationItem {
  id: number;
  text: string;
  subText: string;
  icon?: string;
  avatar?: string;
  bgColor?: string;
}

// get the notifications
const Notifications: NotificationItem[] = [
  {
    id: 1,
    text: "Cristina Pride",
    subText: "Hi, How are you? What about our next meeting",
    avatar: profilePic,
  },
  {
    id: 2,
    text: "Caleb Flakelar commented on Admin",
    subText: "1 min ago",
    icon: "mdi mdi-comment-account-outline",
    bgColor: "primary",
  },
  {
    id: 3,
    text: "Karen Robinson",
    subText: "Wow ! this admin looks good and awesome design",
    avatar: avatar4,
  },
  {
    id: 4,
    text: "New user registered.",
    subText: "5 hours ago",
    icon: "mdi mdi-account-plus",
    bgColor: "warning",
  },
  {
    id: 5,
    text: "Caleb Flakelar commented on Admin",
    subText: "1 min ago",
    icon: "mdi mdi-comment-account-outline",
    bgColor: "info",
  },
  {
    id: 6,
    text: "Carlos Crouch liked Admin",
    subText: "13 days ago",
    icon: "mdi mdi-heart",
    bgColor: "secondary",
  },
];

// get the profilemenu
const ProfileMenus = [
  {
    label: "My Account",
    icon: "fe-user",
    redirectTo: "/ui/forms/basic",
  },
  {
    label: "Logout",
    icon: "fe-log-out",
    redirectTo: "/auth/logout",
  },
];

// dummy search results
const SearchResults = [
  {
    id: 1,
    title: "Analytics Report",
    icon: "uil-notes",
    redirectTo: "#",
  },
  {
    id: 2,
    title: "How can I help you?",
    icon: "uil-life-ring",
    redirectTo: "#",
  },
  {
    id: 3,
    icon: "uil-cog",
    title: "User profile settings",
    redirectTo: "#",
  },
];

const otherOptions = [
  {
    id: 1,
    label: "New Projects",
    icon: "fe-briefcase",
  },
  {
    id: 2,
    label: "Create Users",
    icon: "fe-user",
  },
  {
    id: 3,
    label: "Revenue Report",
    icon: "fe-bar-chart-line-",
  },
  {
    id: 4,
    label: "Settings",
    icon: "fe-settings",
  },
  {
    id: 4,
    label: "Help & Support",
    icon: "fe-headphones",
  },
];

// get mega-menu options
const MegaMenuOptions = [
  {
    id: 1,
    title: "UI Components",
    menuItems: [
      "Widgets",
      "Nestable List",
      "Range Sliders",
      "Masonry Items",
      "Sweet Alerts",
      "Treeview Page",
      "Tour Page",
    ],
  },
  {
    id: 2,
    title: "Applications",
    menuItems: [
      "eCommerce Pages",
      "CRM Pages",
      "Email",
      "Calendar",
      "Team Contacts",
      "Task Board",
      "Email Templates",
    ],
  },
  {
    id: 3,
    title: "Extra Pages",
    menuItems: [
      "Left Sidebar with User",
      "Menu Collapsed",
      "Small Left Sidebar",
      "New Header Style",
      "Search Result",
      "Gallery Pages",
      "Maintenance & Coming Soon",
    ],
  },
];

interface TopbarProps {
  hideLogo?: boolean;
  navCssClasses?: string;
  openLeftMenuCallBack?: () => void;
  topbarDark?: boolean;
}
interface LocationState {
  from: {
    pathname: string;
  };
}
const Topbar = ({ hideLogo, navCssClasses, openLeftMenuCallBack, topbarDark }: TopbarProps) => {
  const { width } = useViewport();
  const navigate = useNavigate();
  const location = useLocation();

  let navbarCssClasses: string = navCssClasses || "";
  const containerCssClasses: string = !hideLogo ? "container-fluid" : "";

  const { user } = useSelector((state: RootState) => ({
    user: state.Auth.user,
  }));

  if (user && user.role === "Flat") {
    navbarCssClasses = "topnav-light";
  }

  // create backdrop for leftsidebar
  function showLeftSideBarBackdrop() {
    const backdrop = document.createElement("div");
    backdrop.id = "custom-backdrop";
    backdrop.className = "offcanvas-backdrop fade show";
    // backdrop.style.zIndex = '999'
    document.body.appendChild(backdrop);

    if (document.getElementsByTagName("html")[0]?.getAttribute("dir") !== "rtl") {
      document.body.style.overflow = "hidden";
      if (width > 1140) {
        document.body.style.paddingRight = "15px";
      }
    }

    backdrop.addEventListener("click", function (e) {
      document.getElementsByTagName("html")[0].classList.remove("sidebar-enable");
      // dispatch(changeSidebarType(SideBarTypes.LEFT_SIDEBAR_TYPE_FULL));
      hideLeftSideBarBackdrop();
    });
  }

  function hideLeftSideBarBackdrop() {
    var backdrop = document.getElementById("custom-backdrop");
    if (backdrop) {
      document.body.removeChild(backdrop);
      document.body.style.overflow = "visible";
    }
  }

  /**
   * Toggles the left sidebar width
   */
  // const toggleLeftSidebarWidth = () => {
  //   if (leftSideBarType === 'default' || leftSideBarType === 'compact')
  //     dispatch(changeSidebarType(SideBarTypes.LEFT_SIDEBAR_TYPE_CONDENSED));
  //   if (leftSideBarType === 'condensed') dispatch(changeSidebarType(SideBarTypes.LEFT_SIDEBAR_TYPE_DEFAULT));
  // };
  let heading;
  let name: string = "Admin";
  let link = "/dashboard-1";
  if (user && user.role === "Flat") {
    name = "Matthew Adams";
    heading = (
      <>
        <h4> Apt#: 12323</h4>
        <h4>Name: {name}</h4>
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
                profilePic={profilePic}
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
