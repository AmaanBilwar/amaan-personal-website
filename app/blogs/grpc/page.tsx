'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

export default function GrpcBlog() {
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    document.title = `${t('blog.grpc.title')} | Nicholas Chen`;
  }, [t, language]);

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 py-12 px-4 md:px-8">
      <article className="max-w-lg mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-100 hover:bg-stone-800/80 transition-colors mb-4 text-sm px-2 py-1 -ml-2 rounded-md"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {t('blog.back')}
        </Link>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">{t('blog.grpc.title')}</h1>
        <p className="text-stone-500 text-sm mb-6">{t('blog.grpc.date')}</p>

        {/* Cover image */}
        <img src="/blogs/grpc/grpc_logo.png" alt="gRPC" className="w-full mb-6" />
        <hr className="border-stone-700 mb-8" />

        {/* Content */}
        <div className="space-y-8 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
          <section>
            <p>{t('blog.grpc.intro')}</p>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.grpc.whatIsTitle')}
            </h2>
            <p>{t('blog.grpc.whatIsText')}</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.grpc.howItWorksTitle')}
            </h2>
            <p className="mb-6">{t('blog.grpc.howItWorksText1')}</p>

            <div className="mt-6 bg-white rounded-md p-4">
              <img
                src="/blogs/grpc/architecture-grpc.jpg"
                alt="gRPC Architecture"
                className="w-full h-auto"
              />
            </div>
            <p className="text-stone-500 italic text-center text-xs mt-2">
              gRPC architecture: client stub and server stub interaction
            </p>

            <p className="mt-6">{t('blog.grpc.howItWorksText2')}</p>

            <div className="mt-8">
              <pre className="bg-stone-800/50 p-4 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700">
                {`syntax = "proto3";

package greeting;

// The greeting service definition.
service Greeter {
  // Sends a greeting
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}

// The request message containing the user's name.
message HelloRequest {
  string name = 1;
}

// The response message containing the greetings
message HelloReply {
  string message = 1;
}`}
              </pre>
              <p className="text-stone-500 italic text-center text-xs mt-1">
                example .proto service definition
              </p>
            </div>

            <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
              using the API
            </h3>
            <p className="mb-4">
              starting from a .proto file, gRPC compiler plugins generate client- and server-side
              code. the server implements the service methods and runs a gRPC server to handle
              calls. the client uses a local stub object that implements the same methods, wrapping
              parameters in protocol buffer messages and sending requests to the server.
            </p>
            <p className="mb-4">
              gRPC APIs support both synchronous (blocking) and asynchronous (non-blocking) calls,
              useful for different network operation scenarios.
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
              service method types
            </h3>
            <p className="mb-4">gRPC lets you define four kinds of service methods:</p>

            <ul className="space-y-4 text-stone-300 list-disc list-inside ml-4">
              <li>
                <strong className="text-white">unary RPCs</strong>: single request, single
                response.
                <pre className="bg-stone-800/50 p-3 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700 mt-2">
                  {`rpc GetUser(UserRequest) returns (UserResponse);`}
                </pre>
              </li>

              <li>
                <strong className="text-white">server streaming RPCs</strong>: client sends
                request, receives stream of messages.
                <pre className="bg-stone-800/50 p-3 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700 mt-2">
                  {`rpc ListItems(ListRequest) returns (stream ItemResponse);`}
                </pre>
              </li>

              <li>
                <strong className="text-white">client streaming RPCs</strong>: client sends stream
                of messages, receives single response.
                <pre className="bg-stone-800/50 p-3 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700 mt-2">
                  {`rpc UploadData(stream DataChunk) returns (UploadResponse);`}
                </pre>
              </li>

              <li>
                <strong className="text-white">bidirectional streaming RPCs</strong>: both sides
                send streams of messages independently.
                <pre className="bg-stone-800/50 p-3 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700 mt-2">
                  {`rpc Chat(stream MessageRequest) returns (stream MessageResponse);`}
                </pre>
              </li>
            </ul>

            <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
              deadlines and timeouts
            </h3>
            <p className="mb-4">
              clients can specify how long to wait for an RPC before it's terminated with
              DEADLINE_EXCEEDED. servers can query timeout status and remaining time.
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
              RPC termination and cancellation
            </h3>
            <p className="mb-4">
              client and server make independent determinations of call success, so their
              conclusions may not match. either side can cancel an RPC at any time, which terminates
              it immediately. changes made before cancellation are not rolled back.
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
              metadata
            </h3>
            <p className="mb-4">
              metadata is key-value pairs containing information about an RPC call (e.g.,
              authentication). keys are case-insensitive ASCII strings, must not start with grpc-
              (reserved), and binary-valued keys end in -bin.
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">channels</h3>
            <p className="mb-4">
              a gRPC channel provides a connection to a server on a specified host and port, used
              when creating client stubs. clients can configure channel arguments to modify gRPC
              behavior (e.g., message compression). channels have state (connected, idle).
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
              error handling
            </h3>
            <p className="mb-4">
              gRPC uses a standardized error model with status codes. common status codes include
              OK, INVALID_ARGUMENT, NOT_FOUND, UNAVAILABLE, and DEADLINE_EXCEEDED. errors include
              both a status code and an optional error message, providing consistent error handling
              across languages.
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
              security and authentication
            </h3>
            <p className="mb-4">
              gRPC supports TLS (transport layer security) for encrypted communication between
              client and server. mTLS (mutual TLS) provides mutual authentication where both sides
              verify each other's certificates. authentication credentials can also be passed via
              metadata, allowing for various authentication mechanisms including OAuth2, JWT tokens,
              and API keys.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.grpc.whyGoodTitle')}
            </h2>

            <p className="mb-6">
              gRPC leverages HTTP/2's multiplexing, header compression, and binary framing for
              better efficiency than REST/HTTP/1.1. The .proto contract enables automatic code
              generation in multiple languages, ensuring type safety. Native streaming support
              (server, client, or bidirectional) makes it ideal for real-time apps, large file
              transfers, and long-lived connections.
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-2 mt-6">
              {t('blog.grpc.httpVsHttp2Title')}
            </h3>
            <p className="mb-6">
              gRPC uses HTTP/2 as its transport protocol, which provides significant improvements
              over HTTP/1.1. The following table compares the key features of both protocols.
            </p>

            <div className="my-6 overflow-x-auto">
              <table className="w-full border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="text-left py-3 px-4 font-semibold text-white">feature</th>
                    <th className="text-left py-3 px-4 font-semibold text-white">HTTP/1.1</th>
                    <th className="text-left py-3 px-4 font-semibold text-white">HTTP/2</th>
                  </tr>
                </thead>
                <tbody className="text-stone-300">
                  <tr className="border-b border-stone-800">
                    <td className="py-3 px-4 font-medium text-stone-200">multiplexing</td>
                    <td className="py-3 px-4">no (one request per connection)</td>
                    <td className="py-3 px-4">yes (multiple requests over single connection)</td>
                  </tr>
                  <tr className="border-b border-stone-800">
                    <td className="py-3 px-4 font-medium text-stone-200">header compression</td>
                    <td className="py-3 px-4">no</td>
                    <td className="py-3 px-4">yes (HPACK)</td>
                  </tr>
                  <tr className="border-b border-stone-800">
                    <td className="py-3 px-4 font-medium text-stone-200">framing</td>
                    <td className="py-3 px-4">text-based</td>
                    <td className="py-3 px-4">binary framing</td>
                  </tr>
                  <tr className="border-b border-stone-800">
                    <td className="py-3 px-4 font-medium text-stone-200">server push</td>
                    <td className="py-3 px-4">no</td>
                    <td className="py-3 px-4">yes</td>
                  </tr>
                  <tr className="border-b border-stone-800">
                    <td className="py-3 px-4 font-medium text-stone-200">request prioritization</td>
                    <td className="py-3 px-4">no</td>
                    <td className="py-3 px-4">yes</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-stone-200">efficiency</td>
                    <td className="py-3 px-4">higher latency, more bandwidth</td>
                    <td className="py-3 px-4">lower latency, reduced bandwidth</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="my-6">
              <img
                src="/blogs/grpc/http2.png"
                alt="HTTP 1.1 vs HTTP/2"
                className="w-full rounded-md border border-stone-700"
              />
              <p className="text-stone-500 italic text-center text-xs mt-1">
                http/1.1 vs http/2 multiplexing
              </p>
            </div>

            <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-2 mt-8">
              {t('blog.grpc.rpcVsRestTitle')}
            </h3>
            <p className="mb-6 whitespace-pre-wrap">{t('blog.grpc.rpcVsRestText')}</p>

            <div className="my-6 overflow-x-auto">
              <table className="w-full border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="text-left py-3 px-4 font-semibold text-white">feature</th>
                    <th className="text-left py-3 px-4 font-semibold text-white">gRPC</th>
                    <th className="text-left py-3 px-4 font-semibold text-white">REST</th>
                  </tr>
                </thead>
                <tbody className="text-stone-300">
                  <tr className="border-b border-stone-800">
                    <td className="py-3 px-4 font-medium text-stone-200">transport</td>
                    <td className="py-3 px-4">HTTP/2</td>
                    <td className="py-3 px-4">HTTP/1.1</td>
                  </tr>
                  <tr className="border-b border-stone-800">
                    <td className="py-3 px-4 font-medium text-stone-200">data format</td>
                    <td className="py-3 px-4">protocol buffers (binary)</td>
                    <td className="py-3 px-4">JSON (text)</td>
                  </tr>
                  <tr className="border-b border-stone-800">
                    <td className="py-3 px-4 font-medium text-stone-200">streaming</td>
                    <td className="py-3 px-4">native support</td>
                    <td className="py-3 px-4">limited (SSE, WebSocket)</td>
                  </tr>
                  <tr className="border-b border-stone-800">
                    <td className="py-3 px-4 font-medium text-stone-200">code generation</td>
                    <td className="py-3 px-4">automatic from .proto</td>
                    <td className="py-3 px-4">manual</td>
                  </tr>
                  <tr className="border-b border-stone-800">
                    <td className="py-3 px-4 font-medium text-stone-200">type safety</td>
                    <td className="py-3 px-4">enforced by contract</td>
                    <td className="py-3 px-4">runtime validation</td>
                  </tr>
                  <tr className="border-b border-stone-800">
                    <td className="py-3 px-4 font-medium text-stone-200">performance</td>
                    <td className="py-3 px-4">high (multiplexing, compression)</td>
                    <td className="py-3 px-4">lower latency, more bandwidth</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-stone-200">browser support</td>
                    <td className="py-3 px-4">limited (gRPC-Web required)</td>
                    <td className="py-3 px-4">native</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.grpc.grpcWithGoTitle')}
            </h2>
            <p className="mb-4">
              gRPC and go are a match made in heaven. since both originated from google, gRPC
              support in go is first-class. the go ecosystem embraces gRPC for microservices due
              to go's concurrency model (goroutines) which handles HTTP/2 multiplexing efficiently.
            </p>
            <p className="mb-4">
              while go has excellent gRPC support, gRPC itself supports many languages including
              java, python, c++, node.js, rust, ruby, php, and more. code generation ensures
              consistent behavior across all language implementations.
            </p>
            <p className="mb-4">
              to use gRPC with go, define your service in a .proto file and use the protoc compiler
              with protoc-gen-go and protoc-gen-go-grpc plugins. this generates message structs and
              service interfaces. on the server, implement the generated interface and register it
              with grpc.NewServer(). on the client, use grpc.Dial() to connect and create a client
              stub. the generated code is idiomatic go.
            </p>

            <div className="my-6">
              <img
                src="/blogs/grpc/go.png"
                alt="gRPC with Go"
                className="w-full max-h-64 object-contain rounded-md border border-stone-700"
              />
            </div>

            <div className="mt-8">
              <pre className="bg-stone-800/50 p-4 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700">
                {`// Server implementation
type server struct {
    pb.UnimplementedGreeterServer
}

func (s *server) SayHello(ctx context.Context, req *pb.HelloRequest) (*pb.HelloReply, error) {
    return &pb.HelloReply{Message: "Hello " + req.Name}, nil
}

func main() {
    lis, _ := net.Listen("tcp", ":50051")
    s := grpc.NewServer()
    pb.RegisterGreeterServer(s, &server{})
    s.Serve(lis)
}`}
              </pre>
              <p className="text-stone-500 italic text-center text-xs mt-1">
                example gRPC server implementation in go
              </p>
            </div>

            <div className="mt-6">
              <pre className="bg-stone-800/50 p-4 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700">
                {`// Client implementation
func main() {
    conn, _ := grpc.Dial("localhost:50051", grpc.WithInsecure())
    defer conn.Close()
    
    c := pb.NewGreeterClient(conn)
    ctx := context.Background()
    r, _ := c.SayHello(ctx, &pb.HelloRequest{Name: "world"})
    
    fmt.Println(r.Message)
}`}
              </pre>
              <p className="text-stone-500 italic text-center text-xs mt-1">
                example gRPC client implementation in go
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              when to use gRPC
            </h2>
            <p className="mb-4">gRPC is ideal for:</p>
            <ul className="space-y-2 text-stone-300 list-disc list-inside ml-4 mb-4">
              <li>
                microservices architectures where services need efficient, low-latency
                communication
              </li>
              <li>
                real-time systems like chat applications, gaming backends, and live data feeds
              </li>
              <li>
                mobile APIs that benefit from gRPC's binary format, reducing bandwidth usage and
                battery consumption
              </li>
              <li>
                streaming use cases such as file transfers, log aggregation, and real-time
                analytics
              </li>
            </ul>
            <p className="mb-4">gRPC is widely used by:</p>
            <ul className="space-y-2 text-stone-300 list-disc list-inside ml-4">
              <li>companies like google, netflix, and square for internal microservices communication</li>
              <li>kubernetes for its API</li>
              <li>cloudflare for edge computing</li>
            </ul>
          </section>

          <section className="border-t border-stone-700 pt-6 mt-8">
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
              {t('blog.grpc.referencesTitle')}
            </h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li>
                <a href="https://grpc.io/docs/" className="hover:text-stone-200 underline">
                  official gRPC docs
                </a>
              </li>
              <li>
                <a href="https://github.com/grpc/grpc-go" className="hover:text-stone-200 underline">
                  gRPC go repository
                </a>
              </li>
              <li>
                <a href="https://protobuf.dev/overview/" className="hover:text-stone-200 underline">
                  protocol buffers documentation
                </a>
              </li>
              <li>
                <a
                  href="https://blog.cloudflare.com/fr-fr/http3-the-past-present-and-future/"
                  className="hover:text-stone-200 underline"
                >
                  HTTP/3: the past, present and future (cloudflare)
                </a>
              </li>
              <li>
                <a
                  href="https://engineering.brevo.com/a-brief-introduction-to-grpc/"
                  className="hover:text-stone-200 underline"
                >
                  a brief introduction to gRPC (brevo)
                </a>
              </li>
              <li>
                <a
                  href="https://algodaily.com/lessons/rest-rpc-and-distributed-api-design"
                  className="hover:text-stone-200 underline"
                >
                  REST, RPC and distributed API design (algodaily)
                </a>
              </li>
            </ul>
          </section>
        </div>

        <Footer className="mt-10" />
      </article>
    </main>
  );
}
