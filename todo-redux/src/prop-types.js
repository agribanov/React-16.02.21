import PropTypes from 'prop-types';

export const propTypes = { ...PropTypes };

propTypes.todoListItem = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool,
});

propTypes.todoList = PropTypes.arrayOf(propTypes.todoListItem);

export default propTypes;
