import { createSlice } from "@reduxjs/toolkit";
import {
  LayoutColor,
  LayoutMode,
  LayoutTypes,
  LayoutWidth,
  MenuPositions,
  SideBarTheme,
  SideBarTypes,
  TopbarTheme,
  TwoColumnTheme,
} from "../../constants";

const initialState = {
  twoColumnTheme: TwoColumnTheme.TWOCOLUMN_LIGHT,
  layoutMode: LayoutMode.LAYOUT_DEFAULT,
  sidenavUser: false,
  layoutType: LayoutTypes.LAYOUT_VERTICAL,
  layoutColor: LayoutColor.LAYOUT_COLOR_LIGHT,
  layoutWidth: LayoutWidth.LAYOUT_WIDTH_FLUID,
  menuPosition: MenuPositions.MENU_POSITION_FIXED,
  leftSideBarTheme: SideBarTheme.LEFT_SIDEBAR_THEME_LIGHT,
  leftSideBarType: SideBarTypes.LEFT_SIDEBAR_TYPE_DEFAULT,
  showTwoToneIcons: false,
  showSidebarUserInfo: false,
  topbarTheme: TopbarTheme.TOPBAR_THEME_DARK,
  isOpenRightSideBar: false,
  showRightSidebar: false,
};

const LayoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {},
});

export default LayoutSlice.reducer;
