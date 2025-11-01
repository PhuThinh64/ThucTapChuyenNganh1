import { useState } from "react";
import { Search, MapPin, Calendar, Users, Star, ArrowRight, Clock, Zap } from "lucide-react";

export default function Index() {
  const [selectedDate, setSelectedDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const venues = [
    {
      id: 1,
      name: "Sân bóng Trung Tâm",
      location: "Quận 1, TP.HCM",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      price: "300,000",
      rating: 4.8,
      reviews: 128,
      features: ["5v5", "7v7", "11v11"],
    },
    {
      id: 2,
      name: "Sân bóng Khu Đô Thị",
      location: "Quận 2, TP.HCM",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      price: "350,000",
      rating: 4.9,
      reviews: 256,
      features: ["5v5", "7v7", "11v11"],
    },
    {
      id: 3,
      name: "Sân bóng Công Viên",
      location: "Quận 7, TP.HCM",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      price: "280,000",
      rating: 4.7,
      reviews: 89,
      features: ["5v5", "7v7"],
    },
    {
      id: 4,
      name: "Sân bóng Thể Thao",
      location: "Quận 12, TP.HCM",
      image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      price: "320,000",
      rating: 4.6,
      reviews: 156,
      features: ["5v5", "7v7", "11v11"],
    },
  ];

  const stats = [
    { label: "Sân bóng", value: "150+" },
    { label: "Người dùng", value: "25,000+" },
    { label: "Đặt sân/tháng", value: "10,000+" },
    { label: "Thành phố", value: "5" },
  ];

  const steps = [
    {
      icon: Search,
      title: "Tìm kiếm",
      description: "Tìm sân bóng gần nhất và phù hợp với nhu cầu của bạn",
    },
    {
      icon: Calendar,
      title: "Chọn thời gian",
      description: "Lựa chọn ngày giờ chơi bóng có sẵn",
    },
    {
      icon: Zap,
      title: "Đặt ngay",
      description: "Hoàn tất booking chỉ trong vài giây",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚽</span>
            </div>
            <span className="font-bold text-xl text-gray-900">SânBóng</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">Tìm sân</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">Về chúng tôi</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">Liên hệ</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
              Đăng nhập
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Đặt sân bóng <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">dễ dàng</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Tìm, đặt và chơi bóng tại các sân đẳng cấp gần nhất trong vài giây
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
            <div className="grid sm:grid-cols-4 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Tìm kiếm</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Nhập địa điểm..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ngày chơi</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="sm:flex sm:items-end">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition flex items-center justify-center gap-2">
                  <Search className="w-5 h-5" />
                  <span className="hidden sm:inline">Tìm kiếm</span>
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Venues */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sân bóng nổi bật</h2>
            <p className="text-gray-600 text-lg">Các sân bóng được yêu thích nhất tại thành phố</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {venues.map((venue) => (
              <div key={venue.id} className="group cursor-pointer h-full">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <div
                    className="h-48 bg-cover bg-center group-hover:scale-105 transition duration-300"
                    style={{ background: venue.image }}
                  />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">{venue.name}</h3>
                <div className="flex items-center gap-1 text-gray-600 text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  {venue.location}
                </div>
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(venue.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({venue.reviews})</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  {venue.features.map((feature, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">{venue.price}</span>
                    <span className="text-gray-600 text-sm">/90 phút</span>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-lg transition">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cách thức hoạt động</h2>
            <p className="text-gray-600 text-lg">3 bước đơn giản để đặt sân bóng của bạn</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4 text-2xl font-bold">
                    {idx + 1}
                  </div>
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Sẵn sàng đặt sân?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Tham gia hơn 25,000 người dùng đang thưởng thức những trận bóng tuyệt vời
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold text-lg transition inline-block">
            Bắt đầu ngay
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center">
                <span className="text-white font-bold">⚽</span>
              </div>
              <span className="font-bold text-white">SânBóng</span>
            </div>
            <p className="text-sm">Nền tảng đặt sân bóng số 1 tại Việt Nam</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Công ty</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Tuyển dụng</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Hỗ trợ</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Liên hệ</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Điều khoản</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Kết nối</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 text-sm text-center">
          <p>&copy; 2024 SânBóng. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
