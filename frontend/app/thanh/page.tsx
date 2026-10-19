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

    return (
        <div className="min-h-screen bg-bg text-text pb-16">
            VIẾT CODE NGAY TẠI ĐÂY
        </div>
    );
}