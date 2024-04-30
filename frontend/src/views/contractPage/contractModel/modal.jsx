import React from 'react'
import CurrencyItem from '../CurrencyItem';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useContractWrite } from 'wagmi';
import { PRESALE_CONTRACT_ADDRESS, USDT_CONTRACT_ADDRESS } from '../../../utils/env';
import * as  presaleContractABI from '../../../token_presale_abi.json';
import * as  erc20ContractABI from '../../../token_abi.json';
import { useCallback } from 'react';
import { parseEther } from 'viem';
function Modal() {
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

    const [value, setValue] = React.useState(0);
    const [transferValue, setTransferValue] = React.useState(0);
    const [totalSupplyValue, setTotalSupplyValue] = React.useState(0);
    const [maxiumSupplyValue, setMaxiumSupplyValue] = React.useState(0);
    const [stakeAmount, setStakeAmount] = React.useState(0);
    const [totalStakeAmount, setTotalStakeAmount] = React.useState(0);
    const [address, setAddress] = React.useState('');


    const handleBuyButton = useCallback(async (address, currency) => {

        if (currency === 'USDT') {
            await approve({ args: [PRESALE_CONTRACT_ADDRESS, value * 1000000], from: address });
            buyWithUSDT({ args: [value], from: address });
        }

        if (currency === 'ETH') {

            buyTokens({
                value: parseEther(value.toString()),
                from: address
            })
        }


    }, [buyTokens, buyWithUSDT, approve, value])

    return (
        <React.Fragment>

            <div className=' ml-[-300px] bg-[#ffffff] dark:bg-[rgb(27,27,27)] transition-all px-[20px] buy-usdt flex flex-col items-center justify-center border-gray-500 rounded-[1rem] shadow-2xl w-[550px]' style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 3px 8px 0px' }}>
                <div className='bg-[#fff] dark:bg-[rgb(27,27,27)] transition-all flex flex-col items-center rounded-t-[1rem] w-full mt-3'>
                    <div className='flex flex-col items-center justify-center px-8 py-2'>
                        <span className='flex dark:text-white transition-all' style={{ fontFamily: 'Might', fontWeight: '700', fontSize: '22px' }}>Welcome to the Commune</span>
                    </div>
                </div>

                <div className='flex flex-row justify-between py-1 px-4 w-full bg-[#fff] dark:bg-[rgb(27,27,27)] transition-all'>
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
                <div className='flex bg-[#fff] dark:bg-[rgb(27,27,27)] flex-col w-full'>

                    <div className='flex bg-[#fff] dark:bg-[rgb(27,27,27)] px-6 items-center justify-between w-full mt-[20px]'>
                        <span className='  dark:text-white' style={{ fontFamily: 'Might' }}>
                            Supply Infomation
                        </span>
                    </div>

                    <div className='flex bg-slate-300 dark:bg-gray-500 my-2 mx-auto items-center justify-between w-[100%] h-[1px] ' />
                    <div className='flex flex-col items-center justify-between w-full sm:flex-row gap-4 dark:bg-[rgb(27,27,27)]'>
                        <div className='flex flex-col items-center justify-center md:w-80% mb-4 w-[48%]'>
                            <span className=' text-[14px] ml-[25px] w-full items-start text-gray-500' style={{ fontFamily: 'Smack' }}>TOTAL SUPPLY</span>
                            <div className='flex flex-col rounded-[0.5rem] bg-[#fff] dark:bg-[rgb(30,31,34)] py-2 px-4 dark:shadow-none' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>

                                <div className='flex flex-row items-center justify-center'>
                                    <input value={totalSupplyValue} disabled className='border-none dark:bg-[rgb(30,31,34)]  dark:text-white outline-none appearance-none w-[90%]' type='text' inputMode='numeric' onChange={({ target: { value } }) => {
                                    }} />
                                    <span className=' dark:text-white' style={{ marginLeft: '0.5rem', fontFamily: 'Smack', height: '1.9rem' }}>{selectedCurrency === 'ETH' ? 'ETH' : 'USD'}</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center md:w-80% mb-4 w-[48%]'>
                            <span className=' text-[14px] ml-[25px] w-full items-start text-gray-500' style={{ fontFamily: 'Smack' }}>MAXIUM SUPPLY</span>
                            <div className='flex flex-col rounded-[0.5rem] bg-[#fff] dark:bg-[rgb(30,31,34)] py-2 px-4' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>

                                <div className='flex flex-row items-center justify-center'>
                                    <input value={maxiumSupplyValue} disabled className='border-none dark:bg-[rgb(30,31,34)] dark:text-white outline-none appearance-none w-[90%]' type='text' inputMode='numeric' onChange={({ target: { value } }) => {
                                    }} />
                                    <span className=' dark:text-white' style={{ marginLeft: '0.5rem', fontFamily: 'Smack', height: '1.9rem' }}>{selectedCurrency === 'ETH' ? 'ETH' : 'USD'}</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className='flex bg-[#fff] dark:bg-[rgb(27,27,27)] flex-col w-full'>

                    <div className='flex bg-[#fff] dark:bg-[rgb(27,27,27)] px-6 items-center justify-between w-full mt-[0px]'>
                        <span className=' dark:text-white' style={{ fontFamily: 'Might' }}>
                            Transfer
                        </span>
                    </div>

                    <div className='flex bg-slate-300 dark:bg-gray-500  my-2 mx-auto items-center justify-between w-[100%] h-[1px]' />
                    <div className='flex flex-col items-center justify-center mb-2 w-[100%]  m-auto'>
                        <span className=' text-[14px] text-start items-start w-full ml-[25px] text-gray-500' style={{ fontFamily: 'Smack' }}>To</span>
                        <div className='flex flex-col rounded-[0.5rem] bg-[#fff] dark:bg-[rgb(30,31,34)]  py-2 px-7 w-full' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>
                            <div className='flex items-center justify-center'>
                                <input value={address} className='border-none outline-none dark:bg-[rgb(30,31,34)] dark:text-white appearance-none w-[90%] h-[30px]' type='text' onChange={({ target: { value } }) => {
                                    setAddress(value);
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-between w-[100%] sm:flex-row'>
                        <div className='flex flex-col items-start justify-center md:w-80% mb-4 w-[60%]'>
                            <span className=' text-[14px] ml-[15px] w-full items-start text-gray-500' style={{ fontFamily: 'Smack' }}>AMOUNT</span>
                            <div className='flex flex-col rounded-[0.5rem] bg-[#fff] dark:bg-[rgb(30,31,34)] py-2 px-4' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>

                                <div className='flex flex-row items-center justify-center'>
                                    <input value={transferValue} className='border-none dark:bg-[rgb(30,31,34)] dark:text-white outline-none appearance-none w-[90%]' type='text' inputMode='numeric' onChange={({ target: { value } }) => {
                                        if (!isNaN(value)) {
                                            setTransferValue(value);
                                        }
                                    }} />
                                    <span className=' dark:text-white' style={{ marginLeft: '0.5rem', fontFamily: 'Smack', height: '1.9rem' }}>{selectedCurrency === 'ETH' ? 'ETH' : 'USD'}</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-end justify-center mb-4 w-[35%] mt-[23px]'>
                            {/* <button onClick={() => console.log('1')} type='button' style={{ fontFamily: 'Might', fontSize: '20px' }} className='flex p-2 bg-[#256fc4] dark:bg-[rgb(18,18,18)] text-white items-center justify-center focus:outline-none rounded-[0.5rem] w-full hover:bg-[#6db1ff]'>
                                                    Transfer Now
                                                </button> */}
                            <a onClick={() => console.log('1')} style={{ fontFamily: 'Might', fontSize: '20px', transition: '0.1s' }} className='relative rounded-[0.5rem] cursor-pointer group font-medium no-underline flex p-2 px-3 text-white items-center justify-center focus:outline-none'>
                                <span className='absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#256fc4] to-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]'  ></span>
                                <span className='h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#256fc4] to-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]'></span>
                                <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#256fc4] to-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]'></span>
                                <span className='absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#256fc4] from-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]'></span>
                                <span className='relative'>Transfer Now</span>
                            </a>
                        </div>

                    </div>

                </div>
                <div className='flex bg-[#fff] dark:bg-[rgb(27,27,27)] flex-col w-full'>

                    <div className='flex bg-[#fff] dark:bg-[rgb(27,27,27)] px-6 items-center justify-between w-full mt-[0px]'>
                        <span className=' dark:text-white' style={{ fontFamily: 'Might' }}>
                            Staking
                        </span>
                    </div>

                    <div className='flex bg-slate-300 dark:bg-gray-500 my-2 mx-auto items-center justify-between w-[100%] h-[1px]' />

                    <div className='flex items-center justify-between w-full max-sm:flex-col'>
                        <div className='flex flex-col items-center justify-center md:w-80% mb-4 w-[170px]'>
                            <span className=' text-[14px] text-start items-start w-full ml-[25px] text-gray-500' style={{ fontFamily: 'Smack' }}>TOTAL</span>

                            <div className='flex flex-col rounded-[0.5rem] bg-[#fff] dark:bg-[rgb(30,31,34)] py-1.5 px-3' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>

                                <div className='flex flex-row items-center justify-center'>
                                    <input value={totalStakeAmount} disabled className='border-none dark:bg-[rgb(30,31,34)] dark:text-white outline-none appearance-none w-[90%]' type='text' inputMode='numeric' onChange={({ target: { value } }) => {

                                    }} />
                                    <span className=' dark:text-white' style={{ marginLeft: '0.5rem', fontFamily: 'Smack', height: '1.9rem' }}>{selectedCurrency === 'ETH' ? 'ETH' : 'USD'}</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center md:w-80% mb-4 w-[170px]'>
                            <span className=' text-[14px] text-start items-start w-full ml-[25px] text-gray-500' style={{ fontFamily: 'Smack' }}>AMOUNT</span>

                            <div className='flex flex-col rounded-[0.5rem] bg-[#fff] dark:bg-[rgb(30,31,34)] py-1.5 px-3' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>

                                <div className='flex flex-row items-center justify-center'>
                                    <input value={stakeAmount} className='border-none outline-none appearance-none w-[90%] dark:text-white dark:bg-[rgb(30,31,34)]' type='text' inputMode='numeric' onChange={({ target: { value } }) => {
                                        if (!isNaN(value)) {
                                            setStakeAmount(value);
                                        }
                                    }} />
                                    <span className=' dark:text-white' style={{ marginLeft: '0.5rem', fontFamily: 'Smack', height: '1.9rem' }}>{selectedCurrency === 'ETH' ? 'ETH' : 'USD'}</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center mb-4 w-[130px] mt-[22px]'>
                            {/* <button onClick={() => console.log('1')} type='button' style={{ fontFamily: 'Might', fontSize: '18px' }} className='flex p-2 bg-[#256fc4] dark:bg-[rgb(18,18,18)] text-white items-center justify-center focus:outline-none rounded-[0.5rem] w-full hover:bg-[#6db1ff]'>
                                                    Stake Now
                                                </button> */}
                            <a onClick={() => console.log('1')} style={{ fontFamily: 'Might', fontSize: '20px', transition: '0.1s' }} className='relative rounded-[0.5rem] cursor-pointer group font-medium no-underline flex p-2 text-white items-center justify-center content-center focus:outline-none'>
                                <span className='absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#256fc4] to-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]'  ></span>
                                <span className='h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#256fc4] to-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]'></span>
                                <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#256fc4] to-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]'></span>
                                <span className='absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#256fc4] from-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]'></span>
                                <span className='relative'>Stake Now</span>
                            </a>
                        </div>
                    </div>


                </div>
                <div className='flex bg-[#fff] dark:bg-[rgb(27,27,27)] flex-col w-full items-center justify-center py-2 px-4 rounded-bottom-4 pb-2'>

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
                                                <a onClick={openConnectModal} style={{ fontFamily: 'Might', fontSize: '20px', marginBottom: '1rem', transition: '0.1s' }} className='relative rounded-[0.5rem] cursor-pointer group font-medium no-underline flex p-2 text-white items-center justify-center focus:outline-none'>
                                                    <span className='absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#256fc4] to-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]'  ></span>
                                                    <span className='h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#256fc4] to-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]'></span>
                                                    <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#256fc4] to-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]'></span>
                                                    <span className='absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#256fc4] from-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]'></span>
                                                    <span className='relative'>Connect Wallet</span>
                                                </a>
                                            );
                                        }

                                        if (chain.unsupported) {
                                            return (
                                                // <button onClick={openChainModal} type='button'>
                                                //     Wrong network
                                                // </button>
                                                <a onClick={openChainModal} style={{ fontFamily: 'Might', fontSize: '20px', marginBottom: '1rem', transition: '0.1s' }} className='relative rounded-[0.5rem] w-full cursor-pointer group font-medium no-underline flex p-2 text-white items-center justify-center focus:outline-none'>
                                                    <span className='absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#256fc4] to-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]'  ></span>
                                                    <span className='h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#256fc4] to-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]'></span>
                                                    <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#256fc4] to-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]'></span>
                                                    <span className='absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#256fc4] from-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]'></span>
                                                    <span className='relative'>Wrong network</span>
                                                </a>
                                            );
                                        }

                                        return (
                                            <div style={{ display: 'flex', gap: 12 }} className='flex flex-col items-center justify-center'>
                                                <button
                                                    onClick={openChainModal}
                                                    style={{ display: 'flex', alignItems: 'center' }}
                                                    type='button'
                                                    className=' dark:text-white'
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
                                                <a onClick={() => handleBuyButton(account.address, selectedCurrency)} style={{ fontFamily: 'Might', fontSize: '20px', marginBottom: '1rem', transition: '0.1s' }} className='relative rounded-[0.5rem] w-full cursor-pointer group font-medium no-underline flex p-2 text-white items-center justify-center focus:outline-none'>
                                                    <span className='absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#256fc4] to-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]'  ></span>
                                                    <span className='h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#256fc4] to-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]'></span>
                                                    <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#256fc4] to-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]'></span>
                                                    <span className='absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#256fc4] from-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]'></span>
                                                    <span className='relative'>Buy Now</span>
                                                </a>

                                                <button onClick={openAccountModal} className=' dark:text-white' type='button'>
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

export default Modal