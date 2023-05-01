import "./Modal.css"
import ReactDom from "react-dom"
import React from 'react'

const Modal = ({ open, children, onClose }) => {
    if (!open) return null
    return ReactDom.createPortal(
        <>
            <div className="overlay" />
            <div className="modal-style">
                <div className="modal-content">
                    <button className="close-btn" onClick={onClose}>x</button>
                    {children}
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal