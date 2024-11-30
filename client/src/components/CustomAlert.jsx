import React from 'react';
import { AlertCircle, X } from 'lucide-react';
import '../styles/components/CustomAlert.scss';

const CustomAlert = ({ 
  isOpen, 
  onClose, 
  message = "Cette fonctionnalité est en maintenance", 
  title = "Information",
  icon = <AlertCircle className="alert-icon" />,
  buttonText = "OK"
}) => {
  if (!isOpen) return null;

  return (
    <div className="custom-alert" onClick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}>
      <div className="alert-content">
        <button 
          className="close-button"
          onClick={onClose}
          aria-label="Fermer"
        >
          <X size={18} />
        </button>

        {/* Contenu de l'alerte */}
        <div className="alert-body">
          {icon}
          {title && <h3 className="alert-title">{title}</h3>}
          <p className="alert-message">{message}</p>
        </div>

        {/* Bouton de confirmation */}
        <button 
          className="alert-confirm"
          onClick={onClose}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;