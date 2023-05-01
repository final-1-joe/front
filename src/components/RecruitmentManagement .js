import React from 'react';
import ManagementForm from './ManagementForm';

const RecruitmentManagement = () => {
    // 스케줄데이터를 axios로 전환 예정
    const FreelancerData = [
        {
            id: 1, project: 'Freelancer 1',
            content: 'Schedule 1',
            status: 'inProgress',
            link: '/33333'
        },
        //링크는 이렇게 걸어도 되고, 나중에 아이디로 거셔도 될거같아요.
        //프로젝트명이 겹치기가 쉽지 않을거 같아 일단 이렇게정했습니다.
        //프리랜서 상세 페이지로 링크가 들어갈 예정
        //내용관련해선 차후 이야기 해 봐야함
        { id: 2, project: 'Freelancer 2', content: 'Schedule 2', status: 'completed' },
        { id: 3, project: 'Freelancer 3', content: 'Schedule 3', status: 'inProgress' },
        { id: 4, project: 'Freelancer 4', content: 'Schedule 4', status: 'completed' },
    ];
    return (
        <div>
            <h1>모집현황 리스트 페이지</h1>
            <ManagementForm
                listData={FreelancerData}
                Mode='Recruit' />
           
        </div>
    );
};

export default RecruitmentManagement;