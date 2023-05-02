import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../css/MyCalendar.css';
import CalModal from './Modals/CalModal';


const MyCalendar = () => {
    const [events, setEvents] = useState([]);
    const [title, setTitle] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [color, setColor] = useState('');
    const [content, setContent] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isStartDateSelected, setIsStartDateSelected] = useState(false);



    const closeModal = () => {
        setModalOpen(false);
    };

    const colorList = [
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Orange', value: 'orange' },
        { label: 'Purple', value: 'purple' },
        { label: 'Pink', value: 'pink' },
        { label: 'Brown', value: 'brown' },
        { label: 'Gray', value: 'gray' },
    ];



    const handleDateClick = (arg) => {
        if (!isStartDateSelected) {
            setStart(arg.dateStr + 'T09:00');
            setIsStartDateSelected(true);
            alert('시작 날짜가 저장되었습니다.');
        } else {
            const selectedEndDate = arg.dateStr + 'T09:00';
            if (selectedEndDate <= start) {
                alert('종료 날짜가 시작 날짜보다 이전입니다.');
            } else {
                setEnd(arg.dateStr + 'T09:00');
                setIsStartDateSelected(false);
                alert('종료 날짜가 저장되었습니다.');
            }
        }
    };

    const handleReset = () => {
        setStart('');
        setEnd('');
        setIsStartDateSelected(false);
    }


    const handleEventClick = (arg) => {
        setSelectedEvent(arg.event);
        setModalOpen(true);
    };



    const handleSubmit = (event) => {
        event.preventDefault();

        // 유효성 검사
        if (!title || !start || !end || !color || !content) {
            alert('모든 필드를 입력하세요.');
            return;
        }
        if (end <= start) {
            alert('종료 날짜가 시작 날짜보다 이전입니다.');
            return;
        }

        // // ...

        // // 캘린더 이벤트 업데이트
        //const newEvent = { title, start, end, color, content };
        // const updatedEvents = [...events, newEvent];
        // setEvents(updatedEvents);

        // 폼 입력값 초기화
        setTitle('');
        setStart('');
        setEnd('');
        setColor('');
    };

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    // 캘린더에 사용할 색상 목록입니다.


    return (
        <div className="calendar-wrapper">
            <div className="calendar-container">
                <FullCalendar
                    locale='ko'
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    dateClick={handleDateClick}
                    eventClick={handleEventClick}
                    events={[ //여기 부분을 axios 데이터로 받아와야함
                        {
                            title: 'event ', start: '2023-04-02',
                            extendedProps: {
                                memo: '이러저러한 일정'
                            }
                        },
                        {
                            title: 'event 2', start: '2023-04-03'
                            , end: '2023-04-14', color: 'green',
                            extendedProps: {
                                memo: '이러저러한 좀 긴 일정'
                            }
                        },
                    ]}
                />
            </div>
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <label>
                        제목:
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </label>
                    <hr />
                    <label>
                        시작 시간:
                        <input type="datetime-local"
                            id="start-time" value={start}
                            onChange={(e) => setStart(e.target.value)}
                            min="2023-01-01T00:00"
                            max="2100-12-31T23:59"
                        />
                    </label>
                    <br />
                    <label>
                        종료 시간:
                        <input
                            type="datetime-local"
                            id="end-time" value={end}
                            onChange={(e) => setEnd(e.target.value)}
                            min="2023-01-01T00:00"
                            max="2100-12-31T23:59" />
                    </label>
                    <button onClick={handleReset} >
                        리셋
                    </button>
                    <hr />
                    <label>
                        내용:
                        <textarea maxLength="100" placeholder='최대 150자까지 가능합니다' value={content} onChange={(e) => setContent(e.target.value)}></textarea>


                    </label>
                    <hr />
                    <label>
                        색깔 :
                        <select value={color} onChange={handleColorChange}>
                            <option value="">선택하세요</option>
                            {colorList.map((item) => (
                                <option key={item.value} value={item.value}>
                                    {item.label}
                                </option>
                            ))}
                        </select>
                    </label>
                    <button type="submit">추가</button>
                </form>
            </div>
            <CalModal open={modalOpen} close={closeModal} event={selectedEvent}>
            </CalModal>
        </div>
    );
}

export default MyCalendar;