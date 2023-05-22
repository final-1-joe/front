import React from 'react';

const ConfirmationModal = ({ open, message, onConfirm, onCancel }) => {
    return (
        <div className={open ? 'openModal modal-cal confirmation-modal' : 'modal-cal confirmation-modal'}>
            {open ? (
                <section>
                    <header>
                        {message}
                        <button className="close-gj" onClick={onCancel}>
                            &times;
                        </button>
                    </header>
                    <footer>
                        <button onClick={onConfirm}>확인</button>
                        &nbsp;&nbsp;
                        <button onClick={onCancel}>취소</button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
};

export default ConfirmationModal;