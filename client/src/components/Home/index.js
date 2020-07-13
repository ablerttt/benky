import React from "react";
// import Button from 'react-bootstrap/Button';

import "./home.css";

import { withAuthorization } from "../Session";

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>The home page is accessible by every signed in user</p>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);
