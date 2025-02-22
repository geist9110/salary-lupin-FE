import { Component } from 'react';
import { icons } from '../../assets/icon/icons';
import HyperLink from '../../components/HyperLink';
import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div id="home-container">
        <div className="xxxx-large bold">월급 루팡</div>
        <div id="information-container">
          <div className="information">
            <div className="bold large information-title">패치 노트</div>
            <HyperLink text="Notion" icon={icons.notion} link="" />
          </div>
          <div className="information">
            <div className="bold large information-title">개발자</div>
            <HyperLink text="Github" icon={icons.github} link="https://github.com/geist9110" />
            <HyperLink text="Email" icon={icons.email} link="mailto:geist9110@gmail.com" />
          </div>
        </div>
      </div>
    );
  }
}
