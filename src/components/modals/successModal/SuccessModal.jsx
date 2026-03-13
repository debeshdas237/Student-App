import ReactDOM from "react-dom"
import './SuccessModal.scss'

export default function SuccessModal({ message, onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{message}</h3>
        <button onClick={onClose} className="btn btn-danger">Close</button>
      </div>
    </div>,
    document.getElementById("alert-root")
  );
}
