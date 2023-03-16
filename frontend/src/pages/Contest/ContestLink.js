import React, { Component } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
<style>.sitename{{ fontWeight: "bold" }}</style>;
class Contest extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      contest: { site, name, url, start_time },
    } = this.props;
    return (
      <div className="flex flex-col">
        <div className="relative p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
          <h2 className="sitename" style={{ fontWeight: "bold" }}>
            {site}
          </h2>
          <h3 className="name">{name}</h3>
          <h4 className="url" style={{ color: "blue", flex: "1" }}>
            <a href={url} target="_blank" rel="noreferrer">{url}</a>
          </h4>
          <h4 className="start-time">
            {dayjs(start_time).fromNow().slice(1) === " days ago"
              ? dayjs(start_time).format("DD/MM/YY")
              : dayjs(start_time).fromNow()}
          </h4>
        </div>
      </div>
    );
  }
}

export default Contest;
