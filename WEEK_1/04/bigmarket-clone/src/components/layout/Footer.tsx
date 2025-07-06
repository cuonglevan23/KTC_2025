import type { ComponentProps } from '../../types';

export function Footer({ className }: ComponentProps) {
  return (
    <footer className={`bg-gray-900 text-white py-8 ${className || ''}`}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">BG</span>
              </div>
              <span className="text-xl font-bold">MARKET</span>
            </div>
            <p className="text-gray-400 text-sm">
              Chuyên cung cấp thực phẩm khô chất lượng cao, đảm bảo an toàn vệ sinh thực phẩm.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-white">Về chúng tôi</a></li>
              <li><a href="/products" className="hover:text-white">Sản phẩm</a></li>
              <li><a href="/contact" className="hover:text-white">Liên hệ</a></li>
              <li><a href="/terms" className="hover:text-white">Điều khoản</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Chăm sóc khách hàng</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/shipping" className="hover:text-white">Chính sách giao hàng</a></li>
              <li><a href="/returns" className="hover:text-white">Chính sách đổi trả</a></li>
              <li><a href="/payment" className="hover:text-white">Chính sách thanh toán</a></li>
              <li><a href="/privacy" className="hover:text-white">Bảo mật thông tin</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Thông tin liên hệ</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 Hà Nội, Việt Nam</p>
              <p>📞 0963662226</p>
              <p>✉️ support@bigmarket.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 BigMarket. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
