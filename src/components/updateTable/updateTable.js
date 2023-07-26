import React, { useEffect, useState, useCallback, useRef } from "react";
import images from "../../constants/images";
import { useDispatch, useSelector } from "react-redux";
import { truncateStr, numberWithCommas } from "../../utils";
import "./updateTable.css";
import { clientAPI } from "../../api/client";
import useInterval from "../../hooks/useInterval";
import toast from "react-hot-toast";

let currentPage = 1;
const UpdateTable = () => {
  const selectedAccount = useSelector((s) => s.substrate.selectedAccount);
  const [uiPage, setUIPage] = useState(1);
  const [active, setActive] = useState("all");
  const [data, setdata] = useState([]);
  const getData = async () => {
    if (active === "mybets") {
      if (selectedAccount == "") {
        setdata([]);
        return;
      }
      let data = await clientAPI("post", "/getEventsByPlayer", {
        player: selectedAccount,
        limit: 10,
        offset: 10 * (currentPage - 1),
      });
      //console.log(data);
      setdata(data);
    } else if (active === "all") {
      let data = await clientAPI("post", "/getEvents", {
        limit: 10,
        offset: 10 * (currentPage - 1),
      });
      // console.log(data);
      setdata(data);
    } else if (active === "rarewins") {
      let data = await clientAPI("post", "/getRareWins", {
        limit: 10,
        offset: 10 * (currentPage - 1),
      });
      // console.log(data);
      setdata(data);
    }
  };
  useInterval(() => getData(), 3000);

  useEffect(() => {
    getData();
  }, [active]);
  const nextPage = useCallback((option) => {
    if (currentPage < 5) currentPage++;
    else toast("Only 5 pages can be displayed");
    setUIPage(currentPage);
    getData();
  });
  const previousPage = useCallback((option) => {
    if (currentPage > 1) currentPage--;
    setUIPage(currentPage);
    getData();
  });

  // copy text
  const handleCopytext = (text) => {
    navigator.clipboard.writeText(`${text}`);
    if (text) toast.success("Copy success!");
  };

  return (
    <>
      <section className="Update--table-box">
        <div className="update--table-boxWrapper">
          <ul className="update--table-filterbox">
            <li
              className={`${
                active === "mybets" && "active"
              }  update-table-filterItems`}
              onClick={() => setActive("mybets")}
            >
              My Bets
            </li>
            <li
              className={`${
                active === "all" && "active"
              }    update-table-filterItems`}
              onClick={() => setActive("all")}
            >
              All Bets
            </li>
            {/*<li className={`${active === 'highroller' && 'active'}  update-table-filterItems `} onClick={() => setActive('highroller')}>High Rollers</li>*/}
            <li
              className={`${
                active === "rarewins" && "active"
              }  update-table-filterItems`}
              onClick={() => setActive("rarewins")}
            >
              Rare Wins
            </li>
          </ul>
          <div className="update---table--content-box">
            <table className="update--ROI--table-box">
              <tr>
                <th>Player</th>
                <th>Block Number</th>
                <th>Bet Amount</th>
                <th>Type</th>
                <th>Prediction</th>
                <th>Result</th>
                <th>Won Amount</th>
              </tr>

              {data.map(
                ({
                  blockNumber,
                  player,
                  is_over,
                  random_number,
                  bet_number,
                  bet_amount,
                  win_amount,
                  _id,
                }) => (
                  <tr key={_id}>
                    <td>
                      <span
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => handleCopytext(`${player}`)}
                      >
                        {truncateStr(player, 9)}
                      </span>
                    </td>
                    <td>
                      <span
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          handleCopytext(
                            `${blockNumber ? numberWithCommas(blockNumber) : 0}`
                          )
                        }
                      >
                        {blockNumber ? numberWithCommas(blockNumber) : 0}
                      </span>
                    </td>

                    <td>
                      {bet_amount}{" "}
                      <img
                        className="icon--azero"
                        src={images.azero_icon}
                        width="12px"
                        alt="AZERO"
                      />{" "}
                    </td>
                    <td>
                      {is_over ? (
                        <span style={{ color: "#2196F3" }}>OVER</span>
                      ) : (
                        <span style={{ color: "#ff5500" }}>UNDER</span>
                      )}
                    </td>
                    <td>{bet_number}</td>
                    <td>
                      {is_over && win_amount > 0 ? (
                        <span style={{ color: "#2196F3" }}>
                          {random_number}
                        </span>
                      ) : is_over && !win_amount ? (
                        <span style={{ color: "#ff5500" }}>
                          {random_number}
                        </span>
                      ) : null}
                      {!is_over && win_amount > 0 ? (
                        <span style={{ color: "#ff5500" }}>
                          {random_number}
                        </span>
                      ) : !is_over && !win_amount ? (
                        <span style={{ color: "#2196F3" }}>
                          {random_number}
                        </span>
                      ) : null}
                    </td>
                    <td>
                      {" "}
                      {win_amount}{" "}
                      {win_amount > 0 ? (
                        <img
                          className="icon--azero"
                          src={images.azero_icon}
                          width="12px"
                          alt="AZERO"
                        />
                      ) : null}{" "}
                    </td>
                  </tr>
                )
              )}
            </table>

            <table className="update--ROI--table-box-sm">
              {data.map(
                ({
                  blockNumber,
                  player,
                  is_over,
                  random_number,
                  bet_number,
                  bet_amount,
                  win_amount,
                  _id,
                }) => (
                  <tr key={_id}>
                    <td colSpan="7">
                      <div className="ROI--wrapper--table">
                        <div className="item">
                          <div className="title">Player</div>
                          <div className="content">
                            {" "}
                            <span
                              style={{
                                cursor: "pointer",
                              }}
                              onClick={() => handleCopytext(`${player}`)}
                            >
                              {truncateStr(player, 5)}
                            </span>
                          </div>
                        </div>
                        <div className="item">
                          <div className="title">Block Number</div>
                          <div className="content">
                            <span
                              style={{
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                handleCopytext(
                                  `${
                                    blockNumber
                                      ? numberWithCommas(blockNumber)
                                      : 0
                                  }`
                                )
                              }
                            >
                              {blockNumber ? numberWithCommas(blockNumber) : 0}
                            </span>
                          </div>
                        </div>
                        <div className="item">
                          <div className="title">Bet Amount</div>
                          <div className="content">
                            {bet_amount}{" "}
                            <img
                              className="icon--azero"
                              src={images.azero_icon}
                              width="12px"
                              alt="AZERO"
                            />{" "}
                          </div>
                        </div>
                        <div className="item">
                          <div className="title">Type</div>
                          <div className="content">
                            {is_over ? (
                              <span style={{ color: "#2196F3" }}>OVER</span>
                            ) : (
                              <span style={{ color: "#ff5500" }}>UNDER</span>
                            )}
                          </div>
                        </div>
                        <div className="item">
                          <div className="title">Prediction</div>
                          <div className="content">{bet_number}</div>
                        </div>
                        <div className="item">
                          <div className="title">Result</div>
                          <div className="content">
                            {is_over && win_amount > 0 ? (
                              <span style={{ color: "#2196F3" }}>
                                {random_number}
                              </span>
                            ) : is_over && !win_amount ? (
                              <span style={{ color: "#ff5500" }}>
                                {random_number}
                              </span>
                            ) : null}
                            {!is_over && win_amount > 0 ? (
                              <span style={{ color: "#ff5500" }}>
                                {random_number}
                              </span>
                            ) : !is_over && !win_amount ? (
                              <span style={{ color: "#2196F3" }}>
                                {random_number}
                              </span>
                            ) : null}
                          </div>
                        </div>
                        {win_amount ? (
                          <div className="item">
                            <div className="title">Won Amount</div>
                            <div className="content">
                              {" "}
                              {win_amount}{" "}
                              {win_amount > 0 ? (
                                <img
                                  className="icon--azero"
                                  src={images.azero_icon}
                                  width="12px"
                                  alt="AZERO"
                                />
                              ) : null}{" "}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </td>
                  </tr>
                )
              )}
            </table>
          </div>
          <ul className="peginetion--contBox">
            <li className="peginetion-items">
              <a onClick={() => previousPage()} className="peginetion-link">
                <img
                  className="img.prevIcons"
                  src={images.angleRight}
                  alt="angleRight"
                />
              </a>
            </li>
            <li className="peginetion-items peginetion-item-center">
              <span style={{ color: "white" }}>{uiPage}</span>
            </li>
            <li className="peginetion-items">
              <a onClick={() => nextPage()} className="peginetion-link">
                <img
                  className="img.prevIcons"
                  src={images.angleLeft}
                  alt="angleRight"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default UpdateTable;
