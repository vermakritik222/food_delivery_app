import React, { useEffect, useRef } from "react";
import "./sass/MenuAside.scss";

function MenuAside(props) {
  const { active } = props;
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
        console.log(list[i].children[0].innerText);
      }
    };
    changeActive(active);
  }, [active]);

  return (
    <div className="menuAside fixed-content" style={{ top: "11.9em" }}>
      <div className="menuAside__cover">
        <ul ref={itemList}>
          <li className="menuAside__item_active">
            <a href="#">Recommended</a>
          </li>
          <li>
            <a href="#">What’s New</a>
          </li>
          <li>
            <a href="#">Match Day Meal</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuAside;
