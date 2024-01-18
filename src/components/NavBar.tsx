import { Component } from "react";

type Props = {};

type State = {};

export default class NavBar extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="navbar">
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Resume</li>
        </ul>
        <button>Connect with Me</button>
      </div>
    );
  }
}
