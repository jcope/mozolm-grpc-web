//const LMScores = require('./mozolm/grpc/service_pb.js').LMScores;
//const GetContextRequest = require('./mozolm/grpc/service_pb.js').GetContextRequest;
//const NextState = require('./mozolm/grpc/service_pb.js').NextState;
//const UpdateLMScoresRequest = require('./mozolm/grpc/service_pb.js').UpdateLMScoresRequest;

const {LMScores, GetContextRequest, NextState,
       UpdateLMScoresRequest} = require('./mozolm/grpc/service_pb.js');

const {MozoLMServiceClient} = require('./mozolm/grpc/service_grpc_web_pb.js');


module.exports = {
    LMScores,
    GetContextRequest,
    NextState,
    UpdateLMScoresRequest,
    MozoLMServiceClient
}
