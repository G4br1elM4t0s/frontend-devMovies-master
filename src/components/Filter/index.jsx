import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import menuAberto from "../../assets/hamburgue.svg";
import menuFechado from "../../assets/menuFechado.svg";
import del from "../../assets/del.svg";

// eslint-disable-next-line react/prop-types
export function Filter({ open, setOpen }) {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const filter = localStorage.getItem("filter");
    if (filter) {
      setSelectedItems(JSON.parse(filter));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("filter", JSON.stringify(selectedItems));
  }, [selectedItems]);

  function handleMenuClick() {
    setOpen(!open);
  }

  function handleItemClick(item) {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  }

  function handleRemoveItemClick(item) {
    setSelectedItems(selectedItems.filter((i) => i !== item));
  }

  return (
    <>
      <div className={styles.filterContent}>
        <div className={styles.selectedItems}>
          {selectedItems.map((item) => (
            <div key={item} className={styles.selectedItem}>
              <div className={styles.filterBox}>
                <span className={styles.itemName}>{item}</span>
                <button
                  className={styles.removeButton}
                  onClick={() => handleRemoveItemClick(item)}
                >
                  <img src={del} alt="del" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.container}>
          <div className={styles.menu}>
            <button onClick={handleMenuClick}>
              <img src={open ? menuFechado : menuAberto} alt="Menu" />
            </button>
          </div>
          <nav className={open ? styles.inactive : styles.active}>
            <ul>
              <li
                onClick={() => handleItemClick("Gostei")}
                className={
                  selectedItems.includes("Gostei") ? styles.selected : ""
                }
              >
                Gostei
              </li>
              <li
                onClick={() => handleItemClick("Não Gostei")}
                className={
                  selectedItems.includes("Não Gostei") ? styles.selected : ""
                }
              >
                Não Gostei
              </li>
              <li
                onClick={() => handleItemClick("Assistido")}
                className={
                  selectedItems.includes("Assistido") ? styles.selected : ""
                }
              >
                Assistido
              </li>
              <li
                onClick={() => handleItemClick("A Assistir")}
                className={
                  selectedItems.includes("A Assistir") ? styles.selected : ""
                }
              >
                A Assistir
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
