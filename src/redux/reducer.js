import {
  SET_USER,
  SET_NUMBER,
  SET_TIME_FORM,
  SET_WINNING_ID,
  SET_WINNING_CODE, SET_CODE_CONFIRMATION
} from './constants/type';
import writeNewPost from '../helpers/firebasePostHelper';
import fire from '../fire';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  user: {
    fullName: null,
    emailAddress: null,
    mobileNumber: null,
    date: {},
    id: null,
    disabled: true,
    receivedData: {},
    randomWinningId: '',
    displayResults: '',
    showResults: false,
    uniqueId: null,
    dataCollected: false,
    revealRedeem: false,
    duplicateNumber: null,
    winningCode: null,
    winningCodeConfirmation: false,
    selectedNetwork: null,
    formStartTime: null,
    formEndTime: null,
    resultsStartTime: null,
    resultsEndTime: null
  }
});


const reducer = (state = initialState, action) => {
  if (action.type === 'SET_USER') {
    const dataToSend = {
      fullName: action.newUser.fullName,
      emailAddress: action.newUser.emailAddress,
      selectedNetwork: action.newUser.selectedNetwork,
      mobileNumber: action.newUser.mobileNumber,
      date: action.newUser.date,
      uniqueId: action.newUser.uniqueId,
      winningCodeConfirmation: false,
    };

    writeNewPost(
      dataToSend.fullName,
      dataToSend.emailAddress,
      dataToSend.selectedNetwork,
      dataToSend.mobileNumber,
      dataToSend.date,
      dataToSend.uniqueId,
      dataToSend.winningCodeConfirmation,
    );
    return state.user
      .set('fullName', action.newUser.fullName)
      .set('emailAddress', action.newUser.emailAddress)
      .set('selectedNetwork', action.newUser.selectedNetwork)
      .set('mobileNumber', action.newUser.mobileNumber)
      .set('date', action.newUser.date)
      .set('uniqueId', action.newUser.uniqueId)
      .set('winningCodeConfirmation', action.newUser.winningCodeConfirmation)
      .set('showResults', action.newUser.showResults)
  }

  if (action.type === 'SET_NUMBER') {
    return state.user
      .set('duplicateNumber', action.newNumber.mobileNumber)
  }

  if (action.type === 'SET_WINNING_ID') {
    return state.user
      .set('mobileNumber', action.winningId.mobileNumber)
      .set('uniqueId', action.winningId.uniqueId)
  }


  if (action.type === 'SET_WINNING_CODE') {
    return state.user
      .set('winningCode', action.winningCode)
  }


  if (action.type === 'SET_TIME_FORM') {
     return state.user
    .set('formStartTime', action.formTime.formStartTime)
    .set('formEndTime', action.formTime.formEndTime)
    .set('resultsStartTime', action.formTime.resultsStartTime)
    .set('resultsEndTime', action.formTime.resultsEndTime)
  }



  if (action.type === 'SET_CODE_CONFIRMATION') {
    const postData = {
      winnerConfirmed: action.winningCodeConfirmation.winningCodeConfirmation,
    };

    fire.database().ref('confirmedWinner/').set({postData});
    return state.user
      .set('winningCodeConfirmation', action.winningCodeConfirmation.winningCodeConfirmation)
  }

  else {
    return state;
  }
};

export default reducer;