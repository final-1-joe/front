import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import '../../css/CalModal.css';

const CalModal = (props) => {
    const { open, close, event, render, setRender } = props;
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [memo, setMemo] = useState('');


    useEffect(() => {
        if (event) {
            setId(event.id);
            setTitle(event.title);
            setStart(event.start);
            setEnd(event.end);
            setMemo(event.extendedProps.memo);
        }
    }, [open]);

    const memochange = (e) => {
        setMemo(e.target.value);
        console.log(memo);
    }

    const handleEdit = () => {
        console.log({ event });
        setEdit(true);
    };


    const handlemodalSubmit = () => {
        axios
            .patch(`http://localhost:8080/schedule/update`, {
                schedule_title: title,
                schedule_content: memo,
                schedule_start: start,
                schedule_end: end,
                schedule_key: parseInt(id)
            })
            .then(() => {
                setEdit(false);
                setRender(!render);
                close();
            })
            .catch((e) => {
                console.error(e);
            });
    }

    const handleDelete = () => {
        axios
            .delete(`http://localhost:8080/schedule/delete/${id}`)
            .then(() => {
                setEdit(false);
                setRender(!render);
                close();
            })
            .catch((e) => {
                console.error(e)
            });
    };

    if (!event) return null;
    return (
        <div>
            {edit ? (
                <div className={open ? 'openModal modal-cal' : 'modal-cal'}>
                    {open ? (
                        <section>
                            <header>
                                <input className='calinput-gj' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                                <button className='close' onClick={close}>
                                    &times;
                                </button>
                            </header>
                            <main>
                                <p>
                                    시작 :&nbsp;&nbsp;
                                    <input
                                        type='datetime-local'
                                        id='start-time'
                                        value={start}
                                        onChange={(e) => setStart(e.target.value)}
                                        min='2023-01-01T00:00'
                                        max='2100-12-31T23:59'
                                    />
                                </p>
                                {end && moment(end).isValid ? (
                                    <p>
                                        끝 :&nbsp;&nbsp;&nbsp; &nbsp;
                                        <input
                                            type='datetime-local'
                                            id='end-time'
                                            value={end}
                                            onChange={(e) => setEnd(e.target.value)}
                                            min='2023-01-01T00:00'
                                            max='2100-12-31T23:59'
                                        />
                                    </p>
                                ) : null}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <textarea className='cal-textarea' maxLength="100" placeholder='최대 150자까지 가능합니다' value={memo} onChange={memochange}></textarea>
                            </main>
                            <footer>
                                <button onClick={handlemodalSubmit}>수정완료</button>
                                &nbsp;&nbsp;
                                <button onClick={handleDelete}>삭제</button>
                            </footer>
                        </section>
                    ) : null}
                </div>
            ) : (
                <div className={open ? 'openModal modal-cal' : 'modal-cal'}>
                    {open ? (
                        <section>
                            <header>
                                {event.title}
                                <button className='close' onClick={close}>
                                    &times;
                                </button>
                            </header>
                            <main>
                                <p>시작 : {moment(event.start).format('YYYY-MM-DD HH:mm')}</p>
                                {event.end && moment(event.end).isValid ? (
                                    <p>끝 : {moment(event.end).format('YYYY-MM-DD HH:mm')}</p>
                                ) : null}
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
            )}
        </div>
    );
};

export default CalModal;