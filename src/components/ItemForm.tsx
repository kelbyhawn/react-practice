import Button from "../ui-kit/Button";
import Input from "../ui-kit/Input";

type ItemFormProps = {
  newItem: string;
  validation: string;
  onItemChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
};

export default function ItemForm({
  newItem,
  onItemChange,
  validation,
  onFormSubmit,
}: ItemFormProps) {
  return (
    <form onSubmit={onFormSubmit}>
      <Input
        label="Enter an item:"
        value={newItem} // uses entry state from App
        onChange={onItemChange} // uses setEntry state from App
        autoFocus={
          typeof window !== "undefined" && window.screen.width <= 480
            ? false
            : true
        }
      />
      <Button>Add Item</Button>

      <p className="tiny required">{validation}</p>
    </form>
  );
}
