import react from 'react'

export default function Tour(props){
    return (
        <div className="container">
          <div className="imageholder">
            <img className="imageholder" src={require(`../src/images/${props.img}`)} />
          </div>
          <div className="descriptionarea">
            <div className="description">
              <div className="namepriceholder">
                <p className="name"> {props.name}</p>
                <p className="price">$ {props.price}</p>
              </div>
              <p className="info">{props.info} {props.isshown && props.show} <span onClick={()=>props.showmore(props.id)}>Read mode</span> </p>

            </div>
            <button onClick={(e)=>props.delete(props.id)}> Not Intrested</button>

          </div>


        </div>
    )
}