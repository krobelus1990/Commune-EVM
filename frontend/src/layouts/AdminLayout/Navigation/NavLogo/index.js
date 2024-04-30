import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/commune.gif';
import { ConfigContext } from '../../../../contexts/ConfigContext';
import * as actionType from '../../../../store/actions';

const NavLogo = () => {
  const configContext = useContext(ConfigContext);
  const { collapseMenu } = configContext.state;
  const { dispatch } = configContext;

  let toggleClass = ['mobile-menu'];
  if (collapseMenu) {
    toggleClass = [...toggleClass, 'on'];
  }

  return (
    <React.Fragment>
      <div className='navbar-brand header-logo'>
        <Link to='/app' className='b-brand'>
          <div className='tw-w-[50px] '>
            {/* <i className='feather icon-trending-up' /> */}
            <img className='feather tw-z-10 tw-relative sidebarLogo' src={logo} alt=''></img>
          </div>
          <span className='b-title'>Commune</span>
        </Link>
        <Link to='#' className={toggleClass.join(' ')} id='mobile-collapse' onClick={() => dispatch({ type: actionType.COLLAPSE_MENU })}>
          <span />
        </Link>
      </div>
    </React.Fragment>
  );
};

export default NavLogo;
