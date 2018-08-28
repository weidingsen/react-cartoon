import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom'; 
import {
  HeaderWrapper,
  Logo,
  LogoImg,
  Nav,
  NavItem,
  FollowInfo,
  Img,
  LoginContent,
  LoginItem,
  Login
} from './style.js'

class Header extends Component {
  render() {
    const { MouseOver, handleFollowInfoHide, handleFollowInfoShow, isLogin, logout } = this.props;
    return (
      <HeaderWrapper>
        <Logo>
          <LogoImg/>
        </Logo>
        <Nav>
          <NavItem className="left active common">首页</NavItem>
          <NavItem className="left common" >APP下载</NavItem>
          <NavItem className="left common">作者中心</NavItem>
          <NavItem 
            className={MouseOver ? 'right follow' : 'right'}
            onMouseOver={() => {handleFollowInfoShow(this.icon)}}
            onMouseOut={() => {handleFollowInfoHide(this.icon)}}
          >
            关注
            <i ref={(icon) => {this.icon = icon}} className="iconfont">&#xe644;</i>
            { this.getFollowInfo() }
          </NavItem>
          
          <NavItem className="right common">注册</NavItem>
          {
            isLogin ? 
            <NavItem className="right common" onClick={logout}>退出</NavItem> :
            <Link to="/login">
              <NavItem className="right common">登录</NavItem>
            </Link>
          }
        </Nav>
      </HeaderWrapper>
    );
  }
  getFollowInfo() {
    const { MouseOver, IsMouseEnter, handleMouseEnter, handleMouseLeave } = this.props;
    if(MouseOver || IsMouseEnter) {
      return (
        <FollowInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Img/>
          <LoginItem>
            <LoginContent>未登录</LoginContent>
            <LoginContent>登录后即可关注喜欢的漫画</LoginContent>
          </LoginItem>
          <Link to="/login">
            <Login>登录</Login>
          </Link>
        </FollowInfo>
      )
    }
  }
}


const mapStateToProps = (state) => ({
  MouseOver: state.get('header').get('MouseOver'),
  IsMouseEnter: state.getIn(['header','IsMouseEnter']),
  isLogin: state.getIn(['login', 'isLogin'])
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleFollowInfoShow(icon) {
      icon.style.transform = 'rotate(180deg)';
      // console.log(icon.style.transform)
      const action = actionCreators.FollowInfoShow;
      dispatch(action)
    },
    handleFollowInfoHide(icon) {
      icon.style.transform = 'rotate(0deg)';
      const action = actionCreators.FollowInfoHide;
      dispatch(action)
    },
    handleMouseEnter() {
      const action = actionCreators.MouseEnter();
      dispatch(action)
    },
    handleMouseLeave() {
      const action = actionCreators.MouseLeave();
      dispatch(action)
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);