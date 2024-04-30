import React from 'react'
import CurrencyItem from '../CurrencyItem';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useContractWrite } from 'wagmi';
import { PRESALE_CONTRACT_ADDRESS, USDT_CONTRACT_ADDRESS } from '../../../utils/env';
import * as  presaleContractABI from '../../../token_presale_abi.json';
import * as  erc20ContractABI from '../../../token_abi.json';
import { useCallback } from 'react';
import { parseEther } from 'viem';
function Transfer() {
    const { abi } = presaleContractABI
    const { abi: erc20ABI } = erc20ContractABI

    const [selectedCurrency, setSelectedCurrency] = React.useState(null);
    const { write: buyWithUSDT } = useContractWrite({
        address: PRESALE_CONTRACT_ADDRESS,
        abi: abi,
        functionName: 'buyWithUSDT'
    })

    const { write: buyTokens } = useContractWrite({
        address: PRESALE_CONTRACT_ADDRESS,
        abi: abi,
        functionName: 'buyTokens'
    })

    const { writeAsync: approve } = useContractWrite({
        address: USDT_CONTRACT_ADDRESS,
        abi: erc20ABI,
        functionName: 'approve'
    })


    const handleCurrencyClick = (currency) => {
        setSelectedCurrency(currency);
    };

    // const [value, setValue] = React.useState(0);
    const [transferValue, setTransferValue] = React.useState(0);
    // const [totalSupplyValue, setTotalSupplyValue] = React.useState(0);
    const [maxiumSupplyValue, setMaxiumSupplyValue] = React.useState(0);
    // const [stakeAmount, setStakeAmount] = React.useState(0);
    // const [totalStakeAmount, setTotalStakeAmount] = React.useState(0);
    const [address, setAddress] = React.useState('');


    const handleTransferButton = useCallback(async (address, currency) => {

        if (currency === 'USDT') {
            await approve({ args: [PRESALE_CONTRACT_ADDRESS, transferValue * 1000000], from: address });
            buyWithUSDT({ args: [transferValue], from: address });
        }

        if (currency === 'ETH') {

            buyTokens({
                value: parseEther(transferValue.toString()),
                from: address
            })
        }


    }, [buyTokens, buyWithUSDT, approve, transferValue])

    return (
        <React.Fragment>

            <div className=' tw-bg-[#fff] dark:tw-bg-[rgb(27,27,27)] tw-ml-[-300px] tw-transition-all tw-px-[20px] buy-usdt tw-flex tw-flex-col tw-items-center tw-justify-center tw-border-gray-500 tw-rounded-[1rem] tw-shadow-2xl md:tw-w-[500px] tw-w-[350px]' style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 3px 8px 0px' }}>
                <div className='tw-bg-[#fff] dark:tw-bg-[rgb(27,27,27)] tw-transition-all tw-flex tw-flex-col tw-items-center tw-rounded-t-[1rem] tw-w-full tw-mt-3'>
                    <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-8 tw-py-2'>
                        <span className='tw-flex dark:tw-text-white tw-transition-all' style={{ fontFamily: 'Might', fontWeight: '700', fontSize: '22px' }}>Transfer Contract</span>
                    </div>
                </div>

                <div className='tw-flex tw-flex-row tw-justify-between tw-py-1 tw-px-4 tw-w-full tw-bg-[#fff] dark:tw-bg-[rgb(27,27,27)] tw-transition-all'>
                    <CurrencyItem
                        image='/images/eth.svg'
                        label='ETH'
                        isSelected={selectedCurrency === 'ETH'}
                        onClick={() => handleCurrencyClick('ETH')}
                    />

                    <CurrencyItem
                        image='/images/usdt.svg'
                        label='USDT'
                        isSelected={selectedCurrency === 'USDT'}
                        onClick={() => handleCurrencyClick('USDT')}
                    />

                </div>
                <div className='tw-flex tw-bg-[#fff] dark:tw-bg-[rgb(27,27,27)] tw-flex-col tw-w-full'>

                    <div className='tw-flex tw-bg-[#fff] dark:tw-bg-[rgb(27,27,27)] tw-px-6 tw-items-center tw-justify-between tw-w-full tw-mt-[20px]'>
                        <span className='  dark:tw-text-white' style={{ fontFamily: 'Might' }}>
                            Balance Infomation
                        </span>
                    </div>

                    <div className='tw-flex tw-bg-slate-300 dark:tw-bg-gray-500 tw-my-2 tw-mx-auto tw-items-center tw-justify-between tw-w-[100%] tw-h-[1px] ' />
                    <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full sm:tw-flex-row tw-gap-4 dark:tw-bg-[rgb(27,27,27)]'>
                        <div className='tw-flex tw-flex-col tw-items-center tw-justify-center md:tw-w-[80%] tw-mb-4 tw-w-[70%]'>
                            <span className=' tw-text-[14px] tw-ml-[25px] tw-w-full tw-items-start tw-text-gray-500' style={{ fontFamily: 'Smack' }}>My balance</span>
                            <div className='tw-flex tw-flex-col tw-w-full tw-rounded-[0.5rem] tw-bg-[#fff] dark:tw-bg-[rgb(30,31,34)] tw-py-2 tw-px-4' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>

                                <div className='tw-flex tw-flex-row tw-items-center tw-justify-center'>
                                    <input value={maxiumSupplyValue} disabled className='tw-border-none dark:tw-bg-[rgb(30,31,34)] dark:tw-text-white tw-outline-none tw-appearance-none tw-w-[90%]' type='text' inputMode='numeric' onChange={({ target: { value } }) => {
                                        if (!isNaN(value)) {
                                            setMaxiumSupplyValue(value);
                                        }
                                    }} />
                                    <span className=' dark:tw-text-white' style={{ marginLeft: '0.5rem', fontFamily: 'Smack', height: '1.9rem' }}>{selectedCurrency === 'ETH' ? 'ETH' : 'USD'}</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className='tw-flex tw-justify-center tw-items-center tw-bg-[#fff] dark:tw-bg-[rgb(27,27,27)] tw-flex-col tw-w-full'>

                    <div className='tw-flex tw-bg-[#fff] dark:tw-bg-[rgb(27,27,27)] tw-px-6 tw-items-center tw-justify-between tw-w-full tw-mt-[0px]'>
                        <span className=' dark:tw-text-white' style={{ fontFamily: 'Might' }}>
                            Transfer
                        </span>
                    </div>

                    <div className='tw-flex tw-bg-slate-300 dark:tw-bg-gray-500  tw-my-2 tw-mx-auto tw-items-center tw-justify-between tw-w-[100%] tw-h-[1px]' />
                    <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-mb-2 tw-w-[90%]  tw-m-auto'>
                        <span className=' tw-text-[14px] tw-ml-[25px] tw-w-full tw-items-start tw-text-gray-500' style={{ fontFamily: 'Smack' }}>To</span>
                        <div className='tw-flex tw-flex-col tw-rounded-[0.5rem] tw-bg-[#fff] dark:tw-bg-[rgb(30,31,34)]  tw-py-2 tw-px-7 tw-w-full' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>
                            <div className='tw-flex tw-items-center tw-justify-center'>
                                <input value={address} className='tw-border-none tw-outline-none dark:tw-bg-[rgb(30,31,34)] dark:tw-text-white tw-appearance-none tw-w-[90%] tw-h-[30px]' type='text' onChange={({ target: { value } }) => {
                                    setAddress(value);
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className='tw-flex tw-flex-col tw-items-center tw-justify-between tw-w-[90%] sm:tw-flex-row'>
                        <div className='tw-flex tw-flex-col tw-items-start tw-justify-center md:tw-w-[80%] tw-mb-4 tw-w-[60%]'>
                            <span className=' tw-text-[14px] tw-ml-[15px] tw-w-full tw-items-start tw-text-gray-500' style={{ fontFamily: 'Smack' }}>AMOUNT</span>
                            <div className='tw-flex tw-flex-col tw-rounded-[0.5rem] tw-bg-[#fff] dark:tw-bg-[rgb(30,31,34)] tw-py-2 tw-px-4' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>

                                <div className='tw-flex tw-flex-row tw-items-center tw-justify-center'>
                                    <input value={transferValue} className='tw-border-none dark:tw-bg-[rgb(30,31,34)] dark:tw-text-white tw-outline-none tw-appearance-none tw-w-[90%]' type='text' inputMode='numeric' onChange={({ target: { value } }) => {
                                        if (!isNaN(value)) {
                                            setTransferValue(value);
                                        }
                                    }} />
                                    <span className=' dark:tw-text-white' style={{ marginLeft: '0.5rem', fontFamily: 'Smack', height: '1.9rem' }}>{selectedCurrency === 'ETH' ? 'ETH' : 'USD'}</span>
                                </div>
                            </div>
                        </div>
                        <div className='tw-flex tw-flex-col tw-items-end tw-justify-center tw-mb-4 tw-w-[45%] tw-mt-[23px]'>
                            {/* <button onClick={() => console.log('1')} type='button' style={{ fontFamily: 'Might', fontSize: '20px' }} className='flex p-2 bg-[#256fc4] dark:bg-[rgb(18,18,18)] text-white items-center justify-center focus:outline-none rounded-[0.5rem] w-full hover:bg-[#6db1ff]'>
                                                    Transfer Now
                                                </button> */}
                            <button tabIndex={0} onClick={handleTransferButton} style={{ fontFamily: 'Might', fontSize: '18px', transition: '0.1s' }} className='tw-relative tw-rounded-[0.5rem] tw-cursor-pointer tw-group tw-font-medium tw-no-underline tw-flex tw-p-2 tw-text-white tw-items-center tw-justify-center tw-content-center focus:tw-outline-none'>
                                <span className='tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-rounded tw-opacity-50 tw-filter tw-blur-sm tw-bg-gradient-to-br tw-from-[#256fc4] tw-to-[#256fc4] dark:tw-from-[rgb(18,18,18)] dark:tw-to-[rgb(18,18,18)]'  ></span>
                                <span className='tw-h-full tw-w-full tw-inset-0 tw-absolute tw-mt-0.5 tw-ml-0.5 tw-bg-gradient-to-br tw-filter group-active:tw-opacity-0 tw-rounded tw-opacity-50 tw-from-[#256fc4] tw-to-[#256fc4] dark:tw-from-[rgb(18,18,18)] dark:tw-to-[rgb(18,18,18)]'></span>
                                <span className='tw-absolute tw-inset-0 tw-w-full tw-h-full tw-transition-all tw-duration-200 tw-ease-out tw-rounded tw-shadow-xl tw-bg-gradient-to-br tw-filter group-active:tw-opacity-0 group-hover:tw-blur-sm tw-from-[#256fc4] tw-to-[#256fc4] dark:tw-from-[rgb(18,18,18)] dark:tw-to-[rgb(18,18,18)]'></span>
                                <span className='tw-absolute tw-inset-0 tw-w-full tw-h-full tw-transition tw-duration-200 tw-ease-out tw-rounded tw-bg-gradient-to-br tw-to-[#256fc4] tw-from-[#256fc4] dark:tw-from-[rgb(18,18,18)] dark:tw-to-[rgb(18,18,18)]'></span>
                                <span className='tw-relative'>Transfer Now</span>
                            </button>
                        </div>

                    </div>

                </div>
                <div className='tw-flex tw-bg-[#fff] dark:tw-bg-[rgb(27,27,27)] tw-flex-col tw-w-full tw-items-center tw-justify-center tw-py-2 tw-px-4 tw-rounded-bottom-4 tw-pb-2'>

                    <ConnectButton.Custom>
                        {({
                            account,
                            chain,
                            openAccountModal,
                            openChainModal,
                            openConnectModal,
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
                                    style={{ width: '100%' }}
                                >
                                    {(() => {
                                        if (!connected) {
                                            return (
                                                // <button onClick={openConnectModal} style={{ fontFamily: 'Might', fontSize: '20px', marginBottom: '1rem', transition: '0.1s'}} className='flex p-2 bg-[#256fc4] text-white items-center justify-center focus:outline-none dark:bg-[rgb(18,18,18)] rounded-[0.5rem] w-full hover:bg-[#6db1ff]'>
                                                //     Connect Wallet
                                                // </button>
                                                // <a onClick={openConnectModal} style={{ fontFamily: 'Might', fontSize: '20px', marginBottom: '1rem', transition: '0.1s'}} className='relative flex items-center justify-center no-underline px-5 py-2.5 overflow-hidden group bg-[#256fc4] dark:bg-[rgb(18,18,18)] hover:bg-gradient-to-r rounded-[0.5rem] w-full hover:from-[rgb(104,127,255)] dark:hover:from-[rgb(30,31,34)] dark:hover:to-[rgb(30,31,34)] hover:to-[rgb(71,98,248)] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[rgb(71,98,248)] dark:hover:ring-[rgb(30,31,34)] transition-all ease-out duration-300'>
                                                //     <span className='absolute z-0 right-0 w-8 h-32 dark:hidden -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
                                                //     <span className='relative'>Button Text</span>
                                                // </a>
                                                <button tabIndex={0} onClick={openConnectModal} style={{ fontFamily: 'Might', fontSize: '20px', transition: '0.1s' }} className='tw-relative tw-rounded-[0.5rem] tw-cursor-pointer tw-group tw-font-medium tw-no-underline tw-flex tw-p-2 tw-text-white tw-items-center tw-justify-center tw-content-center focus:tw-outline-none'>
                                                    <span className='tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-rounded tw-opacity-50 tw-filter tw-blur-sm tw-bg-gradient-to-br tw-from-[#256fc4] tw-to-[#256fc4] dark:tw-from-[rgb(18,18,18)] dark:tw-to-[rgb(18,18,18)]'  ></span>
                                                    <span className='tw-h-full tw-w-full tw-inset-0 tw-absolute tw-mt-0.5 tw-ml-0.5 tw-bg-gradient-to-br tw-filter group-active:tw-opacity-0 tw-rounded tw-opacity-50 tw-from-[#256fc4] tw-to-[#256fc4] dark:tw-from-[rgb(18,18,18)] dark:tw-to-[rgb(18,18,18)]'></span>
                                                    <span className='tw-absolute tw-inset-0 tw-w-full tw-h-full tw-transition-all tw-duration-200 tw-ease-out tw-rounded tw-shadow-xl tw-bg-gradient-to-br tw-filter group-active:tw-opacity-0 group-hover:tw-blur-sm tw-from-[#256fc4] tw-to-[#256fc4] dark:tw-from-[rgb(18,18,18)] dark:tw-to-[rgb(18,18,18)]'></span>
                                                    <span className='tw-absolute tw-inset-0 tw-w-full tw-h-full tw-transition tw-duration-200 tw-ease-out tw-rounded tw-bg-gradient-to-br tw-to-[#256fc4] tw-from-[#256fc4] dark:tw-from-[rgb(18,18,18)] dark:tw-to-[rgb(18,18,18)]'></span>
                                                    <span className='tw-relative'>Connect Wallet</span>
                                                </button>
                                            );
                                        }

                                        if (chain.unsupported) {
                                            return (
                                                // <button onClick={openChainModal} type='button'>
                                                //     Wrong network
                                                // </button>
                                                <button tabIndex={0} onClick={openChainModal} style={{ fontFamily: 'Might', width: '100%', fontSize: '20px', transition: '0.1s' }} className='tw-relative tw-rounded-[0.5rem] tw-cursor-pointer tw-group tw-font-medium tw-no-underline tw-flex tw-p-2 tw-text-white tw-items-center tw-justify-center tw-content-center focus:tw-outline-none'>
                                                    <span className='tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-rounded tw-opacity-50 tw-filter tw-blur-sm tw-bg-gradient-to-br tw-from-[#256fc4] tw-to-[#256fc4] dark:tw-from-[rgb(18,18,18)] dark:tw-to-[rgb(18,18,18)]'  ></span>
                                                    <span className='tw-h-full tw-w-full tw-inset-0 tw-absolute tw-mt-0.5 tw-ml-0.5 tw-bg-gradient-to-br tw-filter group-active:tw-opacity-0 tw-rounded tw-opacity-50 tw-from-[#256fc4] tw-to-[#256fc4] dark:tw-from-[rgb(18,18,18)] dark:tw-to-[rgb(18,18,18)]'></span>
                                                    <span className='tw-absolute tw-inset-0 tw-w-full tw-h-full tw-transition-all tw-duration-200 tw-ease-out tw-rounded tw-shadow-xl tw-bg-gradient-to-br tw-filter group-active:tw-opacity-0 group-hover:tw-blur-sm tw-from-[#256fc4] tw-to-[#256fc4] dark:tw-from-[rgb(18,18,18)] dark:tw-to-[rgb(18,18,18)]'></span>
                                                    <span className='tw-absolute tw-inset-0 tw-w-full tw-h-full tw-transition tw-duration-200 tw-ease-out tw-rounded tw-bg-gradient-to-br tw-to-[#256fc4] tw-from-[#256fc4] dark:tw-from-[rgb(18,18,18)] dark:tw-to-[rgb(18,18,18)]'></span>
                                                    <span className='tw-relative'>Wrong network</span>
                                                </button>
                                            );
                                        }

                                        return (
                                            <div style={{ display: 'flex', gap: 12 }} className='tw-flex tw-flex-col tw-items-center tw-justify-center'>
                                                <button
                                                    onClick={openChainModal}
                                                    style={{ display: 'flex', alignItems: 'center' }}
                                                    type='button'
                                                    className=' dark:tw-text-white'
                                                >
                                                    {chain.hasIcon && (
                                                        <div
                                                            style={{
                                                                background: chain.iconBackground,
                                                                width: 12,
                                                                height: 12,
                                                                borderRadius: 999,
                                                                overflow: 'hidden',
                                                                marginRight: 4,
                                                            }}
                                                        >
                                                            {chain.iconUrl && (
                                                                <img
                                                                    alt={chain.name ?? 'Chain icon'}
                                                                    src={chain.iconUrl}
                                                                    style={{ width: 12, height: 12 }}
                                                                />
                                                            )}
                                                        </div>
                                                    )}
                                                    {chain.name}
                                                </button>

                                                {/* <button onClick={() => handleBuyButton(account.address, selectedCurrency)} type='button' style={{ fontFamily: 'Might', fontSize: '20px', marginBottom: '1rem' }} className='flex p-2 bg-[#256fc4] text-white items-center justify-center focus:outline-none dark:bg-[rgb(18,18,18)] rounded-[0.5rem] w-full hover:bg-[#6db1ff]'>
                                                                        Buy Now
                                                                    </button> */}
                                                <a style={{ fontFamily: 'Might', width: '100%', fontSize: '20px', transition: '0.1s' }} className='tw-relative tw-rounded-[0.5rem] tw-cursor-pointer tw-group tw-font-medium tw-no-underline tw-flex tw-p-2 tw-text-white tw-items-center tw-justify-center tw-content-center focus:tw-outline-none'>
                                                    <span className='tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-rounded tw-opacity-50 tw-filter tw-blur-sm tw-bg-gradient-to-br tw-from-[#256fc4] tw-to-[#256fc4] dark:tw-from-[rgb(18,18,18)] dark:tw-to-[rgb(18,18,18)]'  ></span>
                                                    <span className='tw-h-full tw-w-full tw-inset-0 tw-absolute tw-mt-0.5 tw-ml-0.5 tw-bg-gradient-to-br tw-filter group-active:tw-opacity-0 tw-rounded tw-opacity-50 tw-from-[#256fc4] tw-to-[#256fc4] dark:tw-from-[rgb(18,18,18)] dark:tw-to-[rgb(18,18,18)]'></span>
                                                    <span className='tw-absolute tw-inset-0 tw-w-full tw-h-full tw-transition-all tw-duration-200 tw-ease-out tw-rounded tw-shadow-xl tw-bg-gradient-to-br tw-filter group-active:tw-opacity-0 group-hover:tw-blur-sm tw-from-[#256fc4] tw-to-[#256fc4] dark:tw-from-[rgb(18,18,18)] dark:tw-to-[rgb(18,18,18)]'></span>
                                                    <span className='tw-absolute tw-inset-0 tw-w-full tw-h-full tw-transition tw-duration-200 tw-ease-out tw-rounded tw-bg-gradient-to-br tw-to-[#256fc4] tw-from-[#256fc4] dark:tw-from-[rgb(18,18,18)] dark:tw-to-[rgb(18,18,18)]'></span>
                                                    <span className='tw-relative'>Buy Now</span>
                                                </a>

                                                <button onClick={openAccountModal} className=' dark:tw-text-white' type='button'>
                                                    {account.displayName}
                                                    {account.displayBalance
                                                        ? ` (${account.displayBalance})`
                                                        : ''}
                                                </button>

                                            </div>
                                        );
                                    })()}
                                </div>
                            );
                        }}
                    </ConnectButton.Custom>

                </div>

            </div>
        </React.Fragment>

    )
}

export default Transfer