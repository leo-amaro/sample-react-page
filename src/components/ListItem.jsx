import Card from "./Card";

function ListItem(props) {
  return (
    // <Card id="concepts">
      <li className="concept">
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </li>
    // </Card>
  );
}

export default ListItem;
