import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "../../css/SupportCenter.css";
// title,info 표시하기
const SupportQuesion = ({ title, info }) => {
  // info를 클릭시에 볼수있도록 버튼 만들기
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <ul>
        <li className="sc_lis">
          <div className="sc_lis-0" onClick={() => setShowInfo(!showInfo)}>
            <span class="sc_lis-1">Q</span>
            <span class="sc_lis-2">{title}</span>
            <span class="sc_lis-3">
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
                      <div class="sc_an-2">
                        <div>
                          <p>
                            <span>
                              <strong>{info}</strong>
                            </span>
                          </p>
                        </div>
                      </div>
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
