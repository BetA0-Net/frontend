import React from "react";
import "./roiUpdate.css";
import { featureCard } from "../../constants/data";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback, useState } from "react";
import core_contract from "../../contracts/core_calls";
import core from "../../contracts/core";
import psp22_contract from "../../contracts/psp22_calls";
import toast from "react-hot-toast";
import useInterval from "../../hooks/useInterval";
import { randomString, delay, randomInt } from "../../utils";
import images from "../../constants/images";
import { clientAPI } from "../../api/client";

let overRates = [
  0, 0, 0, 0, 10368, 10478, 10591, 10706, 10824, 10944, 11067, 11193, 11321,
  11453, 11588, 11726, 11867, 12012, 12160, 12312, 12468, 12628, 12792, 12960,
  13133, 13310, 13493, 13680, 13873, 14071, 14275, 14485, 14701, 14924, 15153,
  15390, 15634, 15887, 16147, 16416, 16694, 16982, 17280, 17589, 17909, 18240,
  18584, 18942, 19313, 19700, 20102, 20520, 20957, 21413, 21888, 22386, 22906,
  23452, 24024, 24625, 25256, 25921, 26621, 27361, 28142, 28970, 29848, 30781,
  31774, 32833, 33965, 35178, 36481, 37884, 39400, 41041, 42826, 44772, 46904,
  49250, 51842, 54722, 57941, 61562, 65666, 70357, 75769, 82083, 89545, 98500,
  109444, 123125, 140714, 164166, 197000, 246250, 328333, 492500, 985000, 0,
];
let underRates = [
  0, 985000, 492500, 328333, 246250, 197000, 164166, 140714, 123125, 109444,
  98500, 89545, 82083, 75769, 70357, 65666, 61562, 57941, 54722, 51842, 49250,
  46904, 44772, 42826, 41041, 39400, 37884, 36481, 35178, 33965, 32833, 31774,
  30781, 29848, 28970, 28142, 27361, 26621, 25921, 25256, 24625, 24024, 23452,
  22906, 22386, 21888, 21413, 20957, 20520, 20102, 19700, 19313, 18942, 18584,
  18240, 17909, 17589, 17280, 16982, 16694, 16416, 16147, 15887, 15634, 15390,
  15153, 14924, 14701, 14485, 14275, 14071, 13873, 13680, 13493, 13310, 13133,
  12960, 12792, 12628, 12468, 12312, 12160, 12012, 11867, 11726, 11588, 11453,
  11321, 11193, 11067, 10944, 10824, 10706, 10591, 10478, 10368, 0, 0, 0, 0,
];
// let maxBet = 10;
let gameOn = false;

let audio_on = true;

let audioWin = new Audio("/win.wav");

