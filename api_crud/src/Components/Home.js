import React, { Component } from "react";
import { ProductConsumer } from "./Context";
import {Table, Button} from "react-bootstrap"



export default class Home extends Component {
    
    render() {
        return(
            <div className="container">
                <ProductConsumer>
                    {(value)=>{
                        return(
                            <table size="sm" variant="dark" striped bordered hover>
                                <tbody>
                                    <tr>
                                        <th>first name</th>
                                        <th>last name</th>
                                        <th>gender</th>
                                        <th>Actions</th>
                                    </tr>
                                    <tr>
                                        <td><input type="text" value={value.first_name} onChange={(e)=>{value.updateValue(e ,"first_name")}}/></td>
                                        <td><input type="text" value={value.last_name} onChange={(e)=>{value.updateValue(e ,"last_name")}}/></td>
                                        <td><input type="text" value={value.gender} onChange={(e)=>{value.updateValue(e ,"gender")}}/></td>
                                        <td><button id="b3" onClick={()=>(value.onSave(value.id))}>{value.id ? "Save":"Save"}</button></td>
                                    </tr>
                                    {value.Alldata.map(product => {
                                        return(
                                            <tr>
                                                <td>{product.first_name}</td>
                                                <td>{product.last_name}</td>
                                                <td>{product.gender}</td>
                                                <td>
                                                    <button id="b1" onClick={()=>(value.onEdit(product.id))}>Edit</button>
                                                    |
                                                    <button id="b2" onClick={()=>(value.onDelete(product.id))}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        )
                    }}
                </ProductConsumer>
            </div>
        )
    }
}