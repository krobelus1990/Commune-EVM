import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/actions/usersAction';

function ProfilePage() {
    const { useState } = React;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, isLoadingPost } = useSelector((state) => state.users);

    const [bannerFile, setBannerFile] = useState();
    const [userName, setUserName] = useState('unnamed');
    const [email, setEmail] = useState('fam@gmail.com');
    const [bio, setBio] = useState('Your bio here.');
    const [avatarFile, setAvatarFile] = useState('./images/12.png');
    const [link, setLink] = useState();
    console.log(link);
    useEffect(() => {
        dispatch(getUser);
        if (user) {
            setAvatarFile(user.user.avatarFile)
            setBannerFile(user.user.bannerFile)
            setUserName(user.user.username)
            setEmail(user.user.email)
            setLink(user.user.link)
            setBio(user.user.bio)
        }
    }, [dispatch, isLoadingPost,user]);

    const handleBannerFile = (e) => {
        setBannerFile(URL.createObjectURL(e.target.files[0]));
    };
    const handleAvatarFile = (e) => {
        setAvatarFile(URL.createObjectURL(e.target.files[0]));
    };
    const editProfilePageOpen = () => {
        navigate('/app/profile/edit')
    }
    return (
        <React.Fragment>

            <div className='tw-w-full tw-h-screen tw-overflow-y-hidden dark:tw-bg-[rgb(18,18,18)]'>
                <div className=''>
                    <div className=' tw-w-full tw-justify-center tw-group profile_banner tw-items-center tw-h-[10rem] tw-overflow-y-hidden tw-bg-[#e1e1e1] hover:tw-bg-[#cbcbcb] tw-transition-all dark:tw-bg-[rgb(30,30,30)] dark:hover:tw-bg-[rgb(33,33,33)] tw-cursor-pointer lg:tw-h-[25rem] md:tw-h-[15rem]'>
                        {bannerFile ?
                            <span className='tw-w-full tw-h-full tw-flex tw-bg-contain tw-bg-no-repeat tw-bg-center tw-overflow-y-hidden'>
                                <img className='tw-w-full tw-h-fit' src={bannerFile} alt='' />
                            </span>
                            : <span className='tw-w-full tw-h-full'>
                                {/* <img className=' w-full h-full' src='' alt='' /> */}
                                <div className=' tw-w-full tw-h-full'>
                                </div>
                            </span>
                        }
                        <span className='profile_banner_edit_but tw-opacity-[0.0001] tw-w-full tw-flex tw-justify-center tw-items-center group-hover:tw-opacity-100 tw-transition-all lg:tw-mt-[-100px] md:tw-mt-[-70px] tw-mt-[-50px] tw-absolute'>
                            <svg className='tw-h-5 tw-w-5 tw-text-[#ffffff] md:tw-h-8 md:tw-w-8' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>  <path d='M12 20h9' />  <path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' /></svg>
                        </span>
                        <input type='file' onChange={handleBannerFile} className='tw-opacity-0 tw-w-full tw-h-[20rem] tw-absolute tw-cursor-pointer tw-mt-[-20rem]' />
                    </div>
                    <div className=' tw-absolute tw-z-10 tw-mt-[-70px] lg:tw-mt-[-160px] md:tw-mt-[-110px] tw-ml-[40px] lg:tw-ml-[70px]'>
                        <div className='tw-justify-center tw-flex tw-group tw-items-center tw-h-[6rem] tw-w-[6rem] tw-overflow-y-hidden tw-bg-[#e1e1e1] hover:tw-bg-[#cbcbcb] tw-transition-all dark:tw-bg-[rgb(30,30,30)] dark:hover:tw-bg-[rgb(33,33,33)] tw-cursor-pointer lg:tw-h-[12rem] lg:tw-w-[12rem] md:tw-h-[9rem] md:tw-w-[9rem] dark:tw-border-[rgb(18,18,18)] tw-border-[#ffffff] tw-border-[5px] tw-rounded-[50%]'>
                            {avatarFile ?
                                <span className='tw-w-full tw-h-full tw-flex tw-bg-contain tw-bg-no-repeat tw-bg-center tw-overflow-y-hidden'>
                                    <img className='tw-w-full tw-h-fit' src={avatarFile} alt='' />
                                </span>
                                : <span className='tw-w-full tw-h-full'>
                                    {/* <img className=' w-full h-full' src='' alt='' /> */}
                                    <div className=' tw-w-full tw-h-full'>
                                    </div>
                                </span>
                            }
                        </div>
                        <div className='tw-justify-center tw-bg-none tw-flex tw-group tw-items-center tw-mt-[-98px] md:tw-mt-[-145px] lg:tw-mt-[-192px] tw-h-[6rem] tw-w-[6rem] tw-overflow-y-hidden tw-transition-all tw-cursor-pointer lg:tw-h-[12rem] lg:tw-w-[12rem] md:tw-h-[9rem] md:tw-w-[9rem] tw-rounded-[50%]'>
                            <span className='profile_banner_edit_but tw-opacity-[0.0001] tw-w-fit tw-m-auto tw-flex tw-justify-center tw-items-center group-hover:tw-opacity-100 tw-transition-all lg:tw-mt-[-100px] md:tw-mt-[-70px] tw-mt-[-50px] tw-absolute'>
                                <svg className='tw-h-5 tw-w-5 tw-text-[#ffffff] md:tw-h-8 md:tw-w-8' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>  <path d='M12 20h9' />  <path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' /></svg>
                            </span>
                            <input type='file' onChange={handleAvatarFile} className='tw-opacity-0 tw-w-full tw-h-full tw-cursor-pointer tw-border tw-rounded-[50%]' />
                        </div>
                    </div>
                    <div className=' tw-flex tw-flex-wrap'>
                        <div className=' tw-w-[90%] lg:tw-w-[350px] md:tw-w-[40%] tw-flex tw-flex-col tw-justify-center tw-items-center tw-pl-[40px] md:tw-pl-[60px] lg:tw-pl-[90px]'>
                            <div className=' tw-flex tw-justify-start tw-items-start tw-mt-[50px] tw-w-full'>
                                <p className=' tw-text-[rgb(18,18,18)] dark:tw-text-white tw-text-[35px] first-letter:tw-uppercase' style={{ fontFamily: 'Smack' }}>{userName}</p>
                            </div>
                            <div className=' tw-w-full tw-mt-[50px]'>
                                <ConnectButton.Custom>
                                    {({
                                        account,
                                        chain,
                                        openChainModal,
                                        authenticationStatus,
                                        mounted,
                                    }) => {
                                        // Note: If your app doesn't use authentication, you
                                        // can remove all 'authenticationStatus' checks
                                        const ready = mounted && authenticationStatus !== 'loading';
                                        const connected =
                                            ready &&
                                            account &&
                                            chain &&
                                            (!authenticationStatus ||
                                                authenticationStatus === 'authenticated');

                                        return (
                                            <div
                                                {...(!ready && {
                                                    'aria-hidden': true,
                                                    'style': {
                                                        opacity: 0,
                                                        pointerEvents: 'none',
                                                        userSelect: 'none',
                                                    },
                                                })}
                                            >
                                                {(() => {
                                                    if (!connected) {
                                                        navigate('/')
                                                        return (
                                                            <div className=' tw-flex tw-gap-[4px] tw-justify-center tw-items-center'>

                                                            </div>
                                                        );
                                                    }

                                                    if (chain.unsupported) {
                                                        return (
                                                            <button onClick={openChainModal} type='button' style={{ boxShadow: 'rgb(0 0 0 / 98%) 3px 3px 3px 3px' }}>
                                                                Wrong network
                                                            </button>
                                                        );
                                                    }
                                                    return (
                                                        <div className=' tw-flex tw-flex-col tw-gap-[15px] tw-justify-center tw-items-start'>
                                                            <div
                                                                className='tw-align-middle tw-select-none tw-font-sans tw-font-bold tw-text-center tw-uppercase tw-transition-all disabled:tw-opacity-50 disabled:tw-shadow-none disabled:tw-pointer-events-none tw-text-xs tw-py-2 tw-px-3 tw-rounded-lg tw-bg-gradient-to-tr tw-from-[#ffffff] dark:tw-from-[rgb(27,27,27)] dark:tw-to-[rgb(27,27,27)] tw-to-[#dedede] tw-text-[rgb(18,18,18)] dark:tw-text-white tw-shadow-md tw-shadow-gray-900/10 hover:tw-shadow-lg hover:tw-shadow-gray-900/20 active:tw-opacity-[0.85] tw-flex tw-items-center tw-gap-1'
                                                                type='button' style={{ fontFamily: 'Smack' }}>
                                                                <span>

                                                                    {chain.hasIcon && (
                                                                        <div
                                                                            style={{
                                                                                background: chain.iconBackground,
                                                                                borderRadius: 999,
                                                                                overflow: 'hidden',
                                                                                marginRight: 4,
                                                                            }}
                                                                        >
                                                                            {chain.iconUrl && (
                                                                                <img
                                                                                    alt={chain.name ?? 'Chain icon'}
                                                                                    src={chain.iconUrl}
                                                                                    className=' tw-w-[25px] tw-h-[25px]'
                                                                                />
                                                                            )}
                                                                        </div>
                                                                    )}
                                                                </span>
                                                                <span className=' tw-text-[15px] first-letter:tw-uppercase tw-lowercase tw-text-[rgb(18,18,18)] dark:tw-text-white'>
                                                                    {chain.name}
                                                                </span>
                                                            </div>
                                                            <div
                                                                className='tw-align-middle tw-select-none tw-font-sans tw-font-bold tw-text-center tw-uppercase tw-transition-all disabled:tw-opacity-50 disabled:tw-shadow-none disabled:tw-pointer-events-none tw-text-xs tw-py-[10px] tw-px-3 tw-rounded-lg tw-bg-gradient-to-tr tw-from-[#ffffff] dark:tw-from-[rgb(27,27,27)] dark:tw-to-[rgb(27,27,27)] tw-to-[#dedede] tw-text-[rgb(18,18,18)] dark:tw-text-white tw-shadow-md tw-shadow-gray-900/10 hover:tw-shadow-lg hover:tw-shadow-gray-900/20 active:tw-opacity-[0.85] tw-flex tw-items-center tw-gap-2'
                                                                type='button' style={{ fontFamily: 'Smack' }}>
                                                                <span className=' tw-text-[15px] tw-uppercase tw-text-[rgb(18,18,18)] dark:tw-text-white'>
                                                                    {account.displayBalance
                                                                        ? account.displayBalance
                                                                        : ''}
                                                                </span>
                                                            </div>
                                                            <div
                                                                className='tw-align-middle tw-select-none tw-font-sans tw-font-bold tw-text-center tw-uppercase tw-transition-all disabled:tw-opacity-50 disabled:tw-shadow-none disabled:tw-pointer-events-none tw-text-xs tw-py-[10px] tw-px-3 tw-rounded-lg tw-bg-gradient-to-tr tw-from-[#ffffff] dark:tw-from-[rgb(27,27,27)] dark:tw-to-[rgb(27,27,27)] tw-to-[#dedede] tw-text-[rgb(18,18,18)] dark:tw-text-white tw-shadow-md tw-shadow-gray-900/10 hover:tw-shadow-lg hover:tw-shadow-gray-900/20 active:tw-opacity-[0.85] tw-flex tw-items-center tw-gap-2'
                                                                type='button' style={{ fontFamily: 'Smack' }}>
                                                                <span className=' tw-text-[15px] first-letter:tw-uppercase tw-lowercase tw-text-[rgb(18,18,18)] dark:tw-text-white'>
                                                                    {account.displayName}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    );
                                                })()}
                                            </div>
                                        );
                                    }}
                                </ConnectButton.Custom>
                            </div>
                        </div>
                        <div className=' tw-w-[90%] md:tw-w-[50%] max-xl:tw-w-[35%] tw-mt-[60px] tw-max tw-flex tw-gap-[20px] tw-justify-start tw-items-start md:tw-gap-[50px] tw-pl-[40px] md:tw-pl-[30px] lg:tw-pl-[50px]'>
                            <div className='tw-hidden tw-justify-start tw-flex-col tw-items-start tw-gap-[50px] md:tw-flex'>
                                <p className=' tw-text-[rgb(18,18,18)] dark:tw-text-white tw-text-[25px] first-letter:tw-uppercase' style={{ fontFamily: 'Smack' }}>Email</p>
                                <p className=' tw-text-[rgb(18,18,18)] dark:tw-text-white tw-text-[25px] first-letter:tw-uppercase' style={{ fontFamily: 'Smack' }}>Bio</p>
                            </div>
                            <div className='tw-flex tw-justify-start tw-items-start tw-flex-col tw-gap-[50px] tw-mt-[5px] xl:tw-w-[70%] tw-w-full'>
                                <p className=' tw-text-[rgb(18,18,18)] dark:tw-text-white tw-text-[20px] first-letter:tw-uppercase' style={{ fontFamily: 'Smack' }}>{email}</p>
                                <p className=' tw-text-[rgb(18,18,18)] dark:tw-text-white tw-text-[20px] first-letter:tw-uppercase' style={{ fontFamily: 'Smack' }}>{bio}</p>
                            </div>
                        </div>
                        <div className=' tw-flex tw-justify-end tw-items-end  tw-pl-[40px] md:tw-pl-[60px] lg:tw-pl-[90px] tw-mt-[30px]'>
                            {/* <button onClick={editProfilePageOpen}
                            className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-[14px] px-3 rounded-lg bg-gradient-to-tr from-[#ffffff] dark:from-[rgb(27,27,27)] dark:to-[rgb(27,27,27)] to-[#dedede] text-[rgb(18,18,18)] dark:text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] flex items-center gap-2'
                            type='button' style={{ fontFamily: 'Smack' }}>
                            <span className=' text-[20px] first-letter:uppercase lowercase text-[rgb(18,18,18)] dark:text-white'>
                                Edit Profile
                            </span>
                        </button> */}
                            <button tabIndex={0} onClick={editProfilePageOpen} style={{ fontFamily: 'Might', width: '100%', fontSize: '18px', transition: '0.1s' }} className='tw-relative tw-rounded-[0.5rem] tw-cursor-pointer tw-group tw-font-medium tw-no-underline tw-flex tw-p-2 tw-text-white tw-items-center tw-justify-center tw-content-center focus:tw-outline-none'>
                                <span className='tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-rounded tw-opacity-50 tw-filter tw-blur-sm tw-bg-gradient-to-br tw-from-[#256fc4] tw-to-[#256fc4] dark:tw-from-[rgb(30,30,30)] dark:tw-to-[rgb(30,30,30)]'  ></span>
                                <span className='tw-h-full tw-w-full tw-inset-0 tw-absolute tw-mt-0.5 tw-ml-0.5 tw-bg-gradient-to-br tw-filter group-active:tw-opacity-0 tw-rounded tw-opacity-50 tw-from-[#256fc4] tw-to-[#256fc4] dark:tw-from-[rgb(30,30,30)] dark:tw-to-[rgb(30,30,30)]'></span>
                                <span className='tw-absolute tw-inset-0 tw-w-full tw-h-full tw-transition-all tw-duration-200 tw-ease-out tw-rounded tw-shadow-xl tw-bg-gradient-to-br tw-filter group-active:tw-opacity-0 group-hover:tw-blur-sm tw-from-[#256fc4] tw-to-[#256fc4] dark:tw-from-[rgb(30,30,30)] dark:tw-to-[rgb(30,30,30)]'></span>
                                <span className='tw-absolute tw-inset-0 tw-w-full tw-h-full tw-transition tw-duration-200 tw-ease-out tw-rounded tw-bg-gradient-to-br tw-to-[#256fc4] tw-from-[#256fc4] dark:tw-from-[rgb(30,30,30)] dark:tw-to-[rgb(30,30,30)]'></span>
                                <span className='tw-relative'>Edit Profile</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default ProfilePage
