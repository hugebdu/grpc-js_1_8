const {loadSync} = require("@grpc/proto-loader");
const path = require("node:path");
const grpc = require("@grpc/grpc-js");

const descriptor = grpc.loadPackageDefinition(loadSync(path.resolve(__dirname, "proto", "example", "service.proto")));

const server = new grpc.Server();

server.addService(descriptor.example.FailingService.service, {
  fail(call, callback) {
    callback(new grpc.StatusBuilder()
      .withCode(grpc.status.ALREADY_EXISTS)
      .withDetails("some details")
      .build());
  }
})

server.bindAsync("0.0.0.0:8082", grpc.ServerCredentials.createInsecure(), (error, port) => {
  if (error) {
    console.error("gRPC startup failed", error);
    process.exit(-1);
  }
  server.start();
  console.info(`gRPC server is listening on port ${port}`);
});