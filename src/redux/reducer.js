import {
  SET_USER,
  SET_NUMBER,
  SET_TIME_FORM,
  SET_WINNING_ID,
  SET_WINNING_CODE,
  SET_CODE_CONFIRMATION
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
    resultsEndTime: null,
    siteLaunch: null,
    collectedData: [],
  }
});

const reducer = (state = initialState, action) => {
  state = Immutable.fromJS(state)
  if (action.type === SET_USER) {
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
    return state
      .set('fullName', action.newUser.fullName)
      .set('emailAddress', action.newUser.emailAddress)
      .set('selectedNetwork', action.newUser.selectedNetwork)
      .set('mobileNumber', action.newUser.mobileNumber)
      .set('date', action.newUser.date)
      .set('uniqueId', action.newUser.uniqueId)
      .set('winningCodeConfirmation', action.newUser.winningCodeConfirmation)
      .set('showResults', action.newUser.showResults)
      .toJS()
  }

  if (action.type === SET_NUMBER) {
    return state
      .set('duplicateNumber', action.newNumber.mobileNumber)
      .toJS()
  }

  if (action.type === SET_WINNING_ID) {
    let collectedData = [];
    action.winningId.collectedData.map(item => {
     collectedData.push(item)
    });
    return state
      .set('collectedData', collectedData)
      .set('siteLaunch', action.winningId.siteLaunch)
      .set('formStartTime', action.winningId.formStartTime)
      .set('resultStartTime', action.winningId.resultStartTime)
      .set('resultsEndTime', action.winningId.resultEnd)
      .set('formEndTime', action.winningId.formEndTime)
      .toJS()
  }


  if (action.type === SET_WINNING_CODE) {
    return state
      .set('winningCode', action.winningCode)
      .toJS()
  }


  if (action.type === SET_TIME_FORM) {
     return state
       .set('formStartTime', action.formTime.formStartTime)
       .set('formEndTime', action.formTime.formEndTime)
       .set('resultsStartTime', action.formTime.resultsStartTime)
       .set('resultsEndTime', action.formTime.resultsEndTime)
       .set('siteLaunch', action.formTime.siteLaunch)
       .toJS()
  }



  if (action.type === SET_CODE_CONFIRMATION) {
    return state
      .set('mobileNumber', action.winningCodeConfirmation.mobileNumber)
      .set('selectedNetwork', action.winningCodeConfirmation.selectedNetwork)
      .set('uniqueId', action.winningCodeConfirmation.uniqueId)
      .set('winningCodeConfirmation', action.winningCodeConfirmation.winningCodeConfirmation)
      .toJS()
  }

  else {
    return state;
  }
};

export default reducer;