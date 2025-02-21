import { Component } from 'react';
import Menu, { MenuProps } from './Menu';

interface MenuContainerProps {
  title: string;
  menu: MenuProps[];
}

export default class MenuContainer extends Component<MenuContainerProps> {
  render() {
    const { title, menu } = this.props;
    return (
      <ul>
        <div>{title}</div>
        {menu.map((item, index) => (
          <Menu key={index} name={item.name} src={item.src} destination={item.destination} />
        ))}
      </ul>
    );
  }
}
