import { useNavigate } from "react-router-dom";
import styles from "./AnketItem.module.scss";
import type { Anket } from "../model/types";

interface AnketItemProps {
  anket: Anket;
  showLink?: boolean;
}

function AnketItem({ anket, showLink = true }: AnketItemProps) {
  const navigate = useNavigate();

  function handleClick() {
    if (showLink) {
      navigate(`/fill-anket/${anket.id}`);
    }
  }

  return (
    <div
      className={styles.item}
      onClick={handleClick}
      role={showLink ? "button" : undefined}
      tabIndex={showLink ? 0 : undefined}
    >
      <span className={styles.name}>{anket.name}</span>
    </div>
  );
}

export default AnketItem;
