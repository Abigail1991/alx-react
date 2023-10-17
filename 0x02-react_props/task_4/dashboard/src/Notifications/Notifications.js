import React from 'react';
import './Notifications.css';
import icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer }) => {
  return (
    <React.Fragment>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
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
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem
              type="urgent"
              html={{ __html: getLatestNotification() }}
            />
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

Notifications.defaultProps = {
  displayDrawer: false,
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notifications;
