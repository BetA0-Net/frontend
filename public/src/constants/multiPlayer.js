import core_contract from "../contracts/core_calls";

const playerCount = 10;

//   simulate
const listAccount = [
  {
    id: 1,
    address: "5FHC8grnx32YBT8uZ38TNFPAkcYcsnEV5JE13wiTYwuevZhd",
    phrase: "crisp mesh evoke sentence cake flag mountain wrap kit universe exercise rival"
  },
  {
    id: 2,
    address: "5CSfTDR3YhLbv275XpN6esR7R7BFjZMobq5Dgiyw15LW4UBF",
    phrase: "jar hope gauge record library midnight obscure angry surge notable gallery museum"
  },
  {
    id: 3,
    address: "5HnRgW8tCjmajfVHL3oUaJPWpC4qMbKH3sGZ1ba9jTvf6C4U",
    phrase: "tag year bid category trigger dentist chaos spawn phone enrich option employ"
  }
];

const simulateGame = async (playerCount) => {
  for (let i = 0; i < playerCount; i++) {
    toast(`Player ${i + 1} play`);
    await simulatePlayer();
  }
};

console.log(listAccount.sort(() => Math.random() - 0.5));


const simulatePlayer = async () => {
  const shuffledArray = listAccount.sort(() => Math.random() - 0.5);
  const selectedAccount = shuffledArray[0];
  const betValue = Math.floor(Math.random() * Math.floor(maxBet)) + 1;
  const position = Math.floor(Math.random() * 90) + 4;
  const rollOver = Math.random() < 0.5;

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
    player: selectedAccount,
  });

  if (!finalized) {
    toast.error("Something wrong with your roll");
    await getBalance();
    return;
  }

  await getBalance();
};

// simulateGame(playerCount);