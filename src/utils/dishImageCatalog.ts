import { useState, useEffect } from 'react';

// Curated and verified Vietnamese Dish Image Catalog
export interface DishImageItem {
  name: string;
  image: string;
  category: string;
}

export function removeVietnameseAccents(str: string = ""): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .toLowerCase()
    .trim();
}

export const ALL_AUTHENTIC_DISH_IMAGES: DishImageItem[] = [
  {
    "image": "/images/an-gi-cho-do-ngan.jpg",
    "name": "Mâm Cơm Thanh Đạm Giải Ngấy",
    "category": "mon_ngon"
  },
  {
    "image": "/images/ba_chi_rang.jpg",
    "name": "Cơm Ba Chỉ Rang Cháy Cạnh",
    "category": "com_xoi"
  },
  {
    "image": "/images/bach_tuoc_nuong.jpg",
    "name": "Bạch Tuộc Nướng Sa Tế Giòn Sần Sật",
    "category": "nuong_chien"
  },
  {
    "image": "/images/banh_bao.jpg",
    "name": "Bánh Bao Nóng Nhân Thịt Trứng Cút",
    "category": "mon_ngon"
  },
  {
    "image": "/images/banh_beo.jpg",
    "name": "Bánh Bèo Chén Tôm Chấy Mỡ Hành Giòn Rụm",
    "category": "com_xoi"
  },
  {
    "image": "/images/banh_canh_ca_loc.jpg",
    "name": "Bánh Canh Cá Lóc Quảng Trị Bột Gạo",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/banh_canh_cua.jpg",
    "name": "Bánh Canh Cua Giò Heo Nước Dùng Béo",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/banh_canh_ghe.jpg",
    "name": "Bánh Canh Ghẹ Nguyên Con Nước Sốt Đậm",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/banh_chuoi_nuong.jpg",
    "name": "Bánh Chuối Nướng Rưới Nước Cốt Dừa Mè Rang",
    "category": "an_vat"
  },
  {
    "image": "/images/banh_cuon.jpg",
    "name": "Bánh Cuốn Nóng Thịt Băm Mộc Nhĩ Cà Cuống",
    "category": "banhmi_cuon"
  },
  {
    "image": "/images/banh_da_cua.jpg",
    "name": "Bánh Đa Cua Bể Hải Phòng Chả Lá Lốt",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/banh_dap_mam_nem.jpg",
    "name": "Bánh Đập Mắm Nêm Miền Trung Giòn Rụm",
    "category": "banhmi_cuon"
  },
  {
    "image": "/images/banh_flan_caramen.jpg",
    "name": "Bánh Flan Caramen Sữa Tươi Cà Phê Cốt Dừa",
    "category": "an_vat"
  },
  {
    "image": "/images/banh_hoi_heo_quay.jpg",
    "name": "Heo Quay Da Giòn Bánh Hỏi Mỡ Hành",
    "category": "nuong_chien"
  },
  {
    "image": "/images/banh_khot.jpg",
    "name": "Bánh Khọt Tôm Tươi Nước Cốt Dừa Vũng Tàu",
    "category": "banhmi_cuon"
  },
  {
    "image": "/images/banh_mi_cha_ca.jpg",
    "name": "Bánh Mì Chả Cá Nóng Thì Là Nha Trang",
    "category": "banhmi_cuon"
  },
  {
    "image": "/images/banh_mi_chao.jpg",
    "name": "Bánh Mì Chảo Xíu Mại Trứng Lòng Đào",
    "category": "banhmi_cuon"
  },
  {
    "image": "/images/banh_mi_heo_quay.jpg",
    "name": "Bánh Mì Heo Quay Da Giòn Rụm",
    "category": "banhmi_cuon"
  },
  {
    "image": "/images/banh_mi_kebab.jpg",
    "name": "Bánh Mì Tam Giác Thổ Nhĩ Kỳ Doner Kebab",
    "category": "banhmi_cuon"
  },
  {
    "image": "/images/banh_mi_pate.jpg",
    "name": "Bánh Mì Pate Thập Cẩm Giòn Rụm",
    "category": "banhmi_cuon"
  },
  {
    "image": "/images/banh_mi_que.jpg",
    "name": "Bánh Mì Que Hải Phòng Pate Cay Cay",
    "category": "banhmi_cuon"
  },
  {
    "image": "/images/banh_mi_thit_nuong.jpg",
    "name": "Bánh Mì Thịt Nướng Sả Thơm Lừng",
    "category": "banhmi_cuon"
  },
  {
    "image": "/images/banh_mi_xiu_mai.jpg",
    "name": "Bánh Mì Xíu Mại Chén Đà Lạt",
    "category": "banhmi_cuon"
  },
  {
    "image": "/images/banh_trang_cuon_thit_heo_cover.jpg",
    "name": "Bánh Tráng Cuốn Thịt Heo Đại Lộc",
    "category": "mon_ngon"
  },
  {
    "image": "/images/banh_trang_nuong_da_lat.jpg",
    "name": "Bánh Tráng Nướng Đà Lạt Trứng Cút Mỡ Hành",
    "category": "an_vat"
  },
  {
    "image": "/images/banh_trang_tron.jpg",
    "name": "Bánh Tráng Trộn Bò Khô Sa Tế Tép Mỡ",
    "category": "an_vat"
  },
  {
    "image": "/images/banh_uot.jpg",
    "name": "Bánh Ướt",
    "category": "banhmi_cuon"
  },
  {
    "image": "/images/banh_xeo.jpg",
    "name": "Bánh Xèo",
    "category": "banhmi_cuon"
  },
  {
    "image": "/images/banh_xeo_chay.jpg",
    "name": "Bánh Xèo Nấm Chay Giòn Rụm Rau Rừng",
    "category": "do_chay"
  },
  {
    "image": "/images/bao_tu_ham_tieu.jpg",
    "name": "Bao Tử Hầm Tiêu Xanh Giòn Ngọt Cay Nồng",
    "category": "lau_chao"
  },
  {
    "image": "/images/bap_bo_ngam_mam.jpg",
    "name": "Bắp Bò Hoa Ngâm Mắm Chua Ngọt Tiêu Sọ Hoa Hồi",
    "category": "mon_nhau"
  },
  {
    "image": "/images/bap_cai_xao_ca_chua.jpg",
    "name": "Bap Cai Xao Ca Chua",
    "category": "mon_ngon"
  },
  {
    "image": "/images/bap_xao_bo_tep.jpg",
    "name": "Bắp Xào Bơ Tép Khô Mỡ Hành Thơm Lừng",
    "category": "an_vat"
  },
  {
    "image": "/images/bau_luoc_kho_quet.jpg",
    "name": "Bau Luoc Kho Quet",
    "category": "mon_ngon"
  },
  {
    "image": "/images/bbq_spareribs.jpg",
    "name": "Sườn Nướng BBQ Sốt Mật Ong",
    "category": "mon_ngon"
  },
  {
    "image": "/images/be_thui.jpg",
    "name": "Bê Thui Cầu Mống Bì Giòn Thịt Tái Hồng Chấm Mắm Nêm",
    "category": "mon_nhau"
  },
  {
    "image": "/images/bingsu_dau_tay.jpg",
    "name": "Bingsu Dâu Tây Tuyết Mịn Sữa Đặc Hàn Quốc",
    "category": "an_vat"
  },
  {
    "image": "/images/bo_cuon_nam.jpg",
    "name": "Bo Cuon Nam",
    "category": "mon_ngon"
  },
  {
    "image": "/images/bo_kho_banh_mi.jpg",
    "name": "Bò Kho Nóng Hổi Chấm Bánh Mỳ Giòn Rụm",
    "category": "banhmi_cuon"
  },
  {
    "image": "/images/bo_kho_gung_sa.jpg",
    "name": "Bo Kho Gung Sa",
    "category": "mon_ngon"
  },
  {
    "image": "/images/bo_ne.jpg",
    "name": "Bò Né Chảo Gang Trứng Ốp La Xíu Mại Pate",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/bo_nhung_dam.jpg",
    "name": "Bò Nhúng Dấm Chua Dịu",
    "category": "lau_chao"
  },
  {
    "image": "/images/bo_nuong_tang_trung_muoi.jpg",
    "name": "Bò Tơ Nướng Tảng Sốt Trứng Muối Phô Mai Chảo Gang",
    "category": "nuong_chien"
  },
  {
    "image": "/images/bo_to_nuong_ngoi.jpg",
    "name": "Bò Tơ Nướng Ngói",
    "category": "mon_nhau"
  },
  {
    "image": "/images/bo_to_nuong_tang.jpg",
    "name": "Bo To Nuong Tang",
    "category": "mon_ngon"
  },
  {
    "image": "/images/bo_xao_thien_ly.jpg",
    "name": "Bo Xao Thien Ly",
    "category": "mon_ngon"
  },
  {
    "image": "/images/bot_chien.jpg",
    "name": "Bột Chiên Giòn Đôi Trứng Hành Lá Sài Gòn",
    "category": "nuong_chien"
  },
  {
    "image": "/images/buffet.jpg",
    "name": "Tiệc Nướng Lẩu Buffet Đầy Đủ",
    "category": "mon_nhau"
  },
  {
    "image": "/images/bun_bo_hue.jpg",
    "name": "Bún Bò Huế Đặc Biệt Giò Gân",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/bun_bo_hue_chay.jpg",
    "name": "Bún Bò Huế Chay Nấm Đậu Hũ Thơm Nồng",
    "category": "do_chay"
  },
  {
    "image": "/images/bun_ca.jpg",
    "name": "Bun Ca",
    "category": "mon_ngon"
  },
  {
    "image": "/images/bun_ca_cay_hai_phong.jpg",
    "name": "Bún Cá Cay Hải Phòng",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/bun_ca_ngu.jpg",
    "name": "Bún Cá Ngừ",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/bun_cha_gio_chay.jpg",
    "name": "Bún Chả Giò Chay Rau Sống Nước Mắm Chua Ngọt",
    "category": "do_chay"
  },
  {
    "image": "/images/bun_cha_ha_noi.jpg",
    "name": "Bún Chả Hà Nội Nướng Que Tre",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/bun_dau_mam_tom.jpg",
    "name": "Bún Đậu Mắm Tôm Mẹt Đầy Đủ",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/bun_hai_san.jpg",
    "name": "Bun Hai San",
    "category": "mon_ngon"
  },
  {
    "image": "/images/bun_mam.jpg",
    "name": "Bún Mắm Miền Tây Đậm Đà Sắc Màu",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/bun_mang_vit.jpg",
    "name": "Bún Măng Vịt Chấm Nước Mắm Gừng",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/bun_moc.jpg",
    "name": "Bun Moc",
    "category": "mon_ngon"
  },
  {
    "image": "/images/bun_moc_ha_noi.jpg",
    "name": "Bún Mọc Sườn Nấm Hương Nước Dùng Thanh Ngọt",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/bun_nuoc_leo.jpg",
    "name": "Bún Nước Lèo Sóc Trăng Cá Lóc",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/bun_oc.jpg",
    "name": "Bún Ốc Nguội Hà Nội",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/bun_rieu_chay.jpg",
    "name": "Bún Riêu Cua Chay Đậu Hũ Ngập Riêu Cà Chua",
    "category": "do_chay"
  },
  {
    "image": "/images/bun_rieu_cua.jpg",
    "name": "Bún Riêu Cua Bắp Bò Ốc Giòn",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/bun_suon_doc_mung.jpg",
    "name": "Bún Sườn Mọc Dọc Mùng Thanh Mát",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/bun_thai.jpg",
    "name": "Bún Thái Hải Sản Chua Cay",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/bun_thang.jpg",
    "name": "Bún Thang Phố Cổ Hà Nội Tinh Tế",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/bun_thit_nuong.jpg",
    "name": "Bún Thịt Nướng Chả Giò Miền Nam",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/ca-lam-mon-gi-ngon.jpg",
    "name": "Cá Nấu Món Ngon Gia Đình",
    "category": "mon_ngon"
  },
  {
    "image": "/images/ca_bat_bo_sap_dam.jpg",
    "name": "Ca Bat Bo Sap Dam",
    "category": "mon_ngon"
  },
  {
    "image": "/images/ca_dieu_hong_hap.jpg",
    "name": "Ca Dieu Hong Hap",
    "category": "mon_ngon"
  },
  {
    "image": "/images/ca_loc_nuong_trui.jpg",
    "name": "Cá Lóc Nướng Trui Rơm Miền Tây Cuốn Bánh Tráng",
    "category": "nuong_chien"
  },
  {
    "image": "/images/ca_phao_muoi_dua_hau.jpg",
    "name": "Cà Pháo Muối Giòn",
    "category": "mon_ngon"
  },
  {
    "image": "/images/ca_phao_oi_xi_muoi.jpg",
    "name": "Cà Pháo Lắc Muối Ớt Xi Muội",
    "category": "mon_ngon"
  },
  {
    "image": "/images/ca_phao_thanh_long.jpg",
    "name": "Cà Pháo Muối Chua Ngọt",
    "category": "mon_ngon"
  },
  {
    "image": "/images/ca_phe_muoi.jpg",
    "name": "Cà Phê Muối Béo Mặn Kem Sữa",
    "category": "do_uong"
  },
  {
    "image": "/images/ca_vien_chien_nuoc_mam.jpg",
    "name": "Mẹt Cá Viên Chiên Nước Mắm Tỏi Ớt Đậm Đà",
    "category": "an_vat"
  },
  {
    "image": "/images/cacao_dam_tran_chau.jpg",
    "name": "Cacao Dầm Trân Châu Bột Phô Mai Dẻo",
    "category": "do_uong"
  },
  {
    "image": "/images/cai_thia_xao_nam.jpg",
    "name": "Cai Thia Xao Nam",
    "category": "mon_ngon"
  },
  {
    "image": "/images/cam_sanh_du_du.jpg",
    "name": "Nước Cam Sành & Đu Đủ Tươi Mát",
    "category": "mon_ngon"
  },
  {
    "image": "/images/canh_bi_xanh_tom.jpg",
    "name": "Canh Bi Xanh Tom",
    "category": "mon_ngon"
  },
  {
    "image": "/images/canh_bun.jpg",
    "name": "Canh Bún Rau Muống Cua Đồng Nóng Hổi",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/canh_cai_cuc_tom.jpg",
    "name": "Canh Cai Cuc Tom",
    "category": "mon_ngon"
  },
  {
    "image": "/images/canh_chua_ca_loc.jpg",
    "name": "Canh Chua Cá Lóc Nam Bộ Bông Điên Điển Bạc Hà",
    "category": "lau_chao"
  },
  {
    "image": "/images/canh_chua_chay.jpg",
    "name": "Canh Chua Chay Nấm Đậu Bắp Thơm Ngon Đưa Cơm",
    "category": "do_chay"
  },
  {
    "image": "/images/canh_cua_dong.jpg",
    "name": "Canh Cua Dong",
    "category": "mon_ngon"
  },
  {
    "image": "/images/canh_cua_rau_day.jpg",
    "name": "Canh Cua Rau Day",
    "category": "mon_ngon"
  },
  {
    "image": "/images/canh_ga_ham_hat_sen.jpg",
    "name": "Canh Ga Ham Hat Sen",
    "category": "mon_ngon"
  },
  {
    "image": "/images/canh_kho_qua_don_thit.jpg",
    "name": "Canh Kho Qua Don Thit",
    "category": "mon_ngon"
  },
  {
    "image": "/images/canh_mang_tuoi_suon.jpg",
    "name": "Canh Mang Tuoi Suon",
    "category": "mon_ngon"
  },
  {
    "image": "/images/canh_moc_nam_huong.jpg",
    "name": "Canh Moc Nam Huong",
    "category": "mon_ngon"
  },
  {
    "image": "/images/canh_muop_huong_lac.jpg",
    "name": "Canh Muop Huong Lac",
    "category": "mon_ngon"
  },
  {
    "image": "/images/canh_ngheu_nau_chua.jpg",
    "name": "Canh Ngheu Nau Chua",
    "category": "mon_ngon"
  },
  {
    "image": "/images/canh_rau_den_tom.jpg",
    "name": "Canh Rau Den Tom",
    "category": "mon_ngon"
  },
  {
    "image": "/images/canh_rau_ngot_thit_bam.jpg",
    "name": "Canh Rau Ngot Thit Bam",
    "category": "mon_ngon"
  },
  {
    "image": "/images/canh_suon_bi_do.jpg",
    "name": "Canh Suon Bi Do",
    "category": "mon_ngon"
  },
  {
    "image": "/images/cha_ca_la_vong.jpg",
    "name": "Chả Cá Lã Vọng Thì Là Hành Hoa Chảo Gang",
    "category": "nuong_chien"
  },
  {
    "image": "/images/cha_ca_sot_ca.jpg",
    "name": "Cha Ca Sot Ca",
    "category": "mon_ngon"
  },
  {
    "image": "/images/cha_gio.jpg",
    "name": "Nem Chua Rán Giòn Rụm Phố Cổ Hà Nội",
    "category": "mon_nhau"
  },
  {
    "image": "/images/chan_ga_nuong.jpg",
    "name": "Chân Gà Nướng Mật Ong Vàng Óng Cay Cay",
    "category": "nuong_chien"
  },
  {
    "image": "/images/chan_ga_sa_tac.jpg",
    "name": "Chân Gà Sả Tắc Rút Xương Chua Cay Giòn Rụm",
    "category": "mon_nhau"
  },
  {
    "image": "/images/chao_ca_loc.jpg",
    "name": "Cháo Cá Lóc Miền Tây Rau Đắng Nóng Hổi",
    "category": "lau_chao"
  },
  {
    "image": "/images/chao_ech.jpg",
    "name": "Cháo Ếch Singapore Niêu Đất Cay Nồng",
    "category": "lau_chao"
  },
  {
    "image": "/images/chao_long.jpg",
    "name": "Cháo Lòng Dồi Nóng Hổi Rắc Tiêu Thơm",
    "category": "lau_chao"
  },
  {
    "image": "/images/chao_suon_sun.jpg",
    "name": "Cháo Sườn Sụn Quẩy Giòn Ruốc Thịt Hà Nội",
    "category": "lau_chao"
  },
  {
    "image": "/images/chao_vit.jpg",
    "name": "Chao Vit",
    "category": "mon_ngon"
  },
  {
    "image": "/images/che_buoi.jpg",
    "name": "Chè Bưởi An Giang Cùi Giòn Cốt Dừa Béo",
    "category": "an_vat"
  },
  {
    "image": "/images/che_khuc_bach.jpg",
    "name": "Chè Khúc Bạch Hạnh Nhân Nhãn Nhục Thanh Mát",
    "category": "an_vat"
  },
  {
    "image": "/images/chen_mam_nhi_chuoi_cau.jpg",
    "name": "Nước Mắm Nhĩ Nguyên Chất",
    "category": "mon_ngon"
  },
  {
    "image": "/images/chicken_caesar.jpg",
    "name": "Salad Ức Gà Sốt Caesar",
    "category": "salad_monnhe"
  },
  {
    "image": "/images/chim_cut_quay.jpg",
    "name": "Chim Cút Quay Mật Ong Lá Mắc Mật",
    "category": "nuong_chien"
  },
  {
    "image": "/images/com_bo_luc_lac.jpg",
    "name": "Cơm Bò Lúc Lắc Sốt Tiêu Đen & Cơm Chiên Đỏ",
    "category": "com_xoi"
  },
  {
    "image": "/images/com_ca_kho_to.jpg",
    "name": "Cơm Cá Kho Tộ",
    "category": "com_xoi"
  },
  {
    "image": "/images/com_chay_kho_quet.jpg",
    "name": "Cơm Cháy Kho Quẹt Tôm Khô Thịt Ba Chỉ",
    "category": "com_xoi"
  },
  {
    "image": "/images/com_chay_suon_non.jpg",
    "name": "Cơm Chay Sườn Non Nấm Kho Tiêu Đậm Đà",
    "category": "do_chay"
  },
  {
    "image": "/images/com_chien_duong_chau.jpg",
    "name": "Cơm Chiên Dương Châu Thập Cẩm",
    "category": "com_xoi"
  },
  {
    "image": "/images/com_chien_hai_san.jpg",
    "name": "Cơm Chiên Hải Sản",
    "category": "com_xoi"
  },
  {
    "image": "/images/com_ga_hoi_an.jpg",
    "name": "Cơm Gà Hội An",
    "category": "com_xoi"
  },
  {
    "image": "/images/com_ga_quay_sot_mat.jpg",
    "name": "Cơm Gà Quay Sốt Mật",
    "category": "com_xoi"
  },
  {
    "image": "/images/com_ga_xoi_mo.jpg",
    "name": "Cơm Gà Xối Mỡ Da Giòn",
    "category": "com_xoi"
  },
  {
    "image": "/images/com_nieu_bo_tieu_den.jpg",
    "name": "Cơm Niêu Bò Sốt Tiêu Đen",
    "category": "com_xoi"
  },
  {
    "image": "/images/com_nieu_kho_quet_chay.jpg",
    "name": "Cơm Niêu Nấm Rơm Kho Quẹt Chay Cháy Cạnh",
    "category": "do_chay"
  },
  {
    "image": "/images/com_rang_dua_bo.jpg",
    "name": "Cơm Rang Dưa Bò Hà Nội",
    "category": "com_xoi"
  },
  {
    "image": "/images/com_suon_cay.jpg",
    "name": "Cơm Sườn Nướng Mật Ong Xốt Cay",
    "category": "com_xoi"
  },
  {
    "image": "/images/com_tam.jpg",
    "name": "Com Tam",
    "category": "mon_ngon"
  },
  {
    "image": "/images/com_tam_suon_bi_cha.jpg",
    "name": "Cơm Sườn Nướng Mật Ong Thơm Ngon Đậm Đà Chuẩn Quán",
    "category": "com_xoi"
  },
  {
    "image": "/images/com_thit_kho_tau.jpg",
    "name": "Cơm Thịt Kho Tàu Trứng Vịt",
    "category": "com_xoi"
  },
  {
    "image": "/images/cut_lon_xao_me.jpg",
    "name": "Cut Lon Xao Me",
    "category": "mon_ngon"
  },
  {
    "image": "/images/dau_hu_chien_gion.jpg",
    "name": "Đậu Hũ Chiên Giòn Rụm Chấm Mắm Tôm",
    "category": "nuong_chien"
  },
  {
    "image": "/images/dau_hu_sot_ca_chua.jpg",
    "name": "Dau Hu Sot Ca Chua",
    "category": "mon_ngon"
  },
  {
    "image": "/images/dau_hu_sot_ca_nam.jpg",
    "name": "Dau Hu Sot Ca Nam",
    "category": "mon_ngon"
  },
  {
    "image": "/images/dau_hu_tu_xuyen.jpg",
    "name": "Dau Hu Tu Xuyen",
    "category": "mon_ngon"
  },
  {
    "image": "/images/dau_que_xao_toi.jpg",
    "name": "Dau Que Xao Toi",
    "category": "mon_ngon"
  },
  {
    "image": "/images/de_suon_heo_bbq.jpg",
    "name": "Dẻ Sườn Heo Nướng Tảng BBQ Sốt Khói",
    "category": "nuong_chien"
  },
  {
    "image": "/images/de_tai_chanh.jpg",
    "name": "Dê Tái Chanh Ninh Bình Chấm Tương Bần Gừng",
    "category": "mon_nhau"
  },
  {
    "image": "/images/dimsum.jpg",
    "name": "Dimsum Thập Cẩm Xửng Hấp (Há Cảo & Xíu Mại)",
    "category": "banhmi_cuon"
  },
  {
    "image": "/images/do_chua_che_hat_sen.jpg",
    "name": "Chè Hạt Sen Nhãn Nhục",
    "category": "mon_ngon"
  },
  {
    "image": "/images/doi_sun_nuong.jpg",
    "name": "Dồi Sụn Nướng Than Hoa Thơm Lừng Phố Cổ",
    "category": "nuong_chien"
  },
  {
    "image": "/images/dry_noodles.jpg",
    "name": "Mì Khô Trộn Top Mỡ Xá Xíu",
    "category": "mon_ngon"
  },
  {
    "image": "/images/dua_chua_thom_muoi_ot.jpg",
    "name": "Dưa Chua Thơm Muối Ớt",
    "category": "mon_ngon"
  },
  {
    "image": "/images/dua_gia_he_quyt_duong.jpg",
    "name": "Dưa Giá Hẹ Muối Chua Giòn",
    "category": "mon_ngon"
  },
  {
    "image": "/images/dua_leo_man_hau.jpg",
    "name": "Dưa Leo Trộn Chua Ngọt",
    "category": "mon_ngon"
  },
  {
    "image": "/images/dua_leo_nho_xanh.jpg",
    "name": "Dưa Leo Tươi Giòn",
    "category": "mon_ngon"
  },
  {
    "image": "/images/ga_doi_hap_la_chanh.jpg",
    "name": "Ga Doi Hap La Chanh",
    "category": "mon_ngon"
  },
  {
    "image": "/images/ga_kho_gung_sa_ot.jpg",
    "name": "Ga Kho Gung Sa Ot",
    "category": "mon_ngon"
  },
  {
    "image": "/images/ga_luoc_la_chanh.jpg",
    "name": "Ga Luoc La Chanh",
    "category": "mon_ngon"
  },
  {
    "image": "/images/ga_nuong_com_lam.jpg",
    "name": "Gà Nướng Cơm Lam Ống Nứa Tây Bắc",
    "category": "nuong_chien"
  },
  {
    "image": "/images/ga_ran_sot_cay.jpg",
    "name": "Gà Rán Giòn Cay Sốt Tương Tỏi Hàn Quốc",
    "category": "nuong_chien"
  },
  {
    "image": "/images/gia_xao_huyet_he.jpg",
    "name": "Gia Xao Huyet He",
    "category": "mon_ngon"
  },
  {
    "image": "/images/gio_heo_chien_gion.jpg",
    "name": "Giò Heo Chiên Giòn",
    "category": "mon_nhau"
  },
  {
    "image": "/images/goi_cuon.jpg",
    "name": "Gỏi Cuốn Tôm Thịt Tương Đậu Phộng",
    "category": "banhmi_cuon"
  },
  {
    "image": "/images/goi_cuon_tom_thit_chuan.jpg",
    "name": "Goi Cuon Tom Thit Chuan",
    "category": "mon_ngon"
  },
  {
    "image": "/images/goi_ngo_sen.jpg",
    "name": "Gỏi Ngó Sen Tôm Thịt Thanh Mát Chua Ngọt",
    "category": "salad_monnhe"
  },
  {
    "image": "/images/hau_nuong.jpg",
    "name": "Hàu Sữa Nướng Mỡ Hành & Phô Mai Kéo Sợi",
    "category": "nuong_chien"
  },
  {
    "image": "/images/hom-nay-an-gi-voi-thit-heo.jpg",
    "name": "Thịt Heo Kho & Xào Đậm Đà",
    "category": "mon_ngon"
  },
  {
    "image": "/images/hu_tieu_chay.jpg",
    "name": "Hủ Tiếu Chay Rau Củ Nấm Tuyết Thanh Ngọt",
    "category": "do_chay"
  },
  {
    "image": "/images/hu_tieu_go.jpg",
    "name": "Hủ Tiếu Gõ Giò Nạc Bình Dân",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/hu_tieu_muc.jpg",
    "name": "Hu Tieu Muc",
    "category": "mon_ngon"
  },
  {
    "image": "/images/hu_tieu_nam_vang.jpg",
    "name": "Hủ Tiếu Nam Vang Trộn Khô Thập Cẩm",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/hu_tieu_sa_te_nai.jpg",
    "name": "Hủ Tiếu Sa Tế Nai Người Hoa",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/kem_bo_da_lat.jpg",
    "name": "Kem Bơ Sáp Dừa Nạo Khô Sữa Đặc Đà Lạt",
    "category": "an_vat"
  },
  {
    "image": "/images/kim_chi_xoai_cat.jpg",
    "name": "Kim Chi Xoài Cát Giòn Chua Cay",
    "category": "mon_ngon"
  },
  {
    "image": "/images/kimchi_jjigae.jpg",
    "name": "Canh Kim Chi Thịt Heo Đậu Hũ",
    "category": "com_xoi"
  },
  {
    "image": "/images/lau_ca_keo.jpg",
    "name": "Lẩu Cá Kèo Lá Giang Chua Thanh Cay Ấm",
    "category": "lau_chao"
  },
  {
    "image": "/images/lau_ech_mang_cay.jpg",
    "name": "Lẩu Ếch Măng Cay Sa Tế Chua Cay Đậm Vị",
    "category": "lau_chao"
  },
  {
    "image": "/images/lau_ga_la_e.jpg",
    "name": "Lẩu Gà Lá É Đà Lạt Thơm Nồng Cay Ấm",
    "category": "lau_chao"
  },
  {
    "image": "/images/lau_ga_ot_hiem.jpg",
    "name": "Lẩu Gà Tiềm Ớt Hiểm Nấm Kỷ Tử Ngọt Thanh",
    "category": "lau_chao"
  },
  {
    "image": "/images/lau_mam_mien_tay.jpg",
    "name": "Lẩu Mắm Miền Tây Đậm Đà Cá Linh Rau Rừng",
    "category": "lau_chao"
  },
  {
    "image": "/images/lau_nam_chay.jpg",
    "name": "Lẩu Nấm Chay Thập Cẩm Thanh Khiết Ngọt Lành",
    "category": "do_chay"
  },
  {
    "image": "/images/lau_rieu_cua_bap_bo.jpg",
    "name": "Lẩu Riêu Cua Bắp Bò",
    "category": "lau_chao"
  },
  {
    "image": "/images/lau_thai_hai_san.jpg",
    "name": "Lẩu Thái Hải Sản Chua Cay Tomyum",
    "category": "lau_chao"
  },
  {
    "image": "/images/long_bo_xao_dua.jpg",
    "name": "Lòng Bò Giòn Xào Dưa Chua Cà Chua Tỏi Phi",
    "category": "mon_nhau"
  },
  {
    "image": "/images/long_nuong.jpg",
    "name": "Lòng Nướng Sa Tế Cay Giòn Rụm Thơm Nức Mũi",
    "category": "mon_nhau"
  },
  {
    "image": "/images/mam_com_gia_dinh.jpg",
    "name": "Mam Com Gia Dinh",
    "category": "mon_ngon"
  },
  {
    "image": "/images/mam_ot_xiem_buoi.jpg",
    "name": "Nước Chấm Ớt Xiểm Bưởi",
    "category": "mon_ngon"
  },
  {
    "image": "/images/mango_salad.jpg",
    "name": "Gỏi Xoài Tôm Thịt Chua Ngọt",
    "category": "salad_monnhe"
  },
  {
    "image": "/images/matcha_latte_kem_sua.jpg",
    "name": "Matcha Latte Đậu Đỏ Kem Sữa Mịn Màng",
    "category": "do_uong"
  },
  {
    "image": "/images/mi_cay_han_quoc.jpg",
    "name": "Mì Cay Hàn Quốc Hải Sản Cấp Độ",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/mi_hoanh_thanh.jpg",
    "name": "Hủ Tiếu Mì Hoành Thánh Xá Xíu",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/mi_quang.jpg",
    "name": "Mì Quảng Tôm Thịt Bánh Tráng Mè",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/mi_tron_top_mo.jpg",
    "name": "Mì Trộn Tóp Mỡ Trứng Lòng Đào",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/mi_xao_bo.jpg",
    "name": "Mì Xào Bò Rau Cải",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/mi_xao_gion.jpg",
    "name": "Mì Xào Giòn",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/mien_cua.jpg",
    "name": "Mien Cua",
    "category": "mon_ngon"
  },
  {
    "image": "/images/mien_ga.jpg",
    "name": "Miến Gà Ta Đùi Xé Nước Dùng Ngọt",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/mien_luon.jpg",
    "name": "Miến Lươn Nước Giòn Rụm Rau Răm",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/mien_xao_cua.jpg",
    "name": "Miến Xào Cua",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/mon-an-ngon-1791557143784.jpg",
    "name": "Món Ngon Gia Đình Chuẩn Vị",
    "category": "mon_ngon"
  },
  {
    "image": "/images/mon-ngon-bang-noi-chien-khong-dau.jpg",
    "name": "Món Nướng Nồi Chiên Không Dầu",
    "category": "mon_ngon"
  },
  {
    "image": "/images/muc_mot_nang_nuong.jpg",
    "name": "Mực Một Nắng Nướng Than Hoa Sa Tế Cay Xè",
    "category": "mon_nhau"
  },
  {
    "image": "/images/muc_nuong.jpg",
    "name": "Mực Trứng Nướng Muối Ớt Cay Nồng",
    "category": "nuong_chien"
  },
  {
    "image": "/images/muc_xao_can_tay.jpg",
    "name": "Muc Xao Can Tay",
    "category": "mon_ngon"
  },
  {
    "image": "/images/nam_dui_ga_xao_hung_que.jpg",
    "name": "Nam Dui Ga Xao Hung Que",
    "category": "mon_ngon"
  },
  {
    "image": "/images/nau-gi-hom-nay.jpg",
    "name": "Thực Đơn Cơm Nhà Hôm Nay",
    "category": "mon_ngon"
  },
  {
    "image": "/images/nem_lui.jpg",
    "name": "Nem Lụi Huế Nướng Than Cuốn Bánh Tráng",
    "category": "banhmi_cuon"
  },
  {
    "image": "/images/nem_nuong_nha_trang.jpg",
    "name": "Nem Nướng Nha Trang Cuốn Ram Giòn",
    "category": "banhmi_cuon"
  },
  {
    "image": "/images/nem_chua_ran.jpg",
    "name": "Nem Chua Rán Giòn Rụm Phố Cổ Hà Nội",
    "category": "mon_nhau"
  },
  {
    "image": "/images/nom_bo_kho.jpg",
    "name": "Nộm Bò Khô Đu Đủ Bờ Hồ Phố Cổ",
    "category": "salad_monnhe"
  },
  {
    "image": "/images/nui_gio_heo.jpg",
    "name": "Nui Giò Heo Hầm Xương",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/nui_xao_bo.jpg",
    "name": "Nui Xào Bò Bơ Tỏi Sài Gòn",
    "category": "com_xoi"
  },
  {
    "image": "/images/nuoc_dua_tac.jpg",
    "name": "Nước Dừa Tươi Tắc Đường Phèn Mát Lạnh",
    "category": "do_uong"
  },
  {
    "image": "/images/nuoc_ep_dua_hau.jpg",
    "name": "Nước Ép Dưa Hấu Đỏ Lá Bạc Hà Tươi",
    "category": "do_uong"
  },
  {
    "image": "/images/nuoc_mia_sau_rieng.jpg",
    "name": "Nước Mía Sầu Riêng Béo Thơm Ngọt Lịm",
    "category": "do_uong"
  },
  {
    "image": "/images/nuoc_rau_muong_dam_sau.jpg",
    "name": "Canh Nước Rau Muống Dầm Sấu",
    "category": "mon_ngon"
  },
  {
    "image": "/images/oc_huong_bo_toi.jpg",
    "name": "Ốc Hương Cồ Xào Bơ Tỏi Bánh Mì Nóng",
    "category": "mon_nhau"
  },
  {
    "image": "/images/oc_huong_trung_muoi.jpg",
    "name": "Ốc Hương Xào Bơ Tỏi Sốt Trứng Muối Bánh Mì",
    "category": "nuong_chien"
  },
  {
    "image": "/images/ot_chuong_nhan_xuong.jpg",
    "name": "Ớt Chuông Nhồi Thịt Sốt Cà",
    "category": "mon_ngon"
  },
  {
    "image": "/images/pha_lau_bo.jpg",
    "name": "Phá Lấu Bò Nước Cốt Dừa Sài Gòn Kèm Bánh Mì",
    "category": "mon_nhau"
  },
  {
    "image": "/images/pho_bo.jpg",
    "name": "Phở Bò Tái Nạm Gàu Giòn",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/pho_bo_tai_lan.jpg",
    "name": "Phở Bò Tái Lăn Hà Nội",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/pho_chay_nam.jpg",
    "name": "Phở Chay Nấm Đùi Gà Rau Thơm Nước Dùng Thanh",
    "category": "do_chay"
  },
  {
    "image": "/images/pho_cuon_ha_noi.jpg",
    "name": "Phở Cuốn Thịt Bò Rau Thơm Ngũ Xã",
    "category": "banhmi_cuon"
  },
  {
    "image": "/images/pho_ga_ta.jpg",
    "name": "Phở Gà Ta Lá Chanh Xé Đùi",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/pho_sot_vang.jpg",
    "name": "Phở Bò Sốt Vang Gia Truyền",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/ram_bap_quang_ngai.jpg",
    "name": "Ram Bắp Quảng Ngãi Giòn Rụm Cuốn Rau Sống",
    "category": "banhmi_cuon"
  },
  {
    "image": "/images/rau_cai_luoc_trung_long_dao.jpg",
    "name": "Rau Cai Luoc Trung Long Dao",
    "category": "mon_ngon"
  },
  {
    "image": "/images/rau_ma_dau_xanh.jpg",
    "name": "Rau Má Đậu Xanh Sữa Dừa Thanh Mát Giải Độc",
    "category": "do_uong"
  },
  {
    "image": "/images/rau_muong_luoc_tuong_ban.jpg",
    "name": "Rau Muong Luoc Tuong Ban",
    "category": "mon_ngon"
  },
  {
    "image": "/images/rau_muong_xao_toi.jpg",
    "name": "Rau Muong Xao Toi",
    "category": "mon_ngon"
  },
  {
    "image": "/images/salad_ca_ngu.jpg",
    "name": "Salad Ca Ngu",
    "category": "mon_ngon"
  },
  {
    "image": "/images/salad_ca_ngu_ngo_ngot.jpg",
    "name": "Salad Cá Ngừ Ngô Ngọt Sốt Mayonnaise",
    "category": "salad_monnhe"
  },
  {
    "image": "/images/salad_rau_mam_bo.jpg",
    "name": "Salad Rau Mầm Thịt Bò Xào Dầu Giấm",
    "category": "salad_monnhe"
  },
  {
    "image": "/images/sinh_to_bo.jpg",
    "name": "Sinh Tố Bơ Sáp Đắk Lắk Sữa Đặc Cốt Dừa",
    "category": "do_uong"
  },
  {
    "image": "/images/squid_noodle.jpg",
    "name": "Hủ Tiếu Mực Tươi Giòn Ngọt",
    "category": "bun_pho_mi"
  },
  {
    "image": "/images/su_hao_ca_rot_muc.jpg",
    "name": "Mực Xào Su Hào Cà Rốt",
    "category": "mon_ngon"
  },
  {
    "image": "/images/su_su_xao_toi.jpg",
    "name": "Su Su Xao Toi",
    "category": "mon_ngon"
  },
  {
    "image": "/images/sun_ga_rang_muoi.jpg",
    "name": "Sụn Gà Chiên Giòn Rang Muối Ớt Hồng Kông",
    "category": "mon_nhau"
  },
  {
    "image": "/images/suon-heo-lam-mon-gi-ngon.jpg",
    "name": "Sườn Heo Rim Mặn Ngọt",
    "category": "mon_ngon"
  },
  {
    "image": "/images/suon_heo_rim_man_ngot.jpg",
    "name": "Suon Heo Rim Man Ngot",
    "category": "mon_ngon"
  },
  {
    "image": "/images/suon_xao_chua_ngot.jpg",
    "name": "Suon Xao Chua Ngot",
    "category": "mon_ngon"
  },
  {
    "image": "/images/tai_heo_sot_thai.jpg",
    "name": "Tai Heo Sốt Thái Cóc Non Xoài Xanh Chua Cay",
    "category": "mon_nhau"
  },
  {
    "image": "/images/tau_hu_tran_chau.jpg",
    "name": "Tàu Hũ Trân Châu Nước Cốt Dừa Đường Nâu",
    "category": "an_vat"
  },
  {
    "image": "/images/teriyaki_chicken.jpg",
    "name": "Gà Áp Chảo Sốt Teriyaki",
    "category": "com_xoi"
  },
  {
    "image": "/images/thit-ba-chi-lam-mon-gi-ngon.jpg",
    "name": "Thịt Ba Chỉ Rút Sườn Luộc",
    "category": "mon_ngon"
  },
  {
    "image": "/images/thit-bam-lam-mon-gi-ngon.jpg",
    "name": "Thịt Băm Xào Cà Chua",
    "category": "mon_ngon"
  },
  {
    "image": "/images/thit-bo-lam-mon-gi-ngon.jpg",
    "name": "Bò Xào Rau Củ Thơm Ngon",
    "category": "mon_ngon"
  },
  {
    "image": "/images/thit-ga-nau-mon-gi-ngon.jpg",
    "name": "Gà Kho Gừng Cay Nồng",
    "category": "mon_ngon"
  },
  {
    "image": "/images/thit-heo-lam-mon-gi-ngon.jpg",
    "name": "Thịt Heo Nướng Riềng Mẻ",
    "category": "mon_ngon"
  },
  {
    "image": "/images/thit-heo-luoc-cuon-banh-trang.jpg",
    "name": "Thịt Heo Luộc Cuốn Bánh Tráng",
    "category": "mon_ngon"
  },
  {
    "image": "/images/thit-heo-xao-sa-ot.jpg",
    "name": "Thịt Heo Xào Sả Ớt Giòn Cay",
    "category": "mon_ngon"
  },
  {
    "image": "/images/thit-nac-heo-lam-mon-gi-ngon.jpg",
    "name": "Thịt Nạc Heo Rim Mắm Tỏi",
    "category": "mon_ngon"
  },
  {
    "image": "/images/thit_ba_chi_luoc.jpg",
    "name": "Thit Ba Chi Luoc",
    "category": "mon_ngon"
  },
  {
    "image": "/images/thit_ba_chi_nuong_noi_chien.jpg",
    "name": "Thit Ba Chi Nuong Noi Chien",
    "category": "mon_ngon"
  },
  {
    "image": "/images/thit_bam_sot_ca_chua.jpg",
    "name": "Thit Bam Sot Ca Chua",
    "category": "mon_ngon"
  },
  {
    "image": "/images/thit_heo_xao_sa_ot.jpg",
    "name": "Thit Heo Xao Sa Ot",
    "category": "mon_ngon"
  },
  {
    "image": "/images/thit_kho_tau.jpg",
    "name": "Thit Kho Tau",
    "category": "mon_ngon"
  },
  {
    "image": "/images/thit_luoc_ca_phao.jpg",
    "name": "Thit Luoc Ca Phao",
    "category": "mon_ngon"
  },
  {
    "image": "/images/thit_luoc_cuon_banh_trang.jpg",
    "name": "Thit Luoc Cuon Banh Trang",
    "category": "mon_ngon"
  },
  {
    "image": "/images/tom_dong_rim_ba_chi.jpg",
    "name": "Tom Dong Rim Ba Chi",
    "category": "mon_ngon"
  },
  {
    "image": "/images/tra_chanh_gia_tay.jpg",
    "name": "Trà Chanh Giã Tay Quảng Đông Tinh Dầu Thơm",
    "category": "do_uong"
  },
  {
    "image": "/images/tra_dao_cam_sa.jpg",
    "name": "Trà Đào Cam Sả Tươi Mát Thanh Lọc",
    "category": "do_uong"
  },
  {
    "image": "/images/tra_dau_tam_tuyet.jpg",
    "name": "Trà Dâu Tằm Tuyết Thảo Mộc Đá Tuyết",
    "category": "do_uong"
  },
  {
    "image": "/images/tra_mang_cau_xiem.jpg",
    "name": "Trà Mãng Cầu Xiêm Tươi Tép Chua Ngọt",
    "category": "do_uong"
  },
  {
    "image": "/images/tra_o_long_sua_nuong.jpg",
    "name": "Trà Ô Long Sữa Nướng Trân Châu Hoàng Kim",
    "category": "do_uong"
  },
  {
    "image": "/images/tra_sen_vang.jpg",
    "name": "Trà Sen Vàng Hạt Sen Bùi Béo Macchiato",
    "category": "do_uong"
  },
  {
    "image": "/images/tra_sua_tran_chau_duong_den.jpg",
    "name": "Trà Sữa Trân Châu Đường Đen Hoàng Gia",
    "category": "do_uong"
  },
  {
    "image": "/images/trung-lam-mon-gi-ngon.jpg",
    "name": "Trứng Cuộn Vân Mây",
    "category": "mon_ngon"
  },
  {
    "image": "/images/trung_cuon_van_may.jpg",
    "name": "Trung Cuon Van May",
    "category": "mon_ngon"
  },
  {
    "image": "/images/trung_cut_lon_xao_me.jpg",
    "name": "Trứng Cút Lộn Xào Me Chua Ngọt Rắc Đậu Phộng",
    "category": "an_vat"
  },
  {
    "image": "/images/vit_nau_chao.jpg",
    "name": "Vịt Nấu Chao Cần Thơ Béo Bùi Khoai Môn",
    "category": "lau_chao"
  },
  {
    "image": "/images/xoai_non_lac_muoi_tom.jpg",
    "name": "Xoài Non Lắc Muối Tôm Tây Ninh Giòn Rụm",
    "category": "an_vat"
  },
  {
    "image": "/images/xoi_chien.jpg",
    "name": "Xôi Chiên",
    "category": "com_xoi"
  },
  {
    "image": "/images/xoi_ga.jpg",
    "name": "Xôi Gà Xé Mỡ Hành Nước Cốt Gà",
    "category": "com_xoi"
  },
  {
    "image": "/images/xoi_pate_lap_xuong.jpg",
    "name": "Xôi Pate Lạp Xưởng Trứng Cút",
    "category": "com_xoi"
  },
  {
    "image": "/images/xoi_xeo_ha_noi.jpg",
    "name": "Xôi Xéo Hà Nội Ruốc Hành Phi",
    "category": "com_xoi"
  }
];

