import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { NavbarWithMegaMenu } from "@/components/Navbar/NavListMenu";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Khana's",
  description: "Bet You Can't Eat Less",
};
<script>AOS.init();</script>;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <main className=" max-w-[1920px] mx-auto ">
          <NavbarWithMegaMenu />
          <div className="items-center justify-center min-h-screen ">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
