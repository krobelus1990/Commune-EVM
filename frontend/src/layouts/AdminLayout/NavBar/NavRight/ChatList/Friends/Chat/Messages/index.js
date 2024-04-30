import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const images = require.context('../../../../../../../../assets/images/user', true);

const Messages = ({ message, photo, name }) => {
  let image = '';
  if (message.type && photo) {
    image = (
      <Link to='#' className='media-left photo-table'>
        <img className='media-object img-radius img-radius m-t-5' src={images(`./${photo}`)} alt={name} />
      </Link>
    );
  }

  let msgClass = [];
  if (message.type) {
    msgClass = [...msgClass, 'chat-menu-content'];
  } else {
    msgClass = [...msgClass, 'chat-menu-reply text-muted'];
  }

  return (
    <React.Fragment>
      <Card
        className='d-flex align-items-start shadow-none mb-0 p-0 chat-messages'
        style={{ flexDirection: 'row', backgroundColor: 'unset' }}
      >
        {image}
        <Card.Body className={msgClass.join(' ')} style={{ padding: 0 }}>
          <div className=''>
            <p className='chat-cont'>
              <Typewriter
                // typeSpeed={0.1}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(message.msg)
                    .callFunction(() => {
                      console.log('String typed out!');
                    })
                    .pauseFor(500)
                    // .deleteAll()
                    .callFunction(() => {
                      console.log('All strings were deleted');
                    })
                    .start();
                }}
                options={{
                  delay: 30
                }}
              />
            </p>
          </div>
          <p className='chat-time'>{message.time}</p>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

Messages.propTypes = {
  message: PropTypes.object,
  photo: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  msg: PropTypes.string,
  time: PropTypes.string
};

export default Messages;
