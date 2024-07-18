import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({ name, img, price, category, description, stock }) => {
    return (
        <div className="card item-list-card">
            <img src={img} className="img-product-detail" />
            <div className="card-body item-list-card-specs">
                <h5 className="card-title">{name}</h5>
                <p>{description}</p>
                <ul className="list-group">
                    <li className="list-group-item">Categoría: {category}</li>
                    <li className="list-group-item">Precio: {price} monedas</li>
                </ul>
                <ItemCount stock={stock} />
            </div>
        </div>
    )
}

export default ItemDetail