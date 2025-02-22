import { Component } from 'react';
import './hyperlink.css';

interface HyperLinkProp {
  text: string;
  icon: string;
  link: string;
}

export default class HyperLink extends Component<HyperLinkProp> {
  render() {
    const { text, icon, link } = this.props;
    return (
      <a href={link} id="hyperlink" className="medium">
        <img src={icon} className="icon-small" />
        {text}
      </a>
    );
  }
}
