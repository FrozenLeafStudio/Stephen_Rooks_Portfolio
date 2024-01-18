import { Component } from "react";

type Props = {};

type State = {};

export default class Descriptor extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="catchphrase_container">
        <h2>Hi! My name is Stephen.</h2>
        <h4>Here's a little about me: </h4>
        <p>
          Thanks for taking the time to visit my page. Check out my projects
          below to see what I've been creating...
        </p>
      </div>
    );
  }
}
