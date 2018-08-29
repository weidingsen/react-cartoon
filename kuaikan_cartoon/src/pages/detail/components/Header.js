import React, { Component } from 'react';
import {
  DetailContainer,
  CartoonInfo,
  LeftBlock,
  RightBlock,
  Title,
  Author,
  Description,
  OtherContent,
  FirstInfo,
  Follow,
  Nav,
  Box
} from '../style';

class Header extends Component {
  constructor(props) {
    super(props);
    this.list = props.list;
  }
  render() {
    return (
        <CartoonInfo>
          <LeftBlock>
            <img src={this.list.imgUrl} alt="" />
          </LeftBlock>
          <RightBlock>
            <Title>{this.list.title}</Title>
            <Author>{this.list.author}</Author>
            <Description>
              <p className="desc-title">漫画简介</p>
              <div className="desc-content">
                {this.list.description}
              </div>
            </Description>
            <OtherContent>
              <FirstInfo className="btn other">查看第一话</FirstInfo>
              <Follow className="btn other">关注</Follow>
              <Nav className="other">
                <Box>
                  <i className="iconfont">&#xe660;</i>
                  分享
                </Box>
                <Box>
                <i className="iconfont">&#xe6b6;</i>
                  {this.list.hot}
                </Box>
                <Box>
                  <i className="iconfont">&#xe668;</i>
                  {this.list.praise}
                </Box>
              </Nav>
            </OtherContent>
          </RightBlock>
        </CartoonInfo>
    );
  }
}

export default Header;