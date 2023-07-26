import React from "react";
import "./MultiPlayer.css";
import { featureCard } from "../../constants/data";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback, useState } from "react";
import core_contract from "../../contracts/core_calls";
import core from "../../contracts/core";
import psp22_contract from "../../contracts/psp22_calls";
import toast from "react-hot-toast";
import useInterval from "../../hooks/useInterval";
import { randomString, delay, randomInt } from "../../utils";
import { clientAPI } from "../../api/client";
import { Button, Input } from "antd";

const MultiPlayer = () => {
  const selectedAccount = useSelector((s) => s.substrate.selectedAccount);
  const extensionName = useSelector((s) => s.substrate.extensionName);
  const api = useSelector((s) => s.substrate.api);

  const [position, setPosition] = useState(50);

  const [maxBet, setMaxBet] = useState(10);

  const [AZeroBalance, setAZeroBalance] = useState(0);
  const [BETBalance, setBETBalance] = useState(0);
  const [poolBalance, setPoolBalance] = useState(0);

  const [playerCount, SetPlayerCount] = useState(10);

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

  const getBalance = async () => {
    if (!api) return;
    const { nonce, data: balance } = await api.query.system.account(
      core.CONTRACT_ADDRESS
    );
    setPoolBalance(balance.free / 10 ** 12);

    if (selectedAccount != "") {
      const { _nonce, data: balance } = await api.query.system.account(
        selectedAccount
      );

      setAZeroBalance(balance.free / 10 ** 12);

      let BET_balance = await psp22_contract.balanceOf(
        selectedAccount,
        selectedAccount
      );

      setBETBalance(BET_balance);
    }
  };

  useEffect(() => {
    getBalance();
  }, [selectedAccount, api]);

  //   simulate
  const listAccount = [
    {
      id: 1,
      address: "5FHC8grnx32YBT8uZ38TNFPAkcYcsnEV5JE13wiTYwuevZhd",
      phrase:
        "crisp mesh evoke sentence cake flag mountain wrap kit universe exercise rival",
    },
    {
      id: 2,
      address: "5CSfTDR3YhLbv275XpN6esR7R7BFjZMobq5Dgiyw15LW4UBF",
      phrase:
        "jar hope gauge record library midnight obscure angry surge notable gallery museum",
    },
    {
      id: 3,
      address: "5HnRgW8tCjmajfVHL3oUaJPWpC4qMbKH3sGZ1ba9jTvf6C4U",
      phrase:
        "tag year bid category trigger dentist chaos spawn phone enrich option employ",
    },
  ];

  const simulateGame = async (playerCount) => {
    for (let i = 0; i < playerCount; i++) {
      toast(`Player ${i + 1} start play`);
      await simulatePlayer();
      toast.success(`Player ${i + 1} played`)
    }
  };

  const simulatePlayer = async () => {
    const shuffledArray = listAccount.sort(() => Math.random() - 0.5);
    const selectedAccount = shuffledArray[0];
    const betValue = Math.floor(Math.random() * Math.floor(maxBet)) + 1;
    const position = Math.floor(Math.random() * 90) + 4;
    const rollOver = Math.random() < 0.5;

    const bet = await core_contract.getBet(selectedAccount);

    if (bet) {
      toast.error("Bet exist!");
      return;
    }

    if (betValue >= AZeroBalance) {
      toast.error("You dont have enough balance to roll");
      return;
    }

    if (betValue < maxBet) {
      let played = await core_contract.multiPlay(
        selectedAccount,
        betValue,
        position,
        rollOver
      );

      if (!played) {
        toast.error("Something wrong with your roll");
        await getBalance();
        return;
      }
    } else {
      toast.error("Not enough balance!");
    }

    getBalance();
    await delay(2000);
    let finalized = await clientAPI("post", "/finalize", {
      player: selectedAccount.address,
    });

    if (!finalized) {
      toast.error("Something wrong with your roll");
      await getBalance();
      return;
    }

    await getBalance();

    console.log(
      `playerAddress: ${selectedAccount.address}`,
      `betNumber:${position}`,
      `betValue: ${betValue}`,
      `isOver: ${rollOver}`,
      finalized
    );
  };

  console.log(maxBet);

  return (
    <>
      <section className="withdraw--section">
        <div className="custom--container">
          <div className="withdraw--wrapperbox">
            <div className="withdraw--contentbox">
              <div className="contentbox-withdraw">
                <input
                  onChange={(e) => SetPlayerCount(e.target.value)}
                  className="Multiplayer--input"
                ></input>
                <Button onClick={() => simulateGame(playerCount)}>
                  Test {playerCount} Player
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MultiPlayer;
