import { decodeAddress, encodeAddress } from "@polkadot/keyring";
import { hexToU8a, isHex, BN, BN_ONE } from "@polkadot/util";
import toast from "react-hot-toast";

// import BN from "bn.js";
import Keyring from "@polkadot/keyring";

export function randomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

export function randomInt(min, max){
  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomValue;
}

export function shortenNumber(number) {
  return nFormatter(number, 1);
}
function nFormatter(num, digits) {
  var si = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}
export function isValidImage(imageUrl) {
  try {
    fetch(imageUrl).then((res) => {
      if (res.status === 200) return true;
      return false;
    });
  } catch (error) {
    console.log(error);
    return false;
  }
}

export function convertStringToPrice(stringPrice) {
  try {
    /* eslint-disable no-useless-escape */
    const a = stringPrice.replace(/\,/g, "");
    // let price = new BN(a, 10).div(new BN(10 ** 6)).toNumber();
    return a / 10 ** 12;
  } catch (error) {
    console.log(error);
    return 0;
  }
}

export function convertStringToDateTime(stringTimeStamp) {
  /* eslint-disable no-useless-escape */
  const a = stringTimeStamp.replace(/\,/g, "");
  const dateObject = new Date(parseInt(a));
  return dateObject.toLocaleString(); //2019-12-9 10:30:15
}

export function isValidAddressPolkadotAddress(address) {
  try {
    encodeAddress(isHex(address) ? hexToU8a(address) : decodeAddress(address));

    return true;
  } catch (error) {
    // console.log(error);
    return false;
  }
}

export function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export const convertTimeStamp = (input) => {
  let time = input.replace(/\,/g, "");
  if (time <= 0) return "";
  var d = new Date(time);
  return (
    twoDigit(d.getDate()) +
    "/" +
    twoDigit(d.getMonth() + 1) +
    "/" +
    d.getFullYear() +
    " " +
    twoDigit(d.getHours()) +
    ":" +
    twoDigit(d.getMinutes()) +
    ":" +
    twoDigit(d.getSeconds())
  );
};

export const secondsToTime = (secs) => {
  let hours = Math.floor(secs / (60 * 60));

  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let obj = {
    h: twoDigit(hours),
    m: twoDigit(minutes),
    s: twoDigit(seconds),
  };
  return obj;
};

export const convertTimeStampNoTime = (input) => {
  let time = input.replace(/\,/g, "");
  if (time <= 0) return "";
  var d = new Date(time);
  return (
    twoDigit(d.getDate()) +
    "/" +
    twoDigit(d.getMonth() + 1) +
    "/" +
    d.getFullYear()
  );
};

export const twoDigit = (myNumber) => {
  return ("0" + myNumber).slice(-2);
};

export const twoDigitTime = (time) => {
  if (time < 10) return "0" + time;
  else return time + "";
};

export const truncateStr = (str, n = 6) => {
  if (!str) return "";
  return str.length > n
    ? str.substr(0, n - 1) + "..." + str.substr(str.length - n, str.length - 1)
    : str;
};

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// getEstimatedGas
const toContractAbiMessage = (contractPromise, message) => {
  const value = contractPromise.abi.messages.find((m) => m.method === message);

  if (!value) {
    const messages = contractPromise?.abi.messages
      .map((m) => m.method)
      .join(", ");

    const error = `"${message}" not found in metadata.spec.messages: [${messages}]`;
    console.error(error);

    return { ok: false, error };
  }

  return { ok: true, value };
};

async function getGasLimit(
  api,
  userAddress,
  message,
  contract,
  options = {},
  args = []
) {
  const abiMessage = toContractAbiMessage(contract, message);

  if (!abiMessage.ok) return abiMessage;

  const { value, gasLimit, storageDepositLimit } = options;

  const { gasRequired } = await api.call.contractsApi.call(
    userAddress,
    contract.address,
    value ?? new BN(0),
    gasLimit ?? null,
    storageDepositLimit ?? null,
    abiMessage.value.toU8a(args)
  );

  const refTime = gasRequired.refTime.toHuman().replaceAll(",", "");
  const proofSize = gasRequired.proofSize.toHuman().replaceAll(",", "");

  const gasRequiredAdjust = api.registry.createType("WeightV2", {
    refTime: new BN(refTime * 10 ** 0).mul(new BN(2)),
    proofSize: new BN(proofSize * 10 ** 0).mul(new BN(2)),
  });

  return { ok: true, value: gasRequiredAdjust };
}

export async function getEstimatedGas(
  address,
  contract,
  value,
  queryName,
  ...args
) {
  const fetchGas = async () => {
    let ret;

    try {
      const gasLimitResult = await getGasLimit(
        contract?.api,
        address,
        queryName,
        contract,
        { value },
        args
      );

      if (!gasLimitResult.ok) {
        console.log(queryName, "getEstimatedGas err", gasLimitResult.error);
        return;
      }

      ret = gasLimitResult?.value;

    } catch (error) {
      console.log("error fetchGas xx>>", error.message);
    }

    return ret;
  };

  let result;

  await toast.promise(
    fetchGas().then((data) => (result = data)),
    {
      success: `Estimated transaction fee...`,
      error: "Could not fetching gas!",
    },
    {
      success: {
        icon: "🔥",
      },
    }
  );

  return result;
}

// readOnlyGasLimit
export function readOnlyGasLimit(contract) {
  if (!contract) {
    console.log("contract invalid...");
    return;
  }
  try {
    const ret = contract?.api?.registry?.createType("WeightV2", {
      refTime: new BN(1_000_000_000_000),
      proofSize: new BN(5_000_000_000_000).isub(BN_ONE),
    });

    return ret;
  } catch (error) {
    console.log("error", error);
  }
}
