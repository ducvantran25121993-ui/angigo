import { Dish } from "../types";

export const CURATED_RECIPE_SEO_TITLES: Record<string, string> = {
  "bo-nuong-tang-trung-muoi": "Cách Làm Bò Nướng Tảng Trứng Muối",
  "hau-nuong-mo-hanh-pho-mai": "Cách Làm Hàu Nướng Mỡ Hành & Phô Mai",
  "bo-bit-tet-sot-tieu": "Cách Làm Bò Bít Tết Sốt Tiêu Chuẩn Vị",
  "chim-cut-quay-la-mac-mat": "Cách Làm Chim Cút Quay Da Giòn Lá Mắc Mật",
  "ga-ran-gion-cay": "Cách Làm Gà Rán Hàn Quốc Vàng Giòn Rụm, Thơm Ngon",
  "muc-nuong-muoi-ot": "Cách Làm Mực Trứng Nướng Muối Ớt",
  "chan-ga-nuong-mat-ong": "Cách Làm Chân Gà Nướng Da Giòn Thịt Mềm",
  "bach-tuoc-nuong-sa-te": "Cách Làm Bạch Tuộc Nướng Sa Tế Da Giòn Thịt Mềm",
  "dau-hu-chien-gion": "Cách Làm Đậu Hũ Chiên Giòn Vàng Giòn Rụm",
  "dimsum-ha-cao-xiu-mai": "Cách Làm Dimsum Tươi Ngon, Nước Chấm Chua Ngọt Chuẩn Vị",
  "banh-mi-chao-xiu-mai": "Cách Làm Bánh Mì Chảo Giòn Rụm, Đậm Đà Chuẩn Vị Đường Phố",
  "banh-mi-thit-nuong": "Cách Làm Bánh Mì Thịt Nướng Giòn Rụm, Đậm Đà Chuẩn Vị Đường Phố",
  "banh-mi-heo-quay-gion": "Cách Làm Bánh Mì Heo Quay Giòn Rụm, Đậm Đà Chuẩn Vị Đường Phố",
  "banh-mi-pate-thap-cam": "Cách Làm Bánh Mì Pate Thập Cẩm Giòn Rụm, Đậm Đà",
  "banh-mi-doner-kebab": "Cách Làm Bánh Mì Doner Kebab Giòn Rụm, Đậm Đà Chuẩn Vị Đường Phố",
  "bo-kho-banh-my-nong-gion": "Cách Làm Bò Kho Bánh Mỳ Đậm Đà, Thơm Nức Hương Quế Hồi Chuẩn Vị",
  "pha-lau-bo": "Cách Làm Phá Lấu Bò Sài Gòn Đậm Đà Cay Nồng, Bén Mồi Chuẩn Quán",
  "bot-chien-gion-trung-doi": "Cách Làm Bột Chiên Trứng Vàng Giòn Rụm, Thơm Ngon Bất Bại",
  "nui-xao-bo-ap-chao": "Cách Làm Nui Xào Bò Thơm Ngon Đậm Đà Chuẩn Quán",
  "nui-gio-heo": "Cách Nấu Nui Giò Heo Mềm Mọng, Thanh Ngọt",
  "goi-cuon-tom-thit": "Cách Làm Gỏi Cuốn Tôm Thịt Tươi Ngon, Nước Chấm Chua Ngọt Chuẩn Vị",
  "bun-thit-nuong-cha-gio": "Cách Làm Bún Thịt Nướng Đậm Đà, Nước Mắm Chua Ngọt Chuẩn Vị Nam Bộ",
  "banh-canh-cua-gio-heo": "Cách Nấu Bánh Canh Cua Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "banh-khot-tom-vung-tau": "Cách Làm Bánh Khọt Vũng Tàu Tươi Ngon, Nước Chấm Chua Ngọt Chuẩn Vị",
  "bo-ne-chao-gang": "Cách Làm Bò Né Chảo Gang Mềm Mọng, Bơ Tỏi Pate Chuẩn Vị Sài Gòn",
  "canh-bun-rau-muong": "Cách Nấu Canh Bún Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "banh-uot": "Cách Làm Bánh Ướt Tươi Ngon, Nước Chấm Chua Ngọt Chuẩn Vị",
  "bun-mang-vit": "Cách Nấu Bún Măng Vịt Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "bun-mam-mien-tay": "Cách Nấu Bún Mắm Miền Tây Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "bun-nuoc-leo-soc-trang": "Cách Nấu Bún Nước Lèo Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "oc-huong-xao-bo-toi": "Cách Làm Ốc Hương Xào Bơ Tỏi Giòn Ngon, Xanh Mướt Chuẩn Bếp Trưởng",
  "ca-vien-chien-nuoc-mam": "Cách Làm Cá Viên Chiên Nước Mắm Vàng Giòn Rụm, Thơm Ngon Bất Bại",
  "banh-trang-tron-sa-te": "Cách Làm Bánh Tráng Trộn Sa Tế Sốt Chua Ngọt Đậm Đà Chuẩn Vị",
  "suon-nuong-bbq": "Cách Làm Dẻ Sườn Heo Nướng BBQ Bằng Nồi Chiên Không Dầu",
  "pho-bo-tai-lan": "Cách Nấu Phở Bò Tái Lăn Hà Nội Thơm Nức, Đậm Đà Chuẩn Vị Phố Cổ",
  "pho-bo-sot-vang": "Cách Nấu Phở Bò Sốt Vang Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "pho-bo-tai-nam-gau": "Cách Nấu Phở Bò Tái Nạm Gàu Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "pho-ga-ta-la-chanh": "Cách Nấu Phở Gà Ta Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "bun-cha-ha-noi": "Cách Làm Bún Chả Hà Nội Thịt Nướng Than Hoa, Nước Chấm Đậm Đà Chuẩn Vị",
  "bun-dau-mam-tom": "Cách Làm Bún Đậu Mắm Tôm Thơm Ngon, Đầy Đủ Topping Chuẩn Vị Hà Thành",
  "bun-thang-ha-noi": "Cách Nấu Bún Thang Hà Nội Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "bun-oc-nguoi-ha-noi": "Cách Nấu Bún Ốc Nguội Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "bun-suon-moc-doc-mung": "Cách Nấu Bún Sườn Dọc Mùng Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "bun-moc-ha-noi": "Cách Nấu Bún Mọc Hà Nội Nước Dùng Trong Veo Chuẩn Vị Gia Đình",
  "bun-ca-cay-hai-phong": "Cách Nấu Bún Cá Cay Hải Phòng Nước Dùng Chua Cay Đậm Đà Chuẩn Vị Đất Cảng",
  "banh-da-cua-be": "Cách Nấu Bánh Đa Cua Hải Phòng Nước Dùng Đậm Đà Chuẩn Vị Đất Cảng",
  "banh-mi-que-hai-phong": "Cách Làm Bánh Mì Que Hải Phòng Patê Béo Ngậy Giòn Rụm Chuẩn Vị Đất Cảng",
  "banh-mi-cha-ca-nong": "Cách Làm Bánh Mì Chả Cá Giòn Rụm, Đậm Đà Chuẩn Vị Đường Phố",
  "pho-cuon-thit-bo": "Cách Làm Phở Cuốn Hà Nội Thịt Bò Tươi Ngon Nước Chấm Chua Ngọt Chuẩn Vị",
  "cha-ca-la-vong-ha-noi": "Cách Làm Chả Cá Lã Vọng Hà Nội Nướng Than Hoa, Xèo Xèo Chảo Mỡ Chuẩn Vị Phố Cổ",
  "banh-cuon-nong-thit-bam": "Cách Làm Bánh Cuốn Nóng Vỏ Mỏng Mướt, Nước Chấm Ấm Nóng Chuẩn Vị Hà Nội",
  "com-tam-suon-bi-cha": "Cách Làm Cơm Sườn Nướng Mật Ong Thơm Ngon Đậm Đà Chuẩn Quán",
  "banh-canh-ca-loc": "Cách Nấu Bánh Canh Cá Lóc Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "bun-bo-hue": "Cách Nấu Bún Bò Huế Chả Cua Đậm Đà Chuẩn Vị Cố Đô Tại Nhà",
  "mi-quang-tom-thit": "Cách Nấu Mì Quảng Tôm Thịt Đậm Đà Chuẩn Vị Xứ Quảng Tại Nhà",
  "thit-kho-tau": "Cách Nấu Thịt Kho Tàu Nước Dừa Trứng Cút Mềm Rục, Màu Cánh Gián Óng Ả",
  "nem-nuong-nha-trang": "Cách Làm Nem Nướng Nha Trang Cuốn Bánh Tráng & Nước Sốt Tương Gan Chuẩn Vị",
  "nem-lui-nuong-cuon": "Cách Làm Nem Lụi Huế Thơm Lừng, Đậm Đà",
  "ram-bap-cuon-rau": "Cách Làm Ram Bắp Quảng Ngãi Giòn Rụm, Thơm Ngọt Chuẩn Vị Xứ Quảng",
  "banh-dap-mam-nem": "Cách Làm Bánh Đập Mắm Nêm Miền Trung Giòn Dẻo & Bí Quyết Pha Mắm Nêm Thơm Lừng",
  "canh-chua-ca-loc": "Cách Nấu Canh Chua Cá Lóc Nam Bộ Thanh Mát, Đậm Đà Không Tanh",
  "bao-tu-ham-tieu": "Cách Nấu Bao Tử Hầm Tiêu Xanh Giòn Sần Sật, Nước Dùng Cay Nồng Ngọt Thanh",
  "long-nuong": "Cách Làm Lòng Nướng Sa Tế Cay Giòn Rụm Than Hoa Thơm Lừng Mồi Nhậu",
  "buffet": "Cách Làm Bàn Tiệc Buffet Lẩu Nướng Hải Sản Tại Nhà Thả Ga, Tiết Kiệm",
  "be-thui": "Cách Làm Bê Thui Cầu Mống Da Giòn Thịt Mềm & Bí Quyết Pha Mắm Nêm Xứ Quảng",
  "banh-beo": "Cách Làm Bánh Bèo Chén Tôm Chấy Tóp Mỡ Xoáy Lòng Chuẩn Vị Huế",
  "com-ga-xoi-mo": "Cách Làm Cơm Gà Xối Mỡ Thơm Ngon Đậm Đà Chuẩn Quán",
  "com-ga-hoi-an": "Cách Làm Cơm Gà Hội An Hạt Cơm Vàng Óng, Gỏi Gà Xé Đậm Đà Chuẩn Vị Phố Cổ",
  "xoi-xeo-ha-noi": "Cách Nấu Xôi Xéo Hà Nội Dẻo Thơm Óng Ả Chuẩn Vị Truyền Thống Phố Cổ",
  "com-rang-dua-bo": "Cách Làm Cơm Rang Dưa Bò Hạt Cơm Săn Giòn, Thơm Ngon Chuẩn Vị",
  "chao-suon-sun-quay": "Cách Nấu Cháo Sườn Sụn Hà Nội Sánh Mịn Chuẩn Vị Phố Cổ, Quẩy Giòn Rụm",
  "lau-rieu-cua-bap-bo": "Cách Nấu Lẩu Riêu Cua Bắp Bò Chua Cay Đậm Đà Chuẩn Vị Gia Đình",
  "mien-luon-gion-xao-lan": "Cách Nấu Miến Lươn Giòn Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "nom-bo-kho-ha-noi": "Cách Làm Nộm Bò Khô Đu Đủ Chua Ngọt Giòn Tan, Giải Ngấy Cực Tốt",
  "nem-chua-ran-ha-noi": "Cách Làm Nem Chua Rán Phố Cổ Vàng Ruộm, Giòn Rụm Bất Bại Tại Nhà",
  "doi-sun-nuong-than-hoa": "Cách Làm Dồi Sụn Nướng Da Giòn Thịt Mềm",
  "de-tai-chanh-tuong-ban": "Cách Làm Dê Tái Chanh Đậm Đà Cay Nồng, Bén Mồi Chuẩn Quán",
  "ga-nuong-com-lam": "Cách Làm Gà Nướng Cơm Lam Thơm Ngon Đậm Đà Chuẩn Quán",
  "lau-ga-la-e": "Cách Nấu Lẩu Gà Lá É Thơm Nồng Cay Ấm Chuẩn Vị Phú Yên & Đà Lạt",
  "banh-mi-xiu-mai-da-lat": "Cách Làm Bánh Mì Xíu Mại Chén Đà Lạt Nóng Hổi Chuẩn Vị Phố Sương Mù",
  "banh-trang-nuong-da-lat": "Cách Làm Bánh Tráng Nướng Đà Lạt Giòn Rụm Chuẩn Vị Pizza Việt Nam",
  "bun-bo-hue-chay": "Cách Nấu Bún Bò Huế Chay Thanh Đạm, Đậm Đà Chuẩn Vị Cơm Chay",
  "muc-mot-nang-nuong-sa-te": "Cách Làm Mực Nướng Sa Tế Giòn Sần Sật, Thơm Lừng Khói Than Chuẩn Quán",
  "heo-quay-banh-hoi": "Cách Làm Heo Quay Bánh Hỏi Da Nổ Giòn Rụm, Đậm Đà Chuẩn Vị Gia Đình",
  "hu-tieu-nam-vang-kho": "Cách Nấu Hủ Tiếu Nam Vang Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "hu-tieu-go-sai-gon": "Cách Nấu Hủ Tiếu Gõ Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "hu-tieu-sa-te-nai": "Cách Nấu Hủ Tiếu Sa Tế Nai Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "mi-hoanh-thanh-xa-xiu": "Cách Nấu Mì Hoành Thánh Xá Xíu Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "hu-tieu-muc-tuoi": "Cách Nấu Hủ Tiếu Mực Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "lau-mam-mien-tay": "Cách Nấu Lẩu Mắm Miền Tây Chua Cay Đậm Đà Chuẩn Vị Gia Đình",
  "com-ca-kho-to": "Cách Nấu Cơm Cá Kho Tộ Đậm Đà, Mềm Mọng Chuẩn Vị Mẹ Nấu",
  "com-chay-kho-quet": "Cách Nấu Cơm Cháy Kho Quẹt Đậm Đà, Mềm Mọng Chuẩn Vị Mẹ Nấu",
  "chao-ca-loc-rau-dang": "Cách Nấu Cháo Cá Lóc Bổ Dưỡng, Thơm Ngon Cho Cả Nhà",
  "lau-ca-keo-la-giang": "Cách Nấu Lẩu Cá Kèo Lá Giang Chua Cay Đậm Đà Chuẩn Vị Gia Đình",
  "vit-nau-chao-can-tho": "Cách Nấu Vịt Nấu Chao Cần Thơ Thơm Ngon Chuẩn Vị Gia Đình",
  "ca-loc-nuong-trui": "Cách Làm Cá Lóc Nướng Trui Da Giòn Thịt Mềm, Thơm Lừng Khói Than",
  "goi-xoai-xanh-ca-sac": "Cách Làm Gỏi Xoài Cá Sặc Chua Ngọt Giòn Tan, Giải Ngấy Cực Tốt",
  "goi-ngo-sen-tom-thit": "Cách Làm Gỏi Ngó Sen Tôm Thịt Chua Ngọt Giòn Tan, Giải Ngấy Cực Tốt",
  "com-chien-ca-man": "Cách Làm Cơm Chiên Cá Mặn Hạt Cơm Săn Giòn, Thơm Ngon Chuẩn Vị",
  "banh-xeo-tom-thit-gion": "Cách Làm Bánh Xèo Giòn Rụm, Lâu Bị Mềm, Nước Chấm Chua Ngọt Chuẩn Vị",
  "com-thit-kho-tau": "Cách Nấu Thịt Kho Tàu Nước Dừa Trứng Cút Mềm Rục, Màu Cánh Gián Óng Ả",
  "che-buoi-an-giang": "Cách Làm Chè Bưởi An Giang Giòn Sần Sật, Không Đắng, Nước Cốt Dừa Béo Bùi",
  "banh-chuoi-nuong-nuoc-cot-dua": "Cách Làm Bánh Chuối Nướng Cốt Dừa Thơm Ngon, Đỏ Đẹp, Dẻo Mềm Dễ Làm",
  "canh-chua-chay": "Cách Làm Canh Chua Chay Thanh Đạm, Đậm Đà Chuẩn Cơm Chay",
  "banh-xeo-chay": "Cách Làm Bánh Xèo Chay Thanh Đạm, Đậm Đà Chuẩn Cơm Chay",
  "com-nieu-singapore": "Cách Làm Cơm Niêu Bò Sốt Tiêu Đen Thơm Ngon Đậm Đà Chuẩn Quán",
  "com-chien-duong-chau": "Cách Làm Cơm Chiên Dương Châu Hạt Cơm Săn Giòn, Thơm Ngon Chuẩn Vị",
  "com-chien-hai-san": "Cách Làm Cơm Chiên Hải Sản Hạt Cơm Săn Giòn, Thơm Ngon Chuẩn Vị",
  "com-ga-quay-xe-phay": "Cách Làm Cơm Gà Quay Sốt Mật Thơm Ngon Đậm Đà Chuẩn Quán",
  "com-suon-cay-thai-lan": "Cách Làm Cơm Sườn Cay Thơm Ngon Đậm Đà Chuẩn Quán",
  "com-canh-kim-chi": "Cách Nấu Cơm Canh Kim Chi Thanh Mát, Đậm Đà Chuẩn Cơm Nhà",
  "com-ga-teriyaki": "Cách Làm Cơm Gà Teriyaki Thơm Ngon Đậm Đà Chuẩn Quán",
  "com-thit-ba-chi-chay-canh": "Cách Làm Cơm Ba Chỉ Cháy Cạnh Thơm Ngon Đậm Đà Chuẩn Quán",
  "xoi-ga-xe-mo-hanh": "Cách Nấu Xôi Gà Xé Dẻo Thơm Óng Ả Chuẩn Vị Truyền Thống",
  "xoi-man-thap-cam": "Cách Nấu Xôi Mặn Thập Cẩm Dẻo Thơm Óng Ả Chuẩn Vị Truyền Thống",
  "xoi-chien-gion-nhan-thit": "Cách Nấu Xôi Chiên Dẻo Thơm Óng Ả Chuẩn Vị Truyền Thống",
  "com-ga-hai-nam": "Cách Làm Cơm Gà Hải Nam Thơm Ngon Đậm Đà Chuẩn Quán",
  "com-bo-xao-can-toi": "Cách Làm Cơm Bò Xào Cần Tỏi Thơm Ngon Đậm Đà Chuẩn Quán",
  "mi-cay-han-quoc": "Cách Nấu Mì Cay 7 Cấp Độ Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "mi-tron-top-mo": "Cách Làm Mì Trộn Tóp Mỡ Sốt Chua Ngọt Đậm Đà Chuẩn Vị",
  "mi-xao-gion": "Cách Làm Mì Xào Giòn Thơm Lừng, Đậm Đà",
  "bun-rieu-cua-bap-bo": "Cách Nấu Bún Riêu Cua Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "bun-ca-ngu-phu-yen": "Cách Nấu Bún Cá Ngừ Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "mi-xao-bo-rau-cai": "Cách Làm Mì Xào Bò Thơm Lừng, Đậm Đà",
  "mi-udon-bo-xao": "Cách Nấu Mì Udon Bò Xào Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "mi-soba-lanh": "Cách Nấu Mì Soba Lạnh Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "mien-ga-ta-dui-xe": "Cách Nấu Miến Gà Ta Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "banh-canh-ghe-nguyen-con": "Cách Nấu Bánh Canh Ghẹ Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình",
  "mien-xao-cua": "Cách Làm Miến Xào Cua Mềm Mượt, Tơi Săn"
};

