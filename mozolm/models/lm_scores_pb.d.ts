// package: mozolm
// file: mozolm/models/lm_scores.proto

import * as jspb from "google-protobuf";

export class LMScores extends jspb.Message {
  clearSymbolsList(): void;
  getSymbolsList(): Array<string>;
  setSymbolsList(value: Array<string>): void;
  addSymbols(value: string, index?: number): string;

  clearProbabilitiesList(): void;
  getProbabilitiesList(): Array<number>;
  setProbabilitiesList(value: Array<number>): void;
  addProbabilities(value: number, index?: number): number;

  getNormalization(): number;
  setNormalization(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LMScores.AsObject;
  static toObject(includeInstance: boolean, msg: LMScores): LMScores.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LMScores, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LMScores;
  static deserializeBinaryFromReader(message: LMScores, reader: jspb.BinaryReader): LMScores;
}

export namespace LMScores {
  export type AsObject = {
    symbolsList: Array<string>,
    probabilitiesList: Array<number>,
    normalization: number,
  }
}

