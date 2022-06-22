import react from "react";


class Map extends react.Component
{
    render()
    {
        this.state=[
            {id: 1 , name: "Apple",  color: "Yellow"},
            {id: 2 , name: "Strawberry", color: "Red"},
            {id: 3 , name: "Kiwi", color: "Green"}
          ]; 
          


    return(
        <div>
              <br/>  <strong>{this.state.map((Fruits)=>{
                return(
                    <div>
                        <span>{Fruits.id}:</span>
                        <span>{Fruits.name}:</span>
                        <span>{Fruits.color}</span> 
                    </div>
                );
                })
            }
                </strong> <hr/>
                </div>
    )

    }

    }
export default Map