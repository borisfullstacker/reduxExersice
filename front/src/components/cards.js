import React, { Component } from 'react'
import {connect} from 'react-redux';
import './cardsStyle.css'
import EditForm from './form'

 class Cards extends Component {
 constructor(props){
    super(props);
    this.state={

        isOpen:false
    }
 }
 
  render() {

    return (
      <div>
                 <h3>{this.props.artist.name}</h3>
                   <h3>{this.props.artist.song}</h3>
                      <img src={this.props.artist.pic} alt="pic" width={"100px"}/>
                     <h3>{this.props.artist.length}</h3>
                     <button type="button" onClick={this.props.previous}>Previous</button>
                     <button type="button" onClick={this.props.next}>Next</button>
                     <button type="button" onClick={this.toggle.bind(this)}>Edit</button>

                     
                 <div className={this.state.isOpen?"oepn":"close"}>
                    <EditForm />    
                 </div>   
      </div>
    )
  }

  toggle(){
      this.setState({isOpen:!this.state.isOpen})
  }


}

const mapStateToProps=(state)=>{
    debugger
    if (state.artist===undefined){
        return{
            artist:{
                name:"",
                song:"",
                pic:"",
                length:"",
                id:"",
            },
        }
      
        
    }
    console.log("map state to props", state)
    return{
        artist:state.artist,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        next: ()=>{
            dispatch({
                type:"GET_NEXT"
            })
        },
        previous:()=>{
            dispatch({
                type:"GET_PRE"
            })
        }
   
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(Cards)
 