/**
 * Generate standard SEO Title for Recipe Articles ("Cách Nấu Món Ngon")
 * Follows Vietnamese search-intent best practices (Cách nấu / Cách làm + Tên món + Đặc tính hấp dẫn chuẩn vị)
 */
export function getRecipeArticleTitle(dish: Dish, recipe?: { seoTitle?: string }): string {
  if (recipe?.seoTitle) {
    return recipe.seoTitle;
  }
  const curatedTitle =
    CURATED_RECIPE_SEO_TITLES[dish.id] ||
    (RECIPE_SLUG_ALIASES[dish.id] ? CURATED_RECIPE_SEO_TITLES[RECIPE_SLUG_ALIASES[dish.id]] : undefined) ||
    (Object.keys(RECIPE_SLUG_ALIASES).find((k) => RECIPE_SLUG_ALIASES[k] === dish.id)
      ? CURATED_RECIPE_SEO_TITLES[Object.keys(RECIPE_SLUG_ALIASES).find((k) => RECIPE_SLUG_ALIASES[k] === dish.id)!]
      : undefined);
  if (curatedTitle) {
    return curatedTitle;
  }

  const rawName = dish.vietnameseName || dish.name || "";
  const cleanName = rawName
    .replace(/^cách nấu\s+/i, "")
    .replace(/^cách làm\s+/i, "")
    .replace(/^hướng dẫn nấu\s+/i, "")
    .replace(/^hướng dẫn làm\s+/i, "")
    .trim();
  const lowerName = cleanName.toLowerCase();
  const cat = dish.category;

  // 0. Món chay
  if (cat === "do_chay" || lowerName.includes("chay")) {
    return `Cách Làm ${cleanName} Thanh Đạm, Đậm Đà Chuẩn Cơm Chay`;
  }
  // 1. Món bánh mì, gỏi cuốn, phở cuốn, nem (Ưu tiên kiểm tra trước bún/phở/mì để tránh dính chữ "mì" trong "bánh mì" hay "phở" trong "phở cuốn")
  if (lowerName.includes("bánh mì que")) {
    return `Cách Làm ${cleanName} Patê Béo Ngậy Giòn Rụm Chuẩn Vị Đất Cảng`;
  }
  if (lowerName.includes("bánh mì")) {
    return `Cách Làm ${cleanName} Giòn Rụm, Đậm Đà Chuẩn Vị Đường Phố`;
  }
  if (lowerName.includes("bánh cuốn")) {
    return `Cách Làm ${cleanName} Vỏ Mỏng Mướt, Nước Chấm Ấm Nóng Chuẩn Vị Hà Nội`;
  }
  if (
    cat === "banhmi_cuon" ||
    lowerName.includes("phở cuốn") ||
    lowerName.includes("gỏi cuốn") ||
    lowerName.includes("bò bía") ||
    lowerName.includes("nem cuốn")
  ) {
    return `Cách Làm ${cleanName} Tươi Ngon, Nước Chấm Chua Ngọt Chuẩn Vị`;
  }
  // 2. Phở, Bún, Miến, Mì, Hủ tiếu, Bánh canh
  if (lowerName.includes("bún chả") && !lowerName.includes("chả giò") && !lowerName.includes("chả cá")) {
    return `Cách Làm ${cleanName} Thịt Nướng Than Hoa, Nước Chấm Đậm Đà Chuẩn Vị`;
  }
  if (lowerName.includes("chả cá lã vọng")) {
    return `Cách Làm ${cleanName} Nướng Than Hoa, Xèo Xèo Chảo Mỡ Chuẩn Vị Phố Cổ`;
  }
  if (lowerName.includes("bún chả cá")) {
    return `Cách Nấu ${cleanName} Thơm Ngon Đậm Đà Chuẩn Vị`;
  }
  if (lowerName.includes("chả cá")) {
    return `Cách Làm ${cleanName} Dai Giòn Thơm Ngon Chuẩn Vị`;
  }
  if (lowerName.includes("bún đậu")) {
    return `Cách Làm ${cleanName} Thơm Ngon, Đầy Đủ Topping Chuẩn Vị Hà Thành`;
  }
  if (lowerName.includes("bún thịt nướng") || lowerName.includes("bún nem nướng")) {
    return `Cách Làm ${cleanName} Đậm Đà, Nước Mắm Chua Ngọt Chuẩn Vị Nam Bộ`;
  }
  if (lowerName.includes("phở xào") || lowerName.includes("mì xào") || lowerName.includes("hủ tiếu xào")) {
    return `Cách Làm ${cleanName} Thơm Lừng, Đậm Đà Chuẩn Bếp Trưởng`;
  }
  if (
    lowerName.includes("trộn") ||
    lowerName.includes("hủ tiếu khô") ||
    lowerName.includes("mì khô") ||
    lowerName.includes("phở khô")
  ) {
    return `Cách Làm ${cleanName} Sốt Chua Ngọt Đậm Đà Chuẩn Vị`;
  }
  if (lowerName.includes("mì quảng")) {
    return `Cách Nấu ${cleanName} Đậm Đà Chuẩn Vị Xứ Quảng Tại Nhà`;
  }
  if (lowerName.includes("bò né")) {
    return `Cách Làm ${cleanName} Mềm Mọng, Bơ Tỏi Pate Chuẩn Vị Sài Gòn`;
  }
  if (
    cat === "bun_pho_mi" ||
    cat === "bun_pho" ||
    lowerName.includes("bún") ||
    (lowerName.includes("phở") && !lowerName.includes("cuốn")) ||
    lowerName.includes("miến") ||
    (lowerName.includes("mì") && !lowerName.includes("bánh mì")) ||
    lowerName.includes("hủ tiếu") ||
    lowerName.includes("bánh canh")
  ) {
    return `Cách Nấu ${cleanName} Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình`;
  }
  // 2. Lẩu
  if (cat === "lau_chao" && lowerName.includes("lẩu")) {
    return `Cách Nấu ${cleanName} Chua Cay Đậm Đà Chuẩn Vị Gia Đình`;
  }
  // 3. Cháo, Súp
  if (lowerName.includes("cháo") || lowerName.includes("súp")) {
    return `Cách Nấu ${cleanName} Bổ Dưỡng, Thơm Ngon Cho Cả Nhà`;
  }
  // 4. Canh
  if (lowerName.includes("canh")) {
    return `Cách Nấu ${cleanName} Thanh Mát, Đậm Đà Chuẩn Cơm Nhà`;
  }
  // 5. Kho, Hầm, Rim, Tiềm, Om, Sốt cà
  if (
    lowerName.includes("kho") ||
    lowerName.includes("hầm") ||
    lowerName.includes("rim") ||
    lowerName.includes("tiềm") ||
    lowerName.includes("om") ||
    lowerName.includes("sốt cà")
  ) {
    return `Cách Nấu ${cleanName} Đậm Đà, Mềm Mọng Chuẩn Vị Mẹ Nấu`;
  }
  // 6. Cơm chiên / Cơm rang
  if (lowerName.includes("cơm rang") || lowerName.includes("cơm chiên")) {
    return `Cách Làm ${cleanName} Hạt Cơm Săn Giòn, Thơm Ngon Chuẩn Vị`;
  }
  // 7. Cơm tấm, Cơm niêu, Cơm gà, Xôi
  if (lowerName.includes("cơm gà hội an")) {
    return `Cách Làm ${cleanName} Hạt Cơm Vàng Óng, Gỏi Gà Xé Đậm Đà Chuẩn Vị Phố Cổ`;
  }
  if (lowerName.includes("xôi")) {
    return `Cách Nấu ${cleanName} Dẻo Thơm Óng Ả Chuẩn Vị Truyền Thống`;
  }
  if (cat === "com_xoi" || cat === "com" || lowerName.includes("cơm")) {
    return `Cách Làm ${cleanName} Thơm Ngon Đậm Đà Chuẩn Quán`;
  }
  // 8. Bánh mì, Bánh xèo, Bánh cuốn, Bánh khọt, Nem rán, Chả giò
  if (lowerName.includes("nem rán") || lowerName.includes("chả giò") || lowerName.includes("nem chua rán")) {
    return `Cách Làm ${cleanName} Vàng Ruộm, Giòn Rụm Bất Bại Tại Nhà`;
  }
  if (lowerName.includes("bánh xèo") || lowerName.includes("bánh khọt")) {
    return `Cách Làm ${cleanName} Vàng Giòn Rụm, Chuẩn Vị Nam Bộ`;
  }
  if (lowerName.includes("bánh mì")) {
    return `Cách Làm ${cleanName} Giòn Rụm, Đậm Đà Chuẩn Vị Đường Phố`;
  }
  if (
    lowerName.includes("cuốn") ||
    lowerName.includes("gỏi cuốn") ||
    lowerName.includes("nem cuốn")
  ) {
    return `Cách Làm ${cleanName} Tươi Ngon, Nước Chấm Đậm Đà Chuẩn Vị`;
  }
  if (lowerName.includes("bánh")) {
    return `Cách Làm ${cleanName} Thơm Ngon, Đơn Giản Dễ Làm Tại Nhà`;
  }
  // 9. Nộm, Gỏi, Salad
  if (cat === "salad_monnhe" || lowerName.includes("gỏi") || lowerName.includes("nộm") || lowerName.includes("salad")) {
    return `Cách Làm ${cleanName} Chua Ngọt Giòn Tan, Giải Ngấy Cực Tốt`;
  }
  // 10. Nướng, Quay, Chiên, Rán, Xào
  if (lowerName.includes("nướng") || lowerName.includes("quay")) {
    return `Cách Làm ${cleanName} Da Giòn Thịt Mềm, Thơm Lừng Khói Than`;
  }
  if (lowerName.includes("chiên") || lowerName.includes("rán")) {
    return `Cách Làm ${cleanName} Vàng Giòn Rụm, Thơm Ngon Bất Bại`;
  }
  if (lowerName.includes("xào")) {
    return `Cách Làm ${cleanName} Giòn Ngon, Xanh Mướt Chuẩn Bếp Trưởng`;
  }
  // 11. Món nhậu, Ăn vặt
  if (cat === "mon_nhau" || cat === "an_vat" || lowerName.includes("ốc") || lowerName.includes("chân gà") || lowerName.includes("lòng")) {
    return `Cách Làm ${cleanName} Đậm Đà Cay Nồng, Bén Mồi Chuẩn Quán`;
  }
  // 12. Đồ uống, Chè, Trà
  if (cat === "do_uong" || lowerName.includes("chè") || lowerName.includes("trà") || lowerName.includes("cà phê") || lowerName.includes("sinh tố")) {
    return `Cách Làm ${cleanName} Thơm Mát Giải Nhiệt, Đơn Giản Tại Nhà`;
  }
  // Default fallback
  return `Cách Nấu ${cleanName} Thơm Ngon Chuẩn Vị Gia Đình`;
}

