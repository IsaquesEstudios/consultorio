import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Clinica Bruna Telemberg",
  description: "Clinica bruna telemberg",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXZNHFG');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PXZNHFG"
            height="0"
            width="0"
          ></iframe>
        </noscript>
        {children}
        <footer>
          <p className="text-sm text-center py-2">
            Todos os <Link href="/politica-de-privacidade">termos de uso</Link> deste site
          </p>
        </footer>
      </body>
    </html>
  );
}
