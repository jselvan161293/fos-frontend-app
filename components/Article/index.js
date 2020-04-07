import React from "react";
import { render } from "react-dom";
import { TransitionMotion, spring } from "react-motion";
// import SubmitButton from 'react-native-submit-button';
import "./style.css";

export default class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: (props.locked && props.active) || false,
      value: props.value || "",
      bodyValue: props.value || "",
      error: props.error || "",
      label: props.label || "Title",
      body: props.body || "Body",
    };
  }

  changeValue(event) {
  	if(event.target === "input#1"){
	    const value = event.target.value;
	    this.setState({ value, error: "" });
	}
	else{
		const bodyValue = event.target.value;
	    this.setState({ bodyValue, error: "" });
	}
  }

  handleKeyPress(event) {
    if (event.which === 13) {
      this.setState({ value: this.props.predicted });
    }
  }

  render() {
    const { active, value, error, label, body, bodyValue } = this.state;
    const { predicted, locked } = this.props;
    const fieldClassName = `field ${(locked ? active : active || value) &&
      "active"} ${locked && !active && "locked"}`;

    return (

    <div>
      <div className={fieldClassName}>
        {active &&
          value &&
          predicted &&
          predicted.includes(value) && <p className="predicted">{predicted}</p>}
        <input
          id={1}
          type="text"
          value={value}
          placeholder={label}
          onChange={this.changeValue.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
          onFocus={() => !locked && this.setState({ active: true })}
          onBlur={() => !locked && this.setState({ active: false })}
        />
        
        <label htmlFor={1} className={error && "error"}>
          {error || label}
        </label>
      </div>

      <div className={fieldClassName}>
        {active &&
          bodyValue &&
          predicted &&
          predicted.includes(bodyValue) && <p className="predicted">{predicted}</p>}
        <input
          id={2}
          type="text"
          value={bodyValue}
          placeholder={body}
          onChange={this.changeValue.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
          onFocus={() => !locked && this.setState({ active: true })}
          onBlur={() => !locked && this.setState({ active: false })}
        />
        
        <body htmlFor={2} className={error && "error"}>
          {error || body}
        </body>
      </div>

       { console.log(bodyValue) }


 
    </div>

    );
  }
}

render(
  <Article
    id={1}
    label="Field label"
    body="Body"
    predicted="California"
    locked={false}
    active={false}
  />,
  document.getElementById("root")
);