export const ACTIVE_RECIPE_DISH_IDS: string[] = [
  'bo-nuong-tang-trung-muoi',
  'hau-nuong-mo-hanh-pho-mai',
  'bo-bit-tet-sot-tieu',
  'chim-cut-quay-la-mac-mat',
  'doi-sun-nuong-than-hoa',
  'ga-ran-gion-cay',
  'muc-nuong-muoi-ot',
  'chan-ga-nuong-mat-ong',
  'bach-tuoc-nuong-sa-te',
  'dau-hu-chien-gion',
  'dimsum-ha-cao-xiu-mai',
  'com-tam-suon-bi-cha',
  'com-ga-xoi-mo',
  'suon-nuong-bbq',
  'com-rang-dua-bo',
  'bun-bo-hue-dac-biet',
  'mi-quang-tom-thit',
  'com-ga-hoi-an',
  'hu-tieu-nam-vang-kho',
  'hu-tieu-go-sai-gon',
  'hu-tieu-sa-te-nai',
  'mi-hoanh-thanh-xa-xiu',
  'hu-tieu-muc-tuoi',
];

export function getActiveRecipeDishes(allDishes: Dish[]): Dish[] {
  const activeSet = new Set(ACTIVE_RECIPE_DISH_IDS);
  return allDishes
    .filter((d) => activeSet.has(d.id))
    .sort((a, b) => {
      const idxA = ACTIVE_RECIPE_DISH_IDS.indexOf(a.id);
      const idxB = ACTIVE_RECIPE_DISH_IDS.indexOf(b.id);
      return idxA - idxB;
    });
}

export const FEATURED_RECIPE_IDS = [
  'bo-nuong-tang-trung-muoi',
  'hau-nuong-mo-hanh-pho-mai',
  'bo-bit-tet-sot-tieu',
  'chim-cut-quay-la-mac-mat',
  'doi-sun-nuong-than-hoa',
  'ga-ran-gion-cay',
  'muc-nuong-muoi-ot',
  'chan-ga-nuong-mat-ong',
  'bach-tuoc-nuong-sa-te',
  'dau-hu-chien-gion',
  'dimsum-ha-cao-xiu-mai',
  'com-tam-suon-bi-cha',
  'com-ga-xoi-mo',
  'com-rang-dua-bo',
];

export const CUSTOM_RECIPE_SLUGS: Record<string, string> = {
  'bo-nuong-tang-trung-muoi': 'cach-lam-bo-nuong-tang-trung-muoi',
  'hau-nuong-mo-hanh-pho-mai': 'cach-lam-hau-nuong-mo-hanh-pho-mai',
  'bo-bit-tet-sot-tieu': 'cach-lam-bo-bit-tet-sot-tieu',
  'chim-cut-quay-la-mac-mat': 'cach-lam-chim-cut-quay-da-gion-la-mac-mat',
  'doi-sun-nuong-than-hoa': 'cach-lam-doi-sun-nuong-than-hoa',
  'ga-ran-gion-cay': 'cach-lam-ga-ran-han-quoc-gion-cay',
  'muc-nuong-muoi-ot': 'cach-lam-muc-trung-nuong-muoi-ot',
  'chan-ga-nuong-mat-ong': 'cach-lam-chan-ga-nuong-da-gion',
  'bach-tuoc-nuong-sa-te': 'cach-lam-bach-tuoc-nuong-sa-te',
  'dau-hu-chien-gion': 'cach-lam-dau-hu-chien-gion',
  'suon-nuong-bbq': 'cach-lam-de-suon-heo-nuong-bbq-bang-noi-chien-khong-dau',
  'dimsum-ha-cao-xiu-mai': 'cach-lam-dimsum-thap-cam-xung-hap',
  'muc-mot-nang-nuong-sa-te': 'cach-lam-muc-mot-nang-nuong-sa-te',
  'heo-quay-banh-hoi': 'cach-lam-heo-quay-banh-hoi',
  'be-thui': 'cach-lam-be-thui',
  'banh-dap-mam-nem': 'cach-lam-banh-dap-mam-nem',
  'banh-beo': 'cach-lam-banh-beo',
  'nem-lui-nuong-cuon': 'cach-lam-nem-lui-hue',
  'banh-mi-cha-ca-nong': 'cach-lam-banh-mi-cha-ca-nong',
  'de-tai-chanh-tuong-ban': 'cach-lam-de-tai-chanh',
  'banh-mi-chao-xiu-mai': 'cach-lam-banh-mi-chao',
  'banh-mi-thit-nuong': 'cach-lam-banh-mi-thit-nuong',
  'banh-mi-heo-quay-gion': 'cach-lam-banh-mi-heo-quay',
  'banh-mi-pate-thap-cam': 'cach-lam-banh-mi-pate-thap-cam',
  'banh-mi-doner-kebab': 'cach-lam-banh-mi-doner-kebab',
  'bo-kho-banh-my-nong-gion': 'cach-lam-bo-kho-banh-mi',
  'pha-lau-bo': 'cach-nau-pha-lau-bo',
  'com-ga-xoi-mo': 'cach-lam-com-ga-xoi-mo',
  'bot-chien-gion-trung-doi': 'cach-lam-bot-chien-trung',
  'nui-xao-bo-ap-chao': 'cach-lam-nui-xao-bo',
  'nui-gio-heo': 'cach-nau-nui-gio-heo',
  'goi-cuon-tom-thit': 'cach-lam-goi-cuon-tom-thit',
  'bun-thit-nuong-cha-gio': 'cach-lam-bun-thit-nuong',
  'banh-canh-cua-gio-heo': 'cach-nau-banh-canh-cua',
  'banh-khot-tom-vung-tau': 'cach-lam-banh-khot-vung-tau',
  'bo-ne-chao-gang': 'cach-lam-bo-ne',
  'canh-bun-rau-muong': 'cach-nau-canh-bun',
  'banh-uot': 'cach-lam-banh-uot',
  'bun-mang-vit': 'cach-nau-bun-mang-vit',
  'oc-huong-xao-bo-toi': 'cach-lam-oc-huong-xao-bo-toi',
  'ca-vien-chien-nuoc-mam': 'cach-lam-ca-vien-chien-nuoc-mam',
  'banh-trang-tron-sa-te': 'cach-lam-banh-trang-tron',
  'bun-mam-mien-tay': 'cach-nau-bun-mam-mien-tay',
  'bun-nuoc-leo-soc-trang': 'cach-nau-bun-nuoc-leo-soc-trang',
  'canh-chua-ca-loc': 'cach-nau-canh-chua-ca-loc',
  'lau-mam-mien-tay': 'cach-nau-lau-mam-mien-tay',
  'com-ca-kho-to': 'cach-nau-com-ca-kho-to',
  'ca-kho-to': 'cach-nau-com-ca-kho-to',
  'chao-ca-loc-rau-dang': 'cach-nau-chao-ca-loc',
  'chao-ca-loc': 'cach-nau-chao-ca-loc',
  'lau-ca-keo-la-giang': 'cach-nau-lau-ca-keo-la-giang',
  'lau-ca-keo': 'cach-nau-lau-ca-keo-la-giang',
  'vit-nau-chao-can-tho': 'cach-nau-vit-nau-chao',
  'vit-nau-chao': 'cach-nau-vit-nau-chao',
  'ca-loc-nuong-trui': 'cach-lam-ca-loc-nuong-trui',
  'goi-xoai-xanh-ca-sac': 'cach-lam-goi-xoai-ca-sac',
  'goi-xoai-ca-sac': 'cach-lam-goi-xoai-ca-sac',
  'goi-ngo-sen-tom-thit': 'cach-lam-goi-ngo-sen-tom-thit',
  'goi-ngo-sen': 'cach-lam-goi-ngo-sen-tom-thit',
  'com-chien-ca-man': 'cach-lam-com-chien-ca-man',
  'com-ca-man': 'cach-lam-com-chien-ca-man',
  'banh-xeo-tom-thit-gion': 'cach-lam-banh-xeo',
  'banh-xeo': 'cach-lam-banh-xeo',
  'banh-xeo-mien-tay': 'cach-lam-banh-xeo',
  'com-thit-kho-tau': 'cach-nau-thit-kho-tau',
  'thit-kho-tau': 'cach-nau-thit-kho-tau',
  'thit-kho-tau-nuoc-dua': 'cach-nau-thit-kho-tau',
  'bao-tu-ham-tieu': 'cach-nau-bao-tu-ham-tieu',
  'lau-bao-tu-ham-tieu': 'cach-nau-bao-tu-ham-tieu',
  'che-buoi-an-giang': 'cach-lam-che-buoi',
  'che-buoi': 'cach-lam-che-buoi',
  'banh-chuoi-nuong-nuoc-cot-dua': 'cach-lam-banh-chuoi-nuong',
  'banh-chuoi-nuong': 'cach-lam-banh-chuoi-nuong',
  'canh-chua-chay': 'cach-lam-canh-chua-chay',
  'banh-xeo-chay': 'cach-lam-banh-xeo-chay',
  'com-nieu-singapore': 'cach-lam-com-nieu-bo-sot-tieu-den',
  'com-nieu-bo-sot-tieu-den': 'cach-lam-com-nieu-bo-sot-tieu-den',
  'com-tam-suon-bi-cha': 'cach-lam-com-suon-nuong-mat-ong',
  'com-chien-duong-chau': 'cach-lam-com-chien-duong-chau',
  'com-chien-hai-san': 'cach-lam-com-chien-hai-san',
  'com-ga-quay-xe-phay': 'cach-lam-com-ga-quay-sot-mat',
  'com-ga-quay-sot-mat': 'cach-lam-com-ga-quay-sot-mat',
  'com-suon-cay-thai-lan': 'cach-lam-com-suon-cay',
  'com-suon-cay': 'cach-lam-com-suon-cay',
  'com-canh-kim-chi': 'cach-nau-com-canh-kim-chi',
  'com-ga-teriyaki': 'cach-lam-com-ga-teriyaki',
  'com-thit-ba-chi-chay-canh': 'cach-lam-com-ba-chi-chay-canh',
  'com-ba-chi-chay-canh': 'cach-lam-com-ba-chi-chay-canh',
  'xoi-ga-xe-mo-hanh': 'cach-nau-xoi-ga-xe',
  'xoi-ga-xe': 'cach-nau-xoi-ga-xe',
  'xoi-man-thap-cam': 'cach-nau-xoi-man-thap-cam',
  'xoi-man': 'cach-nau-xoi-man-thap-cam',
  'xoi-pate-lap-xuong': 'cach-nau-xoi-man-thap-cam',
  'xoi-chien-gion-nhan-thit': 'cach-nau-xoi-chien',
  'xoi-chien': 'cach-nau-xoi-chien',
  'com-ga-hai-nam': 'cach-lam-com-ga-hai-nam',
  'com-bo-xao-can-toi': 'cach-lam-com-bo-xao-can-toi',
  'mi-cay-han-quoc': 'cach-nau-mi-cay',
  'mi-cay': 'cach-nau-mi-cay',
  'mi-tron-top-mo': 'cach-lam-mi-tron-top-mo',
  'mi-xao-gion': 'cach-lam-mi-xao-gion',
  'bun-rieu-cua-bap-bo': 'cach-nau-bun-rieu-cua',
  'bun-rieu-cua': 'cach-nau-bun-rieu-cua',
  'bun-rieu': 'cach-nau-bun-rieu-cua',
  'bun-ca-ngu-phu-yen': 'cach-nau-bun-ca-ngu',
  'bun-ca-ngu': 'cach-nau-bun-ca-ngu',
  'mi-xao-bo-rau-cai': 'cach-lam-mi-xao-bo',
  'mi-xao-bo': 'cach-lam-mi-xao-bo',
  'mi-udon-bo-xao': 'cach-nau-mi-udon-bo-xao',
  'mi-udon': 'cach-nau-mi-udon-bo-xao',
  'mi-soba-lanh': 'cach-nau-mi-soba-lanh',
  'mi-soba': 'cach-nau-mi-soba-lanh',
  'mien-ga-ta-dui-xe': 'cach-nau-mien-ga',
  'mien-ga-ta': 'cach-nau-mien-ga',
  'mien-ga': 'cach-nau-mien-ga',
  'banh-canh-ghe-nguyen-con': 'cach-nau-banh-canh-ghe',
  'banh-canh-ghe': 'cach-nau-banh-canh-ghe',
  'mien-xao-cua': 'cach-lam-mien-xao-cua',
};

/**
 * Generate standard SEO slug for a dish recipe
 * Example: 'pho-bo-tai-lan' -> 'cach-nau-pho-bo-tai-lan'
 */
