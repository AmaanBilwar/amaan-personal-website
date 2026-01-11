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
              service method types
            </h3>
            <p className="mb-4">gRPC lets you define four kinds of service methods:</p>

            <ul className="space-y-4 text-stone-300 list-disc list-inside ml-4">
              <li>
                <strong className="text-white">Unary RPCs</strong>: single request, single
                response.
                <pre className="bg-stone-800/50 p-3 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700 mt-2">
                  {`rpc GetUser(UserRequest) returns (UserResponse);`}
                </pre>
              </li>

              <li>
                <strong className="text-white">Server streaming RPCs</strong>: client sends
                request, receives stream of messages.
                <pre className="bg-stone-800/50 p-3 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700 mt-2">
                  {`rpc ListItems(ListRequest) returns (stream ItemResponse);`}
                </pre>
              </li>

              <li>
                <strong className="text-white">Client streaming RPCs</strong>: client sends stream
                of messages, receives single response.
                <pre className="bg-stone-800/50 p-3 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700 mt-2">
                  {`rpc UploadData(stream DataChunk) returns (UploadResponse);`}
                </pre>
              </li>

              <li>
                <strong className="text-white">Bidirectional streaming RPCs</strong>: both sides
                send streams of messages independently.
                <pre className="bg-stone-800/50 p-3 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700 mt-2">
                  {`rpc Chat(stream MessageRequest) returns (stream MessageResponse);`}
                </pre>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.grpc.whyGoodTitle')}
            </h2>

            <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-2 mt-6">
              {t('blog.grpc.httpVsHttp2Title')}
            </h3>
            <p className="mb-6 whitespace-pre-wrap">{t('blog.grpc.whyGoodText')}</p>
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
            <div className="my-6">
              <img
                src="/blogs/grpc/rest_vs_rpc.png"
                alt="REST vs RPC comparison"
                className="w-full rounded-md border border-stone-700"
              />
              <p className="text-stone-500 italic text-center text-xs mt-1">
                REST vs RPC architecture comparison
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.grpc.grpcWithGoTitle')}
            </h2>
            <p>{t('blog.grpc.grpcWithGoText')}</p>
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
