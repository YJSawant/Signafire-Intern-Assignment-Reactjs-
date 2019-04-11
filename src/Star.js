import React, { Component } from 'react';

class Toggle extends Component {

  constructor(props){
    super(props);
    this.onClickButton1=this.onClickButton1.bind(this);
    this.state={
      text: 'Star Message!',
      bgcolor:'white',
      disable:false,
      fontc:'black'
    
    }
  }

  
  onClickButton1(){
    const{onClickButton1}=this.props;
    const c=1;

    this.setState({
      text: 'Starred!',
      bgcolor:'#ff4007',
      disable:true,
      fontc:'#ffffff'
    });

    onClickButton1(c);
}


  render() {
    return (
      
        <button onClick={this.onClickButton1} disabled={this.state.disable} style={{
        backgroundColor: this.state.bgcolor, color: this.state.fontc, fontSize: "11px"
      }}>
          {this.state.text}
        </button>
    );
  }
}

export default Toggle;
