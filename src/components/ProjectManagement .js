import React from 'react';
import ManagementForm from './ManagementForm';

const ProjectManagement = () => {
    // 스케줄데이터를 axios로 전환 예정
    // 링크는 차후 프로젝트 상세페이지로 연결해야함
    const scheduleData = [
        {
            id: 1,
            project: 'Project A',
            content: 'Schedule 1',
            status: 'inProgress',
            link: '/hello'
        },
        { id: 2, project: 'Project A', content: 'Schedule 2', status: 'completed' },
        { id: 3, project: 'Project B', content: 'Schedule 3', status: 'inProgress' },
        { id: 4, project: 'Project B', content: 'Schedule 4', status: 'completed' },
    ];

    return (
        <div>
            <h1>프로젝트 페이지</h1>
            <ManagementForm listData={scheduleData} />
            <button>프로젝트 등록</button>
            {/* 프로젝트 등록 버튼은 차후 css 통일예정 */}
        </div>
    );
};

export default ProjectManagement;