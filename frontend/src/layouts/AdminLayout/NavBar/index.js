import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

import logo from "../../../assets/images/commune.gif";
import { ConfigContext } from "../../../contexts/ConfigContext";
import * as actionType from "../../../store/actions";
import Switcher from "../../../switcher1";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const NavBar = () => {
  const [moreToggle, setMoreToggle] = useState(false);
  const configContext = useContext(ConfigContext);
  const { collapseMenu, headerFixedLayout, layout } = configContext.state;
  const { dispatch } = configContext;

  let headerClass = ["navbar", "pcoded-header", "navbar-expand-lg"];
  if (headerFixedLayout && layout === "vertical") {
    headerClass = [...headerClass, "headerpos-fixed"];
  }

  let toggleClass = ["mobile-menu"];
  if (collapseMenu) {
    toggleClass = [...toggleClass, "on"];
  }

  const navToggleHandler = () => {
    dispatch({ type: actionType.COLLAPSE_MENU });
  };

  let moreClass = ["mob-toggler"];

  let collapseClass = ["collapse navbar-collapse dark:tw-bg-[rgb(18,18,18)]"];
  if (moreToggle) {
    moreClass = [...moreClass, "on"];
    collapseClass = [...collapseClass, "show"];
  }

  let navBar = (
    <React.Fragment>
      <div className="m-header">
        <Link to="#" className={toggleClass.join(" ")} id="mobile-collapse" onClick={navToggleHandler}>
          <span />
        </Link>
        <Link to="#" className="b-brand tw-w-[10%] md:tw-w-[35%] sm:tw-w-[47%]">
          <div className="">
            {/* <i className="feather icon-trending-up" /> */}
            <img className="feather tw-z-10 tw-relative sidebarLogo tw-w-[50px]" src={logo} alt=""></img>
          </div>
          <span className="b-title sm:tw-block tw-hidden">Commune</span>
        </Link>
        <Link to="#" className={moreClass.join(" ")} onClick={() => setMoreToggle(!moreToggle)}>
          <i className="feather icon-more-vertical" />
        </Link>

        <ConnectButton.Custom>
          {({ account, chain, openChainModal, openAccountModal, authenticationStatus, mounted }) => {
            // Note: If your app doesn"t use authentication, you
            // can remove all "authenticationStatus" checks
            const ready = mounted && authenticationStatus !== "loading";
            const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === "authenticated");

            return (
              <div
                {...(!ready && {
                  "aria-hidden": true,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none"
                  }
                })}
              >
                {(() => {
                  if (!connected) {
                    return <div></div>;
                  }

                  if (chain.unsupported) {
                    return (
                      <button onClick={openChainModal} style={{ boxShadow: "rgb(0 0 0 / 98%) 3px 3px 3px 3px" }}>
                        Wrong network
                      </button>
                    );
                  }
                  // if (connected) {
                  //   setIsconnected(true);
                  //   setPubkey(account.displayName);
                  // }
                  return (
                    <div className=" tw-flex tw-gap-[15px] tw-justify-center tw-items-center -tw-mt-[0px]">
                      {/* <svg class="h-8 w-8 text-[#256fc4] dark:text-[white]" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>
                          <button onClick={() => handleBuyButton(account.address, selectedCurrency)} type="button" className="dark:text-white text-[#256fc4] text-[18px] sm:text-base md:text-[18px] transition-all evermore hover:opacity-[0.7] no-underline rounded-full dark:hover:text-white hover:text-blue-800" style={{ fontFamily: "Smack" }}>
                            SignOut
                          </button> */}

                      <button
                        className="tw-align-middle tw-select-none tw-font-sans tw-font-bold tw-text-center tw-uppercase tw-transition-all disabled:tw-opacity-50 disabled:tw-shadow-none disabled:tw-pointer-events-none tw-text-xs tw-py-2 tw-px-3 tw-rounded-lg tw-bg-gradient-to-tr tw-from-[#ffffff] dark:tw-from-[rgb(27,27,27)] dark:tw-to-[rgb(27,27,27)] tw-cursor-pointer tw-to-[#dedede] tw-text-[rgb(18,18,18)] dark:tw-text-white tw-shadow-md tw-shadow-gray-900/10 hover:tw-shadow-lg hover:tw-shadow-gray-900/20 active:tw-opacity-[0.85] tw-flex tw-items-center tw-gap-1"
                        onClick={openChainModal}
                        style={{ fontFamily: "Smack" }}
                        tabIndex={0}
                      >
                        <span>
                          {chain.hasIcon && (
                            <div
                              style={{
                                background: chain.iconBackground,
                                borderRadius: 999,
                                overflow: "hidden",
                                marginRight: 4
                              }}
                            >
                              {chain.iconUrl && (
                                <img alt={chain.name ?? "Chain icon"} src={chain.iconUrl} className=" tw-w-[25px] tw-h-[25px]" />
                              )}
                            </div>
                          )}
                        </span>
                        <span className=" md:tw-block tw-hidden tw-text-[15px] first-letter:tw-uppercase tw-lowercase tw-text-[rgb(18,18,18)] dark:tw-text-white">
                          {chain.name}
                        </span>
                        <svg
                          className="tw-h-5 tw-w-5 tw-text-[rgb(18,18,18)] dark:tw-text-white"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                      <button
                        className="tw-align-middle tw-select-none tw-cursor-pointer tw-font-sans tw-font-bold tw-text-center tw-uppercase tw-transition-all disabled:tw-opacity-50 disabled:tw-shadow-none disabled:tw-pointer-events-none tw-text-xs tw-py-[10px] tw-px-3 tw-rounded-lg tw-bg-gradient-to-tr tw-from-[#ffffff] dark:tw-from-[rgb(27,27,27)] dark:tw-to-[rgb(27,27,27)] tw-to-[#dedede] tw-text-[rgb(18,18,18)] dark:tw-text-white tw-shadow-md tw-shadow-gray-900/10 hover:tw-shadow-lg hover:tw-shadow-gray-900/20 active:tw-opacity-[0.85] tw-flex tw-items-center tw-gap-2"
                        onClick={openAccountModal}
                        style={{ fontFamily: "Smack" }}
                      >
                        <span className=" tw-text-[15px] tw-uppercase tw-text-[rgb(18,18,18)] dark:tw-text-white">
                          {account.displayBalance ? account.displayBalance : ""}
                        </span>
                        <span className="md:tw-block tw-hidden tw-text-[15px] first-letter:tw-uppercase tw-lowercase tw-text-[rgb(18,18,18)] dark:tw-text-white">
                          {account.displayName}
                        </span>
                        <svg
                          className="tw-h-5 tw-w-5 tw-text-[rgb(18,18,18)] dark:tw-text-white"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
        <div className=" tw-ml-[20px]">
          <Switcher className="" />
        </div>
      </div>
      <div style={{ justifyContent: "space-between" }} className={collapseClass.join(" ")}>
        {/* <div className=" dark:tw-bg-[rgb(18,18,18)]"> */}
        <NavLeft />
        <NavRight />
        {/* </div> */}
      </div>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <header className={headerClass.join(" ")}>{navBar}</header>
    </React.Fragment>
  );
};

export default NavBar;
