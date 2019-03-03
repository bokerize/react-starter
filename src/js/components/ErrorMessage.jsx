import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { isFoundBadWords: state.isFoundBadWords };
};

const ConnectedErrorMessage = ({ isFoundBadWords }) => isFoundBadWords && <h5>ErrorMessagexx</h5>;

const ErrorMessage = connect(mapStateToProps)(ConnectedErrorMessage);

export default ErrorMessage;
