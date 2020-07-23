import React from "react";
import NextInput from "./inputNext";
import AddIcon from "@material-ui/icons/AddIcon";
import { addCard } from "./form";

class NextEmptyForm extends React.Component {
  state = {
    nextName: "",
    nextDef: "",
  };

  handleChange = (e) => {
    addCard();
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    let { nextName, nextDef } = this.state;
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <NextInput nextName={nextName} nextDef={nextDef} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export { addCard };

export default NextEmptyForm;
