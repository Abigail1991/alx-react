import React from 'react';
import './Notifications.css';
import icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <div className="menuItem">Your notifications</div>
        {this.props.displayDrawer && (
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
            {this.props.listNotifications.length > 0 ? (
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {this.props.listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      id={notification.id}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            ) : (
              <p>No new notification for now</p>
            )}
          </div>
        )}
      </React.Fragment>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
