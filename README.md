# regression in @grpc/grpc-js v1.8.0 - error responses

## env
- MacOS v12.6 
- Node v16.19.0
- Npm v8.19.3
- [grpcurl](https://github.com/fullstorydev/grpcurl)

## usage
`npm i && npm run start`

_in another shell:_
```
<repo-dir> grpcurl -plaintext -d '{}' -import-path ./src/proto -proto example/service.proto 127.0.0.1:8082 example.FailingService/Fail
```

## problem
- with `@grpc/grpc-js@1.7.3`: 
```
<repo-dir> grpcurl -plaintext -d '{}' -import-path ./src/proto -proto example/service.proto 127.0.0.1:8082 example.FailingService/Fail
ERROR:
  Code: AlreadyExists
  Message: some details
```

- with `@grpc/grpc-js@1.8.0`:
```
<repo-dir> grpcurl -plaintext -d '{}' -import-path ./src/proto -proto example/service.proto 127.0.0.1:8082 example.FailingService/Fail
ERROR:
  Code: Unknown
  Message: malformed header: missing HTTP content-type
```

