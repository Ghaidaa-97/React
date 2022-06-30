import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import {rowData} from "./appData"


const ProductContext = React.createContext();
class ProductProvider extends Component{

    state= {
        Alldata: rowData,
        id:'',
        first_name:'',
        last_name:'',
        updateEdit:[]
    }

    getRecord=(id)=>{
        const user = this.state.Alldata.find(person=>person.id);
        return user;
    }
    onEdit =(id)=> {
        const tempUser = this.state.Alldata;
        const index = tempUser.indexOf(this.getRecord(id));
        const selectedRecord = tempUser[index];

        this.setState({
            id : selectedRecord['id'],
            first_name: selectedRecord['first_name'],
            last_name : selectedRecord['last_name'],
            gender : selectedRecord['gender']
        })
    }

    render(){
        // console.log(this.state.Alldata);
        return(
            <div>
                <ProductContext.Provider 
                value={{...this.state , onEdit: this.onEdit}}>
                    {this.props.children}
                </ProductContext.Provider>
            </div>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer}
