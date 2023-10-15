import React from 'react';
import './Notifications.css';
import icon from './close-icon.png';
import { getLatestNotification } from './utils';

const Notifications = () => {
  return (
    <div className="Notifications">
      <button
        aria-label="Close"
        style={{
          float: 'right',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={() => {
          console.log('Close button has been clicked');
        }}
      >
        <img
          src={icon}
          alt="Notification close icon"
          style={{ width: '1em', height: '1em' }}
        />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
};

export default Notifications;
