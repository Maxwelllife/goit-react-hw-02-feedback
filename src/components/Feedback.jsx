// import { PropTypes } from 'prop-types';
// import { Component } from 'react';
// import s from './feedback.module.css';
// import FeedbackActions from './FeedbackActions';
// import FeesbackStats from './FeesbackStats';
// import SectionTitle from './Section';
// import Notification from './Notification';
// import Feedback from '.';
// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = props => {
//     this.setState(prevState => {
//       return {
//         [props]: prevState[props] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = props => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return total ? Math.round((good / total) * 100) : 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     //можно было и без метода получить...
//     // const total = good + neutral + bad;
//     let { onLeaveFeedback } = this;

//     return (
//       <div className={s.feedback}>
//         <SectionTitle title="Please leave feedback">
//           <FeedbackActions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={onLeaveFeedback}
//           />
//         </SectionTitle>
//         {this.countTotalFeedback() ? (
//           <SectionTitle title="Statistics">
//             <FeesbackStats
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           </SectionTitle>
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </div>
//     );
//   }
// }
export default Feedback;
