

export function ListItem(props) {
    return (
        <div className={props.className}>
            <img src={props.item.image} alt={props.item.title} />
            <h2>{props.item.title}</h2>
            <p>{props.item.description}</p>
        </div>
    );
}

