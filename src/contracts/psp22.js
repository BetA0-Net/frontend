const psp22_contract = {
  CONTRACT_ADDRESS: "5E2DZpAW5LTFEy9RXuL4y21FDAyjxVTh72ggY1hCr47rJVda",
  CONTRACT_ABI: {
    source: {
      hash: "0x3dff7d78742128f5d569299ff11915db94d883bf130758fb701cfaa54c7438c8",
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
      name: "bet_token",
      version: "1.0.0",
      authors: ["bet_a0 <admin@betA0.net>"],
    },
    spec: {
      constructors: [
        {
          args: [
            {
              label: "initial_supply",
              type: {
                displayName: ["Balance"],
                type: 0,
              },
            },
            {
              label: "minter",
              type: {
                displayName: ["AccountId"],
                type: 1,
              },
            },
            {
              label: "name",
              type: {
                displayName: ["Option"],
                type: 6,
              },
            },
            {
              label: "symbol",
              type: {
                displayName: ["Option"],
                type: 6,
              },
            },
            {
              label: "decimal",
              type: {
                displayName: ["u8"],
                type: 3,
              },
            },
          ],
          default: false,
          docs: [],
          label: "new",
          payable: false,
          returnType: {
            displayName: ["ink_primitives", "ConstructorResult"],
            type: 7,
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
          type: 29,
        },
        chainExtension: {
          displayName: ["ChainExtension"],
          type: 30,
        },
        hash: {
          displayName: ["Hash"],
          type: 27,
        },
        maxEventTopics: 4,
        timestamp: {
          displayName: ["Timestamp"],
          type: 28,
        },
      },
      events: [],
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
              label: "account",
              type: {
                displayName: ["AccountId"],
                type: 1,
              },
            },
            {
              label: "amount",
              type: {
                displayName: ["Balance"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [" Only minter can mint"],
          label: "mint",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 13,
          },
          selector: "0xcfdd9aa2",
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
          docs: [" Withdraw any Balance of Contract - only Owner"],
          label: "withdraw",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 13,
          },
          selector: "0x410fcc9d",
        },
        {
          args: [],
          default: false,
          docs: [" Get minter"],
          label: "get_minter",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 16,
          },
          selector: "0xfd3be540",
        },
        {
          args: [
            {
              label: "minter",
              type: {
                displayName: ["AccountId"],
                type: 1,
              },
            },
          ],
          default: false,
          docs: [" Set minter"],
          label: "set_minter",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 13,
          },
          selector: "0x46b65d02",
        },
        {
          args: [
            {
              label: "account",
              type: {
                displayName: ["bettoken_external", "MintInput1"],
                type: 1,
              },
            },
            {
              label: "amount",
              type: {
                displayName: ["bettoken_external", "MintInput2"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [],
          label: "BetToken::mint",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 13,
          },
          selector: "0x83a9a254",
        },
        {
          args: [
            {
              label: "account",
              type: {
                displayName: ["bettoken_external", "BurnInput1"],
                type: 1,
              },
            },
            {
              label: "amount",
              type: {
                displayName: ["bettoken_external", "BurnInput2"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [],
          label: "BetToken::burn",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 13,
          },
          selector: "0xc7dade26",
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
            type: 17,
          },
          selector: "0x6568382f",
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
            type: 17,
          },
          selector: "0x4d47d921",
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
            type: 13,
          },
          selector: "0xfecb57d5",
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
                type: 18,
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
            type: 13,
          },
          selector: "0xdb20f9f5",
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
            type: 17,
          },
          selector: "0x162df8c2",
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
            type: 13,
          },
          selector: "0xb20f1bbd",
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
                type: 18,
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
            type: 13,
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
            type: 13,
          },
          selector: "0x96d6b57a",
        },
        {
          args: [],
          default: false,
          docs: [],
          label: "PSP22Metadata::token_name",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 19,
          },
          selector: "0x3d261bd4",
        },
        {
          args: [],
          default: false,
          docs: [],
          label: "PSP22Metadata::token_symbol",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 19,
          },
          selector: "0x34205be5",
        },
        {
          args: [],
          default: false,
          docs: [],
          label: "PSP22Metadata::token_decimals",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 20,
          },
          selector: "0x7271b782",
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
            type: 13,
          },
          selector: "0xfc3c75d4",
        },
        {
          args: [
            {
              label: "account",
              type: {
                displayName: ["psp22burnable_external", "BurnInput1"],
                type: 1,
              },
            },
            {
              label: "amount",
              type: {
                displayName: ["psp22burnable_external", "BurnInput2"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [],
          label: "PSP22Burnable::burn",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 13,
          },
          selector: "0x7a9da510",
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
            type: 21,
          },
          selector: "0x4fa43c8c",
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
            type: 23,
          },
          selector: "0x11f43efd",
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
            type: 23,
          },
          selector: "0x5e228753",
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
            type: 26,
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
                          root: {
                            layout: {
                              enum: {
                                dispatchKey: "0x90a00b7d",
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
                                            key: "0x90a00b7d",
                                            ty: 5,
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
                            root_key: "0x90a00b7d",
                          },
                        },
                        name: "name",
                      },
                      {
                        layout: {
                          root: {
                            layout: {
                              enum: {
                                dispatchKey: "0xf8019f84",
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
                                            key: "0xf8019f84",
                                            ty: 5,
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
                            root_key: "0xf8019f84",
                          },
                        },
                        name: "symbol",
                      },
                      {
                        layout: {
                          root: {
                            layout: {
                              leaf: {
                                key: "0xd29264d8",
                                ty: 3,
                              },
                            },
                            root_key: "0xd29264d8",
                          },
                        },
                        name: "decimals",
                      },
                    ],
                    name: "Data",
                  },
                },
                name: "metadata",
              },
              {
                layout: {
                  struct: {
                    fields: [
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 1,
                          },
                        },
                        name: "minter",
                      },
                    ],
                    name: "Data",
                  },
                },
                name: "data",
              },
            ],
            name: "BetTokenContract",
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
            primitive: "str",
          },
        },
      },
      {
        id: 6,
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
                      type: 5,
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
              type: 5,
            },
          ],
          path: ["Option"],
        },
      },
      {
        id: 7,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 8,
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
              type: 8,
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
        id: 8,
        type: {
          def: {
            tuple: [],
          },
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
                      type: 8,
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
              type: 8,
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
                      type: 8,
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
              type: 8,
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
                      type: 5,
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
                      type: 5,
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
        id: 16,
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
        id: 17,
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
        id: 18,
        type: {
          def: {
            sequence: {
              type: 3,
            },
          },
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
        id: 20,
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
        id: 23,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 24,
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
              type: 24,
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
                      type: 8,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 25,
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
              type: 8,
            },
            {
              name: "E",
              type: 25,
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
        id: 26,
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
        id: 27,
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
        id: 28,
        type: {
          def: {
            primitive: "u64",
          },
        },
      },
      {
        id: 29,
        type: {
          def: {
            primitive: "u32",
          },
        },
      },
      {
        id: 30,
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

export default psp22_contract;
