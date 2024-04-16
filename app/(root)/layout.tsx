import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <div className="flex h-screen flex-col">
        <Header/>
        <main className="flex-1">{children}</main>
        {/* we don't need className defining font becasue we have already defined it in main layout.tsx */}
        <Footer/>
    </div>
    );
  }
  