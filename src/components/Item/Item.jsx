import { Link } from "react-router-dom"

const Item = ({ id, name, img, category, price }) => {
    return (
        <div className="card item-list-card">
            <img src={img} className="img-product" />
            <div className="card-body item-list-card-specs">
                <h5 className="card-title">{name}</h5>
                <ul className="list-group">
                    <li className="list-group-item">Categoría: {category}</li>
                    <li className="list-group-item">Precio: {price} monedas</li>
                </ul>
                <Link className="btn btn-primary" to={`/detail/${id}`} >Ver características</Link>
            </div>
        </div>
    )
}

export default Item