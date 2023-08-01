const core_contract = {
  CONTRACT_ADDRESS: "5EbN4CM1U2P5BsKeACdcpu8NGWRBjP9AewjFWQ22266VqLDM",
  CONTRACT_ABI: {
    source: {
      hash: "0xdeadcc84b97818a59bf741251e45335cd2f09cbaf5cea4f923a3ee5558193c97",
      language: "ink! 4.2.1",
      compiler: "rustc 1.70.0-nightly",
      build_info: {
        build_mode: "Debug",
        cargo_contract_version: "2.1.0",
        rust_toolchain: "nightly-x86_64-unknown-linux-gnu",
        wasm_opt_settings: {
          keep_debug_symbols: false,
          optimization_passes: "Z",
        },
      },
    },
    contract: {
      name: "core_contract",
      version: "1.0.0",
      authors: ["bet_a0 <admin@betA0.net>"],
    },
    spec: {
      constructors: [
        {
          args: [
            {
              label: "max_bet_ratio",
              type: {
                displayName: ["u32"],
                type: 5,
              },
            },
            {
              label: "revenue_ratio",
              type: {
                displayName: ["u32"],
                type: 5,
              },
            },
            {
              label: "reward_pool",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
            {
              label: "general_pool",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
            {
              label: "bet_pool",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
            {
              label: "bet_token_address",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
            {
              label: "token_ratio",
              type: {
                displayName: ["u32"],
                type: 5,
              },
            },
            {
              label: "min_over_number",
              type: {
                displayName: ["u32"],
                type: 5,
              },
            },
            {
              label: "max_over_number",
              type: {
                displayName: ["u32"],
                type: 5,
              },
            },
            {
              label: "min_under_number",
              type: {
                displayName: ["u32"],
                type: 5,
              },
            },
            {
              label: "max_under_number",
              type: {
                displayName: ["u32"],
                type: 5,
              },
            },
            {
              label: "admin_account",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [],
          label: "new",
          payable: false,
          returnType: {
            displayName: ["ink_primitives", "ConstructorResult"],
            type: 8,
          },
          selector: "0x9bae9d5e",
        },
      ],
      docs: [],
      environment: {
        accountId: {
          displayName: ["AccountId"],
          type: 0,
        },
        balance: {
          displayName: ["Balance"],
          type: 6,
        },
        blockNumber: {
          displayName: ["BlockNumber"],
          type: 5,
        },
        chainExtension: {
          displayName: ["ChainExtension"],
          type: 39,
        },
        hash: {
          displayName: ["Hash"],
          type: 33,
        },
        maxEventTopics: 4,
        timestamp: {
          displayName: ["Timestamp"],
          type: 38,
        },
      },
      events: [
        {
          args: [
            {
              docs: [],
              indexed: false,
              label: "player",
              type: {
                displayName: ["Option"],
                type: 32,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "is_over",
              type: {
                displayName: ["u8"],
                type: 2,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "random_number",
              type: {
                displayName: ["u32"],
                type: 5,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "bet_number",
              type: {
                displayName: ["u32"],
                type: 5,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "bet_amount",
              type: {
                displayName: ["Balance"],
                type: 6,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "win_amount",
              type: {
                displayName: ["Balance"],
                type: 6,
              },
            },
          ],
          docs: [],
          label: "WinEvent",
        },
        {
          args: [
            {
              docs: [],
              indexed: false,
              label: "player",
              type: {
                displayName: ["Option"],
                type: 32,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "is_over",
              type: {
                displayName: ["u8"],
                type: 2,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "random_number",
              type: {
                displayName: ["u32"],
                type: 5,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "bet_number",
              type: {
                displayName: ["u32"],
                type: 5,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "bet_amount",
              type: {
                displayName: ["Balance"],
                type: 6,
              },
            },
          ],
          docs: [],
          label: "LoseEvent",
        },
        {
          args: [
            {
              docs: [],
              indexed: false,
              label: "player",
              type: {
                displayName: ["Option"],
                type: 32,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "is_over",
              type: {
                displayName: ["u8"],
                type: 2,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "bet_number",
              type: {
                displayName: ["u32"],
                type: 5,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "bet_amount",
              type: {
                displayName: ["Balance"],
                type: 6,
              },
            },
          ],
          docs: [],
          label: "PlayEvent",
        },
      ],
      lang_error: {
        displayName: ["ink", "LangError"],
        type: 9,
      },
      messages: [
        {
          args: [
            {
              label: "max_bet_ratio",
              type: {
                displayName: ["u32"],
                type: 5,
              },
            },
            {
              label: "revenue_ratio",
              type: {
                displayName: ["u32"],
                type: 5,
              },
            },
            {
              label: "reward_pool",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
            {
              label: "general_pool",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
            {
              label: "bet_pool",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
            {
              label: "bet_token_address",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
            {
              label: "token_ratio",
              type: {
                displayName: ["u32"],
                type: 5,
              },
            },
            {
              label: "min_over_number",
              type: {
                displayName: ["u32"],
                type: 5,
              },
            },
            {
              label: "max_over_number",
              type: {
                displayName: ["u32"],
                type: 5,
              },
            },
            {
              label: "min_under_number",
              type: {
                displayName: ["u32"],
                type: 5,
              },
            },
            {
              label: "max_under_number",
              type: {
                displayName: ["u32"],
                type: 5,
              },
            },
            {
              label: "admin_account",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [" Function init"],
          label: "initialize",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0xf2f6dba3",
        },
        {
          args: [
            {
              label: "bet_number",
              type: {
                displayName: ["u32"],
                type: 5,
              },
            },
            {
              label: "is_over",
              type: {
                displayName: ["u8"],
                type: 2,
              },
            },
          ],
          default: false,
          docs: [" Play"],
          label: "play",
          mutates: true,
          payable: true,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 17,
          },
          selector: "0x9963949f",
        },
        {
          args: [
            {
              label: "player",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
            {
              label: "random_number",
              type: {
                displayName: ["u32"],
                type: 5,
              },
            },
          ],
          default: false,
          docs: [" Finalize Bet"],
          label: "finalize",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x40656e2b",
        },
        {
          args: [
            {
              label: "min_under_number",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "SetMinNumberUnderRollInput1",
                ],
                type: 5,
              },
            },
          ],
          default: false,
          docs: [" Set min number under roll"],
          label: "BetA0CoreTrait::set_min_number_under_roll",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0xfbed57ce",
        },
        {
          args: [],
          default: false,
          docs: [" get revenue ratio"],
          label: "BetA0CoreTrait::get_revenue_ratio",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 19,
          },
          selector: "0x7e7317d4",
        },
        {
          args: [
            {
              label: "admin_account",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "SetAdminAccountInput1",
                ],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [" Set admin id"],
          label: "BetA0CoreTrait::set_admin_account",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0xd7ab667f",
        },
        {
          args: [],
          default: false,
          docs: [],
          label: "BetA0CoreTrait::get_max_bet",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 20,
          },
          selector: "0x93aa56df",
        },
        {
          args: [
            {
              label: "min_over_number",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "SetMinNumberOverRollInput1",
                ],
                type: 5,
              },
            },
          ],
          default: false,
          docs: [" Set min number over roll"],
          label: "BetA0CoreTrait::set_min_number_over_roll",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x49094f28",
        },
        {
          args: [],
          default: false,
          docs: [" get min number under roll"],
          label: "BetA0CoreTrait::get_min_number_under_roll",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 19,
          },
          selector: "0xa6185fcb",
        },
        {
          args: [
            {
              label: "pool",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "GetTokenBalancePoolInput1",
                ],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [" get token balance pool"],
          label: "BetA0CoreTrait::get_token_balance_pool",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 20,
          },
          selector: "0x4fb01e84",
        },
        {
          args: [
            {
              label: "max_over_number",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "SetMaxNumberOverRollInput1",
                ],
                type: 5,
              },
            },
          ],
          default: false,
          docs: [" Set max number over roll"],
          label: "BetA0CoreTrait::set_max_number_over_roll",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x9943f4b5",
        },
        {
          args: [
            {
              label: "over_rates",
              type: {
                displayName: ["beta0coretrait_external", "SetRatesInput1"],
                type: 4,
              },
            },
            {
              label: "under_rates",
              type: {
                displayName: ["beta0coretrait_external", "SetRatesInput2"],
                type: 4,
              },
            },
          ],
          default: false,
          docs: [
            " Set over_rates and discount rate - Only Owner 2 vectors same size",
          ],
          label: "BetA0CoreTrait::set_rates",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x62500603",
        },
        {
          args: [
            {
              label: "reward_pool",
              type: {
                displayName: ["beta0coretrait_external", "SetRewardPoolInput1"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [" Set reward_pool"],
          label: "BetA0CoreTrait::set_reward_pool",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x8fccd75d",
        },
        {
          args: [
            {
              label: "bet_token_address",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "SetBetTokenAddressInput1",
                ],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [" Set new psp22 address"],
          label: "BetA0CoreTrait::set_bet_token_address",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x7b887113",
        },
        {
          args: [
            {
              label: "max_bet_ratio",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "SetMaxBetRatioInput1",
                ],
                type: 5,
              },
            },
          ],
          default: false,
          docs: [" Set max bet ratio"],
          label: "BetA0CoreTrait::set_max_bet_ratio",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x5bc9734b",
        },
        {
          args: [
            {
              label: "value",
              type: {
                displayName: ["beta0coretrait_external", "WithdrawTokenInput1"],
                type: 6,
              },
            },
          ],
          default: false,
          docs: [" Withdraw Token - only Owner"],
          label: "BetA0CoreTrait::withdraw_token",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0xbfb04963",
        },
        {
          args: [],
          default: false,
          docs: [" Function changes state"],
          label: "BetA0CoreTrait::change_state",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 21,
          },
          selector: "0x305a2c7c",
        },
        {
          args: [
            {
              label: "revenue_ratio",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "SetRevenueRatioInput1",
                ],
                type: 5,
              },
            },
          ],
          default: false,
          docs: [" Set revenue_ratio"],
          label: "BetA0CoreTrait::set_revenue_ratio",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0xdcc98c25",
        },
        {
          args: [
            {
              label: "pool",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "TranferTokenToPoolInput1",
                ],
                type: 0,
              },
            },
            {
              label: "amount",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "TranferTokenToPoolInput2",
                ],
                type: 6,
              },
            },
          ],
          default: false,
          docs: [" tranfer token to pool"],
          label: "BetA0CoreTrait::tranfer_token_to_pool",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0xd455769a",
        },
        {
          args: [
            {
              label: "player",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "RewardTokenToPlayerInput1",
                ],
                type: 0,
              },
            },
            {
              label: "bet_amount",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "RewardTokenToPlayerInput2",
                ],
                type: 6,
              },
            },
          ],
          default: false,
          docs: [" reward token by bet pool"],
          label: "BetA0CoreTrait::reward_token_to_player",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0xe7015c51",
        },
        {
          args: [],
          default: false,
          docs: [" get min number over roll"],
          label: "BetA0CoreTrait::get_min_number_over_roll",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 19,
          },
          selector: "0xfc8a4a50",
        },
        {
          args: [],
          default: false,
          docs: [" get reward pool"],
          label: "BetA0CoreTrait::get_reward_pool",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 23,
          },
          selector: "0x4284ecb5",
        },
        {
          args: [],
          default: false,
          docs: [" Get Over Rates"],
          label: "BetA0CoreTrait::get_over_rates",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 24,
          },
          selector: "0x0712d707",
        },
        {
          args: [],
          default: false,
          docs: [" Get Max Bet"],
          label: "BetA0CoreTrait::get_max_bet_ratio",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 19,
          },
          selector: "0xb18a8f89",
        },
        {
          args: [],
          default: false,
          docs: [" get contract token balance"],
          label: "BetA0CoreTrait::get_token_balance",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 20,
          },
          selector: "0x9ed23743",
        },
        {
          args: [
            {
              label: "token_ratio",
              type: {
                displayName: ["beta0coretrait_external", "SetTokenRatioInput1"],
                type: 5,
              },
            },
          ],
          default: false,
          docs: [" Set new token ratio"],
          label: "BetA0CoreTrait::set_token_ratio",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x2979f379",
        },
        {
          args: [
            {
              label: "player",
              type: {
                displayName: ["beta0coretrait_external", "GetBetInput1"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [" get bet"],
          label: "BetA0CoreTrait::get_bet",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 25,
          },
          selector: "0x0dc968b3",
        },
        {
          args: [],
          default: false,
          docs: [" get general pool"],
          label: "BetA0CoreTrait::get_general_pool",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 23,
          },
          selector: "0x1df721e9",
        },
        {
          args: [],
          default: false,
          docs: [" Get Under Rates"],
          label: "BetA0CoreTrait::get_under_rates",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 24,
          },
          selector: "0x657dfccb",
        },
        {
          args: [],
          default: false,
          docs: [" Get token ratio"],
          label: "BetA0CoreTrait::get_token_ratio",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 19,
          },
          selector: "0x5bf4a937",
        },
        {
          args: [
            {
              label: "general_pool",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "SetGeneralPoolInput1",
                ],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [" Set max bet ratio"],
          label: "BetA0CoreTrait::set_general_pool",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x6a22225b",
        },
        {
          args: [
            {
              label: "value",
              type: {
                displayName: ["beta0coretrait_external", "WithdrawFeeInput1"],
                type: 6,
              },
            },
          ],
          default: false,
          docs: [" Withdraw Fees - only Owner"],
          label: "BetA0CoreTrait::withdraw_fee",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0xb1aed1dc",
        },
        {
          args: [],
          default: false,
          docs: [" Get psp22 address"],
          label: "BetA0CoreTrait::bet_token_address",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 23,
          },
          selector: "0x45b373ac",
        },
        {
          args: [
            {
              label: "player",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "IsBetAvailableInput1",
                ],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [" Is bet exist"],
          label: "BetA0CoreTrait::is_bet_available",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 28,
          },
          selector: "0xd36f536e",
        },
        {
          args: [
            {
              label: "bet_pool",
              type: {
                displayName: ["beta0coretrait_external", "SetBetPoolInput1"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [" Set bet_pool"],
          label: "BetA0CoreTrait::set_bet_pool",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0xe278565f",
        },
        {
          args: [],
          default: false,
          docs: [" get max number under roll"],
          label: "BetA0CoreTrait::get_max_number_under_roll",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 19,
          },
          selector: "0x9f571242",
        },
        {
          args: [],
          default: false,
          docs: [" get bet pool"],
          label: "BetA0CoreTrait::get_bet_pool",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 23,
          },
          selector: "0xf2945be3",
        },
        {
          args: [
            {
              label: "player",
              type: {
                displayName: ["beta0coretrait_external", "RewardTokenInput1"],
                type: 0,
              },
            },
            {
              label: "bet_amount",
              type: {
                displayName: ["beta0coretrait_external", "RewardTokenInput2"],
                type: 6,
              },
            },
          ],
          default: false,
          docs: [" Function reward token"],
          label: "BetA0CoreTrait::reward_token",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0xfbd40ec8",
        },
        {
          args: [],
          default: false,
          docs: [" get max number over roll"],
          label: "BetA0CoreTrait::get_max_number_over_roll",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 19,
          },
          selector: "0x78687252",
        },
        {
          args: [],
          default: false,
          docs: [" get admin id"],
          label: "BetA0CoreTrait::get_admin_account",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 23,
          },
          selector: "0x04747907",
        },
        {
          args: [
            {
              label: "max_under_number",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "SetMaxNumberUnderRollInput1",
                ],
                type: 5,
              },
            },
          ],
          default: false,
          docs: [" Set max number under roll"],
          label: "BetA0CoreTrait::set_max_number_under_roll",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0xe3879fee",
        },
        {
          args: [],
          default: false,
          docs: [],
          label: "Ownable::renounce_ownership",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 29,
          },
          selector: "0x5e228753",
        },
        {
          args: [],
          default: false,
          docs: [],
          label: "Ownable::owner",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 31,
          },
          selector: "0x4fa43c8c",
        },
        {
          args: [
            {
              label: "new_owner",
              type: {
                displayName: ["ownable_external", "TransferOwnershipInput1"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [],
          label: "Ownable::transfer_ownership",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 29,
          },
          selector: "0x11f43efd",
        },
        {
          args: [],
          default: false,
          docs: [],
          label: "Pausable::paused",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 28,
          },
          selector: "0xd123ce11",
        },
        {
          args: [
            {
              label: "new_code_hash",
              type: {
                displayName: ["upgradeable_external", "SetCodeHashInput1"],
                type: 33,
              },
            },
          ],
          default: false,
          docs: [],
          label: "Upgradeable::set_code_hash",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 34,
          },
          selector: "0x1700ae80",
        },
      ],
    },
    storage: {
      root: {
        layout: {
          struct: {
            fields: [
              {
                layout: {
                  struct: {
                    fields: [
                      {
                        layout: {
                          root: {
                            layout: {
                              enum: {
                                dispatchKey: "0x6f713913",
                                name: "Option",
                                variants: {
                                  0: {
                                    fields: [],
                                    name: "None",
                                  },
                                  1: {
                                    fields: [
                                      {
                                        layout: {
                                          leaf: {
                                            key: "0x6f713913",
                                            ty: 0,
                                          },
                                        },
                                        name: "0",
                                      },
                                    ],
                                    name: "Some",
                                  },
                                },
                              },
                            },
                            root_key: "0x6f713913",
                          },
                        },
                        name: "owner",
                      },
                    ],
                    name: "Data",
                  },
                },
                name: "ownable",
              },
              {
                layout: {
                  struct: {
                    fields: [
                      {
                        layout: {
                          root: {
                            layout: {
                              leaf: {
                                key: "0xec3485f7",
                                ty: 3,
                              },
                            },
                            root_key: "0xec3485f7",
                          },
                        },
                        name: "paused",
                      },
                    ],
                    name: "Data",
                  },
                },
                name: "pausable",
              },
              {
                layout: {
                  struct: {
                    fields: [
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 4,
                          },
                        },
                        name: "over_rates",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 4,
                          },
                        },
                        name: "under_rates",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 5,
                          },
                        },
                        name: "max_bet_ratio",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 0,
                          },
                        },
                        name: "bet_token_address",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 5,
                          },
                        },
                        name: "token_ratio",
                      },
                      {
                        layout: {
                          root: {
                            layout: {
                              struct: {
                                fields: [
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0xf5c3fa2a",
                                        ty: 2,
                                      },
                                    },
                                    name: "is_over",
                                  },
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0xf5c3fa2a",
                                        ty: 5,
                                      },
                                    },
                                    name: "bet_number",
                                  },
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0xf5c3fa2a",
                                        ty: 6,
                                      },
                                    },
                                    name: "bet_amount",
                                  },
                                ],
                                name: "BetInformation",
                              },
                            },
                            root_key: "0xf5c3fa2a",
                          },
                        },
                        name: "bets",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 0,
                          },
                        },
                        name: "admin_account",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 5,
                          },
                        },
                        name: "revenue_ratio",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 0,
                          },
                        },
                        name: "reward_pool",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 0,
                          },
                        },
                        name: "general_pool",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 0,
                          },
                        },
                        name: "bet_pool",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 5,
                          },
                        },
                        name: "min_over_number",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 5,
                          },
                        },
                        name: "max_over_number",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 5,
                          },
                        },
                        name: "min_under_number",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 5,
                          },
                        },
                        name: "max_under_number",
                      },
                      {
                        layout: {
                          enum: {
                            dispatchKey: "0x00000000",
                            name: "Option",
                            variants: {
                              0: {
                                fields: [],
                                name: "None",
                              },
                              1: {
                                fields: [
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0x00000000",
                                        ty: 7,
                                      },
                                    },
                                    name: "0",
                                  },
                                ],
                                name: "Some",
                              },
                            },
                          },
                        },
                        name: "_reserved",
                      },
                    ],
                    name: "Manager",
                  },
                },
                name: "manager",
              },
            ],
            name: "BetA0CoreContract",
          },
        },
        root_key: "0x00000000",
      },
    },
    types: [
      {
        id: 0,
        type: {
          def: {
            composite: {
              fields: [
                {
                  type: 1,
                  typeName: "[u8; 32]",
                },
              ],
            },
          },
          path: ["ink_primitives", "types", "AccountId"],
        },
      },
      {
        id: 1,
        type: {
          def: {
            array: {
              len: 32,
              type: 2,
            },
          },
        },
      },
      {
        id: 2,
        type: {
          def: {
            primitive: "u8",
          },
        },
      },
      {
        id: 3,
        type: {
          def: {
            primitive: "bool",
          },
        },
      },
      {
        id: 4,
        type: {
          def: {
            sequence: {
              type: 5,
            },
          },
        },
      },
      {
        id: 5,
        type: {
          def: {
            primitive: "u32",
          },
        },
      },
      {
        id: 6,
        type: {
          def: {
            primitive: "u128",
          },
        },
      },
      {
        id: 7,
        type: {
          def: {
            tuple: [],
          },
        },
      },
      {
        id: 8,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 7,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 7,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 9,
        type: {
          def: {
            variant: {
              variants: [
                {
                  index: 1,
                  name: "CouldNotReadInput",
                },
              ],
            },
          },
          path: ["ink_primitives", "LangError"],
        },
      },
      {
        id: 10,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 11,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 11,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 11,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 7,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 12,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 7,
            },
            {
              name: "E",
              type: 12,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 12,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 13,
                      typeName: "String",
                    },
                  ],
                  index: 0,
                  name: "Custom",
                },
                {
                  fields: [
                    {
                      type: 14,
                      typeName: "PSP22Error",
                    },
                  ],
                  index: 1,
                  name: "PSP22Error",
                },
                {
                  fields: [
                    {
                      type: 15,
                      typeName: "PausableError",
                    },
                  ],
                  index: 2,
                  name: "PausableError",
                },
                {
                  fields: [
                    {
                      type: 16,
                      typeName: "OwnableError",
                    },
                  ],
                  index: 3,
                  name: "OwnableError",
                },
              ],
            },
          },
          path: ["bet_a0", "traits", "beta0_core", "CoreError"],
        },
      },
      {
        id: 13,
        type: {
          def: {
            primitive: "str",
          },
        },
      },
      {
        id: 14,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 13,
                      typeName: "String",
                    },
                  ],
                  index: 0,
                  name: "Custom",
                },
                {
                  index: 1,
                  name: "InsufficientBalance",
                },
                {
                  index: 2,
                  name: "InsufficientAllowance",
                },
                {
                  index: 3,
                  name: "ZeroRecipientAddress",
                },
                {
                  index: 4,
                  name: "ZeroSenderAddress",
                },
                {
                  fields: [
                    {
                      type: 13,
                      typeName: "String",
                    },
                  ],
                  index: 5,
                  name: "SafeTransferCheckFailed",
                },
              ],
            },
          },
          path: [
            "openbrush_contracts",
            "traits",
            "errors",
            "psp22",
            "PSP22Error",
          ],
        },
      },
      {
        id: 15,
        type: {
          def: {
            variant: {
              variants: [
                {
                  index: 0,
                  name: "Paused",
                },
                {
                  index: 1,
                  name: "NotPaused",
                },
              ],
            },
          },
          path: [
            "openbrush_contracts",
            "traits",
            "errors",
            "pausable",
            "PausableError",
          ],
        },
      },
      {
        id: 16,
        type: {
          def: {
            variant: {
              variants: [
                {
                  index: 0,
                  name: "CallerIsNotOwner",
                },
                {
                  index: 1,
                  name: "NewOwnerIsZero",
                },
              ],
            },
          },
          path: [
            "openbrush_contracts",
            "traits",
            "errors",
            "ownable",
            "OwnableError",
          ],
        },
      },
      {
        id: 17,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 18,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 18,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 18,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 7,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 14,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 7,
            },
            {
              name: "E",
              type: 14,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 19,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 5,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 5,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 20,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 6,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 6,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 21,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 22,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 22,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 22,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 7,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 15,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 7,
            },
            {
              name: "E",
              type: 15,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 23,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 0,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 0,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 24,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 4,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 4,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 25,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 26,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 26,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 26,
        type: {
          def: {
            variant: {
              variants: [
                {
                  index: 0,
                  name: "None",
                },
                {
                  fields: [
                    {
                      type: 27,
                    },
                  ],
                  index: 1,
                  name: "Some",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 27,
            },
          ],
          path: ["Option"],
        },
      },
      {
        id: 27,
        type: {
          def: {
            composite: {
              fields: [
                {
                  name: "is_over",
                  type: 2,
                  typeName: "u8",
                },
                {
                  name: "bet_number",
                  type: 5,
                  typeName: "u32",
                },
                {
                  name: "bet_amount",
                  type: 6,
                  typeName: "Balance",
                },
              ],
            },
          },
          path: ["bet_a0", "impls", "beta0_core", "data", "BetInformation"],
        },
      },
      {
        id: 28,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 3,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 3,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 29,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 30,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 30,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 30,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 7,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 16,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 7,
            },
            {
              name: "E",
              type: 16,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 31,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 32,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 32,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 32,
        type: {
          def: {
            variant: {
              variants: [
                {
                  index: 0,
                  name: "None",
                },
                {
                  fields: [
                    {
                      type: 0,
                    },
                  ],
                  index: 1,
                  name: "Some",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 0,
            },
          ],
          path: ["Option"],
        },
      },
      {
        id: 33,
        type: {
          def: {
            composite: {
              fields: [
                {
                  type: 1,
                  typeName: "[u8; 32]",
                },
              ],
            },
          },
          path: ["ink_primitives", "types", "Hash"],
        },
      },
      {
        id: 34,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 35,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 35,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 35,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 7,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 36,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 7,
            },
            {
              name: "E",
              type: 36,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 36,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 13,
                      typeName: "String",
                    },
                  ],
                  index: 0,
                  name: "Custom",
                },
                {
                  index: 1,
                  name: "SetCodeHashFailed",
                },
                {
                  fields: [
                    {
                      type: 16,
                      typeName: "OwnableError",
                    },
                  ],
                  index: 2,
                  name: "OwnableError",
                },
                {
                  fields: [
                    {
                      type: 37,
                      typeName: "AccessControlError",
                    },
                  ],
                  index: 3,
                  name: "AccessControlError",
                },
              ],
            },
          },
          path: [
            "openbrush_contracts",
            "traits",
            "errors",
            "upgradeable",
            "UpgradeableError",
          ],
        },
      },
      {
        id: 37,
        type: {
          def: {
            variant: {
              variants: [
                {
                  index: 0,
                  name: "InvalidCaller",
                },
                {
                  index: 1,
                  name: "MissingRole",
                },
                {
                  index: 2,
                  name: "RoleRedundant",
                },
              ],
            },
          },
          path: [
            "openbrush_contracts",
            "traits",
            "errors",
            "access_control",
            "AccessControlError",
          ],
        },
      },
      {
        id: 38,
        type: {
          def: {
            primitive: "u64",
          },
        },
      },
      {
        id: 39,
        type: {
          def: {
            variant: {},
          },
          path: ["ink_env", "types", "NoChainExtension"],
        },
      },
    ],
    version: "4",
  },
};

export default core_contract;
