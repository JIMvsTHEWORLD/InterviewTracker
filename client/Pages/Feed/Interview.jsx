import React, { Component, useState, useEffect } from "react";
import "../../styles/styles.scss";

function Interview(props) {
  const [didSearch, setDidSearch] = useState(false);
  console.log("search result prop", props.searchedInterviews);
  // useEffect(() => {
  //   if (props.searchedInterviews) {
  //     setDidSearch(true)
  //   }
  // })

  console.log("QUESTIONS", JSON.parse(props.interviews.questions));
  const questions = JSON.parse(props.interviews.questions).map((question) => (
    <li>{question}</li>
  ));
  if (props.searchedInterviews) {
    return (
      <div className="companies">
        <ul>
          <li>Company: {props.searchedInterviews.company_name}</li>
          <li>Tech stack: {props.searchedInterviews.tech_stack}</li>
          <li>Status: {props.searchedInterviews.status}</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="companies">
        <ul className="company-info">
          <li>
            <strong>Company:</strong> {props.interviews.company_name}
          </li>
          <li>
            <strong>Tech Stack:</strong> {props.interviews.tech_stack}
          </li>
          <li>
            <strong>Questions: </strong>
            <ul className="questions">{questions}</ul>
          </li>
          <li>
            <strong>Status: </strong>
            <span
              style={
                props.interviews.status === "Passed"
                  ? { color: "green" }
                  : { color: "red" }
              }
            >
              {props.interviews.status}
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
export default Interview;
