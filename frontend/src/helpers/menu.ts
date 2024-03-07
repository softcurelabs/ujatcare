import {
  CUSTOMER_ITEMS,
  MENU_ITEMS,
  HORIZONTAL_MENU_ITEMS,
  TWO_COl_MENU_ITEMS,
  MenuItemTypes,
  ADMIN_ITEMS,
} from "../constants/menu";

const getMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return MENU_ITEMS;
};

const getCustomerItems = () => {
  // NOTE - You can fetch from server and return here as well
  return CUSTOMER_ITEMS;
};

const getAdminItems = () => {
  // NOTE - You can fetch from server and return here as well
  return ADMIN_ITEMS;
};

const getHorizontalMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return HORIZONTAL_MENU_ITEMS;
};

const getTwoColumnMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return TWO_COl_MENU_ITEMS;
};

const findAllParent = (
  menuItems: MenuItemTypes[],
  menuItem: MenuItemTypes,
): string[] => {
  let parents: string[] = [];
  const parent = findMenuItem(menuItems, menuItem["parentKey"]);

  if (parent) {
    parents.push(parent["key"]);
    if (parent["parentKey"])
      parents = [...parents, ...findAllParent(menuItems, parent)];
  }

  return parents;
};

const findMenuItem = (
  menuItems: MenuItemTypes[] | undefined,
  menuItemKey: MenuItemTypes["key"] | undefined,
): MenuItemTypes | null => {
  if (menuItems && menuItemKey) {
    for (var i = 0; i < menuItems.length; i++) {
      if (menuItems[i].key === menuItemKey) {
        return menuItems[i];
      }
      var found = findMenuItem(menuItems[i].children, menuItemKey);
      if (found) return found;
    }
  }
  return null;
};

export {
  getAdminItems,
  getMenuItems,
  getCustomerItems,
  getHorizontalMenuItems,
  getTwoColumnMenuItems,
  findAllParent,
  findMenuItem,
};
