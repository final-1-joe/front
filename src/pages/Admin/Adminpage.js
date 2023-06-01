import React, { useState, useEffect } from "react";
import '../../css/admin.css';
import AdminSideBar from "../../components/Admin/AdminSideBar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import axios from "axios";

const Adminpage = () => {
  const [projectresult, setProjectresult] = useState([]);
  const [bardata, setBardata] = useState([]);
  const [combinedData, setCombinedData] = useState([]);
  const [render, setrender] = useState(false);
  //선그래프 데이터
  //프로젝트 시작 / 마감 그래프 데이터
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
    console.log(pjlistresult);
    setProjectresult(pjlistresult);
  }
  //프로젝트 시작/ 마감 그래프 데이터 끝
  //선 그래프 데이터 끝

  //막대그래프 데이터
  //클라이언트 프로젝트 요구직군 데이터
  const jgdata = [
    "개발",
    "경영·비즈니스",
    "마케팅·광고",
    "디자인",
    "미디어",
    "엔지니어링·설계",
    "법률·법집행기관",
  ];

  //프리랜서 직군 데이터 배열과, 클라이언트 프로젝트 요구직군 데이터 배열을 합침
  const fetchData = async () => {
    try {
      const pjjgResponses = await Promise.all(jgdata.map((jg) =>
        axios.post("http://localhost:8080/pjjgcount", { pj_job: jg })
      ));

      const jgResponses = await Promise.all(jgdata.map((jg) =>
        axios.post("http://localhost:8080/resume/usjgcount", { user_jg: jg })
      ));

      const combinedData = jgdata.map((jg, index) => ({
        name: jg,
        resumedata: jgResponses[index]?.data || 0,
        projectdata: pjjgResponses[index]?.data || 0,
      }));
      setCombinedData(combinedData);
    } catch (error) {
      console.error(error);
    }
  };


  //프로젝트 진행상황 (모집중, 모집완료, 진행중, 진행완료)에 따른 그래프
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
  //프로젝트 진행상황 (모집중, 모집완료, 진행중, 진행완료)에 따른 그래프 끝


  //막대그래프 끝
  useEffect(() => {
    getprojectlist();
    getpjstatuslist();
    fetchData();
    setrender(!render);
  }, []);



  return (
    <div className="admin-page">
      <AdminSideBar />
      <div className="main-content">
        <div className="flex">
          {/* 선그래프 */}
          <LineChart width={700} height={300} data={projectresult}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#FF0000" strokeWidth={3} name="프로젝트 시작" />
            <Line type="monotone" dataKey="value2" stroke="#0000FF" strokeWidth={3} name="프로젝트 마감" />
          </LineChart>

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
        <div className="flex">
          <BarChart width={1200} height={300} data={combinedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="resumedata" fill="#FFC300" name="프리랜서" />
            <Bar dataKey="projectdata" fill="#FF0000" name="프로젝트" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Adminpage;
