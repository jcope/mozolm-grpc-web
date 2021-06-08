MozoLM GRPC-Web Service Stubs

Genereated from [mozoLM Service Binaries](https://github.com/google-research/mozolm).

MacOS
bazel build -c opt --host_copt=-DGRPC_BAZEL_BUILD //...
./$BAZEL build mozolm/models:lm_scores_jspb_proto
./$BAZEL build mozolm/grpc:service_js_grpc_proto_web


## Deploy

npm publish
