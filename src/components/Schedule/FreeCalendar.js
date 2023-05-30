import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from "axios";


const MyCalendar = () => {
    const { id } = useParams();
    const [events, setEvents] = useState([]);
    const getEvent = () => {
        axios
            .get(`http://localhost:8080/schedule/get?user_id=${id}`, {})
            .then((res) => {
                const { data } = res;
                const events = data.map((event) => {
                    const { schedule_key, schedule_title, schedule_content, schedule_start, schedule_end, schedule_color } = event;
                    const eventObject = {
                        id: schedule_key,
                        title: schedule_title,
                        color: schedule_color,
                        extendedProps: {
                            memo: schedule_content,
                        },
                    };
                    if (schedule_end === null) {
                        eventObject.date = schedule_start;
                    } else {
                        eventObject.start = schedule_start;
                        eventObject.end = schedule_end;
                    }
                    return eventObject;
                });
                setEvents(events);
            })
            .catch((e) => {
                console.error(e);
            });
    };

    useEffect(() => {
        getEvent();
    }, []);
    return (
        <div className="calendar-wrapper">
            <div className="calendar-container">
                <h2 style={{ textAlign: "center" }}>{id}님의 스케줄</h2>
                <FullCalendar
                    locale='ko'
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    events={events}
                    displayEventTime={false}
                />
            </div>
        </div>
    );

}
export default MyCalendar;