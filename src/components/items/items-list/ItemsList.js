import ContentBox from "../../ui/containers/ContentBox";
import Item from "../Item/Item";


export default function ItemsList(props) {
  return (
    <ContentBox bg="white">
      {props.list.map((e) => {
        return (
          <Item
            name={e.name}
            description={e.description}
            price={e.price}
            id={e.id}
            key={e.id}
          />
        );
      })}
    </ContentBox>
  );
}
