import React from "react";
import cat from './cat.png'


function Table(){

    return(
        
 <table>
    <tr><td><img src={cat} alt="cat"/><input type="checkbox"/><span>HTML</span></td></tr>
    <tr><td><img src={cat} alt="cat"/><input type="checkbox"/><span>CSS</span></td></tr>
    <tr><td><img src={cat} alt="cat"/><input type="checkbox"/><span>PHP</span></td></tr>
 </table>
        
    );
}
export default Table;