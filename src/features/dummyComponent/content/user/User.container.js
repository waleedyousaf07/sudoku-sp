import { connect } from 'react-redux';
import User from './User.view';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../../dummyComponent.slice';

const mapStateToProps = (state) => ({
  counter: state.dummyComponent.counter,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  incrementByAmount: (amount) => dispatch(incrementByAmount(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
