import React from 'react'
import SupplyModal from '../contractModel/supplyModal';
import TransferModal from '../contractModel/transfer';
import StakingModal from '../contractModel/StakingModal';
import MintModal from '../contractModel/mintModal';
import UniswapModal from '../contractModel/uniswapModal';
import CurveModal from '../contractModel/curveModal';
import MakerDaoModal from '../contractModel/MakerDaoModal';
import AaveModal from '../contractModel/AaveModal';
import * as antdModel from '../../../utils/antdmodal.css';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

function ContractModel(props) {

    const [isShowSupplyModalOpen, setIsShowSupplyModalOpen] =
        React.useState(false);
    const [isShowTransferModalOpen, setIsShowTransferModalOpen] =
        React.useState(false);
    const [isShowStakeModalOpen, setIsShowStakeModalOpen] =
        React.useState(false);
    const [isShowMintModalOpen, setIsShowMintModalOpen] =
        React.useState(false);
    const [isShowUniswapModalOpen, setIsShowUniswapModalOpen] =
        React.useState(false);
    const [isShowCurveModalOpen, setIsShowCurveModalOpen] =
        React.useState(false);
    const [isShowMakerDaoModalOpen, setIsShowMakerDaoModalOpen] =
        React.useState(false);
    const [isShowAaveModalOpen, setIsShowAaveModalOpen] =
        React.useState(false);

    const handleSupplyModalShow = () => {
        setIsShowSupplyModalOpen(true);
    };
    const handleSupplyModalShowCancel = () => {
        setIsShowSupplyModalOpen(false);
    };
    const handleTransferModalShow = () => {
        setIsShowTransferModalOpen(true);
    };
    const handleTransferModalShowCancel = () => {
        setIsShowTransferModalOpen(false);
    };
    const handleStakeModalShow = () => {
        setIsShowStakeModalOpen(true);
    };
    const handleStakeModalShowCancel = () => {
        setIsShowStakeModalOpen(false);
    };
    const handleMintModalShow = () => {
        setIsShowMintModalOpen(true);
    };
    const handleMintModalShowCancel = () => {
        setIsShowMintModalOpen(false);
    };
    const handleUniswapModalShow = () => {
        setIsShowUniswapModalOpen(true);
    };
    const handleUniswapModalShowCancel = () => {
        setIsShowUniswapModalOpen(false);
    };
    const handleCurveModalShow = () => {
        setIsShowCurveModalOpen(true);
    };
    const handleCurveModalShowCancel = () => {
        setIsShowCurveModalOpen(false);
    };
    const handleMakerDaoModalShow = () => {
        setIsShowMakerDaoModalOpen(true);
    };
    const handleMakerDaoModalShowCancel = () => {
        setIsShowMakerDaoModalOpen(false);
    };
    const handleAaveModalShow = () => {
        setIsShowAaveModalOpen(true);
    };
    const handleAaveModalShowCancel = () => {
        setIsShowAaveModalOpen(false);
    };
    const OpenModel = () => {
        switch (props.click) {
            case 'handleUniswapModalShow': handleUniswapModalShow(); break
            case 'handleCurveModalShow': handleCurveModalShow(); break
            case 'handleMakerDaoModalShow': handleMakerDaoModalShow(); break
            case 'handleAaveModalShow': handleAaveModalShow(); break
            case 'handleSupplyModalShow': handleSupplyModalShow(); break
            case 'handleTransferModalShow': handleTransferModalShow(); break
            case 'handleStakeModalShow': handleStakeModalShow(); break
            case 'handleMintModalShow': handleMintModalShow(); break
            default : console.log('default');
        }
    };
    return (
        <React.Fragment>

            <div>


                <div className='tw-w-[270px]'>
                    <div className='tw-flex tw-max-w-sm tw-w-full tw-shadow-md tw-rounded-lg tw-overflow-hidden tw-mx-auto'>
                        <div className='tw-w-full tw-overflow-hidden tw-group tw-rounded-xl tw-relative tw-transform hover:-tw-translate-y-2 tw-transition tw-ease-in-out tw-duration-500 tw-shadow-lg hover:tw-shadow-2xl movie-item tw-text-white movie-card' data-movie-id='438631'>
                            <div className='tw-absolute tw-inset-0 tw-z-10 tw-transition tw-duration-300 tw-ease-in-out tw-bg-gradient-to-t tw-from-[#3067ff] dark:tw-from-[rgb(27,27,27)] tw-via-[#6db1ff] dark:tw-via-[rgb(27,27,27)] tw-to-transparent'></div>
                            <div className='tw-relative tw-z-10 tw-px-6 tw-pt-6 tw-space-y-6'>
                                <div className='tw-align-self-end tw-w-full'>
                                    <div className='tw-space-y-6 detail_info'>
                                        <div className='tw-flex tw-flex-col tw-space-y-2'>
                                            <a className='tw-relative tw-flex tw-items-center tw-w-min tw-flex-shrink-0 tw-p-1 tw-text-center tw-text-white ' data-unsp-sanitized='clean'>
                                                {/* <svg xmlns='http://www.w3.org/2000/svg' className='w-10 h-10' viewBox='0 0 20 20' fill='currentColor'>
                                                                        <path fillRule='evenodd' d='M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z' clipRule='evenodd'></path>
                                                                    </svg> */}
                                                <div className='tw-z-10 tw-w-[100px] tw-h-[100px] tw-ml-[-20px]'>
                                                    <img src={props.imgSrc} className=' tw-w-full' alt='' />
                                                </div>
                                                <div className='tw-absolute tw-transition tw-w-[200px] group-hover:tw-opacity-100 tw-opacity-[0.1%] tw-duration-500 tw-ease-in-out tw-transform group-hover:tw-translate-x-[3.6rem] tw-text-[17px] tw-font-bold tw-text-white group-hover:tw-pr-2'>{props.contractTitle}</div>
                                            </a>
                                            <h3 className='tw-text-2xl tw-font-bold tw-text-white' data-unsp-sanitized='clean'>{props.contractName}</h3>
                                        </div>

                                        <div className='tw-flex tw-flex-col tw-h-[100px]'>
                                            <div className='tw-flex tw-flex-col'></div>
                                            <div className='tw-text-[15px] tw-mb-2'>Description:</div>
                                            <p className='tw-text-[15px] tw-text-gray-100 tw-mb-6'>
                                                {props.contractDescription}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='tw-absolute tw-inset-0 tw-transform tw-w-full -tw-translate-y-4 tw-bg-[#6db1ff] dark:tw-bg-[rgb(35,35,35)]' style={{ filter: 'grayscale(0)' }} />
                            <div className='poster__footer tw-flex tw-flex-row tw-relative tw-pb-4 tw-space-x-4 tw-z-10 tw-cursor-pointer'>
                                <a
                                    className='tw-flex tw-items-center tw-py-2 tw-px-4 tw-rounded-full tw-mx-auto tw-text-white tw-bg-red-500 hover:tw-bg-red-700 dark:tw-bg-[rgb(18,18,18)] dark:hover:tw-bg-gray-600 tw-no-underline'
                                    target='_blank'
                                    data-unsp-sanitized='clean'
                                >
                                    {/* <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                                </svg> */}
                                    <button tabIndex={0} className='tw-text-sm tw-text-white tw-ml-2' onClick={OpenModel}>Open Model</button>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                {isShowSupplyModalOpen && (
                    <Modal
                        title=''
                        className={{ antdModel }}
                        open={isShowSupplyModalOpen}
                        style={{ marginTop: '50px' }}
                        width={'0px'}
                        closeIcon={null}
                        onCancel={handleSupplyModalShowCancel}
                        footer={null}
                    >
                        <SupplyModal />
                    </Modal>
                )}
                {isShowTransferModalOpen && (
                    <Modal
                        title=''
                        className={{ antdModel }}
                        open={isShowTransferModalOpen}
                        style={{ marginTop: '50px' }}
                        width={'0px'}
                        closeIcon={null}
                        onCancel={handleTransferModalShowCancel}
                        footer={null}
                    >
                        <TransferModal />
                    </Modal>
                )}
                {isShowStakeModalOpen && (
                    <Modal
                        title=''
                        className={{ antdModel }}
                        open={isShowStakeModalOpen}
                        style={{ marginTop: '50px' }}
                        width={'0px'}
                        closeIcon={null}
                        onCancel={handleStakeModalShowCancel}
                        footer={null}
                    >
                        <StakingModal />
                    </Modal>
                )}
                {isShowMintModalOpen && (
                    <Modal
                        title=''
                        className={{ antdModel }}
                        open={isShowMintModalOpen}
                        style={{ marginTop: '50px' }}
                        width={'0px'}
                        closeIcon={null}
                        onCancel={handleMintModalShowCancel}
                        footer={null}
                    >
                        <MintModal />
                    </Modal>
                )}
                {isShowUniswapModalOpen && (
                    <Modal
                        title=''
                        className={{ antdModel }}
                        open={isShowUniswapModalOpen}
                        style={{ marginTop: '50px' }}
                        width={'0px'}
                        closeIcon={null}
                        onCancel={handleUniswapModalShowCancel}
                        footer={null}
                    >
                        <UniswapModal />
                    </Modal>
                )}
                {isShowCurveModalOpen && (
                    <Modal
                        title=''
                        className={{ antdModel }}
                        open={isShowCurveModalOpen}
                        style={{ marginTop: '50px' }}
                        width={'0px'}
                        closeIcon={null}
                        onCancel={handleCurveModalShowCancel}
                        footer={null}
                    >
                        <CurveModal />
                    </Modal>
                )}
                {isShowMakerDaoModalOpen && (
                    <Modal
                        title=''
                        className={{ antdModel }}
                        open={isShowMakerDaoModalOpen}
                        style={{ marginTop: '50px' }}
                        width={'0px'}
                        closeIcon={null}
                        onCancel={handleMakerDaoModalShowCancel}
                        footer={null}
                    >
                        <MakerDaoModal />
                    </Modal>
                )}
                {isShowAaveModalOpen && (
                    <Modal
                        title=''
                        className={{ antdModel }}
                        open={isShowAaveModalOpen}
                        style={{ marginTop: '50px' }}
                        width={'0px'}
                        closeIcon={null}
                        onCancel={handleAaveModalShowCancel}
                        footer={null}
                    >
                        <AaveModal />
                    </Modal>
                )}
            </div>
        </React.Fragment>

    )
}
ContractModel.propTypes = {
    imgSrc: PropTypes.string,
    contractTitle: PropTypes.string,
    contractName: PropTypes.string,
    click: PropTypes.string,
    contractDescription: PropTypes.string,
  };
export default ContractModel

