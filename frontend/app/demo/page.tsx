"import client directive if needed, or Server Component"
import Link from "next/link";

export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    originalPrice: number;
    rating: number;
    image: string;
    description: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Bàn phím cơ không dây Custom KR68",
        category: "Bàn phím",
        price: 1490000,
        originalPrice: 1890000,
        rating: 4.8,
        image: "https://picsum.photos/id/160/600/400",
        description: "Bàn phím cơ layout 65%, kết nối 3 chế độ (Bluetooth, 2.4Ghz, Type-C), switch Gateron gõ cực êm."
    },
    {
        id: 2,
        name: "Chuột không dây Ergonomic Pro",
        category: "Phụ kiện",
        price: 890000,
        originalPrice: 1100000,
        rating: 4.6,
        image: "https://picsum.photos/id/20/600/400",
        description: "Thiết kế thái công học bảo vệ cổ tay, cảm biến 4000 DPI hỗ trợ làm việc liên tục 80 giờ."
    },
    {
        id: 3,
        name: "Tai nghe Chống ồn Active Noise Cancelling",
        category: "Âm thanh",
        price: 2450000,
        originalPrice: 2990000,
        rating: 4.9,
        image: "https://picsum.photos/id/180/600/400",
        description: "Âm thanh Hi-Res Audio, chống ồn chủ động ANC 35dB, thời lượng pin 40 tiếng liên tục."
    },
    {
        id: 4,
        name: "Màn hình 4K IPS 27 inch Type-C",
        category: "Màn hình",
        price: 7990000,
        originalPrice: 8990000,
        rating: 4.7,
        image: "https://picsum.photos/id/1/600/400",
        description: "Độ phân giải 4K UHD, chuẩn màu 99% sRGB, hỗ trợ sạc ngược 65W cho laptop qua cổng Type-C."
    },
    {
        id: 5,
        name: "Giá đỡ Laptop Hợp kim Nhôm Xoay 360",
        category: "Phụ kiện",
        price: 450000,
        originalPrice: 590000,
        rating: 4.5,
        image: "https://picsum.photos/id/119/600/400",
        description: "Chất liệu hợp kim nhôm cao cấp, tản nhiệt tối ưu, góc xoay linh hoạt cho mọi nhu cầu."
    },
    {
        id: 6,
        name: "Đèn màn hình LED chống mỏi mắt",
        category: "Đèn bàn",
        price: 680000,
        originalPrice: 850000,
        rating: 4.8,
        image: "https://picsum.photos/id/367/600/400",
        description: "Cảm biến ánh sáng tự động điều chỉnh độ sáng, góc chiếu không gây lóa màn hình."
    },
    {
        id: 7,
        name: "Loa Bluetooth Mini Bass Trầm",
        category: "Âm thanh",
        price: 520000,
        originalPrice: 650000,
        rating: 4.4,
        image: "https://picsum.photos/id/145/600/400",
        description: "Chuẩn chống nước IPX7, công suất 12W, kết nối Bluetooth 5.3 khoảng cách 15m."
    },
    {
        id: 8,
        name: "Sạc nhanh GaN 65W 3 cổng",
        category: "Phụ kiện",
        price: 390000,
        originalPrice: 490000,
        rating: 4.9,
        image: "https://picsum.photos/id/250/600/400",
        description: "Công nghệ bán dẫn GaN nhỏ gọn, sạc đồng thời Laptop, Điện thoại và Tai nghe."
    },
    {
        id: 9,
        name: "Bảng vẽ điện tử 10x6 inch",
        category: "Thiết bị đồ họa",
        price: 1650000,
        originalPrice: 1950000,
        rating: 4.6,
        image: "https://picsum.photos/id/96/600/400",
        description: "8192 mức lực nhấn, bút cảm ứng không dùng pin, tương thích Windows, macOS và Android."
    },
    {
        id: 10,
        name: "Micro USB Condenser thu âm Podcast",
        category: "Âm thanh",
        price: 1150000,
        originalPrice: 1390000,
        rating: 4.7,
        image: "https://picsum.photos/id/453/600/400",
        description: "Mô hình thu âm Cardioid tập trung giọng nói, lọc tạp âm môi trường, có nút Mute nhanh."
    },
    {
        id: 11,
        name: "Webcam Full HD 1080p Tích hợp Mic",
        category: "Camera",
        price: 580000,
        originalPrice: 750000,
        rating: 4.3,
        image: "https://picsum.photos/id/250/600/400",
        description: "Tốc độ khung hình 60fps, lấy nét tự động thông minh, có nắp che bảo vệ riêng tư."
    },
    {
        id: 12,
        name: "Pad chuột Size XL Kèm sạc không dây 15W",
        category: "Phụ kiện",
        price: 420000,
        originalPrice: 550000,
        rating: 4.5,
        image: "https://picsum.photos/id/1060/600/400",
        description: "Kích thước 800x300mm, bề mặt vải Speed siêu mượt, tích hợp đế sạc chuẩn Qi góc phải."
    },
    {
        id: 13,
        name: "Hub Chuyển đổi Type-C 8 trong 1",
        category: "Phụ kiện",
        price: 720000,
        originalPrice: 890000,
        rating: 4.8,
        image: "https://picsum.photos/id/201/600/400",
        description: "Xuất hình HDMI 4K, đọc thẻ SD/TF, 3 cổng USB 3.0, cổng mạng LAN RJ45 1000Mbps."
    },
    {
        id: 14,
        name: "Ghế công nông học Ergonomic lưới thoáng khí",
        category: "Nội thất",
        price: 3850000,
        originalPrice: 4500000,
        rating: 4.9,
        image: "https://picsum.photos/id/1074/600/400",
        description: "Hỗ trợ cột sống lumbar 3D, bệ đỡ tay nâng hạ, lưới nhập khẩu thoáng khí chống tích nhiệt."
    },
    {
        id: 15,
        name: "Ổ cứng SSD Di động Type-C 1TB",
        category: "Lưu trữ",
        price: 2190000,
        originalPrice: 2690000,
        rating: 4.8,
        image: "https://picsum.photos/id/364/600/400",
        description: "Tốc độ đọc ghi lên tới 1050MB/s, vỏ nhôm nguyên khối chống va đập và tản nhiệt tốt."
    }
];

