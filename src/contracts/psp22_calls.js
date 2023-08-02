import BN from "bn.js";
import toast from "react-hot-toast";
import { web3FromSource } from "../wallets/extension-dapp";
import { getEstimatedGas, readOnlyGasLimit } from "../utils";

import { isValidAddressPolkadotAddress } from "../utils";
import { ContractPromise } from "@polkadot/api-contract";

let contract;

export const setPSP22Contract = (api, data) => {
  contract = new ContractPromise(
    api,
    data?.CONTRACT_ABI,
    data?.CONTRACT_ADDRESS
  );
};

async function balanceOf(caller_account, account) {
  if (!contract || !caller_account) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);

  const azero_value = 0;

  if (!isValidAddressPolkadotAddress(account)) {
    toast.error(`invalid account`);
    return;
  }
  try {
    const { result, output } = await contract.query["psp22::balanceOf"](
      caller_account,
      { value: azero_value, gasLimit },
      account
    );
    if (result.isOk) {
      // console.log(output.toHuman());
      const a = output.toHuman().Ok.replace(/\,/g, "");
      return a / 10 ** 12;
    }
  } catch (e) {
    console.log(e);
    return null;
  }

  return null;
}

// withdraw
async function withdraw(caller_account, source, amount) {
  if (!contract || !caller_account) {
    return null;
  }

  if (parseInt(amount) <= 0) {
    toast.error(`invalid inputs`);
    return;
  }

  let unsubscribe;
  let gasLimit;

  const value = 0;
  const injector = await web3FromSource(source);
  gasLimit = await getEstimatedGas(
    caller_account,
    contract,
    value,
    "withdraw",
    amount
  );

  await contract.tx
    .withdraw(
      { gasLimit, value },
      new BN(amount * 10 ** 6).mul(new BN(10 ** 6)).toString()
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
          toast.success(
            `Withdraw ${
              statusText === "0" ? "started" : statusText.toLowerCase()
            }.`
          );
        }
      }
    )
    .then((unsub) => (unsubscribe = unsub))
    .catch((e) => console.log("e", e));
  return unsubscribe;
}

// check owner
async function isOwner(caller_account) {
  if (!contract || !caller_account) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);

  const azero_value = 0;

  try {
    const { result, output } = await contract.query["ownable::owner"](
      caller_account,
      { value: azero_value, gasLimit }
    );
    if (result.isOk) {
      return output.toHuman();
    }
  } catch (e) {
    console.log(e);
    return null;
  }
}

// change state contract
/// check state
async function pausable(caller_account) {
  if (!contract || !caller_account) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);

  const azero_value = 0;

  try {
    const { result, output } = await contract.query["pausable::paused"](
      caller_account,
      { value: azero_value, gasLimit }
    );
    if (result.isOk) {
      return output.toHuman();
    }
  } catch (e) {
    console.log(e);
    return null;
  }
}

/// change state
async function changeState(caller_account, source) {
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
    "changeState"
  );

  await contract.tx
    .changeState({ gasLimit, value })
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
          if (statusText === "0") toast.success(`Change state ...`);
        }
      }
    )
    .then((unsub) => (unsubscribe = unsub))
    .catch((e) => console.log("e", e));
  return unsubscribe;
}

// set minter
async function setMinter(caller_account, source, account) {
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
    "setMinter",
    account
  );

  await contract.tx
    .setMinter({ gasLimit, value }, account)
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
          if (statusText === "0") toast.success(`Set minter ...`);
        }
      }
    )
    .then((unsub) => (unsubscribe = unsub))
    .catch((e) => console.log("e", e));
  return unsubscribe;
}

// allowance
async function allowance(caller_account, owner, spender) {
  if (!contract || !caller_account) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);

  const azero_value = 0;

  try {
    const { result, output } = await contract.query["psp22::allowance"](
      caller_account,
      { value: azero_value, gasLimit },
      owner,
      spender
    );
    if (result.isOk) {
      return output.toHuman();
    }
  } catch (e) {
    console.log(e);
    return null;
  }
}

// transfer form
async function transferFrom(caller_account, source, from, to, amount) {
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
    "psp22::transferFrom",
    from,
    to,
    amount
  );

  await contract.tx["psp22::transferFrom"](
    { gasLimit, value },
    from,
    to,
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
          if (statusText === "0") toast.success(`Set minter ...`);
        }
      }
    )
    .then((unsub) => (unsubscribe = unsub))
    .catch((e) => console.log("e", e));
  return unsubscribe;
}

const contract_calls = {
  balanceOf,
  withdraw,
  isOwner,
  changeState,
  pausable,
  setMinter,
  allowance,
  transferFrom
};

export default contract_calls;
