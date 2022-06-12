import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      {/* Font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />

      {/* <!-- REMIXICON --> */}
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      {/* <!-- SCROLL REVEAL --> */}
      <body className="md:text-[1.6rem]">
        <Main />
        <NextScript />
        {/* <!-- SCROLL REVEAL --> */}
        <script
          defer
          src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"
        ></script>
        <script defer src="/js/main.js"></script>
      </body>
    </Html>
  );
}
