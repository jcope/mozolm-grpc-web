/**
 * @fileoverview gRPC-Web generated client stub for mozolm.grpc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var mozolm_models_lm_scores_pb = require('../../mozolm/models/lm_scores_pb.js')
const proto = {};
proto.mozolm = {};
proto.mozolm.grpc = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.mozolm.grpc.MozoLMServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.mozolm.grpc.MozoLMServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mozolm.grpc.GetContextRequest,
 *   !proto.mozolm.LMScores>}
 */
const methodDescriptor_MozoLMService_GetLMScores = new grpc.web.MethodDescriptor(
  '/mozolm.grpc.MozoLMService/GetLMScores',
  grpc.web.MethodType.UNARY,
  proto.mozolm.grpc.GetContextRequest,
  mozolm_models_lm_scores_pb.LMScores,
  /**
   * @param {!proto.mozolm.grpc.GetContextRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mozolm_models_lm_scores_pb.LMScores.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mozolm.grpc.GetContextRequest,
 *   !proto.mozolm.LMScores>}
 */
const methodInfo_MozoLMService_GetLMScores = new grpc.web.AbstractClientBase.MethodInfo(
  mozolm_models_lm_scores_pb.LMScores,
  /**
   * @param {!proto.mozolm.grpc.GetContextRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mozolm_models_lm_scores_pb.LMScores.deserializeBinary
);


/**
 * @param {!proto.mozolm.grpc.GetContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mozolm.LMScores)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mozolm.LMScores>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mozolm.grpc.MozoLMServiceClient.prototype.getLMScores =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mozolm.grpc.MozoLMService/GetLMScores',
      request,
      metadata || {},
      methodDescriptor_MozoLMService_GetLMScores,
      callback);
};


/**
 * @param {!proto.mozolm.grpc.GetContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mozolm.LMScores>}
 *     Promise that resolves to the response
 */
proto.mozolm.grpc.MozoLMServicePromiseClient.prototype.getLMScores =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mozolm.grpc.MozoLMService/GetLMScores',
      request,
      metadata || {},
      methodDescriptor_MozoLMService_GetLMScores);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mozolm.grpc.GetContextRequest,
 *   !proto.mozolm.grpc.NextState>}
 */
const methodDescriptor_MozoLMService_GetNextState = new grpc.web.MethodDescriptor(
  '/mozolm.grpc.MozoLMService/GetNextState',
  grpc.web.MethodType.UNARY,
  proto.mozolm.grpc.GetContextRequest,
  proto.mozolm.grpc.NextState,
  /**
   * @param {!proto.mozolm.grpc.GetContextRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mozolm.grpc.NextState.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mozolm.grpc.GetContextRequest,
 *   !proto.mozolm.grpc.NextState>}
 */
const methodInfo_MozoLMService_GetNextState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.mozolm.grpc.NextState,
  /**
   * @param {!proto.mozolm.grpc.GetContextRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mozolm.grpc.NextState.deserializeBinary
);


/**
 * @param {!proto.mozolm.grpc.GetContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mozolm.grpc.NextState)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mozolm.grpc.NextState>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mozolm.grpc.MozoLMServiceClient.prototype.getNextState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mozolm.grpc.MozoLMService/GetNextState',
      request,
      metadata || {},
      methodDescriptor_MozoLMService_GetNextState,
      callback);
};


/**
 * @param {!proto.mozolm.grpc.GetContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mozolm.grpc.NextState>}
 *     Promise that resolves to the response
 */
proto.mozolm.grpc.MozoLMServicePromiseClient.prototype.getNextState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mozolm.grpc.MozoLMService/GetNextState',
      request,
      metadata || {},
      methodDescriptor_MozoLMService_GetNextState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mozolm.grpc.UpdateLMScoresRequest,
 *   !proto.mozolm.LMScores>}
 */
const methodDescriptor_MozoLMService_UpdateLMScores = new grpc.web.MethodDescriptor(
  '/mozolm.grpc.MozoLMService/UpdateLMScores',
  grpc.web.MethodType.UNARY,
  proto.mozolm.grpc.UpdateLMScoresRequest,
  mozolm_models_lm_scores_pb.LMScores,
  /**
   * @param {!proto.mozolm.grpc.UpdateLMScoresRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mozolm_models_lm_scores_pb.LMScores.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mozolm.grpc.UpdateLMScoresRequest,
 *   !proto.mozolm.LMScores>}
 */
const methodInfo_MozoLMService_UpdateLMScores = new grpc.web.AbstractClientBase.MethodInfo(
  mozolm_models_lm_scores_pb.LMScores,
  /**
   * @param {!proto.mozolm.grpc.UpdateLMScoresRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mozolm_models_lm_scores_pb.LMScores.deserializeBinary
);


/**
 * @param {!proto.mozolm.grpc.UpdateLMScoresRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mozolm.LMScores)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mozolm.LMScores>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mozolm.grpc.MozoLMServiceClient.prototype.updateLMScores =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mozolm.grpc.MozoLMService/UpdateLMScores',
      request,
      metadata || {},
      methodDescriptor_MozoLMService_UpdateLMScores,
      callback);
};


/**
 * @param {!proto.mozolm.grpc.UpdateLMScoresRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mozolm.LMScores>}
 *     Promise that resolves to the response
 */
proto.mozolm.grpc.MozoLMServicePromiseClient.prototype.updateLMScores =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mozolm.grpc.MozoLMService/UpdateLMScores',
      request,
      metadata || {},
      methodDescriptor_MozoLMService_UpdateLMScores);
};


module.exports = proto.mozolm.grpc;

