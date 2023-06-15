import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Alisher Rustamov</title>
      </head>
      <body className={inter.className}> {children}</body>
    </html>
  );
}

!(function () {
  var t = (window.driftt = window.drift = window.driftt || []);
  if (!t.init) {
    if (t.invoked)
      return void (
        window.console &&
        console.error &&
        console.error("Drift snippet included twice.")
      );
    (t.invoked = !0),
      (t.methods = [
        "identify",
        "config",
        "track",
        "reset",
        "debug",
        "show",
        "ping",
        "page",
        "hide",
        "off",
        "on",
      ]),
      (t.factory = function (e) {
        return function () {
          var n = Array.prototype.slice.call(arguments);
          return n.unshift(e), t.push(n), t;
        };
      }),
      t.methods.forEach(function (e) {
        t[e] = t.factory(e);
      }),
      (t.load = function (t) {
        var e = 3e5,
          n = Math.ceil(new Date() / e) * e,
          o = document.createElement("script");
        (o.type = "text/javascript"),
          (o.async = !0),
          (o.crossorigin = "anonymous"),
          (o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js");
        var i = document.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(o, i);
      });
  }
})();
drift.SNIPPET_VERSION = "0.3.1";
drift.load("vfv35er72cr6");
