import React from "react";
import EditListPage from "./EditListPage";
import Button from "@material-ui/core/Button";
import api from "../../api";
import NotFoundPage from "../../pages/404";
import LoadingPage from "./LoadingList";

class EditList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      render: false,
      id: this.props.match.params.id,
      valid: false,
      checked: false,
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

    this.setState({ checekd: true });

    setTimeout(
      function () {
        //Start the timer
        this.setState({ render: true }); //After 1 second, set render to true
      }.bind(this),
      1000
    );
  };

  render() {
    let renderContainer = <LoadingPage />;
    if (this.state.valid) {
      renderContainer = <EditListPage id={this.props.match.params.id} />;
    } else if (!this.state.valid && this.state.checked) {
      renderContainer = <NotFoundPage />;
    }

    return renderContainer;
  }
}

class EditLink extends React.Component {
  updateSet = (e) => {
    e.preventDefault();

    window.location.href = `/set/${this.props.id}`;
  };

  render() {
    return (
      <Button
        onClick={this.updateSet}
        size={this.props.size}
        color={this.props.color}
      >
        Edit
      </Button>
    );
  }
}

export default EditList;

export { EditLink };
