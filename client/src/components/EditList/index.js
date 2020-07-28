import React from "react";
import EditListPage from "./EditListPage";
import Button from "@material-ui/core/Button";
import api from "../../api";
import NotFoundPage from "../../pages/404";

class EditList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
    };
  }

  componentDidMount = async () => {
    await api
      .checkValidId(this.state.id)
      .then((res) => {
        if (res.data.success && res.data.valid) {
          this.setState({ valid: true });
        } else {
          this.setState({ valid: false });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    if (this.state.valid) {
      return <EditListPage id={this.props.match.params.id} />;
    } else {
      return <NotFoundPage />;
    }
  }
}

class EditLink extends React.Component {
  updateSet = (e) => {
    e.preventDefault();

    window.location.href = `/set/${this.props.id}`;
  };

  render() {
    return <Button onClick={this.updateSet} size={this.props.size} color={this.props.color}>Edit</Button>;
  }
}

export default EditList;

export { EditLink };
