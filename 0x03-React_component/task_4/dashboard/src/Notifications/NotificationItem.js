import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, value, html }) => {
  if (html) {
    return <li data-notification-type={type} dangerouslySetInnerHTML={html} />;
  } else {
    return <li data-notification-type={type}>{value}</li>;
  }
};

NotificationItem.defaultProps = {
  type: 'default',
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

export default NotificationItem;
