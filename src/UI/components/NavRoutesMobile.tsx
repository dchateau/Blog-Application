import React from "react";
import { useRouter } from "next/router";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import type { ReactElement } from "react";
import type { NextRouter } from "next/router";
import type { Route } from "@typings/globals";

interface Props {
  onHandleClick: () => void;
  routes: Route[];
}

const NavRoutesMobile = ({ onHandleClick, routes }: Props): ReactElement => {
  const router: NextRouter = useRouter();

  const onRouteClicked = (route: string): void => {
    const toRoute: string = route !== "blog" ? `/${route}` : "/";
    router.push({ pathname: toRoute });
    onHandleClick();
  };

  return (
    <List>
      {routes.map((route: Route) => (
        <ListItem
          key={route.id}
          disablePadding
          sx={{ mt: 1 }}
          onClick={onRouteClicked.bind(null, route.id)}
        >
          <ListItemButton>
            <ListItemIcon>
              <AltRouteIcon />
            </ListItemIcon>
            <ListItemText primary={route.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NavRoutesMobile;
