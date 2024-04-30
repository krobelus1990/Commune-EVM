import React, { useState } from 'react';
import { Modal } from 'antd';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { web3Enable, web3Accounts } from '@polkadot/extension-dapp';
import polkadotImg from '../../assets/images/polkadot-new-dot-logo.svg';
import * as antdModel from '../../utils/antdmodal.css';

function PolkadotWalletButton() {
  const [extensionAvailable, setExtensionAvailable] = useState();

  const connectWallet = async () => {
    if (typeof window !== 'undefined') {
      setExtensionAvailable(true);

      try {
        const extensions = await web3Enable('Commune AI');
        if (extensions.length === 0) {
          console.log('Install Polkadot wallet extension');
          setExtensionAvailable(false);
          return;
        }
        setExtensionAvailable(true);
        const accounts = await web3Accounts();
        const provider = new WsProvider('wss://rpc.polkadot.io');
        const polkadotAPI = await ApiPromise.create({ provider });
        const address = accounts[0].address;
        await polkadotAPI.query.system.account(address);
        console.log(address);
        alert(`Successfully connected!
address: ${address}
        `);
      } catch (error) {
        console.error('Error', error);
      }
    } else {
      console.error('Cannot connect wallet');
    }
  };

  return (
    <div>
      {extensionAvailable === false && (
        <Modal
          open={!extensionAvailable}
          className={{ antdModel }}
          closeIcon={null}
          onCancel={() => setExtensionAvailable(true)}
          style={{ marginTop: '50px' }}
          width={'0px'}
          footer={null}
        >
          <div className='tw-p-8 tw-flex tw-justify-center tw-items-center tw-flex-col tw-gap-4 tw-ml-[-200px] tw-rounded-3xl tw-bg-[#fff] dark:tw-bg-[rgb(27,27,27)] tw-w-[300px]'>
            <p className='tw-mt-[20px] dark:tw-text-white'>Please install the Polkadot.js extension to continue.</p>
            <a
              href='https://polkadot.js.org/extension/'
              target='_blank'
              rel='noopener noreferrer'
              className='tw-rounded-md tw-flex tw-justify-center tw-items-center tw-px-4 tw-py-2 tw-bg-red-500 tw-text-white hover:tw-text-white hover:tw-bg-red-400 tw-transition-all tw-duration-300'
            >
              Get Polkadot.js Extension
            </a>
          </div>
        </Modal>
      )}
      <img
        onClick={() => connectWallet()}
        className='hover:tw-w-[90px] tw-transition-all tw-w-[80px] tw-cursor-pointer'
        src={polkadotImg}
        alt=''
      />
    </div>
  );
}

export default PolkadotWalletButton;
