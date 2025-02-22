import { Component } from 'react';
import { Link } from 'react-router-dom';
import { icons } from '../assets/icon/icons';
import MenuContainer from './MenuContainer';
import './sidebar.css';

const menuItems = [
  {
    title: '게임',
    menu: [
      { name: '프리셀', src: icons.freecell, destination: '/freecell' },
      { name: '체스', src: icons.chess, destination: '/chess' },
    ],
  },
  {
    title: '고민해결',
    menu: [
      { name: '고민 해결 책', src: icons.book, destination: '/selection-book' },
      { name: '최고의 휴가', src: icons.palmTree, destination: '/best-vacation' },
      { name: '고해성사', src: icons.cross, destination: '/freecell' },
    ],
  },
  {
    title: '일하기',
    menu: [
      { name: '뽀모도로', src: icons.clock, destination: '/freecell' },
      { name: '일하기', src: icons.fire, destination: '/freecell' },
    ],
  },
  {
    title: '설정',
    menu: [
      { name: '로그인', src: icons.login, destination: '/freecell' },
      { name: '테마 설정', src: icons.gear, destination: '/freecell' },
    ],
  },
];

export default class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar-container">
        <Link id="home" className="bold x-large" to={'/'}>
          <img src="./logo512.png" id="home-logo" />
          월급 루팡
        </Link>
        {menuItems.map((item, index) => (
          <MenuContainer key={index} title={item.title} menu={item.menu} />
        ))}
      </div>
    );
  }
}
