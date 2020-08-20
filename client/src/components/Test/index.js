import React from "react";
import api from "../../api";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import LoadingPage from "../EditList/LoadingList";
import NotFoundPage from "../../pages/404";

class Test extends React.Component {
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
      renderContainer = <div>Hellowuuwuwuwuuw</div>;
    } else if (!this.state.valid && this.state.checked) {
      renderContainer = <NotFoundPage />;
    }

    return renderContainer;
  }
}

const updateSet = (e) => {
  e.preventDefault();

  window.location.href = `/set/${this.props.id}`;
};

const TestLink = (props) => ({
  render() {
    return (
      <CardActionArea component={Link} to={`/test/${props.id}`}>
        <CardContent>
          <Typography variant="h5">{props.title}</Typography>
          <br />
          <Typography variant="body" gutterBottom>
            Last edited {props.updatedAt}
          </Typography>
        </CardContent>
      </CardActionArea>
    );
  },
});

export { TestLink };

export default Test;
