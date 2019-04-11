import React, { Component } from 'react';
import PostData from './messages.json';
import './Messages.css';
import Content from './Content';
import Search from './Search.js';

localStorage.setItem('persons',JSON.stringify(PostData));
class Messages extends Component {
  constructor(props){
      super(props);

      this.state={
        persons:JSON.parse(localStorage.getItem('persons')).messages,
        deletedPersonslist:[],
         isToggleOn: true,
         query:'',
         c:0
        

      };

      this.onDelete=this.onDelete.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleInputChange=this.handleInputChange.bind(this);
      this.onClickButton1=this.onClickButton1.bind(this);
  }



  onClickButton1(count){
 
   let s=this.state.c;
   this.setState({c:s+1})
    
    
}

handleInputChange(query){
    this.setState({
        query:query
    });
 
}

    
    handleClick() {
     this.setState(prevState => ({
         isToggleOn: !prevState.isToggleOn
      }));
    }


  getPersons(){
     return this.state.persons;
    
  }


  componentWillMount(){
    const persons =this.getPersons();
    this.setState({ persons });
  }

onDelete(id){
const persons=this.getPersons();

const filteredPersons=persons.filter(person => {
    return person.id !== id;
})

const deletedPersons=persons.filter(person => {
    return person.id === id;
})

this.setState({persons:filteredPersons});

let deletedPersonslist=this.state.deletedPersonslist;
deletedPersonslist.push(deletedPersons);

for (let i = 0; i < deletedPersonslist.length ; i++) {
this.setState({deletedPersonslist:deletedPersonslist[i]});
}
}

  render() {

    return (
       <div>
       
         <div>
         <div>
         Starred :{this.state.c}
        </div>
           
        

         <p></p>
         

         <button className="button" onClick={this.handleClick}>
            {this.state.isToggleOn ? 'Show Trashed Messages' : 'Show Untrashed Messages'}
         </button>
        <Search handleInputChange={this.handleInputChange} query={this.state.query}/>
         
         <p></p>
         {
            this.state.isToggleOn ?
                (this.state.persons.map(person =>{
            return(
            
             <Content 
                key={person.id}
                {...person}
                onDelete={this.onDelete}
                query={this.state.query}
                onClickButton1={this.onClickButton1}
             />
              );
            })):
           
                (this.state.deletedPersonslist.map(person =>{
            return(
             
             <Content 
                key={person.id}
                {...person}
                onDelete={this.onDelete}
                hidden={'hidden'}
                query={this.state.query}
             />
            
              );
            }))
            
         }
   
          </div>
        
        </div>

    );
  }
}


export default Messages;

