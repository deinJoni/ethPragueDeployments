/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { HelloWorld, HelloWorldInterface } from "../HelloWorld";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "initialMessage",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "message",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newMessage",
        type: "string",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161057c38038061057c83398101604081905261002f916100f8565b8051610042906000906020840190610049565b5050610202565b828054610055906101c7565b90600052602060002090601f01602090048101928261007757600085556100bd565b82601f1061009057805160ff19168380011785556100bd565b828001600101855582156100bd579182015b828111156100bd5782518255916020019190600101906100a2565b506100c99291506100cd565b5090565b5b808211156100c957600081556001016100ce565b634e487b7160e01b600052604160045260246000fd5b6000602080838503121561010b57600080fd5b82516001600160401b038082111561012257600080fd5b818501915085601f83011261013657600080fd5b815181811115610148576101486100e2565b604051601f8201601f19908116603f01168101908382118183101715610170576101706100e2565b81604052828152888684870101111561018857600080fd5b600093505b828410156101aa578484018601518185018701529285019261018d565b828411156101bb5760008684830101525b98975050505050505050565b600181811c908216806101db57607f821691505b602082108114156101fc57634e487b7160e01b600052602260045260246000fd5b50919050565b61036b806102116000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633d7403a31461003b578063e21f37ce14610050575b600080fd5b61004e6100493660046101db565b61006e565b005b610058610085565b604051610065919061028c565b60405180910390f35b8051610081906000906020840190610113565b5050565b60008054610092906102e1565b80601f01602080910402602001604051908101604052809291908181526020018280546100be906102e1565b801561010b5780601f106100e05761010080835404028352916020019161010b565b820191906000526020600020905b8154815290600101906020018083116100ee57829003601f168201915b505050505081565b82805461011f906102e1565b90600052602060002090601f0160209004810192826101415760008555610187565b82601f1061015a57805160ff1916838001178555610187565b82800160010185558215610187579182015b8281111561018757825182559160200191906001019061016c565b50610193929150610197565b5090565b5b808211156101935760008155600101610198565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000602082840312156101ed57600080fd5b813567ffffffffffffffff8082111561020557600080fd5b818401915084601f83011261021957600080fd5b81358181111561022b5761022b6101ac565b604051601f8201601f19908116603f01168101908382118183101715610253576102536101ac565b8160405282815287602084870101111561026c57600080fd5b826020860160208301376000928101602001929092525095945050505050565b600060208083528351808285015260005b818110156102b95785810183015185820160400152820161029d565b818111156102cb576000604083870101525b50601f01601f1916929092016040019392505050565b600181811c908216806102f557607f821691505b6020821081141561032f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea26469706673582212202679b583fae059a8f25a761ed76b68f00d3982e3fb3c27d5ccb93c71b0e49d7d64736f6c634300080a0033";

type HelloWorldConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HelloWorldConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HelloWorld__factory extends ContractFactory {
  constructor(...args: HelloWorldConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialMessage: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HelloWorld> {
    return super.deploy(initialMessage, overrides || {}) as Promise<HelloWorld>;
  }
  override getDeployTransaction(
    initialMessage: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialMessage, overrides || {});
  }
  override attach(address: string): HelloWorld {
    return super.attach(address) as HelloWorld;
  }
  override connect(signer: Signer): HelloWorld__factory {
    return super.connect(signer) as HelloWorld__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HelloWorldInterface {
    return new utils.Interface(_abi) as HelloWorldInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HelloWorld {
    return new Contract(address, _abi, signerOrProvider) as HelloWorld;
  }
}
