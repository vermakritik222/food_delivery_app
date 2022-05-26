import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./sass/MenuAside.scss";

function MenuAside(props) {
  const { active, list } = props;
  const itemList = useRef();

  useEffect(() => {
    const changeActive = () => {
      const list = itemList.current.children;
      for (let i = 0; i < list.length; i++) {
        if (list[i].classList[0] === "menuAside__item_active") {
          list[i].classList.remove("menuAside__item_active");
        }
      }

      for (let i = 0; i < list.length; i++) {
        if (list[i].children[0].innerText === active)
          list[i].classList.add("menuAside__item_active");
        // console.log(list[i].children[0].innerText);
      }
    };
    changeActive(active);
  }, [active]);

  return (
    <div className="menuAside fixed-content" style={{ top: "11.9em" }}>
      <div className="menuAside__cover">
        <ul ref={itemList}>
          <li className="menuAside__item_active">
            <Link to="#">Recommended</Link>
          </li>
          {list?.map((el) => (
            <li>
              <Link to="#">{el}</Link>
            </li>
          ))}

          {/* <li>
            <Link to="#">Match Day Meal</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default MenuAside;
