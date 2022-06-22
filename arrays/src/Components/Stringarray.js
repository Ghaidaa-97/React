import react from "react";

class Stringarray extends react.Component
{
    state={
        names:['Z', 'A', 'Q', 'B', 'C', 'Y', 'S', 'W' ]
    }
    ascOrder()
    {
        this.setState(this.state.names.sort(function(a,b)
        {
            return a.localeCompare(b)
        }))
    }
    dscOrder()
    {
        this.setState(this.state.names.sort(function(a,b)
        {
            return b.localeCompare(a)
        }))
    }
    render()
    {
        return(
            <div>
                <button onClick={()=>this.ascOrder()}>sort A-Z</button><br/>
                <button onClick={()=>this.dscOrder()}>sort Z-A</button><br/>
               <strong>{this.state.names.join(", ")}</strong> <hr/>
            </div>
        );
    }
}

export default Stringarray