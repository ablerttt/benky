import React from "react";
import api from "../../api";
import CardInputs from "./CardInputs";

class EditListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
    };
  }

  componentDidMount = async () => {
    await api
      .getStudySetById(this.state.id)
      .then((res) => {
        var set = res.data.data;
        this.setState({
          title: set.title,
          cards: set.cards,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return <div>Hello world!</div>;
  }
}

export default EditListPage;
