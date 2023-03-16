import React, { Component } from "react";
import axios from "axios";
import Contest from "./ContestLink";

export class ContestCard extends Component {
  state = {
    contestinfo: null,
  };
  componentDidMount() {
    axios
      .get(`https://kontests.net/api/v1/${this.props.url}`)

      .then((res) => {
        if (this.props.url === "code_chef" || this.props.url === "leet_code") {
          this.setState({
            contestinfo: res.data.reverse(),
          });
        } else {
          this.setState({
            contestinfo: res.data,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    let Allcontestlist = this.state.contestinfo ? (
      this.state.contestinfo.map((contest) => (
        <Contest key={contest.contestId} contest={contest} />
      ))
    ) : (
      <div className="flex justify-center fixed top-[50%] left-[50%] items-center">
        <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
      </div>
    );
    return <div className="flex flex-col">{Allcontestlist}</div>;
  }
}

export default ContestCard;
