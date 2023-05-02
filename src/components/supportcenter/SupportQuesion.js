import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "../../css/SupportCenter.css";

// title,info 표시하기
const SupportQuesion = ({ id, title, info }) => {
  // info를 클릭시에 볼수있도록 버튼 만들기
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <ul>
        <li className="sc_lis">
          <div className="sc_lis-0" onClick={() => setShowInfo(!showInfo)}>
            <span className="sc_lis-1">Q</span>
            <span className="sc_lis-2">{title}</span>
            <span className="sc_lis-3">
              {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </span>
          </div>
          {showInfo && (
            <div className="sc_an-0">
              <table>
                <tbody>
                  <tr>
                    <td width="70px" valign="top">
                      <div className="sc_an-1">A</div>
                    </td>
                    <td>
                      <div className="sc_an-2">
                        <div>
                          <p>
                            <span>
                              <strong>{info}</strong>
                            </span>
                          </p>
                        </div>
                      </div>
                      <span className="sc_an-3">
                        <button className="btn-m03" name={id}>
                          삭제
                        </button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SupportQuesion;
