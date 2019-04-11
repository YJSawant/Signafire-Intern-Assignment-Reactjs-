import React, { Component } from 'react'


class Search extends Component {

constructor(props){
super(props);
this.handleInputChange=this.handleInputChange.bind(this);
this.state={
  query: '',
}
}


 handleInputChange(){
  const {handleInputChange}=this.props;
   
  const query1=(this.refs.search).value;
  this.setState({query:query1})
   handleInputChange(query1);
 }

 render() {
   return (
   	<div style={{float:'left'}}>
    
       <input
         placeholder="Search for..."
         ref="search"
       />
       
          <button onClick={this.handleInputChange}>
        Search
      </button>
     
     
     </div>
   )
 }
}

export default Search