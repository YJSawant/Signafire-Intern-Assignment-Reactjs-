import React, { Component } from 'react';
import Star from './Star.js'

class Content extends Component {

constructor(props){
super(props);
this.onDelete=this.onDelete.bind(this);
this.onClickButton1=this.onClickButton1.bind(this);

}

 onClickButton1(count){
    const {onClickButton1}=this.props;
    onClickButton1(count);
    }
 

onDelete(){
  const {onDelete,id}=this.props;
  onDelete(id);
}

  render() {
    const {avatar,handle,source,timestamp,content,query}=this.props;

    let x;
    if(query.length>0){
        localStorage.setItem('contents',JSON.stringify(content.replace(new RegExp(query, 'g'),'['+query+']')));
        x=JSON.parse(localStorage.getItem('contents'))
    }
    else{
       localStorage.setItem('contents',JSON.stringify(content));
        x=JSON.parse(localStorage.getItem('contents')) 
    }

    return (
             <div>

              <div className="center">
              <div className="wrapper">
              <div className="one"><img src={avatar} alt="avatar" /><p>{handle}</p></div>
              <div className="two">{source} | {Date(timestamp.slice(0,10)).toString().slice(4,15)} <Star onClickButton1={this.onClickButton1}/><button style={{fontSize: "11px"}} hidden={this.props.hidden} onClick={this.onDelete}>Delete</button>
              <p></p>
              <div>
              <p></p>
                {x}
                <p></p>
              </div>

              </div>
              </div>
              </div>
              </div>
        
    );
  }
}

export default Content;
