import { useParams } from "react-router-dom";
import { anketApi, AnketItem, Anket } from "@entities/anket";
import { useEffect, useState } from "react";
import styles from "./anketPage.module.scss";

function AnketPage() {
  const { id } = useParams<{ id: string }>();
  const [anket, setAnket] = useState<Anket | null>(null);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (id) {
      anketApi.getById(id).then((data) => setAnket(data));
    }
  }, [id]);

  return (
    <div className={styles.page}>
      <button className={styles.formButton} onClick={() => setOpenModal(true)}>
        Формы
      </button>

      {openModal && (
        <div className={styles.overlay} onClick={() => setOpenModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={() => setOpenModal(false)}
            >
              ✕
            </button>
            <h2 className={styles.title}>Формы</h2>
            {anket && <AnketItem anket={anket} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default AnketPage;
