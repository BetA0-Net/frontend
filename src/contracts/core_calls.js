import BN from "bn.js";
import toast from "react-hot-toast";
import { web3FromSource } from "../wallets/extension-dapp";
import { getEstimatedGas, readOnlyGasLimit } from "../utils";

// multiPlay
import { Keyring } from "@polkadot/api";

import { isValidAddressPolkadotAddress } from "../utils";
import { ContractPromise } from "@polkadot/api-contract";

let contract;

export const setCoreContract = (api, data) => {
  contract = new ContractPromise(
    api,
    data?.CONTRACT_ABI,
    data?.CONTRACT_ADDRESS
  );
};

// get number
async function getMinNumberOverRoll(caller_account) {
  if (!contract || !caller_account) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const azero_value = 0;
  //console.log(contract);

  try {
    const { result, output } = await contract.query[
      "betA0CoreTrait::getMinNumberOverRoll"
    ](caller_account, { value: azero_value, gasLimit });
    if (result.isOk) {
      //console.log(output.toHuman());
      const number = output.toHuman();
      return parseInt(number.Ok);
    }
  } catch (e) {
    return null;
  }

  return null;
}

async function getMaxNumberOverRoll(caller_account) {
  if (!contract || !caller_account) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const azero_value = 0;
  //console.log(contract);

  try {
    const { result, output } = await contract.query[
      "betA0CoreTrait::getMaxNumberOverRoll"
    ](caller_account, { value: azero_value, gasLimit });
    if (result.isOk) {
      //console.log(output.toHuman());
      const number = output.toHuman();
      return parseInt(number.Ok);
    }
  } catch (e) {
    return null;
  }

  return null;
}

async function getMinNumberUnderRoll(caller_account) {
  if (!contract || !caller_account) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const azero_value = 0;
  //console.log(contract);

  try {
    const { result, output } = await contract.query[
      "betA0CoreTrait::getMinNumberUnderRoll"
    ](caller_account, { value: azero_value, gasLimit });
    if (result.isOk) {
      //console.log(output.toHuman());
      const number = output.toHuman();
      return parseInt(number.Ok);
    }
  } catch (e) {
    return null;
  }

  return null;
}

async function getMaxNumberUnderRoll(caller_account) {
  if (!contract || !caller_account) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const azero_value = 0;
  //console.log(contract);

  try {
    const { result, output } = await contract.query[
      "betA0CoreTrait::getMaxNumberUnderRoll"
    ](caller_account, { value: azero_value, gasLimit });
    if (result.isOk) {
      //console.log(output.toHuman());
      const number = output.toHuman();
      return parseInt(number.Ok);
    }
  } catch (e) {
    return null;
  }

  return null;
}

async function getOverRates(caller_account) {
  if (!contract || !caller_account) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const azero_value = 0;
  //console.log(contract);

  try {
    const { result, output } = await contract.query[
      "betA0CoreTrait::getOverRates"
    ](caller_account, { value: azero_value, gasLimit });
    if (result.isOk) {
      //console.log(output.toHuman());
      return output.toHuman();
    }
  } catch (e) {
    return null;
  }

  return null;
}
async function getUnderRates(caller_account) {
  if (!contract || !caller_account) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const azero_value = 0;
  //console.log(contract);

  try {
    const { result, output } = await contract.query[
      "betA0CoreTrait::getUnderRates"
    ](caller_account, { value: azero_value, gasLimit });
    if (result.isOk) {
      //console.log(output.toHuman());
      return output.toHuman();
    }
  } catch (e) {
    return null;
  }

  return null;
}

//get_max_bet
async function getMaxBet(caller_account) {
  if (!contract || !caller_account) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const azero_value = 0;
  //console.log(contract);

  try {
    const { result, output } = await contract.query[
      "betA0CoreTrait::getMaxBet"
    ](caller_account, {
      value: azero_value,
      gasLimit,
    });
    if (result.isOk) {
      const a = output.toHuman().Ok.replace(/\,/g, "");
      return a / 10 ** 12;
    }
  } catch (e) {
    return null;
  }

  return null;
}

