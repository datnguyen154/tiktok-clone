import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation"; // Import component vừa tạo

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Test Video Feed - Nguyen Xuan Dat",
    description: "TikTok/Reels Clone using Next.js & TypeScript",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} bg-zinc-950 text-white m-0 p-0 overflow-hidden`}
            >
                <div className="flex min-h-screen">
                    {/* Thanh điều hướng */}
                    <Navigation />

                    {/* Khu vực nội dung chính (Video Feed) */}
                    {/* md:pl-64 nghĩa là trên PC sẽ đẩy lùi sang phải 64px để chừa chỗ cho Sidebar */}
                    {/* pb-16 nghĩa là trên Mobile sẽ cách đáy 16px để không bị đè bởi Bottom Nav */}
                    <main className="flex-1 min-h-screen md:pl-64 pb-16 md:pb-0 flex justify-center items-center">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
