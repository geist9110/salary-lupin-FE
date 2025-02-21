import { Component } from 'react';
import MenuContainer from './MenuContainer';

const menuItems = [
  {
    title: '게임',
    menu: [
      { name: '프리셀', src: './card.png', destination: '/freecell' },
      { name: '체스', src: './chess.png', destination: '/chess' },
    ],
  },
  {
    title: '고민해결',
    menu: [
      { name: '고민 해결 책', src: './book.png', destination: '/selection-book' },
      { name: '최고의 휴가', src: './palm.png', destination: '/best-vacation' },
      { name: '고해성사', src: './cross.png', destination: '/freecell' },
    ],
  },
  {
    title: '일하기',
    menu: [
      { name: '뽀모도로', src: './timer.png', destination: '/freecell' },
      { name: '일하기', src: './fire.png', destination: '/freecell' },
    ],
  },
  {
    title: '설정',
    menu: [
      { name: '로그인', src: './login.png', destination: '/freecell' },
      { name: '테마 설정', src: './gear.png', destination: '/freecell' },
    ],
  },
];

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <img src="./logo512.png" width={64} />
          월급 루팡
        </div>
        {menuItems.map((item, index) => (
          <MenuContainer key={index} title={item.title} menu={item.menu} />
        ))}
      </div>
    );
  }
}
