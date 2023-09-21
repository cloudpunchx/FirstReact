// This is the example before I changed ListGroup to use props instead of this method below:

// import { Fragment } from "react";
// import { MouseEvent } from "react";

import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Hook (allows us to tap into built in features in React)
  // selectedIndex is the State Variable, setSelectedIndex is a function (common)
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          // if you have item.id then use that but for this basic one we just have the item itself
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

// This is 1 way to write the conditional statement, but it's repeating the H1 and isn't the best practice:
// if (items.length === 0) {
//   return (
//     <>
//       <h1>List</h1>
//       <p>No item found.</p>
//     </>
//   );
// }

// or you can make a function to getMessage and call the getMessage inside the JSX
// const message = items.length === 0 ? <p>No items found.</p> : null;
// const getMessage = () => {
//   return items.length === 0 ? <p>No items found.</p> : null;
// };

// You want to handle the logic in a function and not within the JSX markup
// Event Handler
// const handleClick = (event: MouseEvent) => console.log(event);
