import React, { useState, useEffect } from "react";
import '../../css/admin.css';
import AdminSideBar from "../../components/Admin/AdminSideBar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import axios from "axios";

const Adminpage = () => {
  const [projectresult, setProjectresult] = useState([]);
  const [bardata, setBardata] = useState([]);
  //선그래프 데이터
  //회원 가입추이, 직군 그래프에 이용할거같아요
  const linedata = [
    { name: 'May', value: 10, value2: 15 },
    { name: 'June', value: 20, value2: 35 },
  ];

  const jobdata = [
    { name: 'May', value: 10, value2: 15 },
    { name: 'June', value: 20, value2: 35 },
  ];
  //막대그래프 데이터
  //프로젝트 진행상황 (모집중, 모집완료, 진행중, 진행완료) 이 4개를 막대그래프로 만들거에요
  const getpjstatuslist = async () => {
    let baseUrl = "http://localhost:8080/admin";
    const statuslist = [];
    const requests = [
      { name: '모집중', endpoint: 'countInprogress' },
      { name: '모집완료', endpoint: 'countCompleted' },
      { name: '진행중', endpoint: 'countOngoing' },
      { name: '진행완료', endpoint: 'countFinished' },
    ];
    try {
      for (const request of requests) {
        const response = await axios.get(`${baseUrl}/${request.endpoint}`);
        statuslist.push({
          name: request.name,
          value: response.data,
        });
      }
    } catch (error) {
      console.error(error);
    }
    console.log(statuslist);
    setBardata(statuslist);
  }

  const getprojectlist = async () => {
    let baseUrl = "http://localhost:8080/count";
    const year = 2023;
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);
    let pjlistresult = [];

    for (let date = startDate; date <= endDate; date.setMonth(date.getMonth() + 1)) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const formattedDate = `${year}-${month}`;
      try {
        const responseStart = await axios.get(`${baseUrl}/start?pj_start=${formattedDate}`);
        const responseEnd = await axios.get(`${baseUrl}/end?pj_end=${formattedDate}`);

        const monthName = date.toLocaleString('ko-KR', { month: 'short' });

        pjlistresult.push({
          name: monthName,
          value: responseStart.data,
          value2: responseEnd.data,
        });

      } catch (error) {
        console.error(error);
      }
    }
    setProjectresult(pjlistresult);
  }
  useEffect(() => {
    getprojectlist();
    getpjstatuslist();
  }, []);

  return (
    <div className="admin-page">
      <AdminSideBar />
      <div className="main-content">
        <div className="flex">
          {/* 선그래프 */}
          <LineChart width={500} height={300} data={projectresult}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#FF0000" strokeWidth={3} name="프로젝트 시작일" />
            <Line type="monotone" dataKey="value2" stroke="#0000FF" strokeWidth={3} name="프로젝트 마감일" />
          </LineChart>
        </div>
        <div className="flex">
          {/* 막대그래프 */}
          <BarChart width={500} height={300} data={bardata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#FFC300" name="프로젝트 수" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Adminpage;
