import React from 'react';
import ManagementForm from './ManagementForm';
import MySidebar from './my/mySidebar/MySidebar';

const ProjectManagement = () => {
    // 스케줄데이터를 axios로 전환 예정
    // 링크는 차후 프로젝트 상세페이지로 연결해야함
    const scheduleData = [
        {
            id: 1,
            project: 'Project A',
            content: 'Schedule 1',
            status: 'ongoing',
            link: '/hello'
        },
        { id: 2, project: 'Project B', content: 'Schedule 2', status: 'completed' },
        { id: 3, project: 'Project C', content: 'Schedule 3', status: 'inProgress' },
        { id: 4, project: 'Project D', content: 'Schedule 4', status: 'completed' },
    ];

    return (
        <div>
            <div className='flex'>
                <MySidebar />
                <ManagementForm listData={scheduleData} />
            </div>
        </div>
    );
};

export default ProjectManagement;