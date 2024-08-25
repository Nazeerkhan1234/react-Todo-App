import Item from "./Item";

const TodoItems = ({ todoItem, onDeleteClick }) => {
  return (
    <>
      {todoItem.map((item, index) => {
        return (
          <Item
            key={index}
            index={index}
            todoname={item.name}
            tododate={item.duedate}
            onDeleteClick={onDeleteClick}
          />
        );
      })}
    </>
  );
};

export default TodoItems;
