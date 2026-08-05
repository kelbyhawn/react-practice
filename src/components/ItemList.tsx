import Button from "../ui-kit/Button";

type ItemListProps = {
  items: {
    id: string;
    item: string;
    isComplete: boolean;
  }[];
  onCompleteClick: (index: number) => void;
  onDeleteClick: (id: string) => void;
};

// returns a list of items added from the ItemForm component
// use props to call corresponding state value in parent component
export default function ItemList({
  items,
  onCompleteClick,
  onDeleteClick,
}: ItemListProps) {
  return (
    <ul>
      {/* set props on items state and create array from items added in ItemForm */}
      {items.map((item, index) => (
        <li key={item.id}>
          {" "}
          {/* call object key "id" from setItems array in ShoppingList */}
          <div>
            <Button
              className={item.isComplete ? "item complete" : "item"}
              onClick={() => onCompleteClick(index)}
            >
              {item.item}
            </Button>
            <Button
              className="btn-delete"
              onClick={() => onDeleteClick(item.id)}
            >
              ×
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
