import React from "react";
import api from "../../api";
import Typography from "@material-ui/core/Typography";

class ViewCards extends React.Component {
  constructor(props) {
    super(props);

    this.state = { id: props.id, title: "", cards: [] };
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

    this.setState({ render: true });
  };
}

export default ViewCards;
