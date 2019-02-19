import React from 'react'
import {connect} from 'react-redux'
import {Table} from 'reactstrap'
import {deleteById} from '../httpRequests/artistApi'

function TableCont (props){
    console.log("table",props)
 return(
  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Song</th>
        <th>Pic</th>
        <th>length</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {props.artists.map((artist,index)=>{return(
        <tr key={index}>
          <th scope="row">{index+1}</th>
          <td>{artist.name}</td>
          <td>{artist.song}</td>
          <td><img src={artist.pic}  alt="pic" width={"50px"}/></td>
          <td>{artist.length}</td>
          <td><button type="button" onClick={props.delete.bind(this,{index:index,id:artist._id})}>delete</button></td>
      </tr>
      )})}
        
    </tbody>
    </Table>
 )


}

const mapStateToProps=(state)=>{
    return{
        artists:state.artists
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
      delete: async (obj)=>{
        let result= await deleteById(obj.id);
        console.log(result);
        dispatch({
            type:"DELETE_ARTIST" ,payload:obj.index
           })
     }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TableCont)