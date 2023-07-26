import React, { useCallback, useEffect, useState } from "react";
import "./Withdraw.css";
import { Button, Form, Input, InputNumber, message } from "antd";
import psp22_contract from "../../contracts/psp22_calls";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { isAddress } from "@polkadot/util-crypto";

const Withdraw = () => {
  const selectedAccount = useSelector((s) => s.substrate.selectedAccount);
  const extensionName = useSelector((s) => s.substrate.extensionName);
  const [stateContract, setStateContract] = useState(true);

  // withdraw
  const withdraw_Azero = async (amount) => {
    try {
      const isOwner = await psp22_contract.isOwner(selectedAccount);
      let BET_balance = await psp22_contract.balanceOf(
        selectedAccount,
        selectedAccount
      );

      if (!isOwner && !BET_balance) {
        toast.error("Something wrong!");
        return;
      } else {
        if (amount > BET_balance) {
          toast.error("Not enough balance!");
        } else {
          if (isOwner.Ok == selectedAccount) {
            const withdrawed = await psp22_contract.withdraw(
              selectedAccount,
              extensionName,
              amount
            );

            if (!withdrawed) {
              toast.error("Something wrong!");
              return;
            }
          } else toast.error("Caller are not the owner of the contract!");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  /// on submit withdraw
  const onWithdraw = (values) => {
    console.log("Success:", values);
    if (selectedAccount) {
      withdraw_Azero(values.azero);
    } else {
      toast.error("You need to login!");
    }
  };

  // Get pausable and set state
  const getPausable = async () => {
    const pausable = await psp22_contract.pausable(selectedAccount);
    if (!pausable) {
      toast.error("Something wrong!");
      return;
    } else {
      // toast.success(`state ${pausable.Ok}`);
      setStateContract(pausable.Ok);
    }
  };

  useEffect(() => {
    if (selectedAccount) {
      toast.success(`Login account success!`);
      getPausable();
    } else {
      toast.error("You need to login!");
    }
  }, [selectedAccount]);

  // change state
  const onChangeState = async () => {
    const isOwner = await psp22_contract.isOwner(selectedAccount);
    if (!isOwner) {
      toast.error("Something wrong!");
      return;
    } else {
      if (isOwner.Ok == selectedAccount) {
        const state = await psp22_contract.changeState(
          selectedAccount,
          extensionName
        );
        if (!state) {
          toast.error("Something wrong!");
          return;
        } else {
          setStateContract(!stateContract);
          toast.success("Change state OK!");
        }
      } else toast.error("Caller are not the owner of the contract!");
    }
  };

  const stateSwitch = (e) => {
    // setStateContract(!stateContract);
    // setStateContract(e.target.checked);
    if (selectedAccount) {
      onChangeState();
    } else {
      toast.error("You need to login!");
    }
  };

  // Set minter
  const handleSetMinter = async (account) => {
    if (isAddress(account)) {
      try {
        const isOwner = await psp22_contract.isOwner(selectedAccount);

        if (!isOwner) {
          toast.error("Something wrong!");
          return;
        } else {
          if (isOwner.Ok == selectedAccount) {
            const minter = await psp22_contract.setMinter(
              selectedAccount,
              extensionName,
              account
            );

            if (!minter) {
              toast.error("Something wrong!");
              return;
            }
          } else toast.error("Caller are not the owner of the contract!");
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      toast.error("Invalid address!");
    }
  };

  /// on submit withdraw
  const onSetMinter = (values) => {
    console.log("Success:", values);
    if (selectedAccount) {
      handleSetMinter(values.acount);
    } else {
      toast.error("You need to login!");
    }
  };

  return (
    <>
      <section className="withdraw--section">
        <div className="custom--container">
          {/* withdraw UI */}
          <div className="withdraw--wrapperbox">
            <div className="section--titlebox">
              <h2 className="section--title">
                <span className="colorText">Withdraw</span>
              </h2>
            </div>
            <div className="withdraw--contentbox">
              <div className="contentbox-withdraw">
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onWithdraw}
                  validateMessages={{
                    required: "${label} is required!",
                    types: {
                      number: "${label} is not a valid number!",
                    },
                  }}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Azero"
                    name="azero"
                    rules={[
                      {
                        required: true,
                        type: "number",
                        min: 0,
                      },
                    ]}
                  >
                    <InputNumber />
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Withdraw
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>

          {/* change state UI */}
          <div className="withdraw--wrapperbox">
            <div className="section--titlebox">
              <h2 className="section--title">
                <span className="colorText">Change state</span>
              </h2>
            </div>
            <div className="withdraw--contentbox">
              <div className="contentbox--changestate">
                <div class="rowSetting">
                  <div class="columnSetting">
                    <p
                      style={{
                        color: "rgba(255, 255, 255, .7)",
                        fontSize: "16px",
                        fontWeight: "500",
                        marginTop: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      Change State Contract
                    </p>
                    <label class="switch">
                      <input
                        type="checkbox"
                        onChange={(e) => stateSwitch(e)}
                        checked={stateContract}
                      />
                      <span class="sliderAudio round"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* set minter */}
          <div className="withdraw--wrapperbox">
            <div className="section--titlebox">
              <h2 className="section--title">
                <span className="colorText">Set minter</span>
              </h2>
            </div>
            <div className="withdraw--contentbox">
              <div className="contentbox-withdraw">
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onSetMinter}
                  validateMessages={{
                    required: "${label} is required!",
                  }}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Account"
                    name="acount"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Set minter
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Withdraw;
