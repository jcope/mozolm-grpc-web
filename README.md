MozoLM GRPC-Web Service Stubs

Genereated from [mozoLM Service Binaries](https://github.com/google-research/mozolm).

## Build MacOS
```
export BAZEL=bazelisk-darwin-amd64
export CC=gcc-9
export CXX=g++-9
curl -sLO "https://github.com/bazelbuild/bazelisk/releases/latest/download/$BAZEL"
chmod +x $BAZEL
./$BAZEL build mozolm/models:lm_scores_jspb_proto
./$BAZEL build mozolm/grpc:service_js_grpc_proto_web
```

## Copy Artifacts
```
cp -a ../../../bazel-bin/mozolm/models/lm_scores_jspb_proto_pb/. ./
cp -a ../../../bazel-bin/mozolm/grpc/service_js_grpc_proto_web_pb/. ./
```

## Run Locally
```
./bazel-bin/mozolm/grpc/server_async \
  --server_config="address_uri:\"localhost:9090\" \
    model_hub_config { model_config { type:PPM_AS_FST storage { \
    model_file:\"$TEXTFILE\" ppm_options { max_order: 4 \
    static_model: false } } } }"
```
## Run via Docker
```
docker run --init --net=host -v ~/:/data gcr.io/mozolm-release/server_async \
   --server_config="address_uri:\"0.0.0.0:9090\" model_hub_config { model_config { \
     type:PPM_AS_FST storage { model_file:\"/data/training.txt\" ppm_options { \
     max_order: 4 static_model: false } } } }"
```
