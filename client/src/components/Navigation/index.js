import React from "react";

import { AuthUserContext } from "../../auth/Session";
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
