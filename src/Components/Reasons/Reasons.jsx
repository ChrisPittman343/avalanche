import React from "react";
import "./Reasons.css";
import Wrapper from "../Wrapper/Wrapper";
import reason_simple from "../../Images/reason-simple.svg";
import reason_logical from "../../Images/reason-logical.svg";
import reason_versatile from "../../Images/reason-versatile.svg";

function Reasons(props) {
  return (
    <div className="reasons">
      <Wrapper>
        <div className="reasons-title header">Defining Features</div>
        <div className="reasons-list-flex">
          <div className="reason">
            <img className="reason-img" alt="Reason" src={reason_simple} />
            <div className="reason-title">Simple Implementation</div>
            <div className="reason-description">
              {/* Make sure all of the reasons are in the same person + style */}
              Optimize your updates with only a few lines of idiomatic, concise
              code.
            </div>
          </div>{" "}
          <div className="reason">
            <img className="reason-img" alt="Reason" src={reason_logical} />
            <div className="reason-title">Logical Flow</div>
            <div className="reason-description">
              Avalanche follows a trickle down approach for custom updates by
              going from parent to child. Every time.
            </div>
          </div>{" "}
          <div className="reason">
            <img className="reason-img" alt="Reason" src={reason_versatile} />
            <div className="reason-title">Universal Compatability</div>
            <div className="reason-description">
              Any project, any SQL database, Avalanche can do its job, so you
              can too.
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Reasons;
