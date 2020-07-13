import React from "react";

import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import NavigationAuth from "./NavigationAuth";
import NavigationNoAuth from "./NavigationNoAuth";

export default function Navigation() {
  return (
    <div>
      <AuthUserContext.Consumer>
        {(authUser) => (authUser ? <NavigationAuth /> : <NavigationNoAuth />)}
      </AuthUserContext.Consumer>
    </div>
  );
}
