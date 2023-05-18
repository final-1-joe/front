import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//버튼을 누름에 따라, axios를 새로 해서 렌더링 해주는 페이지?
//버튼은 유저리스트, 클라이언트 리스트, 프로젝트 리스트, 
//답변이 되지 않은 문의사항만 보는 리스트,
//매칭율 확인?? 부분을 그래프처럼 생각중
const Adminpage = () => {
    //useNavigate 관련 부분은 차후, 레이아웃js에
    //어드민일시 관리페이지 들어가기 하고,
    //세션에서 admin이 아닐경우, 다시 홈으로 보내는 역할을 할 예정 
    const navigate = useNavigate();

    //리스트를 한번 열면, 전체 부분을 axios로 데이터를 받아오진 않고,
    //버튼을 누를 시에 true를 하고, 체크해서 axios를 부분적으로 받아올려고 생각중
    //더이상 렌더링 하지 않게 설계할 예정
    const [userRender, setUserRender] = useState(false);
    const [clientRender, setClientRender] = useState(false);
    //userRender와 clientRender는 둘이 동시에 진행해야하나 생각중입니다.
    //db에서 회원유형만 다른거같아서...
    const [projectRender, setProjectRender] = useState(false);
    const [customerRender, setCustomerRender] = useState(false);
    const [matchRender, setMatchRender] = useState(false);

    //userdb 데이터 가져오기(임시)
    const [userdb, setUserdb] = useState([]);
    //userdb중 client쪽 데이터만 가져오기(임시)
    const [clientdb, setClientdb] = useState([]);
    const getuserdb = () => {
        if (userRender == false) {
            axios
                .get("http://localhost:8080/user/list", {})
                .then((userRes) => {
                    const userdata = userRes.data;
                    const clientdata = userdata.filter(client => client.user_code === 'client')
                    setUserdb(userdata);
                    setClientdb(clientdata);
                    setClientRender(true);
                    setUserRender(true);
                })
                .catch((e) => {
                    console.error(e);
                });
        } else {
            //이부분을 버튼누르면 이 데이터 리스트를 뽑아오기 위한 방식으로 쓰면 될거같아요 
        };
    };

    //project데이터 가져오기(임시)
    const [projectdb, setProjectdb] = useState([]);
    const getprojectdb = () => {
        if (projectRender == false) {
            axios
                .get("http://localhost:8080/project/list", {})
                .then((projectres) => {
                    const projectdata = projectres.data;
                    setProjectdb(projectdata);
                    setProjectRender(true);
                })
                .catch((e) => {
                    console.error(e);
                });
        } else {
            //이부분을 버튼누르면 이 데이터 리스트를 뽑아오기 위한 방식으로 쓰면 될거같아요 
        };
    };

    //customer데이터 가져오기(임시)
    const [customerdb, setCustomerdb] = useState([]);
    const getcustomerdb = () => {
        if (customerRender == false) {
            axios
                .get("http://localhost:8080/support/board/list", {})
                .then((customerres) => {
                    const customerdata = customerres.data;
                    setCustomerdb(customerdata);
                    setCustomerRender(true);
                })
                .catch((e) => {
                    console.error(e);
                });
        } else {
            //이부분을 버튼누르면 이 데이터 리스트를 뽑아오기 위한 방식으로 쓰면 될거같아요 
        };
    };


    return (
        <dev>
            <h1>관리자님, 환영합니다</h1>
        </dev>
    );

}


export default Adminpage;