import { Home, Compass, User } from "lucide-react"; 
// Nếu chưa cài lucide-react, bạn có thể thay bằng icon text hoặc svg tùy ý.
// Ở đây mình viết layout bằng text kèm icon cơ bản để bạn dễ hình dung.

export default function Navigation() {
  const navItems = [
    { icon: "🏠", label: "Trang chủ" },
    { icon: "🧭", label: "Khám phá" },
    { icon: "👤", label: "Hồ sơ" },
  ];

  return (
    <>
      {/* 1. SIDEBAR CHO PC (Màn hình md trở lên sẽ hiện, dưới md sẽ ẩn) */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-black border-r border-gray-800 text-white p-6 z-50">
        <div className="text-xl font-bold mb-10 tracking-wider text-red-500">
          TIKTOK CLONE
        </div>
        <nav className="flex flex-col gap-4">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-4 text-lg font-medium p-3 hover:bg-gray-900 rounded-xl transition duration-200 w-full text-left"
            >
              <span className="text-2xl">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* 2. BOTTOM NAV CHO MOBILE (Dưới md sẽ hiện, md trở lên sẽ ẩn) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-black border-t border-gray-800 text-white flex justify-around items-center z-50 px-4">
        {navItems.map((item, index) => (
          <button
            key={index}
            className="flex flex-col items-center justify-center text-xs text-gray-400 hover:text-white transition duration-200"
          >
            <span className="text-xl mb-1">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}