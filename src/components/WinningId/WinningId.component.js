import React from 'react';
import fire from '../../fire';
import { getWinningId } from "../../redux/actions";
import WinningCodeValidation from '../WinningCodeValidation/WinningCodeValidation.container';
import {connect} from "react-redux";

export class WinningId extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      randomizedData: null,
      uniqueCodeSplit: '',
      uniqueId: null,
      revealRedeem: false,
      receivedData: null,
      receivedMobileNumber: null,
      receivedCode: null
    }
  }

  componentDidMount(){
    fire.database().ref('randomWinnerSetWeb').once('value').then((snapshot) => {
      if (Object.entries !== null || Object.entries !== undefined) {
        let receivedData = snapshot.val();
        // this.props.getWinningId(receivedData.postDataWeb)
        this.setState({
          receivedMobileNumber: receivedData.postDataWeb.mobileNumber,
          receivedCode: receivedData.postDataWeb.uniqueId,
        })
      }
    });
  }

  redeemCode() {
    this.setState({revealRedeem: true});
  }

  render() {
    let uniqueCodeSplit;
    if(this.state.receivedCode !== null) {
      uniqueCodeSplit = this.state.receivedCode.replace(/(\w{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'');
    }
    return (
      <div>
        <div className="winningId">
          Today’s winning code is:<span className="large_text">{uniqueCodeSplit}</span>
          <p>** <i>test purposes: copy phone number</i> {this.state.receivedMobileNumber} **</p>
        </div>
        <div>
          Have a winning code?
          <a
            href="#"
            onClick={() => this.redeemCode()}
          >click to redeem code
          </a>
        </div>
        {this.state.revealRedeem &&
        <WinningCodeValidation
          uniqueId={this.props.user.uniqueId}
          receivedCode={this.state.receivedCode}
          receivedMobileNumber={this.state.receivedMobileNumber}
        />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.reducer.user
  };
};

const mapDispatchToProps = {
  getWinningId,
};

export default connect(mapStateToProps, mapDispatchToProps)(WinningId);
