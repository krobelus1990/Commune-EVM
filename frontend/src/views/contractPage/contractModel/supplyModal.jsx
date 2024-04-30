import React from 'react'
// import CurrencyItem from '../CurrencyItem';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
// import {  useContractWrite } from 'wagmi';
// import { PRESALE_CONTRACT_ADDRESS, USDT_CONTRACT_ADDRESS } from '../../../utils/env';
// import * as  presaleContractABI from '../../../token_presale_abi.json';
// import * as  erc20ContractABI from '../../../token_abi.json';
// import { useCallback } from 'react';
// import { parseEther } from 'viem';
function SupplyModal() {
    // const { abi } = presaleContractABI
    // const { abi: erc20ABI } = erc20ContractABI

    // const { write: buyWithUSDT } = useContractWrite({
    //     address: PRESALE_CONTRACT_ADDRESS,
    //     abi: abi,
    //     functionName: 'buyWithUSDT'
    // })

    // const { write: buyTokens } = useContractWrite({
    //     address: PRESALE_CONTRACT_ADDRESS,
    //     abi: abi,
    //     functionName: 'buyTokens'
    // })

    // const { writeAsync: approve } = useContractWrite({
    //     address: USDT_CONTRACT_ADDRESS,
    //     abi: erc20ABI,
    //     functionName: 'approve'
    // })

    const [totalSupplyValue, setTotalSupplyValue] = React.useState(0);
    const [maxiumSupplyValue, setMaxiumSupplyValue] = React.useState(0);

    return (
        <React.Fragment>

            <div className=' tw-bg-[#fff] dark:tw-bg-[rgb(27,27,27)] tw-ml-[-300px] tw-transition-all tw-px-[20px] buy-usdt tw-flex tw-flex-col tw-items-center tw-justify-center tw-border-gray-500 tw-rounded-[1rem] tw-shadow-2xl md:tw-w-[500px] tw-w-[350px]' style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 3px 8px 0px' }}>
                <div className='tw-bg-[#fff] dark:tw-bg-[rgb(27,27,27)] tw-transition-all tw-flex tw-flex-col tw-items-center tw-rounded-t-[1rem] tw-w-full tw-mt-3'>
                    <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-8 tw-py-2 tw-mt-2'>
                        <span className='tw-flex dark:tw-text-white tw-transition-all' style={{ fontFamily: 'Might', fontWeight: '700', fontSize: '22px' }}>Supply Information</span>
                    </div>
                </div>
                <div className='tw-flex tw-bg-[#fff] dark:tw-bg-[rgb(27,27,27)] tw-flex-col tw-w-full'>

                    <div className='tw-flex tw-bg-[#fff] dark:tw-bg-[rgb(27,27,27)] tw-px-6 tw-items-center tw-justify-between tw-w-full tw-mt-[20px]'>
                        <span className='  dark:tw-text-white' style={{ fontFamily: 'Might' }}>
                            Supply Information
                        </span>
                    </div>

                    <div className='tw-flex tw-bg-slate-300 dark:tw-bg-gray-500 tw-my-2 tw-mx-auto tw-items-center tw-justify-between tw-w-[100%] tw-h-[1px] ' />
                    <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full sm:tw-flex-row tw-gap-4 dark:tw-bg-[rgb(27,27,27)]'>
                        <div className='tw-flex tw-flex-col tw-items-center tw-justify-center md:tw-w-[80%] tw-mt-3 tw-mb-5 tw-w-[48%]'>
                            <span className=' tw-text-[14px] tw-ml-[25px] tw-w-full tw-items-start tw-text-gray-500' style={{ fontFamily: 'Smack' }}>TOTAL SUPPLY</span>
                            <div className='tw-flex tw-flex-col tw-rounded-[0.5rem] tw-bg-[#fff] dark:tw-bg-[rgb(30,31,34)] tw-py-2 tw-px-4 dark:tw-shadow-none' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>

                                <div className='tw-flex tw-flex-row tw-items-center tw-justify-center'>
                                    <input value={totalSupplyValue} disabled className='tw-border-none dark:tw-bg-[rgb(30,31,34)]  dark:tw-text-white tw-outline-none tw-appearance-none tw-w-[90%]' type='text' inputMode='numeric' onChange={({ target: { value } }) => {
                                        if (!isNaN(value)) {
                                            setTotalSupplyValue(value);
                                        }
                                    }} />
                                </div>
                            </div>
                        </div>
                        <div className='tw-flex tw-flex-col tw-items-center tw-justify-center md:tw-w-[80%] tw-mt-3 tw-mb-5 tw-w-[48%]'>
                            <span className=' tw-text-[14px] tw-ml-[25px] tw-w-full tw-items-start tw-text-gray-500' style={{ fontFamily: 'Smack' }}>MAXIUM SUPPLY</span>
                            <div className='tw-flex tw-flex-col tw-rounded-[0.5rem] tw-bg-[#fff] dark:tw-bg-[rgb(30,31,34)] tw-py-2 tw-px-4' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>

                                <div className='tw-flex tw-flex-row tw-items-center tw-justify-center'>
                                    <input value={maxiumSupplyValue} disabled className='tw-border-none dark:tw-bg-[rgb(30,31,34)] dark:tw-text-white tw-outline-none tw-appearance-none tw-tw-w-[90%]' type='text' inputMode='numeric' onChange={({ target: { value } }) => {
                                        if (!isNaN(value)) {
                                            setMaxiumSupplyValue(value);
                                        }
                                    }} />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default SupplyModal