/**
 * Find the most accurate, matching authentic image for any Vietnamese dish name
 */
export function getDishImageByName(name: string = "", category: string = ""): string {
  if (!name) return "/images/mam_com_gia_dinh.jpg";

  const norm = removeVietnameseAccents(name);
  const normCat = removeVietnameseAccents(category);

  // Exact or high priority keyword matches
  if (norm.includes("banh mi chao") || norm.includes("op la")) return "/images/banh_mi_chao.jpg";
  if (norm.includes("banh mi que")) return "/images/banh_mi_que.jpg";
  if (norm.includes("banh mi pate") || norm.includes("banh mi")) return "/images/banh_mi_pate.jpg";
  if (norm.includes("xoi xeo")) return "/images/xoi_xeo_ha_noi.jpg";
  if (norm.includes("xoi ga")) return "/images/xoi_ga.jpg";
  if (norm.includes("xoi")) return "/images/xoi_pate_lap_xuong.jpg";
  if (norm.includes("chao suon")) return "/images/chao_suon_sun.jpg";
  if (norm.includes("chao ech")) return "/images/chao_ech.jpg";
  if (norm.includes("chao long")) return "/images/chao_long.jpg";
  if (norm.includes("chao vit")) return "/images/chao_vit.jpg";
  if (norm.includes("chao")) return "/images/chao_suon_sun.jpg";
  if (norm.includes("bun rieu chay")) return "/images/bun_rieu_chay.jpg";
  if (norm.includes("bun rieu")) return "/images/bun_rieu_cua.jpg";
  if (norm.includes("goi cuon")) return "/images/goi_cuon_tom_thit_chuan.jpg";
  if (norm.includes("banh xeo chay")) return "/images/banh_xeo_chay.jpg";
  if (norm.includes("banh xeo")) return "/images/banh_xeo.jpg";
  if (norm.includes("banh khot")) return "/images/banh_khot.jpg";
  if (norm.includes("banh trang nuong")) return "/images/banh_trang_nuong_da_lat.jpg";
  if (norm.includes("banh trang tron")) return "/images/banh_trang_tron.jpg";
  if (norm.includes("bot chien")) return "/images/bot_chien.jpg";
  if (norm.includes("banh cuon")) return "/images/banh_cuon.jpg";
  if (norm.includes("che buoi")) return "/images/che_buoi.jpg";
  if (norm.includes("che khuc bach")) return "/images/che_khuc_bach.jpg";
  if (norm.includes("bingsu")) return "/images/bingsu_dau_tay.jpg";
  if (norm.includes("kem bo")) return "/images/kem_bo_da_lat.jpg";
  if (norm.includes("com tam")) return "/images/com_tam_suon_bi_cha.jpg";
  if (norm.includes("com ga hoi an")) return "/images/com_ga_hoi_an.jpg";
  if (norm.includes("com ga xoi mo")) return "/images/com_ga_xoi_mo.jpg";
  if (norm.includes("com ga")) return "/images/com_ga_hoi_an.jpg";
  if (norm.includes("com bo") || norm.includes("bo luc lac")) return "/images/com_bo_luc_lac.jpg";
  if (norm.includes("com nieu")) return "/images/com_nieu_bo_tieu_den.jpg";
  if (norm.includes("com chien hai san")) return "/images/com_chien_hai_san.jpg";
  if (norm.includes("com chien duong chau")) return "/images/com_chien_duong_chau.jpg";
  if (norm.includes("com thit kho tau") || norm.includes("thit kho tau")) return "/images/com_thit_kho_tau.jpg";
  if (norm.includes("com suon")) return "/images/com_suon_cay.jpg";
  if (norm.includes("com chien") || norm.includes("com rang")) return "/images/com_rang_dua_bo.jpg";
  if (norm.includes("bun cha ha noi") || norm.includes("bun cha")) return "/images/bun_cha_ha_noi.jpg";
  if (norm.includes("pho bo tai lan") || norm.includes("pho bo")) return "/images/pho_bo_tai_lan.jpg";
  if (norm.includes("pho ga")) return "/images/pho_ga_ta.jpg";
  if (norm.includes("pho cuon")) return "/images/pho_cuon_ha_noi.jpg";
  if (norm.includes("pho chay")) return "/images/pho_chay_nam.jpg";
  if (norm.includes("pho")) return "/images/pho_bo_tai_lan.jpg";
  if (norm.includes("bun bo hue")) return "/images/bun_bo_hue.jpg";
  if (norm.includes("hu tieu nam vang")) return "/images/hu_tieu_nam_vang.jpg";
  if (norm.includes("hu tieu muc")) return "/images/hu_tieu_muc.jpg";
  if (norm.includes("hu tieu go") || norm.includes("hu tieu")) return "/images/hu_tieu_go.jpg";
  if (norm.includes("bun mam")) return "/images/bun_mam.jpg";
  if (norm.includes("bun dau")) return "/images/bun_dau_mam_tom.jpg";
  if (norm.includes("bun thit nuong")) return "/images/bun_thit_nuong.jpg";
  if (norm.includes("bun ca")) return "/images/bun_ca.jpg";
  if (norm.includes("bun oc")) return "/images/bun_oc.jpg";
  if (norm.includes("bun thai")) return "/images/bun_thai.jpg";
  if (norm.includes("bun thang")) return "/images/bun_thang.jpg";
  if (norm.includes("bun suon doc mung") || norm.includes("doc mung")) return "/images/bun_suon_doc_mung.jpg";
  if (norm.includes("bun moc")) return "/images/bun_moc_ha_noi.jpg";
  if (norm.includes("mi quang")) return "/images/mi_quang.jpg";
  if (norm.includes("mi cay")) return "/images/mi_cay_han_quoc.jpg";
  if (norm.includes("mi xao bo") || norm.includes("mi xao")) return "/images/mi_xao_bo.jpg";
  if (norm.includes("banh canh ca loc")) return "/images/banh_canh_ca_loc.jpg";
  if (norm.includes("banh canh ghe")) return "/images/banh_canh_ghe.jpg";
  if (norm.includes("banh canh cua") || norm.includes("banh canh")) return "/images/banh_canh_cua.jpg";
  if (norm.includes("cha ca la vong") || norm.includes("cha ca la vong")) return "/images/cha_ca_la_vong.jpg";
  if (norm.includes("bo ne")) return "/images/bo_ne.jpg";
  if (norm.includes("bo nuong tang") || norm.includes("bo to nuong")) return "/images/bo_nuong_tang_trung_muoi.jpg";
  if (norm.includes("bo nhung dam") || norm.includes("lau bo")) return "/images/bo_nhung_dam.jpg";
  if (norm.includes("lau rieu cua")) return "/images/lau_rieu_cua_bap_bo.jpg";
  if (norm.includes("lau thai") || norm.includes("lau hai san")) return "/images/lau_thai_hai_san.jpg";
  if (norm.includes("lau ga la e") || norm.includes("lau ga")) return "/images/lau_ga_la_e.jpg";
  if (norm.includes("lau ech")) return "/images/lau_ech_mang_cay.jpg";
  if (norm.includes("lau nam chay") || norm.includes("lau nam")) return "/images/lau_nam_chay.jpg";
  if (norm.includes("lau mam")) return "/images/lau_mam_mien_tay.jpg";
  if (norm.includes("de tai chanh") || norm.includes("de")) return "/images/de_tai_chanh.jpg";
  if (norm.includes("oc huong")) return "/images/oc_huong_bo_toi.jpg";
  if (norm.includes("bach tuoc")) return "/images/bach_tuoc_nuong.jpg";
  if (norm.includes("muc nuong")) return "/images/muc_nuong.jpg";
  if (norm.includes("hau nuong")) return "/images/hau_nuong.jpg";
  if (norm.includes("chan ga")) return "/images/chan_ga_sa_tac.jpg";
  if (norm.includes("nem chua ran") || norm.includes("nem chua")) return "/images/nem_chua_ran.jpg";
  if (norm.includes("nem nuong nha trang") || norm.includes("nem nuong")) return "/images/nem_nuong_nha_trang.jpg";
  if (norm.includes("nem lui")) return "/images/nem_lui.jpg";
  if (norm.includes("cut lon xao me") || norm.includes("trung cut lon")) return "/images/trung_cut_lon_xao_me.jpg";
  if (norm.includes("suon xao chua ngot")) return "/images/suon_xao_chua_ngot.jpg";
  if (norm.includes("canh ga ham hat sen")) return "/images/canh_ga_ham_hat_sen.jpg";
  if (norm.includes("canh chua ca loc") || norm.includes("canh chua")) return "/images/canh_chua_ca_loc.jpg";
  if (norm.includes("canh cua")) return "/images/canh_cua_rau_day.jpg";
  if (norm.includes("canh kho qua")) return "/images/canh_kho_qua_don_thit.jpg";
  if (norm.includes("canh mang")) return "/images/canh_mang_tuoi_suon.jpg";
  if (norm.includes("canh rau ngot")) return "/images/canh_rau_ngot_thit_bam.jpg";
  if (norm.includes("tra sua") || norm.includes("tran chau")) return "/images/tra_sua_tran_chau_duong_den.jpg";
  if (norm.includes("tra dao")) return "/images/tra_dao_cam_sa.jpg";
  if (norm.includes("tra chanh")) return "/images/tra_chanh_gia_tay.jpg";
  if (norm.includes("tra sen")) return "/images/tra_sen_vang.jpg";
  if (norm.includes("ca phe")) return "/images/ca_phe_muoi.jpg";
  if (norm.includes("rau ma")) return "/images/rau_ma_dau_xanh.jpg";
  if (norm.includes("nuoc mia")) return "/images/nuoc_mia_sau_rieng.jpg";
  if (norm.includes("salad") || norm.includes("healthy")) return "/images/salad_ca_ngu.jpg";
  if (norm.includes("mam com") || norm.includes("com gia dinh")) return "/images/mam_com_gia_dinh.jpg";

  // Smart heuristic match across catalog
  let bestImg = "/images/mam_com_gia_dinh.jpg";
  let highestScore = 0;

  for (const item of ALL_AUTHENTIC_DISH_IMAGES) {
    const itemNameNorm = removeVietnameseAccents(item.name);
    const itemImgNorm = removeVietnameseAccents(item.image.replace("/images/", "").replace(/\.jpg$/, "").replace(/[_-]/g, " "));

    let score = 0;
    const tokens = norm.split(/\s+/);
    for (const t of tokens) {
      if (t.length >= 2 && (itemNameNorm.includes(t) || itemImgNorm.includes(t))) {
        score += t.length;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestImg = item.image;
    }
  }

  return bestImg;
}

/**
 * Get 8-12 alternative matching images for a dish so the user can easily swap/change illustration
 */
export function getAlternativeImagesForDish(
  name: string = "",
  category: string = "",
  currentImage?: string
): DishImageItem[] {
  const norm = removeVietnameseAccents(name);
  const normCat = removeVietnameseAccents(category);

  // Score all items based on relevance to dish name & category
  const scored = ALL_AUTHENTIC_DISH_IMAGES
    .filter((item) => !currentImage || item.image !== currentImage)
    .map((item) => {
      const itemNameNorm = removeVietnameseAccents(item.name);
      const itemCatNorm = removeVietnameseAccents(item.category);
      const itemImgNorm = removeVietnameseAccents(item.image.replace("/images/", "").replace(/\.jpg$/, "").replace(/[_-]/g, " "));

      let score = 0;
      // Match keywords
      const tokens = norm.split(/\s+/);
      for (const t of tokens) {
        if (t.length >= 2) {
          if (itemNameNorm.includes(t)) score += t.length * 3;
          if (itemImgNorm.includes(t)) score += t.length * 2;
        }
      }

      // Category boost
      if (normCat && itemCatNorm && (itemCatNorm.includes(normCat) || normCat.includes(itemCatNorm))) {
        score += 8;
      }

      return { item, score };
    });

  scored.sort((a, b) => b.score - a.score);

  // Take top relevant ones + a few general popular dishes
  const top = scored.filter((s) => s.score > 0).slice(0, 12).map((s) => s.item);

  if (top.length < 8) {
    // Fill up with popular items
    const extras = ALL_AUTHENTIC_DISH_IMAGES.slice(0, 16).filter((item) => !top.some((t) => t.image === item.image));
    top.push(...extras.slice(0, 8 - top.length));
  }

  return top;
}

/**
 * Filter images by search query
 */
export function searchDishImages(query: string = ""): DishImageItem[] {
  if (!query || !query.trim()) {
    return ALL_AUTHENTIC_DISH_IMAGES.slice(0, 36);
  }

  const normQuery = removeVietnameseAccents(query);
  const words = normQuery.split(/\s+/).filter(Boolean);

  return ALL_AUTHENTIC_DISH_IMAGES.filter((item) => {
    const nameNorm = removeVietnameseAccents(item.name);
    const imgNorm = removeVietnameseAccents(item.image.replace("/images/", "").replace(/\.jpg$/, "").replace(/[_-]/g, " "));
    return words.every((w) => nameNorm.includes(w) || imgNorm.includes(w));
  }).slice(0, 48);
}

const CUSTOM_IMAGES_STORAGE_KEY = 'user_custom_dish_images';

export function getCustomDishImage(dishKey: string): string | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CUSTOM_IMAGES_STORAGE_KEY);
    if (!raw) return null;
    const map = JSON.parse(raw);
    return map[dishKey] || null;
  } catch {
    return null;
  }
}

