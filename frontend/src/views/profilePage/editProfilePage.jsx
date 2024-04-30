import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, getUser } from '../../redux/actions/usersAction';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useNavigate } from 'react-router-dom';
const EditProfilePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { useState } = React;
    const { user, isLoadingPost } = useSelector((state) => state.users);
    const [avatarFile, setAvatarFile] = useState('');
    const [bannerFile, setBannerFile] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [email, setEmail] = useState('');
    const [link, setLink] = useState('');
    const [pubkey, setPubkey] = useState('');

    useEffect(() => {
        dispatch(getUser);
        if (user) {
            setAvatarFile(user.user.avatarFile)
            setBannerFile(user.user.bannerFile)
            setUsername(user.user.username)
            setEmail(user.user.email)
            setLink(user.user.link)
            setBio(user.user.bio)
        }
    }, [dispatch, isLoadingPost,user]);

    const saveProfile = () => {
        if (avatarFile || bannerFile || username || bio || email || link) {
            const data = {
                username: username,
                bio: bio,
                email: email,
                link: link,
                pubkey: pubkey,
                avatarFile: avatarFile,
                bannerFile: bannerFile,
            }
            dispatch(createUser(data));
        }
    }

    const handleAvatarFile = (e) => {
        setAvatarFile(URL.createObjectURL(e.target.files[0]));
    };

    const handleBannerFile = (e) => {
        setBannerFile(URL.createObjectURL(e.target.files[0]));
    };


    return (
        <React.Fragment>

            <div className='tw-w-full tw-overflow-y-hidden dark:tw-bg-[rgb(18,18,18)]' >
                <div className=' tw-flex tw-w-full tw-justify-center tw-items-center tw-mt-[0px] dark:tw-border-t tw-border-solid dark:tw-border-[#303030]'>
                    {/* <div className=' tw-justify-center tw-items-center tw-w-[20%] tw-border-r dark:tw-border-[#303030] tw-border-solid tw-border-gray-300 tw-hidden lg:tw-flex'>
                        <Card className='tw-h-[calc(100vh-2rem)] tw-w-full tw-max-w-[20rem] tw-p-4 tw-shadow-none dark:tw-bg-[rgb(18,18,18)] tw-bg-[rgb(244,247,250)]'>
                            <div className='tw-mb-2 tw-p-2'>
                                <Typography variant='h5' color='blue-gray' style={{ fontFamily: 'Smack' }} className='dark:tw-text-[#c0c0c0]'>
                                    Settings
                                </Typography>
                            </div>
                            <List style={{ fontFamily: 'Smack' }} className=' dark:tw-text-white tw-text-[21px]'>
                                <ListItem>
                                    <ListItemPrefix className=' pr-4'>
                                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-7 h-7'>
                                            <path strokeLinecap='round' strokeLinejoin='round' d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
                                        </svg>
                                    </ListItemPrefix>
                                    Profile
                                </ListItem>
                            </List>
                        </Card>
                    </div> */}
                    <div className='tw-flex tw-justify-start tw-items-start tw-w-[100%] tw-mt-[50px] tw-overflow-y-visible tw-flex-col tw-px-[10px] sm:tw-px-[100px] lg:tw-w-[80%]' style={{ fontFamily: 'Smack' }}>
                        <div className=' tw-flex tw-justify-center tw-items-center  md:tw-justify-start md:tw-items-start tw-text-[rgb(18,18,18)] tw-w-full dark:tw-text-white tw-text-[30px] tw-mt-[30px] lg:tw-mt-[-30px]'>Profile details</div>
                        <div className='tw-flex tw-justify-center tw-items-center  md:tw-justify-start md:tw-items-start tw-mt-[50px] tw-w-full md:tw-gap-[100px] tw-gap-[50px] md:tw-flex-row tw-flex-col'>
                            <div className='tw-flex tw-justify-start tw-items-start tw-flex-col'>
                                <div className='tw-flex tw-justify-start tw-w-full tw-items-start tw-flex-col'>
                                    <label className='tw-block tw-w-full tw-text-[17px] tw-font-medium tw-mb-2 dark:tw-text-white tw-text-start'>Username</label>
                                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='tw-py-2 tw-px-3 tw-block tw-w-[350px] tw-border-[1px] tw-font-thin tw-border-solid tw-outline-none tw-border-gray-300 tw-rounded-lg tw-text-[17px] focus:tw-border-gray-500 dark:tw-focus:border-[#4f4f4f] disabled:tw-opacity-50 disabled:tw-pointer-events-none tw-bg-none dark:tw-bg-[rgb(18,18,18)] dark:tw-border-[#303030] dark:tw-text-gray-200 dark:placeholder:tw-text-[#a7a7a7]' placeholder='Enter username' />
                                </div>
                                <div className='tw-flex tw-justify-center tw-items-start tw-w-full tw-flex-col tw-mt-[40px]'>
                                    <label className='tw-block tw-w-full tw-text-[17px] tw-font-medium tw-mb-2 dark:tw-text-white tw-text-start'>Bio</label>
                                    <textarea type='text' value={bio} onChange={(e) => setBio(e.target.value)} className='tw-py-2 tw-px-3 tw-w-[350px] tw-h-[100px] tw-block tw-border-[1px] tw-font-thin tw-border-solid tw-outline-none tw-border-gray-300 tw-rounded-lg tw-text-[17px] focus:tw-border-gray-500 dark:focus:tw-border-[#4f4f4f] disabled:tw-opacity-50 disabled:tw-pointer-events-none tw-bg-none dark:tw-bg-[rgb(18,18,18)] dark:tw-border-[#303030] dark:tw-text-gray-200 dark:placeholder:tw-text-[#a7a7a7]' placeholder='Tell the world your story!' />
                                </div>
                                <div className='tw-flex tw-justify-start tw-w-full tw-items-start tw-flex-col tw-mt-[40px]'>
                                    <label className='tw-block tw-w-full tw-text-[17px] tw-font-medium tw-mb-2 dark:tw-text-white tw-text-start'>Email Address</label>
                                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} className='tw-py-2 tw-px-3 tw-block tw-w-[350px] tw-border-[1px] tw-font-thin tw-border-solid tw-outline-none tw-border-gray-300 tw-rounded-lg tw-text-[17px] focus:tw-border-gray-500 dark:focus:tw-border-[#4f4f4f] disabled:tw-opacity-50 disabled:tw-pointer-events-none tw-bg-none dark:tw-bg-[rgb(18,18,18)] dark:tw-border-[#303030] dark:tw-text-gray-200 dark:placeholder:tw-text-[#a7a7a7]' placeholder='Enter email' />
                                </div>
                                <div className='tw-flex tw-justify-start tw-w-full tw-items-start tw-flex-col tw-mt-[40px]'>
                                    <label className='tw-block tw-w-full tw-text-[17px] tw-font-medium tw-mb-2 dark:tw-text-white tw-text-start'>Links</label>
                                    <input type='text' value={link} onChange={(e) => setLink(e.target.value)} className='tw-py-2 tw-px-3 tw-block tw-w-[350px] tw-border-[1px] tw-font-thin tw-border-solid tw-outline-none tw-border-gray-300 tw-rounded-lg tw-text-[17px] focus:tw-border-gray-500 dark:focus:tw-border-[#4f4f4f] disabled:tw-opacity-50 disabled:tw-pointer-events-none tw-bg-none dark:tw-bg-[rgb(18,18,18)] dark:tw-border-[#303030] dark:tw-text-gray-200 dark:placeholder:tw-text-[#a7a7a7]' placeholder='Your website.io' />
                                </div>
                                <div className='tw-flex tw-justify-start tw-w-full tw-items-start tw-flex-col tw-mt-[40px]'>
                                    <label className='tw-block tw-w-full tw-text-[17px] tw-font-medium tw-mb-2 dark:tw-text-white tw-text-start'>Wallet Address</label>
                                    <label className='tw-block tw-w-full tw-text-[17px] tw-font-medium tw-mb-2 dark:tw-text-white tw-text-start'>
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
                                                                navigate('/');
                                                                return (
                                                                    <div className=' tw-flex tw-gap-[4px] tw-justify-center tw-items-center'>
                                                                        unconnected
                                                                    </div>
                                                                );
                                                            }

                                                            if (chain.unsupported) {
                                                                return (
                                                                    <button onClick={openChainModal} style={{ boxShadow: 'rgb(0 0 0 / 98%) 3px 3px 3px 3px' }}>
                                                                        Wrong network
                                                                    </button>
                                                                );
                                                            }
                                                            if (connected) {
                                                                setPubkey(account.displayName);
                                                            }
                                                            return (
                                                                <div className=' tw-flex tw-justify-start tw-items-center'>
                                                                    {account.displayName}
                                                                </div>
                                                            );
                                                        })()}
                                                    </div>
                                                );
                                            }}
                                        </ConnectButton.Custom>
                                    </label>
                                </div>
                            </div>
                            <div className='tw-flex tw-justify-center tw-items-center tw-flex-col'>
                                <div className='tw-flex tw-justify-center tw-items-center tw-flex-col tw-w-full'>
                                    <div className='tw-flex tw-justify-start tw-items-start tw-w-full dark:tw-text-white tw-text-[rgb(18,18,18)] tw-text-[17px]'>Profile Image</div>
                                    <div className='tw-mt-[20px] tw-w-full'>
                                        <div className='tw-justify-center tw-flex tw-group tw-items-center tw-h-[10rem] tw-w-[10rem] tw-overflow-y-hidden tw-bg-[#e1e1e1] hover:tw-bg-[#cbcbcb] tw-transition-all dark:tw-bg-[rgb(30,30,30)] dark:hover:tw-bg-[rgb(33,33,33)] tw-cursor-pointer dark:tw-border-[rgb(18,18,18)] tw-border-[#ffffff] tw-border-[5px] tw-rounded-[50%]'>
                                            {avatarFile ?
                                                <span className='tw-w-full tw-h-full tw-flex tw-overflow-y-hidden'>
                                                    <img className='tw-w-full' src={avatarFile} alt='' />
                                                    {/* <img className='w-full' src='./images/12.png' alt='' /> */}
                                                </span>
                                                : <span className='tw-w-full tw-h-full'>
                                                    {/* <img className=' w-full h-full' src='' alt='' /> */}
                                                    <div className=' tw-w-full tw-h-full'>
                                                    </div>
                                                </span>
                                            }
                                        </div>
                                        <div className='tw-justify-center tw-bg-none tw-flex tw-group tw-items-center tw-mt-[-158px] tw-h-[10rem] tw-w-[10rem] tw-overflow-y-hidden tw-transition-all tw-cursor-pointer tw-rounded-[50%]'>
                                            <span className='profile_banner_edit_but tw-opacity-[0.0001] tw-w-fit tw-m-auto tw-flex tw-justify-center tw-items-center group-hover:tw-opacity-100 tw-transition-all lg:tw-mt-[-100px] md:tw-mt-[-70px] tw-mt-[-50px] tw-absolute'>
                                                <svg className='tw-h-5 tw-w-5 tw-text-[#ffffff] sm:tw-h-8 sm:tw-w-8' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>  <path d='M12 20h9' />  <path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' /></svg>
                                            </span>
                                            <input type='file' onChange={handleAvatarFile} className='tw-opacity-0 tw-w-full tw-h-full tw-cursor-pointer tw-border tw-rounded-[50%]' />
                                        </div>
                                    </div>
                                </div>
                                <div className=' tw-mt-[30px] tw-w-full tw-mb-[30px]'>
                                    <div className='tw-flex tw-justify-start tw-items-start tw-w-full dark:tw-text-white tw-text-[rgb(18,18,18)] tw-text-[17px]'>Profile Banner</div>
                                    <div className=' tw-mt-[20px] tw-w-full'>
                                        <div className='tw-justify-center tw-flex group tw-items-center tw-h-[8rem] tw-w-[10rem] tw-overflow-y-hidden tw-bg-[#e1e1e1] hover:tw-bg-[#cbcbcb] tw-transition-all dark:tw-bg-[rgb(30,30,30)] dark:hover:tw-bg-[rgb(33,33,33)] tw-cursor-pointer dark:tw-border-[rgb(18,18,18)] tw-border-[#ffffff] tw-border-[5px] tw-rounded-[20px]'>
                                            {bannerFile ?
                                                <span className='tw-w-full tw-h-full tw-flex tw-bg-contain tw-bg-no-repeat tw-bg-center tw-overflow-y-hidden'>
                                                    <img className='tw-w-full' src={bannerFile} alt='' />
                                                </span>
                                                : <span className='tw-w-full tw-h-full'>
                                                    {/* <img className=' w-full h-full' src='' alt='' /> */}
                                                    <div className=' tw-w-full tw-h-full'>
                                                    </div>
                                                </span>
                                            }
                                        </div>
                                        <div className='tw-justify-center tw-bg-none tw-flex tw-group tw-items-center tw-mt-[-130px] tw-h-[8rem] tw-w-[10rem] tw-overflow-y-hidden tw-transition-all tw-cursor-pointer tw-rounded-[20px]'>
                                            <span className='profile_banner_edit_but tw-opacity-[0.0001] tw-w-fit tw-m-auto tw-flex tw-justify-center tw-items-center group-hover:tw-opacity-100 tw-transition-all lg:tw-mt-[-100px] md:tw-mt-[-70px] tw-mt-[-50px] tw-absolute'>
                                                <svg className='tw-h-5 tw-w-5 tw-text-[#ffffff] sm:tw-h-8 sm:tw-w-8' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>  <path d='M12 20h9' />  <path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' /></svg>
                                            </span>
                                            <input type='file' onChange={handleBannerFile} className='tw-opacity-0 tw-w-full tw-h-full tw-cursor-pointer tw-border tw-rounded-[20px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' tw-flex tw-justify-center tw-items-center  md:tw-justify-start md:tw-items-start tw-w-full tw-mt-[30px] tw-mb-[40px]'>
                            <button tabIndex={0} onClick={saveProfile} style={{ fontFamily: 'Might', width: '200px', fontSize: '18px', transition: '0.1s' }} className='tw-relative tw-rounded-[0.5rem] tw-cursor-pointer tw-group tw-font-medium tw-no-underline tw-flex tw-p-2 tw-text-white tw-items-center tw-justify-center tw-content-center focus:tw-outline-none'>
                                <span className='tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-rounded tw-opacity-50 tw-filter tw-blur-sm tw-bg-gradient-to-br tw-from-[#256fc4] tw-to-[#256fc4] dark:tw-from-[rgb(30,30,30)] dark:tw-to-[rgb(30,30,30)]'  ></span>
                                <span className='tw-h-full tw-w-full tw-inset-0 tw-absolute tw-mt-0.5 tw-ml-0.5 tw-bg-gradient-to-br tw-filter group-active:tw-opacity-0 tw-rounded tw-opacity-50 tw-from-[#256fc4] tw-to-[#256fc4] dark:tw-from-[rgb(30,30,30)] dark:tw-to-[rgb(30,30,30)]'></span>
                                <span className='tw-absolute tw-inset-0 tw-w-full tw-h-full tw-transition-all tw-duration-200 tw-ease-out tw-rounded tw-shadow-xl tw-bg-gradient-to-br tw-filter group-active:tw-opacity-0 group-hover:tw-blur-sm tw-from-[#256fc4] tw-to-[#256fc4] dark:tw-from-[rgb(30,30,30)] dark:tw-to-[rgb(30,30,30)]'></span>
                                <span className='tw-absolute tw-inset-0 tw-w-full tw-h-full tw-transition tw-duration-200 tw-ease-out tw-rounded tw-bg-gradient-to-br tw-to-[#256fc4] tw-from-[#256fc4] dark:tw-from-[rgb(30,30,30)] dark:tw-to-[rgb(30,30,30)]'></span>
                                <span className='tw-relative'>Save</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )

}

export default EditProfilePage