// Hàm format tiền tệ VND
const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

export default function ProductExercisePage() {
    // Lấy danh sách các danh mục độc nhất
    const categories = ["Tất cả", ...Array.from(new Set(products.map(p => p.category)))];

    return (
        <div className="min-h-screen bg-bg text-text pb-16">
            {/* Header / Tiêu đề trang */}
            <header className="border-b border-border bg-surface sticky top-0 z-50 shadow-xs">
                <div className="max-w-[1200px] mx-auto px-4 h-[72px] flex items-center justify-between">
                    <h1 className="text-xl md:text-2xl font-bold font-heading">
                        TechGadget <span className="text-primary">Store</span>
                    </h1>
                    <div className="text-sm text-muted">
                        Tổng số: <strong className="text-text">{products.length} sản phẩm</strong>
                    </div>
                </div>
            </header>

            {/* Nội dung chính */}
            <main className="max-w-[1200px] mx-auto px-4 mt-8">
                {/* Banner giới thiệu nhỏ */}
                <div className="bg-surface rounded-lg p-6 md:p-8 mb-8 border border-border flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <span className="inline-block bg-primary-soft text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                            Bộ sưu tập mới nhất 2026
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Phụ kiện & Thiết bị Công nghệ Cao cấp</h2>
                        <p className="text-muted text-sm md:text-base max-w-2xl">
                            Trải nghiệm không gian làm việc tối ưu với các sản phẩm chính hãng, chất lượng hàng đầu được tuyển chọn riêng cho bạn.
                        </p>
                    </div>
                </div>

                {/* Danh mục sản phẩm */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 rounded-sm text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                                index === 0 
                                    ? "bg-primary text-primary-on shadow-xs" 
                                    : "bg-surface border border-border hover:border-primary text-muted hover:text-text"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Lưới sản phẩm (Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => {
                        const discountPercent = Math.round(
                            ((product.originalPrice - product.price) / product.originalPrice) * 100
                        );

                        return (
                            <div 
                                key={product.id}
                                className="bg-surface rounded-md border border-border overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                            >
                                {/* Ảnh sản phẩm & Badge */}
                                <div className="relative aspect-video w-full overflow-hidden bg-surface-2">
                                    <img 
                                        src={product.image} 
                                        alt={product.name}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Nhãn giảm giá */}
                                    {discountPercent > 0 && (
                                        <span className="absolute top-3 left-3 bg-accent text-[#12142a] text-xs font-bold px-2.5 py-1 rounded-sm shadow-xs">
                                            -{discountPercent}%
                                        </span>
                                    )}
                                    {/* Danh mục */}
                                    <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-xs px-2.5 py-0.5 rounded-sm">
                                        {product.category}
                                    </span>
                                </div>

                                {/* Thông tin chi tiết */}
                                <div className="p-5 flex flex-col flex-grow">
                                    {/* Đánh giá sao */}
                                    <div className="flex items-center gap-1 mb-2 text-sm text-accent">
                                        <span>★</span>
                                        <span className="font-semibold text-text">{product.rating}</span>
                                    </div>

                                    {/* Tên sản phẩm */}
                                    <h3 className="font-heading font-bold text-base mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                                        <Link href={`/products/${product.id}`}>
                                            {product.name}
                                        </Link>
                                    </h3>

                                    {/* Mô tả ngắn */}
                                    <p className="text-muted text-xs md:text-sm mb-4 line-clamp-2 flex-grow">
                                        {product.description}
                                    </p>

                                    {/* Giá và nút mua */}
                                    <div className="pt-4 border-t border-border flex items-center justify-between mt-auto">
                                        <div>
                                            <div className="text-primary font-bold text-base">
                                                {formatCurrency(product.price)}
                                            </div>
                                            <div className="text-muted text-xs line-through">
                                                {formatCurrency(product.originalPrice)}
                                            </div>
                                        </div>

                                        <Link 
                                            href={`/products/${product.id}`}
                                            className="bg-primary-soft hover:bg-primary text-primary hover:text-primary-on text-xs font-semibold px-4 py-2 rounded-sm transition-colors"
                                        >
                                            Xem chi tiết
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}