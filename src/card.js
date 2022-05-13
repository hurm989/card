function Card(props) {
    return <>
        <div className="crd">
            <div className="card" >
                <img src={props.imgsrc}></img>
                <h3>{props.title}</h3>
                <h5>{props.product}</h5>
                <p>{props.quantity}</p>
                <p>{props.price}</p>
                <button onClick={props.action}> Add to cart</button>
            </div>
        </div>
    </>
}
export default Card