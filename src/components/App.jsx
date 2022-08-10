import 'modern-normalize/modern-normalize.css';
import { Component } from 'react';
import s from './feedback.module.css';
import FeedbackActions from './FeedbackActions/FeedbackActions';
import FeedbackStats from './FeedbackStats/FeedbackStats';
import SectionTitle from './Section/SectionTitle';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = props => {
    this.setState(prevState => {
      return {
        [props]: prevState[props] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    let {
      onLeaveFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    return (
      <div className={s.feedback}>
        <SectionTitle title="Please leave feedback">
          <FeedbackActions
            options={Object.keys(this.state)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </SectionTitle>

        <SectionTitle title="Statistics">
          {countTotalFeedback() ? (
            <FeedbackStats
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </SectionTitle>
      </div>
    );
  }
}

export default App;
