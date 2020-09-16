import React from "react";
import EditListPage from "./EditListPage";
import Button from "@material-ui/core/Button";
import api from "../../api";
import NotFoundPage from "../../pages/404";
import LoadingPage from "./LoadingList";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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

    this.setState({ checked: true });
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

class EditLinkBase extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          component={Link}
          to={`/set/${this.props.id}`}
          className={classes.primaryLightLimitedButton}
          variant="contained"
        >
          Edit
        </Button>
      </div>
    );
  }
}

export default EditList;

const EditLink = withStyles(styles)(EditLinkBase);

export { EditLink };
