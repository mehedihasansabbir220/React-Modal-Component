/* eslint-disable no-undef */
import { useRef ,useState,useEffect} from "react";


export const Modal = ({ title, isShown, confirmText = "Yes", cancelText = "No", onClose, persistent = false, children }) => {
  const modalRef = useRef(null);
  const [showModal, setShowModal] = useState(isShown);

  useEffect(() => {
    setShowModal(isShown);
  }, [isShown]);

  const handleClose = () => {
    if (persistent) return;
    setShowModal(false);
    onClose(false);
  };

  const handleConfirm = () => {
    setShowModal(false);
    onClose(true);
  };

  const handleCancel = () => {
    if (persistent) return;
    setShowModal(false);
    onClose(false);
  };

  const handleOutsideClicks = (e) => {
    if (persistent) return;
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal(false);
      onClose(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleOutsideClicks);
    } else {
      document.removeEventListener("mousedown", handleOutsideClicks);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClicks);
    };
  }, [showModal, persistent]);

  return (
    <div>
      {showModal && (
        <div className="modal-overlay" style={styles.modalOverlay}>
          <div className="modal" ref={modalRef} style={styles.modal}>
            <div className="modal-header" style={styles.modalHeader}>
              <h2 className="modal-title" style={styles.modalTitle}>{title}</h2>
              <button className="close-button" onClick={handleClose} style={styles.closeButton}>
                &times;
              </button>
            </div>
            <div className="modal-body" style={styles.modalBody}>
              {children}
            </div>
            <div className="modal-actions" style={styles.modalActions}>
              <button className="action-button" onClick={handleCancel} style={styles.actionButton}>{cancelText}</button>
              <button className="action-button" onClick={handleConfirm} style={styles.actionButton}>{confirmText}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Modal.propTypes = {
//   // eslint-disable-next-line no-undef
//   title: PropTypes.string,
//   isShown: PropTypes.bool.isRequired,
//   confirmText: PropTypes.string,
//   cancelText: PropTypes.string,
//   onClose: PropTypes.func.isRequired,
//   persistent: PropTypes.bool,
//   children: PropTypes.node,
// };

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color:"#000000"
  },
  modal: {
    maxWidth: '90%',
    maxHeight: '90%',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    overflow: 'hidden',
    color:"#00000"
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    color:"#00000"
  },
  modalTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    marginRight: '10px',
    color:"#00000"
  },
  closeButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '24px',
  },
  modalBody: {
    overflowY: 'auto',
    marginBottom: '10px',
  },
  modalActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px',
  },
  actionButton: {
    height: '40px',
    marginLeft: '10px',
  },
};
