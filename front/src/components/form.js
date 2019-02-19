import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Form, FormGroup, Label, Input} from 'reactstrap'
import {updateById, addNew} from '../httpRequests/artistApi'
import './cardsStyle.css'

class EditForm extends Component {
 constructor(props){
    super(props);
    this.state={
        name:"",
        song:"",
        pic:"",
        length:"",
        id:"",
        
    }
 }
 
  render() {
    return (
      <div>
                    <Form>
                      <FormGroup>
                      <Label for="name">Name</Label>
                      <Input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange.bind(this)} />
                     </FormGroup>
                     <FormGroup>
                      <Label for="song">Song</Label>
                      <Input type="text" name="song" id="song" value={this.state.song} onChange={this.handleChange.bind(this)}  />
                     </FormGroup>
                     <FormGroup>
                      <Label for="pic">Pic</Label>
                      <Input type="text" name="pic" id="pic"  value={this.state.pic} onChange={this.handleChange.bind(this)}/>
                     </FormGroup>
                     <FormGroup>
                      <Label for="length">Length</Label>
                      <Input type="text" name="length" id="length" value={this.state.length} onChange={this.handleChange.bind(this)} />
                     </FormGroup>
                    </Form>
                    <button type="button" onClick={this.cleanForm.bind(this)}>New Artist</button>
                    <button type="button" onClick={this.props.submit.bind(this,this.state)}>Submit</button>

             
                  
      </div>
    )
  }

handleChange(e){
    this.setState({[e.target.name]:e.target.value})
}

componentWillReceiveProps(props){
    if (props.artist!==undefined){
        let {name,_id,length,pic,song}= props.artist
        this.setState({name:name, id:_id, length:length, pic:pic,song:song})
    }

}

componentDidMount(){
    debugger
    let {name,_id,length,pic,song}= this.props.artist
    this.setState({name:name, id:_id, length:length, pic:pic,song:song})
}



cleanForm(){
    this.setState({
        name:"",
        song:"",
        pic:"",
        length:"",
        id:"",
    });
}



}
const mapStateToProps=(state)=>{
    
    return{
        artist:state.artistEdit
    }
}


const mapDispatchToProps=(dispatch)=>{
     return{ 
    submit:async (obj)=>{
        debugger;
        if (obj.id===""|| obj.id===undefined){
            let result = await addNew(obj);
            dispatch({
                type:"ADD_NEW_ARTIST", payload:result
            })

        }else{
            let result= await updateById(obj)
            dispatch({
                type:"UPDATE_ARTIST", payload:result
            })
    
        } 
        }
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(EditForm)
    