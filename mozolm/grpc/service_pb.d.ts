// package: mozolm.grpc
// file: mozolm/grpc/service.proto

import * as jspb from "google-protobuf";
import * as mozolm_models_lm_scores_pb from "../../mozolm/models/lm_scores_pb";

export class GetContextRequest extends jspb.Message {
  getState(): number;
  setState(value: number): void;

  getContext(): string;
  setContext(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContextRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContextRequest): GetContextRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContextRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContextRequest;
  static deserializeBinaryFromReader(message: GetContextRequest, reader: jspb.BinaryReader): GetContextRequest;
}

export namespace GetContextRequest {
  export type AsObject = {
    state: number,
    context: string,
  }
}

export class NextState extends jspb.Message {
  getNextState(): number;
  setNextState(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NextState.AsObject;
  static toObject(includeInstance: boolean, msg: NextState): NextState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NextState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NextState;
  static deserializeBinaryFromReader(message: NextState, reader: jspb.BinaryReader): NextState;
}

export namespace NextState {
  export type AsObject = {
    nextState: number,
  }
}

export class UpdateLMScoresRequest extends jspb.Message {
  getState(): number;
  setState(value: number): void;

  clearUtf8SymList(): void;
  getUtf8SymList(): Array<number>;
  setUtf8SymList(value: Array<number>): void;
  addUtf8Sym(value: number, index?: number): number;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLMScoresRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLMScoresRequest): UpdateLMScoresRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLMScoresRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLMScoresRequest;
  static deserializeBinaryFromReader(message: UpdateLMScoresRequest, reader: jspb.BinaryReader): UpdateLMScoresRequest;
}

export namespace UpdateLMScoresRequest {
  export type AsObject = {
    state: number,
    utf8SymList: Array<number>,
    count: number,
  }
}

