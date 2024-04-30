import React from 'react'
import ContractModel from './modelPage/contractModel'
import uniswapImg from '../../assets/images/uniswaplogo.png'
import curveImg from '../../assets/images/curve-dao-token-crv-logo.png'
import daoImg from '../../assets/images/maker-mkr-seeklogo.svg'
import aaveImg from '../../assets/images/aave-aave-logo.png'
import supplyImg from '../../assets/images/nimiq-exchange-token-logo-png-transparent.png'
import transferImg from '../../assets/images/The-Transfer-Token-TTT-Logo-Pngsource-DZKBBFLC.png'
import stakeImg from '../../assets/images/xdai-stake-logo.png'
import mintImg from '../../assets/images/pngwing.com.png'

function ModelPage() {
    const [value, setValue] =
        React.useState('');

    const models = [
        <ContractModel key='Uniswap' contractName='Uniswap' imgSrc={uniswapImg} click='handleUniswapModalShow' contractTitle='Uniswap Contract' contractDescription='This is contract for uniswap trade.' />,
        <ContractModel key='CurveSwap' contractName='CurveSwap' imgSrc={curveImg} click='handleCurveModalShow' contractTitle='Curve Contract' contractDescription='This is contract for CurveSwap trade.' />,
        <ContractModel key='MakerDao' contractName='MakerDao' imgSrc={daoImg} click='handleMakerDaoModalShow' contractTitle='MakerDao' contractDescription='This is contract for MakerDao Vault Management.' />,
        <ContractModel key='Aave' contractName='Aave' imgSrc={aaveImg} click='handleAaveModalShow' contractTitle='Aave Contract' contractDescription='This is contract to Deposite to Aave.' />,
        <ContractModel key='SupplyInfo' contractName='SupplyInfo' imgSrc={supplyImg} click='handleSupplyModalShow' contractTitle='SupplyInfo' contractDescription='You can get the information of Total Supply and Maxium Supply.' />,
        <ContractModel key='Transfer' contractName='Transfer' imgSrc={transferImg} click='handleTransferModalShow' contractTitle='Transfer' contractDescription='You can transfer your token and USDT to destination address.' />,
        <ContractModel key='Stake' contractName='Stake' imgSrc={stakeImg} click='handleStakeModalShow' contractTitle='Stake' contractDescription='You can Stake your token and get bonus token every month.' />,
        <ContractModel key='Mint' contractName='Mint' imgSrc={mintImg} click='handleMintModalShow' contractTitle='Mint' contractDescription='You can mint the token here.' />,

    ];
    return (
        <React.Fragment>

            <div className='tw-w-full dark:tw-bg-[rgb(18,18,18)] tw-mt-[30px] lg:tw-mt-[-100px]'>
                <div className='tw-w-[100%] dark:tw-bg-[rgb(18,18,18)] tw-flex tw-justify-center tw-items-center'>
                    <div className='xl:tw-w-[30%] sm:tw-w-[50%]'>
                        <div className=' dark:tw-bg-[rgb(27,27,27)] tw-items-center tw-justify-between tw-w-full tw-flex tw-rounded-full tw-shadow-lg tw-p-2 tw-mb-3 tw-sticky' style={{ marginTop: '5px' }}>
                            <div>
                                <div className='tw-p-2 tw-mr-1 tw-rounded-full hover:tw-bg-white dark:tw-hover:bg-[rgb(75,85,99)] tw-cursor-pointer'>

                                    <svg className='tw-h-5 tw-w-5 tw-text-gray-500 dark:tw-text-white' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
                                        <path fillRule='evenodd' d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z' clipRule='evenodd' />
                                    </svg>

                                </div>
                            </div>

                            <input value={value} onChange={({ target: { value } }) => { setValue(value) }} className='tw-font-bold tw-rounded-full tw-w-full tw-py-[0.65rem] tw-pl-4 tw-text-gray-700 dark:tw-text-white tw-bg-gray-200 dark:tw-bg-[rgb(50,50,50)] tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline lg:tw-text-sm tw-text-xs' type='text' placeholder='Search' />

                            <div className='tw-bg-gray-600 tw-p-2 hover:tw-bg-blue-400 tw-cursor-pointer tw-mx-2 tw-rounded-full'>

                                <svg className='tw-w-5 tw-h-5 tw-text-white' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
                                    <path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' />
                                </svg>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='tw-w-[100%] tw-h-full dark:tw-bg-[rgb(18,18,18)] tw-z-[2] tw-flex  tw-flex-col tw-items-center tw-justify-center tw-mt-[50px]'>

                    <div className='tw-w-[90%] sm:tw-w-[80%] dark:tw-bg-[rgb(18,18,18)] tw-flex tw-gap-x-5 tw-gap-y-7 tw-flex-wrap tw-items-center tw-justify-center tw-pb-[50px]'>
                        {
                            models.map((model) => {
                                if (model.key.toUpperCase().includes(value.toUpperCase())) {
                                    return model
                                }
                                return null;
                            })
                        }
                    </div>

                </div>
            </div>
        </React.Fragment>


    )
}

export default ModelPage