export function setCustomDishImage(dishKey: string, imageUrl: string): void {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(CUSTOM_IMAGES_STORAGE_KEY);
    const map = raw ? JSON.parse(raw) : {};
    map[dishKey] = imageUrl;
    localStorage.setItem(CUSTOM_IMAGES_STORAGE_KEY, JSON.stringify(map));
    window.dispatchEvent(new CustomEvent('dish-image-updated', { detail: { dishKey, imageUrl } }));
  } catch (e) {
    console.error('Failed to set custom dish image:', e);
  }
}

export function resetCustomDishImage(dishKey: string): void {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(CUSTOM_IMAGES_STORAGE_KEY);
    if (!raw) return;
    const map = JSON.parse(raw);
    delete map[dishKey];
    localStorage.setItem(CUSTOM_IMAGES_STORAGE_KEY, JSON.stringify(map));
    window.dispatchEvent(new CustomEvent('dish-image-updated', { detail: { dishKey, imageUrl: null } }));
  } catch (e) {
    console.error('Failed to reset custom dish image:', e);
  }
}

/**
 * Resolves the effective dish image, taking custom override into account
 */
export function resolveDishImage(dishId?: string, dishName?: string, defaultImage?: string): string {
  if (dishId) {
    const customById = getCustomDishImage(dishId);
    if (customById) return customById;
  }
  if (dishName) {
    const customByName = getCustomDishImage(dishName);
    if (customByName) return customByName;
  }
  return defaultImage || '/images/mam_com_gia_dinh.jpg';
}

/**
 * React hook to listen for real-time dish image updates across components
 */
export function useCustomDishImages(): Record<string, string> {
  const [images, setImages] = useState<Record<string, string>>(() => {
    if (typeof window === 'undefined') return {};
    try {
      const raw = localStorage.getItem(CUSTOM_IMAGES_STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    const handleUpdate = () => {
      try {
        const raw = localStorage.getItem(CUSTOM_IMAGES_STORAGE_KEY);
        setImages(raw ? JSON.parse(raw) : {});
      } catch {
        // ignore
      }
    };
    window.addEventListener('dish-image-updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('dish-image-updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  return images;
}
