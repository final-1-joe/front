import React, { useState, useEffect } from 'react';
import '../css/ManagementForm.css';
import { useNavigate } from 'react-router-dom';

const ManagementForm = ({ listData, Mode }) => {
    //listData와 Mode는 쓰는곳에서 설정해야 합니다.
    const [activeTab, setActiveTab] = useState('all');
    const [allSchedules, setAllSchedules] = useState([]);
    const [inProgressSchedules, setInProgressSchedules] = useState([]);
    const [completedSchedules, setCompletedSchedules] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setAllSchedules(listData);
        const inProgress = listData.filter(schedule => schedule.status === 'inProgress');
        const completed = listData.filter(schedule => schedule.status === 'completed');
        setInProgressSchedules(inProgress);
        setCompletedSchedules(completed);
    }, [listData]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        Mode === 'Recruit' ?
            //Recruit일 경우
            <div className="container">
                <div className="tab">
                    <button className={`button ${activeTab === 'all' ? 'active' : ''}`} onClick={() => handleTabClick('all')}>전체</button>
                    <button className={`button ${activeTab === 'inProgress' ? 'active' : ''}`} onClick={() => handleTabClick('inProgress')}>승낙</button>
                    <button className={`button ${activeTab === 'completed' ? 'active' : ''}`} onClick={() => handleTabClick('completed')}>미승낙</button>
                </div>
                <div className='listcontainer'>
                    <ul className="list">
                        <li>
                            <div className='index'>
                                <span>프리랜서명</span>
                                <span>내용</span>
                                <span>진행상황</span>
                            </div>
                        </li>
                        {activeTab === 'all' && (
                            <>
                                {allSchedules.map((schedule) => (
                                    <li key={schedule.id} className="list-item" onClick={() => navigate(schedule.link)}>
                                        <span>{schedule.project}</span>
                                        <span>{schedule.content}</span>
                                        <span>{schedule.status === 'completed' ? '승낙' : '미승낙'}</span>
                                    </li>
                                ))}
                            </>
                        )}

                        {activeTab === 'inProgress' && (
                            <>
                                {inProgressSchedules.map((schedule) => (
                                    <li key={schedule.id} className="list-item" onClick={() => navigate(schedule.link)}>
                                        <span>{schedule.project}</span>
                                        <span>{schedule.content}</span>
                                        <span>미승낙</span>
                                    </li>
                                ))}
                            </>
                        )}

                        {activeTab === 'completed' && (
                            <>
                                {completedSchedules.map((schedule) => (
                                    <li key={schedule.id} className="list-item completed" onClick={() => navigate(schedule.link)}>
                                        <span>{schedule.project}</span>
                                        <span>{schedule.content}</span>
                                        <span>승낙</span>
                                    </li>
                                ))}
                            </>
                        )}
                    </ul>
                </div>
            </div>
            :
            //Project일 경우
            <div className="container">
                <div className="tab">
                    <button className={`button ${activeTab === 'all' ? 'active' : ''}`} onClick={() => handleTabClick('all')}>전체</button>
                    <button className={`button ${activeTab === 'inProgress' ? 'active' : ''}`} onClick={() => handleTabClick('inProgress')}>진행중</button>
                    <button className={`button ${activeTab === 'completed' ? 'active' : ''}`} onClick={() => handleTabClick('completed')}>완료</button>
                </div>
                <div className='listcontainer'>
                    <ul className="list">
                        <li>
                            <div className='index'>
                                <span>프로젝트</span>
                                <span>내용</span>
                                <span>진행상황</span>
                            </div>
                        </li>
                        {activeTab === 'all' && (
                            <>
                                {allSchedules.map((schedule) => (
                                    <li key={schedule.id} className="list-item" onClick={() => navigate(schedule.link)}>
                                        <span>{schedule.project}</span>
                                        <span>{schedule.content}</span>
                                        <span>{schedule.status === 'completed' ? '완료' : '진행중'}</span>
                                    </li>
                                ))}
                            </>
                        )}

                        {activeTab === 'inProgress' && (
                            <>
                                {inProgressSchedules.map((schedule) => (
                                    <li key={schedule.id} className="list-item" onClick={() => navigate(schedule.link)}>
                                        <span>{schedule.project}</span>
                                        <span>{schedule.content}</span>
                                        <span>진행중</span>
                                    </li>
                                ))}
                            </>
                        )}

                        {activeTab === 'completed' && (
                            <>
                                {completedSchedules.map((schedule) => (
                                    <li key={schedule.id} className="list-item completed" onClick={() => navigate(schedule.link)}>
                                        <span>{schedule.project}</span>
                                        <span>{schedule.content}</span>
                                        <span>완료</span>
                                    </li>
                                ))}
                            </>
                        )}
                    </ul>
                </div>
            </div>
    );
}

export default ManagementForm;