export function getRecipeSlug(dish: Dish): string {
  if (dish && CUSTOM_RECIPE_SLUGS[dish.id]) {
    return CUSTOM_RECIPE_SLUGS[dish.id];
  }
  if (dish.id.startsWith('cach-nau-') || dish.id.startsWith('cach-lam-')) {
    return dish.id;
  }
  return `cach-nau-${dish.id}`;
}

/**
 * Generate absolute SEO path for a dish recipe
 * Clean URL format: /cach-nau-pho-bo-tai-lan
 */
export function getRecipePath(dish: Dish): string {
  return `/${getRecipeSlug(dish)}`;
}

export const RECIPE_SLUG_ALIASES: Record<string, string> = {
  'bo-nuong-tang-trung-muoi': 'bo-nuong-tang-trung-muoi',
  'cach-lam-bo-nuong-tang-trung-muoi': 'bo-nuong-tang-trung-muoi',
  'cach-nau-bo-nuong-tang-trung-muoi': 'bo-nuong-tang-trung-muoi',
  'cach-lam-bo-nuong-tang-trung-muoi-da-gion-thit-mem-thom-lung-khoi-than': 'bo-nuong-tang-trung-muoi',
  'cach-lam-bo-nuong-tang-trung-muoi-da-gion-thit-mem': 'bo-nuong-tang-trung-muoi',
  'cach-nau-bo-nuong-tang-trung-muoi-da-gion-thit-mem': 'bo-nuong-tang-trung-muoi',
  'cach-lam-bo-nuong-tang-sot-trung-muoi': 'bo-nuong-tang-trung-muoi',
  'cach-nau-bo-nuong-tang-sot-trung-muoi': 'bo-nuong-tang-trung-muoi',
  'bo-nuong-tang-sot-trung-muoi': 'bo-nuong-tang-trung-muoi',
  'cach-lam-bo-nuong-tang': 'bo-nuong-tang-trung-muoi',
  'cach-nau-bo-nuong-tang': 'bo-nuong-tang-trung-muoi',
  'bo-nuong-tang': 'bo-nuong-tang-trung-muoi',
  'hau-nuong-mo-hanh-pho-mai': 'hau-nuong-mo-hanh-pho-mai',
  'cach-lam-hau-nuong-mo-hanh-pho-mai': 'hau-nuong-mo-hanh-pho-mai',
  'cach-nau-hau-nuong-mo-hanh-pho-mai': 'hau-nuong-mo-hanh-pho-mai',
  'cach-lam-hau-nuong-mo-hanh-pho-mai-da-gion-thit-mem-thom-lung-khoi-than': 'hau-nuong-mo-hanh-pho-mai',
  'cach-lam-hau-nuong-mo-hanh-pho-mai-da-gion-thit-mem': 'hau-nuong-mo-hanh-pho-mai',
  'cach-nau-hau-nuong-mo-hanh-pho-mai-da-gion-thit-mem': 'hau-nuong-mo-hanh-pho-mai',
  'cach-lam-hau-nuong-mo-hanh': 'hau-nuong-mo-hanh-pho-mai',
  'cach-nau-hau-nuong-mo-hanh': 'hau-nuong-mo-hanh-pho-mai',
  'cach-lam-hau-nuong-pho-mai': 'hau-nuong-mo-hanh-pho-mai',
  'cach-nau-hau-nuong-pho-mai': 'hau-nuong-mo-hanh-pho-mai',
  'cach-lam-hau-nuong': 'hau-nuong-mo-hanh-pho-mai',
  'cach-nau-hau-nuong': 'hau-nuong-mo-hanh-pho-mai',
  'hau-nuong': 'hau-nuong-mo-hanh-pho-mai',
  'hau-nuong-mo-hanh': 'hau-nuong-mo-hanh-pho-mai',
  'hau-nuong-pho-mai': 'hau-nuong-mo-hanh-pho-mai',
  'bo-bit-tet-sot-tieu': 'bo-bit-tet-sot-tieu',
  'cach-lam-bo-bit-tet-sot-tieu': 'bo-bit-tet-sot-tieu',
  'cach-nau-bo-bit-tet-sot-tieu': 'bo-bit-tet-sot-tieu',
  'cach-lam-bo-bit-tet-sot-tieu-chuan-vi': 'bo-bit-tet-sot-tieu',
  'cach-nau-bo-bit-tet-sot-tieu-chuan-vi': 'bo-bit-tet-sot-tieu',
  'cach-nau-bo-bit-tet-thom-ngon-chuan-vi-gia-dinh': 'bo-bit-tet-sot-tieu',
  'cach-lam-bo-bit-tet-thom-ngon-chuan-vi-gia-dinh': 'bo-bit-tet-sot-tieu',
  'cach-lam-bo-bit-tet': 'bo-bit-tet-sot-tieu',
  'cach-nau-bo-bit-tet': 'bo-bit-tet-sot-tieu',
  'bo-bit-tet': 'bo-bit-tet-sot-tieu',
  'chim-cut-quay-la-mac-mat': 'chim-cut-quay-la-mac-mat',
  'cach-lam-chim-cut-quay-da-gion-la-mac-mat': 'chim-cut-quay-la-mac-mat',
  'cach-nau-chim-cut-quay-da-gion-la-mac-mat': 'chim-cut-quay-la-mac-mat',
  'cach-lam-chim-cut-quay-da-gion-thit-mem-thom-lung-khoi-than': 'chim-cut-quay-la-mac-mat',
  'cach-lam-chim-cut-quay-da-gion-thit-mem': 'chim-cut-quay-la-mac-mat',
  'cach-nau-chim-cut-quay-da-gion-thit-mem': 'chim-cut-quay-la-mac-mat',
  'cach-lam-chim-cut-quay-da-gion': 'chim-cut-quay-la-mac-mat',
  'cach-lam-chim-cut-quay': 'chim-cut-quay-la-mac-mat',
  'cach-nau-chim-cut-quay': 'chim-cut-quay-la-mac-mat',
  'chim-cut-quay': 'chim-cut-quay-la-mac-mat',
  'chim-cut-quay-la-moc-mat': 'chim-cut-quay-la-mac-mat',
  'cach-lam-chim-cut-quay-la-mac-mat': 'chim-cut-quay-la-mac-mat',
  'cach-nau-chim-cut-quay-la-mac-mat': 'chim-cut-quay-la-mac-mat',
  'ga-ran-gion-cay': 'ga-ran-gion-cay',
  'cach-lam-ga-ran-han-quoc-gion-cay': 'ga-ran-gion-cay',
  'cach-nau-ga-ran-han-quoc-gion-cay': 'ga-ran-gion-cay',
  'cach-lam-ga-ran-han-quoc-vang-gion-rum-thom-ngon': 'ga-ran-gion-cay',
  'cach-lam-ga-ran-han-quoc-vang-gion-rum-thom-ngon-bat-bai': 'ga-ran-gion-cay',
  'cach-lam-ga-ran-han-quoc': 'ga-ran-gion-cay',
  'cach-nau-ga-ran-han-quoc': 'ga-ran-gion-cay',
  'cach-lam-ga-ran-gion-cay': 'ga-ran-gion-cay',
  'cach-nau-ga-ran-gion-cay': 'ga-ran-gion-cay',
  'ga-ran-han-quoc': 'ga-ran-gion-cay',
  'cach-lam-ga-ran': 'ga-ran-gion-cay',
  'cach-nau-ga-ran': 'ga-ran-gion-cay',
  'muc-nuong-muoi-ot': 'muc-nuong-muoi-ot',
  'cach-lam-muc-trung-nuong-muoi-ot': 'muc-nuong-muoi-ot',
  'cach-nau-muc-trung-nuong-muoi-ot': 'muc-nuong-muoi-ot',
  'cach-lam-muc-nuong-muoi-ot': 'muc-nuong-muoi-ot',
  'cach-nau-muc-nuong-muoi-ot': 'muc-nuong-muoi-ot',
  'cach-lam-muc-trung-nuong-da-gion-thit-mem-thom-lung-khoi-than': 'muc-nuong-muoi-ot',
  'cach-lam-muc-trung-nuong-da-gion-thit-mem': 'muc-nuong-muoi-ot',
  'muc-trung-nuong': 'muc-nuong-muoi-ot',
  'cach-lam-muc-trung-nuong': 'muc-nuong-muoi-ot',
  'cach-nau-muc-trung-nuong': 'muc-nuong-muoi-ot',
  'muc-nuong': 'muc-nuong-muoi-ot',
  'chan-ga-nuong-mat-ong': 'chan-ga-nuong-mat-ong',
  'cach-lam-chan-ga-nuong-da-gion': 'chan-ga-nuong-mat-ong',
  'cach-nau-chan-ga-nuong-da-gion': 'chan-ga-nuong-mat-ong',
  'cach-lam-chan-ga-nuong-da-gion-thit-mem': 'chan-ga-nuong-mat-ong',
  'cach-lam-chan-ga-nuong-da-gion-thit-mem-thom-lung-khoi-than': 'chan-ga-nuong-mat-ong',
  'cach-nau-chan-ga-nuong-da-gion-thit-mem': 'chan-ga-nuong-mat-ong',
  'chan-ga-nuong': 'chan-ga-nuong-mat-ong',
  'cach-lam-chan-ga-nuong': 'chan-ga-nuong-mat-ong',
  'cach-nau-chan-ga-nuong': 'chan-ga-nuong-mat-ong',
  'cach-lam-chan-ga-nuong-mat-ong': 'chan-ga-nuong-mat-ong',
  'cach-nau-chan-ga-nuong-mat-ong': 'chan-ga-nuong-mat-ong',
  'bach-tuoc-nuong-sa-te': 'bach-tuoc-nuong-sa-te',
  'cach-lam-bach-tuoc-nuong-sa-te': 'bach-tuoc-nuong-sa-te',
  'cach-nau-bach-tuoc-nuong-sa-te': 'bach-tuoc-nuong-sa-te',
  'cach-lam-bach-tuoc-nuong-sa-te-da-gion-thit-mem': 'bach-tuoc-nuong-sa-te',
  'cach-lam-bach-tuoc-nuong-sa-te-da-gion-thit-mem-thom-lung-khoi-than': 'bach-tuoc-nuong-sa-te',
  'cach-nau-bach-tuoc-nuong-sa-te-da-gion-thit-mem': 'bach-tuoc-nuong-sa-te',
  'bach-tuoc-nuong': 'bach-tuoc-nuong-sa-te',
  'cach-lam-bach-tuoc-nuong': 'bach-tuoc-nuong-sa-te',
  'cach-nau-bach-tuoc-nuong': 'bach-tuoc-nuong-sa-te',
  'bach-tuoc-sa-te': 'bach-tuoc-nuong-sa-te',
  'cach-lam-bach-tuoc-sa-te': 'bach-tuoc-nuong-sa-te',
  'dau-hu-chien-gion': 'dau-hu-chien-gion',
  'cach-lam-dau-hu-chien-gion': 'dau-hu-chien-gion',
  'cach-nau-dau-hu-chien-gion': 'dau-hu-chien-gion',
  'cach-lam-dau-hu-chien-gion-vang-gion-rum': 'dau-hu-chien-gion',
  'cach-lam-dau-hu-chien-gion-vang-gion-rum-thom-ngon-bat-bai': 'dau-hu-chien-gion',
  'cach-nau-dau-hu-chien-gion-vang-gion-rum': 'dau-hu-chien-gion',
  'dau-hu-chien': 'dau-hu-chien-gion',
  'cach-lam-dau-hu-chien': 'dau-hu-chien-gion',
  'dau-phu-chien-gion': 'dau-hu-chien-gion',
  'cach-lam-dau-phu-chien-gion': 'dau-hu-chien-gion',
  'dau-phu-chien': 'dau-hu-chien-gion',
  'cach-lam-dau-phu-chien': 'dau-hu-chien-gion',
  'suon-nuong-bbq': 'suon-nuong-bbq',
  'cach-lam-de-suon-heo-nuong-bbq-bang-noi-chien-khong-dau': 'suon-nuong-bbq',
  'cach-lam-de-suon-heo-nuong-bbq-bang-noi-chien-khong-dau-mem-tan-roc-xuong': 'suon-nuong-bbq',
  'cach-nau-de-suon-heo-nuong-bbq-bang-noi-chien-khong-dau': 'suon-nuong-bbq',
  'cach-lam-suon-nuong-bbq': 'suon-nuong-bbq',
  'cach-nau-suon-nuong-bbq': 'suon-nuong-bbq',
  'de-suon-heo-nuong-bbq': 'suon-nuong-bbq',
  'cach-lam-de-suon-heo-nuong-bbq': 'suon-nuong-bbq',
  'cach-lam-de-suon-nuong-bbq': 'suon-nuong-bbq',
  'de-suon-nuong-bbq': 'suon-nuong-bbq',
  'cach-lam-de-suon-heo-nuong-bbq-noi-chien-khong-dau': 'suon-nuong-bbq',
  'dimsum': 'dimsum-ha-cao-xiu-mai',
  'dimsum-ha-cao-xiu-mai': 'dimsum-ha-cao-xiu-mai',
  'cach-lam-dimsum': 'dimsum-ha-cao-xiu-mai',
  'cach-nau-dimsum': 'dimsum-ha-cao-xiu-mai',
  'cach-lam-dimsum-thap-cam-xung-hap': 'dimsum-ha-cao-xiu-mai',
  'cach-nau-dimsum-thap-cam-xung-hap': 'dimsum-ha-cao-xiu-mai',
  'cach-lam-dimsum-tuoi-ngon-nuoc-cham-chua-ngot': 'dimsum-ha-cao-xiu-mai',
  'cach-lam-dimsum-tuoi-ngon-nuoc-cham-chua-ngot-chuan-vi': 'dimsum-ha-cao-xiu-mai',
  'ha-cao-xiu-mai': 'dimsum-ha-cao-xiu-mai',
  'cach-lam-ha-cao-xiu-mai': 'dimsum-ha-cao-xiu-mai',
  'cach-nau-ha-cao-xiu-mai': 'dimsum-ha-cao-xiu-mai',
  'cach-lam-com-suon-nuong-mat-ong': 'com-tam-suon-bi-cha',
  'com-suon-nuong-mat-ong': 'com-tam-suon-bi-cha',
  'cach-nau-com-suon-nuong-mat-ong': 'com-tam-suon-bi-cha',
  'cach-lam-com-suon-mat-ong': 'com-tam-suon-bi-cha',
  'cach-lam-com-tam-suon-bi-cha': 'com-tam-suon-bi-cha',
  'cach-nau-com-tam-suon-bi-cha': 'com-tam-suon-bi-cha',
  'com-tam-suon-bi-cha': 'com-tam-suon-bi-cha',
  'com-nieu-singapore': 'com-nieu-singapore',
  'com-nieu-bo-sot-tieu-den': 'com-nieu-singapore',
  'cach-lam-com-nieu-bo-sot-tieu-den': 'com-nieu-singapore',
  'cach-nau-com-nieu-bo-sot-tieu-den': 'com-nieu-singapore',
  'com-nieu-bo-tieu-den': 'com-nieu-singapore',
  'cach-lam-com-nieu-bo-tieu-den': 'com-nieu-singapore',
  'banh-xeo-chay': 'banh-xeo-chay',
  'cach-lam-banh-xeo-chay': 'banh-xeo-chay',
  'cach-nau-banh-xeo-chay': 'banh-xeo-chay',
  'banh-xeo-nam-chay': 'banh-xeo-chay',
  'canh-chua-chay': 'canh-chua-chay',
  'cach-lam-canh-chua-chay': 'canh-chua-chay',
  'cach-nau-canh-chua-chay': 'canh-chua-chay',
  'canh-chua-nam-chay': 'canh-chua-chay',
  'canh-chua-dau-hu': 'canh-chua-chay',
  'banh-chuoi-nuong-nuoc-cot-dua': 'banh-chuoi-nuong-nuoc-cot-dua',
  'banh-chuoi-nuong': 'banh-chuoi-nuong-nuoc-cot-dua',
  'cach-lam-banh-chuoi-nuong': 'banh-chuoi-nuong-nuoc-cot-dua',
  'cach-nau-banh-chuoi-nuong': 'banh-chuoi-nuong-nuoc-cot-dua',
  'cach-lam-banh-chuoi-nuong-cot-dua': 'banh-chuoi-nuong-nuoc-cot-dua',
  'cach-nau-banh-chuoi-nuong-cot-dua': 'banh-chuoi-nuong-nuoc-cot-dua',
  'che-buoi-an-giang': 'che-buoi-an-giang',
  'che-buoi': 'che-buoi-an-giang',
  'cach-lam-che-buoi': 'che-buoi-an-giang',
  'cach-nau-che-buoi': 'che-buoi-an-giang',
  'cach-lam-che-buoi-an-giang': 'che-buoi-an-giang',
  'cach-nau-che-buoi-an-giang': 'che-buoi-an-giang',
  'bao-tu-ham-tieu': 'bao-tu-ham-tieu',
  'cach-nau-bao-tu-ham-tieu': 'bao-tu-ham-tieu',
  'cach-lam-bao-tu-ham-tieu': 'bao-tu-ham-tieu',
  'bao-tu-ham-tieu-xanh': 'bao-tu-ham-tieu',
  'lau-bao-tu-ham-tieu': 'bao-tu-ham-tieu',
  'cach-nau-lau-bao-tu-ham-tieu': 'bao-tu-ham-tieu',
  'com-thit-kho-tau': 'com-thit-kho-tau',
  'thit-kho-tau': 'com-thit-kho-tau',
  'thit-kho-tau-nuoc-dua': 'com-thit-kho-tau',
  'cach-nau-thit-kho-tau': 'com-thit-kho-tau',
  'cach-lam-thit-kho-tau': 'com-thit-kho-tau',
  'cach-nau-thit-kho-tau-nuoc-dua': 'com-thit-kho-tau',
  'cach-lam-thit-kho-tau-nuoc-dua': 'com-thit-kho-tau',
  'banh-xeo-tom-thit-gion': 'banh-xeo-tom-thit-gion',
  'banh-xeo': 'banh-xeo-tom-thit-gion',
  'banh-xeo-mien-tay': 'banh-xeo-tom-thit-gion',
  'cach-lam-banh-xeo': 'banh-xeo-tom-thit-gion',
  'cach-nau-banh-xeo': 'banh-xeo-tom-thit-gion',
  'cach-do-banh-xeo': 'banh-xeo-tom-thit-gion',
  'cach-lam-banh-xeo-mien-tay': 'banh-xeo-tom-thit-gion',
  'com-chien-ca-man': 'com-chien-ca-man',
  'com-ca-man': 'com-chien-ca-man',
  'cach-lam-com-chien-ca-man': 'com-chien-ca-man',
  'cach-nau-com-chien-ca-man': 'com-chien-ca-man',
  'cach-lam-com-ca-man': 'com-chien-ca-man',
  'cach-nau-com-ca-man': 'com-chien-ca-man',
  'com-chien-duong-chau': 'com-chien-duong-chau',
  'cach-lam-com-chien-duong-chau': 'com-chien-duong-chau',
  'cach-nau-com-chien-duong-chau': 'com-chien-duong-chau',
  'cach-lam-com-chien-duong-chau-hat-com-san-gion': 'com-chien-duong-chau',
  'cach-nau-com-chien-duong-chau-hat-com-san-gion': 'com-chien-duong-chau',
  'com-chien-hai-san': 'com-chien-hai-san',
  'cach-lam-com-chien-hai-san': 'com-chien-hai-san',
  'cach-nau-com-chien-hai-san': 'com-chien-hai-san',
  'cach-lam-com-chien-hai-san-hat-com-san-gion': 'com-chien-hai-san',
  'cach-nau-com-chien-hai-san-hat-com-san-gion': 'com-chien-hai-san',
  'com-ga-quay-xe-phay': 'com-ga-quay-xe-phay',
  'com-ga-quay-sot-mat': 'com-ga-quay-xe-phay',
  'cach-lam-com-ga-quay-sot-mat': 'com-ga-quay-xe-phay',
  'cach-nau-com-ga-quay-sot-mat': 'com-ga-quay-xe-phay',
  'cach-lam-com-ga-quay-sot-mat-thom-ngon-dam-da-chuan-quan': 'com-ga-quay-xe-phay',
  'cach-nau-com-ga-quay-sot-mat-thom-ngon-dam-da-chuan-quan': 'com-ga-quay-xe-phay',
  'com-suon-cay-thai-lan': 'com-suon-cay-thai-lan',
  'com-suon-cay': 'com-suon-cay-thai-lan',
  'cach-lam-com-suon-cay': 'com-suon-cay-thai-lan',
  'cach-nau-com-suon-cay': 'com-suon-cay-thai-lan',
  'cach-lam-com-suon-cay-thom-ngon-dam-da-chuan-quan': 'com-suon-cay-thai-lan',
  'cach-nau-com-suon-cay-thom-ngon-dam-da-chuan-quan': 'com-suon-cay-thai-lan',
  'com-canh-kim-chi': 'com-canh-kim-chi',
  'cach-nau-com-canh-kim-chi': 'com-canh-kim-chi',
  'cach-lam-com-canh-kim-chi': 'com-canh-kim-chi',
  'cach-nau-com-canh-kim-chi-thanh-mat-dam-da-chuan-com-nha': 'com-canh-kim-chi',
  'cach-lam-com-canh-kim-chi-thanh-mat-dam-da-chuan-com-nha': 'com-canh-kim-chi',
  'com-ga-teriyaki': 'com-ga-teriyaki',
  'cach-lam-com-ga-teriyaki': 'com-ga-teriyaki',
  'cach-nau-com-ga-teriyaki': 'com-ga-teriyaki',
  'cach-lam-com-ga-sot-teriyaki': 'com-ga-teriyaki',
  'cach-nau-com-ga-sot-teriyaki': 'com-ga-teriyaki',
  'cach-lam-com-ga-teriyaki-thom-ngon-dam-da-chuan-quan': 'com-ga-teriyaki',
  'cach-nau-com-ga-teriyaki-thom-ngon-dam-da-chuan-quan': 'com-ga-teriyaki',
  'com-thit-ba-chi-chay-canh': 'com-thit-ba-chi-chay-canh',
  'com-ba-chi-chay-canh': 'com-thit-ba-chi-chay-canh',
  'cach-lam-com-ba-chi-chay-canh': 'com-thit-ba-chi-chay-canh',
  'cach-nau-com-ba-chi-chay-canh': 'com-thit-ba-chi-chay-canh',
  'cach-lam-com-thit-ba-chi-chay-canh': 'com-thit-ba-chi-chay-canh',
  'cach-nau-com-thit-ba-chi-chay-canh': 'com-thit-ba-chi-chay-canh',
  'cach-lam-com-ba-chi-chay-canh-thom-ngon-dam-da-chuan-quan': 'com-thit-ba-chi-chay-canh',
  'cach-nau-com-ba-chi-chay-canh-thom-ngon-dam-da-chuan-quan': 'com-thit-ba-chi-chay-canh',
  'xoi-ga-xe-mo-hanh': 'xoi-ga-xe-mo-hanh',
  'xoi-ga-xe': 'xoi-ga-xe-mo-hanh',
  'cach-nau-xoi-ga-xe': 'xoi-ga-xe-mo-hanh',
  'cach-lam-xoi-ga-xe': 'xoi-ga-xe-mo-hanh',
  'cach-nau-xoi-ga-xe-mo-hanh': 'xoi-ga-xe-mo-hanh',
  'cach-lam-xoi-ga-xe-mo-hanh': 'xoi-ga-xe-mo-hanh',
  'cach-nau-xoi-ga-xe-deo-thom-ong-a-chuan-vi-truyen-thong': 'xoi-ga-xe-mo-hanh',
  'cach-lam-xoi-ga-xe-deo-thom-ong-a-chuan-vi-truyen-thong': 'xoi-ga-xe-mo-hanh',
  'xoi-man-thap-cam': 'xoi-man-thap-cam',
  'xoi-man': 'xoi-man-thap-cam',
  'cach-nau-xoi-man-thap-cam': 'xoi-man-thap-cam',
  'cach-lam-xoi-man-thap-cam': 'xoi-man-thap-cam',
  'cach-nau-xoi-man': 'xoi-man-thap-cam',
  'cach-lam-xoi-man': 'xoi-man-thap-cam',
  'cach-nau-xoi-man-thap-cam-deo-thom-ong-a-chuan-vi-truyen-thong': 'xoi-man-thap-cam',
  'cach-lam-xoi-man-thap-cam-deo-thom-ong-a-chuan-vi-truyen-thong': 'xoi-man-thap-cam',
  'xoi-pate-lap-xuong': 'xoi-man-thap-cam',
  'cach-nau-xoi-pate-lap-xuong': 'xoi-man-thap-cam',
  'cach-lam-xoi-pate-lap-xuong': 'xoi-man-thap-cam',
  'xoi-pate': 'xoi-man-thap-cam',
  'xoi-lap-xuong': 'xoi-man-thap-cam',
  'xoi-chien-gion-nhan-thit': 'xoi-chien-gion-nhan-thit',
  'xoi-chien': 'xoi-chien-gion-nhan-thit',
  'cach-nau-xoi-chien': 'xoi-chien-gion-nhan-thit',
  'cach-lam-xoi-chien': 'xoi-chien-gion-nhan-thit',
  'cach-nau-xoi-chien-nhan-thit': 'xoi-chien-gion-nhan-thit',
  'cach-lam-xoi-chien-nhan-thit': 'xoi-chien-gion-nhan-thit',
  'cach-nau-xoi-chien-deo-thom-ong-a-chuan-vi-truyen-thong': 'xoi-chien-gion-nhan-thit',
  'cach-lam-xoi-chien-deo-thom-ong-a-chuan-vi-truyen-thong': 'xoi-chien-gion-nhan-thit',
  'com-ga-hai-nam': 'com-ga-hai-nam',
  'cach-lam-com-ga-hai-nam': 'com-ga-hai-nam',
  'cach-nau-com-ga-hai-nam': 'com-ga-hai-nam',
  'cach-lam-com-ga-hai-nam-thom-ngon-dam-da-chuan-quan': 'com-ga-hai-nam',
  'cach-nau-com-ga-hai-nam-thom-ngon-dam-da-chuan-quan': 'com-ga-hai-nam',
  'com-bo-xao-can-toi': 'com-bo-xao-can-toi',
  'cach-lam-com-bo-xao-can-toi': 'com-bo-xao-can-toi',
  'cach-nau-com-bo-xao-can-toi': 'com-bo-xao-can-toi',
  'cach-lam-com-bo-xao-can-toi-thom-ngon-dam-da-chuan-quan': 'com-bo-xao-can-toi',
  'cach-nau-com-bo-xao-can-toi-thom-ngon-dam-da-chuan-quan': 'com-bo-xao-can-toi',
  'mi-cay-han-quoc': 'mi-cay-han-quoc',
  'mi-cay': 'mi-cay-han-quoc',
  'mi-cay-7-cap-do': 'mi-cay-han-quoc',
  'cach-nau-mi-cay': 'mi-cay-han-quoc',
  'cach-lam-mi-cay': 'mi-cay-han-quoc',
  'cach-nau-mi-cay-7-cap-do': 'mi-cay-han-quoc',
  'cach-lam-mi-cay-7-cap-do': 'mi-cay-han-quoc',
  'cach-nau-mi-cay-7-cap-do-nuoc-dung-thanh-ngot-chuan-vi-gia-dinh': 'mi-cay-han-quoc',
  'cach-lam-mi-cay-7-cap-do-nuoc-dung-thanh-ngot-chuan-vi-gia-dinh': 'mi-cay-han-quoc',
  'mi-tron-top-mo': 'mi-tron-top-mo',
  'mi-tron': 'mi-tron-top-mo',
  'mi-tron-top-mo-trung-long-dao': 'mi-tron-top-mo',
  'cach-lam-mi-tron-top-mo': 'mi-tron-top-mo',
  'cach-nau-mi-tron-top-mo': 'mi-tron-top-mo',
  'cach-lam-mi-tron-top-mo-sot-chua-ngot-dam-da-chuan-vi': 'mi-tron-top-mo',
  'cach-nau-mi-tron-top-mo-sot-chua-ngot-dam-da-chuan-vi': 'mi-tron-top-mo',
  'mi-xao-gion': 'mi-xao-gion',
  'cach-lam-mi-xao-gion': 'mi-xao-gion',
  'cach-nau-mi-xao-gion': 'mi-xao-gion',
  'cach-lam-mi-xao-gion-thom-lung-dam-da-chuan-bep-truong': 'mi-xao-gion',
  'cach-nau-mi-xao-gion-thom-lung-dam-da-chuan-bep-truong': 'mi-xao-gion',
  'bun-rieu-cua-bap-bo': 'bun-rieu-cua-bap-bo',
  'bun-rieu-cua': 'bun-rieu-cua-bap-bo',
  'bun-rieu': 'bun-rieu-cua-bap-bo',
  'cach-nau-bun-rieu-cua': 'bun-rieu-cua-bap-bo',
  'cach-lam-bun-rieu-cua': 'bun-rieu-cua-bap-bo',
  'cach-nau-bun-rieu': 'bun-rieu-cua-bap-bo',
  'cach-lam-bun-rieu': 'bun-rieu-cua-bap-bo',
  'cach-nau-bun-rieu-cua-nuoc-dung-thanh-ngot-chuan-vi-gia-dinh': 'bun-rieu-cua-bap-bo',
  'cach-lam-bun-rieu-cua-nuoc-dung-thanh-ngot-chuan-vi-gia-dinh': 'bun-rieu-cua-bap-bo',
  'bun-ca-ngu-phu-yen': 'bun-ca-ngu-phu-yen',
  'bun-ca-ngu': 'bun-ca-ngu-phu-yen',
  'cach-nau-bun-ca-ngu': 'bun-ca-ngu-phu-yen',
  'cach-lam-bun-ca-ngu': 'bun-ca-ngu-phu-yen',
  'cach-nau-bun-ca-ngu-phu-yen': 'bun-ca-ngu-phu-yen',
  'cach-lam-bun-ca-ngu-phu-yen': 'bun-ca-ngu-phu-yen',
  'cach-nau-bun-ca-ngu-nuoc-dung-thanh-ngot-chuan-vi-gia-dinh': 'bun-ca-ngu-phu-yen',
  'cach-lam-bun-ca-ngu-nuoc-dung-thanh-ngot-chuan-vi-gia-dinh': 'bun-ca-ngu-phu-yen',
  'mi-xao-bo-rau-cai': 'mi-xao-bo-rau-cai',
  'mi-xao-bo': 'mi-xao-bo-rau-cai',
  'mi-xao-bo-cai-ngot': 'mi-xao-bo-rau-cai',
  'cach-lam-mi-xao-bo': 'mi-xao-bo-rau-cai',
  'cach-nau-mi-xao-bo': 'mi-xao-bo-rau-cai',
  'cach-nau-mi-xao-bo-cai-ngot': 'mi-xao-bo-rau-cai',
  'cach-lam-mi-xao-bo-cai-ngot': 'mi-xao-bo-rau-cai',
  'cach-lam-mi-xao-bo-thom-lung-dam-da-chuan-bep-truong': 'mi-xao-bo-rau-cai',
  'cach-nau-mi-xao-bo-thom-lung-dam-da-chuan-bep-truong': 'mi-xao-bo-rau-cai',
  'mi-udon-bo-xao': 'mi-udon-bo-xao',
  'mi-udon': 'mi-udon-bo-xao',
  'mi-udon-bo': 'mi-udon-bo-xao',
  'cach-nau-mi-udon-bo-xao': 'mi-udon-bo-xao',
  'cach-lam-mi-udon-bo-xao': 'mi-udon-bo-xao',
  'cach-nau-mi-udon-bo-xao-nuoc-dung-thanh-ngot-chuan-vi-gia-dinh': 'mi-udon-bo-xao',
  'cach-lam-mi-udon-bo-xao-nuoc-dung-thanh-ngot-chuan-vi-gia-dinh': 'mi-udon-bo-xao',
  'mi-soba-lanh': 'mi-soba-lanh',
  'mi-soba': 'mi-soba-lanh',
  'soba-lanh': 'mi-soba-lanh',
  'cach-nau-mi-soba-lanh': 'mi-soba-lanh',
  'cach-lam-mi-soba-lanh': 'mi-soba-lanh',
  'cach-nau-mi-soba-lanh-nuoc-dung-thanh-ngot-chuan-vi-gia-dinh': 'mi-soba-lanh',
  'cach-lam-mi-soba-lanh-nuoc-dung-thanh-ngot-chuan-vi-gia-dinh': 'mi-soba-lanh',
  'mien-ga-ta-dui-xe': 'mien-ga-ta-dui-xe',
  'mien-ga-ta': 'mien-ga-ta-dui-xe',
  'mien-ga': 'mien-ga-ta-dui-xe',
  'cach-nau-mien-ga': 'mien-ga-ta-dui-xe',
  'cach-lam-mien-ga': 'mien-ga-ta-dui-xe',
  'cach-nau-mien-ga-ta': 'mien-ga-ta-dui-xe',
  'cach-lam-mien-ga-ta': 'mien-ga-ta-dui-xe',
  'cach-nau-mien-ga-ta-nuoc-dung-thanh-ngot-chuan-vi-gia-dinh': 'mien-ga-ta-dui-xe',
  'cach-lam-mien-ga-ta-nuoc-dung-thanh-ngot-chuan-vi-gia-dinh': 'mien-ga-ta-dui-xe',
  'banh-canh-ghe-nguyen-con': 'banh-canh-ghe-nguyen-con',
  'banh-canh-ghe': 'banh-canh-ghe-nguyen-con',
  'cach-nau-banh-canh-ghe': 'banh-canh-ghe-nguyen-con',
  'cach-lam-banh-canh-ghe': 'banh-canh-ghe-nguyen-con',
  'cach-nau-banh-canh-ghe-nuoc-dung-thanh-ngot-chuan-vi-gia-dinh': 'banh-canh-ghe-nguyen-con',
  'cach-lam-banh-canh-ghe-nuoc-dung-thanh-ngot-chuan-vi-gia-dinh': 'banh-canh-ghe-nguyen-con',
  'mien-xao-cua': 'mien-xao-cua',
  'cach-lam-mien-xao-cua': 'mien-xao-cua',
  'cach-nau-mien-xao-cua': 'mien-xao-cua',
  'cach-lam-mien-xao-cua-mem-muot-toi-san': 'mien-xao-cua',
  'cach-lam-mien-xao-cua-bien-mem-muot-toi-san-chuan-bep-truong': 'mien-xao-cua',
  'cach-nau-mien-xao-cua-nuoc-dung-thanh-ngot-chuan-vi-gia-dinh': 'mien-xao-cua',
  'cach-lam-mien-xao-cua-nuoc-dung-thanh-ngot-chuan-vi-gia-dinh': 'mien-xao-cua',
  'goi-ngo-sen-tom-thit': 'goi-ngo-sen-tom-thit',
  'goi-ngo-sen': 'goi-ngo-sen-tom-thit',
  'cach-lam-goi-ngo-sen-tom-thit': 'goi-ngo-sen-tom-thit',
  'cach-nau-goi-ngo-sen-tom-thit': 'goi-ngo-sen-tom-thit',
  'cach-lam-goi-ngo-sen': 'goi-ngo-sen-tom-thit',
  'cach-nau-goi-ngo-sen': 'goi-ngo-sen-tom-thit',
  'goi-xoai-xanh-ca-sac': 'goi-xoai-xanh-ca-sac',
  'goi-xoai-ca-sac': 'goi-xoai-xanh-ca-sac',
  'goi-ca-sac': 'goi-xoai-xanh-ca-sac',
  'cach-lam-goi-xoai-ca-sac': 'goi-xoai-xanh-ca-sac',
  'cach-nau-goi-xoai-ca-sac': 'goi-xoai-xanh-ca-sac',
  'cach-lam-goi-ca-sac': 'goi-xoai-xanh-ca-sac',
  'cach-nau-goi-ca-sac': 'goi-xoai-xanh-ca-sac',
  'ca-loc-nuong-trui': 'ca-loc-nuong-trui',
  'ca-loc-nuong': 'ca-loc-nuong-trui',
  'cach-lam-ca-loc-nuong-trui': 'ca-loc-nuong-trui',
  'cach-nau-ca-loc-nuong-trui': 'ca-loc-nuong-trui',
  'cach-lam-ca-loc-nuong': 'ca-loc-nuong-trui',
  'cach-nau-ca-loc-nuong': 'ca-loc-nuong-trui',
  'vit-nau-chao-can-tho': 'vit-nau-chao-can-tho',
  'vit-nau-chao': 'vit-nau-chao-can-tho',
  'cach-nau-vit-nau-chao-can-tho': 'vit-nau-chao-can-tho',
  'cach-lam-vit-nau-chao-can-tho': 'vit-nau-chao-can-tho',
  'cach-nau-vit-nau-chao': 'vit-nau-chao-can-tho',
  'cach-lam-vit-nau-chao': 'vit-nau-chao-can-tho',
  'lau-ca-keo-la-giang': 'lau-ca-keo-la-giang',
  'lau-ca-keo': 'lau-ca-keo-la-giang',
  'cach-nau-lau-ca-keo-la-giang': 'lau-ca-keo-la-giang',
  'cach-lam-lau-ca-keo-la-giang': 'lau-ca-keo-la-giang',
  'cach-nau-lau-ca-keo': 'lau-ca-keo-la-giang',
  'cach-lam-lau-ca-keo': 'lau-ca-keo-la-giang',
  'chao-ca-loc-rau-dang': 'chao-ca-loc-rau-dang',
  'chao-ca-loc': 'chao-ca-loc-rau-dang',
  'cach-nau-chao-ca-loc': 'chao-ca-loc-rau-dang',
  'cach-lam-chao-ca-loc': 'chao-ca-loc-rau-dang',
  'cach-nau-chao-ca-loc-rau-dang': 'chao-ca-loc-rau-dang',
  'cach-lam-chao-ca-loc-rau-dang': 'chao-ca-loc-rau-dang',
  'com-chay-kho-quet': 'com-chay-kho-quet',
  'cach-nau-com-chay-kho-quet': 'com-chay-kho-quet',
  'cach-lam-com-chay-kho-quet': 'com-chay-kho-quet',
  'kho-quet': 'com-chay-kho-quet',
  'cach-nau-kho-quet': 'com-chay-kho-quet',
  'cach-lam-kho-quet': 'com-chay-kho-quet',
  'bau-luoc-kho-quet': 'com-chay-kho-quet',
  'com-nieu-kho-quet-chay': 'com-chay-kho-quet',
  'com-ca-kho-to': 'com-ca-kho-to',
  'cach-nau-com-ca-kho-to': 'com-ca-kho-to',
  'cach-lam-com-ca-kho-to': 'com-ca-kho-to',
  'ca-kho-to': 'com-ca-kho-to',
  'cach-nau-ca-kho-to': 'com-ca-kho-to',
  'cach-lam-ca-kho-to': 'com-ca-kho-to',
  'lau-mam-mien-tay': 'lau-mam-mien-tay',
  'cach-nau-lau-mam-mien-tay': 'lau-mam-mien-tay',
  'cach-lam-lau-mam-mien-tay': 'lau-mam-mien-tay',
  'lau-mam': 'lau-mam-mien-tay',
  'cach-nau-lau-mam': 'lau-mam-mien-tay',
  'cach-lam-lau-mam': 'lau-mam-mien-tay',
  'canh-chua-ca-loc': 'canh-chua-ca-loc',
  'cach-nau-canh-chua-ca-loc': 'canh-chua-ca-loc',
  'cach-lam-canh-chua-ca-loc': 'canh-chua-ca-loc',
  'cach-nau-canh-chua-ca-loc-nam-bo': 'canh-chua-ca-loc',
  'bun-nuoc-leo-soc-trang': 'bun-nuoc-leo-soc-trang',
  'cach-nau-bun-nuoc-leo-soc-trang': 'bun-nuoc-leo-soc-trang',
  'cach-lam-bun-nuoc-leo-soc-trang': 'bun-nuoc-leo-soc-trang',
  'bun-nuoc-leo': 'bun-nuoc-leo-soc-trang',
  'cach-nau-bun-nuoc-leo': 'bun-nuoc-leo-soc-trang',
  'cach-lam-bun-nuoc-leo': 'bun-nuoc-leo-soc-trang',
  'bun-mam-mien-tay': 'bun-mam-mien-tay',
  'cach-nau-bun-mam-mien-tay': 'bun-mam-mien-tay',
  'cach-lam-bun-mam-mien-tay': 'bun-mam-mien-tay',
  'bun-mam': 'bun-mam-mien-tay',
  'cach-nau-bun-mam': 'bun-mam-mien-tay',
  'cach-lam-bun-mam': 'bun-mam-mien-tay',
  'banh-trang-tron-sa-te': 'banh-trang-tron-sa-te',
  'cach-lam-banh-trang-tron-sa-te': 'banh-trang-tron-sa-te',
  'cach-nau-banh-trang-tron-sa-te': 'banh-trang-tron-sa-te',
  'banh-trang-tron': 'banh-trang-tron-sa-te',
  'cach-lam-banh-trang-tron': 'banh-trang-tron-sa-te',
  'cach-nau-banh-trang-tron': 'banh-trang-tron-sa-te',
  'ca-vien-chien-nuoc-mam': 'ca-vien-chien-nuoc-mam',
  'cach-lam-ca-vien-chien-nuoc-mam': 'ca-vien-chien-nuoc-mam',
  'cach-nau-ca-vien-chien-nuoc-mam': 'ca-vien-chien-nuoc-mam',
  'ca-vien-chien': 'ca-vien-chien-nuoc-mam',
  'cach-lam-ca-vien-chien': 'ca-vien-chien-nuoc-mam',
  'cach-nau-ca-vien-chien': 'ca-vien-chien-nuoc-mam',
  'oc-huong-xao-bo-toi': 'oc-huong-xao-bo-toi',
  'cach-lam-oc-huong-xao-bo-toi': 'oc-huong-xao-bo-toi',
  'cach-nau-oc-huong-xao-bo-toi': 'oc-huong-xao-bo-toi',
  'bun-mang-vit': 'bun-mang-vit',
  'cach-nau-bun-mang-vit': 'bun-mang-vit',
  'cach-lam-bun-mang-vit': 'bun-mang-vit',
  'banh-uot': 'banh-uot',
  'cach-lam-banh-uot': 'banh-uot',
  'cach-nau-banh-uot': 'banh-uot',
  'canh-bun-rau-muong': 'canh-bun-rau-muong',
  'canh-bun': 'canh-bun-rau-muong',
  'cach-nau-canh-bun-rau-muong': 'canh-bun-rau-muong',
  'cach-lam-canh-bun-rau-muong': 'canh-bun-rau-muong',
  'cach-nau-canh-bun': 'canh-bun-rau-muong',
  'cach-lam-canh-bun': 'canh-bun-rau-muong',
  'bo-ne-chao-gang': 'bo-ne-chao-gang',
  'bo-ne': 'bo-ne-chao-gang',
  'cach-nau-bo-ne-chao-gang': 'bo-ne-chao-gang',
  'cach-lam-bo-ne-chao-gang': 'bo-ne-chao-gang',
  'cach-nau-bo-ne': 'bo-ne-chao-gang',
  'cach-lam-bo-ne': 'bo-ne-chao-gang',
  'banh-khot-tom-vung-tau': 'banh-khot-tom-vung-tau',
  'banh-khot': 'banh-khot-tom-vung-tau',
  'banh-khot-vung-tau': 'banh-khot-tom-vung-tau',
  'cach-nau-banh-khot-tom-vung-tau': 'banh-khot-tom-vung-tau',
  'cach-lam-banh-khot-tom-vung-tau': 'banh-khot-tom-vung-tau',
  'cach-nau-banh-khot-vung-tau': 'banh-khot-tom-vung-tau',
  'cach-lam-banh-khot-vung-tau': 'banh-khot-tom-vung-tau',
  'cach-nau-banh-khot': 'banh-khot-tom-vung-tau',
  'cach-lam-banh-khot': 'banh-khot-tom-vung-tau',
  'banh-canh-cua-gio-heo': 'banh-canh-cua-gio-heo',
  'banh-canh-cua': 'banh-canh-cua-gio-heo',
  'cach-nau-banh-canh-cua-gio-heo': 'banh-canh-cua-gio-heo',
  'cach-lam-banh-canh-cua-gio-heo': 'banh-canh-cua-gio-heo',
  'cach-nau-banh-canh-cua': 'banh-canh-cua-gio-heo',
  'cach-lam-banh-canh-cua': 'banh-canh-cua-gio-heo',
  'bun-thit-nuong-cha-gio': 'bun-thit-nuong-cha-gio',
  'bun-thit-nuong': 'bun-thit-nuong-cha-gio',
  'cach-nau-bun-thit-nuong-cha-gio': 'bun-thit-nuong-cha-gio',
  'cach-lam-bun-thit-nuong-cha-gio': 'bun-thit-nuong-cha-gio',
  'cach-nau-bun-thit-nuong': 'bun-thit-nuong-cha-gio',
  'cach-lam-bun-thit-nuong': 'bun-thit-nuong-cha-gio',
  'goi-cuon-tom-thit': 'goi-cuon-tom-thit',
  'goi-cuon': 'goi-cuon-tom-thit',
  'cach-nau-goi-cuon-tom-thit': 'goi-cuon-tom-thit',
  'cach-lam-goi-cuon-tom-thit': 'goi-cuon-tom-thit',
  'cach-nau-goi-cuon': 'goi-cuon-tom-thit',
  'cach-lam-goi-cuon': 'goi-cuon-tom-thit',
  'nui-gio-heo': 'nui-gio-heo',
  'cach-nau-nui-gio-heo': 'nui-gio-heo',
  'cach-lam-nui-gio-heo': 'nui-gio-heo',
  'nui-xao-bo-ap-chao': 'nui-xao-bo-ap-chao',
  'nui-xao-bo': 'nui-xao-bo-ap-chao',
  'cach-nau-nui-xao-bo-ap-chao': 'nui-xao-bo-ap-chao',
  'cach-lam-nui-xao-bo-ap-chao': 'nui-xao-bo-ap-chao',
  'cach-nau-nui-xao-bo': 'nui-xao-bo-ap-chao',
  'cach-lam-nui-xao-bo': 'nui-xao-bo-ap-chao',
  'bot-chien-gion-trung-doi': 'bot-chien-gion-trung-doi',
  'bot-chien-trung': 'bot-chien-gion-trung-doi',
  'bot-chien': 'bot-chien-gion-trung-doi',
  'cach-nau-bot-chien-gion-trung-doi': 'bot-chien-gion-trung-doi',
  'cach-lam-bot-chien-gion-trung-doi': 'bot-chien-gion-trung-doi',
  'cach-nau-bot-chien-trung': 'bot-chien-gion-trung-doi',
  'cach-lam-bot-chien-trung': 'bot-chien-gion-trung-doi',
  'cach-nau-bot-chien': 'bot-chien-gion-trung-doi',
  'cach-lam-bot-chien': 'bot-chien-gion-trung-doi',
  'pha-lau-bo': 'pha-lau-bo',
  'cach-nau-pha-lau-bo': 'pha-lau-bo',
  'cach-lam-pha-lau-bo': 'pha-lau-bo',
  'bo-kho-banh-my-nong-gion': 'bo-kho-banh-my-nong-gion',
  'bo-kho-banh-mi': 'bo-kho-banh-my-nong-gion',
  'bo-kho': 'bo-kho-banh-my-nong-gion',
  'cach-nau-bo-kho-banh-my-nong-gion': 'bo-kho-banh-my-nong-gion',
  'cach-lam-bo-kho-banh-my-nong-gion': 'bo-kho-banh-my-nong-gion',
  'cach-nau-bo-kho-banh-mi': 'bo-kho-banh-my-nong-gion',
  'cach-lam-bo-kho-banh-mi': 'bo-kho-banh-my-nong-gion',
  'banh-mi-pate-thap-cam': 'banh-mi-pate-thap-cam',
  'banh-mi-pate': 'banh-mi-pate-thap-cam',
  'cach-nau-banh-mi-pate-thap-cam': 'banh-mi-pate-thap-cam',
  'cach-lam-banh-mi-pate-thap-cam': 'banh-mi-pate-thap-cam',
  'cach-nau-banh-mi-pate': 'banh-mi-pate-thap-cam',
  'cach-lam-banh-mi-pate': 'banh-mi-pate-thap-cam',
  'banh-mi-doner-kebab': 'banh-mi-doner-kebab',
  'banh-mi-kebab': 'banh-mi-doner-kebab',
  'doner-kebab': 'banh-mi-doner-kebab',
  'cach-lam-banh-mi-doner-kebab': 'banh-mi-doner-kebab',
  'cach-nau-banh-mi-doner-kebab': 'banh-mi-doner-kebab',
  'cach-lam-banh-mi-kebab': 'banh-mi-doner-kebab',
  'cach-nau-banh-mi-kebab': 'banh-mi-doner-kebab',
  'cach-lam-banh-mi-doner-kebab-gion-rum-dam-da-chuan-vi-duong-pho': 'banh-mi-doner-kebab',
  'cach-nau-banh-mi-doner-kebab-gion-rum-dam-da-chuan-vi-duong-pho': 'banh-mi-doner-kebab',
  'banh-mi-heo-quay': 'banh-mi-heo-quay-gion',
  'banh-mi-heo-quay-gion': 'banh-mi-heo-quay-gion',
  'cach-nau-banh-mi-heo-quay': 'banh-mi-heo-quay-gion',
  'cach-lam-banh-mi-heo-quay': 'banh-mi-heo-quay-gion',
  'cach-nau-banh-mi-heo-quay-gion': 'banh-mi-heo-quay-gion',
  'cach-lam-banh-mi-heo-quay-gion': 'banh-mi-heo-quay-gion',
  'banh-mi-thit-nuong': 'banh-mi-thit-nuong',
  'banh-mi-thit-nuong-sa-te': 'banh-mi-thit-nuong',
  'cach-nau-banh-mi-thit-nuong': 'banh-mi-thit-nuong',
  'cach-lam-banh-mi-thit-nuong': 'banh-mi-thit-nuong',
  'cach-nau-banh-mi-thit-nuong-sa-te': 'banh-mi-thit-nuong',
  'cach-lam-banh-mi-thit-nuong-sa-te': 'banh-mi-thit-nuong',

  'banh-mi-chao': 'banh-mi-chao-xiu-mai',
  'banh-mi-chao-xiu-mai': 'banh-mi-chao-xiu-mai',
  'cach-nau-banh-mi-chao': 'banh-mi-chao-xiu-mai',
  'cach-lam-banh-mi-chao': 'banh-mi-chao-xiu-mai',
  'cach-nau-banh-mi-chao-xiu-mai': 'banh-mi-chao-xiu-mai',
  'cach-lam-banh-mi-chao-xiu-mai': 'banh-mi-chao-xiu-mai',

  'cach-nau-banh-canh-ca-loc': 'banh-canh-ca-loc',
  'banh-mi-cha-ca': 'banh-mi-cha-ca-nong',
  'banh-mi-cha-ca-nong': 'banh-mi-cha-ca-nong',
  'cach-nau-banh-mi-cha-ca': 'banh-mi-cha-ca-nong',
  'cach-nau-banh-mi-cha-ca-nong': 'banh-mi-cha-ca-nong',
  'cach-lam-banh-mi-cha-ca': 'banh-mi-cha-ca-nong',
  'cach-lam-banh-mi-cha-ca-nong': 'banh-mi-cha-ca-nong',

  'nem-lui-nuong-cuon': 'nem-lui-nuong-cuon',
  'nem-lui': 'nem-lui-nuong-cuon',
  'cach-nau-nem-lui-nuong-cuon': 'nem-lui-nuong-cuon',
  'cach-lam-nem-lui-nuong-cuon': 'nem-lui-nuong-cuon',
  'nem-lui-hue': 'nem-lui-nuong-cuon',
  'cach-nau-nem-lui-hue': 'nem-lui-nuong-cuon',
  'cach-lam-nem-lui-hue': 'nem-lui-nuong-cuon',
  'cach-nau-nem-lui': 'nem-lui-nuong-cuon',
  'cach-lam-nem-lui': 'nem-lui-nuong-cuon',
  'cach-lam-nem-lui-hue-nuong-than-thom-nuc-nuoc-leo-gan-dau-beo-bui-chuan-vi-co-do': 'nem-lui-nuong-cuon',
  'cach-lam-nem-lui-hue-thom-lung-dam-da': 'nem-lui-nuong-cuon',

  'nem-nuong-nha-trang-cuon': 'nem-nuong-nha-trang',
  'nem-nuong-nha-trang': 'nem-nuong-nha-trang',
  'cach-nau-nem-nuong-nha-trang-cuon': 'nem-nuong-nha-trang',
  'cach-lam-nem-nuong-nha-trang-cuon': 'nem-nuong-nha-trang',
  'cach-nau-nem-nuong-nha-trang': 'nem-nuong-nha-trang',
  'cach-lam-nem-nuong-nha-trang': 'nem-nuong-nha-trang',

  'ram-bap-cuon-rau': 'ram-bap-cuon-rau',
  'cach-nau-ram-bap-cuon-rau': 'ram-bap-cuon-rau',
  'cach-lam-ram-bap-cuon-rau': 'ram-bap-cuon-rau',
  'ram-bap-quang-ngai': 'ram-bap-cuon-rau',
  'cach-nau-ram-bap-quang-ngai': 'ram-bap-cuon-rau',
  'cach-lam-ram-bap-quang-ngai': 'ram-bap-cuon-rau',

  'banh-dap-mam-nem': 'banh-dap-mam-nem',
  'cach-nau-banh-dap-mam-nem': 'banh-dap-mam-nem',
  'cach-lam-banh-dap-mam-nem': 'banh-dap-mam-nem',
  'banh-dap': 'banh-dap-mam-nem',
  'cach-nau-banh-dap': 'banh-dap-mam-nem',
  'cach-lam-banh-dap': 'banh-dap-mam-nem',

  'banh-beo': 'banh-beo',
  'cach-nau-banh-beo': 'banh-beo',
  'cach-lam-banh-beo': 'banh-beo',

  'lau-ga-la-e': 'lau-ga-la-e',
  'cach-nau-lau-ga-la-e': 'lau-ga-la-e',
  'cach-lam-lau-ga-la-e': 'lau-ga-la-e',

  'banh-mi-xiu-mai-da-lat': 'banh-mi-xiu-mai-da-lat',
  'cach-nau-banh-mi-xiu-mai-da-lat': 'banh-mi-xiu-mai-da-lat',
  'cach-lam-banh-mi-xiu-mai-da-lat': 'banh-mi-xiu-mai-da-lat',

  'banh-trang-nuong-da-lat': 'banh-trang-nuong-da-lat',
  'cach-nau-banh-trang-nuong-da-lat': 'banh-trang-nuong-da-lat',
  'cach-lam-banh-trang-nuong-da-lat': 'banh-trang-nuong-da-lat',

  'bun-bo-hue-chay': 'bun-bo-hue-chay',
  'cach-nau-bun-bo-hue-chay': 'bun-bo-hue-chay',
  'cach-lam-bun-bo-hue-chay': 'bun-bo-hue-chay',

  'muc-mot-nang-nuong-sa-te': 'muc-mot-nang-nuong-sa-te',
  'cach-nau-muc-mot-nang-nuong-sa-te': 'muc-mot-nang-nuong-sa-te',
  'cach-lam-muc-mot-nang-nuong-sa-te': 'muc-mot-nang-nuong-sa-te',
  'muc-nuong-sa-te': 'muc-mot-nang-nuong-sa-te',
  'cach-nau-muc-nuong-sa-te': 'muc-mot-nang-nuong-sa-te',
  'cach-lam-muc-nuong-sa-te': 'muc-mot-nang-nuong-sa-te',

  'heo-quay-banh-hoi': 'heo-quay-banh-hoi',
  'cach-nau-heo-quay-banh-hoi': 'heo-quay-banh-hoi',
  'cach-lam-heo-quay-banh-hoi': 'heo-quay-banh-hoi',

  'be-thui': 'be-thui',
  'cach-nau-be-thui': 'be-thui',
  'cach-lam-be-thui': 'be-thui',
  'be-thui-cau-mong': 'be-thui',
  'cach-nau-be-thui-cau-mong': 'be-thui',
  'cach-lam-be-thui-cau-mong': 'be-thui',

  'bun-bo-hue': 'bun-bo-hue-dac-biet',
  'bun-bo-hue-dac-biet': 'bun-bo-hue',
  'cach-nau-bun-bo-hue': 'bun-bo-hue-dac-biet',
  'cach-nau-bun-bo-hue-dac-biet': 'bun-bo-hue-dac-biet',
  'mi-quang': 'mi-quang-tom-thit',
  'mi-quang-tom-thit': 'mi-quang-tom-thit',
  'cach-nau-mi-quang': 'mi-quang-tom-thit',
  'cach-nau-mi-quang-tom-thit': 'mi-quang-tom-thit',
  'com-ga-hoi-an': 'com-ga-hoi-an',
  'cach-nau-com-ga-hoi-an': 'com-ga-hoi-an',
  'cach-lam-com-ga-hoi-an': 'com-ga-hoi-an',
  'com-rang-dua-bo': 'com-rang-dua-bo',
  'cach-nau-com-rang-dua-bo': 'com-rang-dua-bo',
  'cach-lam-com-rang-dua-bo': 'com-rang-dua-bo',
  'cong-thuc/com-rang-dua-bo': 'com-rang-dua-bo',
  'chao-suon-sun': 'chao-suon-sun-quay',
  'chao-suon-sun-bo-duong': 'chao-suon-sun-quay',
  'cach-nau-chao-suon-sun': 'chao-suon-sun-quay',
  'cach-nau-chao-suon-sun-bo-duong': 'chao-suon-sun-quay',
  'lau-rieu-cua': 'lau-rieu-cua-bap-bo',
  'cach-nau-lau-rieu-cua': 'lau-rieu-cua-bap-bo',
  'lau-rieu-cua-bap-bo': 'lau-rieu-cua-bap-bo',
  'cach-nau-lau-rieu-cua-bap-bo': 'lau-rieu-cua-bap-bo',
  'cach-nau-lau-rieu-cua-bap-bo-chua-cay': 'lau-rieu-cua-bap-bo',
  'lau-rieu-cua-bap-bo-suon-sun': 'lau-rieu-cua-bap-bo',
  'cach-nau-lau-rieu-cua-bap-bo-suon-sun': 'lau-rieu-cua-bap-bo',
  'mien-luon': 'mien-luon-gion-xao-lan',
  'mien-luon-gion': 'mien-luon-gion-xao-lan',
  'cach-nau-mien-luon': 'mien-luon-gion-xao-lan',
  'cach-nau-mien-luon-gion': 'mien-luon-gion-xao-lan',
  'cach-nau-mien-luon-gion-nuoc-dung': 'mien-luon-gion-xao-lan',
  'cach-nau-mien-luon-gion-nuoc-dung-thanh-ngot': 'mien-luon-gion-xao-lan',
  'cach-nau-mien-luon-gion-xao-lan': 'mien-luon-gion-xao-lan',
  'nom-bo-kho': 'nom-bo-kho-ha-noi',
  'nom-bo-kho-ha-noi': 'nom-bo-kho-ha-noi',
  'cach-nau-nom-bo-kho': 'nom-bo-kho-ha-noi',
  'cach-nau-nom-bo-kho-ha-noi': 'nom-bo-kho-ha-noi',
  'cach-lam-nom-bo-kho': 'nom-bo-kho-ha-noi',
  'cach-lam-nom-bo-kho-ha-noi': 'nom-bo-kho-ha-noi',
  'cach-lam-nom-bo-kho-du-du': 'nom-bo-kho-ha-noi',
  'cach-lam-nom-bo-kho-du-du-chua-ngot': 'nom-bo-kho-ha-noi',
  'cach-lam-nom-bo-kho-du-du-chua-ngot-gion-tan': 'nom-bo-kho-ha-noi',
  'nem-chua-ran': 'nem-chua-ran-ha-noi',
  'nem-chua-ran-ha-noi': 'nem-chua-ran-ha-noi',
  'cach-nau-nem-chua-ran': 'nem-chua-ran-ha-noi',
  'cach-nau-nem-chua-ran-ha-noi': 'nem-chua-ran-ha-noi',
  'cach-lam-nem-chua-ran': 'nem-chua-ran-ha-noi',
  'cach-lam-nem-chua-ran-ha-noi': 'nem-chua-ran-ha-noi',
  'cach-lam-nem-chua-ran-pho-co': 'nem-chua-ran-ha-noi',
  'cach-lam-nem-chua-ran-pho-co-vang-ruom': 'nem-chua-ran-ha-noi',
  'cach-lam-nem-chua-ran-pho-co-vang-ruom-gion-rum': 'nem-chua-ran-ha-noi',
  'cach-lam-nem-chua-ran-pho-co-vang-ruom-gion-rum-bat-bai-tai-nha': 'nem-chua-ran-ha-noi',
  'doi-sun-nuong': 'doi-sun-nuong-than-hoa',
  'doi-sun-nuong-than-hoa': 'doi-sun-nuong-than-hoa',
  'cach-nau-doi-sun-nuong': 'doi-sun-nuong-than-hoa',
  'cach-nau-doi-sun-nuong-than-hoa': 'doi-sun-nuong-than-hoa',
  'cach-lam-doi-sun-nuong': 'doi-sun-nuong-than-hoa',
  'cach-lam-doi-sun-nuong-than-hoa': 'doi-sun-nuong-than-hoa',
  'cach-lam-doi-sun-nuong-da-gion': 'doi-sun-nuong-than-hoa',
  'cach-lam-doi-sun-nuong-da-gion-thit-mem': 'doi-sun-nuong-than-hoa',
  'cach-lam-doi-sun-nuong-da-gion-thit-mem-thom-lung-khoi-than': 'doi-sun-nuong-than-hoa',
  'de-tai-chanh': 'de-tai-chanh-tuong-ban',
  'de-tai-chanh-tuong-ban': 'de-tai-chanh-tuong-ban',
  'cach-nau-de-tai-chanh': 'de-tai-chanh-tuong-ban',
  'cach-nau-de-tai-chanh-tuong-ban': 'de-tai-chanh-tuong-ban',
  'cach-lam-de-tai-chanh': 'de-tai-chanh-tuong-ban',
  'cach-lam-de-tai-chanh-tuong-ban': 'de-tai-chanh-tuong-ban',
  'cach-lam-de-tai-chanh-dam-da': 'de-tai-chanh-tuong-ban',
  'cach-lam-de-tai-chanh-dam-da-cay-nong': 'de-tai-chanh-tuong-ban',
  'cach-lam-de-tai-chanh-dam-da-cay-nong-ben-moi-chuan-quan': 'de-tai-chanh-tuong-ban',
  'ga-nuong-com-lam': 'ga-nuong-com-lam',
  'cach-nau-ga-nuong-com-lam': 'ga-nuong-com-lam',
  'cach-lam-ga-nuong-com-lam': 'ga-nuong-com-lam',
  'cach-lam-ga-nuong-com-lam-thom-ngon': 'ga-nuong-com-lam',
  'cach-lam-ga-nuong-com-lam-thom-ngon-dam-da': 'ga-nuong-com-lam',
  'cach-lam-ga-nuong-com-lam-thom-ngon-dam-da-chuan-quan': 'ga-nuong-com-lam',

  'hu-tieu-nam-vang': 'hu-tieu-nam-vang-kho',
  'hu-tieu-nam-vang-kho': 'hu-tieu-nam-vang-kho',
  'cach-nau-hu-tieu-nam-vang': 'hu-tieu-nam-vang-kho',
  'cach-nau-hu-tieu-nam-vang-kho': 'hu-tieu-nam-vang-kho',
  'cach-lam-hu-tieu-nam-vang': 'hu-tieu-nam-vang-kho',
  'cach-lam-hu-tieu-nam-vang-kho': 'hu-tieu-nam-vang-kho',

  'hu-tieu-go': 'hu-tieu-go-sai-gon',
  'hu-tieu-go-sai-gon': 'hu-tieu-go-sai-gon',
  'cach-nau-hu-tieu-go': 'hu-tieu-go-sai-gon',
  'cach-nau-hu-tieu-go-sai-gon': 'hu-tieu-go-sai-gon',
  'cach-lam-hu-tieu-go': 'hu-tieu-go-sai-gon',
  'cach-lam-hu-tieu-go-sai-gon': 'hu-tieu-go-sai-gon',

  'hu-tieu-sa-te': 'hu-tieu-sa-te-nai',
  'hu-tieu-sa-te-nai': 'hu-tieu-sa-te-nai',
  'cach-nau-hu-tieu-sa-te': 'hu-tieu-sa-te-nai',
  'cach-nau-hu-tieu-sa-te-nai': 'hu-tieu-sa-te-nai',
  'cach-lam-hu-tieu-sa-te': 'hu-tieu-sa-te-nai',
  'cach-lam-hu-tieu-sa-te-nai': 'hu-tieu-sa-te-nai',

  'mi-hoanh-thanh': 'mi-hoanh-thanh-xa-xiu',
  'mi-hoanh-thanh-xa-xiu': 'mi-hoanh-thanh-xa-xiu',
  'cach-nau-mi-hoanh-thanh': 'mi-hoanh-thanh-xa-xiu',
  'cach-nau-mi-hoanh-thanh-xa-xiu': 'mi-hoanh-thanh-xa-xiu',
  'cach-lam-mi-hoanh-thanh': 'mi-hoanh-thanh-xa-xiu',
  'cach-lam-mi-hoanh-thanh-xa-xiu': 'mi-hoanh-thanh-xa-xiu',
  'hu-tieu-mi-hoanh-thanh': 'mi-hoanh-thanh-xa-xiu',
  'cach-nau-hu-tieu-mi-hoanh-thanh': 'mi-hoanh-thanh-xa-xiu',

  'hu-tieu-muc': 'hu-tieu-muc-tuoi',
  'hu-tieu-muc-tuoi': 'hu-tieu-muc-tuoi',
  'cach-nau-hu-tieu-muc': 'hu-tieu-muc-tuoi',
  'cach-nau-hu-tieu-muc-tuoi': 'hu-tieu-muc-tuoi',
  'cach-lam-hu-tieu-muc': 'hu-tieu-muc-tuoi',
  'cach-lam-hu-tieu-muc-tuoi': 'hu-tieu-muc-tuoi',
};

