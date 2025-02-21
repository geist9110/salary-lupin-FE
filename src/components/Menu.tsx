import { Component } from 'react';
import { Link } from 'react-router-dom';

export interface MenuProps {
  name: string;
  src: string;
  destination: string;
}

export default class Menu extends Component<MenuProps> {
  render() {
    const { name, src, destination } = this.props;
    return (
      <li>
        <Link to={destination}>
          <img src={src} />
          {name}
        </Link>
      </li>
    );
  }
}
