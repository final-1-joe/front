import '../../css/CalModal.css'
import moment, { invalid } from 'moment';

const CalModal = (props) => {
    const { open, close, event } = props;

    const handleEdit = () => {

    };

    const handleDelete = () => {

    };

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        {event.title}
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>
                        <p>시작 : {moment(event.start).format('YYYY-MM-DD HH:mm')}</p>
                        {event.end && moment(event.end).isValid ?
                            <p>끝 : {moment(event.end).format('YYYY-MM-DD HH:mm')}</p> : null}
                        <p>{event.extendedProps.memo}</p>
                    </main>
                    <footer>
                        <button onClick={handleEdit}>수정</button>
                        &nbsp;&nbsp;
                        <button onClick={handleDelete}>삭제</button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
};

export default CalModal;