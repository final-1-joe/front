import React, { useEffect, useState } from "react";
import TagList from "./TagList";
import "../../css/Resume.css";

const Tag = () => {
  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);

  const onKeyPress = (e) => {
    if (e.target.value.length !== 0 && e.key === "Enter") {
      submitTagItem();
    }
  };

  const submitTagItem = () => {
    let updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem("");
  };

  const deleteTagItem = (e) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = tagList.filter(
      (tagItem) => tagItem !== deleteTagItem
    );
    setTagList(filteredTagList);
  };

  const [isHavetagItem, setIsHavetagItem] = useState(false);
  const [dropDownList, setDropDownList] = useState(TagList);
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);

  const showDropDownList = () => {
    if (tagItem === "") {
      setIsHavetagItem(false);
      setDropDownList([]);
    } else {
      const choosenTextList = TagList.filter((textItem) =>
        textItem.includes(tagItem)
      );
      setDropDownList(choosenTextList);
    }
  };

  const changeInputValue = (e) => {
    setTagItem(e.target.value);
    setIsHavetagItem(true);
  };

  const clickDropDownItem = (clickedItem) => {
    setTagItem(clickedItem);
    setIsHavetagItem(false);
  };

  const handleDropDownKey = (event) => {
    //input에 값이 있을때만 작동
    if (isHavetagItem) {
      if (
        event.key === "ArrowDown" &&
        dropDownList.length - 1 > dropDownItemIndex
      ) {
        setDropDownItemIndex(dropDownItemIndex + 1);
      }

      if (event.key === "ArrowUp" && dropDownItemIndex >= 0)
        setDropDownItemIndex(dropDownItemIndex - 1);
      if (event.key === "Enter" && dropDownItemIndex >= 0) {
        clickDropDownItem(dropDownList[dropDownItemIndex]);
        setDropDownItemIndex(-1);
      }
    }
  };

  useEffect(showDropDownList, [tagItem]);

  return (
    <div>
      <div className="resume_row">
        <div className="input_title">스킬</div>
        <div className="resume_input tag_div">
          <div className="tag_input">
            <input
              type="text"
              placeholder="Press enter to add tags"
              className="box_input"
              autoComplete="off"
              value={tagItem}
              onKeyUp={handleDropDownKey}
              tabIndex={2}
              onChange={(e) => {
                setTagItem(e.target.value);
                changeInputValue(e);
              }}
              onKeyDown={onKeyPress}
            />
            <span className="tag_delbtn" onClick={() => setTagItem("")}>
              &times;
            </span>
          </div>
          {isHavetagItem && (
            <ul>
              {dropDownList.length === 0 && <li>해당하는 단어가 없습니다</li>}
              {dropDownList.map((dropDownItem, dropDownIndex) => {
                return (
                  <li
                    key={dropDownIndex}
                    onClick={() => clickDropDownItem(dropDownItem)}
                    onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                    className={
                      dropDownItemIndex === dropDownIndex ? "selected" : ""
                    }
                  >
                    {dropDownItem}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="resume_input tagbox">
          {tagList.map((tagItem, index) => {
            return (
              <span key={index} className="tag_item">
                <span>{tagItem}</span>
                <button onClick={deleteTagItem}>X</button>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tag;