//get_bet
async function getBet(caller_account) {
  if (!contract || !caller_account) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const azero_value = 0;
  //console.log(contract);

  try {
    const { result, output } = await contract.query["betA0CoreTrait::getBet"](
      caller_account,
      {
        value: azero_value,
        gasLimit,
      },
      caller_account
    );
    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (e) {
    return null;
  }

  return null;
}

//get reward pool
export const getRewardPool = async (caller_account) => {
  if (!contract || !caller_account) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const azero_value = 0;
  //console.log(contract);

  try {
    const { result, output } = await contract.query[
      "betA0CoreTrait::getRewardPool"
    ](caller_account, {
      value: azero_value,
      gasLimit,
    });
    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (e) {
    return null;
  }

  return null;
};

//get general pool
export const getGeneralPool = async (caller_account) => {
  if (!contract || !caller_account) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const azero_value = 0;
  //console.log(contract);

  try {
    const { result, output } = await contract.query[
      "betA0CoreTrait::getGeneralPool"
    ](caller_account, {
      value: azero_value,
      gasLimit,
    });
    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (e) {
    return null;
  }

  return null;
};

//get bet pool
export const getBetPool = async (caller_account) => {
  if (!contract || !caller_account) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const azero_value = 0;
  //console.log(contract);

  try {
    const { result, output } = await contract.query[
      "betA0CoreTrait::getBetPool"
    ](caller_account, {
      value: azero_value,
      gasLimit,
    });
    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (e) {
    return null;
  }

  return null;
};

async function play(caller_account, source, amount, bet_number, is_over) {
  if (!contract || !caller_account) {
    return null;
  }

  if (parseInt(amount) <= 0 || !isValidAddressPolkadotAddress(caller_account)) {
    toast.error(`invalid inputs`);
    return;
  }
  let unsubscribe;
  let gasLimit;

  if (is_over) is_over = 1;
  else is_over = 0;

  const injector = await web3FromSource(source);
  let value = new BN(amount * 10 ** 6).mul(new BN(10 ** 6)).toString();

  gasLimit = await getEstimatedGas(
    caller_account,
    contract,
    value,
    "play",
    bet_number,
    is_over
  );

  await contract.tx["play"]({ gasLimit, value }, bet_number, is_over)
    .signAndSend(
      caller_account,
      { signer: injector.signer },
      async ({ status, dispatchError }) => {
        if (dispatchError) {
          if (dispatchError.isModule) {
            console.log(dispatchError);
            toast.error(`There is some error with your request`);
          } else {
            console.log("dispatchError", dispatchError.toString());
          }
        }

        if (status) {
          const statusText = Object.keys(status.toHuman())[0];
          if (statusText === "0") toast.success(`Placing Bet ...`);
        }
      }
    )
    .then((unsub) => (unsubscribe = unsub))
    .catch((e) => console.log("e", e));
  return unsubscribe;
}

async function finalize(caller_account, source) {
  if (!contract || !caller_account) {
    return null;
  }

  let unsubscribe;
  let gasLimit;

  const injector = await web3FromSource(source);
  const value = 0;

  gasLimit = await getEstimatedGas(
    caller_account,
    contract,
    value,
    "finalize",
    caller_account
  );

  await contract.tx
    .finalize({ gasLimit, value }, caller_account)
    .signAndSend(
      caller_account,
      { signer: injector.signer },
      async ({ status, dispatchError }) => {
        if (dispatchError) {
          if (dispatchError.isModule) {
            toast.error(`There is some error with your request`);
          } else {
            console.log("dispatchError", dispatchError.toString());
          }
        }

        if (status) {
          const statusText = Object.keys(status.toHuman())[0];
          if (statusText === "0") toast.success(`Finalize Bet ...`);
        }
      }
    )
    .then((unsub) => (unsubscribe = unsub))
    .catch((e) => console.log("e", e));
  return unsubscribe;
}

// test multiPlay
async function multiPlay(caller_account, amount, bet_number, is_over) {
  if (!contract || !caller_account.address) {
    return null;
  }

  if (
    parseInt(amount) <= 0 ||
    !isValidAddressPolkadotAddress(caller_account.address)
  ) {
    toast.error(`invalid inputs`);
    return;
  }

  let unsubscribe;
  let gasLimit;

  if (is_over) is_over = 1;
  else is_over = 0;

  let value = new BN(amount * 10 ** 6).mul(new BN(10 ** 6)).toString();

  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = caller_account.phrase;
  const keypair = keyring.createFromUri(PHRASE);

  gasLimit = await getEstimatedGas(
    caller_account.address,
    contract,
    value,
    "play",
    bet_number,
    is_over
  );

  await contract.tx["play"]({ gasLimit, value }, bet_number, is_over)
    .signAndSend(
      keypair,
      { signer: keypair.address },
      async ({ status, dispatchError }) => {
        if (dispatchError) {
          if (dispatchError.isModule) {
            console.log(dispatchError);
            toast.error(`There is some error with your request`);
          } else {
            console.log("dispatchError", dispatchError.toString());
          }
        }

        if (status) {
          const statusText = Object.keys(status.toHuman())[0];
          if (statusText === "0") toast.success(`Placing Bet ...`);
        }
      }
    )
    .then((unsub) => (unsubscribe = unsub))
    .catch((e) => console.log("e", e));
  return unsubscribe;
}

async function MultiFinalize(caller_account) {
  if (!contract || !caller_account.address) {
    return null;
  }

  let unsubscribe;
  let gasLimit;

  const value = 0;

  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = caller_account.phrase;
  const keypair = keyring.createFromUri(PHRASE);

  gasLimit = await getEstimatedGas(
    caller_account.address,
    contract,
    value,
    "finalize",
    caller_account.address
  );

  await contract.tx
    .finalize({ gasLimit, value }, caller_account.address)
    .signAndSend(
      keypair,
      { signer: keypair.address },
      async ({ status, dispatchError }) => {
        if (dispatchError) {
          if (dispatchError.isModule) {
            toast.error(`There is some error with your request`);
          } else {
            console.log("dispatchError", dispatchError.toString());
          }
        }

        if (status) {
          const statusText = Object.keys(status.toHuman())[0];
          if (statusText === "0") toast.success(`Finalize Bet ...`);
        }
      }
    )
    .then((unsub) => (unsubscribe = unsub))
    .catch((e) => console.log("e", e));
  return unsubscribe;
}

async function tranferTokenToPool(caller_account, source, poolAddress, amount) {
  if (!contract || !caller_account) {
    return null;
  }

  let unsubscribe;
  let gasLimit;

  const value = 0;
  const injector = await web3FromSource(source);
  gasLimit = await getEstimatedGas(
    caller_account,
    contract,
    value,
    "betA0CoreTrait::tranferTokenToPool",
    poolAddress,
    amount
  );

  await contract.tx["betA0CoreTrait::tranferTokenToPool"](
    { gasLimit, value },
    poolAddress,
    amount
  )
    .signAndSend(
      caller_account,
      { signer: injector.signer },
      async ({ status, dispatchError }) => {
        if (dispatchError) {
          if (dispatchError.isModule) {
            toast.error(`There is some error with your request`);
          } else {
            console.log("dispatchError", dispatchError.toString());
          }
        }

        if (status) {
          const statusText = Object.keys(status.toHuman())[0];
          if (statusText === "0") toast.success(`Tranfer token ...`);
        }
      }
    )
    .then((unsub) => (unsubscribe = unsub))
    .catch((e) => console.log("e", e));
  return unsubscribe;
}

const contract_calls = {
  getMinNumberOverRoll,
  getMaxNumberOverRoll,
  getMinNumberUnderRoll,
  getMaxNumberUnderRoll,
  getOverRates,
  getUnderRates,
  getMaxBet,
  play,
  finalize,
  multiPlay,
  MultiFinalize,
  getBet,
  getRewardPool,
  getGeneralPool,
  getBetPool,
  tranferTokenToPool,
};

export default contract_calls;
