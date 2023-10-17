import React from 'react';

const NotificationItem = (props) => {
  if (props.html) {
    return (
      <li
        data-notification-type={props.type}
        dangerouslySetInnerHTML={props.html}
      />
    );
  } else {
    return <li data-notification-type={props.type}>{props.value}</li>;
  }
};

export default NotificationItem;
