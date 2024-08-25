const Item = ({ todoname, tododate, onDeleteClick, index }) => {
  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-start-2">
          <h1 className="py-5 px-5 font-bold">
            {todoname}
          </h1>
        </div>
        <div>
          <h1 className="py-5 px-5  font-bold">
            {tododate}
          </h1>
        </div>

        <div>
          <button
            className="btn btn-secondary text-white px-14 font-bold"
            onClick={() => onDeleteClick(index)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
