import React, { Component } from "react";
import ReactTable from "react-table";
import api from "../../api";

import styled from "styled-components";
import { Typography } from "@material-ui/core";

// import "react-table/react-table.css";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

const Update = styled.div`
  color: #ef9b0f;
  cursor: pointer;
`;

const Delete = styled.div`
  color: #ff0000;
  cursor: pointer;
`;

class StudySetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      cards: [{ term: "", def: "" }],
    };
  }

  componentDidMount = async () => {
    // this.setState({ isLoading: true });

    await api.getAllStudySets().then((movies) => {
      this.setState({
        movies: movies.data.data,
      });
    });
  };

  render() {
    const { title, cards } = this.state;

    const columns = [
      {
        Header: "ID",
        accessor: "_id",
        filterable: true,
      },
      {
        Header: "Name",
        accessor: "name",
        filterable: true,
      },
      {
        Header: "Rating",
        accessor: "rating",
        filterable: true,
      },
      {
        Header: "Time",
        accessor: "time",
        Cell: (props) => <span>{props.value.join(" / ")}</span>,
      },
    ];

    let showTable = true;
    if (!cards.length) {
      showTable = false;
    }

    return (
      <div>
        <Typography variant='h1'>{title}</Typography>
        {/* <Wrapper>
          {showTable && (
            <ReactTable
              data={cards}
              columns={columns}
              defaultPageSize={10}
              showPageSizeOptions={true}
              minRows={0}
            />
          )}
        </Wrapper> */}
      </div>
    );
  }
}

export default StudySetList;
