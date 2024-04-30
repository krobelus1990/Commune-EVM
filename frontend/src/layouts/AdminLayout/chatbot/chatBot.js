import React from 'react';
import { useState } from 'react';
import { Bounce } from 'react-reveal';
import { FormControl, Button, InputGroup } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Messages from '../NavBar/NavRight/ChatList/Friends/Chat/Messages';
import chatbotImg from '../../../assets/images/ChatBot.svg';
import { OPENAI_API_KEY } from '../../../utils/env';

function ChatBot() {
  const [isShowChatbotClicked, setIsShowChatbotClicked] = useState(false);
  const [input, setInput] = useState('');

  const openChatbot = () => {
    setIsShowChatbotClicked(true);
  };
  const closeChatbot = () => {
    setIsShowChatbotClicked(false);
  };

  const [messages, setMessages] = useState([
    {
      msg: 'Hello! How can I assist you today?',
      type: 1
    }
  ]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSend(event);
    }
  };

  const handleSend = async (event) => {
    event.preventDefault();
    const newMessage = {
      msg: input,
      type: 0
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setInput('');

    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    // const API_KEY = process.env.OPENAI_API_KEY;
    const API_KEY = OPENAI_API_KEY;
    let apiMessages = chatMessages.map((messageObject) => {
      let role = '';
      if (messageObject.sender === 1) {
        role = 'assistant';
      } else {
        role = 'user';
      }
      return { role: role, content: messageObject.msg };
    });

    const systemMessage = {
      role: 'system',
      content: `The purpose of this chatbot is to tell informations of this platform.
      This platform is about a EVM contracts marketplace. The platform facilitates trading of various smart contracts on the Ethereum blockchain.This platform contains all smart contracts on EVM and users can trade via these contracts on this platform.
      Also users can sign up and log in here via wallet, both meta mask and commune wallet.
      On Dashboard users can see detail of this platform including all trade informations on this platform.
      And they can trade on EVM contract page.
      Don't answer for any question not related with this platform amd use emoticons much.
      User Query: A user asks, 'Can you explain how to trade smart contracts on this platform?'
      
      Bot Response:
      
      'Absolutely! Trading smart contracts on our platform is straightforward. Here's a step-by-step guide to get you started:
      
      •Browse Contracts: Start by browsing through our extensive collection of smart contracts listed on the platform. You can use the search bar or filters to narrow down your options based on categories, functionalities, or keywords.
      
      •Select Contract: Once you've found a contract that interests you, click on it to view detailed information, including its features, specifications, and trading history. Take your time to understand the contract's purpose and dynamics before proceeding.
      
      •Initiate Trade: To initiate a trade, simply select the 'Trade' button associated with the contract. This will prompt you to specify the quantity you wish to buy or sell and review the current market conditions, including prices and liquidity.
      
      •Confirm Transaction: After reviewing the transaction details, confirm your trade to execute the transaction. Our platform ensures secure and seamless transactions powered by blockchain technology, providing transparency and reliability throughout the process.
      
      •Monitor Portfolio: Once the transaction is completed, you can monitor your portfolio and track the performance of your contracts in real-time. Our intuitive interface provides comprehensive insights into your holdings, profits, and transaction history.
      
      That's it! You're now ready to explore and trade smart contracts on our EVM marketplace. If you have any further questions or need assistance at any step along the way, feel free to ask!'`
    };

    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      messages: [systemMessage, ...apiMessages]
    };

    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(apiRequestBody)
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.choices[0].message.content);
        setMessages([
          ...chatMessages,
          {
            msg: data.choices[0].message.content,
            type: 1
          }
        ]);
      });
  }

  return (
    <div>
      <button onClick={openChatbot} className='fixed tw-right-8 tw-bottom-8 tw-cursor-pointer'>
        <img className=' tw-w-[120px]' src={chatbotImg} alt='' />
      </button>
      <Bounce bottom>
        <div
          className={isShowChatbotClicked ? `header-chat tw-fixed chatbot tw-h-screen` : `header-chat tw-hidden chatbot tw-h-screen`}
          style={{ right: '0', top: '0' }}
        >
          {/* <div className='header-chat tw-fixed' style={ {right:'0px'}}> */}
          <div className='h-list-header'>
            <h6>Welcome to Chatbot</h6>
            <button onClick={closeChatbot} className='h-back-user-list tw-cursor-pointer'>
              <i className='feather icon-chevron-left text-muted' />
            </button>
          </div>
          <div className='h-list-body' style={{ height: '91%' }}>
            <div className='main-chat-cont'>
              <PerfectScrollbar>
                <div className='main-friend-chat' style={{ paddingLeft: '15px' }}>
                  {messages.map((msg, index) => {
                    return (
                        <Messages key={index} message={msg} name='Ninja' photo='' />
                    );
                  })}
                </div>
              </PerfectScrollbar>
            </div>
          </div>
          <div className='h-list-footer'>
            <InputGroup>
              <Button variant='success' className='btn-attach'>
                <i className='feather icon-paperclip' />
              </Button>
              <FormControl
                type='text'
                name='h-chat-text'
                className='h-send-chat'
                value={input}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder='Write hear . . '
              />
              <Button type='submit' className='input-group-append btn-send' onClick={handleSend}>
                {/* <i className='feather icon'  /> */}

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='20'
                  height='20'
                  className='main-grid-item-icon'
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                >
                  <line x1='22' x2='11' y1='2' y2='13' />
                  <polygon points='22 2 15 22 11 13 2 9 22 2' />
                </svg>
              </Button>
            </InputGroup>
          </div>
        </div>
      </Bounce>
    </div>
  );
}

export default ChatBot;
