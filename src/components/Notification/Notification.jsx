import PropTypes from 'prop-types';
import { Warning } from 'components/Notification/Notification.styled';

const Notification = ({ message }) => <Warning>{message}</Warning>;

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
