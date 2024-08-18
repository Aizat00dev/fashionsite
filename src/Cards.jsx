   



export default function Cards(props){
    return(
      
        <div className="cards">
            <img src={props.img} className="card-img"  />
            <h2 className="card-title">{props.title}</h2>
            <h3 className="card-subtitle">{props.subtitle}</h3>
            <p className="new-price"><span className="old-price"> ${props.old}</span> ${props.new}</p>
        </div>
       
    )
}