import * as grpcWeb from 'grpc-web';

import * as mozolm_models_lm_scores_pb from '../../mozolm/models/lm_scores_pb';
import * as mozolm_grpc_service_pb from '../../mozolm/grpc/service_pb';


export class MozoLMServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getLMScores(
    request: mozolm_grpc_service_pb.GetContextRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: mozolm_models_lm_scores_pb.LMScores) => void
  ): grpcWeb.ClientReadableStream<mozolm_models_lm_scores_pb.LMScores>;

  getNextState(
    request: mozolm_grpc_service_pb.GetContextRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: mozolm_grpc_service_pb.NextState) => void
  ): grpcWeb.ClientReadableStream<mozolm_grpc_service_pb.NextState>;

  updateLMScores(
    request: mozolm_grpc_service_pb.UpdateLMScoresRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: mozolm_models_lm_scores_pb.LMScores) => void
  ): grpcWeb.ClientReadableStream<mozolm_models_lm_scores_pb.LMScores>;

}

export class MozoLMServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getLMScores(
    request: mozolm_grpc_service_pb.GetContextRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mozolm_models_lm_scores_pb.LMScores>;

  getNextState(
    request: mozolm_grpc_service_pb.GetContextRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mozolm_grpc_service_pb.NextState>;

  updateLMScores(
    request: mozolm_grpc_service_pb.UpdateLMScoresRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mozolm_models_lm_scores_pb.LMScores>;

}

