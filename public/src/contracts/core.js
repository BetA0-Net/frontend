const core_contract = {
  CONTRACT_ADDRESS: "5DMPGnCWLBfW1ZSmn64sZJuXgsGAR2GSreHR5S6aJf2cPWPg",
  CONTRACT_ABI: {
    source: {
      hash: "0x9f2a6ced74ce641bd38bd8686955e7d1629f8a177b1025846a97136f8b418de0",
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
      name: "core_token",
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
                type: 6,
              },
            },
            {
              label: "psp22",
              type: {
                displayName: ["AccountId"],
                type: 1,
              },
            },
            {
              label: "token_ratio",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
            {
              label: "min_over_number",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
            {
              label: "max_over_number",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
            {
              label: "min_under_number",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
            {
              label: "max_under_number",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
            {
              label: "admin_account",
              type: {
                displayName: ["AccountId"],
                type: 1,
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
          type: 1,
        },
        balance: {
          displayName: ["Balance"],
          type: 0,
        },
        blockNumber: {
          displayName: ["BlockNumber"],
          type: 6,
        },
        chainExtension: {
          displayName: ["ChainExtension"],
          type: 36,
        },
        hash: {
          displayName: ["Hash"],
          type: 34,
        },
        maxEventTopics: 4,
        timestamp: {
          displayName: ["Timestamp"],
          type: 35,
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
                type: 30,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "is_over",
              type: {
                displayName: ["u8"],
                type: 3,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "random_number",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "bet_number",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "bet_amount",
              type: {
                displayName: ["Balance"],
                type: 0,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "win_amount",
              type: {
                displayName: ["Balance"],
                type: 0,
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
                type: 30,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "is_over",
              type: {
                displayName: ["u8"],
                type: 3,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "random_number",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "bet_number",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "bet_amount",
              type: {
                displayName: ["Balance"],
                type: 0,
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
                type: 30,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "is_over",
              type: {
                displayName: ["u8"],
                type: 3,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "bet_number",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "bet_amount",
              type: {
                displayName: ["Balance"],
                type: 0,
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
          args: [],
          default: false,
          docs: [" Function changes state"],
          label: "change_state",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x300f90c8",
        },
        {
          args: [
            {
              label: "max_bet_ratio",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
            {
              label: "psp22",
              type: {
                displayName: ["AccountId"],
                type: 1,
              },
            },
            {
              label: "token_ratio",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
            {
              label: "min_over_number",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
            {
              label: "max_over_number",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
            {
              label: "min_under_number",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
            {
              label: "max_under_number",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
            {
              label: "admin_account",
              type: {
                displayName: ["AccountId"],
                type: 1,
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
            type: 13,
          },
          selector: "0xf2f6dba3",
        },
        {
          args: [
            {
              label: "player",
              type: {
                displayName: ["AccountId"],
                type: 1,
              },
            },
            {
              label: "bet_amount",
              type: {
                displayName: ["Balance"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [" Function reward token"],
          label: "reward_token",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 13,
          },
          selector: "0x0b067d01",
        },
        {
          args: [
            {
              label: "player",
              type: {
                displayName: ["AccountId"],
                type: 1,
              },
            },
            {
              label: "random_number",
              type: {
                displayName: ["u32"],
                type: 6,
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
            type: 13,
          },
          selector: "0x40656e2b",
        },
        {
          args: [
            {
              label: "bet_number",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
            {
              label: "is_over",
              type: {
                displayName: ["u8"],
                type: 3,
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
            type: 13,
          },
          selector: "0x9963949f",
        },
        {
          args: [
            {
              label: "value",
              type: {
                displayName: ["Balance"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [" Withdraw Fees - only Owner"],
          label: "withdraw_fee",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 13,
          },
          selector: "0x07fdb555",
        },
        {
          args: [
            {
              label: "value",
              type: {
                displayName: ["Balance"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [" Withdraw Fees - only Owner"],
          label: "withdraw_token",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 13,
          },
          selector: "0x3e7d451e",
        },
        {
          args: [
            {
              label: "code_hash",
              type: {
                displayName: [],
                type: 2,
              },
            },
          ],
          default: false,
          docs: [" Set code_hash"],
          label: "set_code",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 13,
          },
          selector: "0x694fb50f",
        },
        {
          args: [
            {
              label: "over_rates",
              type: {
                displayName: ["Vec"],
                type: 5,
              },
            },
            {
              label: "under_rates",
              type: {
                displayName: ["Vec"],
                type: 5,
              },
            },
          ],
          default: false,
          docs: [
            " Set over_rates and discount rate - Only Owner 2 vectors same size",
          ],
          label: "set_rates",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 13,
          },
          selector: "0xa2e1e480",
        },
        {
          args: [
            {
              label: "psp22",
              type: {
                displayName: ["AccountId"],
                type: 1,
              },
            },
          ],
          default: false,
          docs: [" Set new psp22 address"],
          label: "set_psp22",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 13,
          },
          selector: "0x4e7cef7d",
        },
        {
          args: [
            {
              label: "token_ratio",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
          ],
          default: false,
          docs: [" Set new token ratio"],
          label: "set_token_ratio",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 13,
          },
          selector: "0xcc3737a0",
        },
        {
          args: [
            {
              label: "min_over_number",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
          ],
          default: false,
          docs: [" Set min number over roll"],
          label: "set_min_number_over_roll",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 13,
          },
          selector: "0xcabc9a0a",
        },
        {
          args: [
            {
              label: "max_over_number",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
          ],
          default: false,
          docs: [" Set max number over roll"],
          label: "set_max_number_over_roll",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 13,
          },
          selector: "0x06ba8809",
        },
        {
          args: [
            {
              label: "min_under_number",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
          ],
          default: false,
          docs: [" Set min number under roll"],
          label: "set_min_number_under_roll",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 13,
          },
          selector: "0x4f43fce3",
        },
        {
          args: [
            {
              label: "max_under_number",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
          ],
          default: false,
          docs: [" Set max number under roll"],
          label: "set_max_number_under_roll",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 13,
          },
          selector: "0xeca83758",
        },
        {
          args: [
            {
              label: "max_bet_ratio",
              type: {
                displayName: ["u32"],
                type: 6,
              },
            },
          ],
          default: false,
          docs: [" Setters"],
          label: "set_max_bet_ratio",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 13,
          },
          selector: "0xe6494fb8",
        },
        {
          args: [
            {
              label: "admin_account",
              type: {
                displayName: ["AccountId"],
                type: 1,
              },
            },
          ],
          default: false,
          docs: [" Set admin id"],
          label: "set_admin_account",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 13,
          },
          selector: "0x93592525",
        },
        {
          args: [
            {
              label: "player",
              type: {
                displayName: ["AccountId"],
                type: 1,
              },
            },
          ],
          default: false,
          docs: [" Is bet exist"],
          label: "is_bet_available",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 17,
          },
          selector: "0x2edfef78",
        },
        {
          args: [],
          default: false,
          docs: [" get admin id"],
          label: "get_admin_account",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 18,
          },
          selector: "0x48f0b6b6",
        },
        {
          args: [
            {
              label: "player",
              type: {
                displayName: ["AccountId"],
                type: 1,
              },
            },
          ],
          default: false,
          docs: [" Is bet exist"],
          label: "get_bet",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 19,
          },
          selector: "0x23629f3d",
        },
        {
          args: [],
          default: false,
          docs: [" get min number over roll"],
          label: "get_min_number_over_roll",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 22,
          },
          selector: "0x9e81bbf5",
        },
        {
          args: [],
          default: false,
          docs: [" get max number over roll"],
          label: "get_max_number_over_roll",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 22,
          },
          selector: "0xf1e96d05",
        },
        {
          args: [],
          default: false,
          docs: [" get min number under roll"],
          label: "get_min_number_under_roll",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 22,
          },
          selector: "0x05ddd7ea",
        },
        {
          args: [],
          default: false,
          docs: [" get max number under roll"],
          label: "get_max_number_under_roll",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 22,
          },
          selector: "0x2dc33e24",
        },
        {
          args: [],
          default: false,
          docs: [" get contract token balance"],
          label: "get_token_balance",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 23,
          },
          selector: "0xa4afc1d6",
        },
        {
          args: [],
          default: false,
          docs: [" Get token ratio"],
          label: "get_token_ratio",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 22,
          },
          selector: "0x0422842b",
        },
        {
          args: [],
          default: false,
          docs: [" Get psp22 address"],
          label: "psp22",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 18,
          },
          selector: "0xb2646034",
        },
        {
          args: [],
          default: false,
          docs: [" Get Over Rates"],
          label: "get_over_rates",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 24,
          },
          selector: "0xfe34dfce",
        },
        {
          args: [],
          default: false,
          docs: [" Get Under Rates"],
          label: "get_under_rates",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 24,
          },
          selector: "0x47b1f246",
        },
        {
          args: [],
          default: false,
          docs: [" Get Max Bet"],
          label: "get_max_bet_ratio",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 22,
          },
          selector: "0x8ac87b26",
        },
        {
          args: [],
          default: false,
          docs: [],
          label: "get_max_bet",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 23,
          },
          selector: "0x48c1f572",
        },
        {
          args: [
            {
              label: "account",
              type: {
                displayName: ["coretoken_external", "MintInput1"],
                type: 1,
              },
            },
            {
              label: "amount",
              type: {
                displayName: ["coretoken_external", "MintInput2"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [],
          label: "CoreToken::mint",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 25,
          },
          selector: "0xfb6b2527",
        },
        {
          args: [
            {
              label: "to",
              type: {
                displayName: ["psp22_external", "TransferInput1"],
                type: 1,
              },
            },
            {
              label: "value",
              type: {
                displayName: ["psp22_external", "TransferInput2"],
                type: 0,
              },
            },
            {
              label: "data",
              type: {
                displayName: ["psp22_external", "TransferInput3"],
                type: 28,
              },
            },
          ],
          default: false,
          docs: [],
          label: "PSP22::transfer",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 25,
          },
          selector: "0xdb20f9f5",
        },
        {
          args: [
            {
              label: "spender",
              type: {
                displayName: ["psp22_external", "DecreaseAllowanceInput1"],
                type: 1,
              },
            },
            {
              label: "delta_value",
              type: {
                displayName: ["psp22_external", "DecreaseAllowanceInput2"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [],
          label: "PSP22::decrease_allowance",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 25,
          },
          selector: "0xfecb57d5",
        },
        {
          args: [
            {
              label: "from",
              type: {
                displayName: ["psp22_external", "TransferFromInput1"],
                type: 1,
              },
            },
            {
              label: "to",
              type: {
                displayName: ["psp22_external", "TransferFromInput2"],
                type: 1,
              },
            },
            {
              label: "value",
              type: {
                displayName: ["psp22_external", "TransferFromInput3"],
                type: 0,
              },
            },
            {
              label: "data",
              type: {
                displayName: ["psp22_external", "TransferFromInput4"],
                type: 28,
              },
            },
          ],
          default: false,
          docs: [],
          label: "PSP22::transfer_from",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 25,
          },
          selector: "0x54b3c76e",
        },
        {
          args: [
            {
              label: "spender",
              type: {
                displayName: ["psp22_external", "IncreaseAllowanceInput1"],
                type: 1,
              },
            },
            {
              label: "delta_value",
              type: {
                displayName: ["psp22_external", "IncreaseAllowanceInput2"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [],
          label: "PSP22::increase_allowance",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 25,
          },
          selector: "0x96d6b57a",
        },
        {
          args: [
            {
              label: "owner",
              type: {
                displayName: ["psp22_external", "AllowanceInput1"],
                type: 1,
              },
            },
            {
              label: "spender",
              type: {
                displayName: ["psp22_external", "AllowanceInput2"],
                type: 1,
              },
            },
          ],
          default: false,
          docs: [],
          label: "PSP22::allowance",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 23,
          },
          selector: "0x4d47d921",
        },
        {
          args: [],
          default: false,
          docs: [],
          label: "PSP22::total_supply",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 23,
          },
          selector: "0x162df8c2",
        },
        {
          args: [
            {
              label: "owner",
              type: {
                displayName: ["psp22_external", "BalanceOfInput1"],
                type: 1,
              },
            },
          ],
          default: false,
          docs: [],
          label: "PSP22::balance_of",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 23,
          },
          selector: "0x6568382f",
        },
        {
          args: [
            {
              label: "spender",
              type: {
                displayName: ["psp22_external", "ApproveInput1"],
                type: 1,
              },
            },
            {
              label: "value",
              type: {
                displayName: ["psp22_external", "ApproveInput2"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [],
          label: "PSP22::approve",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 25,
          },
          selector: "0xb20f1bbd",
        },
        {
          args: [
            {
              label: "account",
              type: {
                displayName: ["psp22mintable_external", "MintInput1"],
                type: 1,
              },
            },
            {
              label: "amount",
              type: {
                displayName: ["psp22mintable_external", "MintInput2"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [],
          label: "PSP22Mintable::mint",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 25,
          },
          selector: "0xfc3c75d4",
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
            type: 29,
          },
          selector: "0x4fa43c8c",
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
            type: 31,
          },
          selector: "0x5e228753",
        },
        {
          args: [
            {
              label: "new_owner",
              type: {
                displayName: ["ownable_external", "TransferOwnershipInput1"],
                type: 1,
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
            type: 31,
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
            type: 17,
          },
          selector: "0xd123ce11",
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
                              leaf: {
                                key: "0x270a8fc3",
                                ty: 0,
                              },
                            },
                            root_key: "0x270a8fc3",
                          },
                        },
                        name: "supply",
                      },
                      {
                        layout: {
                          root: {
                            layout: {
                              leaf: {
                                key: "0xc2664826",
                                ty: 0,
                              },
                            },
                            root_key: "0xc2664826",
                          },
                        },
                        name: "balances",
                      },
                      {
                        layout: {
                          root: {
                            layout: {
                              leaf: {
                                key: "0xf8d71e22",
                                ty: 0,
                              },
                            },
                            root_key: "0xf8d71e22",
                          },
                        },
                        name: "allowances",
                      },
                    ],
                    name: "Data",
                  },
                },
                name: "psp22",
              },
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
                                            ty: 1,
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
                                ty: 4,
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
                            ty: 5,
                          },
                        },
                        name: "over_rates",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 5,
                          },
                        },
                        name: "under_rates",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 6,
                          },
                        },
                        name: "max_bet_ratio",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 1,
                          },
                        },
                        name: "psp22",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 6,
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
                                        key: "0xcf15f5ab",
                                        ty: 3,
                                      },
                                    },
                                    name: "is_over",
                                  },
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0xcf15f5ab",
                                        ty: 6,
                                      },
                                    },
                                    name: "bet_number",
                                  },
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0xcf15f5ab",
                                        ty: 0,
                                      },
                                    },
                                    name: "bet_amount",
                                  },
                                ],
                                name: "BetInformation",
                              },
                            },
                            root_key: "0xcf15f5ab",
                          },
                        },
                        name: "bets",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 1,
                          },
                        },
                        name: "admin_account",
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
              {
                layout: {
                  leaf: {
                    key: "0x00000000",
                    ty: 6,
                  },
                },
                name: "min_over_number",
              },
              {
                layout: {
                  leaf: {
                    key: "0x00000000",
                    ty: 6,
                  },
                },
                name: "max_over_number",
              },
              {
                layout: {
                  leaf: {
                    key: "0x00000000",
                    ty: 6,
                  },
                },
                name: "min_under_number",
              },
              {
                layout: {
                  leaf: {
                    key: "0x00000000",
                    ty: 6,
                  },
                },
                name: "max_under_number",
              },
            ],
            name: "CoreTokenContract",
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
            primitive: "u128",
          },
        },
      },
      {
        id: 1,
        type: {
          def: {
            composite: {
              fields: [
                {
                  type: 2,
                  typeName: "[u8; 32]",
                },
              ],
            },
          },
          path: ["ink_primitives", "types", "AccountId"],
        },
      },
      {
        id: 2,
        type: {
          def: {
            array: {
              len: 32,
              type: 3,
            },
          },
        },
      },
      {
        id: 3,
        type: {
          def: {
            primitive: "u8",
          },
        },
      },
      {
        id: 4,
        type: {
          def: {
            primitive: "bool",
          },
        },
      },
      {
        id: 5,
        type: {
          def: {
            sequence: {
              type: 6,
            },
          },
        },
      },
      {
        id: 6,
        type: {
          def: {
            primitive: "u32",
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
        id: 13,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 14,
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
              type: 14,
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
        id: 14,
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
        id: 15,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 16,
                      typeName: "String",
                    },
                  ],
                  index: 0,
                  name: "Custom",
                },
              ],
            },
          },
          path: ["core_token", "bet_a0ref", "Error"],
        },
      },
      {
        id: 16,
        type: {
          def: {
            primitive: "str",
          },
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
        id: 18,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 1,
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
              type: 1,
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
        id: 19,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 20,
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
              type: 20,
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
                  index: 0,
                  name: "None",
                },
                {
                  fields: [
                    {
                      type: 21,
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
              type: 21,
            },
          ],
          path: ["Option"],
        },
      },
      {
        id: 21,
        type: {
          def: {
            composite: {
              fields: [
                {
                  name: "is_over",
                  type: 3,
                  typeName: "u8",
                },
                {
                  name: "bet_number",
                  type: 6,
                  typeName: "u32",
                },
                {
                  name: "bet_amount",
                  type: 0,
                  typeName: "Balance",
                },
              ],
            },
          },
          path: ["core_token", "bet_a0ref", "BetInformation"],
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
                      type: 27,
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
              type: 27,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 27,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 16,
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
                      type: 16,
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
        id: 28,
        type: {
          def: {
            sequence: {
              type: 3,
            },
          },
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
                  index: 0,
                  name: "None",
                },
                {
                  fields: [
                    {
                      type: 1,
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
              type: 1,
            },
          ],
          path: ["Option"],
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
                      type: 33,
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
              type: 33,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 33,
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
        id: 34,
        type: {
          def: {
            composite: {
              fields: [
                {
                  type: 2,
                  typeName: "[u8; 32]",
                },
              ],
            },
          },
          path: ["ink_primitives", "types", "Hash"],
        },
      },
      {
        id: 35,
        type: {
          def: {
            primitive: "u64",
          },
        },
      },
      {
        id: 36,
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
