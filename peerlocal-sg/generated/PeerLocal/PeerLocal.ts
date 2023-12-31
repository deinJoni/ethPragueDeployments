// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CommunityCreated extends ethereum.Event {
  get params(): CommunityCreated__Params {
    return new CommunityCreated__Params(this);
  }
}

export class CommunityCreated__Params {
  _event: CommunityCreated;

  constructor(event: CommunityCreated) {
    this._event = event;
  }

  get communityId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get ipfsMetadata(): string {
    return this._event.parameters[1].value.toString();
  }

  get owner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get stakingToken(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get stakingRequirement(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class MemberJoinedCommunity extends ethereum.Event {
  get params(): MemberJoinedCommunity__Params {
    return new MemberJoinedCommunity__Params(this);
  }
}

export class MemberJoinedCommunity__Params {
  _event: MemberJoinedCommunity;

  constructor(event: MemberJoinedCommunity) {
    this._event = event;
  }

  get communityId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get member(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OfferAccepted extends ethereum.Event {
  get params(): OfferAccepted__Params {
    return new OfferAccepted__Params(this);
  }
}

export class OfferAccepted__Params {
  _event: OfferAccepted;

  constructor(event: OfferAccepted) {
    this._event = event;
  }

  get communityId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get offerId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get member(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class OfferClosed extends ethereum.Event {
  get params(): OfferClosed__Params {
    return new OfferClosed__Params(this);
  }
}

export class OfferClosed__Params {
  _event: OfferClosed;

  constructor(event: OfferClosed) {
    this._event = event;
  }

  get communityId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get offerId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get member(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class OfferCreated extends ethereum.Event {
  get params(): OfferCreated__Params {
    return new OfferCreated__Params(this);
  }
}

export class OfferCreated__Params {
  _event: OfferCreated;

  constructor(event: OfferCreated) {
    this._event = event;
  }

  get communityId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get offerId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newOffer(): OfferCreatedNewOfferStruct {
    return changetype<OfferCreatedNewOfferStruct>(
      this._event.parameters[2].value.toTuple()
    );
  }
}

export class OfferCreatedNewOfferStruct extends ethereum.Tuple {
  get owner(): Address {
    return this[0].toAddress();
  }

  get communityId(): BigInt {
    return this[1].toBigInt();
  }

  get metadata(): string {
    return this[2].toString();
  }

  get reputationRequirement(): BigInt {
    return this[3].toBigInt();
  }

  get stakingRequirement(): BigInt {
    return this[4].toBigInt();
  }

  get offerStatus(): i32 {
    return this[5].toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PeerLocalInitalized extends ethereum.Event {
  get params(): PeerLocalInitalized__Params {
    return new PeerLocalInitalized__Params(this);
  }
}

export class PeerLocalInitalized__Params {
  _event: PeerLocalInitalized;

  constructor(event: PeerLocalInitalized) {
    this._event = event;
  }

  get erc20(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ReputationTokenBurn extends ethereum.Event {
  get params(): ReputationTokenBurn__Params {
    return new ReputationTokenBurn__Params(this);
  }
}

export class ReputationTokenBurn__Params {
  _event: ReputationTokenBurn;

  constructor(event: ReputationTokenBurn) {
    this._event = event;
  }

  get burnAmount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ReputationTokenMint extends ethereum.Event {
  get params(): ReputationTokenMint__Params {
    return new ReputationTokenMint__Params(this);
  }
}

export class ReputationTokenMint__Params {
  _event: ReputationTokenMint;

  constructor(event: ReputationTokenMint) {
    this._event = event;
  }

  get mintAmount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class collateralTokenReturned extends ethereum.Event {
  get params(): collateralTokenReturned__Params {
    return new collateralTokenReturned__Params(this);
  }
}

export class collateralTokenReturned__Params {
  _event: collateralTokenReturned;

  constructor(event: collateralTokenReturned) {
    this._event = event;
  }

  get stakingRequirementReturned(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class collateralTokenStaked extends ethereum.Event {
  get params(): collateralTokenStaked__Params {
    return new collateralTokenStaked__Params(this);
  }
}

export class collateralTokenStaked__Params {
  _event: collateralTokenStaked;

  constructor(event: collateralTokenStaked) {
    this._event = event;
  }

  get stakingRequirementStaked(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class reputationTokenReturned extends ethereum.Event {
  get params(): reputationTokenReturned__Params {
    return new reputationTokenReturned__Params(this);
  }
}

export class reputationTokenReturned__Params {
  _event: reputationTokenReturned;

  constructor(event: reputationTokenReturned) {
    this._event = event;
  }

  get reputationRequirementReturned(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class reputationTokenStaked extends ethereum.Event {
  get params(): reputationTokenStaked__Params {
    return new reputationTokenStaked__Params(this);
  }
}

export class reputationTokenStaked__Params {
  _event: reputationTokenStaked;

  constructor(event: reputationTokenStaked) {
    this._event = event;
  }

  get reputationRequirementStaked(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class PeerLocal__communitiesResult {
  value0: string;
  value1: BigInt;
  value2: Address;
  value3: Address;

  constructor(
    value0: string,
    value1: BigInt,
    value2: Address,
    value3: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    return map;
  }

  getIpfsMetadata(): string {
    return this.value0;
  }

  getStakingRequirement(): BigInt {
    return this.value1;
  }

  getOwner(): Address {
    return this.value2;
  }

  getStakingToken(): Address {
    return this.value3;
  }
}

export class PeerLocal__offersResult {
  value0: Address;
  value1: BigInt;
  value2: string;
  value3: BigInt;
  value4: BigInt;
  value5: i32;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: string,
    value3: BigInt,
    value4: BigInt,
    value5: i32
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set(
      "value5",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value5))
    );
    return map;
  }

  getOwner(): Address {
    return this.value0;
  }

  getCommunityId(): BigInt {
    return this.value1;
  }

  getMetadata(): string {
    return this.value2;
  }

  getReputationRequirement(): BigInt {
    return this.value3;
  }

  getStakingRequirement(): BigInt {
    return this.value4;
  }

  getOfferStatus(): i32 {
    return this.value5;
  }
}

export class PeerLocal extends ethereum.SmartContract {
  static bind(address: Address): PeerLocal {
    return new PeerLocal("PeerLocal", address);
  }

  communities(param0: BigInt): PeerLocal__communitiesResult {
    let result = super.call(
      "communities",
      "communities(uint256):(string,uint256,address,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new PeerLocal__communitiesResult(
      result[0].toString(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toAddress()
    );
  }

  try_communities(
    param0: BigInt
  ): ethereum.CallResult<PeerLocal__communitiesResult> {
    let result = super.tryCall(
      "communities",
      "communities(uint256):(string,uint256,address,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PeerLocal__communitiesResult(
        value[0].toString(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toAddress()
      )
    );
  }

  communityMembers(param0: BigInt, param1: BigInt): Address {
    let result = super.call(
      "communityMembers",
      "communityMembers(uint256,uint256):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toAddress();
  }

  try_communityMembers(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "communityMembers",
      "communityMembers(uint256,uint256):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  offers(param0: BigInt, param1: BigInt): PeerLocal__offersResult {
    let result = super.call(
      "offers",
      "offers(uint256,uint256):(address,uint256,string,uint256,uint256,uint8)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new PeerLocal__offersResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toString(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toI32()
    );
  }

  try_offers(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<PeerLocal__offersResult> {
    let result = super.tryCall(
      "offers",
      "offers(uint256,uint256):(address,uint256,string,uint256,uint256,uint8)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PeerLocal__offersResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toString(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toI32()
      )
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  reputationToken(): Address {
    let result = super.call(
      "reputationToken",
      "reputationToken():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_reputationToken(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "reputationToken",
      "reputationToken():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _reputationTokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptOfferCall extends ethereum.Call {
  get inputs(): AcceptOfferCall__Inputs {
    return new AcceptOfferCall__Inputs(this);
  }

  get outputs(): AcceptOfferCall__Outputs {
    return new AcceptOfferCall__Outputs(this);
  }
}

export class AcceptOfferCall__Inputs {
  _call: AcceptOfferCall;

  constructor(call: AcceptOfferCall) {
    this._call = call;
  }

  get _communityId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _offerId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AcceptOfferCall__Outputs {
  _call: AcceptOfferCall;

  constructor(call: AcceptOfferCall) {
    this._call = call;
  }
}

export class CreateCommunityCall extends ethereum.Call {
  get inputs(): CreateCommunityCall__Inputs {
    return new CreateCommunityCall__Inputs(this);
  }

  get outputs(): CreateCommunityCall__Outputs {
    return new CreateCommunityCall__Outputs(this);
  }
}

export class CreateCommunityCall__Inputs {
  _call: CreateCommunityCall;

  constructor(call: CreateCommunityCall) {
    this._call = call;
  }

  get _ipfsMetadata(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _stakingToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _stakingRequirement(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CreateCommunityCall__Outputs {
  _call: CreateCommunityCall;

  constructor(call: CreateCommunityCall) {
    this._call = call;
  }
}

export class CreateOfferCall extends ethereum.Call {
  get inputs(): CreateOfferCall__Inputs {
    return new CreateOfferCall__Inputs(this);
  }

  get outputs(): CreateOfferCall__Outputs {
    return new CreateOfferCall__Outputs(this);
  }
}

export class CreateOfferCall__Inputs {
  _call: CreateOfferCall;

  constructor(call: CreateOfferCall) {
    this._call = call;
  }

  get _communityId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _metadata(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _reputationRequirement(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _stakingRequirement(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CreateOfferCall__Outputs {
  _call: CreateOfferCall;

  constructor(call: CreateOfferCall) {
    this._call = call;
  }
}

export class EndOfferCall extends ethereum.Call {
  get inputs(): EndOfferCall__Inputs {
    return new EndOfferCall__Inputs(this);
  }

  get outputs(): EndOfferCall__Outputs {
    return new EndOfferCall__Outputs(this);
  }
}

export class EndOfferCall__Inputs {
  _call: EndOfferCall;

  constructor(call: EndOfferCall) {
    this._call = call;
  }

  get _communityId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _offerId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _finalResult(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class EndOfferCall__Outputs {
  _call: EndOfferCall;

  constructor(call: EndOfferCall) {
    this._call = call;
  }
}

export class JoinCommunityCall extends ethereum.Call {
  get inputs(): JoinCommunityCall__Inputs {
    return new JoinCommunityCall__Inputs(this);
  }

  get outputs(): JoinCommunityCall__Outputs {
    return new JoinCommunityCall__Outputs(this);
  }
}

export class JoinCommunityCall__Inputs {
  _call: JoinCommunityCall;

  constructor(call: JoinCommunityCall) {
    this._call = call;
  }

  get _communityId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _signature(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class JoinCommunityCall__Outputs {
  _call: JoinCommunityCall;

  constructor(call: JoinCommunityCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
