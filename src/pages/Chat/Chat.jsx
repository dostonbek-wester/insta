import React from 'react'
import './chat.css'
import { KeyboardArrowDown, RateReviewOutlined, LocalPhoneOutlined, VideoCameraBackOutlined, FeedbackOutlined,  } from '@mui/icons-material'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

function Chat() {
  return (
    <div className="chat-container">
      <div className="chat-users">
        <div className="chat-h1">
          <h2>abdumanopov.01
            <KeyboardArrowDown />
          </h2>
          <RateReviewOutlined />

        </div>
        <div className='pgr'>
          <div className="primary">
            <h4>Primary</h4>
          </div>
          <div className="general">
            <h4>General</h4>
          </div>
          <div className="request">
            <h4>Request</h4>
          </div>
        </div>
      </div>
      <div className="chat-msg">
        <div className="chat-acc">
          <h2>User Name</h2>
          <div className='icon'>
          <LocalPhoneOutlined />
          <VideoCameraBackOutlined />
          <FeedbackOutlined />
          </div>
        </div>
        <div className="inp-div">
        <input className='chat-inp' type="text" placeholder='Message...' />
        <SentimentSatisfiedAltIcon />
        </div>
      </div>
    </div>
  )
}

export default Chat