/**
 * Find a dish from dishes list by recipe slug or hash
 */
export function findDishByRecipeSlug(slugOrHash: string, dishes: Dish[]): Dish | undefined {
  if (!slugOrHash) return undefined;
  const clean = slugOrHash
    .replace(/^#recipe-/, '')
    .replace(/^#/, '')
    .replace(/^\//, '')
    .replace(/\/$/, '')
    .replace(/^cach-nau-mon-ngon\//, '');

  const resolvedClean = RECIPE_SLUG_ALIASES[clean] || clean;

  return dishes.find((d) => {
    const slug = getRecipeSlug(d);
    return (
      d.id === clean ||
      d.id === resolvedClean ||
      slug === clean ||
      slug === resolvedClean ||
      clean === `cach-nau-${d.id}` ||
      clean === `cach-lam-${d.id}` ||
      resolvedClean === `cach-nau-${d.id}` ||
      resolvedClean === `cach-lam-${d.id}` ||
      clean.replace(/^(cach-nau-|cach-lam-)/, '') === d.id.replace(/^(cach-nau-|cach-lam-)/, '') ||
      resolvedClean.replace(/^(cach-nau-|cach-lam-)/, '') === d.id.replace(/^(cach-nau-|cach-lam-)/, '')
    );
  });
}

/**
 * Format SEO title for recipe article
 */
export function formatRecipeSeoTitle(dishNameOrRecipeTitle: string): string {
  const trimmed = dishNameOrRecipeTitle.trim();
  if (trimmed.toLowerCase().startsWith('cách nấu') || trimmed.toLowerCase().startsWith('cách làm')) {
    return `${trimmed} | Ăn Gì Giờ`;
  }
  return `Cách Nấu ${trimmed} Thơm Ngon Chuẩn Vị Gia Đình | Ăn Gì Giờ`;
}

/**
 * Normalizes and formats recipe ingredients specifically for Schema.org JSON-LD.
 * Prevents Google Search Console "Invalid string length in field 'recipeIngredient'" error:
 * - Excludes non-food equipment/utensils (e.g. "Dụng cụ:", "Thiết bị:", "Bí quyết:", "Lưu ý:")
 * - Strips leading label prefixes (e.g. "Gia vị trộn: ", "Nước mắm kẹo: ")
 * - Splits compound ingredients joined by "+" or ";" into separate atomic ingredients
 * - Removes parenthetical descriptions completely
 * - Strictly caps item length under 55 characters
 */
export function formatRecipeIngredientsForSchema(
  ingredients?: Array<{ category: string; items: string[] }>
): string[] {
  if (!ingredients || !Array.isArray(ingredients)) return [];
  const result: string[] = [];

  for (const cat of ingredients) {
    if (!cat.items || !Array.isArray(cat.items)) continue;
    for (const rawItem of cat.items) {
      if (!rawItem || typeof rawItem !== 'string') continue;
      let s = rawItem.trim();
      const lower = s.toLowerCase();

      // Exclude non-food tools, notes or instruction sentences
      if (
        lower.startsWith('dụng cụ') ||
        lower.startsWith('thiết bị') ||
        lower.startsWith('bí quyết') ||
        lower.startsWith('lưu ý') ||
        lower.startsWith('chú ý') ||
        (lower.startsWith('(') && lower.endsWith(')'))
      ) {
        continue;
      }

      // Remove leading labels (e.g. 'Nước mắm kẹo: ', 'Gia vị ướp: ', 'Cốt gia vị tươi: ')
      s = s.replace(/^[A-ZÀ-Ỹa-zà-ỹ0-9\s/&,–-]{2,40}:\s*/, '');

      // Split compound ingredients joined by '+' or ';'
      const parts = s.includes(' + ')
        ? s.split(/\s+\+\s+/)
        : s.includes('; ')
        ? s.split(/;\s+/)
        : [s];

      for (let part of parts) {
        let item = part.trim();
        // Remove parenthetical remarks e.g. (bí quyết...) or (nấu hơi ráo nước...)
        item = item.replace(/\s*\([^)]*\)/g, '').trim();
        // Remove extra spaces
        item = item.replace(/\s+/g, ' ');

        // Strict cap at 55 characters to guarantee 100% Google Search Console validity
        if (item.length > 55) {
          item = item.slice(0, 52).trim() + '...';
        }

        if (item.length >= 2 && !result.includes(item)) {
          result.push(item);
        }
      }
    }
  }

  return result;
}


