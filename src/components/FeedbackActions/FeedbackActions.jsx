import PropTypes from 'prop-types';
import s from '../feedback.module.css';
import shortid from 'shortid';
const FeedbackActions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.buttons}>
      {options.map(option => (
        <li key={shortid.generate()}>
          <button onClick={() => onLeaveFeedback(option)} type="button">
            {option}
          </button>
        </li>
      ))}
    </ul>

    // <div className={s.buttons}>
    //   <button onClick={() => onLeaveFeedback('good')} type="button">
    //     Good
    //   </button>
    //   <button onClick={() => onLeaveFeedback('neutral')} type="button">
    //     Neutral
    //   </button>
    //   <button onClick={() => onLeaveFeedback('bad')} type="button">
    //     Bad
    //   </button>
    // </div>
  );
};

FeedbackActions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackActions;
