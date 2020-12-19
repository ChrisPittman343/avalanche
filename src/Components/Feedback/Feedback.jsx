import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Feedback.css";

/*
This component was going to be used to provide feedback to me
through a form that sends a message to my email, however because github-pages
only supports static site hosting, this is impossible. 
*/

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      feedback: "",
    };
  }

  static propTypes = {
    toggleModal: PropTypes.func,
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changeFeedback = (e) => {
    this.setState({ feedback: e.target.value });
  };

  canSubmitForm = () => {
    const isValidEmail =
      /\S+@\S+\.\S+(?!\s)/g.test(this.state.email) ||
      this.state.email.length === 0;
    const isValidFeedback = this.state.feedback.length > 0;
    return isValidFeedback && isValidEmail;
  };

  submitForm = (e) => {
    e.preventDefault();
    this.props.toggleModal(false);
  };

  render() {
    return (
      <div className="feedback">
        <div
          className="backdrop"
          onClick={(e) => this.props.toggleModal(false)}
        ></div>
        <div className="feedback-form-wrapper">
          <form className="feedback-form" onSubmit={this.submitForm}>
            <label htmlFor="email">
              Email (Optional)
              <br />
              <input
                name="email"
                id="email"
                className="form-field email-field header-description"
                value={this.state.email}
                onChange={this.changeEmail}
                maxLength={64}
                type="text"
              />
            </label>
            <br />
            <br />
            <label htmlFor="feedback">
              Feedback
              <br />
              <textarea
                name="feedback"
                id="feedback"
                className="form-field feedback-field header-description"
                value={this.state.feedback}
                onChange={this.changeFeedback}
                rows={4}
                maxLength={350}
              ></textarea>
            </label>
            <br />
            <br />
            <input
              name="submit-feedback"
              disabled={!this.canSubmitForm()}
              id="submit-feedback"
              className="form-submit-btn header-description"
              value="Submit"
              type="submit"
            />
          </form>
        </div>
      </div>
    );
  }
}
