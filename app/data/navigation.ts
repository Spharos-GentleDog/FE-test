import { NavItemType } from "@/components/module/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";

const CATEGOIRES_CHIRLD: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/collection",
    name: "All",
  },
  {
    id: ncNanoId(),
    href: "/collection-2",
    name: "New",
  },
  {
    id: ncNanoId(),
    href: "/collection",
    name: "Beauty",
  },

  {
    id: ncNanoId(),
    href: "/collection-2",
    name: "Sport",
  },
];

export const NAVIGATION_DEMO_2: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Categories",
    children: CATEGOIRES_CHIRLD
  },
  {
    id: ncNanoId(),
    href: "/collection-2",
    name: "Women",
  },
  {
    id: ncNanoId(),
    href: "/collection",
    name: "Beauty",
  },

  {
    id: ncNanoId(),
    href: "/collection-2",
    name: "Sport",
  },
  {
    id: ncNanoId(),
    href: "/collection",
    name: "Templates",
    type: "megaMenu",
    // children: MEGAMENU_TEMPLATES,
  },
  {
    id: ncNanoId(),
    href: "/search",
    name: "Explore",
    type: "dropdown",
    // children: OTHER_PAGE_CHILD,
  },
];