const RoiUpdate = () => {
  const selectedAccount = useSelector((s) => s.substrate.selectedAccount);
  const extensionName = useSelector((s) => s.substrate.extensionName);
  const api = useSelector((s) => s.substrate.api);
  const [luckyNumber, setLuckyNumber] = useState(-1);
  const [position, setPosition] = useState(50);
  const [rollOver, setRollOver] = useState(true);
  const [numberOverRoll, setNumberOverRoll] = useState({
    min: 4,
    max: 98,
  });
  const [numberUnerRoll, setNumberUnderRoll] = useState({
    min: 1,
    max: 95,
  });
  const [maxBet, setMaxBet] = useState(10);

  const [betValue, setBetValue] = useState(10);

  const [AZeroBalance, setAZeroBalance] = useState(0);
  const [BETBalance, setBETBalance] = useState(0);
  const [poolBalance, setPoolBalance] = useState(0);
  const [rewardPoolBalance, setRewardPoolBalance] = useState(0);
  const [generalPoolBalance, setGeneralPoolBalance] = useState(0);
  const [generalPoolToken, setGeneralPoolToken] = useState(0);
  const [betPoolToken, setBetPoolToken] = useState(0);
  const [is_audio_on, setAudio] = useState(true);
  const [is_autoplay_on, setAutoplay] = useState(true);

  // get number
  const onload = async () => {
    const [
      minNumberOverRoll,
      maxNumberOverRoll,
      minNumberUnderRoll,
      maxNumberUnderRoll,
    ] = await Promise.all([
      core_contract.getMinNumberOverRoll(selectedAccount),
      core_contract.getMaxNumberOverRoll(selectedAccount),
      core_contract.getMinNumberUnderRoll(selectedAccount),
      core_contract.getMaxNumberUnderRoll(selectedAccount),
    ]);

    setNumberOverRoll({ min: minNumberOverRoll, max: maxNumberOverRoll });
    setNumberUnderRoll({ min: minNumberUnderRoll, max: maxNumberUnderRoll });
  };

  if (selectedAccount) {
    onload();
  }

  const loadMaxBet = async () => {
    const max_Bet = await core_contract.getMaxBet(selectedAccount);
    if (maxBet != max_Bet) {
      setMaxBet(max_Bet);
    }
  };

  setInterval(() => {
    if (selectedAccount) {
      loadMaxBet();
    }
  }, 1000);

  const setSliderStyle = (value) => {
    let sheets = document.styleSheets;
    //console.log(sheets);
    let selectorBefore = ".slider::before";
    let selectorAfter = ".slider::after";
    let replacementContent = '"after"';
    for (let sheet of sheets) {
      for (let rule of sheet.cssRules) {
        if (
          rule.selectorText == selectorBefore ||
          rule.selectorText == "input" + selectorBefore
        ) {
          //console.log(rule);
          rule.style["width"] = value + "%";
        } else if (
          rule.selectorText == selectorAfter ||
          rule.selectorText == "input" + selectorAfter
        ) {
          rule.style["width"] = 100 - value + "%";
        }
      }
    }
  };

  const onChangePosition = (value) => {
    setPosition(value);
    setSliderStyle(value);
  };

  const selectBetAmount = useCallback((option) => {
    console.log(AZeroBalance, maxBet);
    if (option == 1) {
      //all
      if (AZeroBalance > maxBet) {
        toast.error("Max Bet is " + maxBet + " AZERO");
        setBetValue(maxBet);
      } else {
        if (AZeroBalance > 0) setBetValue(AZeroBalance);
        else setBetValue(10);
      }
    } else {
      let new_betValue = betValue * option;
      if (new_betValue > maxBet) {
        toast.error("Max Bet is " + maxBet + " AZERO");
        setBetValue(maxBet);
      } else {
        setBetValue(new_betValue);
      }
    }
  });

  const onChangeBet = useCallback((e) => {
    const { value } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    let betValue = 0;
    if ((!isNaN(value) && reg.test(value)) || value === "" || value === "-") {
      betValue = parseFloat(value);
      if (betValue < 0) betValue = 1;
      if (betValue > maxBet) {
        toast.error("Max Bet is " + maxBet + " AZERO");
        setBetValue(maxBet);
      } else {
        setBetValue(betValue);
      }
    }
  });

  const getBalance = async () => {
    if (!api) return;
    const { nonce, data: balance } = await api.query.system.account(
      core.CONTRACT_ADDRESS
    );
    setPoolBalance(balance.free / 10 ** 12);

    try {
      if (selectedAccount != "") {
        const [rewardPoolAddress, generalPoolAddress, betPoolAddress] =
          await Promise.all([
            core_contract.getRewardPool(selectedAccount),
            core_contract.getGeneralPool(selectedAccount),
            core_contract.getBetPool(selectedAccount),
          ]);

        const [
          general_pool_bet,
          bet_pool_bet,
          generalPoolBalanceData,
          rewardPoolBalanceData,
          BET_balance,
        ] = await Promise.all([
          psp22_contract.balanceOf(selectedAccount, generalPoolAddress),
          psp22_contract.balanceOf(selectedAccount, betPoolAddress),
          rewardPoolAddress && api.query.system.account(rewardPoolAddress),
          generalPoolAddress && api.query.system.account(generalPoolAddress),
          psp22_contract.balanceOf(selectedAccount, selectedAccount),
        ]);

        setGeneralPoolToken(general_pool_bet);
        setBetPoolToken(bet_pool_bet);
        setBETBalance(BET_balance);

        const { _nonce, data: balance } = await api.query.system.account(
          selectedAccount
        );

        setAZeroBalance(balance.free / 10 ** 12);

        if (generalPoolBalanceData) {
          setGeneralPoolBalance(generalPoolBalanceData.data.free / 10 ** 12);
        }

        if (rewardPoolBalanceData) {
          setRewardPoolBalance(rewardPoolBalanceData.data.free / 10 ** 12);
        }
      }
    } catch (e) {
      console.error(e);
      toast.error("Load balance error");
    }
  };

  useEffect(() => {
    if (rollOver) {
      if (position < numberOverRoll.min) setPosition(numberOverRoll.min);
      else if (position > numberOverRoll.max) setPosition(numberOverRoll.max);
    } else {
      if (position > numberUnerRoll.max) setPosition(numberUnerRoll.max);
    }
  }, [rollOver]);

  useInterval(() => randomNumber(), 100);
  const randomNumber = async () => {
    if (gameOn) {
      setLuckyNumber(Math.floor(Math.random() * 99));
    }
  };

  useEffect(() => {
    getBalance();
    setSliderStyle(position);
  }, [selectedAccount, api]);
  const onRoll = async () => {
    if (selectedAccount == "") {
      toast.error("Please connect your wallet and select an account");
      return;
    }

    const bet = await core_contract.getBet(selectedAccount);

    if (bet) {
      gameOn = true;
      setLuckyNumber(-1);
      let finalized = await clientAPI("post", "/finalize", {
        player: selectedAccount,
      });

      console.log("finalized", finalized);

      if (!finalized) {
        toast.error("Something wrong with your roll");
        setLuckyNumber(-1);
        gameOn = false;
        await getBalance();
        return;
      }

      // finalize
      gameOn = false;
      setLuckyNumber(parseInt(finalized.random_number));
      if (finalized.is_win) {
        if (audio_on) {
          audioWin.play();
          toast("You won " + finalized.win_amount);
        } else toast("Try again next time");
      } else {
        toast("You lose");
      }

      await getBalance();
      return;
    }

    if (gameOn) {
      toast.error("Please wait till last roll completed");
      return;
    }

    if (betValue >= AZeroBalance) {
      toast.error("You dont have enough balance to roll");
      return;
    }

    gameOn = true;
    setLuckyNumber(-1);

    if (betValue < maxBet) {
      let played = await core_contract.play(
        selectedAccount,
        extensionName,
        betValue,
        position,
        rollOver
      );

      if (!played) {
        toast.error("Something wrong with your roll");
        setLuckyNumber(-1);
        gameOn = false;
        await getBalance();
        return;
      }
    } else {
      gameOn = false;
      toast.error("Not enough balance!");
    }

    getBalance();
    await delay(2000);
    let finalized = await clientAPI("post", "/finalize", {
      player: selectedAccount,
    });

    console.log("finalized", finalized);

    if (!finalized) {
      toast.error("Something wrong with your roll");
      setLuckyNumber(-1);
      gameOn = false;
      await getBalance();
      return;
    }

    // finalize
    gameOn = false;
    setLuckyNumber(parseInt(finalized.random_number));
    if (finalized.is_win) {
      if (audio_on) {
        audioWin.play();
        toast("You won " + finalized.win_amount);
      } else toast("Try again next time");
    } else {
      toast("You lose");
    }

    await getBalance();
  };

  const AudioSwitch = useCallback((e) => {
    setAudio(e.target.checked);
    console.log(e.target.checked);
    audio_on = e.target.checked;
  }, []);
  const AutoplaySwitch = useCallback((e) => {
    toast("This feature will come soon...");
  }, []);

  // console.log("maxbet", maxBet);

  return (
    <>
      <div className="feature--card-box">
        <div className="custom--container">
          <div className="feature--card-wrapper">
            <div className="feature--card-item">
              <h6 className="title">Prediction</h6>
              <p
                className={rollOver ? "count-numberOver" : "count-numberUnder"}
                style={{ textColor: rollOver ? "#ff5500" : "#0044FF" }}
              >
                {position}
              </p>
            </div>
            <div className="feature--card-item">
              <h6 className="title">Lucky Number</h6>
              <p className="count-number">
                {luckyNumber < 0 ? "-" : luckyNumber}
              </p>
            </div>
            <div className="feature--card-item">
              <h6 className="title">Pool Balance</h6>
              <p className="count-number">
                <span>{poolBalance.toFixed(3)}</span>
              </p>
            </div>

            <div className="feature--card-item">
              <h6 className="title">Reward Pool</h6>
              <p className="poolBalance">
                <span>{rewardPoolBalance.toFixed(3)}</span>{" "}
                <img
                  className="icon--azero"
                  src={images.azero_icon}
                  width="18px"
                  alt="AZERO"
                />
              </p>
              <p className="poolBalance">
                <span
                  style={{
                    fontSize: "72px",
                  }}
                >
                  -
                </span>
              </p>
            </div>

            <div className="feature--card-item">
              <h6 className="title">General Pool</h6>
              <p className="poolBalance">
                <span>{generalPoolToken.toFixed(3)} </span>
                <span className="typeBalance">BET</span>
              </p>
              <p className="poolBalance">
                <span>{generalPoolBalance.toFixed(3)}</span>{" "}
                <img
                  className="icon--azero"
                  src={images.azero_icon}
                  width="18px"
                  alt="AZERO"
                />
              </p>
            </div>

            <div className="feature--card-item">
              <h6 className="title">Bet Pool</h6>
              <p className="poolBalance">
                <span>{betPoolToken.toFixed(3)}</span>{" "}
                <span className="typeBalance">BET</span>
              </p>
              <p className="poolBalance">
                <span
                  style={{
                    fontSize: "72px",
                  }}
                >
                  -
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="ROI--section">
        <div className="custom--container">
          <div className="ROI--wrapper">
            <div className="ROI--rangebox">
              <ul className="ROI--range-head">
                <li
                  className={`${
                    !rollOver ? "active" : null
                  } ROI--range-headItemsUnder`}
                  onClick={() => setRollOver(false)}
                >
                  Roll under
                </li>
                <li
                  className={`${
                    rollOver ? "active" : null
                  } ROI--range-headItemsOver`}
                  onClick={() => setRollOver(true)}
                >
                  Roll over
                </li>
              </ul>

              <div className="ROI--range-slidebox">
                <input
                  onChange={(e) => onChangePosition(e.target.value)}
                  type="range"
                  min={rollOver ? numberOverRoll.min : numberUnerRoll.min}
                  max={rollOver ? numberOverRoll.max : numberUnerRoll.max}
                  value={position}
                  className="slider"
                />
              </div>
            </div>

            <div className="ROI--rangeUpdateBox">
              <div className="ROI--right-content">
                <div className="ROI--right--contLeft">
                  <div className="ROI--cont-box">
                    <ul className="title--list">
                      <li className="title--list-item">Bet Amount</li>
                      <li
                        className="title--list-item"
                        onClick={() => selectBetAmount(2)}
                      >
                        x2
                      </li>
                      <li
                        className="title--list-item"
                        onClick={() => selectBetAmount(0.5)}
                      >
                        1/2
                      </li>
                      <li
                        className="title--list-item"
                        onClick={() => selectBetAmount(1)}
                      >
                        Max
                      </li>
                    </ul>

                    <span className="ROI--input-updateBox">
                      <input
                        type="number"
                        value={betValue}
                        defaultValue="0.1"
                        onChange={onChangeBet}
                        className="ROI--input-updateBox"
                      />
                    </span>
                  </div>
                  <div className="ROI--cont-box">
                    <h5 className="title">Payout on Win</h5>
                    <span className="ROI--input-updateBox">
                      {rollOver
                        ? (
                            (parseFloat(betValue) *
                              parseInt(overRates[parseInt(position)])) /
                            10000
                          ).toFixed(4)
                        : (
                            (parseFloat(betValue) *
                              parseInt(underRates[parseInt(position)])) /
                            10000
                          ).toFixed(4)}
                    </span>
                  </div>
                </div>
                <div className="ROI--right--contRight">
                  <div className="ROI--cont-box">
                    <h5 className="title">Win Chance</h5>
                    <span className="ROI--input-updateBox">
                      {rollOver
                        ? (99 - position).toString()
                        : position.toString()}
                      %
                    </span>
                  </div>
                  <div className="ROI--cont-box">
                    <h5 className="title">Multiplier</h5>
                    <span className="ROI--input-updateBox">
                      {rollOver
                        ? parseInt(overRates[parseInt(position)]) / 10000
                        : parseInt(underRates[parseInt(position)]) / 10000}
                      X
                    </span>
                  </div>
                </div>
              </div>
              <div className="ROI--middle-content">
                <div className="ROI--middle-swipe-btnbox"></div>
                <a
                  className={
                    rollOver
                      ? "btn-styled ROI--btn-style"
                      : "btn-styled ROI--btn-style-under"
                  }
                  onClick={() => onRoll()}
                >
                  {rollOver ? "roll over" : "roll under"} {position}
                </a>

                <div class="rowSetting">
                  <div class="columnSetting">
                    <p
                      style={{
                        color: "rgba(255, 255, 255, .7)",
                        fontSize: "16px",
                        fontWeight: "500",
                        marginTop: "10px",
                        marginBottom: "5px",
                      }}
                    >
                      Audio
                    </p>
                    <label class="switch">
                      <input
                        type="checkbox"
                        onChange={(e) => AudioSwitch(e)}
                        checked={is_audio_on}
                      />
                      <span class="sliderAudio round"></span>
                    </label>
                  </div>
                  {/* <div class="columnSetting">
                    <p
                      style={{
                        color: "rgba(255, 255, 255, .7)",
                        fontSize: "16px",
                        fontWeight: "500",
                        marginTop: "10px",
                        marginBottom: "5px",
                      }}
                    >
                      Autoplay
                    </p>
                    <label class="switch">
                      <input
                        type="checkbox"
                        onChange={(e) => AutoplaySwitch(e)}
                        checked={is_autoplay_on}
                      />
                      <span class="sliderAudio round"></span>
                    </label>
                  </div> */}
                </div>
              </div>
              <div className="ROI--left-content">
                <div className="ROI--cont-box">
                  <h5 className="title">Your AZero Balance</h5>
                  <p className="ROI--input-updateBox">
                    {AZeroBalance ? AZeroBalance.toFixed(3) : 0}{" "}
                    <span className="numberName">Azero</span>
                  </p>
                </div>
                <div className="ROI--cont-box">
                  <h5 className="title">Your BET Tokens</h5>
                  <span className="ROI--input-updateBox">
                    {BETBalance ? BETBalance.toFixed(3) : 0}{" "}
                    <span className="numberName">BET</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoiUpdate;
