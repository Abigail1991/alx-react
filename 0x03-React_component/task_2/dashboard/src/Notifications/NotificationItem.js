import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
  render() {
    return (
      <li
        onClick={() => this.props.markAsRead(this.props.id)}
        {...(this.props &&
          this.props.html && {
            dangerouslySetInnerHTML: this.props.html,
          })}
        data-notification-type={this.props.type}
      >
        {!this.props.html ? this.props.value : null}
      </li>
    );
  }
}

NotificationItem.defaultProps = {
  type: 'default',
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  markAsRead: PropTypes.func,
};

export default NotificationItem;
