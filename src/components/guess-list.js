import React from 'react';

import './guess-list.css';
import {connect} from 'react-redux';

export function GuessList(props) {
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));

  return (
    <ul id="guessList" className="guessBox clearfix">
      {guesses}
    </ul>
  );
}

export const mapStateToProps = state =>  ({
  guesses: state.guesses
});

export default connect(mapStateToProps)(GuessList);
