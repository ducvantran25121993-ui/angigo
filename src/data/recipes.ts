import { Dish, DishRecipe } from '../types';

export const CURATED_RECIPES: Record<string, DishRecipe> = {
  'banh-mi-chao-xiu-mai': {
    dishId: 'banh-mi-chao-xiu-mai',
    dishName: 'Bánh Mì Chảo Xíu Mại Trứng Lòng Đào',
    seoTitle: 'Cách Làm Bánh Mì Chảo Giòn Rụm, Đậm Đà Chuẩn Vị Đường Phố',
    prepTime: '20 phút',
    cookTime: '20 phút',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Thành phần nhân chảo chính (Topping)',
        items: [
          '300g thịt nạc dăm heo xay nhuyễn (tỷ lệ 8 nạc 2 mỡ mềm mọng)',
          '100g củ đậu (củ sắn) băm nhỏ, vắt ráo kiệt nước',
          '4 quả trứng gà tươi (để ốp la lòng đào)',
          '150g - 200g pate gan heo loại ngon (cắt lát dày 1 - 1.5cm)',
          '4 cây xúc xích tiệt trùng hoặc xúc xích hun khói (khía vảy rồng)',
          '150g thịt thăn bò mềm thái lát mỏng (tùy chọn làm bò né)',
          '4 miếng phô mai con bò cười (hoặc phô mai mozzarella kéo sợi)',
          '4 - 6 ổ bánh mì vỏ giòn rụm nướng nóng hổi',
        ],
      },
      {
        category: 'Nước sốt cà chua tiêu đen sánh quyện',
        items: [
          '3 quả cà chua chín đỏ mọng (bỏ hạt, băm nhuyễn mịn)',
          '2 thìa canh tương cà (ketchup) tạo màu đỏ cam óng ả',
          '1.5 thìa canh dầu hào Maggi',
          '1 thìa canh nước tương đậm đặc',
          '1 thìa canh đường cát',
          '1 thìa cà phê tiêu đen hoặc tiêu sọ xay vỡ hạt',
          '1 thìa canh bơ lạt (hoặc bơ thực vật Tường An) giúp sốt bóng thơm',
          '1 củ hành tây nhỏ thái múi cau mỏng',
          '3 tép tỏi và 2 củ hành tím băm nhuyễn',
          '150ml nước dùng xương hoặc nước sôi',
        ],
      },
      {
        category: 'Gia vị quết xíu mại & ướp thịt bò',
        items: [
          '1 thìa canh hành tím phi thơm',
          '1 thìa cà phê hạt nêm, 1 thìa cà phê đường, 1/2 thìa cà phê tiêu xay',
          '1 thìa cà phê dầu mè thơm',
          '1 thìa canh bột năng (giúp thịt kết dính dẻo dai)',
        ],
      },
      {
        category: 'Rau tươi & Đồ chua ăn kèm chống ngấy',
        items: [
          '2 quả dưa leo giòn mát thái lát mỏng',
          '100g đồ chua cà rốt và củ cải ngâm chua ngọt',
          'Rau ngò rí (rau mùi), ớt sừng cắt khoanh',
          'Tương ớt Chin-su và nước tương tỏi ớt chấm kèm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Quết viên xíu mại mềm mọng và hấp chín sơ',
        time: '15 phút',
        heat: 'Lửa vừa (Hấp cách thủy)',
        goal: 'Viên xíu mại tròn đều, dẻo dai mọng nước, không bị khô bở nát',
        actionPoints: [
          'Củ đậu băm nhỏ cho vào khăn vải mỏng vắt thật ráo kiệt nước (đây là bí quyết then chốt giúp viên xíu mại ngọt thanh sần sật mà không bị nhão).',
          'Cho thịt heo xay, củ đậu, hành tím phi, 1 thìa cà phê hạt nêm, 1 thìa đường, 1/2 thìa tiêu xay, 1 thìa dầu mè và 1 thìa canh bột năng vào tô lớn.',
          'Dùng tay hoặc thìa quết mạnh đều theo một chiều trong 3 - 5 phút cho đến khi khối thịt dẻo quánh, có độ kết dính cao.',
          'Thoa chút dầu ăn lên lòng bàn tay, vo thịt thành từng viên tròn cỡ quả bóng bàn (khoảng 35 - 40g/viên).',
          'Xếp xíu mại vào đĩa sâu lòng, cho vào xửng hấp cách thủy khoảng 10 - 12 phút cho xíu mại vừa chín tới. Giữ lại toàn bộ phần nước ngọt tiết ra từ xíu mại để nấu nước sốt.',
        ],
        description:
          'Trộn thịt nạc dăm xay với củ đậu đã vắt kiệt nước và gia vị. Quết dẻo tay rồi vo viên tròn, hấp cách thủy 10 phút. Giữ lại nước hấp ngọt thịt để hòa vào sốt cà chua.',
        tip: 'Bắt buộc phải vắt kiệt nước củ đậu trước khi trộn, nếu không nước trong củ đậu sẽ làm xíu mại bị bở rời và mất độ kết dính khi nấu sốt.',
      },
      {
        step: 2,
        title: 'Nấu nước sốt cà chua sánh óng, béo ngậy vị bơ',
        time: '12 phút',
        heat: 'Lửa vừa đến nhỏ',
        goal: 'Nước sốt sánh mượt, màu đỏ cam bắt mắt, vị chua ngọt hài hòa dậy mùi thơm nức của bơ và tiêu sọ',
        actionPoints: [
          'Đặt chảo sâu lòng lên bếp, cho 1 thìa canh dầu ăn đun nóng rồi phi thơm hành tím và tỏi băm nhuyễn.',
          'Trút toàn bộ cà chua băm nhuyễn vào xào với 1/2 thìa cà phê muối trên lửa vừa, dầm đều tay khoảng 3 - 4 phút đến khi cà chua chín mềm nhuyễn mịn.',
          'Đổ phần nước hấp xíu mại và 150ml nước sôi vào chảo.',
          'Nêm gia vị gồm: 2 thìa canh tương cà, 1.5 thìa canh dầu hào, 1 thìa canh nước tương, 1 thìa canh đường và 1 thìa cà phê tiêu xay. Khuấy đều và đun sôi liu riu 5 phút cho sốt sánh lại.',
          'Thả nhẹ các viên xíu mại đã hấp vào chảo sốt, hạ lửa nhỏ om thêm 5 phút cho từng viên thịt ngấm đẫm hương vị chua ngọt mặn mà.',
          'Trước khi tắt bếp, thả 1 thìa canh bơ lạt vào khuấy tan nhẹ để tạo độ bóng mượt và mùi thơm béo ngậy đặc trưng.',
        ],
        description:
          'Phi thơm hành tỏi, xào nhuyễn cà chua rồi thêm tương cà, dầu hào, nước hấp xíu mại và gia vị đun sánh mịn. Thả viên xíu mại vào om lửa nhỏ cho ngấm sâu, cuối cùng cho bơ lạt vào khuấy bóng mượt.',
        tip: 'Thêm tương cà (ketchup) cùng cà chua tươi giúp nước sốt có màu đỏ cam óng ánh tuyệt đẹp và vị chua dịu cân bằng mà không cần dùng phẩm màu.',
      },
      {
        step: 3,
        title: 'Làm nóng chảo gang và áp chảo các nguyên liệu xèo xèo',
        time: '5 phút / chảo',
        heat: 'Lửa lớn lúc đầu, sau hạ lửa vừa',
        goal: 'Chảo gang bốc khói xèo xèo nức mũi, viền trứng giòn lách tách, lòng đỏ sóng sánh, pate thơm xém cạnh',
        actionPoints: [
          'Đặt từng chiếc chảo gang cá nhân lên bếp lửa lớn khoảng 2 - 3 phút cho chảo gang tích đủ nhiệt thật nóng (chảo gang giữ nhiệt lâu là linh hồn của món ăn).',
          'Quét một lớp mỏng bơ lạt vào đáy chảo cho bơ tan chảy sủi bọt thơm lừng.',
          'Đặt lát pate dày và cây xúc xích đã khía vảy rồng vào áp chảo nhanh 1 phút cho xém cạnh vàng giòn.',
          'Nếu dùng thêm thịt bò, cho vài lát thịt bò ướp tỏi vào đảo nhanh 30 giây vừa chín tái mềm ngọt.',
          'Gắp 1 - 2 viên xíu mại đặt vào giữa, múc 2 - 3 muỗng canh nước sốt cà chua nóng rẫy rưới đẫm xung quanh cho sốt sôi sùng sục xèo xèo.',
          'Đập trực tiếp 1 quả trứng gà tươi vào góc chảo còn trống. Giữ lửa vừa khoảng 1 phút để lòng trắng chín giòn viền đáy nhưng lòng đỏ vẫn còn lòng đào béo ngậy.',
          'Đặt 1 viên phô mai con bò cười hoặc rắc chút phô mai sợi lên cạnh xíu mại cho phô mai chảy mềm quyến rũ.',
        ],
        description:
          'Nung chảo gang thật nóng, láng bơ thơm rồi cho pate, xúc xích và thịt bò áp chảo xém cạnh. Đặt xíu mại, rưới đẫm sốt cà chua sôi sùng sục rồi đập quả trứng lòng đào vào giữa chảo.',
        tip: 'Chảo gang phải thật nóng trước khi cho bơ và trứng vào, nhiệt độ cao sẽ làm viền lòng trắng phồng giòn lách tách mà lòng đỏ bên trong vẫn dẻo quánh hoàn hảo.',
      },
      {
        step: 4,
        title: 'Rắc tiêu hành và thưởng thức cùng bánh mì nóng giòn',
        time: '3 phút',
        heat: 'Thưởng thức nóng hổi tại bàn',
        goal: 'Chảo bánh mì sôi xèo xèo đặt trên đế gỗ, bánh mì giòn tan quết đẫm sốt béo ngậy bùng nổ hương vị',
        actionPoints: [
          'Dùng kẹp nhấc cẩn thận chảo gang xuống, đặt ngay lên đĩa hoặc khay đế lót gỗ chống nóng.',
          'Rắc thêm chút hành lá thái nhỏ, vài cọng ngò rí tươi xanh và tiêu sọ đập dập lên trên lòng đỏ trứng và mặt sốt.',
          'Nướng nóng lại các ổ bánh mì cho vỏ giòn rụm rôm rốp.',
          'Dọn kèm đĩa dưa leo tươi, đĩa đồ chua củ cải cà rốt và chén ớt xắt xì dầu.',
          'Thưởng thức đúng điệu: Bẻ miếng bánh mì giòn tan, dầm nhẹ lòng đỏ trứng lòng đào để quyện vào nước sốt cà chua sóng sánh và miếng pate béo ngậy, quết một miếng đẫm sốt đưa vào miệng cảm nhận trọn vẹn vị giòn rụm, béo bùi, chua ngọt đậm đà đánh thức mọi giác quan.',
        ],
        description:
          'Nhấc chảo gang đặt lên đế gỗ, rắc tiêu ngò thơm nức. Ăn ngay khi chảo còn nóng sôi xèo xèo, xé bánh mì giòn rụm chấm đẫm sốt trứng lòng đào, pate và xíu mại mềm thơm.',
      },
    ],
    chefSecret:
      'Linh hồn của chảo bánh mì đường phố thơm ngon bất bại nằm ở 3 bí quyết vàng của bếp trưởng: Thứ nhất, củ đậu trộn xíu mại bắt buộc phải vắt kiệt nước để viên thịt khi chín dẻo dai mọng nước mà không bị bở rời. Thứ hai, nước sốt cà chua phải kết hợp tương cà cùng bơ lạt ở phút cuối để tạo độ sánh óng ánh và hương thơm béo ngậy đặc trưng. Thứ ba, chảo gang phải được nung thật nóng trước khi láng bơ và đập trứng, giúp viền trứng giòn rụm lách tách mà lòng đỏ vẫn dẻo quánh, giữ nóng trọn vẹn từng miếng bánh mì đến giọt sốt cuối cùng.',
    recommendedSauce:
      'Nước sốt cà chua bơ tỏi tiêu đen đun sôi xèo xèo ngay trong lòng chảo gang, chấm kèm xì dầu tỏi ớt và tương ớt Chin-su.',
  },
  'banh-mi-thit-nuong': {
    dishId: 'banh-mi-thit-nuong',
    dishName: 'Bánh Mì Thịt Nướng Sả Thơm Lừng',
    seoTitle: 'Cách Làm Bánh Mì Thịt Nướng Giòn Rụm, Đậm Đà Chuẩn Vị Đường Phố',
    prepTime: '25 phút (ướp 1 - 2 giờ)',
    cookTime: '20 phút',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Thịt heo & Sốt ướp sả đậm đà',
        items: [
          '500g thịt nạc dăm heo (loại có chút mỡ giắt mềm mọng không khô)',
          '3 củ sả tươi băm thật nhuyễn',
          '3 tép tỏi và 2 củ hành tím băm nhỏ',
          '1.5 thìa canh nước mắm ngon',
          '1 thìa canh dầu hào Maggi',
          '1 thìa canh mật ong nguyên chất',
          '1 thìa cà phê nước màu dừa (tạo màu nâu cánh gián vàng ruộm)',
          '1 thìa cà phê dầu mè thơm',
          '1/2 thìa cà phê ngũ vị hương (tạo hương vị đường phố đặc trưng)',
          '1 thìa cà phê tiêu đen xay vỡ',
          '1 thìa canh vừng trắng (mè trắng) rang thơm',
        ],
      },
      {
        category: 'Nước sốt tương bơ đậu phộng kẹp bánh mì',
        items: [
          '2 thìa canh tương đen (tương hột xay làm phở/bánh mì)',
          '1 thìa canh bơ đậu phộng béo bùi',
          '1 thìa canh đường cát',
          '1 thìa cà phê dầu hào',
          '2 tép tỏi băm phi thơm với 1 thìa dầu ăn',
          '1/2 chén nhỏ nước dùng hoặc nước ấm',
        ],
      },
      {
        category: 'Bánh mì & Đồ ăn kèm chuẩn vị',
        items: [
          '4 - 6 ổ bánh mì vỏ giòn rụm, ruột mềm',
          '2 thìa canh bơ trứng gà thơm béo (làm từ lòng đỏ trứng và dầu ăn)',
          '2 quả dưa leo giòn thái thanh dài mỏng',
          '100g đồ chua cà rốt và củ cải bào ngâm giấm đường',
          'Rau ngò rí (rau mùi), ớt sừng cắt lát',
          'Mỡ hành phi thơm lừng (tùy chọn)',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế thịt heo và pha sốt ướp sả thơm nức',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Lát thịt thái mỏng vừa ăn, ngấm đẫm sốt ướp sả thơm lừng màu nâu cánh gián',
        actionPoints: [
          'Thịt nạc dăm rửa sạch với nước muối loãng, dùng khăn thấm thật khô ráo.',
          'Dùng dao sắc thái thịt thành từng lát mỏng dài vừa ăn (dày khoảng 0.3 - 0.4cm), dùng sống dao đập nhẹ lên miếng thịt cho thớ thịt mềm mại.',
          'Pha hỗn hợp sốt ướp: Cho sả băm nhuyễn, hành tỏi băm, 1.5 thìa nước mắm, 1 thìa dầu hào, 1 thìa mật ong, 1 thìa cà phê nước màu dừa, 1 thìa dầu mè, 1/2 thìa ngũ vị hương và 1/2 thìa tiêu xay vào bát trộn đều.',
          'Trút sốt ướp vào tô thịt, đeo găng tay bóp trộn thật kĩ trong 3 phút cho từng thớ thịt ngấm sâu gia vị.',
          'Bọc màng bọc thực phẩm, để ngăn mát tủ lạnh ướp ít nhất 1 - 2 giờ (ướp qua đêm thịt càng đậm đà thơm nức).',
        ],
        description:
          'Thái thịt nạc dăm mỏng vừa ăn. Pha sốt ướp gồm sả băm, hành tỏi, nước mắm, mật ong, dầu hào, dầu mè, ngũ vị hương và nước màu dừa. Trộn đều ướp ít nhất 1 giờ.',
        tip: 'Chọn thịt nạc dăm có các thớ mỡ giắt xen kẽ sẽ giúp xiên thịt nướng xong mềm mọng, béo ngậy mà không bị khô cứng.',
      },
      {
        step: 2,
        title: 'Xiên thịt và nướng vàng xém cạnh thơm lừng khói sả',
        time: '15 phút',
        heat: 'Nướng than hoa / Nồi chiên không dầu (180°C)',
        goal: 'Thịt chín vàng xém nhẹ các góc, mỡ chảy xèo xèo thơm nức mùi sả mật ong',
        actionPoints: [
          'Ngâm que xiên tre vào nước ấm 15 phút để khi nướng không bị cháy khói.',
          'Xiên từng lát thịt gập đôi hoặc gập ba vào que tre, không nén quá chặt để thịt chín đều.',
          'Rắc vừng trắng rang lên hai mặt các xiên thịt.',
          'Nướng thịt: Nếu nướng than hoa (ngon nhất), lật trở liên tục 8 - 10 phút cho thịt xém cạnh thơm nức. Nếu dùng nồi chiên không dầu, xếp thịt vào lót giấy bạc nướng 180°C trong 10 phút, lật mặt quét chút mỡ hành hoặc bơ nướng thêm 5 phút.',
        ],
        description:
          'Xiên thịt vào que tre, rắc mè trắng. Nướng trên bếp than hoa lật đều tay hoặc nướng nồi chiên không dầu 180°C trong 15 phút đến khi thịt xém vàng ngát hương thơm.',
        tip: 'Phết nhẹ chút mỡ bơ hoặc nước ướp thịt còn dư lên bề mặt ở 2 phút nướng cuối giúp xiên thịt bóng mượt, mọng nước.',
      },
      {
        step: 3,
        title: 'Nấu nước sốt tương bơ đậu phộng và chuẩn bị dưa chua',
        time: '10 phút',
        heat: 'Lửa nhỏ',
        goal: 'Nước sốt tương đen sánh béo bùi vị bơ đậu phộng, đồ chua cà rốt giòn ngọt sần sật',
        actionPoints: [
          'Phi thơm tỏi băm với chút dầu ăn trên chảo nhỏ, cho 2 thìa tương đen, 1 thìa bơ đậu phộng, 1 thìa đường, 1 thìa dầu hào và 1/2 chén nước ấm vào khuấy đều.',
          'Đun sôi liu riu trên lửa nhỏ 3 - 5 phút cho sốt sánh quánh béo ngậy, nêm nếm lại vị mặn ngọt thanh dẻo vừa ăn.',
          'Cà rốt củ cải bào sợi bóp muối vắt sạch, ngâm giấm đường 15 phút cho giòn ngọt.',
        ],
        description:
          'Nấu sốt tương đen kết hợp bơ đậu phộng, đường, dầu hào và tỏi phi cho sánh béo đượm vị. Làm đồ chua dưa leo ngò rí ăn kèm.',
      },
      {
        step: 4,
        title: 'Kẹp bánh mì ngập đẫm thịt nướng và thưởng thức',
        time: '5 phút',
        heat: 'Thưởng thức nóng giòn',
        goal: 'Ổ bánh mì giòn rôm rốp, nhân thịt nướng thơm nức quyện sốt béo bùi và đồ chua thanh mát',
        actionPoints: [
          'Nướng lại ổ bánh mì trên bếp hoặc nồi chiên 1 phút cho vỏ giòn rụm.',
          'Rạch dọc thân bánh mì, phết 1 lớp bơ trứng gà và pate béo ngậy vào bên trong.',
          'Xếp dưa leo thái lát mỏng, đồ chua cà rốt củ cải và ngò rí tươi.',
          'Tuốt 2 - 3 xiên thịt nướng sả nóng hổi xếp đầy đặn vào giữa ổ bánh.',
          'Rưới 2 - 3 muỗng nước sốt tương bơ đậu phộng đượm vị, thêm vài lát ớt sừng cay xè và tương ớt Chin-su.',
          'Cắn ngay miếng đầu tiên cảm nhận vỏ bánh mì giòn rụm rôm rốp, thịt nướng sả đậm đà mọng nước hòa quyện sốt béo ngọt và vị chua thanh giải ngấy.',
        ],
        description:
          'Phết bơ pate vào bánh mì giòn rụm, xếp dưa leo đồ chua, kẹp đẫm thịt nướng sả thơm lừng rồi chan sốt tương bơ đậu phộng đậm đà thưởng thức.',
      },
    ],
    chefSecret:
      'Bí quyết giúp bánh mì thịt nướng sả thơm ngon chuẩn vị đường phố Sài Gòn nằm ở 3 điểm: Thứ nhất, khi ướp thịt bắt buộc phải dùng sả băm thật nhuyễn kết hợp chút ngũ vị hương, dầu mè và nước màu dừa để thịt dậy mùi thơm nức đặc trưng và màu nâu cánh gián vàng ruộm. Thứ hai, sốt chan kẹp bánh mì phải nấu bằng tương đen kết hợp bơ đậu phộng để tạo vị béo bùi sánh quyện chứ không dùng nước mắm loãng. Thứ ba, phết một lớp bơ trứng gà béo ngậy trong lòng bánh mì trước khi kẹp thịt nướng nóng hổi sẽ tạo độ giòn thơm bất bại.',
    recommendedSauce:
      'Sốt tương đen bơ đậu phộng đượm vị béo bùi, rưới thêm tương ớt Chin-su cay nồng.',
  },
  'banh-mi-heo-quay-gion': {
    dishId: 'banh-mi-heo-quay-gion',
    dishName: 'Bánh Mì Heo Quay Da Nổ Giòn Rụm',
    seoTitle: 'Cách Làm Bánh Mì Heo Quay Giòn Rụm, Đậm Đà Chuẩn Vị Đường Phố',
    prepTime: '30 phút (sấy da 2 giờ)',
    cookTime: '45 phút',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Thịt heo quay da nổ xốp giòn',
        items: [
          '600g thịt ba chỉ heo tươi ngon (loại có lớp nạc mỡ xen kẽ đều đặn)',
          '1.5 thìa cà phê bột ngũ vị hương thơm lừng',
          '1 thìa canh nước mắm ngon',
          '1 thìa canh dầu hào Maggi',
          '1 thìa cà phê bột tỏi, 1/2 thìa cà phê bột gừng',
          '1/2 thìa cà phê tiêu trắng hoặc tiêu đen xay',
          '1 thìa cà phê muối tinh & 1 thìa canh giấm ăn (dùng xát mặt da)',
        ],
      },
      {
        category: 'Nước sốt xì dầu bơ tỏi chan bánh mì',
        items: [
          '3 thìa canh nước tương đậm đặc (xì dầu Maggi/Nhất Phẩm Tiên)',
          '1 thìa canh dầu hào Maggi',
          '1 thìa canh tương đen (tương hột xay làm phở/bánh mì)',
          '1 thìa canh đường thốt nốt hoặc đường cát',
          '1 thìa cà phê bơ lạt (hoặc bơ thực vật Tường An) giúp sốt béo thơm',
          '2 tép tỏi băm nhuyễn & 2 củ hành tím phi thơm',
          '1 thìa cà phê bột năng hòa tan với 2 thìa nước lọc',
          '150ml nước dùng xương hoặc nước ấm',
        ],
      },
      {
        category: 'Bánh mì & Đồ ăn kèm giòn mát',
        items: [
          '4 - 6 ổ bánh mì vỏ giòn rụm, ruột đặc vừa',
          '2 thìa canh bơ trứng gà thơm béo (hoặc mayonnaise) & pate gan heo',
          '2 quả dưa leo giòn mát thái lát mỏng',
          '100g đồ chua cà rốt và củ cải trắng ngâm giấm đường chua ngọt',
          'Rau ngò rí (rau mùi), ớt sừng xắt mỏng',
          'Xì dầu tỏi ớt chấm kèm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế thịt ba chỉ và kỹ thuật xăm da nổ phồng giòn rụm',
        time: '20 phút',
        heat: 'Sấy khô da trong tủ lạnh 2 - 3 giờ',
        goal: 'Mặt da xăm đều ráo nước tuyệt đối, phần thịt thấm đẫm ngũ vị hương đậm đà',
        actionPoints: [
          'Thịt ba chỉ rửa sạch, chần sơ phần da trong nồi nước sôi với vài lát gừng đập dập khoảng 3 phút rồi vớt ra xả nước lạnh.',
          'Dùng khăn giấy thấm thật khô ráo hoàn toàn cả bề mặt da lẫn mặt thịt.',
          'Dùng dụng cụ xăm da (hoặc tăm nhọn/dĩa) xăm đều tít tắp khắp bề mặt da heo (chỉ xăm nông trên lớp da, không đâm thủng vào lớp mỡ bên dưới để mỡ không bị sùi làm dai da).',
          'Khía nhẹ các đường dọc ở mặt thịt bên dưới giúp thịt ngấm sâu gia vị.',
          'Pha gia vị ướp thịt: Trộn ngũ vị hương, nước mắm, dầu hào, bột tỏi, bột gừng và tiêu. Thoa đều hỗn hợp này lên phần thịt (tuyệt đối không để gia vị dính vào mặt da).',
          'Quét một lớp mỏng giấm ăn lên bề mặt da, rắc đều 1 lớp muối tinh mỏng phủ kín da.',
          'Cho miếng thịt vào tủ lạnh (để hở mặt da không bọc kín) từ 2 - 3 giờ để da heo khô đét lại hoàn toàn (da càng ráo khô nổ càng phồng xốp giòn tan).',
        ],
        description:
          'Chần sơ da ba chỉ, thấm thật khô ráo rồi dùng tăm xăm đều khắp bề mặt da. Thoa hỗn hợp ngũ vị hương, nước mắm, dầu hào vào phần thịt. Phủ muối giấm lên da và để tủ lạnh 2 giờ cho da ráo khô đét.',
        tip: 'Mặt da bắt buộc phải ráo khô hoàn toàn trước khi nướng thì da heo quay mới nổ xốp rôm rốp cáy mắt mà không bị cứng dai.',
      },
      {
        step: 2,
        title: 'Quay heo da nổ phồng giòn rụm bằng nồi chiên không dầu',
        time: '45 phút',
        heat: 'Lần 1: 180°C (25 phút) - Lần 2: 200°C (18 phút)',
        goal: 'Lớp da nổ lách tách phồng xốp vàng rụm cáy mắt, thịt bên trong chín mềm mọng nước',
        actionPoints: [
          'Gạt bỏ lớp muối phủ trên da heo. Dùng giấy bạc bọc kín 4 xung quanh và đáy miếng thịt, chỉ để lộ duy nhất mặt da heo lên trên.',
          'Lần 1 (Sấy chín thịt & làm ráo da): Cho miếng thịt vào nồi chiên không dầu nướng ở 180°C trong 25 - 30 phút.',
          'Lấy miếng thịt ra, bóc bỏ bọc giấy bạc, lau sạch mỡ sủi trên da nếu có.',
          'Lần 2 (Nổ da giòn rụm): Cho thịt trở lại nồi chiên không dầu, tăng nhiệt độ lên 200°C - 210°C nướng tiếp 15 - 18 phút.',
          'Quan sát qua mặt kính thấy lớp da nổ lách tách phồng xốp vàng rụm đều khắp bề mặt.',
          'Vớt thịt ra để trên giá thoáng khí nghỉ 10 phút rồi chặt thành từng miếng thịt heo quay nhỏ dài vừa ăn.',
        ],
        description:
          'Bọc giấy bạc chừa mặt da, sấy nướng lần 1 ở 180°C trong 25 phút. Tháo giấy bạc, tăng nhiệt độ lên 200°C nướng lần 2 trong 18 phút đến khi da nổ phồng xốp vàng rụm lách tách.',
        tip: 'Để thịt heo quay nghỉ 10 phút trước khi chặt sẽ giúp phần mỡ thịt ổn định, thịt cắt không bị nát và da giữ nguyên độ giòn xốp.',
      },
      {
        step: 3,
        title: 'Nấu nước sốt xì dầu bơ tỏi chan bánh mì đượm vị',
        time: '10 phút',
        heat: 'Lửa nhỏ',
        goal: 'Nước sốt xì dầu mặn ngọt sánh nhẹ bóng mượt, thơm nức hương bơ tỏi phi',
        actionPoints: [
          'Phi thơm hành tím và tỏi băm nhuyễn với 1 thìa dầu ăn trong chảo nhỏ.',
          'Trút 3 thìa nước tương, 1 thìa dầu hào, 1 thìa tương đen, 1 thìa đường thốt nốt, chút tiêu và 150ml nước ấm vào khuấy đều.',
          'Đun sôi liu riu lửa nhỏ 3 phút, rưới nhẹ chén nước bột năng vào khuấy đều tay cho nước sốt sánh nhẹ óng ả.',
          'Thả 1 thìa bơ lạt vào khuấy tan tạo độ béo bùi thơm lừng rồi tắt bếp.',
        ],
        description:
          'Phi thơm hành tỏi, đun nước tương cùng dầu hào, tương đen, đường và nước ấm sánh nhẹ với bột năng. Thả bơ lạt vào khuấy tan thơm ngậy.',
      },
      {
        step: 4,
        title: 'Kẹp ổ bánh mì ngập đẫm heo quay giòn rụm và thưởng thức',
        time: '5 phút',
        heat: 'Thưởng thức nóng giòn',
        goal: 'Ổ bánh mì vỏ giòn tan, kẹp đầy đặn heo quay da nổ giòn rôm rốp quyện sốt bùi béo dưa chua ngò rí',
        actionPoints: [
          'Nướng nóng lại các ổ bánh mì cho vỏ giòn rụm.',
          'Rạch dọc thân bánh, phết một lớp bơ trứng gà thơm béo và pate gan heo đậm đà.',
          'Xếp dưa leo thái lát mỏng, đồ chua cà rốt củ cải ngâm giấm đường và rau ngò rí tươi.',
          'Xếp đẫm các miếng thịt heo quay da nổ giòn rụm vào giữa ổ bánh.',
          'Chan 2 - 3 muỗng nước sốt xì dầu bơ tỏi đậm đà lên trên thịt heo quay, rưới thêm tương ớt Chin-su và vài lát ớt sừng cay xè.',
          'Thưởng thức ngay: Cắn miếng bánh mì giòn tan nghe rõ tiếng da heo quay nổ giòn rôm rốp rộn ràng trong miệng, thịt heo quay mềm ngậy thấm đẫm sốt xì dầu bùi béo và vị chua ngọt giải ngấy bùng nổ hương vị.',
        ],
        description:
          'Phết bơ pate vào ổ bánh mì giòn rụm, kẹp dưa leo đồ chua, ngập đẫm thịt heo quay da nổ giòn tan rồi chan sốt xì dầu bơ tỏi thơm ngậy thưởng thức.',
      },
    ],
    chefSecret:
      'Bí quyết tạo nên ổ bánh mì heo quay chuẩn vị đường phố giòn ngon bất bại nằm ở 3 điểm: Thứ nhất, khi sơ chế heo quay, sau khi luộc sơ và xăm da thật kĩ bắt buộc phải để da heo thật khô đét trong tủ lạnh trước khi quay, giúp da nổ phồng xốp giòn rụm không bị cứng dai. Thứ hai, gia vị ngũ vị hương và dầu hào chỉ thoa ở mặt thịt bên dưới, giữ cho mặt da sạch khô khi nổ. Thứ ba, nước sốt chan kẹp bánh mì phải được nấu từ xì dầu, bơ và tương đen sánh nhẹ, chan vừa đủ để từng miếng da heo quay giữ nguyên độ giòn tan khi thưởng thức.',
    recommendedSauce:
      'Sốt xì dầu bơ tỏi mặn ngọt đượm vị, chấm kèm xì dầu tỏi ớt xắt và tương ớt Chin-su.',
  },
  'banh-mi-pate-thap-cam': {
    dishId: 'banh-mi-pate-thap-cam',
    dishName: 'Bánh Mì Pate Thập Cẩm Truyền Thống',
    seoTitle: 'Cách Làm Bánh Mì Pate Thập Cẩm Giòn Rụm, Đậm Đà Chuẩn Vị Đường Phố',
    prepTime: '20 phút',
    cookTime: '15 phút',
    difficulty: 'Dễ',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Thành phần pate & bơ trứng béo ngậy',
        items: [
          '200g pate gan heo loại ngon (mịn mượt, hấp ấm bơ bì heo bùi ngậy)',
          '2 lòng đỏ trứng gà tươi (dùng tự đánh bơ trứng gà thủ công)',
          '150ml dầu ăn (dùng đánh bơ trứng)',
          '1/4 thìa cà phê muối tinh & vài giọt nước cốt chanh',
        ],
      },
      {
        category: 'Nhân đạm thập cẩm truyền thống',
        items: [
          '150g chả lụa (giò lụa ngon) thái lát mỏng',
          '150g thịt nguội (xá xíu / thịt giăm bông đỏ / ba chỉ bó nướng) thái mỏng',
          '100g chà bông (ruốc thịt heo) tơi xốp thơm ngon',
          '100g chả thủ hoặc xíu mại viên thái lát (tùy chọn)',
        ],
      },
      {
        category: 'Nước sốt chan thịt đượm vị đậm đà',
        items: [
          '150ml nước dùng xương hầm hoặc nước luộc thịt xá xíu',
          '2 thìa canh nước tương đậm đặc (xì dầu Maggi/Nhất Phẩm Tiên)',
          '1 thìa canh dầu hào Maggi',
          '1 thìa canh tương cà (ketchup) & 1 thìa canh tương ớt Chin-su',
          '1 thìa canh đường cát',
          '1/2 thìa cà phê bột ngũ vị hương (tạo hương vị bánh mì phố cổ đặc trưng)',
          '1/2 thìa cà phê tiêu đen xay vỡ',
          '2 tép tỏi băm & 2 củ hành tím phi thơm',
          '1 thìa cà phê bơ lạt (hoặc bơ Tường An)',
        ],
      },
      {
        category: 'Bánh mì & Đồ ăn kèm giòn mát',
        items: [
          '4 - 6 ổ bánh mì vỏ giòn rụm, ruột xốp nhẹ',
          '2 quả dưa leo giòn mát thái lát mỏng dài',
          '100g đồ chua cà rốt và củ cải ngâm giấm đường chua ngọt',
          'Rau ngò rí (rau mùi), ớt sừng cắt lát',
          'Tương ớt & xì dầu tỏi ớt ăn kèm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Tự đánh bơ trứng gà thơm béo và làm nóng pate gan heo',
        time: '12 phút',
        heat: 'Nhiệt độ phòng / Hấp ấm',
        goal: 'Bơ trứng gà bông sánh dẻo màu vàng óng, pate gan mềm mịn béo ngậy thơm nức',
        actionPoints: [
          'Cho 2 lòng đỏ trứng gà vào bát sạch cùng 1/4 thìa cà phê muối và vài giọt nước cốt chanh. Dùng phới lồng đánh tan trứng.',
          'Kỹ thuật đánh bơ: Rưới từng thìa cà phê dầu ăn vào bát trứng, vừa rưới vừa dùng phới đánh đều tay một chiều cho dầu ăn quyện hoàn toàn vào trứng rồi mới thêm thìa dầu tiếp theo.',
          'Đánh liên tục khoảng 10 - 12 phút đến khi bơ trứng gà bông sánh dẻo, có màu vàng óng béo bùi thơm lừng.',
          'Pate gan heo cho vào đĩa hấp cách thủy 5 phút cho pate mềm ấm, khi phết vào bánh mì sẽ ngậy thơm ngất ngây.',
        ],
        description:
          'Đánh thủ công lòng đỏ trứng gà với dầu ăn rưới từng thìa cho bông sánh vàng óng béo ngậy. Hấp ấm pate gan heo cho mềm mịn dễ phết.',
        tip: 'Khi đánh bơ trứng gà, rưới dầu ăn thật chậm từng chút một và giữ nguyên 1 chiều đánh để bơ trứng không bị tách dầu.',
      },
      {
        step: 2,
        title: 'Nấu nước sốt chan thịt bánh mì đượm vị đậm đà',
        time: '10 phút',
        heat: 'Lửa nhỏ',
        goal: 'Nước sốt chan đượm vị mặn ngọt chua cay, dậy mùi thơm lừng của ngũ vị hương và bơ lạt',
        actionPoints: [
          'Đặt chảo nhỏ lên bếp, phi thơm tỏi băm và hành tím băm với 1 thìa dầu ăn.',
          'Trút 150ml nước dùng xương, 2 thìa nước tương, 1 thìa dầu hào, 1 thìa tương cà, 1 thìa tương ớt, 1 thìa đường, 1/2 thìa ngũ vị hương và tiêu xay vào khuấy đều.',
          'Đun sôi liu riu lửa nhỏ 3 - 5 phút cho sốt sánh quánh đượm vị.',
          'Thả 1 thìa bơ lạt vào khuấy tan tạo độ bóng thơm béo quyến rũ rồi tắt bếp.',
        ],
        description:
          'Phi thơm hành tỏi, đun nước dùng xương cùng nước tương, dầu hào, tương cà, tương ớt, đường và ngũ vị hương. Thả bơ lạt vào khuấy tan béo ngậy.',
      },
      {
        step: 3,
        title: 'Sơ chế chả lụa, thịt nguội & chuẩn bị dưa chua ăn kèm',
        time: '8 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Topping thái lát mỏng vừa ăn, dưa chua giòn ngọt chống ngấy',
        actionPoints: [
          'Thái chả lụa và thịt nguội xá xíu thành các lát mỏng dài vừa ăn.',
          'Dưa leo rửa sạch thái lát mỏng dài. Cà rốt củ cải bào sợi ngâm giấm đường 15 phút rồi vắt nhẹ ráo nước.',
          'Nướng lại các ổ bánh mì trong lò hoặc nồi chiên không dầu 1 - 2 phút ở 180°C cho vỏ bánh giòn rụm rôm rốp.',
        ],
        description:
          'Thái chả lụa thịt nguội mỏng. Chuẩn bị dưa leo, đồ chua cà rốt ngâm chua ngọt và ngò rí tươi. Nướng nóng bánh mì giòn rụm.',
      },
      {
        step: 4,
        title: 'Kẹp ổ bánh mì ngập đẫm pate thập cẩm và thưởng thức',
        time: '5 phút',
        heat: 'Thưởng thức nóng giòn',
        goal: 'Ổ bánh mì giòn rụm, bơ pate ngậy béo tan chảy quyện chả lụa thịt nguội và nước sốt đượm vị đậm đà',
        actionPoints: [
          'Dùng dao sắc rạch dọc thân ổ bánh mì giòn nướng nóng.',
          'Phết một lớp bơ trứng gà vàng óng khắp lòng bánh mì, tiếp theo phết đẫm lớp pate gan heo thơm phức ngậy béo.',
          'Xếp dưa leo thái lát mỏng, đồ chua cà rốt củ cải ngâm chua ngọt và vài cọng ngò rí xanh tươi.',
          'Xếp đẫm các lát chả lụa, thịt nguội xá xíu và rắc một lớp chà bông tơi xốp lên trên.',
          'Chan 2 - 3 muỗng nước sốt chan thịt đậm đà thơm nức ngũ vị hương vào giữa, rưới thêm tương ớt Chin-su và vài lát ớt sừng cay nồng.',
          'Thưởng thức ngay: Vỏ bánh mì giòn tan rôm rốp, pate ngậy béo tan chảy quyện bơ trứng bùi thơm, chả lụa thịt nguội mặn mà kết hợp sốt chan đượm vị và dưa chua giải ngấy bùng nổ hương vị!',
        ],
        description:
          'Phết bơ pate vào bánh mì giòn rụm, xếp dưa leo đồ chua, ngập đẫm chả lụa thịt nguội chà bông rồi chan nước sốt chan thịt đậm đà thơm nức thưởng thức.',
      },
    ],
    chefSecret:
      'Bí quyết tạo nên ổ bánh mì pate thập cẩm chuẩn vị đường phố thơm ngon bất bại nằm ở 3 điểm: Thứ nhất, bơ trứng gà phải tự đánh thủ công bằng lòng đỏ trứng và dầu ăn theo một chiều để bơ bông sánh dẻo vàng óng béo bùi. Thứ hai, pate gan heo trước khi kẹp nên được hấp ấm cho mềm thơm ngậy béo. Thứ ba, nước sốt chan kẹp bánh mì phải nấu từ nước dùng hầm xá xíu kết hợp chút ngũ vị hương và bơ lạt, chan vừa đủ để giữ ổ bánh mì luôn giòn rụm mà ngấm đẫm hương vị đậm đà.',
    recommendedSauce:
      'Sốt chan thịt ngũ vị hương bơ lạt mặn ngọt đậm đà, rưới thêm tương ớt Chin-su cay nồng.',
  },
  'bo-kho-banh-my-nong-gion': {
    dishId: 'bo-kho-banh-my-nong-gion',
    dishName: 'Bò Kho Bánh Mỳ Nóng Giòn',
    seoTitle: 'Cách Làm Bò Kho Bánh Mỳ Đậm Đà, Thơm Nức Hương Quế Hồi Chuẩn Vị',
    prepTime: '25 phút (ướp 1 giờ)',
    cookTime: '60 - 75 phút',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Thịt bò & Thảo mộc hầm bò kho',
        items: [
          '800g thịt nạm bò hoặc gân bò (có lẫn màng gân giòn dẻo không khô)',
          '1 củ cà rốt lớn (tỉa hoa thái khúc dày 1.5 - 2cm)',
          '1 củ hành tây nhỏ (thái múi cau)',
          '1 trái dừa tươi xiêm (lấy 500ml nước dừa hầm ngọt thanh)',
          '5 cây sả tươi (3 cây đập dập cắt khúc, 2 cây băm nhuyễn)',
          '3 bông hoa hồi, 1 nhánh quế chi nhỏ, 1 quả thảo quả (rang thơm)',
          '3 tép tỏi, 2 củ hành tím & 1 củ gừng nhỏ băm nhuyễn',
          '3 thìa canh dầu màu điều (tạo màu đỏ cam óng ả)',
        ],
      },
      {
        category: 'Gia vị ướp thịt bò kho đậm đà',
        items: [
          '1 gói sốt gia vị bò kho (hoặc bột gia vị bò kho)',
          '2 thìa canh nước mắm ngon',
          '1.5 thìa canh dầu hào Maggi',
          '1 thìa canh đường thốt nốt (hoặc đường phèn)',
          '1 thìa cà phê hạt nêm & 1/2 thìa cà phê tiêu xay',
          '1/2 thìa cà phê bột ngũ vị hương',
          '1 thìa canh tương cà (ketchup) giúp sốt đượm màu sánh mịn',
        ],
      },
      {
        category: 'Nước chấm muối ớt tắc & Bánh mì ăn kèm',
        items: [
          '4 - 6 ổ bánh mì vỏ giòn rụm nướng nóng hổi',
          '1 thìa canh muối hột giã vỡ, 2 quả ớt hiểm băm, 2 quả tắc (quất) vắt nước',
          'Rau ăn kèm: Ngò gai (mùi tàu), rau húng quế, húng cây, giá sống, ngò rí',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế thịt bò nạm gân và ướp gia vị đượm đà',
        time: '25 phút',
        heat: 'Nhiệt độ phòng (Ướp 1 giờ)',
        goal: 'Khối thịt bò nạm gân sạch mùi hôi, ngấm đẫm hương vị bò kho màu đỏ cam bắt mắt',
        actionPoints: [
          'Thịt nạm bò/gân bò rửa sạch với nước muối loãng pha chút gừng đập dập và rượu trắng để khử sạch mùi hôi, dùng khăn thấm khô ráo.',
          'Thái thịt bò thành các khối vuông vừa ăn (kích thước khoảng 3x3cm), không thái quá nhỏ vì khi hầm thịt sẽ bị teo lại.',
          'Rang thơm thảo mộc: Cho 3 bông hoa hồi, 1 nhánh quế và 1 quả thảo quả vào chảo khô rang trên lửa nhỏ 2 phút cho dậy mùi thơm nức.',
          'Pha gia vị ướp thịt: Cho 1 gói sốt bò kho, sả băm, tỏi băm, hành tím băm, gừng băm, 2 thìa nước mắm, 1.5 thìa dầu hào, 1 thìa đường thốt nốt, 1 thìa tương cà, 2 thìa dầu màu điều, 1/2 thìa ngũ vị hương và tiêu xay vào tô thịt bò.',
          'Đeo găng tay bóp trộn đều tay trong 3 phút, bọc màng bọc thực phẩm ướp ít nhất 1 giờ cho gia vị ngấm sâu vào từng thớ thịt.',
        ],
        description:
          'Sơ chế thịt nạm bò cắt khối vuông 3cm. Ướp thịt với gói sốt bò kho, sả tỏi gừng băm, nước mắm, dầu hào, đường thốt nốt, tương cà và dầu màu điều trong 1 giờ.',
        tip: 'Cho thêm 1 thìa tương cà chua vào tô ướp thịt giúp món bò kho khi hầm chín có màu đỏ cam bóng mượt tự nhiên và độ sánh mịn thanh dịu.',
      },
      {
        step: 2,
        title: 'Xào săn thịt bò và hầm nhừ bằng nước dừa tươi',
        time: '50 phút',
        heat: 'Lửa lớn lúc đầu, sau hạ lửa nhỏ liu riu',
        goal: 'Thịt bò nạm gân chín mềm nhừ dẻo dai, nước hầm bò kho sóng sánh thơm ngát hương hoa hồi quế sả',
        actionPoints: [
          'Đặt nồi sâu lòng lên bếp, cho 1 thìa canh dầu màu điều đun nóng rồi phi thơm phần tỏi, hành tím và sả đập dập.',
          'Trút toàn bộ tô thịt bò đã ướp vào xào trên lửa lớn trong 5 - 7 phút cho các thớ thịt bò săn cứng lại và dậy mùi thơm nức.',
          'Đổ 500ml nước dừa tươi xiêm và 500ml nước sôi vào nồi phủ ngập thịt bò.',
          'Thả các nhánh hoa hồi, quế chi, thảo quả đã rang thơm và các khúc sả đập dập vào nồi.',
          'Đun sôi bùng lửa lớn, hớt sạch bọt bẩn nổi lên bề mặt. Hạ lửa nhỏ liu riu, đậy nắp hầm khoảng 40 - 45 phút cho thịt nạm gân bò chín mềm dẻo.',
        ],
        description:
          'Xào săn thịt bò ngấm gia vị trên lửa lớn. Đổ nước dừa tươi và nước sôi ngập thịt, thả hoa hồi quế chi sả đập dập vào hầm lửa nhỏ 45 phút cho thịt mềm nhừ dẻo dai.',
        tip: 'Hầm bò kho bằng nước dừa tươi giúp thịt bò mau mềm hơn và nước hầm có vị ngọt thanh béo tự nhiên mà không cần nêm quá nhiều đường.',
      },
      {
        step: 3,
        title: 'Thêm cà rốt hầm chín tới và tạo độ sánh cho sốt bò kho',
        time: '15 phút',
        heat: 'Lửa vừa',
        goal: 'Cà rốt chín mềm không bị nát, nước bò kho sóng sánh mượt mà vị đậm đà',
        actionPoints: [
          'Khi thịt bò đã chín mềm vừa tới, trút cà rốt tỉa hoa thái khúc vào nồi hầm tiếp 10 - 12 phút cho cà rốt chín mềm ngọt.',
          'Hòa 1 thìa canh bột năng (hoặc bột sắn dây) với 3 thìa canh nước lọc. Rưới từ từ bát bột năng vào nồi bò kho, vừa rưới vừa khuấy nhẹ tay cho nước dùng bò kho đạt độ sánh nhẹ mượt mà.',
          'Trút hành tây thái múi cau vào nồi, đun thêm 2 phút cho hành tây vừa tái chín thơm rồi tắt bếp.',
          'Nêm nếm lại gia vị vừa ăn với chút nước mắm ngon và tiêu xay.',
        ],
        description:
          'Trút cà rốt vào hầm 10 phút chín mềm. Rưới nước bột năng khuấy đều cho sốt bò kho sánh nhẹ mượt mà, thêm hành tây thái múi cau đun thêm 2 phút tắt bếp.',
      },
      {
        step: 4,
        title: 'Pha muối ớt tắc và thưởng thức cùng bánh mì giòn rụm',
        time: '5 phút',
        heat: 'Thưởng thức nóng hổi',
        goal: 'Tô bò kho bốc khói nghi ngút, bánh mì giòn rụm chấm đẫm sốt sánh quyện đậm đà vị cay nồng',
        actionPoints: [
          'Pha nước chấm chuẩn vị: Giã giã 1 thìa canh muối hột với 2 quả ớt hiểm, múc ra chén rồi vắt nước cốt 2 quả tắc (quất) vào khuấy đều tạo chén muối ớt tắc chua cay mặn mà.',
          'Múc bò kho nóng hổi ra tô sâu lòng, xếp thịt nạm bò mềm, cà rốt và rưới đẫm nước sốt bò kho sánh đỏ óng ả.',
          'Rắc ngò gai thái nhỏ, lá húng quế và tiêu sọ đập dập lên mặt tô bò kho bốc khói.',
          'Dọn kèm đĩa đĩa rau thơm (ngò gai, húng quế, giá sống), chén muối ớt tắc và 4 - 6 ổ bánh mì vỏ giòn rụm.',
        ],
        description:
          'Múc bò kho ra tô rắc ngò gai húng quế. Pha chén muối ớt tắc chua cay đậm đà. Bẻ miếng bánh mì giòn rụm chấm đẫm nước sốt bò kho thơm lừng quế hồi thưởng thức.',
      },
    ],
    chefSecret:
      'Linh hồn của tô bò kho bánh mì thơm ngon chuẩn vị nằm ở 3 bí quyết vàng của bếp trưởng: Thứ nhất, thịt bò phải dùng phần nạm dính gân xào thật săn rồi hầm bằng nước dừa tươi giúp thịt mềm dẻo ngọt thanh tự nhiên. Thứ hai, quế chi, hoa hồi và thảo quả bắt buộc phải rang thơm trước khi thả vào nồi hầm để dậy hương thơm quyến rũ đặc trưng. Thứ ba, chén nước chấm kèm bò kho ngon nhất phải là muối hột giã ớt hiểm vắt tắc tươi chua cay mặn mà, tạo điểm nhấn nâng tầm hương vị.',
    recommendedSauce:
      'Muối hột giã ớt hiểm vắt nước tắc (quất) chua cay nồng đậm đà.',
  },
  'pha-lau-bo': {
    dishId: 'pha-lau-bo',
    dishName: 'Phá Lấu Bò Sài Gòn Nước Cốt Dừa Kèm Bánh Mì',
    seoTitle: 'Cách Làm Phá Lấu Bò Sài Gòn Đậm Đà Cay Nồng, Bén Mồi Chuẩn Quán',
    prepTime: '30 phút (ướp 1 giờ)',
    cookTime: '60 phút',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Lòng bò tươi & Nguyên liệu khử mùi hôi',
        items: [
          '1kg lòng bò hỗn hợp (tổ ong, lá sách, lá mía, ruột non, gan, gân bò)',
          '1 củ gừng tươi & 3 củ sả đập dập',
          '1 chén giấm ăn & 3 thìa canh muối hột',
          '1/2 chén rượu mai quế lộ (hoặc rượu trắng) để chần lòng bò',
        ],
      },
      {
        category: 'Gia vị ướp lòng bò đậm đà thơm lừng',
        items: [
          '1 thìa canh bột ngũ vị hương',
          '1 thìa cà phê bột cà ri',
          '1 thìa canh bột màu điều (hoặc dầu màu điều)',
          '2 thìa canh nước mắm ngon',
          '1.5 thìa canh dầu hào Maggi',
          '1 thìa canh đường thốt nốt (hoặc đường phèn)',
          '1 thìa cà phê hạt nêm & 1/2 thìa cà phê tiêu xay',
          '1 thìa canh sa tế tôm cay nồng',
          '2 tép tỏi, 2 củ hành tím & 2 cây sả băm nhuyễn',
        ],
      },
      {
        category: 'Nước hầm phá lấu cốt dừa béo ngậy',
        items: [
          '1 lít nước dừa tươi (dừa xiêm ngọt thanh)',
          '300ml nước cốt dừa dão (vắt nước 2 hầm lòng bò)',
          '150ml nước cốt dừa đặc (vắt nước 1 cho vào bước cuối)',
          '2 bông hoa hồi & 1 nhánh quế chi nhỏ (rang thơm)',
          '3 cây sả tươi đập dập cắt khúc',
        ],
      },
      {
        category: 'Nước mắm tắc chua ngọt & Bánh mì ăn kèm',
        items: [
          '4 - 6 ổ bánh mì vỏ giòn rụm nướng nóng',
          '3 thìa canh nước mắm ngon, 3 thìa canh đường, 3 thìa canh nước cốt tắc (quất)',
          '1 thìa canh tỏi ớt băm nhuyễn & vỏ tắc thái sợi mỏng',
          '1 bó rau răm tươi rửa sạch',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Kỹ thuật khử sạch mùi hôi lòng bò và ướp gia vị đượm đà',
        time: '30 phút',
        heat: 'Nhiệt độ phòng (Ướp 1 giờ)',
        goal: 'Lòng bò trắng sạch không hề còn mùi hôi, ngấm đẫm ngũ vị hương vàng ươm thơm lừng',
        actionPoints: [
          'Cạo rửa lòng bò: Chà xát 1kg lòng bò với muối hột, giấm ăn và gừng đập dập, cạo bỏ sạch màng mỡ bẩn và nhớt thừa trên bề mặt tổ ong và ruột non.',
          'Luộc chần khử mùi: Đun sôi nồi nước lớn với sả đập dập, gừng nướng đập dập và 1/2 chén rượu mai quế lộ/rượu trắng. Cho lòng bò vào chần sôi 5 phút.',
          'Vớt lòng bò ra ngâm ngay vào thau nước đá lạnh, cạo rửa sạch lần cuối rồi vắt ráo nước. Cắt lòng bò thành các khối lớn (chưa cắt nhỏ để khi hầm không bị co rút).',
          'Ướp lòng bò: Cho ngũ vị hương, bột cà ri, bột màu điều, nước mắm, dầu hào, đường thốt nốt, sa tế, tiêu xay, tỏi băm, hành tím băm và sả băm vào lòng bò.',
          'Trộn bóp đều tay trong 5 phút, bọc kín ướp ít nhất 1 giờ cho gia vị ngấm sâu vào từng miếng lá sách tổ ong.',
        ],
        description:
          'Cạo sạch lòng bò với muối giấm gừng, chần sôi 5 phút với rượu gừng sả rồi ngâm nước đá lạnh. Cắt khối lớn rồi ướp ngũ vị hương, cà ri, màu điều, nước mắm, dầu hào, đường thốt nốt và sa tế trong 1 giờ.',
        tip: 'Khử mùi lòng bò bằng rượu mai quế lộ và ngâm nước đá ngay sau khi chần là bí quyết then chốt giúp lòng bò giòn sần sật và hoàn toàn thơm sạch không mùi.',
      },
      {
        step: 2,
        title: 'Chiên săn lòng bò dậy mùi thơm nức ngũ vị hương',
        time: '10 phút',
        heat: 'Lửa lớn',
        goal: 'Lòng bò săn cứng lại, thấm đều màu đỏ cam óng ả ngạt ngào hương thơm',
        actionPoints: [
          'Đặt nồi sâu lòng lên bếp, cho 2 thìa canh dầu màu điều đun nóng rồi phi thơm hành tỏi băm và sả đập dập.',
          'Trút toàn bộ lòng bò đã ướp vào đảo xào liên tục trên lửa lớn trong 7 - 10 phút.',
          'Quan sát các thớ lòng bò săn cứng lại, chảy bớt mỡ và quyện chặt màu đỏ cam ngạt ngào mùi hương hoa hồi quế sả.',
        ],
        description:
          'Phi thơm hành tỏi sả với dầu màu điều, trút lòng bò vào đảo xào săn trên lửa lớn 10 phút cho ngấm đẫm màu sắc và hương thơm ngạt ngào.',
      },
      {
        step: 3,
        title: 'Hầm lòng bò mềm giòn bằng nước dừa tươi và nước cốt dừa',
        time: '50 phút',
        heat: 'Lửa vừa đến nhỏ',
        goal: 'Lòng bò ninh mềm giòn sần sật, nước hầm phá lấu béo ngậy sóng sánh vàng ươm',
        actionPoints: [
          'Đổ 1 lít nước dừa tươi xiêm và 300ml nước cốt dừa dão (nước 2) vào nồi phủ ngập lòng bò.',
          'Thả hoa hồi quế chi đã rang thơm và các khúc sả đập dập vào nồi hầm.',
          'Đun sôi bùng lửa lớn, hớt sạch bọt bẩn trên bề mặt. Hạ lửa nhỏ liu riu đậy nắp hầm khoảng 40 - 50 phút cho lá sách, tổ ong mềm dẻo giòn sần sật và gân bò chín mềm nhừ.',
          'Khi lòng bò đã chín mềm vừa tới, trút 150ml **nước cốt dừa đặc (nước 1)** vào nồi, khuấy nhẹ tay.',
          'Nêm nếm lại gia vị vừa ăn với chút nước mắm, đường và sa tế. Đun sôi liu riu nhẹ lại 2 phút cho sốt béo ngậy bóng mượt rồi tắt bếp.',
        ],
        description:
          'Hầm lòng bò bằng nước dừa tươi và nước cốt dừa dão trong 45 phút cho chín mềm giòn sần sật. Cuối cùng trút nước cốt dừa đặc vào khuấy nhẹ tạo độ béo ngậy bóng mượt.',
        tip: 'Cho nước cốt dừa đặc (nước 1) ở bước cuối sau khi lòng bò đã mềm và tắt bếp sớm sẽ giúp nước sốt phá lấu béo ngậy thơm nức mà không bị tách dầu mỡ.',
      },
      {
        step: 4,
        title: 'Cắt lòng bò vừa ăn, pha nước mắm tắc chua ngọt và thưởng thức',
        time: '5 phút',
        heat: 'Thưởng thức nóng hổi',
        goal: 'Chén phá lấu bốc khói ngù ngù béo ngậy, lòng bò giòn sần sật chấm đẫm mắm tắc chua ngọt cay xè',
        actionPoints: [
          'Pha nước mắm tắc chua ngọt: Đun sôi 3 thìa nước mắm với 3 thìa đường cho tan sánh rồi để nguội, vắt 3 thìa nước cốt tắc, thêm tỏi ớt băm nhuyễn và vài sợi vỏ tắc thái mỏng khuấy đều.',
          'Gắp lòng bò ra thớt, dùng kéo cắt thành các miếng nhỏ vừa ăn (khoảng 2x3cm).',
          'Múc lòng bò vào tô/chén đất nhỏ cá nhân, rưới đẫm nước sốt phá lấu dừa màu đỏ cam vàng ươm bốc khói ngù ngù.',
          'Rắc rau răm tươi thái nhỏ, tiêu sọ đập dập và hành phi thơm phức lên trên.',
          'Thưởng thức: Bẻ miếng bánh mì giòn rụm chấm đẫm nước sốt phá lấu dừa béo bùi thơm ngát, hoặc gắp miếng lòng bò tổ ong giòn sần sật chấm đẫm chén nước mắm tắc chua ngọt cay xè bùng nổ mọi giác quan!',
        ],
        description:
          'Cắt lòng bò miếng vừa ăn trút vào chén đất rưới sốt phá lấu dừa nóng hổi. Pha nước mắm tắc chua ngọt tỏi ớt. Bẻ bánh mì giòn chấm sốt béo bùi và lòng bò giòn sần sật.',
      },
    ],
    chefSecret:
      'Linh hồn của món Phá Lấu Bò Sài Gòn chuẩn quán ngon bất bại nằm ở 3 bí quyết vàng: Thứ nhất, lòng bò phải khử mùi hôi 3 bước bằng rượu mai quế lộ, gừng nướng và giấm muối, ngâm nước đá lạnh cho lòng giữ độ giòn sần sật. Thứ hai, quá trình hầm chia làm 2 giai đoạn: hầm chín mềm bằng nước dừa tươi và nước dão dừa trước, đến khi tắt bếp mới cho nước cốt dừa đặc vào để tạo độ béo ngậy mượt mà mà không bị tách dầu. Thứ ba, nước chấm bắt buộc phải là nước mắm tắc chua ngọt có điểm xuyết chút vỏ tắc thái sợi, vị chua thanh cay xè sẽ cân bằng hoàn hảo độ béo ngậy của phá lấu dừa.',
    recommendedSauce:
      'Nước mắm tắc (quất) chua ngọt tỏi ớt cay xè điểm xuyết vỏ tắc thái sợi mỏng.',
  },
  'bot-chien-gion-trung-doi': {
    dishId: 'bot-chien-gion-trung-doi',
    dishName: 'Bột Chiên Trứng Đôi Giòn Rụm',
    seoTitle: 'Cách Làm Bột Chiên Trứng Vàng Giòn Rụm, Thơm Ngon Bất Bại',
    prepTime: '25 phút (ấp lạnh 2 giờ)',
    cookTime: '20 phút',
    difficulty: 'Dễ',
    servings: '2 - 3 người',
    ingredients: [
      {
        category: 'Thành phần bột tự pha dẻo mịn',
        items: [
          '250g bột gạo lọc tươi ngon',
          '30g bột năng (tạo độ dẻo dai nhẹ không bị bở nát)',
          '380ml nước lọc',
          '1 thìa canh dầu ăn & 1/2 thìa cà phê muối tinh',
        ],
      },
      {
        category: 'Trứng gà & Chiên bột xém giòn',
        items: [
          '2 - 3 quả trứng gà tươi',
          '1 bó hành lá thái nhỏ',
          '1 thìa cà phê hắc xì dầu (hoặc nước tương ngọt) phết mặt bột',
          '3 thìa canh dầu ăn (dùng chiên bột áp chảo)',
        ],
      },
      {
        category: 'Nước tương ngọt dẻo & Đu đủ bào ăn kèm',
        items: [
          '3 thìa canh nước tương đậm đặc (xì dầu Maggi/Nhất Phẩm Tiên)',
          '2 thìa canh đường cát & 1/2 thìa canh giấm đỏ (giấm Tiều/giấm gạo)',
          '4 thìa canh nước ấm',
          '1 thìa cà phê sa tế tỏi ớt (tùy thích cay)',
          '150g đu đủ xanh bào sợi ngâm giấm đường chua ngọt giòn sần sật',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Pha bột, hấp khối bột và kỹ thuật cắt miếng dẻo mịn',
        time: '25 phút',
        heat: 'Lửa nhỏ khuấy bột - Hấp lửa vừa 25 phút',
        goal: 'Khối bột hấp chín trong, săn dẻo mịn không bị dính dao khi cắt',
        actionPoints: [
          'Khuấy đều 250g bột gạo, 30g bột năng, 1/2 thìa cà phê muối, 1 thìa dầu ăn cùng 380ml nước lọc trong tô lớn cho bột tan mịn hoàn toàn.',
          'Cho hỗn hợp bột vào nồi, đun lửa nhỏ, dùng phới khuấy liên tục đều tay khoảng 3 - 5 phút cho đến khi khối bột quánh dẻo lại nửa chín nửa sống.',
          'Thoa lớp mỏng dầu ăn vào khuôn/đĩa sâu lòng, trút khối bột vào dàn phẳng mặt. Cho vào xửng hấp cách thủy 25 - 30 phút. Dùng tăm xiên thử không dính tăm là bột đã chín trong.',
          'Lấy khối bột ra để nguội hẳn, cho vào ngăn mát tủ lạnh 1 - 2 giờ cho bột săn chắc dẻo dai.',
          'Thoa màng mỏng dầu ăn lên lưỡi dao, cắt khối bột thành các miếng hình chữ nhật mỏng vừa ăn (khoảng 1.5 x 3cm, dày 0.8cm).',
        ],
        description:
          'Khuấy bột gạo bột năng với nước, đun khuấy quánh lại rồi trút vào khuôn hấp cách thủy 25 phút. Để nguội cho tủ lạnh 1 giờ cho săn dẻo rồi thái miếng chữ nhật vừa ăn.',
        tip: 'Cho thêm 30g bột năng vào bột gạo sẽ giúp khối bột khi hấp chín có độ dẻo dai hoàn hảo, chiên giòn vỏ mà không bị bở nát.',
      },
      {
        step: 2,
        title: 'Chiên áp chảo bột chiên vàng giòn vỏ mềm trong',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Lớp vỏ ngoài miếng bột chiên giòn tan màu vàng cánh gián, bên trong dẻo mềm',
        actionPoints: [
          'Bắc chảo phẳng lớn (hoặc chảo gang) lên bếp, cho 2 - 3 thìa canh dầu ăn đun nóng lửa vừa.',
          'Xếp dàn đều các miếng bột chiên vào chảo phẳng.',
          'Rưới 1 thìa cà phê hắc xì dầu (hoặc nước tương ngọt) lên khắp bề mặt các miếng bột để tạo màu vàng nâu xém cạnh đẹp mắt.',
          'Chiên áp chảo lật trở đều tay 8 - 10 phút đến khi hai mặt miếng bột nổ giòn giãy màu vàng nâu óng ả, phần vỏ nổ rôm rốp nhưng bên trong vẫn giữ nguyên độ dẻo mịn.',
        ],
        description:
          'Xếp các miếng bột vào chảo dầu nóng, rưới chút hắc xì dầu tạo màu rồi chiên lật đều 10 phút cho vỏ ngoài nổ giòn rụm màu vàng cánh gián.',
      },
      {
        step: 3,
        title: 'Đập trứng gà, rắc hành lá và chiên xém thơm lừng',
        time: '5 phút',
        heat: 'Lửa vừa đến lớn',
        goal: 'Trứng gà phủ đều các miếng bột chiên, viền trứng phồng giòn nức mũi hương hành lá',
        actionPoints: [
          'Dùng xẻng gom các miếng bột chiên giòn ép sát lại với nhau thành khối tròn trên chảo.',
          'Đập trực tiếp 2 - 3 quả trứng gà lên bề mặt khối bột chiên. Dùng xẻng dầm nhẹ cho lòng đỏ trứng vỡ ra dàn phủ đều lên kẽ các miếng bột.',
          'Rắc đẫm hành lá thái nhỏ lên trên lòng đỏ trứng gà đang xèo xèo.',
          'Chiên giữ lửa vừa 2 phút cho viền trứng phồng giòn vàng ruộm. Lật nhẹ mặt trứng xuống áp chảo thêm 1 phút cho hành lá và trứng chín thơm lừng rồi tắt bếp.',
        ],
        description:
          'Gom bột chiên sát lại, đập 2 - 3 quả trứng gà lên trên dầm nhẹ lòng đỏ phủ đều. Rắc đẫm hành lá chiên xém viền giòn rụm 3 phút rồi tắt bếp.',
        tip: 'Đập trứng khi bột đã chiên thật giòn sẽ giúp trứng quyện chặt vào miếng bột mà vỏ bột không bị mềm yểu.',
      },
      {
        step: 4,
        title: 'Pha nước tương ngọt, dọn đu đủ bào giòn và thưởng thức',
        time: '5 phút',
        heat: 'Thưởng thức nóng giòn',
        goal: 'Đĩa bột chiên trứng vàng giòn nức mũi, quyện nước tương ngọt dịu và đu đủ bào giòn sần sật',
        actionPoints: [
          'Pha nước tương chấm kiểu người Hoa: Khuấy đều 3 thìa nước tương, 2 thìa đường, 1/2 thìa giấm đỏ và 4 thìa nước ấm cho đường tan mịn, nêm vị mặn ngọt chua nhẹ thanh dịu. Thêm sa tế tỏi ớt nếu thích cay.',
          'Dùng xẻng xúc nguyên khối bột chiên trứng vàng giòn ra đĩa lớn.',
          'Gắp một nhúm đu đủ xanh bào sợi ngâm giấm đường chua ngọt giòn sần sật phủ lên góc đĩa.',
          'Chan đẫm nước tương ngọt dịu lên đĩa bột chiên trứng bốc khói ngù ngù.',
          'Thưởng thức ngay: Cắn miếng bột chiên vỏ ngoài nổ giòn tan rôm rốp quyện trứng gà béo ngậy, bùi thơm hành lá, thấm đẫm nước tương mặn ngọt dịu chua thanh và đu đủ bào giòn sần sật đánh thức mọi giác quan!',
        ],
        description:
          'Pha nước tương ngọt với giấm đỏ và đường. Xúc bột chiên trứng ra đĩa, kèm đu đủ bào sợi chua ngọt. Chan đẫm nước tương ngọt dịu thưởng thức ngay khi còn nóng.',
      },
    ],
    chefSecret:
      'Bí quyết làm món bột chiên trứng chuẩn vị người Hoa Sài Gòn nằm ở 3 điểm vàng: Thứ nhất, tỷ lệ bột gạo và bột năng phải chuẩn (8 phần bột gạo 1 phần bột năng) giúp khối bột khi chiên vỏ ngoài nổ giòn tan mà bên trong dẻo dai không bị cứng hay bở nhão. Thứ hai, hấp bột xong phải để lạnh cho khối bột săn chắc trước khi thái miếng. Thứ ba, nước tương chấm bột chiên phải pha với chút giấm đỏ và đường cho vị mặn ngọt chua nhẹ dịu, ăn kèm đu đủ xanh bào giòn ngâm giấm đường giải ngấy tuyệt đối.',
    recommendedSauce:
      'Nước tương (xì dầu) pha giấm đỏ ngọt dịu chua nhẹ, ăn kèm đu đủ xanh bào sợi ngâm chua ngọt.',
  },
  'nui-xao-bo-ap-chao': {
    dishId: 'nui-xao-bo-ap-chao',
    dishName: 'Nui Xào Bò Áp Chảo Giòn Rụm',
    seoTitle: 'Cách Làm Nui Xào Bò Thơm Ngon Đậm Đà Chuẩn Quán',
    prepTime: '20 phút',
    cookTime: '15 phút',
    difficulty: 'Dễ',
    servings: '2 - 3 người',
    ingredients: [
      {
        category: 'Thịt bò thăn & Gia vị ướp mềm mọng',
        items: [
          '250g thịt thăn bò tươi ngon (thái lát mỏng ngang thớ)',
          '1 thìa canh dầu hào Maggi & 1 thìa canh nước tương đậm đặc',
          '1/2 thìa cà phê tiêu xay & 1/2 thìa cà phê đường cát',
          '1 thìa cà phê nước cốt tỏi băm & 1 thìa cà phê dầu ăn',
          '1 thìa cà phê bột năng (bí quyết khóa màng giữ nước thịt mọng ngọt)',
        ],
      },
      {
        category: 'Nui ống & Gia vị xào áo bơ thơm lừng',
        items: [
          '200g nui ống vàng (hoặc nui nơ/nui xoắn)',
          '1 thìa canh bơ lạt (hoặc bơ thực vật Tường An)',
          '1 thìa canh tương cà (ketchup) xào áo nui vàng cam óng ả',
          '1 thìa cà phê muối tinh & 1 thìa canh dầu ăn (dùng luộc nui)',
        ],
      },
      {
        category: 'Rau củ xào kèm & Nước sốt đậm đà',
        items: [
          '1 củ hành tây nhỏ thái múi cau',
          '1 củ cà rốt nhỏ thái lát mỏng',
          '1 quả cà chua thái múi cau & 1 bó cần tây thái khúc',
          '2 thìa canh tương cà & 1 thìa canh tương ớt Chin-su',
          '1 thìa canh dầu hào & 1 thìa canh nước tương đậm đặc',
          '2 tép tỏi băm nhuyễn phi thơm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Thái thịt bò mỏng ngang thớ và ướp bột năng mềm mọng',
        time: '15 phút',
        heat: 'Nhiệt độ phòng (Ướp 20 phút)',
        goal: 'Lát thịt bò ngấm sâu gia vị tỏi dầu hào, mềm mọng nước không bị khô dai',
        actionPoints: [
          'Thịt thăn bò rửa sạch với nước muối loãng, dùng khăn thấm thật khô ráo.',
          'Dùng dao sắc thái thịt bò thành từng lát mỏng ngang thớ (chú ý thái ngang thớ thịt để khi xào không bị dai).',
          'Pha gia vị ướp thịt bò: Cho 1 thìa dầu hào, 1 thìa nước tương, nước cốt tỏi băm, 1/2 thìa đường, 1/2 thìa tiêu, 1 thìa dầu ăn và 1 thìa cà phê bột năng vào tô thịt bò.',
          'Đeo găng tay bóp trộn đều tay trong 3 phút, để ướp 15 - 20 phút (lớp bột năng và dầu ăn sẽ khóa màng giữ nước thịt mềm tan khi xào lửa lớn).',
        ],
        description:
          'Thái thịt bò thăn mỏng ngang thớ. Ướp với dầu hào, nước tương, nước cốt tỏi, tiêu, đường, dầu ăn và bột năng trong 20 phút cho thịt mềm mọng nước.',
        tip: 'Cho thêm 1 thìa cà phê bột năng và dầu ăn vào tô ướp thịt bò giúp tạo lớp màng bảo vệ thịt không bị mất nước khi xào lửa lớn.',
      },
      {
        step: 2,
        title: 'Luộc nui dẻo dai vừa tới và xào áo bơ tương cà óng ả',
        time: '15 phút',
        heat: 'Nhiệt độ phòng / Lửa vừa',
        goal: 'Nui chín tới dẻo dai ráo nước, khoác lớp áo bơ tương cà màu cam đỏ óng ả thơm nức',
        actionPoints: [
          'Đun nồi nước sôi bùng với 1 thìa cà phê muối và 1 thìa dầu ăn. Trút 200g nui vào luộc lửa vừa khoảng 8 - 10 phút.',
          'Dùng đũa gắp thử nui vừa chín dẻo tới ruột (chín 90%) thì vớt ra ngay ngâm vào thau nước đá lạnh 3 phút.',
          'Vớt nui ra rây để ráo nước hoàn toàn.',
          'Bắc chảo lên bếp, cho 1 thìa canh bơ lạt đun chảy, trút nui vào xào lướt lửa vừa cùng 1 thìa canh tương cà.',
          'Đảo nhanh tay 2 - 3 phút cho từng hạt nui ngấm bơ thơm ngậy và khoác lớp áo màu cam đỏ óng ả đẹp mắt. Trút nui ra đĩa riêng.',
        ],
        description:
          'Luộc nui với nước sôi muối dầu ăn 9 phút chín dẻo tới, xả nước đá ráo nước. Xào lướt nui trên chảo với bơ lạt và tương cà 3 phút cho tơi bóng thơm lừng.',
        tip: 'Nui sau khi xả nước đá ráo ráo nước nên xào lướt ngay với bơ lạt và tương cà giúp hạt nui không dính bết và rất bóng bẩy.',
      },
      {
        step: 3,
        title: 'Xào thịt bò lửa lớn chín tái mềm mọng',
        time: '5 phút',
        heat: 'Lửa cực đại (Lửa lớn)',
        goal: 'Thịt bò xào vừa chín tái phớt hồng, dậy mùi thơm nức tỏi phi',
        actionPoints: [
          'Đun nóng chảo với 1 thìa canh dầu ăn, phi thơm tỏi băm nhuyễn.',
          'Trút toàn bộ tô thịt bò đã ướp vào xào trên lửa lớn (lửa cực đại) đảo nhanh tay liên tục trong 1.5 - 2 phút.',
          'Khi các thớ thịt bò vừa chuyển màu phớt hồng chín tái thì trút ngay thịt bò ra đĩa riêng (tuyệt đối không xào lâu bò sẽ bị dai xác).',
        ],
        description:
          'Phi thơm tỏi băm, trút thịt bò vào xào xốc nhanh tay trên lửa cực lớn trong 2 phút vừa chín tái phớt hồng trút ra đĩa ngay.',
      },
      {
        step: 4,
        title: 'Xào rau củ đượm sốt, hòa quyện nui xào bò thơm lừng',
        time: '5 phút',
        heat: 'Lửa lớn',
        goal: 'Đĩa nui xào bò bốc khói ngù ngù, hạt nui dẻo thơm quyện thịt bò mềm mọng và rau củ giòn ngọt',
        actionPoints: [
          'Vẫn dùng chảo đó, cho 1 thìa dầu ăn phi thơm tỏi băm, trút cà rốt, hành tây và cà chua vào xào lửa lớn 2 phút.',
          'Trút hỗn hợp sốt (tương cà, tương ớt, dầu hào, nước tương, đường, tiêu) vào chảo rau củ khuấy đều cho đượm vị.',
          'Trút toàn bộ nui xào bơ và đĩa thịt bò tái vào chảo, trút cần tây cắt khúc vào.',
          'Đảo xốc nhanh tay trên lửa lớn 1 - 2 phút cho nui và thịt bò ngấm đẫm nước sốt sánh quyện hòa quyện hoàn hảo rồi tắt bếp.',
          'Trình bày: Múc nui xào bò ra đĩa lớn bốc khói nghi ngút, rắc tiêu sọ đập dập và cọng ngò rí tươi lên mặt. Dọn kèm chén xì dầu tỏi ớt xắt.',
          'Thưởng thức ngay khi còn nóng: Cắn từng hạt nui dẻo dai bùi béo vị bơ tỏi, thịt bò mềm mọng ngấm đẫm sốt đậm đà mặn ngọt chua dịu cực kỳ hấp dẫn!',
        ],
        description:
          'Xào chín tới cà rốt hành tây cà chua với nước sốt. Trút nui xào bơ, thịt bò tái và cần tây vào đảo xốc lửa lớn 2 phút ngấm đẫm sốt sánh quyện rồi thưởng thức.',
      },
    ],
    chefSecret:
      'Bí quyết làm món nui xào bò ngon chuẩn vị nhà hàng nằm ở 3 điểm vàng: Thứ nhất, thịt bò thái ngang thớ mỏng và bắt buộc ướp với chút bột năng cùng dầu ăn để khóa giữ độ ngọt mọng nước khi xào lửa lớn. Thứ hai, nui sau khi luộc vừa chín tới ngâm nước đá ráo khô phải được xào lướt với bơ lạt và tương cà giúp hạt nui không bị dính bết, bóng bẩy thơm lừng. Thứ ba, thịt bò xào lửa cực đại chín tái rồi mới trút vào đảo chung với nui và rau củ ở phút cuối cùng để thịt bò mềm tan mọng nước.',
    recommendedSauce:
      'Chén xì dầu (nước tương) tỏi ớt tươi xắt cay nồng, rưới thêm tương ớt Chin-su.',
  },
  'nui-gio-heo': {
    dishId: 'nui-gio-heo',
    dishName: 'Nui Giò Heo Hầm Xương',
    seoTitle: 'Cách Nấu Nui Giò Heo Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    prepTime: '25 phút',
    cookTime: '60 phút',
    difficulty: 'Trung bình',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Giò heo, Xương ống & Nguyên liệu hầm nước dùng',
        items: [
          '800g giò heo (khoanh giò trước chặt miếng vừa ăn)',
          '500g xương ống heo (giúp nước dùng thanh ngọt đậm đà)',
          '1 củ củ cải trắng (gọt vỏ cắt khúc 3cm)',
          '1 củ hành tây & 3 củ hành tím (nướng thơm)',
          '1 nhánh gừng tươi (đập dập dùng chần giò heo)',
          '15g đường phèn (tạo vị ngọt thanh tự nhiên)',
          '2 thìa canh nước mắm ngon & 1.5 thìa canh hạt nêm',
        ],
      },
      {
        category: 'Nui ống & Củ quả nấu kèm',
        items: [
          '300g nui ống vàng (hoặc nui nơ/nui xoắn)',
          '1 củ cà rốt (tỉa hoa cắt lát mỏng)',
          '1 thìa cà phê muối tinh & 1 thìa canh dầu ăn (luộc nui)',
        ],
      },
      {
        category: 'Rau ăn kèm & Gia vị nêm nếm',
        items: [
          '100g giá đỗ tươi & xà lách rửa sạch',
          '3 nhánh hành lá & ngò rí (thái nhỏ)',
          '3 thìa canh hành phi vàng giòn',
          '1 thìa cà phê tiêu sọ xay thơm nức',
          'Chén nước mắm nhĩ tỏi ớt tươi & ớt sa tế cay nồng',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế & Chần khử mùi hôi giò heo, xương ống',
        time: '15 phút',
        heat: 'Lửa lớn',
        goal: 'Khoanh giò heo và xương ống sạch hoàn toàn bọt bẩn, thơm phức không hôi mùi thịt',
        actionPoints: [
          'Giò heo chặt khoanh tròn vừa ăn, cạo sạch lại lớp bì. Xương ống rửa sạch với nước muối loãng.',
          'Đun nồi nước sôi bùng, cho 1 nhánh gừng đập dập và 1 thìa cà phê muối hột vào.',
          'Trút toàn bộ giò heo và xương ống vào chần (trụng) trong 3 - 5 phút cho nổi hết bọt bẩn và máu thừa.',
          'Vớt giò heo và xương ra rửa lại thật sạch dưới vòi nước lạnh, xả kỹ từng khoanh giò cho trắng tươi.',
        ],
        description:
          'Chặt khoanh giò heo và xương ống. Chần qua nước sôi gừng muối 5 phút xả sạch bọt bẩn dưới nước lạnh để nước dùng trong veo.',
        tip: 'Bắt buộc chần giò heo và xương ống với gừng đập dập trước khi hầm để loại bỏ tạp chất và giữ nước dùng thơm trong.',
      },
      {
        step: 2,
        title: 'Ninh nước dùng thanh ngọt thơm liu riu',
        time: '45 phút',
        heat: 'Lửa nhỏ (Liu riu)',
        goal: 'Nước dùng trong veo thanh ngọt tự nhiên, khoanh giò heo mềm dẻo sần sật gân',
        actionPoints: [
          'Cho giò heo, xương ống vào nồi lớn cùng 2.5 - 3 lít nước sạch.',
          'Thả củ hành tây nướng, 3 củ hành tím nướng cạo vỏ rửa sạch và củ cải trắng cắt khúc vào nồi.',
          'Đun sôi bùng lửa lớn, liên tục vớt sạch bọt mịn nổi lên bề mặt.',
          'Hạ lửa nhỏ liu riu hầm trong 40 - 50 phút (tuyệt đối không đậy nắp kín để nước dùng không bị đục).',
          'Cho cà rốt tỉa hoa vào hầm cùng 10 phút cuối cho chín mềm vừa tới.',
          'Nêm gia vị: 15g đường phèn, 2 thìa canh nước mắm ngon, 1.5 thìa canh hạt nêm và 1 thìa cà phê muối. Nêm lại vừa vị thanh ngọt đậm đà.',
        ],
        description:
          'Hầm giò heo, xương ống với hành tây nướng, củ cải trắng và đường phèn trong 45 phút lửa nhỏ không đậy nắp. Nêm nước mắm, hạt nêm vừa vị.',
        tip: 'Hầm nước dùng mở vung lửa nhỏ liu riu và dùng đường phèn giúp nước lèo trong suốt, thanh mát không bị gắt cổ.',
      },
      {
        step: 3,
        title: 'Luộc nui dẻo dai ráo nước không bị nát',
        time: '15 phút',
        heat: 'Lửa vừa',
        goal: 'Từng hạt nui chín dẻo tới, màu vàng óng ả, không dính bết hay hôi mùi bột',
        actionPoints: [
          'Đun sôi nồi nước lớn với 1 thìa cà phê muối và 1 thìa canh dầu ăn.',
          'Trút 300g nui vào luộc lửa vừa khoảng 8 - 10 phút, thỉnh thoảng dùng đũa đảo nhẹ tay.',
          'Thử hạt nui chín dẻo dai (chín khoảng 95%), vớt ra ngâm ngay vào tô nước đá lạnh 3 phút.',
          'Vớt nui ra rây để ráo nước hoàn toàn (chút dầu ăn và ngâm nước đá giúp nui săn hạt, vàng bóng không dính).',
        ],
        description:
          'Luộc nui với nước sôi muối dầu ăn 9 phút chín dẻo, xả nước đá lạnh rồi để ráo nước giúp nui săn hạt không dính.',
        tip: 'Luộc nui cùng chút dầu ăn và ngâm ngay vào nước đá giúp hạt nui dai dẻo bùi bùi, khi chan nước lèo nóng không bị nở nhão.',
      },
      {
        step: 4,
        title: 'Trình bày tô nui giò heo bốc khói & Thưởng thức',
        time: '5 phút',
        heat: 'Múc thưởng thức nóng',
        goal: 'Tô nui giò heo nghi ngút khói, nước dùng trong veo ngọt thanh, giò heo béo ngậy chấm nước mắm ớt',
        actionPoints: [
          'Trụng lại nui qua nước lèo nóng cho ấm, cho nui vào tô lớn.',
          'Múc khoanh giò heo béo dẻo, vài lát cà rốt tỉa hoa và củ cải trắng xếp lên mặt tô.',
          'Rắc hành lá ngò rí thái nhỏ, 1 thìa canh hành phi vàng giòn và tiêu sọ xay thơm phức.',
          'Chan nước dùng sôi bùng trong veo ngập mặt nui.',
          'Thưởng thức nóng: Gắp khoanh giò heo chấm chén nước mắm nhĩ tỏi ớt tươi cay nồng, xì xụp từng thìa nui dẻo thơm ngập nước lèo ngọt thanh từ xương!',
        ],
        description:
          'Trụng nui cho vào tô, xếp giò heo, cà rốt, hành lá, ngò rí, hành phi và tiêu sọ. Chan nước dùng nóng hổi, ăn kèm giá đỗ và nước mắm ớt.',
      },
    ],
    chefSecret:
      'Bí quyết nấu nui giò heo trong veo ngọt thanh nằm ở 3 điểm quan trọng: Thứ nhất, giò heo và xương ống bắt buộc phải chần với gừng đập dập và xả thật sạch bọt bẩn trước khi ninh. Thứ hai, khi ninh nước dùng phải mở vung hầm lửa liu riu, hớt bọt liên tục và dùng củ cải trắng kết hợp đường phèn tạo vị ngọt thanh nhã tự nhiên. Thứ ba, nui luộc xong phải xả ngay nước đá lạnh để giữ độ dẻo dai sần sật, không bị nhão bột khi chan nước lèo.',
    recommendedSauce:
      'Chén nước mắm nhĩ nguyên chất xắt tỏi ớt tươi cay nồng kèm dĩa ớt sa tế.',
  },
  'goi-cuon-tom-thit': {
    dishId: 'goi-cuon-tom-thit',
    dishName: 'Gỏi Cuốn Tôm Thịt Bánh Tráng Dẻo',
    seoTitle: 'Cách Làm Gỏi Cuốn Tôm Thịt Tươi Ngon, Nước Chấm Chua Ngọt Chuẩn Vị',
    prepTime: '25 phút',
    cookTime: '15 phút',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Tôm tươi, Thịt ba chỉ & Nhân cuốn tươi ngọt',
        items: [
          '400g tôm sú (hoặc tôm thẻ tươi sống, bọc vỏ đẹp)',
          '300g thịt ba chỉ (hoặc nạc vai có ít mỡ mềm mọng)',
          '300g bún tươi cọng mỏng',
          '20 - 25 lá bánh tráng dẻo Tây Ninh chuyên dùng cuốn gỏi',
          '1 củ hành tím đập dập & 1 nhánh gừng đập dập (dùng luộc thịt, tôm)',
        ],
      },
      {
        category: 'Rau sống ăn kèm & Cọng hẹ tươi',
        items: [
          '1 bó hẹ tươi (chọn cọng xanh cứng dài để cuốn nhô đầu đẹp mắt)',
          '1 cây xà lách mỡ & 1 bó rau thơm (húng lủi, tía tía, rau đắng)',
          '150g giá đỗ tươi rửa sạch để ráo',
          '1 quả dưa leo thái thanh mỏng dài',
        ],
      },
      {
        category: 'Nước chấm tương bơ đậu phộng béo ngậy (Chuẩn Nam Bộ)',
        items: [
          '100g tương hột xay nhuyễn (hoặc tương đen Lee Kum Kee)',
          '2 thìa canh bơ đậu phộng (Peanut butter mịn béo)',
          '100ml nước dừa tươi (hoặc nước lọc)',
          '1 thìa canh đường cát & 1 thìa canh tương ớt Chin-su',
          '1 thìa canh tỏi băm, 2 thìa canh đậu phộng rang giã dập & đồ chua (cà rốt ngâm giấm đường)',
        ],
      },
      {
        category: 'Nước mắm tỏi ớt chua ngọt (Lựa chọn 2)',
        items: [
          '3 thìa canh nước mắm nhĩ ngon',
          '3 thìa canh đường cát',
          '3 thìa canh nước cốt chanh tươi (bỏ hạt)',
          '12 thìa canh nước ấm',
          '1 thìa canh tỏi băm nhuyễn & 1 thìa canh ớt hiểm băm nhuyễn (nổi bồng bềnh)',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Luộc thịt ba chỉ & Chẻ đôi tôm luộc đỏ au',
        time: '20 phút',
        heat: 'Lửa vừa',
        goal: 'Thịt ba chỉ mềm ngọt không hôi, tôm luộc đỏ au giòn sần sật chẻ đôi đẹp mắt',
        actionPoints: [
          'Thịt ba chỉ rửa sạch với nước muối loãng. Đun nồi nước với 1 củ hành tím đập dập và 1 thìa cà phê muối, cho thịt vào luộc chín trong 15 - 20 phút.',
          'Khi thịt chín tới, vớt ngay ra ngâm vào tô nước đá lạnh 5 phút cho da thịt săn giòn không bị thâm đen. Thái thịt thành lát mỏng vừa ăn.',
          'Tôm rửa sạch. Đun nồi nước nhỏ với 1 nhánh gừng đập dập và 1 thìa canh rượu trắng, trút tôm vào luộc 3 - 5 phút cho tôm chuyển màu đỏ au vừa chín tới.',
          'Vớt tôm ngâm vào nước đá lạnh. Bóc vỏ tôm, bỏ đầu và dùng dao sắc chẻ đôi thân tôm theo chiều dọc từ lưng xuống đuôi.',
        ],
        description:
          'Luộc thịt ba chỉ với hành tím muối 20 phút, ngâm nước đá thái mỏng. Luộc tôm với gừng rượu 4 phút, bóc vỏ chẻ đôi thân tôm.',
        tip: 'Chẻ đôi tôm luộc theo chiều dọc giúp khi cuốn gỏi lộ ra mặt lưng tôm đỏ au rực rỡ và thân cuốn thon gọn dẻo dai.',
      },
      {
        step: 2,
        title: 'Sơ chế rau sống, cọng hẹ & Bún tươi',
        time: '10 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Rau sống xanh mướt ráo nước hoàn toàn, cọng hẹ tươi nhô đầu chuẩn vị',
        actionPoints: [
          'Rau xà lách, húng lủi, tía tía, giá đỗ rửa sạch qua 3 lần nước, ngâm nước muối loãng 10 phút rồi vẩy thật ráo nước.',
          'Cọng hẹ tươi rửa sạch, cắt bỏ phần gốc già, giữ lại đoạn lá xanh dài.',
          'Dưa leo gọt vỏ, cắt bỏ ruột rồi thái lát mỏng dài vừa bằng cuốn gỏi.',
          'Bún tươi chần sơ qua nước sôi, vớt ra rây để ráo.',
        ],
        description:
          'Rửa sạch rau sống vẩy thật ráo nước. Cắt cọng hẹ xanh mướt, dưa leo thái thanh mỏng, bún tươi ráo nước.',
        tip: 'Rau sống bắt buộc phải vẩy thật ráo nước trước khi cuốn để bánh tráng không bị nhão ướt rách.',
      },
      {
        step: 3,
        title: 'Nấu sốt tương bơ đậu phộng & Pha nước mắm chua ngọt',
        time: '10 phút',
        heat: 'Lửa nhỏ',
        goal: 'Tương đậu phộng béo bùi sánh mịn; Nước mắm chua ngọt hài hòa với tỏi ớt nổi bồng bồng',
        actionPoints: [
          'Nấu tương đậu phộng: Phi thơm tỏi băm với 1 thìa dầu ăn. Trút tương hột xay nhuyễn và bơ đậu phộng vào khuấy đều. Rưới nước dừa tươi vào đun sôi lăn tăn lửa nhỏ. Nêm đường và tương ớt Chin-su khuấy đều cho sốt sánh mịn ngậy béo. Múc ra chén rắc đậu phộng giã và đồ chua.',
          'Pha nước mắm chua ngọt: Cho 3 thìa mắm nhĩ, 3 thìa đường, 3 thìa nước cốt chanh vào 12 thìa nước ấm khuấy tan hoàn toàn. Sau cùng mới trút tỏi băm nhuyễn và ớt băm vào để tỏi ớt nổi bồng bềnh lên mặt.',
        ],
        description:
          'Phi tỏi xào tương hột, bơ đậu phộng với nước dừa tươi đun sánh mịn béo ngậy. Pha nước mắm nhĩ chua ngọt tỏi ớt bồng bềnh.',
        tip: 'Khuấy tan hoàn toàn đường và chanh trong nước ấm trước khi cho tỏi ớt băm nhuyễn vào sẽ giúp tỏi ớt nổi 100% trên mặt nước mắm.',
      },
      {
        step: 4,
        title: 'Kỹ thuật cuốn gỏi tròn trịa, căng mọng & Lộ tôm thịt',
        time: '15 phút',
        heat: 'Cuốn ăn tươi',
        goal: 'Cuốn gỏi tròn trịa chắc tay, bánh tráng dẻo dai không rách, lộ 3 con tôm đỏ rực và cọng hẹ xanh mướt',
        actionPoints: [
          'Thoa một lớp nước mỏng nhẹ lên bánh tráng dẻo cho vừa mềm tới.',
          'Đặt xà lách, rau thơm, giá đỗ, dưa leo và một vắt bún nhỏ lên 1/3 góc bánh tráng phía dưới.',
          'Xếp 3 - 4 lát thịt ba chỉ mỏng đè lên phần bún rau.',
          'Gập 2 mép bánh tráng hai bên vào trong. Cuộn chặt tay 1 vòng ôm trọn phần bún thịt.',
          'Đặt 3 nửa con tôm (mặt lưng đỏ ngửa lên trên) xếp hàng ngang thẳng tắp, cùng 1 cọng hẹ tươi để thò đầu ra ngoài 3 - 4cm.',
          'Tiếp tục cuộn tròn chặt tay cho hết bánh tráng. Hoàn thành gỏi cuốn căng tròn, tươi ngon lấp lánh.',
        ],
        description:
          'Thoa nhẹ nước bánh tráng, xếp rau bún thịt ba chỉ, gập 2 mép cuộn 1 vòng. Xếp 3 nửa con tôm đỏ ngửa lưng và cọng hẹ nhô đầu rồi cuộn chặt tay.',
        tip: 'Xếp tôm ở lượt cuốn cuối cùng đè lên mép bánh tráng giúp cuốn gỏi khoe trọn sắc đỏ au của tôm tươi cực kỳ bắt mắt.',
      },
    ],
    chefSecret:
      'Bí quyết tạo nên đĩa gỏi cuốn tôm thịt đẳng cấp chuẩn quán nằm ở 3 điểm nghệ thuật: Thứ nhất, tôm luộc xong phải ngâm nước đá rồi chẻ đôi thân theo chiều dọc để khi cuốn lộ mặt lưng đỏ au đẹp mắt mà không làm cuốn gỏi bị cồng kềnh. Thứ hai, kỹ thuật cuốn 2 nhịp (cuốn nếp bún thịt rau trước, sau đó mới đặt tôm và cọng hẹ nhô đầu) giúp cuốn gỏi chắc tay, không vỡ. Thứ ba, chén nước chấm tương hột phải kết hợp bơ đậu phộng đun cùng nước dừa tươi cho vị bùi béo đậm đà khó cưỡng.',
    recommendedSauce:
      'Chén tương hột bơ đậu phộng béo bùi rắc đậu phộng giã dập & chén nước mắm nhĩ tỏi ớt chua ngọt.',
  },
  'bun-thit-nuong-cha-gio': {
    dishId: 'bun-thit-nuong-cha-gio',
    dishName: 'Bún Thịt Nướng Chả Giò Miền Nam',
    seoTitle: 'Cách Làm Bún Thịt Nướng Đậm Đà, Nước Mắm Chua Ngọt Chuẩn Vị Nam Bộ',
    prepTime: '30 phút (ướp 1 - 2 giờ)',
    cookTime: '20 phút',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Thịt heo & Gia vị sốt ướp sả mè nướng thơm béo',
        items: [
          '600g thịt nạc vai heo (hoặc ba chỉ bỏ da, thái lát mỏng 0.5cm)',
          '3 cây sả tươi (băm thật nhuyễn)',
          '1 thìa canh tỏi băm & 1 thìa canh hành tím băm nhuyễn',
          '1 thìa canh mật ong nguyên chất (giúp thịt vàng ươm mọng nước)',
          '1 thìa canh dầu hào Maggi & 1 thìa canh nước mắm ngon',
          '1 thìa canh mỡ lợn (hoặc dầu ăn) & 1/2 thìa cà phê tiêu sọ',
          '1 thìa canh mè trắng rang nguyên hạt',
        ],
      },
      {
        category: 'Nước mắm tỏi ớt chua ngọt (Chuẩn vị Nam Bộ thanh ngọt)',
        items: [
          '4 thìa canh nước mắm nhĩ ngon',
          '4 thìa canh đường cát vàng',
          '4 thìa canh nước cốt tắc (tắc/quất thơm dịu hơn chanh)',
          '16 thìa canh nước dừa tươi (hoặc nước ấm)',
          '1 thìa canh tỏi băm nhuyễn & 1 thìa canh ớt hiểm băm nhuyễn',
        ],
      },
      {
        category: 'Mỡ hành, Đồ chua & Phụ liệu ăn kèm',
        items: [
          '500g bún tươi cọng nhỏ',
          '1 bó hành lá (thái nhỏ làm mỡ hành) & 3 thìa canh mỡ lợn sôi',
          '1 củ cà rốt & 1 củ củ cải trắng (bào sợi ngâm giấm đường)',
          '4 thìa canh đậu phộng rang giã dập',
          '100g giá đỗ tươi & 1 quả dưa leo (băm sợi dài)',
          'Rau sống ăn kèm: Xà lách, húng lủi, tía tía, rau thơm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Thái thịt mỏng & Ướp sốt sả mè mật ong thơm lừng',
        time: '15 phút (Ướp 1 - 2 giờ)',
        heat: 'Nhiệt độ phòng / Tủ lạnh',
        goal: 'Từng lát thịt ngấm sâu gia vị sả tỏi mật ong, mềm mọng béo ngậy',
        actionPoints: [
          'Thịt nạc vai rửa sạch với nước muối loãng, dùng khăn thấm thật khô ráo.',
          'Dùng dao sắc thái thịt thành lát mỏng vừa ăn (dày khoảng 0.5cm, không thái quá mỏng thịt sẽ bị khô xác khi nướng).',
          'Trộn hỗn hợp sốt ướp: Cho sả băm, tỏi băm, hành băm, 1 thìa canh mật ong, 1 thìa canh dầu hào, 1 thìa canh nước mắm, 1 thìa canh mỡ lợn, tiêu sọ và mè trắng rang vào tô.',
          'Cho thịt heo vào tô sốt bóp trộn thật đều tay trong 3 - 5 phút.',
          'Bọc màng bọc thực phẩm, cho vào ngăn mát tủ lạnh ướp ít nhất 1 - 2 giờ (hoặc ướp qua đêm cho thịt ngấm đẫm gia vị).',
        ],
        description:
          'Thái thịt nạc vai mỏng 0.5cm. Trộn sốt sả băm, tỏi, mật ong, dầu hào, nước mắm, mỡ lợn, mè rang ướp thịt 2 giờ.',
        tip: 'Cho 1 thìa canh mật ong và 1 thìa mỡ lợn vào sốt ướp giúp thịt khi nướng có màu vàng óng béo ngậy, giữ độ mọng nước tuyệt đối.',
      },
      {
        step: 2,
        title: 'Nướng thịt vàng ươm xém cạnh thơm phức',
        time: '15 phút',
        heat: 'Lửa than hoa / Nồi chiên 180°C',
        goal: 'Thịt nướng xém cạnh vàng óng rực rỡ, tỏa mùi thơm nức sả mè béo ngậy',
        actionPoints: [
          'Nướng than hoa (Ngon nhất): Xiên thịt vào que gỗ hoặc xếp lên vỉ nướng, đặt lên bếp than hồng. Nướng lật mặt liên tục 10 - 12 phút, thỉnh thoại phết thêm chút dầu mỡ lên mặt cho thịt không khô.',
          'Nướng nồi chiên không dầu: Bật nồi chiên 180°C làm nóng 3 phút. Lót giấy bạc, xếp thịt đều không chồng đè. Nướng 180°C trong 10 phút, lật mặt quết mỡ hành nướng tiếp 200°C trong 3 - 5 phút cho xém cạnh thơm phức.',
        ],
        description:
          'Nướng thịt trên than hoa lật đều tay 12 phút, hoặc nướng nồi chiên không dầu 180°C trong 10 phút, lật mặt nướng 200°C 4 phút xém cạnh.',
        tip: 'Quết một lớp mỡ hành nhẹ ở lượt nướng cuối giúp miếng thịt óng ả và dậy mùi thơm béo quyến rũ.',
      },
      {
        step: 3,
        title: 'Làm mỡ hành, đồ chua & Pha nước mắm tỏi ớt Nam Bộ',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Mỡ hành xanh mướt; Đồ chua giòn sần sật; Nước mắm chua ngọt thanh nhã tỏi ớt nổi bồng bồng',
        actionPoints: [
          'Làm mỡ hành: Hành lá thái nhỏ cho vào chén cùng 1/3 thìa cà phê muối & 1/2 thìa cà phê đường. Đun sôi 3 thìa canh mỡ lợn rồi dội trực tiếp vào chén hành lá khuấy đều.',
          'Làm đồ chua: Cà rốt & củ cải trắng bào sợi ngâm vào hỗn hợp 100ml giấm + 2 thìa canh đường + 1/2 thìa cà phê muối trong 20 phút cho giòn chua ngọt.',
          'Pha nước mắm Nam Bộ: Cho 16 thìa nước dừa tươi (hoặc nước ấm) + 4 thìa đường đun sôi nhẹ cho tan hoàn toàn, để nguội. Trút 4 thìa mắm nhĩ và 4 thìa nước cốt tắc vào khuấy đều. Cuối cùng trút tỏi băm & ớt hiểm băm nhuyễn vào cho nổi bồng bềnh.',
        ],
        description:
          'Dội mỡ lợn sôi vào chén hành lá làm mỡ hành. Ngâm cà rốt củ cải bào sợi giấm đường làm đồ chua. Pha nước mắm nhĩ nước dừa tươi tỏi ớt bồng bềnh.',
        tip: 'Dùng nước dừa tươi nấu nước mắm chua ngọt giúp vị ngọt sâu thanh mát nhã nhặn đúng điệu bún thịt nướng Sài Gòn.',
      },
      {
        step: 4,
        title: 'Trình bày tô bún thịt nướng & Thưởng thức',
        time: '5 phút',
        heat: 'Múc thưởng thức ngay',
        goal: 'Tô bún thịt nướng rực rỡ sắc màu, thịt nướng thơm nức quyện mỡ hành béo ngậy và nước mắm chua ngọt',
        actionPoints: [
          'Cho rau sống thái nhỏ (xà lách, rau thơm, giá đỗ, dưa leo băm sợi) xuống đáy tô lớn.',
          'Gắp bún tươi xếp đều lên trên rau.',
          'Xếp từng lát thịt nướng vàng ươm sả mè nghi ngút thơm, rưới mỡ hành bóng bẩy lên mặt.',
          'Gắp đồ chua giòn ngọt để một góc, rắc đậu phộng rang giã dập thơm bùi.',
          'Thưởng thức: Rưới ngập chén nước mắm tỏi ớt chua ngọt vào tô bún, trộn đều tay và thưởng thức từng gắp bún đậm đà ngập tràn hương vị!',
        ],
        description:
          'Xếp rau sống, bún tươi, thịt nướng thơm sả mè, mỡ hành, đồ chua và đậu phộng giã dập. Rưới nước mắm chua ngọt trộn đều thưởng thức.',
      },
    ],
    chefSecret:
      'Bí quyết làm nên tô bún thịt nướng ngon bất bại nằm ở 3 điểm vàng: Thứ nhất, thịt ướp bắt buộc có mật ong, sả băm nhuyễn và chút mỡ lợn để miếng thịt nướng than hoa/nồi chiên vừa xém cạnh thơm nức mà bên trong vẫn mềm mọng béo ngậy. Thứ hai, mỡ hành dội mỡ sôi trực tiếp giữ cọng hành xanh tươi óng ả. Thứ ba, nước mắm chua ngọt pha theo tỷ lệ 1 mắm : 1 đường : 1 nước cốt tắc : 4 nước dừa tươi đun tan, tạo nên hậu vị ngọt thanh dịu mát chuẩn vị ẩm thực Nam Bộ.',
    recommendedSauce:
      'Chén nước mắm tỏi ớt chua ngọt pha nước dừa tươi nổi bồng bồng & chén mỡ hành đậu phộng rang.',
  },
  'banh-canh-cua-gio-heo': {
    dishId: 'banh-canh-cua-gio-heo',
    dishName: 'Bánh Canh Cua Giò Heo Nước Dùng Béo',
    seoTitle: 'Cách Nấu Bánh Canh Cua Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    prepTime: '30 phút',
    cookTime: '60 phút',
    difficulty: 'Trung bình',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Thịt cua gỡ tươi & Gạch cua biển béo ngậy',
        items: [
          '300g thịt cua biển tươi gỡ sẵn (hoặc 2 con cua thịt hấp gỡ thịt)',
          '100g gạch cua biển (hoặc gạch cua đồng rang xào màu dầu điều)',
          '2 thìa canh màu dầu điều (tạo màu gạch cua đỏ óng ả chuẩn quán)',
          '1 thìa canh tỏi băm & 1 thìa canh hành tím băm',
          '1 thìa canh dầu hào & 1 thìa cà phê nước mắm nhĩ',
        ],
      },
      {
        category: 'Giò heo, Xương ống & Nước dùng thanh ngọt',
        items: [
          '600g giò heo khoanh (hoặc giò gân béo dẻo)',
          '500g xương ống heo hầm nước ngọt',
          '30g tôm khô ngâm nở mềm',
          '1 củ củ cải trắng & 1 củ hành tây nướng',
          '15g đường phèn, 2 thìa canh nước mắm ngon & 1.5 thìa canh hạt nêm',
          '4 thìa canh bột năng (pha nước rưới tạo độ sánh mịn cho nước dùng)',
        ],
      },
      {
        category: 'Sợi bánh canh, Topping & Phụ liệu dọn kèm',
        items: [
          '500g sợi bánh canh bột lọc (hoặc bột gạo dẻo)',
          '10 quả trứng cút luộc bóc vỏ',
          '150g chả cua (hoặc chả cá/chả tôm thái lát mỏng)',
          '1 bó hành lá, ngò rí & cọng hành chẻ tươi',
          '1 thìa cà phê tiêu sọ xay thơm nức',
          'Muối ớt xanh chanh & bánh quẩy giòn rụm ăn kèm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Chần sạch giò heo & Hầm nước dùng ngọt đậm đà',
        time: '20 phút',
        heat: 'Lửa lớn / Lửa nhỏ',
        goal: 'Nước hầm xương trong veo ngọt thanh tự nhiên từ giò heo, xương ống và tôm khô',
        actionPoints: [
          'Giò heo chặt khoanh tròn, xương ống rửa sạch. Đun nồi nước sôi với 1 nhánh gừng đập dập và 1 thìa cà phê muối hột, chần giò và xương trong 3 - 5 phút.',
          'Vớt giò và xương ra rửa lại thật sạch dưới vòi nước lạnh.',
          'Cho giò heo, xương ống và 30g tôm khô ngâm nở vào nồi cùng 2.5 lít nước sạch.',
          'Thả củ hành tây nướng và củ cải trắng cắt khúc vào đun sôi bùng, vớt sạch bọt.',
          'Hạ lửa nhỏ liu riu hầm trong 45 - 50 phút. Khi khoanh giò heo chín mềm vừa tới, vớt giò ra ngâm vào tô nước đá lạnh 5 phút rồi để ráo.',
        ],
        description:
          'Chần giò heo xương ống qua nước sôi gừng muối. Hầm với tôm khô, củ cải trắng và hành tây trong 45 phút lửa nhỏ lấy nước ngọt đậm đà.',
        tip: 'Cho thêm tôm khô ngâm nở vào hầm cùng xương ống giúp nước dùng bánh canh cua có vị ngọt sâu thanh mát mọng mọng đặc trưng.',
      },
      {
        step: 2,
        title: 'Xào thịt cua & Gạch cua rực rỡ màu dầu điều',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Thịt cua và gạch cua đậm đà ngấm gia vị, đỏ óng màu gạch điều thơm nức',
        actionPoints: [
          'Đun nóng chảo với 2 thìa canh màu dầu điều, phi thơm tỏi băm và hành tím băm nhuyễn.',
          'Cho gạch cua vào xào lướt 1 phút cho ngấu dầu thơm lừng.',
          'Trút toàn bộ thịt cua biển tươi vào xào lướt lửa vừa.',
          'Nêm 1 thìa canh dầu hào, 1 thìa cà phê nước mắm nhĩ và 1/2 thìa cà phê tiêu sọ xay.',
          'Đảo nhẹ tay trong 2 phút cho thịt cua ngấm đẫm gia vị và khoác màu đỏ gạch rực rỡ thì tắt bếp.',
        ],
        description:
          'Phi tỏi hành tím với màu dầu điều, cho gạch cua và thịt cua biển vào xào lướt với dầu hào, nước mắm nhĩ, tiêu sọ trong 2 phút.',
        tip: 'Xào lướt thịt cua với màu dầu điều trên lửa vừa giúp cua thơm lừng, săn chắc thịt và không bị nát hay ra nước.',
      },
      {
        step: 3,
        title: 'Nêm nếm & Rưới bột năng tạo độ sánh béo mịn',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Nước dùng bánh canh cua sánh nhẹ béo ngậy màu gạch đỏ óng ả thơm phức',
        actionPoints: [
          'Trút toàn bộ phần thịt cua xào dầu điều vào nồi nước hầm xương.',
          'Nêm gia vị: 15g đường phèn, 2 thìa canh nước mắm ngon, 1.5 thìa canh hạt nêm. Nêm nếm vừa vị ngọt thanh đậm đà.',
          'Hòa 4 thìa canh bột năng với 100ml nước lọc khuấy tan hoàn toàn.',
          'Vừa rưới từ từ chén nước bột năng vào nồi nước dùng đang sôi lăn tăn, vừa dùng vá khuấy đều tay theo một chiều đến khi nước dùng chuyển sang trạng thái **sánh nhẹ sánh mịn óng ả**.',
          'Trút 10 quả trứng cút luộc bóc vỏ và chả cua thái lát vào đun sôi thêm 2 phút cho thấm vị.',
        ],
        description:
          'Trút cua xào vào nồi nước hầm. Nêm đường phèn nước mắm hạt nêm. Rưới từ từ nước bột năng khuấy đều tạo độ sánh béo mịn.',
        tip: 'Rưới bột năng từ từ và khuấy đều tay giúp nước dùng sánh mịn mượt mà không bị vón cục hay quá đặc.',
      },
      {
        step: 4,
        title: 'Trình bày tô bánh canh cua bốc khói & Thưởng thức',
        time: '5 phút',
        heat: 'Múc thưởng thức nóng',
        goal: 'Tô bánh canh cua sánh ngậy rực rỡ sắc đỏ gạch, khoanh giò béo dẻo và thịt cua mọng ngọt',
        actionPoints: [
          'Trụng sợi bánh canh bột lọc qua nước sôi 2 phút rồi trút vào tô lớn.',
          'Xếp khoanh giò heo béo dẻo, gắp thịt cua xào rực rỡ, chả cua và 2 quả trứng cút lên mặt tô.',
          'Rắc hành lá ngò rí thái nhỏ, cọng hành chẻ và tiêu sọ xay thơm phức.',
          'Chan ngập nước dùng sánh mịn bốc khói ngù ngù màu gạch cua lên mặt.',
          'Thưởng thức: Xì xụp sợi bánh canh dẻo dai quyện nước dùng sánh béo đậm đà thịt cua, gắp khoanh giò chấm muối ớt xanh chanh cay nồng và chấm quẩy giòn rụm tuyệt hảo!',
        ],
        description:
          'Trụng bánh canh cho vào tô, xếp giò heo, thịt cua xào, chả cua, trứng cút, hành ngò tiêu. Chan nước dùng sánh mịn ăn kèm muối ớt xanh và quẩy.',
      },
    ],
    chefSecret:
      'Bí quyết nấu bánh canh cua ngon chuẩn quán Sài Gòn nằm ở 3 điểm tinh tế: Thứ nhất, nước dùng phải hầm xương ống giò heo kết hợp tôm khô ngâm nở và đường phèn tạo vị ngọt thanh mộc sâu lắng. Thứ hai, thịt cua phải xào lướt với màu dầu điều và hành tỏi phi cho săn thơm rực rỡ. Thứ ba, dùng bột năng pha loãng rưới từ từ vào nồi nước dùng khuấy một chiều tạo độ sánh mịn vừa phải, giữ nóng lâu và làm quyện chặt hương vị cua biển.',
    recommendedSauce:
      'Chén muối ớt xanh chanh cay nồng chấm giò heo & chén nước mắm tỏi ớt tươi xắt.',
  },
  'banh-khot-tom-vung-tau': {
    dishId: 'banh-khot-tom-vung-tau',
    dishName: 'Bánh Khọt Tôm Tươi Vũng Tàu',
    seoTitle: 'Cách Làm Bánh Khọt Vũng Tàu Tươi Ngon, Nước Chấm Chua Ngọt Chuẩn Vị',
    prepTime: '30 phút (ủ bột 30 phút)',
    cookTime: '20 phút',
    difficulty: 'Trung bình',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Pha bột bánh khọt giòn rụm béo ngậy',
        items: [
          '250g bột gạo lọc (hoặc bột bánh khọt pha sẵn)',
          '50g bột chiên giòn (giúp vỏ bánh giòn lâu xốp rụm)',
          '50g cơm nguội xay nhuyễn (bí quyết giòn tan không ngấm dầu)',
          '1/2 thìa cà phê bột nghệ (tạo màu vàng tươi bắt mắt)',
          '400ml nước ấm & 100ml nước cốt dừa thơm béo',
          '1/2 thìa cà phê muối & 2 cọng hành lá thái nhỏ',
        ],
      },
      {
        category: 'Nhân tôm tươi, Bột tôm cháy & Cốt dừa rưới',
        items: [
          '300g tôm thẻ/tôm đất tươi (bóc vỏ chừa đuôi, rút chỉ lưng)',
          '50g tôm khô ngâm mềm, giã nhuyễn rang khô làm bột tôm cháy đỏ rực',
          '100ml nước cốt dừa sánh đặc đun nhẹ với 1/3 thìa cà phê muối & chút bột năng',
          '2 thìa canh mỡ lợn (hoặc dầu ăn) để tráng khuôn bánh',
        ],
      },
      {
        category: 'Nước mắm chua ngọt, Đu đủ bào giòn & Rau sống',
        items: [
          '4 thìa canh nước mắm nhĩ ngon',
          '4 thìa canh đường cát vàng & 2 thìa canh giấm thanh',
          '12 thìa canh nước dừa tươi (hoặc nước ấm)',
          '1 thìa canh tỏi băm & 1 thìa canh ớt hiểm băm nhuyễn',
          '100g đu đủ xanh & cà rốt bào sợi ngâm giấm đường',
          'Rau sống thả ga: Xà lách, cải xanh, rau mơ, húng quế, đọt xoài/đọt đinh lăng',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Pha bột bánh khọt chuẩn tỷ lệ & Ủ bột giòn xốp',
        time: '15 phút (Ủ 30 phút)',
        heat: 'Nhiệt độ phòng',
        goal: 'Bột bánh khọt mịn màng, không vón cục, thơm béo vị dừa và nghệ vàng tươi',
        actionPoints: [
          'Cho 50g cơm nguội vào máy xay cùng 100ml nước ấm xay thật nhuyễn mịn.',
          'Trong tô lớn, trộn đều 250g bột gạo, 50g bột chiên giòn, 1/2 thìa cà phê bột nghệ và 1/2 thìa cà phê muối.',
          'Trút phần cơm nguội xay nhuyễn, 300ml nước ấm còn lại và 100ml nước cốt dừa vào tô bột.',
          'Dùng phới lồng khuấy đều tay cho bột tan hoàn toàn, lọc qua rây cho mịn mượt.',
          'Thêm hành lá thái nhỏ vào khuấy đều, bọc kín ủ bột trong 30 phút cho bột nở ngấu.',
        ],
        description:
          'Xay cơm nguội nhuyễn với nước ấm. Trộn bột gạo, bột chiên giòn, bột nghệ, muối, nước cốt dừa và cơm nguội xay. Lọc qua rây, thêm hành lá bọc kín ủ 30 phút.',
        tip: 'Bí quyết độc quyền của người Vũng Tàu: Thêm cơm nguội xay nhuyễn vào bột gạo giúp vỏ bánh khọt giòn xốp rụm cực kỳ đặc biệt mà không hề bị ngấm dầu hay dai cứng.',
      },
      {
        step: 2,
        title: 'Sơ chế tôm tươi, Làm bột tôm cháy & Đun cốt dừa',
        time: '15 phút',
        heat: 'Lửa nhỏ',
        goal: 'Tôm tươi mọng ngọt, bột tôm cháy đỏ rực tơi xốp, nước cốt dừa sánh béo',
        actionPoints: [
          'Tôm tươi rửa sạch bóc vỏ, chừa lại đuôi tôm cho đẹp mắt. Ướp tôm với 1/2 thìa cà phê hạt nêm và chút tiêu sọ trong 10 phút.',
          'Làm bột tôm cháy: Tôm khô ngâm nước ấm 15 phút cho mềm, vớt ra giã thật nhuyễn. Cho tôm giã vào chảo khô đảo đều trên lửa nhỏ cho đến khi tôm khô tơi xốp và chuyển màu đỏ gạch rực rỡ.',
          'Đun nước cốt dừa rưới bánh: Cho 100ml nước cốt dừa + 1/3 thìa cà phê muối + 1/2 thìa cà phê bột năng pha chút nước vào nồi nhỏ. Đun nhỏ lửa vừa khuấy đều đến khi cốt dừa sánh mịn nhẹ thì tắt bếp.',
        ],
        description:
          'Tôm bóc vỏ chừa đuôi ướp tiêu hạt nêm. Giã nhuyễn tôm khô đã ngâm rồi rang tơi khô làm bột tôm cháy. Đun sánh 100ml nước cốt dừa với chút bột năng muối.',
        tip: 'Rang tôm khô giã nhuyễn trên lửa nhỏ đến khi tơi xốp giúp bánh khọt có lớp tôm cháy đỏ au thơm nức mũi chuẩn vị Vũng Tàu.',
      },
      {
        step: 3,
        title: 'Pha nước mắm chua ngọt & Ngâm đu đủ dưa leo giòn',
        time: '10 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Nước mắm chua ngọt thanh mát vừa vặn, tỏi ớt bồng bềnh, đu đủ bào giòn sần sật',
        actionPoints: [
          'Làm đu đủ ngâm: Đu đủ xanh & cà rốt bào sợi mỏng, bóp nhẹ với chút muối xả sạch. Ngâm vào chén giấm đường tỷ lệ 1 giấm : 1 đường trong 15 phút cho giòn ngọt.',
          'Pha nước mắm: Hòa tan 12 thìa nước dừa tươi + 4 thìa đường cát vàng. Thêm 4 thìa nước mắm nhĩ ngon và 2 thìa giấm thanh khuấy đều.',
          'Trút tỏi băm & ớt hiểm băm vào khuấy nhẹ cho tỏi ớt nổi đẹp mắt trên mặt nước mắm.',
        ],
        description:
          'Bào sợi đu đủ cà rốt ngâm giấm đường. Pha nước dừa tươi, đường, nước mắm nhĩ, giấm thanh rồi trút tỏi ớt băm vào bồng bềnh.',
        tip: 'Dùng nước dừa tươi pha nước mắm giúp vị mặn ngọt chua nhẹ đằm thắm thanh nhã, ăn kèm bánh khọt không bị ngấy.',
      },
      {
        step: 4,
        title: 'Đổ bánh khọt giòn rụm, Rưới cốt dừa & Thưởng thức',
        time: '15 phút',
        heat: 'Lửa vừa',
        goal: 'Chiếc bánh khọt tròn trịa viền vàng xém giòn tan, tôm đỏ mọng rưới cốt dừa béo bùi',
        actionPoints: [
          'Đặt khuôn bánh khọt lên bếp, múc mỡ lợn (hoặc dầu ăn) vào từng hố khuôn đun nóng bùng.',
          'Khuấy đều tô bột, múc 2/3 hố bột rưới vào từng hố khuôn (bột sẽ kêu xèo xèo vui tai).',
          'Đặt 1 con tôm tươi vào chính giữa tâm bánh. Đậy nắp khuôn lại đun lửa vừa trong 2 - 3 phút cho bột chín trong và viền bánh bắt đầu vàng giòn.',
          'Mở nắp, rưới 1 thìa cà phê nước cốt dừa béo và rắc bột tôm cháy đỏ rực lên trên mặt tôm.',
          'Rưới thêm chút mỡ quanh viền khuôn, đun thêm 1 phút cho viền bánh khọt giòn rụm xém cạnh rực rỡ.',
        ],
        description:
          'Đun nóng mỡ trong khuôn bánh khọt. Múc bột rưới vào khuôn, đặt tôm tươi ở giữa đậy nắp 3 phút. Mở nắp rưới cốt dừa, rắc bột tôm cháy nướng giòn rụm.',
        tip: 'Mở nắp rưới thêm chút mỡ quanh viền ở phút cuối giúp rìa bánh khọt giòn tan xốp rụm rứt ra dễ dàng.',
      },
    ],
    chefSecret:
      'Bí quyết làm bánh khọt Vũng Tàu ngon nức tiếng nằm ở 3 điểm nghệ thuật: Thứ nhất, pha bột gạo có thêm chút bột chiên giòn và cơm nguội xay nhuyễn giúp vỏ bánh giòn tan xốp rụm kiệt dầu. Thứ hai, điểm nhấn không thể thiếu là lớp bột tôm cháy đỏ au quyện thìa nước cốt dừa béo ngậy rưới lên mặt bánh trước khi nhấc ra. Thứ ba, trải lá cải xanh, xà lách và rau mơ, đặt chiếc bánh khọt nóng hổi vào giữa cuộn tròn lại, chấm ngập chén nước mắm chua ngọt kèm đu đủ giòn sần sật bùng nổ vị giác!',
    recommendedSauce:
      'Chén nước mắm chua ngọt đu đủ bào sợi giòn tan & chén nước cốt dừa đun béo ngậy.',
  },
  'bo-ne-chao-gang': {
    dishId: 'bo-ne-chao-gang',
    dishName: 'Bò Né Chảo Gang',
    seoTitle: 'Cách Làm Bò Né Chảo Gang Mềm Mọng, Bơ Tỏi Pate Chuẩn Vị Sài Gòn',
    prepTime: '20 phút',
    cookTime: '10 phút',
    totalTime: '30 phút',
    servings: '2 - 4 người',
    difficulty: 'Dễ',
    calories: '550 - 680 kcal/phần',
    ingredients: [
      {
        category: 'Thịt bò & Topping chảo gang',
        items: [
          '400g thịt bò thăn ngoại (fillet / thăn bò mềm mọng)',
          '4 quả trứng gà tươi',
          '100g pate gan heo/bò béo ngậy',
          '50g bơ lạt (hoặc bơ Tường An thơm)',
          '150g xíu mại sốt cà chua (hoặc xúc xích xông khói)',
          '1 củ hành tây thái múi cau mỏng',
        ],
      },
      {
        category: 'Gia vị ướp bò mềm mọng',
        items: [
          '1 muỗng canh nước tương (xì dầu)',
          '1 muỗng cà phê dầu hào',
          '1 muỗng cà phê mật ong',
          '1/2 muỗng cà phê bột năng (giúp thịt mềm mọng khóa nước)',
          '1 muỗng canh tỏi băm & hành tím băm',
          'Dầu ăn, tiêu xay, chút muối vừa đủ',
        ],
      },
      {
        category: 'Bánh mì & Rau ăn kèm',
        items: [
          '4 ổ bánh mì đặc ruột nướng giòn rụm',
          '1 đĩa rau ăn kèm: Xà lách, dưa leo, cà chua, ngò rí tươi mát',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế & Ướp thịt bò mềm mọng (Bí quyết bột năng & dầu ăn)',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Thịt bò thấm vị đằm thắm, giữ trọn độ ngọt dẻo mềm mọng tuyệt đối không bị khô',
        actionPoints: [
          'Thịt bò thăn rửa sạch, dùng khăn giấy thấm khô nước. Thái lát mỏng bản to dày chừng 0.8cm - 1cm.',
          'Dùng búa đập thịt đập nhẹ lên hai mặt miếng bò cho các thớ cơ mềm ra.',
          'Cho bò vào tô, ướp với 1 muỗng canh tỏi hành băm + 1 muỗng canh nước tương + 1 muỗng cà phê dầu hàu + 1 muỗng cà phê mật ong + 1/2 muỗng cà phê tiêu xay + 1 muỗng cà phê dầu ăn + 1/2 muỗng cà phê bột năng.',
          'Trộn đều nhẹ tay và bọc kín ngâm ướp trong 15 - 20 phút cho gia vị ngấm sâu.',
        ],
        description:
          'Thái thịt bò lát mỏng bản to đập nhẹ mềm thớ. Ướp nước tương, dầu hàu, mật ong, tiêu, dầu ăn và chút bột năng ngâm 20 phút.',
        tip: 'Cho một ít bột năng và dầu ăn vào tô ướp thịt bò giúp khóa chặt nước ngọt bên trong, khi nướng xèo xèo thịt bò cực kỳ dẻo mềm và mọng nước.',
      },
      {
        step: 2,
        title: 'Sơ chế rau ăn kèm, làm nước tương tỏi ớt & Đốt nóng chảo gang',
        time: '10 phút',
        heat: 'Lửa lớn',
        goal: 'Rau củ tươi giòn thanh mát, nước tương đậm đà, chảo gang con bò bốc khói nóng bừng',
        actionPoints: [
          'Hành tây lột vỏ cắt khoanh tròn mỏng. Dưa leo & cà chua rửa sạch thái lát mỏng. Xà lách & ngò rí nhặt rửa sạch để ráo.',
          'Pha nước tương chấm bánh mì: Cho 3 muỗng canh nước tương + 1 muỗng cà phê đường + 1 muỗng cà phê giấm thanh khuấy tan, thêm tỏi ớt băm.',
          'Đặt chảo gang con bò (hoặc chảo đáy dày) lên bếp nướng đun lửa lớn thật nóng cho chảo bốc khói nhẹ.',
        ],
        description:
          'Cắt khoanh hành tây, xắt lát dưa leo cà chua. Pha nước tương tỏi ớt chua ngọt nhẹ. Đốt nóng chảo gang con bò trên lửa lớn.',
        tip: 'Chảo gang phải thật nóng trước khi cho bơ và thịt bò vào thì khi chế biến miếng thịt bò mới né dầu xèo xèo thơm nức.',
      },
      {
        step: 3,
        title: 'Nướng xèo xèo Bò Né trên chảo gang con bò',
        time: '3 phút',
        heat: 'Lửa lớn',
        goal: 'Miếng thịt bò xém cạnh bơ tỏi thơm lừng, bên trong hồng hào mọng nước',
        actionPoints: [
          'Cho 1 muỗng canh bơ lạt vào chảo gang nóng đun tan chảy bọt bơ thơm nức.',
          'Thả các khoanh hành tây vào đảo nhanh, sau đó nhanh tay xếp các lát thịt bò đã ướp vào chảo gang (nghe tiếng xèo xèo giòn giã).',
          'Trở mặt thịt bò nhanh tay trong 1 - 2 phút cho thịt bò vừa chín tới hồng đào xém cạnh bơ tỏi.',
        ],
        description:
          'Thả bơ lạt tan chảy thơm lừng chảo gang. Cho hành tây và xếp thịt bò vào xèo xèo lật nhanh mặt chín tới.',
        tip: 'Không nướng thịt bò quá lâu trên chảo gang để giữ miếng bò mềm mượt mọng nước, không bị dai cứng.',
      },
      {
        step: 4,
        title: 'Thêm trứng ốp la, pate, xíu mại & Thưởng thức nóng hổi',
        time: '2 phút',
        heat: 'Lửa vừa',
        goal: 'Chảo Bò Né bốc khói ngun ngút, trứng lòng đào béo ngậy, pate đượm bơ thơm lừng',
        actionPoints: [
          'Gạt nhẹ thịt bò sang một bên chảo, đập 1 - 2 quả trứng gà tươi vào góc chảo gang.',
          'Múc 1 muỗng pate béo bùi và 1 viên xíu mại sốt cà chua đặt bên cạnh. Rắc chút tiêu xay và hành lá thái nhỏ.',
          'Tắt bếp, nhấc chảo gang con bò còn xèo xèo bốc khói ra lót đĩa gỗ phục vụ ngay lập tức.',
        ],
        description:
          'Đập trứng gà vào chảo, thêm pate béo ngậy và viên xíu mại. Rắc tiêu hành lá rồi nhấc chảo gang xèo xèo thưởng thức ngay.',
        tip: 'Xé miếng bánh mì giòn rụm chấm ngập vào lòng đào trứng gà béo ngậy hòa quyện bơ pate và xì dầu, gắp miếng thịt bò mềm tan mọng nước.',
      },
    ],
    chefSecret:
      'Bí quyết làm Bò Né chảo gang ngon chuẩn quán Sài Gòn nằm ở 3 điểm nghệ thuật: Thứ nhất, thịt bò thăn ngoại phải đập nhẹ và ướp thêm chút bột năng cùng dầu ăn để giữ trọn độ mọng nước mềm tan. Thứ hai, chảo gang phải đốt thật nóng cho bốc khói trước khi thả bơ thơm lừng và thịt bò vào xèo xèo (thịt né dầu vừa chín tới hồng đào). Thứ ba, ăn ngay khi chảo gang còn nóng hổi, xé bánh mì đặc ruột giòn rụm quết trọn lòng đào trứng gà béo ngậy, pate bùi bùi và đĩa dưa leo cà chua giải ngấy cực kỳ bắt vị!',
    recommendedSauce:
      'Chén nước tương tỏi ớt đằm thắm & chén tương ớt cay nồng đậm đà.',
  },
  'canh-bun-rau-muong': {
    dishId: 'canh-bun-rau-muong',
    dishName: 'Canh Bún Rau Muống Cua Đồng',
    seoTitle: 'Cách Nấu Canh Bún Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    prepTime: '30 phút',
    cookTime: '45 phút',
    totalTime: '75 phút',
    servings: '4 - 6 người',
    difficulty: 'Trung bình',
    calories: '500 - 620 kcal/bát',
    ingredients: [
      {
        category: 'Nước dùng & Riêu cua đồng tươi béo ngậy',
        items: [
          '500g cua đồng tươi (rửa sạch, giã/xay lọc lấy 1.8 - 2 lít nước cốt cua)',
          '500g xương ống heo (hầm 1 giờ lấy nước dùng ngọt thanh base)',
          '150g thịt heo xay nhuyễn & 1 quả trứng gà tươi (cho vào gạch cua đóng mảng riêu chắc béo)',
          '50g tôm khô ngâm nở mềm (giã dập đun cùng nước hầm xương)',
          '3 - 4 quả cà chua chín đỏ (cắt múi cau xào xơ màu dầu điều)',
          '3 thìa canh màu dầu điều (tạo màu đỏ cam óng ả chuẩn canh bún Sài Gòn)',
        ],
      },
      {
        category: 'Sợi bún to, Rau ăn kèm & Topping đặc trưng',
        items: [
          '1kg bún tươi cọng to (loại chuyên dùng nấu canh bún / bún riêu cọng to)',
          '1 bó rau muống cọng giòn (nhặt lá, cắt khúc luộc xanh tươi)',
          '1 bó rau nhút (nhặt lấy phần non luộc kèm rau muống)',
          '200g huyết heo luộc (cắt khối vuông vừa ăn)',
          '150g chả lụa hoặc chả cây / chả cua',
          '100g tóp mỡ giòn rụm & hành phi vàng thơm',
        ],
      },
      {
        category: 'Gia vị nêm nếm & Nước chấm dọn kèm',
        items: [
          '2 thìa canh mắm tôm ngon (loại mắm tôm Bắc hoặc mắm tôm đằm vị)',
          '1.5 thìa canh đường phèn & 2 thìa canh nước mắm nhĩ',
          '1.5 thìa canh hạt nêm & 1/2 thìa cà phê muối tinh',
          '1 chén nước cốt me ngào (hoặc chanh tươi, tắc trái)',
          'Ớt sa tế xào cay nồng & ớt tươi cắt lát',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Giã lọc cua đồng & Nấu mảng riêu cua béo ngậy',
        time: '20 phút',
        heat: 'Lửa vừa',
        goal: 'Mảng riêu cua đồng đóng khối chắc chắn, nổi bồng bồng thơm lừng béo ngậy',
        actionPoints: [
          'Cua đồng rửa sạch, bóc mai khêu gạch để riêng. Phần thân cua đem giã nhuyễn hoặc xay với chút muối, thêm 1.8 lít nước lọc khuấy đều rồi lọc qua rây 2 - 3 lần lấy nước cốt.',
          'Đổ nước cốt cua vào nồi, thêm 1/2 thìa cà phê muối khuấy đều theo 1 chiều. Bắc nồi lên bếp đun lửa vừa - nhỏ (không đậy nắp).',
          'Khi nước cua bắt đầu nóng, riêu cua đóng mảng nổi lên mặt nồi thì hạ lửa thật nhỏ. Vớt cẩn thận mảng riêu cua ra bát.',
          'Mẹo làm riêu cua chắc giòn: Trộn mảng riêu cua vừa vớt với 150g thịt xay, 1 quả trứng gà, chút tiêu và mắm tôm, đem hấp chín 15 phút thành bánh riêu cua đĩa cắt miếng.',
        ],
        description:
          'Giã nhuyễn cua đồng lọc nước cốt. Nấu lửa vừa cho mảng riêu cua đóng khối nổi bồng bồng rồi vớt ra hấp cùng thịt và trứng.',
        tip: 'Khi đun nước cua không đảo mạnh tay làm vỡ mảng riêu. Giữ lửa nhỏ vừa đủ để riêu đóng tảng chắc chắn.',
      },
      {
        step: 2,
        title: 'Ninh nước dùng xương ngọt thanh & Xào màu cà chua dầu điều',
        time: '35 phút',
        heat: 'Lửa nhỏ',
        goal: 'Nước dùng canh bún ngọt đậm đà từ xương & tôm khô, ngả màu đỏ cam óng ả',
        actionPoints: [
          'Xương ống heo chần qua nước sôi rửa sạch, cho vào nồi ninh cùng 1.5 lít nước và 50g tôm khô ngâm nở trong 40 phút.',
          'Lọc nước hầm xương vào nồi nước cua đồng ở Bước 1. Cho 2 thìa canh mắm tôm đã hòa tan lọc cặn vào nồi nước dùng.',
          'Phi thơm hành tím băm với 3 thìa canh màu dầu điều, cho phần gạch cua khêu ban đầu vào xào thơm 1 phút. Tiếp tục cho cà chua cắt múi cau vào đảo nhẹ tay cho vừa chín tới.',
          'Trút toàn bộ cà chua xào dầu điều gạch cua vào nồi nước dùng. Nêm 1.5 thìa canh đường phèn, 2 thìa canh nước mắm, 1.5 thìa canh hạt nêm.',
        ],
        description:
          'Ninh xương ống heo với tôm khô, hòa cùng nước nồi cua. Phi thơm gạch cua và cà chua với màu dầu điều rồi trút vào nồi nước dùng nêm vừa ăn.',
        tip: 'Mắm tôm giúp nước dùng Canh Bún thơm đằm thắm đặc trưng, nên hòa mắm tôm với chút nước dùng lắng cặn trước khi chắt vào nồi.',
      },
      {
        step: 3,
        title: 'Luộc rau muống giòn xanh & Trụng bún cọng to nhuộm màu nước lèo',
        time: '10 phút',
        heat: 'Lửa lớn',
        goal: 'Sợi bún cọng to thấm đẫm nước lèo đỏ cam, rau muống xanh mướt giòn sần sật',
        actionPoints: [
          'Đun nồi nước sôi thêm 1 thìa cà phê muối và chút dầu ăn. Cho rau muống cắt khúc và rau nhút vào luộc chín tới rồi vớt ngay ra thau nước đá lạnh để giữ màu xanh giòn sần sật.',
          'Sợi bún cọng to chần qua nước sôi rồi thả thẳng vào nồi nước dùng canh bún đun liu riu khoảng 5 - 10 phút.',
          'Cho bún hút nhẹ màu dầu điều đỏ au và đượm vị ngọt thanh của nước lèo cua đồng.',
        ],
        description:
          'Luộc rau muống giòn xanh vớt ra thau đá. Trụng bún cọng to vào nồi nước dùng cho bún thấm vị và ngả màu hồng cam đẹp mắt.',
        tip: 'Điểm khác biệt của Canh Bún là sợi bún cọng to được đun nhuộm nhẹ trong nồi nước lèo màu dầu điều giúp sợi bún đậm đà không bị nhạt.',
      },
      {
        step: 4,
        title: 'Múc Canh Bún ra tô & Thưởng thức chuẩn vị Sài Gòn',
        time: '5 phút',
        heat: 'Ăn nóng',
        goal: 'Tô Canh Bún nóng hổi rực rỡ sắc màu, vị ngọt thanh đằm thắm quyện mắm tôm me chua',
        actionPoints: [
          'Dùng vá múc sợi bún cọng to ngấm màu đỏ cam ra tô lớn.',
          'Xếp lên mặt tô: 1 miếng bánh riêu cua hấp béo ngậy, vài miếng huyết heo luộc, chả lụa thái lát, cà chua múi cau và rau muống luộc xanh mướt.',
          'Chan nước dùng canh bún nóng hổi ngập mặt tô bún. Rắc thêm tóp mỡ giòn rụm, hành phi vàng thơm và chút tiêu xay.',
          'Phục vụ ăn kèm chén mắm tôm đánh chanh/me tươi, ớt sa tế cay nồng và đĩa rau muống bổ sung.',
        ],
        description:
          'Gắp bún cọng to ra tô, bày riêu cua, huyết heo, chả lụa, cà chua và rau muống luộc. Chan nước dùng nóng hổi, rắc tóp mỡ hành phi.',
        tip: 'Khi ăn thêm 1 muỗng cà phê mắm tôm và muỗng nước cốt me chua nhẹ vào tô bún rồi khuấy đều, húp muỗng nước lèo nóng hổi ngập tràn hương vị.',
      },
    ],
    chefSecret:
      'Bí quyết nấu Canh Bún nước dùng thanh ngọt chuẩn vị gia đình nằm ở 4 bí mật ẩm thực: Thứ nhất, nước dùng kết hợp giữa nước cốt cua đồng giã tay tươi ngọt và nước hầm xương ống cùng tôm khô. Thứ hai, mảng riêu cua vớt ra trộn thịt xay và trứng gà đem hấp để khi cắt từng miếng chắc béo giòn ngậy không bị rã. Thứ ba, sợi bún cọng to phải được thả trụng trực tiếp trong nồi nước lèo màu dầu điều cho bún ngấm sắc đỏ hồng cam và đượm vị thanh ngọt. Thứ tư, rau muống luộc giòn xanh ngắt kết hợp chén mắm tôm đánh me chua cay nồng chính là linh hồn không thể lẫn của bát Canh Bún Sài Gòn!',
    recommendedSauce:
      'Chén mắm tôm ngon đánh cốt me chua cay nồng & đĩa ớt sa tế dầu điều rực rỡ.',
  },
  'banh-uot': {
    dishId: 'banh-uot',
    dishName: 'Bánh Ướt Chả Lụa Nước Chấm Chua Ngọt',
    seoTitle: 'Cách Làm Bánh Ướt Tươi Ngon, Nước Chấm Chua Ngọt Chuẩn Vị',
    prepTime: '25 phút',
    cookTime: '20 phút',
    totalTime: '45 phút',
    servings: '4 - 5 người',
    difficulty: 'Dễ',
    calories: '420 - 520 kcal/đĩa',
    ingredients: [
      {
        category: 'Bột tráng bánh ướt mỏng mềm dai nhẹ',
        items: [
          '200g bột gạo lọc mịn thơm (loại bột gạo ngon chuyên làm bánh)',
          '60g bột năng (tạo độ dai nhẹ, bóng mướt cho lá bánh không bị bở)',
          '15g tinh bột khoai mì hoặc bột sắn dây (giúp bánh trong bóng)',
          '650ml nước lọc nguội (tỷ lệ chuẩn giúp lá bánh mỏng tang mềm mướt)',
          '1/2 thìa cà phê muối tinh & 1.5 thìa canh dầu ăn',
        ],
      },
      {
        category: 'Chả lụa, nem chua & Topping ăn kèm',
        items: [
          '250g chả lụa dẻo thơm (cắt lát mỏng vừa ăn)',
          '150g chả quế hoặc nem chua (cắt miếng)',
          '100g dăm bông hoặc bánh tôm chiên giòn rụm',
          '100g mỡ hành & hành phi vàng rụm giòn thơm',
          '200g giá đỗ tươi (trụng sơ giữ độ giòn ngọt)',
          'Rau thơm: Húng quế, húng cây, dưa leo cắt sợi mỏng',
        ],
      },
      {
        category: 'Nước mắm tỏi ớt chua ngọt tỏi băm nổi bồng bồng',
        items: [
          '4 thìa canh nước mắm nhĩ ngon (loại 40 độ đạm)',
          '5 thìa canh đường cát vàng (tạo độ ngọt thanh hậu)',
          '12 thìa canh nước ấm (150ml - 180ml nước)',
          '2.5 thìa canh nước cốt chanh tươi hoặc tắc',
          '2 thìa canh tỏi & ớt chỉ thiên băm thật nhuyễn',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Pha bột tráng bánh ướt chuẩn tỷ lệ & Ủ bột lắng nước',
        time: '30 phút (ủ bột)',
        heat: 'Nhiệt độ phòng',
        goal: 'Bột tan mịn hoàn toàn, chắt nước trong giúp bánh mỏng mướt không nồng mùi bột',
        actionPoints: [
          'Hoà tan 200g bột gạo lọc, 60g bột năng, 15g tinh bột khoai mì và 1/2 thìa cà phê muối với 650ml nước lọc. Khuấy đều tay cho bột tan hoàn toàn không vón cục.',
          'Bí quyết giúp bánh mỏng mướt không nồng mùi bột: Để thau bột nghỉ 30 - 45 phút cho bột lắng đọng xuống đáy.',
          'Dùng vá chắt bỏ phần nước trong nổi lên bề mặt thau bột, sau đó đong bù lại đúng lượng nước ấm bằng phần nước trong vừa chắt ra.',
          'Khuấy nhẹ đều tay cho bột hòa quyện trở lại, thêm 1.5 thìa canh dầu ăn khuấy đều (dầu ăn giúp bột bánh không dính chảo và bóng mướt).',
        ],
        description:
          'Pha bột gạo lọc với bột năng và muối. Ủ bột nghỉ 30 phút, chắt bỏ nước trong nổi lên bề mặt rồi bù lại đúng lượng nước ấm và dầu ăn khuấy đều.',
        tip: 'Kỹ thuật lắng nước chắt phần nước trong đong lại nước ấm là bí quyết truyền thống giúp lá bánh ướt dẻo dai tự nhiên, trong bóng và tuyệt đối không bị nồng mùi bột gạo.',
      },
      {
        step: 2,
        title: 'Tráng lá bánh ướt mỏng tang mướt mịn bằng chảo chống dính',
        time: '15 phút',
        heat: 'Lửa nhỏ vừa',
        goal: 'Lá bánh ướt mỏng tang, trong suốt, mềm mướt, phết mỡ hành không dính nhau',
        actionPoints: [
          'Đun nóng chảo chống dính đáy phẳng trên lửa nhỏ vừa. Dùng cọ phết một lớp dầu ăn thật mỏng (hoặc thấm dầu vào giấy mỏng lau đều mặt chảo).',
          'Khuấy lại thau bột trước khi múc. Múc 1 vá bột đổ vào giữa chảo, nhanh tay cầm cán chảo xoay tròn nghiêng đều cho bột tráng thành một lớp thật mỏng tang phẳng đẹp.',
          'Đậy nắp chảo lại, đun lửa nhỏ trong 30 - 40 giây. Khi lá bánh chuyển sang màu trong suốt, chín tới thì mở nắp.',
          'Úp nhẹ chảo ngược lên mâm hoặc đĩa lớn đã phết sẵn lớp dầu mỡ hành. Dùng cọ phết ngay một lớp mỡ hành phi thơm lên mặt lá bánh để bánh dẻo mướt và không bị dính vào lá bánh tiếp theo. Lần lượt tráng hết phần bột còn lại.',
        ],
        description:
          'Múc bột tráng mỏng trên chảo chống dính, đậy nắp 30 - 40 giây cho bánh chín trong. Úp bánh ra đĩa phết mỡ hành phi thơm.',
        tip: 'Mỗi lần múc bột tráng bánh phải khuấy đều thau bột vì bột gạo rất dễ lắng xuống đáy. Giữ lửa nhỏ vừa để lá bánh chín hơi trong suốt không bị cháy chân.',
      },
      {
        step: 3,
        title: 'Pha nước mắm tỏi ớt chua ngọt nổi bồng bồng',
        time: '10 phút',
        heat: 'Nước ấm',
        goal: 'Chén nước mắm màu hổ phách sóng sánh, vị chua ngọt đằm thắm, tỏi ớt băm nổi 100% rực rỡ',
        actionPoints: [
          'Cho 5 thìa canh đường cát vàng và 12 thìa canh nước ấm vào tô lớn, khuấy đến khi đường tan hoàn toàn.',
          'Thêm 4 thìa canh nước mắm nhĩ ngon và 2.5 thìa canh nước cốt chanh tươi, khuấy đều nêm nếm vừa vị chua ngọt thanh dịu, hậu vị đằm thắm.',
          'Tỏi băm nhuyễn và ớt chỉ thiên băm nhuyễn (chú ý tỏi ớt băm khô ráo).',
          'Thả tỏi ớt băm nhuyễn vào tô nước mắm đã pha hoàn chỉnh. Nhờ nước mắm đã nguội và tỏi ớt băm nhuyễn khô, tỏi ớt sẽ nổi bồng bồng trên bề mặt vô cùng đẹp mắt.',
        ],
        description:
          'Khuấy tan đường vàng với nước ấm, thêm nước mắm nhĩ và nước cốt chanh. Thả tỏi ớt băm nhuyễn vào sau cùng để nổi bồng bồng trên mặt bát nước chấm.',
        tip: 'Muốn tỏi ớt nổi bồng bồng: Tỏi ớt phải băm khô (không bị dập nát tiết nước) và chỉ cho vào sau cùng khi tô nước mắm đường chanh đã hòa tan hoàn chỉnh.',
      },
      {
        step: 4,
        title: 'Bày đĩa Bánh Ướt & Thưởng thức chuẩn vị truyền thống',
        time: '5 phút',
        heat: 'Thưởng thức tươi mát',
        goal: 'Đĩa Bánh Ướt rực rỡ sắc màu, lá bánh mềm mướt quyện chả dẻo thơm và nước mắm chua ngọt siêu cuốn',
        actionPoints: [
          'Xếp gấp nếp từng lá bánh ướt mềm mướt ra đĩa (hoặc cắt khúc dài 5 - 7cm).',
          'Bày lên mặt bánh: Chả lụa thái lát mỏng, chả quế, nem chua, dăm bông, giá đỗ trụng giòn, dưa leo cắt sợi và rau thơm thái nhỏ.',
          'Rắc hành phi vàng rụm béo ngậy và chút mỡ hành lá xanh mướt lên khắp đĩa bánh.',
          'Dọn kèm chén nước mắm chua ngọt tỏi ớt rực rỡ. Khi ăn rưới đẫm nước mắm chua ngọt lên bánh, trộn nhẹ và thưởng thức!',
        ],
        description:
          'Gắp bánh ướt ra đĩa, bày chả lụa, nem chua, chả quế, giá trụng và dưa leo sợi. Rắc hành phi, mỡ hành. Rưới nước mắm tỏi ớt chua ngọt đằm thắm thưởng thức.',
        tip: 'Bánh Ướt tráng tươi ăn ngay trong ngày khi lá bánh còn dẻo mướt béo mỡ hành, kết hợp giá đỗ giòn ngọt và miếng chả lụa dẻo thơm mang đến trải nghiệm ẩm thực trọn vẹn.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm nên đĩa Bánh Ướt tươi ngon, nước chấm chua ngọt chuẩn vị: 1. Pha bột theo tỷ lệ 200g bột gạo : 60g bột năng : 15g tinh bột khoai mì và ủ lắng chắt nước trong giúp lá bánh mềm mướt, dai nhẹ tự nhiên; 2. Tráng bánh chảo chống dính lửa nhỏ, phết mỡ hành ngay khi vừa lấy lá bánh ra đĩa; 3. Nước mắm tỏi ớt pha chuẩn tỷ lệ vàng mắm - đường - nước - chanh với tỏi ớt băm nhuyễn thả sau cùng giúp nước chấm chua ngọt đậm đà, tỏi ớt nổi bồng bồng vô cùng hấp dẫn.',
    recommendedSauce:
      'Chén nước mắm tỏi ớt chua ngọt tỏi băm nổi bồng bồng đằm thắm, ăn kèm chả lụa, nem chua, giá trụng & hành phi giòn rụm.',
  },
  'bun-mang-vit': {
    dishId: 'bun-mang-vit',
    dishName: 'Bún Măng Vịt Chấm Nước Mắm Gừng',
    seoTitle: 'Cách Nấu Bún Măng Vịt Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    prepTime: '30 phút',
    cookTime: '45 phút',
    totalTime: '75 phút',
    servings: '4 - 6 người',
    difficulty: 'Trung bình',
    calories: '550 - 650 kcal/bát',
    ingredients: [
      {
        category: 'Thịt vịt tươi & Gia vị khử mùi hôi',
        items: [
          '1 con vịt cỏ hoặc vịt xiêm tươi ngon (1.8kg - 2.2kg, đã làm sạch lông)',
          '1 củ gừng lớn & 100ml rượu trắng (dùng chà xát khử sạch hôi vịt)',
          '1 củ hành tây & 3 - 4 củ hành tím (nướng thơm)',
          '1 củ cải trắng (cắt khúc ninh nước dùng ngọt thanh)',
          '300g tiết vịt luộc (cắt khối vuông vừa ăn)',
          'Bộ lòng mề vịt (làm sạch, luộc chín cắt miếng)',
        ],
      },
      {
        category: 'Măng tươi/khô & Bún ăn kèm',
        items: [
          '500g măng tươi (măng nứa/măng củ, tước sợi hoặc cắt lát) (hoặc 150g măng khô ngâm nở mềm xé sợi)',
          '1kg bún tươi cọng vừa (chần nước sôi ráo nước)',
          '2 thìa canh màu dầu điều (cho măng xào màu vàng óng)',
          'Rau ăn kèm: Rau răm, hành lá, ngò gai, giá đỗ tươi',
          '300g bắp cải bào sợi mỏng & 1 củ cà rốt thái sợi (làm gỏi vịt ăn kèm)',
        ],
      },
      {
        category: 'Nước mắm gừng sệt & Gia vị nêm nước dùng',
        items: [
          'Nước mắm gừng sệt: 4 thìa canh nước mắm nhĩ, 4 thìa canh đường vàng, 3 thìa canh gừng tươi giã nhuyễn, 2 thìa canh nước cốt chanh, 1 thìa canh ớt băm',
          'Gia vị nước dùng: 2 thìa canh đường phèn, 2 thìa canh nước mắm, 1.5 thìa canh hạt nêm, 1 thìa cà phê muối tinh, tiêu sọ xay',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế khử hôi thịt vịt & Sơ chế luộc măng xả đắng',
        time: '25 phút',
        heat: 'Lửa lớn',
        goal: 'Thịt vịt thơm sạch tuyệt đối không hôi; măng giòn ngọt xả sạch độc tố đắng',
        actionPoints: [
          'Khử hôi vịt: Vịt làm sạch, cắt bỏ tuyến mỡ ở phao câu (hoặc cắt bỏ hẳn phao câu). Đập dập 1 củ gừng giã nhỏ trộn với 100ml rượu trắng và 2 thìa canh muối hạt, xoa bóp kỹ khắp thân vịt cả bên trong lẫn bên ngoài trong 5 phút. Rửa lại 2 - 3 lần bằng nước sạch, để ráo.',
          'Sơ chế măng: Măng tươi tước sợi hoặc thái lát mỏng. Cho măng vào nồi nước sôi thêm 1 thìa cà phê muối luộc trong 10 - 15 phút (mở nắp nồi để độc tố bay hơi). Vớt ra rửa sạch dưới vòi nước lạnh. Nhắc lại luộc 2 lần cho măng hết đắng hoàn toàn rồi vắt ráo.',
        ],
        description:
          'Xoa bóp vịt với rượu gừng và muối hạt khử sạch mùi hôi. Măng tươi tước sợi luộc 2 lần với chút muối xả sạch nước đắng và độc tố.',
        tip: 'Khử sạch mùi hôi ở phần tuyến dầu phao câu và bóp kỹ rượu gừng là bí quyết quyết định bát nước dùng bún măng vịt thơm thanh không vẩn đục hay ám mùi hôi.',
      },
      {
        step: 2,
        title: 'Luộc vịt mọng nước & Ninh nước dùng ngọt thanh',
        time: '30 phút',
        heat: 'Lửa vừa hạ liu riu',
        goal: 'Thịt vịt chín tới mềm mọng da giòn, nước dùng ngọt lịm từ củ cải và xương vịt',
        actionPoints: [
          'Đun nồi 3.5 - 4 lít nước sôi. Cho củ hành tây nướng, hành tím nướng, 1 củ gừng nướng đập dập và củ cải trắng cắt khúc vào nồi.',
          'Nêm 1 thìa canh muối và 1 thìa canh đường phèn. Thả vịt nguyên con và bộ lòng mề vào nồi nước đun sôi bùng lên.',
          'Hớt sạch bọt nổi liên tục. Hạ lửa vừa đun sôi liu riu trong 20 - 25 phút. Dùng đũa xiên vào đùi vịt thấy không còn ứa nước hồng là vịt vừa chín tới.',
          'Vớt vịt ra ngay ngâm vào thau nước đá lạnh 5 phút (giúp da vịt săn giòn, thịt mọng nước không bị thâm đen). Vớt ra ráo nước rồi chặt miếng vừa ăn.',
        ],
        description:
          'Ninh nước dùng với hành gừng nướng và củ cải trắng. Thả vịt vào luộc 20 - 25 phút hớt bọt liên tục. Vớt vịt ngâm nước đá cho da săn giòn rồi chặt miếng.',
        tip: 'Vớt vịt ngâm ngay vào âu nước đá lạnh giúp da vịt săn vón giòn sần sật, giữ trọn nước ngọt mọng trong từng thớ thịt.',
      },
      {
        step: 3,
        title: 'Xào măng vàng đậm đà & Hoàn thiện nồi nước dùng bún măng',
        time: '15 phút',
        heat: 'Lửa vừa',
        goal: 'Măng xào ngấm vị đậm đà màu vàng ươm; nước dùng bún măng vịt ngào ngạt hương thơm',
        actionPoints: [
          'Phi thơm 2 thìa canh hành tím băm với 2 thìa canh màu dầu điều. Trút măng tươi đã luộc ráo vào xào nhanh tay trên lửa vừa.',
          'Nêm 1 thìa canh nước mắm, 1 thìa canh hạt nêm, 1 thìa cà phê đường và 1/2 thìa tiêu sọ xay. Đảo đều trong 5 - 7 phút cho măng săn lại và ngấm đẫm gia vị.',
          'Trút toàn bộ măng xào đậm đà vào nồi nước luộc vịt đang đun liu riu. Thả huyết heo cắt khối vuông vào nồi.',
          'Nêm nếm lại nước dùng: 2 thìa canh nước mắm nhĩ, 1 thìa canh đường phèn, 1 thìa canh hạt nêm sao cho vị ngọt thanh dịu đằm thắm.',
        ],
        description:
          'Phi thơm hành tím với màu dầu điều, xào măng đậy nắp săn đậm đà rồi trút vào nồi nước dùng vịt cùng huyết heo. Nêm nếm vừa ăn.',
        tip: 'Xào măng đậm đà trước khi cho vào nồi nước dùng giúp măng giòn ngọt không bị nhạt nhẽo và tỏa màu vàng cam vô cùng hấp dẫn.',
      },
      {
        step: 4,
        title: 'Pha nước mắm gừng sệt kẹo & Hoàn thiện tô Bún Măng Vịt',
        time: '10 phút',
        heat: 'Thưởng thức nóng bốc khói',
        goal: 'Tô bún măng vịt thơm nức bốc khói, miếng thịt vịt mềm béo chấm ngập mắm gừng cay nồng đậm đà',
        actionPoints: [
          'Pha mắm gừng sệt: Giã nhuyễn 3 thìa canh gừng tươi với 1 thìa ớt chỉ thiên và 4 thìa canh đường vàng trong cối cho dẻo quánh. Trút ra tô, hòa thêm 4 thìa canh nước mắm nhĩ ngon và 2 thìa canh nước cốt chanh tươi khuấy đều thành sốt mắm gừng sánh kẹo cay nồng.',
          'Trụng bún tươi qua nước sôi cho nóng ráo, xếp vào tô lớn.',
          'Bày lên mặt tô: Thịt vịt chặt miếng (hoặc xếp đĩa riêng kèm gỏi bắp cải), măng xào giòn ngọt, huyết heo và lòng mề vịt.',
          'Rắc hành lá, rau răm thái nhỏ và hành phi thơm nức.',
          'Múc nước dùng măng vịt dang sôi sùng sục chan ngập tô bún. Phục vụ kèm đĩa gỏi bắp cải trộn chua ngọt và chén nước mắm gừng sệt kẹo!',
        ],
        description:
          'Giã gừng ớt với đường vàng rồi pha nước mắm và nước cốt chanh tạo sốt mắm gừng sánh kẹo. Trụng bún ra tô, bày thịt vịt, măng, huyết, rau răm hành lá rồi chan nước dùng nóng hổi. Dọn kèm mắm gừng kẹo.',
        tip: 'Nước mắm gừng phải giã gừng thật mịn dẻo với đường trước khi pha mắm thì sốt mới sánh kẹo, chấm ngập miếng thịt vịt luộc béo ngậy cực kỳ tôn vị.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng nấu Bún Măng Vịt nước dùng thanh ngọt chuẩn vị gia đình: 1. Khử hôi vịt kỹ bằng rượu gừng và muối hạt, luộc vịt vừa chín tới ngâm ngay vào âu nước đá lạnh cho da giòn thịt mọng nước; 2. Măng tươi luộc 2 lần xả đắng rồi xào săn với màu dầu điều và nước mắm cho ngấm vị trước khi cho vào nồi nước lèo; 3. Nước mắm gừng sệt pha chuẩn tỷ lệ mắm - đường - gừng giã nhuyễn sánh kẹo chua cay nồng nàn là linh hồn không thể thiếu làm nên thương hiệu món Bún Măng Vịt Việt Nam!',
    recommendedSauce:
      'Chén nước mắm gừng sệt kẹo chua cay nồng nàn chấm ngập thịt vịt luộc, ăn kèm đĩa gỏi bắp cải trộn chua ngọt giòn sần sật.',
  },
  'bun-mam-mien-tay': {
    dishId: 'bun-mam-mien-tay',
    dishName: 'Bún Mắm Miền Tây Đậm Đà Sắc Màu',
    seoTitle: 'Cách Nấu Bún Mắm Miền Tây Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    description:
      'Hướng dẫn chi tiết cách nấu bún mắm miền Tây nước dùng thanh ngọt từ mắm cá linh cá sặc và nước dừa, topping tôm mực, heo quay giòn rụm chuẩn vị gia đình.',
    prepTime: '30 phút',
    cookTime: '45 phút',
    totalTime: '75 phút',
    servings: '4 - 6 người',
    difficulty: 'Trung bình',
    calories: '600 - 720 kcal/tô',
    ingredients: [
      {
        category: 'Mắm cốt & Nước dùng thanh ngọt',
        items: [
          '150g mắm cá linh ngon (cho vị béo bùi, ngọt đậm đà)',
          '150g mắm cá sặc thơm (cho hương thơm đượm nồng đặc trưng)',
          '1.5 - 2 lít nước dừa xiêm tươi (tạo vị ngọt thanh tự nhiên)',
          '500g xương ống heo hoặc sườn heo chặt khúc',
          '1 củ cải trắng (gọt vỏ, cắt khúc vừa ăn)',
          '4 - 5 cây sả tươi đập dập, cắt khúc',
          '3 thìa canh sả băm nhuyễn + 1 thìa canh ớt băm',
          '1 thìa canh hành tỏi băm nhuyễn',
          '2 thìa canh dầu màu điều (tạo màu sắc sóng sánh)',
        ],
      },
      {
        category: 'Thịt & Hải sản topping phong phú',
        items: [
          '300g cá lóc đồng tươi (lọc phi lê cắt miếng dày 2cm)',
          '300g tôm sú tươi sống (rửa sạch, chừa đuôi)',
          '250g mực ống tươi (khía vẩy rồng, cắt khoanh)',
          '300g thịt heo quay giòn bì (cắt miếng vừa ăn)',
          '150g chả cá thác lác quết nhồi ớt sừng (hoặc viên tròn)',
          '2 quả cà tím dài (cắt múi cau ngâm nước muối chanh)',
        ],
      },
      {
        category: 'Gia vị nêm nếm nước lèo chuẩn vị',
        items: [
          '2 - 3 thìa canh đường phèn giã nhỏ (chỉ dùng đường phèn để ngọt thanh dịu)',
          '1 thìa canh hạt nêm',
          '1/2 thìa cà phê bột ngọt (tùy chọn)',
          'Lưu ý: Không nêm thêm nước mắm hay muối vì mắm cá đã đủ độ mặn đượm',
        ],
      },
      {
        category: 'Bún tươi, Rau sống miền Tây & Nước chấm',
        items: [
          '1.2 kg bún tươi sợi to hoặc sợi trung',
          'Rau đồng miền Tây: Rau đắng, bông súng chẻ, bắp chuối bào, giá đỗ, rau muống chẻ, hẹ lá, rau nhút, kèo nèo',
          'Chén chấm me: 50g me chín dầm cốt me + 2 thìa canh đường + 1.5 thìa canh nước mắm nhĩ + ớt hiểm băm nhuyễn sệt kẹo',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Ninh nước dùng xương heo & Sơ chế các nguyên liệu topping',
        time: '25 phút',
        heat: 'Lửa vừa',
        goal: 'Nước hầm xương ngọt trong không váng bọt, topping hải sản sạch sẽ thơm tho',
        actionPoints: [
          'Chần xương heo qua nồi nước sôi có gừng và muối hạt 3 - 5 phút cho nhả sạch bọt bẩn, rửa lại bằng nước ấm. Cho xương vào nồi cùng 2 lít nước và củ cải trắng, ninh lửa nhỏ hé vung khoảng 30 phút, thường xuyên hớt bọt cho nước dùng thật trong.',
          'Cá lóc đánh vảy, chà xát chanh muối khử sạch nhớt tanh, lọc lấy phi lê cắt miếng dày 2cm.',
          'Tôm cắt râu rửa sạch. Mực làm sạch túi mực và màng da, khía vảy rồng cắt khoanh vừa ăn.',
          'Cà tím cắt múi cau ngâm ngay vào âu nước muối loãng pha chút giấm hoặc chanh 10 phút để không bị thâm đen, sau đó vớt ra để ráo.',
          'Ớt sừng rạch bụng bỏ hạt, nhồi chả cá thác lác đã quết dẻo vào thân ớt.',
        ],
        description:
          'Chần xương heo ninh cùng củ cải trắng lấy nước ngọt trong. Sơ chế sạch phi lê cá lóc, tôm sú, mực khía hoa. Cà tím cắt múi cau ngâm nước muối chanh chống thâm. Nhồi chả cá thác lác vào ớt sừng.',
        tip: 'Ninh xương heo hé vung và hớt bọt liên tục giúp nước dùng trong vắt, củ cải trắng tiết vị ngọt thanh làm dịu độ nồng của mắm cá.',
      },
      {
        step: 2,
        title: 'Nấu rã mắm cá linh, cá sặc & Lọc lấy nước cốt tinh túy',
        time: '15 phút',
        heat: 'Lửa nhỏ',
        goal: 'Thịt mắm rã hoàn toàn, thu được nước cốt mắm thơm nức trong veo không dính xương vụn',
        actionPoints: [
          'Cho 150g mắm cá linh và 150g mắm cá sặc vào một nồi nhỏ cùng 600ml nước dừa tươi (hoặc nước lọc).',
          'Đun sôi trên lửa vừa rồi hạ lửa nhỏ liu riu, dùng muôi khuấy nhẹ dầm cho thịt cá chín mềm và rã vụn hoàn toàn ra khỏi xương cá (khoảng 8 - 10 phút).',
          'Chuẩn bị rây lọc khít lỗ, trút toàn bộ nồi mắm qua rây, dùng muôi chà mạnh phần thịt cá để ép kiệt lấy hết nước cốt tinh túy thơm ngọt. Lọc lại thêm một lần nữa để đảm bảo loại bỏ 100% xương cá dăm vụn.',
        ],
        description:
          'Nấu 150g mắm cá linh cùng 150g mắm cá sặc với 600ml nước dừa tươi trên lửa nhỏ đến khi thịt cá rã hết. Lọc kỹ qua rây 2 lần để thu nước cốt mắm thơm béo trong trẻo và loại sạch xương cá.',
        tip: 'Phải kết hợp cả mắm cá linh (vị béo ngọt) và mắm cá sặc (mùi thơm đượm nồng) theo tỉ lệ 1:1, lọc rây thật kỹ 2 lần để nước lèo trong veo không vướng xương vụn.',
      },
      {
        step: 3,
        title: 'Xào thơm sả ớt, cà tím & Hòa quyện nồi nước lèo bún mắm thanh ngọt',
        time: '20 phút',
        heat: 'Lửa vừa',
        goal: 'Nước lèo dậy mùi thơm quyến rũ nức mũi của sả và mắm, màu sắc sóng sánh ánh dầu điều, vị ngọt thanh dịu',
        actionPoints: [
          'Bắc chảo lên bếp, cho 2 thìa canh dầu màu điều vào đun nóng. Phi thơm sả băm nhuyễn, tỏi băm, hành tím băm và ớt băm đến khi dậy mùi thơm ngào ngạt và chuyển màu vàng óng.',
          'Cho cà tím vào xào đảo nhanh tay cùng 1/2 lượng sả ớt phi trong 2 - 3 phút cho miếng cà bóng đẹp, săn lại (chưa nấu chín nhũn) rồi trút ra đĩa riêng.',
          'Trút toàn bộ phần sả ớt phi còn lại, sả cây đập dập và toàn bộ nước cốt mắm cá đã lọc vào nồi nước hầm xương heo. Đổ thêm 1 lít nước dừa tươi vào nồi.',
          'Đun sôi bùng lên rồi hạ lửa vừa, nêm đường phèn và hạt nêm cho vừa miệng. Tuyệt đối không cho thêm nước mắm hay muối vì mắm cá đã có độ mặn đậm đà. Nếm thấy vị nước dùng ngọt thanh tao nơi đầu lưỡi và hậu vị bùi béo đượm mùi mắm là đạt chuẩn.',
        ],
        description:
          'Phi thơm sả băm ớt băm với dầu màu điều, xào sơ cà tím cho săn bóng. Đổ nước cốt mắm, sả phi, sả cây đập dập và nước dừa tươi vào nồi nước hầm xương. Nêm đường phèn và hạt nêm tạo vị ngọt thanh dịu.',
        tip: 'Dùng hoàn toàn nước dừa tươi kết hợp đường phèn giúp nước lèo bún mắm ngọt thanh tao tự nhiên, không gắt họng. Tuyệt đối không nêm thêm nước mắm hay muối.',
      },
      {
        step: 4,
        title: 'Nấu chín hải sản topping & Cà tím trong nước lèo',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Tôm mực cá lóc chín mọng giòn ngọt ngấm vị mắm, cà tím vừa chín tới không bị nát',
        actionPoints: [
          'Thả ớt sừng nhồi chả cá thác lác vào nồi nước lèo nấu trước khoảng 5 - 7 phút cho chả chín phồng thơm.',
          'Tiếp tục thả phi lê cá lóc, tôm và mực vào chần chín tới trong nồi nước lèo đang sôi nhẹ khoảng 3 - 4 phút. Vớt ngay ra đĩa riêng để hải sản giữ nguyên độ giòn ngọt mọng nước, không bị dai teo hoặc vỡ nát.',
          'Thả cà tím đã xào sơ vào nồi nước lèo, đun sôi nhẹ thêm 3 - 5 phút cho cà chín mềm vừa tới, bóng bẩy hấp dẫn thì giữ nồi nước lèo ở chế độ sôi liu riu nóng hổi.',
        ],
        description:
          'Nấu chín ớt nhồi chả cá thác lác. Chần chín tới phi lê cá lóc, tôm sú, mực ống rồi vớt ra đĩa riêng để giữ độ giòn ngọt. Thả cà tím vào đun sôi nhẹ 3 phút cho chín mềm đậm đà.',
        tip: 'Hải sản chỉ chần chín tới trong nước lèo rồi vớt ra ngay, không ngâm lâu trong nồi sẽ bị teo ngót và dai nhách. Heo quay để riêng không cho vào nồi lèo để giữ da giòn.',
      },
      {
        step: 5,
        title: 'Pha nước mắm me & Trình bày tô Bún Mắm Miền Tây chuẩn vị sắc màu',
        time: '10 phút',
        heat: 'Thưởng thức nóng bốc khói',
        goal: 'Tô bún mắm đa sắc rực rỡ, nước lèo bốc khói nghi ngút, thơm nức mũi mùi mắm và sả ớt',
        actionPoints: [
          'Pha nước mắm me: Dầm 50g me chín với 4 thìa canh nước ấm, lọc lấy nước cốt me chua sánh. Hòa cùng 2 thìa canh đường, 1.5 thìa canh nước mắm nhĩ và ớt băm khuấy tan thành chén sốt mắm me sánh sệt chua ngọt cay nồng.',
          'Trụng bún tươi qua nước sôi cho sợi bún nóng mềm và ráo nước, cho vào tô lớn.',
          'Xếp lần lượt lên trên tô bún: Phi lê cá lóc trắng ngần, tôm sú đỏ au, mực khoanh giòn sần sật, miếng heo quay da giòn rụm, ớt nhồi chả cá thác lác, vài miếng cà tím mọng nước và hẹ lá cắt khúc.',
          'Múc nước lèo bún mắm đang sôi sùng sục chan ngập tô bún.',
          'Dọn ăn kèm đĩa rau sống ngập tràn hương vị miền Tây (rau đắng, bông súng chẻ, bắp chuối, rau muống chẻ, giá đỗ, kèo nèo) và chén nước mắm me chua ngọt sánh kẹo. Vừa ăn vừa húp thìa nước lèo ngọt thanh đậm đà khó quên!',
        ],
        description:
          'Pha mắm me sánh kẹo chua ngọt cay nồng. Trụng bún ra tô, bày phi lê cá lóc, tôm sú, mực, heo quay giòn bì, ớt nhồi chả cá, cà tím và hẹ lá. Chan nước lèo sôi sùng sục, ăn kèm đĩa rau đồng miền Tây.',
        tip: 'Heo quay chỉ đặt lên tô ngay trước khi chan nước dùng để giữ lớp da giòn rụm. Chén mắm me chua ngọt cay dịu là chất xúc tác hoàn hảo cân bằng vị giác cho tô bún mắm.',
      },
    ],
    chefSecret:
      '4 bí quyết vàng nấu Bún Mắm Miền Tây nước dùng thanh ngọt chuẩn vị gia đình: 1. Tuyệt đối phải phối hợp cả mắm cá linh (tạo vị béo bùi, ngọt sâu) và mắm cá sặc (tạo hương thơm đượm nồng nàn) theo tỷ lệ 1:1, nấu rã với nước dừa tươi và lọc kỹ qua rây 2 lần để loại sạch hoàn toàn xương dăm; 2. Nước dùng nấu hoàn toàn từ nước dừa xiêm tươi kết hợp xương ống hầm và sả cây đập dập, nêm duy nhất bằng đường phèn để tạo hậu vị thanh ngọt dịu mát, không dùng nước mắm hay muối; 3. Cà tím ngâm nước muối chanh xào sơ với dầu màu điều trước khi cho vào nước lèo giúp cà không bị thâm nát, giữ trọn màu sắc đẹp mắt; 4. Hải sản luộc vừa chín tới vớt ra riêng, thịt heo quay giòn bì chỉ đặt lên tô ngay trước khi chan nước dùng để giữ lớp da giòn rụm tan trong miệng!',
    recommendedSauce:
      'Chén nước mắm me chua ngọt sánh kẹo dầm ớt hiểm cay nồng, ăn kèm đĩa rau đồng nội miền Tây ngập tràn bông súng, rau đắng, kèo nèo, bắp chuối và hẹ tươi.',
  },
  'bun-nuoc-leo-soc-trang': {
    dishId: 'bun-nuoc-leo-soc-trang',
    dishName: 'Bún Nước Lèo Sóc Trăng Cá Lóc',
    seoTitle: 'Cách Nấu Bún Nước Lèo Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    description:
      'Cách nấu bún nước lèo nước dùng thanh ngọt từ mắm cá linh cá sặc và ngải bún thơm lừng, cá lóc đồng ngọt bùi, heo quay giòn bì chuẩn vị gia đình miền Tây.',
    prepTime: '25 phút',
    cookTime: '40 phút',
    totalTime: '65 phút',
    servings: '4 - 6 người',
    difficulty: 'Trung bình',
    calories: '450 - 540 kcal/tô',
    ingredients: [
      {
        category: 'Mắm cốt & Nước lèo thanh ngọt chuẩn vị gia đình',
        items: [
          '150g mắm ngon: Phối hợp 70g mắm cá sặc (dậy mùi thơm lừng) + 80g mắm cá linh (vị ngọt bùi béo tự nhiên); hoặc 120g mắm bò hóc Khmer',
          '1.5 - 2 lít nước dừa xiêm tươi ngọt mát (bí quyết tạo vị ngọt thanh tự nhiên của miền Tây)',
          '500g xương heo (xương ống hoặc xương đuôi, sườn heo chặt khúc chần kỹ)',
          '60g củ ngải bún tươi (linh hồn hương vị, khử sạch mùi tanh của mắm, tạo vị thanh dịu)',
          '5 - 6 cây sả tươi (chọn sả bánh tẻ, đập dập)',
          '1 củ cải trắng nhỏ (gọt vỏ cắt khúc ninh ngọt nước trong)',
        ],
      },
      {
        category: 'Thịt cá lóc đồng & Topping chuẩn phong vị miền Tây',
        items: [
          '1 con cá lóc đồng tươi ngon (khoảng 800g - 1kg, thịt chắc ngọt bùi)',
          '300g tép đất tươi sống (tép bạc đất thịt ngọt giòn) hoặc tôm sú/thẻ tươi',
          '300g thịt ba rọi heo quay giòn bì (cắt miếng vừa ăn)',
          '150g huyết heo luộc chín (cắt khối vuông vừa ăn)',
          '1 thìa cà phê tiêu sọ xay + 1 thìa canh đầu hành hoa băm nhuyễn ướp cá',
        ],
      },
      {
        category: 'Gia vị nêm nếm nước lèo thanh cảnh (Nói KHÔNG với màu điều & nước mắm)',
        items: [
          '2 - 2.5 thìa canh đường phèn giã nhỏ (chỉ dùng đường phèn để tạo hậu vị ngọt thanh dịu)',
          '1 thìa canh hạt nêm',
          '1/2 thìa cà phê muối hột (cân bằng vị)',
          'Lưu ý cốt tử: Tuyệt đối không nêm nước mắm vào nồi lèo (tránh bị chua và đục nước); Không dùng dầu màu điều hay mỡ xào sả ớt',
        ],
      },
      {
        category: 'Bún tươi, Rau ghém đồng nội & Chén chấm muối ớt chanh',
        items: [
          '1.2 - 1.5 kg bún tươi sợi nhỏ (trụng nước sôi nóng tơi)',
          'Đĩa rau ghém đồng nội: Bắp chuối bào mỏng ngâm chanh trắng giòn, bông súng chẻ sợi ngâm đá, giá đỗ sống, hẹ lá cắt khúc 3cm, rau muống chẻ ngọn cong, rau đắng non, rau răm xắt nhỏ',
          'Chén chấm chuẩn Sóc Trăng: Muối hột rang giã nhuyễn cùng ớt hiểm xanh vắt chanh tươi chua cay nồng nàn; hoặc chén nước mắm nhĩ ngon dầm ớt hiểm xắt lát',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế sạch cá lóc đồng, xử lý ngải bún & Ninh nước dùng xương heo trong vắt',
        time: '20 phút',
        heat: 'Lửa nhỏ liu riu',
        goal: 'Xương heo và cá lóc sạch tanh nhớt, nước hầm trong veo, ngải bún sả giã nhuyễn bọc túi lọc thơm lừng',
        actionPoints: [
          'Chặt xương heo khúc vừa ăn, chần qua nồi nước sôi có gừng đập dập và muối hột trong 3 - 5 phút để thải sạch bọt bẩn và mùi hôi, vớt ra rửa sạch lại bằng nước ấm. Cho xương vào nồi cùng 1.5 lít nước lạnh và củ cải trắng, đun sôi rồi hạ lửa nhỏ liu riu, hé nắp vung và thường xuyên hớt sạch bọt để nước dùng trong vắt, ngọt thanh từ tủy xương.',
          'Cá lóc đồng đánh sạch vảy, bỏ mang, mổ bụng bỏ ruột và đặc biệt cạo sạch màng đen tanh bám dọc sống lưng trong bụng cá. Chà xát kỹ toàn thân cá bằng muối hột và nước cốt chanh (hoặc rượu gừng) trong 3 phút, sau đó xả sạch lại dưới vòi nước chảy cho đến khi thân cá sạch bong kin kít, để ráo.',
          'Củ ngải bún cạo sạch lớp vỏ mỏng, rửa sạch, đập dập rồi cho vào cối cùng 2 tép sả tươi giã thật nhuyễn. Cho hỗn hợp ngải bún sả giã nhuyễn vào một túi vải lọc sạch (hoặc túi lọc trà) buộc chặt miệng (hoặc vắt kiệt lấy nước cốt đặc cho vào nồi). 3 - 4 cây sả còn lại đập dập phần củ gốc, bó gọn lại.',
        ],
        description:
          'Ninh xương heo cùng củ cải trắng hé vung lấy nước dùng trong veo. Chà xát muối chanh làm sạch bong nhớt tanh cá lóc đồng. Cạo vỏ củ ngải bún, giã nhuyễn cùng sả tươi rồi cho vào túi vải lọc sạch buộc chặt.',
        tip: 'Túi vải bọc ngải bún sả giúp tinh dầu thơm ngát tiết trọn vào nước dùng mà nước lèo trong vắt 100%, không bị lợn cợn xác củ gây sạn hay đục nước.',
      },
      {
        step: 2,
        title: 'Nấu rã mắm cá với nước dừa tươi & Lọc nước cốt trong veo 2 lần sạch 100% xương dăm',
        time: '15 phút',
        heat: 'Lửa nhỏ liu riu',
        goal: 'Thịt mắm rã hoàn toàn vào nước dừa ngọt mát, nước cốt mắm trong veo, sạch sạch không còn một mảnh xương dăm',
        actionPoints: [
          'Cho 150g mắm (kết hợp mắm cá sặc + mắm cá linh hoặc mắm bò hóc) vào nồi nhỏ cùng 400ml nước dừa xiêm tươi (nước dừa giúp làm dịu độ mặn gắt của mắm và tạo hương thơm dịu mát).',
          'Đun sôi trên lửa vừa rồi hạ lửa nhỏ liu riu, dùng đũa khuấy dầm nhẹ nhàng cho thịt cá chín mềm và rã vụn hoàn toàn ra khỏi xương (khoảng 8 - 10 phút).',
          'Đặt rây lọc mắt khít phủ thêm một lớp khăn vải xô/mùng sạch lên trên chiếc nồi con. Trút toàn bộ nồi mắm qua rây, dùng muôi chà dầm kỹ để vắt kiệt trọn vẹn phần nước cốt mắm thơm lừng.',
          'Đổ tiếp nước cốt đó qua rây lần thứ 2 để loại bỏ hoàn toàn các mảnh xương cá dăm li ti và cặn đục, thu về phần nước cốt mắm trong veo, thơm nồng đượm đặc trưng mà không gợn cặn.',
        ],
        description:
          'Nấu rã mắm với 400ml nước dừa tươi trên lửa nhỏ liu riu cho rã hết thịt cá. Lọc kỹ qua rây khít và khăn mùng 2 lần để nước cốt trong veo, loại bỏ sạch 100% xương dăm cá và cặn đục.',
        tip: 'Lọc 2 lần qua khăn mùng là bí quyết để nước lèo trong vắt màu hổ phách, trẻ nhỏ và người lớn tuổi ăn an tâm tuyệt đối không lo hóc xương dăm.',
      },
      {
        step: 3,
        title: 'Luộc chín cá lóc & tép ngọt, gỡ thịt nạc & Giã nát xương đầu cá lấy nước cốt tủy ngọt lịm',
        time: '15 phút',
        heat: 'Lửa vừa',
        goal: 'Thịt cá lóc chín tới trắng ngần nguyên thớ, tép đỏ ngọt, nước cốt tủy xương cá ngọt sâu đậm đà tự nhiên',
        actionPoints: [
          'Thả nguyên con cá lóc và tép đất (hoặc tôm) vào nồi nước hầm xương đang sôi lăn tăn. Tép luộc khoảng 3 - 4 phút chín đỏ au thì vớt ra ngay, bóc vỏ chừa đuôi.',
          'Luộc cá lóc thêm khoảng 8 - 10 phút đến khi cá vừa chín tới (dùng đũa xiên nhẹ thấy thịt cá săn trắng, không còn đỏ máu) thì vớt ngay ra đĩa lớn để nguội bớt (tuyệt đối không luộc quá lâu thịt cá sẽ bị nát bở và mất đi vị ngọt tự nhiên).',
          'Gỡ thịt cá: Khéo léo dùng tay hoặc thìa tách từng miếng thịt nạc cá lóc thành những thớ lớn nguyên vẹn, xếp ngay ngắn ra đĩa. Rắc nhẹ chút tiêu xay và đầu hành hoa chần lên trên để giữ thớ cá thơm bùi, đậy nắp hoặc để lên xửng hấp giữ ấm.',
          'Bí quyết gia truyền cốt tử miền Tây: Toàn bộ phần đầu cá và xương cá lóc gom lại cho vào cối GIÃ THẬT NÁT. Múc 1 - 2 muôi nước dùng nóng vào hòa đều rồi đổ qua rây lọc, chắt lấy toàn bộ phần nước cốt ngọt lịm từ tủy xương cá đổ ngược lại vào nồi nước lèo! Nước dùng sẽ tăng gấp bội vị ngọt thanh sâu, thơm béo tự nhiên của cá đồng mà không cần mì chính.',
        ],
        description:
          'Luộc tép và cá lóc trong nồi nước dùng vừa chín tới thì vớt ra ngay. Gỡ từng thớ thịt nạc cá lóc to ướp tiêu và hành hoa thơm lừng. Giã nát xương và đầu cá lóc hòa nước dùng lọc lấy trọn vẹn nước cốt tủy ngọt lịm.',
        tip: 'Bí quyết nước dùng ngọt lịm đậm đà tự nhiên của các gia đình miền Tây là giã nát xương cá luộc rồi lọc lấy nước cốt tủy đổ lại vào nồi lèo, ngọt đậm mà không cần bột ngọt.',
      },
      {
        step: 4,
        title: 'Nấu hòa quyện nước lèo ngải bún thanh ngọt màu hổ phách (Nói KHÔNG với màu điều & nước mắm)',
        time: '15 phút',
        heat: 'Lửa nhỏ liu riu hé nắp vung',
        goal: 'Nước lèo trong veo màu vàng hổ phách nhạt, ngát hương ngải bún và sả cây, vị ngọt thanh mát tan chảy nơi đầu lưỡi',
        actionPoints: [
          'Trút toàn bộ: Nước cốt mắm đã lọc sạch xương dăm, túi ngải bún sả giã nhuyễn, bó sả cây đập dập, nước cốt tủy xương cá giã nhuyễn và phần nước dừa tươi còn lại vào nồi nước hầm xương.',
          'Đun sôi bùng lên rồi hạ ngay lửa nhỏ liu riu, hé nắp vung để nước dùng luôn trong trẻo.',
          'Nêm nếm chuẩn vị thanh mát: Nêm 2 - 2.5 thìa canh đường phèn giã nhỏ, 1 thìa canh hạt nêm, 1/2 thìa cà phê muối hột. Nếm thử thấy nước dùng có vị thanh ngọt dịu mát tự nhiên từ nước dừa và xương cá, vị mặn êm dịu thoang thoảng mùi mắm, ngát hương ngải bún và sả cây ấm nồng làm dịu hoàn toàn vị tanh.',
          'Thả các miếng huyết heo luộc vào đun sôi nhẹ liu riu để huyết ngấm vị ngọt thơm của nước lèo và luôn nóng hổi.',
        ],
        description:
          'Cho túi ngải bún sả, bó sả cây, nước cốt mắm lọc, nước dừa tươi và nước cốt xương cá vào nồi nước dùng. Nêm đường phèn và hạt nêm cho vị ngọt thanh dịu. Đun sôi liu riu hé vung cho nước trong vắt màu hổ phách.',
        tip: 'Khác hoàn toàn với bún mắm, bún nước lèo tuyệt đối KHÔNG cho dầu màu điều hay mỡ xào sả ớt, KHÔNG nêm nước mắm vào nồi lèo (tránh bị chua đục), nước phải hoàn toàn trong thanh không dầu mỡ.',
      },
      {
        step: 5,
        title: 'Trình bày tô Bún Nước Lèo chuẩn phong vị Sóc Trăng & Thưởng thức đúng điệu',
        time: '10 phút',
        heat: 'Thưởng thức nóng bốc khói',
        goal: 'Tô bún nước lèo trong veo thanh cảnh, thịt cá lóc trắng ngần, tép ngọt heo quay giòn tan',
        actionPoints: [
          'Trụng bún tươi qua nước sôi cho sợi bún nóng ráo, gắp vào tô lớn.',
          'Bày trí topping: Xếp từng miếng thịt nạc cá lóc đồng trắng ngần, tép ngọt đỏ au, vài miếng huyết heo mềm mượt, rải một nắm hẹ lá tươi xanh cắt khúc và xếp vài miếng thịt heo quay da giòn rụm lên trên.',
          'Múc nước lèo đang sôi sùng sục, trong veo ngát hương ngải bún chan đều ngập tô bún, làm nóng bừng các nguyên liệu và dậy mùi thơm nức mũi.',
          'Dọn kèm đĩa rau ghém đồng quê (bắp chuối bào giòn, bông súng chẻ, giá đỗ sống, rau muống chẻ, rau đắng non, rau răm) và chén muối hột rang giã ớt hiểm xanh vắt chanh (hoặc chén nước mắm nhĩ dầm ớt hiểm). Thưởng thức ngay khi còn bốc khói ngào ngạt!',
        ],
        description:
          'Trụng bún ra tô, bày thịt cá lóc nạc, tép luộc đỏ, heo quay giòn bì, huyết heo và hẹ lá. Chan nước lèo trong veo nóng hổi ngát hương ngải bún. Dọn kèm đĩa rau ghém đồng nội và chén muối ớt chanh.',
        tip: 'Thịt heo quay da giòn rụm chỉ xếp lên tô ngay trước khi chan nước lèo để lớp da không bị mềm ỉu. Thưởng thức nóng kèm rau ghém bông súng bắp chuối giòn ngọt.',
      },
    ],
    chefSecret:
      '4 bí quyết vàng nấu Bún Nước Lèo nước dùng thanh ngọt chuẩn vị gia đình: 1. Tuyệt đối không thể thiếu củ ngải bún giã nhuyễn cùng sả cây bọc trong túi vải sạch – đây là linh hồn độc nhất giúp khử sạch mùi tanh của mắm và tạo hương thơm thanh ngát đặc trưng mà giữ nước lèo trong veo 100%, không bị lợn cợn cặn bã; 2. Nước lèo chuẩn gốc khác bún mắm ở chỗ nước phải TRONG VEO, nói KHÔNG với dầu màu điều, mỡ xào hay nước mắm (nước mắm đun sôi lâu sẽ làm nước lèo bị chua và đục); 3. Nấu bằng nước dừa xiêm tươi ngọt mát kết hợp giã nát xương đầu cá lóc lọc lấy nước cốt tủy ngọt lịm đổ lại nồi lèo – tạo độ ngọt thanh sâu đậm đà tự nhiên của cá đồng mà không cần mì chính; 4. Thịt cá lóc luộc chín tới gỡ thớ nạc to ướp tiêu hành giữ ấm riêng, heo quay giòn bì chỉ đặt lên tô ngay trước khi chan nước lèo để giữ trọn vẹn độ giòn rụm tan trong miệng!',
    recommendedSauce:
      'Chén muối hột rang giã ớt hiểm xanh vắt chanh tươi chua cay nồng nàn (chuẩn phong vị Sóc Trăng dân dã), ăn kèm đĩa rau ghém đồng nội ngập tràn bắp chuối bào, bông súng chẻ, hẹ lá, giá đỗ, rau muống chẻ và rau đắng non tươi mát.',
  },
  'oc-huong-xao-bo-toi': {
    dishId: 'oc-huong-xao-bo-toi',
    dishName: 'Ốc Hương Cồ Xào Bơ Tỏi Bánh Mì Nóng',
    seoTitle: 'Cách Làm Ốc Hương Xào Bơ Tỏi Giòn Ngon, Xanh Mướt Chuẩn Bếp Trưởng',
    prepTime: '20 phút (ngâm 1 - 2 giờ)',
    cookTime: '15 phút',
    totalTime: '35 phút',
    servings: '2 - 3 người',
    difficulty: 'Dễ',
    calories: '480 - 620 kcal/đĩa',
    ingredients: [
      {
        category: 'Ốc hương tươi & Sơ chế làm sạch',
        items: [
          '500g ốc hương cồ tươi sống (chọn ốc mẩy, vảy nằm sát mép vỏ)',
          '3 quả ớt hiểm & 1 thìa canh muối hạt (ngâm ốc nhả bùn cát)',
          '3 củ sả đập dập & 1 nhánh gừng thái lát (chần ốc khử tanh)',
        ],
      },
      {
        category: 'Sốt Bơ Tỏi sánh mịn béo ngậy',
        items: [
          '100g tỏi củ băm nhuyễn (chia làm 2 phần: 1 phi giòn & 1 làm sốt)',
          '50g bơ lạt (Anchor / President hoặc bơ Tường An thơm béo)',
          '2 thìa canh đường cát vàng & 1.5 thìa canh nước mắm nhĩ ngon',
          '1.5 thìa canh tương ớt & 1 thìa canh dầu hào',
          '3 thìa canh sữa tươi không đường (tạo độ sánh mịn béo ngậy)',
          '1/2 thìa cà phê tiêu sọ xay & 1 thìa canh màu dầu điều',
        ],
      },
      {
        category: 'Rau ăn kèm & Đồ chấm dọn kèm',
        items: [
          '1 bó rau răm xanh mướt (nhặt lá rửa sạch ăn kèm)',
          '2 ổ bánh mì Việt Nam giòn rụm (chấm sốt bơ tỏi ngậy thơm)',
          'Muối tiêu chanh ớt hiểm hoặc chén muối ớt xanh sữa đặc',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Ngâm ốc hương nhả cát & Chần nhanh sốc nước đá',
        time: '15 phút (ngâm 1 - 2 giờ)',
        heat: 'Lửa lớn',
        goal: 'Ốc hương sạch cát bùn, chần chín tới giòn sần sật không bị teo thịt',
        actionPoints: [
          'Ngâm ốc: Ốc hương rửa sạch, ngâm trong thau nước vo gạo hoặc nước lạnh cắt vào 3 quả ớt hiểm và thả 1 con dao sắt trong 1 - 2 giờ cho ốc nhả sạch cát bùn. Rửa lại 3 - 4 lần cho sạch hoàn toàn.',
          'Chần ốc giòn: Đun sôi một nồi nước với sả đập dập, gừng thái lát và nhúm muối. Cho ốc hương vào chần nhanh trong 1.5 - 2 phút cho vảy ốc vừa văng ra thì vớt ra ngay.',
          'Ngâm ngay ốc vào thau nước đá lạnh trong 3 phút. Dùng tăm khêu bỏ phần vảy ốc còn sót lại rồi vớt ra để thật ráo nước.',
        ],
        description:
          'Ngâm ốc hương với ớt hiểm và kim loại nhả sạch cát. Chần nhanh trong nước sôi gừng sả 1.5 - 2 phút rồi vớt ngâm ngay vào nước đá lạnh giữ độ giòn sần sật.',
        tip: 'Chần ốc vừa chín tới rồi sốc ngay vào âu nước đá lạnh là bí quyết vàng giúp thịt ốc giòn sần sật mọng nước, không bị dai teo hay trút vỏ.',
      },
      {
        step: 2,
        title: 'Phi tỏi vàng giòn tan & Pha hỗn hợp sốt bơ tỏi',
        time: '10 phút',
        heat: 'Lửa nhỏ',
        goal: 'Tỏi phi màu vàng rơm giòn rụm không đắng; sốt bơ tỏi sánh kẹo béo ngậy thơm nức',
        actionPoints: [
          'Phi tỏi giòn: Cho 3 thìa canh dầu ăn vào chảo, cho 2/3 lượng tỏi băm nhuyễn vào phi trên lửa nhỏ vừa. Đảo đều tay đến khi tỏi ngả màu vàng rơm nhẹ thì vớt ra ngay qua rây lọc ráo dầu (tỏi sẽ tiếp tục vàng giòn rụm).',
          'Pha sốt bơ tỏi: Dùng 1 thìa canh dầu phi tỏi trong chảo, cho 1/3 lượng tỏi tươi còn lại và 1 thìa canh màu dầu điều vào phi thơm. Thêm 50g bơ lạt vào đun chảy béo ngậy.',
          'Thêm 2 thìa canh đường vàng, 1.5 thìa canh nước mắm nhĩ, 1.5 thìa canh tương ớt, 1 thìa canh dầu hào, 3 thìa canh sữa tươi không đường và 1/2 thìa tiêu sọ xay. Khuấy đều trên lửa nhỏ cho sốt sôi lăn tăn, dẻo sánh kẹo óng ả.',
        ],
        description:
          'Phi 2/3 tỏi băm ngả vàng rơm vớt ra rây lọc ráo dầu. Dùng chảo xào tỏi tươi với bơ lạt đun chảy, đường, nước mắm, tương ớt, dầu hào và sữa tươi tạo sốt sánh kẹo béo thơm.',
        tip: 'Tỏi phi phải vớt ra khi ngả màu vàng nhạt, vì sức nóng còn lại của dầu sẽ làm tỏi chín tới vàng rụm đẹp mắt, không bị cháy đắng.',
      },
      {
        step: 3,
        title: 'Xào ốc hương ngấm đẫm sốt bơ tỏi thơm nức',
        time: '5 phút',
        heat: 'Lửa lớn',
        goal: 'Sốt bơ tỏi bám đẫm từng con ốc hương, màu vàng óng béo ngậy thơm lừng',
        actionPoints: [
          'Khi sốt bơ tỏi trong chảo đang sôi dẻo sánh kẹo, trút toàn bộ ốc hương đã chần ráo nước vào chảo.',
          'Tăng lửa lớn, đảo thật nhanh tay liên tục trong 2 - 3 phút cho sốt bơ tỏi bọc đẫm khắp lớp vỏ ngoài và chui vào trong ruột con ốc.',
          'Trút 1/2 lượng tỏi phi giòn rụm và vài lát ớt hiểm cắt vào xóc đều 30 giây cho dậy mùi thơm nức phức rồi tắt bếp ngay.',
        ],
        description:
          'Trút ốc hương vào chảo sốt bơ tỏi, đảo nhanh tay lửa lớn 2 - 3 phút cho sốt áo đều ngấm vị. Trút nửa phần tỏi phi giòn vào xóc đều tắt bếp.',
        tip: 'Xào lửa lớn nhanh tay trong 2 - 3 phút giúp sốt bơ tỏi phủ kín vỏ ốc mà không làm thịt ốc bị dai khô.',
      },
      {
        step: 4,
        title: 'Bày đĩa Ốc Hương Xào Bơ Tỏi & Thưởng thức kèm Bánh Mì Nóng',
        time: '3 phút',
        heat: 'Ăn nóng bốc khói',
        goal: 'Đĩa ốc hương vàng óng béo ngậy thơm nức bơ tỏi, bánh mì chấm sốt sánh kẹo ngon mê ly',
        actionPoints: [
          'Trút ốc hương xào bơ tỏi ra đĩa sâu lòng.',
          'Múc toàn bộ phần sốt bơ tỏi vàng óng sánh kẹo còn lại trong chảo rưới đều lên trên.',
          'Rắc nốt phần tỏi phi vàng giòn rụm lên đỉnh đĩa ốc, trang trí lá rau răm xanh mướt xung quanh đĩa.',
          'Phục vụ ăn kèm ổ bánh mì Việt Nam nướng nóng giòn cắt khúc, đĩa rau răm tươi và chén muối tiêu chanh hoặc muối ớt xanh sữa đặc cay nồng.',
        ],
        description:
          'Múc ốc hương ra đĩa, rưới đẫm sốt bơ tỏi sánh kẹo. Rắc tỏi phi giòn rụm, trang trí rau răm xanh mướt. Thưởng thức kèm bánh mì giòn tan chấm sốt bơ tỏi.',
        tip: 'Chấm khúc bánh mì giòn tan ngập vào chén sốt bơ tỏi sánh kẹo đậm đà, cắn con ốc hương giòn sần sật béo ngậy tỏi phi là trải nghiệm món nhậu đỉnh cao.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm nên đĩa Ốc Hương Xào Bơ Tỏi giòn ngon chuẩn bếp trưởng: 1. Ngâm ốc nhả sạch cát, chần nhanh 1.5 phút trong nước gừng sả rồi ngâm ngay vào âu nước đá lạnh giúp thịt ốc giòn sần sật mọng nước; 2. Sốt bơ tỏi pha thêm sữa tươi giúp sốt sánh mịn dẻo kẹo béo ngậy không bị tách dầu; 3. Chia tỏi băm làm 2 phần: 1 phi vàng giòn vớt riêng rắc lên trên, 1 xào sốt tạo tầng hương vị tỏi thơm giòn ngậy sảng khoái!',
    recommendedSauce:
      'Sốt bơ tỏi sánh kẹo vàng óng chấm ngập bánh mì nóng giòn, ăn kèm đĩa rau răm xanh mướt & chén muối tiêu chanh ớt hiểm cay nồng.',
  },
  'ca-vien-chien-nuoc-mam': {
    dishId: 'ca-vien-chien-nuoc-mam',
    dishName: 'Mẹt Cá Viên Chiên Nước Mắm Tỏi Ớt Đậm Đà',
    seoTitle: 'Cách Làm Cá Viên Chiên Nước Mắm Vàng Giòn Rụm, Thơm Ngon Bất Bại',
    prepTime: '15 phút',
    cookTime: '20 phút',
    totalTime: '35 phút',
    servings: '3 - 4 người',
    difficulty: 'Dễ',
    calories: '380 - 520 kcal/đĩa',
    ingredients: [
      {
        category: 'Thập cẩm viên chiên & Rau củ ăn kèm',
        items: [
          '500g thập cẩm viên: cá viên, bò viên, tôm viên, xúc xích, chả cá cốm',
          '100g đậu bắp (cắt khúc 3cm chiên kèm)',
          '1 bó rau muống nhỏ (nhặt lấy cọng giòn cắt khúc 5cm)',
          '1/2 củ hành tây (cắt múi cau mỏng)',
          'Dầu ăn chiên ngập mặt',
        ],
      },
      {
        category: 'Sốt Nước Mắm Tỏi Ớt Kẹo béo thơm',
        items: [
          '1 củ tỏi lớn (băm nhuyễn, khoảng 4 thìa canh tỏi băm)',
          '2 củ hành tím & 2 - 3 quả ớt chỉ thiên băm nhuyễn',
          '2.5 thìa canh nước mắm nhĩ ngon (loại 40 độ đạm)',
          '2.5 thìa canh đường cát vàng (tạo độ kẹo ngọt đằm)',
          '2 thìa canh tương ớt & 1 thìa canh tương cà',
          '1 thìa canh bơ lạt (hoặc bơ Tường An thơm béo)',
          '1/2 thìa cà phê tiêu sọ xay',
        ],
      },
      {
        category: 'Đồ chua & Nước chấm ăn kèm',
        items: [
          '1/2 củ dưa leo & 100g đu đủ/cà rốt ngâm chua ngọt',
          'Tương ớt xí muội hoặc sốt mayonnaiise',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế khía hoa viên chiên & Chuẩn bị rau củ',
        time: '10 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Viên chiên ngấm gia vị dễ nở phồng; rau củ tươi sạch ráo nước',
        actionPoints: [
          'Khía viên chiên: Cá viên, bò viên, tôm viên dùng dao khía chéo rãnh carô hoặc cắt hình chữ thập (khía hoa) trên bề mặt. Xúc xích cắt khúc khía chéo 2 bên thân. Việc khía giúp viên chiên nở phồng đẹp khi chiên và bám đẫm sốt nước mắm.',
          'Rau củ: Đậu bắp rửa sạch cắt khúc 3cm. Rau muống nhặt bỏ bớt lá, lấy phần cọng giòn rửa sạch để thật ráo nước. Hành tây lột vỏ cắt múi cau.',
        ],
        description:
          'Khía chữ thập hoặc rãnh carô trên các viên chiên. Đậu bắp cắt khúc, cọng rau muống rửa sạch ráo nước, hành tây cắt múi cau.',
        tip: 'Phải để rau muống và đậu bắp thật ráo nước trước khi cho vào chảo dầu để tránh bị bắn dầu nguy hiểm.',
      },
      {
        step: 2,
        title: 'Chiên vàng giòn căng phồng viên chiên & Đậu bắp rau muống',
        time: '10 phút',
        heat: 'Lửa vừa (160°C - 170°C)',
        goal: 'Viên chiên nở phồng vàng rụm, căng tròn không bị ngấm mỡ; rau muống đậu bắp giòn xanh',
        actionPoints: [
          'Đun nóng chảo dầu ăn ngập mặt trên lửa vừa. Thả từng mẻ thập cẩm viên chiên vào chiên.',
          'Đảo đều tay đến khi các viên chiên nở phồng căng tròn, vỏ ngoài ngả màu vàng rươm giòn rụm thì vớt ra ngay qua rây lọc ráo dầu.',
          'Thả đậu bắp cắt khúc và cọng rau muống vào chảo dầu chiên nhanh trong 30 - 45 giây cho rau giòn xanh rồi vớt ra rây ráo dầu.',
        ],
        description:
          'Chiên ngập dầu các viên chiên đến khi nở phồng vàng rụm vớt ra rây ráo dầu. Chiên sơ đậu bắp và cọng rau muống 40 giây cho giòn xanh.',
        tip: 'Chiên viên ở lửa vừa - lớn giúp lớp vỏ căng phồng giòn rụm và không bị ngấm dầu ăn gây ngấy.',
      },
      {
        step: 3,
        title: 'Nấu sốt Nước Mắm Tỏi Ớt Kẹo sánh mịn óng ả',
        time: '5 phút',
        heat: 'Lửa nhỏ',
        goal: 'Sốt nước mắm màu hổ phách kẹo quánh, vị mặn ngọt cay nồng thơm lừng bơ tỏi',
        actionPoints: [
          'Cho 1 thìa canh dầu ăn và 1 thìa canh bơ lạt vào chảo đun chảy. Cho tỏi băm nhuyễn, hành tím băm và ớt băm vào phi thơm trên lửa nhỏ đến khi tỏi dậy mùi thơm nức ngả màu vàng rơm nhẹ.',
          'Cho hỗn hợp gia vị: 2.5 thìa canh nước mắm nhĩ, 2.5 thìa canh đường vàng, 2 thìa canh tương ớt, 1 thìa canh tương cà và 1 thìa canh nước lọc vào chảo.',
          'Đun trên lửa nhỏ khuấy đều tay liên tục cho đường tan hoàn toàn và sốt sôi bùng lên, dẻo sánh kẹo óng ả màu hổ phách.',
        ],
        description:
          'Phi thơm tỏi ớt băm với bơ lạt. Thêm nước mắm nhĩ, đường vàng, tương ớt, tương cà đun nhỏ lửa khuấy đều cho sốt sánh kẹo óng ả.',
        tip: 'Tỷ lệ vàng 1 mắm : 1 đường : 0.8 tương ớt giúp sốt có độ sánh kẹo tự nhiên phủ đẫm lớp vỏ viên chiên mà không bị chảy nước.',
      },
      {
        step: 4,
        title: 'Xóc Cá Viên Chiên đẫm sốt Nước Mắm & Thưởng thức',
        time: '3 phút',
        heat: 'Lửa lớn',
        goal: 'Mẹt cá viên chiên bọc đẫm sốt mắm tỏi ớt kẹo vàng óng, thơm nức mũi siêu cuốn',
        actionPoints: [
          'Khi sốt nước mắm tỏi ớt trong chảo đang sôi kẹo dẻo, trút toàn bộ thập cẩm viên chiên, đậu bắp, rau muống giòn và hành tây vào chảo.',
          'Tăng lửa lớn, dùng vá đảo/xóc chảo thật nhanh tay liên tục trong 1 - 2 phút cho sốt nước mắm tỏi ớt bọc đẫm khắp bề mặt từng viên chiên.',
          'Rắc 1/2 thìa tiêu sọ xay thơm nồng rồi tắt bếp ngay.',
          'Trút cá viên chiên nước mắm ra đĩa lớn hoặc mẹt lót lá chuối. Phục vụ ăn kèm dưa leo, đu đủ muối chua ngọt và tương ớt xí muội!',
        ],
        description:
          'Trút viên chiên, đậu bắp, rau muống và hành tây vào chảo sốt, đảo xóc nhanh tay lửa lớn 1 - 2 phút cho sốt bám đẫm vàng óng. Rắc tiêu xay trút ra đĩa thưởng thức.',
        tip: 'Xóc nhanh trên lửa lớn giúp sốt bám chặt áo đều lớp vỏ giòn mà viên chiên không bị mềm xẹp.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm nên Mẹt Cá Viên Chiên Nước Mắm thơm ngon bất bại: 1. Khía hoa rãnh carô lên các viên chiên giúp viên chiên khi chiên nở phồng căng tròn và ngấm trọn vẹn sốt mắm; 2. Chiên ngập dầu lửa vừa ráo mỡ trước khi xóc sốt; 3. Sốt nước mắm tỏi ớt pha chuẩn tỷ lệ mắm - đường - tương ớt đun cùng chút bơ lạt cho kẹo quánh óng ả bọc đẫm từng viên chiên béo thơm cay nồng đỉnh cao!',
    recommendedSauce:
      'Sốt nước mắm tỏi ớt kẹo bơ thơm nức áo đẫm từng viên chiên, ăn kèm đồ chua dưa leo đu đủ ngâm & tương ớt xí muội cay ngọt.',
  },
  'banh-trang-tron-sa-te': {
    dishId: 'banh-trang-tron-sa-te',
    dishName: 'Bánh Tráng Trộn Bò Khô Sa Tế Tép Mỡ',
    seoTitle: 'Cách Làm Bánh Tráng Trộn Sa Tế Sốt Chua Ngọt Đậm Đà Chuẩn Vị',
    prepTime: '15 phút',
    cookTime: '10 phút',
    totalTime: '25 phút',
    servings: '2 - 3 người',
    difficulty: 'Dễ',
    calories: '320 - 420 kcal/đĩa',
    ingredients: [
      {
        category: 'Bánh tráng & Topping thập cẩm Sài Gòn',
        items: [
          '150g bánh tráng Tây Ninh dẻo mỏng (cắt sợi dài 0.5cm x 5cm)',
          '50g khô bò xé sợi & 50g khô gan bò đen (hoặc khô mực xé sợi)',
          '50g tép sấy giòn thơm (tép ruốc nhuộm đỏ)',
          '10 quả trứng cút luộc chín bóc vỏ (cắt đôi)',
          '1/2 quả xoài xanh/xoài keo (bào sợi mỏng giòn chua thanh)',
          '1 bó rau răm tươi (nhặt lá rửa sạch, cắt khúc 1cm)',
          '30g đậu phụng (lạc) rang chín đập dập & 30g hành phi vàng rụm',
        ],
      },
      {
        category: 'Sốt me sa tế tắc chua ngọt cay nồng',
        items: [
          '2 thìa canh sa tế ớt tỏi dầu màu điều (tạo vị cay nồng rực rỡ)',
          '2 thìa canh cốt me ngào & 2 thìa canh đường cát vàng',
          '1.5 thìa canh nước mắm nhĩ ngon & 1 thìa canh tương ớt',
          '1 thìa cà phê muối tôm Tây Ninh (tạo vị mặn ngọt đằm thắm)',
          '3 - 4 quả tắc (quất) tươi (vắt lấy nước cốt lọc hạt)',
          '2 thìa canh mỡ hành lá (hành lá cắt nhỏ dội mỡ sôi)',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Cắt bánh tráng sợi & Sơ chế các topping ăn kèm',
        time: '10 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Sợi bánh tráng tơi xốp ráo; topping giòn thơm chuẩn vị ăn vặt',
        actionPoints: [
          'Cắt bánh tráng: Dùng kéo cắt bánh tráng dẻo Tây Ninh thành từng sợi dài rộng khoảng 0.5cm - 0.8cm. Cho sợi bánh tráng vào thau trộn rộng rãi, dùng tay giũ nhẹ cho các sợi bánh tơi đều không dính chùm.',
          'Sơ chế topping: Xoài xanh rửa sạch gọt vỏ bào sợi mỏng giòn. Trứng cút luộc 5 phút bóc vỏ cắt đôi. Rau răm rửa sạch cắt khúc. Đậu phụng rang bóc vỏ đập dập nhẹ.',
        ],
        description:
          'Cắt bánh tráng dẻo thành sợi rộng 0.5cm giũ tơi. Bào sợi xoài xanh, bóc vỏ trứng cút luộc cắt đôi, rửa sạch rau răm và đập dập đậu phụng rang.',
        tip: 'Dùng bánh tráng dẻo phơi sương Tây Ninh loại mỏng giúp sợi bánh tự mềm dịu khi thấm sốt mà tuyệt đối không cần xịt nước làm bánh bị nhão dính.',
      },
      {
        step: 2,
        title: 'Pha sốt Me Sa Tế Tắc chua ngọt đậm đà',
        time: '5 phút',
        heat: 'Lửa nhỏ',
        goal: 'Hỗn hợp sốt me sa tế tắc dẻo sánh, vị chua ngọt mặn cay bùng nổ vị giác',
        actionPoints: [
          'Cho cốt me ngào, đường vàng, nước mắm nhĩ, tương ớt và 1 thìa canh nước lọc vào nồi nhỏ.',
          'Đun trên lửa nhỏ khuấy đều 2 - 3 phút cho đường tan hoàn toàn và sốt me dẻo sánh kẹo lại thì tắt bếp, trút ra bát để nguội.',
          'Hòa sa tế ớt tỏi dầu điều, muối tôm Tây Ninh và nước cốt tắc tươi vào bát sốt me, khuấy đều cho hòa quyện sánh mượt.',
        ],
        description:
          'Đun nhẹ cốt me với đường, nước mắm và tương ớt cho dẻo kẹo. Để nguội hòa sa tế ớt, muối tôm và nước cốt tắc tươi tạo sốt sánh kẹo chua ngọt.',
        tip: 'Nước cốt tắc tươi kết hợp sốt me ngào đun kẹo tạo nên vị chua thanh thơm mát đặc trưng, đánh tan hoàn toàn vị ngấy mỡ.',
      },
      {
        step: 3,
        title: 'Trộn bánh tráng thấm đẫm nước sốt & Thấm mềm dịu',
        time: '3 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Sợi bánh tráng bóng mướt màu đỏ cam, dẻo mềm nhẹ ngấm đẫm sốt me sa tế',
        actionPoints: [
          'Rưới 2 thìa canh mỡ hành lá và toàn bộ chén sốt me sa tế tắc lên thau bánh tráng sợi.',
          'Đeo găng tay nilong, bóp trộn nhẹ nhàng đều tay từ dưới lên trên trong 1 - 2 phút cho các sợi bánh tráng dịu mềm và ngấm đều màu đỏ cam óng ả của sa tế.',
          'Nêm 1 thìa cà phê muối tôm Tây Ninh rắc đều xóc lại nhẹ tay.',
        ],
        description:
          'Rưới mỡ hành và sốt me sa tế tắc vào thau bánh tráng. Đeo găng tay bóp nhẹ đều cho sợi bánh tráng dịu dẻo và thấm màu đỏ cam.',
        tip: 'Bóp trộn nhẹ tay không chà xát mạnh làm sợi bánh dính bết vón cục.',
      },
      {
        step: 4,
        title: 'Trút Topping thập cẩm & Thưởng thức Bánh Tráng Trộn',
        time: '2 phút',
        heat: 'Thưởng thức ngay',
        goal: 'Đĩa Bánh Tráng Trộn rực rỡ sắc màu, dẻo dai béo ngậy chua cay giòn thơm bùng nổ vị giác',
        actionPoints: [
          'Cho tiếp xoài xanh bào sợi, rau răm thái khúc, tép sấy giòn, khô bò xé sợi và khô gan bò đen vào thau bánh tráng.',
          'Trộn nhẹ nhàng thêm 30 giây cho topping hòa quyện đều.',
          'Trút bánh tráng trộn ra đĩa lớn hoặc túi nilon ăn vặt. Bày trứng cút cắt đôi lên mặt, rắc hành phi vàng rụm và đậu phụng rang giòn lên trên cùng.',
          'Thưởng thức ngay khi bánh tráng vừa dẻo dai thơm nức!',
        ],
        description:
          'Cho xoài xanh, rau răm, tép sấy, khô bò vào trộn nhẹ. Trút ra đĩa bày trứng cút, rắc hành phi và đậu phụng đập dập thưởng thức ngay.',
        tip: 'Bánh tráng trộn xong nên ăn ngay trong vòng 10 - 15 phút khi bánh dẻo dai giòn mát xoài xanh, tránh để quá lâu bánh sẽ bị ngấm nước dính vón.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm nên đĩa Bánh Tráng Trộn Sa Tế ngon chuẩn vị Sài Gòn: 1. Chọn bánh tráng dẻo mỏng Tây Ninh cắt sợi tơi, không xịt nước giúp bánh tự mềm dẻo khi ngấm sốt; 2. Sốt me sa tế đun kẹo pha nước tắc tươi và muối tôm tạo vị chua ngọt cay nồng đằm thắm ngập tràn hương vị; 3. Trộn bánh tráng ngấm sốt mềm dịu trước mới cho xoài xanh, rau răm, khô bò và hành phi vào trộn nhẹ giúp đĩa bánh tráng tơi xốp giòn mát bùng nổ vị giác!',
    recommendedSauce:
      'Sốt me sa tế tắc chua ngọt cay nồng hòa quyện muối tôm Tây Ninh bám đẫm từng sợi bánh tráng dẻo thơm.',
  },
  'suon-nuong-bbq': {
    dishId: 'suon-nuong-bbq',
    dishName: 'Dẻ Sườn Heo Nướng Tảng BBQ Sốt Khói',
    seoTitle: 'Cách Làm Dẻ Sườn Heo Nướng BBQ Bằng Nồi Chiên Không Dầu Mềm Tan Róc Xương',
    prepTime: '20 phút (ướp 1 - 2 giờ)',
    cookTime: '25 - 30 phút',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Nguyên liệu chính',
        items: [
          '800g - 1kg dẻ sườn heo non nguyên tảng tươi ngon',
          'Giấy bạc nướng thực phẩm',
        ],
      },
      {
        category: 'Sốt ướp sườn BBQ đậm đà',
        items: [
          '4 thìa canh sốt BBQ (loại sốt khói hun gỗ sồi)',
          '2 thìa canh mật ong nguyên chất',
          '1 thìa canh dầu hào Maggi',
          '1 thìa canh tương cà chua (ketchup)',
          '1 thìa canh nước tương đậm đặc',
          '1 thìa cà phê bột tỏi (hoặc 1 củ tỏi băm vắt lấy nước)',
          '1/2 thìa cà phê ớt bột Paprika tạo màu',
          '1/2 thìa cà phê tiêu đen xay vỡ',
        ],
      },
      {
        category: 'Rau củ ăn kèm',
        items: [
          'Dưa leo, xà lách giòn, cà chua bi',
          'Khoai tây chiên hoặc bắp ngọt nướng bơ',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế và làm sạch sườn',
        time: '10 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Sườn sạch mùi hôi, róc màng gân để gia vị thấm sâu vào từng thớ thịt',
        actionPoints: [
          'Dẻ sườn rửa sạch với nước muối loãng pha chút giấm trắng, dùng khăn giấy đa năng thấm thật khô ráo.',
          'Dùng mũi dao nhọn luồn vào bóc sạch lớp màng trắng mỏng ở mặt sau của dẻ sườn (lớp màng này khiến sườn bị dai và khó ngấm gia vị).',
          'Dùng dao khía nhẹ vài đường dọc theo các kẽ xương sườn.',
        ],
        description:
          'Sườn rửa sạch với nước muối loãng, thấm khô ráo. Dùng dao bóc sạch lớp màng gân trắng phía sau sườn để khi nướng sườn róc xương và thấm gia vị tối đa.',
        tip: 'Bóc sạch lớp màng trắng ở mặt sau là bí quyết then chốt giúp sườn róc xương mềm tan chuẩn phong cách nhà hàng nướng Âu.',
      },
      {
        step: 2,
        title: 'Pha sốt và ướp sườn tảng ngấm sâu',
        time: '15 phút (ướp 1 - 2 giờ)',
        heat: 'Nhiệt độ phòng / Ngăn mát tủ lạnh',
        goal: 'Sườn thấm đẫm hương vị sốt BBQ, màu sắc nâu đỏ hấp dẫn',
        actionPoints: [
          'Trộn đều hỗn hợp: 4 thìa sốt BBQ, 2 thìa mật ong, 1 thìa dầu hào, 1 thìa tương cà, 1 thìa nước tương, 1 thìa bột tỏi, 1/2 thìa tiêu đen và 1/2 thìa bột ớt Paprika trong bát.',
          'Đeo găng tay, xoa đều 2/3 lượng sốt lên khắp hai mặt tảng sườn, massage nhẹ nhàng trong 3 phút.',
          'Giữ lại 1/3 lượng sốt để phết ở giai đoạn nướng cuối.',
          'Bọc kín sườn trong màng bọc thực phẩm, để ngăn mát tủ lạnh ướp từ 1 - 2 giờ (hoặc ướp qua đêm càng ngon).',
        ],
        description:
          'Pha hỗn hợp sốt BBQ cùng mật ong, dầu hào, tương cà và tiêu tỏi. Thoa đều 2/3 lượng sốt lên khắp tảng sườn và ướp ít nhất 1 giờ. Giữ lại 1/3 sốt để quét bóng ở bước cuối.',
      },
      {
        step: 3,
        title: 'Nướng lần 1 bọc giấy bạc (Làm sườn chín mọng nước)',
        time: '18 phút',
        heat: 'Nồi chiên không dầu / Lò nướng 170°C',
        goal: 'Thịt sườn chín thấu từ trong tủy, mọng nước, không bị khô bề mặt',
        actionPoints: [
          'Làm nóng nồi chiên không dầu ở 180°C trước 5 phút.',
          'Đặt tảng sườn vào giữa tấm giấy bạc, gói kín các mép lại sao cho hơi nước không thoát ra ngoài.',
          'Cho gói sườn vào nồi chiên không dầu, nướng ở 170°C trong 18 phút.',
        ],
        description:
          'Bọc kín tảng sườn trong giấy bạc rồi nướng ở 170°C trong 18 phút. Giấy bạc giúp giữ trọn vẹn nước ngọt từ xương, giúp thịt chín mềm từ bên trong mà không bị khô cứng.',
        tip: 'Gói thật kín mép giấy bạc để nước ngọt tự nhiên từ thịt sườn không bị bốc hơi.',
      },
      {
        step: 4,
        title: 'Nướng lần 2 quét sốt mật ong (Tạo màu cánh gián caramen)',
        time: '8 phút',
        heat: 'Nồi chiên không dầu 185°C - 190°C',
        goal: 'Bề mặt sườn nâu óng ánh caramen, dậy mùi thơm khói BBQ quyến rũ',
        actionPoints: [
          'Mở gói giấy bạc, gập gọn giấy bạc sát đáy nồi để lộ toàn bộ mặt thịt sườn lên trên.',
          'Dùng cọ quét đều lớp sốt BBQ mật ong đã để dành lên khắp bề mặt sườn.',
          'Tăng nhiệt nồi chiên lên 185°C, nướng trong 5 phút.',
          'Lật mặt sườn, quét tiếp sốt và nướng thêm 3 phút ở 190°C cho bề mặt xém vàng nâu óng ả.',
        ],
        description:
          'Mở giấy bạc, quét phần sốt BBQ mật ong còn lại lên bề mặt sườn rồi nướng tiếp ở 185°C - 190°C trong 8 phút cho sốt cô lại, ngả màu nâu cánh gián bóng loáng và thơm nức mũi.',
      },
    ],
    chefSecret:
      'Bóc sạch lớp màng gân trắng phía sau dẻ sườn và bọc kín giấy bạc trong 18 phút đầu là bí quyết 2 giai đoạn giúp sườn chín mọng nước, mềm róc xương chuẩn phong cách tiệc nướng nhà hàng.',
    recommendedSauce:
      'Chấm cùng sốt BBQ pha mật ong hoặc muối ớt xanh chua cay, ăn kèm bắp nướng bơ và dưa chuột giòn mát.',
  },
  'pho-bo-tai-lan': {
    dishId: 'pho-bo-tai-lan',
    dishName: 'Phở Bò Tái Lăn Hà Nội',
    seoTitle: 'Cách Nấu Phở Bò Tái Lăn Hà Nội Thơm Nức, Đậm Đà Chuẩn Vị Phố Cổ',
    prepTime: '25 phút',
    cookTime: '3 - 4 giờ (nước dùng) / 5 phút (xào bò)',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Nguyên liệu chính',
        items: [
          '500g thịt bò thăn mềm (thái mỏng ngang thớ)',
          '1kg bánh phở tươi',
          '1.5kg xương ống bò hoặc xương đuôi',
          'Hành lá (cắt khúc 3cm và đầu hành chẻ), ngò gai, rau mùi',
        ],
      },
      {
        category: 'Hương liệu nấu nước dùng',
        items: [
          '1 củ gừng già nướng thơm đập dập',
          '3 củ hành tím nướng',
          '2 hoa hồi, 1 thanh quế, 1 thảo quả nướng thơm',
          'Gia vị: Nước mắm ngon, muối hạt, đường phèn, hạt nêm',
        ],
      },
      {
        category: 'Gia vị xào tái lăn',
        items: [
          '2 củ tỏi băm nhuyễn',
          '1 củ gừng thái chỉ nhỏ',
          '2 thìa canh mỡ nước (hoặc dầu ăn)',
          '1 thìa cà phê tiêu bắc xay, 1 thìa canh nước mắm cốt',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Hầm nước dùng chuẩn vị Phở Bắc',
        time: '3 - 4 giờ',
        heat: 'Lửa liu riu (nhỏ nhất)',
        goal: 'Nước dùng trong veo, vị ngọt sâu tự nhiên từ tủy xương bò, dậy mùi quế hồi thơm nức',
        actionPoints: [
          'Chần 1.5kg xương ống bò trong nồi nước sôi có gừng đập dập và 1 thìa muối hạt khoảng 5 phút để khử sạch cặn bọt bẩn và mùi gây.',
          'Vớt xương ra rửa lại thật sạch dưới vòi nước lạnh, cho vào nồi lớn cùng 4 lít nước lọc.',
          'Thêm 1 củ gừng già và 3 củ hành tím đã nướng thơm cháy xém đập dập.',
          'Đun sôi bùng rồi hạ ngay lửa liu riu, hớt bọt liên tục trong 30 phút đầu. Tuyệt đối không đậy kín vung.',
          'Nướng thơm 2 hoa hồi, 1 thanh quế, 1 thảo quả cho vào túi vải lọc, thả vào nồi ninh trong 60 phút cuối.',
          'Nêm 3 thìa canh nước mắm cốt nhĩ, 1 thìa canh đường phèn và 1 thìa muối hạt cho vừa vị thanh ngọt.',
        ],
        description:
          'Xương bò chần qua nước sôi cùng gừng và muối để khử sạch bọt bẩn. Rửa lại thật sạch rồi cho vào nồi hầm cùng 4 lít nước, gừng và hành tím nướng. Ninh lửa liu riu, hớt bọt liên tục. Cho túi hoa hồi, quế, thảo quả vào nồi ninh trong 1 tiếng cuối rồi nêm nước mắm cốt và đường phèn vừa miệng.',
        tip: 'Không đậy kín vung và tuyệt đối không ninh lửa lớn để nước dùng giữ được độ trong veo thanh ngọt.',
      },
      {
        step: 2,
        title: 'Sơ chế thịt bò và rau thơm',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Thịt bò thái mỏng dính ngang thớ, ngấm nhẹ gia vị mà không bị chảy nước',
        actionPoints: [
          'Thịt bò thăn dùng dao sắc thái mỏng tang ngang thớ để khi xào thịt mềm tơi, không bị dai.',
          'Ướp thịt với 1/2 phần tỏi băm nhuyễn, gừng già thái chỉ, 1/2 thìa cà phê tiêu bắc và 1/2 thìa canh nước mắm cốt.',
          'Đầu hành lá chẻ sợi dài ngâm ngay vào âu nước đá lạnh 5 phút cho cong tròn giòn rụm.',
          'Phần lá hành hoa, ngò gai (mùi tàu) và rau mùi rửa sạch, vẩy ráo nước rồi cắt nhỏ 1cm.',
        ],
        description:
          'Thịt bò thăn thái lát mỏng tang, ướp cùng 1/2 phần tỏi băm, gừng thái chỉ, chút tiêu và nửa thìa mắm. Hành hoa phần cọng chẻ sợi ngâm nước đá cho cong nhẹ, phần lá cắt khúc ngắn.',
      },
      {
        step: 3,
        title: 'Kỹ thuật xào tái lăn chảo gang bốc khói',
        time: '45 - 60 giây',
        heat: 'Lửa cực đại (chảo bốc khói)',
        goal: 'Thịt bò vừa chín tới tái hồng, mềm mọng nước, dậy mùi khói xém chảo đặc trưng',
        actionPoints: [
          'Đặt chảo gang dày lên bếp, bật lửa lớn nhất cho chảo thật nóng già đến khi hơi bốc khói nhẹ.',
          'Cho 2 thìa canh mỡ lợn (hoặc dầu ăn) vào láng đều lòng chảo, trút phần tỏi băm còn lại vào phi nhanh 5 giây.',
          'Trút toàn bộ thịt bò và gừng chỉ vào, dùng muôi đảo cực nhanh tay với lực mạnh liên tục.',
          'Khi thịt vừa chuyển màu tái hồng (khoảng 45 - 60 giây), rắc một nắm đầu hành chẻ vào đảo lướt 5 giây rồi trút ngay ra đĩa.',
        ],
        description:
          'Đặt chảo gang lên bếp lửa cực lớn cho chảo thật nóng già. Cho mỡ lợn hoặc dầu ăn vào, phi thơm nhanh tỏi băm. Trút thịt bò vào đảo cực nhanh tay trong khoảng 45 - 60 giây cho thịt vừa chín tới tái hồng thì trút ra đĩa ngay.',
        tip: 'Lửa phải thật to để thịt bò giữ nguyên độ ngọt mềm, dậy mùi thơm khói xém đặc trưng mà không bị ra nước hay dai.',
      },
      {
        step: 4,
        title: 'Trần bánh phở và chan nước dùng nóng hổi',
        time: '3 - 5 phút',
        heat: 'Nồi nước dùng sôi sùng sục',
        goal: 'Bát phở bốc khói nghi ngút, bánh phở mềm mướt không nát, nước dùng ngập thơm lừng',
        actionPoints: [
          'Đun một nồi nước sôi riêng, cho bánh phở vào rây chần nhanh trong 15 - 20 giây rồi vẩy thật ráo nước.',
          'Cho bánh phở vào bát tô lớn, xếp thịt bò tái lăn lên trên bề mặt.',
          'Rải đều hành hoa, đầu hành chẻ cong và ngò gai thái nhỏ quanh bát.',
          'Múc nước dùng đang sôi sùng sục trên bếp chan đều từ từ quanh bát ngập bánh phở và thịt bò.',
        ],
        description:
          'Trần bánh phở qua nước sôi, vẩy ráo cho vào bát tô. Xếp thịt bò tái lăn lên trên, thêm nhiều đầu hành, hành hoa và ngò gai. Múc nước dùng đang sôi sùng sục chan đều ngập bánh phở.',
      },
    ],
    chefSecret:
      'Linh hồn của phở tái lăn là mùi khói chảo gang và gừng tỏi phi già. Dùng mỡ lợn thay cho dầu ăn thực vật sẽ giúp tô phở bóng đẹp, béo ngậy và thơm lừng đúng chuẩn phố Lò Đúc.',
    recommendedSauce: 'Ăn kèm giấm tỏi ớt ngâm chua cay, quẩy giòn rụm và chanh tươi.',
  },

  'pho-bo-sot-vang': {
    dishId: 'pho-bo-sot-vang',
    dishName: 'Phở Bò Sốt Vang Gia Truyền',
    seoTitle: 'Cách Nấu Phở Bò Sốt Vang Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    prepTime: '30 phút',
    cookTime: '2.5 - 3 giờ (ninh xương bò & hầm sốt vang)',
    difficulty: 'Trung bình',
    servings: '4 - 6 người',
    ingredients: [
      {
        category: 'Thịt bò & Xương ninh nước dùng',
        items: [
          '800g nạm bò, dẻ sườn hoặc bắp hoa bò có chút gân dẻo (thái quân cờ 2.5 - 3cm)',
          '1.2kg xương ống bò (hoặc xương bay) ninh nước dùng ngọt thanh sâu',
          '1kg bánh phở tươi sợi mỏng mềm',
        ],
      },
      {
        category: 'Gia vị ướp sốt vang & Hương liệu thảo mộc',
        items: [
          '120ml - 150ml rượu vang đỏ (vang Đà Lạt hoặc Bordeaux)',
          '3 - 4 quả cà chua chín đỏ mọng (băm nhuyễn) + 1 thìa canh tomato paste (tương cà đậm đặc)',
          '2 hoa hồi, 1 thanh quế, 1 quả thảo quả (nướng thơm đập dập)',
          '1/2 thìa cà phê bột ngũ vị hương (không cho quá nhiều)',
          '2 thìa canh dầu màu điều (tạo màu đỏ cam sóng sánh tự nhiên)',
          '1 củ gừng già, 2 củ tỏi khô, 3 củ hành khô tím băm nhuyễn',
          'Gia vị: Nước mắm cốt nhĩ truyền thống, muối hạt, tiêu sọ xay, đường phèn, hạt nêm',
        ],
      },
      {
        category: 'Rau thơm & Đồ ăn kèm',
        items: [
          'Hành hoa (phần lá thái nhỏ, gốc hành trắng chẻ sợi ngâm nước đá)',
          'Rau mùi ta (ngò rí), mùi tàu (ngò gai) rửa sạch thái nhỏ',
          'Giấm ngâm tỏi ớt, tương ớt sa tế chưng cay nồng, chanh tươi, quẩy giòn',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Ninh nước dùng xương bò ngọt thanh tự nhiên',
        time: '2 - 3 giờ',
        heat: 'Lửa liu riu sau khi sôi',
        goal: 'Nước dùng trong vắt, ngọt sâu từ tủy xương bò, thơm dịu hành gừng nướng',
        actionPoints: [
          'Chần 1.2kg xương ống bò qua nước sôi có gừng đập dập và 1 thìa muối hạt khoảng 5 phút để khử sạch mùi gây và bọt cặn.',
          'Vớt xương ra rửa thật sạch dưới vòi nước lạnh rồi cho vào nồi lớn cùng 3.5 - 4 lít nước sạch.',
          'Thêm 1 củ gừng già và 2 củ hành tím đã nướng thơm đập dập vào nồi hầm.',
          'Đun sôi bùng rồi hạ ngay lửa nhỏ nhất ninh liu riu, hé nắp vung và vớt bọt liên tục để nước dùng luôn trong veo thanh khiết.',
        ],
        description:
          'Xương ống bò chần qua nước sôi cùng gừng và muối để khử sạch bọt bẩn. Rửa lại thật sạch rồi cho vào nồi hầm cùng 4 lít nước, gừng và hành tím nướng thơm. Ninh lửa liu riu, hớt bọt liên tục để nước dùng trong ngọt làm cốt nền cho phở.',
        tip: 'Mở hé nắp vung và ninh lửa liu riu, không đậy kín để nước dùng trong veo, không bị đục ngầu.',
      },
      {
        step: 2,
        title: 'Sơ chế và ướp thịt bò sốt vang',
        time: '30 - 45 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Thịt bò ngấm sâu hương rượu vang, gia vị và thảo mộc, thớ thịt đỏ hồng thơm phức',
        actionPoints: [
          'Dẻ sườn hoặc bắp gân bò chần sơ qua nước sôi gừng khử mùi, rửa sạch, cắt miếng vuông quân cờ khoảng 2.5 - 3cm.',
          'Ướp thịt với: 1/2 lượng rượu vang đỏ (khoảng 70ml), 1/2 thìa cà phê bột ngũ vị hương, 1 thìa canh tỏi băm, 1 thìa canh gừng băm, 1.5 thìa canh nước mắm cốt nhĩ, 1 thìa cà phê tiêu sọ xay, 1 thìa cà phê hạt nêm và 1 thìa canh dầu màu điều.',
          'Trộn bóp đều tay cho thịt ngấm đều gia vị, bọc kín âu để nghỉ trong 30 - 45 phút.',
        ],
        description:
          'Thịt dẻ sườn/gân bắp bò sơ chế sạch, thái miếng vuông quân cờ vừa ăn. Ướp thịt cùng một nửa phần rượu vang đỏ, tỏi gừng băm, ngũ vị hương, nước mắm, tiêu sọ và dầu màu điều trong 30 - 45 phút cho ngấm đậm.',
        tip: 'Chọn thịt dẻ sườn hoặc bắp bò có dải gân trong xen kẽ. Khi hầm lâu, gân mềm dẻo như thạch béo bùi, thịt ngậm nước không bị khô xác.',
      },
      {
        step: 3,
        title: 'Xào sốt cà chua và xào săn thịt bò',
        time: '10 - 12 phút',
        heat: 'Lửa lớn',
        goal: 'Thịt bò săn chắc, áo đều lớp sốt cà chua màu điều đỏ cam óng ả thơm lừng',
        actionPoints: [
          'Bắc nồi gang hoặc chảo sâu lòng lên bếp, cho 2 thìa canh dầu màu điều vào phi thơm hành tím và tỏi băm.',
          'Trút cà chua băm nhuyễn và 1 thìa tương cà (tomato paste) vào xào chín mềm, dầm nhuyễn tạo thành hỗn hợp sốt đỏ sánh mịn tự nhiên.',
          'Trút toàn bộ thịt bò đã ướp vào xào đảo nhanh tay trên lửa lớn trong 5 - 7 phút cho các mặt thịt se lại, ngấm đẫm sốt cà chua thơm nức mũi.',
        ],
        description:
          'Phi thơm hành tỏi với dầu màu điều, cho cà chua băm và tương cà vào xào chín nhuyễn thành sốt đỏ óng. Trút thịt bò vào đảo lửa lớn cho thịt săn lại và quyện đều lớp sốt đậm đà.',
      },
      {
        step: 4,
        title: 'Hầm thịt bò sốt vang mềm nhừ & hòa quyện nước dùng',
        time: '50 - 60 phút',
        heat: 'Lửa nhỏ liu riu',
        goal: 'Thịt bò chín mềm nhừ tan trên đầu lưỡi, gân dẻo trong, nước sốt vang đỏ sánh thơm ngát mùi thảo mộc',
        actionPoints: [
          'Nướng thơm 2 hoa hồi, 1 thanh quế và 1 thảo quả, cho vào túi lọc gia vị rồi thả vào nồi thịt bò.',
          'Chắt khoảng 1.8 - 2 lít nước ninh xương bò trong ngọt từ Bước 1 chế ngập nồi thịt bò.',
          'Đun sôi bùng, hớt sạch bọt rồi hạ lửa liu riu, đậy vung hầm khoảng 50 - 60 phút đến khi thịt bò mềm nhừ, gân bò dẻo trong.',
          'Trước khi tắt bếp 10 phút, rưới 70ml rượu vang đỏ còn lại vào nồi, nêm thêm 1 thìa canh nước mắm cốt nhĩ và 1 thìa đường phèn cho vị ngọt hậu hài hòa.',
        ],
        description:
          'Cho túi hoa hồi, quế, thảo quả nướng vào nồi thịt bò. Chế nước ninh xương bò vào ngập thịt, đun sôi rồi hạ lửa hầm liu riu 50 - 60 phút đến khi thịt mềm nhừ. Thêm phần rượu vang còn lại vào 10 phút cuối và nêm lại nước mắm, đường phèn cho tròn vị.',
        tip: 'Chia rượu vang làm 2 đợt: Đợt đầu ướp giúp thịt mềm và khử mùi; đợt hai cho vào cuối giai đoạn hầm giúp bát phở giữ trọn vẹn hương nồng nàn quyến rũ của vang đỏ.',
      },
      {
        step: 5,
        title: 'Trần bánh phở và thưởng thức tô phở bò sốt vang bốc khói',
        time: '5 phút',
        heat: 'Nồi nước phở sôi sùng sục',
        goal: 'Tô phở nóng hổi nghi ngút khói, màu hổ phách sóng sánh, thịt bò mềm dẻo, nước dùng thanh ngọt đậm đà',
        actionPoints: [
          'Chần bánh phở tươi qua nồi nước sôi trong 15 - 20 giây, xóc thật ráo nước rồi chia vào các tô sứ.',
          'Gắp từng miếng thịt bò sốt vang và gân dẻo xếp lên giữa mặt tô phở.',
          'Rải đều hành hoa, rau mùi ta, mùi tàu thái nhỏ và vài cọng đầu hành trắng chẻ sợi xung quanh.',
          'Múc nước sốt vang nóng hổi đang sôi lục bục trên bếp chan đều ngập bánh phở, nước dùng màu nâu đỏ hổ phách sánh mịn óng ả.',
          'Thưởng thức ngay khi còn bốc khói cùng giấm tỏi ớt, sa tế chưng cay nồng, chanh tươi và đĩa quẩy giòn rụm.',
        ],
        description:
          'Chần bánh phở tươi qua nước sôi, cho vào tô. Xếp thịt bò sốt vang lên trên, rắc hành hoa, mùi tàu và đầu hành chẻ. Chan nước dùng sốt vang nóng hổi ngập bánh phở. Ăn kèm giấm tỏi, ớt sa tế và quẩy nóng.',
      },
    ],
    chefSecret:
      'Bí quyết phở bò sốt vang chuẩn vị gia đình là sự hòa quyện giữa nước dùng xương bò ninh ngọt thanh và thịt dẻ sườn bò hầm rượu vang đỏ. Tuyệt đối không dùng bột sắn hay bột năng làm sánh đặc như món bò kho bánh mì; nước phở phải giữ được độ thanh mướt, sóng sánh tự nhiên từ cà chua chín và tủy bò.',
    recommendedSauce:
      'Ăn kèm giấm tỏi ớt truyền thống Hà Nội, tương ớt xào (sa tế chưng cay), vài cọng đầu hành chẻ và đĩa quẩy giòn tan.',
  },

  'pho-bo-tai-nam-gau': {
    dishId: 'pho-bo-tai-nam-gau',
    dishName: 'Phở Bò Tái Nạm Gầu Truyền Thống',
    seoTitle: 'Cách Nấu Phở Bò Tái Nạm Gàu Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    prepTime: '40 phút',
    cookTime: '3 - 4 giờ (ninh xương & luộc thịt bò)',
    difficulty: 'Cầu kỳ',
    servings: '4 - 6 người',
    ingredients: [
      {
        category: 'Xương & Các loại thịt bò tươi ngon',
        items: [
          '1.5kg xương ống bò (hoặc xương bay/xương đuôi) ninh nước dùng thanh trong',
          '400g gầu bò giòn (chọn miếng gầu hoa có lớp mỡ trắng giòn xen kẽ)',
          '400g nạm bò (phần thịt nạm dải xen gân mềm dẻo ngọt đậm)',
          '300g thịt thăn/phi lê bò tươi thái thật mỏng để chần tái',
          '1kg bánh phở tươi sợi mỏng mềm mướt',
        ],
      },
      {
        category: 'Hương liệu thảo mộc & Gia vị nước dùng phở Bắc',
        items: [
          '2 củ gừng già, 3 củ hành tây, 5 củ hành khô tím (nướng xém vỏ thơm phức)',
          'Bộ thảo mộc phở Bắc: 3 hoa hồi, 1 quả thảo quả, 1 thanh quế, 1 thìa tiểu hồi, 1 thìa hạt mùi rang thơm',
          'Gia vị: Nước mắm cốt nhĩ cá cơm truyền thống hảo hạng, muối hạt, đường phèn, tiêu sọ xay',
        ],
      },
      {
        category: 'Rau thơm & Đồ ăn kèm chuẩn vị',
        items: [
          'Hành hoa (lá thái nhỏ, cọng đầu hành trắng chẻ sợi ngâm nước đá)',
          'Rau mùi ta (ngò rí), mùi tàu (ngò gai), húng Láng',
          'Giấm ngâm tỏi ớt truyền thống, tương ớt phở Bắc, chanh tươi, quẩy giòn tan',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế và khử sạch mùi gây của xương ống bò',
        time: '20 phút',
        heat: 'Lửa lớn',
        goal: 'Khử sạch toàn bộ tiết đọng, bọt bẩn và mùi gây đặc trưng của bò',
        actionPoints: [
          'Xương ống bò ngâm nước muối loãng 30 phút, chặt đôi để lộ tủy.',
          'Cho xương vào nồi ngập nước lạnh cùng 1 củ gừng đập dập và 1 thìa muối hạt, đun sôi bùng trong 5 - 7 phút để bọt bẩn nổi lên hết.',
          'Vớt xương ra xối rửa thật sạch từng ngóc ngách dưới vòi nước lạnh, cạo sạch mảng đen bám quanh xương.',
        ],
        description:
          'Xương bò chần nước sôi gừng muối để tẩy sạch bọt cặn và mùi gây. Rửa lại thật sạch dưới vòi nước lạnh.',
        tip: 'Khâu chần và rửa xương quyết định đến 90% độ trong và thơm của nồi nước dùng phở bò.',
      },
      {
        step: 2,
        title: 'Ninh nước dùng thảo mộc thơm lừng & Luộc nạm gầu giòn ngọt',
        time: '3 - 3.5 giờ',
        heat: 'Lửa liu riu sau khi sôi',
        goal: 'Nước dùng trong veo óng ánh, ngọt sâu từ tủy xương, nạm và gầu chín mềm thơm phức',
        actionPoints: [
          'Cho xương ống đã làm sạch vào nồi lớn cùng 5 lít nước sạch. Thả hành tây, hành tím và gừng đã nướng xém cạo vỏ đập dập vào cùng.',
          'Cho miếng nạm bò và gầu bò đã rửa sạch vào luộc chung trong nồi nước dùng để nước thêm ngọt béo tự nhiên.',
          'Sau khi sôi, hạ lửa nhỏ nhất ninh liu riu, hé nắp vung và vớt bọt liên tục.',
          'Sau khoảng 1.5 - 2 giờ, dùng đũa xiên thử thấy nạm và gầu bò chín tới, mềm nhưng vẫn giữ độ giòn sần sật thì vớt ra ngay.',
          'Rang thơm hoa hồi, thảo quả đập dập, quế, tiểu hồi, hạt mùi rồi cho vào túi lọc gia vị, thả vào nồi nước dùng đun liu riu thêm 1 giờ.',
        ],
        description:
          'Hầm xương ống cùng hành gừng nướng và miếng nạm, gầu bò trên lửa nhỏ liu riu. Vớt nạm gầu khi chín tới. Cho túi thảo mộc nướng vào nồi nước dùng hầm tiếp cho dậy mùi thơm phở truyền thống.',
      },
      {
        step: 3,
        title: 'Ngâm lạnh và thái mỏng nạm gầu, chuẩn bị thịt bò tái',
        time: '15 phút',
        heat: 'Nhiệt độ phòng & nước đá',
        goal: 'Gầu bò giòn sần sật không bị ngấy, nạm bò mềm mọng, thớ thịt thái mỏng bản to',
        actionPoints: [
          'Ngay khi vớt nạm bò và gầu bò ra, thả ngay vào thau nước đá lạnh ngập miếng thịt trong 15 phút để thịt săn chắc, bì gầu giòn và không bị thâm xỉn màu.',
          'Vớt thịt ra để ráo, dùng dao sắc thái lát thật mỏng, bản to đẹp mắt.',
          'Thịt thăn bò tươi lau khô, thái lát thật mỏng ngang thớ, dùng sống dao dần nhẹ cho thịt mềm tơi.',
        ],
        description:
          'Nạm và gầu bò vớt ra ngâm nước đá lạnh cho giòn săn rồi thái lát mỏng. Thịt thăn bò thái mỏng ngang thớ để chần tái.',
        tip: 'Muốn gầu bò thái thật mỏng và giòn, sau khi ngâm đá có thể bọc màng thực phẩm cất vào ngăn mát tủ lạnh 30 phút rồi mới thái.',
      },
      {
        step: 4,
        title: 'Nêm nếm và hoàn thiện nồi nước dùng phở trong veo',
        time: '15 phút',
        heat: 'Lửa nhỏ giữ sôi lăn tăn',
        goal: 'Vị nước dùng thanh ngọt đậm đà, thơm dịu hương hồi quế, không bị mặn gắt',
        actionPoints: [
          'Vớt túi thảo mộc ra (không ngâm thảo mộc quá lâu làm đen nước và nồng gắt).',
          'Nêm vào nồi nước dùng: 3 - 4 thìa canh nước mắm cốt nhĩ hảo hạng, 1 viên đường phèn nhỏ (tạo vị ngọt thanh hậu), muối hạt vừa miệng.',
          'Giữ nồi nước dùng luôn sôi lăn tăn bốc khói nghi ngút trên bếp.',
        ],
        description:
          'Vớt túi thảo mộc ra, nêm nước mắm cốt ngon, đường phèn và muối hạt cho vừa miệng. Nước dùng phải sôi lăn tăn trước khi chan.',
      },
      {
        step: 5,
        title: 'Chần bánh phở, xếp thịt bò và chan nước dùng thưởng thức',
        time: '5 phút',
        heat: 'Nồi nước sôi sùng sục',
        goal: 'Tô phở nóng bỏng tay, bánh phở mềm mướt, thịt bò tái hồng hào mọng nước quyện gầu nạm giòn béo',
        actionPoints: [
          'Chần bánh phở tươi qua nồi nước sôi trong 15 giây, xóc thật ráo nước rồi chia vào từng tô sứ dày giữ nhiệt.',
          'Xếp thịt gầu giòn và nạm mềm sang một góc tô.',
          'Lấy muôi đặt phần thịt bò tái thái mỏng, nhúng nhanh vào nồi nước dùng sôi sùng sục cho thịt se lại chuyển màu hồng phớt rồi trút lên giữa tô phở.',
          'Rắc hành hoa, rau mùi thái nhỏ và đầu hành chẻ sợi lên trên.',
          'Múc nước dùng phở đang sôi sùng sục chan đều ngập bánh phở và tráng đều qua miếng thịt bò tái.',
          'Thưởng thức ngay khi còn bốc khói cùng giấm tỏi ớt, sa tế, chanh tươi và đĩa quẩy giòn tan.',
        ],
        description:
          'Chần bánh phở cho vào tô, xếp nạm gầu và thịt bò chần tái lên trên. Rắc hành mùi, đầu hành chẻ rồi chan nước dùng sôi sùng sục. Ăn kèm giấm tỏi ớt và quẩy giòn.',
      },
    ],
    chefSecret:
      'Phở bò tái nạm gầu chuẩn vị Hà Nội cần sự tinh tế trong việc luộc thịt: Luộc gầu và nạm ngay trong nồi ninh xương để nước dùng có độ béo ngậy tự nhiên, sau đó sốc nhiệt ngay vào nước đá lạnh để giữ độ giòn sần sật của gầu hoa. Nước dùng chỉ nêm nước mắm cốt nhĩ và đường phèn thanh nhẹ, không lạm dụng quế hồi làm át đi vị ngọt nguyên bản của xương tủy bò.',
    recommendedSauce:
      'Ăn kèm giấm tỏi ngâm chua cay, tương ớt phở Hà Nội (tương ớt xay nhuyễn cay thanh), chanh cốm và đĩa quẩy vàng giòn rụm.',
  },

  'pho-ga-ta-la-chanh': {
    dishId: 'pho-ga-ta-la-chanh',
    dishName: 'Phở Gà Ta Lá Chanh Truyền Thống',
    seoTitle: 'Cách Nấu Phở Gà Ta Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    prepTime: '30 phút',
    cookTime: '1.5 - 2 giờ',
    difficulty: 'Trung bình',
    servings: '4 - 6 người',
    ingredients: [
      {
        category: 'Gà ta & Xương ninh nước dùng',
        items: [
          '1 con gà ta thả vườn (khoảng 1.6 - 1.8kg, gà mái dầu da vàng, thịt chắc ngọt)',
          '500g xương gà (hoặc xương ống heo) ninh thêm cho nước dùng ngọt sâu thanh tao',
          '1kg bánh phở tươi sợi mỏng mềm mướt',
        ],
      },
      {
        category: 'Hương liệu nước dùng phở gà thanh khiết',
        items: [
          '1 củ gừng già, 4 củ hành tím khô (nướng thơm đập dập)',
          '1 củ hành tây nướng ngọt, 1 nắm rễ mùi ta (ngò rí) và rễ hành hoa rửa thật sạch',
          '1 thìa cà phê hạt mùi rang thơm (cho vào túi lọc gia vị)',
          'Gia vị: Nước mắm cốt nhĩ ngon hảo hạng, muối hạt, đường phèn, tiêu sọ xay mịn',
          '1 nhánh nghệ tươi nhỏ giã lấy nước cốt (quét tạo màu da gà vàng ươm óng ả)',
        ],
      },
      {
        category: 'Rau thơm & Đồ ăn kèm chuẩn vị',
        items: [
          '10 - 12 lá chanh bánh tẻ (rửa sạch, lau khô, cuộn tròn thái sợi chỉ siêu mỏng)',
          'Hành hoa (lá thái nhỏ, gốc hành trắng chẻ sợi ngâm nước đá xoăn tít)',
          'Rau mùi ta (ngò rí), rau húng láng',
          'Giấm ngâm tỏi ớt, chanh tươi, ớt hiểm tươi thái lát, quẩy giòn rụm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế gà ta và quét mỡ nghệ vàng óng',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Gà sạch hoàn toàn mùi hôi, da vàng ươm bắt mắt',
        actionPoints: [
          'Gà ta mổ sạch, xát muối hạt và gừng đập dập khắp trong ngoài rồi rửa lại thật sạch, để ráo.',
          'Phần mỡ gà áp chảo lấy nước mỡ, hòa cùng chút nước cốt nghệ tươi giã nhuyễn.',
          'Dùng cọ quét một lớp mỡ nghệ mỏng đều lên khắp bề mặt da gà để khi luộc da gà lên màu vàng óng ả đẹp mắt.',
        ],
        description:
          'Gà xát muối gừng rửa sạch, quét một lớp mỡ nghệ mỏng lên da để tạo màu vàng ươm đặc trưng.',
      },
      {
        step: 2,
        title: 'Luộc gà chín tới, giữ da giòn thịt ngọt mọng nước',
        time: '30 - 35 phút',
        heat: 'Lửa vừa rồi hạ nhỏ nhất',
        goal: 'Gà chín tới mềm ngọt, không bị nứt da hay thâm đỏ xương',
        actionPoints: [
          'Đặt gà vào nồi lớn, đổ ngập nước lạnh cùng gừng nướng, hành tím nướng và 1 thìa muối hạt.',
          'Đun sôi bùng, hớt sạch bọt rồi hạ lửa nhỏ nhất đun liu riu trong 20 phút.',
          'Tắt bếp, đậy kín vung ủ gà trong nồi nước nóng thêm 15 phút cho gà chín thấu tận xương mà thịt vẫn ngọt mềm mọng nước.',
          'Vớt gà ra, thả ngay vào thau nước đá lạnh ngâm 10 phút để da gà săn lại, giòn sần sật.',
        ],
        description:
          'Luộc gà với hành gừng nướng và chút muối. Khi sôi hạ lửa nhỏ ninh 20 phút rồi ủ kín vung 15 phút. Vớt gà ngâm nước đá lạnh cho da giòn.',
        tip: 'Ủ gà trong nước nóng giúp thịt chín mềm ngọt mọng mà không làm rách lớp da vàng óng.',
      },
      {
        step: 3,
        title: 'Lọc và thái thịt gà, rắc lá chanh thái chỉ',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Miếng thịt gà đều đặn, da dính liền thịt, lá chanh thái sợi chỉ như tơ',
        actionPoints: [
          'Vớt gà ra để ráo, dùng dao sắc lọc phần thịt ức và đùi.',
          'Thịt đùi thái miếng vừa ăn; thịt ức có thể thái lát xéo mỏng hoặc xé phay tơi xốp.',
          'Lá chanh xếp chồng, cuộn tròn chặt tay rồi dùng dao sắc thái sợi chỉ thật mỏng.',
          'Phần xương gà đã lọc thịt cho lại vào nồi nước dùng tiếp tục ninh lấy vị ngọt.',
        ],
        description:
          'Lọc thịt đùi và ức gà thái miếng vừa ăn. Cho xương gà lại vào nồi nước dùng ninh tiếp. Thái lá chanh thành sợi chỉ thật mảnh.',
      },
      {
        step: 4,
        title: 'Ninh nước dùng phở gà thanh ngọt trong veo cùng rễ mùi',
        time: '45 - 60 phút',
        heat: 'Lửa liu riu',
        goal: 'Nước dùng trong vắt, ngọt thanh tự nhiên, thơm dịu hương rễ mùi và hạt mùi',
        actionPoints: [
          'Cho thêm rễ mùi ta, rễ hành hoa rửa sạch và túi hạt mùi rang thơm vào nồi nước luộc gà.',
          'Thêm xương gà/xương lợn ninh liu riu hé nắp vung, vớt sạch bọt cặn.',
          'Nêm vào nồi: Nước mắm cốt nhĩ loại ngon, muối hạt và chút đường phèn cho tròn vị thanh ngọt.',
          'Mặt nước dùng điểm xuyết những giọt váng mỡ gà vàng óng ánh thơm ngậy.',
        ],
        description:
          'Ninh nước dùng gà cùng rễ mùi, rễ hành và hạt mùi rang. Nêm nước mắm cốt và đường phèn cho nước dùng thanh ngọt trong veo.',
        tip: 'Rễ mùi ta và hạt mùi rang chính là bí quyết gia truyền tạo nên hương vị phở gà Hà Nội đặc trưng khó lẫn.',
      },
      {
        step: 5,
        title: 'Chần bánh phở, xếp thịt gà và chan nước dùng bốc khói',
        time: '5 phút',
        heat: 'Nồi nước sôi sùng sục',
        goal: 'Bát phở gà bốc khói thơm nức, màu da gà vàng ươm hòa cùng màu xanh lá chanh và hành hoa',
        actionPoints: [
          'Chần bánh phở tươi qua nước sôi trong 15 giây, vẩy thật ráo rồi cho vào tô sứ.',
          'Xếp thịt gà đùi và thịt ức lên mặt bánh phở.',
          'Rắc hành hoa, rau mùi, đầu hành chẻ sợi và đặc biệt là một nhúm lá chanh thái chỉ lên trên miếng thịt gà.',
          'Múc nước dùng phở đang sôi sùng sục chan đều ngập bánh phở.',
          'Ăn kèm đĩa muối tiêu chanh ớt chấm thịt gà, giấm tỏi và quẩy giòn tan.',
        ],
        description:
          'Chần bánh phở cho vào bát, xếp thịt gà lên trên cùng hành mùi và lá chanh thái chỉ. Chan nước dùng sôi nóng hổi và thưởng thức.',
      },
    ],
    chefSecret:
      'Lá chanh là linh hồn của phở gà Hà Nội, phải thái mỏng như sợi tơ và chỉ rắc ngay trước khi chan nước dùng để tinh dầu lá chanh hòa quyện cùng làn khói nóng bốc lên ngào ngạt. Nước dùng phở gà phải ngọt thanh tao từ xương và rễ mùi, không dùng quế hồi hay gia vị nồng của phở bò.',
    recommendedSauce:
      'Đĩa muối tiêu sọ vắt chanh ớt chấm thịt gà; tô phở ăn kèm giấm tỏi ớt ngâm chua và đĩa quẩy vàng giòn rụm.',
  },

  'bun-cha-ha-noi': {
    dishId: 'bun-cha-ha-noi',
    dishName: 'Bún Chả Hà Nội Nướng Than Hoa',
    seoTitle: 'Cách Làm Bún Chả Hà Nội Thịt Nướng Than Hoa, Nước Chấm Đậm Đà Chuẩn Vị',
    prepTime: '45 phút (ướp thịt 1 - 2 giờ)',
    cookTime: '30 phút',
    difficulty: 'Trung bình',
    servings: '4 người',
    ingredients: [
      {
        category: 'Thịt làm chả nướng than hoa',
        items: [
          '500g thịt ba chỉ (ba rọi) có nạc mỡ đều nhau thái lát mỏng làm chả miếng',
          '500g thịt nạc vai heo băm nhỏ (trộn thêm 50g mỡ phần băm nhuyễn để chả viên mềm mọng)',
          '1kg bún tươi sợi nhỏ mượt mà',
        ],
      },
      {
        category: 'Gia vị ướp thịt chuẩn bí quyết phố cổ',
        items: [
          '3 thìa canh nước hàng (nước màu đường vàng thắng chuẩn màu cánh gián đậm)',
          '3 thìa canh nước mắm cốt nhĩ ngon, 2 thìa canh dầu hào, 1 thìa canh mật ong',
          '3 củ hành khô tím và 1 củ tỏi (băm nhuyễn vắt lấy nước cốt để ướp, tránh bị cháy khi nướng)',
          '1 thìa cà phê tiêu sọ xay mịn, 1 thìa canh dầu ăn',
        ],
      },
      {
        category: 'Dưa góp & Nước chấm bún chả ấm nóng',
        items: [
          '1/2 quả đu đủ xanh (gọt vỏ, ngâm xả hết nhựa, thái lát mỏng vuông hoặc lượn sóng)',
          '1 củ cà rốt nhỏ tỉa hoa thái lát mỏng',
          'Gia vị pha nước chấm: Nước mắm cốt ngon, đường cát trắng, giấm gạo thanh dịu, nước lọc ấm (tỉ lệ 1 : 1 : 1 : 4.5)',
          'Tỏi, ớt hiểm băm nhuyễn, tiêu sọ xay',
        ],
      },
      {
        category: 'Rau sống tươi non ăn kèm',
        items: [
          'Xà lách, rau tía tô, kinh giới, rau mùi ta (ngò rí), rau húng láng, giá đỗ tươi',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế thịt và pha nước sốt ướp chả',
        time: '20 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Nước sốt ướp màu nâu cánh gián óng ả, thơm lừng vị mắm và mật ong',
        actionPoints: [
          'Thịt ba chỉ rửa sạch, thái lát mỏng vừa ăn (khoảng 0.3 - 0.4cm).',
          'Thịt nạc vai băm nhỏ trộn cùng mỡ phần băm nhuyễn để khi nướng chả không bị khô xác.',
          'Hành tỏi băm nhuyễn, cho vào khăn mỏng vắt kiệt lấy nước cốt (bí quyết nướng không bị cháy khét).',
          'Trộn đều hỗn hợp sốt ướp: Nước cốt hành tỏi, nước hàng thắng cánh gián, nước mắm ngon, dầu hào, mật ong, tiêu xay và dầu ăn.',
        ],
        description:
          'Thịt ba chỉ thái lát mỏng, thịt nạc vai băm nhỏ. Pha hỗn hợp sốt ướp gồm nước cốt hành tỏi, nước hàng, nước mắm, mật ong, dầu hào và tiêu.',
        tip: 'Dùng nước cốt hành tỏi thay vì bã xác giúp thịt khi nướng trên than hoa không bị lấm tấm cháy khét và đắng.',
      },
      {
        step: 2,
        title: 'Ướp chả miếng và vo viên chả băm',
        time: '1 - 2 giờ',
        heat: 'Nhiệt độ phòng hoặc ngăn mát tủ lạnh',
        goal: 'Thịt ngấm sâu từng thớ cơ, màu sắc óng ả',
        actionPoints: [
          'Chia đều hỗn hợp sốt ướp vào 2 âu: 1 âu ướp chả miếng ba chỉ, 1 âu ướp thịt băm.',
          'Trộn bóp đều tay rồi để thịt ngấm gia vị ít nhất 1 giờ.',
          'Thịt băm vo thành từng viên tròn dẹt vừa ăn, thoa chút dầu ăn lên tay cho đỡ dính.',
        ],
        description:
          'Ướp chả miếng và thịt băm trong 1 - 2 giờ. Sau đó nặn thịt băm thành từng viên tròn dẹt đều nhau.',
      },
      {
        step: 3,
        title: 'Làm dưa góp đu đủ cà rốt chua ngọt giòn tan',
        time: '20 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Đu đủ và cà rốt giòn sần sật, chua ngọt thanh mát giải ngấy',
        actionPoints: [
          'Đu đủ và cà rốt thái lát mỏng, bóp với 1 thìa muối hạt trong 5 phút rồi rửa sạch, vắt kiệt nước để khử nhựa và giữ độ giòn.',
          'Ướp đu đủ, cà rốt với 2 thìa đường, 2 thìa giấm gạo và chút tỏi ớt băm trong 15 phút cho ngấm vị chua ngọt dịu.',
        ],
        description:
          'Đu đủ và cà rốt thái mỏng bóp muối rửa sạch, vắt ráo rồi ướp giấm đường tỏi ớt cho giòn ngon chua ngọt.',
      },
      {
        step: 4,
        title: 'Nướng chả trên than hoa đỏ rực cháy xém cạnh',
        time: '15 - 20 phút',
        heat: 'Than hoa đỏ rực quạt đều tay',
        goal: 'Chả chín vàng óng ả, xém nhẹ các cạnh, thơm lừng mùi khói than đặc trưng',
        actionPoints: [
          'Kẹp chả miếng dàn đều lên vỉ nướng; xếp chả viên lên vỉ riêng.',
          'Quét một lớp dầu ăn mỏng lên bề mặt chả để thịt không dính vỉ nướng.',
          'Đặt vỉ lên bếp than hoa đã bén hồng, lật vỉ liên tục và quạt đều tay để mỡ chảy xèo xèo bốc khói thơm nức.',
          'Khi hai mặt chả vàng ươm, xém cạnh óng ánh màu caramel thì nhấc ra khỏi bếp.',
        ],
        description:
          'Kẹp chả vào vỉ nướng trên than hoa đỏ hồng. Lật đều tay cho chả chín vàng ươm, xém cạnh và dậy mùi khói than nồng nàn.',
        tip: 'Nướng than hoa là linh hồn không thể thay thế của bún chả Hà Nội, tạo nên hương vị khói thơm quyến rũ mà chảo chiên hay nồi chiên không dầu không thể đạt được.',
      },
      {
        step: 5,
        title: 'Pha nước chấm ấm nóng chua ngọt và thưởng thức',
        time: '10 phút',
        heat: 'Lửa nhỏ giữ ấm lăn tăn',
        goal: 'Bát nước chấm ấm nóng thanh dịu, ngập chả nướng và dưa góp thơm nức',
        actionPoints: [
          'Hòa tan nước mắm, đường, giấm thanh và nước lọc ấm theo tỉ lệ vàng 1 : 1 : 1 : 4.5. Đun trên bếp cho ấm lăn tăn.',
          'Múc nước chấm ra từng bát con, thả dưa góp đu đủ cà rốt vào.',
          'Gắp chả miếng và chả viên nướng nóng hổi thả ngập trong bát nước chấm, rắc chút hạt tiêu sọ xay và tỏi ớt băm.',
          'Thưởng thức cùng đĩa bún tươi sợi nhỏ và rổ rau sống tươi non.',
        ],
        description:
          'Pha nước chấm chua ngọt ấm nóng, thả chả nướng và dưa góp vào ngập bát. Rắc tiêu xay, tỏi ớt ăn kèm bún tươi và rau sống.',
      },
    ],
    chefSecret:
      'Chả nướng ngon phải có đủ chả miếng (ba chỉ giòn ngậy) và chả viên (nạc vai mềm mọng). Nước chấm bún chả Hà Nội luôn phải được phục vụ ấm nóng, vị chua thanh ngọt dịu vừa vặn để có thể húp trực tiếp. Khi thả miếng chả nướng than hoa còn nóng hổi vào bát nước chấm, mỡ thơm xì xèo hòa quyện cùng dưa góp tạo nên phong vị khó quên.',
    recommendedSauce:
      'Bát nước chấm ấm nóng chua ngọt thanh dịu thả ngập chả nướng, dưa góp đu đủ và rắc tiêu sọ xay cay nồng.',
  },

  'bun-dau-mam-tom': {
    dishId: 'bun-dau-mam-tom',
    dishName: 'Bún Đậu Mắm Tôm Mẹt Hà Nội',
    seoTitle: 'Cách Làm Bún Đậu Mắm Tôm Thơm Ngon, Đầy Đủ Topping Chuẩn Vị Hà Thành',
    prepTime: '30 phút',
    cookTime: '30 phút',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Bún & Topping đầy đặn chuẩn mẹt phố cổ',
        items: [
          '800g bún lá ép chặt cắt miếng vuông vừa ăn',
          '4 bìa đậu phụ Mơ non mềm mịn béo ngậy',
          '350g chả cốm làng Vòng dẻo thơm hạt cốm non',
          '500g thịt chân giò bắp heo (bó tròn bằng chỉ dù chặt tay)',
          '300g nem rán (chả giò) giòn rụm',
          '300g dồi sụn hoặc lòng non heo luộc giòn sần sật (tùy thích)',
        ],
      },
      {
        category: 'Nguyên liệu pha mắm tôm chuẩn vị Hà Thành',
        items: [
          '4 - 5 thìa canh mắm tôm Thanh Hóa/Hậu Lộc nguyên chất màu tím sim',
          '3 thìa canh đường cát trắng',
          '3 - 4 quả quất tươi (hoặc chanh), 1 thìa cà phê rượu trắng ngon (khử tanh, tạo bọt bông mịn màng)',
          '2 quả ớt hiểm thái lát cay nồng',
          '2 thìa canh dầu ăn đang sôi sùng sục vừa chiên đậu',
        ],
      },
      {
        category: 'Rau thơm ăn kèm thanh mát',
        items: [
          'Rau kinh giới (linh hồn bún đậu mắm tôm), tía tô, húng quế, dưa chuột tươi thái lát',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Luộc thịt chân giò bó chỉ săn chắc và thái mỏng',
        time: '35 phút',
        heat: 'Lửa vừa rồi hạ nhỏ',
        goal: 'Thịt chân giò chín tới ngọt mềm, thớ thịt tròn đẹp viền mỡ trong veo',
        actionPoints: [
          'Bắp chân giò rút xương cuộn tròn thật chặt bằng chỉ dù hoặc dây gai.',
          'Chần sơ qua nước sôi bọt bẩn, rửa sạch rồi cho vào nồi luộc cùng 2 củ hành khô đập dập và 1 thìa muối hạt trong 25 - 30 phút.',
          'Vớt thịt ra thả ngay vào thau nước đá lạnh ngâm 10 phút, sau đó cho vào ngăn mát tủ lạnh 30 phút cho khối thịt đông săn chắc lại.',
          'Dùng dao thật sắc thái lát tròn mỏng tang khoe vân thịt hồng hào đẹp mắt.',
        ],
        description:
          'Chân giò bó chỉ luộc chín tới, ngâm đá lạnh rồi cất tủ mát cho săn chắc trước khi thái lát tròn mỏng đẹp.',
        tip: 'Để thịt trong ngăn mát tủ lạnh trước khi thái giúp các lát thịt mỏng đều tăm tắp mà không bị nát.',
      },
      {
        step: 2,
        title: 'Rán đậu phụ vàng giòn vỏ ngoài, mềm béo bên trong',
        time: '15 phút',
        heat: 'Dầu sôi ngập chảo, lửa vừa',
        goal: 'Vỏ ngoài phồng rộp vàng ươm giòn tan, ruột đậu bên trong vẫn mềm béo mọng nước',
        actionPoints: [
          'Đậu phụ Mơ thấm khô nước, cắt thành từng miếng vuông vừa ăn.',
          'Đun sôi nhiều dầu trong chảo sâu lòng, khi đầu đũa sủi bọt tăm thì thả đậu vào chiên ngập dầu.',
          'Chiên lửa vừa đến khi các mặt đậu vàng rụm, phồng xốp thì vớt ra để trên giá ráo dầu.',
        ],
        description:
          'Cắt đậu phụ thành miếng vuông, chiên ngập dầu sôi đến khi vỏ ngoài vàng rụm giòn xốp, vớt ra ráo dầu.',
      },
      {
        step: 3,
        title: 'Chiên chả cốm, nem rán và làm nóng các loại topping',
        time: '12 phút',
        heat: 'Lửa vừa',
        goal: 'Chả cốm dẻo thơm hạt cốm xanh, nem rán vàng ươm giòn rụm',
        actionPoints: [
          'Thả chả cốm vào chảo dầu chiên đến khi hai mặt phồng vàng nhẹ, hạt cốm nở dẻo thơm thì vớt ra thái miếng xéo.',
          'Nem rán chiên lại cho vỏ ngoài giòn tan, cắt làm đôi hoặc ba.',
          'Dồi sụn chiên xém mặt thơm nức, thái lát chéo.',
        ],
        description:
          'Chiên chả cốm, nem rán và dồi sụn cho vàng giòn rồi thái miếng vừa ăn bày lên đĩa.',
      },
      {
        step: 4,
        title: 'Đánh bông mắm tôm sủi bọt mịn màng cùng dầu sôi',
        time: '5 phút',
        heat: 'Nhiệt độ phòng & dầu sôi',
        goal: 'Bát mắm tôm bông xốp trắng mịn, thơm lừng vị quất ớt mà không hề gắt tanh',
        actionPoints: [
          'Múc 4 - 5 thìa mắm tôm ngon ra bát, thêm 3 thìa đường, nước cốt 3 quả quất và 1 thìa cà phê rượu trắng.',
          'Dùng đũa đánh thật nhanh tay liên tục theo một chiều trong 1 - 2 phút đến khi mắm tôm sủi bọt trắng bông xốp mịn màng.',
          'Múc 2 thìa canh dầu ăn đang sôi sùng sục từ chảo rán đậu dội thẳng vào bát mắm tôm, tiếng xèo xèo dậy hương thơm ngậy.',
          'Thả ớt tươi thái lát vào bát mắm tôm quất thơm lừng.',
        ],
        description:
          'Đánh mắm tôm cùng đường, quất và chút rượu trắng đến khi nổi bọt bông mịn. Dội dầu ăn đang sôi sùng sục vào quấy đều và thêm ớt thái lát.',
        tip: 'Thìa dầu sôi dội trực tiếp vào mắm tôm vừa làm chín khử khuẩn, vừa dậy lên hương béo ngậy làm dịu vị mặn gắt.',
      },
      {
        step: 5,
        title: 'Bày biện mẹt bún đậu và thưởng thức',
        time: '5 phút',
        heat: 'Không nấu',
        goal: 'Mẹt bún đậu đầy đặn sắc màu, thơm ngát mùi kinh giới và mắm tôm',
        actionPoints: [
          'Lót lá chuối tươi lên mẹt tre tròn.',
          'Xếp bún lá cắt miếng vuông xung quanh, đặt đĩa đậu rán vàng giòn nóng hổi, thịt chân giò thái mỏng, chả cốm, nem rán và dồi sụn vào từng góc mẹt.',
          'Bày đĩa rau kinh giới, tía tô, dưa chuột tươi bên cạnh.',
          'Chấm miếng bún, miếng đậu nóng giòn hoặc thịt chân giò ngập vào bát mắm tôm sủi bọt quất ớt kèm ngọn kinh giới thơm ngát.',
        ],
        description:
          'Bày bún lá, đậu rán, chả cốm, thịt chân giò và nem rán lên mẹt tre lót lá chuối. Thưởng thức cùng bát mắm tôm đánh bông và rau kinh giới.',
      },
    ],
    chefSecret:
      'Linh hồn của bún đậu mắm tôm nằm ở 2 thứ: Đậu phụ Mơ lướt ván (ngoài giòn tan, trong mềm béo như kem sữa) và bát mắm tôm đánh bông bọt quất dội dầu sôi. Rau ăn kèm nhất định phải có rau kinh giới tía non, vị thơm the the đặc trưng của kinh giới nâng tầm hương vị món ăn lên đỉnh cao.',
    recommendedSauce:
      'Mắm tôm Thanh Hóa đánh sủi bọt bông cùng nước cốt quất, đường, ớt tươi và dầu sôi ngậy béo.',
  },

  'bun-thang-ha-noi': {
    dishId: 'bun-thang-ha-noi',
    dishName: 'Bún Thang Phố Cổ Hà Nội',
    seoTitle: 'Cách Nấu Bún Thang Hà Nội Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    prepTime: '45 phút',
    cookTime: '1.5 - 2 giờ',
    difficulty: 'Cầu kỳ',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Xương & Nước dùng thanh khiết',
        items: [
          '1/2 con gà ta thả vườn (khoảng 800g, gà mái tơ thịt ngọt)',
          '500g xương ống heo ninh nước ngọt sâu',
          '50g tôm he khô (hoặc tôm khô loại 1) rang thơm ngọt lịm',
          '2 con sá sùng khô nướng thơm (nếu có, tăng vị ngọt hậu tự nhiên như nước suối)',
          '1 củ gừng già, 3 củ hành tím khô (nướng thơm đập dập)',
          'Gia vị: Nước mắm cốt nhĩ ngon hảo hạng, đường phèn, muối hạt',
        ],
      },
      {
        category: 'Topping ngũ sắc thái chỉ tinh tế',
        items: [
          'Thịt gà luộc xé sợi chỉ mỏng manh (giữ cả phần da vàng óng)',
          '150g giò lụa ngon thái sợi chỉ siêu nhỏ đều tăm tắp',
          '2 quả trứng gà ta đánh tan tráng mỏng dính như tờ giấy, cuộn lại thái sợi chỉ mịn',
          '100g tôm sú tươi luộc chín bóc vỏ giã bông làm ruốc tôm (tôm chà bông) đỏ au',
          '50g củ cải khô ngâm nở bóp chua ngọt giòn sần sật (củ cải dầm)',
          '8 - 10 tai nấm hương khô ngâm nở thái chỉ mỏng',
        ],
      },
      {
        category: 'Bún, rau thơm & Gia vị đặc sắc',
        items: [
          '800g bún tươi sợi nhỏ mượt mà',
          'Rau răm, hành hoa (thái nhỏ li ti)',
          '1 giọt tinh dầu cà cuống nguyên chất (tinh hoa bún thang Hà Thành)',
          '1 thìa cà phê mắm tôm ngon, chanh ớt tươi',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Luộc gà ta và ninh nước dùng thanh khiết cùng tôm khô sá sùng',
        time: '1 - 1.5 giờ',
        heat: 'Lửa nhỏ liu riu hé vung',
        goal: 'Nước dùng trong vắt như nước lọc, ngọt thanh sâu tự nhiên, không một gợn đục',
        actionPoints: [
          'Chần xương heo qua nước sôi rửa sạch, cho vào nồi cùng 3.5 lít nước ninh cùng gừng hành nướng.',
          'Cho nửa con gà vào luộc chín tới trong 20 phút rồi vớt ra ngâm nước đá lạnh cho săn thịt.',
          'Tôm he khô ngâm nở, rang thơm; sá sùng nướng vàng thơm cho vào túi vải thả vào nồi nước dùng.',
          'Ninh lửa nhỏ liu riu, hé nắp vung và hớt sạch bọt liên tục để nước dùng đạt độ trong vắt tuyệt đối.',
          'Nêm nước mắm cốt ngon, chút đường phèn và muối hạt cho vị ngọt thanh tao.',
        ],
        description:
          'Ninh xương heo, gà ta cùng tôm khô rang thơm và sá sùng nướng trên lửa nhỏ hé vung. Vớt gà khi chín tới, tiếp tục ninh nước dùng trong vắt ngọt thanh.',
        tip: 'Đầu tôm khô và sá sùng là bí quyết cổ truyền giúp nước dùng bún thang ngọt sâu thanh khiết mà không cần bất kỳ hạt mì chính nào.',
      },
      {
        step: 2,
        title: 'Chuẩn bị các loại nguyên liệu thái chỉ ngũ sắc tinh tế',
        time: '25 phút',
        heat: 'Lửa nhỏ tráng trứng',
        goal: 'Các nguyên liệu thái sợi chỉ đều tăm tắp như những sợi tơ',
        actionPoints: [
          'Thịt gà luộc nguội dùng tay xé hoặc dùng dao thái sợi chỉ mỏng mảnh.',
          'Giò lụa thái lát mỏng tang rồi thái chỉ thật đều tăm tắp.',
          'Trứng gà đánh tan cùng 1 thìa cà phê rượu trắng, tráng trên chảo chống dính thật mỏng như tờ giấy; cuộn tròn lại thái sợi chỉ mịn màng.',
          'Nấm hương ngâm nở luộc sơ thái chỉ mỏng.',
        ],
        description:
          'Xé thịt gà thành sợi chỉ mỏng. Giò lụa thái chỉ. Trứng gà tráng thật mỏng rồi cuộn lại thái sợi chỉ. Nấm hương thái mỏng.',
      },
      {
        step: 3,
        title: 'Làm ruốc tôm đỏ thắm và củ cải dầm chua ngọt giòn rụm',
        time: '15 phút',
        heat: 'Lửa nhỏ sao ruốc',
        goal: 'Ruốc tôm bông xốp màu đỏ cam rực rỡ, củ cải giòn sần sật chua ngọt',
        actionPoints: [
          'Tôm sú luộc bóc vỏ, bỏ chỉ đen, cho vào cối giã nhuyễn rồi cho lên chảo rang lửa nhỏ đến khi tôm khô ráo, bông tơi xốp thành ruốc tôm đỏ au.',
          'Củ cải khô ngâm nước ấm cho nở đều, rửa sạch vắt ráo nước, ướp với chút đường, giấm gạo và nước mắm cho ngấm vị chua ngọt giòn sần sật.',
        ],
        description:
          'Giã tôm sú sao vàng thành ruốc tôm bông xốp đỏ au. Củ cải khô ngâm nở bóp giấm đường cho ngấm vị chua ngọt giòn rụm.',
      },
      {
        step: 4,
        title: 'Hoàn thiện nước dùng bún thang và thả nấm hương',
        time: '10 phút',
        heat: 'Lửa sôi lăn tăn',
        goal: 'Nước dùng trong vắt ngát hương nấm, nóng hổi sẵn sàng phục vụ',
        actionPoints: [
          'Thả nấm hương thái chỉ vào nồi nước dùng đang sôi lăn tăn.',
          'Nếm lại nước dùng: Phải thanh nhẹ, ngọt dịu nơi cuống họng, thơm thoang thoảng hương tôm he và nấm hương.',
        ],
        description:
          'Thả nấm hương vào nồi nước dùng đang sôi lăn tăn, nếm lại gia vị cho thanh ngọt hài hòa.',
      },
      {
        step: 5,
        title: 'Bày bát bún thang ngũ sắc như bông hoa và chan nước dùng',
        time: '5 phút',
        heat: 'Nước dùng sôi bốc khói',
        goal: 'Bát bún thang đẹp tựa bức tranh hoa ngũ sắc, nước dùng trong vắt tỏa hương mê hoặc',
        actionPoints: [
          'Chần bún tươi qua nước sôi, xóc ráo nước rồi chia vào từng bát sứ sâu lòng.',
          'Khéo léo xếp các nguyên liệu thái chỉ lên mặt bún theo từng góc đối xứng như cánh hoa: Góc thịt gà xé, góc giò lụa chỉ, góc trứng vàng ươm, góc ruốc tôm đỏ rực, góc củ cải dầm và góc nấm hương nâu sẫm.',
          'Rắc hành hoa và rau răm thái nhỏ li ti vào tâm giữa bát bún.',
          'Chan nhẹ nhàng từng muôi nước dùng trong vắt đang sôi nóng hổi men theo thành bát để không làm xô lệch các cánh hoa.',
          'Dùng đầu tăm chấm 1 giọt tinh dầu cà cuống vào bát bún, thêm chút mắm tôm ngon ở góc bát và thưởng thức.',
        ],
        description:
          'Xếp bún vào bát, bày 5 loại topping thái chỉ đối xứng nhau như cánh hoa ngũ sắc. Rắc rau răm hành hoa, chan nước dùng trong veo nhẹ nhàng. Điểm 1 giọt cà cuống và mắm tôm rồi thưởng thức.',
      },
    ],
    chefSecret:
      'Bún thang được ví như tác phẩm nghệ thuật đỉnh cao của ẩm thực Tràng An: Mọi thứ từ sợi trứng, giò lụa, thịt gà đều phải thái chỉ mảnh mai, đều tăm tắp. Nước dùng phải trong veo như nước suối đầu nguồn nhưng ngọt lịm vị tôm he khô và sá sùng. Chỉ một đầu tăm tinh dầu cà cuống cùng chút mắm tôm ngon sẽ đánh thức trọn vẹn hương vị tinh túy ngàn năm của phố cổ.',
    recommendedSauce:
      'Chút mắm tôm ngon nguyên chất đánh tan nơi góc bát, giấm tỏi ớt, chanh tươi và giọt tinh dầu cà cuống.',
  },

  'bun-oc-nguoi-ha-noi': {
    dishId: 'bun-oc-nguoi-ha-noi',
    dishName: 'Bún Ốc Nguội Cổ Truyền Hà Nội',
    seoTitle: 'Cách Nấu Bún Ốc Nguội Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    prepTime: '40 phút',
    cookTime: '45 phút',
    difficulty: 'Cầu kỳ',
    servings: '4 người',
    ingredients: [
      {
        category: 'Ốc tươi giòn ngọt béo múp',
        items: [
          '1.5kg ốc mít hoặc ốc nhồi béo múp, vỏ mỏng bóng',
          '3 củ sả đập dập, 5 lá chanh bánh tẻ',
          '1 thìa muối hạt',
        ],
      },
      {
        category: 'Nước ốc thanh mát từ giấm bỗng nếp',
        items: [
          '1.2 lít nước luộc ốc lắng trong (lọc gạn bỏ cặn cát)',
          '500ml nước ninh xương heo/xương gà thanh dịu (hớt sạch váng mỡ)',
          '250ml - 300ml giấm bỗng nếp cái hoa vàng chuẩn vị men thơm nồng',
          'Nước mắm cốt nhĩ loại ngon hảo hạng, đường phèn, muối hạt',
        ],
      },
      {
        category: 'Ớt chưng cay xè & Đồ ăn kèm',
        items: [
          '50g ớt bột cay và ớt hiểm tươi băm nhỏ',
          '3 thìa canh dầu ăn, 1 thìa canh dầu màu điều, 1 thìa cà phê tỏi băm',
          '800g bún lá đồng xu (bún lá hến) nhỏ xinh trắng muốt',
          'Rau thơm: Tía tô, kinh giới, rau thơm Láng tươi non',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Ngâm ốc nhả sạch bùn và luộc ốc giòn sần sật',
        time: '30 phút (ngâm 2 - 3 giờ)',
        heat: 'Lửa lớn luộc nhanh',
        goal: 'Ốc sạch hoàn toàn nhớt bùn, luộc chín tới giòn sần sật',
        actionPoints: [
          'Ốc mít ngâm trong nước vo gạo cắt thêm vài lát ớt tươi trong 2 - 3 giờ cho nhả sạch bùn nhớt, sau đó cọ rửa từng con thật sạch.',
          'Cho ốc vào nồi cùng sả đập dập, lá chanh và 1 thìa muối hạt, đổ nước xâm xấp đáy nồi.',
          'Đậy vung đun lửa lớn, khi nồi ốc sôi bùng trào bọt thì mở vung, đảo đều trong 2 phút đến khi ốc bong vảy thì tắt bếp ngay.',
        ],
        description:
          'Ngâm ốc sạch bùn nhớt, luộc cùng sả và lá chanh trên lửa lớn đến khi bong vảy là tắt bếp ngay để ốc giữ độ giòn.',
        tip: 'Ốc luộc chín quá sẽ bị teo tóp, dai và tụt sâu vào vỏ rất khó khều; chỉ cần sôi bùng bong vảy là vớt ra ngay.',
      },
      {
        step: 2,
        title: 'Khều thịt ốc, bỏ ruột đen và giữ lại nước luộc ốc trong veo',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Thịt ốc nguyên vẹn, giòn sần sật, nước ốc lắng trong không một hạt cát',
        actionPoints: [
          'Dùng gai bưởi hoặc que nhọn khều từng con ốc, chỉ lấy phần đầu thịt ốc giòn béo, bỏ phần ruột đen và hoi ở đuôi.',
          'Rửa nhẹ thịt ốc qua nước luộc ốc cho sạch màng vảy.',
          'Nước luộc ốc để lắng cặn cát trong 15 phút, sau đó nhẹ nhàng gạn lấy phần nước trong vắt bên trên qua rây lọc.',
        ],
        description:
          'Khều thịt ốc lấy phần đầu giòn, bỏ ruột đen. Nước luộc ốc để lắng rồi gạn lấy phần nước trong veo.',
      },
      {
        step: 3,
        title: 'Nấu nước dùng ốc nguội chua thanh từ giấm bỗng nếp',
        time: '20 phút',
        heat: 'Lửa vừa rồi để nguội',
        goal: 'Nước dùng trong veo, chua thanh dịu ngọt, thoang thoảng men bỗng nếp nồng nàn',
        actionPoints: [
          'Cho phần nước ốc lắng trong hòa cùng nước ninh xương thanh vào nồi đun sôi nhẹ.',
          'Rót giấm bỗng nếp cái hoa vàng vào nồi, nêm nước mắm cốt nhĩ ngon, muối hạt và 1 thìa nhỏ đường phèn.',
          'Đun sôi lăn tăn khoảng 3 phút cho bỗng nếp chín dịu vị men chua thanh.',
          'Tắt bếp, để nước ốc nguội hẳn tự nhiên về nhiệt độ phòng (hoặc hơi man mát).',
        ],
        description:
          'Đun nước ốc cùng nước ninh xương và giấm bỗng nếp, nêm mắm ngon và chút đường phèn. Đun sôi nhẹ rồi tắt bếp để nguội hẳn.',
        tip: 'Bún ốc nguội tuyệt đối không dùng cà chua, nghệ hay mỡ hành; nước dùng phải giữ độ trong veo và thanh mát từ men bỗng nếp.',
      },
      {
        step: 4,
        title: 'Chưng ớt xào sa tế cay nồng xé lưỡi',
        time: '10 phút',
        heat: 'Lửa nhỏ',
        goal: 'Ớt chưng màu đỏ tươi óng ánh, thơm lừng cay nồng xé lưỡi',
        actionPoints: [
          'Phi thơm tỏi băm với dầu ăn và dầu màu điều trên lửa nhỏ.',
          'Trút ớt bột và ớt tươi băm vào đảo đều tay trên lửa liu riu đến khi ớt chín thơm, dậy màu đỏ au quyến rũ.',
          'Múc ớt chưng ra bát để nguội.',
        ],
        description:
          'Phi tỏi thơm với dầu điều, cho ớt bột và ớt tươi băm vào chưng lửa nhỏ đến khi dậy màu đỏ au cay nồng.',
      },
      {
        step: 5,
        title: 'Để nước nguội tự nhiên và thưởng thức theo phong vị Tràng An',
        time: '5 phút',
        heat: 'Nhiệt độ phòng (thanh mát)',
        goal: 'Vị chua thanh mát rượi, ốc giòn sần sật, cay the bốc hỏa của ớt chưng',
        actionPoints: [
          'Múc nước ốc nguội ra từng chiếc bát sứ nhỏ hoặc chiếc thố đất mộc mạc.',
          'Thả những con ốc béo múp, giòn sần sật vào bát nước giấm bỗng.',
          'Múc 1 thìa ớt chưng cay xè thả nổi trên mặt bát, váng dầu đỏ au hòa cùng nước ốc trong veo.',
          'Bày đĩa bún lá đồng xu nhỏ xinh trắng muốt bên cạnh cùng đĩa tía tô kinh giới.',
          'Gắp miếng bún đồng xu chấm ngập vào bát nước ốc, kèm một con ốc giòn sần sật rồi húp thìa nước chua dịu mát lịm cả người.',
        ],
        description:
          'Múc nước ốc nguội ra bát, thả ốc giòn và ớt chưng lên trên. Chấm bún lá đồng xu vào bát nước ốc thanh mát và thưởng thức.',
      },
    ],
    chefSecret:
      'Bún ốc nguội là khúc hoan ca thanh tao của ẩm thực Hà Nội ngày hè: Nước dùng nguội mát chứ không lạnh ngắt, vị chua thanh thoát từ men giấm bỗng nếp cái hoa vàng không chua gắt như chanh hay giấm công nghiệp. Miếng ốc béo giòn hòa cùng miếng bún đồng xu nhỏ xíu và vị cay bốc hỏa của ớt chưng tạo nên sự cân bằng âm dương đầy mê hoặc.',
    recommendedSauce:
      'Ớt chưng dầu tự làm cay xè nổi màng đỏ trên bát nước giấm bỗng nguội thanh mát.',
  },

  'bun-suon-moc-doc-mung': {
    dishId: 'bun-suon-moc-doc-mung',
    dishName: 'Bún Sườn Mọc Dọc Mùng Thanh Mát',
    seoTitle: 'Cách Nấu Bún Sườn Dọc Mùng Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    prepTime: '35 phút',
    cookTime: '1 giờ',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Sườn non & Viên mọc nấm hương thơm lừng',
        items: [
          '700g sườn non heo (chọn sườn thăn tươi nhiều nạc, dẻ sườn nhỏ dẹt)',
          '300g giò sống (mọc heo) dẻo mịn',
          '150g thịt nạc vai xay nhuyễn',
          '5 - 6 tai nấm hương khô ngâm nở thái nhỏ, 2 tai mộc nhĩ ngâm nở băm nhỏ',
          '1 thìa cà phê tiêu sọ xay mịn, 1 thìa cà phê hạt nêm, hành tím băm',
          '800g bún tươi sợi vừa mượt mà',
        ],
      },
      {
        category: 'Dọc mùng giòn & Nước dùng chua thanh',
        items: [
          '3 - 4 cây dọc mùng (bạc hà) tươi xanh mập mạp',
          '3 quả cà chua chín đỏ mọng bổ múi cau',
          '2 quả me chua tươi (hoặc 3 quả tai chua khô)',
          'Hành khô băm, 1 thìa cà phê bột nghệ tươi (tạo màu nước dùng vàng ươm dịu mắt)',
          'Gia vị: Nước mắm cốt nhĩ ngon, muối hạt, đường cát, dầu ăn',
        ],
      },
      {
        category: 'Rau thơm & Đồ ăn kèm thanh mát',
        items: [
          'Hành hoa, mùi tàu (ngò gai) rửa sạch thái nhỏ',
          'Giá đỗ tươi, chanh tươi, ớt hiểm thái lát, rau sống các loại',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế dọc mùng sạch nhựa, bóp muối kỹ không lo ngứa',
        time: '20 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Dọc mùng xanh mướt giòn rụm, hết sạch nhựa ngứa tuyệt đối an toàn',
        actionPoints: [
          'Dọc mùng tước sạch lớp vỏ xơ bên ngoài, rửa sạch bụi đất.',
          'Dùng dao thái vát chéo các đoạn dày khoảng 1.5cm.',
          'Rắc 2 thìa canh muối hạt vào âu dọc mùng, đeo găng tay bóp đều và kỹ cho dọc mùng mềm xẹp xuống và tiết hết nước nhựa ngứa.',
          'Để nghỉ 15 phút rồi xả lại dưới vòi nước lạnh nhiều lần, dùng tay vắt thật kiệt nước.',
          'Chần nhanh dọc mùng qua nồi nước sôi trong 30 giây rồi vớt ra xả nước lạnh, vắt ráo để giữ độ giòn sần sật.',
        ],
        description:
          'Tước vỏ dọc mùng, thái vát chéo, bóp kỹ với muối hạt cho ra hết nước ngứa. Rửa lại nhiều lần dưới vòi nước lạnh rồi vắt kiệt.',
        tip: 'Khâu bóp muối và vắt kiệt nước là bí quyết cốt tử để dọc mùng giòn ngọt mà tuyệt đối không bao giờ bị ngứa cổ họng.',
      },
      {
        step: 2,
        title: 'Chần sườn non và ninh nước dùng ngọt lịm',
        time: '45 phút',
        heat: 'Lửa vừa rồi hạ nhỏ liu riu',
        goal: 'Sườn chín mềm róc thịt, nước dùng trong ngọt tự nhiên',
        actionPoints: [
          'Sườn non chặt miếng vừa ăn dài khoảng 3 - 4cm, chần qua nước sôi 3 phút rồi rửa sạch bọt cặn.',
          'Ướp sườn với 1 thìa nước mắm, hành tím băm và chút tiêu xay trong 15 phút.',
          'Phi thơm hành tím, trút sườn vào xào săn rồi đổ 2.5 lít nước vào ninh lửa liu riu, hớt bọt thường xuyên cho sườn mềm nhừ.',
        ],
        description:
          'Chần sạch sườn non, xào săn với hành mắm rồi ninh cùng 2.5 lít nước trên lửa nhỏ liu riu cho sườn chín mềm róc thịt.',
      },
      {
        step: 3,
        title: 'Trộn giò sống làm viên mọc nấm hương thơm lừng',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Viên mọc dai giòn sần sật, thơm nức mùi nấm hương tiêu sọ',
        actionPoints: [
          'Trộn đều giò sống, thịt nạc vai xay, nấm hương thái nhỏ, mộc nhĩ băm, tiêu sọ xay, chút hạt nêm và hành tím băm.',
          'Dùng thìa quết mạnh tay nhiều lần cho khối mọc dẻo dai kết dính.',
          'Thoa chút dầu ăn lên tay, nặn mọc thành từng viên tròn đều nhau vừa ăn.',
        ],
        description:
          'Trộn giò sống với nạc vai xay, nấm hương, mộc nhĩ băm và tiêu sọ. Quết dẻo rồi nặn thành từng viên tròn vừa miệng.',
      },
      {
        step: 4,
        title: 'Xào cà chua, thả mọc và dọc mùng hoàn thiện nước dùng chua thanh',
        time: '15 phút',
        heat: 'Lửa vừa',
        goal: 'Nước dùng màu vàng đỏ sóng sánh, vị chua thanh dịu ngọt, mọc chín nổi phồng',
        actionPoints: [
          'Phi thơm hành khô, xào chín cà chua cùng chút bột nghệ tạo màu đỏ cam vàng ươm óng ả rồi trút vào nồi nước ninh sườn.',
          'Thả me chua vào nồi, khi me mềm vớt ra dầm nát lấy nước cốt chua thanh dịu rót lại vào nồi.',
          'Thả từng viên mọc vào nồi nước dùng đang sôi lăn tăn, đun đến khi viên mọc chín nổi phồng lên mặt nước.',
          'Nêm nước mắm cốt ngon, hạt nêm, chút đường cho vị chua thanh ngọt đậm đà.',
          'Thả dọc mùng đã sơ chế vào nồi đun sôi bùng lên 1 phút rồi tắt bếp để dọc mùng giữ trọn độ xanh giòn.',
        ],
        description:
          'Xào cà chua trút vào nồi sườn cùng nước cốt me. Thả viên mọc vào đun chín nổi. Nêm nước mắm vừa ăn rồi thả dọc mùng đun sôi bùng 1 phút.',
      },
      {
        step: 5,
        title: 'Trình bày bát bún sườn mọc dọc mùng bốc khói thanh mát',
        time: '5 phút',
        heat: 'Nồi nước dùng sôi sùng sục',
        goal: 'Tô bún rực rỡ sắc màu, thơm ngát mùi sườn mọc, nước dùng chua dịu giải ngấy cực đỉnh',
        actionPoints: [
          'Chần bún tươi qua nước sôi, cho vào từng tô lớn.',
          'Gắp sườn non mềm, viên mọc nấm hương và gắp nhiều dọc mùng xanh giòn xếp lên mặt bún.',
          'Rắc hành hoa và mùi tàu thái nhỏ lên trên.',
          'Múc nước dùng chua thanh nóng hổi kèm vài lát cà chua đỏ mọng chan ngập bát bún.',
          'Ăn kèm đĩa ớt hiểm tươi, chanh cốm và đĩa rau sống thanh mát.',
        ],
        description:
          'Chần bún cho vào tô, xếp sườn, mọc nấm hương và dọc mùng lên trên. Rắc hành mùi tàu rồi chan nước dùng chua thanh nóng hổi và thưởng thức.',
      },
    ],
    chefSecret:
      'Bí quyết của món bún sườn dọc mùng kinh điển Hà Nội là sự cân bằng tuyệt hảo giữa vị béo ngọt của sườn heo, vị giòn thơm của viên mọc nấm hương và vị chua dịu thanh tao của me/tai chua. Dọc mùng chỉ thả vào nồi nước dùng sôi bùng rồi vớt ra bát ngay để giữ được màu xanh non mướt mắt và độ giòn sần sật đặc trưng.',
    recommendedSauce:
      'Nước mắm cốt nguyên chất vắt chanh ớt tươi chấm sườn non và viên mọc nấm hương giòn thơm.',
  },

  'bun-moc-ha-noi': {
    dishId: 'bun-moc-ha-noi',
    dishName: 'Bún Mọc Sườn Nấm Hương Nước Dùng Thanh Ngọt',
    seoTitle: 'Cách Nấu Bún Mọc Hà Nội Nước Dùng Trong Veo Chuẩn Vị Gia Đình',
    prepTime: '30 phút',
    cookTime: '50 phút',
    difficulty: 'Dễ',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Viên mọc nấm hương & Chả quế thơm lừng',
        items: [
          '350g giò sống (mọc heo tươi dẻo mịn, để thật lạnh)',
          '150g thịt nạc vai xay nhuyễn có chút mỡ để mọc mềm mọng không bị khô bã',
          '8 - 10 tai nấm hương khô ngâm nở (thái nhỏ một nửa để trộn mọc, giữ lại vài tai nguyên thả nước dùng)',
          '3 tai mộc nhĩ ngâm nở băm nhỏ tạo độ giòn sần sật',
          '200g chả quế Hà Nội (hoặc chả lụa) thái lát mỏng',
          '1 thìa cà phê tiêu sọ trắng xay thơm nồng, 1 thìa cà phê nước mắm cốt ngon, hành tím băm nhuyễn phi thơm',
        ],
      },
      {
        category: 'Sườn non, Xương ninh & Măng giòn sần sật',
        items: [
          '600g sườn non heo tươi ngon chặt khúc vừa ăn (khoảng 3cm)',
          '500g xương ống hoặc xương bay heo ninh lấy nước cốt ngọt tủy sâu lắng',
          '250g măng củ tươi tước sợi hoặc măng khô ngâm nở luộc kỹ (tùy chọn theo kiểu bún mọc phố cổ Hàng Trống/Cầu Gỗ)',
          '1 củ hành tây bổ đôi nướng thơm, 3 củ hành tím nướng cháy xém',
          'Gia vị: Nước mắm cốt nhĩ cá cơm ngon, muối hạt, đường phèn, hạt nêm',
          '800g bún tươi sợi nhỏ mượt mà',
        ],
      },
      {
        category: 'Rau thơm & Gia vị ăn kèm chuẩn vị phố cổ',
        items: [
          'Hành hoa (phần đầu hành chẻ sợi, lá thái nhỏ), rau mùi ta (ngò rí) thái nhỏ',
          'Hành củ phi vàng giòn ruộm thơm nức mũi',
          'Chanh tươi, ớt hiểm thái lát mỏng, tiêu sọ trắng xay, giấm tỏi ớt hoặc ớt chưng dầu',
          'Quẩy giòn giòn ăn kèm (tùy thích)',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Chần sạch xương sườn và ninh nước dùng trong veo',
        time: '45 phút',
        heat: 'Lửa nhỏ liu riu',
        goal: 'Nước dùng trong vắt tựa hổ phách, vị ngọt thanh sâu lắng từ xương tủy và sườn non',
        actionPoints: [
          'Chặt sườn non miếng vừa ăn; chần sườn và xương ống qua nồi nước sôi có vài lát gừng đập dập và 1 thìa muối hạt trong 3 phút để khử sạch tạp chất và bọt bẩn.',
          'Vớt xương và sườn ra rửa lại thật sạch dưới vòi nước lạnh.',
          'Cho sườn non và xương vào nồi với 2.5 - 3 lít nước lọc, thả hành tây và hành tím đã nướng cháy xém cạo sạch vỏ vào.',
          'Đun sôi bùng rồi lập tức hạ lửa liu riu, hé vung và hớt sạch bọt nổi liên tục trong suốt quá trình ninh.',
          'Nêm 1 thìa canh muối hạt, 1 thìa canh đường phèn để tạo hậu vị ngọt thanh dịu mát.',
        ],
        description:
          'Chần sạch sườn non và xương heo, rửa sạch rồi ninh cùng nước lọc, hành tây và hành tím nướng trên lửa nhỏ liu riu. Hớt bọt thường xuyên và mở hé vung để nước dùng trong vắt ngọt tủy.',
        tip: 'Tuyệt đối không đậy kín vung và không để nước sôi sùng sục để nước dùng bún mọc luôn đạt độ trong veo không một gợn đục.',
      },
      {
        step: 2,
        title: 'Xào măng giòn ngọt và thả vào nồi nước dùng',
        time: '15 phút',
        heat: 'Lửa vừa',
        goal: 'Măng giòn sần sật ngấm đậm gia vị, khử sạch mùi nồng',
        actionPoints: [
          'Măng tươi tước sợi nhỏ, luộc với nước sôi pha chút muối 2 lần mở vung để khử sạch độc tố và vị đắng chát, vớt ra xả nước lạnh rồi vắt ráo.',
          'Phi thơm 1 thìa hành tím băm với chút dầu ăn, trút măng vào xào săn cùng 1 thìa hạt nêm và chút nước mắm.',
          'Trút măng xào thơm và vài tai nấm hương nguyên vào nồi nước ninh xương sườn, đun liu riu cho vị ngọt của sườn và vị giòn thanh của măng hòa quyện.',
        ],
        description:
          'Măng tước sợi luộc kỹ, xào săn thơm với hành mắm rồi trút vào nồi nước ninh sườn cùng vài tai nấm hương.',
      },
      {
        step: 3,
        title: 'Quết giò sống làm viên mọc nấm hương mộc nhĩ giòn dai tự nhiên',
        time: '15 phút',
        heat: 'Nhiệt độ phòng (giữ thịt lạnh)',
        goal: 'Khối mọc dẻo quánh, viên mọc dai giòn sần sật thơm nức nấm hương tiêu sọ',
        actionPoints: [
          'Mẹo vàng: Giò sống mua về bọc kín để ngăn mát tủ lạnh cho thật lạnh trước khi quết, mọc sẽ có độ giòn dai xuất sắc mà không cần dùng hàn the hay bột nở.',
          'Cho giò sống lạnh, thịt nạc vai xay, nấm hương thái hạt lựu, mộc nhĩ băm nhỏ, 1 thìa cà phê tiêu sọ trắng xay thơm, 1 thìa nước mắm cốt nhĩ và hành tím phi thơm vào âu.',
          'Dùng muôi gỗ miết quết thật mạnh tay và đều theo một chiều trong 5 phút đến khi khối mọc dẻo quánh, dính quyện vào nhau.',
          'Thoa chút dầu ăn lên lòng bàn tay hoặc dùng thìa nhúng nước, nặn mọc thành từng viên tròn đều đặn cỡ quả bóng bàn.',
        ],
        description:
          'Trộn giò sống ướp lạnh với nạc vai xay, nấm hương, mộc nhĩ, tiêu sọ, nước mắm và hành phi. Quết dẻo quánh theo một chiều rồi nặn thành từng viên tròn vừa ăn.',
        tip: 'Quết giò sống khi còn lạnh và quết dồn lực theo một chiều là bí quyết gia truyền giúp viên mọc giòn nẩy sần sật.',
      },
      {
        step: 4,
        title: 'Thả viên mọc nấu chín và nêm nếm nước dùng',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Viên mọc chín nổi tròn căng bóng, nước dùng dậy thơm mùi nấm hương thanh nhã',
        actionPoints: [
          'Khi sườn đã chín mềm róc xương, tăng lửa cho nồi nước dùng sôi lăn tăn rồi nhẹ nhàng thả từng viên mọc vào.',
          'Đun khoảng 5 - 7 phút. Khi viên mọc chín tới sẽ nổi phồng căng tròn lên mặt nước.',
          'Nêm thêm 2 thìa canh nước mắm cốt nhĩ hảo hạng cho dậy mùi thơm nức đặc trưng, rắc chút tiêu trắng xay vào nồi rồi hạ lửa nhỏ nhất giữ nóng.',
        ],
        description:
          'Thả từng viên mọc vào nồi nước sôi lăn tăn đến khi mọc nổi tròn căng bóng. Nêm nước mắm cốt cho vừa miệng đậm đà thanh tao.',
      },
      {
        step: 5,
        title: 'Trình bày bát bún mọc Hà Nội thanh tao, nghi ngút khói',
        time: '5 phút',
        heat: 'Nồi nước dùng sôi lăn tăn',
        goal: 'Bát bún tinh tế, màu sắc hài hòa, viên mọc tròn xinh bóng bẩy, nước trong veo thơm phức',
        actionPoints: [
          'Chần bún tươi qua nước sôi cho nóng tơi sợi, xốc ráo nước rồi chia đều vào từng tô lớn.',
          'Gắp 3 - 4 viên mọc nấm hương giòn sần sật, miếng sườn non mềm róc thịt, gắp măng giòn và xếp vài lát chả quế vàng thơm lên mặt bún.',
          'Rắc đầu hành hoa chẻ sợi, hành hoa thái nhỏ, rau mùi ta và rắc một nhúm hành phi vàng giòn ruộm cùng tiêu sọ cay ấm lên trên.',
          'Múc nước dùng trong veo đang sôi lăn tăn chan ngập bát bún, chan đều lên các lát chả và hành hoa.',
          'Thưởng thức ngay khi còn nóng hổi cùng chanh tươi, vài lát ớt hiểm, ớt chưng cay nồng và quẩy giòn.',
        ],
        description:
          'Chần bún nóng xếp vào tô, xếp sườn, mọc nấm hương, chả quế, măng giòn. Rắc hành hoa, rau mùi, hành phi và tiêu sọ rồi chan nước dùng trong veo bốc khói nghi ngút.',
      },
    ],
    chefSecret:
      'Bún Mọc Hà Nội đích thực là biểu tượng của sự thanh nhã: Nước dùng phải trong vắt ngọt lịm từ xương sườn ninh khéo, hoàn toàn không dùng phẩm màu hay chất tạo chua (không nhầm lẫn với bún sườn dọc mùng). Viên mọc có nấm hương mộc nhĩ tạo độ giòn sần sật và mùi thơm quý phái khó quên, hòa quyện tuyệt vời với lát chả quế thơm lừng và hành phi vàng ruộm.',
    recommendedSauce:
      'Nước mắm cốt nhĩ chanh ớt tươi kèm tiêu bắc xay chấm viên mọc nấm và sườn non.',
  },

  'bun-ca-cay-hai-phong': {
    dishId: 'bun-ca-cay-hai-phong',
    dishName: 'Bún Cá Cay Hải Phòng',
    seoTitle: 'Cách Nấu Bún Cá Cay Hải Phòng Nước Dùng Chua Cay Đậm Đà Chuẩn Vị Đất Cảng',
    prepTime: '45 phút',
    cookTime: '1 giờ',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Cá rô phi chiên giòn, Chả cá & Dạ dày cá sần sật',
        items: [
          '1.2kg cá rô phi tươi sống (hoặc cá thu, cá trắm): lọc riêng thịt phi lê, giữ lại đầu và khung xương cá để ninh nước ngọt',
          '300g chả cá Hải Phòng (hoặc chả cá thu / chả cá thác lác) chiên vàng, thái lát mỏng',
          '200g lòng / dạ dày cá basa (hoặc bao tử cá thu) làm sạch bóp muối giấm, xào giòn sần sật (nét đặc trưng độc nhất của bún cá đất Cảng)',
          '1 gói bột chiên giòn (hoặc bột bắp) để áo lớp mỏng quanh miếng cá',
          '1 thìa canh gừng băm, 1 thìa canh tỏi băm, 1 thìa cà phê bột nghệ (tạo màu vàng óng và khử tanh tuyệt đối), tiêu xay, nước mắm cốt ngon, dầu ăn',
        ],
      },
      {
        category: 'Xương ninh & Nước dùng chua cay đậm đà',
        items: [
          '500g xương ống heo chần sạch ninh cùng đầu và xương cá',
          '4 quả cà chua chín đỏ mọng bổ múi cau',
          '2 quả me chua tươi (hoặc 3 thìa canh giấm bỗng nếp) tạo vị chua thanh dịu mát',
          '1 củ hành tây nướng, 3 củ hành tím nướng thơm cháy xém',
          '2 thìa canh dầu màu điều (tạo màu nước dùng vàng cam sóng sánh)',
          'Gia vị: Nước mắm cốt nhĩ cá cơm, muối hạt, đường phèn, hạt nêm',
          '800g bún tươi sợi vừa',
        ],
      },
      {
        category: 'Rau thơm & Linh hồn ớt cay đất Cảng',
        items: [
          '3 cây dọc mùng (bạc hà) tước vỏ bóp muối vắt kiệt (hoặc rau cần nước chần giòn)',
          'Hành hoa, thì là rửa sạch thái nhỏ (thì là là linh hồn của bún cá khử sạch mùi tanh)',
          'Chí chương Hải Phòng (tương ớt cay lên men gia truyền đất Cảng) hoặc ớt chưng dầu cay xè',
          'Rau sống ăn kèm: hoa chuối thái mỏng, rau muống chẻ, giá đỗ tươi, chanh cốm, quất tươi',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế cá, ướp nghệ gia vị và chiên giòn rụm bên ngoài',
        time: '25 phút',
        heat: 'Lửa vừa đến lớn',
        goal: 'Miếng cá vàng ươm giòn rụm vỏ ngoài, bên trong thịt trắng mềm mọng nước không tanh',
        actionPoints: [
          'Phi lê cá rô phi rửa sạch với nước muối gừng loãng, thấm thật khô bằng khăn giấy, thái miếng con chì hoặc lát vát dày cỡ 1.5cm vừa ăn.',
          'Ướp thịt cá với 1 thìa gừng băm, 1 thìa tỏi băm, 1 thìa cà phê bột nghệ, 1 thìa nước mắm ngon và chút tiêu xay trong 20 phút cho ngấm sâu gia vị.',
          'Lăn từng miếng cá qua một lớp bột chiên giòn thật mỏng để cá giữ phom và giòn tan khi chiên.',
          'Đun sôi dầu ngập chảo, thả từng miếng cá vào chiên vàng ruộm hai mặt rồi vớt ra giá có lót giấy thấm dầu.',
        ],
        description:
          'Thái cá miếng vừa ăn, ướp gừng tỏi, bột nghệ và nước mắm. Áo một lớp bột chiên giòn mỏng rồi chiên ngập dầu cho vàng giòn rụm.',
        tip: 'Ướp bột nghệ giúp cá có màu vàng ươm bắt mắt và khử sạch hoàn toàn mùi tanh của cá đồng.',
      },
      {
        step: 2,
        title: 'Ninh nước dùng kép từ xương heo và đầu xương cá ngọt lịm',
        time: '45 phút',
        heat: 'Lửa nhỏ liu riu',
        goal: 'Nước dùng trong ngọt sâu từ tủy xương và cá, không gợn mùi tanh',
        actionPoints: [
          'Xương ống heo chần qua nước sôi 3 phút, rửa sạch rồi cho vào nồi cùng 2.5 lít nước, thả hành tây và hành tím nướng vào ninh lửa nhỏ.',
          'Phần đầu và xương cá rửa sạch với muối rượu, chiên sơ trên chảo cho săn khô hoặc nướng xém để khử hết mùi tanh.',
          'Cho đầu và xương cá vào túi vải lọc (hoặc cho thẳng vào nồi ninh rồi lọc bỏ bã xương sau), đun liu riu cùng nồi xương heo trong 45 phút.',
          'Hớt sạch bọt liên tục để nước dùng giữ được độ thanh trong.',
        ],
        description:
          'Ninh xương heo cùng đầu và xương cá đã chiên thơm trên lửa nhỏ liu riu, thêm hành nướng và hớt bọt thường xuyên để nước dùng ngọt sâu thanh mát.',
        tip: 'Chiên hoặc nướng sơ đầu xương cá trước khi ninh là bí quyết bắt buộc để nước dùng bún cá ngọt lịm mà không bị tanh cặn.',
      },
      {
        step: 3,
        title: 'Xào cà chua, dạ dày cá sần sật và hoàn thiện nước dùng chua thanh',
        time: '15 phút',
        heat: 'Lửa vừa',
        goal: 'Nước dùng vàng cam sóng sánh, vị chua thanh ngọt dịu, dạ dày cá giòn sần sật',
        actionPoints: [
          'Dạ dày cá bóp kỹ muối hạt và nước cốt chanh/giấm, xả sạch nhớt. Phi thơm tỏi xào săn dạ dày cá với chút hạt nêm, tiêu xay đến khi chín giòn sần sật rồi múc ra đĩa riêng.',
          'Dùng chảo phi thơm hành khô với 2 thìa canh dầu màu điều, cho 1/2 lượng cà chua bổ múi cau vào xào nhuyễn tạo màu vàng cam sóng sánh rồi trút vào nồi nước dùng.',
          'Me chua luộc chín trong nồi nước dùng, dầm nát lọc lấy nước cốt chua thanh đổ lại vào nồi.',
          'Thả nốt 1/2 lượng cà chua còn lại vào nồi giữ nguyên múi. Nêm nước mắm cốt nhĩ ngon, đường phèn, muối hạt cho vị chua thanh ngọt đậm đà vừa miệng.',
        ],
        description:
          'Xào chín giòn dạ dày cá để riêng. Phi thơm dầu điều xào cà chua trút vào nồi nước sườn cá cùng nước cốt me. Nêm nếm nước mắm đường phèn vừa vị chua thanh sóng sánh.',
      },
      {
        step: 4,
        title: 'Sơ chế dọc mùng xanh giòn không ngứa và rau cần',
        time: '10 phút',
        heat: 'Nhiệt độ phòng & Nồi nước sôi',
        goal: 'Dọc mùng xanh mướt giòn sần sật, sạch 100% nhựa ngứa',
        actionPoints: [
          'Dọc mùng tước sạch vỏ xơ, thái vát chéo, bóp thật kỹ với 2 thìa muối hạt cho xẹp mềm tiết hết nước ngứa.',
          'Rửa xả nhiều lần dưới vòi nước lạnh rồi dùng tay vắt thật kiệt nước.',
          'Khi chuẩn bị ăn, chần nhanh dọc mùng (hoặc rau cần cắt khúc) qua nồi nước dùng sôi trong 1 phút rồi vớt ra ngay để giữ độ xanh giòn.',
        ],
        description:
          'Tước vỏ dọc mùng, bóp kỹ muối hạt, xả sạch vắt kiệt nước rồi chần nhanh qua nồi nước dùng sôi giữ độ xanh giòn.',
      },
      {
        step: 5,
        title: 'Trình bày tô bún cá cay Hải Phòng nghi ngút khói, rực rỡ sắc màu',
        time: '5 phút',
        heat: 'Nồi nước dùng sôi sùng sục',
        goal: 'Tô bún rực rỡ vàng đỏ xanh mát mắt, cá giòn rụm, vị cay nồng xé lưỡi đậm chất đất Cảng',
        actionPoints: [
          'Chần bún tươi qua nước sôi, xốc ráo nước rồi chia đều vào từng tô lớn.',
          'Xếp lên mặt bún: những miếng cá rô phi chiên vàng ruộm, lát chả cá Hải Phòng thơm nức, dạ dày cá giòn sần sật, dọc mùng xanh giòn và múi cà chua đỏ mọng.',
          'Rắc hành hoa và thì là thái nhỏ phủ đều lên trên.',
          'Múc nước dùng chua cay óng ả đang sôi sùng sục chan ngập tô bún.',
          'Thêm một thìa chí chương Hải Phòng (tương ớt cay lên men gia truyền), vắt thêm quất tươi và thưởng thức kèm đĩa hoa chuối thái mỏng thanh mát.',
        ],
        description:
          'Chần bún cho vào tô, xếp cá chiên giòn, chả cá, dạ dày cá, dọc mùng, rắc hành thì là rồi chan nước dùng chua ngọt cay nồng. Thêm chí chương Hải Phòng cay xè và thưởng thức.',
      },
    ],
    chefSecret:
      'Linh hồn của bún cá cay Hải Phòng nằm ở 3 điểm cốt tử: Thứ nhất, nước dùng phải là nước ninh kép từ xương heo và đầu/xương cá đã rán thơm để nước ngọt sâu không tanh. Thứ hai, miếng cá chiên giòn rụm vỏ ngoài nhưng thớ thịt mềm ngọt mọng nước, kết hợp dạ dày cá giòn sần sật độc nhất vô nhị. Thứ ba, không thể thiếu thì là dậy mùi và muỗng chí chương (tương ớt gia truyền đất Cảng) đỏ rực cay nồng nàn.',
    recommendedSauce:
      'Chí chương Hải Phòng (tương ớt cổ truyền đất Cảng lên men chua cay đằm vị) và nước mắm cốt nhĩ tỏi ớt chanh.',
  },

  'banh-da-cua-be': {
    dishId: 'banh-da-cua-be',
    dishName: 'Bánh Đa Cua Bể Hải Phòng Chả Lá Lốt',
    seoTitle: 'Cách Nấu Bánh Đa Cua Hải Phòng Nước Dùng Đậm Đà Chuẩn Vị Đất Cảng',
    prepTime: '45 phút',
    cookTime: '1 giờ',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Cua tươi, Tảng riêu béo ngậy & Bánh đa đỏ Dư Hàng Kênh',
        items: [
          '700g cua đồng tươi sống (hoặc kết hợp 1 con cua bể chắc thịt): giã nhuyễn lọc lấy 2.5 lít nước cốt cua, khều riêng gạch cua',
          '200g thịt cua bể (hoặc tôm sú tươi bóc nõn) xào săn thơm ngọt',
          '500g bánh đa đỏ Hải Phòng khô (loại sợi bản dày dẻo dai đặc sản làng Dư Hàng Kênh)',
          'Gạch cua tươi chưng dầu màu điều vàng óng thơm phức',
        ],
      },
      {
        category: 'Xương ninh & Nước dùng riêu cua ngọt thanh sóng sánh',
        items: [
          '500g sườn non hoặc xương ống heo chần sạch hầm lấy nước cốt ngọt sâu',
          '4 quả cà chua chín đỏ mọng bổ múi cau',
          '2 quả me chua tươi (hoặc 3 thìa canh giấm bỗng nếp) tạo vị chua thanh dịu mát',
          '2 thìa canh dầu màu điều (tạo màu nước dùng vàng cam óng ả)',
          'Hành khô Hải Phòng thái mỏng phi vàng giòn ruộm thơm nức mũi',
          'Gia vị: Nước mắm cốt nhĩ cá cơm ngon, muối hạt, đường phèn, hạt nêm, tiêu xay',
        ],
      },
      {
        category: 'Topping Chả lá lốt nướng xém, Chả cá & Rau ăn kèm',
        items: [
          'Chả lá lốt: 250g thịt nạc vai xay nhuyễn, mộc nhĩ nấm hương băm nhỏ, hành tím, tiêu xay cuộn lá lốt tươi chiên xém cạnh thơm lừng',
          '200g chả cá Hải Phòng (hoặc chả mọc viên) chiên vàng thái lát mỏng',
          '1 mớ rau muống xanh non nhặt bớt lá chần giòn (hoặc rau rút theo mùa)',
          'Hành hoa, mùi tàu (ngò gai) rửa sạch thái nhỏ',
          'Chí chương Hải Phòng (tương ớt cay lên men gia truyền đất Cảng) hoặc ớt chưng dầu, quất tươi, chanh cốm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế cua, giã lọc lấy nước cốt và khều gạch cua',
        time: '20 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Nước cốt cua sánh mịn, thơm tự nhiên, gạch cua tươi sạch',
        actionPoints: [
          'Cua đồng ngâm rửa sạch bùn đất, bóc yếm và tách mai cua. Dùng que tăm khều riêng gạch cua vào chén nhỏ.',
          'Phần mai và thân cua cho vào cối cùng 1 thìa cà phê muối hạt giã nhuyễn (hoặc xay mịn). Muối hạt giúp thịt cua kết tảng dày dặn hơn khi nấu.',
          'Châm 2.5 lít nước sạch vào cua giã, khuấy đều rồi lọc qua rây 2 - 3 lần để lấy sạch nước cốt ngọt lịm, bỏ bã xác cua.',
        ],
        description:
          'Tách mai cua khều gạch để riêng. Thân cua giã nhuyễn cùng chút muối hạt, hòa nước lọc qua rây 2 - 3 lần lấy nước cốt cua trong ngọt.',
        tip: 'Cho chút muối hạt khi giã cua giúp thịt cua nổi lên đóng thành tảng to chắc nịch và béo ngậy hơn.',
      },
      {
        step: 2,
        title: 'Ninh nước dùng sườn và nấu tảng riêu cua béo ngậy',
        time: '40 phút',
        heat: 'Lửa vừa rồi hạ nhỏ liu riu',
        goal: 'Tảng riêu cua nổi dày dặn nguyên khối, nước dùng ngọt sâu từ tủy xương',
        actionPoints: [
          'Sườn non chặt khúc vừa ăn, chần nước sôi 3 phút rồi rửa sạch, ninh cùng 1 lít nước trên lửa nhỏ liu riu cho mềm róc thịt.',
          'Đặt nồi nước lọc cua lên bếp, đun lửa vừa và dùng đũa khuấy nhẹ theo một chiều đáy nồi để thịt cua không bị khê bén đáy.',
          'Khi nước bắt đầu nóng và mảng thịt cua kết tảng nổi dần lên mặt, hạ lửa nhỏ liu riu không khuấy nữa để riêu cua đóng thành từng tảng dày vững chắc.',
          'Dùng muôi lỗ nhẹ nhàng vớt các tảng riêu cua ra đĩa riêng để không bị vỡ nát khi nấu.',
          'Trút phần nước ninh sườn non vào nồi nước riêu cua để tạo vị ngọt sâu thanh mát.',
        ],
        description:
          'Ninh sườn non lấy nước ngọt. Nấu nồi nước cua trên lửa vừa, khuấy nhẹ đáy đến khi thịt cua đóng tảng nổi lên thì vớt ra đĩa riêng rồi trút nước sườn vào hòa chung.',
      },
      {
        step: 3,
        title: 'Cuộn chả lá lốt chiên xém, chưng gạch cua và hoàn thiện nước dùng',
        time: '20 phút',
        heat: 'Lửa vừa',
        goal: 'Chả lá lốt thơm lừng xém cạnh, gạch cua vàng óng, nước dùng chua thanh đậm đà',
        actionPoints: [
          'Trộn thịt nạc vai xay với mộc nhĩ nấm hương băm, hành tím băm, 1 thìa nước mắm ngon và tiêu xay. Đặt lá lốt mặt gân lên trên, cho nhân vào cuộn tròn chặt tay rồi chiên lửa vừa cho xém cạnh thơm nức.',
          'Phi thơm hành khô với 2 thìa dầu màu điều, trút gạch cua tươi vào chưng lửa nhỏ cho gạch chín vàng óng thơm phức, rưới 1/2 lên đĩa tảng riêu cua, 1/2 trút vào nồi nước dùng.',
          'Xào 1/2 lượng cà chua trút vào nồi nước dùng cùng nước cốt me dầm nát. Thả nốt phần cà chua múi cau còn lại vào.',
          'Nêm nước mắm cốt nhĩ hảo hạng, đường phèn, muối hạt cho vị nước dùng có độ chua dịu, ngọt sâu từ thịt cua và xương ninh.',
        ],
        description:
          'Cuộn chả lá lốt chiên xém cạnh thơm lừng. Chưng gạch cua với dầu điều thơm phức rồi rưới lên tảng riêu. Xào cà chua trút vào nồi nước dùng cùng nước cốt me và nêm nếm vừa vị.',
        tip: 'Rưới gạch cua chưng dầu điều lên đĩa tảng riêu giúp riêu cua bóng bẩy, vàng ươm và thơm ngậy đặc sắc.',
      },
      {
        step: 4,
        title: 'Chần rau muống giòn xanh và chần bánh đa đỏ dẻo dai',
        time: '10 phút',
        heat: 'Nồi nước sôi sùng sục',
        goal: 'Rau muống xanh mướt giòn sần sật, sợi bánh đa đỏ dẻo dai không nát',
        actionPoints: [
          'Rau muống non nhặt khúc, chần nhanh qua nồi nước sôi có chút muối trong 40 giây rồi vớt ra ngâm ngay vào âu nước đá lạnh để giữ màu xanh ngọc và độ giòn sần sật.',
          'Bánh đa đỏ Hải Phòng khô ngâm nước lạnh 5 phút cho mềm sợi, vớt ra ráo nước.',
          'Khi chuẩn bị ăn, cho bánh đa đỏ vào vợt chần qua nồi nước sôi trong 30 - 45 giây cho sợi bánh chín dẻo dai rồi xốc ráo nước, chia đều vào từng tô lớn.',
        ],
        description:
          'Chần rau muống ngâm nước đá giữ độ giòn xanh. Bánh đa đỏ ngâm mềm rồi chần qua nước sôi 30 - 45 giây cho sợi dẻo dai.',
      },
      {
        step: 5,
        title: 'Trình bày tô bánh đa cua Hải Phòng đầy ắp, quyến rũ sắc hương',
        time: '5 phút',
        heat: 'Nồi nước dùng sôi sùng sục',
        goal: 'Tô bánh đa rực rỡ sắc màu, sợi đỏ dẻo, riêu béo ngậy, chả thơm nức, ngập tràn hành phi',
        actionPoints: [
          'Xếp lên mặt tô bánh đa đỏ: tảng riêu cua vàng óng, 3 - 4 miếng chả lá lốt xém cạnh, chả cá Hải Phòng thái lát, sườn non mềm róc thịt, thịt cua bể xào, rau muống xanh giòn và múi cà chua đỏ cam.',
          'Rắc hành hoa, mùi tàu thái nhỏ và rắc ngập tràn hành khô phi vàng giòn ruộm lên trên.',
          'Múc nước dùng riêu cua sôi sùng sục chan ngập tô bánh đa.',
          'Thưởng thức ngay khi còn bốc khói cùng đĩa rau sống, vắt quất tươi và thêm một thìa chí chương Hải Phòng cay nồng xé lưỡi.',
        ],
        description:
          'Xếp bánh đa ra tô, bày riêu cua, chả lá lốt, chả cá, sườn non, thịt cua, rau muống, rắc hành phi giòn và chan ngập nước dùng sôi sùng sục. Thêm chí chương cay xè và thưởng thức.',
      },
    ],
    chefSecret:
      'Bí quyết cốt tử của bánh đa cua Hải Phòng nằm ở sợi bánh đa đỏ dẻo dai không bị chua nát, tảng riêu cua đồng nguyên khối béo ngậy được chưng cùng gạch cua phi thơm óng ả, và hương thơm quyến rũ không thể lẫn vào đâu được của chả lá lốt xém cạnh. Nước dùng có vị chua thanh thoát từ me/giấm bỗng, ngọt đậm đà từ cua và xương hầm, khi ăn cùng thìa chí chương đỏ au sẽ bùng nổ trọn vẹn phong vị đất Cảng.',
    recommendedSauce:
      'Chí chương Hải Phòng (tương ớt cay lên men gia truyền Hải Phòng) hoặc ớt chưng dầu xào cay.',
  },

  'banh-mi-que-hai-phong': {
    dishId: 'banh-mi-que-hai-phong',
    dishName: 'Bánh Mì Que Hải Phòng Pate Cay Cay',
    seoTitle: 'Cách Làm Bánh Mì Que Hải Phòng Patê Béo Ngậy Giòn Rụm Chuẩn Vị Đất Cảng',
    prepTime: '30 phút',
    cookTime: '20 phút',
    difficulty: 'Dễ',
    servings: '4 - 5 người (12 - 15 chiếc)',
    ingredients: [
      {
        category: 'Vỏ bánh mì que & Patê Cột Đèn béo ngậy',
        items: [
          '12 - 15 chiếc bánh mì que Hải Phòng (loại bánh mì thon nhỏ dài chừng 2 ngón tay, vỏ mỏng xốp)',
          '300g gan heo tươi (ngâm sữa tươi không đường 30 phút để khử sạch độc tố và mùi tanh)',
          '300g thịt nạc vai heo có chút mỡ xay nhuyễn',
          '200g mỡ phần lợn (thái hạt lựu nhỏ để trộn nhân và lót đáy khuôn hấp patê)',
          '1/2 ổ bánh mì xé nhỏ ngâm sữa tươi (bí quyết gia truyền giúp patê mềm mượt dẻo quánh)',
          '1 củ hành tây băm nhỏ, 4 củ hành tím, 1 củ tỏi băm nhuyễn, 50g bơ lạt (hoặc mỡ lợn)',
          'Gia vị: 1 thìa canh tiêu bắc đập dập cay nồng, 1 thìa canh nước mắm cốt nhĩ ngon, hạt nêm, chút ngũ vị hương',
        ],
      },
      {
        category: 'Chí chương Hải Phòng (Tương ớt cay lên men gia truyền)',
        items: [
          '1 bát nhỏ chí chương Hải Phòng (ớt tươi xay nhuyễn ủ lên men chua cay đằm vị)',
          'Chút mỡ patê vàng óng chảy ra khi hấp để quét lòng bánh',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Làm Patê Cột Đèn Hải Phòng béo ngậy, thơm nức mũi',
        time: '35 phút',
        heat: 'Lửa nhỏ hấp cách thủy',
        goal: 'Khối patê mềm mướt như nhung, màu nâu hồng quyến rũ, ngậy béo hương bơ tiêu',
        actionPoints: [
          'Gan heo ngâm sữa tươi 30 phút, rửa sạch thái lát mỏng. Phi thơm hành tỏi với bơ lạt, trút gan heo, thịt vai xay và bánh mì ngâm sữa vào xào chín tới cùng nước mắm, tiêu đập dập.',
          'Cho hỗn hợp vừa xào vào cối xay nhuyễn mịn.',
          'Xếp một lớp mỡ khổ thái mỏng lót dưới đáy khuôn, trút hỗn hợp patê lên trên, rắc hạt tiêu đập dập rồi đậy kín giấy bạc.',
          'Hấp cách thủy lửa nhỏ trong 2 - 3 tiếng (hoặc hầm nồi áp suất 1 tiếng) cho mỡ tan chảy quyện đều vào từng thớ thịt gan, tạo độ béo ngậy tan chảy trên đầu lưỡi.',
        ],
        description:
          'Xào gan heo ngâm sữa với thịt xay, bơ và bánh mì ngâm sữa rồi xay nhuyễn. Lót mỡ phần đáy khuôn, trút patê vào hấp cách thủy cho chín mềm béo ngậy.',
        tip: 'Lót mỡ phần dưới đáy khuôn khi hấp giúp patê có lớp mỡ trong veo béo ngậy đặc trưng của patê Cột Đèn Hải Phòng.',
      },
      {
        step: 2,
        title: 'Rạch bánh mì và phết nhân patê béo ngậy',
        time: '5 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Nhân patê trải đều dọc thân bánh mì que, không bị rách vỏ',
        actionPoints: [
          'Dùng dao sắc rạch một đường dọc theo thân chiếc bánh mì que.',
          'Dùng thìa phết một lớp patê Cột Đèn dày dặn ngập tràn ruột bánh.',
          'Rưới thêm chút nước mỡ patê vàng óng béo ngậy dọc theo khe bánh để khi nướng bánh thơm nức mũi.',
        ],
        description:
          'Rạch dọc thân bánh mì que, phết lớp patê Cột Đèn mềm mướt đầy đặn kèm chút mỡ patê béo ngậy.',
      },
      {
        step: 3,
        title: 'Nướng bánh mì que vàng giòn rụm',
        time: '5 phút',
        heat: '180°C - 200°C',
        goal: 'Vỏ bánh mì vàng ruộm giòn tan vỡ vụn trong miệng, patê bên trong nóng hổi tan chảy',
        actionPoints: [
          'Làm nóng lò nướng hoặc nồi chiên không dầu ở 180°C trước 5 phút.',
          'Xếp các que bánh mì vào nướng trong 3 - 5 phút đến khi vỏ bánh ngả vàng rộm, sờ vào thấy giòn cứng phát ra tiếng lách tách.',
        ],
        description:
          'Nướng bánh mì que trong nồi chiên không dầu hoặc lò nướng 3 - 5 phút ở 180°C đến khi vỏ ngoài vàng giòn rụm.',
      },
      {
        step: 4,
        title: 'Thưởng thức bánh mì que nóng hổi cùng chí chương cay xè',
        time: '2 phút',
        heat: 'Thưởng thức ngay',
        goal: 'Vỏ giòn rụm, patê béo ngậy quyện vị cay nồng xé lưỡi bùng nổ vị giác',
        actionPoints: [
          'Bơm trực tiếp chí chương đỏ au vào ruột bánh hoặc rót chí chương ra đĩa để chấm.',
          'Cắn một miếng giòn tan rụm, cảm nhận vị béo ngậy đậm đà của patê Cột Đèn hòa quyện hoàn hảo với vị cay nồng đặc trưng của chí chương đất Cảng.',
        ],
        description:
          'Chấm ngập bánh mì que giòn tan vào bát chí chương đỏ rực cay nồng nàn và thưởng thức ngay khi còn nóng hổi.',
      },
    ],
    chefSecret:
      'Bánh mì que Hải Phòng là món ăn vặt khô nướng giòn kinh điển, hoàn toàn không có nước dùng. Bí quyết nằm ở lớp vỏ bánh mì nướng giòn tan phát ra tiếng rôm rốp, nhân patê Cột Đèn béo ngậy tự làm với mỡ phần tan chảy, và không thể thiếu bát chí chương (tương ớt gia truyền Hải Phòng) cay nồng xé lưỡi.',
    recommendedSauce:
      'Chí chương Hải Phòng (tương ớt cay lên men gia truyền Hải Phòng) cay xè đặc trưng.',
  },

  'banh-mi-cha-ca-nong': {
    dishId: 'banh-mi-cha-ca-nong',
    dishName: 'Bánh Mì Chả Cá Nóng Thì Là Nha Trang',
    seoTitle: 'Cách Làm Bánh Mì Chả Cá Giòn Rụm, Đậm Đà Chuẩn Vị Đường Phố',
    prepTime: '20 phút',
    cookTime: '15 phút',
    difficulty: 'Dễ',
    servings: '4 - 5 ổ bánh mì',
    ingredients: [
      {
        category: 'Vỏ bánh mì & Chả cá nóng giòn',
        items: [
          '4 - 5 ổ bánh mì Việt Nam vỏ mỏng, ruột xốp (nướng lại giòn rụm trước khi kẹp)',
          '400g chả cá biển tươi (chả cá thu, cá nhồng, cá mối hoặc cá basa đã quết dai dẻo)',
          '1 nắm rau thì là và hành lá rửa sạch thái nhỏ (tăng độ thơm và khử sạch mùi tanh của cá)',
          'Gia vị ướp chả cá: 1 thìa canh nước mắm nhĩ, 1 thìa cà phê tiêu sọ đập dập cay thơm, 1/2 thìa cà phê đường, 1 củ tỏi và 2 củ hành tím băm nhuyễn, 1 thìa canh dầu màu điều',
          'Dầu ăn để chiên ngập dầu',
        ],
      },
      {
        category: 'Nước sốt tỏi ớt kẹo sền sệt (Linh hồn bánh mì chả cá)',
        items: [
          '2 thìa canh nước mắm cốt truyền thống thơm ngon',
          '2 thìa canh đường vàng (hoặc đường thốt nốt giúp sốt sánh keo)',
          '1.5 thìa canh nước cốt tắc (quất) hoặc nước cốt chanh thanh dịu',
          '1 thìa canh tương ớt rim kiểu miền Trung (hoặc tương ớt Cholimex)',
          '1 củ tỏi cô đơn băm nhuyễn, 2 quả ớt hiểm và ớt sừng đỏ băm nhỏ, 1 thìa canh nước lọc',
        ],
      },
      {
        category: 'Rau thơm & Đồ chua ăn kèm chuẩn vị',
        items: [
          '1 mớ rau răm tươi non - loại rau thơm "linh hồn" không thể thiếu của bánh mì chả cá, tạo vị cay nồng ấm át sạch mùi tanh',
          '1 củ cà rốt và củ cải trắng bào sợi ngâm giấm đường chua ngọt giòn rụm',
          '1 quả dưa leo rửa sạch, xắt thanh dài mỏng',
          'Ớt sừng xắt lát mỏng hoặc chút tiêu đen xay rắc lên mặt',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Quết chả cá dai giòn và chiên phồng nóng hổi tại chỗ',
        time: '10 phút',
        heat: 'Lửa vừa chiên ngập dầu',
        goal: 'Sợi chả cá nở phồng căng bóng, vàng ruộm hai mặt, bên trong dai giòn sần sật bốc khói nghi ngút',
        actionPoints: [
          'Cho chả cá xay nhuyễn vào âu, thêm thì là, hành lá, tỏi hành băm, tiêu sọ đập dập, nước mắm và chút dầu màu điều.',
          'Dùng muỗng quết mạnh tay liên tục theo một chiều trong 5 - 7 phút (hoặc đập chả vào thành âu) để tạo độ dai giòn tự nhiên mà không cần phụ gia.',
          'Đun sôi chảo dầu ngập mặt ở lửa vừa. Dùng khuôn ép sợi chả cá (hoặc dùng dao khéo gạt từng sợi dài, miếng dẹt) thả thẳng vào chảo dầu đang sôi.',
          'Chiên trong 3 - 5 phút đến khi sợi chả cá nổi phồng lên mặt dầu, ngả màu vàng ruộm hấp dẫn thì vớt ra rổ inox có lót giấy thấm dầu.',
        ],
        description:
          'Trộn chả cá với thì là, hành tỏi băm, tiêu sọ và nước mắm rồi quết mạnh tay cho dai dẻo. Ép sợi hoặc nặn dẹt thả vào chảo dầu sôi chiên phồng vàng ruộm hai mặt, vớt ra để ráo dầu.',
        tip: 'Chiên chả cá đến đâu kẹp bánh mì đến đó; ăn ngay khi sợi chả cá vừa vớt ra khỏi chảo dầu còn bỏng tay là chuẩn vị đường phố ngon nhất.',
      },
      {
        step: 2,
        title: 'Nấu nước sốt tỏi ớt mắm tắc sánh kẹo đậm đà',
        time: '5 phút',
        heat: 'Lửa nhỏ liu riu',
        goal: 'Nước sốt sánh đỏ óng ánh, vị chua cay mặn ngọt bùng nổ, bám đều vào ruột bánh mì',
        actionPoints: [
          'Cho vào nồi nhỏ gồm 2 thìa canh nước mắm, 2 thìa canh đường vàng và 1 thìa canh nước lọc.',
          'Bật lửa nhỏ liu riu, khuấy đều cho đường tan hết và hỗn hợp sôi lăn tăn, hơi sánh kẹo lại như mật ong thì tắt bếp.',
          'Chờ sốt nguội bớt, cho nước cốt tắc, tương ớt rim, tỏi băm và ớt băm nhuyễn vào khuấy đều.',
        ],
        description:
          'Đun sôi nhẹ nước mắm, đường và chút nước cho tan kẹo lại. Để nguội bớt rồi hòa nước cốt tắc, tương ớt rim, tỏi ớt băm nhuyễn để có phần sốt mắm kẹo chua cay sánh óng ả.',
        tip: 'Cho nước cốt tắc sau khi tắt bếp để nước sốt giữ được hương thơm thanh tươi của tinh dầu tắc mà không bị đắng.',
      },
      {
        step: 3,
        title: 'Làm nóng giòn vỏ bánh mì và sơ chế rau dưa',
        time: '5 phút',
        heat: '160°C - 180°C',
        goal: 'Vỏ bánh mì giòn tan phát ra tiếng rôm rốp, rau răm ráo sạch nước',
        actionPoints: [
          'Rau răm rửa sạch ngắt lấy ngọn non, vẩy thật ráo nước hoàn toàn (tránh để nước đọng làm ỉu vỏ bánh).',
          'Dưa leo xắt que dài; đồ chua củ cải cà rốt vắt nhẹ cho ráo nước ngâm.',
          'Cho ổ bánh mì vào nồi chiên không dầu hoặc lò nướng ở 160°C trong 2 - 3 phút (hoặc áp chảo trên chảo không dính) cho vỏ ngoài giòn rụm.',
        ],
        description:
          'Vẩy ráo nước hoàn toàn cho rau răm và đồ chua. Nướng lại bánh mì trong 2 - 3 phút để vỏ ngoài giòn rụm rôm rốp.',
      },
      {
        step: 4,
        title: 'Rạch bánh mì, kẹp đầy ắp nhân chả cá và rưới nước sốt',
        time: '3 phút',
        heat: 'Thưởng thức ngay',
        goal: 'Ổ bánh mì đầy đặn, cắn ngập miệng cảm nhận thớ chả cá nóng hổi, vị rau răm thơm nồng và sốt mắm kẹo tê cay',
        actionPoints: [
          'Dùng dao khía dọc một bên thân ổ bánh mì.',
          'Lót dưa leo xắt lát mỏng và một ít đồ chua giòn giòn dọc theo lòng bánh.',
          'Gắp thật nhiều sợi chả cá chiên nóng hổi vừa ra lò nhét đầy ắp vào ruột bánh.',
          'Phủ một lớp rau răm non tươi xanh lên trên thớ chả cá.',
          'Rưới đều 2 - 3 thìa nước sốt tỏi ớt mắm tắc sánh kẹo từ đầu đến đuôi bánh, rắc thêm chút tiêu sọ xay cay nồng.',
          'Cắn ngay một miếng giòn rụm khi bánh và chả cá còn đang nóng hổi bốc khói!',
        ],
        description:
          'Xẻ dọc bánh mì, lót dưa leo và đồ chua, nhồi ngập chả cá chiên nóng hổi, thêm nhiều rau răm rồi rưới nước sốt mắm tắc tỏi ớt sánh kẹo và tiêu xay. Cắn ngập miệng thưởng thức vị giòn tan đậm đà!',
      },
    ],
    chefSecret:
      'Linh hồn của ổ Bánh Mì Chả Cá đường phố nằm ở 2 yếu tố bất di bất dịch: Thứ nhất là Rau Răm tươi non kết hợp cùng chả cá chiên nóng tại chỗ tạo nên vị the cay ấm nồng át sạch hoàn toàn mùi tanh của cá biển; Thứ hai là Nước sốt tỏi ớt mắm tắc nấu sánh kẹo đượm vị chua cay mặn ngọt thấm sâu vào ruột bánh mì mà không làm vỏ bánh bị ỉu.',
    recommendedSauce:
      'Nước sốt mắm tắc tỏi ớt kẹo chua ngọt cùng tương ớt rim sa tế miền Trung cay nồng xé lưỡi.',
  },

  'pho-cuon-thit-bo': {
    dishId: 'pho-cuon-thit-bo',
    dishName: 'Phở Cuốn Thịt Bò Rau Thơm Ngũ Xã',
    seoTitle: 'Cách Làm Phở Cuốn Hà Nội Thịt Bò Tươi Ngon Nước Chấm Chua Ngọt Chuẩn Vị',
    prepTime: '25 phút',
    cookTime: '15 phút',
    difficulty: 'Dễ',
    servings: '3 - 4 người (15 - 20 cuốn)',
    ingredients: [
      {
        category: 'Bánh phở tráng bản to & Rau sống thanh mát',
        items: [
          '500g bánh phở cuốn tráng bản vuông (loại bánh tươi mềm mướt, dẻo dai, không bị rách)',
          '1 cây xà lách tươi giòn rửa sạch vẩy thật ráo nước',
          'Rau thơm phố cổ: rau mùi ta (ngò rí), rau húng láng (húng quế), kinh giới, ngổ hương',
        ],
      },
      {
        category: 'Thịt bò xào lăn thơm nức tỏi',
        items: [
          '400g thịt thăn bò hoặc thịt bắp bò tươi ngon, thái lát mỏng bản to',
          '1 củ hành tây bổ múi cau mỏng xào cùng thịt bò',
          '1 củ tỏi ta băm nhỏ (chia nửa ướp bò, nửa phi thơm)',
          '1 thìa canh dầu hào ngon, 1 thìa canh nước tương, 1 thìa cà phê tiêu xay, dầu ăn',
        ],
      },
      {
        category: 'Nước chấm chua ngọt tỏi ớt chuẩn vị Ngũ Xã',
        items: [
          'Nước mắm cốt nhĩ truyền thống: 3 thìa canh',
          'Đường cát: 2.5 thìa canh, giấm gạo nếp: 2 thìa canh, nước cốt chanh tươi: 1 thìa canh, nước lọc ấm: 6 thìa canh',
          'Tỏi ta băm nhuyễn, ớt hiểm đỏ băm nhỏ (để tỏi ớt nổi bồng bềnh)',
          'Đu đủ xanh và cà rốt tỉa hoa thái lát mỏng ngâm chua ngọt giòn sần sật',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Ướp và xào thịt bò thăn chín tới mềm mọng nước',
        time: '15 phút',
        heat: 'Lửa cực lớn',
        goal: 'Thịt bò chín tới mềm mọng ngọt đậm đà, thơm lừng mùi tỏi phi, không ra nước',
        actionPoints: [
          'Thịt bò thái lát mỏng ngang thớ, ướp với 1/2 lượng tỏi băm, 1 thìa dầu hào, 1 thìa dầu ăn và chút tiêu trong 15 phút.',
          'Đặt chảo lên bếp mở lửa cực lớn, phi thơm lượng tỏi còn lại với 2 thìa dầu ăn.',
          'Trút thịt bò và hành tây vào đảo nhanh tay liên tục trên lửa lớn trong 2 - 3 phút đến khi thịt vừa chín tới tái mềm thì tắt bếp ngay, trút ra đĩa cho nguội bớt.',
        ],
        description:
          'Thái thịt bò mỏng ướp tỏi dầu hào. Xào lửa cực lớn cùng hành tây trong 2 phút cho bò chín mềm mọng ngọt rồi trút ra đĩa.',
        tip: 'Xào lửa thật lớn và đảo nhanh tay là bí quyết vàng để thịt bò mềm ngọt mọng nước mà không bị dai hay ra nước ướt bánh phở khi cuốn.',
      },
      {
        step: 2,
        title: 'Pha bát nước mắm chua ngọt tỏi ớt chuẩn phố Ngũ Xã',
        time: '10 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Bát nước chấm chua ngọt thanh tao hài hòa, tỏi ớt nổi bồng bềnh đẹp mắt',
        actionPoints: [
          'Đu đủ và cà rốt thái lát mỏng bóp chút muối rồi ngâm giấm đường 15 phút cho giòn sần sật.',
          'Hòa tan 6 thìa nước ấm với 2.5 thìa đường, 3 thìa nước mắm cốt ngon, 2 thìa giấm và 1 thìa nước cốt chanh.',
          'Khuấy tan hoàn toàn rồi thả tỏi ớt băm nhuyễn vào (tỏi ớt sẽ nổi bồng bềnh trên mặt bát nước chấm), thả thêm đu đủ cà rốt ngâm chua ngọt.',
        ],
        description:
          'Pha nước mắm cốt với đường, giấm chanh và nước ấm cho vị chua ngọt dịu mát. Thả tỏi ớt băm nổi bồng bềnh cùng đu đủ cà rốt giòn sần sật.',
      },
      {
        step: 3,
        title: 'Cuộn phở cuốn tròn đều, mềm mướt chắc tay',
        time: '10 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Cuốn phở trắng muốt căng tròn bóng bẩy, nhân thịt và rau cuộn chặt tay không rách',
        actionPoints: [
          'Trải từng lá bánh phở cuốn vuông vắn lên mặt phẳng đĩa hoặc thớt sạch.',
          'Xếp lá xà lách tươi xanh, vài cọng rau mùi ta, rau húng láng lên trên.',
          'Gắp một lượng thịt bò xào hành tây vừa vặn đặt ngay ngắn vào giữa phần rau.',
          'Nhẹ nhàng cuộn tròn đều tay thật chắc chắn nhưng khéo léo để lá bánh phở ôm trọn lấy nhân mà không bị rách vỡ.',
        ],
        description:
          'Trải lá bánh phở vuông, xếp xà lách, rau thơm và thịt bò xào lên rồi cuộn tròn chắc tay thành từng cuốn thon dài đẹp mắt.',
      },
      {
        step: 4,
        title: 'Trình bày và thưởng thức phở cuốn Hà Nội tươi mát',
        time: '2 phút',
        heat: 'Thưởng thức ngay',
        goal: 'Đĩa phở cuốn trắng ngần mát mắt, chấm ngập bát mắm chua ngọt thanh vị',
        actionPoints: [
          'Xếp các cuốn phở ngay ngắn ra đĩa tròn, có thể cắt đôi vát chéo.',
          'Chấm ngập cuốn phở vào bát nước chấm chua ngọt thơm nức tỏi ớt, ăn kèm miếng đu đủ giòn sần sật để cảm nhận trọn vẹn sự thanh tao nức tiếng của phố ẩm thực Ngũ Xã.',
        ],
        description:
          'Bày phở cuốn ra đĩa, chấm cùng nước mắm chua ngọt tỏi ớt và đu đủ giòn sần sật. Thưởng thức hương vị tươi mát, thanh tao đậm chất Hà Thành.',
      },
    ],
    chefSecret:
      'Phở cuốn Hà Nội (làng Ngũ Xã) là món cuốn tươi nguội thanh mát, hoàn toàn không có nước dùng chan như phở nước. Bánh phở phải mềm dai không nhão, thịt bò xào lửa lớn ngọt mềm mọng nước, và đặc biệt bát nước mắm chấm phải pha chua ngọt thanh tao, tỏi ớt băm nổi bồng bềnh đẹp mắt.',
    recommendedSauce:
      'Nước mắm chua ngọt tỏi ớt pha thanh vị cùng đu đủ, cà rốt giòn chua ngọt.',
  },

  'cha-ca-la-vong-ha-noi': {
    dishId: 'cha-ca-la-vong-ha-noi',
    dishName: 'Chả Cá Lã Vọng Thì Là Hành Hoa Chảo Gang',
    seoTitle: 'Cách Làm Chả Cá Lã Vọng Hà Nội Nướng Than Hoa, Xèo Xèo Chảo Mỡ Chuẩn Vị Phố Cổ',
    prepTime: '40 phút',
    cookTime: '20 phút',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Cá lăng tươi & Gia vị ướp riềng mẻ nghệ gia truyền',
        items: [
          '1kg cá lăng tươi sống (hoặc cá quả, cá nheo chắc thịt): lọc lấy phi lê thịt nạc dày, thái miếng con chì dày cỡ 1.5 - 2cm',
          '4 thìa canh nước cốt riềng già (riềng củ già giã nhuyễn vắt lấy nước cốt đặc dậy mùi thơm cay ấm)',
          '3 thìa canh mẻ ngấu chua thanh tao (lọc qua rây mịn khử sạch bã)',
          '2 thìa canh mắm tôm ngon hảo hạng (chọn mắm tôm mịn màu hoa cà)',
          '2 thìa canh nước cốt nghệ tươi giã nhuyễn (hoặc 1 thìa cà phê bột nghệ tạo sắc vàng hoàng gia)',
          '1 thìa canh đường phèn giã mịn, 1 thìa cà phê tiêu sọ trắng xay, 2 thìa canh mỡ lợn (hoặc dầu ăn) để ướp ngấm',
        ],
      },
      {
        category: 'Rau thơm, Mỡ lợn & Ăn kèm trên chảo xèo xèo',
        items: [
          '300g thì là tươi non (cắt khúc dài khoảng 4 - 5cm)',
          '300g hành hoa tươi (phần cọng trắng chẻ dọc, phần lá xanh cắt khúc dài bằng thì là)',
          '100g mỡ phần lợn tươi (thắng lấy mỡ nước và tóp mỡ giòn để đảo cá xèo xèo trên chảo gang)',
          '800g bún rối sợi nhỏ trắng muốt mượt mà',
          '150g lạc rang (đậu phộng) vàng giòn rụm, xát sạch vỏ giã dập',
          'Bánh đa nướng mè giòn tan bẻ miếng vừa ăn',
        ],
      },
      {
        category: 'Pha mắm tôm đánh sủi bọt chuẩn Tràng An',
        items: [
          '4 thìa canh mắm tôm ngon nguyên chất',
          '1 thìa canh rượu trắng (khử tanh và giúp mắm tôm bông xốp mịn màng)',
          '1.5 thìa canh đường cát, 1 quả chanh tươi vắt lấy nước cốt',
          'Ớt hiểm đỏ thái lát, 1 - 2 giọt tinh dầu cà cuống (nếu có, linh hồn ẩm thực Hà Thành xưa)',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế phi lê cá lăng và ướp riềng mẻ nghệ đậm đà',
        time: '20 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Từng miếng cá lăng thấm đẫm riềng mẻ, màu vàng óng ả, thịt se chắc không nát',
        actionPoints: [
          'Phi lê cá lăng rửa sạch với nước muối loãng pha chút rượu gừng khử sạch nhớt, thấm thật khô bằng khăn giấy, thái miếng dày 1.5 - 2cm vừa miệng.',
          'Trong bát lớn, trộn đều nước cốt riềng già, mẻ ngấu lọc mịn, mắm tôm ngon, nước cốt nghệ, đường phèn, tiêu trắng xay và 2 thìa mỡ lợn.',
          'Thoa đều hỗn hợp gia vị lên từng miếng cá, dùng tay massage nhẹ rồi ướp trong 30 - 45 phút cho ngấm sâu vào từng thớ thịt cá.',
        ],
        description:
          'Thái cá lăng miếng vừa ăn, ướp nước cốt riềng, mẻ ngấu, mắm tôm, nghệ tươi và mỡ lợn trong 30 phút cho ngấm sâu gia vị.',
        tip: 'Vắt lấy nước cốt riềng thay vì để cả bã giúp khi nướng cá không bị cháy khét bề mặt mà vẫn thơm nức mùi riềng ấm.',
      },
      {
        step: 2,
        title: 'Kẹp vỉ nướng than hoa cho cá vàng ươm xém cạnh',
        time: '15 phút',
        heat: 'Than hoa đỏ rực không khói',
        goal: 'Hai mặt cá nướng vàng ruộm xém cạnh thơm lừng mùi than khói, bên trong thịt chín tới mọng nước',
        actionPoints: [
          'Xếp từng miếng cá lăng ngay ngắn vào vỉ nướng sắt có quét một lớp mỡ lợn mỏng chống dính.',
          'Quạt than hoa cho hồng rực, đặt vỉ cá lên nướng cách mặt than 15cm. Lật trở đều tay liên tục.',
          'Thỉnh thoảng dùng chổi quét thêm chút nước mỡ ướp lên mặt cá để miếng cá không bị khô.',
          'Nướng khoảng 10 - 12 phút đến khi hai mặt cá săn vàng óng, xém cạnh bốc khói ngào ngạt thì gỡ cá ra đĩa.',
        ],
        description:
          'Kẹp cá vào vỉ nướng trên than hoa đỏ rực, lật trở đều tay và phết mỡ liên tục đến khi cá chín xém vàng ươm thơm nức mũi.',
      },
      {
        step: 3,
        title: 'Đánh mắm tôm sủi bọt bông xốp thanh tao',
        time: '5 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Bát mắm tôm sủi bọt trắng bông như tuyết, vị chua ngọt hài hòa dậy mùi thơm dịu',
        actionPoints: [
          'Cho 4 thìa mắm tôm, 1.5 thìa đường, 1 thìa rượu trắng vào bát, vắt nước cốt 1 quả chanh tươi.',
          'Dùng đũa đánh thật nhanh và mạnh tay theo một chiều cho đến khi mắm tôm sủi bọt bông xốp ngập miệng bát.',
          'Thả vài lát ớt hiểm đỏ tươi và nhỏ 1 - 2 giọt tinh dầu cà cuống vào cho dậy mùi thơm quý phái đặc trưng phố cổ.',
        ],
        description:
          'Đánh mắm tôm cùng đường, rượu trắng và nước cốt chanh đến khi nổi bọt bông xốp mịn. Thêm ớt tươi và tinh dầu cà cuống.',
        tip: 'Thêm thìa nhỏ rượu trắng là bí quyết cổ truyền giúp mắm tôm nhanh sủi bọt bông tuyết và khử sạch hoàn toàn vị gắt tanh.',
      },
      {
        step: 4,
        title: 'Đảo cá xèo xèo cùng hành hoa và thì là trên chảo gang',
        time: '5 phút',
        heat: 'Lửa vừa trên bếp tại bàn',
        goal: 'Chảo cá sôi xèo xèo thơm nức mũi, hành thì là chín tái bóng bẩy ngấm mỡ cá',
        actionPoints: [
          'Đặt chảo gang nhỏ lên bếp cồn hoặc bếp từ mini giữa bàn ăn, múc 2 - 3 thìa mỡ lợn (hoặc mỡ thắng tóp giòn) đun sôi xèo xèo.',
          'Gắp từng miếng cá lăng nướng vàng vào chảo, phủ ngập tràn thì là và hành hoa chẻ lên trên.',
          'Dùng đũa đảo nhẹ tay trong 1 - 2 phút cho hành và thì là chín tái, ngấm mỡ cá bóng mượt thơm ngào ngạt.',
        ],
        description:
          'Cho mỡ lợn vào chảo gang đun sôi, thả cá nướng cùng ngập tràn hành hoa và thì là vào đảo xèo xèo 1 - 2 phút cho chín tái thơm lừng.',
      },
      {
        step: 5,
        title: 'Thưởng thức chả cá Lã Vọng chuẩn phong vị người Tràng An',
        time: '2 phút',
        heat: 'Thưởng thức nóng hổi tại bàn',
        goal: 'Bát bún hài hòa màu sắc, cá béo ngậy ngọt mềm, lạc giòn bùi, mắm tôm bốc khói ngất ngây',
        actionPoints: [
          'Gắp một chút bún rối trắng muốt vào bát riêng.',
          'Gắp miếng cá lăng vàng ươm béo ngậy, gắp hành hoa và thì là nóng hổi bóng mỡ từ chảo đặt lên trên sợi bún.',
          'Rắc một nhúm lạc rang vàng giã dập và bẻ chút bánh đa nướng giòn rụm.',
          'Rưới một thìa mắm tôm đánh sủi bọt thơm nức, thêm 1 thìa mỡ sôi nóng hổi từ chảo rưới lên cho bốc khói.',
          'Trộn nhẹ và thưởng thức ngay khi còn nóng bỏng môi để cảm nhận sự giao thoa tinh tế bậc nhất của ẩm thực Hà Thành.',
        ],
        description:
          'Cho bún vào bát, xếp cá nướng, hành thì là từ chảo gang, rắc lạc rang, bánh đa nướng rồi rưới mắm tôm sủi bọt và thìa mỡ sôi nóng hổi. Thưởng thức ngay tại bàn.',
      },
    ],
    chefSecret:
      'Chả cá Lã Vọng là món nướng than hoa kết hợp xào chảo mỡ xèo xèo tại bàn, tuyệt đối không phải món nấu canh hay bún nước dùng chan. Tinh hoa gia truyền số 14 phố Chả Cá xưa nằm ở 4 điểm: Chọn cá lăng thịt chắc ngọt béo không bở; Ướp bằng nước cốt riềng già đậm đặc và mẻ ngấu chua thanh; Nướng vỉ trên than hoa cho xém cạnh thơm nức khói; và ăn kèm ngập tràn thì là, hành hoa cùng bát mắm tôm đánh sủi bọt bông tuyết.',
    recommendedSauce:
      'Mắm tôm đánh sủi bọt bông xốp với rượu trắng, nước cốt chanh, ớt tươi và tinh dầu cà cuống (hoặc nước mắm chanh tỏi ớt cho người không quen ăn mắm tôm).',
  },

  'banh-cuon-nong-thit-bam': {
    dishId: 'banh-cuon-nong-thit-bam',
    dishName: 'Bánh Cuốn Nóng Thịt Băm Mộc Nhĩ Cà Cuống',
    seoTitle: 'Cách Làm Bánh Cuốn Nóng Vỏ Mỏng Mướt, Nước Chấm Ấm Nóng Chuẩn Vị Hà Nội',
    prepTime: '30 phút (ngâm bột)',
    cookTime: '25 phút',
    difficulty: 'Trung bình',
    servings: '4 người (đĩa đầy đặn)',
    ingredients: [
      {
        category: 'Bột bánh cuốn mỏng mướt (pha chảo hoặc nồi hơi)',
        items: [
          '200g bột gạo tẻ ngon (chọn loại bột mới, hạt mịn không có mùi chua)',
          '70g bột năng (tạo độ dai dẻo mướt trong suốt cho vỏ bánh)',
          '30g bột bắp (hoặc bột nếp, giúp bánh giữ độ mềm mượt khi nguội)',
          '800ml nước lọc nguội (ngâm bột 2 - 3 tiếng, chắt bỏ bớt nước trong và bù lại lượng nước tương đương để bánh trong veo không mùi bột cũ)',
          '1 thìa cà phê muối tinh, 1 thìa canh dầu ăn',
        ],
      },
      {
        category: 'Nhân thịt băm mộc nhĩ nấm hương thơm lừng',
        items: [
          '300g thịt nạc vai (nạc dăm) heo có chút mỡ xay nhỏ',
          '30g mộc nhĩ khô ngâm nở, rửa sạch thái sợi nhỏ băm vụn',
          '20g nấm hương khô ngâm nở thái nhỏ thơm ngát',
          '4 củ hành khô băm nhỏ, 1 thìa canh nước mắm cốt nhĩ ngon, 1 thìa cà phê tiêu bắc xay, hạt nêm, dầu ăn',
        ],
      },
      {
        category: 'Hành phi vàng giòn & Topping ăn kèm',
        items: [
          '200g hành tím ta (bào mỏng đều, phơi se mặt rồi phi vàng giòn ruộm; giữ lại phần dầu phi hành)',
          '250g chả quế Hà Nội nướng vàng thơm (thái lát vát mỏng) hoặc chả lụa',
          'Rau thơm ăn kèm: rau mùi ta (ngò rí), rau húng bạc hà tươi non',
        ],
      },
      {
        category: 'Nước chấm bánh cuốn ấm nóng gia truyền',
        items: [
          'Nước mắm cốt nhĩ ngon: 4 thìa canh',
          'Đường cát: 3 thìa canh, giấm gạo nếp (hoặc nước cốt quất tươi): 2 thìa canh',
          'Nước hầm xương heo ấm nóng (hoặc nước lọc ấm): 180ml',
          'Tỏi băm, ớt tươi thái lát, 1 - 2 giọt tinh dầu cà cuống (bí quyết gia truyền thơm quý phái phố cổ)',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Pha bột bánh cuốn và ủ bột mỏng mướt',
        time: '30 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Bột tan hoàn toàn, trong veo mịn màng, không còn mùi bột chua',
        actionPoints: [
          'Hòa tan 200g bột gạo, 70g bột năng, 30g bột bắp với 800ml nước lọc và 1 thìa cà phê muối.',
          'Để bột lắng trong 2 tiếng, khéo léo chắt phần nước trong trên mặt đổ đi, rồi chế thêm lượng nước lọc mới đúng bằng lượng nước vừa chắt ra (thay nước giúp bánh trong veo, mềm dai không mùi chua).',
          'Trước khi tráng, khuấy đều bột và cho vào 1 thìa canh dầu ăn để bánh bóng mượt róc chảo.',
        ],
        description:
          'Hòa bột gạo, bột năng, bột bắp với nước và muối. Để bột lắng, chắt bớt nước trong thay nước mới rồi thêm chút dầu ăn để bánh mỏng mướt.',
        tip: 'Kỹ thuật chắt thay nước trong là bí quyết vàng của làng bánh cuốn Thanh Trì giúp lá bánh tráng ra trong veo, mềm mướt không còn mùi bột cũ.',
      },
      {
        step: 2,
        title: 'Xào nhân thịt băm mộc nhĩ nấm hương đậm đà',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Thịt chín săn thơm nức mùi hành tiêu nấm hương, nhân ẩm ngọt không bị khô xác',
        actionPoints: [
          'Phi thơm 2 thìa hành khô băm nhỏ với dầu ăn trên chảo nóng.',
          'Trút thịt nạc vai xay vào xào săn trên lửa lớn, dầm tơi thịt không để vón cục.',
          'Cho mộc nhĩ và nấm hương băm nhỏ vào đảo đều trong 3 - 4 phút cho chín thơm ngậy.',
          'Nêm 1 thìa nước mắm cốt nhĩ ngon, hạt nêm và rắc thật nhiều tiêu xay cho dậy mùi thơm lừng rồi tắt bếp trút ra đĩa riêng.',
        ],
        description:
          'Phi thơm hành khô, xào thịt nạc xay cùng mộc nhĩ, nấm hương. Nêm nước mắm cốt nhĩ, tiêu xay thơm lừng và giữ cho nhân ẩm béo.',
      },
      {
        step: 3,
        title: 'Tráng bánh cuốn mỏng tang bằng chảo chống dính',
        time: '15 phút',
        heat: 'Lửa nhỏ vừa',
        goal: 'Lá bánh mỏng trong suốt, mềm dai không rách, cuộn nhân chắc tay',
        actionPoints: [
          'Đặt chảo chống dính lên bếp ở lửa nhỏ vừa, dùng cọ quét một lớp dầu phi hành mỏng tang khắp mặt chảo.',
          'Khuấy đều âu bột, múc một muôi nhỏ bột đổ vào lòng chảo, nghiêng đều tay để bột tráng một lớp mỏng dính khắp đáy chảo.',
          'Đậy vung kín trong 25 - 30 giây đến khi thấy lá bánh chuyển màu trong suốt và phồng rộp nhẹ là bánh đã chín.',
          'Úp nhanh chảo lên một chiếc đĩa to (hoặc mâm) đã quét sẵn dầu phi hành.',
          'Rải một thìa nhân thịt mộc nhĩ vào giữa rồi nhẹ nhàng cuộn tròn lá bánh lại thật khéo léo.',
        ],
        description:
          'Quét lớp dầu mỏng lên chảo chống dính, đổ muôi bột mỏng nghiêng đều, đậy vung 25 giây cho bánh chín trong suốt. Úp ra đĩa, trải nhân thịt rồi cuộn tròn.',
        tip: 'Chảo chỉ cần quét lớp dầu thật mỏng (lau bớt nếu thừa dầu) để bột bám đều mặt chảo không bị trượt co rúm lại.',
      },
      {
        step: 4,
        title: 'Pha bát nước chấm bánh cuốn ấm nóng chuẩn vị Hà Nội',
        time: '5 phút',
        heat: 'Ấm nóng 50°C - 60°C',
        goal: 'Bát nước chấm màu hổ phách ấm nóng, vị chua ngọt thanh tao dịu nhẹ',
        actionPoints: [
          'Hòa tan 180ml nước hầm xương ấm (hoặc nước lọc ấm) với 3 thìa đường cát, 4 thìa nước mắm cốt nhĩ ngon và 2 thìa giấm gạo nếp.',
          'Khuấy đều cho tan đường, nếm thấy vị chua ngọt thanh dịu nhẹ nhàng, không mặn gắt.',
          'Thả thêm vài lát ớt tươi, tỏi băm và nhỏ 1 giọt tinh dầu cà cuống dậy hương thơm nức.',
          'Thả các lát chả quế thái mỏng ngâm trực tiếp vào bát nước mắm ấm nóng để miếng chả quế ngấm vị béo ngọt ấm nồng.',
        ],
        description:
          'Pha nước hầm xương ấm với nước mắm cốt nhĩ, đường, giấm nếp cho vị chua ngọt thanh dịu. Thả ớt tươi, tinh dầu cà cuống và ngâm ngập chả quế vào bát nước chấm nóng.',
      },
      {
        step: 5,
        title: 'Bày đĩa bánh cuốn nóng hổi, rắc hành phi và thưởng thức',
        time: '3 phút',
        heat: 'Thưởng thức nóng hổi ngay',
        goal: 'Đĩa bánh cuốn trắng mướt bóng bẩy, hành phi giòn tan, nước chấm bốc khói nghi ngút',
        actionPoints: [
          'Xếp từng cuộn bánh cuốn nóng hổi ngay ngắn lên đĩa.',
          'Dùng chổi quét một lớp dầu phi hành bóng bẩy lên mặt bánh, rắc thật nhiều hành tím phi vàng giòn ruộm thơm nức mũi.',
          'Bày kèm đĩa rau mùi ta, rau húng bạc hà tươi non xanh mát.',
          'Gắp miếng bánh cuốn nóng mềm mướt chấm ngập vào bát nước chấm ấm nóng có miếng chả quế thơm nức, cảm nhận trọn vẹn vị mềm mượt, béo bùi và giòn rụm tan chảy trong miệng.',
        ],
        description:
          'Quét dầu hành phi lên bánh cuốn, rắc ngập tràn hành phi giòn ruộm. Ăn kèm chả quế ngâm nước chấm ấm nóng và rau mùi ta, húng bạc hà.',
      },
    ],
    chefSecret:
      'Bánh cuốn nóng Hà Nội tinh tế ở 3 điểm vàng: Vỏ bánh mỏng tang trong suốt nhờ kỹ thuật chắt thay nước bột và pha bột năng đúng tỷ lệ; Nhân xào đủ vị ngọt béo từ nấm hương, mộc nhĩ và mỡ lợn phi hành; Đặc biệt bát nước mắm chấm bắt buộc phải pha bằng nước ấm nóng vị chua ngọt thanh dịu, ngâm chả quế vàng thơm và rắc đẫm hành ta tự phi giòn ruộm thơm lừng.',
    recommendedSauce:
      'Nước mắm pha ấm nóng chua ngọt thanh tao thả ớt tươi, ngâm ngập lát chả quế nướng và 1 giọt tinh dầu cà cuống.',
  },

  'com-tam-suon-bi-cha': {
    dishId: 'com-tam-suon-bi-cha',
    dishName: 'Cơm Sườn Nướng Mật Ong Thơm Ngon Đậm Đà Chuẩn Quán',
    seoTitle: 'Cách Làm Cơm Sườn Nướng Mật Ong Thơm Ngon Đậm Đà Chuẩn Quán',
    ratingValue: '4.9',
    reviewCount: 218,
    prepTime: '30 phút (ướp 2 - 4 tiếng)',
    cookTime: '25 phút',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Sườn cốt lết & Cơm tấm',
        items: [
          '4 miếng sườn cốt lết heo có riềm mỡ mỏng dày 1.2 - 1.5cm (~600g - 700g)',
          '300g gạo tấm thơm dẻo',
          '150g bì heo trộn thính gạo rang thơm',
          '2 miếng chả trứng hấp béo bùi',
        ],
      },
      {
        category: 'Sốt ướp sườn nướng mật ong chuẩn quán (Tỷ lệ vàng)',
        items: [
          '2.5 thìa canh mật ong rừng nguyên chất (tạo độ bóng ngậy quyến rũ)',
          '1.5 thìa canh sữa đặc Ông Thọ (bí quyết độc quyền giúp sườn mềm mọng không khô xác)',
          '2 thìa canh nước mắm cốt nhĩ truyền thống',
          '1 thìa canh dầu hào Maggi',
          '1 thìa canh nước tương đậm đặc',
          '1 thìa canh dầu màu điều (tạo màu cánh gián vàng ruộm bắt mắt)',
          '1/2 vắt nước cốt cam tươi (axit tự nhiên làm mềm thớ thịt)',
          '1 thìa canh mỡ nước hoặc dầu ăn',
          '1 thìa cà phê tiêu sọ giã dập, 1 thìa cà phê hạt nêm',
        ],
      },
      {
        category: 'Cốt gia vị tươi (Vắt lấy nước cốt để nướng không cháy khét)',
        items: [
          '4 tép tỏi tươi băm nhuyễn',
          '4 củ hành tím băm nhuyễn',
          '2 gốc sả tươi giã nhuyễn',
          '(Bắt buộc vắt lấy phần nước cốt đậm đà, bỏ xác hành tỏi sả để khi nướng không bị cháy đen lấm tấm)',
        ],
      },
      {
        category: 'Đồ ăn kèm & Nước mắm kẹo tỏi ớt',
        items: [
          'Dưa leo giòn mát, cà chua, củ cải cà rốt ngâm chua ngọt',
          '1 bát mỡ hành phi rưới tóp mỡ giòn rụm',
          'Nước mắm kẹo: 1 chén nước mắm ngon + 1 chén đường vàng + 1 chén nước dừa tươi đun sánh kẹo + tỏi ớt băm nổi bồng bềnh',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế & Dần mềm sườn cốt lết (Kỹ thuật tơi xốp thớ thịt)',
        time: '15 phút',
        heat: 'Sơ chế ở nhiệt độ phòng',
        goal: 'Sườn sạch mùi hôi, thớ thịt mềm tơi ngấm gia vị và giữ phẳng phiu không bị cong vênh khi nướng',
        actionPoints: [
          'Rửa sạch sườn cốt lết với nước muối loãng pha chút giấm hoặc chanh tươi để khử sạch mùi hôi, dùng khăn sạch thấm khô hoàn toàn.',
          'Dùng búa dần thịt (hoặc sống dao bản to) đập nhẹ đều hai mặt miếng sườn.',
          'Bí quyết vàng: Dần nhẹ ranh giới giữa phần thăn nạc và riềm mỡ/xương để cắt đứt các sợi gân co rút, giúp miếng sườn khi nướng giữ phẳng phiu, dẻo mềm giòn mọng.',
        ],
        description:
          'Dùng muối loãng chà rửa sạch sườn, thấm thật khô. Dùng búa dần thịt đập dập nhẹ 2 mặt miếng sườn giúp đứt gân co rút, giúp sườn ngấm sâu gia vị và khi nướng phẳng phiu mềm mọng.',
        tip: 'Khâu dần thịt nhẹ tay giúp xé vỡ mật độ cơ thịt, sườn khi ngấm sốt mật ong sẽ dẻo mềm tan trong miệng mà không bao giờ bị dai hay khô xác.',
      },
      {
        step: 2,
        title: 'Giã vắt nước cốt hành tỏi sả & Pha sốt ướp mật ong - sữa đặc',
        time: '15 phút (ướp 2 - 4 tiếng)',
        heat: 'Ướp trong ngăn mát tủ lạnh',
        goal: 'Sốt ướp sánh mịn màu cam nâu óng ả, ngấm sâu tận tủy thịt sườn',
        actionPoints: [
          'Giã thật nhuyễn hành tím, tỏi và sả tươi, cho vào túi vải mỏng vắt kiệt lấy 3 thìa canh nước cốt đậm đà (bỏ phần xác để nướng không cháy khét).',
          'Hòa nước cốt hành tỏi sả với 2.5 thìa mật ong, 1.5 thìa sữa đặc Ông Thọ, 1/2 vắt nước cốt cam tươi, 2 thìa nước mắm nhĩ, 1 thìa dầu hào, 1 thìa nước tương, 1 thìa dầu màu điều, 1 thìa mỡ nước và tiêu sọ.',
          'Thoa đều hỗn hợp sốt thơm lừng lên từng miếng sườn cốt lết, massage nhẹ nhàng 2 mặt.',
          'Bọc màng bọc thực phẩm, ướp ngăn mát tủ lạnh ít nhất 2 - 4 tiếng (ngon nhất là để qua đêm cho sườn lên màu mỡ màng đượm vị).',
        ],
        description:
          'Giã nhuyễn hành tỏi sả vắt lấy nước cốt. Trộn đều với mật ong, sữa đặc Ông Thọ, nước cốt cam tươi, nước mắm nhĩ, dầu hào, dầu màu điều và mỡ nước. Thoa đều ướp sườn trong ngăn mát tủ lạnh từ 2 - 4 tiếng.',
        tip: 'Bắt buộc vắt lấy nước cốt hành tỏi sả (bỏ xác), vì xác hành tỏi khi nướng gặp nhiệt cao sẽ cháy đen khét đắng mất tính thẩm mỹ.',
      },
      {
        step: 3,
        title: 'Kỹ thuật nướng sườn mật ong xém cạnh óng ả (Không bị cháy khét)',
        time: '15 - 20 phút',
        heat: 'Than hồng đỏ vừa / Nồi chiên không dầu 180°C',
        goal: 'Miếng sườn màu cánh gián óng ánh mật ong, riềm mỡ xém cạnh béo thơm, bên trong mọng nước',
        actionPoints: [
          'Trên bếp than hoa: Nhóm than đỏ rực (không có ngọn lửa bốc). Đặt vỉ nướng sườn, lật sườn đều tay mỗi 2 - 3 phút. Dùng chổi cọ quét hỗn hợp mỡ nước + sốt ướp liên tục lên 2 mặt sườn để giữ độ mọng nước.',
          'Trên nồi chiên không dầu / lò nướng: Làm nóng nồi 180°C trong 5 phút. Nướng lần 1 ở 180°C trong 10 phút, lật mặt quét sốt nướng lần 2 ở 180°C trong 8 phút.',
          'Bí quyết vàng tuyệt đỉnh: Chỉ quét lớp mật ong nguyên chất mỏng nhẹ lên 2 mặt sườn ở 2 phút nướng cuối cùng. Cách này giúp miếng sườn óng ả rực rỡ, dậy mùi thơm quyến rũ mà mật ong không bị đắng hay cháy đen do nhiệt cao.',
        ],
        description:
          'Nướng sườn trên than hồng hoặc nồi chiên không dầu 180°C. Thường xuyên quét hỗn hợp mỡ nước và sốt ướp để thịt mọng nước. Ở 2 phút cuối mới quét lớp mật ong mỏng lên mặt giúp miếng sườn óng vẩy vàng ruộm thơm nức.',
        tip: 'Mật ong rất dễ cháy xém ở nhiệt độ cao, chỉ quét mật ong trực tiếp ở phút cuối cùng để đạt màu vàng óng ánh như ngoài tiệm.',
      },
      {
        step: 4,
        title: 'Nấu cơm tấm dẻo ngon, làm mỡ hành & Pha nước mắm kẹo bồng bềnh',
        time: '15 phút',
        heat: 'Lửa nhỏ (đun sốt mắm)',
        goal: 'Cơm tấm hạt tơi xốp, mỡ hành phi rưới tóp mỡ giòn tàn, nước mắm kẹo sánh mịn tỏi ớt nổi 100%',
        actionPoints: [
          'Nấu cơm tấm: Vo sạch gạo tấm, đun nước sôi rồi cho gạo vào nấu với tỷ lệ 1 bát gạo : 1 bát nước cùng 1 thìa cà phê mỡ nước và chút muối hạt giúp hạt cơm bóng bẩy, tơi xốp dẻo ngon.',
          'Pha nước mắm kẹo: Đun 1 chén nước mắm nhĩ + 1 chén đường cát vàng + 1 chén nước dừa tươi trên lửa nhỏ cho đun sánh kẹo lại, để nguội hoàn toàn.',
          'Vắt chanh tươi và cho tỏi ớt sừng băm nhuyễn vào khuấy nhẹ (tỏi ớt nổi 100% bồng bềnh lên mặt nước mắm vô cùng bắt mắt).',
          'Làm mỡ hành: Đun sôi mỡ nước dội trực tiếp vào bát hành lá thái nhỏ rắc chút đường muối, rưới tóp mỡ giòn rụm lên trên.',
        ],
        description:
          'Nấu cơm tấm dẻo thơm hạt tơi bóng. Đun nước mắm nhĩ, đường vàng và nước dừa tươi đun sánh kẹo, để nguội rồi hòa nước cốt chanh cùng tỏi ớt băm bồng bềnh. Rưới mỡ hành tóp mỡ lên dĩa cơm sườn nóng hổi.',
      },
    ],
    chefSecret:
      'Cho 1.5 thìa sữa đặc Ông Thọ và vắt thêm 1/2 quả cam tươi vào sốt ướp là bí quyết gia truyền độc quyền của các quán cơm tấm Sài Gòn nổi tiếng, giúp thớ sườn nướng mềm tan mọng nước, thơm lừng béo ngậy khó cưỡng.',
    recommendedSauce: 'Nước mắm kẹo tỏi ớt bồng bềnh, đồ chua củ cải cà rốt ngâm chua ngọt và mỡ hành tóp mỡ béo giòn.',
  },

  'banh-canh-ca-loc': {
    dishId: 'banh-canh-ca-loc',
    dishName: 'Bánh Canh Cá Lóc Quảng Trị Bột Gạo',
    seoTitle: 'Cách Nấu Bánh Canh Cá Lóc Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    prepTime: '25 phút',
    cookTime: '35 phút',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Cá lóc & Sợi bánh canh',
        items: [
          '1 con cá lóc đồng tươi sống (khoảng 800g - 1kg, thon dài, thịt chắc ngọt)',
          '500g sợi bánh canh bột gạo (hoặc bột gạo pha bột lọc dai mềm)',
          '100g củ nén (hành tăm tươi) - linh hồn khử tanh và tạo hương thơm nức tiếng miền Trung',
        ],
      },
      {
        category: 'Gia vị ướp cá & Nấu nước lèo',
        items: [
          '1 củ nghệ tươi giã vắt lấy nước cốt (hoặc 1 thìa bột nghệ) giúp miếng cá vàng ươm',
          '1 thìa canh dầu màu điều phi thơm màu cánh gián đẹp mắt',
          '2 thìa canh nước mắm cốt nhĩ truyền thống',
          '1 thìa cà phê tiêu sọ đen giã dập, 1 thìa cà phê hạt nêm, 1 thìa canh đường phèn',
          'Ớt bột miền Trung hoặc ớt tươi giã nhuyễn cay nồng ấm',
        ],
      },
      {
        category: 'Rau thơm & Rau ăn kèm',
        items: [
          'Hành lá, rau ngò gai (mùi tàu) rửa sạch thái nhỏ',
          'Đĩa rau đắng tươi giòn (hoặc rau ngổ/ngò om, giá đỗ sống)',
          'Chanh tươi, ớt hiểm xắt lát, nước mắm mặn nguyên chất chấm cá',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế cá lóc sạch nhớt và luộc chín tới',
        time: '10 phút',
        heat: 'Lửa vừa đun sôi',
        goal: 'Cá lóc sạch hoàn toàn nhớt tanh, thịt cá luộc chín tới ngọt mềm không bị nát',
        actionPoints: [
          'Dùng muối hạt và nước cốt chanh chà xát kỹ khắp mình cá và màng đen trong bụng để sạch hết nhớt tanh, rửa lại nước lạnh rồi để ráo.',
          'Đun sôi 2 lít nước với 1 thìa cà phê muối và 4 - 5 củ nén đập dập.',
          'Thả cá lóc vào luộc chín tới trong 8 - 10 phút, vớt ra đĩa để nguội bớt, giữ lại toàn bộ nồi nước luộc làm nước dùng ngọt thanh.',
        ],
        description:
          'Dùng muối hạt và chanh chà sạch nhớt tanh của cá lóc, rửa sạch để ráo. Đun sôi 2 lít nước với củ nén đập dập, thả cá vào luộc chín tới trong 8 - 10 phút rồi vớt ra, giữ lại nước luộc.',
        tip: 'Luộc cá vừa chín tới, không luộc quá lâu kẻo thớ thịt cá bị bở và khó gỡ phi lê.',
      },
      {
        step: 2,
        title: 'Gỡ phi lê thịt cá và giã xương ninh nước lèo',
        time: '15 phút',
        heat: 'Lửa liu riu',
        goal: 'Thịt cá gỡ thành từng miếng dày không dính xương dăm, nước lèo ngọt lịm từ tủy xương cá',
        actionPoints: [
          'Khéo léo dùng tay hoặc đũa gỡ phần thịt cá thành từng miếng phi lê dày vừa ăn (khoảng 2 ngón tay), nhặt thật kỹ xương dăm.',
          'Cho phần đầu cá và toàn bộ khung xương vào cối giã sơ hoặc bọc túi lọc, trút lại vào nồi nước luộc cá ban nãy.',
          'Ninh liu riu trong 20 phút cho xương cá tiết hết vị ngọt tự nhiên, sau đó vớt bỏ bã xương, lọc lại nước dùng cho thật trong veo.',
        ],
        description:
          'Khéo léo gỡ thịt cá thành từng miếng phi lê dày, nhặt sạch xương dăm. Cho đầu và toàn bộ xương cá vào giã sơ rồi trút lại vào nồi nước luộc ninh liu riu 20 phút lấy nước ngọt, lọc bỏ bã.',
        tip: 'Giã xương cá rồi lọc lấy nước cốt là bí quyết truyền thống giúp nước dùng ngọt lịm tự nhiên mà không cần ninh xương ống heo.',
      },
      {
        step: 3,
        title: 'Ướp thịt cá và xào săn đượm vị củ nén vàng thơm',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Từng miếng cá lóc ngấm sâu vị tiêu mắm, thơm nức mùi củ nén, vàng óng màu nghệ không bị vỡ nát',
        actionPoints: [
          'Ướp thịt cá với 2 thìa canh nước mắm nhĩ, 1 thìa hạt nêm, tiêu sọ đập dập, ớt bột và 1 thìa nước cốt nghệ tươi trong 15 phút.',
          'Đập dập phần củ nén còn lại. Đun nóng 1 thìa canh dầu màu điều trên chảo, cho củ nén vào phi vàng giòn dậy mùi thơm lừng.',
          'Trút thịt cá đã ướp vào đảo thật nhẹ tay trên lửa vừa trong 3 - 5 phút cho thớ cá săn chắc, đượm sốt rồi tắt bếp.',
        ],
        description:
          'Ướp thịt cá với nước mắm ngon, hạt nêm, tiêu sọ, ớt bột và nước cốt nghệ tươi trong 15 phút. Phi thơm củ nén đập dập với dầu màu điều, trút cá vào xào săn nhẹ tay trong 3 - 5 phút.',
        tip: 'Xào cá nhẹ tay với củ nén phi thơm để cá săn chắc, ngấm sốt đậm đà mà các miếng phi lê vẫn nguyên vẹn.',
      },
      {
        step: 4,
        title: 'Nêm nước dùng thanh ngọt và hoàn thiện tô bánh canh',
        time: '5 phút',
        heat: 'Nước sôi sùng sục',
        goal: 'Tô bánh canh bốc khói nghi ngút, sợi bánh mềm dẻo, nước dùng ngọt thanh đậm đà hương cá đồng',
        actionPoints: [
          'Đun sôi bùng nồi nước dùng từ xương cá, nêm 1.5 thìa canh nước mắm cốt nhĩ, muối hạt và chút đường phèn cho vừa miệng.',
          'Trụng sợi bánh canh qua nước sôi rồi chia đều ra các tô (hoặc thả trực tiếp sợi bánh canh vào nồi nước dùng nấu 3 phút theo cách miền Trung).',
          'Gắp từng miếng thịt cá lóc xào vàng ươm xếp lên mặt tô, rắc nhiều hành lá, ngò gai thái nhỏ và tiêu xay thơm nồng.',
          'Chan ngập nước dùng cá lóc sôi sùng sục lên tô, thưởng thức ngay khi còn nóng hổi cùng đĩa rau đắng và chén mắm ớt hiểm.',
        ],
        description:
          'Đun sôi lại nước dùng, nêm nước mắm cốt, muối hạt và đường phèn cho ngọt thanh. Trụng bánh canh xếp ra tô, gắp thịt cá lóc xào vàng ươm lên trên, rắc hành ngò tiêu xay rồi chan nước dùng sôi sùng sục.',
      },
    ],
    chefSecret:
      'Bí quyết quyết định nồi bánh canh cá lóc chuẩn vị nằm ở 2 yếu tố: Củ Nén (hành tăm) phi thơm khử sạch mùi tanh của cá đồng và tỏa hương cay ấm đặc trưng; cùng nước lèo hầm từ chính đầu và xương cá lóc giã nhuyễn cho hậu vị ngọt lịm tự nhiên mà không cần ninh xương ống heo.',
    recommendedSauce:
      'Thưởng thức ngay khi còn nóng hổi bốc khói, chấm từng miếng thịt cá lóc vàng ươm vào chén nước mắm nhĩ mặn dầm ớt hiểm xanh cay xé lưỡi, ăn kèm rau đắng giòn mát giải nhiệt.',
  },

  'bun-bo-hue': {
    dishId: 'bun-bo-hue',
    dishName: 'Bún Bò Huế Chả Cua Thịt Nạm',
    seoTitle: 'Cách Nấu Bún Bò Huế Chả Cua Đậm Đà Chuẩn Vị Cố Đô Tại Nhà',
    prepTime: '35 phút',
    cookTime: '2.5 - 3 giờ',
    difficulty: 'Cầu kỳ',
    servings: '5 - 6 người',
    ingredients: [
      {
        category: 'Phần thịt và xương',
        items: [
          '1kg xương ống bò hoặc xương heo',
          '500g bắp bò hoa hoặc nạm bò',
          '1 cái móng giò heo chặt khoanh vừa ăn',
          '200g chả cua hoặc chả lụa Huế, huyết bò luộc',
        ],
      },
      {
        category: 'Hương liệu tạo mùi Cố Đô',
        items: [
          '8 - 10 cây sả tươi đập dập bó chặt',
          '3 thìa canh mắm ruốc Huế cốt nguyên chất',
          '1 củ gừng đập dập, ớt bột cay Huế',
          '2 thìa dầu màu điều, tỏi và hành tím băm',
        ],
      },
      {
        category: 'Rau ghém ăn kèm',
        items: ['Bắp chuối bào mỏng, giá đỗ sống, rau muống chẻ, húng quế, chanh ớt tươi'],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Lọc mắm ruốc Huế khử nồng',
        time: '15 phút',
        heat: 'Lửa nhỏ rồi để lắng',
        goal: 'Thu được nước ruốc trong veo, thơm sâu lắng, không còn cặn đen hay mùi tanh gắt',
        actionPoints: [
          'Hòa tan 3 thìa canh mắm ruốc Huế cốt nguyên chất với 1 bát tô nước lạnh (khoảng 300ml).',
          'Cho vào nồi nhỏ đun sôi lăn tăn trên lửa nhỏ trong 2 phút rồi tắt bếp.',
          'Để yên cho nồi mắm ruốc lắng cặn hoàn toàn trong 15 phút.',
          'Nhẹ nhàng gạn lấy phần nước trong thơm nồng bên trên, bỏ phần cặn đen đọng dưới đáy nồi.',
        ],
        description:
          'Khuấy đều mắm ruốc với 1 bát nước lạnh trong nồi nhỏ, đun sôi nhẹ rồi tắt bếp để lắng cặn 15 phút. Chỉ gạn lấy phần nước trong thơm nồng, bỏ cặn đen dưới đáy.',
        tip: 'Lọc kỹ nước ruốc giúp nước lèo thơm sâu lắng mà không hề bị đục hay tanh.',
      },
      {
        step: 2,
        title: 'Ninh nước dùng xương bò và sả cây',
        time: '2 - 2.5 giờ',
        heat: 'Lửa liu riu sau khi sôi',
        goal: 'Nước xương ngọt thanh, bắp bò và giò heo mềm giòn vừa tới, thoang thoảng mùi sả',
        actionPoints: [
          'Chần sạch 1kg xương ống, 500g bắp bò và móng giò heo qua nước sôi pha muối và gừng đập dập 5 phút, rửa lại nước lạnh.',
          'Lót 8 - 10 cây sả đập dập dưới đáy nồi lớn, xếp xương và thịt lên trên, đổ 4 lít nước lọc.',
          'Đun sôi bùng, vớt sạch bọt rồi hạ lửa liu riu ninh.',
          'Sau 45 - 50 phút, dùng đũa xiên qua bắp bò thấy vừa mềm tới thì vớt bắp bò và móng giò ra ngâm vào thau nước đá lạnh để thịt săn giòn không bị thâm đen, sau đó thái lát mỏng.',
          'Tiếp tục ninh phần xương thêm 1.5 - 2 giờ để lấy trọn vị ngọt tủy.',
        ],
        description:
          'Chần sạch xương, bắp bò và móng giò. Cho vào nồi hầm cùng 4 lít nước, gừng và bó sả đập dập. Khi bắp bò và móng giò vừa chín tới (khoảng 45 phút), vớt ra ngâm nước đá lạnh rồi thái mỏng. Tiếp tục ninh xương cho ngọt nước.',
      },
      {
        step: 3,
        title: 'Nấu sốt sa tế dầu điều và nêm nếm nồi nước lèo',
        time: '15 phút',
        heat: 'Lửa vừa',
        goal: 'Nước lèo lên màu đỏ rực óng ả của dầu điều, dậy mùi thơm nức sả ớt mắm ruốc',
        actionPoints: [
          'Phi thơm 2 củ hành tím và 1 củ tỏi băm với 3 thìa dầu màu điều cho thơm phức.',
          'Thêm 2 cây sả băm nhuyễn và 2 thìa ớt bột Huế xào nhanh 1 phút tạo thành sốt sa tế cay nồng đỏ rực.',
          'Đổ 1/2 phần sốt sa tế này cùng toàn bộ phần nước mắm ruốc đã lắng trong ở Bước 1 vào nồi nước dùng.',
          'Nêm 2 thìa canh đường phèn, 2 thìa nước mắm ngon, 1.5 thìa muối hạt sao cho vị đậm đà sâu thẳm vừa miệng.',
        ],
        description:
          'Phi thơm hành tím, tỏi, ớt sừng băm cùng dầu màu điều và ớt bột Huế cho đỏ rực. Trút một nửa vào nồi nước dùng cùng phần nước mắm ruốc trong đã lắng. Nêm đường phèn, muối, hạt nêm vừa miệng.',
      },
      {
        step: 4,
        title: 'Thả chả cua và hoàn thiện tô bún bò Cố Đô',
        time: '5 - 7 phút',
        heat: 'Nước dùng sôi nhẹ',
        goal: 'Tô bún đầy đặn, viên chả cua nổi bồng bềnh vàng ruộm, nước lèo bốc khói cay nồng',
        actionPoints: [
          'Dùng thìa múc từng viên chả cua thả vào nồi nước dùng đang sôi lăn tăn, nấu 4 phút cho chả cua chín nổi lên mặt nước.',
          'Thả huyết luộc cắt khối vuông và chả lụa Huế vào đun nóng.',
          'Chần sợi bún bò to qua nước sôi cho nóng, vẩy ráo cho vào bát tô lớn.',
          'Xếp thịt bắp bò thái lát, móng giò giòn sần sật, múc chả cua và huyết đặt lên mặt.',
          'Rắc hành tây thái mỏng, hành lá và ngò gai cắt nhỏ, chan nước dùng cay nồng ngập bún.',
        ],
        description:
          'Thả chả cua vo viên, chả Huế và huyết luộc vào nồi nước dùng cho nổi lên. Chần sợi bún to, xếp thịt bắp bò, giò heo, múc chả cua và chan nước dùng cay nồng thơm lừng ngút khói.',
      },
    ],
    chefSecret:
      'Sả cây đập dập lót dưới đáy nồi nước dùng và nước mắm ruốc lọc trong chính là chìa khóa tạo nên hương vị bún bò Huế thanh tao đặc trưng không lẫn vào đâu được.',
    recommendedSauce: 'Ăn kèm sa tế cay xé lưỡi, chanh tươi và ớt xanh Cố Đô dầm nước mắm mặn.',
  },

  'mi-quang-tom-thit': {
    dishId: 'mi-quang-tom-thit',
    dishName: 'Mì Quảng Tôm Thịt Bánh Tráng Mè',
    seoTitle: 'Cách Nấu Mì Quảng Tôm Thịt Đậm Đà Chuẩn Vị Xứ Quảng Tại Nhà',
    prepTime: '30 phút',
    cookTime: '45 phút',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Phần nhưn tôm thịt & nước nhưn',
        items: [
          '500g xương heo (xương đuôi hoặc xương ống) ninh lấy nước dùng ngọt',
          '300g tôm tươi (tôm đất hoặc tôm thẻ cắt bớt râu gai, giữ vỏ cho giòn ngọt)',
          '300g thịt ba chỉ heo thái miếng mỏng vừa ăn',
          '10 quả trứng cút luộc bóc vỏ (hoặc trứng gà)',
          '50g củ nén (hành tăm) giã dập - linh hồn mùi thơm xứ Quảng',
          '2 thìa canh dầu đậu phộng (dầu phụng nguyên chất xứ Quảng)',
          '1 thìa canh dầu màu điều hoặc bột nghệ vàng',
          'Gia vị: Nước mắm nhĩ, muối hạt, đường phèn, tiêu đen xay, ớt bột',
        ],
      },
      {
        category: 'Sợi mì & Đồ ăn kèm chuẩn vị Quảng',
        items: [
          '1kg sợi mì Quảng tươi (sợi trắng hoặc sợi vàng tráng bột nghệ)',
          'Bánh tráng nướng mè giòn rụm (bánh đa nướng)',
          '100g đậu phộng rang giòn giã dập',
          'Rau sống Mì Quảng: Bắp chuối thái mỏng, cải mầm non, xà lách, rau húng lũi, ngò rí, giá đỗ',
          'Chanh tươi, ớt sừng xanh cay the đặc trưng miền Trung',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế & Ướp tôm thịt đậm đà với củ nén',
        time: '20 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Tôm và thịt ba chỉ ngấm sâu gia vị mắm tiêu củ nén, săn chắc và dậy màu óng ả',
        actionPoints: [
          'Thịt ba chỉ rửa sạch với nước muối loãng, thái miếng mỏng vừa ăn. Tôm cắt bỏ râu và ngạnh nhọn ở đầu, rửa sạch để ráo.',
          'Củ nén bóc vỏ, dùng cối giã dập thô (không xay nhuyễn để khi phi không bị khét đắng).',
          'Ướp tôm và thịt vào 2 tô riêng: Mỗi tô cho 1/2 củ nén giã dập, 1 thìa canh nước mắm ngon, 1 thìa cà phê đường phèn, 1 thìa hạt nêm, 1/2 thìa cà phê tiêu xay và 1 thìa dầu màu điều/bột nghệ.',
          'Trộn đều và ướp trong 20 phút cho thấm sâu gia vị.',
        ],
        description:
          'Sơ chế tôm thịt sạch sẽ. Giã dập củ nén (hành tăm) ướp cùng tôm và thịt ba chỉ với nước mắm, tiêu, dầu màu điều và đường phèn trong 20 phút.',
        tip: 'Củ nén giã dập và dầu phụng chính là cặp đôi gia vị tạo nên mùi thơm nồng nàn bất hủ của Mì Quảng.',
      },
      {
        step: 2,
        title: 'Ninh nước dùng xương lấy vị ngọt nền',
        time: '35 - 40 phút',
        heat: 'Lửa liu riu',
        goal: 'Nước xương trong ngọt thanh khiết làm nền cho nồi nước nhưn đậm đà',
        actionPoints: [
          'Chần xương heo qua nước sôi 3 phút khử bọt bẩn, rửa sạch lại với nước lạnh.',
          'Cho xương vào nồi cùng 1.5 lít nước và 1 củ hành tím đập dập, đun sôi rồi hạ lửa liu riu ninh 35 - 40 phút.',
          'Hớt sạch bọt nổi để nước dùng ngọt trong tự nhiên, không nêm quá đậm vì phần nước nhưn tôm thịt sẽ đậm đà.',
        ],
        description:
          'Chần sạch xương heo rồi ninh cùng 1.5 lít nước trong 40 phút lấy nước ngọt tự nhiên làm nền nấu nước nhưn.',
      },
      {
        step: 3,
        title: 'Xào săn nhưn tôm thịt & Nấu nồi nước nhưn sóng sánh',
        time: '15 - 20 phút',
        heat: 'Lửa lớn rồi hạ nhỏ liu riu',
        goal: 'Tôm thịt kho keo săn đượm vị mặn ngọt óng ánh, nước nhưn cô đặc sóng sánh thơm nức củ nén',
        actionPoints: [
          'Đặt nồi lên bếp, đun nóng 2 thìa canh dầu đậu phộng (dầu phụng) cho bốc khói nhẹ để khử mùi dầu sống, sau đó hạ lửa cho phần củ nén còn lại vào phi vàng thơm ngào ngạt.',
          'Trút thịt ba chỉ vào xào săn trên lửa lớn trong 4 - 5 phút cho tươm mỡ và xém cạnh.',
          'Tiếp tục trút tôm vào xào chung 3 phút cho vỏ tôm chuyển màu đỏ au bóng bẩy.',
          'Đổ phần nước ninh xương heo vào nồi tôm thịt, lượng nước chỉ ngập sâm sấp bề mặt nhân.',
          'Thả trứng cút luộc vào, đun sôi bùng rồi hạ lửa nhỏ ninh liu riu 10 - 15 phút cho nước nhưn sắc lại, sánh sệt, váng dầu màu điều vàng cam óng ả nổi lên trên.',
          'Nêm lại với 1 thìa nước mắm ngon và 1 thìa đường phèn sao cho vị nước nhưn đậm đà hơn nước lèo bún phở thông thường.',
        ],
        description:
          'Khử dầu phụng với củ nén phi thơm lừng. Xào săn thịt ba chỉ và tôm, trút nước hầm xương ngập xâm xấp mặt nhân cùng trứng cút, đun liu riu cho nước nhưn sánh kẹo đậm đà.',
        tip: 'Nước nhưn Mì Quảng chuẩn phải đậm đà, hơi sánh và có màu vàng cam óng ánh của nghệ/dầu điều, không bao giờ nấu loãng toẹt như nước lèo bún bò.',
      },
      {
        step: 4,
        title: 'Trình bày tô Mì Quảng chuẩn vị & Thưởng thức',
        time: '5 phút',
        heat: 'Nước nhưn sôi nhẹ trên bếp',
        goal: 'Tô Mì Quảng đầy ắp sắc màu, nước nhưn chỉ chan xâm xấp 1/3 tô, rắc đậu phộng và bẻ bánh tráng mè giòn rụm',
        actionPoints: [
          'Rải một lớp rau sống (bắp chuối bào, cải mầm non, xà lách, rau húng) dưới đáy tô lớn.',
          'Gắp một phần sợi mì Quảng tươi chần sơ cho tơi rải lên trên lớp rau sống.',
          'Múc thịt ba chỉ, tôm rim đỏ au và trứng cút xếp gọn gàng trên mặt sợi mì.',
          'Dùng muôi múc 1 - 2 muôi nước nhưn đậm đà rưới đều lên trên thịt và mì (lưu ý nước nhưn chỉ ngập xâm xấp khoảng 1/3 tô, không chan ngập đầy nước như bún phở).',
          'Rắc đều đậu phộng rang giã dập, hành ngò thái nhỏ lên trên.',
          'Bẻ vài miếng bánh tráng nướng mè giòn rụm cắm bên cạnh tô hoặc bẻ vụn thả lên trên.',
          'Dọn kèm đĩa ớt sừng xanh miền Trung giòn cay và chanh tươi, khi ăn trộn đều tất cả để sợi mì ngấm trọn vị đậm đà thơm bùi.',
        ],
        description:
          'Xếp rau sống dưới đáy tô, cho sợi mì Quảng lên trên. Xếp tôm, thịt, trứng cút rồi chan 1-2 muôi nước nhưn xâm xấp mặt mì. Rắc đậu phộng rang giã dập và bẻ bánh tráng mè giòn rụm thưởng thức.',
        tip: 'Ăn Mì Quảng là phải chan nước nhưn xâm xấp để khi trộn, bánh tráng giòn tan hòa quyện với vị bùi của đậu phộng và cay the của ớt xanh.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng bất biến của Mì Quảng chuẩn gốc Quảng Nam: 1. Củ nén (hành tăm) và dầu đậu phộng (dầu phụng) là linh hồn mùi vị bắt buộc phải có, thiếu củ nén phi dầu phụng thì không thành Mì Quảng; 2. Nước nhưn phải đậm đà sắc nét, nấu sâm sấp để ngấm đẫm vào từng sợi mì và chỉ chan 1 - 2 muôi (khoảng 1/3 bát), tuyệt đối không chan ngập nước như bún phở; 3. Bánh tráng mè nướng giòn rụm bẻ vụn cùng đậu phộng rang giã dập tạo độ bùi béo giòn tan, cắn thêm trái ớt xanh cay nồng đưa vị.',
    recommendedSauce:
      'Nước mắm nhĩ dầm ớt xiêm xanh cay nồng và vài tép tỏi Lý Sơn đập dập nguyên tép.',
  },

  'thit-kho-tau': {
    dishId: 'thit-kho-tau',
    dishName: 'Thịt Kho Tàu Nước Dừa Trứng Cút',
    seoTitle: 'Cách Nấu Thịt Kho Tàu Nước Dừa Trứng Cút Mềm Rục, Màu Cánh Gián Óng Ả',
    prepTime: '20 phút',
    cookTime: '60 - 75 phút',
    difficulty: 'Dễ',
    servings: '4 người',
    ingredients: [
      {
        category: 'Nguyên liệu',
        items: [
          '600g thịt ba chỉ (ba rọi) hoặc thịt nạc dăm mỡ liền nạc',
          '10 - 12 quả trứng cút luộc bóc vỏ (hoặc 4 quả trứng vịt)',
          '500ml nước dừa tươi xiêm ngọt mát',
          '3 tép tỏi, 2 củ hành tím băm nhuyễn, 1 quả ớt sừng',
          'Gia vị: 3 thìa canh nước mắm cốt, 1 thìa canh đường thốt nốt, 1 thìa hạt nêm, tiêu',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế thịt ba chỉ vuông vức',
        time: '10 phút',
        heat: 'Nước sôi chần thịt',
        goal: 'Thịt sạch hết chất bẩn, cắt miếng vuông vức 3 - 4cm đẹp mắt',
        actionPoints: [
          'Cạo sạch da heo, xát muối hạt và nước cốt chanh lên toàn bộ tảng thịt rồi xả sạch dưới vòi nước.',
          'Chần thịt trong nồi nước sôi có vài lát gừng trong 2 phút để sạch bọt cặn và định hình thớ thịt.',
          'Vớt ra rửa nước lạnh, dùng dao bén cắt thịt thành từng khối vuông to khoảng 3 - 4cm (khoảng bao diêm).',
        ],
        description:
          'Rửa sạch thịt bằng muối và giấm, chần qua nước sôi 2 phút rồi vớt ra xả nước lạnh. Cắt thịt thành từng khối vuông to khoảng 3 - 4cm.',
      },
      {
        step: 2,
        title: 'Ướp thịt ngấm gia vị và phơi mỡ trong',
        time: '30 - 45 phút',
        heat: 'Nhiệt độ phòng hoặc phơi nắng nhẹ',
        goal: 'Gia vị ngấm đều vào từng thớ nạc, lớp mỡ se lại để khi kho sẽ trong veo như thạch',
        actionPoints: [
          'Ướp 600g thịt với 3 thìa canh nước mắm ngon, 1 thìa canh đường thốt nốt, 1 thìa hạt nêm, hành tỏi băm nhuyễn và 1 thìa tiêu sọ giã giập.',
          'Đảo đều tay và để thịt nghỉ khoảng 30 - 45 phút cho thấm gia vị.',
          'Mẹo dân gian Nam Bộ: Đem đĩa thịt ra hong nơi thoáng gió hoặc phơi nắng nhẹ 20 phút cho phần mỡ trong lại.',
        ],
        description:
          'Ướp thịt với nước mắm, đường, hành tỏi băm và chút tiêu trong 30 - 45 phút. Mẹo nhỏ: mang đĩa thịt ra phơi nắng nhẹ 20 phút cho phần mỡ trong veo khi kho.',
      },
      {
        step: 3,
        title: 'Thắng nước màu và kho thịt cùng nước dừa tươi',
        time: '40 phút',
        heat: 'Lửa vừa rồi hạ liu riu',
        goal: 'Thịt săn bóng bẩy màu cánh gián, nước dừa ngấm làm thớ thịt bắt đầu mềm rục',
        actionPoints: [
          'Cho 1 thìa canh đường vào nồi, đun lửa vừa đến khi đường tan chảy ngả màu cánh gián đẹp mắt.',
          'Trút toàn bộ thịt vào đảo nhanh tay khoảng 3 - 4 phút cho các mặt thịt săn lại và bám đều màu nâu óng ả.',
          'Đổ 500ml nước dừa xiêm tươi vào ngập mặt thịt (nếu chưa ngập thêm chút nước lọc).',
          'Đun sôi bùng lên rồi hạ ngay lửa liu riu. Hớt sạch bọt trắng nổi lên và tuyệt đối không đậy nắp nồi.',
        ],
        description:
          'Thắng đường cho ngả màu cánh gián đẹp mắt, cho thịt vào đảo săn đều các mặt. Đổ nước dừa tươi ngập thịt, đun sôi bùng rồi hạ lửa nhỏ liu riu, hớt bọt cẩn thận.',
      },
      {
        step: 4,
        title: 'Thêm trứng và kho sánh mềm rục',
        time: '25 - 30 phút',
        heat: 'Lửa nhỏ liu riu',
        goal: 'Nước kho sánh kẹo màu hổ phách, thịt mềm tan trong miệng, lòng trắng trứng dai giòn đậm vị',
        actionPoints: [
          'Sau 40 phút ninh thịt mềm, thả 10 - 12 quả trứng cút đã bóc vỏ (hoặc trứng vịt) vào kho cùng.',
          'Nêm nếm lại với 1 thìa nước mắm cho vị mặn ngọt hài hòa, đậm đà béo ngậy.',
          'Tiếp tục kho liu riu thêm 25 phút đến khi nước kho cạn bớt sánh lại, bao bọc quanh miếng thịt óng ả.',
          'Thả 1 quả ớt sừng nguyên trái vào nồi để tạo mùi thơm dịu nhẹ mà không bị quá cay.',
        ],
        description:
          'Khi thịt đã mềm (sau 40 phút), cho trứng cút luộc vào kho chung. Đun lửa nhỏ đến khi nước kho sánh lại màu hổ phách óng ả, miếng thịt mềm rục tan trong miệng.',
      },
    ],
    chefSecret:
      'Không đậy nắp nồi khi kho thịt với nước dừa để nước kho trong veo và miếng mỡ có độ trong giòn rụm mà không hề bị ngấy.',
    recommendedSauce: 'Ăn cùng cơm trắng nóng hổi, dưa giá chua giòn hoặc rau luộc chấm nước kho thịt.',
  },

  'nem-nuong-nha-trang': {
    dishId: 'nem-nuong-nha-trang',
    dishName: 'Nem Nướng Nha Trang Cuốn Bánh Tráng',
    seoTitle: 'Cách Làm Nem Nướng Nha Trang Cuốn Bánh Tráng & Nước Sốt Tương Gan Chuẩn Vị',
    prepTime: '30 phút',
    cookTime: '25 phút',
    difficulty: 'Trung bình',
    servings: '4 người',
    ingredients: [
      {
        category: 'Nguyên liệu làm nem',
        items: [
          '500g giò sống (mọc heo) dẻo quánh',
          '200g mỡ heo luộc chín thái hạt lựu nhỏ trộn đường',
          'Tỏi băm, hạt tiêu giã dập, nước mắm ngon, dầu màu điều',
          'Que xiên tre ngâm nước tránh cháy',
        ],
      },
      {
        category: 'Nguyên liệu làm Nước Chấm Tương Gan thần thánh',
        items: [
          '100g thịt nạc heo xay, 50g gan heo ngâm sữa tươi khử tanh băm nhuyễn',
          '50g gạo nếp nấu thành cháo xay nhuyễn tạo độ sánh',
          '2 thìa canh tương đậu nành (tương hột băm nhuyễn)',
          'Dầu màu điều, tỏi băm, đường, hạt nêm',
        ],
      },
      {
        category: 'Rau cuốn và bánh tráng',
        items: ['Bánh tráng cuốn, ram chiên giòn rụm, xoài xanh bào sợi, dưa chuột, xà lách, rau thơm các loại'],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Quết giò sống và mỡ hạt lựu dai giòn tự nhiên',
        time: '15 phút',
        heat: 'Nhiệt độ phòng (lạnh)',
        goal: 'Hỗn hợp nem dẻo quánh, dính chặt, phân bổ đều hạt mỡ li ti',
        actionPoints: [
          '200g mỡ heo luộc chín, thái hạt lựu thật nhỏ, trộn cùng 1 thìa đường rồi phơi gió 20 phút cho hạt mỡ trong veo.',
          'Cho 500g giò sống lạnh vào âu, thêm mỡ hạt lựu, 1 thìa tỏi phi thơm, 1 thìa tiêu giã dập, 1 thìa mắm ngon và 1 thìa dầu màu điều.',
          'Dùng muôi gỗ hoặc găng tay miết quết liên tục theo 1 chiều trong 10 phút cho khối thịt dẻo dai kết dính bóng bẩy.',
        ],
        description:
          'Trộn đều giò sống với mỡ heo thái hạt lựu, tỏi phi, tiêu, nước mắm và chút dầu màu điều. Dùng muôi quết đều tay theo 1 chiều cho hỗn hợp thật dẻo dai kết dính.',
      },
      {
        step: 2,
        title: 'Nắn nem vào xiên tre & nướng xém vàng',
        time: '15 - 20 phút',
        heat: 'Than hoa đỏ vừa / Nồi chiên không dầu 180°C',
        goal: 'Nem chín vàng ruộm xém cạnh, tươm mỡ thơm nức, bên trong dai giòn ngọt thịt',
        actionPoints: [
          'Xiên tre ngâm nước 30 phút trước khi dùng để không bị cháy đen khi nướng.',
          'Thoa chút dầu ăn lên lòng bàn tay, lấy lượng thịt vừa phải bọc tròn đều quanh que xiên (dài khoảng 10 - 12cm).',
          'Đặt xiên nem lên vỉ nướng than hoa (hoặc xếp vào nồi chiên không dầu nướng 180°C trong 12 phút).',
          'Trở mặt đều tay và quét chút dầu màu điều lên mặt cho nem bóng bẩy, xém vàng cánh gián dậy mùi thơm nức.',
        ],
        description:
          'Thoa chút dầu ăn lên tay, nắn thịt bao quanh que xiên tre. Nướng trên than hoa đỏ hoặc nồi chiên không dầu ở 180°C trong 15 phút, trở mặt liên tục cho nem xém vàng óng mỡ.',
      },
      {
        step: 3,
        title: 'Nấu sốt chấm tương gan nếp sánh mịn béo bùi',
        time: '15 phút',
        heat: 'Lửa nhỏ khuấy đều',
        goal: 'Nước chấm sánh dẻo màu vàng cam óng ả, vị ngọt bùi béo ngậy khó cưỡng',
        actionPoints: [
          'Phi thơm tỏi băm với 2 thìa dầu màu điều, cho 100g thịt heo xay và 50g gan heo băm nhuyễn vào xào chín săn.',
          'Đổ 2 thìa tương hột băm và 1 bát con cháo nếp xay nhuyễn vào khuấy đều tay trên lửa nhỏ.',
          'Nêm 2 thìa đường cát, 1 thìa hạt nêm, đun sôi liu riu khuấy liên tục cho sốt sánh mịn đặc sệt màu cam đất hấp dẫn.',
          'Múc sốt ra bát, rắc đậu phộng rang giã dập và ớt băm lên bề mặt khi còn ấm nóng.',
        ],
        description:
          'Phi thơm tỏi với dầu điều, cho thịt xay và gan băm vào xào chín săn. Đổ tương hột và cháo nếp xay nhuyễn vào khuấy đều tay lửa nhỏ cho sốt sánh mịn, béo ngậy màu cam đất quyến rũ.',
      },
      {
        step: 4,
        title: 'Cuốn bánh tráng với ram giòn, xoài non và thưởng thức cùng sốt tương gan',
        time: '5 phút',
        heat: 'Thưởng thức ngay',
        goal: 'Mỗi cuốn nem tròn căng, cắn ngập miệng cảm nhận thớ nem dai ngọt, ram giòn rụm, xoài chua thanh và sốt béo bùi',
        actionPoints: [
          'Trải bánh tráng mỏng lên đĩa phẳng, đặt xà lách, rau thơm các loại, dưa leo và xoài xanh bào sợi.',
          'Đặt một thanh ram chiên giòn rụm và một xiên nem nướng thơm nức lên giữa.',
          'Cuộn tròn chặt tay bánh tráng lại.',
          'Chấm ngập cuốn nem vào chén sốt tương gan nếp ấm nóng rắc đậu phộng thơm bùi và thưởng thức trọn vẹn đặc sản phố biển Nha Trang!',
        ],
        description:
          'Trải bánh tráng, xếp rau sống, xoài xanh bào sợi, dưa leo, ram giòn rụm và xiên nem nướng lên trên rồi cuộn tròn chặt tay. Chấm đẫm cuốn nem vào bát sốt tương gan béo bùi ấm nóng rắc đậu phộng rang giã dập cay tê.',
      },
    ],
    chefSecret:
      'Bí quyết nước chấm nem nướng Nha Trang thơm bùi gây nghiện nằm ở cháo nếp xay nhuyễn kết hợp gan heo ngâm sữa tươi và tương hột, tạo độ sánh dẻo tự nhiên không cần bột năng; ăn kèm ram giòn chiên phồng và xoài xanh chua thanh cân bằng vị giác hoàn hảo.',
    recommendedSauce: 'Nước chấm tương gan nếp ấm nóng rắc đậu phộng rang giã dập và tương ớt rim sa tế.',
  },

  'nem-lui-nuong-cuon': {
    dishId: 'nem-lui-nuong-cuon',
    dishName: 'Nem Lụi Huế Nướng Than Cuốn Bánh Tráng',
    seoTitle: 'Cách Làm Nem Lụi Huế Nướng Than Thơm Nức & Nước Lèo Gan Đậu Béo Bùi Chuẩn Vị Cố Đô',
    prepTime: '30 phút',
    cookTime: '25 phút',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Thịt nem quấn sả thơm nức',
        items: [
          '500g giò sống (mọc heo) dẻo quánh loại tươi ngon',
          '300g thịt nạc vai heo xay nhuyễn (có dắt chút mỡ giúp nem mềm mọng không khô)',
          '100g mỡ phần heo luộc sơ thái hạt lựu nhỏ, trộn 1 thìa đường phơi gió cho trong giòn',
          '15 - 20 cây sả non tươi (rửa sạch, cạo bớt vỏ già, đập dập nhẹ gốc để tiết tinh dầu thơm)',
          'Gia vị ướp nem: 2 thìa canh nước mắm nhĩ cốt, 1 thìa cà phê tiêu sọ đen giã dập, 1 thìa đường, 1 củ tỏi và 3 củ hành tím băm phi thơm, 1 thìa canh dầu màu điều',
        ],
      },
      {
        category: 'Nồi Nước Lèo Huế béo bùi trứ danh (Linh hồn món nem lụi)',
        items: [
          '100g gan heo tươi ngâm sữa tươi không đường 20 phút khử tanh, rửa sạch băm nhuyễn mịn',
          '100g thịt nạc heo xay nhuyễn',
          '2 thìa canh tương đậu nành (tương hột xay nhuyễn hoặc tương bần Huế)',
          '80g đậu phộng rang vàng xát vỏ, giã nhuyễn béo ngậy',
          '30g mè (vừng) trắng rang thơm',
          '1 bát con nước dùng xương heo (hoặc nước lọc)',
          'Gia vị: 1.5 thìa canh đường cát, 1 thìa canh nước mắm ngon, 1 thìa dầu màu điều, 1 thìa cà phê bột năng hòa chút nước tạo độ sánh sánh',
        ],
      },
      {
        category: 'Bánh tráng & Rau sống ăn kèm chuẩn vị Cố Đô',
        items: [
          'Bánh tráng phơi sương mỏng mềm dai nhúng nước nhẹ',
          'Rau thơm Huế: Rau xà lách, rau thơm, húng lủi, tía tô, ngò gai, rau diếp cá, giá đỗ',
          'Quả chuối chát thái mỏng ngâm nước chanh khử thâm, khế chua (hoặc xoài xanh) thái lát mỏng, dưa leo chẻ que',
          'Ớt hiểm băm và tỏi tươi ăn kèm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Quết thịt nem dẻo dai và quấn đều quanh cây sả non',
        time: '15 phút',
        heat: 'Nhiệt độ phòng mát',
        goal: 'Hỗn hợp thịt kết dính dẻo quánh bọc chặt quanh cây sả, không bị nứt rời khi nướng',
        actionPoints: [
          'Cho giò sống, thịt nạc xay và mỡ hạt lựu vào âu lớn.',
          'Thêm hành tỏi băm phi thơm, tiêu sọ giã dập, nước mắm ngon, đường và dầu màu điều.',
          'Dùng muỗng miết quết thật mạnh tay liên tục theo một chiều trong 8 - 10 phút cho khối thịt quyện đặc dẻo quánh.',
          'Thoa chút dầu ăn lên găng tay, múc một lượng thịt vừa đủ nắm tròn dài, bọc kín đều quanh phần đầu cây sả non (độ dài thịt bọc khoảng 8 - 10cm).',
        ],
        description:
          'Trộn giò sống, thịt nạc xay và mỡ hạt lựu với hành tỏi phi, tiêu sọ giã dập, nước mắm ngon và dầu màu điều. Quết mạnh tay theo một chiều cho dẻo quánh rồi nắn bọc kín quanh từng cây sả non.',
        tip: 'Đập dập nhẹ gốc sả trước khi bọc thịt để tinh dầu sả tươi ngấm sâu vào từng thớ thịt trong quá trình nướng, tạo mùi thơm ngào ngạt quyến rũ.',
      },
      {
        step: 2,
        title: 'Nấu nồi Nước Lèo gan heo đậu phộng béo bùi sánh dẻo',
        time: '15 phút',
        heat: 'Lửa nhỏ liu riu khuấy đều',
        goal: 'Nước lèo màu vàng cam đất óng ả, sánh dẻo mịn màng, vị béo ngậy bùi bùi đượm mùi tương và gan heo',
        actionPoints: [
          'Đun nóng 1 thìa canh dầu màu điều, phi thơm hành tím và tỏi băm nhuyễn.',
          'Cho thịt xay và gan heo băm nhuyễn vào xào chín săn trên lửa vừa.',
          'Trút tương đậu nành xay nhuyễn và 1 bát con nước dùng vào đun sôi lăn tăn.',
          'Hạ lửa nhỏ, trút đậu phộng rang giã nhuyễn và mè rang vào khuấy đều tay.',
          'Nêm đường, nước mắm cho vừa khẩu vị ngọt bùi mặn nhẹ. Từ từ rót nước bột năng vào khuấy liên tục cho nước lèo sánh dẻo keo lại như sốt thì tắt bếp.',
        ],
        description:
          'Phi thơm hành tỏi với dầu điều, xào săn thịt xay và gan heo nhuyễn. Cho tương hột xay và nước dùng vào đun sôi, hạ lửa trút đậu phộng giã nhuyễn, mè rang vào nêm đường mắm. Châm chút nước bột năng khuấy đều tay cho sốt sánh dẻo béo bùi.',
        tip: 'Gan heo ngâm sữa tươi 20 phút trước khi băm sẽ giúp gan mềm mịn béo ngậy mà không còn chút mùi tanh nồng nào.',
      },
      {
        step: 3,
        title: 'Nướng nem lụi vàng ruộm trên than hoa đỏ hồng',
        time: '12 - 15 phút',
        heat: 'Than hoa đỏ vừa / Nồi chiên không dầu 180°C',
        goal: 'Cây nem lụi chín vàng ươm xém cạnh bóng bẩy mỡ tươm, bốc khói thơm nức mũi mùi sả nướng',
        actionPoints: [
          'Xếp các cây nem lụi lên vỉ nướng trên bếp than hoa đỏ rực không có ngọn lửa.',
          'Thường xuyên xoay trở que nem cho chín đều các mặt.',
          'Khi nem gần chín, phết nhẹ một lớp dầu màu điều pha chút mật ong lên thân nem để nem bóng mượt, lên màu cánh gián bắt mắt.',
          'Nướng khoảng 10 - 12 phút đến khi nem xém cạnh tươm mỡ thơm lừng thì nhấc ra đĩa.',
        ],
        description:
          'Xếp nem lụi lên vỉ nướng than hoa, trở mặt liên tục cho nem chín vàng đều. Quét nhẹ chút dầu màu điều lên mặt cho bóng bẩy xém cạnh tươm mỡ thơm lừng mùi sả rồi gắp ra đĩa.',
        tip: 'Nếu dùng nồi chiên không dầu: Nướng ở 180°C trong 10 phút, lật mặt quét dầu điều nướng thêm 4 - 5 phút cho xém vàng.',
      },
      {
        step: 4,
        title: 'Cuốn bánh tráng với rau thơm chuối khế và chấm đẫm nước lèo',
        time: '5 phút',
        heat: 'Thưởng thức nóng',
        goal: 'Cuốn nem đầy đặn, cắn ngập miệng cảm nhận thớ nem ngọt giòn, rau thanh mát quyện nước lèo béo bùi ngất ngây',
        actionPoints: [
          'Đặt bánh tráng mỏng lên đĩa, xếp xà lách, rau thơm Huế, dưa leo, lát chuối chát và khế chua.',
          'Đặt cây nem lụi lên giữa, dùng tay nắm chặt bánh tráng rồi rút cây sả ra.',
          'Cuộn tròn chặt tay, múc nước lèo ra chén rắc thêm đậu phộng đập dập và ớt băm cay cay.',
          'Chấm ngập cuốn nem vào chén nước lèo ấm nóng và thưởng thức trọn vẹn phong vị cung đình Huế!',
        ],
        description:
          'Trải bánh tráng, xếp rau sống, dưa leo, chuối chát, khế chua và đặt cây nem lụi lên, kẹp chặt rút cây sả ra rồi cuốn tròn lại. Chấm đẫm cuốn nem vào chén nước lèo gan đậu phộng ấm nóng bùi béo ngập tràn hương vị.',
      },
    ],
    chefSecret:
      'Tuyệt đối không ăn nem lụi Huế với nước mắm chua ngọt thông thường! Bí quyết sống còn của nem lụi Cố Đô nằm ở: 1. Thịt nem bọc quanh cây sả non tươi để tinh dầu sả thấm đượm vào thịt khi nướng than hoa; 2. Chén NƯỚC LÈO trứ danh nấu từ gan heo ngâm sữa băm nhuyễn, tương đậu nành và đậu phộng rang giã bùi béo sánh dẻo mịn màng, tạo nên sự hòa quyện đỉnh cao khó quên.',
    recommendedSauce:
      'Bát Nước Lèo gan heo đậu phộng mè rang sánh dẻo ấm nóng đặc trưng của xứ Huế, rắc thêm chút ớt băm cay tê đầu lưỡi.',
  },

  'ram-bap-cuon-rau': {
    dishId: 'ram-bap-cuon-rau',
    dishName: 'Ram Bắp Quảng Ngãi Giòn Rụm Cuốn Rau Sống',
    seoTitle: 'Cách Làm Ram Bắp Quảng Ngãi Giòn Rụm, Thơm Ngọt Chuẩn Vị Xứ Quảng',
    prepTime: '25 phút',
    cookTime: '20 phút',
    difficulty: 'Dễ',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Nhân bắp nếp non ngọt dẻo',
        items: [
          '3 - 4 bắp nếp non (chọn bắp nếp vừa hái, hạt còn non đượm sữa ngọt lịm)',
          '100g thịt nạc vai heo xay nhuyễn (hoặc làm chay thuần bắp đều ngon)',
          '1 nắm củ nén (hành tăm) hoặc hành tím giã nhuyễn (linh hồn hương vị xứ Quảng)',
          'Hành lá thái nhỏ, 1 thìa cà phê tiêu đen giã dập thơm nồng',
          'Gia vị: 1 thìa cà phê hạt nêm, 1/2 thìa cà phê muối, 1 thìa cà phê đường, 1/2 thìa nước mắm ngon',
        ],
      },
      {
        category: 'Bánh tráng gói ram & Dầu chiên',
        items: [
          '1 xấp bánh tráng dong Quảng Ngãi mỏng dai (hoặc bánh tráng gói ram giòn rụm chuyên dụng)',
          'Dầu ăn để chiên ngập dầu',
          'Vài giọt nước cốt chanh vắt vào chảo dầu giúp ram vàng ruộm và giòn rụm lâu hơn',
        ],
      },
      {
        category: 'Rau sống & Nước mắm tỏi ớt chua ngọt miền Trung',
        items: [
          'Rau sống tươi sạch: Xà lách, rau diếp cá, húng quế, kinh giới, rau thơm, dưa leo xắt thanh',
          'Bánh tráng mỏng nhúng nước để cuốn cùng ram bắp',
          'Pha nước mắm: 2 thìa canh nước mắm cá cơm nhĩ, 2 thìa canh đường vàng, 2 thìa canh nước ấm, 1 thìa canh nước cốt chanh, tỏi Lý Sơn và ớt xiêm xanh/đỏ giã nhuyễn',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Nạo bắp nếp non và quết nhân dẻo ngọt với củ nén, tiêu thơm',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Nhân bắp dẻo quyện tự nhiên nhờ sữa bắp nếp non, thơm nồng mùi củ nén và tiêu',
        actionPoints: [
          'Bắp nếp bóc vỏ, nhặt sạch râu bắp. Dùng dao bào mỏng từng lớp hạt bắp từ ngoài vào sát lõi.',
          'Cho bắp đã bào vào cối đá dùng chày giã dập sơ 2 - 3 phút để hạt bắp tiết ra chất sữa nhựa dẻo dính tự nhiên (không giã nát nhừ).',
          'Trút bắp ra âu, thêm thịt nạc xay, củ nén giã dập, hành lá, tiêu đen đập dập, hạt nêm, muối và đường.',
          'Dùng tay trộn đều và miết nhẹ cho hỗn hợp quyện dẻo kết dính thành khối nhân đồng nhất.',
        ],
        description:
          'Bào mỏng hạt bắp nếp non rồi giã dập sơ trong cối cho tiết sữa dẻo quánh. Trộn đều bắp với thịt xay, củ nén đập dập, tiêu đen, hành lá và gia vị cho nhân hòa quyện dẻo dính.',
        tip: 'Chọn bắp nếp non bấm tay vào còn ứa sữa trắng; giã sơ để lấy chất kết dính tự nhiên giúp cuốn ram không cần cho bột hay lòng trắng trứng.',
      },
      {
        step: 2,
        title: 'Gói cuốn ram bắp thon dài, chặt tay',
        time: '10 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Từng cuốn ram bắp đều tăm tắp, cuốn chặt tay không rách vỏ, mép bánh dính chặt',
        actionPoints: [
          'Cắt bánh tráng gói ram thành miếng hình vuông hoặc tam giác vừa cuốn (khoảng 10x10cm).',
          'Nếu bánh tráng hơi khô, dùng khăn ẩm thoa nhẹ lên bề mặt bánh cho dẻo dai dễ cuốn.',
          'Múc 1 thìa nhân bắp dàn đều thành thanh ngang ở mép bánh tráng.',
          'Gấp hai mép hai bên lại rồi cuộn tròn chặt tay về phía trước, miết nhẹ mép bánh cho dính chặt.',
        ],
        description:
          'Trải bánh tráng gói ram, thoa nhẹ nước cho mềm nếu cần. Múc lượng nhân bắp vừa phải dàn đều, gấp mép hai bên cuộn chặt tay thành từng cuốn ram thon dài cỡ ngón tay cái.',
      },
      {
        step: 3,
        title: 'Chiên ram bắp vàng ruộm giòn tan',
        time: '12 - 15 phút',
        heat: 'Lửa vừa chiên ngập dầu',
        goal: 'Cuốn ram vàng ruộm óng ả, cắn vào giòn tan rôm rốp, nhân bắp bên trong chín dẻo ngọt lịm',
        actionPoints: [
          'Đun nóng chảo dầu ngập mặt cuốn ram ở lửa vừa. Nhỏ vài giọt nước cốt chanh vào dầu để ram chiên giòn lâu không bị ngấy dầu.',
          'Thử đầu đũa thấy sủi tăm lăn tăn thì thả từng cuốn ram vào chảo chiên.',
          'Chiên đều các mặt trong 5 - 7 phút với lửa vừa. Khi thấy vỏ ram phồng nhẹ, ngả màu vàng ươm giòn rụm thì vớt ra rổ inox cho ráo dầu.',
        ],
        description:
          'Đun sôi dầu ăn ở lửa vừa, thả từng cuốn ram vào chiên ngập dầu. Đảo nhẹ tay đến khi vỏ ram phồng giòn vàng ruộm hai mặt, nhân bắp chín thơm lừng thì vớt ra để ráo dầu.',
        tip: 'Chiên trên lửa vừa, không chiên lửa quá to kẻo vỏ bánh bị cháy mà nhân bắp bên trong chưa kịp chín dẻo.',
      },
      {
        step: 4,
        title: 'Pha nước mắm tỏi ớt chua ngọt & Thưởng thức ram bắp cuốn rau sống',
        time: '5 phút',
        heat: 'Thưởng thức nóng giòn',
        goal: 'Cuốn ram bắp cùng rau sống xanh giòn chấm ngập chén nước mắm đậm đà bùng nổ hương vị',
        actionPoints: [
          'Pha nước mắm: Hòa tan nước mắm cốt, đường vàng, nước ấm và nước cốt chanh; cho tỏi băm và ớt giã nhuyễn vào nổi bồng bềnh trên mặt.',
          'Nhúng ướt nhẹ bánh tráng mỏng, đặt xà lách, rau diếp cá, húng quế và lát dưa leo giòn mát.',
          'Đặt cuốn ram bắp nóng hổi vào giữa, cuộn tròn lại.',
          'Chấm ngập vào chén nước mắm tỏi ớt cay cay chua ngọt, cắn ngập miệng cảm nhận tiếng rôm rốp giòn tan và vị ngọt dẻo ngào ngạt của bắp non xứ Quảng!',
        ],
        description:
          'Pha nước mắm tỏi ớt chua ngọt thơm nồng vị tỏi ớt giã nhuyễn. Trải bánh tráng mỏng cuốn cùng rau sống, diếp cá, dưa leo và cuốn ram bắp giòn rụm, chấm ngập chén nước mắm thưởng thức khi còn nóng giòn.',
      },
    ],
    chefSecret:
      'Hương vị làm nên thương hiệu của Ram Bắp Quảng Ngãi nằm ở hạt bắp nếp non vừa độ ngậm sữa được giã dập sơ tạo độ dẻo ngọt tự nhiên quyện cùng củ nén giã nhuyễn và tiêu đen cay thơm nồng ấm; khi chiên ngập dầu vỏ ram giòn rôm rốp mà nhân bắp vẫn giữ trọn vị ngọt bùi mọng sữa.',
    recommendedSauce:
      'Chén nước mắm cá cơm chua ngọt cay nồng pha cùng tỏi Lý Sơn băm nhuyễn và ớt xiêm xanh/đỏ giã dập nổi bồng bềnh đẹp mắt.',
  },

  'banh-dap-mam-nem': {
    dishId: 'banh-dap-mam-nem',
    dishName: 'Bánh Đập Mắm Nêm Miền Trung Giòn Rụm',
    seoTitle: 'Cách Làm Bánh Đập Mắm Nêm Miền Trung Giòn Dẻo & Bí Quyết Pha Mắm Nêm Thơm Lừng',
    prepTime: '20 phút',
    cookTime: '15 phút',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Phần Bánh Đập (Giòn & Dẻo)',
        items: [
          '5 - 6 cái bánh tráng gạo mè nướng giòn rụm (loại bánh tráng nướng than mè đen hoặc mè trắng phồng xốp)',
          '500g bánh ướt (bánh cuốn nóng tráng mỏng dẻo mềm từ bột gạo nguyên chất)',
          'Dầu ăn hoặc mỡ heo',
        ],
      },
      {
        category: 'Mỡ hành óng ả & Tép xào mặn ngọt',
        items: [
          '1 mớ hành lá tươi thái nhỏ',
          '3 thìa canh mỡ heo nóng (hoặc dầu ăn) để làm mỡ hành xanh mướt',
          '100g tép khô (hoặc tôm đồng tươi) xào chín săn với chút hành tỏi phi và gia vị mặn ngọt',
          '2 thìa canh hành tím phi vàng giòn rụm',
        ],
      },
      {
        category: 'Chén Mắm Nêm cá cơm linh hồn xứ Quảng',
        items: [
          '1/2 chén mắm nêm cá cơm nguyên chất (loại mắm cái cá cơm thơm nồng đặc sản miền Trung)',
          '1/3 quả dứa (thơm) chín gọt sạch băm nhuyễn',
          '1 nắm củ nén (hành tăm) hoặc hành tím đập dập phi thơm với dầu ăn',
          '1 củ tỏi băm nhuyễn, 3 - 4 trái ớt xiêm xanh/đỏ giã dập cay nồng',
          '1.5 thìa canh đường phèn (hoặc đường cát vàng), 1 thìa canh nước cốt chanh',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Nướng bánh tráng gạo mè giòn tan và chuẩn bị bánh ướt dẻo mềm',
        time: '5 phút',
        heat: 'Than hoa hoặc nồi chiên không dầu 180°C',
        goal: 'Bánh tráng nướng phồng xốp giòn rụm, bánh ướt dẻo mướt còn ấm nóng',
        actionPoints: [
          'Nướng bánh tráng mè trên than hoa đỏ hoặc lò nướng/nồi chiên không dầu ở 180°C trong 2 - 3 phút cho bánh phồng đều vàng giòn.',
          'Bánh ướt giữ ấm, tách từng lớp bánh mỏng mềm mướt sẵn sàng.',
        ],
        description:
          'Nướng bánh tráng gạo mè cho phồng xốp giòn rụm hai mặt. Chuẩn bị sẵn bánh ướt tráng mỏng mềm mướt còn hơi ấm.',
      },
      {
        step: 2,
        title: 'Thắng mỡ hành óng ả và xào tép mặn ngọt giòn thơm',
        time: '5 phút',
        heat: 'Lửa vừa',
        goal: 'Mỡ hành xanh mướt không cháy, tép xào săn đượm vị mặn ngọt đậm đà',
        actionPoints: [
          'Thái nhỏ hành lá cho vào bát sứ cùng 1/3 thìa cà phê muối và chút đường.',
          'Đun sôi 3 thìa canh mỡ heo trên chảo rồi trút thẳng vào bát hành để có bát mỡ hành xanh bóng mướt.',
          'Cho chút dầu phi thơm hành tỏi băm, trút tép khô vào đảo đều trên lửa vừa, nêm chút nước mắm và đường cho tép săn giòn mặn ngọt thì trút ra đĩa.',
        ],
        description:
          'Dội mỡ heo sôi vào bát hành lá làm mỡ hành xanh mướt óng ả. Xào săn tép khô với chút hành phi, nước mắm và đường cho mặn ngọt đậm đà.',
      },
      {
        step: 3,
        title: 'Nấu và pha chén Mắm Nêm cá cơm thơm lừng xứ Quảng',
        time: '8 phút',
        heat: 'Lửa nhỏ',
        goal: 'Mắm nêm thơm nức mũi mùi củ nén và dứa xào, vị mặn mòi ngọt sâu, tỏi ớt cay xé lưỡi kích thích vị giác',
        actionPoints: [
          'Đun nóng 1 thìa canh dầu ăn, cho củ nén đập dập vào phi vàng thơm lừng.',
          'Cho dứa băm nhuyễn vào xào chín mềm trong 2 phút để dứa tiết nước cốt ngọt thanh.',
          'Trút mắm nêm cá cơm và 2 thìa canh nước ấm vào đun sôi lăn tăn trên lửa nhỏ rồi tắt bếp.',
          'Chờ mắm nguội bớt, nêm đường phèn và nước cốt chanh khuấy tan đều.',
          'Thêm thật nhiều tỏi băm và ớt xiêm xanh đập dập thả nổi lên trên chén mắm nêm.',
        ],
        description:
          'Phi thơm củ nén với dầu ăn, xào chín dứa băm nhuyễn rồi trút mắm nêm và chút nước vào đun sôi nhẹ. Nêm đường phèn, chanh khuấy tan, thêm tỏi ớt xiêm xanh băm nhuyễn cay nồng.',
        tip: 'Xào dứa và củ nén trước khi cho mắm nêm là bí quyết giúp khử mùi nồng gắt của mắm cái, tạo độ sánh sệt thơm lừng và vị ngọt sâu tự nhiên.',
      },
      {
        step: 4,
        title: 'Ghép bánh, "đập" dính giòn rụm và thưởng thức cùng mắm nêm',
        time: '2 phút',
        heat: 'Thưởng thức ngay',
        goal: 'Bánh tráng nướng vỡ vụn dính chặt vào bánh ướt mềm mướt quết mỡ hành, chấm ngập mắm nêm giòn tan đã miệng',
        actionPoints: [
          'Đặt 1 cái bánh tráng nướng giòn lên đĩa lớn.',
          'Trải 1 - 2 lá bánh ướt mềm mướt phủ kín lên mặt bánh tráng.',
          'Quết đẫm mỡ hành xanh mướt khắp mặt bánh ướt, rắc thêm tép xào mặn ngọt và hành phi giòn tan.',
          'Đặt thêm 1 lớp bánh tráng nướng lên trên (hoặc gập đôi bánh lại).',
          'Dùng lòng bàn tay "ĐẬP" nhẹ một phát dứt khoát lên mặt bánh để lớp bánh tráng nướng giòn rụm vỡ vụn dính chặt vào bánh ướt mềm mọng.',
          'Dùng tay bẻ từng miếng bánh đập chấm ngập vào chén mắm nêm thơm lừng, thưởng thức ngay sự hòa quyện giòn tan và dẻo mướt!',
        ],
        description:
          'Đặt bánh ướt lên bánh tráng nướng, quết đẫm mỡ hành, rắc tép xào và hành phi lên mặt rồi gập đôi lại. Dùng tay "đập" nhẹ dứt khoát cho bánh tráng vỡ giòn dính chặt vào bánh ướt. Bẻ từng miếng chấm ngập mắm nêm cay nồng thưởng thức.',
      },
    ],
    chefSecret:
      'Tên gọi "Bánh Đập" chính là động tác đập tay dứt khoát làm vỡ vụn lớp bánh tráng giòn tan để nó dính chặt vào lớp bánh ướt dẻo mềm quết mỡ hành béo ngậy; và linh hồn BẮT BUỘC của món ăn này là MẮM NÊM CÁ CƠM xào thơm cùng củ nén và dứa băm nhuyễn chứ tuyệt đối không thể thay thế bằng nước mắm chua ngọt!',
    recommendedSauce:
      'Chén mắm nêm cá cơm miền Trung xào dứa chín và củ nén phi thơm, ngập tràn tỏi ớt xiêm xanh cay xé đầu lưỡi.',
  },

  'canh-chua-ca-loc': {
    dishId: 'canh-chua-ca-loc',
    dishName: 'Canh Chua Cá Lóc Nam Bộ',
    seoTitle: 'Cách Nấu Canh Chua Cá Lóc Nam Bộ Thanh Mát, Đậm Đà Không Tanh',
    description:
      'Cách nấu canh chua cá lóc miền Tây nước dùng thanh ngọt từ me chín, dứa, cà chua và cá lóc đồng tươi ngon, khử tanh hoàn toàn, chuẩn vị gia đình.',
    prepTime: '25 phút',
    cookTime: '20 phút',
    difficulty: 'Dễ',
    servings: '4 người',
    ingredients: [
      {
        category: 'Nguyên liệu chính',
        items: [
          '1 con cá lóc đồng (khoảng 700g - 800g) tươi sống, thịt chắc',
          '50g me chín (ngâm nước ấm lấy nước cốt chua thanh)',
          '1/3 quả dứa (thơm) thái lát vừa ăn',
          '2 quả cà chua bổ múi cau',
          '2 nhánh dọc mùng (bạc hà) tước vỏ, thái vát, bóp muối giòn',
          '6 - 8 quả đậu bắp cắt chéo',
          '100g giá đỗ sống',
          'Rau ngò ôm (ngổ), ngò gai (mùi tàu) thái nhỏ, ớt sừng',
          'Hành tím, tỏi băm, hành lá, tỏi phi vàng giòn',
          'Gia vị: Nước mắm ngon, đường phèn, muối, hạt nêm, dầu ăn',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế & khử tanh cá lóc đồng triệt để',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Cá sạch hoàn toàn nhớt và màng đen tanh, thịt săn chắc ngấm gia vị',
        actionPoints: [
          'Cạo sạch nhớt trên da cá bằng muối hạt và chanh tươi. Mổ bụng lấy sạch lòng, đặc biệt cạo thật kỹ lớp màng đen bám bên trong khoang bụng (nguyên nhân chính gây mùi tanh).',
          'Rửa sạch cá lại với nước pha chút gừng đập dập, để ráo rồi cắt khúc dày khoảng 2.5 - 3cm.',
          'Ướp cá với 1 thìa canh nước mắm nhĩ ngon, 1/2 thìa cà phê tiêu xay và đầu hành trắng băm nhuyễn trong 15 phút.',
        ],
        description:
          'Chà muối chanh sạch nhớt, cạo kỹ màng đen trong bụng cá để loại bỏ hoàn toàn mùi tanh. Cắt khúc, ướp nước mắm, tiêu và đầu hành.',
      },
      {
        step: 2,
        title: 'Xào sơ thơm cà chua & nấu nước cốt me',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Tạo màu đỏ tự nhiên, dậy mùi thơm và nước dùng trong veo',
        actionPoints: [
          'Phi thơm hành tỏi băm với 1 thìa canh dầu ăn trong nồi lớn. Cho 1/2 lượng dứa (thơm) và cà chua vào xào sơ chín tới để tiết màu tự nhiên rồi trút ra bát riêng.',
          'Đổ 1.2 - 1.4 lít nước lọc vào nồi, đun sôi. Dầm vắt me lấy nước cốt chua cho vào nồi nước.',
        ],
        description:
          'Xào sơ dứa và cà chua với hành tỏi phi để tạo màu đẹp, sau đó đun sôi 1.2 lít nước cùng nước cốt me chín.',
      },
      {
        step: 3,
        title: 'Nấu chín cá lóc & hớt bọt nước dùng',
        time: '10 phút',
        heat: 'Lửa lớn rồi hạ vừa',
        goal: 'Cá chín tới ngọt mềm không bị nát, nước dùng trong vắt',
        actionPoints: [
          'Khi nước sôi bùng, thả từng khứa cá lóc đã ướp vào nồi. Đun sôi trở lại, hạ lửa vừa và liên tục hớt bọt để nước canh trong suốt.',
          'Nấu khoảng 8 - 10 phút cho cá chín tới rồi nhẹ nhàng vớt cá ra đĩa riêng để giữ nguyên miếng cá nguyên vẹn.',
        ],
        description:
          'Thả cá lóc vào nồi nước me sôi, hớt bọt liên tục trong 8 - 10 phút cho cá chín tới rồi vớt ra đĩa riêng.',
      },
      {
        step: 4,
        title: 'Nêm nếm gia vị chuẩn vị & thả rau ghém',
        time: '5 phút',
        heat: 'Lửa lớn',
        goal: 'Nước canh tròn vị chua - ngọt - mặn Nam Bộ, rau ghém giòn sần sật',
        actionPoints: [
          'Nêm vào nồi: 2 thìa canh đường phèn (tạo hậu ngọt thanh dịu), 2 thìa canh nước mắm ngon, 1 thìa cà phê hạt nêm.',
          'Cho phần dứa, cà chua xào lúc nãy cùng dọc mùng và đậu bắp vào nồi, nấu sôi bùng 2 phút cho vừa chín tới giữ độ giòn.',
          'Tắt bếp rồi mới thả giá đỗ sống vào nồi.',
        ],
        description:
          'Nêm đường phèn, nước mắm, hạt nêm cho vị chua ngọt hài hòa. Thêm dứa cà chua xào, dọc mùng, đậu bắp nấu 2 phút rồi thả giá đỗ.',
      },
      {
        step: 5,
        title: 'Trình bày tô canh & thưởng thức',
        time: '3 phút',
        heat: 'Múc nóng',
        goal: 'Tô canh rực rỡ sắc màu, thơm lừng ngò ôm và tỏi phi giòn',
        actionPoints: [
          'Xếp cá lóc đã luộc chín trở lại vào giữa tô lớn (hoặc để đĩa riêng chấm mắm), chan nước canh chua nóng hổi cùng rau ghém ngập tràn.',
          'Rắc ngò ôm, ngò gai cắt nhỏ, vài lát ớt sừng và 2 thìa tỏi phi vàng giòn lên trên mặt.',
          'Thưởng thức nóng cùng cơm trắng hoặc bún tươi, chấm cá với nước mắm mặn dầm ớt hiểm.',
        ],
        description:
          'Múc canh ra tô, xếp cá lên trên, rắc ngò ôm, ngò gai, ớt sừng và thật nhiều tỏi phi thơm giòn. Ăn kèm cơm nóng hoặc bún.',
      },
    ],
    chefSecret:
      'Cạo sạch màng đen trong bụng cá và dùng đường phèn thay đường cát là hai bí quyết tuyệt đối giúp canh chua không tanh và có hậu vị ngọt thanh dịu mát.',
    recommendedSauce: 'Chén nước mắm mặn nhĩ nguyên chất dầm ớt hiểm xanh cay nồng.',
  },
  'bao-tu-ham-tieu': {
    dishId: 'bao-tu-ham-tieu',
    dishName: 'Bao Tử Hầm Tiêu Xanh',
    seoTitle: 'Cách Nấu Bao Tử Hầm Tiêu Xanh Giòn Sần Sật, Nước Dùng Cay Nồng Ngọt Thanh',
    description:
      'Hướng dẫn chi tiết cách nấu bao tử heo hầm tiêu xanh giòn sần sật không bị hôi, nước dùng ngọt thanh đậm đà từ nước dừa tươi và củ sen: Bí quyết sơ chế bao tử áp chảo cạo nhầy, ướp tiêu xanh đập dập và ninh lửa nhỏ liu riu cho vị cay nồng bùng nổ.',
    ratingValue: '4.8',
    reviewCount: 224,
    prepTime: '30 phút (sơ chế kỹ)',
    cookTime: '45 - 60 phút',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Thành phần Bao Tử Heo & Tiêu Xanh tươi thơm nồng',
        items: [
          '1 cái bao tử heo tươi (khoảng 700g - 900g, chọn loại dày mình, màu hồng tươi sáng)',
          '70g tiêu xanh tươi nguyên chùm (chọn chùm hạt tròn căng bóng, xanh mướt)',
          '1 trái dừa xiêm lấy nước ngọt tự nhiên (khoảng 500ml)',
          '150g nấm rơm búp tươi (cạo sạch chân, ngâm nước muối loãng)',
          '100g củ sen thái khoanh (hoặc củ cải trắng, cà rốt tỉa hoa)',
        ],
      },
      {
        category: 'Gia vị sơ chế & Khử hôi bao tử giòn sần sật',
        items: [
          '1 củ gừng tươi giã nát, 2 quả chanh tươi, 1/2 chén giấm gạo',
          '3 thìa canh muối hạt trắng, 1/2 chén rượu trắng',
        ],
      },
      {
        category: 'Gia vị ướp & Nấu nước dùng hầm tiêu',
        items: [
          '3 củ hành tím đập dập, 1 củ tỏi băm nhuyễn, 2 nhánh đầu hành lá',
          'Gia vị: 2 thìa canh nước mắm nhĩ ngon, 1 thìa canh hạt nêm, 1 thìa canh đường phèn, 1/2 thìa cà phê tiêu sọ xay',
          'Rau ăn kèm lẩu: Rau mồng tơi, rau xà lách xoong, cải bẹ xanh tươi, bún tươi hoặc mì trứng',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế bao tử heo áp chảo khử sạch màng nhầy',
        time: '15 phút',
        heat: 'Chảo gang khô nóng & nước đá',
        goal: 'Bao tử trắng phau, sạch 100% màng nhầy và mùi gây, giòn sần sật',
        actionPoints: [
          'Lộn mặt trong bao tử ra ngoài, cạo bỏ sạch các mảng mỡ thừa và màng nhầy dưới vòi nước chảy.',
          'Bóp kỹ bao tử với 2 thìa muối hạt và nước cốt 2 quả chanh trong 3 phút, rửa sạch.',
          'Đặt chảo không dầu lên bếp đun thật nóng, cho bao tử vào áp chảo đảo nhanh 2 phút cho săn lại và bong hết chất nhầy còn sót, vớt ra cạo sạch.',
          'Rửa lại lần cuối với rượu trắng và gừng giã nát, chần nước sôi rồi thả ngay vào thau nước đá lạnh ngâm 5 phút cho giòn.',
        ],
        description:
          'Áp chảo khô và ngâm nước đá là bí quyết gia truyền giúp bao tử giòn sần sật, sạch bóng màng nhầy.',
        tip: 'Ngâm nước đá ngay sau khi chần giúp sợi collagen co lại tạo độ giòn sần sật đặc trưng.',
      },
      {
        step: 2,
        title: 'Cắt miếng vừa ăn & Ướp bao tử thấm vị tiêu xanh',
        time: '10 phút',
        heat: 'Lửa lớn',
        goal: 'Từng miếng bao tử săn giòn, thấm đượm vị thơm cay của tiêu xanh và gia vị',
        actionPoints: [
          'Thái bao tử thành từng miếng xéo bản to 2 ngón tay (3x5cm).',
          'Đập dập 3 nhánh tiêu xanh. Ướp bao tử với tiêu xanh đập dập, 1 thìa canh nước mắm nhĩ, 1 thìa hạt nêm, hành tỏi băm và tiêu sọ trong 15 phút.',
          'Phi thơm 3 củ hành tím băm với 1 thìa dầu ăn, trút bao tử vào xào săn trên lửa lớn 3 phút cho bốc mùi thơm lừng.',
        ],
        description:
          'Xào săn bao tử với tiêu xanh trước khi ninh giúp thịt bao tử khóa vị ngọt và thấm đượm mùi thơm nồng.',
        tip: 'Xào nhanh lửa lớn giúp bao tử không bị ra nước và giữ được độ giòn.',
      },
      {
        step: 3,
        title: 'Hầm bao tử với nước dừa tươi & Chùm tiêu xanh',
        time: '40 - 45 phút',
        heat: 'Lửa nhỏ liu riu',
        goal: 'Nước dùng ngọt thanh tự nhiên, bao tử chín tới giòn sần sật không bị mềm nhũn',
        actionPoints: [
          'Trút bao tử đã xào vào nồi, đổ 500ml nước dừa xiêm tươi và 700ml nước hầm xương (hoặc nước lọc) ngập mặt bao tử.',
          'Thả các chùm tiêu xanh tươi nguyên hạt và củ sen thái khoanh vào nồi. Đun sôi bùng, hớt sạch bọt trắng rồi hạ lửa nhỏ liu riu ninh 35 - 40 phút.',
          'Thả nấm rơm búp tươi vào, nêm 1 thìa đường phèn, 1 thìa nước mắm cho vị nước dùng ngọt thanh cay nồng ấm bụng.',
        ],
        description:
          'Ninh lửa nhỏ cùng nước dừa xiêm giúp bao tử chín tới mềm giòn sần sật, nước hầm trong veo ngạt ngào hương tiêu.',
        tip: 'Ninh không quá 45 phút để bao tử giữ trọn độ giòn sần sật, không bị mềm nhũn.',
      },
      {
        step: 4,
        title: 'Bày thố đất/lẩu nóng hổi & Thưởng thức kèm rau xanh',
        time: '5 phút',
        heat: 'Nồi lẩu sôi liu riu',
        goal: 'Thố bao tử hầm tiêu bốc khói ngạt ngào thơm nức, nước dùng ngọt thanh cay nồng',
        actionPoints: [
          'Múc bao tử hầm tiêu xanh ra thố đất hoặc nồi lẩu mini đặt trên bếp cồn/bếp từ.',
          'Phủ ngò rí, hành lá cắt khúc và vài nhánh tiêu xanh tươi lên mặt cho bắt mắt.',
          'Bày đĩa rau mồng tơi, xà lách xoong, cải bẹ xanh tươi non và mì trứng (hoặc bún tươi) để nhúng ăn nóng.',
        ],
        description:
          'Bao tử hầm tiêu xanh ăn lẩu bốc khói nghi ngút là món ngon đại bổ ấm bụng ngày se lạnh.',
        tip: 'Chấm từng miếng bao tử giòn sần sật vào chén nước mắm mặn dầm ớt hiểm xanh hoặc muối tiêu chanh.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng nấu bao tử hầm tiêu xanh giòn sần sật chuẩn nhà hàng: 1. Áp chảo bao tử trên chảo gang khô không dầu để bong sạch nhầy hôi rồi ngâm ngay vào thau nước đá; 2. Đập dập 1 nửa tiêu xanh ướp với bao tử và xào săn trước khi đun; 3. Ninh liu riu với nước dừa tươi trong 40 phút (không ninh lâu hơn) để bao tử đạt độ giòn sần sật béo bùi chuẩn nhất.',
    recommendedSauce:
      'Múc thố bao tử hầm tiêu xanh bốc khói ngạt ngào, nhúng rau mồng tơi và cải xanh ăn kèm bún tươi, chấm bao tử giòn sần sật vào chén nước mắm mặn dầm ớt hiểm xanh cay xè.',
  },
  'long-nuong': {
    dishId: 'long-nuong',
    dishName: 'Lòng Nướng Sa Tế Cay Giòn Than Hoa',
    seoTitle: 'Cách Làm Lòng Nướng Sa Tế Cay Giòn Rụm Than Hoa Thơm Lừng Mồi Nhậu',
    prepTime: '25 phút (sơ chế sạch)',
    cookTime: '15 - 20 phút nướng than hoa',
    difficulty: 'Dễ',
    servings: '3 - 4 người lai rai',
    ingredients: [
      {
        category: 'Nguyên liệu chính',
        items: [
          '500g lòng non heo (chọn lòng bé, ống tròn đều, màu trắng hồng căng mọng)',
          '300g dồi trường hoặc bao tử heo kèm theo',
          'Khử mùi: Muối hạt, nước cốt chanh, gừng đập dập, rượu trắng',
        ],
      },
      {
        category: 'Sốt ướp sa tế nướng than hoa',
        items: [
          '2 thìa canh sa tế tôm hoặc sa tế ớt hiểm cay nồng',
          '1 thìa canh dầu hào, 1 thìa canh mật ong rừng',
          '1 thìa canh nước mắm nhĩ ngon, 1/2 thìa ngũ vị hương',
          '2 củ sả băm nhuyễn, 1 củ tỏi và 2 củ hành tím băm nhỏ, 1 thìa dầu màu điều',
        ],
      },
      {
        category: 'Rau ăn kèm & Nước chấm bén mồi',
        items: [
          'Rau húng quế, ngò gai, dưa leo, chuối chát, khế chua',
          'Nước chấm: Chao đỏ pha đường ớt sa tế, sốt me chua ngọt hoặc muối ớt xanh sữa đặc',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế lòng non giòn ngọt, không bị đắng hay dai',
        time: '10 phút',
        heat: 'Nước sôi 30 giây & nước đá lạnh',
        goal: 'Lòng non sạch thơm, màu trắng sáng, giữ trọn độ giòn sần sật và vị ngọt béo ngậy',
        actionPoints: [
          'Dùng tay vuốt nhẹ một lần từ đầu đến cuối dưới vòi nước (không vuốt ép quá mạnh làm rách màng mỡ sữa bên trong).',
          'Bóp nhẹ với 1 thìa muối hạt và nước cốt chanh rồi rửa sạch ngay.',
          'Đun sôi nồi nước có gừng đập dập và 1 chén rượu trắng, thả lòng vào chần đúng 30 giây.',
          'Vớt lòng ra ngay lập tức thả vào âu nước đá lạnh có vắt chanh để lòng giòn rụm và trắng phau.',
        ],
        description:
          'Dùng tay vuốt nhẹ lòng non từ đầu tới cuối dưới vòi nước (không vuốt quá kỹ làm mất chất ngọt). Bóp nhẹ với muối hạt và nước cốt chanh để khử nhớt. Chần lòng qua nồi nước sôi có gừng đập dập và rượu trắng trong đúng 30 giây rồi vớt ngay ra thả vào âu nước đá lạnh để lòng giòn sần sật và giữ màu trắng sáng.',
        tip: 'Tuyệt đối không luộc lòng quá lâu lúc sơ chế vì nhiệt độ cao sẽ khiến lòng bị dai teo lại.',
      },
      {
        step: 2,
        title: 'Cắt khúc và tẩm ướp sốt sa tế óng ả',
        time: '20 - 30 phút',
        heat: 'Nhiệt độ phòng mát',
        goal: 'Từng đoạn lòng áo đều lớp sốt sa tế đỏ cam óng ả, thơm lừng mật ong và ngũ vị hương',
        actionPoints: [
          'Cắt lòng thành từng khúc vừa ăn dài khoảng 4 - 5cm.',
          'Pha hỗn hợp sốt: 2 thìa sa tế cay, 1 thìa dầu hào, 1 thìa mật ong, 1 thìa mắm nhĩ, 1/2 thìa ngũ vị hương, sả tỏi hành băm và 1 thìa dầu màu điều.',
          'Đeo găng tay xoa bóp đều sốt vào từng miếng lòng, ướp trong 20 - 30 phút cho ngấm sâu.',
        ],
        description:
          'Cắt lòng thành từng đoạn vừa ăn (dài khoảng 4-5cm). Trộn đều sa tế, dầu hào, mật ong, dầu điều, sả, hành tỏi băm. Đeo găng tay xoa đều sốt vào từng miếng lòng, ướp trong 20 - 30 phút cho ngấm sâu gia vị.',
      },
      {
        step: 3,
        title: 'Nướng xèo xèo trên than hoa đỏ rực',
        time: '15 phút',
        heat: 'Than hoa đỏ rực vừa',
        goal: 'Lòng phồng rộp xèo xèo, viền ngoài vàng óng xém thơm khói, bên trong béo ngậy ngọt giòn',
        actionPoints: [
          'Kẹp lòng vào vỉ nướng hoặc xiên que tre đã ngâm nước.',
          'Đặt lên bếp than hoa đỏ rực nướng đảo mặt liên tục mỗi 1 - 2 phút.',
          'Dùng chổi quét đều nước sốt ướp còn lại lên bề mặt miếng lòng trong suốt quá trình nướng để lòng luôn mọng dầu không bị khô.',
          'Khi thấy lòng phồng căng, viền hơi xém vàng thơm nức mùi sả ớt thì nhấc vỉ ra đĩa.',
        ],
        description:
          'Kẹp lòng vào vỉ hoặc xiên que tre nướng trên bếp than hoa đỏ rực. Trong lúc nướng, liên tục phết phần nước sốt ướp còn lại lên bề mặt để lòng không bị khô. Nướng đến khi lòng vàng óng, mặt ngoài xèo xèo phồng rộp dậy mùi thơm nức mũi.',
      },
      {
        step: 4,
        title: 'Bày đĩa và thưởng thức cùng bia lạnh',
        time: '3 phút',
        heat: 'Thưởng thức nóng hổi',
        goal: 'Đĩa mồi nướng bốc khói ngào ngạt, rắc mè rang thơm lừng, chấm đẫm sốt chao béo cay',
        actionPoints: [
          'Gắp lòng nướng ra đĩa lót rau răm và húng quế.',
          'Rắc 1 thìa mè trắng rang vàng thơm lừng lên mặt đĩa lòng nướng.',
          'Bày kèm dưa leo, chuối chát thái mỏng và khế chua giải ngấy.',
          'Dọn kèm chén chao đỏ tán nhuyễn pha đường ớt hoặc muối ớt xanh tê cay.',
        ],
        description:
          'Gắp lòng nướng ra đĩa, rắc thêm chút mè rang vàng thơm phức. Ăn kèm dưa leo giòn rụm, rau răm, khế chua và chấm đẫm vào chén chao sa tế béo cay.',
      },
    ],
    chefSecret:
      'Chần nhanh lòng 30 giây rồi ngâm đá lạnh trước khi nướng than là bí quyết vàng để lòng nướng ngoài giòn rụm, trong béo mềm ngọt ngào mà không hề bị dai.',
    recommendedSauce:
      'Chấm cùng sốt chao sa tế béo cay hoặc chén muối ớt chanh chua cay mặn ngọt bùng nổ hương vị.',
  },
  'buffet': {
    dishId: 'buffet',
    dishName: 'Đại Tiệc Buffet Nướng Lẩu Hải Sản Thả Ga Tại Nhà',
    seoTitle: 'Cách Làm Bàn Tiệc Buffet Lẩu Nướng Hải Sản Tại Nhà Thả Ga, Tiết Kiệm',
    prepTime: '35 - 40 phút (chuẩn bị đồ tươi & sốt ướp)',
    cookTime: 'Nướng & nhúng lẩu ăn lai rai không giới hạn',
    difficulty: 'Dễ',
    servings: '4 - 6 người tụ tập bia bọt',
    ingredients: [
      {
        category: 'Thịt tươi nướng lẩu thượng hạng',
        items: [
          '500g ba chỉ bò Mỹ thái mỏng cuộn nấm kim châm',
          '400g thăn bò hoặc dẻ sườn ướp sốt tiêu đen',
          '400g ba chỉ heo rút sườn ướp sốt cay Hàn Quốc',
          '300g sụn non heo hoặc lòng nướng',
        ],
      },
      {
        category: 'Hải sản tươi sống thả ga',
        items: [
          '400g tôm sú tươi nhảy tanh tách',
          '400g mực trứng hoặc bạch tuộc giòn sần sật',
          '500g ngao hai cùi hoặc hàu nướng mỡ hành phô mai',
        ],
      },
      {
        category: 'Nước dùng lẩu Thái & Rau nấm quầy line',
        items: [
          'Nước cốt lẩu Thái Tomyum chua cay thơm nồng lá chanh sả ớt',
          'Nấm kim châm, nấm đùi gà, ngô ngọt, đậu phụ non, rau muống, cải thảo',
          'Bún tươi, mì tôm ăn lẩu',
        ],
      },
      {
        category: 'Sốt chấm chuẩn quán nhậu',
        items: [
          'Sốt chấm thịt nướng Hàn Quốc (Ssamjang mè rang)',
          'Muối ớt xanh sữa đặc chấm hải sản đậm đà tê cay',
          'Xà lách, kim chi cay giòn ăn giải ngấy',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế quầy line nguyên liệu thịt và hải sản tươi rói',
        time: '25 phút',
        heat: 'Nhiệt độ phòng mát',
        goal: 'Các khay thịt và hải sản được tẩm ướp sốt riêng biệt, bày trí bắt mắt như quầy buffet nhà hàng',
        actionPoints: [
          'Trải từng dải ba chỉ bò Mỹ, cuộn chặt từng bó nấm kim châm nhỏ rồi xếp ngay ngắn lên đĩa.',
          'Dẻ sườn hoặc thăn bò ướp với sốt tiêu đen dầu hào trong 20 phút.',
          'Tôm sú cắt bỏ râu nhọn; mực trứng làm sạch, khứa vảy rồng chéo nhẹ trên lưng rồi ướp sốt sa tế cay.',
          'Rửa sạch các loại rau nấm: nấm đùi gà cắt lát, ngô ngọt cắt khoanh, rau muống và cải thảo cắt khúc vừa ăn.',
        ],
        description:
          'Thịt bò và ba chỉ heo rửa sạch, thấm khô. Thịt bò cuộn chặt từng cuộn nấm kim châm; dẻ sườn ướp sốt tiêu đen dầu hào; ba chỉ ướp sốt sa tế cay mật ong. Hải sản tôm cắt râu, mực làm sạch khứa vảy rồng ướp chút sốt sa tế hành tỏi.',
        tip: 'Khứa vảy rồng trên thân mực giúp mực khi nướng cong tròn đẹp mắt và ngấm trọn gia vị.',
      },
      {
        step: 2,
        title: 'Nấu nước dùng lẩu Thái chua cay thơm nức',
        time: '20 phút',
        heat: 'Lửa lớn đun sôi rồi hạ vừa',
        goal: 'Nước lẩu Tomyum màu đỏ cam rực rỡ, vị chua cay mặn ngọt béo ngậy hài hòa',
        actionPoints: [
          'Phi thơm 3 cây sả đập dập, 1 nhánh riềng thái lát, 3 củ hành tím và 2 quả ớt với 2 thìa dầu màu điều.',
          'Cho 2 quả cà chua bổ múi cau vào xào mềm tạo màu đỏ tự nhiên.',
          'Đổ 1.5 lít nước hầm xương vào đun sôi, nêm gói gia vị lẩu Thái, 2 thìa nước mắm ngon, 1 thìa đường phèn.',
          'Vò nhẹ 5 lá chanh Thái thả vào nồi để nước lẩu dậy mùi thơm thanh dịu đặc trưng chuẩn vị.',
        ],
        description:
          'Hầm nước xương heo hoặc gà cho ngọt nước. Phi thơm sả đập dập, riềng, hành tím và ớt rồi trút cà chua băm vào xào mềm. Đổ nước dùng vào đun sôi, nêm gia vị lẩu Thái, nước cốt me, nước mắm ngon và vò nhẹ lá chanh Thái thả vào tạo hương thơm quyến rũ đặc trưng.',
      },
      {
        step: 3,
        title: 'Bày biện bàn tiệc buffet nướng lẩu và sốt chấm',
        time: '10 phút',
        heat: 'Bật bếp nóng trước 3 phút',
        goal: 'Bàn tiệc tròn trịa, bếp 2 trong 1 ở trung tâm tỏa nhiệt ấm cúng, chén sốt chấm chuẩn vị',
        actionPoints: [
          'Đặt bếp nướng lẩu tích hợp (hoặc 1 bếp nướng và 1 nồi lẩu) ngay giữa bàn ăn gia đình.',
          'Xếp các đĩa ba chỉ cuộn nấm, mực trứng, tôm sú, ngao và rau nấm vây quanh bếp.',
          'Rót sốt muối ớt xanh sữa đặc vào đĩa nhỏ cho hải sản.',
          'Rót sốt đậu tương Hàn Quốc (Ssamjang) trộn mè rang và dầu mè cho thịt nướng.',
          'Chuẩn bị rổ xà lách tươi giòn, lá mè (tía tô Hàn Quốc) và đĩa kim chi cay giòn giải ngấy.',
        ],
        description:
          'Đặt bếp nướng lẩu 2 trong 1 (hoặc 1 bếp nướng và 1 bếp lẩu) ở giữa bàn. Bày các đĩa thịt, hải sản, rau nấm xung quanh thành vòng tròn rực rỡ. Rót sẵn các loại sốt chấm: muối ớt xanh cho hải sản và sốt tương đậu mè rang cho thịt nướng.',
      },
      {
        step: 4,
        title: 'Bật bếp, khai tiệc nướng xèo xèo và nâng ly',
        time: 'Thưởng thức tự do suốt bữa tiệc',
        heat: 'Vỉ nướng nóng xèo xèo / Lẩu sôi sùng sục',
        goal: 'Món nướng thơm nức bơ tỏi, món nhúng lẩu ngọt nước đậm đà, không khí sum vầy rôm rả',
        actionPoints: [
          'Thoa một lớp bơ nhạt lên vỉ nướng, lần lượt gắp ba chỉ bò cuộn nấm, dẻ sườn, mực xèo xèo trên lửa.',
          'Thả ngao hai cùi, ngô ngọt và nấm vào nồi lẩu Thái đang sôi sùng sục để nước lẩu thêm ngọt đậm.',
          'Thịt chín vàng thơm cuốn cùng xà lách, kim chi chấm ngập sốt tương đậu bùi ngậy.',
          'Hải sản nướng chín chấm muối ớt xanh tê cay chua ngọt bùng nổ vị giác.',
        ],
        description:
          'Phết chút bơ lên vỉ nướng, lần lượt thả ba chỉ bò cuộn nấm, mực, tôm xèo xèo thơm nức mũi. Thả ngao, nấm và rau vào nồi lẩu Thái đang sôi sùng sục. Nâng ly bia mát lạnh chúc tụng nhau trong tiếng xèo xèo vui tai.',
      },
    ],
    chefSecret:
      'Kết hợp song song cả nướng than/chảo bơ và nhúng lẩu chua cay giúp bữa tiệc buffet không bao giờ bị ngấy, ai thích ăn nướng đậm đà hay nhúng lẩu thanh ngọt đều thỏa sức lựa chọn.',
    recommendedSauce:
      'Muối ớt xanh Nha Trang sánh quyện cho hải sản và chén sốt tương đậu Hàn Quốc rắc mè rang thơm bùi cuốn cùng xà lách kim chi.',
  },
  'be-thui': {
    dishId: 'be-thui',
    dishName: 'Bê Thui Cầu Mống Chấm Mắm Nêm Chuẩn Vị Xứ Quảng',
    seoTitle: 'Cách Làm Bê Thui Cầu Mống Da Giòn Thịt Mềm & Bí Quyết Pha Mắm Nêm Xứ Quảng',
    prepTime: '20 phút (chuẩn bị rau rừng & pha mắm nêm)',
    cookTime: '30 - 45 phút (thui rơm/nướng giòn da)',
    difficulty: 'Trung bình',
    servings: '3 - 4 người lai rai mồi nhậu',
    ingredients: [
      {
        category: 'Thịt bê tươi ngon',
        items: [
          '600g - 800g thịt đùi bê còn nguyên da (chọn thịt bê tơ non mềm, da mỏng)',
          'Sả cây đập dập, gừng, rượu trắng để hấp và tạo mùi thơm',
          'Mè (vừng) trắng rang vàng thơm lừng',
        ],
      },
      {
        category: 'Rau sống ăn kèm & Bánh tráng cuốn',
        items: [
          'Bánh tráng Đại Lộc nhúng nước dẻo dai',
          'Bánh tráng nướng mè giòn rụm bóp vụn ăn cùng',
          'Chuối chát thái mỏng ngâm chanh, khế chua, dưa leo',
          'Rau thơm: Húng quế, ngò tàu, tía tô, rau thơm, diếp cá, cải mầm hoặc rau rừng',
        ],
      },
      {
        category: 'Chén mắm nêm bí truyền xứ Quảng',
        items: [
          '1 chén mắm nêm cá cơm nguyên chất thơm nồng',
          '1/3 quả dứa (thơm) băm nhuyễn vắt lấy nước cốt ngọt thanh',
          'Tỏi băm, ớt xiêm xanh đập dập, đường phèn, nước cốt chanh',
          '1 thìa dầu mè hoặc mè rang rắc lên mặt chén chấm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Thui da bê giòn rụm và hấp chín tái hồng mọng nước',
        time: '25 - 30 phút',
        heat: 'Khò nhiệt giòn da & hấp lửa vừa',
        goal: 'Lớp da ngoài phồng rộp vàng óng giòn sần sật, thớ thịt bên trong chín tới màu hồng đào mọng ngọt',
        actionPoints: [
          'Dùng đầu khò gas nhiệt (hoặc nướng than rơm rạ) khò đều quanh phần da miếng thịt đùi bê đến khi da phồng rộp lấm tấm vàng óng giòn tan.',
          'Rửa sạch tảng thịt bê, để ráo.',
          'Lót sả cây đập dập và gừng thái lát dưới xửng hấp, đặt thịt bê lên trên, rưới 1 thìa canh rượu trắng.',
          'Hấp cách thủy trên lửa vừa trong 18 - 20 phút. Dùng que tăm xiên thử vào giữa miếng thịt thấy nước ứa ra phớt hồng nhạt là thịt vừa chín tới hoàn hảo.',
        ],
        description:
          'Dùng khò nhiệt hoặc nướng da bê trên than hoa/rơm rạ cho phần da phồng rộp, vàng óng giòn sần sật. Sau đó đặt miếng thịt bê lên xửng hấp cùng sả đập dập và gừng tươi trong khoảng 15-20 phút đến khi thịt chín tới (bên ngoài chín đều, thớ thịt bên trong phớt hồng đào ngọt lịm mọng nước).',
        tip: 'Thịt bê thui ngon nhất là khi vừa chín tới hai tầng thịt - da giòn, thịt hồng mềm mọng nước, tuyệt đối không hấp quá kỹ làm thịt khô dai.',
      },
      {
        step: 2,
        title: 'Thái lát thịt bê hai tầng da giòn thịt hồng',
        time: '10 phút',
        heat: 'Nhiệt độ phòng (thịt nguội bớt)',
        goal: 'Lát thịt thái mỏng tang, dính liền mép da vàng giòn, thớ thịt hồng hào bóng bẩy',
        actionPoints: [
          'Để miếng thịt bê nghỉ khoảng 5 phút cho nước ngọt phân bổ đều lại trong thớ thịt.',
          'Dùng dao bản mỏng thật sắc thái thịt thành từng lát thật mỏng ngang thớ.',
          'Mỗi lát thịt bắt buộc phải dính liền cả phần da vàng giòn bên ngoài và lớp thịt nạc hồng tươi mọng nước bên trong.',
          'Xếp thịt xoay tròn hình cánh hoa trên đĩa lớn, rắc mè trắng rang vàng thơm lừng lên bề mặt.',
        ],
        description:
          'Dùng dao thật sắc thái thịt bê thành từng lát mỏng, dính liền cả phần da vàng ruộm giòn tan và thớ thịt hồng tươi. Xếp thịt xoay tròn đều trên đĩa rồi rắc mè rang vàng thơm phức lên bề mặt.',
      },
      {
        step: 3,
        title: 'Pha chén mắm nêm cá cơm trứ danh xứ Quảng',
        time: '10 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Mắm nêm sánh mịn thơm ngát dứa chín, vị mặn mòi ngọt sâu, tỏi ớt xiêm xanh cay nồng xé lưỡi',
        actionPoints: [
          'Cho 1 chén mắm nêm cá cơm nguyên chất vào bát lớn.',
          'Dứa (thơm) băm nhuyễn vắt lấy cả nước lẫn xác thả vào bát mắm nêm (giúp giảm vị mặn gắt và tạo độ sánh dịu).',
          'Nêm 2 thìa canh đường phèn (hoặc đường cát vàng), 1 thìa nước cốt chanh khuấy tan đều.',
          'Thêm 1 củ tỏi băm nhỏ, 4-5 trái ớt xiêm xanh đập dập thả nổi lên trên cùng chút mè rang thơm nức.',
        ],
        description:
          'Cho mắm nêm vào bát, thêm nước cốt dứa băm nhuyễn, đường phèn, nước cốt chanh khuấy tan đều vị chua ngọt mặn mà. Thêm thật nhiều tỏi băm, ớt hiểm xanh cay xé lưỡi và rắc chút mè rang lên trên.',
      },
      {
        step: 4,
        title: 'Cuốn bánh tráng Đại Lộc và thưởng thức mồi nhậu bén bia',
        time: '3 phút',
        heat: 'Thưởng thức trực tiếp',
        goal: 'Cuốn bánh tráng tròn trịa, chấm ngập chén mắm nêm đậm đà béo ngọt giòn tan',
        actionPoints: [
          'Nhúng ướt nhẹ bánh tráng Đại Lộc cho dẻo dai trải lên đĩa phẳng.',
          'Xếp rau thơm các loại: húng quế, diếp cá, ngò tàu, tía tô, lát chuối chát ngâm chanh và khế chua.',
          'Đặt 2 lát thịt bê thui hồng mềm lên trên, rắc thêm một nhúm vụn bánh tráng nướng giòn rụm.',
          'Cuộn tròn chặt tay, chấm ngập vào chén mắm nêm cay xé lưỡi thưởng thức trọn vẹn tinh hoa ẩm thực Cầu Mống.',
        ],
        description:
          'Trải miếng bánh tráng dẻo, đặt lên vài cọng rau thơm, lát chuối chát, khế chua, gắp 1-2 miếng thịt bê thui hồng hào cuộn chặt tay. Chấm ngập chén mắm nêm đậm đà, cắn ngập miệng cảm nhận vị ngọt thơm, giòn rụm xốn xang.',
      },
    ],
    chefSecret:
      'Linh hồn của món bê thui nằm ở chén mắm nêm: Dứa băm giúp giảm vị mặn gắt của mắm, tạo độ sánh sánh và hương thơm thanh dịu hòa cùng tỏi ớt cay nồng cực kỳ kích thích vị giác.',
    recommendedSauce:
      'Chén mắm nêm cá cơm pha dứa, tỏi ớt xiêm xanh cay nồng nàn không thể thay thế của người miền Trung.',
  },
  'banh-beo': {
    dishId: 'banh-beo',
    dishName: 'Bánh Bèo Chén Tôm Chấy Tóp Mỡ Chuẩn Vị Huế',
    seoTitle: 'Cách Làm Bánh Bèo Chén Tôm Chấy Tóp Mỡ Xoáy Lòng Chuẩn Vị Huế',
    prepTime: '25 phút (pha bột & làm tôm chấy)',
    cookTime: '15 - 20 phút (hấp bánh)',
    difficulty: 'Dễ',
    servings: '15 - 20 chén nhỏ (3 - 4 người ăn)',
    ingredients: [
      {
        category: 'Phần bột bánh bèo xoáy lòng',
        items: [
          '150g bột gạo tẻ nguyên chất',
          '30g bột năng (tạo độ dai nhẹ mềm mướt)',
          '250ml nước lạnh + 250ml nước sôi ấm',
          '1/2 thìa cà phê muối tinh, 1 thìa canh dầu ăn',
        ],
      },
      {
        category: 'Nhân tôm chấy & Tóp mỡ vàng giòn',
        items: [
          '200g tôm tươi (hoặc tôm khô ngâm mềm) giã nhuyễn sao vàng tơi xốp',
          '150g mỡ gáy heo thái hạt lựu rán vàng giòn thành tóp mỡ',
          'Hành lá cắt nhỏ phi mỡ thơm lừng (mỡ hành)',
          'Bánh mì khô cắt hạt lựu chiên giòn (tùy thích)',
        ],
      },
      {
        category: 'Nước mắm ngọt ấm chan bánh',
        items: [
          'Nước luộc tôm tươi ngọt thanh',
          'Nước mắm ngon, đường cát vàng, chút giấm hoặc nước cốt chanh',
          'Ớt sừng hoặc ớt chỉ thiên cắt khoanh cay tê đầu lưỡi',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Pha bột và ủ để bánh tạo xoáy đẹp mắt',
        time: '45 phút (pha & ủ bột)',
        heat: 'Nhiệt độ phòng',
        goal: 'Bột tan mịn hoàn toàn, không vón cục, ủ lắng tạo độ dẻo mềm mướt chuẩn xoáy lõm',
        actionPoints: [
          'Cho 150g bột gạo tẻ, 30g bột năng và 1/2 thìa cà phê muối vào âu lớn.',
          'Rót 250ml nước lạnh vào khuấy tan đều hoàn toàn.',
          'Từ từ châm 250ml nước sôi ấm vào quấy đều tay theo 1 chiều, thêm 1 thìa canh dầu ăn cho bánh mướt.',
          'Để bột nghỉ yên tĩnh trong 30 - 45 phút trước khi đổ chén (bí quyết giúp bánh hấp tạo xoáy sâu chính giữa chén).',
        ],
        description:
          'Khuấy đều bột gạo, bột năng, muối với nước lạnh cho tan hoàn toàn. Sau đó từ từ châm nước sôi ấm vào quấy đều tay, thêm thìa dầu ăn. Để bột nghỉ khoảng 30 - 45 phút trước khi đổ chén giúp bánh khi hấp tạo thành hình xoáy lõm chính giữa chuẩn điệu.',
        tip: 'Tỷ lệ bột gạo và bột năng chuẩn kết hợp nước ấm sẽ giúp bánh mềm mướt không bị nát cũng không bị cứng.',
      },
      {
        step: 2,
        title: 'Làm tôm chấy đỏ au và mỡ hành, tóp mỡ giòn rụm',
        time: '15 phút',
        heat: 'Lửa nhỏ sao tôm & lửa vừa thắng mỡ',
        goal: 'Tôm chấy tơi xốp đỏ au tự nhiên, tóp mỡ vàng giòn rụm, mỡ hành xanh mướt óng ả',
        actionPoints: [
          'Tôm tươi bóc vỏ, luộc chín (giữ lại nước luộc tôm để pha nước mắm ngọt).',
          'Cho tôm vào cối giã nhuyễn rồi trút vào chảo chống dính sao nhỏ lửa đến khi sợi tôm khô tơi xốp, màu cam đỏ rực rỡ.',
          'Thái 150g mỡ heo hạt lựu nhỏ, cho vào chảo rán lửa vừa đến khi tóp mỡ vàng giòn thì vớt ra để ráo dầu.',
          'Lấy 3 thìa mỡ nóng đang sôi trút vào bát hành lá thái nhỏ với chút xíu đường tạo thành mỡ hành xanh bóng mướt.',
        ],
        description:
          'Tôm bóc vỏ luộc chín (giữ lại nước luộc làm nước mắm), đem giã nhuyễn rồi cho vào chảo chống dính sao nhỏ lửa đến khi sợi tôm khô tơi xốp, màu cam đỏ tự nhiên. Mỡ heo thắng vàng giòn vớt tóp mỡ ra, trút hành lá cắt nhỏ vào dầu nóng làm mỡ hành óng ả.',
      },
      {
        step: 3,
        title: 'Làm nóng chén và hấp bánh bèo xoáy lòng sâu',
        time: '10 phút mỗi mẻ',
        heat: 'Lửa lớn hơi nước bốc mạnh',
        goal: 'Bánh bèo chín trắng đục, chính giữa chén xoáy lõm sâu hút mắt, róc chén không dính',
        actionPoints: [
          'Xếp các chén sành nhỏ vào xửng hấp, đậy vung đun sôi nước 3 phút cho chén thật nóng già.',
          'Khuấy đều âu bột lên cho đều, múc bột đổ vào từng chén (khoảng 1/2 đến 2/3 chén sành).',
          'Đậy kín nắp xửng, hấp trên lửa lớn liên tục trong 7 - 8 phút.',
          'Khi thấy bánh chín chuyển màu trắng đục, giữa chén xoáy lõm một vòng tròn sâu hoắm là bánh đã đạt độ chín hoàn mỹ.',
        ],
        description:
          'Xếp các chén sành nhỏ vào xửng hấp, đun sôi nước cho chén nóng lên trong 3 phút. Quấy đều thau bột rồi múc bột đổ vào từng chén (khoảng 1/2 đến 2/3 chén). Đậy nắp hấp lửa lớn trong 7 - 8 phút đến khi bánh chín trắng đục, giữa chén xoáy lõm sâu là đạt.',
      },
      {
        step: 4,
        title: 'Trang trí tôm chấy, chan nước mắm ngọt ấm & thưởng thức',
        time: '5 phút',
        heat: 'Nước mắm ngọt ấm',
        goal: 'Mỗi chén bánh bèo đẹp như tranh vẽ, mềm tan béo ngậy, ngọt thanh cay nồng đầu lưỡi',
        actionPoints: [
          'Nhấc chén bánh ra khỏi xửng, phết 1 thìa mỡ hành óng ả vào giữa lòng xoáy bánh.',
          'Rắc 1 thìa tôm chấy đỏ au phủ đều mặt và thả vài hạt tóp mỡ giòn rụm (hoặc bánh mì chiên giòn).',
          'Pha nước mắm: Lấy nước luộc tôm hòa cùng nước mắm ngon, đường cát vàng theo tỷ lệ ngọt thanh, thêm ớt hiểm cắt khoanh cay tê.',
          'Khi ăn chan 1 thìa nước mắm ngọt ấm vào chén, dùng thìa tre xắn từng miếng bánh thưởng thức nóng hổi.',
        ],
        description:
          'Lấy chén bánh ra, phết một thìa mỡ hành óng ả, rắc tôm chấy đỏ au và vài hạt tóp mỡ giòn rụm lên trên. Khi ăn chan 1 thìa nước mắm ngọt ấm pha ớt cay, dùng thìa tre xắn từng góc bánh thưởng thức trọn vẹn sự dẻo mềm, béo ngậy giòn tan.',
      },
    ],
    chefSecret:
      'Làm nóng chén trong nồi hấp trước khi đổ bột vào là bí quyết vàng để bánh bèo nở xoáy sâu ở giữa lòng chén và không hề bị dính chén khi xắn bánh.',
    recommendedSauce:
      'Nước mắm ngọt pha từ nước luộc tôm tươi, có vị mặn ngọt thanh nhẹ, điểm xuyết vài lát ớt tươi cay nồng.',
  },

  'com-ga-xoi-mo': {
    dishId: 'com-ga-xoi-mo',
    dishName: 'Cơm Gà Xối Mỡ Da Giòn',
    seoTitle: 'Cách Làm Cơm Gà Xối Mỡ Thơm Ngon Đậm Đà Chuẩn Quán',
    prepTime: '30 phút (hong khô da 1 giờ)',
    cookTime: '30 phút',
    difficulty: 'Trung bình',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Đùi gà góc tư & Gia vị ướp gà',
        items: [
          '3 - 4 cái đùi gà góc tư tươi ngon (da mỏng, thịt chắc)',
          '1 củ gừng tươi & 3 tép tỏi (vắt lấy 2 thìa canh nước cốt gừng tỏi)',
          '1 thìa canh nước mắm ngon',
          '1 thìa canh dầu hào Maggi',
          '1 thìa cà phê bột tỏi & 1/2 thìa cà phê ngũ vị hương',
          '1/2 thìa cà phê tiêu xay & 1 thìa cà phê hạt nêm',
          '1 thìa canh mạch nha (hoặc mật ong pha giấm để phết tạo độ giòn bóng da)',
        ],
      },
      {
        category: 'Gạo & Gia vị chiên cơm màu vàng óng',
        items: [
          '300g gạo dẻo thơm (hoặc gạo tám thơm)',
          '2 thìa canh mỡ gà (hoặc bơ thực vật) dùng xào gạo',
          '1/2 thìa cà phê bột nghệ (hoặc dầu màu điều) tạo màu vàng hạt cơm',
          '1/2 thìa cà phê hạt nêm',
          'Nước luộc gà (dùng nấu cơm béo ngọt đậm đà)',
        ],
      },
      {
        category: 'Nước sốt xì dầu tỏi ớt & Dưa góp ăn kèm',
        items: [
          '3 thìa canh nước tương đậm đặc (xì dầu Maggi/Nhất Phẩm Tiên)',
          '1 thìa canh đường cát & 1 thìa canh tương ớt Chin-su',
          '1 thìa cà phê dầu mè thơm',
          '1 tép tỏi & 1 quả ớt băm nhuyễn',
          'Dưa leo, cà chua thái lát, xà lách tươi & dưa góp củ cải cà rốt ngâm giấm đường',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế, luộc sơ đùi gà và kỹ thuật hong khô da giòn rụm',
        time: '30 phút',
        heat: 'Hong khô da trong tủ lạnh 1 - 2 giờ',
        goal: 'Đùi gà chín tới 80%, mặt da gà khô đét tuyệt đối để khi xối mỡ nổ phồng giòn tan',
        actionPoints: [
          'Chà xát đùi gà góc tư với muối hột, giấm và gừng đập dập để rửa sạch chất bẩn và khử sạch mùi hôi, rửa lại rồi lau khô.',
          'Đun nồi nước sôi với 1 củ hành tím, vài lát gừng đập dập và 1/2 thìa cà phê hạt nêm. Cho đùi gà vào luộc sơ lửa vừa trong 12 - 15 phút cho đùi gà chín khoảng 80% (không luộc chín nhừ thịt sẽ bị khô).',
          'Vớt đùi gà ra ngâm ngay vào thau nước đá lạnh 5 phút để da co lại giữ độ giòn, rồi vớt ra dùng khăn giấy thấm thật khô ráo toàn bộ bề mặt da.',
          'Pha nước cốt ướp gà: Trộn nước cốt tỏi gừng, nước mắm, dầu hào, bột tỏi, ngũ vị hương, hạt nêm và tiêu xay. Thoa đều nước sốt ướp vào phần thịt bên dưới của đùi gà.',
          'Pha 1 thìa mạch nha/mật ong với 1 thìa giấm ăn, quét một lớp mỏng lên mặt da gà.',
          'Đặt đùi gà lên giá thoáng khí để trước quạt hoặc cho vào tủ lạnh (hở mặt da) từ 1 - 2 giờ để mặt da gà khô đét lại hoàn toàn (da càng ráo khô khi xối mỡ nổ phồng càng giòn tan rôm rốp mà không bị bắn dầu).',
        ],
        description:
          'Luộc sơ đùi gà chín tới 80% với gừng sả, vớt ra ngâm nước đá rồi thấm thật khô da. Ướp thịt bên dưới với nước tỏi gừng, nước mắm, dầu hào, ngũ vị hương. Quét hỗn hợp mật ong giấm lên da và để tủ lạnh 1 giờ cho da khô đét.',
        tip: 'Vắt lấy nước cốt tỏi gừng để ướp gà thay vì dùng tỏi băm, giúp thịt gà ngấm đượm hương vị mà khi xối mỡ da gà không bị cháy đen lấm tấm.',
      },
      {
        step: 2,
        title: 'Nấu cơm dẻo thơm hạt vàng óng béo ngậy mỡ gà',
        time: '25 phút',
        heat: 'Nồi cơm điện / Lửa vừa',
        goal: 'Hạt cơm vàng óng ánh béo ngọt vị nước luộc gà, hạt cơm tơi xốp giòn nhẹ',
        actionPoints: [
          'Vo sạch gạo, để ráo nước.',
          'Bắc chảo lên bếp, cho 2 thìa canh mỡ gà (hoặc bơ) vào đun chảy, phi thơm 1 tép tỏi băm nhuyễn.',
          'Trút gạo đã ráo vào đảo xào rang trên lửa nhỏ khoảng 3 - 5 phút cùng 1/2 thìa bột nghệ và 1/2 thìa hạt nêm cho từng hạt gạo săn lại và khoác lớp màu vàng óng đẹp mắt.',
          'Trút gạo đã xào vào nồi cơm điện, đong phần nước luộc gà vừa ngập mặt gạo như đong nước nấu cơm bình thường.',
          'Bấm nút nấu cơm. Khi cơm chín tới, dùng đũa xới nhẹ cho cơm tơi xốp, đậy nắp ủ nóng.',
        ],
        description:
          'Xào gạo với mỡ gà, tỏi băm và bột nghệ trên chảo 3 phút cho hạt gạo săn áo màu vàng óng. Trút vào nồi cơm điện đong bằng nước luộc gà nấu chín dẻo tơi xốp.',
        tip: 'Rang xào gạo với mỡ gà trước khi nấu giúp hạt cơm chín dẻo, bóng bẩy béo thơm và không bị nát.',
      },
      {
        step: 3,
        title: 'Kỹ thuật xối mỡ đùi gà da nổ phồng xốp giòn tan rôm rốp',
        time: '15 phút',
        heat: 'Lửa lớn - Dầu sôi già (180°C)',
        goal: 'Mặt da gà nổ phồng xốp vàng rụm màu cánh gián, thịt bên trong chín mềm mọng nước',
        actionPoints: [
          'Đun nóng chảo dầu sâu lòng (lượng dầu ngập khoảng 1/3 đùi gà).',
          'Thả đùi gà đã hong khô da vào chảo. Dùng vá lớn múc dầu nóng sôi xèo xèo xối liên tục lên khắp bề mặt da gà.',
          'Múc xối mỡ đều tay liên tục trong 5 - 7 phút, quan sát lớp da gà chuyển sang màu vàng cánh gián óng ả, phồng xốp giòn tan lách tách.',
          'Lật đùi gà chiên áp chảo nhẹ phần thịt bên dưới 1 - 2 phút cho chín giòn rồi vớt ra để trên giá cho róc sạch mỡ thừa.',
        ],
        description:
          'Đun sôi chảo dầu già. Dùng vá múc dầu nóng xối liên tục lên mặt da đùi gà 7 phút đến khi lớp da nổ phồng xốp vàng rụm cánh gián lách tách. Vớt gà ra giá róc mỡ.',
        tip: 'Dùng kỹ thuật xối mỡ thay vì thả chìm đùi gà vào dầu chiên sẽ giúp lớp da giòn rụm hoàn hảo mà phần thịt đùi không bị ngấm dầu hay khô xác.',
      },
      {
        step: 4,
        title: 'Pha nước sốt xì dầu tỏi ớt và trình bày đĩa cơm gà chuẩn quán',
        time: '5 phút',
        heat: 'Thưởng thức nóng giòn',
        goal: 'Đĩa cơm gà xối mỡ vàng óng ánh, đùi gà da giòn rôm rốp quyện sốt xì dầu đậm đà và dưa chua giòn mát',
        actionPoints: [
          'Pha nước sốt xì dầu: Trộn 3 thìa nước tương, 1 thìa đường, 1 thìa tương ớt, 1 thìa dầu mè, tỏi băm và ớt băm khuấy đều cho tan dẻo mặn ngọt hài hòa.',
          'Xới cơm vàng óng ra chén rồi úp ngược tròn đẹp mắt lên đĩa lớn.',
          'Xếp đùi gà xối mỡ da giòn rụm màu cánh gián bên cạnh.',
          'Xếp dưa leo thái lát, cà chua, xà lách tươi và dưa góp củ cải cà rốt ngâm giấm đường chua ngọt dọn kèm.',
          'Thưởng thức ngay khi còn nóng: Cắn miếng da gà nổ giòn tan rôm rốp trong miệng, thịt gà ngọt mọng thấm đượm gia vị quyện hạt cơm vàng dẻo béo ngậy mỡ gà và sốt xì dầu đậm đà đưa miệng!',
        ],
        description:
          'Pha sốt xì dầu tỏi ớt mặn ngọt dịu. Xới cơm vàng ra đĩa úp tròn, đặt đùi gà xối mỡ da giòn rụm bên cạnh cùng dưa leo cà chua dưa góp. Thưởng thức ngay khi nóng hổi.',
      },
    ],
    chefSecret:
      'Bí quyết bất bại của món cơm gà xối mỡ chuẩn quán nằm ở 3 điểm vàng: Thứ nhất, gà phải luộc sơ chín 80% rồi ướp bằng nước cốt tỏi gừng (không dùng xác tỏi) và để mặt da thật ráo khô trước khi xối mỡ. Thứ hai, gạo phải được xào với mỡ gà và bột nghệ trước khi nấu bằng nước luộc gà giúp hạt cơm vàng óng bóng bẩy béo thơm. Thứ ba, dùng vá múc dầu sôi xối liên tục lên da gà giúp da nổ phồng xốp giòn rụm rôm rốp mà thịt gà bên trong vẫn giữ nguyên độ ẩm ngọt mọng nước.',
    recommendedSauce:
      'Nước sốt xì dầu (nước tương) tỏi ớt ngọt dịu đậm đà hoặc nước mắm chua ngọt tỏi ớt Chin-su.',
  },

  'com-ga-hoi-an': {
    dishId: 'com-ga-hoi-an',
    dishName: 'Cơm Gà Hội An Chuẩn Vị Phố Cổ',
    seoTitle: 'Cách Làm Cơm Gà Hội An Hạt Cơm Vàng Óng, Gỏi Gà Xé Đậm Đà Chuẩn Vị Phố Cổ',
    prepTime: '35 phút',
    cookTime: '45 phút',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Thịt gà ta & Nấu cơm vàng óng',
        items: [
          '1 con gà ta thả vườn (khoảng 1.2kg - 1.4kg) da vàng ươm, thịt săn chắc ngọt lịm',
          '350g gạo tẻ thơm (có thể trộn thêm 50g gạo nếp cái hoa vàng cho cơm dẻo hạt)',
          '1 miếng mỡ gà tươi (lấy từ mỡ bụng gà khi mổ) để thắng mỡ xào gạo',
          '1 củ nghệ tươi giã vắt lấy nước cốt (hoặc 1 thìa cà phê bột nghệ vàng)',
          '1 củ gừng đập dập, 3 củ hành tím đập dập, 1 củ tỏi băm nhuyễn',
          'Gia vị: Nước mắm cốt ngon, muối hạt, tiêu sọ trắng xay, hạt nêm, đường phèn',
        ],
      },
      {
        category: 'Gỏi gà xé bóp thấu & Sốt mạ (sốt lòng gà)',
        items: [
          'Bộ lòng mề gà làm sạch cắt hạt lựu vừa ăn',
          '1 củ hành tây trắng thái khoanh mỏng ngâm đá lạnh khử hăng giòn ngọt',
          '1 bó rau răm tươi thái nhỏ (rau thơm đặc trưng của cơm gà Hội An)',
          '2 quả chanh tươi vắt lấy nước cốt, ớt sừng thái sợi chỉ',
          'Đu đủ xanh và cà rốt bào sợi ngâm giấm đường giòn sần sật',
          'Tương ớt xào Hội An (ớt rim dẻo cay ngọt đặc sản phố Hội)',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Luộc gà ta da vàng óng & Lấy nước dùng ngọt',
        time: '25 - 30 phút',
        heat: 'Lửa vừa rồi hạ nhỏ',
        goal: 'Gà chín tới mềm ngọt mọng nước, da vàng căng bóng tự nhiên, nước luộc gà ngọt thanh béo ngậy',
        actionPoints: [
          'Gà ta làm sạch, xát muối hạt và gừng khử mùi hôi, rửa sạch để ráo.',
          'Thoa đều nước cốt nghệ tươi lên khắp da gà để khi luộc da gà lên màu vàng óng ánh đẹp mắt.',
          'Đặt gà vào nồi lớn, đổ nước ngập 2/3 thân gà, thêm 1 củ gừng đập dập, 3 củ hành tím và 1 thìa cà phê muối hạt.',
          'Đun sôi bùng rồi hạ lửa nhỏ đun liu riu trong 15 phút, sau đó tắt bếp đậy vung ủ gà thêm 10 phút cho thịt gà chín thấu từ bên trong mà không bị rách da.',
          'Vớt gà ra thả ngay vào thau nước đá lạnh 5 phút để da gà săn giòn sần sật, sau đó vớt ra để ráo.',
        ],
        description:
          'Thoa nước cốt nghệ lên da gà rồi luộc cùng gừng và hành tím trên lửa liu riu 15 phút, ủ thêm 10 phút. Vớt gà ngâm nước đá lạnh cho da giòn săn.',
        tip: 'Ủ gà trong nồi nước nóng sau khi tắt bếp giúp thịt gà giữ trọn độ ẩm mọng nước ngọt lịm mà không bị khô bã.',
      },
      {
        step: 2,
        title: 'Xào gạo với mỡ gà & Nấu hạt cơm vàng ươm tơi xốp',
        time: '30 phút',
        heat: 'Nồi cơm điện hoặc nấu lửa nhỏ',
        goal: 'Hạt cơm bóng bẩy ngấm mỡ gà, vàng ươm mùi nghệ, dẻo thơm tơi xốp từng hạt',
        actionPoints: [
          'Gạo vo sạch, để ráo nước hoàn toàn.',
          'Cho mỡ gà vào chảo đun nóng cho chảy mỡ vàng thơm, vớt tóp mỡ ra.',
          'Cho tỏi băm vào phi thơm trên chảo mỡ gà, trút toàn bộ gạo đã ráo vào đảo đều tay trên lửa vừa trong 5 phút.',
          'Khi hạt gạo khô ráo, săn chắc và chuyển sang màu trong đục óng ánh mỡ gà thì tắt bếp.',
          'Đổ gạo vào nồi cơm điện, đong phần nước luộc gà phía trên (chứa lớp váng mỡ gà vàng) vào xâm xấp mặt gạo theo tỷ lệ nước như nấu cơm bình thường.',
          'Bật nút nấu cơm cho đến khi cơm chín thơm nức, dùng đũa xới tơi hạt cơm vàng óng.',
        ],
        description:
          'Thắng mỡ gà phi thơm tỏi băm rồi xào săn hạt gạo trong veo. Đem gạo nấu bằng chính nước luộc gà vàng béo cho hạt cơm tơi xốp, thơm lừng.',
        tip: 'Rang xào gạo với mỡ gà trước khi nấu là bí quyết tối thượng của các quán cơm gà Bà Buội, cơm gà Nga Hội An giúp hạt cơm không bị nhão nát mà căng mọng, săn dẻo bóng bẩy.',
      },
      {
        step: 3,
        title: 'Nấu sốt mạ lòng gà đậm đà & Bóp gỏi gà xé phay rau răm',
        time: '15 phút',
        heat: 'Lửa vừa rồi hạ liu riu',
        goal: 'Gỏi gà chua ngọt giòn the rau răm, chén sốt mạ lòng gà sánh nâu óng ả thơm lừng chan cơm',
        actionPoints: [
          'Nấu sốt mạ: Phi thơm hành tỏi băm với 1 thìa dầu màu điều, cho lòng mề gà cắt nhỏ vào xào săn. Nêm 1 thìa nước mắm ngon, 1 thìa đường, tiêu xay và 1/2 thìa ngũ vị hương. Trút 1 bát con nước luộc gà vào ninh liu riu 10 phút cho lòng chín mềm, nước sốt sánh mịn đậm đà.',
          'Lọc lấy phần thịt đùi và ức gà xé miếng dài vừa ăn (giữ lại một phần xương ninh canh).',
          'Hành tây thái mỏng ngâm nước đá có pha chút giấm 10 phút cho giòn ngọt hết hăng, vớt ra vắt ráo.',
          'Cho thịt gà xé, hành tây và rau răm thái nhỏ vào âu lớn.',
          'Rưới nước trộn gỏi gồm: 1 thìa nước cốt chanh, 1 thìa cà phê đường, 1/2 thìa cà phê muối tiêu sọ và chút ớt sừng sợi.',
          'Dùng tay đeo găng bóp nhẹ đều tay cho thịt gà ngấm đều vị chua thanh dịu ngọt, thơm nồng mùi rau răm.',
        ],
        description:
          'Xào lòng mề gà với hành tỏi, ngũ vị hương và nước luộc gà ninh sánh sệt làm sốt mạ. Thịt gà luộc xé miếng bóp thấu cùng hành tây giòn ngọt, rau răm, muối tiêu chanh tươi.',
      },
      {
        step: 4,
        title: 'Bày đĩa cơm gà Phố Hội & Thưởng thức trọn vị',
        time: '5 phút',
        heat: 'Thưởng thức khi cơm còn nóng hổi',
        goal: 'Đĩa cơm gà Hội An đẹp mắt: hạt cơm vàng ruộm, gỏi gà xé phủ rau răm xanh mát, đồ chua đu đủ và tương ớt Hội An',
        actionPoints: [
          'Xới cơm gà vàng óng ra bát con nén nhẹ rồi úp ngược ra giữa đĩa tròn tạo thành khối tròn đầy đặn.',
          'Xếp gỏi gà xé bóp rau răm hành tây lên một bên đĩa.',
          'Gắp đồ chua đu đủ cà rốt bào sợi giòn chua ngọt xếp bên cạnh.',
          'Múc một muỗng tương ớt rim Hội An dẻo đỏ au cay ngọt đặc trưng đặt bên góc đĩa.',
          'Múc chén sốt mạ lòng gà sánh thơm để bên cạnh để thực khách tự rưới đều lên mặt cơm khi ăn.',
          'Kèm theo một chén nước luộc gà nóng rắc hành ngò thái nhỏ làm nước súp tráng miệng.',
        ],
        description:
          'Úp bát cơm vàng óng ra đĩa, bày gỏi gà xé rau răm, đu đủ ngâm chua ngọt, muỗng tương ớt xào Hội An và chén sốt mạ lòng gà thơm lừng.',
        tip: 'Cơm gà Hội An không thể thiếu tương ớt xào dẻo ngọt đặc sản Phố Hội và chén sốt mạ sánh kẹo đậm đà tạo nên hương vị trứ danh mê hoặc lòng người.',
      },
    ],
    chefSecret:
      '3 bí quyết gia truyền tạo nên đĩa cơm gà Hội An nức tiếng: 1. Gạo nấu cơm nhất định phải được xào săn cùng mỡ gà tươi thắng nóng và tỏi phi trước khi nấu bằng nước luộc gà béo ngậy để từng hạt cơm căng bóng vàng óng, tơi xốp mà không bị nát; 2. Thịt gà sau khi luộc phải ngâm nước đá cho da giòn sần sật, xé tay bóp thấu với hành tây ngâm đá giòn ngọt và rau răm dậy mùi đặc trưng; 3. Nước sốt mạ ninh từ lòng mề gà sóng sánh đậm đà kết hợp với tương ớt rim Hội An cay ngọt dẻo quánh chính là nét quyến rũ độc nhất vô nhị của ẩm thực xứ Quảng.',
    recommendedSauce:
      'Chén sốt mạ lòng gà sánh sệt nóng hổi, tương ớt rim Hội An dẻo kẹo cay ngọt và chén nước mắm gừng ớt tỏi chua ngọt thanh vị.',
  },
  'xoi-xeo-ha-noi': {
    dishId: 'xoi-xeo-ha-noi',
    dishName: 'Xôi Xéo Hà Nội Ruốc Hành Phi',
    seoTitle: 'Cách Nấu Xôi Xéo Hà Nội Dẻo Thơm Óng Ả Chuẩn Vị Truyền Thống Phố Cổ',
    prepTime: '6 - 8 giờ (ngâm gạo & đậu)',
    cookTime: '45 - 50 phút (đồ 2 lửa)',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Nguyên liệu nếp xôi (Hạt dẻo vàng óng)',
        items: [
          '500g gạo nếp cái hoa vàng hạt mẩy tròn đều',
          '1 củ nghệ tươi già giã lấy nước cốt (hoặc 1 thìa cà phê tinh bột nghệ nguyên chất)',
          '1 thìa cà phê muối hạt',
          '3 - 4 thìa canh mỡ gà ta thắng nguyên chất',
        ],
      },
      {
        category: 'Nguyên liệu đậu xanh (Mịn mượt tơi xốp)',
        items: [
          '300g đậu xanh tiêu cà vỏ (loại hạt nhỏ thơm bùi)',
          '1/2 thìa cà phê muối tinh',
          '1 thìa canh mỡ gà nóng (trộn khi giã)',
        ],
      },
      {
        category: 'Hành phi & mỡ gà gia truyền',
        items: [
          '200g mỡ gà ta lá (thắng lấy nước mỡ gà vàng sóng sánh)',
          '250g hành tím khô Bắc (hành Kinh Môn hoặc hành ta thái mỏng)',
          'Dầu ăn hoặc mỡ lợn để phi ngập hành',
        ],
      },
      {
        category: 'Thức ăn kèm truyền thống (Tùy chọn)',
        items: [
          'Ruốc thịt heo (chà bông) sao tơi sợi nhỏ',
          'Chả quế nướng thơm giòn hoặc giò lụa thái lát',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Ngâm gạo nếp tạo màu vàng nghệ tự nhiên & ngâm đậu xanh',
        time: '6 - 8 giờ (ngâm qua đêm)',
        heat: 'Nhiệt độ phòng',
        goal: 'Hạt gạo no nước, ngấm đều màu vàng óng ả từ nghệ tự nhiên, hạt đậu xanh mềm tơi',
        actionPoints: [
          'Nghệ tươi già cạo vỏ, giã nát rồi hòa cùng 1 bát nước ấm, lọc qua rây lấy nước cốt nghệ trong vắt (không để lại bã lợn cợn).',
          'Gạo nếp cái hoa vàng vo nhẹ tay 2 lần cho sạch bụi cám, tuyệt đối không chà xát mạnh làm vỡ hạt gạo.',
          'Ngâm gạo nếp cùng nước cốt nghệ, hòa thêm 1 thìa cà phê muối hạt trong 6 - 8 tiếng (hoặc qua đêm). Muối giúp hạt xôi sau khi đồ đậm đà và lâu thiu.',
          'Đậu xanh tiêu đãi sạch, nhặt bỏ hạt sâu lép rồi ngâm nước ấm 3 - 4 tiếng với 1/2 thìa cà phê muối tinh.',
          'Sau khi ngâm đủ thời gian, đổ nếp và đậu ra rổ riêng, xả nhẹ nước lạnh rồi để ráo nước hoàn toàn trong 15 - 20 phút.',
        ],
        description:
          'Gạo nếp cái hoa vàng vo nhẹ, ngâm cùng nước cốt nghệ tươi pha loãng và 1 thìa muối hạt khoảng 6 - 8 tiếng cho gạo ngậm đủ nước và nhuộm màu vàng rơm tự nhiên. Đậu xanh đãi sạch ngâm nước ấm 3 - 4 tiếng cho mềm.',
        tip: 'Chỉ dùng một lượng nước cốt nghệ vừa đủ để hạt nếp có màu vàng ươm dịu mắt như hoa cúc, tránh cho quá nhiều nghệ sẽ khiến xôi bị nồng hắc mùi nghệ tươi.',
      },
      {
        step: 2,
        title: 'Hấp đậu xanh, giã nhuyễn & nắm đậu xanh thành quả (Bí quyết cốt lõi)',
        time: '25 phút',
        heat: 'Lửa vừa (hơi nước bốc đều)',
        goal: 'Đậu xanh chín bở tơi, giã nhuyễn mịn như nhung và nắm chặt thành quả chắc nịch',
        actionPoints: [
          'Trộn đều đậu xanh đã ráo nước với một chút xíu muối tinh.',
          'Cho đậu vào xửng hấp, dùng ngón tay dùi 4 - 5 lỗ thông hơi để hơi nước bốc lên đều khắp xửng. Hấp khoảng 20 - 25 phút đến khi miết thử hạt đậu thấy tan nát mịn không còn sượng.',
          'Trút ngay đậu ra cối giã hoặc âu lớn khi còn đang nóng bốc khói nghi ngút. Dùng chày giã thật nhuyễn hoặc dùng muôi miết mạnh tay liên tục đến khi đậu mịn mượt không còn hạt lợn cợn.',
          'Rưới 1 thìa canh mỡ gà nóng vào trộn đều cho đậu ngậy và tăng độ kết dính.',
          'Khi đậu còn nóng ấm, dùng hai lòng bàn tay nắm và nén thật chặt tay thành 2 - 3 khối tròn/bầu dục chắc nịch (cỡ quả bưởi nhỏ hoặc quả bóng tennis). Nắm càng chặt thì khi thái xéo lát đậu càng mỏng dính, không bị vỡ vụn.',
        ],
        description:
          'Đậu xanh hấp chín bở, trút ra khi còn đang bốc khói nóng hổi rồi giã thật nhuyễn mịn cùng chút mỡ gà. Nhanh tay dùng lòng bàn tay nén chặt thành những khối tròn chắc nịch.',
        tip: 'Phải giã và nắm đậu ngay khi đậu còn đang nóng bốc khói. Nếu để đậu nguội, đậu sẽ bị khô tơi và hoàn toàn không thể nén thành quả được.',
      },
      {
        step: 3,
        title: 'Thắng mỡ gà vàng ươm & phi hành khô giòn tan thơm nức',
        time: '20 phút',
        heat: 'Lửa nhỏ liu riu (thắng mỡ) & Lửa vừa (phi hành)',
        goal: 'Nước mỡ gà vàng óng thơm ngậy, hành phi màu vàng cánh gián giòn rụm không cháy đắng',
        actionPoints: [
          'Mỡ gà ta rửa sạch với chút muối và gừng, thái hạt lựu hoặc miếng nhỏ. Cho vào chảo gang cùng 2 thìa canh nước lọc, đun lửa vừa cho nước cạn và mỡ bắt đầu tiết ra.',
          'Hạ lửa nhỏ liu riu đun đến khi tóp mỡ gà teo vàng ruộm thì vớt tóp ra, chắt lấy phần mỡ gà lỏng vàng ươm thơm nức mũi.',
          'Hành tím khô bóc vỏ, dùng dao sắc thái lát đều tay theo chiều dọc củ hành (độ dày đồng đều khoảng 1.5mm). Rải hành ra rổ phơi gió hoặc hong quạt 30 phút cho se nhẹ mặt.',
          'Đun sôi chảo dầu ăn/mỡ gà trên lửa vừa, thả hành vào phi. Đảo nhẹ tay đều đặn theo một chiều.',
          'Khi thấy hành chuyển sang màu vàng rơm nhạt (khoảng 80% độ vàng) và cánh hành hơi co lại thì lập tức tắt bếp và dùng muôi thủng vớt ngay ra rây lót giấy thấm dầu.',
          'Sức nóng của dầu còn đọng lại sẽ giúp hành tiếp tục chuyển sang màu vàng cánh gián hoàn hảo, giòn tan rôm rốp và để cả tuần vẫn giòn thơm.',
        ],
        description:
          'Mỡ gà rửa sạch đem thắng lửa nhỏ lấy nước mỡ gà vàng óng. Hành tím thái lát mỏng phơi se mặt rồi phi trên lửa vừa đến khi chớm ngả vàng rơm thì vớt ra ngay vào rây thấm dầu để hành tự vàng giòn cánh gián.',
        tip: 'Không đợi hành vàng sẫm trong chảo mới vớt ra vì dầu nóng sẽ làm hành bị cháy khét và đắng ngắt. Vớt lúc hành vừa chớm vàng rơm nhạt là chuẩn nhất.',
      },
      {
        step: 4,
        title: 'Kỹ thuật đồ xôi 2 lửa - Bí quyết hạt nếp dẻo quánh óng ả',
        time: '35 - 40 phút (2 lần đồ)',
        heat: 'Lửa to nước sôi sùng sục',
        goal: 'Từng hạt nếp căng mẩy bóng bẩy, dẻo mềm không dính bết, để từ sáng đến tối vẫn mềm thơm',
        actionPoints: [
          'Đồ lửa 1 (25 - 30 phút): Đun sôi nước trong nồi đồ xôi. Trút gạo nếp đã ráo nước vào xửng, dùng đũa xăm nhiều lỗ thông hơi từ đáy lên. Đậy nắp kín, đồ khoảng 25 - 30 phút trên lửa lớn đến khi hạt nếp chín tới khoảng 80%, hạt gạo nở trong đều.',
          'Dỡ xôi ra mẹt hoặc mâm sạch, dùng đũa xới tơi đều và quạt cho xôi bay bớt hơi nước. Rưới 2 thìa canh mỡ gà vàng óng vào xôi, dùng đũa đảo đều để mỡ gà bao bọc lấy từng hạt nếp căng mọng.',
          'Để xôi nguội tự nhiên khoảng 20 - 30 phút.',
          'Đồ lửa 2 (10 - 15 phút): Trước khi ăn, cho xôi trở lại xửng hấp thêm 10 - 15 phút. Lúc này hạt nếp hút trọn mỡ gà, trở nên dẻo quánh, bóng mượt như ngọc và dậy mùi thơm nức mũi.',
        ],
        description:
          'Gạo nếp đồ lửa 1 khoảng 25 phút cho chín tới. Dỡ xôi ra mâm, quạt cho bay bớt hơi rồi rưới mỡ gà vào trộn đều. Trước khi ăn cho xôi vào đồ lửa 2 thêm 15 phút giúp xôi dẻo quánh, hạt nếp óng ả và để cả ngày không bị lại gạo.',
        tip: 'Quy trình "Đồ xôi 2 lửa" là bí kíp gia truyền của các gánh xôi phố cổ Hà Nội. Hạt nếp được thẩm thấu mỡ gà giữa 2 lần đồ sẽ mềm dẻo tuyệt đối mà hạt xôi vẫn tơi rời từng hạt, không hề bị nát hay lại gạo.',
      },
      {
        step: 5,
        title: 'Thao tác thái xéo đậu xanh & hoàn thiện gói xôi ấm lòng',
        time: '3 phút',
        heat: 'Xôi và mỡ gà đang nóng hổi',
        goal: 'Đĩa/gói xôi xéo chuẩn mực: nếp vàng ươm, đậu xanh mỏng mịn phủ kín, mỡ gà óng ánh và hành phi ngập tràn',
        actionPoints: [
          'Xới một muôi xôi xéo nóng hổi ra đĩa hoặc đặt lên lá chuối/lá sen tươi.',
          'Tay trái cầm chặt quả đậu xanh, tay phải dùng con dao bài sắc bén đặt nghiêng góc dao, thoăn thoắt thái từng lát đậu mỏng tang rơi xéo phủ đều kín mặt xôi.',
          'Dùng thìa múc một muôi mỡ gà nóng rưới đều lên trên lớp đậu xanh (mỡ gà nóng lập tức làm đậu xanh mềm ngậy và thơm phức).',
          'Rắc một nhúm hành phi giòn rụm màu vàng cánh gián lên trên cùng.',
          'Thêm chút ruốc thịt heo xé sợi và vài lát chả quế nướng thơm nếu thích.',
        ],
        description:
          'Xới xôi nóng ra lá hoặc đĩa, cầm quả đậu xanh dùng dao bén thái xéo từng lát mỏng mịn phủ kín xôi. Rưới muôi mỡ gà vàng óng lên trên, rắc hành phi giòn tan và thêm ruốc thịt chả quế thưởng thức ngay.',
        tip: 'Động tác dùng dao thái xéo quả đậu xanh tạo nên những lát đậu mịn tơi như lụa tan chảy ngay khi chạm vào đầu lưỡi - đó chính là nguồn gốc cái tên "Xôi Xéo" trứ danh đất Hà Thành.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng tạo nên linh hồn Xôi Xéo Hà Nội: 1. Đồ xôi 2 lửa (trộn mỡ gà ở giữa 2 lần đồ giúp xôi để cả ngày vẫn dẻo mềm không cứng lại gạo); 2. Giã và nén đậu xanh khi còn bốc khói nóng rồi dùng dao bén thái xéo thật mỏng; 3. Dùng mỡ gà ta thắng nguyên chất thay cho dầu ăn để rưới lên xôi tạo vị béo ngậy đặc trưng không thể thay thế.',
    recommendedSauce:
      'Mỡ gà ta nguyên chất rưới đẫm, ăn kèm ruốc thịt heo tự làm, chả quế nướng giòn thơm hoặc giò lụa truyền thống.',
  },

  'com-rang-dua-bo': {
    dishId: 'com-rang-dua-bo',
    dishName: 'Cơm Rang Dưa Bò Hà Nội',
    seoTitle: 'Cách Làm Cơm Rang Dưa Bò Hạt Cơm Săn Giòn, Thơm Ngon Chuẩn Vị',
    prepTime: '20 phút',
    cookTime: '15 - 20 phút',
    difficulty: 'Trung bình',
    servings: '2 - 3 người',
    ingredients: [
      {
        category: 'Cơm nguội & Lòng đỏ trứng vàng óng',
        items: [
          '3 - 4 bát con cơm nguội (nấu hơi ráo nước, để ngăn mát tủ lạnh ít nhất 4 tiếng hoặc qua đêm để hạt cơm se mặt)',
          '2 quả trứng gà ta tươi (1 lòng đỏ bóp đều trực tiếp với cơm nguội để tạo màu vàng ruộm, 1 quả đánh tan rang cùng cơm)',
          '1/2 thìa cà phê hạt nêm (trộn đều cùng cơm và lòng đỏ trứng cho đượm vị)',
        ],
      },
      {
        category: 'Thịt bò tươi & Dưa cải muối chua giòn',
        items: [
          '250g - 300g thịt thăn bò tươi hoặc bắp bò hoa (thái lát thật mỏng ngang thớ)',
          '200g - 250g dưa cải muối chua (chọn phần cọng/cuống dày giòn sần sật, xả nhẹ nước rồi vắt thật kiệt nước)',
          '1 thìa canh dầu hào thượng hạng (tạo độ bóng và vị ngọt đượm đậm đà cho thịt bò)',
          '1 thìa cà phê nước tương (xì dầu thượng hạng)',
          '1 thìa canh dầu ăn (bí quyết vàng bao bọc thớ thịt, khóa ẩm giúp bò mềm ngọt không bị dai)',
          '1/2 thìa cà phê đường kính hoặc đường thốt nốt (cân bằng vị chua gắt của dưa muối)',
          '1/2 thìa cà phê hạt tiêu sọ xay thơm nồng',
        ],
      },
      {
        category: 'Hương liệu & Gia vị rang cơm bí truyền',
        items: [
          '1 củ tỏi ta & 4 củ hành tím khô (băm nhỏ, chia đôi để xào dưa bò và rang cơm)',
          '3 nhánh hành hoa tươi (rửa sạch cắt nhỏ) & vài cọng ngò rí',
          '2 - 3 thìa canh mỡ heo sạch (dùng mỡ heo hạt cơm sẽ bóng bẩy, thơm nức mũi chuẩn vị quán xá phố cổ)',
          '1 thìa canh nước mắm cá cơm truyền thống hảo hạng (rưới quanh viền thành chảo nóng già dậy mùi)',
          'Bí quyết quán xá: 2 thìa canh cơm chiên phồng giòn rụm hoặc cốm chiên giòn (trộn cùng cơm săn ở phút cuối)',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế thịt bò và ướp mềm mọng với dầu ăn',
        time: '15 phút',
        heat: 'Nhiệt độ phòng (Ướp ngấm gia vị)',
        goal: 'Thịt bò thái mỏng ngang thớ, ngấm sâu gia vị, khóa trọn nước ngọt tự nhiên bên trong',
        actionPoints: [
          'Thịt bò dùng khăn giấy sạch thấm khô bề mặt, đặt lên thớt dùng dao thật sắc thái lát thật mỏng ngang thớ thịt. Dùng sống dao dần nhẹ lên các miếng thịt để thớ thịt nở mềm tơi.',
          'Cho thịt bò vào tô ướp cùng: 1 thìa cà phê tỏi băm nhỏ, 1 thìa canh dầu hào, 1 thìa cà phê nước tương, 1/2 thìa cà phê hạt nêm, 1/2 thìa cà phê tiêu xay và đặc biệt là 1 thìa canh dầu ăn.',
          'Dùng tay bóp và trộn đều nhẹ nhàng trong 1 - 2 phút rồi để thịt nghỉ 15 phút. Lớp màng dầu ăn bao bọc quanh từng sợi cơ sẽ khóa chặt độ ẩm, giúp thịt bò khi xào trên lửa lớn giữ nguyên độ mềm mọng, không bao giờ bị dai hay khô xác.',
        ],
        description:
          'Thịt bò thái mỏng ngang thớ, dần nhẹ cho mềm. Ướp thịt với tỏi băm, dầu hào, nước tương, hạt nêm, tiêu xay và 1 thìa canh dầu ăn trong 15 phút để giữ thịt luôn mềm ngọt mọng nước.',
        tip: 'Tuyệt đối không ướp nước mắm trực tiếp vào thịt bò tươi sống vì muối trong nước mắm sẽ rút cạn nước ngọt của thịt, khiến thịt bò bị dai cứng và xỉn màu thâm đen khi xào.',
      },
      {
        step: 2,
        title: 'Sơ chế dưa cải chua & kỹ thuật bóp cơm vàng óng ánh',
        time: '10 phút',
        heat: 'Nhiệt độ thường',
        goal: 'Dưa chua giòn rụm bớt mặn gắt; từng hạt cơm tơi rời và được áo một lớp lòng đỏ trứng vàng ươm mượt mà',
        actionPoints: [
          'Dưa cải chua rửa sơ qua 1 - 2 lần nước lọc để giảm bớt độ mặn và độ chua gắt của nước muối dưa. Dùng tay vắt thật kiệt ráo nước rồi thái miếng vừa ăn khoảng 2cm (ưu tiên phần cọng giòn).',
          'Lấy 3 - 4 bát cơm nguội từ ngăn mát tủ lạnh ra, dùng tay đeo găng bóp nhẹ nhàng cho từng hạt cơm tơi rời rạc hoàn toàn, không để vón cục dính vào nhau.',
          'Tách lấy 1 lòng đỏ trứng gà ta cho vào âu cơm cùng 1/2 thìa cà phê hạt nêm. Dùng tay trộn và bóp đều để lớp lòng đỏ trứng gà bao bọc phủ kín một lớp màng vàng ruộm mỏng quanh từng hạt cơm.',
        ],
        description:
          'Dưa cải chua rửa sơ, vắt kiệt ráo nước rồi thái khúc vừa ăn. Cơm nguội lấy trong tủ lạnh ra bóp tơi hạt, trộn đều với 1 lòng đỏ trứng gà và chút hạt nêm để hạt cơm vàng óng và đậm đà.',
        tip: 'Cơm nấu hơi khô một chút và để tủ lạnh qua đêm là yếu tố then chốt. Hơi lạnh giúp hạt cơm se mặt, cứng cáp. Khi bóp lòng đỏ trứng gà vào, trứng bám chặt ngoài vỏ giúp cơm khi rang vừa vàng ruộm tự nhiên vừa không bị dính chảo.',
      },
      {
        step: 3,
        title: 'Xào thịt bò với dưa chua lửa lớn (Xào riêng, tuyệt đối không xào chung với cơm)',
        time: '5 phút',
        heat: 'Lửa cực đại (High heat)',
        goal: 'Thịt bò chín tới mềm mọng ngập sốt đậm đà, dưa chua xào săn giòn sần sật quyện vị chua ngọt thanh tao',
        actionPoints: [
          'Bắc chảo lên bếp mở mức lửa lớn nhất cho chảo thật nóng già. Cho 1 thìa canh dầu ăn vào tráng đều chảo rồi phi thơm 1/2 lượng tỏi hành băm.',
          'Trút toàn bộ thịt bò đã ướp vào chảo, đảo thật nhanh tay liên tục ở lửa lớn trong khoảng 1 đến 1.5 phút cho thịt bò vừa chín tái (vừa hết màu đỏ) thì trút ngay ra đĩa riêng.',
          'Vẫn dùng chảo đó, thêm 1 thìa cà phê dầu ăn phi thơm phần tỏi hành băm còn lại. Cho dưa chua đã vắt ráo vào xào nhanh trên lửa lớn trong 2 phút cho cọng dưa săn giòn lại.',
          'Nêm vào dưa 1/2 thìa cà phê đường và 1 thìa cà phê dầu hào để làm dịu độ chua gắt. Đổ đĩa thịt bò tái cùng toàn bộ nước xào thịt tiết ra trở lại chảo dưa, đảo nhanh tay trong 30 giây cho ngấm đều gia vị rồi tắt bếp, múc ra đĩa giữ ấm.',
        ],
        description:
          'Phi thơm hành tỏi trên lửa lớn, xào nhanh thịt bò trong 1 phút cho vừa chín tái rồi trút ra đĩa riêng. Phi tỏi xào săn dưa chua với chút đường và dầu hào, sau đó trút thịt bò vào đảo đều 30 giây rồi tắt bếp múc ra đĩa.',
        tip: 'Nguyên tắc bất di bất dịch: Phải xào dưa bò riêng và giữ lửa lớn nhất! Nếu xào chung với cơm ngay từ đầu, nước từ dưa chua và thịt bò sẽ ngấm vào làm cơm bị ướt nhão, không thể nào rang giòn được, đồng thời thịt bò sẽ bị ninh lâu dai ngoách.',
      },
      {
        step: 4,
        title: 'Kỹ thuật rang cơm hạt săn nổ lách tách & Bí quyết giòn rụm quán xá',
        time: '12 - 15 phút',
        heat: 'Lửa vừa lớn đến lớn',
        goal: 'Từng hạt cơm săn bóng, khô ráo vàng óng, bên ngoài giòn tan rôm rốp, bên trong dẻo thơm ngậy mỡ heo',
        actionPoints: [
          'Dùng chảo gang sâu lòng hoặc chảo chống dính dày đáy, đun thật nóng chảo rồi cho 2 - 3 thìa canh mỡ heo sạch vào láng đều khắp mặt chảo cho nóng già.',
          'Đổ toàn bộ cơm nguội đã trộn lòng đỏ trứng vào chảo, dàn đều cơm ra mặt chảo rồi dùng muôi miết nhẹ hạt cơm xuống đáy chảo, đảo đều tay liên tục ở lửa vừa lớn.',
          'Đập quả trứng thứ hai vào một góc chảo, dùng đũa đánh tan nhanh rồi đảo đều quyện vào mẻ cơm. Các sợi trứng trắng vàng li ti sẽ bám ôm lấy từng hạt cơm tạo màu sắc cực kỳ bắt mắt.',
          'Đảo và miết cơm liên tục từ 10 - 12 phút để toàn bộ hơi ẩm thoát hết. Hạt cơm bắt đầu săn chắc lại, khô ráo và phát ra tiếng nổ lách tách giòn tan vui tai trên mặt chảo.',
          'Bí quyết vàng quán xá: Trút 2 thìa canh cơm chiên giòn nở phồng (hoặc cốm chiên giòn rụm) vào chảo cơm rang, đảo đều tay thêm 2 phút để tạo kết cấu "hạt mềm dẻo quyện hạt giòn rụm" cực kỳ đã miệng.',
        ],
        description:
          'Làm nóng chảo với mỡ heo, cho cơm đã trộn lòng đỏ vào miết và đảo đều ở lửa vừa lớn. Đập thêm 1 quả trứng vào đảo đều cho trứng bám quanh hạt cơm. Rang đều tay 10 - 15 phút cho hạt cơm săn khô và nổ lách tách. Trộn thêm 2 thìa cơm chiên giòn cho tăng độ rôm rốp.',
        tip: 'Dùng mỡ heo sạch để rang cơm sẽ giúp hạt cơm bóng bẩy, thơm ngậy béo bùi đặc trưng của ẩm thực Hà Nội xưa mà không loại dầu ăn công nghiệp nào có thể thay thế được.',
      },
      {
        step: 5,
        title: 'Rưới nước mắm dậy mùi thành chảo & Thưởng thức trọn vẹn đĩa cơm nóng hổi',
        time: '3 phút',
        heat: 'Chảo thật nóng',
        goal: 'Mùi nước mắm bốc hơi thơm nức mũi thấm trọn hạt cơm, đĩa cơm vàng ruộm phối cùng dưa bò nóng hổi',
        actionPoints: [
          'Khi cơm đã đạt độ săn giòn hoàn hảo, nghiêng nhẹ chảo rồi rưới 1 thìa canh nước mắm ngon quanh mép thành chảo đang nóng già (nhiệt độ kim loại cực cao sẽ khiến nước mắm bốc hơi ngay lập tức, hương thơm ngào ngạt phủ trùm lấy mẻ cơm mà hạt cơm hoàn toàn không bị ướt).',
          'Đảo thật nhanh tay trong 30 giây cho cơm hấp thụ trọn vẹn hương thơm nức mũi của nước mắm, sau đó rắc toàn bộ hành lá cắt nhỏ và chút tiêu xay thơm nồng vào đảo đều 20 giây rồi tắt bếp.',
          'Múc cơm rang vàng ruộm, săn giòn ra đĩa lớn. Gắp phần thịt bò xào dưa chua nóng hổi kèm nước sốt sền sệt rưới lên chóp cơm (hoặc đặt gọn gàng một bên đĩa cơm), điểm xuyết vài nhánh ngò rí và vài lát ớt tươi.',
          'Dọn kèm một chén nước tương (xì dầu) tỏi ớt xắt cay nồng và một bát canh nước dùng thanh ngọt nóng hổi để thưởng thức trọn vẹn.',
        ],
        description:
          'Rưới nước mắm quanh viền thành chảo nóng để dậy mùi thơm nức, đảo nhanh với hành hoa và tiêu xay rồi tắt bếp. Múc cơm vàng óng ra đĩa, xếp thịt bò xào dưa chua lên trên, rắc tiêu ngò rí. Ăn kèm xì dầu tỏi ớt và bát nước dùng nóng hổi.',
        tip: 'Kỹ thuật rưới nước mắm lên thành chảo (chứ không rưới trực tiếp lên cơm) là bí quyết nhà nghề của các đầu bếp: Hơi nóng làm bốc hơi phần nước của mắm chỉ giữ lại tinh dầu thơm nức, giúp mẻ cơm rang ngát hương mà vẫn giữ nguyên độ săn giòn tuyệt đối.',
      },
    ],
    chefSecret:
      '4 nguyên tắc vàng tạo nên đĩa Cơm Rang Dưa Bò Hà Nội giòn tơi chuẩn vị quán xá: 1. Cơm nguội nấu khô ráo, để tủ lạnh qua đêm và bóp đều với 1 lòng đỏ trứng gà tạo màu vàng óng tự nhiên; 2. Luôn xào thịt bò dưa chua riêng trên lửa lớn nhất trong 1 - 2 phút, tuyệt đối không xào chung với cơm rang từ đầu; 3. Dùng mỡ heo sạch rang trên chảo nóng già và đảo miết liên tục đến khi cơm khô săn nổ lách tách; 4. Trộn thêm một nắm nhỏ cơm chiên giòn phồng rụm ở những phút cuối để tạo kết cấu giòn tan đưa miệng không thể cưỡng lại.',
    recommendedSauce:
      'Nước tương (xì dầu) dầm ớt xiêm cay nồng và vài lát tỏi mỏng, ăn kèm một bát nước dùng bò thanh ngọt rắc chút hành hoa bốc khói.',
  },
  'chao-suon-sun-quay': {
    dishId: 'chao-suon-sun-quay',
    dishName: 'Cháo Sườn Sụn Quẩy Giòn Ruốc Thịt Hà Nội',
    seoTitle: 'Cách Nấu Cháo Sườn Sụn Hà Nội Sánh Mịn Chuẩn Vị Phố Cổ, Quẩy Giòn Rụm',
    prepTime: '20 - 30 phút (ngâm gạo & sơ chế sườn sụn)',
    cookTime: '45 - 60 phút (ninh sườn mềm & quấy cháo sánh mịn)',
    difficulty: 'Dễ',
    servings: '4 - 5 người ăn',
    ingredients: [
      {
        category: 'Gạo & sườn non hầm cháo',
        items: [
          '200g gạo tẻ ngon (chọn gạo tám thơm dẻo)',
          '50g gạo nếp cái hoa vàng (tạo độ dẻo quánh, thơm nức và sánh mịn)',
          '500g sườn sụn heo tươi non (chọn phần sụn đầu giòn trắng, nhiều thịt nạc)',
          '300g xương ống hoặc sườn non (hầm lấy nước dùng ngọt đậm đà tự nhiên)',
          '1 củ gừng tươi đập dập',
          '3 củ hành tím khô nướng thơm',
        ],
      },
      {
        category: 'Gia vị nêm nếm nước cháo',
        items: [
          '2 thìa canh nước mắm cốt truyền thống nguyên chất',
          '1 thìa cà phê muối hạt tinh',
          '1 thìa cà phê hạt nêm ngon',
          '1 thìa cà phê tiêu sọ đen hoặc trắng xay mịn (tiêu Bắc thơm nồng)',
          '1/2 thìa cà phê đường phèn (làm dịu ngọt thanh)',
        ],
      },
      {
        category: 'Topping ăn kèm chuẩn vị Hà Nội',
        items: [
          '100g ruốc thịt heo (chà bông heo) sao vàng thơm ngọt dịu',
          '5 - 7 chiếc quẩy giòn vàng rụm cắt khúc nhỏ',
          'Hành hoa, rau mùi (ngò rí) rửa sạch thái nhỏ',
          'Bột ớt khô hoặc tương ớt cay nồng truyền thống',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế & khử mùi sườn sụn, ninh lấy nước dùng ngọt thanh',
        time: '15 phút',
        heat: 'Lửa vừa rồi hạ liu riu',
        goal: 'Sườn sụn sạch tinh, không mùi tanh hôi, nước hầm ngọt trong veo',
        actionPoints: [
          'Sườn sụn và xương ống rửa với nước muối loãng, chặt miếng sườn sụn nhỏ vừa ăn (khoảng 2 - 3cm).',
          'Đun sôi nồi nước có vài lát gừng đập dập và 1 thìa muối hạt, cho sườn sụn và xương vào chần nhanh trong 3 phút để sủi sạch hết bọt bẩn và máu đọng thừa.',
          'Vớt sườn và xương ra, rửa xả thật sạch dưới vòi nước lạnh từng miếng.',
          'Cho xương ống và sườn sụn vào nồi cùng 2 lít nước lọc và 3 củ hành tím nướng. Đun sôi bùng, hớt sạch bọt rồi hạ lửa liu riu ninh khoảng 35 - 40 phút cho sườn sụn chín mềm nhưng vẫn giữ độ giòn sần sật đặc trưng. Vớt xương ống bỏ đi, giữ lại sườn sụn và phần nước hầm ngọt thanh.',
        ],
        description:
          'Chần sườn sụn và xương qua nước sôi gừng muối để khử sạch tạp chất. Rửa sạch lại rồi ninh cùng nước lọc và hành tím nướng trong 40 phút cho sườn mềm giòn và nước ngọt thanh.',
        tip: 'Chặt sườn sụn thành miếng nhỏ vừa ăn trước khi ninh giúp sụn nhanh mềm và khi múc vào bát cháo ăn rất vừa miệng, không bị cứng hay quá to.',
      },
      {
        step: 2,
        title: 'Bí quyết ngâm gạo & xay gạo nấu cháo sánh mịn như nhung',
        time: '15 phút (xay bột gạo)',
        heat: 'Nhiệt độ phòng',
        goal: 'Hạt gạo được ngâm mềm và xay vỡ nhỏ hạt mịn, không bị vón cục khi nấu',
        actionPoints: [
          'Trộn đều gạo tẻ và gạo nếp, vo nhẹ tay 2 lần cho sạch bụi cám, ngâm nước ấm trong 2 - 3 tiếng cho hạt gạo ngậm no nước nở mềm.',
          'Đổ gạo ra rổ để thật ráo nước.',
          'Cách nấu cháo sườn chuẩn Hà Nội: Cho gạo đã ráo vào cối máy xay sinh tố cùng 300ml nước dùng nguội, xay nhuyễn mịn (hoặc dùng bột gạo tẻ xay sẵn pha với nước ninh xương). Lọc hoặc dùng trực tiếp hỗn hợp gạo lỏng sánh mịn này để nấu.',
        ],
        description:
          'Gạo tẻ trộn gạo nếp vo sạch, ngâm 2 - 3 tiếng cho nở mềm rồi đem xay nhuyễn mịn với chút nước hầm xương. Bột gạo xay nhuyễn chính là linh hồn giúp cháo sánh mịn mượt mà như kem.',
        tip: 'Tỷ lệ vàng 4 phần gạo tẻ : 1 phần gạo nếp giúp cháo có độ quánh dẻo thơm ngát mà không hề bị đặc quánh hay tách nước khi để lâu.',
      },
      {
        step: 3,
        title: 'Quấy cháo sườn sánh mượt & nêm nếm gia vị đậm đà',
        time: '20 - 25 phút',
        heat: 'Lửa nhỏ liu riu',
        goal: 'Nồi cháo chín đều trong suốt, sánh mịn óng ả, sườn sụn quyện đều thơm lừng',
        actionPoints: [
          'Đun sôi nồi nước hầm sườn sụn trên bếp ở mức lửa vừa.',
          'Hạ lửa nhỏ, một tay từ từ rót phần bột gạo đã xay vào nồi, một tay dùng phới hoặc đũa lớn khuấy đều liên tục theo một chiều duy nhất để cháo không bị vón cục hay bén khét dưới đáy nồi.',
          'Cho phần sườn sụn non đã ninh mềm vào nồi cháo cùng nấu chung.',
          'Đun liu riu, khuấy nhẹ tay đều đặn trong 20 phút đến khi cháo chín trong, hạt bột chín nở căng mượt, sánh mịn như lụa.',
          'Nêm vào nồi: 2 thìa canh nước mắm cốt nhĩ thơm nức, 1 thìa cà phê hạt nêm, 1/2 thìa cà phê đường phèn và muối cho vừa khẩu vị đậm đà thanh tao của người Hà Nội.',
        ],
        description:
          'Từ từ rót bột gạo vào nồi nước hầm sườn đang sôi lăn tăn, khuấy đều tay theo một chiều để cháo sánh mịn không vón cục. Thả sườn sụn vào đun nhỏ lửa 20 phút cho cháo sánh mượt rồi nêm nước mắm ngon và gia vị.',
        tip: 'Luôn khuấy cháo theo MỘT CHIỀU DUY NHẤT và miết nhẹ sát đáy nồi. Điều này ngăn chặn tinh bột bị vỡ cấu trúc gây chảy nước (vữa cháo) và chống cháy đáy nồi cực kỳ hiệu quả.',
      },
      {
        step: 4,
        title: 'Múc cháo ra bát, hoàn thiện topping quẩy giòn & ruốc thịt',
        time: '5 phút',
        heat: 'Cháo luôn giữ nóng trên bếp',
        goal: 'Bát cháo sườn bốc khói nghi ngút, sụn giòn sần sật, ruốc thịt bông tơi, quẩy giòn rụm tan trong miệng',
        actionPoints: [
          'Quẩy giòn cắt khúc ngắn khoảng 1.5 - 2cm vừa ăn.',
          'Múc cháo sườn sụn nóng hổi, sánh mịn ra từng bát sâu lòng.',
          'Gắp vài miếng sườn sụn non giòn sần sật lên trên.',
          'Rắc một lớp ruốc thịt heo xao bông vàng tơi xốp, xếp quẩy giòn xung quanh thành bát.',
          'Rắc thêm thật nhiều tiêu sọ xay thơm nồng, chút hành hoa thái nhỏ và bột ớt khô cay tê đầu lưỡi.',
          'Thưởng thức ngay khi còn bốc khói ngùn ngụt, trộn nhẹ quẩy với cháo nóng để cảm nhận vị giòn rụm béo bùi.',
        ],
        description:
          'Múc cháo sườn sánh mịn nóng hổi ra bát, xếp sườn sụn, rắc ruốc thịt heo sao thơm, thả quẩy giòn cắt khúc, rắc tiêu xay và ớt bột. Thưởng thức ngay khi còn nóng hổi chuẩn vị Hà Nội.',
        tip: 'Nên cho quẩy vào sau cùng ngay trước khi ăn để quẩy giữ trọn độ giòn rụm, khi chấm đẫm vào thìa cháo sánh mịn sẽ tạo nên sự bùng nổ hương vị khó quên.',
      },
    ],
    chefSecret:
      '3 bí quyết gia truyền nấu Cháo Sườn Sụn Hà Nội chuẩn vị: 1. Ninh sườn sụn riêng với xương ống để lấy nước dùng ngọt tủy trong veo, sườn sụn mềm giòn sần sật không bị nát; 2. Pha tỷ lệ 4 tẻ : 1 nếp, ngâm mềm rồi xay nhuyễn với nước dùng để cháo sánh mịn màng như nhung lụa; 3. Khuấy cháo liên tục theo một chiều trên lửa nhỏ liu riu để cháo không bao giờ bị bén khét hay vữa nước. Ăn kèm quẩy giòn rụm và thật nhiều hạt tiêu sọ Bắc cay nồng nàn.',
    recommendedSauce:
      'Cháo sườn sụn ăn kèm quẩy giòn, ruốc thịt heo đậm đà, tiêu xay thơm nức mũi và chút ớt bột khô cay ấm bụng.',
  },
  'lau-rieu-cua-bap-bo': {
    dishId: 'lau-rieu-cua-bap-bo',
    dishName: 'Lẩu Riêu Cua Bắp Bò Sườn Sụn Hà Nội',
    seoTitle: 'Cách Nấu Lẩu Riêu Cua Bắp Bò Chua Cay Đậm Đà Chuẩn Vị Gia Đình',
    prepTime: '35 - 45 phút (lọc cua đồng, sơ chế bắp bò & sườn sụn)',
    cookTime: '45 - 50 phút (ninh sườn sụn & nấu nước lẩu riêu cua)',
    difficulty: 'Trung bình',
    servings: '4 - 6 người ăn',
    ingredients: [
      {
        category: 'Cua đồng & Nước dùng lẩu ngọt thanh',
        items: [
          '600g - 700g cua đồng tươi sống (chọn cua cái yếm dày, gạch vàng óng, nhiều thịt)',
          '500g sườn sụn heo non tươi giòn (chọn phần sụn đầu giòn trắng, nhiều thịt nạc)',
          '300g xương ống heo (hầm lấy nước dùng ngọt sâu tự nhiên)',
          '4 quả cà chua chín mọng (bổ múi cau đỏ au)',
          '150ml - 200ml giấm bỗng nếp lên men tự nhiên (linh hồn tạo vị chua thanh dịu êm, thơm ngát hương nếp)',
          '1 thìa canh mắm tôm ngon nguyên chất (bí quyết kích mùi riêu cua dậy vị đậm đà chuẩn vị Bắc)',
          '2 thìa canh dầu màu điều (hoặc mỡ heo chưng gạch cua lên màu vàng óng ánh)',
          '4 - 5 củ hành tím khô đập dập băm nhỏ + 1 củ gừng tươi',
        ],
      },
      {
        category: 'Bắp bò, Đậu mơ & Đồ nhúng lẩu tươi ngon',
        items: [
          '500g bắp bò hoa hoặc bắp lõi rùa tươi non (thái lát mỏng tang ngang thớ)',
          '4 bìa đậu phụ làng Mơ mềm béo (cắt vuông nhỏ, rán vàng giòn rụm các mặt)',
          '200g giò sống / mọc thịt nấm hương mộc nhĩ (tùy thích viên tròn thả lẩu)',
          '1kg bún tươi sợi nhỏ sạch mềm (hoặc mì tôm, bánh đa đỏ)',
        ],
      },
      {
        category: 'Rau nhúng lẩu & Gia vị nêm nếm',
        items: [
          'Hoa chuối bào sợi mỏng ngâm nước chanh trắng tinh, rau muống chẻ ngọn',
          'Rau thơm ăn kèm: Tía tô, kinh giới, rau xà lách, ngò gai, hành hoa chẻ sợi',
          'Gia vị: Nước mắm cốt truyền thống, muối hạt tinh, hạt nêm, 1 viên đường phèn nhỏ, tiêu sọ xay',
          'Ớt hiểm tươi thái lát và ớt sa tế chưng cay nồng',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế cua đồng, giã lọc lấy nước cốt & khều gạch cua vàng óng',
        time: '15 - 20 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Nước cốt cua lọc sạch bã trong veo, gạch cua khều nguyên vẹn thơm béo',
        actionPoints: [
          'Cua đồng ngâm rửa nhiều lần và xóc mạnh với muối hạt cho sạch hết bùn đất, sau đó tách bỏ yếm và mai cua.',
          'Dùng tăm hoặc thìa nhỏ khéo léo khều sạch phần gạch cua vàng óng trong mai vào một chén riêng.',
          'Thân cua cho vào cối cùng 1 thìa cà phê muối hạt giã thật nhuyễn (hoặc cho vào máy xay sinh tố xay mịn). Muối hạt là bí quyết quan trọng kích thích protein cua kết dính chặt chẽ thành từng tảng dày khi nấu.',
          'Hòa phần thịt cua xay với 1.5 - 2 lít nước lọc mát, dùng tay bóp kỹ rồi rót qua rây lọc dày 2 - 3 lần để lấy trọn nước cốt cua đậm đà, loại bỏ hoàn toàn phần bã xác cua cứng.',
        ],
        description:
          'Rửa sạch cua đồng, tách mai khều riêng gạch cua. Giã nhuyễn thân cua với 1 thìa cà phê muối hạt, hòa tan với 2 lít nước lọc rồi bóp kỹ và lọc qua rây 2 - 3 lần lấy nước cốt cua trong veo, bỏ sạch bã.',
        tip: 'Nhất định phải thêm chút muối hạt khi giã cua. Muối giúp các phân tử đạm cua liên kết chặt chẽ với nhau, khi đun nóng sẽ kết tụ thành từng mảng riêu to dày béo ngậy mà không hề bị nát vụn hay tan biến trong nước.',
      },
      {
        step: 2,
        title: 'Ninh sườn sụn non ngọt giòn, thái bắp bò hoa & rán đậu mơ',
        time: '25 - 30 phút',
        heat: 'Lửa vừa rồi hạ nhỏ liu riu',
        goal: 'Sườn sụn mềm giòn sần sật, bắp bò hoa thái mỏng mềm mọng nước, đậu phụ vàng ruộm',
        actionPoints: [
          'Sườn sụn chặt miếng nhỏ cỡ 2 - 3cm, chần qua nồi nước sôi có vài lát gừng đập dập và chút muối trong 3 phút để khử sạch tạp chất và mùi tanh, sau đó rửa xả lại thật sạch dưới vòi nước lạnh.',
          'Cho sườn sụn và xương ống vào nồi với 1 lít nước, đun sôi rồi hạ lửa liu riu ninh 25 - 30 phút cho sụn non chín mềm vừa tới nhưng vẫn giữ độ giòn sần sật đặc trưng. Giữ ấm cả sườn và nước hầm thanh ngọt.',
          'Bắp bò hoa rửa sạch, thấm khô ráo, để vào ngăn đá tủ lạnh 15 phút cho thớ thịt hơi se cứng lại rồi dùng dao bén thái lát thật mỏng ngang thớ. Ướp nhẹ với 1 thìa cà phê gừng thái chỉ, 1/2 thìa dầu ăn, chút tiêu xay để thịt mềm ngọt không bị dai khô khi nhúng.',
          'Đậu phụ làng Mơ cắt miếng vuông vừa ăn, thả vào chảo mỡ nóng già rán vàng giòn rụm các mặt, vớt ra đĩa có lót giấy thấm dầu.',
          'Hoa chuối bào sợi mỏng và rau muống chẻ ngâm ngay vào thau nước đá lạnh vắt nửa quả chanh để rau luôn trắng tinh và giữ độ giòn sần sật.',
        ],
        description:
          'Chần sườn sụn rồi ninh mềm giòn cùng xương hầm. Bắp bò hoa thái mỏng tang ướp chút gừng và dầu ăn. Đậu phụ rán vàng giòn rụm. Rau sống ngâm nước đá chanh giữ độ tươi giòn.',
        tip: 'Cho bắp bò vào ngăn đá 15 phút trước khi thái giúp miếng thịt định hình chắc chắn, dễ thái lát mỏng như tờ giấy. Khi nhúng nước lẩu sôi, thịt bò chín tái trong 15 giây, mềm mọng và nở hoa giòn sần sật.',
      },
      {
        step: 3,
        title: 'Nấu nước lẩu riêu cua đóng tảng béo ngậy & chưng gạch cua óng ả',
        time: '15 - 20 phút',
        heat: 'Lửa vừa đến khi riêu nổi thì hạ nhỏ liu riu',
        goal: 'Tảng riêu cua nổi dày bồng bềnh vàng ruộm, nước lẩu chua thanh giấm bỗng nồng ấm',
        actionPoints: [
          'Đổ nồi nước lọc cua lên bếp, nêm thêm 1 thìa cà phê hạt nêm và 1/2 thìa cà phê muối. Đun ở lửa vừa, dùng muôi khuấy nhẹ dưới đáy nồi theo một chiều để thịt cua không bị lắng bén khét đáy.',
          'Khi thấy nước bắt đầu bốc khói ấm và mảng thịt cua kết tụ nổi dần lên mặt nước, NGỪNG KHUẤY NGAY LẬP TỨC và hạ nhỏ lửa liu riu. Nước sôi lăn tăn sẽ đẩy từng mảng riêu cua kết tụ dày cộm, nổi bồng bềnh trên mặt nồi.',
          'Dùng muôi thủng khéo léo vớt toàn bộ mảng riêu cua ra đĩa sâu lòng riêng (bí quyết giữ riêu cua nguyên vẹn, không bị nát vụn khi khách nhúng đồ ăn liên tục).',
          'Trút phần nước ninh sườn sụn trong veo vào nồi nước lẩu cua.',
          'Bắc chảo nhỏ lên bếp, phi thơm hành tím băm với 2 thìa dầu màu điều, trút gạch cua đã khều vào chưng nhanh tay 1 - 2 phút cho thơm nức dậy mùi béo ngậy. Múc một nửa rưới đều lên mặt đĩa riêu cua đã vớt ra để tạo lớp màng gạch vàng óng ả bắt mắt.',
          'Phần chảo còn lại cho cà chua múi cau vào xào chín tới (vẫn giữ nguyên miếng, không làm nát nhừ), trút toàn bộ cà chua và dầu gạch cua vào nồi nước lẩu.',
          'Nêm vào nồi: 150ml - 200ml giấm bỗng nếp (gia giảm vừa độ chua thanh dịu), 1 thìa canh mắm tôm ngon đã khuấy tan với chút nước ấm gạn bỏ cặn, 2 thìa canh nước mắm cốt nhĩ và 1 viên nhỏ đường phèn. Nồi nước lẩu sôi lăn tăn, tỏa hương thơm ngát nức lòng.',
        ],
        description:
          'Đun nước cua trên lửa vừa đến khi thịt cua kết thành tảng dày nổi bồng bềnh, vớt riêu ra đĩa riêng. Chưng gạch cua với hành khô và dầu điều, xào cà chua rồi trút vào nồi cùng nước hầm sườn. Nêm giấm bỗng nếp, mắm tôm ngon và nước mắm cốt cho vị chua thanh đậm đà.',
        tip: 'Tuyệt đối không đậy nắp vung và không để nước lẩu sôi bùng dữ dội khi riêu cua đang nổi, vì nhiệt quá lớn sẽ làm nát vụn tảng riêu. Vớt riêu ra đĩa riêng trước là bí quyết nhà nghề giúp tảng riêu cua luôn nguyên khối đẹp mắt.',
      },
      {
        step: 4,
        title: 'Bày biện nồi lẩu & Thưởng thức lẩu riêu cua bắp bò chua cay',
        time: '5 - 10 phút',
        heat: 'Bếp lẩu sôi lăn tăn trên bàn ăn',
        goal: 'Nồi lẩu thơm lừng nghi ngút khói, bắp bò chín tái giòn sần sật, nước dùng chua cay kích thích vị giác',
        actionPoints: [
          'Đặt bếp lẩu ra giữa bàn ăn. Đổ nước lẩu cà chua giấm bỗng vào nồi, thả sườn sụn non ninh mềm, đậu phụ rán vàng, một phần riêu cua và rắc thêm đầu hành chẻ, mùi tàu, tía tô thái sợi.',
          'Bày xung quanh bàn: Đĩa bắp bò hoa đỏ tươi thái mỏng, đĩa riêu cua chưng gạch óng ả, giò sống mọc thịt, rổ rau muống chẻ, hoa chuối, tía tô, kinh giới và đĩa bún tươi.',
          'Khi nồi lẩu sôi sùng sục, nhúng từng lát bắp bò hoa trong 15 - 20 giây cho chín tái hồng giòn sần sật, thả viên mọc thịt và rau sống nhúng chín tới.',
          'Lấy bún tươi vào bát, múc một miếng riêu cua béo bùi, gắp lát bắp bò giòn sần sật, sườn sụn non và đậu phụ ngấm nước lẩu, rưới nước dùng nóng hổi chua cay thanh dịu từ giấm bỗng và thưởng thức ngay.',
        ],
        description:
          'Bày nồi lẩu sôi lăn tăn với sườn sụn, đậu rán, riêu cua và hành tía tô. Nhúng bắp bò hoa tái giòn, rau muống chẻ và hoa chuối. Ăn kèm bún tươi, chấm nước mắm ớt cay nồng đậm đà.',
        tip: 'Nên thả đậu phụ rán vào nồi lẩu từ sớm để từng miếng đậu ngậm no nước dùng chua thanh béo ngậy của riêu cua. Khi cắn vào, nước lẩu nóng hổi tuôn tràn trong miệng cực kỳ thỏa mãn.',
      },
    ],
    chefSecret:
      '4 bí quyết vàng tạo nên nồi Lẩu Riêu Cua Bắp Bò chua thanh đậm đà chuẩn vị Hà Nội: 1. Thêm muối hạt khi giã lọc cua và chỉ khuấy lúc nước ấm; khi bắt đầu sôi phải hạ lửa nhỏ liu riu để riêu cua kết tụ thành từng mảng to xốp mềm béo ngậy; 2. Vớt tảng riêu cua ra đĩa riêng rồi rưới gạch cua phi hành thơm óng ả lên trên để riêu không bị nát vụn khi nhúng; 3. Dùng giấm bỗng nếp lên men tự nhiên tạo vị chua thanh dịu dàng thơm mùi men nếp, kết hợp 1 thìa mắm tôm ngon khử tanh và dậy vị sâu sắc (tuyệt đối không dùng giấm hóa học hay nước cốt chanh); 4. Bắp bò hoa thái thật mỏng ngang thớ và chỉ nhúng tái trong 15 - 20 giây để thịt giữ nguyên độ giòn ngọt mọng nước sần sật.',
    recommendedSauce:
      'Chén nước mắm cốt nhĩ nguyên chất dầm ớt hiểm cay xé lưỡi vắt chút quất thơm, kèm một đĩa muối tiêu chanh ớt và sa tế tôm tự chưng cay nồng.',
  },
  'mien-luon-gion-xao-lan': {
    dishId: 'mien-luon-gion-xao-lan',
    dishName: 'Miến Lươn Giòn Nước Dùng Hà Nội',
    seoTitle: 'Cách Nấu Miến Lươn Giòn Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    prepTime: '30 - 40 phút (tuốt nhớt lươn, lọc xương & ướp)',
    cookTime: '45 - 50 phút (ninh nước dùng xương lươn & chiên lươn 2 lửa giòn rụm)',
    difficulty: 'Trung bình',
    servings: '4 - 5 người ăn',
    ingredients: [
      {
        category: 'Lươn đồng & Kỹ thuật tẩm bột chiên giòn tan',
        items: [
          '700g - 800g lươn đồng tươi sống (chọn lươn hoa loại vừa, lưng đen bụng vàng óng, thịt chắc ngọt thơm)',
          'Khử nhớt & khử tanh: 2 nắm muối hạt to, nước cốt 2 quả chanh tươi (hoặc giấm bỗng nếp), khăn sạch lau khô',
          'Gia vị ướp lươn: 1 thìa cà phê bột nghệ vàng nguyên chất (lấy màu vàng ươm), 1 thìa cà phê tiêu sọ xay mịn, 1/2 thìa cà phê hạt nêm, 1 thìa canh nước cốt gừng tỏi chắt lọc',
          'Lớp áo bột chiên giòn 2 lửa: 100g bột chiên giòn mịn pha cùng 30g bột bắp (hoặc bột năng) tạo độ giòn xốp lâu rụm',
          'Dầu ăn ngập chảo để chiên sâu (deep-fry)',
        ],
      },
      {
        category: 'Nước dùng thanh ngọt sâu từ xương lươn & xương heo',
        items: [
          'Toàn bộ đầu và xương sống của lươn sau khi lọc thịt (linh hồn tạo vị ngọt thanh sâu, thơm ngát đặc trưng)',
          '400g xương ống heo hoặc xương bay (chần sạch ninh cùng giúp nước lèo đậm đà tròn vị)',
          '4 củ hành tím khô nướng thơm bóc vỏ đập dập',
          '1 củ gừng tươi nướng thơm cạo sạch đập dập',
          '2 nhánh đầu hành trắng hoặc 1 củ hành tây nhỏ',
          'Gia vị nồi nước lèo: Nước mắm cốt truyền thống nguyên chất, muối hạt tinh, 1 viên nhỏ đường phèn (giúp vị ngọt dịu êm, không dùng đường cát gắt vị)',
        ],
      },
      {
        category: 'Miến dong & Rau gia vị ăn kèm chuẩn vị',
        items: [
          '350g miến dong ta (chọn miến dong sợi xám tro hoặc trắng ngà tự nhiên, dai ngon không bị bở nát)',
          '200g giá đỗ tươi sạch, thân mập giòn ngọt',
          '1 nắm lớn rau răm tươi non (linh hồn không thể thiếu của miến lươn, cay ấm cân bằng tính hàn của lươn)',
          '1 nắm hành hoa (hành lá) và rau ngò gai (mùi tàu) thái nhỏ, đầu hành hoa chẻ sợi',
          '3 - 4 củ hành khô thái mỏng phi vàng giòn rụm',
          'Đồ ăn kèm: Ớt chưng sa tế cay nồng, quất tươi (hoặc chanh), ớt hiểm tươi thái lát và tiêu sọ xay thơm nức',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế lươn sạch bong nhớt, lọc phi lê và xương lươn không tanh',
        time: '15 - 20 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Lươn sạch bong nhớt hoàn toàn, thịt lươn khô ráo đỏ tươi, giữ trọn vẹn xương và đầu để nấu nước dùng',
        actionPoints: [
          'Cho lươn vào nồi sâu lòng, rắc 2 nắm muối hạt to và vắt 2 quả chanh (hoặc đổ chút giấm bỗng), đậy chặt vung 3 - 5 phút cho lươn quẫy tự nhả sạch nhớt.',
          'Dùng khăn vải khô hoặc lá tre vuốt mạnh dọc thân từ đầu đến đuôi để tuốt sạch toàn bộ lớp màng nhớt trắng.',
          'Rửa nhanh lươn qua nước muối loãng, dùng khăn sạch thấm khô ráo hoàn toàn (tuyệt đối không ngâm nước lã sau khi mổ để thịt lươn không bị tanh).',
          'Cắt rời phần đầu lươn (giữ lại đầu), rạch bụng lấy sạch ruột.',
          'Dùng dao mỏng bén lạng nhẹ hai bên dọc xương sống để tách lấy 2 dải thịt phi lê lươn dài, giữ lại toàn bộ dải xương sống và đầu lươn để ninh nước dùng.',
          'Cắt thịt phi lê lươn thành từng miếng dài cỡ ngón tay (khoảng 4 - 5cm), bản dày khoảng 0.8 - 1cm.',
        ],
        description:
          'Tuốt sạch nhớt lươn bằng muối hạt và nước cốt chanh. Thấm khô bằng khăn sạch, mổ bỏ ruột và lạng tách lấy thịt phi lê cùng xương lươn. Cắt thịt lươn thành miếng vừa ăn.',
        tip: 'Bí quyết nhà nghề là sau khi mổ bỏ ruột chỉ dùng khăn sạch thấm khô máu bầm, tuyệt đối KHÔNG rửa lại bằng nước lã. Nước lã tiếp xúc với thớ thịt lươn sau khi cắt mổ sẽ làm mất vị ngọt tự nhiên và khiến lươn bị tanh nồng.',
      },
      {
        step: 2,
        title: 'Hầm nồi nước dùng xương lươn ngọt thanh trong vắt',
        time: '45 - 60 phút',
        heat: 'Lửa lớn đun sôi rồi hạ liu riu',
        goal: 'Nước dùng trong veo màu vàng hổ phách nhạt, ngọt đậm sâu tự nhiên từ tủy lươn và xương heo, dậy mùi gừng hành nướng ấm nồng',
        actionPoints: [
          'Xương ống heo rửa sạch, chần qua nước sôi 3 phút rồi rửa lại thật sạch dưới vòi nước lạnh.',
          'Toàn bộ đầu và xương lươn cho vào chảo nhỏ xào săn cùng 1 thìa dầu ăn, chút gừng băm và hành tím phi thơm lừng cho dậy mùi béo ngậy.',
          'Cho xương heo và xương lươn vào nồi cùng 2.5 - 3 lít nước lọc. Thả hành tím nướng, gừng nướng đập dập và 1 thìa cà phê muối hạt.',
          'Bật lửa lớn đun sôi bùng, dùng muôi hớt sạch toàn bộ bọt nổi để nước lèo trong vắt. Sau đó hạ lửa liu riu ninh trong 45 - 60 phút.',
          'Vớt bỏ bã xương lươn và xương heo, lọc nước dùng qua rây dày để thu được nồi nước lèo trong veo không dính vụn xương.',
          'Nêm nếm: 2 thìa canh nước mắm cốt nhĩ ngon, 1 viên đường phèn nhỏ (cỡ ngón tay cái) để vị ngọt mềm dịu, 1 thìa hạt nêm. Giữ nồi nước lèo luôn sôi nhẹ lăn tăn trên bếp.',
        ],
        description:
          'Xào thơm xương và đầu lươn với gừng hành, cho vào nồi ninh cùng xương ống heo đã chần sạch. Thêm hành gừng nướng, đun sôi hớt bọt rồi ninh liu riu 1 tiếng. Lọc lấy nước dùng trong veo, nêm mắm cốt và đường phèn thanh ngọt.',
        tip: 'Xương lươn chứa hàm lượng canxi và vị ngọt umami cực kỳ đậm đà. Việc xào thơm xương lươn với gừng hành trước khi ninh giúp triệt tiêu hoàn toàn mùi tanh, đồng thời chiết xuất tối đa vị ngọt thanh khiết đặc trưng.',
      },
      {
        step: 3,
        title: 'Tẩm ướp và chiên lươn 2 lửa giòn tan rụm vàng óng',
        time: '20 - 25 phút',
        heat: 'Lửa vừa (160°C lần 1) & Lửa lớn (180°C - 190°C lần 2)',
        goal: 'Lươn chiên giòn tan rụm màu vàng nâu óng ánh, thơm nức mùi nghệ tiêu, để lâu vẫn giòn xốp không bị dai ỉu hay ngấm dầu',
        actionPoints: [
          'Cho thịt lươn vào tô ướp cùng: 1 thìa cà phê bột nghệ vàng, 1 thìa cà phê tiêu sọ xay mịn, 1/2 thìa cà phê hạt nêm, 1 thìa canh nước cốt gừng tỏi chắt lọc. Trộn đều ướp trong 15 phút cho ngấm gia vị.',
          'Trộn đều 100g bột chiên giòn với 30g bột bắp. Cho từng mẻ lươn vào âu bột xóc đều tay để bột áo một lớp mỏng tang quanh từng miếng lươn. Sau đó cho lươn qua rây lắc nhẹ để rơi hết bột thừa (tránh làm cháy và đục dầu chiên).',
          'Chiên lần 1 (định hình & chín thịt): Đun nóng ngập dầu ở nhiệt độ 160°C (thả đầu đũa vào thấy sủi tăm mạnh), thả từng miếng lươn vào chảo (không thả dính chùm). Chiên lửa vừa khoảng 5 - 7 phút đến khi lươn săn cứng lại, ngả màu vàng nhạt thì vớt ra rổ thưa để ráo dầu trong 5 - 10 phút.',
          'Chiên lần 2 (ép dầu & tạo độ giòn xốp rụm): Tăng nhiệt độ dầu lên 180°C - 190°C (dầu nóng già). Thả lươn đã ráo vào chiên nhanh trong 2 - 3 phút. Lớp vỏ lươn lập tức phồng giòn rôm rốp, chuyển màu vàng nâu cánh gián óng ả. Vớt ra ngay đặt lên khay có lót giấy thấm dầu.',
        ],
        description:
          'Ướp lươn với nghệ, tiêu và nước cốt gừng tỏi. Áo một lớp bột chiên giòn mỏng pha bột bắp rồi rây sạch bột thừa. Chiên 2 lần lửa: lần 1 lửa vừa cho chín se, nghỉ 10 phút, lần 2 chiên lửa lớn giúp lươn giòn tan rụm, vàng ươm và không bị ngấm dầu.',
        tip: 'Bí quyết vàng để lươn chiên giòn rụm hàng giờ không ỉu chính là kỹ thuật chiên 2 lửa kết hợp bột bắp. Lần 1 làm chín kiệt nước bên trong; nghỉ 10 phút để hơi ẩm thoát ra; lần 2 chiên nhiệt cao giúp bốc hơi hoàn toàn hơi nước bề mặt và đẩy hết dầu thừa ra ngoài.',
      },
      {
        step: 4,
        title: 'Trần miến dong dẻo dai & Hoàn thiện tô miến lươn nước thanh ngọt',
        time: '5 - 10 phút',
        heat: 'Nước lèo sôi sùng sục',
        goal: 'Tô miến lươn nghi ngút khói, miến dong dai mướt trong veo, lươn giòn rụm nằm trên mặt, nước lèo ngọt thơm nức mũi',
        actionPoints: [
          'Miến dong ngâm nước ấm 10 - 15 phút cho sợi miến mềm mại, vớt ra cắt khúc vừa ăn cỡ 15 - 20cm, để ráo.',
          'Nhúng giá đỗ tươi qua nồi nước sôi trong 10 giây rồi rải đều dưới đáy từng bát tô lớn.',
          'Cho miến dong vào muôi lưới/vợt trần, nhúng trực tiếp vào nồi nước dùng lươn đang sôi khoảng 30 - 45 giây cho sợi miến chín tới, ngậm trọn vị ngọt đậm đà của nước lèo rồi trút vào bát tô trên lớp giá đỗ.',
          'Xếp hành hoa, rau răm thái nhỏ và đầu hành chẻ sợi lên trên miến. Rắc một nhúm hành phi vàng giòn rụm thơm nức mũi.',
          'Gắp một phần lươn giòn rụm đặt gọn gàng ở một góc trên mặt tô (tránh để lươn ngập chìm dưới nước ngay từ đầu để giữ tối đa độ giòn tan).',
          'Múc nước dùng đang sôi sùng sục chan nhẹ nhàng men theo thành tô ngập xâm xấp mặt miến. Rắc thêm chút tiêu sọ xay mịn lên trên.',
          'Thưởng thức ngay lập tức khi còn nóng hổi! Vắt thêm chút nước cốt quất tươi hoặc chanh, kèm ớt tươi hoặc ớt sa tế chưng cay tê đầu lưỡi.',
        ],
        description:
          'Trần giá đỗ lót đáy bát, trần miến dong trực tiếp bằng nước dùng lươn cho ngậm vị ngọt rồi cho vào tô. Xếp rau răm, hành hoa, hành phi và lươn chiên giòn lên trên. Chan nước lèo sôi sùng sục, rắc tiêu thơm và thưởng thức ngay.',
        tip: 'Miến dong nhất định phải trần trực tiếp bằng nước dùng lươn thay vì trần nước sôi thường. Sợi miến dong hút nước cực tốt, khi nở trong nước dùng sẽ hút no vị ngọt tủy xương đậm đà từ sâu bên trong từng sợi miến!',
      },
    ],
    chefSecret:
      '4 bí quyết vàng nấu Miến Lươn Giòn nước dùng thanh ngọt chuẩn vị: 1. Tuốt sạch nhớt lươn bằng muối hạt và nước cốt chanh, lau khô bằng khăn sạch và tuyệt đối không rửa lại bằng nước lã sau khi mổ; 2. Đừng bỏ đầu và xương lươn: Sao thơm xương lươn với gừng hành nướng rồi ninh lấy nước dùng là linh hồn tạo vị ngọt sâu thanh khiết đặc trưng; 3. Kỹ thuật chiên lươn 2 lửa: Lần 1 chiên lửa vừa cho chín se kiệt nước, nghỉ 10 phút, lần 2 chiên lửa lớn giòn rụm vàng ruộm, giúp miếng lươn giòn tan dù chan nước dùng vẫn giữ trọn độ giòn rôm rốp; 4. Rau răm và quất tươi là cặp đôi hoàn hảo cân bằng tính hàn của lươn, mang lại hương vị thơm ấm nồng nàn chuẩn vị Hà Nội.',
    recommendedSauce:
      'Ớt chưng sa tế cay nồng, quất tươi Hà Nội (hoặc chanh tươi), vài lát ớt hiểm và chén nước mắm nhĩ ngon rắc tiêu sọ xay mịn.',
  },
  'nom-bo-kho-ha-noi': {
    dishId: 'nom-bo-kho-ha-noi',
    dishName: 'Nộm Bò Khô Đu Đủ Bờ Hồ Phố Cổ',
    seoTitle: 'Cách Làm Nộm Bò Khô Đu Đủ Chua Ngọt Giòn Tan, Giải Ngấy Cực Tốt',
    prepTime: '20 - 25 phút (nạo đu đủ, ngâm nước đá giòn tanh tách)',
    cookTime: '15 phút (pha nước giấm đường ớt tỏi & trộn nộm)',
    difficulty: 'Dễ',
    servings: '3 - 4 người ăn',
    ingredients: [
      {
        category: 'Đu đủ xanh & Cà rốt giòn mát sảng khoái',
        items: [
          '600g - 700g đu đủ xanh bánh tẻ (chọn quả tươi cứng cáp, vỏ xanh ruột trắng ngà hoặc hơi hanh vàng, cầm nặng tay)',
          '1 củ cà rốt tươi (khoảng 150g, nạo sợi xen kẽ tạo màu sắc bắt mắt)',
          'Bí quyết tạo độ giòn tanh tách: 1 chậu nước đá lạnh buốt pha cùng 1 thìa canh muối hạt và 2 thìa canh giấm gạo (ngâm sợi đu đủ 15 phút)',
        ],
      },
      {
        category: 'Topping Bò khô & Lạc rang chuẩn vị phố cổ',
        items: [
          '150g - 200g thịt bò khô xé sợi hoặc bò khô miếng cắt kéo (chọn loại bò khô sợi dài nâu đỏ, thơm mùi quế hồi và cay ngọt đậm đà)',
          '50g - 80g gan sấy hoặc lá lách bò sấy bùi ngậy (bí quyết kinh điển trứ danh của nộm Bờ Hồ phố Hàm Long)',
          '80g lạc (đậu phộng) rang vàng giòn rụm, xát sạch vỏ lụa và giã dập làm đôi làm ba (không giã nát)',
          'Rau thơm gia vị: 1 mớ rau kinh giới (linh hồn hương vị nộm Hà Nội), 1 mớ rau húng Láng (húng lủi), một ít rau răm tươi',
        ],
      },
      {
        category: 'Nước giấm tỏi ớt chua ngọt chuẩn "Tỷ lệ vàng" Hà Nội',
        items: [
          '4 thìa canh giấm gạo nếp thanh dịu (người Hà Nội chuộng vị chua thanh dịu của giấm gạo truyền thống hơn là chỉ dùng chanh)',
          '4 thìa canh đường cát trắng (hoặc đường phèn giã mịn)',
          '3 thìa canh nước mắm cốt nhĩ truyền thống thơm ngon',
          '3 thìa canh nước lọc ấm nguội',
          '1 thìa canh nước cốt quất tươi (hoặc chanh) tạo hương thơm thanh mát bốc lên',
          '1 củ tỏi ta bóc vỏ băm thật nhuyễn mịn, 2 quả ớt hiểm đỏ băm nhỏ (để nổi bồng bềnh trên mặt nước sốt)',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Nạo sợi đu đủ, cà rốt & Kỹ thuật ngâm nước đá giòn tanh tách',
        time: '15 phút',
        heat: 'Nước đá lạnh',
        goal: 'Sợi đu đủ và cà rốt trắng tinh, giòn rụm tanh tách, sạch triệt để nhựa đắng và khô ráo hoàn toàn',
        actionPoints: [
          'Khía nhẹ vài đường dọc vỏ đu đủ xanh dưới vòi nước chảy để mủ nhựa trắng chảy bớt ra, gọt sạch vỏ rồi rửa lại thật sạch.',
          'Bổ đôi quả đu đủ theo chiều dọc, dùng thìa cạo sạch hoàn toàn hạt và lớp màng trắng trong ruột. Cà rốt nạo sạch vỏ.',
          'Dùng bàn nạo đa năng nạo đu đủ và cà rốt thành các sợi dài mỏng đều tăm tắp.',
          'Chuẩn bị ngay một thau nước đá lạnh buốt, hòa tan 1 thìa canh muối hạt và 2 thìa canh giấm gạo. Thả toàn bộ đu đủ và cà rốt vào ngâm trong 10 - 15 phút. Nước đá lạnh kết hợp giấm giúp sợi đu đủ lập tức săn cứng lại, trắng nõn và triệt tiêu sạch vị chát đắng.',
          'Vớt đu đủ cà rốt ra rổ thưa, dùng tay hoặc khăn vải xô sạch bóp vắt nhẹ từng nắm để ráo kiệt nước thừa (vắt vừa tay, tránh vò nát sợi). Rải đều ra rổ cho ráo hoàn toàn trước khi bày đĩa.',
        ],
        description:
          'Gọt vỏ đu đủ và cà rốt, nạo sợi dài mỏng đều tay. Ngâm vào thau nước đá lạnh pha muối và giấm gạo trong 15 phút để sợi giòn tanh tách và trắng nõn. Vớt ra vắt thật ráo nước.',
        tip: 'Khâu vắt ráo nước là chìa khóa then chốt: Đu đủ phải thật kiệt nước thì khi chan nước giấm sốt vào mới ngấm đều, không bị loãng vị và đĩa nộm để cả buổi vẫn giữ trọn độ giòn sần sật, không ra nước ỉu.',
      },
      {
        step: 2,
        title: 'Chuẩn bị topping bò khô, gan sấy, lạc rang và rau thơm',
        time: '10 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Topping đầy đặn thơm lừng, bò khô xé tơi vừa ăn, lạc rang giòn bùi, rau thơm ráo nước thái khúc thơm ngát',
        actionPoints: [
          'Thịt bò khô miếng dùng kéo sắc cắt thành sợi dài mỏng cỡ đầu đũa, hoặc dùng tay xé tơi vừa ăn. Nếu có gan bò sấy/lá lách bò sấy, cắt miếng vuông mỏng vừa miệng.',
          'Lạc rang chín vàng giòn rụm trên chảo lửa nhỏ cùng chút muối hạt, ủ giấy báo 10 phút cho giòn tan rồi xát sạch vỏ lụa. Cho vào cối giã dập nhẹ làm 2 - 3 mảnh.',
          'Rau kinh giới, húng Láng, rau răm nhặt bỏ cuống già và lá úa, rửa sạch nhẹ tay dưới vòi nước rồi ngâm nước muối loãng 5 phút. Vớt ra rổ vẩy thật ráo nước, dùng dao thái khúc dài khoảng 1.5 - 2cm.',
        ],
        description:
          'Xé sợi thịt bò khô và cắt miếng gan sấy. Lạc rang vàng giòn xát vỏ rồi giã dập nhẹ. Rau kinh giới, húng Láng và rau răm rửa sạch, vẩy thật ráo nước rồi thái khúc vừa ăn.',
        tip: 'Rau kinh giới chính là "linh hồn" định danh món nộm bò khô đất kinh kỳ. Vị the cay ấm của kinh giới phối hợp hoàn hảo với vị cay ngọt của bò khô và vị bùi béo của lạc rang, giúp giải ngấy tuyệt hảo.',
      },
      {
        step: 3,
        title: 'Pha nước giấm tỏi ớt chua ngọt tỷ lệ vàng "hồn cốt nộm Hà Nội"',
        time: '5 - 10 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Nước sốt chua thanh dịu ngọt, mặn mà đậm đà, tỏi ớt băm nhuyễn nổi bồng bềnh rực rỡ trên mặt nước mắm giấm',
        actionPoints: [
          'Cho vào bát tô: 4 thìa canh đường cát trắng, 4 thìa canh giấm gạo nếp ngon, 3 thìa canh nước mắm cốt nhĩ và 3 thìa canh nước lọc ấm.',
          'Dùng thìa khuấy đều tay cho các hạt đường tan hoàn toàn thành hỗn hợp trong sánh vàng óng ánh.',
          'Vắt thêm 1 thìa canh nước cốt quất tươi (hoặc chanh), lọc bỏ hạt để tạo hương thơm ngát tự nhiên đặc trưng.',
          'Nếm thử: Vị chua thanh dịu mở đầu, ngọt hậu đậm đà vừa vặn, mặn dịu êm đằm thắm (không chua gắt, không ngọt khé).',
          'Cuối cùng, trút toàn bộ tỏi ta băm nhuyễn mịn và ớt hiểm băm nhỏ vào bát. Nhờ đường và giấm đã tan đều tạo tỷ trọng lý tưởng, tỏi và ớt sẽ lập tức nổi bồng bềnh rực rỡ trên bề mặt cực kỳ bắt mắt.',
        ],
        description:
          'Hòa tan đường, giấm gạo nếp, nước mắm ngon và nước lọc theo tỷ lệ vàng. Thêm chút nước cốt quất lấy hương thơm thanh mát. Cuối cùng cho tỏi ớt băm nhuyễn vào để nổi bồng bềnh trên mặt nước sốt.',
        tip: 'Quy tắc tỏi ớt nổi bồng bềnh: Luôn hòa tan hoàn toàn đường trong giấm và nước trước khi nêm mắm, và tuyệt đối chỉ cho tỏi ớt băm nhuyễn vào SAU CÙNG khi nước sốt đã sẵn sàng.',
      },
      {
        step: 4,
        title: 'Bày đĩa phố cổ & Kỹ thuật chan sốt giữ độ giòn tan',
        time: '5 phút',
        heat: 'Thưởng thức tươi mát',
        goal: 'Đĩa nộm vun cao đẹp mắt, màu sắc rực rỡ hài hòa, khi ăn sợi đu đủ giòn sần sật thấm đẫm vị chua cay mặn ngọt',
        actionPoints: [
          'Bốc một nắm đu đủ và cà rốt nạo ráo nước vun thành ngọn xốp tơi giữa đĩa sâu lòng.',
          'Rải đều một lớp rau thơm (kinh giới, húng Láng, rau răm) phủ lên trên lớp đu đủ.',
          'Xếp thịt bò khô xé sợi và gan sấy bao quanh ngọn nộm. Rắc đẫm lạc rang vàng giòn giã dập lên đỉnh chóp.',
          'Khi chuẩn bị ăn, dùng muôi múc 4 - 5 thìa nước giấm tỏi ớt chua ngọt rưới đều từ trên chóp xuống khắp đĩa nộm.',
          'Dùng đũa trộn đều nhẹ tay từ dưới lên để từng sợi đu đủ, bò khô và rau thơm ngậm đều nước sốt rồi gắp thưởng thức ngay.',
          'Có thể rắc thêm chút tiêu sọ xay hoặc vắt thêm quất tươi tùy khẩu vị.',
        ],
        description:
          'Xếp đu đủ và cà rốt vun ngọn ra đĩa, phủ rau thơm, bò khô, gan sấy và rắc lạc rang giòn lên trên. Khi ăn rưới đẫm nước giấm tỏi ớt chua ngọt, trộn đều nhẹ tay và thưởng thức ngay độ giòn sần sật tươi mát.',
        tip: 'Quy tắc vàng giữ trọn độ giòn: Chỉ rưới nước giấm sốt và trộn đều nộm ngay trước khi ăn 1 - 2 phút. Nếu trộn quá sớm, muối đường sẽ rút nước làm sợi đu đủ bị mềm ỉu và mất đi cảm giác giòn tanh tách.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm nộm bò khô đu đủ ngon bất bại chuẩn Bờ Hồ: 1. Ngâm sợi đu đủ và cà rốt trong thau nước đá lạnh buốt pha muối hạt và giấm gạo trong 15 phút, sau đó vắt thật kiệt nước để sợi nộm giòn rụm tanh tách và sạch mủ đắng; 2. Nước giấm tỏi ớt pha bằng giấm gạo nếp truyền thống kết hợp chút nước quất tươi tạo vị chua thanh dịu êm, tỏi ớt băm nhuyễn nổi bồng bềnh; 3. Không thể thiếu rau kinh giới tươi the mát phối cùng lạc rang bùi và bò khô cay ngọt; luôn chan sốt và trộn ngay trước khi ăn để giữ trọn độ giòn tan giải ngấy cực đỉnh.',
    recommendedSauce:
      'Bát nước giấm tỏi ớt chua ngọt chuẩn vị Hà Nội, kèm một đĩa bánh bột lọc, nem cuốn tôm thịt hoặc nem chua rán giòn rụm.',
  },
  'nem-chua-ran-ha-noi': {
    dishId: 'nem-chua-ran-ha-noi',
    dishName: 'Nem Chua Rán Phố Cổ Hà Nội',
    seoTitle: 'Cách Làm Nem Chua Rán Phố Cổ Vàng Ruộm, Giòn Rụm Bất Bại Tại Nhà',
    prepTime: '30 - 40 phút (quết thịt dẻo, thái bì heo, cuộn định hình & ủ lạnh 2 tiếng)',
    cookTime: '15 - 20 phút (lăn bột chiên xù & rán ngập dầu giòn rụm)',
    difficulty: 'Trung bình',
    servings: '4 - 5 người ăn (khoảng 20 - 25 cây nem)',
    ingredients: [
      {
        category: 'Thịt heo tươi dẻo & Bì heo giòn dai sần sật',
        items: [
          '400g thịt nạc mông heo (hoặc nạc thăn dẻo) tươi mới mổ, dính tay (tuyệt đối không dùng thịt ôi hoặc rửa nước nhiều làm bở nát thịt)',
          '200g giò sống (mọc heo tươi dẻo mịn, giúp nem quánh dẻo kết dính hoàn hảo)',
          '200g - 250g bì heo (da heo) làm sạch: Luộc chín tới với gừng sả, lạng sạch tinh mỡ thừa, để thật khô ráo rồi thái sợi chỉ mảnh li ti',
        ],
      },
      {
        category: 'Gia vị ướp quết thịt dậy mùi cay nồng phố cổ',
        items: [
          '2 thìa canh nước mắm cốt nhĩ cá cơm thơm lừng',
          '2 thìa canh đường cát trắng (hoặc đường phèn giã mịn giúp nem lên màu vàng óng và ngọt dịu hậu vị)',
          '1.5 thìa cà phê tiêu sọ giã dập hoặc tiêu đen xay (linh hồn cay nồng thơm nức mũi của nem rán Hà Nội)',
          '1 củ tỏi ta bóc vỏ băm thật nhuyễn mịn, 1 - 2 quả ớt hiểm băm nhỏ',
          '2 thìa canh bột năng (hoặc bột bắp tạo độ quánh dẻo và giữ nước ngọt thịt)',
          '1 thìa cà phê hạt nêm hoặc bột ngọt (tùy chọn)',
        ],
      },
      {
        category: 'Lớp áo bột chiên xù vàng rụm & Đồ ăn kèm phố cổ',
        items: [
          '150g - 200g bột chiên xù trắng (panko) hạt xốp giòn rụm',
          '50g bột chiên giòn (hoặc bột mì pha chút nước loãng hoặc 1 quả trứng gà đánh tan làm chất kết dính áo bột)',
          '500ml - 700ml dầu ăn sạch để chiên ngập dầu',
          'Cuộn màng bọc thực phẩm (hoặc giấy bóng kiếng gói nem)',
          'Đồ chấm & ăn kèm: Tương ớt xào tỏi kiểu Bắc / tương ớt cay nồng, dưa leo (dưa chuột) thái lát mát lành, củ đậu hoặc xoài xanh',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế bì heo thái chỉ mảnh & Kỹ thuật xay quết thịt dẻo lạnh',
        time: '15 phút',
        heat: 'Nước đá lạnh & Ngăn đá tủ lạnh',
        goal: 'Bì heo trắng giòn ráo kiệt nước thái chỉ tăm tắp, khối thịt quết lạnh dẻo dính tay không bị tách nước hay bở',
        actionPoints: [
          'Bì heo cạo sạch lông, chà xát với muối hạt và chanh khử sạch mùi. Luộc chín tới trong 10 - 12 phút cùng gừng đập dập và chút muối hạt. Vớt ngay ra âu nước đá lạnh ngâm 10 phút cho bì giòn sần sật và trắng trong.',
          'Dùng dao sắc lạng bỏ sạch hoàn toàn lớp mỡ thừa còn sót lại ở mặt trong miếng bì (bì phải thật sạch mỡ thì nem rán mới giòn dẻo, không bị chảy ngấy). Dùng khăn sạch thấm khô kiệt nước rồi thái thành từng sợi chỉ mảnh thật mỏng và đều tay.',
          'Thịt nạc mông heo thái mỏng, bọc kín cho vào ngăn đá 30 - 45 phút cho thịt dăm đá (mép thịt hơi cứng nhưng bẻ cong được).',
          'Cho thịt lạnh vào cối xay nhuyễn cùng giò sống, nước mắm ngon, đường, tiêu sọ giã dập, tỏi ớt băm nhuyễn và bột năng. Quết hoặc xay nhanh tay một chiều cho thịt kết dính dẻo quánh.',
          'Trút toàn bộ bì heo thái chỉ vào khối thịt quết, dùng tay nhồi bóp đều cho sợi bì phân bố đều khắp khối nem.',
        ],
        description:
          'Luộc chín bì heo, cạo sạch tinh mỡ và thái sợi chỉ mảnh li ti. Thịt nạc mông để dăm đá đem xay nhuyễn cùng giò sống, gia vị mắm tiêu tỏi và bột năng cho dẻo quánh rồi trộn đều với bì heo.',
        tip: 'Bí quyết quyết định độ dẻo dai: Thịt phải luôn được giữ LẠNH trong suốt quá trình xay quết. Nếu thịt bị nóng do ma sát cối xay, protein sẽ chín tái và tách nước, khiến nem sau khi chiên bị bở nát và khô xác.',
      },
      {
        step: 2,
        title: 'Định hình cây nem & Kỹ thuật ủ lạnh đông kết collagen tự nhiên',
        time: '15 phút gói + 2 tiếng ủ lạnh',
        heat: 'Ngăn mát / Ngăn đá tủ lạnh',
        goal: 'Từng cây nem cuộn tròn đều đặn chắc nịch, khối nem đông se cứng cáp không bị biến dạng hay bung rách',
        actionPoints: [
          'Trải từng tấm màng bọc thực phẩm (khoảng 15x20cm) lên mặt phẳng sạch.',
          'Múc khoảng 35g - 40g hỗn hợp nem đặt vào giữa, nắn thành thanh tròn dài khoảng 7 - 8cm, đường kính khoảng 1.8 - 2cm.',
          'Gấp mép màng bọc lại và cuộn nhiều vòng ôm sát thân nem thật chặt tay. Nắm hai đầu màng bọc xoắn tròn lại như gói kẹo để ép khối thịt nén chặt, không có bọt khí bên trong.',
          'Xếp toàn bộ các cây nem vào hộp kín, cho vào ngăn mát tủ lạnh ủ ít nhất 2 - 3 tiếng (hoặc để ngăn đá 35 - 45 phút) cho nem đông cứng định hình.',
        ],
        description:
          'Trải màng bọc thực phẩm, nắn nhân thành từng thanh tròn dài khoảng 7 - 8cm rồi cuộn chặt tay, xoắn hai đầu như chiếc kẹo. Cho nem vào tủ lạnh ủ 2 tiếng để collagen đông kết chắc nịch.',
        tip: 'Tuyệt đối không bỏ qua khâu ủ lạnh: Bì heo chứa lượng collagen dồi dào, khi gặp lạnh sẽ đông keo tự nhiên giúp thanh nem rắn chắc lại. Nhờ đó khi bóc màng bọc và lăn bột, nem giữ nguyên dáng tròn đẹp, không dính tay và không bị vỡ khi rán.',
      },
      {
        step: 3,
        title: 'Bóc vỏ & Kỹ thuật lăn áo bột chiên xù 2 lớp bám siêu chắc',
        time: '10 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Toàn bộ thân nem được bọc kín lớp bột xù bông xốp, hạt bột bám chắc nịch không bị rơi rụng',
        actionPoints: [
          'Lấy nem từ tủ lạnh ra, dùng kéo cắt đầu màng bọc và bóc tách từng thanh nem đã định hình săn chắc ra đĩa.',
          'Pha bột chiên giòn với chút nước lọc thành hỗn hợp sền sệt mỏng (hoặc đánh tan 1 lòng đỏ trứng gà). Đổ bột chiên xù ra khay rộng.',
          'Lăn từng cây nem qua một lớp bột ướt mỏng, sau đó đặt vào khay bột xù, dùng tay lắc nhẹ và ấn khẽ các đầu ngón tay cho hạt bột xù bám kín đều khắp bề mặt nem.',
          'Để nem siêu giòn xù kiểu phố cổ: Nhúng nhẹ thanh nem qua bột ướt lần 2 và lăn tiếp một lớp bột chiên xù thứ hai.',
          'Nhấc thanh nem lên vỗ nhẹ để rơi bớt các mảnh bột xù thừa không bám chặt.',
        ],
        description:
          'Bóc màng bọc thực phẩm khỏi các thanh nem đã đông cứng. Lăn nem qua lớp bột ướt mỏng rồi áo đẫm bột chiên xù panko cho phủ kín đều bề mặt.',
        tip: 'Lăn bột xù 2 lớp tạo nên lớp "áo giáp" vàng giòn rụm bên ngoài, vừa giữ cho nhân thịt bên trong mọng nước ngọt ngào không bị khô, vừa giúp nem giữ được độ giòn xốp suốt 30 - 45 phút sau khi rán.',
      },
      {
        step: 4,
        title: 'Kỹ thuật rán ngập dầu vàng ruộm & Ráo dầu giòn tan bất bại',
        time: '10 - 15 phút',
        heat: 'Lửa vừa (160°C - 170°C)',
        goal: 'Vỏ ngoài vàng ruộm óng ả, lớp bột xù bung giòn rôm rốp, bên trong chín tới dẻo quánh thơm nức tiêu tỏi',
        actionPoints: [
          'Bắc chảo sâu lòng lên bếp, đổ lượng dầu ăn ngập ít nhất 2/3 đến lút thân cây nem.',
          'Bật lửa đun dầu nóng đạt khoảng 160°C - 170°C. Thử đầu đũa gỗ cắm vào đáy chảo thấy bọt khí sủi tăm lăn tăn mạnh là dầu đã đạt nhiệt độ chuẩn.',
          'Hạ lửa vừa, nhẹ nhàng thả từng thanh nem vào chảo. Không thả quá nhiều thanh nem cùng lúc để tránh làm tụt nhiệt dầu đột ngột.',
          'Trong 1 phút đầu, giữ nguyên không đảo để lớp bột xù ngoài se cứng bám chặt. Khi vỏ nem bắt đầu cứng và hơi ngả vàng, dùng đũa lăn nhẹ đều các mặt cho nem chín vàng đều.',
          'Chiên khoảng 4 - 6 phút đến khi vỏ ngoài chuyển màu vàng ruộm cánh gián đẹp mắt, tỏa hương thơm nồng nàn quyến rũ.',
          'Vớt nem ra ngay, đặt dựng đứng trên rack gác chảo hoặc khay có lót giấy thấm dầu để nem ráo dầu triệt để.',
        ],
        description:
          'Đun nóng dầu ngập chảo ở nhiệt độ vừa (160°C - 170°C). Thả từng thanh nem vào chiên ngập dầu từ 4 - 6 phút cho đến khi vỏ vàng ươm bung xù giòn rụm. Vớt ra để ráo dầu và thưởng thức nóng hổi.',
        tip: 'Nhiệt độ dầu là chìa khóa vàng: Nếu dầu chưa đủ nóng nem sẽ ngấm dầu gây ngấy; nếu dầu quá sôi vỏ xù bên ngoài sẽ cháy đen trước khi nhân thịt bên trong kịp chín dẻo. Chiên ngập dầu ở lửa vừa giúp nem giòn xốp bung đều mà không bị nổ.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm nem chua rán phố cổ Hà Nội bất bại tại nhà: 1. Nem chua rán thực chất là "nem ngọt" tươi chưa qua lên men (tuyệt đối KHÔNG DÙNG nem chua đóng gói đem rán vì nem sẽ bị chua gắt, chảy nhão và khét đắng); 2. Thịt xay phải giữ thật lạnh và quết dẻo cùng giò sống, bì heo cạo sạch tinh mỡ thái chỉ mảnh li ti, bắt buộc cuộn chặt tay và ủ lạnh tủ lạnh ít nhất 2 tiếng để collagen tự nhiên đông kết định hình thanh nem; 3. Lăn 2 lớp bột chiên xù và rán ngập dầu ở nhiệt độ 160°C - 170°C, vớt ra để ráo dầu rồi thưởng thức ngay lúc còn nóng bỏng tay, chấm đẫm tương ớt cay nồng ăn kèm dưa leo thanh mát để tận hưởng trọn vẹn lớp vỏ giòn rôm rốp tan biến trong miệng cùng nhân thịt dẻo quánh chuẩn vị ngõ Tạm Thương Hàng Bông.',
    recommendedSauce:
      'Tương ớt xào tỏi kiểu phố cổ hoặc tương ớt Mường Khương cay nồng, ăn kèm dưa chuột thái mỏng giòn ngọt, củ đậu mát lịm và trà đá hoặc trà chanh vỉa hè chuẩn điệu Hà Nội.',
  },
  'doi-sun-nuong-than-hoa': {
    dishId: 'doi-sun-nuong-than-hoa',
    dishName: 'Dồi Sụn Nướng Than Hoa Thơm Lừng Phố Cổ',
    seoTitle: 'Cách Làm Dồi Sụn Nướng Da Giòn Thịt Mềm, Thơm Lừng Khói Than',
    prepTime: '40 - 50 phút (sơ chế lòng non, băm sụn, trộn nhân & nhồi dồi)',
    cookTime: '20 - 25 phút (luộc xăm thoát khí 10 phút + nướng than hoa vàng giòn 15 phút)',
    difficulty: 'Trung bình',
    servings: '4 - 5 người ăn (khoảng 6 - 8 khúc dồi sụn mập mạp)',
    ingredients: [
      {
        category: 'Vỏ dồi lòng non & Sụn heo, thịt nạc vai',
        items: [
          '500g lòng non heo tươi (thành dày, ống tròn nhỏ)',
          '300g sụn non heo (sụn sườn hoặc sụn họng heo băm nhỏ)',
          '300g thịt nạc vai heo xay giắt mỡ',
          '80g mỡ phần heo thái hạt lựu',
          '80g đậu xanh cà vỏ hấp chín tới (hoặc lạc rang giã dập)',
        ],
      },
      {
        category: 'Rau thơm nhân dồi & Gia vị tẩm ướp',
        items: [
          '1 mớ rau răm tươi rửa sạch thái nhỏ',
          '1 mớ húng quế và 1 mớ hành lá thái nhỏ',
          '3 củ hành khô và 1 củ tỏi băm nhuyễn mịn',
          '1 nhánh sả băm nhỏ',
          '2 thìa canh nước mắm cốt ngon',
          '1.5 thìa canh dầu hào',
          '1 thìa canh đường cát trắng',
          '1 thìa canh tiêu sọ giã dập nồng ấm',
          '1/2 thìa cà phê bột ngũ vị hương',
          '2 thìa canh dầu màu điều óng ả',
        ],
      },
      {
        category: 'Sốt phết nướng da giòn & Đồ ăn kèm',
        items: [
          '1 thìa canh mật ong nguyên chất',
          '1 thìa canh dầu màu điều',
          '1/2 thìa cà phê dầu hào',
          'Tương ớt cay nồng hoặc sốt me chua cay',
          'Rau răm tươi, húng quế và dưa leo mát lạnh',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế lòng non sạch khử mùi & Băm sụn trộn nhân thơm lừng',
        time: '20 phút',
        heat: 'Nhiệt độ phòng mát',
        goal: 'Lòng non sạch thơm không rách, nhân dồi dẻo quyện sụn giòn sần sật và dậy mùi thảo mộc',
        actionPoints: [
          'Lòng non bóp nhẹ với muối hạt và nước cốt chanh (hoặc giấm gạo) cả mặt trong lẫn mặt ngoài để khử sạch nhớt và mùi hôi. Xả sạch nhiều lần dưới vòi nước chảy, vuốt nhẹ tay cho ráo kiệt nước (tránh vuốt miết quá mạnh làm dão mỏng da lòng).',
          'Sụn non heo rửa sạch, dùng dao sắc băm nhỏ dạng hạt lựu li ti (không dùng máy xay nát vụn vì sẽ mất độ giòn sần sật sảng khoái khi nhai).',
          'Rau răm, hành lá, húng quế rửa sạch, vẩy thật ráo nước rồi dùng dao thái nhỏ mịn.',
          'Cho vào âu lớn: Thịt nạc vai xay, sụn băm nhỏ, đậu xanh chín, rau thơm thái nhỏ, hành tỏi sả băm nhuyễn.',
          'Nêm 2 thìa canh nước mắm, 1.5 thìa canh dầu hào, 1 thìa canh đường, 1 thìa canh tiêu sọ, bột ngũ vị hương và 2 thìa canh dầu màu điều. Dùng găng tay nhồi bóp đều trong 5 phút cho gia vị ngấm sâu và khối nhân kết dính dẻo quánh.',
        ],
        description:
          'Làm sạch lòng non nhẹ tay với muối chanh. Băm nhỏ sụn non hạt lựu, trộn đều cùng thịt xay, đậu xanh chín, rau răm húng quế thái nhỏ và gia vị mắm tiêu dầu hào cho hòa quyện dẻo thơm.',
        tip: 'Bí quyết giòn sần sật: Sụn heo nhất định phải băm tay hạt lựu nhỏ li ti thay vì xay máy. Đậu xanh hoặc lạc rang giúp nhân dồi có độ xốp bùi, giữ nước ngọt bên trong thịt mà không bị khô cứng.',
      },
      {
        step: 2,
        title: 'Kỹ thuật nhồi dồi lỏng tay & Buộc chỉ định hình từng khúc',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Khúc dồi tròn đều mềm mại, lòng không bị căng cứng hay nhồi quá chặt',
        actionPoints: [
          'Buộc chặt một đầu đoạn lòng non bằng chỉ thực phẩm.',
          'Lồng đầu lòng còn lại vào miệng phễu (hoặc đầu chai nhựa cắt ngắn). Dùng thìa múc từng phần nhân ấn nhẹ nhàng vào lòng.',
          'Dùng tay vuốt nhẹ nhân xuôi dần xuống dưới đáy. Nhồi vừa tay, chỉ làm căng khoảng 75% - 80% thể tích lòng (nhấn tay vào thấy mềm lỏng, có độ phập phồng).',
          'Dùng chỉ thực phẩm buộc chia dồi thành từng khúc dài khoảng 10 - 12cm đều đặn. Buộc thắt nút chặt hai đầu.',
        ],
        description:
          'Lồng lòng non vào miệng phễu, nhồi nhân từ từ và vuốt nhẹ tay. Chỉ nhồi căng 75% - 80% thể tích để dồi mềm lỏng. Dùng chỉ thực phẩm buộc chia khúc 10 - 12cm.',
        tip: 'Quy tắc sống còn chống nổ dồi: Tuyệt đối KHÔNG nhồi quá căng chặt! Khi tiếp xúc nhiệt độ cao, thịt và đậu xanh sẽ nở phồng, mỡ nóng sinh áp suất hơi; nếu nhồi quá căng lòng non sẽ lập tức bục toạc nát bét.',
      },
      {
        step: 3,
        title: 'Luộc sơ lửa nhỏ liu riu & Kỹ thuật xăm lỗ thoát khí chống bục',
        time: '10 - 12 phút',
        heat: 'Lửa nhỏ liu riu (không đun sôi bùng)',
        goal: 'Khúc dồi chín se định hình căng mọng, vỏ lòng săn giòn nguyên vẹn không bị bục rách',
        actionPoints: [
          'Đặt nồi nước lên bếp (thả thêm 1 nhánh gừng đập dập). Đặt các khúc dồi vào từ lúc nước còn nguội hoặc ấm nhẹ.',
          'Bật lửa vừa đun cho nước nóng dần lên. Khi nước bắt đầu lăn tăn sủi tăm và dồi căng mọng lên, dùng tăm nhọn xăm 4 - 5 lỗ đều quanh từng khúc dồi.',
          'Khí và nước mỡ thừa bên trong sẽ xì nhẹ qua các lỗ xăm giúp cân bằng áp suất ruột non hoàn hảo.',
          'Hạ lửa nhỏ liu riu, luộc trong 8 - 10 phút cho nhân bên trong chín tới se lại.',
          'Vớt dồi ra đĩa, để nguội và ráo nước hoàn toàn trước khi đem nướng.',
        ],
        description:
          'Thả dồi vào nồi nước từ lúc nguội, đun lửa vừa. Khi dồi căng mọng dùng tăm nhọn xăm vài lỗ thoát khí để chống nổ bục. Luộc lửa liu riu 10 phút cho chín se rồi vớt ra để ráo.',
        tip: 'Xăm dồi đúng thời điểm: Chỉ xăm khi thấy dồi căng mọng trong nước nóng (không xăm lúc dồi còn sống nguội vì nhân sẽ phì ra lỗ xăm). Luộc chín se 80% trước khi nướng giúp dồi không bao giờ bị sống bên trong hay cháy khét bên ngoài.',
      },
      {
        step: 4,
        title: 'Kỹ thuật nướng than hoa xì xèo & Phết sốt da giòn màu cánh gián',
        time: '12 - 15 phút',
        heat: 'Than hoa đỏ hồng (hoặc nồi chiên không dầu 180°C)',
        goal: 'Vỏ dồi căng bóng vàng ươm màu cánh gián giòn sần sật, mỡ chảy xèo xèo đượm khói thơm nức, bên trong thịt mềm mọng sụn giòn rau ráu',
        actionPoints: [
          'Chuẩn bị bếp than hoa đỏ rực không còn ngọn lửa trần bốc khói đen. Đặt vỉ nướng lên và xếp các khúc dồi sụn lên vỉ.',
          'Nướng trên than hoa lửa vừa, trở mặt liên tục 2 - 3 phút một lần để nhiệt phân bố đều khắp thân dồi.',
          'Khi vỏ dồi bắt đầu se vàng và mỡ tiết ra xì xèo, dùng chổi silicon phết đều hỗn hợp sốt mật ong dầu điều lên khắp bề mặt dồi.',
          'Tiếp tục nướng và phết sốt thêm 1 - 2 lần cho đến khi lớp da chuyển màu nâu đỏ cánh gián óng ả, se giòn rụm và tỏa mùi thơm khói than ngào ngạt.',
          'Gắp dồi ra thớt, dùng dao sắc thái vát xéo thành từng khoanh dày khoảng 1.5 - 2cm. Bày ra đĩa cùng rau răm, húng quế và dưa leo mát lạnh.',
        ],
        description:
          'Nướng dồi trên than hoa đỏ hồng, trở mặt đều tay. Khi vỏ se vàng phết hỗn hợp mật ong dầu điều cho da lên màu cánh gián giòn bóng. Nướng chín thơm nức mùi khói rồi thái khoanh xéo vừa ăn.',
        tip: 'Nếu nướng bằng nồi chiên không dầu: Nướng lần 1 ở 170°C trong 10 phút, phết sốt mật ong dầu điều rồi nướng tiếp lần 2 ở 190°C trong 5 - 7 phút cho da giòn nổ màu cánh gián bóng bẩy.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm dồi sụn nướng da giòn thịt mềm bất bại tại nhà: 1. Làm sạch lòng non nhẹ tay với chanh muối, sụn non băm nhỏ hạt lựu li ti (không xay máy) để giữ trọn độ giòn sần sật "rôm rốp", phối cùng thịt xay có giắt mỡ và đậu xanh hấp bùi xốp; 2. Kỹ thuật nhồi dồi chỉ nhồi căng khoảng 75% - 80% thể tích lòng và vuốt lỏng tay, tuyệt đối không nhồi căng cứng vì khi chín nhân sẽ nở làm bục rách vỏ; 3. Luộc sơ lửa nhỏ liu riu và bắt buộc dùng tăm nhọn xăm thoát khí chống nổ bục trước khi nướng; nướng than hoa lật đều tay và phết sốt mật ong dầu điều để lớp da căng giòn màu cánh gián, mỡ chảy xèo xèo đượm mùi khói thơm nức mũi chấm tương ớt ăn kèm rau răm ấm bụng.',
    recommendedSauce:
      'Tương ớt cay nồng pha chút nước cốt quất tươi hoặc sốt chấm me chua ngọt sệt quánh, muối tiêu chanh ớt, ăn kèm đĩa rau răm tươi, húng quế và dưa chuột thái lát giòn mát giải ngấy.',
  },
  'de-tai-chanh-tuong-ban': {
    dishId: 'de-tai-chanh-tuong-ban',
    dishName: 'Dê Tái Chanh Ninh Bình Chấm Tương Bần Gừng',
    seoTitle: 'Cách Làm Dê Tái Chanh Đậm Đà Cay Nồng, Bén Mồi Chuẩn Quán',
    prepTime: '25 - 30 phút (sơ chế khử mùi thịt dê, thái mỏng & chuẩn bị rau quả chát)',
    cookTime: '10 - 15 phút (hấp sả chín tái hồng đào & bóp trộn tái chanh vừng rang)',
    difficulty: 'Dễ',
    servings: '3 - 4 người ăn (món nhậu bén mồi số 1)',
    ingredients: [
      {
        category: 'Thịt dê núi tươi ngon & Thảo mộc khử mùi',
        items: [
          '500g thịt dê núi tươi có da (đùi hoặc thăn sườn)',
          '1 củ gừng già giã nát và 1 chén rượu trắng khử mùi',
          '4 cây sả đập dập và 5 lá chanh vò nát',
          '1 củ gừng tươi thái lát mỏng',
        ],
      },
      {
        category: 'Gia vị bóp tái chanh & Vừng rang',
        items: [
          '3 - 4 quả chanh tươi vắt lấy nước cốt',
          '1 thìa canh nước mắm ngon truyền thống',
          '1.5 thìa cà phê đường cát trắng',
          '1 thìa cà phê tiêu sọ giã dập',
          '4 cây sả bào mỏng và 2 quả ớt sừng cắt lát',
          '1 củ gừng non thái chỉ mảnh',
          '8 lá chanh tươi thái sợi chỉ',
          '50g vừng trắng rang vàng thơm nức',
        ],
      },
      {
        category: 'Nước chấm tương Bần & Rau củ ăn kèm',
        items: [
          '4 thìa canh tương Bần Hưng Yên hảo hạng',
          '1 củ gừng non giã nhuyễn mịn',
          '1.5 thìa canh đường cát trắng',
          '1 thìa cà phê nước cốt chanh tươi',
          '1 quả ớt hiểm băm nhỏ',
          '1 quả chuối xanh thái lát mỏng',
          '1 quả khế chua và vài quả sung muối giòn',
          'Lá mơ lông, đinh lăng và ngò gai ăn kèm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Khử sạch mùi hôi thịt dê & Kỹ thuật hấp sả gừng chín tái hồng đào',
        time: '15 phút',
        heat: 'Lửa lớn cách thủy',
        goal: 'Thịt dê thơm dịu mùi sả gừng, chín tái hồng đào mọng nước ngọt ngào, da giòn sần sật',
        actionPoints: [
          'Dùng củ gừng già giã nát hòa cùng 1 chén rượu trắng, chà xát kỹ khắp miếng thịt dê và mặt da trong 5 phút để triệt tiêu hoàn toàn mùi gây đặc trưng. Xả lại nhẹ tay bằng nước sạch, dùng khăn sạch thấm khô kiệt nước.',
          'Đặt nồi xửng hấp lên bếp: Rải một lớp dày sả đập dập, gừng thái lát và lá chanh vò nát xuống đáy xửng.',
          'Đặt miếng thịt dê lên trên lớp thảo mộc. Đậy kín vung, bật lửa lớn hấp cách thủy trong khoảng 8 - 10 phút.',
          'Dùng que tăm xiên thử vào phần dày nhất của miếng thịt: Nếu thấy nước ứa ra có màu hơi phớt hồng nhẹ là đạt độ chín tái hồng đào lý tưởng. Tắt bếp, gắp ngay thịt ra đĩa để nguội bớt.',
        ],
        description:
          'Chà xát thịt dê với rượu trắng và gừng giã để khử sạch mùi hôi. Đặt lên xửng lót sả gừng lá chanh hấp cách thủy 8 - 10 phút cho chín tái hồng đào mọng nước.',
        tip: 'Quy tắc chín tái: Tuyệt đối không hấp thịt dê quá kỹ vì thịt sẽ bị co rút khô xác, mất đi độ ngọt mềm tự nhiên và da dê sẽ bị dai nhách khó nhai.',
      },
      {
        step: 2,
        title: 'Kỹ thuật thái thịt dê mỏng dính ngang thớ giữ da giòn',
        time: '10 phút',
        heat: 'Nhiệt độ phòng mát',
        goal: 'Từng lát thịt dê thái mỏng tang đều đặn, phần da giòn dính liền thịt nạc không bị nát',
        actionPoints: [
          'Thịt dê sau khi hấp để nguội bớt (có thể cho vào ngăn mát tủ lạnh 10 phút để thớ thịt săn chắc lại dễ thái).',
          'Đặt miếng thịt lên thớt, dùng dao bản mỏng sắc bén thái thịt thành từng lát mỏng dính ngang thớ.',
          'Mỗi lát thịt cần có cả phần nạc hồng đào mềm mại và viền da mỏng giòn sần sật.',
          'Cho toàn bộ thịt thái mỏng vào âu lớn sạch ráo nước.',
        ],
        description:
          'Để thịt nguội bớt rồi dùng dao sắc thái mỏng tang ngang thớ. Từng lát thịt mềm mọng nước với viền da mỏng giòn sần sật.',
        tip: 'Luôn thái ngang thớ thịt: Thái dọc thớ sẽ khiến thịt dê bị dai. Lát thịt càng mỏng thì khi bóp chanh thịt càng ngấm đều và giữ được độ mềm mọng tan trong miệng.',
      },
      {
        step: 3,
        title: 'Bóp tái chanh tỷ lệ vàng & Trộn sả ớt vừng rang thơm nức',
        time: '5 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Thịt dê ngấm vị chua thanh dịu nhẹ, sả ớt lá chanh bám đều, vừng rang bùi béo dậy mùi thơm nức nở',
        actionPoints: [
          'Rưới từ từ 3 - 4 thìa canh nước cốt chanh tươi vào âu thịt dê. Dùng tay (đeo găng) bóp trộn nhẹ nhàng đều tay trong 2 phút cho thịt ngấm chanh chuyển sang màu trắng ngà tái mềm.',
          'Chắt bớt phần nước cốt chanh thừa tiết ra dưới đáy âu để món ăn khô ráo, không bị sũng nước.',
          'Nêm 1 thìa canh nước mắm ngon, 1.5 thìa cà phê đường cát, 1 thìa cà phê tiêu sọ giã giập và 1 thìa cà phê bột ngọt. Bóp trộn nhẹ tay cho tan đều gia vị.',
          'Tiếp tục trút sả bào mỏng, ớt sừng cắt lát, gừng thái chỉ và lá chanh thái sợi vào đảo đều.',
          'Cuối cùng, rắc 2/3 lượng vừng rang vàng vào trộn đều, để lại một ít rắc lên mặt đĩa trang trí.',
        ],
        description:
          'Rưới nước cốt chanh bóp nhẹ tay cho thịt tái ngà, chắt bớt nước thừa. Nêm mắm đường tiêu rồi trộn đều sả bào, ớt lát, lá chanh thái chỉ và vừng rang vàng thơm phức.',
        tip: 'Chắt bớt nước chua sau khi bóp chanh giúp thịt dê thấm đậm đà gia vị mắm đường tiêu, không bị chua gắt hay ỉu nhão.',
      },
      {
        step: 4,
        title: 'Pha bát tương Bần gừng bốc khói & Bày đĩa nhậu chuẩn quán',
        time: '5 phút',
        heat: 'Thưởng thức tươi mát',
        goal: 'Bát tương Bần nâu sánh ngọt bùi nổi bọt gừng ớt, đĩa dê tái chanh vun cao rực rỡ sắc màu mồi nhậu đỉnh cao',
        actionPoints: [
          'Pha nước chấm: Cho 4 thìa canh tương Bần Hưng Yên vào bát, thêm 1.5 thìa canh đường cát, 1 thìa cà phê nước cốt chanh và gừng non giã nhuyễn. Dùng thìa đánh mạnh tay cho đường tan và tương sủi bọt mịn, rắc thêm vài lát ớt hiểm cay nồng.',
          'Bày đĩa: Gắp dê tái chanh vun ngọn giữa đĩa lớn, rắc nốt phần vừng rang vàng và chút lá chanh thái chỉ lên đỉnh chóp.',
          'Xếp xung quanh đĩa: Chuối xanh thái lát mỏng, khế chua cắt mỏng, quả sung muối, lá mơ lông và ngò gai tươi.',
          'Khi ăn: Lấy một lá mơ lông, đặt lát chuối chát, khế chua, gắp miếng dê tái chanh cuộn tròn lại, chấm ngập bát tương Bần gừng cay bùi và thưởng thức.',
        ],
        description:
          'Đánh tan tương Bần cùng gừng giã nhuyễn, đường, chanh và ớt cho sủi bọt thơm lừng. Bày dê tái chanh ra đĩa rắc đẫm vừng rang, dọn kèm chuối chát, khế chua, lá mơ và tương Bần.',
        tip: 'Linh hồn tương Bần: Tương Bần nhất định phải dùng gừng già giã thật nhuyễn (không băm) để tinh dầu gừng hòa quyện vào hạt đỗ tương lên men, tạo vị bùi ngọt ấm nồng át hoàn toàn tính hàn của thịt dê.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm dê tái chanh da giòn thịt mềm ngọt không hôi chuẩn vị Ninh Bình: 1. Tuyệt đối không rửa thịt dê bằng nước lạnh nhiều lần; dùng rượu trắng và gừng giã nát chà xát kỹ khắp miếng thịt và da để triệt tiêu hoàn toàn mùi hôi gây; 2. Hấp cách thủy trên xửng lót đẫm sả đập dập và lá chanh chỉ từ 8 - 10 phút, khi chọc tăm nước thịt còn ửng hồng thì tắt bếp vớt ra ngay (nếu nấu quá chín thịt dê sẽ co rút khô xác, da bị dai nhách); 3. Thịt phải thái thật mỏng ngang thớ và bóp nhẹ tay cùng nước cốt chanh, sả bào và lá chanh thái chỉ mảnh; bắt buộc chấm cùng tương Bần giã gừng ớt sủi bọt, cuộn chuối chát khế chua để tạo nên sự bùng nổ hương vị chua cay chát bùi bén mồi bậc nhất.',
    recommendedSauce:
      'Bát tương Bần pha gừng non giã nhuyễn ớt cay sủi bọt, ăn kèm đĩa chuối xanh thái mỏng, khế chua, sung muối, lá mơ lông và một chén rượu nếp kim sơn nồng nàn.',
  },
  'ga-nuong-com-lam': {
    dishId: 'ga-nuong-com-lam',
    dishName: 'Gà Nướng Cơm Lam Ống Nứa Tây Bắc',
    seoTitle: 'Cách Làm Gà Nướng Cơm Lam Thơm Ngon Đậm Đà Chuẩn Quán',
    prepTime: '35 - 45 phút (ngâm nếp nương, dồn ống nứa & ướp gà mắc khén)',
    cookTime: '40 - 50 phút (nướng gà than hoa vàng ruộm & nướng cơm lam thơm nức)',
    difficulty: 'Trung bình',
    servings: '4 - 6 người ăn (mẹt gà nướng cơm lam nguyên con)',
    ingredients: [
      {
        category: 'Gà thả đồi & Gia vị ướp thảo mộc Tây Bắc',
        items: [
          '1 con gà ta / gà đồi khoảng 1.2kg - 1.5kg',
          '2 thìa cà phê hạt mắc khén rang giã dập',
          '2 - 3 hạt dổi rừng nướng than giã mịn',
          '2 thìa canh dầu màu điều óng ả',
          '1 thìa canh mật ong rừng nguyên chất',
          '2 thìa canh nước mắm ngon và 1 thìa canh dầu hào',
          '3 cây sả, 3 củ hành tím và 1 củ tỏi băm nhuyễn',
          '1 nắm lá é hoặc lá mắc mật vò dập',
        ],
      },
      {
        category: 'Gạo nếp nương & Ống nứa nướng cơm lam',
        items: [
          '500g gạo nếp nương Tây Bắc ngâm mềm',
          '4 - 6 ống tre / nứa tươi bánh tẻ',
          'Lá chuối rừng tươi làm nút bịt miệng ống',
          'Nước dão dừa hoặc nước suối thanh ngọt',
        ],
      },
      {
        category: 'Chẩm chéo muối hạt & Rau rừng ăn kèm',
        items: [
          '2 thìa canh muối hạt rang khô giã dập',
          '1 thìa cà phê hạt mắc khén và 1/2 hạt dổi giã mịn',
          'Ớt hiểm nướng giã nhuyễn và nước cốt quất tươi',
          'Dưa chuột mát lạnh, rau răm tươi và ngò gai',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế gà mổ phanh kẹp vỉ & Kỹ thuật ướp mắc khén hạt dổi',
        time: '20 phút',
        heat: 'Nhiệt độ phòng mát',
        goal: 'Gà ngấm sâu gia vị thảo mộc rừng, da bóng bẩy dầu điều, thịt dậy mùi thơm cay tê của mắc khén',
        actionPoints: [
          'Gà làm sạch, dùng muối hạt và gừng đập dập chà xát khử sạch mùi hôi, xả sạch và để thật ráo nước.',
          'Dùng dao sắc mổ dọc bụng gà theo đường xương ức, dùng tay ấn mạnh xương sống để phanh phẳng con gà (dáng gà nướng bẹp kiểu Tây Bắc/Tây Nguyên). Dùng mũi dao khía nhẹ vài đường phía trong thớ thịt đùi và lườn.',
          'Hạt mắc khén rang thơm trên chảo lửa nhỏ rồi giã dập; hạt dổi nướng trên than hồng cho nổ phồng thơm ngát rồi giã nhuyễn mịn.',
          'Trộn đều hỗn hợp sốt ướp: Mắc khén, hạt dổi, hành tỏi sả băm, mắm ngon, dầu hào, tiêu, dầu màu điều và lá é vò dập (để lại mật ong quét sau).',
          'Xoa đều sốt ướp khắp mặt trong và mặt ngoài con gà, massage kỹ trong 5 phút. Để gà nghỉ 30 - 45 phút cho ngấm sâu gia vị.',
        ],
        description:
          'Mổ phanh gà, khía nhẹ thớ thịt. Rang mắc khén và nướng hạt dổi giã nhỏ, trộn cùng hành sả mắm dầu điều ướp đều quanh gà trong 30 - 45 phút.',
        tip: 'Rang mắc khén và nướng hạt dổi: Mắc khén và hạt dổi chỉ bung tỏa trọn vẹn hương tinh dầu the cay quyến rũ khi được làm nóng trên lửa than trước khi giã.',
      },
      {
        step: 2,
        title: 'Đong nếp vào ống nứa tươi & Kỹ thuật nút lá chuối giữ hơi',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Nếp đong vừa vặn trong ống nứa, nút lá chuối kín khít giữ trọn tinh dầu nứa non',
        actionPoints: [
          'Gạo nếp nương sau khi ngâm 4 - 6 tiếng, vo sạch nhẹ tay rồi để ráo nước. Trộn đều nếp với 1 thìa cà phê muối hạt nhỏ.',
          'Ống nứa rửa sạch bên ngoài, để ráo.',
          'Dồn gạo nếp từ từ vào từng ống nứa, vừa cho gạo vừa gõ nhẹ đáy ống xuống mặt thớt để hạt nếp dàn đều chặt vừa phải.',
          'Đong gạo nếp chiếm khoảng 80% - 85% chiều dài ống nứa (tuyệt đối không nén quá chặt hay đong đầy miệng).',
          'Rót nước sạch (hoặc nước suối pha chút nước cốt dừa) xăm xắp mặt gạo nếp.',
          'Lấy lá chuối cuộn chặt lại, nút chặt miệng ống nứa để giữ kín hơi nước khi nướng.',
        ],
        description:
          'Trộn gạo nếp ngâm với chút muối. Cho vào ống nứa đầy 80% - 85%, châm nước xăm xắp mặt gạo rồi dùng lá chuối cuộn nút chặt miệng ống.',
        tip: 'Không nén gạo quá chặt: Gạo nếp khi chín sẽ nở to gấp rưỡi; nếu nén quá chặt cơm lam sẽ bị sống sượng ở giữa, ống nứa dễ bị nứt vỡ khi nướng.',
      },
      {
        step: 3,
        title: 'Nướng gà than hoa vàng ruộm & Nướng cơm lam xoay tròn ống nứa',
        time: '35 - 40 phút',
        heat: 'Than hoa đỏ hồng (lửa vừa)',
        goal: 'Da gà giòn rụm màu nâu cánh gián óng ả, thịt ngọt mọng nước đượm khói than, ống nứa cháy xém đều cơm dẻo quánh',
        actionPoints: [
          'Kẹp gà vào thanh tre chẻ đôi (hoặc vỉ nướng hoa). Đặt lên bếp than hoa đỏ rực không khói đen.',
          'Nướng gà ở khoảng cách 25 - 30cm trên mặt than, lật trở vỉ đều tay 5 phút một lần để gà chín đều từ từ không bị khét da.',
          'Đồng thời, xếp các ống cơm lam xung quanh mép bếp than, liên tục xoay tròn ống nứa cho nhiệt truyền đều quanh thân ống.',
          'Khi gà nướng được khoảng 30 phút chín tới 85%, hòa mật ong rừng với chút dầu màu điều, dùng chổi quét đều 1 - 2 lớp lên da gà. Nướng thêm 5 - 7 phút cho da vàng ruộm, óng ả xì xèo mỡ thơm nức.',
          'Khi ống nứa cháy xém đều lớp vỏ ngoài, hơi nước thơm mùi nứa non bốc lên ngào ngạt ở đầu nút lá chuối là cơm lam đã chín dẻo hoàn hảo.',
        ],
        description:
          'Nướng gà kẹp tre và ống nứa trên than hoa đỏ hồng. Lật trở đều tay cho gà chín mọng và cơm lam dẻo thơm. Quét mật ong dầu điều lên da gà ở 5 phút cuối cho vàng óng.',
        tip: 'Thời điểm quét mật ong: Chỉ quét mật ong khi gà đã gần chín hoàn toàn. Nếu quét mật ong từ đầu, đường fructose trong mật ong sẽ cháy đen trước khi thịt gà kịp chín.',
      },
      {
        step: 4,
        title: 'Chẻ vỏ nứa lộ áo lụa trắng & Chặt gà bày mẹt tre chuẩn quán',
        time: '10 phút',
        heat: 'Thưởng thức khi còn nóng hổi',
        goal: 'Thanh cơm lam bọc màng lụa trắng dẻo thơm nguyên vẹn, mẹt gà nướng chặt miếng óng ả chấm muối hạt dổi',
        actionPoints: [
          'Lấy ống cơm lam ra, dùng dao sắc gọt chẻ bỏ lớp vỏ cật nứa cháy đen bên ngoài, chỉ để lại lớp màng lụa mỏng màu trắng ngà ôm sát thân cơm.',
          'Dùng dao cắt thanh cơm lam thành từng khúc dài 5 - 7cm vừa tay cầm.',
          'Gà nướng để nguội bớt 3 phút cho thịt nghỉ giữ trọn nước ngọt, sau đó dùng dao sắc chặt thành từng miếng vừa ăn (hoặc để nguyên con xé tay kiểu ăn bốc dân dã).',
          'Bày gà nướng vàng ruộm và các khúc cơm lam lên mẹt tre lót lá chuối tươi.',
          'Pha bát muối hạt dổi mắc khén: Cho muối hạt rang, mắc khén, hạt dổi nướng và ớt hiểm giã nhuyễn vào đĩa, vắt nước cốt quất tươi đánh đều.',
          'Cầm khúc cơm lam dẻo thơm chấm muối hạt dổi, ăn kèm miếng thịt gà đồi ngọt lịm da giòn rụm và rau rừng thơm ngát.',
        ],
        description:
          'Chẻ bỏ vỏ cật nứa cháy ngoài, giữ lại lớp lụa trắng bọc cơm dẻo. Chặt gà bày lên mẹt tre lót lá chuối cùng cơm lam, chấm muối hạt rang mắc khén hạt dổi.',
        tip: 'Lớp màng lụa nứa non: Lớp màng trắng mỏng bọc quanh cơm lam chính là tinh túy giữ cho cơm không bị dính tay, vừa thơm ngát hương rừng vừa dẻo ngọt đậm đà.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm gà nướng cơm lam Tây Bắc thơm ngon đậm đà chuẩn quán: 1. Gà chọn gà thả đồi thịt săn chắc, mổ phanh kẹp thanh tre nướng trên than hoa đỏ hồng lật đều tay; mắc khén và hạt dổi phải rang hoặc nướng chín trên than trước khi giã thì mới tỏa trọn hương thơm the cay nồng nàn; phết mật ong dầu điều ở công đoạn cuối để da gà vàng ruộm bóng bẩy mà không bị cháy khét; 2. Ống nứa phải chọn ống tươi bánh tẻ; khi dồn gạo chỉ cho nếp đầy khoảng 80% - 85% ống nứa để chừa không gian cho hạt nếp nở dẻo, nút chặt bằng lá chuối rừng nướng xoay tròn trên than đến khi nứa cháy xém đều và tỏa mùi thơm ngào ngạt; 3. Chẻ bỏ lớp cật nứa cháy ngoài giữ lại lớp màng lụa mỏng trắng ngà bọc quanh thanh cơm lam dẻo thơm, ăn kèm miếng gà nướng ngọt thịt chấm đẫm chén muối hạt rang mắc khén hạt dổi cay the đỉnh cao ẩm thực đại ngàn.',
    recommendedSauce:
      'Chén muối hạt rang giã mắc khén hạt dổi ớt rừng nướng cay tê đầu lưỡi hoặc muối ớt xanh lá é Tây Nguyên, ăn cùng thanh cơm lam dẻo quánh thơm nức mùi tre nứa non.',
  },

  'lau-ga-la-e': {
    dishId: 'lau-ga-la-e',
    dishName: 'Lẩu Gà Lá É Đà Lạt Thơm Nồng Cay Ấm',
    seoTitle: 'Cách Nấu Lẩu Gà Lá É Thơm Nồng Cay Ấm Chuẩn Vị Phú Yên & Đà Lạt',
    prepTime: '25 phút',
    cookTime: '35 phút',
    difficulty: 'Dễ',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Thịt gà ta thả vườn & Lá é tươi',
        items: [
          '1 con gà ta thả vườn (1.3 - 1.5kg), thịt săn chắc, da vàng óng, làm sạch chặt miếng vừa ăn',
          '300g lá é trắng tươi non (thảo mộc họ húng thơm the nồng mùi tinh dầu chanh sả đặc trưng xứ lạnh)',
          '300g măng le tươi (hoặc măng chua thái miếng vừa ăn, luộc xả nước cho bớt chua)',
          '200g nấm bào ngư xám (hoặc nấm rơm tươi) ngâm nước muối loãng xé miếng vừa ăn',
        ],
      },
      {
        category: 'Gia vị giã nhuyễn & Nước dùng ngọt thanh',
        items: [
          '15 - 20 trái ớt xiêm xanh (ớt hiểm rừng) giã nhuyễn cùng 2 thìa cà phê muối hột, 4 củ hành tím và 4 nhánh sả đập dập (linh hồn cay ấm nồng nàn)',
          '1 quả dừa xiêm tươi lấy nước (nấu nước lẩu ngọt thanh dịu mát tự nhiên)',
          'Gia vị nêm: 2 thìa canh nước mắm nhĩ cốt, 1 thìa canh đường phèn, 1 thìa cà phê hạt nêm, tiêu sọ xay',
        ],
      },
      {
        category: 'Bún tươi & Muối chấm thịt gà',
        items: [
          '1kg bún tươi sợi nhỏ',
          'Đĩa muối chấm: Muối hột giã nhuyễn với ớt xiêm xanh và vài đọt lá é tươi, vắt nước cốt chanh',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế gà ta và ướp thịt với ớt xiêm xanh, muối hột, sả',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Thịt gà sạch mùi tanh, ngấm sâu vị cay ấm nồng nàn của ớt xiêm và sả',
        actionPoints: [
          'Gà ta xát muối hạt và gừng đập dập rửa sạch, để thật ráo nước rồi chặt miếng vừa ăn.',
          'Cho ớt xiêm xanh, sả cắt lát, hành tím và 2 thìa cà phê muối hột vào cối đá giã thật nhuyễn.',
          'Ướp 2/3 phần hỗn hợp ớt sả giã nhuyễn vào thịt gà cùng 1 thìa nước mắm ngon và chút tiêu xay trong 20 phút.',
        ],
        description:
          'Chặt gà miếng vừa ăn. Giã nhuyễn ớt xiêm xanh, sả, hành tím với muối hột. Ướp 2/3 hỗn hợp này vào thịt gà cùng nước mắm ngon và tiêu trong 20 phút cho thấm đượm vị cay thơm.',
        tip: 'Ớt xiêm xanh giã cùng muối hột là bí quyết truyền thống của người Phú Yên giúp thịt gà dậy mùi thơm the nồng ấm mà không bị cay gắt.',
      },
      {
        step: 2,
        title: 'Xào săn thịt gà và nấu nước lẩu dừa tươi ngọt thanh',
        time: '15 phút',
        heat: 'Lửa lớn rồi hạ vừa',
        goal: 'Thịt gà săn chắc bóng bẩy, nước dùng dừa tươi ngọt thanh ngập tràn hương sả ớt',
        actionPoints: [
          'Đun nóng 1 thìa canh dầu ăn trong nồi lẩu, cho 1/3 hỗn hợp sả ớt còn lại vào phi thơm lừng.',
          'Trút thịt gà đã ướp vào đảo thật nhanh tay trên lửa lớn trong 5 phút cho thớ thịt săn chắc lại.',
          'Đổ nước của 1 quả dừa xiêm tươi cùng 1.5 lít nước lọc vào nồi gà, đun sôi bùng rồi hạ lửa vừa, vớt sạch bọt cho nước trong veo.',
        ],
        description:
          'Phi thơm phần sả ớt còn lại, trút thịt gà vào xào săn trên lửa lớn. Đổ nước dừa tươi và nước lọc vào đun sôi, hạ lửa vừa hớt bọt cho nước dùng trong và ngọt thanh.',
      },
      {
        step: 3,
        title: 'Thả măng le, nấm ngọt và nêm nếm nước lẩu thanh dịu',
        time: '10 phút',
        heat: 'Lửa vừa sôi lăn tăn',
        goal: 'Măng và nấm chín giòn ngọt, nước lẩu đậm đà hài hòa vị mặn ngọt cay ấm',
        actionPoints: [
          'Cho măng le luộc chín và nấm bào ngư vào nồi lẩu nấu trong 5 phút cho tiết vị ngọt giòn.',
          'Nêm 2 thìa canh nước mắm nhĩ ngon, đường phèn và chút hạt nêm sao cho nước lẩu có hậu vị ngọt thanh dịu mát, cay the êm dịu.',
          'Đun sôi liu riu trên bếp lẩu tại bàn ăn, sẵn sàng nhúng lá é.',
        ],
        description:
          'Cho măng le và nấm bào ngư vào nồi nấu chín tới. Nêm nước mắm cốt nhĩ, đường phèn cho tròn vị ngọt thanh cay ấm. Đặt nồi lẩu sôi lăn tăn trên bếp tại bàn.',
      },
      {
        step: 4,
        title: 'Nhúng lá é bốc khói nghi ngút và thưởng thức',
        time: '3 phút',
        heat: 'Nồi lẩu sôi sùng sục',
        goal: 'Lá é chín tái thơm the dịu mát, thịt gà ngọt mềm dai giòn, bún nóng ngập nước dùng cay ấm',
        actionPoints: [
          'Lá é nhặt lấy ngọn non và lá tươi, rửa sạch để ráo.',
          'Khi nồi lẩu sôi sùng sục, nhúng từng nắm lá é vào nước lẩu khoảng 10 - 15 giây cho lá vừa chín tái là vớt ra chén ăn ngay.',
          'Múc thịt gà dai ngọt, măng le, nấm và nước lẩu chan vào tô bún tươi.',
          'Chấm miếng thịt gà ta vào chén muối ớt xiêm xanh lá é vắt chanh chua cay mặn mòi, xì xụp từng thìa nước lẩu ấm sực giữa tiết trời se lạnh!',
        ],
        description:
          'Nhặt lá é tươi để ráo. Khi nước lẩu sôi bùng, nhúng từng nhúm lá é chín tái ăn ngay cùng bún tươi, thịt gà và măng nấm. Chấm thịt gà vào đĩa muối ớt xiêm xanh lá é vắt chanh để cảm nhận trọn vẹn phong vị Đà Lạt.',
        tip: 'Lá é chỉ nhúng chín tái rồi ăn liền; không để lá é trong nồi lẩu quá lâu kẻo lá bị nát nhũn, chuyển màu thâm đen và mất đi hương thơm tinh dầu the mát quý giá.',
      },
    ],
    chefSecret:
      'Lẩu gà lá é KHÔNG nấu chua cay như lẩu Thái; vị ngon tinh túy của món ăn nằm ở nước dùng ngọt thanh khiết từ xương gà thả đồi và nước dừa tươi, quyện cùng vị cay nồng ấm từ ớt xiêm xanh giã nhuyễn với muối hột; lá é chỉ nhúng tái ăn liền giúp giải cảm, ấm bụng và tạo nên hương vị gây thương nhớ.',
    recommendedSauce:
      'Đĩa muối hột giã nhuyễn cùng ớt xiêm xanh và lá é non, vắt thêm nước cốt chanh tươi chua cay mặn mòi chấm đẫm thịt gà dai ngọt.',
  },

  'banh-mi-xiu-mai-da-lat': {
    dishId: 'banh-mi-xiu-mai-da-lat',
    dishName: 'Bánh Mì Xíu Mại Chén Đà Lạt Nóng Hổi',
    seoTitle: 'Cách Làm Bánh Mì Xíu Mại Chén Đà Lạt Nóng Hổi Chuẩn Vị Phố Sương Mù',
    prepTime: '25 phút',
    cookTime: '35 phút',
    difficulty: 'Dễ',
    servings: '4 - 5 phần',
    ingredients: [
      {
        category: 'Viên xíu mại mềm mọng & Da heo giòn sần sật',
        items: [
          '400g thịt nạc vai heo xay nhuyễn (dắt 20% mỡ giúp viên thịt béo mềm ngọt, không khô xác)',
          '100g giò sống (mọc heo) dẻo quánh giúp viên xíu mại kết dính dai giòn tự nhiên',
          '1/2 củ sắn (củ đậu) băm nhỏ, vắt ráo bớt nước (bí quyết tạo độ giòn ngọt mọng nước bên trong viên thịt)',
          '1/2 ổ bánh mì khô xé vụn ngâm chút sữa tươi vắt ráo (giúp viên xíu mại xốp mềm không bị chai cứng)',
          '150g da heo làm sạch, luộc chín cắt miếng vuông vừa ăn',
          '4 cây chả lụa hoặc chả quế que nhỏ',
          'Gia vị ướp thịt: 1 thìa canh nước mắm ngon, 1 thìa cà phê tiêu đen xay, 1 thìa hạt nêm, hành tím và tỏi băm nhuyễn, 1 thìa dầu màu điều',
        ],
      },
      {
        category: 'Nước xúp cà chua xương hầm thanh ngọt',
        items: [
          '500g xương ống hoặc sườn heo ninh lấy 1.5 lít nước dùng trong veo',
          '2 quả cà chua chín đỏ băm nhuyễn',
          '1 thìa canh dầu màu điều phi thơm lấy màu đỏ cam óng ả',
          'Hành lá thái nhỏ, ngò rí, mỡ hành óng ả, ớt sa tế cay nồng',
          'Gia vị: 1.5 thìa canh nước mắm ngon, 1 thìa canh đường phèn, hạt nêm, muối hạt',
        ],
      },
      {
        category: 'Bánh mì ăn kèm giòn rụm',
        items: ['4 - 5 ổ bánh mì vỏ giòn ruột xốp nướng nóng hổi'],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Trộn và vo viên xíu mại xốp mềm mọng nước',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Viên thịt xíu mại tròn căng đều đặn, kết dính dẻo mịn, điểm xuyết củ sắn giòn ngọt',
        actionPoints: [
          'Cho thịt xay, giò sống, củ sắn đã vắt ráo và vụn bánh mì vào âu lớn.',
          'Thêm hành tỏi băm, nước mắm, tiêu xay, hạt nêm và 1 thìa dầu màu điều.',
          'Dùng tay nhồi trộn và quết nhẹ liên tục trong 5 phút cho hỗn hợp dẻo quyện kết dính.',
          'Thoa chút dầu ăn lên lòng bàn tay, vo thịt thành từng viên tròn cỡ quả trứng gà nhỏ (khoảng 8 - 10 viên).',
        ],
        description:
          'Trộn thịt xay, giò sống, củ sắn vắt ráo và vụn bánh mì với gia vị, tiêu, tỏi hành và dầu điều. Quết đều tay cho dẻo dính rồi vo thành từng viên tròn cỡ quả trứng gà nhỏ.',
        tip: 'Vắt ráo nước ở củ sắn trước khi trộn để viên xíu mại không bị nhão, giữ được độ giòn ngọt mọng nước khi hấp chín.',
      },
      {
        step: 2,
        title: 'Hấp chín viên xíu mại giữ trọn vị ngọt thịt',
        time: '15 phút',
        heat: 'Lửa vừa hơi nước mạnh',
        goal: 'Viên xíu mại chín căng mọng, tiết ra nước thịt ngọt ngào không bị vỡ nát',
        actionPoints: [
          'Xếp các viên xíu mại vào đĩa sâu lòng, đặt vào xửng hấp cách thủy trên lửa vừa trong 12 - 15 phút.',
          'Khi thịt chín săn chắc, lấy đĩa xíu mại ra. Giữ lại toàn bộ phần nước thịt tiết ra trong đĩa để đổ vào nồi nước xúp.',
        ],
        description:
          'Xếp xíu mại vào đĩa sâu lòng hấp cách thủy 12 - 15 phút cho chín tới. Giữ lại nước thịt tiết ra từ đĩa để nấu nước xúp cho ngọt đậm đà.',
      },
      {
        step: 3,
        title: 'Nấu nồi nước xúp cà chua xương hầm thanh ngọt',
        time: '15 phút',
        heat: 'Lửa vừa',
        goal: 'Nước xúp màu đỏ cam óng ả sóng sánh, vị ngọt thanh từ xương và cà chua, da heo giòn sần sật',
        actionPoints: [
          'Đun nóng 1 thìa dầu màu điều, phi thơm hành tím băm rồi cho cà chua băm nhuyễn vào xào chín mềm tạo màu đỏ cam đẹp mắt.',
          'Trút nước hầm xương và toàn bộ nước hấp xíu mại vào nồi cà chua đun sôi bùng.',
          'Thả các viên xíu mại đã hấp chín và da heo luộc vào nồi, hạ lửa nhỏ nấu liu riu trong 10 phút cho ngấm vị.',
          'Nêm nước mắm cốt, đường phèn và muối hạt cho vừa miệng, có vị ngọt thanh thanh dịu nhẹ.',
        ],
        description:
          'Xào chín cà chua với dầu điều tạo màu đỏ cam óng ả. Đổ nước hầm xương và nước hấp thịt vào đun sôi, thả xíu mại và da heo vào đun liu riu 10 phút. Nêm nước mắm, đường phèn cho ngọt thanh.',
      },
      {
        step: 4,
        title: 'Múc xíu mại ra chén nóng, rưới mỡ hành và chấm bánh mì giòn tan',
        time: '5 phút',
        heat: 'Nóng hổi bốc khói',
        goal: 'Chén xíu mại nóng hổi bốc khói ngùn ngụt, viên thịt mềm ngọt ngập nước xúp óng ả mỡ hành và ớt sa tế',
        actionPoints: [
          'Làm nóng chén sứ nhỏ. Múc vào mỗi chén 2 viên xíu mại, vài miếng da heo giòn sần sật và 1 cây chả que.',
          'Chan ngập nước xúp cà chua đang sôi sùng sục vào chén.',
          'Rắc nhiều hành lá, ngò rí thái nhỏ, rưới 1 thìa mỡ hành óng ả và một thìa ớt sa tế cay nồng lên trên cùng chút tiêu xay.',
          'Nướng nóng bánh mì cho giòn rụm; bẻ từng miếng bánh mì chấm đẫm vào chén xúp xíu mại nóng bỏng tay thưởng thức ngay!',
        ],
        description:
          'Múc 2 viên xíu mại, da heo và chả que vào chén nhỏ, chan ngập nước xúp nóng hổi. Rắc hành ngò, mỡ hành, tiêu và ớt sa tế cay xè. Bẻ bánh mì giòn tan chấm đẫm vào chén xúp ấm sực giữa trời sương mù Đà Lạt.',
      },
    ],
    chefSecret:
      'Bánh mì xíu mại Đà Lạt chuẩn vị phải thưởng thức trong từng chén nhỏ nghi ngút khói: 1. Viên thịt béo mềm mọng nước nhờ củ sắn giòn ngọt và vụn bánh mì; 2. Nước xúp ninh từ xương heo và cà chua xào dầu điều thanh ngọt; 3. Không thể thiếu miếng da heo dai giòn sần sật, mỡ hành thơm nức và ớt sa tế cay xé lưỡi, bẻ miếng bánh mì nóng giòn chấm ngập chén xúp làm tan biến cái lạnh cao nguyên.',
    recommendedSauce:
      'Nước xúp xíu mại đậm đà thơm ngát mỡ hành và ớt sa tế cay nồng, ăn kèm chả que và da heo giòn sần sật.',
  },

  'banh-trang-nuong-da-lat': {
    dishId: 'banh-trang-nuong-da-lat',
    dishName: 'Bánh Tráng Nướng Đà Lạt Trứng Cút Mỡ Hành',
    seoTitle: 'Cách Làm Bánh Tráng Nướng Đà Lạt Giòn Rụm Chuẩn Vị Pizza Việt Nam',
    prepTime: '10 phút',
    cookTime: '15 phút',
    difficulty: 'Dễ',
    servings: '4 - 5 cái',
    ingredients: [
      {
        category: 'Vỏ bánh tráng nướng',
        items: [
          '4 - 5 cái bánh tráng mè hoặc bánh tráng gạo tròn chuyên nướng (loại dày vừa phải, không dễ rách)',
        ],
      },
      {
        category: 'Topping chuẩn vị xe đẩy Đà Lạt',
        items: [
          '8 - 10 quả trứng cút tươi (hoặc 2 quả trứng gà)',
          '3 thìa canh bơ thực vật vàng óng béo ngậy',
          '1 chén mỡ hành lá xanh mướt óng ả (hành lá thái nhỏ dội dầu nóng)',
          '50g tép khô đỏ (ruốc sấy cay mặn ngọt)',
          '2 cây xúc xích (hoặc lạp xưởng) thái lát mỏng',
          '50g chà bông heo (ruốc thịt) tơi xốp hoặc thịt băm xào chín',
          '4 miếng phô mai con bò cười (hoặc phô mai Mozzarella kéo sợi béo ngậy)',
        ],
      },
      {
        category: 'Nước sốt rưới bánh',
        items: [
          'Sốt mayonnaise béo ngậy',
          'Tương ớt cay nồng đậm đà',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Làm nóng vỉ than hoa hoặc chảo chống dính',
        time: '3 phút',
        heat: 'Lửa than hoa đỏ hồng / Lửa nhỏ chảo chống dính',
        goal: 'Nhiệt độ đều, không quá nóng kẻo làm cháy bánh tráng',
        actionPoints: [
          'Nếu nướng than: Quạt than hoa đỏ rực không để bốc khói hay ngọn lửa.',
          'Nếu làm tại nhà: Đặt chảo chống dính đáy dày lên bếp ở lửa nhỏ vừa cho nóng chảo.',
          'Đặt 1 chiếc bánh tráng lên vỉ than (hoặc lòng chảo khô).',
        ],
        description:
          'Làm nóng vỉ than hoa hoặc chảo chống dính trên lửa nhỏ vừa. Đặt chiếc bánh tráng phẳng lên mặt vỉ hoặc chảo khô.',
      },
      {
        step: 2,
        title: 'Quết bơ, mỡ hành và tán đều trứng cút',
        time: '3 phút',
        heat: 'Lửa nhỏ vừa xoay tròn bánh',
        goal: 'Trứng chín đều quyện bơ mỡ hành phủ kín mặt bánh, bánh tráng bắt đầu phồng giòn',
        actionPoints: [
          'Quết 1 thìa cà phê bơ vàng và 1 thìa mỡ hành lên mặt bánh tráng.',
          'Đập 2 quả trứng cút tươi trực tiếp lên mặt bánh.',
          'Dùng muỗng hoặc cọ quét nhanh tay tán đều trứng, bơ và mỡ hành khắp bề mặt bánh tráng.',
          'Liên tục dùng tay xoay tròn chiếc bánh tráng trên vỉ/chảo để nhiệt tỏa đều, mép bánh không bị cháy.',
        ],
        description:
          'Quết bơ và mỡ hành, đập 2 quả trứng cút rồi dùng muỗng tán đều khắp mặt bánh. Xoay tròn bánh tráng liên tục trên lửa nhỏ cho trứng bắt đầu chín se mặt và quyện thơm nức mùi bơ hành.',
        tip: 'Tán mỏng trứng thật nhanh tay khi bánh vừa nóng ấm để trứng chín đều mịn màng mà không làm ỉu bánh tráng.',
      },
      {
        step: 3,
        title: 'Rải đều các loại topping phong phú lên mặt bánh',
        time: '3 phút',
        heat: 'Lửa nhỏ',
        goal: 'Topping nóng giòn, phô mai tan chảy béo ngậy, bánh tráng giòn rụm từ viền vào tâm',
        actionPoints: [
          'Khi trứng vừa chín tới, rải đều tép khô đỏ, xúc xích thái lát mỏng, chà bông heo và tán nhỏ miếng phô mai lên trên.',
          'Tiếp tục xoay đều bánh tráng trên lửa nhỏ cho phô mai tan chảy, vỏ bánh tráng phía dưới vàng ruộm giòn tan.',
        ],
        description:
          'Rải đều tép khô đỏ, xúc xích, chà bông và phô mai lên mặt bánh. Xoay đều bánh thêm 2 - 3 phút cho phô mai tan chảy quyện vào topping, đáy bánh vàng ruộm giòn tan rôm rốp.',
      },
      {
        step: 4,
        title: 'Rưới sốt mayonnaise, tương ớt và gấp đôi thưởng thức giòn tan',
        time: '1 phút',
        heat: 'Thưởng thức nóng giòn',
        goal: 'Chiếc bánh tráng nướng vàng ruộm thơm nức, cắn vào giòn tan rôm rốp, béo ngậy cay cay ngọt mặn bùng nổ',
        actionPoints: [
          'Rưới sốt mayonnaise và tương ớt thành đường zíc zắc đan xen lên toàn bộ mặt bánh.',
          'Dùng kẹp khéo léo gập đôi chiếc bánh tráng lại (hoặc để nguyên chiếc cắt miếng tam giác kiểu pizza).',
          'Cho vào giấy gói cầm tay và cắn ngay một miếng khi bánh còn nóng bỏng tay, cảm nhận tiếng vỡ giòn tan rôm rốp!',
        ],
        description:
          'Rưới mayonnaise và tương ớt lên mặt, gấp đôi bánh lại hoặc để nguyên chiếc. Cầm tay cắn ngay khi còn nóng giòn cảm nhận trọn vẹn vị béo bùi, giòn rụm đậm đà của Pizza Việt Nam.',
      },
    ],
    chefSecret:
      'Tuyệt chiêu nướng bánh tráng Đà Lạt giòn rụm không cháy nằm ở động tác: 1. Nướng ở lửa nhỏ vừa và xoay tròn bánh tráng liên tục trên mặt vỉ than hoặc lòng chảo để nhiệt tỏa đều từ tâm ra mép; 2. Đập trứng cút và tán mỏng nhanh tay khi bánh vừa ấm nóng; 3. Sự kết hợp giữa bơ thơm, phô mai dẻo béo ngậy, tép khô cay ngọt và tương ớt mayonnaise tạo nên món "Pizza đường phố" gây nghiện.',
    recommendedSauce:
      'Sốt mayonnaise béo ngậy đan xen tương ớt cay nồng đậm đà rưới zíc zắc lên bề mặt bánh nóng giòn.',
  },

  'bun-bo-hue-chay': {
    dishId: 'bun-bo-hue-chay',
    dishName: 'Bún Bò Huế Chay Nấm Đậu Hũ Thơm Nồng',
    seoTitle: 'Cách Nấu Bún Bò Huế Chay Thanh Đạm, Đậm Đà Chuẩn Vị Cơm Chay',
    prepTime: '25 phút',
    cookTime: '40 phút',
    difficulty: 'Dễ',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Nước dùng rau củ quả ngọt thanh (Không dùng xương)',
        items: [
          '1 bắp ngô ngọt, 1 củ cải trắng, 1 củ sắn (củ đậu), 1 củ cà rốt, 1 quả lê (hoặc quả táo/mía lau ngọt lịm)',
          '6 nhánh sả cây đập dập bó tròn (linh hồn tạo hương thơm nồng nàn của bún bò xứ Huế)',
          '1 mẩu gừng nướng thơm đập dập, 1 củ hành boa-rô (tỏi tây) cắt khúc',
        ],
      },
      {
        category: 'Nhân bún bò chay đậm đà',
        items: [
          '2 miếng đậu hũ trắng cắt vuông chiên vàng giòn',
          '150g nấm đùi gà (hoặc nấm rơm, nấm đông cô tươi) thái lát vừa ăn',
          '50g bò lát chay ngâm nở mềm, vắt ráo nước, ướp tiêu hạt nêm chay rồi xào săn',
          '100g chả lụa chay cắt lát tròn',
          '50g tàu hũ ky (váng đậu) chiên phồng giòn rụm',
        ],
      },
      {
        category: 'Sa tế sả ớt & Gia vị nước lèo',
        items: [
          '2 thìa canh dầu màu điều óng ả',
          '3 thìa canh sả băm nhuyễn, 1 thìa ớt bột Huế và ớt băm cay nồng',
          '2 thìa canh chao trắng tán nhuyễn (bí quyết gia truyền tạo vị bùi béo và hậu vị đượm đà thay thế mắm ruốc chay)',
          'Gia vị: 1.5 thìa canh đường phèn, 2 thìa cà phê hạt nêm nấm chay, muối hạt',
        ],
      },
      {
        category: 'Sợi bún & Rau ghém ăn kèm',
        items: [
          '1kg sợi bún bò Huế to dẻo dai',
          'Bắp chuối bào, rau muống chẻ sợi, giá đỗ tươi, rau húng quế, ngò gai, chanh tươi',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Ninh nước dùng rau củ quả ngọt thanh tự nhiên cùng sả cây đập dập',
        time: '30 phút',
        heat: 'Lửa vừa liu riu',
        goal: 'Nước dùng trong veo, ngọt lịm tự nhiên từ củ quả tươi, dậy mùi sả thơm ngát',
        actionPoints: [
          'Ngô ngọt, củ sắn, củ cải, cà rốt và lê gọt vỏ rửa sạch cắt khúc lớn.',
          'Cho tất cả củ quả vào nồi cùng 2.5 lít nước, thêm sả cây đập dập, gừng nướng và chút muối hạt.',
          'Đun sôi bùng rồi hạ lửa nhỏ ninh liu riu trong 30 phút cho củ quả tiết trọn vị ngọt tự nhiên, sau đó vớt bỏ xác củ quả.',
        ],
        description:
          'Cắt khúc bắp ngọt, củ sắn, củ cải, cà rốt và lê cho vào nồi ninh cùng sả cây đập dập, gừng nướng trong 30 phút lấy nước dùng ngọt thanh tự nhiên, vớt bỏ xác.',
        tip: 'Ninh củ quả trên lửa liu riu và hớt bọt để nước dùng trong vắt, có vị ngọt hậu sâu lắng mà không cần mì chính hay bột ngọt.',
      },
      {
        step: 2,
        title: 'Xào sa tế sả ớt dầu điều và chao trắng dậy mùi thơm nức',
        time: '5 phút',
        heat: 'Lửa nhỏ',
        goal: 'Sa tế sả ớt màu đỏ cam óng ả, thơm nồng quyện vị béo ngậy của chao trắng',
        actionPoints: [
          'Đun nóng dầu màu điều trên chảo, cho sả băm và boa-rô vào phi vàng thơm lừng.',
          'Thêm ớt bột Huế và ớt băm vào đảo đều tạo màu đỏ đẹp mắt.',
          'Cho 2 thìa chao trắng tán nhuyễn vào đảo đều trên lửa nhỏ trong 1 phút cho tan quyện.',
        ],
        description:
          'Phi thơm sả băm, boa-rô với dầu điều, thêm ớt bột Huế và 2 thìa chao trắng tán nhuyễn đảo đều tay tạo hỗn hợp sa tế màu đỏ cam béo bùi thơm nức.',
        tip: 'Chao trắng tán nhuyễn xào cùng sa tế là tuyệt kỹ giúp nước lèo bún bò chay có độ béo ngậy và vị thơm mằn mặn đặc trưng y hệt mắm ruốc Cố Đô.',
      },
      {
        step: 3,
        title: 'Xào nấm, bò lát chay và nêm nếm nồi nước lèo đậm đà',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Nấm và bò lát chay ngấm vị đậm đà, nước lèo óng ả dậy mùi sả thơm nức',
        actionPoints: [
          'Trút bò lát chay và nấm vào chảo sa tế xào săn trong 3 phút với 1 thìa hạt nêm nấm chay.',
          'Trút toàn bộ phần nhân xào và đậu hũ chiên vào nồi nước dùng củ quả đang sôi lăn tăn.',
          'Nêm đường phèn, muối hạt và hạt nêm chay cho vị nước lèo thanh đạm, đậm đà vừa vặn.',
        ],
        description:
          'Xào săn bò lát chay và nấm cùng sa tế, rồi trút vào nồi nước dùng củ quả cùng đậu hũ chiên. Nêm đường phèn, muối và hạt nêm nấm cho nước lèo đậm đà vừa miệng.',
      },
      {
        step: 4,
        title: 'Trụng sợi bún to, xếp nhân chả nấm và chan nước lèo nóng hổi',
        time: '5 phút',
        heat: 'Nước dùng sôi sùng sục',
        goal: 'Tô bún bò chay bốc khói ngùn ngụt, màu sắc đỏ cam rực rỡ, vị thanh ngọt đậm đà đánh thức mọi giác quan',
        actionPoints: [
          'Chần sợi bún to qua nước sôi cho nóng dẻo rồi xếp vào tô.',
          'Gắp đậu hũ chiên, nấm, bò lát chay, lát chả lụa chay và miếng tàu hũ ky giòn rụm xếp lên mặt tô.',
          'Rắc hành boa-rô, ngò gai thái nhỏ và chan ngập nước lèo sa tế đang sôi sùng sục.',
          'Vắt chút chanh tươi, ăn kèm đĩa rau bắp chuối bào, rau muống chẻ giòn mát thưởng thức nóng hổi!',
        ],
        description:
          'Trụng bún xếp vào tô, bày đậu hũ, nấm, bò lát chay, chả lụa chay và tàu hũ ky giòn rụm lên trên. Rắc ngò gai boa-rô rồi chan ngập nước lèo sôi sùng sục. Thưởng thức nóng cùng bắp chuối bào và chanh ớt.',
      },
    ],
    chefSecret:
      'Nấu bún bò Huế chay đậm đà không hề khó: 1. Nước dùng nấu từ bắp ngọt, củ sắn, lê và sả cây đập dập tạo vị ngọt thanh khiết tự nhiên; 2. Chao trắng tán nhuyễn xào cùng sa tế sả ớt dầu điều tạo nên vị béo ngậy, thơm nồng mằn mặn thay thế trọn vẹn cho mắm ruốc Huế truyền thống.',
    recommendedSauce:
      'Chén sa tế sả ớt rim dầu điều cay tê lưỡi cùng chanh tươi vắt vào tô bún bốc khói ngùn ngụt.',
  },

  'muc-mot-nang-nuong-sa-te': {
    dishId: 'muc-mot-nang-nuong-sa-te',
    dishName: 'Mực Một Nắng Nướng Than Hoa Sa Tế Cay Xè',
    seoTitle: 'Cách Làm Mực Nướng Sa Tế Giòn Sần Sật, Thơm Lừng Khói Than Chuẩn Quán',
    prepTime: '20 phút',
    cookTime: '15 phút',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Mực tươi ngon mình dày',
        items: [
          '1kg mực một nắng (hoặc mực lá, mực ống tươi con lớn, thân dày cộm, thịt trắng phau)',
          '1 củ gừng tươi đập dập và 2 thìa canh rượu trắng rửa khử tanh mực',
        ],
      },
      {
        category: 'Sốt ướp sa tế nướng chuẩn quán nhậu',
        items: [
          '2 thìa canh sa tế tôm cay nồng (có lẫn ớt rim và sả băm)',
          '1 thìa canh dầu hào ngon',
          '1 thìa canh mật ong nguyên chất (giúp mực lên màu cánh gián óng ả và giữ thớ thịt mọng ngọt)',
          '1 thìa canh nước mắm cốt nhĩ',
          '1 thìa cà phê tiêu sọ đen giã dập, 1 thìa cà phê hạt nêm',
          '1 củ tỏi và 2 củ hành tím băm nhuyễn, 1 thìa canh dầu màu điều',
        ],
      },
      {
        category: 'Rau ăn kèm & Đồ chấm',
        items: [
          'Rau răm tươi cay ấm, dưa leo giòn mát',
          'Chén muối ớt xanh Nha Trang chua cay sánh mịn (hoặc muối tiêu chanh ớt hiểm)',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế mực sạch sẽ và khía vảy rồng đều tay',
        time: '10 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Mực sạch tinh tươm, ráo nước hoàn toàn, vết khía đẹp mắt nở hoa khi nướng',
        actionPoints: [
          'Mực rửa qua nước pha rượu trắng và gừng đập dập để khử sạch mùi tanh.',
          'Dùng khăn sạch hoặc khăn giấy bếp thấm thật khô ráo toàn bộ thân mực.',
          'Dùng dao sắc khía các đường chéo đan hình carô (vảy rồng) trên bề mặt thân mực.',
        ],
        description:
          'Rửa mực với rượu gừng khử tanh, thấm thật khô ráo. Dùng dao sắc khía hình carô vảy rồng đều tay trên thân mực để mực ngấm sốt và nở bung đẹp mắt khi nướng.',
        tip: 'Phải thấm thật khô ráo thân mực trước khi ướp sốt để mực bám gia vị và khi nướng không bị chảy nước làm mềm nhão thớ thịt.',
      },
      {
        step: 2,
        title: 'Pha sốt sa tế dầu hào mật ong và tẩm ướp mực',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Sốt sa tế sánh đỏ óng ánh bám đều đặn khắp các thớ mực',
        actionPoints: [
          'Cho vào bát gồm sa tế tôm, dầu hào, mật ong, nước mắm, tiêu sọ, hạt nêm, tỏi hành băm và dầu màu điều khuấy đều thành hỗn hợp sốt sánh mịn.',
          'Thoa đều sốt ướp lên khắp thân mực và các rãnh khía vảy rồng.',
          'Để mực thấm gia vị trong 15 - 20 phút trước khi nướng.',
        ],
        description:
          'Khuấy đều sa tế, dầu hào, mật ong, nước mắm, tiêu, tỏi hành băm và dầu điều. Thoa đều sốt lên thân mực và các rãnh khía, ướp trong 15 - 20 phút.',
        tip: 'Mật ong trong sốt ướp giúp thịt mực giữ trọn độ mọng nước tự nhiên, không bị teo khô xác khi nướng trên nhiệt độ cao.',
      },
      {
        step: 3,
        title: 'Nướng mực trên than hoa đỏ rực vàng ruộm xém cạnh',
        time: '8 - 10 phút',
        heat: 'Than hoa đỏ rực / Nồi chiên không dầu 190°C',
        goal: 'Mực cong tròn nở bung vảy rồng, màu vàng ruộm xém cạnh tươm mỡ, bốc khói thơm nức mũi mùi sa tế',
        actionPoints: [
          'Kẹp mực vào vỉ nướng, đặt lên bếp than hoa đỏ rực không có khói đen.',
          'Nướng trên lửa lớn, trở mặt liên tục 1 - 2 phút một lần để mực chín đều.',
          'Trong quá trình nướng, dùng cọ quét thêm lớp sốt sa tế còn lại lên bề mặt mực cho mực bóng bẩy đậm đà.',
          'Nướng khoảng 6 - 8 phút đến khi thân mực phồng căng, thịt chuyển màu trắng đục và viền ngoài xém vàng cánh gián là chín tới hoàn hảo.',
        ],
        description:
          'Kẹp mực lên vỉ than hoa đỏ rực, trở mặt liên tục và quét thêm sốt sa tế trong lúc nướng. Nướng 6 - 8 phút cho mực phồng căng, nở bung vảy rồng xém vàng thơm nức mùi khói.',
        tip: 'Mực chín rất nhanh; nướng lửa lớn và trở mặt đều tay trong 6 - 8 phút, tuyệt đối không nướng quá lâu kẻo mực bị dai và mất độ ngọt tự nhiên.',
      },
      {
        step: 4,
        title: 'Cắt miếng vừa ăn và thưởng thức cùng muối ớt xanh',
        time: '3 phút',
        heat: 'Thưởng thức nóng',
        goal: 'Miếng mực nướng giòn sần sật mọng nước, vị cay xé lưỡi quyện ngọt thơm béo ngậy',
        actionPoints: [
          'Dùng kéo hoặc dao sắc cắt thân mực thành từng miếng dài vừa ăn theo đường khía vảy rồng.',
          'Bày mực ra đĩa, trang trí rau răm tươi và dưa leo thái lát xung quanh.',
          'Chấm từng miếng mực nướng nóng hổi vào chén muối ớt xanh Nha Trang chua cay sánh mịn, cảm nhận độ giòn sần sật ngọt lịm mọng nước!',
        ],
        description:
          'Cắt mực thành từng miếng vừa ăn bày lên đĩa cùng rau răm, dưa leo. Chấm miếng mực nướng nóng hổi vào chén muối ớt xanh chua cay sánh mịn, cắn ngập miệng cảm nhận thớ mực giòn sần sật ngọt lịm.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng cho món mực nướng sa tế chuẩn quán nhậu: 1. Thấm thật khô ráo mực và khía vảy rồng giúp sốt ngấm sâu và miếng mực nở bung bắt mắt; 2. Cho mật ong vào sốt ướp giúp thịt mực giữ nước ngọt mềm và lên màu cánh gián hấp dẫn; 3. Nướng nhanh tay trên than đỏ rực trong 6 - 8 phút để thớ mực đạt độ giòn sần sật hoàn hảo, không bị khô dai.',
    recommendedSauce:
      'Chén muối ớt xanh Nha Trang chua cay thơm ngậy lá chanh hoặc muối tiêu chanh ớt hiểm chấm đẫm thớ mực giòn sần sật.',
  },

  'heo-quay-banh-hoi': {
    dishId: 'heo-quay-banh-hoi',
    dishName: 'Heo Quay Da Giòn Bánh Hỏi Mỡ Hành',
    seoTitle: 'Cách Làm Heo Quay Bánh Hỏi Da Nổ Giòn Rụm, Đậm Đà Chuẩn Vị Gia Đình',
    prepTime: '30 phút',
    cookTime: '45 phút',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Thịt heo quay nổ bì giòn rụm',
        items: [
          '1kg thịt ba rọi (ba chỉ) heo tươi, thớ thịt nạc mỡ đan xen đều đặn, lớp bì mỏng phẳng',
          'Gia vị ướp thịt nạc: 1 thìa cà phê ngũ vị hương, 1 thìa canh nước mắm nhĩ ngon, 1 thìa cà phê bột tỏi, 1 thìa cà phê bột hành, 1 thìa cà phê tiêu trắng xay, 1/2 thìa đường, 1/2 thìa dầu hào',
          'Hỗn hợp quét da nổ giòn tan: 1 thìa canh giấm trắng + 1 thìa cà phê muối tinh',
        ],
      },
      {
        category: 'Bánh hỏi & Mỡ hành hẹ thơm nức',
        items: [
          '500g bánh hỏi tươi sợi nhỏ mịn màng dẻo dai (hoặc bánh hỏi khô hấp mềm)',
          '1 nắm hành lá và lá hẹ tươi thái nhỏ',
          '4 thìa canh mỡ heo nóng (hoặc dầu ăn) + vài thìa tóp mỡ rán vàng giòn rụm',
        ],
      },
      {
        category: 'Rau sống & Nước mắm tỏi ớt chua ngọt',
        items: [
          'Rau sống tươi: Xà lách, rau diếp cá, húng quế, kinh giới, tía tô, dưa leo xắt thanh',
          'Đồ chua củ cải cà rốt ngâm giấm đường, củ kiệu chua ngọt',
          'Nước mắm kẹo: 3 thìa canh nước mắm nhĩ cốt, 3 thìa canh đường vàng, 3 thìa canh nước ấm, 1.5 thìa canh nước cốt chanh, tỏi ớt băm nhuyễn nổi bồng bềnh',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế thịt ba chỉ, luộc sơ da và xăm lỗ chân lông đều tay',
        time: '15 phút',
        heat: 'Lửa vừa chần da',
        goal: 'Mặt da sạch sẽ, xăm đều chi chít để khi nướng da nổ phồng rộp giòn tan',
        actionPoints: [
          'Cạo sạch lông tơ ở bì heo, xát muối chanh rửa sạch.',
          'Cho miếng thịt vào nồi nước sôi úp phần da xuống đáy, luộc sơ phần da trong 3 - 5 phút cho da vừa chín tới rồi vớt ra ngâm nước lạnh.',
          'Dùng dĩa hoặc kim xăm nhọn xăm đều chi chít khắp bề mặt da (xăm nông đều tay, tránh đâm sâu vào lớp mỡ).',
          'Dùng khăn giấy bếp lau thật khô ráo toàn bộ nước và mỡ ứa ra trên mặt da.',
        ],
        description:
          'Chần chín phần da heo 3 - 5 phút, vớt ra ngâm nước lạnh. Dùng kim hoặc dĩa xăm đều chi chít lên da rồi lấy khăn giấy thấm thật khô ráo mồ hôi nước trên mặt da.',
        tip: 'Chỉ xăm lớp bì ngoài, không đâm thủng lớp mỡ kẻo mỡ trào lên làm ỉu bì khi nướng.',
      },
      {
        step: 2,
        title: 'Tẩm ướp gia vị thịt và quét giấm muối lên da sấy khô',
        time: '15 phút',
        heat: 'Nhiệt độ phòng / Quạt gió',
        goal: 'Thịt ngấm đều gia vị ngũ vị hương thơm nức, mặt da khô cong se lại',
        actionPoints: [
          'Khía vài đường nông trên phần thịt nạc để ngấm gia vị.',
          'Xoa đều hỗn hợp ngũ vị hương, nước mắm, bột tỏi hành, tiêu, dầu hào lên các mặt thịt nạc (tuyệt đối không để dính vào da).',
          'Quét một lớp mỏng giấm trắng trộn muối tinh lên khắp bề mặt da.',
          'Để miếng thịt trước quạt gió hoặc trong ngăn mát tủ lạnh 30 phút cho mặt da thật khô ráo.',
        ],
        description:
          'Xoa đều gia vị ngũ vị hương, mắm tiêu tỏi lên phần thịt nạc (không dính vào da). Quét một lớp giấm muối mỏng lên da rồi để trước quạt cho mặt da thật khô se lại.',
      },
      {
        step: 3,
        title: 'Nướng thịt ba chỉ nổ bì da giòn rụm rôm rốp',
        time: '35 - 40 phút',
        heat: 'Nồi chiên không dầu 180°C - 200°C / Lò nướng',
        goal: 'Bì heo nổ phồng rộp lấm tấm vàng ruộm giòn tan, thịt nạc bên trong mềm mọng nước không bị khô',
        actionPoints: [
          'Bọc giấy bạc xung quanh các mặt thịt nạc, chỉ để lộ phần da lên trên.',
          'Nướng lần 1 ở 180°C trong 25 phút cho thịt chín đều và da săn lại.',
          'Lấy ra gạt bỏ lớp muối khô trên da nếu có, tăng nhiệt độ lên 200°C nướng tiếp trong 12 - 15 phút.',
          'Quan sát thấy lớp da nổ lách tách phồng rộp đều khắp mặt, màu vàng ruộm giòn tan thì lấy ra để nguội 5 phút.',
        ],
        description:
          'Bọc giấy bạc quanh thịt nạc để hở da, nướng 180°C trong 25 phút. Tăng nhiệt lên 200°C nướng tiếp 12 - 15 phút đến khi bì nổ lách tách phồng rộp vàng ruộm giòn tan.',
        tip: 'Sau khi nướng xong, để thịt nghỉ 5 phút trên thớt rồi dùng dao sắc lật ngửa phần da xuống thớt chặt dứt khoát thành từng miếng vừa ăn để da không bị vỡ vụn.',
      },
      {
        step: 4,
        title: 'Thoa mỡ hành hẹ lên bánh hỏi, chặt thịt heo quay và thưởng thức',
        time: '5 phút',
        heat: 'Thưởng thức tươi ngon',
        goal: 'Miếng heo quay da giòn rụm quyện bánh hỏi dẻo mềm mướt mỡ hành, chấm ngập nước mắm tỏi ớt kẹo',
        actionPoints: [
          'Hành lá và lá hẹ thái nhỏ cho vào bát sứ, dội mỡ heo sôi vào làm mỡ hành óng ả, trộn thêm tóp mỡ giòn.',
          'Gỡ từng miếng bánh hỏi tươi dẻo mịn xếp ra đĩa, dùng cọ phết đẫm mỡ hành hẹ óng ả lên mặt.',
          'Chặt thịt heo quay da giòn xếp đều bên cạnh đĩa bánh hỏi.',
          'Bày đĩa rau sống, dưa leo, đồ chua và bát nước mắm tỏi ớt chua ngọt kẹo sánh.',
          'Gắp miếng bánh hỏi mềm mướt kẹp cùng miếng thịt heo quay da nổ giòn tan, chấm ngập vào chén nước mắm đậm đà bùng nổ vị giác!',
        ],
        description:
          'Dội mỡ heo nóng vào hành lá và lá hẹ làm mỡ hành thơm nức. Thoa đẫm mỡ hành lên bánh hỏi dẻo mềm, chặt thịt heo quay da giòn xếp ra đĩa cùng rau sống đồ chua. Chấm ngập vào chén nước mắm tỏi ớt kẹo thưởng thức.',
      },
    ],
    chefSecret:
      'Tuyệt chiêu làm heo quay da nổ giòn rụm: 1. Chần sơ phần da, xăm đều chi chít nhưng xăm nông không đâm vào lớp mỡ; 2. Lau thật khô ráo mồ hôi nước trên da và quét lớp giấm muối mỏng sấy khô cong trước khi nướng; 3. Nướng 2 mức nhiệt (180°C chín thịt rồi nâng 200°C nổ bì) giúp da phồng rộp rôm rốp để lâu không bị ỉu mà thịt nạc mỡ vẫn ngọt mềm mọng nước.',
    recommendedSauce:
      'Bát nước mắm tỏi ớt chua ngọt pha kẹo sền sệt, điểm xuyết đồ chua củ cải cà rốt và củ kiệu giòn ngọt.',
  },

  'hu-tieu-nam-vang-kho': {
    dishId: 'hu-tieu-nam-vang-kho',
    dishName: 'Hủ Tiếu Nam Vang Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    seoTitle: 'Cách Nấu Hủ Tiếu Nam Vang Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    prepTime: '30 phút',
    cookTime: '1.5 - 2 giờ',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Xương & Nguyên liệu hầm nước dùng thanh ngọt',
        items: [
          '1kg xương ống heo hoặc xương đuôi, sườn non heo tươi ngon',
          '100g tôm khô loại 1 (ngâm nước ấm 15 phút, rửa sạch cát)',
          '1 con mực khô cỡ vừa (nướng vàng thơm lừng, xé đôi đập dập - bí quyết nước lèo ngọt sâu)',
          '1 củ cải trắng lớn (gọt vỏ, cắt khoanh tròn dày 2cm)',
          '1 củ hành tây nướng xém cạnh, bóc lớp vỏ cháy bên ngoài',
          '1 bó rễ ngò rí (5 - 6 gốc ngò rí rửa sạch đất, thả vào nồi nước dùng tỏa hương thanh khiết)',
          'Gia vị nêm nước dùng: 2 thìa canh đường phèn, 2 thìa canh muối hạt, 2 thìa canh nước mắm nhĩ ngon, 1 thìa cà phê hạt nêm',
        ],
      },
      {
        category: 'Topping thập cẩm chuẩn vị Nam Vang',
        items: [
          '300g tôm sú tươi (chọn tôm còn nhảy, luộc vừa chín tới bóc vỏ chừa đuôi)',
          '300g thịt nạc dăm hoặc nạc thăn heo tươi (luộc chín trong nồi nước dùng rồi thái lát mỏng)',
          '200g thịt heo xay nhuyễn (xào tơi thơm cùng tỏi phi và tiêu sọ)',
          '200g gan heo & tim heo tươi (ngâm sữa tươi khử mùi, luộc chín tới ngâm nước đá)',
          '12 - 15 quả trứng cút luộc chín, bóc sạch vỏ',
          '150g mỡ gáy heo thái hạt lựu (thắng tóp mỡ giòn rụm) & 1 chén tỏi băm phi vàng ruộm',
        ],
      },
      {
        category: 'Sợi hủ tiếu, Rau sống & Nước sốt trộn khô',
        items: [
          '500g sợi hủ tiếu dai Sa Đéc (hoặc hủ tiếu khô Mỹ Tho)',
          'Rau ăn kèm: Cần tàu (cần tây lá nhỏ), hẹ lá tươi cắt khúc, giá đỗ sống, xà lách tần ô, chanh, ớt hiểm',
          'Sốt trộn hủ tiếu khô đặc chế: 2 thìa canh hắc xì dầu (hoặc tương đen ngọt), 1 thìa canh dầu hào, 1 thìa canh nước tương, 1 thìa cà phê đường phèn, 2 thìa canh nước dùng hầm xương, 1 thìa dầu tỏi phi thơm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế sạch xương & Ninh nước dùng thanh ngọt cùng hải sản khô',
        time: '20 phút (ninh 1.5 - 2 giờ)',
        heat: 'Lửa lớn đun sôi rồi hạ lửa nhỏ liu riu',
        goal: 'Nước dùng trong vắt như hổ phách, ngọt lịm từ tủy xương và mực khô nướng, thơm mát hương rễ ngò',
        actionPoints: [
          'Xương heo chặt khúc, chần trong nồi nước sôi pha 1 thìa muối và gừng đập dập trong 3 - 5 phút cho nhả sạch bọt máu đọng. Vớt ra rửa sạch từng khúc xương dưới vòi nước lạnh.',
          'Nướng mực khô trên lửa nhỏ đến khi thơm nức mũi, dùng chày đập dập rồi xé đôi. Tôm khô ngâm nước ấm 15 phút, rửa sạch để ráo.',
          'Cho xương heo vào nồi cùng 3.5 - 4 lít nước lọc. Thả mực khô nướng, tôm khô, củ cải trắng, hành tây nướng và rễ ngò rí vào cùng.',
          'Đun sôi bùng lên thì hạ lửa nhỏ liu riu. Hớt sạch bọt nổi trong 15 phút đầu và tuyệt đối KHÔNG đậy nắp vung để nước dùng trong vắt.',
          'Nêm 2 thìa canh đường phèn và muối hạt. Ninh liu riu trong 1.5 - 2 giờ cho xương tiết trọn vị ngọt tự nhiên.',
        ],
        description:
          'Chần sạch xương heo với nước sôi pha gừng muối rồi rửa kỹ. Cho xương vào ninh cùng mực khô nướng thơm, tôm khô, củ cải trắng, hành tây nướng và rễ ngò rí trên lửa liu riu, hớt bọt thường xuyên để nước dùng trong vắt, ngọt thanh đậm đà.',
        tip: 'Mực khô nướng và rễ ngò rí là 2 bí quyết gia truyền tạo nên hương vị đặc trưng không thể lẫn của hủ tiếu Nam Vang: Mực nướng tạo độ ngọt sâu đọng lại nơi cuống họng, còn rễ ngò đánh tan hoàn toàn mùi tanh của thịt xương.',
      },
      {
        step: 2,
        title: 'Luộc tôm, thịt nạc, gan tim & Xào thịt băm thơm nức',
        time: '25 phút',
        heat: 'Lửa vừa',
        goal: 'Thịt luộc trắng giòn ngọt mọng, gan bùi béo không thâm, tôm đỏ au và thịt băm tơi xốp đậm vị',
        actionPoints: [
          'Thả miếng thịt nạc heo vào nồi nước dùng đang ninh, luộc chín trong 20 phút. Vớt ra ngâm ngay vào âu nước đá lạnh pha vài giọt cốt chanh để thịt săn chắc, giữ màu trắng đẹp không bị thâm, sau đó thái lát mỏng.',
          'Gan heo và tim heo rửa sạch, ngâm sữa tươi không đường 15 phút để khử độc và tanh. Luộc chín tới trong nồi nhỏ riêng pha chút giấm và gừng, vớt ra ngâm nước đá rồi thái lát mỏng vừa ăn.',
          'Tôm sú luộc chín tới trong 3 - 4 phút, vớt ra bóc vỏ chừa đuôi. Phần nước luộc tôm gạn lấy nước trong đổ ngược vào nồi nước dùng hầm xương để tăng thêm vị ngọt hải sản.',
          'Xào thịt băm: Đun nóng 1 thìa mỡ heo trong chảo, phi thơm tỏi băm rồi trút 200g thịt heo xay vào đảo nhanh tay trên lửa lớn. Nêm 1 thìa cà phê hạt nêm, 1/2 thìa tiêu sọ xay. Đảo đều cho thịt chín tơi xốp, thơm lừng thì múc ra bát.',
        ],
        description:
          'Luộc chín thịt nạc, tôm sú, gan và tim heo rồi ngâm nước đá lạnh để giữ độ giòn ngọt và màu sắc tươi sáng. Thịt heo xay xào săn trên lửa lớn với tỏi phi và tiêu cho hạt thịt tơi xốp thơm nồng.',
        tip: 'Gan heo chỉ nên luộc chín tới khoảng 8 - 10 phút; ngâm ngay vào nước đá lạnh sẽ giúp miếng gan giòn mềm, bùi béo mà không hề bị khô xác hay thâm xỉn.',
      },
      {
        step: 3,
        title: 'Thắng tóp mỡ, phi tỏi giòn rụm & Nấu sốt trộn hủ tiếu khô',
        time: '15 phút',
        heat: 'Lửa nhỏ đến vừa',
        goal: 'Tóp mỡ giòn rôm rốp, tỏi phi vàng óng thơm nức mũi và chén sốt trộn khô sánh kẹo đậm đà',
        actionPoints: [
          'Mỡ heo cắt hạt lựu, cho vào chảo cùng 2 thìa canh nước và 1 nhúm muối nhỏ. Đun lửa vừa cho nước cạn và mỡ tự tiết ra, đảo đều tay đến khi tóp mỡ teo lại vàng giòn thì vớt ra để ráo dầu.',
          'Dùng phần mỡ heo vừa thắng, cho chén tỏi băm nhuyễn vào phi trên lửa nhỏ. Khi tỏi vừa chuyển sang màu vàng nhạt thì tắt bếp ngay, hơi nóng của dầu sẽ làm tỏi chín vàng ruộm giòn tan mà không bị đắng.',
          'Nấu sốt hủ tiếu khô: Cho vào chảo nhỏ 2 thìa canh hắc xì dầu (hoặc tương đen), 1 thìa canh dầu hào, 1 thìa canh nước tương, 1 thìa cà phê đường phèn và 2 thìa canh nước hầm xương. Khuấy đều trên lửa nhỏ cho sốt tan sánh sền sệt, tắt bếp múc thêm 1 thìa dầu tỏi phi thơm.',
        ],
        description:
          'Thắng tóp mỡ heo giòn rụm và phi tỏi băm vàng ruộm. Nấu hỗn hợp sốt trộn khô gồm hắc xì dầu, dầu hào, nước tương, đường phèn và nước hầm xương cho sánh mịn đậm đà.',
        tip: 'Tỏi phi thơm và tóp mỡ giòn rụm chính là linh hồn đánh thức khứu giác của tô hủ tiếu Nam Vang; nhớ vớt tỏi ra khi vừa ngả vàng rơm kẻo để trong chảo dầu nóng tỏi sẽ bị cháy sẫm và đắng.',
      },
      {
        step: 4,
        title: 'Trụng sợi hủ tiếu & Trình bày thưởng thức (Hủ Tiếu Nước & Hủ Tiếu Khô)',
        time: '10 phút',
        heat: 'Nước trụng sôi sùng sục - Thưởng thức nóng',
        goal: 'Sợi hủ tiếu dai mướt bóng bẩy không dính chùm, topping đầy đặn hấp dẫn, nước dùng nóng bốc khói ngào ngạt',
        actionPoints: [
          'Trụng hủ tiếu: Đun sôi một nồi nước riêng. Cho từng vắt hủ tiếu vào vợt trụng nhanh trong 15 - 20 giây cho sợi vừa chín tới, nhấc ra rảy thật ráo nước rồi cho ngay vào tô, rưới 1 thìa dầu tỏi phi xóc đều cho sợi tơi bóng thơm lừng.',
          'Thưởng thức Hủ Tiếu Nước: Xếp giá đỗ và hẹ lá cắt khúc dưới đáy tô, cho hủ tiếu lên trên. Bày lần lượt tôm sú, thịt nạc lát, gan heo, tim heo, trứng cút, 1 thìa thịt băm xào, cần tàu và rắc tóp mỡ, tỏi phi lên mặt. Chan nước dùng sôi sùng sục ngập mặt tô, rắc thêm tiêu xay.',
          'Thưởng thức Hủ Tiếu Khô: Cho hủ tiếu đã trụng vào tô, rưới 2 thìa sốt trộn khô sánh mịn và trộn đều cho từng sợi hủ tiếu thấm đẫm màu nâu óng ả. Xếp đầy đủ topping tôm thịt, tóp mỡ, tỏi phi lên trên. Múc một chén nước dùng hầm xương nóng hổi rắc hành ngò rí, tiêu sọ để bên cạnh húp kèm.',
        ],
        description:
          'Trụng nhanh sợi hủ tiếu qua nước sôi rồi trộn dầu tỏi phi cho tơi bóng. Xếp topping tôm sú, thịt nạc, gan, thịt băm, trứng cút, tóp mỡ và cần tàu hẹ lá. Tùy sở thích chan nước dùng sôi sùng sục (hủ tiếu nước) hoặc rưới sốt trộn đậm đà kèm chén súp nóng hổi (hủ tiếu khô).',
        tip: 'Sợi hủ tiếu chỉ trụng nhanh 15-20 giây trong nước sôi già; trụng quá lâu sợi sẽ bị nhũn nát mất đi độ dai giòn đặc trưng.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng nấu nước dùng Hủ Tiếu Nam Vang thanh ngọt đỉnh cao: 1. Ninh xương cùng Mực Khô Nướng và Tôm Khô tạo hậu vị ngọt hậu tự nhiên đọng lại sâu trong cổ họng; 2. Thả vài gốc Rễ Ngò Rí vào nồi nước dùng tạo hương thơm thảo mộc thanh tao đặc trưng xứ Nam; 3. Nêm hoàn toàn bằng Đường Phèn và muối hạt thay vì bột ngọt hay đường cát để nước lèo trong veo, thanh tao và không bao giờ bị gắt cổ.',
    recommendedSauce:
      'Chấm cùng chén nước tương tỏi ớt hiểm hoặc đĩa ớt ngâm giấm chua cay, vắt thêm miếng chanh tươi và ăn kèm rau cần tàu giòn ngọt mát lạnh.',
  },

  'hu-tieu-go-sai-gon': {
    dishId: 'hu-tieu-go-sai-gon',
    dishName: 'Hủ Tiếu Gõ Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    seoTitle: 'Cách Nấu Hủ Tiếu Gõ Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    prepTime: '25 phút',
    cookTime: '1.5 giờ',
    difficulty: 'Dễ',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Xương & Nước dùng thanh ngọt bí truyền xe gõ',
        items: [
          '800g - 1kg xương ống heo hoặc xương bay heo (chọn xương tươi, tủy đỏ hồng)',
          '500g xương gà (ninh cùng xương heo giúp nước trong vắt và ngọt thanh tao)',
          '50g tôm khô loại ngon (ngâm nước ấm 15 phút, rửa sạch cát)',
          '1 con khô mực nhỏ hoặc râu mực khô (nướng thơm vàng, đập dập - bí quyết mùi thơm xe gõ đêm)',
          '1 củ cải trắng & 1 củ sắn (củ đậu) gọt vỏ cắt khoanh dày (tạo vị ngọt mát tự nhiên của nước lèo)',
          '1 củ hành tây nướng thơm lột vỏ, vài cọng rễ ngò rí rửa sạch',
          'Gia vị nấu nước dùng: 2 thìa canh đường phèn, 2 thìa canh muối hạt, 2 thìa canh nước mắm nhĩ, 1 thìa cà phê hạt nêm',
        ],
      },
      {
        category: 'Topping bình dân đúng chuẩn hủ tiếu gõ Sài Gòn',
        items: [
          '300g thịt nạc thăn hoặc nạc dăm heo tươi (luộc chín trong nồi nước dùng, thái lát mỏng tang)',
          '1 khoanh móng giò heo hoặc 300g sườn non chặt khúc vừa ăn (tùy thích)',
          '150g thịt heo xay nhuyễn (xào tơi với hành tím, tiêu xay thơm lừng)',
          '150g bò viên gân (khía hoa chữ thập, thả vào nồi nước dùng cho nở giòn dai)',
          '10 quả trứng cút luộc bóc vỏ (tùy thích)',
          '150g mỡ gáy heo thái hạt lựu (thắng tóp mỡ giòn rụm) & 1 chén hành tím, tỏi băm phi vàng thơm',
        ],
      },
      {
        category: 'Sợi hủ tiếu, Rau ăn kèm & Nước chấm',
        items: [
          '500g sợi hủ tiếu dai khô (hủ tiếu Sa Đéc hoặc Mỹ Tho)',
          '1 bó hẹ lá tươi cắt khúc ngắn (linh hồn không thể thiếu của hủ tiếu gõ)',
          '200g giá đỗ tươi giòn, hành lá thái nhỏ, ngò rí, tiêu đen xay thơm nồng',
          'Ăn kèm: Chanh tươi, ớt hiểm đỏ thái lát, ớt ngâm giấm chua cay, nước tương (xì dầu) nguyên chất',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế sạch xương & Ninh nước dùng thanh ngọt từ củ sắn, tôm khô',
        time: '15 phút (ninh 1.5 giờ)',
        heat: 'Lửa lớn đun sôi rồi hạ lửa nhỏ liu riu',
        goal: 'Nước lèo trong vắt không váng bẩn, ngọt mát tự nhiên từ tủy xương và củ quả, thoang thoảng mùi mực nướng thơm nức',
        actionPoints: [
          'Chặt xương heo và xương gà thành khúc vừa. Đun sôi nồi nước với 1 thìa muối và vài lát gừng, thả toàn bộ xương vào chần trong 3 - 5 phút cho nhả sạch bọt máu đọng. Vớt ra xả rửa từng khúc xương thật sạch dưới vòi nước lạnh.',
          'Mực khô nướng trên lửa nhỏ cho thơm nức mũi, đập dập xé nhỏ. Tôm khô ngâm nước ấm 15 phút, rửa sạch để ráo.',
          'Cho xương heo và xương gà vào nồi cùng 3.5 - 4 lít nước lọc. Cho mực nướng, tôm khô, củ cải trắng, củ sắn (củ đậu) cắt khúc, hành tây nướng và rễ ngò rí vào cùng.',
          'Đun sôi bùng lên thì hạ lửa nhỏ liu riu. Hớt sạch bọt nổi trong 10 - 15 phút đầu, giữ nồi nước sôi lăn tăn và tuyệt đối KHÔNG đậy nắp vung để nước dùng trong vắt.',
          'Nêm 2 thìa canh đường phèn và muối hạt. Ninh liu riu trong 1 - 1.5 giờ cho xương và củ quả tiết trọn vị ngọt thanh mát.',
        ],
        description:
          'Chần sạch xương heo và xương gà rồi rửa kỹ. Cho xương vào ninh cùng mực khô nướng, tôm khô, củ cải trắng, củ sắn (củ đậu) và hành tây nướng trên lửa nhỏ, hớt bọt thường xuyên để nước dùng trong vắt, ngọt thanh dịu mát chuẩn vị xe gõ.',
        tip: 'Bí quyết nước dùng hủ tiếu gõ ngọt thanh mát dịu nằm ở Củ Sắn (củ đậu) và Xương Gà: Củ sắn ninh giúp nước ngọt thanh tự nhiên mà không bị gắt đường, còn xương gà giúp nước lèo trong veo không ngấy mỡ.',
      },
      {
        step: 2,
        title: 'Luộc thịt nạc, giò heo, bò viên & Xào thịt băm',
        time: '20 phút',
        heat: 'Lửa vừa',
        goal: 'Thịt luộc chín tới ngọt mọng thái mỏng tang, bò viên giòn dai nở đẹp, thịt băm tơi xốp thơm tiêu',
        actionPoints: [
          'Thả miếng thịt nạc thăn heo và giò heo/sườn non vào nồi nước dùng đang ninh. Luộc thịt nạc chín tới trong khoảng 15 - 20 phút. Vớt ra ngâm ngay vào thau nước đá lạnh để thịt săn chắc, giữ màu trắng sáng không bị thâm mặt.',
          'Bí quyết thái thịt hủ tiếu gõ: Dùng dao thật sắc thái thịt thành từng lát mỏng tang như tờ giấy nhưng bản to. Khi ăn, miếng thịt mỏng ngấm nước lèo mềm ngọt tan ngay trong miệng.',
          'Khía hoa chữ thập trên từng viên bò viên gân, thả vào nồi nước dùng đang sôi lăn tăn khoảng 5 phút cho bò viên nở căng giòn sần sật.',
          'Xào thịt băm: Phi thơm 1 thìa hành tỏi băm trong chảo với chút mỡ heo, cho thịt heo xay vào đảo nhanh tay trên lửa lớn cùng 1 thìa cà phê hạt nêm và 1/2 thìa tiêu xay cho hạt thịt tơi xốp, chín thơm thì trút ra bát.',
        ],
        description:
          'Luộc chín thịt nạc và giò heo trong nồi nước dùng, ngâm nước đá lạnh rồi thái lát mỏng tang. Khía hoa thả bò viên vào nước dùng cho nở giòn dai. Xào thịt băm tơi xốp với hành tỏi phi và tiêu thơm nức.',
        tip: 'Thịt hủ tiếu gõ bắt buộc phải thái mỏng tang; thái dày thịt sẽ bị dai và khô, không đúng nét ẩm thực bình dân đặc trưng của xe gõ.',
      },
      {
        step: 3,
        title: 'Thắng tóp mỡ giòn rụm & Phi tỏi hành thơm nức',
        time: '15 phút',
        heat: 'Lửa nhỏ đến vừa',
        goal: 'Tóp mỡ giòn rôm rốp không ngấy, hành tỏi phi vàng ruộm thơm lừng tạo nên 50% hương vị quyến rũ của tô hủ tiếu gõ',
        actionPoints: [
          'Mỡ gáy heo rửa sạch, lau khô, cắt hạt lựu nhỏ đều nhau. Cho mỡ vào chảo cùng 2 thìa canh nước lọc và 1 nhúm muối nhỏ.',
          'Đun lửa vừa cho nước bay hơi hết và mỡ tự tiết ra. Đảo đều tay đến khi tóp mỡ teo lại, chuyển màu vàng ruộm giòn tan thì vớt ngay ra đĩa có lót giấy thấm dầu.',
          'Lấy phần mỡ nước vừa thắng, cho tỏi băm và hành tím băm vào phi trên lửa nhỏ. Khi hành tỏi vừa ngả màu vàng rơm hanh thì tắt bếp ngay, sức nóng của mỡ sẽ làm hành tỏi giòn tan thơm phức mà không bị cháy khét.',
        ],
        description:
          'Thắng mỡ gáy heo thành những viên tóp mỡ giòn rôm rốp. Dùng mỡ heo phi hành tím và tỏi băm đến khi vàng ruộm thơm nức mũi.',
        tip: 'Thêm chút nước và muối khi bắt đầu thắng mỡ sẽ giúp mỡ không bị bắn, tóp mỡ phồng xốp giòn tan và để được lâu không bị ỉu.',
      },
      {
        step: 4,
        title: 'Trụng hủ tiếu & Hoàn thiện tô hủ tiếu gõ nóng hổi thơm lừng',
        time: '5 phút',
        heat: 'Nước trụng sôi già - Thưởng thức nóng bốc khói',
        goal: 'Sợi hủ tiếu bóng mướt dai ngon, nước dùng chan ngập bốc khói nghi ngút, thơm nức mùi hẹ, tóp mỡ và tiêu đen',
        actionPoints: [
          'Đun sôi bùng một nồi nước riêng để trụng hủ tiếu. Cho vắt hủ tiếu vào vợt trụng nhanh trong 15 - 20 giây cho sợi vừa mềm tới, nhấc ra rảy thật ráo nước rồi cho ngay vào tô.',
          'Rưới ngay 1 thìa cà phê mỡ tỏi phi vào tô hủ tiếu vừa trụng, dùng đũa xóc đều tay cho từng sợi hủ tiếu bóng bẩy, tơi rời không bị dính chùm.',
          'Xếp giá đỗ sống (hoặc giá chần) và lá hẹ cắt khúc vào tô, bày lên trên vài lát thịt nạc thái mỏng tang, 1 thìa thịt băm xào, khoanh giò heo, vài viên bò viên gân, trứng cút.',
          'Rắc một nhúm tóp mỡ giòn rụm, hành tỏi phi thơm, hành ngò thái nhỏ và thật nhiều tiêu đen xay thơm nồng.',
          'Múc nước dùng đang sôi sùng sục chan ngập mặt tô hủ tiếu. Thưởng thức ngay khi còn bốc khói nghi ngút cùng đĩa ớt ngâm giấm chua cay và chén nước tương nguyên chất dầm ớt đỏ!',
        ],
        description:
          'Trụng nhanh sợi hủ tiếu qua nước sôi rồi trộn mỡ tỏi phi cho sợi bóng mướt. Xếp thịt nạc thái mỏng, giò heo, bò viên, thịt băm, giá hẹ, rắc tóp mỡ tỏi phi và tiêu xay. Chan ngập nước dùng sôi sùng sục thưởng thức nóng hổi.',
        tip: 'Lá hẹ tươi và tiêu đen xay nồng là bộ đôi không thể thiếu của hủ tiếu gõ; hãy chan nước dùng thật sôi trực tiếp lên lá hẹ để vị hẹ chín tới tỏa hương thơm ngát.',
      },
    ],
    chefSecret:
      '3 bí mật làm nên nồi nước lèo Hủ Tiếu Gõ thanh ngọt nức tiếng Sài Gòn: 1. Ninh kết hợp Xương Heo và Xương Gà cùng Củ Sắn (củ đậu) gọt vỏ – củ sắn nhả vị ngọt mát thanh lành vào nước lèo; 2. Nướng thơm con Mực Khô nhỏ đập dập thả vào nồi – tạo mùi thơm đặc trưng của các xe gõ ven đường; 3. Thịt nạc phải thái thật mỏng tang và luôn có một muỗng mỡ tỏi phi rưới lên sợi hủ tiếu ngay sau khi trụng.',
    recommendedSauce:
      'Chén nước tương (xì dầu) ngon dầm ớt hiểm đỏ cay xé lưỡi, hũ tỏi ớt ngâm giấm chua thanh giải ngấy, vắt thêm miếng chanh tươi mọng nước.',
  },

  'hu-tieu-sa-te-nai': {
    dishId: 'hu-tieu-sa-te-nai',
    dishName: 'Hủ Tiếu Sa Tế Nai Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    seoTitle: 'Cách Nấu Hủ Tiếu Sa Tế Nai Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    prepTime: '30 phút',
    cookTime: '1.5 giờ',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Thịt nai tươi mềm ngọt & Gia vị ướp',
        items: [
          '500g thịt phi lê nai tươi ngon (hoặc bắp nai nạc mềm không mỡ)',
          '1 thìa canh dầu hào, 1 thìa canh nước tương ngon',
          '1 thìa cà phê dầu mè thơm, 1 thìa cà phê tiêu sọ xay',
          '1 thìa canh rượu mai quế lộ (hoặc rượu trắng khử tanh, dậy mùi thơm)',
          '1 thìa cà phê bột bắp (giữ thịt nai mọng nước, mềm tan không bị khô dai)',
          '1 thìa tỏi băm, hành tím băm nhuyễn',
        ],
      },
      {
        category: 'Nước hầm xương thanh ngọt & Thảo mộc Triều Châu',
        items: [
          '1kg xương ống heo hoặc xương bò/xương gà hầm lấy 3.5 lít nước dùng ngọt trong',
          '1 củ hành tây nướng, 1 củ cải trắng cắt khoanh dày',
          'Gói thảo mộc sa tế nướng thơm: 2 hoa hồi (đại hồi), 1 thanh quế nhỏ, 1 quả thảo quả đập dập, 3 nụ đinh hương, 1 thìa cà phê hạt ngò',
          'Gia vị nêm nước dùng: 2 thìa canh đường phèn, 2 thìa canh muối hạt, 1 thìa canh hạt nêm',
        ],
      },
      {
        category: 'Sốt sa tế đậu phộng bùi béo đặc trưng Chợ Lớn',
        items: [
          '150g đậu phộng (lạc) rang vàng giòn, xát vỏ, giã nhuyễn mịn béo bùi',
          '30g mè trắng (vừng) rang vàng thơm lừng, giã dập',
          '3 - 4 thìa canh sa tế tôm hoặc sa tế ớt Triều Châu cay thơm',
          '2 viên chao trắng (hoặc chao đỏ), tán nhuyễn mịn (bí quyết béo bùi đậm đà của người Hoa)',
          '100ml nước cốt dừa béo dịu (giúp nước lèo sánh mịn hòa quyện)',
          '3 cây sả tươi băm nhuyễn, 1 củ tỏi băm, 2 củ hành tím băm, dầu màu điều',
        ],
      },
      {
        category: 'Sợi hủ tiếu & Rau ăn kèm thanh mát giải ngấy',
        items: [
          '500g sợi hủ tiếu gạo mềm bản to (hoặc hủ tiếu dai Sa Đéc)',
          '2 quả dưa leo (dưa chuột) tươi giòn, thái sợi dài hoặc thái lát mỏng (topping bắt buộc giải cay ngấy)',
          '2 quả cà chua chín mọng cắt múi cau',
          '200g giá đỗ tươi, 1 bó ngò gai (mùi tàu), húng quế, chanh tươi, ớt hiểm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Ninh nước dùng xương thanh trong & Rang thảo mộc dậy hương',
        time: '15 phút (ninh 1.5 giờ)',
        heat: 'Lửa lớn đun sôi rồi hạ lửa nhỏ liu riu',
        goal: 'Nước dùng trong veo, ngọt đậm đà từ tủy xương và thảo mộc thơm nức mùi hồi quế',
        actionPoints: [
          'Chặt xương ống heo/bò thành khúc vừa. Chần qua nồi nước sôi pha muối và gừng đập dập trong 3 - 5 phút cho nhả sạch bọt máu. Vớt ra rửa sạch dưới vòi nước lạnh.',
          'Cho xương vào nồi cùng 3.5 lít nước, hành tây nướng và củ cải trắng. Đun sôi bùng rồi hạ lửa nhỏ liu riu, hớt sạch bọt nổi để nước dùng trong vắt.',
          'Gói thảo mộc (hoa hồi, quế, thảo quả, đinh hương, hạt ngò) cho vào chảo rang thơm trên lửa nhỏ, cho vào túi lọc rồi thả vào nồi nước dùng ninh cùng.',
          'Nêm 2 thìa canh đường phèn và muối hạt. Ninh trong 1.5 giờ cho xương tiết trọn vị ngọt thanh tao.',
        ],
        description:
          'Chần sạch xương rồi ninh cùng củ cải, hành tây và túi thảo mộc rang thơm (hồi, quế, thảo quả, đinh hương) trên lửa nhỏ, hớt bọt để nước dùng trong vắt, ngọt đậm đà tự nhiên.',
        tip: 'Chỉ rang thảo mộc trên lửa nhỏ đến khi tỏa mùi thơm dịu; không rang cháy khét sẽ làm nước dùng bị đắng và tối màu.',
      },
      {
        step: 2,
        title: 'Sơ chế & Ướp thịt nai mềm mọng chuẩn bí quyết đầu bếp Hoa',
        time: '15 phút',
        heat: 'Nhiệt độ phòng mát',
        goal: 'Thịt nai thái mỏng ngang thớ ngấm sâu gia vị, mềm mọng nước, thơm mùi dầu mè và rượu thơm',
        actionPoints: [
          'Thịt nai rửa sạch với nước pha chút rượu trắng và gừng đập dập để khử sạch mùi gây tự nhiên, thấm thật khô ráo bằng khăn giấy.',
          'Dùng dao thật bén thái thịt nai thành từng lát mỏng ngang thớ bản vừa ăn (thái mỏng giúp thịt thấm sốt và chín nhanh mềm ngọt).',
          'Ướp thịt nai với: 1 thìa canh dầu hào, 1 thìa canh nước tương, 1 thìa cà phê dầu mè, 1 thìa cà phê tiêu sọ, 1 thìa canh rượu mai quế lộ, tỏi băm và đặc biệt là 1 thìa cà phê tinh bột bắp.',
          'Trộn đều tay theo một chiều cho gia vị và bột bắp áo đều từng thớ thịt. Để nghỉ trong 20 phút cho thịt thấm sâu.',
        ],
        description:
          'Rửa sạch thịt nai với rượu gừng, thấm khô và thái mỏng ngang thớ. Ướp cùng dầu hào, nước tương, dầu mè, tiêu, rượu mai quế lộ và 1 thìa bột bắp để thịt giữ trọn độ ẩm, mềm tan khi nấu.',
        tip: 'Một thìa bột bắp kết hợp dầu mè là kỹ thuật "khóa ẩm" kinh điển của người Hoa, giúp miếng thịt nai khi xào hoặc nhúng giữ nguyên độ ngọt mềm mọng nước, không bao giờ bị dai xơ.',
      },
      {
        step: 3,
        title: 'Nấu sốt sa tế đậu phộng Chợ Lớn & Hòa quyện nước lèo sánh béo',
        time: '20 phút',
        heat: 'Lửa vừa',
        goal: 'Nước dùng có màu vàng cam sóng sánh, độ sánh mịn vừa phải, bùi béo ngậy đậu phộng mè rang và thơm lừng vị sa tế cay ấm',
        actionPoints: [
          'Đặt chảo sâu lòng lên bếp, cho 3 thìa dầu màu điều vào đun nóng. Cho sả băm, tỏi băm, hành tím băm vào phi thơm vàng ruộm.',
          'Hạ lửa nhỏ, cho 3 - 4 thìa sa tế tôm/ớt, 2 viên chao trắng tán nhuyễn, 150g đậu phộng rang giã mịn và mè rang vào xào đều tay trong 2 phút cho dậy mùi thơm nồng nàn.',
          'Trút toàn bộ hỗn hợp sốt sa tế đậu phộng vừa xào vào nồi nước dùng hầm xương đang sôi lăn tăn trên bếp.',
          'Thêm 100ml nước cốt dừa vào nồi, khuấy đều nhẹ tay. Nêm lại gia vị với đường phèn, nước mắm, hạt nêm cho vừa miệng, có vị thanh ngọt đậm đà, béo bùi sánh nhẹ đặc trưng.',
        ],
        description:
          'Phi thơm sả, tỏi, hành tím với dầu màu điều. Xào hỗn hợp sa tế, chao nhuyễn, đậu phộng rang giã mịn và mè rang rồi trút vào nồi nước dùng. Thêm chút nước cốt dừa đun sôi lăn tăn tạo nên nồi nước lèo sóng sánh béo ngậy thơm lừng.',
        tip: 'Đậu phộng rang phải giã thật mịn một nửa để tạo độ sánh béo tự nhiên cho nước lèo, nửa còn lại giã dập để khi ăn nhai trúng hạt đậu giòn bùi thích thú.',
      },
      {
        step: 4,
        title: 'Chế biến thịt nai & Trình bày tô hủ tiếu sa tế nai trứ danh',
        time: '10 phút',
        heat: 'Lửa lớn xào nhanh - Nước dùng sôi sùng sục',
        goal: 'Tô hủ tiếu bắt mắt với màu vàng cam sóng sánh, thịt nai mềm ngọt đậm đà, dưa leo cà chua thanh mát giòn rụm',
        actionPoints: [
          'Xào thịt nai: Đun nóng chảo với 1 thìa dầu ăn và tỏi băm trên lửa lớn. Cho thịt nai đã ướp vào đảo nhanh tay trong 1 - 2 phút cho thịt vừa chín tới (hoặc chín tái hồng hào) là trút ngay ra đĩa (không xào lâu kẻo thịt dai).',
          'Trụng hủ tiếu: Trụng nhanh sợi hủ tiếu qua nồi nước sôi trong 15 - 20 giây cho mềm dai, vớt ra rảy ráo nước cho vào tô, xóc đều với chút dầu tỏi phi.',
          'Bày biện: Xếp giá đỗ sống, dưa leo thái sợi/lát mỏng và vài miếng cà chua tươi xung quanh miệng tô. Xếp thịt nai xào mềm mọng vào giữa.',
          'Múc nước lèo sa tế đậu phộng đang sôi sùng sục chan ngập mặt hủ tiếu, rưới đều phần nước sốt sóng sánh lên trên thịt nai.',
          'Rắc thêm ngò gai, húng quế thái nhỏ, một ít đậu phộng rang và tiêu xay lên trên cùng. Thưởng thức ngay khi còn bốc khói ngào ngạt!',
        ],
        description:
          'Xào nhanh thịt nai trên lửa lớn vừa chín tới mềm ngọt. Trụng hủ tiếu cho vào tô, xếp dưa leo thái sợi, cà chua, thịt nai và rau thơm. Chan ngập nước lèo sa tế đậu phộng sánh béo cay nồng bốc khói nghi ngút.',
        tip: 'Dưa leo và cà chua tươi là "chìa khóa vàng" của món ăn: Vị thanh mát giòn rụm của dưa leo giúp cân bằng hoàn hảo độ béo ngậy của đậu phộng và vị cay nồng của sa tế, ăn đến giọt cuối cùng mà không hề ngấy.',
      },
    ],
    chefSecret:
      '3 bí quyết độc nhất vô nhị làm nên tô Hủ Tiếu Sa Tế Nai chuẩn gốc Chợ Lớn: 1. Nước lèo sánh mịn béo bùi từ Đậu Phộng Rang giã mịn kết hợp Chao Trắng tán nhuyễn và nước cốt dừa – tạo độ ngậy bùi sâu thẳm mà không hề ngấy; 2. Ướp thịt nai với 1 thìa Bột Bắp, Dầu Mè và Rượu Mai Quế Lộ – kỹ thuật khóa ẩm giúp thịt giữ trọn độ mọng ngọt mềm tan khi xào lửa lớn; 3. Bắt buộc ăn cùng Dưa Leo thái sợi và Cà Chua tươi – sự kết hợp kinh điển của người Hoa giúp giải nhiệt, cân bằng trọn vẹn vị cay béo của nồi sa tế.',
    recommendedSauce:
      'Chấm cùng đĩa sa tế tôm đậm đà, vài lát ớt hiểm đỏ, vắt thêm miếng chanh tươi chua thanh hoặc chấm sốt tương đen pha chút giấm tiều Triều Châu.',
  },

  'mi-hoanh-thanh-xa-xiu': {
    dishId: 'mi-hoanh-thanh-xa-xiu',
    dishName: 'Mì Hoành Thánh Xá Xíu Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    seoTitle: 'Cách Nấu Mì Hoành Thánh Xá Xíu Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    prepTime: '35 phút',
    cookTime: '1.5 - 2 giờ',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Nước dùng thanh ngọt trong veo chuẩn vị Quảng Đông',
        items: [
          '1kg xương ống heo hoặc xương bay heo (chọn xương tươi, tủy đỏ hồng)',
          '500g xương gà (ninh cùng xương heo giúp nước trong vắt, ngọt thanh nhẹ)',
          '60g tôm khô loại 1 (ngâm nước ấm 15 phút, rửa sạch cát)',
          '1 con mực khô nhỏ hoặc râu mực nướng thơm đập dập (bí quyết nước lèo người Hoa ngọt sâu hậu vị)',
          '1 củ cải trắng cắt khoanh dày 2cm, 1 củ hành tây nướng thơm bóc vỏ',
          'Vài cọng rễ ngò rí rửa sạch đất cát (tỏa hương thanh mát, khử mùi hôi thịt)',
          'Gia vị nêm nước dùng: 2 thìa canh đường phèn, 2 thìa canh muối hạt, 1 thìa canh nước mắm ngon, 1 thìa cà phê dầu mè thơm',
        ],
      },
      {
        category: 'Nhân & Vỏ hoành thánh tôm thịt béo giòn sần sật',
        items: [
          '30 - 40 lá vỏ hoành thánh tươi bằng bột mì trứng (chọn loại mỏng mịn, thơm mùi trứng)',
          '250g thịt nạc dăm heo xay nhuyễn (vừa có nạc vừa có mỡ mềm ngọt)',
          '200g tôm sú tươi bóc vỏ, rút chỉ đen (đập dập, cắt hạt lựu to - giữ độ giòn sần sật ngọt mọng)',
          '1 thìa canh dầu mè thơm, 1 thìa canh dầu hào, 1 thìa cà phê tiêu sọ trắng',
          '1 thìa cà phê tinh bột bắp (tạo độ kết dính dẻo dai cho nhân)',
          'Hành lá, hành tím băm nhuyễn, chút đầu hành trắng băm nhỏ',
        ],
      },
      {
        category: 'Thịt xá xíu hồng hào óng ả chuẩn vị Chợ Lớn',
        items: [
          '400g thịt nạc dăm hoặc nạc vai heo tươi (cắt dải dài bản dày 3cm)',
          'Gia vị ướp xá xíu: 2 thìa canh sốt xá xíu Lee Kum Kee (hoặc ngũ vị hương), 1 thìa canh dầu hào, 1 thìa canh mật ong, 1 thìa canh nước tương, 1 thìa canh rượu mai quế lộ, 1 thìa tỏi băm, chút tiêu xay',
          '1 thìa dầu màu điều tạo màu đỏ cam hồng hào tự nhiên',
        ],
      },
      {
        category: 'Sợi mì trứng tươi, Rau ăn kèm & Nước chấm',
        items: [
          '500g sợi mì trứng tươi Hong Kong (hoặc mì sợi tròn dai giòn)',
          '1 bó hẹ lá tươi xanh mướt cắt khúc ngắn (linh hồn hương vị mì hoành thánh)',
          '200g cải ngọt hoặc cải thìa non (chần vừa chín tới giòn ngọt)',
          'Hành lá, ngò rí thái nhỏ, tóp mỡ giòn rụm & tỏi phi vàng thơm',
          'Ăn kèm: Nước tương ngon dầm ớt hiểm đỏ, giấm tiều (giấm đỏ Triều Châu) hoặc ớt ngâm giấm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Ninh nước dùng xương trong veo thanh ngọt cùng tôm khô, mực nướng',
        time: '15 phút (ninh 1.5 - 2 giờ)',
        heat: 'Lửa lớn đun sôi rồi hạ lửa nhỏ liu riu',
        goal: 'Nước dùng trong vắt như hổ phách, ngọt lịm từ tủy xương và hải sản khô, thoang thoảng hương rễ ngò rí',
        actionPoints: [
          'Chặt xương heo và xương gà thành khúc vừa. Đun sôi nồi nước với 1 thìa muối và vài lát gừng, thả xương vào chần trong 3 - 5 phút cho nhả sạch bọt máu. Vớt ra xả rửa từng khúc xương thật sạch dưới vòi nước lạnh.',
          'Nướng mực khô trên lửa nhỏ cho thơm nức mũi, đập dập xé nhỏ. Tôm khô ngâm nước ấm 15 phút, rửa sạch cát.',
          'Cho xương heo và xương gà vào nồi cùng 3.5 - 4 lít nước lọc. Thả mực nướng, tôm khô, củ cải trắng, hành tây nướng và rễ ngò rí vào cùng.',
          'Đun sôi bùng lên thì hạ lửa nhỏ liu riu. Hớt sạch bọt nổi trong 15 phút đầu và tuyệt đối KHÔNG đậy nắp vung để nước dùng trong vắt.',
          'Nêm 2 thìa canh đường phèn và muối hạt. Ninh liu riu trong 1.5 - 2 giờ cho xương tiết trọn vị ngọt thanh tao.',
        ],
        description:
          'Chần sạch xương heo và xương gà rồi rửa kỹ. Ninh cùng khô mực nướng thơm, tôm khô, củ cải trắng, hành tây nướng và rễ ngò rí trên lửa nhỏ, hớt bọt thường xuyên để nước dùng trong vắt, ngọt thanh đậm đà chuẩn vị Quảng Đông.',
        tip: 'Khô mực nướng và tôm khô là bí quyết gia truyền của người Hoa giúp nước lèo có hậu vị ngọt sâu đậm đà đọng lại ở cuống họng mà không cần dùng nhiều bột ngọt.',
      },
      {
        step: 2,
        title: 'Làm thịt xá xíu hồng hào óng ả & Thơm lừng ngũ vị',
        time: '25 phút (ướp 30 phút)',
        heat: 'Lửa vừa áp chảo hoặc nướng 180°C',
        goal: 'Miếng xá xíu ngoài óng ả màu đỏ cam caramel xém cạnh, bên trong mềm mọng thơm nức mùi mai quế lộ',
        actionPoints: [
          'Thịt nạc dăm rửa sạch, thấm khô ráo. Trộn đều hỗn hợp sốt ướp: sốt xá xíu, dầu hào, mật ong, nước tương, rượu mai quế lộ, tỏi băm, tiêu và dầu màu điều.',
          'Thoa đều sốt lên các mặt thịt, dùng nĩa xăm nhẹ để sốt ngấm sâu. Để ướp trong ít nhất 30 phút (hoặc để ngăn mát tủ lạnh 1 - 2 tiếng).',
          'Nấu xá xíu: Đun nóng chảo với 1 thìa dầu ăn, cho các dải thịt vào áp chảo vàng đều các mặt trên lửa vừa. Rưới phần nước ướp còn lại vào chảo cùng 1/2 chén nước lọc, đậy nắp rim nhỏ lửa trong 15 - 20 phút cho nước sốt sánh kẹo bám chặt quanh miếng thịt.',
          'Khi thịt chín vàng xém thơm lừng, gắp ra để nguội bớt rồi dùng dao thật bén thái lát mỏng vừa ăn.',
        ],
        description:
          'Ướp thịt nạc dăm với sốt xá xíu, mật ong, rượu mai quế lộ và dầu điều trong 30 phút. Áp chảo vàng xém rồi rim nhỏ lửa cho sốt sánh kẹo bám chặt quanh thịt. Thái lát mỏng óng ả đẹp mắt.',
        tip: 'Dùng thịt nạc dăm (có vân mỡ xen kẽ) làm xá xíu sẽ giúp miếng thịt luôn mềm ngọt, béo ngậy mà không bao giờ bị khô cứng như thịt nạc thăn.',
      },
      {
        step: 3,
        title: 'Trộn nhân, gói hoành thánh tôm thịt & Luộc chín giòn dai',
        time: '25 phút',
        heat: 'Nước luộc sôi sùng sục',
        goal: 'Viên hoành thánh vỏ mỏng mướt ôm trọn nhân tôm thịt giòn béo sần sật, không bị bục rách',
        actionPoints: [
          'Trộn nhân: Cho thịt heo xay và tôm cắt hạt lựu to vào tô. Nêm dầu mè, dầu hào, tiêu sọ trắng, bột bắp, hành tím băm và đầu hành trắng băm.',
          'Dùng đũa quết nhân theo một chiều khoảng 3 - 5 phút cho hỗn hợp dẻo quánh, có độ kết dính dai giòn.',
          'Gói hoành thánh: Đặt lá hoành thánh lên lòng bàn tay, múc một muỗng nhân vừa vặn (khoảng 1 thìa cà phê) đặt vào giữa. Thoa chút nước lọc quanh mép bột, gập đôi lại thành hình tam giác rồi túm nhẹ hai góc mép dính vào nhau như thỏi vàng hoặc xếp nếp cánh bướm.',
          'Luộc hoành thánh: Đun sôi một nồi nước riêng. Thả từng viên hoành thánh vào luộc trên lửa vừa. Khi hoành thánh nổi bồng bềnh lên mặt nước và vỏ chuyển màu trong suốt (khoảng 3 - 4 phút) là nhân đã chín tới.',
          'Vớt ngay ra thau nước đá lạnh trong 30 giây rồi vớt ra để ráo, xóc nhẹ với chút dầu tỏi phi để các viên không bị dính vào nhau.',
        ],
        description:
          'Trộn thịt xay cùng tôm đập dập cắt hạt lựu to với dầu mè, tiêu và bột bắp rồi quết dẻo dai. Gói nhân vào lá hoành thánh thành hình thỏi vàng xinh xắn. Luộc chín tới trong nước sôi rồi ngâm nước đá lạnh cho vỏ giòn dai mướt mát.',
        tip: 'Tôm chỉ đập dập và cắt hạt lựu to chứ không xay nhuyễn; khi cắn ngập viên hoành thánh bạn sẽ cảm nhận trọn vẹn từng miếng thịt tôm tươi giòn sần sật mọng nước.',
      },
      {
        step: 4,
        title: 'Trụng mì trứng giòn sần sật & Hoàn thiện tô mì hoành thánh xá xíu',
        time: '10 phút',
        heat: 'Nước trụng sôi sùng sục - Thưởng thức nóng bốc khói',
        goal: 'Sợi mì trứng dai giòn không nhũn, hoành thánh tôm thịt ngọt béo, xá xíu thơm lừng, nước lèo chan ngập nghi ngút khói',
        actionPoints: [
          'Kỹ thuật trụng mì "quá lãnh" giòn sần sật: Rũ tơi vắt mì trứng cho sạch bột phấn thừa. Nhúng mì vào nồi nước sôi bùng đảo đều trong 15 - 20 giây cho sợi vừa chín tới. Nhấc ra nhúng ngay vào thau nước lạnh 5 giây rồi nhúng lại nước sôi 3 giây, rảy thật ráo nước cho vào tô, xóc ngay 1 thìa dầu tỏi phi thơm.',
          'Chần rau: Chần cải ngọt vừa chín tới xanh mướt, giữ độ giòn ngọt.',
          'Bày tô: Cho mì trứng vào tô, xếp cải ngọt và lá hẹ cắt khúc một bên. Bày lần lượt 4 - 5 viên hoành thánh tôm thịt béo ngậy, vài lát thịt xá xíu óng ả hồng hào lên mặt.',
          'Múc nước dùng hầm xương đang sôi sùng sục chan ngập mặt tô, rắc hành ngò thái nhỏ, tóp mỡ giòn rụm, tỏi phi và chút tiêu sọ xay.',
          'Thưởng thức ngay khi còn bốc khói ngào ngạt cùng chén nước tương dầm ớt hiểm và chén giấm tiều Triều Châu chua thanh!',
        ],
        description:
          'Trụng mì trứng theo kỹ thuật "quá lãnh" nhúng nước lạnh để sợi giòn sần sật. Bày mì ra tô cùng cải ngọt, lá hẹ, hoành thánh tôm thịt và xá xíu thái lát mỏng. Rắc tóp mỡ, tỏi phi và chan ngập nước dùng sôi sùng sục thưởng thức nóng hổi.',
        tip: 'Kỹ thuật "quá lãnh" (trụng nước sôi rồi sốc nước lạnh) làm sợi mì co lại tức thì, tạo nên độ dai giòn sần sật đặc trưng của mì hoành thánh Hong Kong mà không bị mềm bở.',
      },
    ],
    chefSecret:
      '4 bí quyết gia truyền làm nên tô Mì Hoành Thánh Xá Xíu đỉnh cao: 1. Nước dùng hầm xương heo + gà cùng Mực Khô Nướng và Tôm Khô tạo độ ngọt sâu thăm thẳm và trong vắt; 2. Tôm làm nhân hoành thánh chỉ đập dập cắt hạt lựu to và quết cùng bột bắp – giữ trọn độ giòn sần sật mọng nước; 3. Kỹ thuật trụng mì "quá lãnh" (nước sôi - nước lạnh - nước sôi) giúp sợi mì giòn sực sần sật; 4. Lá Hẹ tươi cắt khúc là linh hồn thảo mộc không thể thay thế của mì hoành thánh gốc Hoa.',
    recommendedSauce:
      'Chén nước tương nguyên chất dầm ớt hiểm đỏ, hũ giấm tiều (giấm đỏ Triều Châu) chua dịu kích thích vị giác và chút sa tế ớt thơm cay.',
  },

  'hu-tieu-muc-tuoi': {
    dishId: 'hu-tieu-muc-tuoi',
    dishName: 'Hủ Tiếu Mực Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    seoTitle: 'Cách Nấu Hủ Tiếu Mực Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    prepTime: '25 phút',
    cookTime: '1.5 giờ',
    difficulty: 'Dễ',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Mực ống tươi rói & Topping ăn kèm',
        items: [
          '700g - 800g mực ống tươi loại 1 (chọn mực mắt trong, da lấp lánh ánh kim, thịt dày săn chắc)',
          '200g thịt nạc dăm heo xay nhuyễn (xào tơi thơm cùng hành tím và tiêu sọ)',
          '12 - 15 quả trứng cút luộc chín, bóc sạch vỏ',
          'Gừng tươi đập dập, 2 thìa canh rượu trắng (khử tanh triệt để cho mực)',
          '150g mỡ gáy heo thái hạt lựu (thắng tóp mỡ giòn rụm) & 1 chén hành tím, tỏi phi vàng thơm',
        ],
      },
      {
        category: 'Nước dùng thanh ngọt trong veo từ xương & hải sản khô',
        items: [
          '1kg xương ống heo hoặc xương bay heo (chọn xương tươi, tủy đỏ)',
          '60g tôm khô loại 1 (ngâm nước ấm 15 phút, rửa sạch cát)',
          '1 con mực khô cỡ vừa (nướng thơm vàng, đập dập xé đôi - bí quyết nước lèo ngọt sâu)',
          '1 củ cải trắng cắt khoanh dày 2cm, 1 củ hành tây nướng xém cạnh lột vỏ',
          'Vài cọng rễ ngò rí rửa sạch đất cát (tỏa hương thanh mát tự nhiên)',
          'Gia vị nấu nước dùng: 2 thìa canh đường phèn, 2 thìa canh muối hạt, 1 thìa canh nước mắm nhĩ ngon, 1 thìa cà phê hạt nêm',
        ],
      },
      {
        category: 'Muối ớt xanh sữa đặc chấm mực & Sợi hủ tiếu, rau thơm',
        items: [
          '500g sợi hủ tiếu dai Sa Đéc (hoặc hủ tiếu khô Mỹ Tho)',
          'Rau ăn kèm: Cần tàu (cần tây lá nhỏ), hẹ lá cắt khúc, giá đỗ sống, ngò rí, chanh tươi, ớt hiểm',
          'Pha muối ớt xanh sữa đặc: 5 trái ớt xiêm xanh, 2 thìa canh sữa đặc Ông Thọ, 1 thìa canh muối hạt, 2 thìa canh đường, 2 thìa canh nước cốt chanh, 2 lá chanh non (xay nhuyễn mịn sánh kẹo)',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Ninh nước dùng xương trong vắt thanh ngọt cùng khô mực nướng',
        time: '15 phút (ninh 1.5 giờ)',
        heat: 'Lửa lớn đun sôi rồi hạ lửa nhỏ liu riu',
        goal: 'Nước lèo trong vắt như hổ phách, ngọt lịm từ tủy xương và hải sản khô, không vẩn đục hay tanh mùi mực',
        actionPoints: [
          'Xương heo chặt khúc, chần trong nồi nước sôi pha 1 thìa muối và gừng đập dập trong 3 - 5 phút cho nhả sạch bọt máu. Vớt ra rửa sạch từng khúc xương dưới vòi nước lạnh.',
          'Nướng mực khô trên lửa nhỏ đến khi thơm phức, dùng chày đập dập rồi xé đôi. Tôm khô ngâm nước ấm 15 phút, rửa sạch để ráo.',
          'Cho xương heo vào nồi cùng 3.5 - 4 lít nước lọc. Thả mực nướng, tôm khô, củ cải trắng, hành tây nướng và rễ ngò rí vào cùng.',
          'Đun sôi bùng lên thì hạ lửa nhỏ liu riu. Hớt sạch bọt nổi trong 15 phút đầu và tuyệt đối KHÔNG đậy nắp vung để nước dùng trong veo.',
          'Nêm 2 thìa canh đường phèn và muối hạt. Ninh liu riu trong 1.5 giờ cho xương tiết trọn vị ngọt tự nhiên.',
        ],
        description:
          'Chần sạch xương heo với nước gừng rồi rửa kỹ. Ninh cùng khô mực nướng thơm, tôm khô, củ cải trắng, hành tây nướng và rễ ngò rí trên lửa liu riu, hớt bọt liên tục để nước dùng trong vắt, ngọt thanh đậm đà.',
        tip: 'Tuyệt đối KHÔNG thả mực tươi vào ninh cùng nước dùng từ đầu; làm vậy nước sẽ bị đục ngầu, ám mùi tanh và mực bị dai quắt mất ngon.',
      },
      {
        step: 2,
        title: 'Sơ chế mực ống giòn ngọt & Xào thịt băm thơm nức',
        time: '20 phút',
        heat: 'Lửa lớn',
        goal: 'Mực ống giòn sần sật mọng nước, trắng tinh không tanh; thịt băm tơi xốp đậm vị tiêu sọ',
        actionPoints: [
          'Mực ống rút nhẹ túi mực và xương sống, bóc sạch lớp màng mỏng ngoài da. Bóp nhẹ mực với 2 thìa rượu trắng, gừng đập dập và chút muối hạt trong 1 phút rồi rửa sạch, để ráo.',
          'Dùng dao khía nhẹ đường vảy rồng ca-rô bên trong lòng con mực rồi cắt thành từng khoanh tròn dày 1.5 - 2cm (hoặc để nguyên con tùy thích).',
          'Luộc mực giòn: Đun sôi một nồi nước riêng với vài lát gừng và cọng sả. Thả mực vào chần nhanh trong 1.5 - 2 phút cho mực vừa chín tới, nở hoa cong lại giòn rụm thì vớt ra ngay.',
          'Ngâm ngay mực vào thau nước đá lạnh trong 2 phút (kỹ thuật sốc nhiệt giúp mực giòn sần sật, giữ vị ngọt thanh tự nhiên và màu trắng muốt), sau đó vớt ra để ráo.',
          'Xào thịt băm: Đun nóng chảo với chút mỡ heo, phi thơm hành tím băm rồi trút 200g thịt heo xay vào xào nhanh tay trên lửa lớn cùng 1 thìa cà phê hạt nêm và 1/2 thìa tiêu sọ xay cho thịt tơi xốp, thơm lừng thì múc ra bát.',
        ],
        description:
          'Rửa mực với rượu gừng khử tanh, khía vảy rồng cắt khoanh. Chần nhanh trong nước sôi 2 phút rồi ngâm ngay vào nước đá lạnh để mực giòn sần sật. Thịt heo xay xào tơi thơm với hành tím và tiêu sọ.',
        tip: 'Chần mực riêng chỉ từ 1.5 - 2 phút rồi sốc nước đá lạnh là bí quyết vàng giúp khoanh mực giòn sần sật, mọng nước, không bị dai teo.',
      },
      {
        step: 3,
        title: 'Pha muối ớt xanh sữa đặc sánh kẹo & Thắng tóp mỡ hành phi',
        time: '15 phút',
        heat: 'Lửa nhỏ đến vừa',
        goal: 'Chén muối ớt xanh thơm nức sánh mịn chua cay béo ngọt; tóp mỡ giòn rôm rốp vàng ươm',
        actionPoints: [
          'Pha muối ớt xanh: Cho ớt xiêm xanh bỏ cuống, 2 thìa canh sữa đặc Ông Thọ, 1 thìa canh muối hạt, 2 thìa canh đường vàng, 2 thìa canh nước cốt chanh và 2 lá chanh non vào cối máy xay. Xay thật nhuyễn mịn thành hỗn hợp sánh kẹo màu xanh ngọc bích, chua cay béo ngậy.',
          'Thắng tóp mỡ: Mỡ gáy heo cắt hạt lựu, cho vào chảo cùng 2 thìa nước và nhúm muối nhỏ. Đun lửa vừa cho nước cạn và mỡ tiết ra, đảo đều tay đến khi tóp mỡ vàng rụm thì vớt ra để ráo dầu.',
          'Phi hành tỏi: Dùng phần mỡ heo vừa thắng, phi thơm hành tím và tỏi băm trên lửa nhỏ đến khi vàng rơm giòn tan thì tắt bếp ngay.',
        ],
        description:
          'Xay nhuyễn hỗn hợp muối ớt xanh với sữa đặc, nước cốt chanh và lá chanh non tạo thành nước chấm sánh mịn chua cay. Thắng mỡ heo làm tóp mỡ giòn rụm và phi hành tỏi vàng thơm.',
        tip: 'Muối ớt xanh sữa đặc là "linh hồn không thể tách rời" của hủ tiếu mực, vị béo ngọt cay nồng của sốt chấm đẩy vị ngọt giòn của mực tươi lên đỉnh điểm.',
      },
      {
        step: 4,
        title: 'Trụng hủ tiếu & Hoàn thiện tô hủ tiếu mực nóng hổi bốc khói',
        time: '5 phút',
        heat: 'Nước trụng sôi già - Thưởng thức nóng bốc khói',
        goal: 'Sợi hủ tiếu tơi bóng dai mướt, khoanh mực tươi giòn sần sật, nước dùng trong veo bốc khói ngào ngạt mùi cần tàu hẹ lá',
        actionPoints: [
          'Trụng hủ tiếu: Đun sôi một nồi nước riêng. Cho từng vắt hủ tiếu vào vợt trụng nhanh trong 15 - 20 giây cho sợi vừa chín tới, nhấc ra rảy thật ráo nước rồi cho ngay vào tô, rưới 1 thìa dầu tỏi phi xóc đều cho sợi tơi bóng thơm lừng.',
          'Xếp giá đỗ sống, cần tàu và hẹ lá cắt khúc vào tô. Cho sợi hủ tiếu lên trên.',
          'Bày lên mặt: 5 - 6 khoanh mực ống tươi luộc giòn rụm, 1 muỗng thịt băm xào tiêu thơm nức, 2 - 3 quả trứng cút luộc bóc vỏ.',
          'Rắc tóp mỡ giòn rụm, hành tỏi phi thơm, ngò rí thái nhỏ và thật nhiều tiêu sọ xay thơm nồng.',
          'Múc nước dùng hầm xương đang sôi sùng sục chan ngập mặt tô hủ tiếu (chan trực tiếp lên cần tàu và hẹ để rau chín tới tỏa hương thơm mát). Thưởng thức ngay khi còn bốc khói nghi ngút, chấm từng khoanh mực giòn sần sật vào chén muối ớt xanh sữa đặc!',
        ],
        description:
          'Trụng nhanh sợi hủ tiếu qua nước sôi rồi trộn dầu tỏi phi cho tơi bóng. Xếp cần tàu, hẹ lá, mực ống tươi giòn, thịt băm xào và trứng cút. Rắc tóp mỡ, hành phi, tiêu sọ rồi chan ngập nước dùng sôi sùng sục. Chấm mực kèm chén muối ớt xanh sữa đặc chuẩn vị.',
        tip: 'Rau cần tàu (cần tây lá nhỏ) có mùi thơm thảo mộc đặc trưng kết hợp với hải sản mực cực kỳ hợp vị, át sạch vị tanh và làm dậy mùi nước lèo.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm nên tô Hủ Tiếu Mực ngon đỉnh cao: 1. Nước dùng ninh riêng từ xương heo, mực khô nướng và tôm khô – tuyệt đối không luộc mực tươi trong nồi nước dùng kẻo đục tanh; 2. Mực tươi chỉ chần nhanh 1.5 - 2 phút trong nước sôi pha gừng sả rồi ngâm ngay vào âu nước đá lạnh – giúp khoanh mực giòn sần sật mọng nước; 3. Nước chấm muối ớt xanh pha sữa đặc sánh kẹo – đòn bẩy vị giác hoàn hảo nâng tầm món hủ tiếu mực.',
    recommendedSauce:
      'Chén muối ớt xanh sữa đặc chua cay béo ngậy chấm ngập khoanh mực giòn, ăn kèm rau cần tàu và hẹ lá xanh mướt.',
  },
  'lau-mam-mien-tay': {
    dishId: 'lau-mam-mien-tay',
    dishName: 'Lẩu Mắm Miền Tây Chua Cay Đậm Đà',
    seoTitle: 'Cách Nấu Lẩu Mắm Miền Tây Chua Cay Đậm Đà Chuẩn Vị Gia Đình',
    description:
      'Hướng dẫn cách nấu lẩu mắm miền Tây nước dùng béo thơm ngậy từ mắm cá linh & mắm cá sặc đồng, ninh nước dừa tươi, khử mùi hôi mắm tuyệt đối, ăn kèm cá hú, tôm, mực, thịt ba rọi và đĩa rau đồng hoa súng chuẩn vị Cửu Long.',
    prepTime: '35 phút',
    cookTime: '30 phút',
    difficulty: 'Trung bình',
    servings: '4 - 6 người',
    ingredients: [
      {
        category: 'Nước cốt mắm & Nước dùng lẩu',
        items: [
          '150g mắm cá linh tươi ngon (tạo độ béo ngọt tự nhiên)',
          '150g mắm cá sặc đồng ngon (tạo hương thơm đặc trưng nồng nàn)',
          '1.5 - 2 lít nước dừa tươi xiêm ngọt thanh',
          '2 - 3 nhánh sả tươi đập dập cắt khúc',
        ],
      },
      {
        category: 'Đồ nhúng lẩu chính (Hải sản, Cá & Thịt)',
        items: [
          '500g cá hú tươi (hoặc cá lóc/cá ngát/cá chẽm) cắt khứa dày 2.5 - 3cm',
          '300g tôm sú / tôm càng tươi sống',
          '300g mực ống tươi khía vảy mồng gà cắt miếng vừa ăn',
          '300g thịt ba chỉ (ba rọi) thái lát mỏng vừa ăn',
          '2 quả cà tím dài cắt miếng xéo ngâm nước muối chanh',
        ],
      },
      {
        category: 'Gia vị sả ớt phi & Nêm nếm',
        items: [
          '5 - 6 nhánh sả băm nhuyễn',
          '2 thìa canh tỏi băm nhuyễn',
          '2 thìa canh hành tím băm nhuyễn',
          '2 - 3 quả ớt hiểm dầm dập',
          '1.5 thìa canh đường phèn (tạo hậu ngọt thanh dịu)',
          '1 thìa cà phê hạt nêm, 1 thìa canh nước mắm ngon',
          '3 thìa canh dầu ăn',
        ],
      },
      {
        category: 'Đĩa rau đồng ăn kèm chuẩn vị Miền Tây',
        items: [
          'Bông điên điển vàng tươi, bông súng chẻ đôi / tước vỏ',
          'Rau đắng đất, kèo lèo (cù lần), ngó sen tươi',
          'Rau muống chẻ, giá đỗ, bắp chuối bào mỏng ngâm chanh',
          'Rau nhút, rau ngò ôm (ngổ), ngò gai thái nhỏ',
          '1kg bún tươi sợi nhỏ ăn kèm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế hải sản, thịt ba rọi & cà tím',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Khử sạch nhớt tanh của cá, giữ thịt hải sản tươi giòn và cà tím không thâm',
        actionPoints: [
          'Chà sát cá hú với muối hạt và nước cốt chanh tươi để sạch nhớt tanh, rửa lại nước gừng đập dập rồi cắt khứa tròn dày 3cm, để ráo.',
          'Thịt ba chỉ rửa sạch, thái lát mỏng. Tôm sú rửa sạch cắt bớt râu. Mực ống mổ bỏ túi mực, rửa rượu gừng rồi khía vảy mực cắt miếng vừa ăn.',
          'Cà tím rửa sạch, cắt khúc vừa ăn rồi bổ làm tư. Ngâm ngay cà tím vào thau nước lạnh có pha 1 thìa cà phê muối và chút nước cốt chanh để cà không bị đen thâm và giữ độ giòn.',
        ],
        description:
          'Sơ chế cá hú với muối chanh khử nhớt tanh. Thái mỏng thịt ba chỉ, làm sạch tôm mực. Cà tím bổ miếng ngâm thau nước muối chanh chống thâm.',
      },
      {
        step: 2,
        title: 'Nấu mắm cá linh, mắm cá sặc & lọc sạch xương dăm',
        time: '15 phút',
        heat: 'Lửa vừa',
        goal: 'Trích xuất trọn vẹn vị béo ngậy ngọt thơm của mắm cốt, loại bỏ hoàn toàn xương dăm cá',
        actionPoints: [
          'Cho 150g mắm cá linh và 150g mắm cá sặc vào nồi nhỏ cùng 800ml nước dừa tươi (hoặc nước lọc).',
          'Đun sôi trên lửa vừa khoảng 10 - 15 phút, dùng đũa khuấy đều nhẹ tay cho đến khi thịt cá mắm rã hoàn toàn khỏi xương.',
          'Trút toàn bộ nước mắm qua rây lọc cẩn thận, dùng thìa dầm kỹ phần xác mắm để lấy hết vị ngọt đậm đà béo ngậy. Bỏ phần xương dăm cá mắm.',
        ],
        description:
          'Đun mắm cá linh và mắm cá sặc với 800ml nước dừa tươi cho rã thịt cá. Đổ qua rây lọc kỹ lấy nước cốt đậm đà, bỏ xương dăm.',
      },
      {
        step: 3,
        title: 'Xào thơm thịt ba rọi, sả ớt phi & cà tím',
        time: '8 phút',
        heat: 'Lửa lớn',
        goal: 'Sả ớt dậy mùi thơm lừng áp chế mùi hôi mắm, thịt ba rọi cháy cạnh ngấm vị',
        actionPoints: [
          'Bắc nồi lẩu lớn lên bếp, cho 3 thìa canh dầu ăn vào đun nóng. Cho hành tím băm, tỏi băm và sả băm nhuyễn vào phi vàng ruộm dậy mùi thơm nức.',
          'Múc ra 1 thìa sả tỏi phi để riêng làm nước chấm. Cho thịt ba chỉ thái mỏng vào nồi xào săn cháy nhẹ cạnh cho ra bớt mỡ thơm.',
          'Tiếp theo trút cà tím đã vớt ráo vào nồi đảo nhẹ tay khoảng 2 phút cho cà thấm dầu sả ớt thơm lừng.',
        ],
        description:
          'Phi thơm hành, tỏi, sả băm vọt mùi thơm. Cho thịt ba chỉ vào xào săn cháy cạnh cho béo ngậy rồi cho cà tím vào đảo ngấm gia vị.',
      },
      {
        step: 4,
        title: 'Nấu nước lẩu mắm đậm đà béo thơm',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Nước lẩu chuẩn vị béo bùi đậm đà, thơm lừng sả dừa ngọt thanh',
        actionPoints: [
          'Đổ phần nước cốt mắm đã lọc cẩn thận ở Bước 2 vào nồi sả ớt ba rọi. Thêm lượng nước dừa tươi còn lại (khoảng 800ml - 1 lít) cùng 2 nhánh sả đập dập.',
          'Đun sôi bùng lên rồi hạ lửa vừa. Liên tục vớt sạch bọt trắng nổi lên để nước lẩu trong và thơm dịu.',
          'Nêm nếm gia vị: 1.5 thìa canh đường phèn (để làm dịu độ mặn tự nhiên của mắm) và 1 thìa cà phê hạt nêm. Không nêm muối hay nước mắm lúc này kẻo bị mặn chát. Nước lẩu đạt chuẩn có sắc nâu sóng sánh nhẹ, vị béo ngậy đậm đà, thơm nức mùi sả ớt mà không cay nồng xốc mũi.',
        ],
        description:
          'Trút nước cốt mắm lọc và nước dừa tươi vào nồi, thả sả đập dập. Đun sôi vớt bọt, nêm đường phèn & hạt nêm cho vị đậm đà ngọt thanh dịu.',
      },
      {
        step: 5,
        title: 'Trình bày nồi lẩu, nhúng hải sản & thưởng thức',
        time: '5 phút',
        heat: 'Nhiệt độ nồi lẩu',
        goal: 'Nồi lẩu mắm sôi sục rực rỡ đĩa rau đồng hoa súng tươi ngon',
        actionPoints: [
          'Trút nước lẩu mắm ra nồi lẩu điện hoặc bếp gas du lịch đặt giữa bàn ăn.',
          'Bày các đĩa đồ nhúng xung quanh: Khứa cá hú, tôm sú tươi, mực ống khía hoa, thịt ba rọi.',
          'Bày đĩa rau đồng sắc màu: Bông điên điển vàng rực, bông súng chẻ, rau đắng, kèo lèo, ngó sen, bắp chuối bào, giá đỗ và rau muống chẻ.',
          'Khi nước lẩu mắm sôi sục, thả khứa cá hú vào nấu chín ngọt thịt trước, tiếp đó nhúng tôm, mực và từng nhúm rau đồng nhúng tái giòn sần sật. Múc ra bát bún tươi chan nước lẩu mắm thơm lừng. Cá hú và hải sản chấm chén nước mắm mặn dầm ớt hiểm tươi.',
        ],
        description:
          'Bày nồi lẩu mắm ra bếp, thả cá hú nấu chín ngọt, nhúng tôm mực tươi cùng đĩa rau đồng bông điên điển bông súng giòn sần sật. Ăn kèm bún tươi.',
      },
    ],
    chefSecret:
      '4 bí quyết vàng nấu lẩu mắm miền Tây đậm đà không bị hôi mắm: 1. Phải kết hợp cả mắm cá linh (tạo vị béo bùi ngọt thịt) và mắm cá sặc (tạo hương thơm đặc trưng) theo tỉ lệ 1:1; 2. Dùng nước dừa tươi đun lẩu giúp làm dịu hoàn toàn độ mặn chát của mắm mặn, tạo vị hậu ngọt thanh tao dịu mát; 3. Phi thật nhiều sả băm nhuyễn với hành tỏi ớt trước khi xào thịt ba chỉ và trút nước mắm vào – sả ớt chính là đòn bẩy triệt tiêu mùi hôi mắm; 4. Rau đồng miền Tây (bông điên điển, bông súng, rau đắng) chỉ nhúng tái giòn sần sật 30 giây rồi ăn ngay để giữ nguyên vị ngọt tươi đắng dịu mát.',
    recommendedSauce:
      'Chén nước mắm nhĩ mặn nguyên chất dầm ớt hiểm đỏ rực vắt tí chanh tươi, chấm ngập khúc cá hú béo ngậy và tôm mực giòn ngọt.',
  },

  'com-ca-kho-to': {
    dishId: 'com-ca-kho-to',
    dishName: 'Cơm Cá Kho Tộ Đậm Đà',
    seoTitle: 'Cách Nấu Cơm Cá Kho Tộ Đậm Đà, Mềm Mọng Chuẩn Vị Mẹ Nấu',
    description:
      'Hướng dẫn chi tiết cách nấu cơm cá kho tộ đất đậm đà béo ngậy chuẩn vị cơm nhà mẹ nấu: Cá lóc/cá hú cắt khứa săn chắc, thịt ba chỉ cháy cạnh thơm lừng, nước dừa tươi kho 2 lửa sền sệt kẹo sốt màu cánh gián ngấm sâu từng thớ thịt.',
    prepTime: '25 phút',
    cookTime: '40 phút',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Cá tươi & Thịt ba chỉ kho kèm',
        items: [
          '600g cá lóc đồng tươi sống (hoặc cá hú / cá trắm / cá bống) cắt khứa dày 2.5 - 3cm',
          '150g thịt ba chỉ (ba rọi) heo thái con chì mỏng (kho cùng cá tạo độ ngậy béo tự nhiên)',
        ],
      },
      {
        category: 'Gia vị ướp & Nước màu kho tộ',
        items: [
          '3 thìa canh nước mắm nhĩ ngon (độ đạm cao 40 độ)',
          '1 thìa canh nước màu dừa Bến Tre (cho sắc nâu cánh gián ánh kim đẹp mắt)',
          '1.5 thìa canh đường thốt nốt (hoặc đường phèn/đường cát vàng)',
          '1 thìa cà phê hạt nêm, 1 thìa cà phê tiêu sọ đập dập',
          '2 củ hành tím băm, 1 củ tỏi băm, 3 nhánh đầu hành lá giã dập',
          '3 - 4 quả ớt hiểm đỏ dầm dập (hoặc ớt chỉ thiên)',
        ],
      },
      {
        category: 'Nước dừa & Thảo mộc béo thơm',
        items: [
          '250ml nước dừa tươi xiêm ngọt thanh',
          '2 thìa canh mỡ heo thắng (hoặc dầu ăn)',
          'Hành lá cắt khúc, ớt sừng thái chỉ, tiêu xay rắc mặt',
        ],
      },
      {
        category: 'Cơm dẻo ăn kèm chuẩn vị cơm nhà',
        items: [
          'Gạo Tám Thái / ST25 dẻo thơm nấu cơm niêu hoặc cơm trắng nóng hổi',
          'Rau luộc ăn kèm: Đĩa dưa leo, cà chua thái lát, đọt rau muống luộc, dưa chua muối',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế & khử tanh cá lóc/cá hú sạch màng đen triệt để',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Khử sạch mùi tanh hôi và lớp nhớt trên da cá, thịt cá ngấm gia vị ngạt ngào thơm',
        actionPoints: [
          'Cá lóc hoặc cá hú mua về cạo sạch nhớt ngoài da bằng muối hạt và nước cốt chanh tươi (hoặc rửa với rượu trắng và gừng đập dập).',
          'Mổ bụng lấy sạch lòng cá, cạo kỹ lớp màng đen bám bên trong khoang bụng (đây là nguyên nhân chính gây mùi tanh). Rửa sạch cá lại bằng nước lạnh rồi cắt khứa tròn dày 2.5 - 3cm, để thật ráo nước.',
          'Thịt ba chỉ rửa sạch, thái con chì mỏng vừa ăn.',
        ],
        description:
          'Chà chanh muối khử nhớt cá, cạo sạch màng đen khoang bụng để tuyệt đối không tanh. Cắt khứa dày 3cm. Thái thịt ba chỉ con chì mỏng.',
      },
      {
        step: 2,
        title: 'Ướp cá & thịt ba chỉ ngấm sâu gia vị đậm đà',
        time: '25 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Gia vị thấm sâu vào từng thớ thịt cá, đầu hành giã dập triệt tiêu mùi tanh',
        actionPoints: [
          'Cho khứa cá và thịt ba chỉ vào tô lớn. Ướp cùng 3 thìa canh nước mắm nhĩ ngon, 1.5 thìa canh đường thốt nốt, 1 thìa canh nước màu dừa, 1 thìa cà phê hạt nêm, 1/2 thìa cà phê tiêu sọ.',
          'Cho toàn bộ hành tím băm, tỏi băm và đặc biệt là 3 nhánh đầu hành lá giã dập vào đảo đều nhẹ tay.',
          'Ướp tối thiểu 20 - 25 phút để thịt cá cứng cáp, ngấm trọn sắc màu cánh gián và hương thơm của gia vị.',
        ],
        description:
          'Ướp cá và thịt ba chỉ với mắm nhĩ, đường thốt nốt, nước màu dừa, tiêu sọ, hành tỏi băm và đầu hành giã dập trong 25 phút cho cá ngấm vị đậm đà.',
      },
      {
        step: 3,
        title: 'Chưng thịt ba chỉ cháy cạnh & xếp cá vào tộ đất',
        time: '8 phút',
        heat: 'Lửa vừa',
        goal: 'Tạo lớp mỡ ngậy béo chưng cháy cạnh dưới đáy tộ đất, chống dính và tăng mùi thơm',
        actionPoints: [
          'Đặt tộ đất (hoặc nồi gốm/nồi dày) lên bếp, cho 2 thìa canh mỡ heo vào đun nóng.',
          'Vớt phần thịt ba chỉ đã ướp vào chưng xào trước trên lửa vừa cho đến khi thịt ba chỉ săn lại, xém vàng nhẹ cạnh và tiết ra mỡ thơm ngậy.',
          'Tắt bếp tạm thời, lót một lớp đầu hành lá cắt khúc xuống đáy tộ, sau đó xếp từng khứa cá lên trên lớp thịt ba chỉ. Trút toàn bộ phần nước ướp cá trong tô vào tộ đất.',
        ],
        description:
          'Đun mỡ heo trong tộ đất, xào thịt ba chỉ xém cạnh tiết mỡ thơm. Lót đầu hành lá, xếp khứa cá lên trên thịt ba chỉ và trút nước ướp cá vào tộ.',
      },
      {
        step: 4,
        title: 'Kho 2 lửa với nước dừa tươi kẹo sốt béo ngậy màu cánh gián',
        time: '25 phút',
        heat: 'Lửa liu riu',
        goal: 'Khứa cá săn chắc, nước sốt kho sánh quánh sền sệt kẹo béo ngập tràn vị thơm',
        actionPoints: [
          'Bật bếp lửa vừa cho tộ cá sôi bùng lên 3 phút cho khứa cá săn bề mặt. Đổ 250ml nước dừa tươi xiêm vào sâm sấp mặt cá.',
          'Khi tộ cá sôi lại, hạ lửa xuống mức liu riu nhỏ nhất. Đậy nắp tộ kho trong 15 phút (Lửa 1). Trong quá trình kho, vớt bọt nhẹ nhàng và dùng thìa rưới nước kho lên mặt cá cho ngấm màu đều.',
          'Mở nắp tộ cá, thả ớt hiểm dầm dập vào, tiếp tục kho liu riu thêm 10 phút không đậy nắp (Lửa 2) cho nước dừa tươi rút bớt và sắc mặn ngọt sánh kẹo lại thành lớp sốt màu nâu cánh gián bóng mượt.',
          'Khi nước kho cá cạn sền sệt, rắc hành lá cắt khúc, ớt sừng thái chỉ và tiêu xay lên mặt rồi tắt bếp. Độ nóng giữ lâu của tộ đất sẽ tiếp tục làm nước sốt keo quánh lại cực kỳ quyến rũ.',
        ],
        description:
          'Đổ nước dừa tươi đun sôi rồi đậy nắp kho lửa 1 liu riu 15 phút. Mở nắp kho lửa 2 thêm 10 phút cho nước kho sánh kẹo sền sệt màu cánh gián bóng mượt. Rắc hành ớt tiêu.',
      },
      {
        step: 5,
        title: 'Nấu cơm dẻo thơm & trình bày mâm cơm cá kho tộ chuẩn vị mẹ nấu',
        time: '20 phút',
        heat: 'Lửa vừa',
        goal: 'Mâm cơm gia đình ấm cúng với thố cơm dẻo khói nghi ngút ăn cùng cá kho tộ đậm đà',
        actionPoints: [
          'Vo gạo Tám Thái / ST25 nấu cơm trắng hoặc cơm niêu cho hạt cơm dẻo ráo, ngạt ngào mùi thơm.',
          'Bày tộ cá kho nóng hổi còn reo xèo xèo trên lót gỗ. Bên cạnh là đĩa rau luộc (đọt rau muống, dưa leo, cà chua), chén dưa chua muối.',
          'Múc cơm nóng ra thố/bát, gắp khứa cá kho tộ đậm đà béo ngậy kèm miếng thịt ba chỉ mỏng trong veo, rưới thìa nước kho kẹo quánh lên hạt cơm dẻo. Hương vị mặn ngọt hài hòa, thơm nồng mùi tiêu sọ và nước dừa tươi khiến bữa cơm gia đình tròn vị ngất ngây.',
        ],
        description:
          'Nấu cơm trắng/cơm niêu dẻo thơm. Bày tộ cá kho nóng hổi béo ngậy ăn kèm dưa leo, rau muống luộc và dưa chua. Rưới nước cá kho kẹo sền sệt lên cơm nóng thưởng thức.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng kho cá tộ ngon xuất sắc chuẩn vị mẹ nấu: 1. Cạo sạch màng đen bên trong bụng cá và ướp đầu hành giã dập cùng tiêu sọ triệt tiêu hoàn toàn mùi tanh; 2. Kho bằng tộ đất và kho 2 lửa (lửa 1 đậy nắp thấm vị, lửa 2 mở nắp kẹo sốt) kết hợp nước dừa tươi giúp nước kho cá dính quánh, lên màu cánh gián tự nhiên không cần nhiều phẩm màu; 3. Lót thịt ba chỉ mỡ ở đáy tộ vừa chống cháy dính cá vừa tiết mỡ ngậy béo phủ đều quanh từng khứa cá bóng mượt.',
    recommendedSauce:
      'Đĩa cơm trắng dẻo thơm nóng hổi nghi ngút khói, rưới thìa nước cá kho tộ kẹo quánh béo ngậy đậm đà, chấm ngập đọt rau muống luộc và dưa leo giòn rụm.',
  },

  'com-chay-kho-quet': {
    dishId: 'com-chay-kho-quet',
    dishName: 'Cơm Cháy Kho Quẹt Tôm Khô Thịt Ba Chỉ',
    seoTitle: 'Cách Nấu Cơm Cháy Kho Quẹt Đậm Đà, Mềm Mọng Chuẩn Vị Mẹ Nấu',
    description:
      'Hướng dẫn chi tiết cách làm cơm cháy kho quẹt Nam Bộ giòn rụm vàng ươm không bị cứng, niêu kho quẹt kẹo quánh béo ngậy từ tóp mỡ ba chỉ, tôm khô dẻo ngọt, tiêu xanh tươi thơm nồng và rau củ luộc ngũ sắc.',
    ratingValue: '4.9',
    reviewCount: 252,
    prepTime: '20 phút',
    cookTime: '25 phút',
    difficulty: 'Trung bình',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Thành phần Cơm Cháy ép chảo vàng giòn dẻo mịn',
        items: [
          '2 bát tô cơm nguội (hoặc cơm gạo dẻo nấu vừa tới)',
          '1 thìa canh mỡ heo thắng (giúp cơm cháy giòn thơm không khô cứng)',
          '1/2 thìa cà phê hạt nêm',
          '1 thìa canh hành lá cắt nhỏ (dùng rắc tráng chảo tạo màu xanh mướt)',
        ],
      },
      {
        category: 'Thành phần Kho Quẹt chuẩn vị Mẹ nấu',
        items: [
          '250g thịt ba chỉ rút sườn (thái hạt lựu vuông nhỏ 0.8cm, lọc bỏ da tránh nổ mỡ)',
          '50g tôm khô loại ngon (tôm đất ngâm nước ấm 15 phút cho dẻo mềm)',
          '3 nhánh tiêu xanh tươi (đập dập nhẹ)',
          '3 - 4 quả ớt hiểm đỏ nguyên quả',
          '3 củ hành tím + 1 củ tỏi băm nhuyễn',
          '2 nhánh hành lá cắt nhỏ',
          '1 thìa cà phê tiêu đen xay vỡ hạt',
        ],
      },
      {
        category: 'Hỗn hợp nước sốt Kho Quẹt kẹo quánh đậm đà',
        items: [
          '5 thìa canh nước mắm truyền thống ngon (40 độ đạm)',
          '4 thìa canh đường thốt nốt (hoặc đường cát vàng)',
          '3 thìa canh nước lọc (dùng nước ngâm tôm khô đã lọc sạch)',
          '1/2 thìa cà phê hạt nêm',
          '1/2 thìa cà phê ớt bột (tạo màu đỏ cam bóng mượt)',
        ],
      },
      {
        category: 'Rau củ luộc ngũ sắc ăn kèm chống ngấy',
        items: [
          '1/2 quả bầu ngọt (thái thanh dài vừa ăn)',
          '1/2 củ cà rốt, 100g đậu que',
          '1/2 bắp cải hoặc bông cải xanh (súp lơ)',
          '1/2 củ củ cải trắng',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế thịt ba chỉ, tôm khô & Chuẩn bị nước sốt kho quẹt',
        time: '10 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Thịt ba chỉ thái hạt lựu đều, tôm khô dẻo mềm không tanh, nước sốt hòa tan hoàn toàn',
        actionPoints: [
          'Thịt ba chỉ rửa sạch với nước muối pha loãng và chút rượu trắng khử mùi, dùng dao lọc bỏ phần da (bì) để khi chiên không bị bắn mỡ. Thái thịt thành từng hạt lựu nhỏ khoảng 0.8cm.',
          'Tôm khô rửa qua nước lạnh cho sạch bụi bẩn, ngâm trong 150ml nước ấm 15 phút cho tôm nở dẻo mềm. Vớt tôm ra ráo, giữ lại 3 thìa canh nước ngâm tôm khô.',
          'Pha hỗn hợp nước sốt kho quẹt: Cho 5 thìa canh nước mắm, 4 thìa canh đường thốt nốt, 3 thìa canh nước ngâm tôm, 1/2 thìa hạt nêm và 1/2 thìa ớt bột vào bát, khuấy đều cho đường tan hoàn toàn.',
        ],
        description:
          'Lựa chọn thịt ba chỉ có tỷ lệ 7 nạc 3 mỡ giúp tóp mỡ sau khi rán vừa béo ngậy vừa giòn rụm mà không bị khô cứng.',
        tip: 'Dùng nước ngâm tôm khô để pha sốt giúp kho quẹt có vị ngọt thanh tự nhiên đậm đà từ hải sản.',
      },
      {
        step: 2,
        title: 'Rán tóp mỡ ba chỉ giòn rụm & Phi thơm hành tỏi',
        time: '8 phút',
        heat: 'Lửa vừa',
        goal: 'Tóp mỡ ba chỉ vàng giòn, tiết ra mỡ thơm lừng',
        actionPoints: [
          'Cho thịt ba chỉ thái hạt lựu vào niêu đất hoặc chảo lòng sâu, đun lửa vừa. Đảo đều tay để thịt tự tiết ra mỡ và chuyển sang màu vàng giòn béo ngậy.',
          'Khi tóp mỡ đã teo lại vàng giòn, vớt toàn bộ tóp mỡ ra bát riêng để giữ độ giòn.',
          'Múc bớt mỡ heo ra bát (chỉ giữ lại khoảng 2 thìa canh mỡ trong niêu). Cho hành tím băm và tỏi băm vào phi thơm lừng trên lửa vừa.',
        ],
        description:
          'Chiên tóp mỡ bằng niêu đất giữ nhiệt rất tốt, giúp tóp mỡ chín đều từ trong ra ngoài.',
        tip: 'Không rán tóp mỡ quá cháy đen sẽ làm kho quẹt bị đắng.',
      },
      {
        step: 3,
        title: 'Kho quẹt tôm khô quánh kẹo đậm đà chuẩn vị Mẹ nấu',
        time: '10 phút',
        heat: 'Lửa nhỏ (Riêu riêu)',
        goal: 'Kho quẹt kẹo quánh sền sệt, màu nâu cánh gián óng ả, đậm đà béo ngậy',
        actionPoints: [
          'Cho tôm khô đã dẻo mềm vào niêu mỡ hành tỏi, đảo nhanh tay 1 - 2 phút cho tôm săn lại và dậy mùi thơm.',
          'Đổ bát nước sốt đã pha vào niêu. Đun sôi rồi hạ lửa nhỏ riêu riêu, đun sôi lăn tăn trong 7 - 8 phút cho nước sốt cô đặc kẹo quánh lại.',
          'Trút toàn bộ tóp mỡ giòn vào niêu, thêm 3 nhánh tiêu xanh đập dập, ớt hiểm nguyên quả. Đun thêm 2 - 3 phút cho các nguyên liệu hòa quyện ngấm vị.',
          'Tắt bếp, rắc hành lá cắt nhỏ và 1 thìa cà phê tiêu đen xay lên trên.',
        ],
        description:
          'Sốt kho quẹt khi hoàn thành có màu nâu cánh gián bóng mượt, vị mặn ngọt hài hòa, thơm nồng tiêu xanh và cay nhẹ từ ớt hiểm.',
        tip: 'Khi đun nhỏ lửa trong niêu đất, nước sốt sẽ tự quánh lại sền sệt mà không cần cho bột năng.',
      },
      {
        step: 4,
        title: 'Làm cơm cháy giòn rụm bên ngoài, dẻo mềm bên trong bằng chảo chống dính',
        time: '12 phút',
        heat: 'Lửa nhỏ',
        goal: 'Miếng cơm cháy vàng ươm, giòn rụm hạt cơm kết dính mà không bị cứng',
        actionPoints: [
          'Cho 2 bát cơm nguội vào tô, thêm 1/2 thìa cà phê hạt nêm và 1 thìa canh mỡ heo, dùng tay (đeo găng) bóp nhẹ cho hạt cơm tơi dẻo và ngấm gia vị.',
          'Quết 1 lớp mỡ mỏng lên chảo chống dính lòng rộng. Cho cơm vào chảo, dùng thìa hoặc phên phẳng miết nhẹ ép cơm dàn mỏng đều khắp mặt chảo.',
          'Bật lửa nhỏ, xoay nghiêng chảo liên tục để nhiệt tỏa đều các mép cơm. Ép chảo trong 10 - 12 phút đến khi mặt dưới cơm chuyển màu vàng ươm, giòn rụm.',
          'Gấp đôi ổ cơm cháy hoặc dùng kéo cắt thành từng miếng hình tam giác vừa ăn.',
        ],
        description:
          'Trộn chút mỡ heo và hạt nêm vào cơm nguội trước khi ép chảo giúp hạt cơm chiên lên giòn xốp thơm lừng mà không bị khô cứng.',
        tip: 'Xoay đều chảo trên bếp lửa nhỏ giúp cơm cháy chín vàng giòn đều từ tâm ra rìa chảo.',
      },
      {
        step: 5,
        title: 'Luộc rau củ ngũ sắc & Trình bày thưởng thức',
        time: '5 phút',
        heat: 'Lửa lớn',
        goal: 'Rau củ luộc giữ màu xanh mướt, độ giòn ngọt tự nhiên',
        actionPoints: [
          'Đun sôi nồi nước với 1/2 thìa cà phê muối. Cho cà rốt, đậu que, bắp cải, bầu vào luộc chín tới trong 3 - 4 phút. Vớt ra ngâm ngay vào tô nước đá lạnh 2 phút rồi vớt ra ráo nước.',
          'Bày đĩa cơm cháy vàng rụm bên cạnh niêu kho quẹt bốc khói nghi ngút và đĩa rau củ luộc xanh mướt.',
          'Thưởng thức: Bẻ miếng cơm cháy giòn rụm chấm ngập vào niêu kho quẹt kẹo quánh, quệt thêm miếng rau củ luộc ngọt mát.',
        ],
        description:
          'Sự kết hợp hoàn hảo giữa vị giòn rụm của cơm cháy, vị mặn ngọt béo thơm ngậy của kho quẹt tôm khô tóp mỡ và vị thanh mát của rau củ luộc.',
        tip: 'Rau củ luộc xong ngâm nước đá giúp giữ được màu xanh tươi rực rỡ và độ giòn ngọt.',
      },
    ],
    chefSecret:
      'Bí quyết để kho quẹt quánh ngon là dùng nước mắm nhĩ độ đạm cao kết hợp đường thốt nốt và đun lửa nhỏ riêu riêu trong niêu đất. Cơm cháy ép bằng cơm nguội trộn chút mỡ heo giúp cơm vừa giòn xốp bên ngoài mà vẫn dẻo ngọt bên trong.',
    recommendedSauce:
      'Chấm kèm cơm cháy giòn rụm, rau củ luộc ngũ sắc (bầu, cà rốt, đậu que, bắp cải), thêm vài lát dưa leo tươi.',
  },

  'chao-ca-loc-rau-dang': {
    dishId: 'chao-ca-loc-rau-dang',
    dishName: 'Cháo Cá Lóc Miền Tây Rau Đắng Nóng Hổi',
    seoTitle: 'Cách Nấu Cháo Cá Lóc Bổ Dưỡng, Thơm Ngon Cho Cả Nhà',
    description:
      'Hướng dẫn chi tiết cách nấu cháo cá lóc đồng bổ dưỡng thanh mát chuẩn vị Miền Tây: Hạt gạo rang thơm búp hoa cúc sánh mịn không vữa, phi lê cá lóc xào xắn đượm vị thơm lừng không tanh, ăn kèm rau đắng đất, nấm rơm và gừng thái chỉ ấm bụng.',
    prepTime: '25 phút',
    cookTime: '35 phút',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Thành phần Cá Lóc đồng tươi ngon & Gia vị ướp',
        items: [
          '1 con cá lóc đồng tươi (khoảng 800g - 1kg, cá còn sống bơi khỏe)',
          '1 củ gừng tươi (1 nửa thái lát luộc cá, 1 nửa thái sợi chỉ ăn kèm)',
          '3 củ hành tím + 1 củ tỏi băm nhuyễn',
          '1 thìa canh nước mắm nhĩ truyền thống ngon (40 độ đạm)',
          '1 thìa cà phê hạt nêm, 1/2 thìa cà phê đường thốt nốt',
          '1 thìa cà phê tiêu sọ xay vỡ hạt',
          '1 thìa canh rượu trắng + 1 quả chanh + muối hạt (dùng khử tanh cá)',
        ],
      },
      {
        category: 'Thành phần Gạo rang nấu cháo sánh mịn & Nấm rơm',
        items: [
          '1/2 bát gạo tẻ thơm (gạo ST25 hoặc Tám Thái dẻo thơm)',
          '1/4 bát gạo nếp thơm (tạo độ sánh dẻo mịn tự nhiên cho cháo)',
          '150g nấm rơm tươi (búp tròn, ngâm nước muối pha loãng, bổ đôi)',
          '2 thìa canh mỡ heo thắng (giúp cháo bóng mượt ngậy thơm)',
          '2 thìa canh hành tím phi vàng giòn',
        ],
      },
      {
        category: 'Rau ăn kèm & Gia vị nêm nếm tô cháo chuẩn vị',
        items: [
          '100g rau đắng đất tươi (rửa sạch ráo nước)',
          '100g giá đỗ tươi, 1 bó hẹ cắt khúc',
          'Hành lá cắt nhỏ, rau ngò rí, ớt hiểm cắt khoanh',
          'Tiêu sọ xay vỡ, chén nước mắm nhĩ tỏi ớt hiểm dầm chấm cá',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế cá lóc triệt tiêu mùi tanh & Ngâm nấm rơm',
        time: '12 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Cá lóc sạch vảy, không hôi tanh, nấm rơm sạch bụi bẩn',
        actionPoints: [
          'Cá lóc đánh sạch vảy, mổ bụng bỏ nội tạng, đặc biệt cạo sạch lớp màng đen bám trong khoang bụng (đây là nguyên nhân chính gây mùi hôi tanh). Dùng chanh tươi, muối hạt và rượu trắng chà xát kỹ khắp thân cá trong 3 phút rồi rửa lại bằng nước sạch, để ráo.',
          'Dùng dao sắc lóc lấy 2 miếng phi lê thịt cá hai bên lườn. Phần đầu cá, xương sống và đuôi cá giữ lại để ninh lấy nước dùng ngọt thanh.',
          'Nấm rơm gọt sạch gốc bẩn, ngâm trong nước muối pha loãng 10 phút, vớt ra rửa sạch rồi bổ đôi.',
        ],
        description:
          'Lựa chọn cá lóc đồng tươi sống giúp thịt cá săn chắc, ngọt đậm tự nhiên và không bị bở.',
        tip: 'Cạo kiệt lớp màng đen bên trong khoang bụng cá và chà rượu chanh giúp triệt tiêu hoàn toàn mùi tanh của cá sông/cá đồng.',
      },
      {
        step: 2,
        title: 'Ninh xương cá lấy nước ngọt thanh & Ướp phi lê cá lóc',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Nước dùng cá ngọt thanh tự nhiên, phi lê cá ngấm sâu gia vị',
        actionPoints: [
          'Đun sôi 1.8 lít nước với 1 củ hành tím đập dập và vài lát gừng tươi. Cho xương cá, đầu cá và đuôi cá vào luộc chín tới trong 10 phút.',
          'Vớt đầu cá và xương cá ra bát riêng, lọc nước luộc cá qua rây mịn để loại bỏ hoàn toàn xương dăm nhỏ.',
          'Thái phi lê thịt cá lóc thành từng miếng vừa ăn (dày khoảng 0.8cm). Ướp cá với 1 thìa canh nước mắm nhĩ, 1 thìa cà phê hạt nêm, 1/2 thìa đường, 1/2 thìa tiêu sọ và 1 thìa hành tím băm trong 15 phút.',
        ],
        description:
          'Nước ninh từ xương cá lóc ngọt đậm đà tự nhiên mà không cần dùng nhiều hạt nêm hay mì chính.',
        tip: 'Luộc xương cá cùng gừng tươi và hành tím đập dập giúp nước dùng thơm phức mùi thảo mộc.',
      },
      {
        step: 3,
        title: 'Rang gạo búp hoa cúc & Ninh cháo sánh dẻo mịn',
        time: '25 phút',
        heat: 'Lửa nhỏ',
        goal: 'Hạt gạo rang nở bung búp hoa cúc, cháo sánh mịn không bị vữa',
        actionPoints: [
          'Vo sạch hỗn hợp gạo tẻ và gạo nếp, để ráo nước. Cho gạo vào chảo rang khô trên lửa nhỏ 5 - 7 phút đến khi hạt gạo chuyển màu trắng đục và hơi ngả vàng nhẹ, ngậy mùi thơm đặc trưng.',
          'Trút toàn bộ gạo rang vào nồi nước ninh xương cá đang sôi. Bật lửa lớn đun sôi bùng, hớt sạch bọt mịn.',
          'Hạ lửa nhỏ riêu riêu đậy vung ninh trong 20 - 25 phút đến khi hạt gạo nở bung búp hình hoa cúc, cháo sánh dẻo tự nhiên.',
        ],
        description:
          'Rang gạo trước khi nấu cháo là bí quyết truyền thống giúp hạt gạo nở búp đẹp mắt, cháo thơm lừng ngậy vị và không bao giờ bị vữa nát.',
        tip: 'Kết hợp 2 phần gạo tẻ dẻo và 1 phần gạo nếp giúp nồi cháo cá có độ sánh quánh hoàn hảo.',
      },
      {
        step: 4,
        title: 'Xào phi lê cá lóc & Nấm rơm đượm vị thơm lừng',
        time: '6 phút',
        heat: 'Lửa lớn',
        goal: 'Miếng cá lóc xào săn chắc, vàng ươm thơm lừng, nấm rơm giòn ngọt',
        actionPoints: [
          'Đun nóng 2 thìa canh mỡ heo trong chảo, cho hành tím và tỏi băm vào phi vàng thơm rực.',
          'Cho phi lê cá lóc đã ướp vào đảo nhẹ tay trên lửa lớn 3 - 4 phút cho thịt cá săn lại, chín tới mà không bị vỡ nát.',
          'Trút nấm rơm vào đảo cùng cá 2 phút cho nấm ngấm vị béo bùi rồi tắt bếp.',
          'Trút toàn bộ chảo cá lóc xào nấm rơm vào nồi cháo ninh, nêm lại 1 thìa canh nước mắm, 1 thìa hạt nêm cho vừa khẩu vị gia đình.',
        ],
        description:
          'Xào săn cá lóc với mỡ heo và hành tỏi phi giúp miếng cá ngấm đượm gia vị, béo thơm giòn ngọt mà không bị tanh.',
        tip: 'Đảo cá nhẹ tay trên lửa lớn giúp thịt cá chín săn bề mặt và giữ nguyên miếng đẹp mắt.',
      },
      {
        step: 5,
        title: 'Múc cháo ra tô & Thưởng thức nóng hổi kèm rau đắng đất',
        time: '5 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Tô cháo cá lóc bốc khói nghi ngút, thơm nồng gừng tiêu, béo ngọt đậm đà',
        actionPoints: [
          'Xếp một nhúm rau đắng đất tươi (hoặc giá đỗ, hẹ cắt khúc) ở đáy tô.',
          'Múc cháo cá lóc đang sôi bốc khói nghi ngút rưới lên trên làm tái chín rau đắng dịu ngọt.',
          'Xếp thịt cá lóc xào béo ngọt, nấm rơm giòn sần sật lên mặt tô, rắc nhiều hành phi giòn rụm, gừng thái sợi chỉ, hành lá, ngò rí và tiêu sọ xay.',
          'Thưởng thức nóng hổi: Chấm phi lê cá lóc vào chén nước mắm nhĩ tỏi ớt dầm. Vị ngọt thanh béo ngậy của cháo cá hòa quyện vị đắng dịu mát của rau đắng đất và vị cay nồng của gừng tươi cực kỳ bổ dưỡng.',
        ],
        description:
          'Món cháo cá lóc bổ dưỡng thích hợp cho cả gia đình, người già, trẻ em hay người vừa mới ốm dậy giúp giải cảm và phục hồi sức khỏe nhanh chóng.',
        tip: 'Rau đắng đất tái chín trong tô cháo nóng giữ nguyên độ giòn ngọt dịu, ăn rất mát gan giải nhiệt.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng nấu cháo cá lóc ngon ngọt không tanh chuẩn vị miền Tây: 1. Cạo sạch màng đen trong bụng cá và rửa với chanh rượu gừng để triệt tiêu hoàn toàn vị tanh; 2. Rang gạo vàng nhẹ trước khi ninh giúp hạt gạo nở búp hoa cúc, cháo sánh thơm dẻo mịn mà không bị vữa; 3. Lọc lấy nước ninh xương đầu cá đun cháo và xào phi lê cá riêng rồi mới thả vào cháo giúp miếng cá săn chắc đậm đà không vỡ.',
    recommendedSauce:
      'Tô cháo cá lóc nóng hổi ăn kèm đĩa rau đắng đất tươi xanh, giá đỗ, hẹ cắt khúc, gừng thái sợi chỉ và chén nước mắm nhĩ ớt hiểm dầm cay nồng.',
  },

  'lau-ca-keo-la-giang': {
    dishId: 'lau-ca-keo-la-giang',
    dishName: 'Lẩu Cá Kèo Lá Giang Chua Thanh Cay Ấm',
    seoTitle: 'Cách Nấu Lẩu Cá Kèo Lá Giang Chua Cay Đậm Đà Chuẩn Vị Gia Đình',
    description:
      'Hướng dẫn chi tiết cách nấu lẩu cá kèo lá giang chuẩn vị Nam Bộ: Nước lẩu nấu bằng nước dừa tươi ngọt mát thanh tao, lá giang vò dập chua dịu tự nhiên không bị chát, cá kèo tươi sống ngọt béo bùi bùi nhúng lẩu ăn kèm rau đắng, rau nhút, bắp chuối bào và sốt mắm me sền sệt.',
    prepTime: '25 phút',
    cookTime: '30 phút',
    difficulty: 'Trung bình',
    servings: '4 - 6 người',
    ingredients: [
      {
        category: 'Thành phần Cá Kèo tươi & Sơ chế làm sạch nhớt',
        items: [
          '500g - 700g cá kèo tươi sống (con bơi khỏe, kích thước bằng ngón tay cái)',
          '2 thìa canh muối hạt + 3 thìa canh giấm ăn (hoặc chanh tươi/rượu trắng dùng chà sạch nhớt)',
          '1 tô nước đá lạnh (dùng ngâm cá kèo ngất tạm thời trước khi nhúng lẩu, tránh cá giãy bắn nước)',
        ],
      },
      {
        category: 'Thành phần Nước dùng Lẩu Lá Giang chua thanh đậm đà',
        items: [
          '150g lá giang tươi (chọn lá non vừa tới, nhặt sạch rửa ráo)',
          '1.5 lít nước dùng (kết hợp 1 lít nước dừa tươi xiêm + 500ml nước hầm xương)',
          '3 nhánh sả tươi (1 nửa băm nhuyễn, 1 nửa đập dập cắt khúc 5cm)',
          '3 củ hành tím + 1 củ tỏi băm nhuyễn',
          '2 quả ớt hiểm dầm dập + 1 thìa canh sa tế tôm',
          '2 quả cà chua chín mọng (thái múi cau)',
          '3 thìa canh nước mắm nhĩ truyền thống ngon (40 độ đạm)',
          '2 thìa canh đường thốt nốt (hoặc đường cát vàng)',
          '1.5 thìa canh cốt me chín (tạo vị chua dịu nhẹ cân bằng vị lá giang)',
          '1 thìa cà phê hạt nêm, 1 thìa canh mỡ heo thắng (hoặc dầu ăn)',
        ],
      },
      {
        category: 'Rau nhúng lẩu & Nước chấm mắm me sền sệt chuẩn vị',
        items: [
          'Rau ăn kèm: 150g rau đắng đất, 150g rau nhút (rau rút làm sạch), 150g bắp chuối bào, 100g ngò gai & rau om cắt nhỏ',
          '500g bún tươi (hoặc mì gói, bánh đa)',
          'Nước chấm mắm me sền sệt: 2 thìa canh cốt me chín + 2 thìa canh nước mắm nhĩ + 2 thìa canh đường thốt nốt + 1 thìa tỏi ớt băm nhuyễn',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế cá kèo sạch nhớt & Ngâm ngất xỉu bằng tô nước đá',
        time: '10 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Cá kèo sạch bong nhớt đen, nằm yên ngất xỉu không giãy bắn nước lẩu',
        actionPoints: [
          'Cho cá kèo tươi sống vào thau lớn, trút 2 thìa canh muối hạt và 3 thìa canh giấm ăn (hoặc chanh/rượu trắng) vào đậy nắp trong 5 phút. Dùng tay chà xát nhẹ nhàng khắp thân cá cho bong hết lớp màng nhớt đen. Rửa lại cá nhiều lần bằng nước sạch cho thật sạch nhớt và ráo nước.',
          'Cho cá kèo vào tô chứa nước đá lạnh đậy kín trong 10 phút. Đá lạnh giúp cá kèo ngất tạm thời, khi dọn ra bàn trút cá vào nồi lẩu đang sôi sẽ không bị nhảy giãy bắn nước lẩu nóng nguy hiểm.',
        ],
        description:
          'Mẹo ngâm đá lạnh là bí quyết vàng của các nhà hàng lẩu cá kèo Miền Tây giúp thực khách thao tác an toàn sạch sẽ.',
        tip: 'Chà muối giấm thật kỹ giúp loại bỏ hoàn toàn mùi tanh nhớt dế của cá kèo.',
      },
      {
        step: 2,
        title: 'Sơ chế lá giang vò dập & Chuẩn bị rau nhúng lẩu',
        time: '10 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Lá giang vò dập tiết vị chua thanh dịu, rau củ rửa sạch ráo nước',
        actionPoints: [
          'Lá giang tuốt lấy lá, rửa sạch nhiều lần với nước cho ráo. Dùng tay vò dập nhẹ từng nắm lá giang trước khi nấu (đây là bước BẮT BUỘC giúp lá giang tiết ra vị chua thanh dịu ngọt tự nhiên mà không bị chát).',
          'Cà chua thái múi cau. Sả tươi 1 nửa băm nhỏ, 1 nửa đập dập cắt khúc 5cm. Ngò gai và rau om rửa sạch thái nhỏ.',
          'Rau đắng đất, rau nhút, bắp chuối bào rửa sạch ngâm nước muối loãng 10 phút, vớt ra ráo nước xếp ra đĩa.',
        ],
        description:
          'Lá giang vò dập dập nhẹ giúp nước lẩu thanh dịu mượt mà, không bị vị nồng hay chát.',
        tip: 'Không vò nát lá giang quá nát vụn làm đục nước lẩu, chỉ vò gãy nhẹ gân lá.',
      },
      {
        step: 3,
        title: 'Phi thơm gia vị & Nấu nước lẩu lá giang đậm đà chua thanh',
        time: '12 phút',
        heat: 'Lửa vừa',
        goal: 'Nước lẩu lá giang màu nâu đỏ cam óng ả, vị chua thanh dịu nhẹ hậu ngọt nước dừa',
        actionPoints: [
          'Đun nóng 1 thìa canh mỡ heo trong nồi lẩu, cho tỏi băm, hành tím băm, sả băm và sả khúc vào phi vàng thơm lừng. Cho cà chua thái múi cau và 1 thìa sa tế tôm vào đảo đều 2 phút tạo màu bắt mắt.',
          'Đổ 1 lít nước dừa tươi xiêm và 500ml nước hầm xương vào nồi đun sôi bùng.',
          'Trút toàn bộ lá giang đã vò dập vào nồi nước lẩu. Nêm 3 thìa canh nước mắm nhĩ, 2 thìa canh đường thốt nốt, 1.5 thìa cốt me chín và 1 thìa hạt nêm. Đun sôi liu riêu 5 - 7 phút cho lá giang tiết vị chua thanh hòa quyện vị ngọt nước dừa.',
        ],
        description:
          'Sự kết hợp giữa lá giang chua dịu, cốt me nhẹ và nước dừa tươi xiêm tạo nên hương vị lẩu ngọt thanh tròn vị khó cưỡng.',
        tip: 'Nêm đường thốt nốt giúp vị chua của lá giang trở nên đằm thắm dịu mát.',
      },
      {
        step: 4,
        title: 'Pha sốt chấm mắm me sền sệt chuẩn vị Miền Tây',
        time: '5 phút',
        heat: 'Lửa nhỏ',
        goal: 'Chén mắm me sền sệt, vị chua ngọt đậm đà cay xè tỏi ớt',
        actionPoints: [
          'Ngâm 30g me chín trong 50ml nước ấm 5 phút, dầm nát lọc lấy cốt me.',
          'Cho cốt me vào chén, thêm 2 thìa canh nước mắm nhĩ, 2 thìa canh đường thốt nốt, khuấy đều trên lửa nhỏ 2 phút cho sốt sánh kẹo lại.',
          'Trút tỏi băm, ớt hiểm băm nhuyễn vào khuấy đều tạo nên bát mắm me chua ngọt cay xè sền sệt đậm đà.',
        ],
        description:
          'Sốt mắm me là linh hồn của món lẩu cá kèo, vị mặn ngọt cay chua ôm trọn thớ thịt cá béo ngậy.',
        tip: 'Đun ấm hỗn hợp mắm me giúp mắm dính quyện sền sệt cực kỳ hấp dẫn.',
      },
      {
        step: 5,
        title: 'Trình bày & Thưởng thức lẩu cá kèo lá giang nóng hổi',
        time: '5 phút',
        heat: 'Lửa lớn trên bếp mini',
        goal: 'Nồi lẩu bốc khói nghi ngút, cá kèo luộc chín tới béo bùi, rau nhúng giòn mát',
        actionPoints: [
          'Đặt nồi nước lẩu lá giang lên bếp cồn/bếp từ mini giữa bàn ăn đun sôi sủi bọt lăn tăn, rắc ngò gai, rau om và ớt sừng cắt khoanh lên trên. Bày đĩa cá kèo tươi ngâm đá lạnh bên cạnh đĩa rau sông (rau đắng, rau nhút, bắp chuối) và đĩa bún tươi.',
          'Thưởng thức: Khi nước lẩu sôi bùng, trút cá kèo tươi vào luộc chín trong 2 - 3 phút (cá kèo rất mau chín, cá chín tới da bóng mượt thịt ngọt béo bùi, xương mềm). Nhúng rau đắng, rau nhút vào nước lẩu vớt ra ngay.',
          'Chấm con cá kèo béo ngậy vào chén sốt mắm me sền sệt, ăn kèm bún tươi và húp thìa nước lẩu lá giang chua thanh nồng nàn.',
        ],
        description:
          'Bữa ăn gia đình ấm cúng xum vầy bên nồi lẩu cá kèo lá giang chua cay nghi ngút khói đậm đà tình thân.',
        tip: 'Cá kèo nhúng đến đâu ăn đến đó để thịt cá luôn nóng hổi béo ngọt nhất.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng nấu lẩu cá kèo lá giang chuẩn vị Nam Bộ: 1. Chà xát cá kèo với muối hạt và giấm/rượu trắng để làm sạch hoàn toàn nhớt cá, sau đó ngâm tô nước đá lạnh cho cá ngất tạm thời – vừa giữ độ tươi ngọt tối đa vừa tránh cá giãy bắn nước lẩu nguy hiểm; 2. Lá giang BẮT BUỘC phải dùng tay vò dập nhẹ trước khi nấu để chiết xuất trọn vẹn vị chua thanh dịu ngọt, nếu để nguyên lá nước sẽ bị chát; 3. Dùng nước dừa tươi xiêm làm nước lẩu cân bằng hoàn hảo vị chua của lá giang và vị đậm đà của nước mắm nhĩ.',
    recommendedSauce:
      'Chén sốt mắm me sền sệt chua ngọt cay xè dầm tỏi ớt hiểm, chấm ngập từng con cá kèo béo ngậy ngọt bùi và rau đắng nhúng lẩu.',
  },

  'vit-nau-chao-can-tho': {
    dishId: 'vit-nau-chao-can-tho',
    dishName: 'Vịt Nấu Chao Cần Thơ Béo Bùi Khoai Môn',
    seoTitle: 'Cách Nấu Vịt Nấu Chao Cần Thơ Thơm Ngon Chuẩn Vị Gia Đình',
    description:
      'Hướng dẫn chi tiết cách nấu vịt nấu chao Cần Thơ béo ngậy thơm lừng chuẩn vị Miền Tây: Thịt vịt xiêm săn chắc đượm sốt chao đỏ chao trắng béo bùi, hầm cùng nước dừa tươi xiêm thanh ngọt, khoai môn sáp chiên sơ dẻo bở không vữa, nhúng rau muống đồng và chấm sốt chao pha tỏi ớt đường chanh sền sệt.',
    prepTime: '30 phút',
    cookTime: '40 phút',
    difficulty: 'Trung bình',
    servings: '4 - 6 người',
    ingredients: [
      {
        category: 'Thành phần Thịt Vịt xiêm & Khử mùi hôi',
        items: [
          '1/2 con vịt xiêm hoặc vịt cỏ tươi (khoảng 1.2kg - 1.5kg, thịt săn ít mỡ)',
          '1 củ gừng tươi đập dập + 100ml rượu trắng + 1 quả chanh + 1 thìa canh muối hạt (dùng khử hoàn toàn mùi hôi lông vịt)',
        ],
      },
      {
        category: 'Thành phần Hỗn hợp Sốt Ướp Chao chuẩn vị Cần Thơ',
        items: [
          '4 khối chao đỏ (tạo màu đỏ cam óng ả & vị béo bùi thơm nức)',
          '4 khối chao trắng (tạo vị mặn béo đặc trưng)',
          '2 thìa canh nước chao (lấy trong hũ chao)',
          '3 củ hành tím + 1 củ tỏi + 2 nhánh sả + 1 củ gừng băm nhuyễn',
          '1.5 thìa canh đường thốt nốt (hoặc đường cát vàng)',
          '1 thìa canh nước mắm nhĩ truyền thống (40 độ đạm)',
          '1 thìa cà phê hạt nêm, 1 thìa canh sa tế tôm',
          '1 thìa canh mỡ heo thắng (giúp sốt quết vịt thơm béo)',
        ],
      },
      {
        category: 'Thành phần Khoai Môn Sáp & Nước dùng Lẩu Vịt Nấu Chao',
        items: [
          '400g khoai môn sáp (hoặc khoai môn ngọt, gọt vỏ cắt khối vuông 3cm)',
          '1.2 lít nước dừa tươi xiêm (nước dừa ngọt giúp thịt vịt mềm mọng và dịu vị chao)',
          '3 nhánh sả tươi đập dập cắt khúc 5cm',
          '2 thìa canh mỡ heo thắng (dùng chiên sơ khoai môn & xào thịt vịt)',
        ],
      },
      {
        category: 'Thành phần Sốt Chấm Chao pha chuẩn vị & Rau nhúng kèm',
        items: [
          'Sốt chấm chao: 3 viên chao trắng + 1 viên chao đỏ + 1.5 thìa canh đường thốt nốt + 1 thìa canh nước cốt chanh + 1 thìa tỏi ớt băm nhuyễn + 1/2 thìa sa tế',
          'Rau ăn kèm: 200g rau muống đồng (bỏ bớt lá), 150g rau cải cúc (tần ô), 1 bó hẹ cắt khúc, 150g nấm rơm',
          '500g bún tươi (hoặc mì gói, bánh phở)',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế thịt vịt triệt tiêu mùi hôi & Chặt miếng vừa ăn',
        time: '12 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Thịt vịt sạch sẽ, không mùi hôi lông, chặt miếng vuông vức',
        actionPoints: [
          'Vịt nhổ sạch lông măng, rửa sạch. Dùng hỗn hợp gừng tươi đập dập, rượu trắng, chanh tươi và muối hạt chà xát kỹ toàn bộ da và khoang bụng vịt trong 5 phút. Rửa lại nhiều lần bằng nước sạch, lau khô bằng khăn sạch.',
          'Chặt thịt vịt thành từng miếng vuông vừa ăn (khoảng 3 - 4cm). Chặt dứt khoát để xương vịt không bị nát vụn.',
        ],
        description:
          'Khử hôi kỹ bằng gừng và rượu trắng là bước tiên quyết giúp món vịt nấu chao thơm nức mà không bị tanh hôi.',
        tip: 'Vịt xiêm thịt săn chắc, dầy thịt và ít mỡ hơn vịt siêu thịt, rất thích hợp làm món nấu chao.',
      },
      {
        step: 2,
        title: 'Pha hỗn hợp Sốt Ướp Chao & Ướp thịt vịt ngấm đượm vị',
        time: '15 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Thịt vịt ngấm sâu vị béo ngậy của chao đỏ, chao trắng và gia vị',
        actionPoints: [
          'Cho 4 khối chao đỏ, 4 khối chao trắng và 2 thìa canh nước chao vào tô lớn, dùng thìa dầm nhuyễn mịn.',
          'Cho tỏi băm, hành tím băm, gừng băm, sả băm, 1.5 thìa đường thốt nốt, 1 thìa mắm nhĩ, 1 thìa hạt nêm, 1 thìa sa tế tôm và 1 thìa mỡ heo vào tô chao, khuấy đều thành hỗn hợp sốt ướp chao sánh mịn thơm lừng.',
          'Trút thịt vịt vào tô sốt chao, trộn đều dùng tay bóp nhẹ cho thịt vịt ngấm sâu gia vị. Ướp ít nhất 30 - 40 phút.',
        ],
        description:
          'Sự kết hợp hoàn hảo giữa chao đỏ (tạo màu đẹp & vị béo bùi) và chao trắng (tạo vị mặn đậm đà) giúp món ăn tròn vị.',
        tip: 'Ướp thịt vịt ngấm chao đủ 30 phút giúp khi hầm từng thớ thịt béo ngậy từ trong ra ngoài.',
      },
      {
        step: 3,
        title: 'Chiên sơ khoai môn sáp & Phi thơm sả tỏi',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Khoai môn sáp xém nhẹ vàng giòn vỏ bên ngoài, dẻo bở bên trong',
        actionPoints: [
          'Khoai môn sáp gọt vỏ, rửa sạch, cắt khối vuông nhỏ vừa ăn (khoảng 3cm). Ngâm nước muối 5 phút rồi vớt ra ráo.',
          'Đun nóng 2 thìa canh mỡ heo trong chảo, cho khoai môn vào chiên sơ lửa vừa 5 phút cho xém nhẹ vàng giòn lớp vỏ bên ngoài rồi vớt ra ráo mỡ.',
        ],
        description:
          'Chiên sơ khoai môn giúp tạo lớp vỏ giòn nhẹ bảo vệ khối khoai, khi ninh lẩu khoai không bị vữa nát đục nước lẩu.',
        tip: 'Khoai môn sáp dẻo bở ngon hơn khoai lệ phố trong món lẩu vịt nấu chao.',
      },
      {
        step: 4,
        title: 'Xào thịt vịt đượm sốt chao & Hầm vịt nấu chao dừa tươi',
        time: '30 phút',
        heat: 'Lửa vừa',
        goal: 'Thịt vịt chín mềm mọng, nước lẩu béo bùi sánh nhẹ màu đỏ cam óng ả',
        actionPoints: [
          'Đun nóng mỡ heo trong nồi lẩu, cho sả khúc đập dập, tỏi băm, hành tím băm vào phi vàng thơm lừng.',
          'Trút toàn bộ thịt vịt đã ướp ngấm sốt chao vào nồi, đảo đều liên tục trên lửa lớn 5 - 7 phút cho thịt vịt săn chắc lại và dậy mùi thơm nức.',
          'Đổ 1.2 lít nước dừa tươi xiêm vào nồi ngập sâm sấp thịt vịt. Đun sôi bùng, vớt sạch bọt mịn rồi hạ lửa nhỏ liu riêu đậy vung hầm trong 20 phút cho thịt vịt chín mềm mọng.',
          'Trút toàn bộ khoai môn đã chiên sơ vào nồi vịt, đun tiếp lửa nhỏ 10 phút đến khi khoai môn dẻo bở béo ngậy. Nêm lại 1 thìa canh nước mắm nhĩ cho vừa vị.',
        ],
        description:
          'Nước dừa tươi xiêm hòa quyện với vị béo bùi của chao tạo nên nước lẩu ngọt thanh dịu mát béo ngậy.',
        tip: 'Đun hầm lửa liu riêu giúp khoai môn dẻo mềm từ từ mà nước lẩu vẫn giữ được độ trong sóng sánh.',
      },
      {
        step: 5,
        title: 'Pha sốt chấm chao Cần Thơ & Trình bày thưởng thức',
        time: '5 phút',
        heat: 'Lửa nhỏ trên bếp mini',
        goal: 'Bữa lẩu vịt nấu chao bốc khói nghi ngút béo ngậy thơm lừng',
        actionPoints: [
          'Pha sốt chấm chao: Cho 3 viên chao trắng, 1 viên chao đỏ vào bát dầm nhuyễn mịn, thêm 1.5 thìa đường thốt nốt, 1 thìa nước cốt chanh, 1 thìa tỏi ớt băm nhuyễn và chút sa tế, khuấy đều sền sệt đậm đà.',
          'Bày nồi vịt nấu chao lên bếp cồn/bếp từ mini giữa bàn ăn đun sôi lăn tăn, rắc ngò rí, hẹ cắt khúc và vài lát ớt sừng. Bày đĩa rau muống đồng, rau cải cúc, nấm rơm và bún tươi bên cạnh.',
          'Thưởng thức: Nhúng rau muống và cải cúc vào nồi vịt nấu chao sôi bùng. Múc miếng thịt vịt mềm mọng béo ngậy, miếng khoai môn dẻo bở chấm ngập vào chén sốt chao pha tỏi ớt, ăn kèm bún tươi và húp thìa nước lẩu béo bùi thơm lừng.',
        ],
        description:
          'Món vịt nấu chao Cần Thơ đặc sản nổi tiếng Miền Tây đem lại hương vị đậm đà ấm cúng cho cả gia đình.',
        tip: 'Sốt chao pha tỏi ớt đường chanh chua ngọt béo bùi là chất xúc tác tôn vinh hương vị thịt vịt hầm.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng nấu vịt nấu chao Cần Thơ béo ngậy chuẩn vị Miền Tây: 1. Khử hôi thịt vịt bằng gừng tươi giã dập pha rượu trắng và chanh muối chà xát kỹ; 2. Kết hợp cả chao đỏ (tạo màu đẹp & vị ngậy) và chao trắng (tạo vị mặn béo đậm đà) theo tỷ lệ 1:1, ướp thịt vịt ít nhất 30 phút trước khi xào; 3. Khoai môn sáp BẮT BUỘC chiên sơ lớp vỏ cho xém vàng giúp khi ninh khoai dẻo bở bùi bùi mà không bị vữa nát làm đục nồi lẩu.',
    recommendedSauce:
      'Chén sốt chao pha Cần Thơ sền sệt tỏi ớt chanh đường béo bùi cay xè, chấm ngập miếng thịt vịt xiêm mềm mọng và khoai môn dẻo bở.',
  },

  'ca-loc-nuong-trui': {
    dishId: 'ca-loc-nuong-trui',
    dishName: 'Cá Lóc Nướng Trui Rơm Miền Tây Cuốn Bánh Tráng',
    seoTitle: 'Cách Làm Cá Lóc Nướng Trui Da Giòn Thịt Mềm, Thơm Lừng Khói Than',
    description:
      'Hướng dẫn chi tiết cách làm cá lóc nướng trui rơm chuẩn vị Miền Tây: Cá lóc đồng nguyên con giữ nguyên vảy không mổ bụng nướng vùi rơm khô thơm nồng mùi khói đồng quê, cạo sạch vỏ cháy xém lộ lớp da vàng ươm thịt mọng ngọt béo ngậy, rưới mỡ hành đậu phụng rang, cuốn bánh tráng rau rừng chấm mắm me hoặc mắm nêm sền sệt.',
    prepTime: '20 phút',
    cookTime: '25 phút',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Thành phần Cá Lóc đồng tươi ngon & Dụng cụ nướng trui',
        items: [
          '1 con cá lóc đồng tươi sống (khoảng 800g - 1.2kg, cá còn bơi khỏe)',
          '1 que tre tươi/que trúc dài 80cm (vót nhọn 1 đầu dùng xiên cá)',
          '1 ôm rơm khô sạch (hoặc 1kg than hoa nướng bếp nướng)',
          'Rượu trắng + chanh tươi + muối hạt (dùng rửa sạch lớp nhớt ngoài thân cá)',
        ],
      },
      {
        category: 'Thành phần Mỡ hành ngậy thơm & Đậu phụng rắc lên cá',
        items: [
          '1 bó hành lá (rửa sạch, cắt nhỏ)',
          '3 thìa canh mỡ heo thắng (hoặc dầu ăn, đun nóng xối trực tiếp vào tô hành lá)',
          '1/2 thìa cà phê hạt nêm + 1/2 thìa cà phê đường thốt nốt',
          '50g đậu phụng (lạc) rang chín giòn, bóc vỏ, đập dập vỡ đôi',
        ],
      },
      {
        category: 'Bánh tráng, Rau sống cuốn kèm & Mắm me sền sệt chuẩn Miền Tây',
        items: [
          '1 xấp bánh tráng dẻo Trảng Bàng (dùng cuốn cá)',
          '500g bún tươi (hoặc mì câu)',
          'Rau sống ăn kèm: Rau đắng đất, xà lách, dưa leo, chuối chát thái mỏng ngâm nước chanh, khế chua thái mỏng, đọt xoài, đọt vừng, rau húng lủi, ngò rí',
          'Chén mắm me sền sệt: 30g cốt me chín + 2 thìa canh nước mắm nhĩ + 2 thìa canh đường thốt nốt + 1 thìa tỏi ớt băm nhuyễn',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế cá lóc giữ nguyên vảy & Xiên que tre tươi',
        time: '8 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Cá lóc sạch bẩn nhớt ngoài da, nguyên con không mổ bụng, xiên que thẳng đứng',
        actionPoints: [
          'Cá lóc đồng mua về rửa sạch với muối hạt, chanh và rượu trắng cho hết bẩn và nhớt ngoài da. LƯU Ý ĐẶC BIỆT: Nướng trui truyền thống KHÔNG ĐÁNH VẢY, KHÔNG MỔ BỤNG CÁ. Lớp vảy cá bên ngoài bảo vệ thịt cá không bị cháy khét, giữ trọn vẹn nước ngọt và mỡ cá ngậy béo bên trong.',
          'Dùng que tre tươi vót nhọn xiên dọc từ miệng cá xuyên qua chiều dài thân cá xuống tận đuôi cá.',
        ],
        description:
          'Giữ nguyên vảy cá là bí quyết nguyên bản dân dã Miền Tây giúp thịt cá bên trong mọng nước ngọt ngào.',
        tip: 'Que tre tươi giúp xiên cá cứng cáp không bị gãy khi nướng trong ngọn lửa rơm cháy bùng.',
      },
      {
        step: 2,
        title: 'Nướng trui rơm khô bùng cháy (hoặc nướng than hồng)',
        time: '15 phút',
        heat: 'Lửa lớn cháy bùng',
        goal: 'Thịt cá chín tới mọng nước, da vảy xém đen giòn thơm lừng khói rơm rạ',
        actionPoints: [
          'Cách nướng rơm chuẩn Miền Tây: Cắm ngược đầu que tre xiên cá xuống đất. Phủ toàn bộ rơm khô trùm kín con cá lóc thành ngọn rơm cao. Châm lửa đốt rơm cháy bùng bùng. Khi rơm tàn, liên tục dặm thêm rơm khô đun lửa cháy bùng trong 12 - 15 phút.',
          'Cách nướng than hoa gia đình: Quết lớp mỡ heo mỏng lên da cá, nướng trên bếp than hồng rực xoay liên tục 15 - 20 phút cho da cá vảy xém đen giòn thơm lừng.',
        ],
        description:
          'Khói rơm rạ đồng quê ám vào từng thớ thịt cá lóc tạo nên mùi thơm mộc mạc quyến rũ không món nào so sánh được.',
        tip: 'Rơm đun cháy bùng liên tục giúp nhiệt độ cao làm chín đều cá từ trong ra ngoài.',
      },
      {
        step: 3,
        title: 'Cạo lớp vảy đen xém & Lột da lộ thịt cá trắng phúng phính',
        time: '5 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Cạo sạch vỏ cháy xém, thịt cá trắng mọng bốc khói ngạt ngào mùi thơm',
        actionPoints: [
          'Vớt cá lóc nướng ra đĩa lớn. Dùng dao sắc cạo nhẹ nhàng lớp vảy đen xém thui bên ngoài.',
          'Dùng dao rạch nhẹ dọc theo đường sống lưng cá, gạt mở hai bên da cá ra. Thịt cá lóc chín tới phả ra hơi khói ngạt ngào mùi thơm rơm rạ khói than, thịt cá trắng tinh, mọng nước và ngọt đậm đà.',
          'Rạch lấy phần ruột cá lóc ở bụng ra đĩa riêng (ruột cá lóc nướng trui đắng nhẹ béo bùi dầm mắm me là đặc sản vô giá của dân sành ăn).',
        ],
        description:
          'Lớp thịt cá lóc trắng ngần bốc khói nghi ngút béo ngậy ngọt đượm vị đồng quê.',
        tip: 'Cạo vảy nhẹ tay để không làm nát lớp thịt cá chín mềm ngạt ngào bên trong.',
      },
      {
        step: 4,
        title: 'Làm mỡ hành ngậy thơm & Rưới đều lên thân cá lóc',
        time: '3 phút',
        heat: 'Lửa lớn',
        goal: 'Mỡ hành xanh mướt óng ả, rưới ngập lên thịt cá lóc béo thơm',
        actionPoints: [
          'Đun nóng 3 thìa canh mỡ heo trên chảo cho sôi bùng. Trút mỡ heo đang sôi xèo xèo vào bát hành lá cắt nhỏ có sẵn chút hạt nêm và đường, khuấy đều cho hành lá chín tái giữ nguyên màu xanh tươi.',
          'Rưới đều mỡ hành bóng mượt lên khắp thân thịt cá lóc nướng, rắc đậu phụng rang đập dập lên trên.',
        ],
        description:
          'Mỡ hành lá xanh mướt hòa quyện đậu phụng rang giòn bùi tôn vinh vẻ đẹp ngọt béo của thịt cá lóc nướng.',
        tip: 'Xối mỡ heo đang sôi vào hành lá giúp hành chín tái giòn tươi không bị hăng.',
      },
      {
        step: 5,
        title: 'Pha mắm me sền sệt & Trình bày cuốn bánh tráng',
        time: '5 phút',
        heat: 'Lửa nhỏ',
        goal: 'Bàn tiệc cá lóc nướng trui đầy đặn rau đồng, bánh tráng dẻo và mắm me sền sệt',
        actionPoints: [
          'Pha mắm me: Dầm 30g me chín với 50ml nước ấm, lọc lấy cốt me. Đun cốt me với 2 thìa mắm nhĩ, 2 thìa đường thốt nốt trên lửa nhỏ cho sánh quánh, thêm tỏi ớt băm nhuyễn khuấy đều.',
          'Trình bày: Bày con cá lóc nướng trui mỡ hành đậu phụng giữa đĩa, bên cạnh là đĩa rau sống đồng đủ vị (dưa leo, chuối chát, khế chua, rau đắng), xấp bánh tráng dẻo và đĩa bún tươi.',
          'Thưởng thức: Trải miếng bánh tráng dẻo, xếp rau sống, dưa leo, chuối chát, gắp miếng thịt cá lóc nướng ngọt lịm nóng hổi, cuốn chặt lại và chấm ngập vào chén mắm me sền sệt chua ngọt cay xè.',
        ],
        description:
          'Món cá lóc nướng trui cuốn bánh tráng rau rừng đặc sản dân dã đượm đà vị quê hương Nam Bộ.',
        tip: 'Cuốn cá cùng lát chuối chát và khế chua giúp cân bằng vị béo ngậy của cá lóc mỡ hành.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng nướng cá lóc trui da giòn thịt mềm ngọt béo chuẩn vị Miền Tây: 1. Tuyệt đối KHÔNG đánh vảy và KHÔNG mổ bụng cá – lớp vảy cứng bên ngoài hoạt động như một lớp áo giáp cách nhiệt giữ lại toàn bộ nước ngọt tự nhiên và mỡ cá béo ngậy bên trong; 2. Nướng lửa rơm cháy bùng bùng liên tục 12-15 phút để nhiệt tỏa đều từ ngoài vào trong thịt cá chín mọng không bị khô; 3. Cạo sạch vảy đen xém rồi rưới mỡ hành nóng xèo xèo và đậu phụng rang lên thịt cá bốc khói ngạt ngào mùi thơm khói rơm đồng quê.',
    recommendedSauce:
      'Chén mắm me sền sệt chua ngọt cay xè dầm tỏi ớt hiểm (hoặc chén mắm nêm pha dứa băm nhuyễn) chấm ngập cuốn bánh tráng cá lóc nướng trui béo ngậy.',
  },

  'goi-xoai-xanh-ca-sac': {
    dishId: 'goi-xoai-xanh-ca-sac',
    dishName: 'Gỏi Xoài Xanh Khô Cá Sặc Bùi Béo',
    seoTitle: 'Cách Làm Gỏi Xoài Cá Sặc Chua Ngọt Giòn Tan, Giải Ngấy Cực Tốt',
    description:
      'Hướng dẫn chi tiết cách làm gỏi xoài khô cá sặc rằn chuẩn vị Miền Tây: Xoài xanh bào sợi giòn sần sật mát lạnh, khô cá sặc nướng/chiên vỡ da giòn rụm béo bùi xé miếng vừa ăn, quyện sốt mắm đường thốt nốt tỏi ớt chua ngọt vừa miệng, rắc rau răm, hành phi và đậu phụng rang bùi ngậy.',
    prepTime: '20 phút',
    cookTime: '15 phút',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Thành phần Khô Cá Sặc rằn ngon & Xoài xanh giòn',
        items: [
          '2 con khô cá sặc rằn loại ngon (cá sặc Rạch Giá/Cà Mau béo bùi, vàng thơm)',
          '2 quả xoài xanh chua giòn (xoài Keo hoặc xoài Cát Hòa Lộc bao tử xanh cứng)',
          '1 củ cà rốt (bào sợi nhỏ tạo màu sắc bắt mắt)',
          '1 củ hành tím (thái mỏng ngâm giấm đường khử hăng)',
          '1 thìa canh mỡ heo thắng (hoặc dầu ăn dùng chiên khô cá sặc)',
        ],
      },
      {
        category: 'Thành phần Nước mắm trộn gỏi thần thánh chua ngọt đậm đà',
        items: [
          '2.5 thìa canh đường thốt nốt (hoặc đường cát vàng)',
          '2 thìa canh nước mắm nhĩ truyền thống ngon (40 độ đạm)',
          '1.5 thìa canh nước cốt tắc/chanh tươi',
          '1 thìa canh tỏi băm nhuyễn + 1 thìa canh ớt hiểm băm nhuyễn',
          '1/2 thìa cà phê tương ớt (tạo độ sánh quyện nhẹ cho sốt trộn gỏi)',
        ],
      },
      {
        category: 'Thành phần Rau thơm & Topping rắc lên đĩa gỏi',
        items: [
          '1 bó rau răm tươi (rửa sạch, cắt nhỏ vừa ăn)',
          '50g đậu phụng (lạc) rang giòn bóc vỏ, đập dập vỡ đôi',
          '2 thìa canh hành tím phi vàng giòn rụm',
          '1 quả ớt sừng (thái sợi mỏng trang trí)',
          'Bánh phồng tôm chiên giòn (hoặc bánh tráng nướng ăn kèm)',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế khô cá sặc, chiên/nướng da giòn & Xé nhỏ',
        time: '8 phút',
        heat: 'Lửa vừa',
        goal: 'Khô cá sặc chiên/nướng chín vàng rụm hai mặt, thơm phức không bị mặn chát',
        actionPoints: [
          'Khô cá sặc rửa qua nước ấm 5 phút cho giảm bớt vị mặn gắt ngoài da, vắt ráo.',
          'Cho 1 thìa canh mỡ heo vào chảo, cho khô cá sặc vào chiên lửa vừa 6 - 8 phút đến khi hai mặt cá chín vàng rụm, da vỡ xém giòn thơm phức (hoặc nướng vẩy than hoa).',
          'Vớt cá ráo mỡ, để nguội bớt. Dùng tay (đeo găng) lóc bỏ xương sống và xương dăm cá, xé thịt cá sặc thành từng miếng nhỏ vừa ăn.',
        ],
        description:
          'Ngâm nước ấm trước khi chiên giúp khô cá sặc nhả bớt mặn gắt, khi chiên xong thịt cá dẻo mềm giòn béo.',
        tip: 'Lóc xương dăm kỹ giúp đĩa gỏi cá sặc an toàn cho cả gia đình và trẻ nhỏ.',
      },
      {
        step: 2,
        title: 'Sơ chế xoài xanh bào sợi giòn tan mát lạnh & Cà rốt',
        time: '7 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Sợi xoài xanh cực kỳ giòn rụm sần sật, giữ màu xanh tươi đẹp',
        actionPoints: [
          'Xoài xanh gọt vỏ, dùng dao bào thành từng sợi dài mỏng giòn.',
          'Ngâm sợi xoài vào tô nước đá lạnh 5 phút rồi vớt ra vắt ráo kiệt nước (mẹo ngâm đá giúp sợi xoài xanh cực kỳ giòn rụm sần sật).',
          'Cà rốt gọt vỏ, bào sợi nhỏ. Hành tím thái mỏng ngâm vào bát nước giấm đường 5 phút cho hết hăng rồi vớt ra ráo. Rau răm rửa sạch cắt khúc 1cm.',
        ],
        description:
          'Mẹo ngâm nước đá giúp xoài xanh bào sợi giữ nguyên độ giòn sần sật khi trộn cùng sốt.',
        tip: 'Chọn xoài xanh vỏ cứng trái nặng tay để khi bào sợi không bị nát nhão.',
      },
      {
        step: 3,
        title: 'Pha sốt nước mắm trộn gỏi chua ngọt thần thánh',
        time: '3 phút',
        heat: 'Lửa nhỏ',
        goal: 'Nước sốt mắm đường đun ấm dính sánh mịn, vị chua ngọt hài hòa',
        actionPoints: [
          'Cho 2.5 thìa canh đường thốt nốt, 2 thìa canh nước mắm nhĩ, 1.5 thìa nước cốt tắc/chanh, 1/2 thìa tương ớt vào bát nhỏ. Khuấy đều trên lửa nhỏ đun nhẹ 1 phút cho đường tan hoàn toàn và sốt dính sánh mịn.',
          'Đợi nước sốt nguội bớt, trút tỏi băm nhuyễn và ớt hiểm băm vào khuấy đều tạo nên phần sốt trộn gỏi mặn ngọt chua cay hài hòa thơm nức.',
        ],
        description:
          'Nấu ấm nước mắm đường thốt nốt giúp sốt sánh mịn dính đều từng sợi xoài mà không làm thố gỏi bị chảy nước.',
        tip: 'Trút tỏi ớt băm sau khi sốt nguội bớt giúp tỏi ớt nổi đẹp lên mặt sốt.',
      },
      {
        step: 4,
        title: 'Trộn gỏi xoài xanh cá sặc ngấm đượm vị chua ngọt',
        time: '3 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Sợi xoài ngấm sâu gia vị chua ngọt mà vẫn giữ độ giòn tan',
        actionPoints: [
          'Cho xoài xanh bào sợi, cà rốt bào sợi, hành tím ngâm và 1/2 lượng thịt khô cá sặc xé nhỏ vào thố lớn.',
          'Rưới 2/3 lượng nước sốt trộn gỏi chua ngọt lên trên. Dùng tay (đeo găng) trộn nhẹ nhàng cho gia vị ngấm đều xoài sợi mà không làm xoài bị dập nát tiết nước.',
          'Thêm rau răm cắt nhỏ và 1/2 lượng mỡ hành/hành phi vào đảo nhẹ lần nữa.',
        ],
        description:
          'Trộn nhẹ tay giúp sợi xoài hấp thụ vị sốt chua ngọt mà vẫn giòn sần sật.',
        tip: 'Trộn gỏi ngay trước khi ăn khoảng 5 - 10 phút để món gỏi tươi ngon giòn rụm nhất.',
      },
      {
        step: 5,
        title: 'Trình bày đĩa gỏi & Thưởng thức kèm bánh phồng tôm',
        time: '3 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Đĩa gỏi xoài cá sặc rực rỡ màu sắc, giòn rụm béo bùi giải ngấy cực tốt',
        actionPoints: [
          'Bày hỗn hợp gỏi xoài ra đĩa lớn. Xếp phần thịt khô cá sặc xé còn lại lên đỉnh đĩa gỏi.',
          'Rắc đều đậu phụng rang đập dập, hành tím phi giòn rụm và vài sợi ớt sừng cắt mỏng lên trên.',
          'Thưởng thức: Xúc một thìa gỏi xoài xanh giòn rụm chua thanh cùng miếng khô cá sặc béo mặn bùi bùi lên chiếc bánh phồng tôm chiên giòn rụm. Vị chua ngọt giòn rụm giải ngấy cực tốt cho mọi bữa ăn gia đình.',
        ],
        description:
          'Món gỏi xoài cá sặc là món khai vị kinh điển của ẩm thực Nam Bộ, giòn chua thanh mát kích thích vị giác.',
        tip: 'Ăn kèm bánh phồng tôm chiên giòn béo bùi tạo sự kết hợp hoàn hảo.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm gỏi xoài cá sặc giòn tan ngon ngất ngây chuẩn vị Miền Tây: 1. Ngâm khô cá sặc qua nước ấm 5 phút trước khi chiên/nướng giúp thịt cá mềm thơm dẻo không bị mặn chát; 2. Xoài xanh bào sợi ngâm tô nước đá lạnh 5 phút rồi vắt ráo giúp sợi xoài xanh siêu giòn rụm sần sật; 3. Nấu nhẹ nước mắm đường thốt nốt kẹo sánh rồi mới trộn gỏi giúp nước sốt bám đều từng sợi xoài mà đĩa gỏi không bị chảy nước.',
    recommendedSauce:
      'Đĩa gỏi xoài khô cá sặc chua ngọt rắc đậu phụng hành phi bùi bùi, ăn kèm đĩa bánh phồng tôm chiên phồng giòn rụm hoặc bánh tráng nướng vừng.',
  },

  'goi-ngo-sen-tom-thit': {
    dishId: 'goi-ngo-sen-tom-thit',
    dishName: 'Gỏi Ngó Sen Tôm Thịt Thanh Mát Chua Ngọt',
    seoTitle: 'Cách Làm Gỏi Ngó Sen Tôm Thịt Chua Ngọt Giòn Tan, Giải Ngấy Cực Tốt',
    description:
      'Hướng dẫn chi tiết cách làm gỏi ngó sen tôm thịt chuẩn vị tiệc gia đình: Ngó sen tươi trắng ngần giòn sần sật không thâm đen, tôm sú luộc đỏ au ngọt thịt, thịt ba chỉ mỏng mềm béo ngậy, quyện sốt mắm đường thốt nốt tỏi ớt chua ngọt đậm đà, rắc rau răm, hành phi và đậu phụng rang bùi thơm, ăn kèm bánh phồng tôm giòn rụm.',
    prepTime: '25 phút',
    cookTime: '20 phút',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Thành phần Ngó Sen tươi trắng muốt & Củ quả trộn kèm',
        items: [
          '300g ngó sen tươi (chọn cọng nhỏ vừa, thân chắc đầy, không bị dập bầm)',
          '1 củ cà rốt + 1 quả dưa leo (bỏ ruột, thái lát xéo mỏng giòn)',
          '1 củ hành tím (thái mỏng ngâm giấm đường khử hăng)',
          '1 quả chanh tươi + 1 tô nước đá lạnh + 1 thìa canh muối hạt (dùng ngâm ngó sen trắng giòn)',
        ],
      },
      {
        category: 'Thành phần Tôm Sú tươi ngọt & Thịt ba chỉ rút sườn',
        items: [
          '250g tôm sú tươi (tôm bơi khỏe, ngọt thịt)',
          '200g thịt ba chỉ rút sườn (hoặc thịt tai heo giòn sần sật)',
          '1 củ gừng nhỏ + 2 củ hành tím đập dập + 1 thìa canh rượu trắng (luộc tôm thịt thơm nức)',
        ],
      },
      {
        category: 'Thành phần Sốt Nước Mắm trộn gỏi chua ngọt thần thánh',
        items: [
          '3 thìa canh đường thốt nốt (hoặc đường cát vàng)',
          '2.5 thìa canh nước mắm nhĩ truyền thống ngon (40 độ đạm)',
          '2 thìa canh nước cốt tắc/chanh tươi',
          '1 thìa canh tỏi băm nhuyễn + 1 thìa canh ớt hiểm băm nhuyễn',
          '1/2 thìa cà phê tương ớt (tạo độ sánh quyện bóng mượt cho sốt gỏi)',
        ],
      },
      {
        category: 'Thành phần Rau thơm & Topping rắc lên đĩa gỏi',
        items: [
          '1 bó rau răm tươi + 1 ít lá húng lủi, ngò rí (rửa sạch cắt nhỏ)',
          '60g đậu phụng (lạc) rang giòn bóc vỏ, đập dập vỡ đôi',
          '2 thìa canh hành tím phi vàng giòn rụm',
          'Bánh phồng tôm chiên phồng giòn tan ăn kèm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế ngó sen trắng muốt giòn tan không bị thâm đen',
        time: '15 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Ngó sen giữ màu trắng tinh khôi, giòn sần sật không thâm đen',
        actionPoints: [
          'Ngó sen mua về tước bỏ bớt xơ bên ngoài, cắt khúc dài 5cm. Cọng lớn chẻ đôi dọc thân ngó sen.',
          'Pha ngay 1 tô nước đá lạnh lớn với nước cốt 1 quả chanh tươi và 1 thìa canh muối hạt. Trút toàn bộ ngó sen chẻ đôi vào ngâm trong 15 phút. Mẹo ngâm chanh đá giúp ngó sen giữ màu trắng tinh khôi và đạt độ giòn sần sật tối đa.',
          'Vớt ngó sen ra xả lại nước sạch, dùng tay vắt thật kiệt ráo nước (hoặc bọc khăn sạch vắt ráo).',
        ],
        description:
          'Mẹo ngâm đá chanh muối là bí quyết vàng giúp ngó sen vừa trắng muốt vừa giòn tan sần sật.',
        tip: 'Vắt thật ráo nước giúp ngó sen dễ dàng hấp thụ sốt mắm chua ngọt mà không làm loãng sốt.',
      },
      {
        step: 2,
        title: 'Luộc tôm sú, thịt ba chỉ thơm nức & Thái miếng vừa ăn',
        time: '15 phút',
        heat: 'Lửa vừa',
        goal: 'Tôm luộc đỏ au ngọt thịt, thịt ba chỉ giòn mềm béo ngậy',
        actionPoints: [
          'Luộc tôm: Đun sôi nồi nước với vài lát gừng và 1 thìa rượu trắng, cho tôm sú vào luộc chín tới trong 3 - 4 phút. Vớt tôm ra tô nước đá lạnh cho vỏ giòn thịt săn, sau đó bóc vỏ, bỏ đầu, rạch nhẹ sống lưng rút bỏ chỉ đen rồi chẻ đôi con tôm theo chiều dọc.',
          'Luộc thịt: Đun sôi nồi nước khác với 2 củ hành tím đập dập, cho thịt ba chỉ vào luộc chín tới trong 15 phút. Vớt thịt ra tô nước đá lạnh cho thịt giòn trắng, để nguội bớt rồi thái lát mỏng vừa ăn.',
        ],
        description:
          'Ngâm tôm thịt ngay vào nước đá lạnh sau khi luộc giúp thịt săn giòn và giữ màu tươi rực rỡ.',
        tip: 'Chẻ đôi con tôm giúp miếng tôm vừa đẹp mắt vừa thấm đượm gia vị sốt gỏi.',
      },
      {
        step: 3,
        title: 'Sơ chế cà rốt, dưa leo & Pha sốt nước mắm trộn gỏi thần thánh',
        time: '5 phút',
        heat: 'Lửa nhỏ',
        goal: 'Nước sốt mắm gỏi sánh mịn kẹo nhẹ, vị chua ngọt đằm thắm',
        actionPoints: [
          'Cà rốt gọt vỏ bào sợi mỏng. Dưa leo rửa sạch, bỏ phần ruột mềm, thái lát xéo mỏng giòn. Hành tím thái mỏng ngâm giấm đường 5 phút rồi vớt ráo.',
          'Pha sốt mắm gỏi: Cho 3 thìa canh đường thốt nốt, 2.5 thìa canh nước mắm nhĩ, 2 thìa canh nước cốt tắc và 1/2 thìa tương ớt vào bát nhỏ. Đun nhẹ trên bếp 1 - 2 phút cho đường tan chảy sánh mịn kẹo nhẹ. Đợi sốt nguội bớt rồi trút tỏi băm và ớt hiểm băm nhuyễn vào khuấy đều.',
        ],
        description:
          'Nấu đun nhẹ sốt mắm đường thốt nốt giúp nước sốt bám quyện đậm đà vào từng cọng ngó sen.',
        tip: 'Bỏ ruột dưa leo giúp đĩa gỏi không bị tiết nước nhão.',
      },
      {
        step: 4,
        title: 'Trộn gỏi ngó sen tôm thịt ngấm đượm gia vị giòn rụm',
        time: '3 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Từng cọng ngó sen ngấm sâu vị chua ngọt, tôm thịt đậm đà ngon miệng',
        actionPoints: [
          'Cho ngó sen đã vắt ráo kiệt nước, cà rốt bào sợi, dưa leo lát, hành tím ngâm, tôm chẻ đôi và thịt ba chỉ thái mỏng vào thố lớn.',
          'Rưới 3/4 lượng nước sốt trộn gỏi chua ngọt lên thố. Dùng tay (đeo găng) bóp trộn nhẹ nhàng trong 2 - 3 phút cho gia vị ngấm sâu vào từng cọng ngó sen và tôm thịt.',
          'Trút rau răm, húng lủi cắt nhỏ và 1/2 lượng mỡ hành/hành phi vào đảo nhẹ lần nữa.',
        ],
        description:
          'Bóp trộn nhẹ tay giúp các nguyên liệu quyện đều gia vị mà ngó sen vẫn giòn rụm sần sật.',
        tip: 'Trộn gỏi trước khi ăn khoảng 5 - 10 phút để món gỏi đạt độ thấm ngon nhất.',
      },
      {
        step: 5,
        title: 'Trình bày đĩa gỏi & Thưởng thức kèm bánh phồng tôm',
        time: '2 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Đĩa gỏi ngó sen tôm thịt rực rỡ màu sắc, giòn ngọt thanh mát giải ngấy cực tốt',
        actionPoints: [
          'Bày hỗn hợp gỏi ngó sen ra đĩa lớn, xếp tôm luộc đỏ au và thịt ba chỉ đẹp mắt lên trên cùng.',
          'Rắc đều đậu phụng rang đập dập vỡ đôi và hành tím phi vàng giòn rụm lên mặt đĩa gỏi.',
          'Thưởng thức: Múc một thìa gỏi ngó sen giòn sần sật kèm con tôm đỏ au ngọt thịt và miếng thịt ba chỉ béo ngậy lên chiếc bánh phồng tôm chiên giòn rụm. Vị chua ngọt giòn tan giải ngấy cực kỳ hấp dẫn cho bàn tiệc và bữa cơm gia đình.',
        ],
        description:
          'Món gỏi ngó sen tôm thịt thanh mát sang trọng là món ăn đãi tiệc và khai vị số 1 gia đình.',
        tip: 'Ăn kèm bánh phồng tôm chiên phồng béo bùi tôn vinh trọn vẹn hương vị gỏi.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm gỏi ngó sen tôm thịt giòn ngon trắng tinh chuẩn vị tiệc đãi khách: 1. Ngó sen chẻ đôi BẮT BUỘC ngâm ngay vào tô nước đá lạnh pha nước cốt chanh tươi và muối hạt 15 phút, sau đó vắt thật kiệt ráo nước giúp ngó sen trắng muốt và giòn tan sần sật; 2. Luộc tôm thịt xong vọt ngay vào tô nước đá giúp tôm đỏ au săn thịt và bì mỡ thịt ba chỉ giòn sần sật; 3. Nấu nhẹ nước mắm đường thốt nốt kẹo sánh rồi mới trộn gỏi giúp đĩa gỏi đậm đà vừa vị mà không bị chảy nước lênh láng.',
    recommendedSauce:
      'Đĩa gỏi ngó sen tôm thịt chua ngọt rắc đậu phụng hành phi thơm lừng, ăn kèm đĩa bánh phồng tôm chiên giòn rụm béo bùi.',
  },

  'com-chien-ca-man': {
    dishId: 'com-chien-ca-man',
    dishName: 'Cơm Chiên Cá Mặn Bắp Cải Thố Đất',
    seoTitle: 'Cách Làm Cơm Chiên Cá Mặn Hạt Cơm Săn Giòn, Thơm Ngon Chuẩn Vị',
    description:
      'Hướng dẫn chi tiết cách làm cơm chiên cá mặn chuẩn vị nhà hàng Nam Bộ: Khô cá sặc mặn hoặc cá thu mặn xé nhỏ chiên dậy mùi thơm lừng ngạt ngào, hạt cơm nguội xốp giòn nhuộm lòng đỏ trứng vàng óng bung xèo xèo trên thố đất nóng, quyện vị gừng sợi ấm nồng, ức gà xé phay bùi ngọt và bắp cải giòn sần sật.',
    ratingValue: '4.9',
    reviewCount: 218,
    prepTime: '20 phút',
    cookTime: '20 phút',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Thành phần Khô Cá Mặn & Ức Gà xé sợi béo bùi',
        items: [
          '100g khô cá mặn (khô cá sặc mặn, khô cá thu hoặc khô cá chét ngâm mềm, gỡ sạch xương, xé băm vụn nhỏ)',
          '150g thịt ức gà tươi (luộc chín tới với gừng đập dập, vớt ra xé sợi nhỏ tơi vừa ăn)',
          '1/2 củ gừng tươi (thái sợi chỉ thật mỏng – bí quyết gia truyền khử tanh triệt để và tạo hương thơm nồng)',
          '3 củ hành tím + 1 củ tỏi băm nhuyễn',
        ],
      },
      {
        category: 'Thành phần Cơm nguội săn giòn vàng óng',
        items: [
          '3 bát tô cơm nguội (dùng gạo tẻ nở xốp nấu hơi khô ráo, để ngăn mát tủ lạnh 3 - 4 tiếng cho hạt cơm săn se lại)',
          '2 quả trứng gà tươi (1 lòng đỏ bóp trộn đều vào cơm nguội cho hạt cơm nhuộm màu vàng óng, 1 quả chiên sợi rắc trang trí)',
          '1/2 thìa cà phê hạt nêm, 1/2 thìa cà phê tiêu sọ xay, 1 thìa canh mỡ heo thắng',
        ],
      },
      {
        category: 'Rau củ giòn ngọt & Gia vị chiên cơm',
        items: [
          '100g bắp cải (thái hạt lựu vuông nhỏ giòn ngọt mát)',
          '2 nhánh hành lá + 1 bó nhỏ ngò rí (rửa sạch, cắt nhỏ)',
          '1 thìa canh nước tương (xì dầu ngon), 1/2 thìa cà phê dầu mè thơm',
          '2 thìa canh mỡ heo thắng (hoặc dầu ăn) + 2 thìa canh hành phi vàng giòn',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế cá mặn rán giòn & Xé thịt gà',
        time: '8 phút',
        heat: 'Lửa nhỏ',
        goal: 'Cá mặn rán giòn thơm phức không cháy khét, thịt gà xé sợi tơi ngon',
        actionPoints: [
          'Khô cá mặn ngâm qua nước ấm 5 phút cho nhả bớt độ mặn gắt ngoài skin, vắt ráo. Cho 1 thìa mỡ heo vào chảo rán cá mặn trên lửa nhỏ 5 - 6 phút đến khi hai mặt cá chín vàng rụm, tỏa mùi thơm đặc trưng.',
          'Vớt cá ra để nguội bớt, gỡ bỏ sạch từng mảnh xương nhỏ, xé hoặc băm thịt cá mặn thành vụn nhỏ tơi xốp.',
          'Thịt ức gà luộc chín tới với vài lát gừng và xíu muối, vớt ra để nguội xé sợi nhỏ tơi vừa ăn.',
        ],
        description:
          'Chiên nhỏ lửa giúp khô cá mặn tỏa mùi thơm béo ngậy mà không bị cháy khét hay đắng.',
        tip: 'Lóc kỹ sạch xương cá mặn trước khi băm vụn để tránh hóc xương.',
      },
      {
        step: 2,
        title: 'Sơ chế gừng sợi, bắp cải & Bóp cơm nguội vàng óng',
        time: '5 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Hạt cơm nguội tơi xốp, nhuộm màu vàng óng tự nhiên của lòng đỏ trứng tươi',
        actionPoints: [
          'Gừng tươi gọt vỏ, thái sợi chỉ thật mỏng. Bắp cải rửa sạch, xắt hạt lựu nhỏ vừa ăn.',
          'Cho 3 bát cơm nguội vào thố lớn. Trút 1 lòng đỏ trứng gà tươi, 1/2 thìa cà phê hạt nêm, 1/2 thìa tiêu sọ và 1 thìa canh mỡ heo thắng vào.',
          'Đeo găng tay bóp nhẹ nhàng cho từng hạt cơm tơi xốp ngấm đều lòng đỏ trứng ngả màu vàng óng đẹp mắt.',
        ],
        description:
          'Áo lòng đỏ trứng gà và mỡ heo vào cơm nguội trước khi chiên giúp hạt cơm khi gặp nhiệt độ cao sẽ săn giòn, xốp bung nảy hạt mà không bị nhão dính.',
        tip: 'Dùng cơm nguội để ngăn mát tủ lạnh 3-4 tiếng giúp hạt cơm khô ráo chiên săn ngon nhất.',
      },
      {
        step: 3,
        title: 'Phi thơm gừng sợi, xào cá mặn & Thịt gà xé',
        time: '4 phút',
        heat: 'Lửa lớn',
        goal: 'Thịt cá mặn và gà xé ngấm đượm hương thơm gừng tỏi phi ngạt ngào',
        actionPoints: [
          'Đun nóng 1 thìa canh mỡ heo trong chảo, cho tỏi băm, hành tím băm và gừng thái sợi chỉ vào phi vàng thơm lừng.',
          'Trút cá mặn băm vụn và thịt gà xé sợi vào chảo đảo nhanh tay trên lửa lớn 2 - 3 phút cho thịt cá và gà săn giòn ngấm đượm hương thơm gừng tỏi.',
          'Vớt 1/2 lượng cá mặn gà xé ra bát riêng để rắc trang trí mặt thố cơm.',
        ],
        description:
          'Phi thơm gừng sợi cùng cá mặn là bí quyết gia truyền giúp cơm chiên dậy mùi thơm quyến rũ, triệt tiêu hoàn toàn mùi tanh.',
        tip: 'Gừng sợi chỉ xào vừa chín tới giữ độ cay ấm nhẹ cân bằng vị mặn của cá.',
      },
      {
        step: 4,
        title: 'Chiên cơm xèo xèo trên lửa lớn giòn xốp bung hạt',
        time: '8 phút',
        heat: 'Lửa lớn',
        goal: 'Từng hạt cơm chiên săn giòn tơi xốp, bắp cải giòn ngọt thanh mát',
        actionPoints: [
          'Cho thêm 1 thìa mỡ heo vào chảo, trút toàn bộ thố cơm nguội đã trộn lòng đỏ trứng vào. Đảo liên tục trên lửa lớn 6 - 8 phút.',
          'Dùng phên miết nhẹ cơm ra lòng chảo cho hạt cơm tiếp xúc nhiệt tỏa mùi thơm xèo xèo, săn giòn xốp bung nảy hạt.',
          'Trút bắp cải thái hạt lựu vào chảo cơm chiên, nêm 1 thìa canh nước tương, 1/2 thìa dầu mè thơm, đảo đều tay 2 phút cho bắp cải chín tới giữ nguyên độ giòn ngọt.',
        ],
        description:
          'Chiên cơm trên lửa lớn và xốc chảo liên tục giúp hạt cơm khô ráo giòn xốp bề mặt.',
        tip: 'Cho bắp cải vào bước cuối giúp bắp cải giòn mát thanh nhẹ không bị ỉu.',
      },
      {
        step: 5,
        title: 'Trình bày thố đất bốc khói & Thưởng thức nóng hổi',
        time: '3 phút',
        heat: 'Lửa lớn thố đất',
        goal: 'Thố cơm chiên cá mặn kêu xèo xèo, bốc khói ngạt ngào mùi thơm quyến rũ',
        actionPoints: [
          'Làm nóng thố đất trên bếp 2 phút. Trút toàn bộ cơm chiên cá mặn đang nóng hổi vào thố đất kêu xèo xèo ngạt ngào mùi thơm.',
          'Phủ phần cá mặn xé giòn còn lại lên mặt cơm, rắc gừng sợi chỉ, hành lá, ngò rí, hành phi giòn rụm và tiêu sọ xay.',
          'Thưởng thức nóng hổi: Dùng thìa trộn đều thố cơm chiên cá mặn. Từng hạt cơm vàng óng săn giòn quyện vị béo đậm đà của cá mặn, ngọt mềm thịt gà, giòn sần sật bắp cải và vị gừng ấm nồng cực kỳ ngon miệng.',
        ],
        description:
          'Món cơm chiên cá mặn thố đất bốc khói nghi ngút là món ăn quen thuộc đậm chất Nam Bộ.',
        tip: 'Ăn kèm chén nước tương (xì dầu) dầm vài lát ớt hiểm đỏ cực kỳ bắt vị.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm cơm chiên cá mặn hạt cơm săn giòn xốp béo ngậy không tanh: 1. Dùng cơm nguội nấu hơi khô ráo trộn với 1 lòng đỏ trứng gà tươi và chút mỡ heo thắng giúp từng hạt cơm khi chiên lửa lớn bung tơi xốp, nhuộm màu vàng óng tự nhiên; 2. Gừng tươi thái sợi chỉ BẮT BUỘC phải phi thơm cùng cá mặn – gừng giúp hòa quyện vị mặn gắt của cá khô và triệt tiêu hoàn toàn mùi tanh; 3. Dùng thố đất nóng chiên đảo cơm lửa lớn giúp hạt cơm giữ độ giòn xốp nóng hổi tới thìa cuối cùng.',
    recommendedSauce:
      'Thố cơm chiên cá mặn bốc khói nghi ngút rắc mỡ hành đậu phụng gừng sợi, ăn kèm chén nước tương (xì dầu) dầm ớt hiểm đỏ cay xè.',
  },

  'banh-xeo-tom-thit-gion': {
    dishId: 'banh-xeo-tom-thit-gion',
    dishName: 'Bánh Xèo Tôm Thịt Giòn Rụm',
    seoTitle: 'Cách Làm Bánh Xèo Giòn Rụm, Lâu Bị Mềm, Nước Chấm Chua Ngọt Chuẩn Vị',
    description:
      'Hướng dẫn chi tiết bí quyết pha bột bánh xèo giòn rụm lâu bị mềm chuẩn vị Miền Tây & Miền Trung: Tỷ lệ bột gạo, nước cốt dừa, bột nghệ và bia lạnh, kết hợp nhân tôm đất tươi ngọt, thịt ba chỉ xào thơm, giá đỗ và chén nước mắm chua ngọt tỏi ớt dầm đồ chua đưa vị.',
    ratingValue: '4.8',
    reviewCount: 236,
    prepTime: '25 phút',
    cookTime: '25 phút',
    difficulty: 'Trung bình',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Thành phần Bột Bánh Xèo giòn rụm lâu bị mềm',
        items: [
          '250g bột gạo tẻ ngon (hoặc gói bột bánh xèo pha sẵn)',
          '50g bột chiên giòn hoặc bột tài năng (bí quyết giúp vành bánh giòn rụm siêu lâu)',
          '1/2 thìa cà phê bột nghệ (tạo màu vàng ươm nghệ hấp dẫn)',
          '150ml nước cốt dừa béo bùi + 300ml nước lọc + 100ml bia lạnh (hoặc nước soda - bọt khí giúp vỏ bánh xốp giòn)',
          '1/2 thìa cà phê muối, 1/2 thìa cà phê hạt nêm, 3 nhánh hành lá cắt nhỏ',
        ],
      },
      {
        category: 'Thành phần Nhân Tôm Thịt & Giá Đỗ giòn ngọt',
        items: [
          '250g tôm đất hoặc tôm thẻ tươi (rửa sạch, cắt bớt râu)',
          '200g thịt ba chỉ (thái lát mỏng vừa ăn)',
          '200g giá đỗ tươi + 100g củ sắn (củ đậu) thái sợi hoặc đậu xanh xát vỏ hấp chín',
          '1 củ hành tây thái mỏng, 3 củ hành tím băm nhuyễn',
        ],
      },
      {
        category: 'Rau sống ăn kèm & Nước mắm chua ngọt chuẩn vị',
        items: [
          'Rau sống phong phú: Cải xanh, đọt xoài, lá cóc, xà lách, rau thơm, diếp cá, tía tẻ',
          'Nước mắm chua ngọt: 3 thìa canh nước mắm nhĩ ngon, 3 thìa canh đường thốt nốt, 3 thìa canh nước ấm, 1.5 thìa canh nước cốt chanh',
          '1 thìa canh tỏi ớt băm nhuyễn + cà rốt củ cải bào sợi ngâm chua',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Pha bột bánh xèo giòn rụm & Ủ bột',
        time: '15 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Hỗn hợp bột bánh xèo sánh mịn, không vón cục, nghỉ đủ giờ để chiên giòn xốp',
        actionPoints: [
          'Rây bột gạo, bột chiên giòn, bột nghệ, muối và hạt nêm vào thố lớn.',
          'Rưới từ từ nước cốt dừa, nước lọc và 100ml bia lạnh vào khuấy đều tay đến khi bột tan mịn không vón cục. Thêm hành lá cắt nhỏ.',
          'Bọc màng bọc thực phẩm cho bột nghỉ 20 - 30 phút. Bia lạnh và bột chiên giòn là bí quyết vàng giúp vành bánh xèo giòn rụm tới 2-3 tiếng không bị dẻo mềm.',
        ],
        description:
          'Pha bột với bia lạnh hoặc nước soda tạo các bọt khí li ti giúp vỏ bánh xèo khi gặp nhiệt cao sẽ xốp giòn rụm.',
        tip: 'Ủ bột tối thiểu 20 phút để hạt bột nở đều, bánh xèo chiên sẽ giòn ngon hơn.',
      },
      {
        step: 2,
        title: 'Sơ chế tôm thịt & Pha nước mắm chua ngọt tỏi ớt',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Tôm thịt xào vừa chín tới thấm vị, nước mắm chua ngọt hài hòa tỏi ớt nổi đẹp mắt',
        actionPoints: [
          'Thịt ba chỉ ướp chút hành tím băm, tiêu sọ và hạt nêm. Tôm ướp xíu muối tiêu. Xào sơ tôm và ba chỉ trên chảo lớn 2 phút cho săn lại rồi trút ra đĩa.',
          'Pha nước mắm chua ngọt: Hòa tan 3 thìa đường thốt nốt với 3 thìa nước ấm, trút 3 thìa nước mắm nhĩ và 1.5 thìa nước cốt chanh. Khuấy tan đều rồi thả tỏi ớt băm nhuyễn và cà rốt củ cải bào sợi ngâm chua lên trên.',
        ],
        description:
          'Pha nước mắm theo tỷ lệ 1 mắm : 1 đường : 1 nước : 0.5 chanh giúp nước chấm sánh đậm hài hòa vị chua ngọt.',
        tip: 'Thả tỏi ớt băm khô vào cuối cùng sau khi đã hòa tan đường chanh mắm để tỏi ớt nổi bồng bềnh lên mặt chén.',
      },
      {
        step: 3,
        title: 'Đổ bánh xèo xèo xèo & Thêm nhân tôm thịt giá đỗ',
        time: '15 phút',
        heat: 'Lửa lớn',
        goal: 'Vành bánh xèo mỏng tang, vàng ươm nghệ giòn rụm, nhân tôm thịt nóng hổi',
        actionPoints: [
          'Đun thật nóng chảo chống dính, tráng 1 thìa canh dầu ăn hoặc mỡ heo xung quanh lòng chảo.',
          'Múc 1 vá bột bánh xèo tráng nhanh tay đảo nghiêng chảo cho bột tráng đều một lớp mỏng tang phát ra tiếng xèo xèo ngạt ngào mùi thơm.',
          'Rải vài con tôm, vài lát thịt ba chỉ, củ sắn thái sợi, giá đỗ và đậu xanh hấp lên một nửa mặt bánh. Đậy nắp chảo 2 phút cho nhân chín hấp hơi.',
        ],
        description:
          'Chảo phải thật nóng và tráng bột thật mỏng thì bánh xèo mới kêu xèo xèo và đạt độ giòn rụm hoàn hảo.',
        tip: 'Rưới 1 thìa mỡ heo hoặc dầu ăn dọc theo vành bánh giúp vành bánh tróc giòn rụm.',
      },
      {
        step: 4,
        title: 'Chiên giòn vành bánh & Gập đôi bánh xèo',
        time: '5 phút',
        heat: 'Lửa vừa',
        goal: 'Mặt dưới bánh xèo vàng giòn rụm, vành bánh tróc nhẹ không dính',
        actionPoints: [
          'Mở nắp chảo, hạ lửa vừa. Rưới thêm xíu mỡ quanh vành bánh, chiên thêm 2 - 3 phút không đậy nắp cho hơi nước thoát ra ngoài, mặt dưới bánh chuyển màu vàng giòn rụm.',
          'Dùng vá gập đôi chiếc bánh xèo lại, chiên thêm 30 giây mỗi mặt cho bánh giòn rụm hoàn toàn rồi vớt ra đĩa có lót giấy thấm dầu.',
        ],
        description:
          'Mở nắp chiên lửa vừa ở giai đoạn cuối giúp thoát hơi nước, làm vỏ bánh khô ráo và giữ độ giòn rụm lâu bị dẻo mềm.',
        tip: 'Xếp bánh xèo ra rack đứng hoặc đĩa lót giấy thấm dầu, không đè chồng bánh lên nhau làm bánh bị hấp hơi.',
      },
      {
        step: 5,
        title: 'Trình bày mẹt bánh xèo rau sống & Thưởng thức nóng hổi',
        time: '3 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Mẹt bánh xèo vàng giòn rụm bốc khói ngạt ngào, rau sống tươi xanh ngút ngàn',
        actionPoints: [
          'Bày bánh xèo ra mẹt tre lót lá chuối. Cạnh bên bày đĩa rau sống phong phú: Cải xanh, đọt xoài, lá cóc, xà lách, rau thơm và chén nước mắm chua ngọt tỏi ớt đồ chua.',
          'Thưởng thức: Lấy lá cải xanh, ngắt miếng bánh xèo giòn rụm kèm tôm thịt giá đỗ, cuộn tròn chấm ngập vào chén nước mắm chua ngọt. Vị giòn rụm béo bùi vỏ bánh quyện vị tôm ngọt, rau xanh thanh mát và nước mắm cay nồng bùng nổ vị giác.',
        ],
        description:
          'Bánh xèo cuốn rau rừng chấm nước mắm chua ngọt là đỉnh cao ẩm thực dân dã Việt Nam.',
        tip: 'Thưởng thức ngay khi bánh vừa ra khỏi chảo để cảm nhận trọn vẹn độ giòn tan bốc khói.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng tráng bánh xèo giòn rụm lâu bị mềm chuẩn vị bếp trưởng: 1. Pha bột bánh xèo kết hợp bột chiên giòn, nước cốt dừa béo bùi và 100ml bia lạnh (hoặc soda) – bọt khí bia giúp vỏ bánh xốp nhẹ giòn tan giữ độ giòn tới 2-3 tiếng; 2. Chảo phải đun THẬT NÓNG trước khi rưới bột tráng nghiêng mỏng tang kêu xèo xèo; 3. Sau khi đậy nắp chín nhân, MỞ NẮP rưới xíu mỡ vành bánh chiên lửa vừa 2-3 phút để thoát toàn bộ hơi nước giúp vành bánh tróc giòn rụm không bị dẻo.',
    recommendedSauce:
      'Mẹt bánh xèo vàng ươm giòn rụm cuốn rau cải xanh, lá cóc, đọt xoài, chấm ngập chén nước mắm chua ngọt tỏi ớt dầm đồ chua củ cải cà rốt giòn tan.',
  },

  'com-thit-kho-tau': {
    dishId: 'com-thit-kho-tau',
    dishName: 'Thịt Kho Tàu Nước Dừa Trứng Cút',
    seoTitle: 'Cách Nấu Thịt Kho Tàu Nước Dừa Trứng Cút Mềm Rục, Màu Cánh Gián Óng Ả',
    description:
      'Hướng dẫn chi tiết bí quyết nấu thịt kho tàu nước dừa tươi trứng cút/trứng vịt mềm rục tan trong miệng, màu cánh gián vàng óng ánh chuẩn vị Nam Bộ: Mẹo luộc chần sơ, thắng nước màu đường thốt nốt, ướp nước cốt hành tỏi và kho lửa nhỏ liu riu MỞ NẮP VUNG cho nước kho sánh trong, béo ngậy mà không ngấy.',
    ratingValue: '4.9',
    reviewCount: 248,
    prepTime: '20 phút',
    cookTime: '55 phút',
    difficulty: 'Dễ',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Thành phần Thịt Ba Chỉ rút sườn & Trứng cút/trứng vịt',
        items: [
          '600g thịt ba chỉ rút sườn (thái khối vuông to vừa ăn 4 - 5cm, tỷ lệ nạc mỡ cân bằng 7:3)',
          '15 - 20 quả trứng cút (hoặc 6 - 8 quả trứng vịt luộc chín, bóc sạch vỏ)',
          '500ml nước dừa tươi (dừa xiêm ngọt thanh – bí quyết tạo vị béo bùi và màu cánh gián tự nhiên)',
          '3 củ hành tím + 1 củ tỏi + 2 nhánh đầu hành lá (giã nhuyễn vắt lấy nước cốt ướp thịt)',
        ],
      },
      {
        category: 'Gia vị ướp & Thắng nước màu màu cánh gián',
        items: [
          '3 thìa canh nước mắm nhĩ ngon (độ đạm cao thơm lừng)',
          '2 thìa canh đường thốt nốt (hoặc đường cát vàng thắng màu cánh gián)',
          '1 thìa cà phê hạt nêm, 1/2 thìa cà phê tiêu sọ xay, 1 thìa canh mỡ heo thắng',
          '1 thìa canh nước cốt chanh tươi (bí quyết giúp mỡ thịt kho xong trong vắt béo ngậy không đục)',
        ],
      },
      {
        category: 'Rau củ ăn kèm & Đồ chua chống ngấy',
        items: [
          'Dưa cải muối chua giòn tan, dưa giá đỗ hẹ, dưa leo xắt lát',
          'Cơm trắng dẻo thơm hoặc bánh mì nóng giòn',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Chần sơ thịt ba chỉ, luộc trứng cút & Giã nước hành tỏi',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Thịt ba chỉ sạch bọt bẩn, thơm dẻo; trứng cút luộc bóc vỏ láng mịn',
        actionPoints: [
          'Thịt ba chỉ rửa sạch với nước muối pha loãng, thái miếng vuông to 4-5cm. Đun sôi nồi nước với vài lát gừng, chần thịt 2 phút cho ra sạch bọt bẩn rồi vớt ra rửa sạch, thấm khô.',
          'Trứng cút (hoặc trứng vịt) luộc chín tới với xíu muối, vớt ra ngâm nước đá lạnh rồi bóc sạch vỏ.',
          'Giã nhuyễn hành tím, tỏi và đầu hành lá. Vắt lấy nước cốt hành tỏi (dùng nước cốt ướp thịt giúp nước kho trong vắt không bị nổi xác hành tỏi cháy đắng).',
        ],
        description:
          'Chần sơ thịt với gừng giúp loại bỏ hoàn toàn mùi hôi, khi kho thịt mỡ sẽ trong và thơm ngát.',
        tip: 'Vắt lấy nước cốt hành tỏi ướp thịt là bí quyết vàng giúp nước kho dừa trong vắt chuẩn nhà hàng.',
      },
      {
        step: 2,
        title: 'Thắng nước màu đường thốt nốt & Ướp thịt thấm vị',
        time: '30 phút',
        heat: 'Lửa nhỏ',
        goal: 'Miếng thịt ba chỉ ngấm đượm gia vị, kho lên màu cánh gián óng ả',
        actionPoints: [
          'Thắng nước màu: Cho 2 thìa đường thốt nốt và 1 thìa nước vào nồi, đun lửa nhỏ đến khi đường tan ngả màu cánh gián hổ phách đẹp mắt, rưới 2 thìa nước ấm vào khuấy đều.',
          'Cho thịt ba chỉ vào thố. Trút nước màu cánh gián, nước cốt hành tỏi, 3 thìa nước mắm nhĩ, 1 thìa hạt nêm, 1/2 thìa tiêu sọ và 1 thìa nước cốt chanh vào bóp trộn đều.',
          'Ướp thịt ít nhất 30 phút (hoặc phơi nắng 20 phút) cho phần mỡ trong lại và gia vị ngấm sâu vào từng thớ thịt.',
        ],
        description:
          'Nước cốt chanh và thời gian ướp giúp mỡ heo trong trẻo, khi kho chín mềm rục mà không bị nồng mỡ.',
        tip: 'Phơi thịt ướp dưới nắng nhẹ 20 phút giúp phần mỡ săn lại, khi kho mỡ trong như thạch.',
      },
      {
        step: 3,
        title: 'Xào săn thịt & Đổ nước dừa tươi kho lửa lớn',
        time: '10 phút',
        heat: 'Lửa lớn',
        goal: 'Gia vị săn bám vào miếng thịt, nước dừa tươi ngập thịt bốc khói ngạt ngào',
        actionPoints: [
          'Bắc nồi lên bếp, trút toàn bộ thịt ba chỉ đã ướp vào đảo đều trên lửa lớn 3 - 5 phút cho thịt săn lại và lên màu cánh gián óng ả.',
          'Trút 500ml nước dừa tươi xiêm ngọt vào nồi ngập sấp mặt thịt. Đun lửa lớn cho nước dừa sôi bùng lên.',
          'Thường xuyên hớt sạch bọt trắng nổi lên để nước kho trong veo.',
        ],
        description:
          'Xào săn thịt trước khi đổ nước dừa giúp gia vị khóa chặt bên trong miếng thịt và nước màu bám chắc.',
        tip: 'Nếu nước dừa thiếu ngọt có thể thêm chút nước lọc, không kho thuần 100% nước dừa quá ngọt sẽ dễ bị sậm màu.',
      },
      {
        step: 4,
        title: 'Kho liu riu không đậy nắp & Thả trứng cút kho mềm rục',
        time: '45 phút',
        heat: 'Lửa nhỏ liu riu',
        goal: 'Thịt ba chỉ mềm rục tan trong miệng, mỡ trong như thạch, trứng cút thấm vị',
        actionPoints: [
          'Hạ lửa nhỏ liu riu, MỞ NẮP VUNG (không đậy nắp) để nước dừa rút từ từ và giữ nước kho luôn trong veo không bị đục.',
          'Kho được 30 phút khi thịt bắt đầu mềm ngả màu cánh gián đẹp mắt, thả trứng cút (hoặc trứng vịt) và vài quả ớt hiểm nguyên chiếc vào kho chung.',
          'Tiếp tục kho liu riu thêm 15 - 20 phút đến khi nước kho dừa sánh nhẹ, thịt mềm rục dầm nhẹ bằng đũa là đứt.',
        ],
        description:
          'Kho KHÔNG ĐẬY NẮP là bí quyết sống còn để nước dừa dâng màu cánh gián tự nhiên và không bị đục đỏ.',
        tip: 'Cho trứng cút vào ở 20 phút cuối để trứng ngấm vị vừa tới, không bị dai xơ vỏ trứng.',
      },
      {
        step: 5,
        title: 'Trình bày thố thịt kho tàu & Thưởng thức cùng dưa chua cơm nóng',
        time: '3 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Món thịt kho tàu bốc khói nghi ngút, màu cánh gián óng ả đậm đà',
        actionPoints: [
          'Múc thịt ba chỉ mềm rục và trứng cút ra thố đất hoặc đĩa sâu lòng, rưới nước kho dừa sánh vàng óng ả lên trên, rắc xíu tiêu sọ xay và vài lát ớt đỏ.',
          'Thưởng thức: Dùng đũa xắn nhẹ miếng thịt mềm tan. Lớp da béo ngậy, thịt nạc đậm đà quyện trứng cút bùi béo và vị nước dừa ngọt thanh. Bữa cơm ăn kèm đĩa dưa cải muối chua giòn tan và bát cơm trắng dẻo nóng hổi ngon tuyệt đỉnh.',
        ],
        description:
          'Thịt kho tàu nước dừa trứng cút là biểu tượng ấm cúng của mâm cơm gia đình Việt Nam.',
        tip: 'Nồi thịt kho tàu hâm lại lần thứ 2 ăn lại càng mềm ngon đậm đà gấp bội.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng kho thịt kho tàu mềm rục màu cánh gián óng ả không đục nước: 1. Vắt lấy NƯỚC CỐT HÀNH TỎI giã nhuyễn để ướp thịt (không để xác hành tỏi) + ướp thêm 1 thìa nước cốt chanh tươi giúp mỡ thịt kho xong trong veo như thạch; 2. Thắng nước màu bằng đường thốt nốt ngả màu hổ phách và xào săn thịt trước khi đổ nước dừa tươi; 3. Tuyệt đối KHÔNG ĐẬY NẮP VUNG trong suốt quá trình kho liu riu – giúp nước dừa chuyển màu cánh gián tự nhiên, nước kho trong veo sánh mượt không bị đục.',
    recommendedSauce:
      'Nồi thịt kho tàu nước dừa bốc khói màu cánh gián óng ả, chan thìa nước kho đậm đà lên bát cơm trắng dẻo thơm, ăn kèm đĩa dưa cải muối chua giòn tan hoặc dưa giá hẹ.',
  },

  'che-buoi-an-giang': {
    dishId: 'che-buoi-an-giang',
    dishName: 'Chè Bưởi An Giang Cùi Giòn Cốt Dừa Béo',
    seoTitle: 'Cách Làm Chè Bưởi An Giang Giòn Sần Sật, Không Đắng, Nước Cốt Dừa Béo Bùi',
    description:
      'Hướng dẫn chi tiết bí quyết làm chè bưởi An Giang chuẩn vị Miền Tây cùi bưởi giòn sần sật trong suốt không chút đắng chát: Mẹo ngâm xả muối lăn bột năng luộc trong suốt, đậu xanh đồ chín bùi béo và chảo nước cốt dừa sánh mịn thơm ngậy hoa nhài.',
    ratingValue: '4.9',
    reviewCount: 265,
    prepTime: '30 phút',
    cookTime: '30 phút',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Thành phần Cùi Bưởi giòn sần sật không đắng',
        items: [
          '200g cùi bưởi da xanh hoặc bưởi năm roi (lấy phần cùi trắng xốp bên trong, thái hạt lựu vuông 1.5cm)',
          '4 thìa canh muối hạt + nước đá lạnh ngâm xả giòn',
          '100g bột năng (bột đao) ngon',
          '100g đường cát trắng (hoặc đường phèn) để sên cùi bưởi ngấm ngọt',
        ],
      },
      {
        category: 'Thành phần Đậu Xanh & Nấu Nước Chè sánh mịn',
        items: [
          '200g đậu xanh xát vỏ (ngâm nước ấm 2 tiếng, hấp/đồ chín tới giữ nguyên hạt)',
          '150g đường thốt nốt An Giang (hoặc đường phèn – tạo vị ngọt thanh đượm sâu)',
          '100g bột năng pha loãng với nước (tạo độ sánh mượt trong trẻo cho nước chè)',
          '1/2 thìa cà phê tinh dầu hoa nhài hoặc 3 lá dứa (lá nếp) buộc gút',
        ],
      },
      {
        category: 'Thành phần Nước Cốt Dừa béo bùi & Topping',
        items: [
          '300ml nước cốt dừa dão béo ngậy',
          '1 thìa canh bột năng + 1/4 thìa cà phê muối + 1 thìa canh đường (nấu sánh cốt dừa)',
          'Đậu phụng (lạc) rang vàng giã dập, dừa nạo sợi và đá bào mát lạnh',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế cùi bưởi khử sạch vị đắng chát',
        time: '20 phút',
        heat: 'Nước sôi & Thau nước đá',
        goal: 'Cùi bưởi hết sạch tinh dầu đắng, vắt ráo kiệt nước',
        actionPoints: [
          'Gọt bỏ lớp vỏ xanh bên ngoài và lớp màng xơ bên trong, chỉ lấy phần cùi trắng xốp, thái hạt lựu vuông 1.5cm.',
          'Bóp kỹ cùi bưởi với 2 thìa muối hạt trong 3 phút, xả lại nước lạnh. Lặp lại bước bóp muối xả nước 4 - 5 lần cho cùi bưởi mớ vắt kiệt không còn vị đắng.',
          'Đun sôi nồi nước, cho cùi bưởi vào chần nhanh 30 giây rồi vớt ngay ra thau nước đá lạnh. Vắt thật khô kiệt nước.',
        ],
        description:
          'Bóp muối xả nước nhiều lần kết hợp chần nước sôi vớt ra ngâm nước đá là bí quyết sống còn để cùi bưởi giòn sần sật không đắng.',
        tip: 'Vắt thật kiệt nước cùi bưởi sau mỗi lần xả để loại bỏ hoàn toàn tinh dầu đắng.',
      },
      {
        step: 2,
        title: 'Sên cùi bưởi ngấm đường & Áo bột năng luộc trong suốt',
        time: '15 phút',
        heat: 'Lửa nhỏ & Nước sôi',
        goal: 'Cùi bưởi ngấm ngọt, áo lớp bột năng trong suốt giòn tan',
        actionPoints: [
          'Cho cùi bưởi đã vắt ráo vào thố, trút 100g đường cát và 3 thìa nước lọc vào trộn đều, sên trên chảo lửa nhỏ 5 phút cho cùi bưởi ngấm đường nở căng mọng.',
          'Rắc từ từ 100g bột năng vào cùi bưởi đang nóng, xóc đều cho bột năng phủ một lớp màng trắng bao bọc từng viên cùi bưởi.',
          'Đun nồi nước sôi bùng, thả cùi bưởi vào luộc lửa vừa 3 - 4 phút đến khi các viên cùi bưởi nổi lên mặt nước và chuyển màu trong suốt. Vớt ngay ra thau nước đá ngâm 10 phút cho giòn.',
        ],
        description:
          'Áo bột năng khi cùi bưởi còn nóng sên đường giúp bột dính chặt, luộc lên cùi bưởi trong suốt như ngọc.',
        tip: 'Vớt cùi bưởi luộc xong thả ngay vào thau nước đá giúp cùi bưởi giòn tan sần sật.',
      },
      {
        step: 3,
        title: 'Hấp chín đậu xanh & Nấu nước chè thốt nốt sánh mượt',
        time: '20 phút',
        heat: 'Lửa vừa',
        goal: 'Đậu xanh chín tơi không nát, nước chè ngọt thanh sánh mượt thơm dừa lá dứa',
        actionPoints: [
          'Đậu xanh ngâm nở, đem hấp/đồ chín tới trong 15 phút cho hạt đậu chín mềm bùi mà vẫn giữ nguyên hạt không bị nát bể.',
          'Đun sôi 1 lít nước với 150g đường thốt nốt An Giang và lá dứa buộc gút. Khi đường tan thơm ngát, rưới từ từ chén bột năng pha loãng vào khuấy đều tay đến khi nước chè sánh mượt trong trẻo.',
          'Trút toàn bộ cùi bưởi giòn trong suốt và đậu xanh đã hấp vào nồi chè, khuấy nhẹ tay 2 phút rồi tắt bếp. Thêm vài giọt tinh dầu hoa nhài thơm nức.',
        ],
        description:
          'Dùng đường thốt nốt An Giang giúp chè bưởi có màu vàng hổ phách dịu mát và vị ngọt thanh đượm sâu.',
        tip: 'Hấp đậu xanh chín tới trước khi cho vào nồi chè giúp nước chè trong mượt không bị đục.',
      },
      {
        step: 4,
        title: 'Nấu nước cốt dừa sánh mịn béo ngậy',
        time: '8 phút',
        heat: 'Lửa nhỏ',
        goal: 'Nước cốt dừa sánh đặc, béo bùi vị mặn ngọt hài hòa',
        actionPoints: [
          'Cho 300ml nước cốt dừa dão vào nồi cùng 1 thìa canh đường, 1/4 thìa cà phê muối và 1 thìa canh bột năng pha loãng.',
          'Đun trên lửa nhỏ, khuấy đều tay liên tục cho nước cốt dừa sôi lăn tăn sánh đặc mịn màng thì tắt bếp để nguội.',
        ],
        description:
          'Nêm xíu muối vào nước cốt dừa giúp tôn vị béo ngậy đậm đà đặc trưng miền Tây.',
        tip: 'Khuấy đều tay lửa nhỏ không đun sôi bùng làm nước cốt dừa bị tách dầu.',
      },
      {
        step: 5,
        title: 'Múc chè bưởi ra ly/bát & Thưởng thức mát lạnh',
        time: '3 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Ly chè bưởi An Giang sánh vàng óng ả, phủ nước cốt dừa béo ngậy',
        actionPoints: [
          'Múc chè bưởi sánh mịn ra ly hoặc bát. Múc vài thìa nước cốt dừa sánh đặc phủ lên trên.',
          'Rắc đậu phụng rang vàng đập dập và chút dừa bào sợi. Thêm đá bào mát lạnh.',
          'Thưởng thức: Dùng thìa trộn nhẹ. Cắn viên cùi bưởi giòn sần sật sảng khoái, vị đậu xanh bùi béo quyện nước cốt dừa béo ngậy và vị ngọt thanh mát lạnh bùng nổ.',
        ],
        description:
          'Ly chè bưởi An Giang là món quà giải nhiệt trứ danh gây thương nhớ.',
        tip: 'Ăn kèm đá bào nhỏ giúp chè mát lạnh thanh dịu cực kỳ ngon miệng.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm chè bưởi An Giang cùi giòn sần sật không đắng: 1. Bóp muối xả nước 4-5 lần + chần nước sôi vớt ngâm ngay thau nước đá để khử triệt đắng và tạo độ giòn; 2. Sên cùi bưởi với đường khi còn nóng rồi áo bột năng luộc chín thả ngay vào nước đá ngâm giúp cùi bưởi trong suốt giòn tan; 3. Dùng đường thốt nốt An Giang nấu nước chè sánh mượt cùng lá dứa và nước cốt dừa béo bùi chuẩn vị Miền Tây.',
    recommendedSauce:
      'Bát chè bưởi An Giang vàng óng sánh mượt ngạt ngào hương hoa nhài, rưới ngập nước cốt dừa béo ngậy, rắc đậu phụng rang giòn bùi và đá bào mát lạnh.',
  },

  'banh-chuoi-nuong-nuoc-cot-dua': {
    dishId: 'banh-chuoi-nuong-nuoc-cot-dua',
    dishName: 'Bánh Chuối Nướng Cốt Dừa',
    seoTitle: 'Cách Làm Bánh Chuối Nướng Cốt Dừa Thơm Ngon, Đỏ Đẹp, Dẻo Mềm Dễ Làm',
    description:
      'Hướng dẫn chi tiết bí quyết làm bánh chuối nướng cốt dừa dẻo mềm béo bùi, đỏ đẹp chuẩn vị miền Tây: Tỷ lệ chuối xiêm (chuối sứ) chín mọng ngâm rượu rum/rượu mai quế lộ, bánh mì ngâm sữa tươi cốt dừa bơ thơm lừng và mẹo nướng lò/nồi chiên không dầu thơm nức mũi.',
    ratingValue: '4.8',
    reviewCount: 215,
    prepTime: '25 phút',
    cookTime: '60 - 70 phút',
    difficulty: 'Dễ',
    servings: '5 - 6 người',
    ingredients: [
      {
        category: 'Thành phần Chuối Xiêm chín ngâm đường rượu thơm lừng',
        items: [
          '8 - 10 quả chuối xiêm (chuối sứ) chín bồi có chấm đồi mồi (khoảng 800g - 1kg chuối dẻo ngọt đậm đà)',
          '100g đường cát vàng (hoặc đường thốt nốt – giúp bánh nướng có màu đỏ cánh gián tự nhiên)',
          '2 thìa canh rượu rum (hoặc rượu mai quế lộ / rượu nếp – bí quyết giúp chuối khoác màu đỏ mọng quyến rũ)',
          '1/4 thìa cà phê muối hạt',
        ],
      },
      {
        category: 'Thành phần Cốt Bánh Dẻo Mềm & Béo Ngậy',
        items: [
          '150g bánh mì sandwich hoặc bánh mì ổ cũ (xé nhỏ vừa ăn)',
          '200ml nước cốt dừa béo đặc',
          '150ml sữa tươi không đường + 50g sữa đặc có đường',
          '30g bơ lạt đun chảy + 1 quả trứng gà tươi + 1/2 thìa cà phê vani thơm',
          '50g bột năng + 30g bột mì số 8 (giúp tạo độ dẻo dai kết dính chuẩn vị bánh chuối nướng)',
        ],
      },
      {
        category: 'Thành phần Trang trí & Phủ vành bánh',
        items: [
          '1 quả chuối thái lát mỏng khoanh tròn xếp mặt bánh',
          '20g mè trắng (vừng) rang vàng thơm',
          '1 thìa bơ lạt đun chảy phết mặt bánh khi nướng',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế chuối xiêm & Ngâm rượu đường tạo màu đỏ mọng',
        time: '20 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Miếng chuối xiêm ngấm sâu đường rượu, lên màu đỏ cánh gián mọng nước',
        actionPoints: [
          'Chuối lột vỏ, cắt khoanh tròn 0.5cm (dành lại 1 quả cắt dọc thái lát mỏng xếp trang trí mặt bánh).',
          'Cho chuối vào thố, trút 100g đường cát vàng, 1/4 thìa muối và 2 thìa canh rượu rum vào đảo nhẹ tay.',
          'Ướp chuối tối thiểu 1 - 2 tiếng (hoặc bọc màng bọc thực phẩm để ngăn mát tủ lạnh qua đêm). Rượu rum kết hợp đường khi gặp nhiệt độ nướng sẽ giúp chuối ngả màu đỏ thắm quyến rũ và thơm phức.',
        ],
        description:
          'Ướp chuối chín với rượu rum và đường vàng là bí quyết gia truyền giúp ổ bánh chuối nướng chín xong có màu đỏ hồng cực kỳ đẹp mắt.',
        tip: 'Chọn chuối xiêm vỏ có đồi mồi chín mọng thì bánh nướng ra mới ngọt đậm và không bị chát.',
      },
      {
        step: 2,
        title: 'Pha hỗn hợp sữa cốt dừa & Ngâm bánh mì dẻo mềm',
        time: '15 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Bánh mì hút trọn sữa cốt dừa dẻo quánh, không bị vón cục',
        actionPoints: [
          'Trong thố lớn, hòa tan 200ml nước cốt dừa, 150ml sữa tươi, 50g sữa đặc, 30g bơ lạt đun chảy, 1 quả trứng gà và 1/2 thìa vani.',
          'Xé nhỏ 150g bánh mì cho vào thố hỗn hợp sữa cốt dừa. Dùng phên bóp nhẹ cho bánh mì hút no nước sữa và mềm nhão ra.',
          'Rây 50g bột năng và 30g bột mì vào thố bánh mì, trộn đều tạo thành khối bột dẻo quánh sánh mịn.',
        ],
        description:
          'Pha nước cốt dừa ngâm bánh mì giúp cốt bánh khi nướng chín có độ dẻo mềm béo bùi tơi xốp.',
        tip: 'Bóp vụn bánh mì vừa phải để cốt bánh giữ cấu trúc dẻo dai nguyên bản.',
      },
      {
        step: 3,
        title: 'Trộn chuối ngâm vào hỗn hợp bột & Xếp khuôn bánh',
        time: '10 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Bột và chuối hòa quyện đều, mặt bánh xếp hình hoa chuối đẹp mắt',
        actionPoints: [
          'Trút 2/3 lượng chuối đã ngâm đường rượu (cùng phần nước đường rượu đọng lại) vào thố bột bánh mì, đảo nhẹ tay.',
          'Lót giấy nến chống dính vào khuôn nướng (hoặc phết 1 lớp bơ lạt mỏng quanh lòng khuôn).',
          'Trút hỗn hợp bột chuối vào khuôn, gạt phẳng mặt. Xếp 1/3 lượng chuối lát mỏng còn lại lên bề mặt thành hình bông hoa tròn xoè đều đẹp mắt.',
        ],
        description:
          'Xếp lát chuối tươi phủ kín bề mặt giúp ổ bánh chuối nướng có diện mạo vàng óng óng ả.',
        tip: 'Nện nhẹ khuôn bánh xuống bàn 2-3 lần để vỡ các bọt khí lớn bên trong.',
      },
      {
        step: 4,
        title: 'Nướng bánh chuối chín vàng ruộm & Phết bơ mè rang',
        time: '60 - 75 phút',
        heat: '150°C - 160°C (Lò nướng / Nồi chiên không dầu)',
        goal: 'Ổ bánh chuối nướng chín dậy mùi thơm ngạt ngào, màu đỏ hồng óng ả, vành giòn mặt dẻo',
        actionPoints: [
          'Làm nóng lò nướng hoặc nồi chiên không dầu ở 160°C trong 10 phút.',
          'Đặt khuôn bánh vào nướng ở 150°C - 160°C trong 60 phút. Sau 40 phút nướng, lấy bánh ra phết 1 lớp bơ đun chảy lên mặt và rắc mè rang vàng ruộm.',
          'Tiếp tục nướng thêm 15 - 20 phút cho mặt chuối xém vàng cánh gián, cắm tăm vào giữa rút ra tăm khô ráo là bánh đã chín hoàn toàn.',
        ],
        description:
          'Nướng ở nhiệt độ vừa 150°C giúp chuối chín ngấu lên màu đỏ thắm tự nhiên và cốt bánh dẻo mịn.',
        tip: 'Nếu dùng nồi chiên không dầu, hãy bọc giấy bạc mặt bánh 30 phút đầu để tránh làm cháy chuối trên mặt.',
      },
      {
        step: 5,
        title: 'Để nguội bánh chuối, cắt lát & Thưởng thức béo bùi',
        time: '10 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Miếng bánh chuối nướng đỏ hồng dẻo quánh, thơm nức cốt dừa bơ mè',
        actionPoints: [
          'Lấy khuôn bánh ra khỏi lò, để bánh nguội hoàn toàn (hoặc để ngăn mát tủ lạnh 2 tiếng cho bánh săn lại cắt đẹp không bị dính dao).',
          'Dùng dao bén cắt bánh chuối nướng thành từng miếng tam giác hoặc hình chữ nhật vừa ăn.',
          'Thưởng thức: Nhấm nháp miếng bánh chuối nướng dẻo mềm bùi béo. Vị ngọt đậm đà của chuối chín quyện hương cốt dừa ngạt ngào, bơ thơm lừng và mè rang giòn bùi đỉnh cao.',
        ],
        description:
          'Bánh chuối nướng cốt dừa ăn nguội hoặc để mát tủ lạnh lại càng dẻo quánh béo ngậy ngon gấp đôi.',
        tip: 'Rưới thêm thìa nước cốt dừa sánh đặc lên miếng bánh khi ăn nếu thích vị béo ngậy.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm bánh chuối nướng cốt dừa lên màu đỏ thắm dẻo mềm không bị khô: 1. Ướp chuối sứ chín mọng với đường vàng và 2 thìa rượu rum ít nhất 2 tiếng – rượu rum khi gặp nhiệt độ nướng sẽ giúp chuối chuyển màu đỏ mọng tự nhiên cực đẹp; 2. Ngâm bánh mì vụn trong nước cốt dừa, sữa tươi và bơ lạt giúp cốt bánh dẻo mềm béo bùi không bị bở nát; 3. Nướng nhiệt vừa 150°C trong 60-70 phút để chuối ngấu đỏ từ sâu bên trong cốt bánh.',
    recommendedSauce:
      'Ổ bánh chuối nướng nước cốt dừa thơm nức bốc khói màu đỏ hồng óng ả rắc mè rang vàng, cắt miếng dẻo quánh rưới thêm thìa nước cốt dừa béo bùi ăn kèm trà nóng.',
  },

  'canh-chua-chay': {
    dishId: 'canh-chua-chay',
    dishName: 'Canh Chua Chay Nam Bộ',
    seoTitle: 'Cách Làm Canh Chua Chay Thanh Đạm, Đậm Đà Chuẩn Cơm Chay',
    description:
      'Hướng dẫn chi tiết cách nấu canh chua chay Nam Bộ thơm ngon giải nhiệt thanh mát: Sự kết hợp hoàn hảo từ nước me dốt chua thanh, dứa (thơm) xào mỡ hành, nấm rơm ngọt tự nhiên, đậu hũ non bùi béo cùng đĩa rau muống, đậu bắp, giá đỗ và ngò ôm ngò gai ngạt ngào.',
    ratingValue: '4.8',
    reviewCount: 238,
    prepTime: '20 phút',
    cookTime: '20 phút',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Thành phần Đậu Hũ & Nấm ngọt tự nhiên',
        items: [
          '2 miếng đậu hũ trắng hoặc đậu hũ chiên vàng (thái khối vuông vừa ăn)',
          '150g nấm rơm búp tươi (hoặc nấm đùi gà / nấm kim châm – rửa sạch ngâm nước muối loãng)',
          '1/4 quả dứa (thơm) mật chín ngọt (thái lát mỏng)',
          '2 quả cà chua chín đỏ (bổ múi cau)',
        ],
      },
      {
        category: 'Thành phần Rau Củ Canh Chua & Nước Cốt Me',
        items: [
          '100g đậu bắp (thái xéo)',
          '100g bạc hà (dọc mùng) tước vỏ, thái xéo bóp muối rửa sạch',
          '100g giá đỗ tươi + 100g cọng rau muống bào',
          '50g vắt me chín (hoặc me dốt – dầm nước ấm lấy 4 thìa canh nước cốt me chua thanh)',
          'Rau nêm ngạt ngào: Ngò ôm (rau ngổ), ngò gai (mùi tàu), ớt hiểm đỏ thái lát',
        ],
      },
      {
        category: 'Gia vị nêm Canh Chua Chay chuẩn vị',
        items: [
          '2 thìa canh nước mắm chay ngon (từ đậu nành/nấm)',
          '2 thìa canh đường phèn (tạo vị ngọt thanh dịu mát)',
          '1 thìa cà phê hạt nêm chay nấm hương + 1/2 thìa cà phê muối',
          '2 thìa canh hành tỏi baro (tỏi taro / boa-rô) phi vàng thơm lừng',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế rau củ, nấm rơm & Dầm nước cốt me',
        time: '15 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Rau củ tươi sạch, bạc hà không ngứa, nước cốt me chua thanh mát',
        actionPoints: [
          'Bạc hà (dọc mùng) tước bỏ lớp vỏ lụa bên ngoài, thái xéo. Bóp kỹ bạc hà với 1 thìa muối hạt trong 2 phút rồi xả vắt sạch nước (giúp bạc hà giòn và tuyệt đối không gây ngứa họng).',
          'Nấm rơm cạo sạch chân, ngâm nước muối pha loãng 10 phút, vớt ra bổ đôi. Cà chua bổ múi cau, dứa thái lát vừa ăn.',
          'Cho vắt me chín vào chén, trút 100ml nước ấm vào dầm nhuyễn, lọc qua rây lấy 4 thìa canh nước cốt me đặc béo.',
        ],
        description:
          'Bóp muối xả sạch bạc hà và lọc nước cốt me tươi giúp canh chua có vị chua thanh dịu nhẹ, không bị gắt.',
        tip: 'Vắt kiệt nước bạc hà sau khi bóp muối giúp bạc hà hút trọn nước canh chua giòn sần sật.',
      },
      {
        step: 2,
        title: 'Xào thơm dứa cà chua & Chiên lướt đậu hũ nấm rơm',
        time: '8 phút',
        heat: 'Lửa vừa',
        goal: 'Dứa và cà chua tiết vị chua ngọt dịu, nấm và đậu hũ xào săn thơm lừng',
        actionPoints: [
          'Đun nóng 1 thìa canh dầu ăn trong nồi, cho 1 thìa tỏi boa-rô (baro) băm vào phi vàng thơm lừng.',
          'Trút 1/2 lượng cà chua và toàn bộ dứa thái lát vào nồi đảo đều 2 phút cho dứa và cà chua chín mềm tiết ra màu đỏ vàng tươi sáng và vị chua ngọt tự nhiên.',
          'Trút nấm rơm và đậu hũ vào đảo nhẹ tay 2 phút cho ngấm đượm hương baro phi.',
        ],
        description:
          'Xào dứa và cà chua trước khi đổ nước giúp nước canh chua có màu vàng đỏ óng ả và vị ngọt đậm đà.',
        tip: 'Xào nhẹ tay tránh làm nát đậu hũ non.',
      },
      {
        step: 3,
        title: 'Nấu nước canh chua me & Nêm gia vị đường phèn',
        time: '10 phút',
        heat: 'Lửa lớn & Lửa vừa',
        goal: 'Nước canh chua chay trong trẻo, cân bằng hoàn hảo vị chua - ngọt - mặn',
        actionPoints: [
          'Trút 1.2 lít nước lọc (hoặc nước dùng củ quả) vào nồi. Đun lửa lớn cho nước sôi bùng.',
          'Rưới 4 thìa canh nước cốt me dốt, 2 thìa canh đường phèn, 2 thìa canh nước mắm chay, 1 thìa hạt nêm chay và 1/2 thìa muối vào nồi.',
          'Hớt sạch bọt trắng nổi lên. Nếm thử nước canh có vị chua thanh dịu ngọt mát tròn vị đặc trưng canh chua Nam Bộ.',
        ],
        description:
          'Đường phèn là bí quyết vàng tạo hậu vị ngọt mát thanh dịu cân bằng vị chua của me.',
        tip: 'Thường xuyên vọt bọt để nước canh chua trong vắt ngào ngạt hương dứa.',
      },
      {
        step: 4,
        title: 'Thả rau củ tươi & Rau nêm ngò ôm ngò gai thơm nức',
        time: '5 phút',
        heat: 'Lửa vừa',
        goal: 'Đậu bắp, bạc hà, giá đỗ vừa chín tới giữ độ giòn xanh mát',
        actionPoints: [
          'Thả đậu bắp, bạc hà, cọng rau muống và phần cà chua còn lại vào nồi canh đun sôi bùng 2 phút.',
          'Trút giá đỗ tươi vào đảo nhẹ rồi tắt bếp ngay (giữ cho giá đỗ giòn mát không bị nhũn).',
          'Rắc ngò ôm (rau ngổ), ngò gai (mùi tàu) thái nhỏ và vài lát ớt hiểm đỏ lên trên nồi canh.',
        ],
        description:
          'Cho giá đỗ và rau nêm ở bước tắt bếp giúp giữ trọn màu xanh tươi và hương thơm ngạt ngào đặc trưng.',
        tip: 'Rau ngò ôm ngò gai là linh hồn làm nên hương thơm nồng nàn không thể thiếu của canh chua chay.',
      },
      {
        step: 5,
        title: 'Múc canh chua chay ra thố & Thưởng thức cùng cơm nóng',
        time: '2 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Bát canh chua chay rực rỡ sắc màu, ngạt ngào hương thơm giải nhiệt',
        actionPoints: [
          'Múc canh chua chay ra bát lớn hoặc thố đất. Rưới 1 thìa boa-rô phi vàng thơm lừng lên trên.',
          'Thưởng thức: Chan nước canh chua thanh ngọt dịu lên bát cơm trắng dẻo. Gắp miếng đậu hũ bùi béo, nấm rơm ngọt lịm, bạc hà giòn sần sật chấm ngập vào chén nước mắm chay dầm ớt hiểm đỏ cay xè.',
        ],
        description:
          'Bát canh chua chay Nam Bộ đầy đặn sắc màu là món ăn giải nhiệt thanh tịnh tuyệt vời.',
        tip: 'Chấm kèm chén nước mắm chay nguyên chất dầm ớt hiểm đỏ cực kỳ bắt cơm.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng nấu canh chua chay thanh đạm đậm đà: 1. Bóp muối xả vắt kiệt nước bạc hà (dọc mùng) để bạc hà giòn sần sật không gây ngứa; 2. Dùng đường phèn kết hợp nước cốt me tươi dốt – đường phèn mang lại vị ngọt thanh mát dịu hòa quyện hoàn hảo vị chua của me; 3. Phi thơm hành boa-rô (baro) xào dứa cà chua trước khi đổ nước, rắc ngò ôm ngò gai và tỏi boa-rô phi vàng ở phút cuối cho hương thơm bùng nổ.',
    recommendedSauce:
      'Tô canh chua chay rực rỡ ngào ngạt hương ngò ôm ngò gai, ăn kèm bát cơm trắng dẻo thơm, chấm đậu hũ nấm rơm và bạc hà giòn sần sật vào chén nước mắm chay dầm ớt hiểm cay xè.',
  },

  'banh-xeo-chay': {
    dishId: 'banh-xeo-chay',
    dishName: 'Bánh Xèo Chay Nấm Đậu Hũ Giòn Rụm',
    seoTitle: 'Cách Làm Bánh Xèo Chay Thanh Đạm, Đậm Đà Chuẩn Cơm Chay',
    description:
      'Hướng dẫn chi tiết bí quyết tráng bánh xèo chay giòn rụm lâu bị mềm chuẩn vị miền Tây: Tỷ lệ pha bột gạo, nước cốt dừa béo bùi, bột nghệ vàng ươm và nước soda/bia chay tạo bọt khí xốp giòn; nhân nấm đùi gà, nấm rơm, đậu hũ chiên xé sợi, giá đỗ và chén nước mắm chay chua ngọt tỏi ớt dầm đồ chua.',
    ratingValue: '4.9',
    reviewCount: 242,
    prepTime: '25 phút',
    cookTime: '25 phút',
    difficulty: 'Trung bình',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Thành phần Bột Bánh Xèo Chay giòn rụm lâu bị mềm',
        items: [
          '250g bột gạo tẻ ngon (hoặc gói bột bánh xèo pha sẵn)',
          '50g bột chiên giòn chay hoặc bột tài năng (bí quyết vành bánh giòn rụm siêu lâu)',
          '1/2 thìa cà phê bột nghệ vàng (tạo màu vàng ươm nghệ quyến rũ)',
          '150ml nước cốt dừa béo đặc + 300ml nước lọc + 100ml nước soda lạnh (hoặc bia chay lạnh - tạo bọt khí giúp vỏ bánh xốp giòn)',
          '1/2 thìa cà phê muối, 1 thìa cà phê hạt nêm chay nấm hương, 3 nhánh hành boa-rô (baro) thái nhỏ',
        ],
      },
      {
        category: 'Thành phần Nhân Nấm Đậu Hũ & Giá Đỗ ngọt thanh',
        items: [
          '150g nấm đùi gà hoặc nấm rơm búp (rửa sạch xé sợi vừa ăn)',
          '100g nấm kim châm (cắt gốc rửa sạch)',
          '1 miếng đậu hũ chiên vàng (thái sợi nhỏ)',
          '200g giá đỗ tươi + 100g củ sắn (củ đậu) thái sợi + 50g đậu xanh xát vỏ hấp chín',
          '1 củ củ cải trắng/củ cải đỏ thái mỏng, 1 thìa tỏi boa-rô băm',
        ],
      },
      {
        category: 'Rau sống ăn kèm & Nước mắm chay chua ngọt',
        items: [
          'Rau sống phong phú: Cải xanh, đọt xoài, lá cóc, xà lách, rau thơm, diếp cá, tía tẻ',
          'Nước mắm chay chua ngọt: 3 thìa canh nước mắm chay ngon, 3 thìa canh đường thốt nốt, 3 thìa canh nước ấm, 1.5 thìa canh nước cốt chanh',
          '1 thìa canh ớt hiểm băm nhuyễn + củ cải cà rốt bào sợi ngâm chua',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Pha bột bánh xèo chay giòn rụm & Ủ bột',
        time: '15 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Hỗn hợp bột sánh mịn, bọt khí soda giúp vành bánh giòn xốp',
        actionPoints: [
          'Rây bột gạo, bột chiên giòn, bột nghệ, muối và hạt nêm chay nấm hương vào thố lớn.',
          'Rưới từ từ nước cốt dừa, nước lọc và 100ml nước soda lạnh (hoặc bia chay) vào khuấy đều tay đến khi bột tan mịn không vón cục. Thêm tỏi boa-rô cắt nhỏ.',
          'Bọc màng bọc thực phẩm cho bột nghỉ 20 - 30 phút. Bột nghỉ giúp hạt bột nở đều và bọt khí soda giúp vành bánh xèo chay giòn rụm tới 2-3 tiếng.',
        ],
        description:
          'Pha bột với nước soda lạnh tạo bọt khí li ti giúp vỏ bánh xèo khi gặp nhiệt cao sẽ xốp giòn rụm.',
        tip: 'Ủ bột tối thiểu 20 phút để bột nở dẻo ngon hơn.',
      },
      {
        step: 2,
        title: 'Xào sơ nhân nấm đậu hũ & Pha nước mắm chay chua ngọt',
        time: '10 phút',
        heat: 'Lửa lớn',
        goal: 'Nấm và đậu hũ xào săn thấm vị, nước mắm chay chua ngọt hài hòa',
        actionPoints: [
          'Phi thơm 1 thìa tỏi boa-rô băm với 1 thìa dầu ăn. Trút nấm đùi gà xé sợi, nấm kim châm và đậu hũ chiên thái sợi vào xào nhanh lửa lớn 2 phút với 1/2 thìa hạt nêm chay rồi trút ra đĩa.',
          'Pha nước mắm chay chua ngọt: Hòa tan 3 thìa đường thốt nốt với 3 thìa nước ấm, trút 3 thìa nước mắm chay và 1.5 thìa nước cốt chanh. Khuấy tan đều rồi thả ớt hiểm băm nhuyễn và cà rốt đồ chua lên trên.',
        ],
        description:
          'Nước mắm chay chua ngọt sánh đậm hòa quyện vị mặn thanh của mắm chay đậu nành và ngọt dịu đường thốt nốt.',
        tip: 'Xào nấm nhanh lửa lớn để nấm không bị ra nước.',
      },
      {
        step: 3,
        title: 'Đổ bánh xèo chay xèo xèo & Thêm nhân nấm giá đỗ',
        time: '15 phút',
        heat: 'Lửa lớn',
        goal: 'Vành bánh xèo mỏng tang vàng ươm nghệ giòn rụm, nhân nấm thơm lừng',
        actionPoints: [
          'Đun thật nóng chảo chống dính, tráng 1 thìa canh dầu ăn xung quanh lòng chảo.',
          'Múc 1 vá bột bánh xèo chay tráng nhanh tay đảo nghiêng chảo cho bột tráng đều một lớp mỏng tang phát ra tiếng xèo xèo ngạt ngào mùi thơm nước cốt dừa.',
          'Rải nhân nấm xào, đậu hũ xé sợi, củ sắn thái sợi, giá đỗ và đậu xanh hấp lên một nửa mặt bánh. Đậy nắp chảo 2 phút cho nhân chín hấp hơi.',
        ],
        description:
          'Chảo phải thật nóng và tráng bột thật mỏng thì bánh xèo chay mới kêu xèo xèo giòn rụm.',
        tip: 'Rưới 1 thìa dầu ăn dọc theo vành bánh giúp vành bánh tróc giòn rụm không dính chảo.',
      },
      {
        step: 4,
        title: 'Mở nắp chiên giòn vành & Gập đôi bánh xèo chay',
        time: '5 phút',
        heat: 'Lửa vừa',
        goal: 'Mặt dưới bánh xèo vàng giòn rụm, vành tróc nhẹ không dính',
        actionPoints: [
          'Mở nắp chảo, hạ lửa vừa. Rưới thêm xíu dầu quanh vành bánh, chiên thêm 2 - 3 phút không đậy nắp cho hơi nước thoát ra ngoài, mặt dưới bánh chuyển màu vàng giòn rụm.',
          'Dùng vá gập đôi chiếc bánh xèo chay lại, chiên thêm 30 giây mỗi mặt cho bánh giòn rụm hoàn toàn rồi vớt ra đĩa lót giấy thấm dầu.',
        ],
        description:
          'Mở nắp chiên lửa vừa giai đoạn cuối giúp thoát toàn bộ hơi nước, giữ vỏ bánh khô ráo giòn lâu.',
        tip: 'Xếp bánh xèo đứng hoặc lót giấy thấm dầu, không đè chồng bánh lên nhau.',
      },
      {
        step: 5,
        title: 'Trình bày mẹt bánh xèo chay rau rừng & Thưởng thức',
        time: '3 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Mẹt bánh xèo chay vàng giòn bốc khói ngạt ngào, đĩa rau sống thanh mát',
        actionPoints: [
          'Bày bánh xèo chay ra mẹt tre lót lá chuối. Cạnh bên bày đĩa rau sống phong phú: Cải xanh, đọt xoài, lá cóc, xà lách, rau thơm và chén nước mắm chay chua ngọt đồ chua.',
          'Thưởng thức: Ngắt miếng bánh xèo chay giòn rụm kèm nhân nấm béo ngọt, cuốn trong lá cải xanh, chấm ngập vào chén nước mắm chay chua ngọt. Vị giòn rụm vỏ bánh quyện vị nấm ngọt, rau rừng chát nhẹ và nước mắm cay nồng bùng nổ vị giác.',
        ],
        description:
          'Bánh xèo chay cuốn rau rừng chấm nước mắm chay chua ngọt là món chay giòn rụm tuyệt vời.',
        tip: 'Thưởng thức ngay khi bánh vừa ra khỏi chảo để cảm nhận trọn vẹn độ giòn tan.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng tráng bánh xèo chay giòn rụm lâu bị mềm: 1. Pha bột gạo kết hợp bột chiên giòn chay, nước cốt dừa béo bùi và nước soda lạnh (hoặc bia chay) – bọt khí soda giúp vỏ bánh xốp nhẹ giòn tan 2-3 tiếng; 2. Chảo đun THẬT NÓNG trước khi tráng bột mỏng tang kêu xèo xèo; 3. Sau khi đậy nắp chín nhân, MỞ NẮP rưới xíu dầu quanh vành bánh chiên lửa vừa 2-3 phút để thoát toàn bộ hơi nước giúp vành bánh tróc giòn rụm không dẻo.',
    recommendedSauce:
      'Mẹt bánh xèo chay vàng ươm giòn rụm cuốn rau cải xanh, lá cóc, đọt xoài, chấm ngập chén nước mắm chay chua ngọt tỏi ớt dầm đồ chua củ cải cà rốt giòn tan.',
  },

  'com-nieu-singapore': {
    dishId: 'com-nieu-singapore',
    dishName: 'Cơm Niêu Bò Sốt Tiêu Đen',
    seoTitle: 'Cách Làm Cơm Niêu Bò Sốt Tiêu Đen Thơm Ngon Đậm Đà Chuẩn Quán',
    description:
      'Hướng dẫn chi tiết bí quyết làm cơm niêu bò sốt tiêu đen xèo xèo giòn rụm cháy vàng đáy niêu chuẩn vị nhà hàng: Mẹo ướp thịt bò thăn mềm mọng không bị dai, công thức sốt tiêu đen sánh đặc cay nồng quyện bơ tỏi, bắp ngọt, ớt chuông và cơm niêu giòn tan.',
    ratingValue: '4.9',
    reviewCount: 258,
    prepTime: '20 phút',
    cookTime: '25 phút',
    difficulty: 'Trung bình',
    servings: '2 - 3 người',
    ingredients: [
      {
        category: 'Thành phần Thịt Bò mềm mọng & Ướp gia vị thơm lừng',
        items: [
          '350g thịt bò thăn ngoại (hoặc thăn nội / bò lõi rùa tươi) thái mỏng bản to vừa ăn',
          '1 thìa canh dầu hàu, 1 thìa cà phê nước tương (xì dầu), 1/2 thìa cà phê dầu mè thơm',
          '1 thìa cà phê bột năng (giúp thịt bò khóa nước, khi xào mềm mọng tan trong miệng)',
          '1 thìa tỏi băm + 1/2 thìa tiêu đen xay',
        ],
      },
      {
        category: 'Thành phần Sốt Tiêu Đen cay nồng sền sệt chuẩn quán',
        items: [
          '2 thìa canh tiêu đen hạt (1/2 giã vỡ hạt, 1/2 xay mịn)',
          '2 thìa canh dầu hàu, 2 thìa canh nước tương, 1 thìa canh tương ớt',
          '1 thìa canh đường thốt nốt (hoặc đường cát), 1/2 thìa cà phê hạt nêm',
          '150ml nước hầm xương (hoặc nước lọc) + 1 thìa canh bột năng pha loãng',
          '20g bơ lạt (bơ Tường An/Anchor - tạo độ béo ngậy bóng mượt cho sốt)',
        ],
      },
      {
        category: 'Thành phần Cơm Niêu Cháy Giòn & Rau củ xào kèm',
        items: [
          '2 bát cơm dẻo đã nấu chín (hoặc gạo nếp dẻo thơm nấu niêu đất)',
          '1/2 củ hành tây thái hạt lựu, 1/2 quả ớt chuông xanh/đỏ thái hạt lựu',
          '50g hạt bắp ngọt (ngô ngọt) luộc chín',
          '1 thìa canh mỡ heo hoặc bơ lạt quết niêu đất',
          'Hành lá cắt nhỏ, ớt tươi thái lát và tiêu sọ rắc mặt',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế thịt bò mềm mọng & Pha nước sốt tiêu đen sền sệt',
        time: '15 phút',
        heat: 'Không dùng nhiệt',
        goal: 'Thịt bò thấm vị mềm mọng không dai, nước sốt tiêu đen cay nồng đậm đà',
        actionPoints: [
          'Thịt bò thăn rửa sạch, thấm khô, thái lát mỏng ngang thớ. Ướp bò với 1 thìa dầu hàu, 1 thìa nước tương, 1/2 thìa dầu mè, 1/2 thìa tiêu đen xay và 1 thìa bột năng trong 15 phút (bột năng giúp thịt bò khóa mọng nước).',
          'Pha nước sốt tiêu đen: Trong chén nhỏ, hòa tan 2 thìa dầu hàu, 2 thìa nước tương, 1 thìa tương ớt, 1 thìa đường, 1/2 thìa hạt nêm, 2 thìa tiêu đen đập vỡ và 150ml nước lọc.',
        ],
        description:
          'Ướp thịt bò với chút bột năng và dầu mè là bí quyết vàng giúp bò xào lửa lớn luôn mềm mọng tan trong miệng.',
        tip: 'Thái thịt bò ngang thớ để miếng bò không bị dẻo dai khi xào.',
      },
      {
        step: 2,
        title: 'Nấu nước sốt tiêu đen bơ tỏi sóng sánh',
        time: '8 phút',
        heat: 'Lửa vừa',
        goal: 'Nước sốt tiêu đen sánh đặc, bóng mượt, thơm lừng vị bơ tỏi',
        actionPoints: [
          'Đun chảy 10g bơ lạt trên chảo, cho tỏi băm và hành tây thái hạt lựu vào phi vàng thơm lừng.',
          'Trút toàn bộ chén nước sốt tiêu đen đã pha vào chảo đun sôi bùng. Hạ lửa nhỏ, rưới từ từ 1 thìa bột năng pha loãng vào khuấy đều tay đến khi sốt cô đặc sền sệt, bóng mượt ngào ngạt hương tiêu cay nồng.',
          'Trút sốt ra chén riêng giữ nóng.',
        ],
        description:
          'Bơ lạt kết hợp tiêu đen hạt đập vỡ tạo nên mùi thơm cay nồng ấm áp vô cùng quyến rũ.',
        tip: 'Khuấy đều tay lửa nhỏ không đun quá lâu làm tiêu bị đắng.',
      },
      {
        step: 3,
        title: 'Tạo lớp cơm cháy vàng giòn rụm đáy niêu đất',
        time: '12 phút',
        heat: 'Lửa nhỏ',
        goal: 'Lớp cơm cháy dưới đáy niêu vàng ươm, giòn rụm sần sật xèo xèo',
        actionPoints: [
          'Quết 1 lớp bơ lạt hoặc mỡ heo mỏng quanh lòng niêu đất.',
          'Cho cơm dẻo vào niêu đất, dùng thìa nén nhẹ cơm áp sát vào thành và đáy niêu.',
          'Đặt niêu đất lên bếp gas/bếp hồng ngoại, đun lửa nhỏ. Xoay nghiêng niêu đất liên tục trong 10 - 12 phút để nhiệt tỏa đều khắp các mặt niêu cho đến khi lớp cơm đáy niêu chuyển màu vàng ươm giòn rụm và phát ra tiếng kêu xèo xèo.',
        ],
        description:
          'Quết bơ lạt lòng niêu đất và xoay nghiêng niêu giúp cơm cháy chín vàng giòn rụm và ngạt ngào mùi thơm bơ dẻo.',
        tip: 'Đun lửa nhỏ để cơm cháy vàng ruộm mà không bị cháy đen.',
      },
      {
        step: 4,
        title: 'Xào bò chín tới & Bày bò tiêu đen lên mặt cơm niêu',
        time: '5 phút',
        heat: 'Lửa lớn',
        goal: 'Thịt bò xào tái chín tới mềm ngọt mọng nước, rau củ giữ độ giòn ngọt',
        actionPoints: [
          'Đun nóng chảo với 1 thìa bơ lạt, trút thịt bò đã ướp vào đảo nhanh tay trên lửa lớn 2 phút cho thịt bò săn lại tái chín tới.',
          'Thả ớt chuông thái hạt lựu và bắp ngọt vào đảo nhanh 30 giây rồi tắt bếp.',
          'Trút toàn bộ thịt bò xào, bắp ngọt và ớt chuông lên mặt niêu cơm cháy đang nóng xèo xèo.',
        ],
        description:
          'Xào bò lửa lớn trong 2 phút giữ trọn vị ngọt mọng mướt tự nhiên của thịt bò thăn tươi.',
        tip: 'Không xào thịt bò quá lâu trên bếp sẽ khiến bò bị dai khô.',
      },
      {
        step: 5,
        title: 'Rưới sốt tiêu đen nóng hổi & Thưởng thức niêu cơm xèo xèo',
        time: '2 phút',
        heat: 'Niêu đất nóng hổi',
        goal: 'Niêu cơm bò sốt tiêu đen bốc khói nghi ngút, thơm lừng ngạt ngào',
        actionPoints: [
          'Rưới ngập chén sốt tiêu đen sền sệt nóng hổi lên trên mặt thịt bò và cơm niêu. Tiêu đen gặp niêu đất nóng phát ra tiếng xèo xèo dậy mùi thơm ngạt ngào.',
          'Rắc hành lá cắt nhỏ, tiêu sọ xay và vài lát ớt đỏ lên trên trang trí.',
          'Thưởng thức: Dùng thìa trộn đều thịt bò mềm ngọt ngấm đượm sốt tiêu đen cay nồng với lớp cơm cháy giòn rụm dưới đáy niêu. Vị giòn rụm bùi béo của cơm cháy quyện vị ngọt mọng thịt bò và sốt tiêu đen cay ấm bùng nổ vị giác.',
        ],
        description:
          'Cơm niêu bò sốt tiêu đen xèo xèo bốc khói là món ăn trứ danh gây thương nhớ.',
        tip: 'Trộn đều cơm và sốt ngay khi niêu còn nóng hổi để cơm cháy ngấm trọn vị sốt đậm đà.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm cơm niêu bò sốt tiêu đen xèo xèo giòn rụm chuẩn nhà hàng: 1. Ướp thịt bò với 1 thìa bột năng + dầu mè và xào lửa lớn nhanh 2 phút giữ thịt bò mềm mọng tan trong miệng; 2. Dùng tiêu đen hạt đập vỡ kết hợp bơ lạt nấu sốt đậm đà bóng mượt; 3. Quết bơ lạt lòng niêu đất và xoay nghiêng niêu đun lửa nhỏ 10-12 phút để có lớp cơm cháy vàng ươm giòn rụm nổ xèo xèo ngạt ngào mùi thơm.',
    recommendedSauce:
      'Niêu cơm bò sốt tiêu đen xèo xèo bốc khói ngạt ngào hương bơ tỏi tiêu nồng, rưới ngập sốt tiêu đen sánh mịn, trộn đều lớp cơm cháy giòn rụm ăn kèm đĩa dưa leo kim chi chua ngọt.',
  },

  'com-chien-duong-chau': {
    dishId: 'com-chien-duong-chau',
    dishName: 'Cơm Chiên Dương Châu Hạt Cơm Săn Giòn, Thơm Ngon Chuẩn Vị',
    seoTitle: 'Cách Làm Cơm Chiên Dương Châu Hạt Cơm Săn Giòn, Thơm Ngon Chuẩn Vị',
    ratingValue: '4.8',
    reviewCount: 368,
    prepTime: '20 phút',
    cookTime: '15 phút',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Cơm nguội & Kỹ thuật "Kim Bọc Bạc" (Áo lòng đỏ vàng kim)',
        items: [
          '4 bát cơm nguội hạt dài (nấu ráo tỷ lệ 1:0.85, để ngăn mát tủ lạnh 4 tiếng)',
          '2 lòng đỏ trứng gà tươi (bóp đều vào cơm tạo màng vàng óng ả)',
          '1 quả trứng gà tươi (đánh tan dùng tạo vân trứng vàng trắng ngũ sắc)',
          '1 thìa canh mỡ heo hoặc dầu ăn ngon (giúp từng hạt cơm tơi xốp tuyệt đối)',
        ],
      },
      {
        category: 'Topping đạm thập cẩm cắt hạt lựu (Linh hồn món ăn)',
        items: [
          '2 cây lạp xưởng Mai Quế Lộ (luộc sơ 3 phút, áp chảo thơm rồi cắt hạt lựu 0.6cm)',
          '150g tôm sú tươi bóc vỏ, rút chỉ, thấm thật khô ráo rồi cắt hạt lựu',
          '100g thịt xá xíu hoặc giò lụa ngon (cắt hạt lựu vuông vức đồng đều)',
        ],
      },
      {
        category: 'Rau củ ngũ sắc tươi ngọt (Thanh mát giải ngấy)',
        items: [
          '1/2 củ cà rốt (gọt vỏ, cắt hạt lựu nhỏ đồng cỡ hạt bắp)',
          '80g đậu Hà Lan tươi hoặc đông lạnh (chần nhanh nước sôi pha muối, ngâm nước đá)',
          '1/2 bắp ngô ngọt tách hạt (chần sơ ráo nước, tăng độ ngọt bùi giòn)',
        ],
      },
      {
        category: 'Gia vị xào thơm & Nước sốt Wok Hei (Tỷ lệ vàng nhà hàng Hoa)',
        items: [
          '3 tép tỏi ta băm nhuyễn',
          '2 củ hành tím khô băm nhỏ',
          '3 nhánh hành lá tươi (phần đầu hành trắng băm phi thơm, lá hành xắt nhỏ)',
          '1.5 thìa canh nước tương xì dầu thượng hạng (rưới quanh thành chảo nóng)',
          '1 thìa cà phê dầu hào',
          '1/2 thìa cà phê đường cát trắng',
          '1 thìa cà phê hạt nêm',
          '1/2 thìa cà phê tiêu sọ trắng giã dập',
          '1 thìa cà phê dầu mè thơm nguyên chất (rưới lúc tắt bếp)',
        ],
      },
      {
        category: 'Đồ ăn kèm & Nước tương tỏi ớt',
        items: [
          '1 đĩa dưa leo tươi giòn cắt lát xéo, vài cọng ngò rí',
          '1 chén nước tương xì dầu dầm ớt hiểm xắt lát cay nồng',
          '1 bát canh súp sườn hầm rau củ hoặc canh trứng cà chua thanh mát ăn kèm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Chuẩn bị cơm nguội & Kỹ thuật "Kim Bọc Bạc" (Áo lòng đỏ trứng)',
        time: '10 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Hạt cơm tơi xốp, khô se mặt, từng hạt cơm được áo đều lớp lòng đỏ vàng óng ánh không vón cục',
        actionPoints: [
          'Lấy 4 bát cơm nguội từ ngăn mát tủ lạnh ra. Đeo găng tay hoặc dùng muôi bóp nhẹ nhàng cho từng hạt cơm tơi rời nhau hoàn toàn, không còn khối vón.',
          'Cho 2 lòng đỏ trứng gà tươi vào âu cơm, thêm 1 thìa canh mỡ heo (hoặc dầu ăn) và 1 thìa cà phê hạt nêm.',
          'Dùng tay trộn và xoa bóp đều nhẹ nhàng để màng lòng đỏ trứng và mỡ heo bao phủ trọn vẹn bề mặt từng hạt cơm. Lớp áo này giúp hạt cơm vàng ruộm màu mỡ gà, khi chiên với nhiệt lớn lòng đỏ lập tức đông lại tạo độ giòn săn bên ngoài mà bên trong vẫn mềm ngọt dẻo thơm, đặc biệt không bị dính chảo.',
          'Để cơm nghỉ 5 - 10 phút cho trứng và gia vị ngấm đều vào màng tinh bột.',
        ],
        description:
          'Bóp tơi cơm nguội từ tủ lạnh. Trộn đều 2 lòng đỏ trứng gà cùng 1 thìa mỡ heo và hạt nêm vào cơm cho từng hạt cơm áo đều lớp màng vàng kim óng ả.',
        tip: 'Quy chuẩn vàng: Tuyệt đối không dùng cơm nóng mới nấu đem chiên vì nhiều hơi ẩm sẽ làm cơm nhão nhoét. Cơm nấu hơi khô ráo (tỷ lệ 1 gạo:0.85 nước) và để lạnh qua đêm là hoàn hảo nhất.',
      },
      {
        step: 2,
        title: 'Sơ chế lạp xưởng Mai Quế Lộ, tôm nõn, xá xíu & Chần rau củ ngũ sắc ráo nước',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Topping cắt hạt lựu đồng đều 0.6 - 0.8cm, tôm và rau củ thấm khô ráo tuyệt đối để không làm nhão cơm',
        actionPoints: [
          'Cho lạp xưởng Mai Quế Lộ vào chảo cùng 3 thìa canh nước, đun sôi lăn tăn 3 phút cho lạp xưởng chín mềm và tiết bớt lớp mỡ ngấy bên ngoài. Khi cạn nước, lăn đều cho xém vàng thơm, vớt ra cắt hạt lựu 0.6cm.',
          'Tôm tươi bóc vỏ, rút chỉ lưng, rửa nước muối loãng rồi dùng khăn giấy THẤM THẬT KHÔ RÁO (bước tối quan trọng tránh tôm ra nước khi xào), cắt hạt lựu bằng cỡ lạp xưởng. Ướp với 1/3 thìa cà phê tiêu sọ và chút đầu hành băm.',
          'Thịt xá xíu (hoặc giò lụa) cắt hạt lựu vuông vức đồng cỡ.',
          'Đun sôi nồi nước nhỏ pha chút muối và vài giọt dầu ăn, thả cà rốt, ngô ngọt và đậu Hà Lan vào chần nhanh trong 1 phút. Vớt ra thả ngay vào thau nước đá lạnh 3 phút để giữ màu xanh đỏ tươi giòn, sau đó vớt ra để THẬT RÁO NƯỚC.',
        ],
        description:
          'Luộc sơ lạp xưởng rồi cắt hạt lựu. Tôm tươi thấm thật khô ráo cắt hạt lựu ướp tiêu. Xá xíu cắt hạt lựu. Cà rốt và đậu Hà Lan chần nước sôi ngâm đá lạnh giữ màu tươi giòn.',
        tip: 'Quy chuẩn cắt hạt lựu đồng đều các nguyên liệu giúp từng muỗng cơm khi múc lên đều có đủ ngũ sắc rực rỡ và hòa quyện tròn vị.',
      },
      {
        step: 3,
        title: 'Xào riêng nhân thập cẩm trên lửa lớn (Bí quyết cốt tử cơm không bị nhão)',
        time: '5 phút',
        heat: 'Lửa lớn',
        goal: 'Topping tôm, lạp xưởng, xá xíu và rau củ chín tới, săn giòn thơm lừng và ráo nước hoàn toàn',
        actionPoints: [
          'Đặt chảo lên bếp, cho 1 thìa canh mỡ heo vào đun nóng già. Phi thơm 1/2 phần tỏi băm và đầu hành trắng.',
          'Trút tôm vào đảo nhanh tay trên lửa lớn trong 1 phút cho thịt tôm săn lại chuyển màu đỏ hồng ngọt lịm.',
          'Tiếp tục cho lạp xưởng, xá xíu, cà rốt, bắp ngô và đậu Hà Lan vào đảo thật nhanh tay trong 1.5 phút.',
          'Nêm 1 thìa cà phê dầu hào, 1/3 thìa cà phê hạt nêm, đảo đều cho ngấm gia vị rồi TRÚT NGAY TOÀN BỘ RA ĐĨA RIÊNG ĐỂ RÁO NƯỚC.',
          'Bí quyết bất bại: Bắt buộc xào riêng phần nhân này và giữ thật ráo. Tuyệt đối không cho nhân xào chung với cơm từ đầu vì nước ngọt từ tôm và rau củ tiết ra sẽ làm hạt cơm bị ướt, mềm ỉu và mất độ săn giòn.',
        ],
        description:
          'Phi thơm hành tỏi, xào nhanh tôm cùng lạp xưởng, xá xíu, cà rốt, đậu Hà Lan trên lửa lớn trong 2 phút cho dậy mùi thơm lừng, trút ra đĩa riêng để thật ráo nước.',
        tip: 'Xào riêng topping đạm và rau củ là bước phân định giữa cơm chiên nghiệp dư tại nhà và cơm chiên chuẩn đầu bếp nhà hàng Hoa.',
      },
      {
        step: 4,
        title: 'Chiên cơm lửa lớn - Kỹ thuật hạt cơm săn giòn lách tách & Tạo vân trứng ngũ sắc',
        time: '8 phút',
        heat: 'Lửa lớn (Wok nhiệt cao)',
        goal: 'Từng hạt cơm bung tơi, lớp vỏ ngoài săn giòn giòn, bên trong mềm thơm, nhảy múa lách tách trên chảo',
        actionPoints: [
          'Dùng chảo gang hoặc chảo thép sâu lòng, đun thật nóng rực trên bếp lửa lớn. Cho 1.5 thìa canh mỡ heo láng đều khắp lòng chảo.',
          'Phi thơm phần tỏi băm và đầu hành trắng còn lại cho dậy mùi thơm nức.',
          'Trút toàn bộ âu cơm nguội đã áo lòng đỏ trứng vào chảo. Dùng mặt lưng muôi miết nhẹ hạt cơm sang xung quanh lòng chảo để tiếp xúc nhiệt cao làm săn hạt cơm.',
          'Đảo xới liên tục tay trên lửa lớn theo hình tròn. Từng hạt cơm sẽ tách rời nhau mượt mà, hạt cơm khô ráo, săn chắc dần và phát ra tiếng nổ lách tách vui tai trong lòng chảo.',
          'Gạt cơm sang một bên chảo, đổ quả trứng gà đánh tan còn lại vào khoảng trống, dùng đũa khuấy nhanh tay cho trứng chín bông tơi thành các vân trứng nhỏ vụn màu vàng trắng, sau đó xới đảo hòa quyện cùng cơm.',
        ],
        description:
          'Làm nóng chảo mỡ lửa lớn, phi thơm hành tỏi rồi trút cơm áo trứng vào đảo miết đều tay. Hạt cơm khô ráo săn giòn nhảy lách tách thì cho tiếp quả trứng gà đánh tơi tạo vân ngũ sắc.',
        tip: 'Giữ lửa luôn ở mức to và đảo miết đều tay liên tục. Lửa lớn giúp hơi nước bốc nhanh, tạo lớp vỏ cơm giòn rụm bên ngoài mà hạt cơm không bị khô cứng.',
      },
      {
        step: 5,
        title: 'Hòa quyện nhân ngũ sắc, rưới xì dầu tạo mùi khói "Wok Hei" & Hoàn thiện',
        time: '3 phút',
        heat: 'Lửa cực đại',
        goal: 'Cơm chiên Dương Châu bốc khói nghi ngút, dậy mùi khói thơm lừng đặc trưng, màu sắc rực rỡ bắt mắt',
        actionPoints: [
          'Khi hạt cơm đã đạt độ săn giòn hoàn hảo, trút toàn bộ đĩa nhân thập cẩm (lạp xưởng, tôm, xá xíu, cà rốt, đậu Hà Lan) vào chảo cơm.',
          'Đảo đều tay liên tục trong 1 phút trên lửa lớn cho các nguyên liệu ngũ sắc hòa quyện rực rỡ.',
          'Bí quyết tạo mùi khói Wok Hei: Múc 1.5 thìa canh nước tương xì dầu thượng hạng rưới đều men theo vành thành chảo đang nóng đỏ (không đổ trực tiếp lên cơm). Nước tương chảy xuống thành chảo nóng sẽ lập tức bốc khói xèo xèo, tạo nên hương thơm khói caramel đặc trưng của ẩm thực Quảng Đông bao bọc lấy từng hạt cơm.',
          'Nêm thêm 1/2 thìa cà phê đường, rắc tiêu sọ trắng giã dập và rưới 1 thìa cà phê dầu mè thơm nguyên chất.',
          'Cuối cùng, thả toàn bộ hành lá xanh cắt nhỏ vào chảo, đảo đều 20 giây rồi tắt bếp.',
          'Múc cơm chiên Dương Châu nóng hổi ra đĩa, trang trí vài lát dưa leo, cọng ngò rí tươi. Ăn kèm chén nước tương ớt hiểm xắt lát.',
        ],
        description:
          'Trút đĩa nhân thập cẩm vào đảo đều cùng cơm săn giòn. Rưới nước tương men theo thành chảo nóng tạo hương khói Wok Hei trứ danh, rắc tiêu sọ, dầu mè và hành lá rồi múc ra đĩa thưởng thức.',
        tip: 'Kỹ thuật rưới nước tương ven thành chảo nóng thay vì chan trực tiếp lên cơm giúp cơm không bị ỉu ướt mà lại dậy mùi thơm khói ngạt ngào đặc trưng của cơm chiên nhà hàng.',
      },
    ],
    chefSecret:
      '4 bí quyết vàng bất bại để cơm chiên Dương Châu hạt cơm săn giòn, vàng óng chuẩn nhà hàng: 1. Tuyệt chiêu "Kim Bọc Bạc": Dùng cơm nguội để lạnh bóp đều cùng 2 lòng đỏ trứng và 1 thìa mỡ heo trước khi chiên giúp từng hạt cơm tơi xốp, vàng ruộm óng ả, không bao giờ dính vón; 2. Xào riêng topping: Tôm, lạp xưởng Mai Quế Lộ, xá xíu và rau củ bắt buộc xào riêng cho ráo nước rồi mới trút vào cơm cuối cùng để cơm không bị nhão; 3. Chiên lửa lớn đảo đều tay: Tạo tiếng nổ lách tách giúp hạt cơm giòn rụm bên ngoài mà dẻo ngọt bên trong; 4. Rưới xì dầu ven thành chảo tạo mùi khói Wok Hei đậm đà chuẩn vị Quảng Đông.',
    recommendedSauce:
      'Đĩa cơm chiên Dương Châu nóng hổi hạt cơm vàng óng tơi xốp, lấm tấm đỏ hồng của lạp xưởng tôm tươi, xanh mướt của đậu Hà Lan, rắc tiêu thơm lừng ăn kèm đĩa dưa leo giòn mát, chan nhẹ vài thìa nước tương xì dầu ớt hiểm cay xé lưỡi.',
  },

  'com-chien-hai-san': {
    dishId: 'com-chien-hai-san',
    dishName: 'Cơm Chiên Hải Sản Hạt Cơm Săn Giòn, Thơm Ngon Chuẩn Vị',
    seoTitle: 'Cách Làm Cơm Chiên Hải Sản Hạt Cơm Săn Giòn, Thơm Ngon Chuẩn Vị',
    ratingValue: '4.9',
    reviewCount: 412,
    prepTime: '20 phút',
    cookTime: '15 phút',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Cơm nguội & Kỹ thuật "Kim Bọc Bạc" (Áo lòng đỏ vàng kim)',
        items: [
          '4 bát cơm nguội hạt dài (nấu ráo tỷ lệ 1:0.85, để ngăn mát tủ lạnh 4 tiếng)',
          '2 lòng đỏ trứng gà tươi (bóp đều vào cơm tạo màng vàng óng ả)',
          '1 quả trứng gà tươi (đánh tan dùng tạo vân trứng vàng trắng ngũ sắc)',
          '1 thìa canh mỡ heo hoặc dầu ăn ngon (giúp từng hạt cơm tơi xốp tuyệt đối)',
        ],
      },
      {
        category: 'Hải sản tươi ngọt giòn sần sật (Linh hồn món ăn)',
        items: [
          '150g tôm sú tươi (bóc vỏ, rút chỉ đen, thấm thật khô ráo, cắt hạt lựu 1cm)',
          '150g mực ống tươi (làm sạch khử tanh, khía vảy rồng, thấm khô, cắt hạt lựu)',
          '50g cồi sò điệp tươi hoặc chả cá thái hạt lựu (tùy chọn tăng vị ngọt biển)',
        ],
      },
      {
        category: 'Rau củ ngũ sắc tươi ngọt (Thanh mát giải ngấy)',
        items: [
          '1/2 củ cà rốt (gọt vỏ, cắt hạt lựu nhỏ đồng cỡ hạt bắp)',
          '80g đậu Hà Lan tươi hoặc đông lạnh (chần nhanh nước sôi pha muối, ngâm nước đá)',
          '1/2 bắp ngô ngọt tách hạt (chần sơ ráo nước, tăng độ ngọt bùi giòn)',
        ],
      },
      {
        category: 'Gia vị xào thơm & Nước sốt Wok Hei (Tỷ lệ vàng nhà hàng Hoa)',
        items: [
          '3 tép tỏi ta băm nhuyễn',
          '2 củ hành tím khô băm nhỏ',
          '3 nhánh hành lá tươi (phần đầu hành trắng băm phi thơm, lá hành xắt nhỏ)',
          '1.5 thìa canh nước tương xì dầu thượng hạng (rưới quanh thành chảo nóng)',
          '1 thìa cà phê dầu hào',
          '1/2 thìa cà phê đường cát trắng',
          '1 thìa cà phê hạt nêm',
          '1/2 thìa cà phê tiêu sọ trắng giã dập',
          '1 thìa cà phê dầu mè thơm nguyên chất (rưới lúc tắt bếp)',
        ],
      },
      {
        category: 'Đồ ăn kèm & Nước tương tỏi ớt',
        items: [
          '1 đĩa dưa leo tươi giòn cắt lát xéo, cà chua bi, vài cọng ngò rí',
          '1 chén nước tương xì dầu dầm ớt hiểm xắt lát cay nồng',
          '1 bát canh rong biển thịt băm hoặc canh cải ngọt thanh mát ăn kèm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Chuẩn bị cơm nguội & Kỹ thuật "Kim Bọc Bạc" (Áo lòng đỏ trứng)',
        time: '10 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Hạt cơm tơi xốp, khô se mặt, từng hạt cơm được áo đều lớp lòng đỏ vàng óng ánh không vón cục',
        actionPoints: [
          'Lấy 4 bát cơm nguội từ ngăn mát tủ lạnh ra. Đeo găng tay hoặc dùng muôi bóp nhẹ nhàng cho từng hạt cơm tơi rời nhau hoàn toàn, không còn khối vón cục.',
          'Cho 2 lòng đỏ trứng gà tươi vào âu cơm, thêm 1 thìa canh mỡ heo (hoặc dầu ăn) và 1 thìa cà phê hạt nêm.',
          'Dùng tay trộn và xoa bóp nhẹ nhàng đều tay để màng lòng đỏ trứng bao phủ trọn vẹn bề mặt từng hạt cơm. Lớp áo này giúp hạt cơm vàng ruộm màu mỡ gà, khi chiên với nhiệt lớn lòng đỏ lập tức đông lại tạo độ giòn săn bên ngoài mà bên trong vẫn mềm ngọt dẻo thơm, đặc biệt không bị dính chảo.',
          'Để cơm nghỉ 5 - 10 phút cho trứng và gia vị ngấm đều vào màng tinh bột.',
        ],
        description:
          'Bóp tơi cơm nguội từ tủ lạnh. Trộn đều 2 lòng đỏ trứng gà cùng 1 thìa mỡ heo và hạt nêm vào cơm cho từng hạt cơm áo đều lớp màng vàng kim óng ả.',
        tip: 'Quy chuẩn vàng: Tuyệt đối không dùng cơm nóng mới nấu đem chiên vì nhiều hơi ẩm sẽ làm cơm nhão nhoét. Cơm nấu hơi khô ráo (tỷ lệ 1 gạo:0.85 nước) và để lạnh qua đêm là hoàn hảo nhất.',
      },
      {
        step: 2,
        title: 'Sơ chế hải sản tôm mực khử tanh, thấm thật khô ráo & Chần rau củ ngũ sắc',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Hải sản tôm mực khử sạch mùi tanh, thấm khô ráo tuyệt đối để không ra nước khi xào, rau củ giòn ngọt',
        actionPoints: [
          'Tôm sú tươi lột vỏ, bỏ đầu, rạch lưng rút sạch chỉ đen, rửa nước muối loãng pha chút gừng đập dập. Dùng khăn giấy chuyên dụng THẤM THẬT KHÔ RÁO TUYỆT ĐỐI (bước sống còn tránh hải sản ra nước làm nhão cơm), cắt hạt lựu vuông vức ~1cm.',
          'Mực ống làm sạch ruột và túi mực, lột màng ngoài, bóp qua chút rượu trắng và gừng để khử tanh, rửa sạch rồi dùng khăn giấy THẤM THẬT KHÔ RÁO. Khía nhẹ vảy rồng trên thân mực rồi cắt hạt lựu đồng cỡ với tôm.',
          'Ướp tôm và mực với 1/3 thìa cà phê tiêu sọ trắng, 1/2 thìa cà phê hạt nêm và 1 thìa cà phê đầu hành trắng băm nhuyễn trong 10 phút.',
          'Đun sôi nồi nước nhỏ pha chút muối và vài giọt dầu ăn, thả cà rốt, bắp ngô và đậu Hà Lan vào chần nhanh trong 1 phút. Vớt ra thả ngay vào thau nước đá lạnh 3 phút để giữ màu xanh đỏ tươi giòn, sau đó vớt ra để THẬT RÁO NƯỚC.',
        ],
        description:
          'Tôm mực làm sạch khử tanh, dùng khăn giấy thấm thật khô ráo rồi cắt hạt lựu ướp tiêu. Cà rốt, ngô ngọt và đậu Hà Lan chần nước sôi ngâm đá lạnh giữ màu tươi giòn.',
        tip: 'Thấm thật khô ráo tôm mực trước khi xào là bí quyết sống còn giúp hải sản săn giòn, ngọt thịt mà không làm chảy nước ướt nhão đĩa cơm chiên.',
      },
      {
        step: 3,
        title: 'Xào riêng hải sản trên lửa cực đại (Bí quyết cốt tử cơm không bị nhão)',
        time: '5 phút',
        heat: 'Lửa lớn',
        goal: 'Tôm mực chín tới, săn giòn thơm phức, ửng hồng mọng nước và ráo nước hoàn toàn',
        actionPoints: [
          'Đặt chảo lên bếp, cho 1 thìa canh mỡ heo hoặc dầu ăn vào đun nóng già. Phi thơm 1/2 phần tỏi băm và đầu hành trắng.',
          'Trút tôm và mực vào đảo thật nhanh tay trên lửa lớn trong 1.5 phút cho hải sản săn lại chuyển màu đỏ hồng ngọt lịm và dậy mùi thơm nức.',
          'Tiếp tục cho cà rốt, bắp ngô và đậu Hà Lan vào đảo nhanh tay thêm 1 phút.',
          'Nêm 1 thìa cà phê dầu hào, 1/3 thìa cà phê hạt nêm, đảo đều cho ngấm gia vị rồi TRÚT NGAY TOÀN BỘ RA ĐĨA RIÊNG ĐỂ RÁO NƯỚC.',
          'Bí quyết bất bại: Bắt buộc xào riêng phần hải sản này và giữ thật ráo nước. Tuyệt đối không xào chung hải sản với cơm từ đầu vì nước ngọt từ tôm mực và rau củ tiết ra sẽ làm hạt cơm bị ướt, mềm ỉu và mất hoàn toàn độ săn giòn.',
        ],
        description:
          'Phi thơm hành tỏi, xào nhanh tôm mực cùng rau củ trên lửa lớn trong 2 phút cho vừa chín tới săn giòn, trút ra đĩa riêng để thật ráo nước.',
        tip: 'Xào riêng topping hải sản và rau củ là bước phân định giữa cơm chiên nghiệp dư tại nhà và cơm chiên chuẩn đầu bếp nhà hàng.',
      },
      {
        step: 4,
        title: 'Chiên cơm lửa lớn - Kỹ thuật hạt cơm săn giòn lách tách & Tạo vân trứng ngũ sắc',
        time: '8 phút',
        heat: 'Lửa lớn (Wok nhiệt cao)',
        goal: 'Từng hạt cơm bung tơi, lớp vỏ ngoài săn giòn giòn, bên trong mềm thơm, nhảy múa lách tách trên chảo',
        actionPoints: [
          'Dùng chảo gang hoặc chảo thép sâu lòng, đun thật nóng rực trên bếp lửa lớn. Cho 1.5 thìa canh mỡ heo láng đều khắp lòng chảo.',
          'Phi thơm phần tỏi băm và đầu hành trắng còn lại cho dậy mùi thơm nức.',
          'Trút toàn bộ âu cơm nguội đã áo lòng đỏ trứng vào chảo. Dùng mặt lưng muôi miết nhẹ hạt cơm sang xung quanh lòng chảo để tiếp xúc nhiệt cao làm săn hạt cơm.',
          'Đảo xới liên tục tay trên lửa lớn theo hình tròn. Từng hạt cơm sẽ tách rời nhau mượt mà, hạt cơm khô ráo, săn chắc dần và phát ra tiếng nổ lách tách vui tai trong lòng chảo.',
          'Gạt cơm sang một bên chảo, đổ quả trứng gà đánh tan còn lại vào khoảng trống, dùng đũa khuấy nhanh tay cho trứng chín bông tơi thành các vân trứng nhỏ vụn màu vàng trắng, sau đó xới đảo hòa quyện cùng cơm.',
        ],
        description:
          'Làm nóng chảo mỡ lửa lớn, phi thơm hành tỏi rồi trút cơm áo trứng vào đảo miết đều tay. Hạt cơm khô ráo săn giòn nhảy lách tách thì cho tiếp quả trứng gà đánh tơi tạo vân ngũ sắc.',
        tip: 'Giữ lửa luôn ở mức to và đảo miết đều tay liên tục. Lửa lớn giúp hơi nước bốc nhanh, tạo lớp vỏ cơm giòn rụm bên ngoài mà hạt cơm không bị khô cứng.',
      },
      {
        step: 5,
        title: 'Hòa quyện hải sản ngũ sắc, rưới xì dầu tạo mùi khói "Wok Hei" & Hoàn thiện',
        time: '3 phút',
        heat: 'Lửa cực đại',
        goal: 'Cơm chiên hải sản bốc khói nghi ngút, dậy mùi khói thơm lừng đặc trưng, hạt cơm săn giòn bóng bẩy',
        actionPoints: [
          'Khi hạt cơm đã đạt độ săn giòn hoàn hảo, trút toàn bộ đĩa hải sản tôm mực và rau củ ngũ sắc vào chảo cơm.',
          'Đảo đều tay liên tục trong 1 phút trên lửa lớn cho các nguyên liệu ngũ sắc hòa quyện rực rỡ.',
          'Bí quyết tạo mùi khói Wok Hei: Múc 1.5 thìa canh nước tương xì dầu thượng hạng rưới đều men theo vành thành chảo đang nóng đỏ (không đổ trực tiếp lên cơm). Nước tương chảy xuống thành chảo nóng sẽ lập tức bốc khói xèo xèo, tạo nên hương thơm khói caramel đặc trưng bao bọc lấy từng hạt cơm.',
          'Nêm thêm 1/2 thìa cà phê đường, rắc tiêu sọ trắng giã dập và rưới 1 thìa cà phê dầu mè thơm nguyên chất.',
          'Cuối cùng, thả toàn bộ hành lá xanh cắt nhỏ vào chảo, đảo đều 20 giây rồi tắt bếp.',
          'Múc cơm chiên hải sản nóng hổi ra đĩa, trang trí vài con tôm đỏ au lên trên, rắc cọng ngò rí tươi. Ăn kèm chén nước tương ớt hiểm xắt lát.',
        ],
        description:
          'Trút đĩa hải sản rau củ vào đảo đều cùng cơm săn giòn. Rưới nước tương men theo thành chảo nóng tạo hương khói Wok Hei trứ danh, rắc tiêu sọ, dầu mè và hành lá rồi múc ra đĩa thưởng thức.',
        tip: 'Kỹ thuật rưới nước tương ven thành chảo nóng thay vì chan trực tiếp lên cơm giúp cơm không bị ỉu ướt mà lại dậy mùi thơm khói ngạt ngào đặc trưng của cơm chiên nhà hàng.',
      },
    ],
    chefSecret:
      '4 bí quyết vàng bất bại để cơm chiên hải sản hạt cơm săn giòn, thơm nức mũi chuẩn nhà hàng: 1. Tuyệt chiêu "Kim Bọc Bạc": Dùng cơm nguội để lạnh bóp đều cùng 2 lòng đỏ trứng và 1 thìa mỡ heo trước khi chiên giúp từng hạt cơm tơi xốp, vàng ruộm óng ả, không bao giờ dính vón; 2. Thấm thật khô và xào riêng hải sản: Tôm và mực bắt buộc thấm ráo nước hoàn toàn và xào riêng lửa lớn trút ra đĩa để ráo nước trước khi cho vào cơm, tránh tiết nước làm nhão cơm; 3. Chiên lửa lớn đảo đều tay: Tạo tiếng nổ lách tách giúp hạt cơm giòn rụm bên ngoài mà dẻo ngọt bên trong; 4. Rưới xì dầu ven thành chảo tạo mùi khói Wok Hei đậm đà chuẩn vị Quảng Đông.',
    recommendedSauce:
      'Đĩa cơm chiên hải sản nóng hổi hạt cơm vàng óng tơi xốp, điểm xuyết màu đỏ hồng của tôm tươi, trắng ngần của mực giòn sần sật, xanh mướt của đậu Hà Lan, rắc tiêu sọ thơm lừng ăn kèm đĩa dưa leo giòn mát, chan nhẹ vài thìa nước tương xì dầu ớt hiểm cay xé lưỡi.',
  },

  'com-ga-quay-xe-phay': {
    dishId: 'com-ga-quay-xe-phay',
    dishName: 'Cơm Gà Quay Sốt Mật Thơm Ngon Đậm Đà Chuẩn Quán',
    seoTitle: 'Cách Làm Cơm Gà Quay Sốt Mật Thơm Ngon Đậm Đà Chuẩn Quán',
    ratingValue: '4.7',
    reviewCount: 356,
    prepTime: '30 phút (khử tanh, xăm thịt & ướp sốt)',
    cookTime: '35 phút (quay gà 2 lửa & nấu cơm mỡ gà)',
    difficulty: 'Trung bình',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Đùi gà góc tư tươi ngon & Khử tanh da gà',
        items: [
          '3 - 4 góc đùi gà tươi (~1kg - 1.2kg, chọn phần thịt dày, da gà căng bóng)',
          '1 củ gừng tươi giã dập, 2 thìa canh rượu trắng, 1 thìa canh muối hạt',
          '1 thìa canh giấm gạo pha 1 thìa mật ong (quét sơ giúp da gà căng bóng giòn)',
        ],
      },
      {
        category: 'Nước sốt ướp gà quay mật ong đậm đà chuẩn quán (Tỷ lệ vàng)',
        items: [
          '2.5 thìa canh mật ong hoa cà phê nguyên chất',
          '2 thìa canh dầu hào Maggi thượng hạng',
          '2 thìa canh nước tương xì dầu nhất phẩm',
          '1 thìa cà phê bột ngũ vị hương thơm lừng (không cho quá nhiều làm đắng)',
          '1 thìa canh dầu màu điều (tạo sắc nâu cánh gián vàng óng ả)',
          '1 thìa cà phê tiêu sọ trắng xay nhuyễn',
          '3 củ hành tím khô & 4 tép tỏi ta băm vắt lấy nước cốt (tránh cháy xém khi quay)',
          '1 thìa cà phê hạt nêm, 1/2 thìa cà phê bột tỏi',
        ],
      },
      {
        category: 'Gạo thơm nấu cơm dẻo bằng nước luộc mỡ gà',
        items: [
          '2.5 bát gạo thơm hạt dài (gạo ST25 hoặc Nàng Thơm Chợ Đào)',
          'Nước luộc xương gà hoặc nước dùng gà thanh ngọt',
          '1 thìa canh mỡ gà phi thơm cùng tỏi và hành tím đập dập',
          '1/3 thìa cà phê bột nghệ vàng (hoặc nước cốt nghệ tươi tạo màu mỡ gà tự nhiên)',
          '1/2 thìa cà phê muối tinh',
        ],
      },
      {
        category: 'Nước sốt gà quay sánh kẹo rưới cơm',
        items: [
          'Phần nước sốt ướp gà tiết ra khi quay trong lò hoặc nồi chiên',
          '1 thìa canh nước tương, 1 thìa canh mật ong, 1/2 thìa dầu hào',
          '1 thìa cà phê bột năng hòa tan cùng 2 thìa canh nước lọc (tạo độ sánh gương)',
        ],
      },
      {
        category: 'Đồ ăn kèm tươi mát & Nước chấm',
        items: [
          '1 đĩa đồ chua cà rốt củ cải trắng ngâm chua ngọt',
          '1 đĩa dưa leo cắt lát, cà chua bi tươi giòn, rau răm thơm nồng',
          '1 chén tương ớt rim cay ngọt hoặc nước tương xì dầu tỏi ớt xắt',
          '1 bát canh súp nước luộc gà rắc hành hoa thanh mát',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế đùi gà, khử mùi tanh & Kỹ thuật giữ da căng bóng giòn',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Gà sạch hoàn toàn mùi hôi, da gà căng bóng ráo nước, thịt đùi được xăm nhẹ để ngấm sâu gia vị',
        actionPoints: [
          'Đùi gà góc tư mua về nhặt sạch lông tơ còn sót lại, bóp kỹ với muối hạt, gừng tươi giã dập và 2 thìa canh rượu trắng trong 5 phút để khử sạch hoàn toàn mùi tanh hôi đặc trưng của gà công nghiệp.',
          'Rửa lại gà thật sạch với nước lạnh. Dùng dao nhọn xăm nhẹ nhiều lỗ nhỏ ở mặt trong thớ thịt (mặt có xương) để gia vị dễ dàng thẩm thấu sâu vào tận lõi xương. Lưu ý: Tuyệt đối không xăm vào mặt da ngoài để khi quay da gà không bị rách hay co dúm.',
          'Bí quyết da căng bóng: Đun sôi một nồi nước nhỏ với 1 thìa giấm gạo và 1 thìa mật ong. Cầm đầu đùi gà dội đều nước sôi lên bề mặt da gà trong 10 - 15 giây cho lớp da co lại, căng bóng mượt mà. Vớt ra dùng khăn giấy bếp THẤM THẬT KHÔ RÁO bề mặt da gà.',
        ],
        description:
          'Khử tanh đùi gà với muối gừng và rượu trắng. Xăm nhẹ mặt dưới thớ thịt, dội nước sôi pha giấm mật ong lên bề mặt da gà rồi thấm thật khô ráo.',
        tip: 'Lớp da gà càng khô ráo trước khi quay thì khi nướng xong da gà càng căng bóng, nổ giòn và màu cánh gián lên càng rực rỡ.',
      },
      {
        step: 2,
        title: 'Pha sốt mật ong ngũ vị & Kỹ thuật ướp gà không bị cháy sém',
        time: '30 phút',
        heat: 'Ướp ngăn mát tủ lạnh',
        goal: 'Thịt gà ngấm đượm sốt mật ong thơm lừng ngũ vị, bề mặt da khô se mặt',
        actionPoints: [
          'Chuẩn bị âu sốt ướp: Cho 2.5 thìa mật ong, 2 thìa dầu hào, 2 thìa nước tương, 1 thìa cà phê bột ngũ vị hương, 1 thìa canh dầu màu điều, tiêu sọ trắng, hạt nêm, bột tỏi và nước cốt hành tỏi băm (vắt bỏ bã xác hành tỏi để khi nướng không bị cháy khét đắng). Khuấy thật đều cho sốt sánh mịn.',
          'Thoa đều 2/3 lượng nước sốt vào mặt trong thớ thịt của từng miếng đùi gà, mát-xa nhẹ nhàng cho gia vị len lỏi vào các vết xăm.',
          'Chừa mặt da phía trên: Chỉ xoa nhẹ một lớp dầu màu điều rất mỏng lên da, tránh bôi nhiều mật ong lên da ngay từ đầu vì đường trong mật ong sẽ làm cháy đen da trước khi thịt gà bên trong kịp chín.',
          'Đặt đùi gà lên khay (úp phần thịt xuống, ngửa phần da lên), để hở trong ngăn mát tủ lạnh từ 30 - 45 phút cho thịt ngấm sâu và quạt gió tủ lạnh làm khô se mặt da.',
        ],
        description:
          'Pha hỗn hợp sốt mật ong dầu hào ngũ vị hương cùng nước cốt hành tỏi. Ướp đều mặt trong thịt gà, giữ mặt da khô ráo rồi để ngăn mát 30 phút.',
        tip: 'Chỉ ướp nước cốt hành tỏi, không để bã hành tỏi dính trên da vì khi nướng ở nhiệt cao bã hành tỏi sẽ cháy khét thành đốm đen làm đắng món ăn.',
      },
      {
        step: 3,
        title: 'Nấu cơm gà nước dùng mỡ gà hạt dẻo vàng óng ánh',
        time: '25 phút',
        heat: 'Nồi cơm điện hoặc nấu chảo',
        goal: 'Hạt cơm nở đều, tơi xốp, thơm béo ngậy mỡ gà và có màu vàng ươm mỡ gà tự nhiên',
        actionPoints: [
          'Vo sạch gạo thơm để ráo nước 10 phút.',
          'Đặt chảo nhỏ lên bếp, cho 1 thìa canh mỡ gà vào đun chảy, phi thơm hành tím và tỏi đập dập. Trút gạo đã ráo vào chảo đảo xào nhẹ tay trên lửa nhỏ khoảng 3 phút cho từng hạt gạo se lại và bao phủ một lớp màng mỡ gà bóng bẩy.',
          'Hòa tan 1/3 thìa cà phê bột nghệ vào nước luộc xương gà (hoặc nước hầm gà thanh ngọt).',
          'Trút gạo đã xào vào nồi cơm điện, đổ nước dùng gà pha nghệ vào xăm xắp mặt gạo (tỷ lệ 1 gạo : 1.1 nước), thêm 1/2 thìa cà phê muối. Bật nút nấu chín tự nhiên.',
          'Khi cơm chín bật nút giữ ấm, dùng đũa xới tơi hạt cơm. Hạt cơm chín tới dẻo ngọt, thơm lừng hương mỡ gà và vàng ươm óng ả bắt mắt.',
        ],
        description:
          'Xào gạo ráo cùng mỡ gà phi hành tỏi cho se hạt. Nấu cơm bằng nước luộc gà pha chút nghệ cho hạt cơm vàng óng ả, dẻo thơm béo ngậy chuẩn quán.',
        tip: 'Xào gạo với mỡ gà trước khi nấu giúp hạt cơm chín không bị nát, giữ trọn phom hạt cơm căng bóng và dẻo bùi chuẩn phong vị cơm gà Hải Nam / Quảng Đông.',
      },
      {
        step: 4,
        title: 'Quay gà 2 lửa chuẩn nhiệt - Da nổ giòn bóng bẩy & Nấu sốt mật ong rưới cơm',
        time: '35 phút',
        heat: 'Lần 1: 180°C - Lần 2: 215°C',
        goal: 'Thịt gà chín mềm mọng nước không khô, da gà giòn rụm bóng bẩy màu cánh gián, sốt mật sánh kẹo óng ả',
        actionPoints: [
          'Làm nóng lò nướng hoặc nồi chiên không dầu ở nhiệt độ 180°C trong 5 phút.',
          'Quay lần 1 (Chín thấu thịt): Đặt đùi gà lên vỉ nướng, quay ở nhiệt độ 180°C trong 22 - 25 phút để phần thịt bên trong chín mềm từ từ, mỡ thừa dưới da gà nhỏ giọt xuống khay hứng bên dưới.',
          'Pha hỗn hợp quét da: Lấy phần nước sốt mật ong còn lại trộn cùng 1 thìa mật ong tươi và 1 thìa dầu màu điều.',
          'Quay lần 2 (Lên màu giòn da): Lấy gà ra, dùng chổi quét đều một lớp sốt mật ong óng ánh lên toàn bộ mặt da gà. Tăng nhiệt độ lò lên 215°C - 220°C, nướng tiếp trong 8 - 10 phút. Quan sát thấy lớp da gà phồng rộp nhẹ, nổ li ti màu nâu đỏ cánh gián óng ánh thì lấy ra ngay.',
          'Nấu nước sốt gà quay: Thu lại phần nước cốt gà và gia vị chảy xuống khay nướng cho vào nồi nhỏ, thêm 1 thìa nước tương, 1 thìa mật ong, đun sôi lăn tăn rồi xuống chút bột năng pha loãng đảo đều đến khi nước sốt sánh kẹo, bóng loáng.',
        ],
        description:
          'Nướng gà lần 1 ở 180°C trong 25 phút cho chín thấu. Quét sốt mật ong dầu điều lên da, nướng lần 2 ở 215°C trong 10 phút cho da nổ giòn bóng bẩy. Nấu nước sốt sánh kẹo đậm đà.',
        tip: 'Quy tắc nướng 2 lửa là bí mật của các quán cơm gà quay trứ danh: Lửa vừa làm thịt chín ngọt mềm, lửa lớn quét mật ong làm da nổ giòn rụm màu cánh gián mà không bị khô thịt.',
      },
      {
        step: 5,
        title: 'Chặt gà quay, xới cơm dẻo, rưới sốt mật & Thưởng thức trọn vị',
        time: '5 phút',
        heat: 'Dùng nóng hổi',
        goal: 'Đĩa cơm gà quay sốt mật vàng rực rỡ, thịt gà chặt miếng vuông vức da giòn bóng, cơm dẻo thơm nức mũi',
        actionPoints: [
          'Để đùi gà quay nghỉ trên thớt 5 phút cho thớ thịt ổn định nước ngọt bên trong, dùng dao bén chặt dứt khoát thành từng miếng vừa ăn (khoảng 4 - 5 miếng/đùi góc tư).',
          'Nén cơm gà vàng óng vào bát con rồi úp tròn trịa ra giữa đĩa lớn.',
          'Xếp từng miếng gà quay da giòn bóng bẩy cạnh phần cơm.',
          'Dùng muôi rưới nước sốt mật ong sánh kẹo óng ả lên bề mặt thịt gà và chan nhẹ một chút lên cơm.',
          'Bày đồ chua cà rốt củ cải, vài lát dưa leo giòn mát, cà chua bi và vài nhánh rau răm thơm nồng bên cạnh.',
          'Thưởng thức ngay khi còn nóng hổi cùng bát canh súp luộc gà và chén nước tương ớt hiểm cay xé lưỡi.',
        ],
        description:
          'Chặt đùi gà quay thành từng miếng vừa ăn, xếp cạnh đĩa cơm vàng óng. Rưới đẫm nước sốt mật ong sánh kẹo, trang trí đồ chua, dưa leo, rau răm và thưởng thức kèm chén súp nóng.',
        tip: 'Để gà nguội bớt 5 phút trước khi chặt giúp lớp da giòn không bị bung tuột khỏi miếng thịt, giữ phom miếng gà đẹp mắt nguyên vẹn.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng tạo nên món cơm gà quay sốt mật chuẩn quán: 1. Dội nước sôi pha giấm mật ong lên da gà và thấm thật khô trước khi ướp giúp lớp da căng bóng, khi nướng da nổ giòn rụm mà không bị dai; 2. Nướng 2 lửa: Lần 1 nướng 180°C cho thịt chín ngọt mềm ráo mỡ, lần 2 tăng nhiệt 215°C quét sốt mật ong giúp da lên màu cánh gián óng ả không bị khét; 3. Nấu cơm bằng gạo xào mỡ gà và nước dùng gà nghệ giúp hạt cơm dẻo thơm béo bùi, vàng ruộm từng hạt chuẩn vị cơm gà nhà hàng.',
    recommendedSauce:
      'Nước sốt mật ong ngũ vị sánh kẹo nâu cánh gián rưới đẫm lên từng thớ thịt gà mọng nước, hòa cùng chén nước tương xì dầu tỏi ớt hiểm cay the ấm nồng và bát canh súp gà ngọt thanh đậm vị.',
  },

  'com-suon-cay-thai-lan': {
    dishId: 'com-suon-cay-thai-lan',
    dishName: 'Cơm Sườn Cay Thơm Ngon Đậm Đà Chuẩn Quán',
    seoTitle: 'Cách Làm Cơm Sườn Cay Thơm Ngon Đậm Đà Chuẩn Quán',
    ratingValue: '4.9',
    reviewCount: 428,
    prepTime: '25 phút (khử tanh, chần sườn & giã ớt)',
    cookTime: '50 phút (ninh sườn mềm rục & pha sốt cay)',
    difficulty: 'Trung bình',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Sườn heo cụm to & Khử sạch mùi hôi',
        items: [
          '1kg sườn heo cây / sườn tảng non (chọn phần nhiều thịt, tươi hồng)',
          '1 củ gừng tươi giã dập, 2 thìa canh rượu trắng, 1 thìa canh muối hạt',
          '2 thìa canh giấm gạo (chần sườn giúp sườn sạch bọt bẩn và nhanh mềm)',
        ],
      },
      {
        category: 'Thảo mộc hầm sườn ngọt thanh nước dùng',
        items: [
          '1 củ hành tây bổ đôi nướng xém, 5 củ hành tím khô đập dập',
          '5 rễ ngò rí (mùi tàu) rửa sạch đất (linh hồn tạo mùi thơm nước hầm)',
          '1 thìa cà phê tiêu sọ trắng giã dập, 1 thìa canh muối hạt',
        ],
      },
      {
        category: 'Bí quyết Nước sốt ớt hiểm ngò gai cay nồng ngạt ngào (Sốt Thái)',
        items: [
          '60g - 80g ớt hiểm xanh & ớt hiểm đỏ tươi (đập giã nhẹ, không băm nát)',
          '1 bó ngò gai (mùi tàu) xắt nhỏ, 1/2 bó ngò rí tươi xắt nhỏ',
          '1.5 bát nước dùng hầm sườn heo trong veo',
          '3 thìa canh nước mắm ngon thượng hạng, 2 thìa canh nước cốt chanh tươi',
          '1.5 thìa canh đường thốt nốt (hoặc đường cát), 1 thìa cà phê hạt nêm',
          '4 tép tỏi ta băm nhuyễn',
        ],
      },
      {
        category: 'Cơm trắng dẻo thơm & Đồ ăn kèm',
        items: [
          '3 bát cơm trắng nấu dẻo hạt (gạo ST25 hoặc Jasmine)',
          '1 đĩa dưa leo cắt lát, cà chua bi, vài nhánh ngò rí tươi',
          '1 bát nước dùng ninh sườn nóng hổi rắc ngò gai thanh ngọt',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế sườn heo, khử mùi hôi & Chần sườn sạch tinh',
        time: '15 phút',
        heat: 'Lửa lớn',
        goal: 'Sườn heo sạch hoàn toàn mùi hôi, miếng sườn trắng sạch bọt bẩn để nước hầm trong veo',
        actionPoints: [
          'Sườn heo mua về chặt khúc lớn khoảng 8 - 10cm (hoặc để nguyên cụm sườn cây lớn). Bóp kỹ sườn với muối hạt, gừng giã dập và 2 thìa canh rượu trắng trong 5 phút để khử mùi hôi.',
          'Đun sôi nồi nước lớn với 2 thìa canh giấm gạo và 1/2 thìa muối. Thả sườn vào chần sôi bùng trong 2 - 3 phút cho nổi toàn bộ bọt bẩn và tiết thừa ra ngoài.',
          'Vớt sườn ra lập tức xả rửa lại thật sạch dưới vòi nước lạnh, cọ rửa kỹ từng kẽ xương cho miếng sườn trắng sạch tinh.',
        ],
        description:
          'Khử tanh sườn heo bằng gừng và rượu trắng. Chần sườn trong nước sôi pha giấm muối 3 phút rồi xả rửa lại dưới vòi nước lạnh cho sạch tinh bọt bẩn.',
        tip: 'Chần sườn kỹ giúp loại bỏ hoàn toàn bọt bẩn, khi ninh nước hầm sẽ trong veo, ngọt thanh và sườn thơm ngon tuyệt đối.',
      },
      {
        step: 2,
        title: 'Ninh sườn mềm rục róc xương & Nấu nước hầm ngọt thanh thảo mộc',
        time: '45 phút',
        heat: 'Lửa vừa nhỏ',
        goal: 'Thịt sườn chín mềm rục róc xương nhưng không bị nát, nước hầm thơm lừng rễ ngò rí và hành tây',
        actionPoints: [
          'Đun sôi 2.5 lít nước trong nồi lớn. Thả hành tây nướng xém, 5 củ hành tím đập dập, 5 rễ ngò rí và tiêu sọ trắng giã dập vào.',
          'Khi nước sôi bùng, thả toàn bộ sườn heo đã sạch vào nồi. Nêm 1 thìa canh muối hạt.',
          'Khi nồi sườn sôi trở lại, hạ lửa vừa nhỏ, hớt sạch bọt trắng nổi lên mặt. Đậy vung hờ ninh trong 40 - 45 phút cho thịt sườn chín mềm nhừ róc xương.',
          'Thử độ chín: Dùng đũa đâm nhẹ thấy xiên qua thớ thịt dễ dàng, thịt mềm rục nhưng vẫn bám chắc trên thanh xương là đạt.',
        ],
        description:
          'Ninh sườn heo với hành tây nướng, rễ ngò rí và tiêu sọ trên lửa vừa nhỏ trong 45 phút. Hớt bọt liên tục cho nước dùng ngọt thanh trong veo và thịt sườn mềm rục.',
        tip: 'Nêm rễ ngò rí rửa sạch vào nồi nước hầm sườn là bí quyết tạo nên hương vị thơm dịu đặc trưng chuẩn phong vị sườn cay trứ danh.',
      },
      {
        step: 3,
        title: 'Pha nước sốt ớt hiểm ngò gai chua cay nồng nàn (Linh hồn món sườn cay)',
        time: '10 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Hỗn hợp sốt sườn cay đậm đà vị mặn ngọt chua cay đan xen ngạt ngào hương ngò gai và ớt hiểm',
        actionPoints: [
          'Cho ớt hiểm xanh và đỏ vào cối đập giã dập nhẹ (không giã nát quá để sốt giữ màu rực rỡ và độ cay nồng vừa phải).',
          'Trong âu lớn, múc 1.5 bát nước dùng hầm sườn heo nóng hổi.',
          'Thêm 3 thìa canh nước mắm ngon, 2 thìa canh nước cốt chanh tươi, 1.5 thìa canh đường thốt nốt, 1 thìa cà phê hạt nêm và tỏi băm nhuyễn vào. Khuấy đều cho đường tan hoàn toàn.',
          'Nếm thử nước sốt: Đạt chuẩn là vị đậm đà mặn ngọt hài hòa, chua thanh dịu nhẹ và cay the bùng nổ vị giác.',
          'Cho toàn bộ ớt hiểm giã dập, ngò gai thái nhỏ và ngò rí vào âu sốt khuấy đều.',
        ],
        description:
          'Giã dập ớt hiểm xanh đỏ. Pha nước hầm sườn cùng nước mắm, nước cốt chanh, đường thốt nốt, tỏi băm và ngò gai xắt nhỏ tạo hỗn hợp sốt chua cay đậm đà.',
        tip: 'Luôn cho nước cốt chanh vào cuối cùng khi nước dùng đã nguội bớt để giữ trọn vị chua thanh tươi mát và không bị đắng.',
      },
      {
        step: 4,
        title: 'Xếp sườn heo mọng nước & Rưới sốt ớt hiểm cay nồng ngạt ngào',
        time: '5 phút',
        heat: 'Lửa vừa',
        goal: 'Khối sườn mềm rục ngập tràn nước sốt ớt hiểm xanh đỏ rực rỡ bốc khói ngào ngạt',
        actionPoints: [
          'Dùng kẹp gắp từng cụm sườn heo chín mềm nhừ ra đĩa sâu lòng (hoặc xếp đan xen chồng lên nhau thành tháp sườn cay bắt mắt).',
          'Đun nóng nhẹ âu nước sốt ớt hiểm ngò gai trên bếp khoảng 1 phút cho dậy mùi thơm phức.',
          'Dùng muôi múc rưới đẫm nước sốt ớt hiểm cùng ngò gai xanh mướt lên khắp các bề mặt cụm sườn heo.',
          'Chan thêm 2 - 3 muỗng nước sốt xuống lòng đĩa cho sườn ngập đẫm gia vị.',
        ],
        description:
          'Xếp cụm sườn heo mềm rục ra đĩa sâu lòng. Múc rưới đẫm nước sốt ớt hiểm ngò gai nóng hổi lên khắp bề mặt sườn heo.',
        tip: 'Rưới sốt khi nước sốt đang ấm nóng giúp thịt sườn hút trọn vị chua cay mặn ngọt vào từng thớ thịt mềm ngọt.',
      },
      {
        step: 5,
        title: 'Trình bày cơm trắng nóng hổi & Thưởng thức trọn vị chuẩn quán',
        time: '5 phút',
        heat: 'Dùng nóng hổi',
        goal: 'Đĩa cơm sườn cay thơm phức, thịt sườn mềm róc xương đậm đà, ăn cùng cơm dẻo và dưa leo mát lạnh',
        actionPoints: [
          'Múc cơm trắng nóng hổi ra đĩa lớn.',
          'Xếp cụm sườn cay đậm đà ngập sốt bên cạnh phần cơm.',
          'Bày vài lát dưa leo giòn mát, cà chua bi và vài nhánh ngò rí tươi trang trí.',
          'Chan thêm vài thìa nước sốt ớt hiểm cay nồng lên cơm trắng.',
          'Thưởng thức ngay khi còn nóng hổi. Dùng tay gỡ từng thớ thịt sườn mềm rục róc xương, chấm đẫm nước sốt chua cay xé lưỡi ăn kèm cơm dẻo và ly trà chanh mát lạnh.',
        ],
        description:
          'Xới cơm trắng nóng hổi ra đĩa, đặt cụm sườn cay mềm rục đẫm sốt bên cạnh. Chan nhẹ nước sốt ớt hiểm, dùng nóng cùng dưa leo giòn mát.',
        tip: 'Ăn kèm dưa leo tươi giòn xắt lát và ly trà chanh mát lạnh giúp cân bằng hoàn hảo vị cay nồng của sốt ớt hiểm.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng bất bại để làm cơm sườn cay ngon chuẩn quán: 1. Khử hôi & chần sườn kỹ: Bóp gừng rượu và chần sườn với nước sôi giấm muối giúp nước hầm ngọt thanh trong veo, không hôi; 2. Ninh sườn cùng rễ ngò rí và hành tây nướng: Giúp thịt sườn mềm rục róc xương và dậy mùi thơm thảo mộc dịu nhẹ; 3. Nước sốt ớt hiểm ngò gai chuẩn vị: Pha nước hầm sườn với nước mắm ngon, chanh tươi, đường thốt nốt và ớt hiểm giã dập tạo vị chua cay mặn ngọt đậm đà bùng nổ.',
    recommendedSauce:
      'Nước sốt ớt hiểm ngò gai chua cay mặn ngọt bùng nổ rưới đẫm lên từng thớ thịt sườn heo hầm mềm rục róc xương, ăn cùng đĩa cơm trắng dẻo thơm và ly trà chanh mát lạnh.',
  },
  'com-canh-kim-chi': {
    dishId: 'com-canh-kim-chi',
    dishName: 'Cơm Canh Kim Chi Thịt Heo Đậu Phụ Thanh Mát',
    seoTitle: 'Cách Nấu Cơm Canh Kim Chi Thanh Mát, Đậm Đà Chuẩn Cơm Nhà',
    ratingValue: '4.8',
    reviewCount: 315,
    prepTime: '15 phút (thái thịt, xắt kim chi & sơ chế đậu hũ)',
    cookTime: '25 phút (xào thịt, hầm canh kim chi bốc khói)',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Kim Chi Cải Cúc & Thịt Ba Chỉ Heo Tươi',
        items: [
          '300g kim chi cải thảo muối chua ngon (cắt khúc vừa ăn, giữ 100ml nước kim chi)',
          '250g thịt ba chỉ heo tươi (thái mỏng vừa ăn)',
          '1 hộp đậu hũ non (hoặc đậu phụ trắng, cắt khối vuông)',
        ],
      },
      {
        category: 'Gia Vị & Nước Dùng Thanh Ngọt Chuẩn Vị',
        items: [
          '1 thìa canh ớt bột Hàn Quốc Gochugaru (tạo màu đỏ tươi rực rỡ)',
          '1 thìa canh tương ớt Hàn Quốc Gochujang (tạo độ sánh đậm đà)',
          '1 thìa canh nước mắm ngon thượng hạng, 1/2 thìa cà phê đường',
          '1 thìa canh dầu mè thơm, 3 tép tỏi băm nhuyễn, 1 củ hành tím băm',
          '800ml nước dùng dashi cá bào tảo bẹ (hoặc nước hầm xương thanh ngọt)',
        ],
      },
      {
        category: 'Rau Thơm & Đồ Ăn Kèm Cơm Trắng',
        items: [
          '2 nhánh hành poireau (hành tỏi tây) xắt xéo, 1 quả ớt hiểm xanh đỏ',
          '3 bát cơm trắng dẻo nóng hổi (gạo ST25 hoặc gạo Nhật)',
          '1 đĩa dưa leo xắt lát, trứng ốp la lòng đào hoặc rong biển sấy ăn kèm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế ba chỉ heo, kim chi cải thảo & đậu hũ non',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Thịt ba chỉ thái mỏng ngấm nhẹ gia vị, kim chi giòn chua và đậu hũ non cắt khối đẹp mắt',
        actionPoints: [
          'Thịt ba chỉ heo rửa sạch, thái lát mỏng vừa ăn. Bóp nhẹ thịt với 1/2 thìa cà phê hạt nêm và tỏi băm cho ngấm gia vị.',
          'Kim chi cải thảo cắt khúc 2 - 3cm. Vắt nhẹ lấy khoảng 100ml nước kim chi chua để riêng.',
          'Đậu hũ non cắt khối vuông vừa ăn. Hành poireau và ớt hiểm xắt lát xéo.',
        ],
        description:
          'Thái mỏng ba chỉ heo, cắt khúc kim chi cải thảo giữ lại nước cốt. Đậu hũ non cắt khối vuông và xắt xéo hành poireau.',
        tip: 'Vắt giữ lại nước kim chi muối chua là bí quyết cốt lõi giúp nước canh có vị chua thanh êm dịu gài vị ngọt tự nhiên.',
      },
      {
        step: 2,
        title: 'Xào săn thịt ba chỉ & xào ngấm kim chi đậm đà',
        time: '5 phút',
        heat: 'Lửa vừa',
        goal: 'Thịt ba chỉ béo bùi xào săn tiết mỡ thơm ngạt ngào, kim chi thấm ngập ớt bột đỏ tươi',
        actionPoints: [
          'Đặt nồi (hoặc niêu đất) lên bếp, cho 1 thìa canh dầu mè. Cho tỏi băm và hành tím vào phi thơm.',
          'Cho thịt ba chỉ vào xào trên lửa vừa trong 2 - 3 phút cho thịt săn lại và tiết nhẹ mỡ thơm.',
          'Trút toàn bộ kim chi đã cắt vào xào cùng thịt ba chỉ. Thêm 1 thìa canh ớt bột Gochugaru và 1 thìa canh tương ớt Gochujang vào đảo đều trong 3 phút cho kim chi thấm ngấm vị.',
        ],
        description:
          'Phi thơm tỏi hành với dầu mè, xào săn thịt ba chỉ rồi cho kim chi cùng ớt bột Gochugaru và tương ớt Gochujang vào xào ngấm.',
        tip: 'Xào kỹ kim chi với thịt ba chỉ và dầu mè giúp kim chi mềm giòn đậm đà và nước canh không bị gắt.',
      },
      {
        step: 3,
        title: 'Nấu canh kim chi bùng vị chua cay thanh ngọt',
        time: '15 phút',
        heat: 'Lửa nhỏ ninh riu riu',
        goal: 'Nước canh kim chi sóng sánh màu đỏ rực rỡ, vị chua cay đậm đà êm dịu ngọt hậu',
        actionPoints: [
          'Trút 800ml nước dùng dashi (hoặc nước hầm xương/nước lọc) cùng 100ml nước kim chi chua đã chắt vào nồi.',
          'Nêm 1 thìa canh nước mắm ngon, 1/2 thìa cà phê đường để cân bằng vị chua gắt của kim chi.',
          'Đun sôi bùng, sau đó hạ lửa vừa ninh riu riu trong 12 - 15 phút cho kim chi mềm ngọt và tiết trọn vị ngon vào nước canh.',
        ],
        description:
          'Đổ nước dùng và nước kim chi vào nồi. Nêm nước mắm, đường đun sôi rồi ninh riu riu 15 phút cho canh đậm đà thanh ngọt.',
        tip: 'Ninh canh lửa riu riu giúp thịt ba chỉ tiết vị ngọt mỡ béo bùi hòa quyện hoàn hảo vào nước canh kim chi.',
      },
      {
        step: 4,
        title: 'Thả đậu hũ non & hoàn thiện niêu canh bốc khói ngạt ngào',
        time: '5 phút',
        heat: 'Lửa nhỏ',
        goal: 'Mỗi khối đậu hũ non trắng mịn ngấm ngáp nước canh chua cay, rực rỡ hành ớt bốc khói',
        actionPoints: [
          'Nhẹ nhàng thả từng khối đậu hũ non vào nồi canh (dùng muôi xếp cẩn thận tránh làm vỡ đậu).',
          'Đun sôi nhẹ thêm 3 - 5 phút cho đậu hũ ngấm vị ấm nóng.',
          'Rắc hành poireau xắt xéo và vài lát ớt hiểm rực rỡ lên mặt canh, tắt bếp ngay khi canh đang bốc khói nghi ngút.',
        ],
        description:
          'Thả đậu hũ non vào ninh nhẹ 3 phút. Rắc hành poireau và ớt hiểm xắt lát lên mặt niêu canh bốc khói.',
        tip: 'Thả đậu hũ non vào bước cuối cùng giúp đậu giữ trọn độ mềm mịn tan trong miệng không bị nát.',
      },
      {
        step: 5,
        title: 'Thưởng thức cơm canh kim chi nóng hổi chuẩn cơm nhà',
        time: '5 phút',
        heat: 'Dùng nóng hổi',
        goal: 'Bát cơm dẻo chan ngập nước canh kim chi chua cay ấm bụng, thịt béo đậu mềm tròn vị',
        actionPoints: [
          'Múc cơm trắng dẻo nóng hổi ra bát.',
          'Dọn niêu canh kim chi thịt heo đậu phụ bốc khói ngào ngạt ra giữa bàn.',
          'Chan ngập nước canh chua cay nóng hổi lên bát cơm dẻo, gắp miếng thịt ba chỉ béo bùi cùng khối đậu hũ non tan mềm.',
        ],
        description:
          'Múc cơm trắng dẻo nóng hổi ra bát, chan ngập nước canh kim chi bốc khói béo bùi chua cay, ăn kèm dưa leo và trứng ốp la.',
        tip: 'Thưởng thức khi canh kim chi còn nóng hổi ngạt ngào khói tỏa giúp ấm bụng và tròn vị nhất.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng nấu canh kim chi chua cay đậm đà chuẩn cơm nhà: 1. Chọn kim chi muối chua kỹ: Kim chi muối đủ độ chua xào kỹ với thịt ba chỉ giúp nước canh có vị chua sâu thanh nhẹ, không bị gắt; 2. Thêm nước kim chi & đường thốt nốt/đường cát: Cân bằng vị chua gắt giúp nước dùng êm dịu ngọt hậu; 3. Dùng nước dùng dashi hoặc nước hầm xương: Tạo độ ngọt thanh sâu lắng cho bát canh kim chi ấm nóng ngọt lành.',
    recommendedSauce:
      'Nước canh kim chi chua cay đậm đà bốc khói nghi ngút, chan ngập bát cơm trắng nóng hổi ăn cùng thịt ba chỉ béo bùi và đậu hũ non mềm mịn tan trong miệng.',
  },
  'com-ga-teriyaki': {
    dishId: 'com-ga-teriyaki',
    dishName: 'Cơm Gà Sốt Teriyaki Nhật Bản',
    seoTitle: 'Cách Làm Cơm Gà Teriyaki Thơm Ngon Đậm Đà Chuẩn Quán',
    ratingValue: '4.9',
    reviewCount: 289,
    prepTime: '15 phút (lọc xương má đùi, khứa da & ướp gia vị)',
    cookTime: '20 phút (áp chảo vàng giòn & nấu sốt Teriyaki sánh mịn)',
    difficulty: 'Trung bình',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Má Đùi Gà Rút Xương & Khử Mùi Hôi',
        items: [
          '600g má đùi gà tươi rút xương còn da (chọn thịt tươi hồng, đàn hồi tốt)',
          '1 củ gừng tươi giã lấy nước cốt, 2 thìa canh rượu nấu ăn Mirin (hoặc rượu trắng)',
          '1/2 thìa cà phê tiêu xay, 1/2 thìa cà phê muối hạt',
        ],
      },
      {
        category: 'Công Thức Nước Sốt Teriyaki Chuẩn Bếp Trưởng Nhật',
        items: [
          '4 thìa canh nước tương Nhật Bản Kikkoman (hoặc Shoyu)',
          '3 thìa canh rượu Mirin (tạo độ bóng mượt ngọt thanh đặc trưng)',
          '2 thìa canh rượu Sake nấu ăn (khử tanh & tăng hương vị)',
          '2 thìa canh đường thốt nốt (hoặc đường cát), 1 thìa canh mạch nha (hoặc mật ong)',
          '2 tép tỏi băm nhuyễn, 1/2 củ gừng mài nhuyễn',
        ],
      },
      {
        category: 'Cơm Trắng Dẻo & Đồ Ăn Kèm',
        items: [
          '3 bát cơm trắng dẻo hạt (gạo Nhật Koshihikari hoặc gạo ST25)',
          '1 thìa canh mè trắng rang thơm (vừng trắng), 2 nhánh hành lá xắt nhỏ',
          '1 đĩa bắp cải bào sợi mịn, dưa leo xắt lát, súp lơ luộc ăn kèm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế má đùi gà rút xương & ướp thấm gia vị',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Má đùi gà sạch thơm, lớp da khứa nhẹ không co rút và thấm ngấm rượu gừng',
        actionPoints: [
          'Má đùi gà rửa sạch với nước muối pha chút rượu trắng và gừng giã dập để khử hoàn toàn mùi hôi.',
          'Dùng mũi dao khứa nhẹ vài đường mỏng trên lớp da gà (giúp miếng gà phẳng và da không bị co rút khi áp chảo).',
          'Ướp gà với 1 thìa canh rượu Mirin, 1 thìa cà phê nước cốt gừng, 1/2 thìa cà phê tiêu xay trong 15 phút.',
        ],
        description:
          'Khử hôi má đùi gà bằng rượu gừng, khứa nhẹ lớp da. Ướp gà với rượu Mirin, nước cốt gừng và tiêu xay 15 phút.',
        tip: 'Khứa nhẹ vài đường trên da gà giúp gia vị ngấm sâu và khi áp chảo lớp da gà giòn rụm không bị co vặn.',
      },
      {
        step: 2,
        title: 'Pha nước sốt Teriyaki Nhật Bản chuẩn tỷ lệ vàng',
        time: '5 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Hỗn hợp sốt Teriyaki sẫm màu, bóng mượt, vị mặn ngọt thanh ngạt ngào hương Mirin Sake',
        actionPoints: [
          'Trong bát lớn, hòa tan: 4 thìa canh nước tương Kikkoman, 3 thìa canh rượu Mirin, 2 thìa canh rượu Sake, 2 thìa canh đường, 1 thìa canh mạch nha, tỏi băm và gừng mài.',
          'Khuấy đều cho đường và mạch nha tan hoàn toàn.',
          'Nếm thử sốt đạt vị mặn ngọt đậm đà, thơm dịu mùi rượu gạo Nhật Bản đặc trưng.',
        ],
        description:
          'Pha nước tương Kikkoman, rượu Mirin, rượu Sake, đường thốt nốt, mạch nha, tỏi băm và gừng mài tạo sốt Teriyaki sánh bóng.',
        tip: 'Tỷ lệ vàng 4 Nước tương : 3 Mirin : 2 Sake : 2 Đường tạo nên hương vị Teriyaki chuẩn nhà hàng Nhật Bản.',
      },
      {
        step: 3,
        title: 'Áp chảo má đùi gà da giòn vàng óng',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Miếng gà có lớp da vàng giòn rụm kiệt mỡ, phần thịt bên trong mềm mọng nước',
        actionPoints: [
          'Đun nóng chảo chống dính trên lửa vừa (chỉ quết 1 lớp dầu ăn thật mỏng).',
          'Đặt mặt da gà xuống áp chảo trước. Dùng xẻng đè nhẹ miếng gà trong 5 - 7 phút cho da tiết mỡ và giòn vàng.',
          'Lật mặt thịt áp chảo tiếp trong 3 - 4 phút cho thịt chín tới 80%. Trút bớt phần mỡ thừa đọng dưới chảo ra ngoài.',
        ],
        description:
          'Áp chảo mặt da gà trước 7 phút cho vàng giòn kiệt mỡ, lật mặt thịt áp tiếp 4 phút rồi gắt bỏ mỡ thừa.',
        tip: 'Chắt bỏ bớt mỡ gà tiết ra trước khi đổ sốt vào giúp nước sốt Teriyaki bám dính tốt hơn và không bị ngấy dầu.',
      },
      {
        step: 4,
        title: 'Rưới sốt Teriyaki & đun rim sánh kẹo bọc quanh miếng gà',
        time: '5 phút',
        heat: 'Lửa vừa nhỏ',
        goal: 'Lớp sốt Teriyaki cô đặc nâu óng như mật bọc kín mít quanh miếng gà áp chảo bốc khói',
        actionPoints: [
          'Rưới toàn bộ bát nước sốt Teriyaki đã pha vào chảo gà đang áp chảo nóng hổi.',
          'Hạ lửa vừa nhỏ, đun rim riu riu. Dùng muôi múc rưới nước sốt liên tục lên mặt da và thịt gà.',
          'Đun đến khi nước sốt Teriyaki cô đặc lại, sánh mịn nâu óng kẹo bám chặt quanh miếng gà ngạt ngào mùi thơm thì tắt bếp.',
        ],
        description:
          'Đổ sốt Teriyaki vào chảo gà, đun rim lửa nhỏ và rưới sốt liên tục cho đến khi sốt cô đặc nâu óng kẹo bám quanh miếng gà.',
        tip: 'Đun rim lửa nhỏ giúp sốt Teriyaki không bị cháy đường mà cô đặc lại thành lớp áo bóng mượt hoàn hảo.',
      },
      {
        step: 5,
        title: 'Thái gà, xếp cơm trắng & thưởng thức chuẩn vị Nhật',
        time: '5 phút',
        heat: 'Dùng nóng hổi',
        goal: 'Bát cơm gà Teriyaki đẫm sốt nâu óng, rắc mè rang thơm phức ăn kèm bắp cải bào giòn mát',
        actionPoints: [
          'Gắp má đùi gà ra thớt, dùng dao sắc thái thành các lát miếng vừa ăn.',
          'Xới cơm trắng dẻo (gạo Nhật/ST25) ra bát lớn. Xếp các lát gà Teriyaki lên mặt cơm.',
          'Rưới nước sốt Teriyaki sánh mịn đọng trong chảo lên đẫm miếng gà và cơm.',
          'Rắc mè trắng rang thơm và hành lá xắt nhỏ. Thưởng thức nóng cùng bắp cải bào sợi mịn và súp lơ luộc.',
        ],
        description:
          'Thái má đùi gà thành miếng, xếp lên đĩa cơm dẻo, rưới sốt Teriyaki sánh mịn, rắc mè rang thơm và ăn kèm bắp cải bào sợi.',
        tip: 'Thưởng thức khi gà Teriyaki còn nóng hổi cùng bắp cải bào sợi giúp cân bằng vị mặn ngọt đậm đà tuyệt hảo.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm cơm gà Teriyaki ngon chuẩn nhà hàng Nhật: 1. Khứa nhẹ lớp da & áp chảo mặt da trước: Giúp da gà giòn rụm không bị co rút và ép tiết mỡ tự nhiên; 2. Tỷ lệ vàng sốt Teriyaki (4 Nước tương : 3 Mirin : 2 Sake : 2 Đường): Tạo vị mặn ngọt mượt mà bóng đẫm đặc trưng Nhật Bản; 3. Rim sốt trên lửa nhỏ: Giúp sốt sánh mịn bám đều thành lớp áo nâu óng quanh từng miếng thịt gà mọng nước.',
    recommendedSauce:
      'Nước sốt Teriyaki mặn ngọt mượt mà nâu óng như mật sánh quyện bọc chặt miếng má đùi gà da giòn thịt mềm mọng nước, rưới lên đĩa cơm trắng dẻo thơm rắc mè rang nức mũi.',
  },
  'com-thit-ba-chi-chay-canh': {
    dishId: 'com-thit-ba-chi-chay-canh',
    dishName: 'Cơm Thịt Ba Chỉ Rang Cháy Cạnh Thơm Ngon',
    seoTitle: 'Cách Làm Cơm Ba Chỉ Cháy Cạnh Thơm Ngon Đậm Đà Chuẩn Quán',
    ratingValue: '4.8',
    reviewCount: 348,
    prepTime: '15 phút (thái ba chỉ, chần qua & thái hành tỏi)',
    cookTime: '20 phút (rang kiệt mỡ cháy cạnh & kho kẹo mắm đường)',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Thịt Ba Chỉ Rút Sườn & Khử Tanh',
        items: [
          '500g thịt ba chỉ heo tươi (chọn miếng nạc mỡ đồng đều, da mỏng tươi hồng)',
          '1 thìa canh muối hạt, 1 củ gừng tươi giã dập, 2 thìa canh giấm gạo (chần sơ)',
        ],
      },
      {
        category: 'Sốt Mắm Đường Đậm Đà Kho Cháy Cạnh',
        items: [
          '3 thìa canh nước mắm ngon truyền thống thượng hạng',
          '2 thìa canh đường thốt nốt (hoặc đường cát vàng tạo màu cánh gián)',
          '1 thìa cà phê nước màu kho thịt (hoặc thắng đường màu dừa)',
          '1 thìa cà phê tiêu sọ xay thơm, 1/2 thìa cà phê hạt nêm',
          '3 củ hành khô tím xắt lát mỏng, 3 tép tỏi băm nhuyễn',
        ],
      },
      {
        category: 'Rau Thơm & Đồ Ăn Kèm Cơm Trắng',
        items: [
          '3 nhánh hành lá xắt khúc 2cm, 1 quả ớt hiểm xắt lát',
          '3 bát cơm trắng dẻo nóng hổi (gạo ST25 hoặc Jasmine)',
          '1 đĩa dưa leo xắt lát, dưa cải muối chua ăn kèm giải ngấy',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế thịt ba chỉ & chần sơ khử mùi hôi',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Thịt ba chỉ sạch thơm hoàn toàn, thái miếng con chì vừa ăn vàng mượt',
        actionPoints: [
          'Thịt ba chỉ heo rửa sạch với nước muối pha chút giấm gạo và gừng giã dập để khử tanh.',
          'Đun sôi nồi nước lớn, thả ba chỉ vào chần sơ trong 2 phút cho nổi hết bọt bẩn ra ngoài.',
          'Vớt thịt ra xả rửa sạch dưới vòi nước lạnh. Thái ba chỉ thành các miếng con chì vừa ăn (dày khoảng 0.6cm, không thái quá mỏng kẻo teo khô khi rang).',
        ],
        description:
          'Khử hôi ba chỉ bằng giấm gừng, chần sơ 2 phút xả sạch bọt bẩn. Thái miếng con chì dày 0.6cm vừa ăn.',
        tip: 'Thái thịt dày vừa phải (0.6cm) giúp miếng thịt khi rang cháy cạnh vừa xém giòn bên ngoài vừa giữ trọn độ mềm ngậy bên trong.',
      },
      {
        step: 2,
        title: 'Rang ba chỉ xém vàng kiệt mỡ (Tạo hiệu ứng cháy cạnh)',
        time: '10 phút',
        heat: 'Lửa vừa nhỏ',
        goal: 'Hai mặt miếng thịt ba chỉ xém vàng ươm tươm mỡ tự nhiên ngạt ngào mùi thơm',
        actionPoints: [
          'Đặt chảo khô lên bếp trên lửa vừa (không cần thêm dầu ăn). Trút toàn bộ ba chỉ đã thái vào chảo.',
          'Khi thịt bắt đầu tiết mỡ tự nhiên, hạ lửa vừa nhỏ. Dùng xẻng lật đảo thịt liên tục trong 8 - 10 phút.',
          'Rang đến khi hai mặt miếng ba chỉ ngả màu vàng ươm xém cạnh rực rỡ.',
          'Chắt bớt 2/3 lượng mỡ heo tiết ra trong chảo ra bát riêng (chỉ giữ lại 1 thìa canh mỡ trong chảo).',
        ],
        description:
          'Trút ba chỉ vào chảo khô rang lửa nhỏ 10 phút cho xém vàng kiệt mỡ. Chắt bớt 2/3 lượng mỡ tiết ra ra bát riêng.',
        tip: 'Chắt bớt mỡ heo giúp miếng thịt rang cháy cạnh không bị ngấy mỡ và sốt mắm đường quánh bám chặt hơn.',
      },
      {
        step: 3,
        title: 'Phi thơm hành tỏi & đảo ngấm sốt mắm đường kẹo cánh gián',
        time: '5 phút',
        heat: 'Lửa lớn',
        goal: 'Lớp sốt mắm đường màu cánh gián quánh kẹo bọc chặt từng miếng ba chỉ cháy cạnh',
        actionPoints: [
          'Gạt thịt ba chỉ sang góc chảo, trút hành khô xắt lát và tỏi băm vào phần mỡ nóng phi vàng thơm.',
          'Cho 3 thìa canh nước mắm ngon, 2 thìa canh đường thốt nốt, 1 thìa cà phê nước màu và 1/2 thìa cà phê hạt nêm vào.',
          'Đảo nhanh tay trên lửa lớn cho sốt mắm đường đun sôi bùng, kẹo lại phủ đều một lớp áo màu nâu cánh gián bóng mượt quanh thịt.',
        ],
        description:
          'Phi thơm hành tỏi, trút nước mắm, đường thốt nốt, nước màu vào đảo lửa lớn cho sốt kẹo lại bọc chặt quanh miếng thịt.',
        tip: 'Sử dụng đường thốt nốt và nước mắm truyền thống giúp sốt kẹo dẻo mượt mà, vị ngọt đằm không bị gắt.',
      },
      {
        step: 4,
        title: 'Rắc tiêu sọ, hành lá & ớt hiểm bốc khói ngạt ngào',
        time: '2 phút',
        heat: 'Lửa vừa',
        goal: 'Chảo thịt ba chỉ rang cháy cạnh màu nâu bóng rực rỡ, thơm phức mùi tiêu sọ hành lá',
        actionPoints: [
          'Khi nước sốt mắm đường đã kẹo dẻo bám chặt lên thịt ba chỉ, trút hành lá xắt khúc và ớt hiểm xắt lát vào.',
          'Rắc 1 thìa cà phê tiêu sọ xay thơm lừng lên trên.',
          'Đảo đều nhanh tay trên bếp trong 1 phút rồi tắt bếp khi chảo thịt bốc khói ngạt ngào.',
        ],
        description:
          'Trút hành lá, ớt hiểm xắt lát và tiêu sọ xay vào chảo thịt đảo đều 1 phút cho dậy mùi thơm nức mũi.',
        tip: 'Rắc tiêu sọ cuối cùng khi tắt bếp giữ trọn hương thơm cay nồng ấm áp đặc trưng.',
      },
      {
        step: 5,
        title: 'Múc cơm trắng nóng hổi & thưởng thức chuẩn vị cơm nhà',
        time: '3 phút',
        heat: 'Dùng nóng hổi',
        goal: 'Đĩa cơm ba chỉ cháy cạnh đậm đà béo bùi, chan ngập nước sốt kẹo ăn cùng dưa chua giòn tan',
        actionPoints: [
          'Múc cơm trắng dẻo nóng hổi ra đĩa lớn hoặc bát tô.',
          'Gắp từng miếng thịt ba chỉ rang cháy cạnh vàng ươm kẹo sốt cánh gián lên mặt cơm.',
          'Chan muỗng nước sốt kẹo béo ngậy mặn ngọt lên thịt và cơm trắng.',
          'Ăn kèm dưa leo xắt lát tươi giòn và dưa cải muối chua giải ngấy cực kỳ bắt cơm.',
        ],
        description:
          'Xới cơm trắng dẻo ra đĩa, xếp thịt ba chỉ rang cháy cạnh kẹo sốt cánh gián lên trên, dùng nóng với dưa cải muối chua.',
        tip: 'Ăn kèm dưa cải muối chua gài vị chua dịu giúp cân bằng hoàn hảo độ béo bùi đậm đà của ba chỉ cháy cạnh.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm cơm ba chỉ rang cháy cạnh ngon đậm đà chuẩn quán: 1. Chần sơ & thái miếng vừa ăn (0.6cm): Tránh thái mỏng làm thịt teo khô; 2. Rang lửa vừa nhỏ kiệt mỡ xém cạnh rồi chắt mỡ thừa: Giúp miếng thịt giòn ngoài mềm trong, không bị ngấy mỡ; 3. Nước mắm ngon & đường thốt nốt đun kẹo cánh gián: Tạo lớp áo bóng mượt bọc chặt từng miếng thịt dậy mùi thơm nức.',
    recommendedSauce:
      'Nước sốt mắm đường kẹo màu cánh gián thơm lừng mùi hành phi tiêu sọ, quyện chặt lấy từng miếng thịt ba chỉ rang cháy cạnh tươm mỡ béo bùi, rưới lên đĩa cơm trắng nóng dẻo ngon tuyệt đỉnh.',
  },
  'xoi-ga-xe-mo-hanh': {
    dishId: 'xoi-ga-xe-mo-hanh',
    dishName: 'Xôi Gà Xé Dẻo Thơm Óng Ả Chuẩn Vị Truyền Thống',
    seoTitle: 'Cách Nấu Xôi Gà Xé Dẻo Thơm Óng Ả Chuẩn Vị Truyền Thống',
    ratingValue: '4.9',
    reviewCount: 388,
    prepTime: '20 phút (ngâm nếp, luộc gà ta & làm mỡ hành)',
    cookTime: '35 phút (đồ xôi bằng nước luộc gà & xé gà trộn gia vị)',
    difficulty: 'Trung bình',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Gạo Nếp Ngon & Nước Đồ Xôi Béo Vàng',
        items: [
          '500g gạo nếp nương / nếp cái hoa vàng (hạt tròn mẩy, ngâm nước 6 - 8 tiếng)',
          '1/2 thìa cà phê bột nghệ tươi (hoặc nước cốt nghệ tạo màu vàng óng)',
          '1/2 thìa cà phê muối hạt, 1 thìa canh mỡ gà thắng (tạo độ bóng mượt cho hạt xôi)',
        ],
      },
      {
        category: 'Luộc Gà Ta & Gà Xé Phay Thấm Vị',
        items: [
          '1/2 con gà ta thả vườn (khoảng 700g, đùi hoặc ức gà tươi, thịt săn chắc)',
          '1 củ hành tây, 3 củ hành tím, 1 nhánh gừng đập dập (luộc gà)',
          '1 thìa canh nước mắm ngon, 1/2 thìa cà phê tiêu sọ, 1/2 thìa cà phê hạt nêm',
        ],
      },
      {
        category: 'Mỡ Hành, Nước Sốt Rưới Xôi & Đồ Ăn Kèm',
        items: [
          '1 bó hành lá tươi (xắt nhỏ, dội mỡ gà nóng làm mỡ hành xanh mướt)',
          '5 củ hành khô tím (thái mỏng, bào phi giòn rụm)',
          '1 thìa canh nước mắm ngon + 1 thìa canh nước luộc gà + 1/2 thìa cà phê đường (nấu nước sốt chan xôi)',
          '1 đĩa dưa leo xắt lát, dưa góp củ cải cà rốt chua ngọt, chà bông (ruốc thịt) ăn kèm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Ngâm gạo nếp vàng óng & luộc gà ta mọng nước',
        time: '20 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Hạt nếp nở mẩy ngấm màu nghệ, gà ta luộc chín tới da giòn thịt mọng nước',
        actionPoints: [
          'Gạo nếp vo sạch, ngâm nước ấm pha chút bột nghệ tươi và 1/2 thìa cà phê muối hạt trong 6 - 8 tiếng cho gạo nở tròn mẩy. Vớt gạo ra xả nhẹ nước, để ráo.',
          'Cho gà ta vào nồi nước lạnh với gừng giã dập, hành tây và hành tím đập dập. Luộc sôi lăn tăn trong 18 - 20 phút.',
          'Tắt bếp đậy vung om thêm 10 phút cho thịt gà chín tới mọng nước. Vớt gà ra ngâm ngay vào thau nước đá lạnh để da gà giòn dai. Giữ lại nước luộc gà béo thơm.',
        ],
        description:
          'Ngâm gạo nếp với bột nghệ 6 tiếng. Luộc gà ta với gừng hành 20 phút, om vung rồi vớt ngâm nước đá lạnh.',
        tip: 'Ngâm gà vừa luộc xong vào thau nước đá lạnh giúp da gà săn giòn béo ngậy, thịt không bị thâm hay bị khô.',
      },
      {
        step: 2,
        title: 'Đồ (hấp) xôi nếp với nước luộc gà & mỡ gà dẻo thơm',
        time: '35 phút',
        heat: 'Lửa lớn',
        goal: 'Hạt xôi dẻo quánh, căng mẩy vàng óng thơm phức hương mỡ gà tự nhiên',
        actionPoints: [
          'Đặt chõ hấp lên bếp, đun sôi nước hầm gà dưới đáy chõ.',
          'Trộn gạo nếp đã ráo với 1 thìa canh mỡ gà thắng. Rải đều gạo nếp vào xửng hấp, dùng đũa chọc vài lỗ không khí thông thoáng.',
          'Đồ xôi trên lửa lớn trong 25 - 30 phút.',
          'Rưới 2 thìa canh nước luộc gà béo ngậy lên mặt xôi, xới nhẹ tay, đậy vung đồ tiếp 5 phút cho hạt xôi căng bóng, dẻo tơi không bị khô.',
        ],
        description:
          'Trộn mỡ gà vào nếp, đồ xôi bằng nước luộc gà 30 phút. Rưới nước hầm gà đồ tiếp 5 phút cho hạt xôi căng bóng dẻo quánh.',
        tip: 'Rưới nước luộc gà và mỡ gà vào xôi lúc gần chín giúp hạt xôi óng ả béo ngậy, giữ độ dẻo mềm suốt cả ngày.',
      },
      {
        step: 3,
        title: 'Xé gà ta & xào/trộn gà xé đậm đà',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Sợi gà xé phay thấm ngấm nước mắm tiêu sọ thơm lừng, thịt mềm ngọt không bị vụn',
        actionPoints: [
          'Thịt gà ta đã nguội dùng tay xé thành các sợi vừa ăn (không xé vụn quá kẻo bị nát).',
          'Ướp gà xé với 1 thìa canh nước mắm ngon, 1/2 thìa cà phê tiêu sọ, 1/2 thìa cà phê hạt nêm trong 10 phút.',
          'Phi thơm hành tím băm, cho gà xé vào đảo nhanh tay trên lửa vừa trong 2 phút cho thịt gà săn lại và thấm ngập vị.',
        ],
        description:
          'Xé tay thịt gà thành sợi, ướp nước mắm tiêu sọ rồi xào nhanh trên lửa vừa 2 phút cho săn đậm đà.',
        tip: 'Xé gà bằng tay thay vì thái dao giúp thớ thịt xé xơ giữ trọn độ mọng nước và ngấm gia vị sâu hơn.',
      },
      {
        step: 4,
        title: 'Làm mỡ hành xanh mướt & phi hành giòn rụm',
        time: '5 phút',
        heat: 'Lửa vừa',
        goal: 'Mỡ hành giữ nguyên màu xanh tươi ngạt ngào mùi thơm, hành phi vàng rơm giòn tan',
        actionPoints: [
          'Thái nhỏ hành lá cho vào bát cùng 1/4 thìa cà phê muối. Đun nóng 3 thìa canh mỡ gà rồi dội trực tiếp vào bát hành lá khuấy đều.',
          'Bào mỏng hành khô tím. Cho vào chảo ngập mỡ gà phi trên lửa vừa nhỏ đến khi hành chuyển màu vàng rơm giòn rụm thì vớt ra giấy thấm mỡ.',
        ],
        description:
          'Dội mỡ gà nóng vào bát hành lá thái nhỏ làm mỡ hành xanh mướt. Phi hành tím thái mỏng giòn rụm màu vàng rơm.',
        tip: 'Dội mỡ gà sôi trực tiếp vào hành lá giúp mỡ hành chín tới lập tức, giữ trọn màu xanh tươi bắt mắt.',
      },
      {
        step: 5,
        title: 'Xới xôi, xếp gà xé mỡ hành & thưởng thức nóng hổi',
        time: '3 phút',
        heat: 'Dùng nóng hổi',
        goal: 'Đĩa xôi gà xé vàng óng dẻo quánh, đẫm thịt gà xé mỡ hành hành phi thơm lừng chuẩn vị',
        actionPoints: [
          'Xới xôi nếp vàng óng ra đĩa hoặc lá chuối tươi.',
          'Xếp đẫm thịt gà xé phay đậm đà lên trên. Rưới muỗng mỡ hành xanh mướt và rắc hành phi giòn tan ngập đĩa.',
          'Chan nhẹ vài thìa nước sốt gà mặn ngọt đậm đà. Ăn kèm dưa góp chua ngọt và chà bông thịt béo bùi.',
        ],
        description:
          'Xới xôi ra đĩa, xếp gà xé phay đậm đà, rưới mỡ hành xanh mướt, rắc hành phi giòn tan và dùng nóng với dưa góp chua ngọt.',
        tip: 'Ăn kèm dưa góp củ cải cà rốt chua ngọt gài vị giúp cân bằng hoàn hảo độ dẻo ngậy béo bùi của xôi gà xé.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng nấu xôi gà xé dẻo thơm óng ả chuẩn vị truyền thống: 1. Đồ xôi bằng nước luộc gà & rưới mỡ gà thắng: Giúp hạt nếp căng mẩy, màu vàng óng béo ngậy và thơm lừng tự nhiên; 2. Luộc gà ngâm nước đá & xé tay: Thịt gà giòn da, mọng nước ngọt tự nhiên không bị khô; 3. Dội mỡ gà nóng vào hành lá tươi: Giữ mỡ hành xanh mướt rực rỡ, không bị nồng hay sẫm màu.',
    recommendedSauce:
      'Nước sốt mắm gà đun kẹo đậm đà rưới nhẹ lên đĩa xôi nếp nương vàng óng dẻo quánh, ăn cùng thịt gà xé phay mọng nước, mỡ hành xanh mướt và hành phi giòn tan nức mũi.',
  },
  'xoi-man-thap-cam': {
    dishId: 'xoi-man-thap-cam',
    dishName: 'Xôi Mặn Thập Cẩm Dẻo Thơm Óng Ả Chuẩn Vị Truyền Thống',
    seoTitle: 'Cách Nấu Xôi Mặn Thập Cẩm Dẻo Thơm Óng Ả Chuẩn Vị Truyền Thống',
    ratingValue: '4.9',
    reviewCount: 418,
    prepTime: '20 phút (ngâm nếp, thái lạp xưởng & xào tôm khô)',
    cookTime: '35 phút (đồ xôi dẻo 2 lửa & chiên topping)',
    difficulty: 'Trung bình',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Gạo Nếp Ngon & Nước Đồ Xôi Óng Mượt',
        items: [
          '500g gạo nếp cái hoa vàng (hạt tròn mẩy, ngâm nước ấm 6 - 8 tiếng)',
          '1/2 thìa cà phê muối hạt, 1 thìa canh mỡ heo / mỡ gà thắng (giúp hạt xôi căng bóng)',
          '2 lá nếp (lá dứa) rửa sạch, bó tròn (lót đáy chõ đun thơm)',
        ],
      },
      {
        category: 'Topping Thập Cẩm Đậm Đà Đa Dạng',
        items: [
          '2 cây lạp xưởng mai quế lộ (thái lát mỏng xém vàng)',
          '100g chả lụa / giò lụa (thái sợi mỏng vừa ăn)',
          '50g tôm khô loại ngon (ngâm nước ấm cho mềm, xào hành tím)',
          '50g chà bông thịt heo (ruốc thịt xù tơ bùi ngậy)',
          '6 quả trứng cút (luộc chín bóc vỏ, chiên sơ sơ vỏ ngoài)',
          '100g thịt xá xíu hoặc ba chỉ xào nấm mèo (thái sợi đậm đà)',
        ],
      },
      {
        category: 'Mỡ Hành, Sốt Chan & Đồ Ăn Kèm',
        items: [
          '1 bó hành lá tươi (xắt nhỏ, dội mỡ heo nóng làm mỡ hành)',
          '5 củ hành khô tím (thái mỏng phi vàng rơm giòn tan), 30g đậu phụng (lạc) rang giã dập',
          '2 thìa canh nước tương (xì dầu) + 1 thìa canh nước hầm + 1/2 thìa cà phê đường + ớt hiểm xắt lát (sốt chan xôi)',
          '1 đĩa dưa góp củ cải cà rốt chua ngọt, dưa leo xắt lát ăn kèm giải ngấy',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế gạo nếp & chuẩn bị các topping thập cẩm',
        time: '20 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Gạo nếp nở tròn mẩy, lạp xưởng, chả lụa, tôm khô và trứng cút sẵn sàng',
        actionPoints: [
          'Gạo nếp vo sạch, ngâm nước ấm với 1/2 thìa cà phê muối hạt trong 6 - 8 tiếng cho gạo nở tròn mẩy. Vớt ra xả nhẹ nước, để thật ráo.',
          'Lạp xưởng lăn qua chút nước trên chảo cho chín mọng rồi chiên xém vàng hai mặt, thái lát mỏng xéo.',
          'Tôm khô ngâm nước ấm 15 phút cho mềm ráo nước, phi thơm hành tím trút tôm khô vào xào với 1/2 thìa cà phê nước mắm và đường cho ngấm vị.',
          'Chả lụa thái sợi mỏng. Trứng cút luộc chín bóc vỏ chiên sơ.',
        ],
        description:
          'Ngâm gạo nếp 6 tiếng. Chiên xém lạp xưởng thái lát, xào tôm khô thấm vị, thái sợi chả lụa và chiên sơ trứng cút.',
        tip: 'Lăn lạp xưởng qua chút nước trước khi chiên giúp lạp xưởng mọng mềm chín đều không bị teo khô bết mỡ.',
      },
      {
        step: 2,
        title: 'Đồ (hấp) xôi nếp dẻo thơm 2 lửa bóng mượt',
        time: '35 phút',
        heat: 'Lửa lớn',
        goal: 'Hạt xôi dẻo quánh, căng mẩy bóng mượt không bị nhão hay khô cứng',
        actionPoints: [
          'Cho nước vào chõ hấp cùng bó lá nếp đun sôi bùng.',
          'Trộn gạo nếp đã ráo với 1 thìa canh mỡ heo/mỡ gà thắng. Rải đều gạo nếp vào xửng hấp, dùng đũa chọc vài lỗ không khí thông thoáng.',
          'Đồ xôi trên lửa lớn trong 25 - 30 phút.',
          'Rưới 2 thìa canh nước ấm hoặc nước cốt dừa/nước hầm lên mặt xôi, xới nhẹ tay, đậy vung đồ tiếp 5 phút cho hạt xôi căng mẩy óng ả, dẻo mềm không bị khô cứng.',
        ],
        description:
          'Trộn mỡ heo vào gạo nếp, đồ xôi lá nếp 30 phút. Rưới thêm nước ấm đồ tiếp 5 phút cho hạt xôi dẻo mượt căng mẩy.',
        tip: 'Kỹ thuật đồ xôi 2 lửa và trộn mỡ heo thắng giúp hạt xôi giữ trọn độ dẻo mềm óng ả suốt cả ngày.',
      },
      {
        step: 3,
        title: 'Làm mỡ hành xanh mướt & phi hành rộn rã',
        time: '5 phút',
        heat: 'Lửa vừa',
        goal: 'Mỡ hành rực rỡ xanh tươi, hành tím phi màu vàng rơm giòn rụm thơm nức',
        actionPoints: [
          'Cho hành lá xắt nhỏ vào bát cùng 1/4 thìa cà phê muối. Đun sôi 3 thìa canh mỡ heo/dầu ăn rồi dội trực tiếp vào bát hành khuấy đều.',
          'Hành khô tím thái mỏng bào phi trên lửa vừa nhỏ đến khi vàng rơm giòn rụm thì vớt ra ráo dầu.',
        ],
        description:
          'Dội mỡ heo sôi vào bát hành lá xắt nhỏ làm mỡ hành xanh mướt. Phi hành tím thái mỏng giòn rụm.',
        tip: 'Dội mỡ nóng trực tiếp giúp mỡ hành giữ màu xanh tươi ngạt ngào mùi thơm không bị hăng.',
      },
      {
        step: 4,
        title: 'Nấu nước sốt tương đậm đà rưới xôi mặn',
        time: '5 phút',
        heat: 'Lửa nhỏ',
        goal: 'Nước sốt tương sánh kẹo mặn ngọt hài hòa, thơm ngạt ngào vị xì dầu tiêu sọ',
        actionPoints: [
          'Hòa 2 thìa canh nước tương thượng hạng, 1 thìa canh nước hầm/nước lọc, 1/2 thìa cà phê đường, 1/2 thìa cà phê tiêu xay.',
          'Đun sôi nhẹ cho hỗn hợp sốt tương sánh kẹo mặn ngọt hài hòa, tắt bếp cho thêm vài lát ớt hiểm.',
        ],
        description:
          'Hòa nước tương, nước hầm, đường và tiêu xay đun sôi nhẹ thành sốt tương sánh kẹo đậm đà.',
        tip: 'Sốt tương đun kẹo giúp xôi mặn đậm đà chuẩn vị Sài Gòn truyền thống.',
      },
      {
        step: 5,
        title: 'Múc xôi, bày topping thập cẩm & thưởng thức nóng hổi',
        time: '3 phút',
        heat: 'Dùng nóng hổi',
        goal: 'Đĩa xôi mặn thập cẩm đẫm topping lạp xưởng, chả lụa, tôm khô, mỡ hành xanh mướt thơm nức',
        actionPoints: [
          'Xới xôi nếp dẻo thơm óng ả ra đĩa lớn hoặc lá chuối tươi.',
          'Lần lượt xếp đều các loại topping thập cẩm: lạp xưởng chiên xém, chả lụa thái sợi, tôm khô xào, trứng cút chiên và chà bông bùi ngậy lên mặt xôi.',
          'Rưới mỡ hành xanh mướt, rắc hành phi giòn tan và rưới vài thìa nước sốt tương mặn ngọt. Ăn kèm dưa góp củ cải chua ngọt ngon tuyệt đỉnh.',
        ],
        description:
          'Xới xôi ra đĩa, xếp ngập lạp xưởng, chả lụa, tôm khô, trứng cút, mỡ hành, rưới sốt tương và ăn kèm dưa góp.',
        tip: 'Ăn kèm dưa góp củ cải cà rốt chua ngọt giúp cân bằng hoàn hảo vị bùi béo đậm đà của đĩa xôi mặn thập cẩm.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng nấu xôi mặn thập cẩm dẻo thơm óng ả chuẩn vị truyền thống: 1. Đồ xôi 2 lửa & trộn mỡ heo thắng: Giúp hạt nếp căng mẩy béo ngậy, giữ độ dẻo mềm suốt cả ngày không bị bết dính; 2. Chiên xém lạp xưởng & xào đậm đà tôm khô: Giúp topping dậy mùi thơm nức, không bị tanh hay khô ngấy; 3. Dội mỡ nóng làm mỡ hành & chan sốt tương kẹo: Tạo màu xanh tươi rực rỡ và hương vị mặn ngọt hài hòa hòa quyện vào từng hạt xôi nếp.',
    recommendedSauce:
      'Nước sốt tương (xì dầu) đun kẹo mặn ngọt cay nồng ớt hiểm rưới ngập lên đĩa xôi nếp dẻo thơm óng ả, quyện chặt cùng lạp xưởng, tôm khô xào, chả lụa và mỡ hành thơm nức mũi.',
  },
  'xoi-chien-gion-nhan-thit': {
    dishId: 'xoi-chien-gion-nhan-thit',
    dishName: 'Xôi Chiên Nhân Thịt Giòn Rụm Dẻo Thơm Chuẩn Vị',
    seoTitle: 'Cách Nấu Xôi Chiên Dẻo Thơm Óng Ả Chuẩn Vị Truyền Thống',
    ratingValue: '4.9',
    reviewCount: 376,
    prepTime: '20 phút (ngâm nếp, xào nhân thịt nấm mèo & ép khuôn bánh xôi)',
    cookTime: '25 phút (đồ xôi dẻo & chiên phồng vàng rụm 2 mặt)',
    difficulty: 'Trung bình',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Gạo Nếp Ngon & Đồ Xôi Dẻo Thơm',
        items: [
          '400g gạo nếp cái hoa vàng (hạt tròn mẩy, ngâm nước ấm 6 - 8 tiếng)',
          '1/2 thìa cà phê muối hạt, 1 thìa canh dầu ăn / mỡ heo (trộn gạo nếp bóng mượt)',
        ],
      },
      {
        category: 'Nhân Thịt Băm Nấm Mèo Đậm Đà Kẹp Xôi',
        items: [
          '200g thịt heo băm nhỏ (chọn phần thịt vai có chút mỡ cho bùi mềm)',
          '3 tai nấm mèo (mộc nhĩ) ngâm nở, rửa sạch thái hạt lựu nhỏ',
          '1/2 củ củ sắn / củ cải bào mỏng vắt ráo nước (tạo độ ngọt giòn cho nhân)',
          '3 củ hành khô tím băm nhuyễn, 2 tép tỏi băm',
          '1 thìa canh nước mắm ngon, 1/2 thìa cà phê tiêu sọ xay, 1/2 thìa cà phê đường',
        ],
      },
      {
        category: 'Rưới Mỡ Hành, Chà Bông & Tương Ớt Ăn Kèm',
        items: [
          '1 bó hành lá tươi (xắt nhỏ dội mỡ nóng làm mỡ hành xanh mướt)',
          '50g chà bông thịt heo (ruốc thịt xù tơ bùi béo)',
          '1 chai tương ớt cay nồng thượng hạng, mayonnaise ngậy béo',
          'Dầu ăn ngập chảo để chiên xôi vàng phồng giòn rụm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Ngâm nếp & đồ xôi chín dẻo quánh',
        time: '20 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Hạt nếp nương chín tới dẻo quánh, căng bóng hạt xôi không bị nhão',
        actionPoints: [
          'Gạo nếp vo sạch, ngâm nước ấm pha chút muối hạt trong 6 - 8 tiếng cho gạo nở tròn mẩy. Vớt ra xả nhẹ nước, để ráo.',
          'Trộn gạo nếp với 1 thìa canh dầu ăn. Cho gạo nếp vào xửng hấp, đồ trên lửa lớn trong 25 - 30 phút cho nếp chín dẻo quánh, hạt xôi căng bóng.',
        ],
        description:
          'Ngâm gạo nếp 6 tiếng, trộn ít dầu ăn rồi đồ xôi chín dẻo quánh căng bóng 30 phút.',
        tip: 'Trộn 1 thìa dầu ăn/mỡ heo vào gạo nếp ráo trước khi đồ giúp hạt xôi bóng mượt và khi cán mỏng bánh không bị dính bết.',
      },
      {
        step: 2,
        title: 'Xào nhân thịt băm nấm mèo giòn ngọt đậm đà',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Nhân thịt băm nấm mèo khô ráo, thơm nức mùi tiêu sọ hành phi mặn ngọt đằm vị',
        actionPoints: [
          'Đun nóng 1 thìa canh dầu ăn, phi thơm hành tím băm và tỏi băm.',
          'Trút thịt heo băm vào xào trên lửa vừa cho thịt săn lại.',
          'Cho nấm mèo thái hạt lựu và củ sắn vắt ráo vào đảo đều trong 3 - 4 phút.',
          'Nêm 1 thìa canh nước mắm ngon, 1/2 thìa cà phê tiêu sọ xay và 1/2 thìa cà phê đường. Xào đến khi nhân khô ráo, thơm nức thì tắt bếp.',
        ],
        description:
          'Phi thơm hành tỏi, xào thịt băm với nấm mèo và củ sắn. Nêm nước mắm tiêu sọ đảo khô ráo thơm lừng.',
        tip: 'Vắt ráo củ sắn và xào nhân thật khô ráo giúp khi kẹp vào lòng bánh xôi không làm mềm vỏ xôi chiên giòn.',
      },
      {
        step: 3,
        title: 'Ép khuôn bánh xôi tròn mỏng đều đặn',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Các chiếc bánh xôi tròn nhỏ xinh (dày 1cm), se mặt phẳng phiu',
        actionPoints: [
          'Khi xôi nếp vừa đồ xong còn nóng hổi, trút ra thớt có lót màng bọc thực phẩm (hoặc quết chút dầu ăn).',
          'Dùng cây cán mỏng xôi nếp thành dải phẳng rộng khoảng 1cm. Dùng khuôn tròn (hoặc nắp chai/ly) cắt xôi thành các chiếc bánh tròn nhỏ xinh (đường kính 6 - 7cm).',
          'Để các miếng bánh xôi trong tủ lạnh 30 phút (hoặc quạt mát) cho mặt xôi se lại nhẹ.',
        ],
        description:
          'Cán xôi nếp mỏng 1cm lúc còn nóng, cắt thành các miếng bánh xôi tròn. Để quạt/tủ lạnh 30 phút cho mặt xôi se lại.',
        tip: 'Ép bánh xôi dày vừa đúng 1cm giúp bánh xôi khi chiên vừa phồng giòn rụm lớp vỏ vừa giữ lòng dẻo thơm dẻo dai.',
      },
      {
        step: 4,
        title: 'Chiên xôi phồng vàng rụm 2 mặt trên lửa vừa',
        time: '10 phút',
        heat: 'Lửa vừa (160°C)',
        goal: 'Chiếc bánh xôi chiên phồng xốp, vỏ ngoài vàng rụm giòn tan bên trong dẻo mềm',
        actionPoints: [
          'Đun nóng chảo ngập dầu ăn trên lửa vừa (dầu nóng vừa khoảng 160°C).',
          'Thả từng bánh xôi vào chiên. Dùng kẹp lật liên tục trong 6 - 8 phút.',
          'Chiên đến khi hai mặt bánh xôi phồng rộp, ngả màu vàng ươm giòn rụm bên ngoài thì vớt ra giấy thấm mỡ.',
        ],
        description:
          'Thả bánh xôi vào chảo ngập dầu nóng lật liên tục 8 phút cho vỏ bánh phồng rộp giòn tan vàng ươm rồi vớt ra ráo dầu.',
        tip: 'Chiên dầu ngập bánh và lật đảo liên tục giúp vỏ bánh xôi phồng rộp vàng ươm đồng đều không bị đọng mỡ.',
      },
      {
        step: 5,
        title: 'Kẹp nhân thịt, rưới mỡ hành & thưởng thức nóng hổi',
        time: '3 phút',
        heat: 'Dùng nóng hổi',
        goal: 'Chiếc xôi chiên giòn tan ngập nhân thịt băm nấm mèo, mỡ hành xanh mướt chà bông tương ớt cay nồng',
        actionPoints: [
          'Dùng dao xẻ đôi bánh xôi chiên giòn theo chiều ngang (không xẻ đứt rời).',
          'Múc ngập nhân thịt băm nấm mèo đậm đà kẹp vào lòng bánh xôi.',
          'Phết muỗng mỡ hành xanh mướt, rắc chà bông xù tơ lên mặt bánh. Rưới tương ớt cay nồng và sốt mayonnaise béo ngậy.',
          'Thưởng thức ngay khi bánh xôi chiên còn nóng hổi giòn rụm.',
        ],
        description:
          'Xẻ đôi bánh xôi chiên giòn, kẹp ngập nhân thịt băm nấm mèo, phết mỡ hành, chà bông và rưới tương ớt thưởng thức.',
        tip: 'Thưởng thức ngay khi vừa chiên xong để tận hưởng trọn vẹn độ giòn rụm rộn rã của vỏ xôi chiên kết hợp nhân thịt thơm phức.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm xôi chiên nhân thịt giòn rụm dẻo thơm chuẩn vị truyền thống: 1. Đồ xôi dẻo quánh & ép khuôn mỏng (1cm): Giúp bánh xôi khi chiên chín phồng giòn đều ngoài vỏ mà không bị cứng hay quá dày nếp; 2. Để xôi se mặt trước khi chiên: Tránh cho xôi bị hút dầu hay bị rã nát khi thả vào chảo dầu nóng; 3. Xào nhân thịt nấm mèo thật khô ráo: Tránh nhân chảy nước làm mềm vỏ xôi chiên giòn.',
    recommendedSauce:
      'Tương ớt cay nồng hòa quyện cùng mayonnaise béo ngậy rưới ngập lên chiếc bánh xôi chiên vỏ phồng vàng giòn rụm dẻo thơm, kẹp đẫm nhân thịt băm nấm mèo đậm đà ăn là mê.',
  },
  'com-ga-hai-nam': {
    dishId: 'com-ga-hai-nam',
    dishName: 'Cơm Gà Hải Nam Mọng Nước Sốt Gừng Tỏi Chuẩn Vị',
    seoTitle: 'Cách Làm Cơm Gà Hải Nam Thơm Ngon Đậm Đà Chuẩn Quán',
    ratingValue: '4.9',
    reviewCount: 425,
    prepTime: '25 phút (xát muối gừng tẩy da gà, xào gạo & pha 3 loại nước chấm)',
    cookTime: '35 phút (luộc gà ngâm đá & nấu cơm béo ngậy mỡ gà)',
    difficulty: 'Trung bình',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Gà Ta Thả Vườn Luộc Da Giòn Mọng Nước',
        items: [
          '1 con gà ta thả vườn (khoảng 1.4 - 1.6kg, thịt săn chắc, da tươm vàng)',
          '2 củ gừng tươi giã dập, 5 củ hành tím đập dập, 2 nhánh hành lá (luộc gà)',
          '1 thìa canh muối hạt, 1 thìa canh rượu trắng (chà xát tẩy da gà)',
          '1 thìa canh dầu mè thơm (quết da gà sau luộc cho vàng óng mượt)',
        ],
      },
      {
        category: 'Gạo Thơm & Nước Dùng Nấu Cơm Béo Ngậy',
        items: [
          '3 bát gạo thơm (gạo ST25 hoặc gạo tẻ dẻo ngon, vo sạch ráo nước)',
          '50g mỡ gà tươi (thắng lấy mỡ phi tỏi gừng xào gạo)',
          '3 tép tỏi băm, 1 củ hành tím băm, 1 củ gừng mài nhuyễn',
          '1/2 thìa cà phê bột nghệ tươi (tạo màu cơm vàng nhạt óng ả)',
          '700ml nước luộc gà béo ngọt tự nhiên',
        ],
      },
      {
        category: '3 Bộ Sốt Chấm Cơm Gà Hải Nam Chuẩn Nhà Hàng',
        items: [
          'Sốt gừng tỏi ớt: 3 thìa gừng mài + 2 thìa tỏi băm + 1 thìa ớt băm + 2 thìa nước mắm + 1 thìa chanh + 1 thìa đường',
          'Sốt tương đen ngọt dịu: 3 thìa xì dầu đặc Kikkoman + 1 thìa đường thốt nốt + 1 thìa dầu hàu đun nhẹ',
          'Sốt hành gừng xanh mướt: Hành lá xắt nhỏ + gừng mài + dội mỡ gà sôi',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Khử mùi tẩy da gà ta & luộc gà mọng nước da giòn',
        time: '25 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Gà ta sạch thơm, luộc chín tới da giòn béo ngậy không bị thâm hay dai khô',
        actionPoints: [
          'Chà xát gà ta với muối hạt, gừng giã dập và rượu trắng trong 5 phút để tẩy hoàn toàn mùi hôi. Rửa sạch lại với nước lạnh, để ráo.',
          'Cho gà vào nồi lớn, đổ ngập nước lạnh. Thêm 1 củ gừng giã dập, 5 củ hành tím đập dập và 1 thìa cà phê muối hạt.',
          'Đun sôi trên lửa vừa trong 20 phút, hớt sạch bọt bẩn. Tắt bếp, đậy vung om gà tiếp 15 phút cho thịt chín tới mọng ngọt.',
          'Vớt gà ra ngâm ngay vào thau nước đá lạnh 10 phút cho da gà giòn dai. Dùng cọ quết một lớp dầu mè thơm lên khắp da gà cho vàng óng mượt.',
        ],
        description:
          'Tẩy mùi gà bằng muối gừng rượu. Luộc gà 20 phút, om vung 15 phút rồi vớt ngâm nước đá lạnh. Quết dầu mè cho da gà bóng mượt.',
        tip: 'Om vung 15 phút sau khi tắt bếp giúp thịt gà ngấm ngọt chín mọng từ bên trong mà da gà không bị rách.',
      },
      {
        step: 2,
        title: 'Thắng mỡ gà & xào gạo thơm béo ngậy',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Hạt gạo săn ngấm ngáp mỡ gà thơm phức, thơm nức mùi gừng tỏi phi',
        actionPoints: [
          'Cho 50g mỡ gà tươi vào chảo chống dính đun trên lửa vừa cho mỡ gà tiết ra hết. Vớt tóp mỡ ra.',
          'Cho tỏi băm, hành tím băm và gừng mài vào phần mỡ gà phi thơm ngạt ngào.',
          'Trút gạo thơm đã ráo nước vào chảo xào đảo đều tay trên lửa vừa nhỏ trong 3 - 5 phút đến khi hạt gạo săn lại, ngấm mỡ gà thơm lừng.',
        ],
        description:
          'Thắng mỡ gà tươi, phi thơm tỏi hành gừng rồi trút gạo thơm vào xào săn 5 phút cho hạt gạo bóng ngậy.',
        tip: 'Xào gạo với mỡ gà gừng tỏi giúp từng hạt cơm khi nấu chín căng bóng tơi xốp, đậm đà béo thơm ngậy.',
      },
      {
        step: 3,
        title: 'Nấu cơm gà Hải Nam dẻo thơm hạt bóng',
        time: '25 phút',
        heat: 'Nồi cơm điện (Cook)',
        goal: 'Hạt cơm dẻo tơi, vàng nhạt óng ả béo ngậy hương nước luộc gà tự nhiên',
        actionPoints: [
          'Trút toàn bộ gạo đã xào mỡ gà vào nồi cơm điện.',
          'Cho 1/2 thìa cà phê bột nghệ tươi và rưới 700ml nước luộc gà béo ngọt vào nồi cơm.',
          'Bật chế độ Cook. Khi cơm chín chuyển sang Warm, dùng đũa xới nhẹ tay cho cơm tơi xốp, đậy vung ủ tiếp 10 phút cho cơm dẻo quánh.',
        ],
        description:
          'Nấu gạo đã xào với nước luộc gà béo và bột nghệ trong nồi cơm điện. Ủ ấm 10 phút cho hạt cơm dẻo quánh óng ả.',
        tip: 'Nấu cơm bằng nước luộc gà nguyên chất đem lại màu vàng tự nhiên và vị ngọt bùi béo ngậy đậm đà.',
      },
      {
        step: 4,
        title: 'Pha 3 loại sốt chấm chuẩn vị Hải Nam',
        time: '5 phút',
        heat: 'Nhiệt độ phòng',
        goal: '3 bát sốt chấm gừng tỏi ớt, tương đen Kikkoman kẹo và mỡ hành gừng ngào ngạt',
        actionPoints: [
          'Sốt Gừng Tỏi: Trộn gừng mài, tỏi băm, ớt băm, nước mắm ngon, nước cốt chanh, đường và 1 thìa nước luộc gà khuấy tan.',
          'Sốt Tương Đen: Hòa xì dầu đặc Kikkoman, dầu hàu, đường thốt nốt đun ấm lăn tăn cho sánh kẹo.',
          'Sốt Mỡ Hành Gừng: Dội mỡ gà đun sôi trực tiếp vào chén hành lá xắt nhỏ và gừng mài.',
        ],
        description:
          'Pha sốt gừng tỏi ớt chua cay, đun kẹo sốt tương đen Kikkoman và dội mỡ gà nóng làm sốt mỡ hành gừng.',
        tip: 'Sự kết hợp của 3 loại nước chấm giúp thực khách trải nghiệm trọn vẹn hương vị cơm gà Hải Nam chuẩn nhà hàng.',
      },
      {
        step: 5,
        title: 'Chặt gà, xới cơm & thưởng thức chuẩn nhà hàng',
        time: '5 phút',
        heat: 'Dùng nóng hổi',
        goal: 'Đĩa cơm gà Hải Nam rực rỡ, thịt gà chặt phay da giòn mọng nước, chan ngập sốt gừng tỏi nức mũi',
        actionPoints: [
          'Dùng dao sắc chặt gà ta luộc thành các miếng chữ nhật vừa ăn.',
          'Xới cơm gà thơm béo ngậy ra đĩa lớn. Xếp các miếng gà luộc chặt phay lên đĩa bên cạnh.',
          'Dọn kèm 3 bát nước chấm cùng chén canh bí đao nấu nước luộc gà thanh mát và dưa leo tươi giòn.',
        ],
        description:
          'Chặt gà luộc thành miếng, xới cơm gà béo ngậy ra đĩa, dọn kèm 3 loại nước chấm và chén canh bí đao thanh mát.',
        tip: 'Dùng nóng hổi cùng chén canh bí đao nấu nước luộc gà gạt ngấy giúp bữa ăn tròn vị hoàn hảo.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng nấu cơm gà Hải Nam thơm ngon mọng nước chuẩn quán: 1. Om vung sau luộc & ngâm thau nước đá: Giúp da gà săn giòn béo ngậy, thịt mọng nước ngọt dịu không bị thâm khô; 2. Thắng mỡ gà xào gạo trước khi nấu: Giúp hạt cơm nảy bóng, ngấm ngáp béo thơm tự nhiên không bị nát nhão; 3. Bộ 3 sốt chấm thần thánh (Gừng tỏi ớt, Tương đen Kikkoman, Mỡ hành gừng): Tôn trọn vị béo bùi của thịt gà luộc da giòn và đĩa cơm béo ngậy.',
    recommendedSauce:
      'Chén sốt gừng tỏi ớt chua cay nồng nàn cùng sốt tương đen kẹo ngọt dịu chấm đẫm miếng gà ta da giòn mọng nước, ăn cùng đĩa cơm vàng óng béo ngậy mỡ gà nức mũi.',
  },
  'com-bo-xao-can-toi': {
    dishId: 'com-bo-xao-can-toi',
    dishName: 'Cơm Bò Xào Cần Tỏi Mềm Ngọt Giòn Mát Chuẩn Vị',
    seoTitle: 'Cách Làm Cơm Bò Xào Cần Tỏi Thơm Ngon Đậm Đà Chuẩn Quán',
    ratingValue: '4.9',
    reviewCount: 392,
    prepTime: '15 phút (thái bò mỏng ngâm dầu ăn, nhặt cần tây & thái tỏi củ)',
    cookTime: '15 phút (xào bò lửa lớn mọng nước & xào cần tỏi giòn xanh)',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Thịt Bò Tươi & Gia Vị Ướp Mềm Ngọt',
        items: [
          '350g thịt thăn bò tươi / dẻ sườn bò (thái mỏng ngang thớ)',
          '1 thìa canh dầu hàu thượng hạng, 1 thìa canh nước tương (xì dầu)',
          '1/2 thìa cà phê tiêu sọ xay, 1/2 thìa cà phê hạt nêm',
          '1 thìa canh dầu ăn (khóa độ mọng nước cho thịt bò), 1 thìa cà phê bột năng (tạo độ mềm mượt)',
        ],
      },
      {
        category: 'Rau Cần Tây, Tỏi Ta & Cà Chua Ăn Kèm',
        items: [
          '150g cần tây lá to (rửa sạch, đập dập phần gốc xốp, xắt khúc 4cm)',
          '1 củ tỏi ta đập dập (chia 2 phần phi thơm)',
          '1 củ hành tây (thái múi cau mỏng), 1 quả cà chua tươi (thái múi cau)',
          '1 củ cà rốt / nấm đùi gà (thái lát mỏng giòn ngọt)',
        ],
      },
      {
        category: 'Cơm Trắng Nóng Dẻo & Nước Chấm',
        items: [
          '3 bát cơm trắng dẻo nóng hổi (gạo ST25)',
          '1 chén nước tương xì dầu ớt hiểm xắt lát cay nồng',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Thái thịt bò ngang thớ & ướp kỹ giúp thịt bò mềm ngọt',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Thịt bò thấm ngấm gia vị, mọng nước và không bị dai nhảy khi xào',
        actionPoints: [
          'Thịt thăn bò rửa sạch, dùng khăn thấm khô. Dùng dao sắc thái mỏng ngang thớ thịt.',
          'Ướp thịt bò với 1 thìa canh dầu hàu, 1 thìa canh nước tương, 1/2 thìa cà phê tiêu xay, 1/2 thìa cà phê hạt nêm, 1 thìa cà phê bột năng và 1 thìa canh dầu ăn trong 15 phút.',
        ],
        description:
          'Thái mỏng thịt bò ngang thớ. Ướp dầu hàu, nước tương, tiêu xay, bột năng và dầu ăn 15 phút cho thịt mềm mọng.',
        tip: 'Trộn 1 thìa dầu ăn và 1 thìa bột năng vào thịt bò ướp giúp khóa chặt độ mọng nước tự nhiên, thịt khi xào không bị dai rách.',
      },
      {
        step: 2,
        title: 'Sơ chế cần tây, hành tây & cà chua giòn xanh',
        time: '5 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Cần tây đập dập cọng trắng xốp, hành tây cà chua tươi giòn mướt mắt',
        actionPoints: [
          'Rau cần tây nhặt rửa sạch, đập dập nhẹ phần cọng trắng xốp (giúp cần tây bùng tỏa mùi thơm), thái khúc 4cm.',
          'Hành tây thái múi cau mỏng. Cà chua rửa sạch thái múi cau. Tỏi ta bóc vỏ đập dập giã dập.',
        ],
        description:
          'Rửa sạch cần tây, đập dập cọng trắng rồi xắt khúc 4cm. Thái múi cau hành tây cà chua, đập dập tỏi ta.',
        tip: 'Đập dập nhẹ cọng trắng cần tây trước khi xào giúp tinh dầu cần tây bùng tỏa thơm nức ngạt ngào.',
      },
      {
        step: 3,
        title: 'Xào bò lửa lớn chín tới mọng nước (1.5 phút)',
        time: '2 phút',
        heat: 'Lửa lớn',
        goal: 'Thịt bò chín tới 80% mọng nước ngọt dịu, không bị khô quắt hay chảy nước',
        actionPoints: [
          'Đun nóng chảo chống dính với 1.5 thìa canh dầu ăn trên lửa lớn rực, cho 1/2 lượng tỏi đập dập vào phi thơm giòn rụm.',
          'Trút toàn bộ thịt bò đã ướp vào đảo nhanh tay trên lửa lớn trong 1 - 1.5 phút.',
          'Khi thịt bò vừa chuyển màu hồng nhạt chín tới 80% thì trút ngay thịt bò ra đĩa riêng.',
        ],
        description:
          'Phi thơm tỏi, xào thịt bò trên lửa lớn đảo nhanh tay trong 1.5 phút cho chín tới mọng nước rồi trút ra đĩa.',
        tip: 'Xào thịt bò trên lửa lớn nhanh tay 90 giây rồi trút ra đĩa riêng giữ trọn độ mềm tan ngọt mọng.',
      },
      {
        step: 4,
        title: 'Xào cần tây, hành tây giòn xanh mượt đằm vị',
        time: '3 phút',
        heat: 'Lửa lớn',
        goal: 'Cần tây, hành tây chín tới giòn xanh mướt, hòa quyện đĩa thịt bò xào bốc khói',
        actionPoints: [
          'Giữ nguyên chảo, cho thêm 1 thìa cà phê dầu ăn, phi phần tỏi đập dập còn lại cho thơm.',
          'Trút cọng cần tây, hành tây và cà chua vào xào đảo nhanh tay trên lửa lớn trong 2 phút.',
          'Nêm 1/2 thìa cà phê hạt nêm và 1/2 thìa canh dầu hàu. Khi cần tây vừa chín tới giòn xanh mướt thì trút đĩa thịt bò xào vào chảo đảo đều nhanh tay 30 giây rồi tắt bếp.',
        ],
        description:
          'Phi thơm tỏi, xào cần tây, hành tây và cà chua lửa lớn 2 phút. Trút thịt bò vào đảo nhanh 30 giây rồi tắt bếp.',
        tip: 'Xào cần tây vừa chín tới giữ trọn màu xanh tươi giòn rụm và độ mọng ngọt đặc trưng.',
      },
      {
        step: 5,
        title: 'Xới cơm dẻo, múc thịt bò xào cần tỏi & thưởng thức',
        time: '2 phút',
        heat: 'Dùng nóng hổi',
        goal: 'Đĩa cơm bò xào cần tỏi thơm nức mũi, thịt bò mềm mọng ngọt ngào ăn cùng cơm dẻo',
        actionPoints: [
          'Xới cơm trắng dẻo nóng hổi ra đĩa lớn.',
          'Múc ngập thịt bò xào cần tây hành tây giòn ngọt bốc khói ngào ngạt lên mặt cơm, rưới muỗng nước xào thịt bò ngọt bùi lên cơm trắng.',
          'Rắc tiêu sọ xay thơm lừng. Thưởng thức ngay khi còn nóng hổi chấm kèm chén nước tương ớt hiểm cay nồng.',
        ],
        description:
          'Xới cơm ra đĩa, múc ngập thịt bò xào cần tỏi lên mặt cơm, rắc tiêu sọ và dùng nóng với chén nước tương ớt hiểm.',
        tip: 'Rưới muỗng nước xào ngọt thơm ngập lên đĩa cơm dẻo giúp từng hạt cơm thấm vị bò xào đậm đà tuyệt đỉnh.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm cơm bò xào cần tỏi mềm ngọt giòn mượt chuẩn quán: 1. Thái thịt bò mỏng ngang thớ & ướp bột năng + dầu ăn: Khóa trọn nước ngọt bên trong giúp thịt bò mềm mượt không bị khô dai; 2. Xào bò lửa lớn trong 90 giây rồi trút ra đĩa: Tránh xào chung từ đầu làm thịt bò mất nước và dai; 3. Đập dập phần cọng cần tây trước khi xào: Giúp cọng cần tây bùng tỏa hương thơm ngạt ngào đặc trưng.',
    recommendedSauce:
      'Chén nước tương (xì dầu) ngon xắt thêm vài lát ớt hiểm cay nồng rưới nhẹ lên đĩa cơm bò xào cần tỏi bốc khói ngạt ngào, múc muỗng cơm quyện thịt bò mềm ngọt và cần tây giòn xanh ngạt ngào hương vị.',
  },
  'mi-cay-han-quoc': {
    dishId: 'mi-cay-han-quoc',
    dishName: 'Mì Cay 7 Cấp Độ Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    seoTitle: 'Cách Nấu Mì Cay 7 Cấp Độ Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    ratingValue: '4.9',
    reviewCount: 438,
    prepTime: '20 phút (sơ chế hải sản, thịt bò Mỹ, nấm kim châm & làm sốt ớt 7 cấp độ)',
    cookTime: '15 phút (hầm nước dùng xương củ quả & nấu thố đất bốc khói)',
    difficulty: 'Trung bình',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Mì Koreno Dai Giòn & Nước Dùng Thanh Ngọt',
        items: [
          '3 gói mì không vị Koreno Hàn Quốc (sợi dai tròn chắc)',
          '1kg xương heo / xương gà (hầm lấy 1.5 lít nước dùng thanh ngọt)',
          '1/2 củ củ cải trắng, 1 củ hành tây, 100g kim chi Hàn Quốc thái nhỏ (nấu nước dùng)',
          '2 thìa canh tương ớt Gochujang Hàn Quốc, 1 thìa canh ớt bột Hàn Quốc (tạo màu đỏ phong bàng)',
          '1 thìa canh hạt nêm, 1 thìa canh nước mắm ngon, 1/2 thìa cà phê đường',
        ],
      },
      {
        category: 'Đồ Nhúng Hải Sản, Bò Mỹ & Rau Nấm',
        items: [
          '200g tôm sú tươi (bóc vỏ chừa đuôi), 200g mực ống tươi (làm sạch thái khoanh)',
          '200g ba chỉ bò Mỹ bào mỏng (cuộn tròn mỏng)',
          '2 cây xúc xích Đức / xúc xích phô mai thái lát xéo',
          '1 gói nấm kim châm (cắt gốc rửa sạch), 1/2 cây bông cải xanh / súp lơ',
          '1/4 bắp bắp cải tím thái sợi mỏng, 3 nhánh hành tỏi băm',
        ],
      },
      {
        category: 'Sốt Ớt Cấp Độ Cay Tự Điều Chỉnh (Cấp 1 -> Cấp 7)',
        items: [
          'Ớt 7 cấp độ: Hỗn hợp ớt bột Gochutgaru + ớt hiểm khô xay mịn (tự nêm từ 1/2 đến 3 thìa cà phê)',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Hầm nước dùng thanh ngọt tự nhiên từ xương & củ quả',
        time: '20 phút',
        heat: 'Lửa vừa',
        goal: 'Nước dùng trong vắt, thanh ngọt tự nhiên ngấm vị chua thanh nhẹ của kim chi',
        actionPoints: [
          'Xương heo/gà chần qua nước sôi rửa sạch. Cho vào nồi hầm với 1.5 lít nước cùng củ cải trắng và hành tây trong 30 phút trên lửa vừa, hớt sạch bọt bẩn.',
          'Vớt bỏ xương và củ cải. Cho kim chi thái nhỏ, 2 thìa canh tương ớt Gochujang, 1 thìa canh ớt bột Hàn Quốc, hạt nêm và nước mắm vào đun sôi bùng cho nước dùng ngấu màu đỏ cam ngạt ngào.',
        ],
        description:
          'Hầm xương heo với củ cải hành tây 30 phút lấy nước ngọt. Cho kim chi, tương ớt Gochujang và ớt bột vào đun sôi bùng.',
        tip: 'Hầm củ cải trắng và kim chi Hàn Quốc đem lại vị ngọt thanh tự nhiên dịu mát, cân bằng hoàn hảo độ cay nồng xé lưỡi.',
      },
      {
        step: 2,
        title: 'Sơ chế hải sản, thịt bò Mỹ & nấm rau tươi ngon',
        time: '10 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Tôm mực tươi rói ráo nước, bò Mỹ mềm mượt, nấm kim châm và rau củ tươi sạch',
        actionPoints: [
          'Tôm sú rửa sạch bóc vỏ bỏ chỉ đen. Mực ống làm sạch thái khoanh dầy 1cm.',
          'Thịt ba chỉ bò Mỹ giã đông tự nhiên.',
          'Nấm kim châm cắt gốc xé nhỏ. Bông cải xanh xắt miếng vừa ăn, bắp cải tím thái sợi.',
        ],
        description:
          'Sơ chế tôm sú, mực ống thái khoanh, rã đông bò Mỹ, xé nấm kim châm và thái sợi bắp cải tím.',
        tip: 'Rửa tôm mực qua chút nước gừng pha rượu giúp hải sản giòn ngọt bít kín vị tanh.',
      },
      {
        step: 3,
        title: 'Chuẩn bị thố đất & nấu nước dùng mì cay bốc khói',
        time: '3 phút',
        heat: 'Lửa lớn',
        goal: 'Thố đất đun nóng hổi bốc khói lách tách, nước dùng kim chi sôi lăn tăn',
        actionPoints: [
          'Đặt thố đất (hoặc nồi lẩu nhỏ) lên bếp đun nóng với 1 thìa dầu ăn, phi thơm hành tỏi băm.',
          'Múc 400ml nước dùng kim chi thơm lừng đang đun sôi vào thố đất.',
          'Cho 1 vắt mì Koreno Hàn Quốc vào trung tâm thố đất.',
        ],
        description:
          'Phi thơm hành tỏi trong thố đất nóng, múc nước dùng kim chi sôi bùng vào và thả 1 vắt mì Koreno.',
        tip: 'Nấu trong thố đất giữ nhiệt cực lâu giúp mì Koreno chín từ từ dai giòn và nước dùng luôn bốc khói sủi bọt.',
      },
      {
        step: 4,
        title: 'Nhúng hải sản, bò Mỹ, nấm kim châm & cho độ cay (Cấp 1 - 7)',
        time: '4 phút',
        heat: 'Lửa lớn',
        goal: 'Thố đất mì cay đẫm hải sản tươi giòn, bò Mỹ mềm mọng và độ cay vừa chuẩn',
        actionPoints: [
          'Xếp đẹp mắt xung quanh mì Koreno: tôm sú, mực ống, ba chỉ bò Mỹ, xúc xích, nấm kim châm, bông cải xanh và bắp cải tím.',
          'Cho sốt ớt bột cấp độ vào thố đất tùy theo khẩu vị (1/2 thìa = Cấp 1 dịu nhẹ; 1 thìa = Cấp 3 đậm đà; 2 - 3 thìa = Cấp 7 xé lưỡi).',
          'Đun sôi trên lửa lớn trong 3 - 4 phút cho hải sản, thịt bò Mỹ và mì Koreno chín tới.',
        ],
        description:
          'Xếp tôm mực, bò Mỹ, nấm kim châm quanh vắt mì, nêm sốt ớt bột theo cấp độ yêu thích và đun sôi 4 phút.',
        tip: 'Nêm ớt bột cấp độ từ từ theo khẩu vị giúp người ăn thưởng thức trọn vẹn độ ngon mà không bị sốc cay.',
      },
      {
        step: 5,
        title: 'Bưng thố đất mì cay bốc khói & thưởng thức nóng hổi',
        time: '2 phút',
        heat: 'Dùng nóng hổi',
        goal: 'Thố đất mì cay 7 cấp độ bốc khói nghi ngút, sợi mì dai giòn hải sản ngọt lịm',
        actionPoints: [
          'Tắt bếp, rắc hành lá xắt nhỏ và tiêu xay.',
          'Bưng thố đất mì cay đang sôi lách tách bốc khói ngạt ngào ra bàn (đặt trên đế lót gỗ).',
          'Thưởng thức ngay khi mì Koreno còn dai giòn sần sật, hải sản giòn ngọt, thịt bò Mỹ mềm tan hòa quyện nước dùng chua cay thanh ngọt đậm đà.',
        ],
        description:
          'Bưng thố đất mì cay bốc khói ra bàn, rắc hành lá tiêu xay và dùng ngay khi còn nóng hổi sủi bọt lách tách.',
        tip: 'Ăn ngay khi còn nóng hổi trong thố đất để cảm nhận độ dai sần sật tuyệt hảo của sợi mì Koreno Hàn Quốc.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng nấu mì cay 7 cấp độ nước dùng thanh ngọt chuẩn vị gia đình: 1. Hầm nước dùng từ xương củ cải & kim chi Hàn Quốc: Tạo vị ngọt thanh tự nhiên cân bằng vị cay nóng xé lưỡi; 2. Nấu trong thố đất giữ nhiệt nóng hổi: Giúp sợi mì Koreno chín tới dai giòn mà không bị bết nhão; 3. Dùng ớt bột Gochutgaru phối ớt hiểm khô: Tạo màu đỏ thẩm mỹ rực rỡ và độ cay nồng ấm áp đặc trưng Hàn Quốc.',
    recommendedSauce:
      'Thố đất mì cay 7 cấp độ bốc khói nghi ngút sủi bọt lách tách, nước dùng kim chi thanh ngọt chua cay ngạt ngào, ngập tràn tôm mực giòn ngọt, ba chỉ bò Mỹ mềm tan và mì Koreno dai sần sật nóng hổi tuyệt đỉnh.',
  },
  'mi-tron-top-mo': {
    dishId: 'mi-tron-top-mo',
    dishName: 'Mì Trộn Tóp Mỡ Trứng Lòng Đào Sốt Chua Ngọt',
    seoTitle: 'Cách Làm Mì Trộn Tóp Mỡ Sốt Chua Ngọt Đậm Đà Chuẩn Vị',
    ratingValue: '4.9',
    reviewCount: 412,
    prepTime: '15 phút (thái mỡ heo chiên giòn, luộc trứng lòng đào & trụng mì)',
    cookTime: '15 phút (thắng tóp mỡ giòn rụm & nấu sốt trộn kẹo chua ngọt)',
    difficulty: 'Dễ',
    servings: '2 - 3 người',
    ingredients: [
      {
        category: 'Mì Trụng & Tóp Mỡ Giòn Rụm Béo Bùi',
        items: [
          '3 vắt mì trứng / mì gói Hảo Hảo (trụng nước sôi chín tới 80% còn dai giòn)',
          '300g mỡ sa / mỡ gáy heo tươi (thái hạt lựu vuông 1.5cm, thắng giòn rụm)',
          '1/2 thìa cà phê muối hạt, 1 thìa canh rượu trắng (ngâm rửa mỡ heo)',
          '3 củ hành tím thái mỏng (phi thơm cùng tóp mỡ)',
        ],
      },
      {
        category: 'Nước Sốt Trộn Mì Chua Ngọt Kẹo Đậm Đà',
        items: [
          '2 thìa canh tương ớt xí muội / tương ớt Chinsu',
          '1 thìa canh tương cà, 1.5 thìa canh nước mắm ngon',
          '1 thìa canh đường thốt nốt / đường cát, 1 thìa canh nước quất (tắc) tươi / dấm gạo',
          '1 thìa cà phê sa tế tỏi ớt, 1/2 thìa cà phê tiêu sọ xay',
          '3 tép tỏi băm nhuyễn, 2 củ hành tím băm',
        ],
      },
      {
        category: 'Topping Ăn Kèm & Bát Canh Xương Thanh Ngọt',
        items: [
          '2 quả trứng gà luộc lòng đào (hoặc trứng ốp la lòng đỏ chảy tràn)',
          '100g thịt heo băm / xá xíu thái mỏng, 4 con tôm sú luộc',
          '1 đĩa cải ngọt / cải cúc trụng sơ giòn mát, 2 nhánh hành lá tươi',
          '2 bát nước dùng xương heo củ cải thanh ngọt (dùng kèm mì trộn)',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế mỡ heo & thắng tóp mỡ giòn rụm rộn rã',
        time: '15 phút',
        heat: 'Lửa vừa',
        goal: 'Những viên tóp mỡ vàng rơm giòn rụm thơm nức, không bị gắt dầu',
        actionPoints: [
          'Mỡ heo rửa sạch với nước muối pha rượu trắng, thấm khô rồi thái hạt lựu vuông 1.5cm.',
          'Cho mỡ heo vào chảo đun trên lửa vừa cùng 2 thìa canh nước lọc và 1/2 thìa cà phê muối. Đun đến khi mỡ heo tiết sạch mỡ, teo lại thành những viên tóp mỡ vàng rơm giòn rụm.',
          'Cho hành tím thái mỏng vào chảo tóp mỡ phi thơm giòn rụm trong 30 giây cuối rồi vớt tóp mỡ ra bát ráo mỡ.',
        ],
        description:
          'Thái mỡ heo hạt lựu, đun với chút nước và muối cho mỡ tiết hết thành tóp mỡ vàng rơm giòn rụm. Phi hành tím thơm vớt ra ráo mỡ.',
        tip: 'Thắng mỡ heo cùng chút nước lọc và muối hạt giúp tóp mỡ vàng ươm giòn rụm cực lâu mà mỡ heo không bị bắn hay khét.',
      },
      {
        step: 2,
        title: 'Nấu nước sốt trộn mì kẹo chua ngọt đậm đà',
        time: '5 phút',
        heat: 'Lửa nhỏ',
        goal: 'Nước sốt kẹo sánh mịn chua ngọt cay nồng, đằm vị mặn ngọt vừa vặn',
        actionPoints: [
          'Cho 1 thìa canh mỡ heo vừa thắng vào chảo, phi thơm tỏi băm và hành tím băm.',
          'Trút vào chảo: 2 thìa canh tương ớt, 1 thìa canh tương cà, 1.5 thìa canh nước mắm ngon, 1 thìa canh đường, 1 thìa canh nước quất tươi và 1 thìa cà phê sa tế tỏi.',
          'Đun sôi trên lửa nhỏ trong 2 - 3 phút cho hỗn hợp sốt kẹo lại sánh mịn, dậy mùi thơm nức.',
        ],
        description:
          'Phi thơm tỏi hành, đun kẹo tương ớt, tương cà, nước mắm, đường, nước quất tươi và sa tế tỏi 3 phút cho sốt sánh kẹo đằm vị.',
        tip: 'Dùng nước quất (tắc) tươi thay cho giấm đem lại vị chua thanh ngào ngạt hương thơm tự nhiên.',
      },
      {
        step: 3,
        title: 'Trụng mì trứng dai giòn & luộc trứng lòng đào',
        time: '10 phút',
        heat: 'Lửa lớn',
        goal: 'Sợi mì trứng dai giòn tơi xốp, trứng gà lòng đào quánh dẻo đỏ au',
        actionPoints: [
          'Trụng mì trứng/mì gói trong nước sôi 1 phút cho chín tới 80%. Vớt xả ngay nước lạnh rồi trộn với 1 thìa mỡ heo cho tơi bóng.',
          'Luộc trứng gà trong nước sôi đúng 6 phút, vớt ngâm thau nước đá 5 phút rồi bóc vỏ cắt đôi lộ lòng đào quánh dẻo.',
          'Trụng cải ngọt, luộc tôm sú và xào đằm vị thịt heo băm.',
        ],
        description:
          'Trụng mì 1 phút xả nước lạnh trộn mỡ heo. Luộc trứng gà 6 phút ngâm nước đá cắt đôi lòng đào quánh dẻo.',
        tip: 'Trụng mì tới 80% rồi trộn mỡ heo giúp sợi mì săn dai giòn sần sật, không bị nở bở nhão khi trộn sốt.',
      },
      {
        step: 4,
        title: 'Trộn mì đẫm sốt kẹo chua ngọt ngào ngạt',
        time: '2 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Từng sợi mì vàng ươm bóng mượt, thấm đẫm lớp áo sốt kẹo chua ngọt đậm đà',
        actionPoints: [
          'Trút mì đã trụng vào tô lớn.',
          'Rưới 3 - 4 thìa nước sốt kẹo chua ngọt còn ấm nóng vào tô mì.',
          'Dùng đũa trộn đều tay cho nước sốt kẹo bóng mượt bám chặt bao bọc quanh từng sợi mì.',
        ],
        description:
          'Rưới sốt kẹo chua ngọt ấm nóng vào tô mì, dùng đũa trộn đều tay cho nước sốt ngấm ngáp từng sợi mì.',
        tip: 'Trộn sốt lúc sốt còn ấm nóng giúp sốt kẹo quánh bám chặt hoàn hảo vào thớ sợi mì.',
      },
      {
        step: 5,
        title: 'Bày tóp mỡ giòn rụm, trứng lòng đào & thưởng thức',
        time: '3 phút',
        heat: 'Dùng nóng hổi',
        goal: 'Đĩa mì trộn tóp mỡ rực rỡ, tóp mỡ giòn tan rộn rã, trứng lòng đào ngậy béo và sốt chua ngọt bùng nổ',
        actionPoints: [
          'Gắp mì trộn sốt ra đĩa lớn hoặc tô ô tô.',
          'Xếp ngập các loại topping lên mặt mì: bát tóp mỡ giòn rụm béo ngậy, trứng gà lòng đào quánh dẻo, tôm sú luộc, thịt băm xào, cải ngọt trụng và mỡ hành xanh mướt.',
          'Trộn đều thưởng thức ngay khi sợi mì dai giòn, tóp mỡ giòn tan rộn rã quyện lòng đỏ trứng béo ngậy.',
        ],
        description:
          'Gắp mì ra đĩa, bày ngập tóp mỡ giòn rụm, trứng lòng đào, tôm luộc, mỡ hành và rưới sốt thưởng thức nóng hổi.',
        tip: 'Trộn tan lòng đỏ trứng lòng đào quyện cùng tóp mỡ giòn rụm đem lại trải nghiệm béo bùi ngậy ngon tuyệt đỉnh.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm mì trộn tóp mỡ sốt chua ngọt đậm đà chuẩn vị: 1. Thắng mỡ heo với chút nước lọc & muối: Giúp tóp mỡ vàng rơm giòn rụm lâu không bị gắt dầu; 2. Nấu sốt tương ớt quất (tắc) đun kẹo: Tạo độ sánh mịn bám chặt quanh sợi mì, vị chua thanh mặn ngọt cân bằng vị béo; 3. Trụng mì 80% & trộn mỡ nóng: Giúp sợi mì giữ độ dai giòn sần sật không bị bở nhão.',
    recommendedSauce:
      'Nước sốt chua ngọt kẹo quánh bám chặt từng sợi mì trứng dai giòn, quyện ngập tóp mỡ giòn rụm béo ngậy, lòng đỏ trứng gà lòng đào quánh dẻo và sa tế tỏi cay nồng ngạt ngào.',
  },
  'mi-xao-gion': {
    dishId: 'mi-xao-gion',
    dishName: 'Mì Xào Giòn Hải Sản Thập Cẩm Chuẩn Vị Bếp Trưởng',
    seoTitle: 'Cách Làm Mì Xào Giòn Thơm Lừng, Đậm Đà Chuẩn Bếp Trưởng',
    ratingValue: '4.9',
    reviewCount: 428,
    prepTime: '20 phút (sơ chế tôm, mực, cật/xá xíu & nhặt rau cải ngọt nấm đùi gà)',
    cookTime: '20 phút (chiên tổ mì phồng giòn vàng rươm & xào nước sốt sệt kẹo)',
    difficulty: 'Trung bình',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Mì Trứng Chiên Phồng Vàng Ơm Giòn Rụm',
        items: [
          '4 vắt mì trứng tươi (hoặc mì tươi chuyên làm mì xào giòn)',
          'Dầu ăn ngập chảo để chiên tổ mì phồng vàng giòn rụm',
        ],
      },
      {
        category: 'Nhân Hải Sản Thập Cẩm & Thịt Xá Xíu',
        items: [
          '200g tôm sú tươi (bóc vỏ chừa đuôi, chẻ lưng rút chỉ)',
          '200g mực ống tươi (khía vảy rồng, thái miếng vừa ăn)',
          '100g thịt xá xíu / thịt heo thăn (thái lát mỏng)',
          '100g gan heo / chả lụa thái lát mỏng (tùy thích)',
        ],
      },
      {
        category: 'Rau Củ Tươi Giòn & Nước Dùng Nấu Sốt',
        items: [
          '150g cải ngọt / cải ngồng (rửa sạch xắt khúc 5cm)',
          '1 củ cà rốt (tỉa hoa thái lát mỏng), 100g nấm đùi gà / nấm rơm (thái lát)',
          '1/2 củ hành tây thái múi cau, 3 củ hành tím băm, 3 tép tỏi băm',
          '400ml nước dùng xương heo / nước hầm gà thanh ngọt',
        ],
      },
      {
        category: 'Nước Sốt Sệt Kẹo Đậm Đà Vị Hoa',
        items: [
          '2 thìa canh dầu hàu thượng hạng, 2 thìa canh nước tương (xì dầu)',
          '1 thìa canh dầu mè thơm, 1 thìa cà phê hạt nêm, 1/2 thìa cà phê tiêu sọ xay',
          '2 thìa canh bột năng / bột sắn dây (hoà tan với 4 thìa nước lọc tạo độ sánh kẹo)',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế hải sản, thịt & rau củ thập cẩm',
        time: '20 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Tôm mực tươi giòn ráo nước, rau cải ngọt nấm cà rốt cắt miếng tươi mướt',
        actionPoints: [
          'Tôm bóc vỏ chừa đuôi rút chỉ đen. Mực ống rửa sạch với nước muối gừng, khía vảy rồng thái miếng vừa ăn. Ướp tôm mực với 1/2 thìa cà phê hạt nêm và tiêu xay.',
          'Cải ngọt rửa sạch xắt khúc 5cm. Cà rốt tỉa hoa thái lát. Nấm đùi gà thái lát mỏng. Hành tây thái múi cau.',
        ],
        description:
          'Sơ chế tôm rút chỉ, khía vảy rồng mực ống. Xắt khúc cải ngọt, tỉa hoa cà rốt và thái lát nấm đùi gà.',
        tip: 'Khía vảy rồng trên thân mực giúp mực chín xoăn nảy đẹp mắt và ngấm sâu nước sốt.',
      },
      {
        step: 2,
        title: 'Chiên tổ mì trứng phồng vàng ươm giòn rụm',
        time: '5 phút',
        heat: 'Lửa lớn (170°C)',
        goal: 'Tổ mì phồng xốp giòn rụm, vàng ươm đẹp mắt không bị ngấm mỡ',
        actionPoints: [
          'Tách tơi các vắt mì trứng. Đun nóng chảo ngập dầu ăn trên lửa lớn (dầu nóng khoảng 170°C).',
          'Cho tơi mì trứng vào chảo chiên. Mì sẽ lập tức phồng rộp xốp giòn. Dùng vá ấn nhẹ ép mì thành khối tổ mì tròn phồng.',
          'Chiên trong 2 - 3 phút cho hai mặt tổ mì ngả màu vàng ươm giòn rụm thì vớt ra giấy thấm mỡ, đặt lên đĩa lớn sâu lòng.',
        ],
        description:
          'Thả tơi mì trứng vào chảo ngập dầu nóng rực chiên phồng xốp 3 phút cho hai mặt vàng ươm giòn rụm rồi vớt ra ráo dầu.',
        tip: 'Chiên mì ở nhiệt độ dầu nóng rực (170°C) giúp sợi mì phồng xốp giòn tan ngay lập tức mà không bị đọng mỡ.',
      },
      {
        step: 3,
        title: 'Trụng sơ rau củ & chần hải sản mọng ngọt',
        time: '3 phút',
        heat: 'Lửa lớn',
        goal: 'Rau cải ngọt xanh mướt giòn ngọt, tôm mực chín tới 80% mọng nước',
        actionPoints: [
          'Đun sôi nồi nước nhỏ với vài giọt dầu ăn và chút muối hạt.',
          'Cho cà rốt, nấm đùi gà và cải ngọt vào trụng nhanh trong 45 giây rồi vớt ngay ra thau nước đá lạnh.',
          'Chần sơ tôm mực trong nước sôi 1 phút chín tới 80% rồi vớt ráo nước.',
        ],
        description:
          'Trụng cà rốt, nấm và cải ngọt 45 giây ngâm ngay nước đá. Chần sơ tôm mực trong nước sôi 1 phút.',
        tip: 'Vớt rau củ trụng ra ngâm thau nước đá lạnh lập tức giúp giữ trọn màu xanh tươi rực rỡ và độ giòn ngọt.',
      },
      {
        step: 4,
        title: 'Nấu nước sốt sệt kẹo béo ngậy vị dầu hàu thơm lừng',
        time: '5 phút',
        heat: 'Lửa lớn',
        goal: 'Nước sốt hải sản dầu hàu sánh kẹo bóng mượt, thơm nức mùi dầu mè tiêu sọ',
        actionPoints: [
          'Phi thơm tỏi băm và hành tím băm. Trút tôm sú, mực ống và thịt xá xíu vào xào săn trên lửa lớn trong 1 phút.',
          'Đổ 400ml nước dùng xương heo vào chảo, nêm 2 thìa canh dầu hàu, 2 thìa canh nước tương, hạt nêm, đường và tiêu sọ xay. Đun sôi bùng.',
          'Trút rau cải ngọt, cà rốt, nấm và hành tây vào chảo. Từ từ rưới bát nước bột năng đã hòa tan vào khuấy nhẹ tay đến khi nước sốt sánh kẹo bọc quanh hải sản rau củ. Rưới 1 thìa canh dầu mè thơm rồi tắt bếp.',
        ],
        description:
          'Xào săn tôm mực xá xíu, cho nước dùng xương heo đun sôi với dầu hàu xì dầu. Thả rau củ vào rưới bột năng khuấy sánh kẹo béo ngậy.',
        tip: 'Rưới bột năng từ từ khuấy đều tay giúp nước sốt có độ sánh kẹo bóng mượt hoàn hảo bọc chặt lấy hải sản.',
      },
      {
        step: 5,
        title: 'Rưới nước sốt sánh kẹo lên tổ mì giòn rụm & thưởng thức',
        time: '2 phút',
        heat: 'Dùng nóng hổi',
        goal: 'Đĩa mì xào giòn thơm lừng bốc khói, mì giòn tan rộn rã ngấm ngáp nước sốt hải sản đậm đà',
        actionPoints: [
          'Múc ngập tôm mực, xá xíu và rau củ cùng nước sốt sệt nóng hổi rưới trực tiếp lên tổ mì chiên giòn rụm trên đĩa.',
          'Rắc tiêu sọ xay thơm lừng. Dọn kèm chén xì dầu tỏi ớt xắt cay nồng.',
          'Thưởng thức ngay khi tiếng mì chiên kêu "xèo xèo" sỉn sịn, từng sợi mì giòn tan mềm dần ngấm đẫm nước sốt hải sản đậm đà béo ngậy.',
        ],
        description:
          'Múc hải sản rau củ và rưới ngập nước sốt sánh kẹo lên tổ mì chiên giòn, rắc tiêu xay và thưởng thức nóng hổi.',
        tip: 'Rưới sốt nóng trực tiếp lúc ăn để cảm nhận trọn vẹn độ giòn rụm phồng xốp rộn rã kêu "xèo xèo" đặc trưng.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm mì xào giòn hải sản đậm đà chuẩn bếp trưởng: 1. Chiên mì dầu nóng rực (170°C): Giúp sợi mì phồng xốp giòn tan ngay lập tức không bị ngấm mỡ hay bị cứng sượng; 2. Trụng rau củ qua nước đá & chần sơ hải sản: Giữ cải ngọt xanh mướt giòn ngọt, tôm mực mọng nước không bị dai; 3. Tạo độ sánh kẹo bằng bột năng & dầu mè thơm: Nước sốt sánh mượt bao bọc thớt mì, giữ độ giòn rụm rộn rã kéo dài khi ăn.',
    recommendedSauce:
      'Nước sốt hải sản dầu hàu sánh kẹo thơm ngạt ngào mùi dầu mè tiêu sọ, rưới ngập lên tổ mì chiên phồng vàng rụm kêu "xèo xèo", quyện cùng tôm mực giòn ngọt và rau cải xanh mướt ngon tuyệt đỉnh.',
  },
  'bun-rieu-cua-bap-bo': {
    dishId: 'bun-rieu-cua-bap-bo',
    dishName: 'Bún Riêu Cua Đồng Nước Dùng Thanh Ngọt Chuẩn Vị',
    seoTitle: 'Cách Nấu Bún Riêu Cua Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    ratingValue: '4.9',
    reviewCount: 452,
    prepTime: '25 phút (giã lọc cua đồng, thái cà chua mắm tôm & nhặt rau sống)',
    cookTime: '35 phút (đun nổi tảng riêu cua, chưng gạch & nấu nước dùng giấm bỗng)',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Cua Đồng Tươi & Nước Dùng Thanh Ngọt',
        items: [
          '500g cua đồng tươi (giã nhuyễn, lọc kỹ lấy 1.8 lít nước cốt cua)',
          '1 thìa cà phê muối hạt (cho vào nước cua trước khi đun đóng tảng riêu)',
          '3 quả cà chua chín mọng (thái múi cau), 2 thìa canh giấm bỗng thơm nhẹ',
          '1 thìa canh mắm tôm ngon thượng hạng, 1 thìa canh nước mắm, 1/2 thìa cà phê hạt nêm',
          '2 thìa canh dầu màu điều (chưng gạch cua cho màu đỏ óng mượt)',
        ],
      },
      {
        category: 'Chả Riêu Cua, Đậu Hũ & Đồ Nhúng',
        items: [
          '200g thịt heo băm + 1 quả trứng gà + 1 thìa gạch cua (trộn hấp thành chả riêu xốp bùi)',
          '3 bìa đậu hũ (đậu phụ chiên vàng giòn mọng nước)',
          '200g bắp bò hoa thái mỏng (hoặc giò lụa/chả cây)',
          '100g huyết heo (tiết heo) luộc chín thái khối vừa ăn',
        ],
      },
      {
        category: 'Bún Tươi & Rau Sống Ăn Kèm Chuẩn Vị',
        items: [
          '1kg bún tươi cọng nhỏ',
          'Rau ăn kèm: Bắp chuối bào mỏng, rau muống chẻ, giá đỗ, kinh giới, tía tơi, hoa chuối',
          '1 chén mắm tôm đánh bông với chanh ớt, ớt chưng xào cay',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Giã lọc cua đồng & đun đóng tảng riêu cua xốp bùi',
        time: '25 phút',
        heat: 'Lửa vừa',
        goal: 'Tảng riêu cua đồng kết dính nổi cuồn cuộn trên mặt nước, không bị vỡ tan',
        actionPoints: [
          'Cua đồng gỡ mai khều gạch để riêng. Thân cua giã nhuyễn (hoặc xay mịn) cùng 1/2 thìa cà phê muối hạt.',
          'Hòa 1.8 lít nước sạch với cua giã, lọc qua rây nhiều lần bỏ hoàn toàn bã cua.',
          'Trút nước cốt cua vào nồi đun lửa vừa, khuấy nhẹ theo một chiều đến khi nước cua ấm nóng.',
          'Khi nước bắt đầu sôi nhẹ, tảng riêu cua tự động kết dính nổi cuồn cuộn lên mặt nước. Vớt tảng riêu cua ra bát riêng.',
        ],
        description:
          'Giã nhuyễn cua đồng lọc lấy 1.8 lít nước cốt cua. Đun lửa vừa khuấy nhẹ tay cho tảng riêu cua kết dính nổi cuồn cuộn rồi vớt ra bát.',
        tip: 'Cho chút muối hạt khi giã cua và khuấy nhẹ tay lúc bắt đầu đun giúp thịt cua đóng khối tảng riêu béo bùi cuồn cuộn.',
      },
      {
        step: 2,
        title: 'Chưng gạch cua màu đỏ điều ngạt ngào hương thơm',
        time: '5 phút',
        heat: 'Lửa vừa',
        goal: 'Gạch cua chưng dậy mùi thơm phức, nước sốt gạch màu đỏ điều óng mượt bắt mắt',
        actionPoints: [
          'Đun nóng 2 thìa canh dầu màu điều trong chảo, phi thơm hành tím băm.',
          'Cho chén gạch cua vào chưng nhanh tay trên lửa vừa trong 1 - 2 phút đến khi gạch cua chuyển màu vàng đỏ óng mượt, thơm nức ngào ngạt.',
          'Rưới 1/2 lượng gạch cua chưng lên bát tảng riêu cua để tạo lớp áo bóng rực.',
        ],
        description:
          'Phi thơm hành tím với dầu màu điều, chưng gạch cua 2 phút cho thơm phức màu đỏ điều óng mượt. Rưới lên bát riêu cua.',
        tip: 'Dùng dầu màu điều chưng gạch cua giúp nước dùng bún riêu lên màu đỏ quyến rũ tự nhiên không cần màu thực phẩm.',
      },
      {
        step: 3,
        title: 'Xào cà chua & nấu nước dùng bún riêu giấm bỗng thanh ngọt',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Nước dùng bún riêu thanh ngọt đậm đà, chua dịu nhẹ vị giấm bỗng ngát hương mắm tôm',
        actionPoints: [
          'Trút cà chua thái múi cau vào chảo vừa chưng gạch xào chín tới trên lửa lớn 2 phút.',
          'Trút cà chua xào và phần gạch cua chưng còn lại vào nồi nước dùng cua.',
          'Nêm 1 thìa canh mắm tôm ngon, 1 thìa canh nước mắm, 1/2 thìa cà phê hạt nêm và 2 thìa canh giấm bỗng thơm dịu. Đun sôi lăn tăn trên lửa nhỏ.',
        ],
        description:
          'Xào cà chua chín tới trút vào nồi nước dùng. Nêm mắm tôm ngon, nước mắm và giấm bỗng nếp đun sôi lăn tăn.',
        tip: 'Nêm mắm tôm ngon và giấm bỗng nếp thơm dịu là linh hồn tạo nên vị ngọt thanh chua dịu chuẩn vị bún riêu truyền thống.',
      },
      {
        step: 4,
        title: 'Rán đậu hũ giòn, chần bắp bò & luộc huyết heo',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Đậu hũ thấm đẫm nước dùng mọng nước, bắp bò tái mềm ngọt thanh',
        actionPoints: [
          'Đậu phụ thái khối chiên vàng ươm các mặt mọng nước rồi thả vào nồi nước dùng đun rim 5 phút cho thấm vị.',
          'Trụng bắp bò hoa thái mỏng trong nồi nước dùng sôi bùng chín tái mọng nước.',
        ],
        description:
          'Chiên đậu hũ vàng giòn thả vào nồi nước dùng đun rim 5 phút. Trụng bắp bò hoa tái mọng nước.',
        tip: 'Thả đậu hũ chiên vào nồi nước dùng rim 5 phút giúp miếng đậu ngấm ngáp vị ngọt thanh béo ngậy của riêu cua.',
      },
      {
        step: 5,
        title: 'Múc bún, xếp riêu cua đậu hũ & thưởng thức nóng hổi',
        time: '3 phút',
        heat: 'Dùng nóng hổi',
        goal: 'Tô bún riêu cua rực rỡ sắc màu, tảng riêu cua béo bùi, nước dùng chua thanh ngát hương mắm tôm',
        actionPoints: [
          'Trụng bún tươi qua nước sôi, xếp vào tô ô tô lớn.',
          'Xếp lên mặt bún: tảng riêu cua đồng, đậu hũ chiên, bắp bò tái mềm, huyết heo luộc và cà chua đỏ mọng.',
          'Múc nước dùng bún riêu chua thanh bốc khói ngập tô. Rắc hành lá và ngò gai xắt nhỏ.',
          'Thưởng thức ngay khi còn nóng hổi ăn kèm rau sống bắp chuối rau muống chẻ, chấm mắm tôm đánh bông chanh ớt.',
        ],
        description:
          'Xếp bún vào tô, bày tảng riêu cua, đậu hũ, bắp bò tái, huyết heo, múc nước dùng chua thanh bốc khói ăn kèm rau sống.',
        tip: 'Ăn kèm mắm tôm đánh bông chanh ớt và rau muống chẻ giòn mát đem lại vị bùng nổ đậm đà không thể cưỡng lại.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng nấu bún riêu cua đồng thanh ngọt chua dịu chuẩn vị gia đình: 1. Thêm chút muối hạt khi giã cua & khuấy nhẹ tay lúc bắt đầu đun: Giúp đóng tảng riêu cua kết dính cuồn cuộn không bị vỡ tan; 2. Nêm mắm tôm ngon & giấm bỗng nếp: Tạo vị ngọt thanh chua dịu đặc trưng bùng tỏa aroma tinh tế; 3. Chưng gạch cua với dầu màu điều: Giúp bát bún riêu có sắc đỏ óng mượt quyến rũ tự nhiên.',
    recommendedSauce:
      'Nước dùng bún riêu cua chua thanh giấm bỗng ngạt ngào mùi mắm tôm thơm phức, chan ngập tô bún tảng riêu cua đồng béo bùi, đậu hũ mọng nước, bắp bò tái mềm ăn kèm rau muống chẻ giòn mát ngon ngút ngàn.',
  },
  'bun-ca-ngu-phu-yen': {
    dishId: 'bun-ca-ngu-phu-yen',
    dishName: 'Bún Cá Ngừ Đại Dương Nước Dùng Thanh Ngọt Chuẩn Vị',
    seoTitle: 'Cách Nấu Bún Cá Ngừ Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    ratingValue: '4.9',
    reviewCount: 416,
    prepTime: '20 phút (sơ chế lát cá ngừ tươi, ngâm nước muối gừng, gọt dứa chín & cà chua)',
    cookTime: '30 phút (chiên sơ cá ngừ, kho mật mía nhẹ & hầm nước dùng thanh ngọt)',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Cá Ngừ Tươi & Gia Vị Ướp Đậm Đà',
        items: [
          '600g cá ngừ đại dương tươi (cắt khoanh dày 2 - 2.5cm)',
          '1 thìa canh muối hạt, 2 thìa canh rượu trắng (ngâm rửa sạch khử tanh cá)',
          '1.5 thìa canh nước mắm ngon, 1/2 thìa cà phê tiêu sọ xay, 1 thìa cà phê hạt nêm',
          '2 củ hành tím băm, 3 tép tỏi băm, 2 quả ớt xiêm xanh đập dập',
        ],
      },
      {
        category: 'Dứa Chín, Cà Chua & Nước Dùng Thanh Ngọt',
        items: [
          '1/2 quả dứa (thơm) chín vừa (gọt vỏ bỏ mắt, thái rẻ quạt mỏng)',
          '3 quả cà chua chín mọng (thái múi cau)',
          '1.5 lít nước dừa tươi (hoặc nước dùng hầm xương heo / nước sôi)',
          '2 thìa canh dầu màu điều (chưng cà chua dứa tạo sắc vàng cam óng mượt)',
          '1 thìa canh đường thốt nốt / đường phèn (tạo vị ngọt thanh dịu)',
        ],
      },
      {
        category: 'Bún Tươi, Mỡ Hành & Rau Sống Ăn Kèm',
        items: [
          '1kg bún tươi cọng vừa',
          'Rau sống ăn kèm: Bắp cải thái sợi mỏng, xà lách, giá đỗ, bắp chuối bào, tía tơi, hành lá, ngò rí',
          '1 chén nước mắm ớt hiểm xiêm xanh cay xé lưỡi chấm lát cá ngừ',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế cá ngừ ngâm rượu gừng & ướp thấm vị',
        time: '20 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Lát cá ngừ tươi sạch hoàn toàn vị tanh, thấm ngấm gia vị nước mắm tiêu sọ',
        actionPoints: [
          'Lát cá ngừ đại dương rửa qua nước muối hạt pha rượu trắng và gừng đập dập trong 5 phút để khử sạch vị tanh. Rửa lại nước lạnh, thấm khô.',
          'Ướp lát cá ngừ với 1.5 thìa canh nước mắm ngon, 1/2 thìa cà phê tiêu sọ, 1 thìa cà phê hạt nêm, tỏi băm, hành tím băm và ớt xiêm xanh đập dập trong 15 - 20 phút.',
        ],
        description:
          'Khử tanh cá ngừ bằng nước muối rượu gừng 5 phút. Ướp nước mắm ngon, tiêu sọ, tỏi hành và ớt xiêm xanh đập dập 20 phút.',
        tip: 'Khử tanh bằng muối hạt pha rượu trắng và gừng giúp thịt cá ngừ giữ trọn độ mọng ngọt mà hoàn toàn không bị tanh.',
      },
      {
        step: 2,
        title: 'Chiên sơ hai mặt lát cá ngừ săn chắc',
        time: '5 phút',
        heat: 'Lửa vừa',
        goal: 'Thịt cá ngừ săn chắc xém vàng nhẹ, không bị rã nát khi kho nấu nước dùng',
        actionPoints: [
          'Đun nóng 2 thìa canh dầu ăn trong chảo chống dính trên lửa vừa.',
          'Cho từng khoanh cá ngừ đã ướp vào chiên sơ hai mặt trong 2 - 3 phút cho bề mặt thịt cá săn lại, ngả màu xém vàng nhạt.',
          'Vớt cá ra đĩa riêng.',
        ],
        description:
          'Chiên sơ hai mặt khoanh cá ngừ trong chảo ngập dầu 3 phút cho thịt cá săn lại xém vàng nhạt rồi vớt ra đĩa.',
        tip: 'Chiên sơ giúp bề mặt thịt cá ngừ bít kín nước ngọt bên trong, khi nấu nước dùng thịt cá săn đĩa không bị bở rã.',
      },
      {
        step: 3,
        title: 'Xào dứa chín, cà chua & chưng dầu màu điều óng mượt',
        time: '5 phút',
        heat: 'Lửa vừa',
        goal: 'Dứa chín tiết vị chua ngọt thanh dịu, nước dùng lên màu vàng cam óng mượt',
        actionPoints: [
          'Đun nóng 2 thìa canh dầu màu điều trong nồi, phi thơm tỏi băm và hành tím băm.',
          'Trút dứa thái rẻ quạt và 1/2 lượng cà chua múi cau vào xào trên lửa vừa trong 3 phút cho dứa tiết vị chua ngọt thanh dịu ngạt ngào.',
        ],
        description:
          'Phi thơm tỏi hành với dầu màu điều, xào dứa chín và cà chua 3 phút cho dứa tiết ra vị chua ngọt thơm lừng.',
        tip: 'Xào dứa với dầu màu điều trước giúp bùng tỏa vị chua ngọt đặc trưng và tạo màu nước dùng rực rỡ tự nhiên.',
      },
      {
        step: 4,
        title: 'Nấu nước dùng bún cá ngừ ngọt thanh thơm dịu',
        time: '20 phút',
        heat: 'Lửa vừa nhỏ',
        goal: 'Nước dùng bún cá ngừ trong vắt thanh ngọt chua dịu, lát cá ngừ mềm mọng đậm đà',
        actionPoints: [
          'Trút 1.5 lít nước dừa tươi (hoặc nước lọc) vào nồi dứa cà chua xào, đun sôi bùng.',
          'Nhẹ tay xếp từng lát cá ngừ đã chiên sơ vào nồi nước dùng. Nêm 1 thìa canh nước mắm ngon, 1 thìa canh đường phèn và 1/2 thìa cà phê hạt nêm.',
          'Đun sôi trên lửa vừa nhỏ trong 15 - 20 phút cho cá ngừ chín mềm mọng. Thả phần cà chua còn lại vào đun 2 phút rồi tắt bếp.',
        ],
        description:
          'Đổ nước dừa tươi vào nồi đun sôi, thả lát cá ngừ đã chiên vào nêm nước mắm đường phèn đun rim 20 phút chua ngọt thanh dịu.',
        tip: 'Sử dụng nước dừa tươi kết hợp đường phèn đem lại vị ngọt thanh tự nhiên dịu mát chuẩn phong cách ẩm thực miền Trung.',
      },
      {
        step: 5,
        title: 'Múc bún, xếp lát cá ngừ mọng ngọt & thưởng thức',
        time: '3 phút',
        heat: 'Dùng nóng hổi',
        goal: 'Tô bún cá ngừ rực rỡ, khoanh cá ngừ ngọt mềm, nước dùng chua thanh bốc khói nghi ngút',
        actionPoints: [
          'Trụng bún tươi qua nước sôi, xếp vào tô lớn.',
          'Đặt khoanh cá ngừ chắc ngọt mọng nước vào trung tâm tô bún, múc dứa chín, cà chua múi cau và rưới nước dùng thanh ngọt chua dịu bốc khói ngập tô.',
          'Rắc hành lá, ngò rí xắt nhỏ và vài lát ớt xiêm xanh.',
          'Thưởng thức ngay khi còn nóng hổi ăn kèm đĩa bắp cải thái sợi, xà lách giòn mát và chấm lát cá ngừ vào chén nước mắm ớt hiểm cay nồng.',
        ],
        description:
          'Xếp bún ra tô, đặt khoanh cá ngừ mọng ngọt, múc dứa cà chua và rưới nước dùng chua thanh bốc khói ăn kèm bắp cải thái sợi.',
        tip: 'Ăn kèm đĩa bắp cải thái sợi mỏng giòn mát và chấm lát cá ngừ vào mắm ớt xiêm xanh giúp vị ngon bùng nổ ngất ngây.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng nấu bún cá ngừ đại dương nước dùng thanh ngọt chuẩn vị gia đình: 1. Ngâm cá ngừ với rượu gừng & chiên sơ hai mặt: Giúp thịt cá săn chắc, giữ trọn độ mọng ngọt mà không hề bị tanh rã; 2. Nấu nước dùng bằng nước dừa tươi & dứa chín: Tạo vị ngọt thanh chua dịu tự nhiên bộc phát hương vị đặc trưng miền Trung; 3. Dùng ớt xiêm xanh đập dập: Đem lại hương vị cay nồng ngào ngạt quyện cùng từng thớ thịt cá ngừ chắc nịch.',
    recommendedSauce:
      'Tô bún cá ngừ bốc khói ngạt ngào vị chua ngọt thanh dịu của dứa chín và nước dừa tươi, khoanh cá ngừ da săn chắc thịt ngọt mềm mọng, chấm vào chén nước mắm ngon xắt ớt xiêm xanh cay nồng ăn kèm bắp cải thái sợi giòn mát tuyệt đỉnh.',
  },
  'mi-xao-bo-rau-cai': {
    dishId: 'mi-xao-bo-rau-cai',
    dishName: 'Mì Xào Bò Thơm Lừng, Đậm Đà',
    seoTitle: 'Cách Làm Mì Xào Bò Thơm Lừng, Đậm Đà',
    ratingValue: '4.9',
    reviewCount: 435,
    prepTime: '15 phút (thái mỏng thịt bò ướp dầu ăn bột năng, nhặt rửa cải ngọt & chần mì)',
    cookTime: '15 phút (xào bò lửa lớn 90 giây mọng nước & xào mì săn thơm ngạt ngào)',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Thịt Bò Tươi & Gia Vị Ướp Khóa Nước Mềm Mọng',
        items: [
          '300g thịt thăn bò tươi / dẻ sườn bò (thái mỏng ngang thớ)',
          '1 thìa canh dầu hàu thượng hạng, 1 thìa canh nước tương (xì dầu)',
          '1/2 thìa cà phê tiêu sọ xay, 1/2 thìa cà phê hạt nêm',
          '1 thìa canh dầu ăn (khóa độ mọng nước), 1 thìa cà phê bột năng (tạo độ mềm mượt)',
        ],
      },
      {
        category: 'Mì Trứng / Mì Gói Tơi Săn & Rau Củ Tươi',
        items: [
          '3 vắt mì trứng tươi (hoặc mì gói Hảo Hảo/mì Koreno trụng chín tới 80%)',
          '200g cải ngọt / cải ngồng (rửa sạch xắt khúc 5cm)',
          '1/2 củ hành tây thái múi cau, 1/2 củ cà rốt tỉa hoa thái lát mỏng',
          '3 tép tỏi băm, 2 củ hành tím băm nhuyễn',
        ],
      },
      {
        category: 'Sốt Xào Mì Đậm Đà Béo Ngậy',
        items: [
          '2 thìa canh dầu hàu thượng hạng, 1.5 thìa canh nước tương (xì dầu)',
          '1 thìa canh dầu mè thơm, 1/2 thìa canh tương ớt Chinsu',
          '1/2 thìa cà phê đường cát, 1/2 thìa cà phê tiêu sọ xay',
          '1 chén nước tương ớt hiểm xắt lát dùng kèm mì xào',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Thái thịt bò mỏng ngang thớ & ướp khóa nước mọng mềm',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Thịt bò thấm ngấm gia vị, mọng nước ngọt dịu và không bị dai khô khi xào',
        actionPoints: [
          'Thịt thăn bò rửa sạch, dùng khăn thấm khô. Dùng dao sắc thái mỏng ngang thớ thịt.',
          'Ướp thịt bò với 1 thìa canh dầu hàu, 1 thìa canh nước tương, 1/2 thìa cà phê tiêu xay, 1/2 thìa cà phê hạt nêm, 1 thìa cà phê bột năng và 1 thìa canh dầu ăn trong 15 phút.',
        ],
        description:
          'Thái mỏng thịt bò ngang thớ. Ướp dầu hàu, nước tương, tiêu xay, bột năng và dầu ăn 15 phút cho thịt mềm mọng.',
        tip: 'Trộn 1 thìa dầu ăn và 1 thìa bột năng vào thịt bò ướp giúp khóa chặt độ mọng nước tự nhiên, thịt khi xào mềm mượt không bị dai.',
      },
      {
        step: 2,
        title: 'Trụng mì tơi săn & ngâm nước đá giữ độ dai giòn',
        time: '5 phút',
        heat: 'Lửa lớn',
        goal: 'Sợi mì trứng tơi bóng dai giòn sần sật, không bết dính hay bở nhão',
        actionPoints: [
          'Đun sôi nồi nước lớn, thả vắt mì trứng/mì gói vào trụng nhanh trong 1 phút cho sợi mì nở dẻo dai tới 80%.',
          'Vớt mì xả ngay qua nước lạnh rồi vắt ráo. Trộn mì với 1 thìa canh dầu ăn (hoặc mỡ gà) cho tơi bóng.',
        ],
        description:
          'Trụng mì 1 phút chín tới 80%. Vớt xả ngay nước lạnh rồi trộn 1 thìa dầu ăn cho các sợi mì tơi bóng dẻo dai.',
        tip: 'Trụng mì tới 80% rồi xả nước lạnh trộn dầu giúp sợi mì khi xào giòn săn tơi xốp không bị nát.',
      },
      {
        step: 3,
        title: 'Xào thịt bò lửa lớn chín tới mọng nước (90 giây)',
        time: '2 phút',
        heat: 'Lửa lớn',
        goal: 'Thịt bò chín tới 80% mềm mọng ngọt dịu, không bị khô quắt hay chảy nước',
        actionPoints: [
          'Đun nóng chảo với 1.5 thìa canh dầu ăn trên lửa lớn rực, phi thơm 1/2 lượng tỏi đập dập.',
          'Trút thịt bò đã ướp vào đảo nhanh tay trên lửa lớn trong 1 - 1.5 phút.',
          'Khi thịt bò vừa chuyển màu hồng nhạt chín tới 80% thì trút ngay ra đĩa riêng.',
        ],
        description:
          'Phi thơm tỏi, xào thịt bò trên lửa lớn đảo nhanh tay trong 1.5 phút cho chín tới mọng nước rồi trút ra đĩa.',
        tip: 'Xào thịt bò trên lửa lớn nhanh tay 90 giây rồi trút ra đĩa riêng giữ trọn độ mềm tan ngọt mọng.',
      },
      {
        step: 4,
        title: 'Xào cải ngọt, hành tây & đảo mì tơi săn ngấm đẫm sốt',
        time: '3 phút',
        heat: 'Lửa lớn',
        goal: 'Cải ngọt giòn xanh mướt, sợi mì săn lại bóng mượt ngấm đẫm nước sốt dầu hàu',
        actionPoints: [
          'Phi thơm phần tỏi và hành tím còn lại. Trút cà rốt, cải ngọt và hành tây vào xào trên lửa lớn trong 2 phút.',
          'Nêm 1 thìa canh dầu hàu và 1/2 thìa cà phê hạt nêm.',
          'Trút mì đã trụng tơi vào chảo, rưới hỗn hợp sốt xào mì. Đảo liên tục nhẹ tay trên lửa lớn 2 phút cho sợi mì săn lại, bóng mượt ngấm đẫm gia vị.',
        ],
        description:
          'Xào cải ngọt cà rốt hành tây 2 phút. Trút mì vào chảo rưới nước sốt dầu hàu đảo lửa lớn 2 phút cho mì tơi săn ngấm đẫm vị.',
        tip: 'Đảo mì nhẹ tay trên lửa lớn giúp từng sợi mì săn lại và ngấm ngáp lớp áo sốt béo ngậy.',
      },
      {
        step: 5,
        title: 'Trút thịt bò vào đảo bốc khói & thưởng thức nóng hổi',
        time: '2 phút',
        heat: 'Dùng nóng hổi',
        goal: 'Đĩa mì xào bò thơm lừng bốc khói, thịt bò mềm mọng quyện mì săn tơi và cải ngọt giòn mát',
        actionPoints: [
          'Trút đĩa thịt bò xào cùng nước xào thịt bò vào chảo mì. Đảo nhanh tay trong 30 giây cho các nguyên liệu hòa quyện ngạt ngào hương thơm rồi tắt bếp.',
          'Múc mì xào bò rau cải ra đĩa lớn. Rắc tiêu sọ xay thơm lừng.',
          'Thưởng thức ngay khi còn nóng hổi từng sợi mì tơi săn dai giòn, thịt bò mềm mọng ngọt ngào quyện cải ngọt xanh mướt, chấm kèm chén xì dầu ớt hiểm cay xé lưỡi.',
        ],
        description:
          'Trút thịt bò vào chảo mì đảo nhanh 30 giây bốc khói ngạt ngào, múc ra đĩa rắc tiêu xay và dùng nóng với nước tương ớt hiểm.',
        tip: 'Rưới muỗng nước xào thịt bò ngọt thơm ngập lên đĩa mì giúp từng sợi mì thấm vị bò đậm đà tuyệt đỉnh.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm mì xào bò thơm lừng đậm đà: 1. Ướp thịt bò với bột năng & dầu ăn: Khóa chặt nước ngọt tự nhiên giúp thịt bò xào mềm mượt mọng nước; 2. Trụng mì 80% & xả nước lạnh trộn dầu: Giúp sợi mì khi xào giữ độ tơi săn dai giòn sần sật, không bị nở bở nhão; 3. Xào bò lửa lớn 90 giây trút ra riêng: Giúp thịt bò không bị dai cứng hay mất nước.',
    recommendedSauce:
      'Đĩa mì xào bò bốc khói ngào ngạt hương dầu mè tiêu sọ, sợi mì tơi săn óng ả, thịt bò mềm mọng ngọt ngào quyện rau cải xanh mướt giòn ngọt, chấm kèm chén xì dầu tỏi ớt hiểm cay nồng ngon tuyệt đỉnh.',
  },
  'mi-udon-bo-xao': {
    dishId: 'mi-udon-bo-xao',
    dishName: 'Mì Udon Bò Xào Sốt Nhật Nước Dùng Thanh Ngọt Chuẩn Vị',
    seoTitle: 'Cách Nấu Mì Udon Bò Xào Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    ratingValue: '4.9',
    reviewCount: 422,
    prepTime: '15 phút (sơ chế ba chỉ bò Mỹ, rã đông sợi udon tươi, thái bắp cải hành tây)',
    cookTime: '15 phút (trụng mì udon, nấu nước sốt tương Nhật & xào bò mọng nước)',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Sợi Mì Udon Tươi Núng Nính & Ba Chỉ Bò Mỹ',
        items: [
          '3 gói mì Udon tươi Nhật Bản (sợi trắng tròn, dẻo dai núng nính)',
          '300g ba chỉ bò Mỹ bào mỏng (cuộn tròn mỏng)',
          '150g bắp cải xanh (rửa sạch xắt miếng vuông 3cm)',
          '1/2 củ hành tây thái múi cau, 1 củ cà rốt thái sợi mỏng',
          '100g nấm đùi gà / nấm kim châm thái lát',
        ],
      },
      {
        category: 'Sốt Xào Udon Yaki Đậm Đà Vị Nhật',
        items: [
          '2 thìa canh nước tương Nhật (Shoyu) / xì dầu ngon',
          '1.5 thìa canh dầu hàu thượng hạng, 1 thìa canh rượu Mirin (tạo vị ngọt thanh nhẹ)',
          '1 thìa canh đường thốt nốt / đường cát, 1 thìa cà phê hạt nêm Dashi',
          '1 thìa canh dầu mè thơm, 1/2 thìa cà phê tiêu sọ xay',
        ],
      },
      {
        category: 'Topping Cá Ngừ Bào Katsuobushi & Bát Nước Dùng Dashi Thanh Ngọt',
        items: [
          '1 chén cá ngừ bào Katsuobushi (rắc lên mì xào nhảy múa ngạt ngào)',
          '2 nhánh hành lá thái nhỏ, 1 thìa hạt mỡ chưng / mè rang vàng',
          '400ml nước dùng hầm tảo biển Kombu & cá ngừ bào Dashi thanh ngọt dịu mát (dọn kèm tô mì xào)',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế ba chỉ bò Mỹ & rau củ thập cẩm',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Thịt bò Mỹ thấm ngấm gia vị Shoyu dầu mè, rau củ bắp cải cà rốt cắt miếng tươi mướt',
        actionPoints: [
          'Ba chỉ bò Mỹ rã đông tự nhiên. Ướp bò với 1 thìa canh nước tương Shoyu, 1/2 thìa cà phê tiêu sọ, 1 thìa cà phê hạt nêm Dashi và 1 thìa canh dầu mè thơm trong 10 phút.',
          'Bắp cải xắt miếng vuông 3cm. Hành tây thái múi cau. Cà rốt tỉa hoa thái lát hoặc thái sợi. Nấm đùi gà thái lát mỏng.',
        ],
        description:
          'Rã đông ba chỉ bò Mỹ, ướp nước tương Shoyu, tiêu sọ và dầu mè thơm 10 phút. Bắp cải xắt miếng vuông, hành tây thái múi cau.',
        tip: 'Ướp ba chỉ bò Mỹ với nước tương Shoyu và dầu mè thơm giúp thớt bò bùng tỏa aroma Nhật Bản đậm đà béo ngậy.',
      },
      {
        step: 2,
        title: 'Trụng sợi mì Udon tươi tơi bóng dẻo dai',
        time: '3 phút',
        heat: 'Lửa lớn',
        goal: 'Sợi mì Udon trắng tròn dẻo dai núng nính, không dính bệt hay bở nhão',
        actionPoints: [
          'Đun sôi nồi nước lớn. Thả 3 gói mì Udon tươi vào trụng nhanh trong 1 - 1.5 phút cho sợi mì rời tơi và đạt độ dẻo dai núng nính tới 80%.',
          'Vớt mì Udon xả ngay qua nước lạnh rồi vắt ráo. Trộn mì với 1 thìa canh dầu mè thơm cho sợi mì tơi bóng.',
        ],
        description:
          'Trụng mì Udon tươi trong nước sôi 90 giây. Vớt xả nước lạnh vắt ráo rồi trộn 1 thìa dầu mè cho tơi bóng.',
        tip: 'Trụng mì Udon đúng 90 giây rồi xả nước lạnh trộn dầu mè giúp sợi mì Udon dẻo dai núng nính sần sật tuyệt đỉnh.',
      },
      {
        step: 3,
        title: 'Pha nước sốt xào Udon Yaki & hầm nước dùng Dashi thanh ngọt',
        time: '5 phút',
        heat: 'Lửa vừa',
        goal: 'Hỗn hợp sốt Yaki Udon mặn ngọt sánh mịn, bát nước dùng Dashi thanh ngọt dịu mát',
        actionPoints: [
          'Hòa tan chén sốt xào: 2 thìa canh nước tương Shoyu, 1.5 thìa canh dầu hàu, 1 thìa canh rượu Mirin, 1 thìa canh đường, hạt nêm Dashi và tiêu sọ.',
          'Đun sôi 400ml nước lọc cùng 1 miếng tảo biển Kombu và 1 thìa cá ngừ bào trong 5 phút, nêm chút hạt nêm Dashi để thu được nước dùng canh Dashi thanh ngọt dịu mát dọn kèm.',
        ],
        description:
          'Pha sốt Shoyu, dầu hàu, rượu Mirin, đường và hạt nêm Dashi. Hầm 400ml nước dùng tảo biển Kombu lấy canh Dashi thanh ngọt.',
        tip: 'Hầm nước dùng Dashi từ tảo biển Kombu đem lại vị ngọt Umami tự nhiên dịu mát dọn kèm đĩa mì xào béo ngậy.',
      },
      {
        step: 4,
        title: 'Xào bò lửa lớn mọng nước & xào mì Udon ngấm sốt',
        time: '3 phút',
        heat: 'Lửa lớn',
        goal: 'Ba chỉ bò Mỹ chín mọng mềm tan, sợi mì Udon bọc đẫm lớp sốt tương Shoyu bóng mượt',
        actionPoints: [
          'Đun nóng chảo với 1.5 thìa canh dầu ăn trên lửa lớn, phi thơm tỏi băm. Trút ba chỉ bò Mỹ vào đảo nhanh tay trong 90 giây chín tới 80% rồi trút ra đĩa riêng.',
          'Giữ nguyên chảo, trút bắp cải, cà rốt, nấm và hành tây vào xào lửa lớn 2 phút.',
          'Trút mì Udon đã trụng tơi vào chảo, rưới chén sốt xào Yaki Udon. Đảo nhẹ tay trên lửa lớn 2 phút cho sợi mì Udon ngấm ngáp nước sốt sánh mịn bóng mượt.',
        ],
        description:
          'Xào bò Mỹ lửa lớn 90 giây trút ra đĩa. Xào bắp cải cà rốt 2 phút, cho mì Udon vào rưới sốt Yaki đảo nhẹ tay 2 phút.',
        tip: 'Xào mì Udon trên lửa lớn rực giúp sợi mì săn bóng ngấm đẫm vị sốt mà không bị đứt gãy.',
      },
      {
        step: 5,
        title: 'Trút thịt bò vào đảo bốc khói, rắc cá ngừ bào & thưởng thức',
        time: '2 phút',
        heat: 'Dùng nóng hổi',
        goal: 'Đĩa mì Udon bò xào bốc khói ngạt ngào, cá ngừ bào Katsuobushi nhảy múa rộn rã trên mặt đĩa',
        actionPoints: [
          'Trút đĩa ba chỉ bò Mỹ xào cùng nước thịt bò vào chảo mì Udon. Đảo nhẹ tay trong 30 giây cho nguyên liệu quyện đều ngạt ngào hương thơm rồi tắt bếp.',
          'Múc mì Udon bò xào ra đĩa rộng sâu lòng. Rắc nhúm cá ngừ bào Katsuobushi, rắc mỡ hành và mè rang vàng.',
          'Thưởng thức ngay khi còn nóng hổi từng sợi mì Udon dai mềm núng nính, thịt bò Mỹ béo ngậy mọng ngọt quyện sốt tương Nhật thơm phức, xì xụp cùng bát nước dùng Dashi thanh ngọt dịu mát.',
        ],
        description:
          'Trút bò Mỹ vào đảo 30 giây, múc ra đĩa rắc cá ngừ bào Katsuobushi nhảy múa rộn rã và thưởng thức kèm bát nước dùng Dashi thanh ngọt.',
        tip: 'Rắc cá ngừ bào Katsuobushi lúc mì Udon còn bốc khói nghi ngút để ngắm nhìn vảy cá ngừ nhảy múa sinh động ngạt ngào aroma.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng nấu mì Udon bò xào nước dùng thanh ngọt chuẩn vị gia đình: 1. Trụng mì Udon tươi đúng 90 giây & xả nước lạnh trộn dầu mè: Giúp sợi mì Udon giữ trọn độ núng nính dẻo dai sần sật đặc trưng không bị bở nhão; 2. Nấu sốt xào bằng nước tương Shoyu & rượu Mirin: Tạo vị mặn ngọt chua nhẹ béo ngậy chuẩn phong vị ẩm thực Yaki Udon Nhật Bản; 3. Dọn kèm bát nước dùng Dashi tảo biển Kombu: Giúp cân bằng vị béo của thịt bò, mang lại cảm giác thanh ngọt dịu mát sảng khoái.',
    recommendedSauce:
      'Đĩa mì Udon bò xào bốc khói ngào ngạt hương dầu mè, sợi mì Udon dẻo dai núng nính bọc lớp sốt Shoyu mặn ngọt, ba chỉ bò Mỹ mềm tan béo ngậy ngập cá ngừ bào Katsuobushi nhảy múa, xì xụp cùng bát nước dùng Dashi thanh ngọt tuyệt hảo.',
  },
  'mi-soba-lanh': {
    dishId: 'mi-soba-lanh',
    dishName: 'Mì Soba Kiều Mạch Lạnh Nước Dùng Dashi Thanh Ngọt Chuẩn Vị',
    seoTitle: 'Cách Nấu Mì Soba Lạnh Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    ratingValue: '4.9',
    reviewCount: 408,
    prepTime: '15 phút (luộc mì soba kiều mạch, vớt ngâm thau nước đá & nấu sốt Dashi Tsuyu)',
    cookTime: '15 phút (hầm nước dùng Dashi Kombu, ướp lạnh chén nước chấm & chuẩn bị mù tạt Wasabi)',
    difficulty: 'Dễ',
    servings: '2 - 3 người',
    ingredients: [
      {
        category: 'Sợi Mì Soba Kiều Mạch Mát Lạnh Thanh Tao',
        items: [
          '300g mì Soba kiều mạch khô Nhật Bản (sợi nhỏ màu nâu nhạt, giàu chất xơ & rutin)',
          '1 thau nước đá lạnh tinh khiết để xả và ướp mát lạnh sợi mì Soba',
        ],
      },
      {
        category: 'Nước Dùng Dashi & Sốt Chấm Tsuyu Thanh Ngọt Umami',
        items: [
          '500ml nước hầm tảo biển Kombu & cá ngừ bào Katsuobushi (Nước dùng Dashi)',
          '4 thìa canh nước tương Nhật Shoyu thượng hạng',
          '3 thìa canh rượu nấu ăn Mirin (tạo vị ngọt thanh tự nhiên)',
          '1 thìa canh đường phèn / đường thốt nốt',
        ],
      },
      {
        category: 'Gia Vị Ăn Kèm & Topping Mè Rang Rong Biển',
        items: [
          '1 chén mù tạt Wasabi tươi (cay nồng sốc họng sảng khoái)',
          '2 củ củ cải trắng bào mịn (vắt ráo nước)',
          '3 nhánh hành lá thái siêu mỏng, 1 lá rong biển Nori thái sợi mỏng',
          '1 thìa canh mè trắng rang vàng thơm lừng',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Nấu nước dùng Dashi & pha sốt chấm Tsuyu ướp lạnh thanh ngọt',
        time: '15 phút',
        heat: 'Lửa nhỏ',
        goal: 'Nước sốt chấm Tsuyu Dashi mặn ngọt Umami thơm dịu, ướp mát lạnh sảng khoái',
        actionPoints: [
          'Ngâm 1 lá tảo biển Kombu vào 500ml nước mát 15 phút, đun gần sôi (85°C) thì vớt Kombu ra. Thả 1 chén cá ngừ bào Katsuobushi vào đun 1 phút rồi lọc lấy 400ml nước dùng Dashi.',
          'Trút nước tương Shoyu, rượu Mirin và đường phèn vào đun sôi 2 phút rồi tắt bếp. Cho sốt Tsuyu vào ngăn mát tủ lạnh ướp lạnh 30 phút.',
        ],
        description:
          'Hầm tảo biển Kombu và cá ngừ bào lấy nước Dashi. Pha nước tương Shoyu, rượu Mirin và đường phèn đun sôi 2 phút rồi ướp lạnh.',
        tip: 'Vớt tảo biển Kombu ra ngay trước khi nước sôi giúp nước dùng Dashi không bị đắng hay chát.',
      },
      {
        step: 2,
        title: 'Luộc mì Soba kiều mạch chín tới dai giòn',
        time: '5 phút',
        heat: 'Lửa vừa',
        goal: 'Sợi mì Soba kiều mạch chín tới dẻo dai, giữ trọn hương vị lúa mạch mộc mạc',
        actionPoints: [
          'Đun sôi 1.5 lít nước trong nồi lớn. Thả 300g mì Soba kiều mạch vào luộc trên lửa vừa trong 4 - 5 phút.',
          'Khuấy nhẹ tay đũa cho sợi mì Soba rời nhau. Kiểm tra sợi mì chín tới vừa dẻo dai thì tắt bếp.',
        ],
        description:
          'Thả mì Soba kiều mạch vào nồi nước sôi đun 4 - 5 phút cho chín tới dẻo dai rồi vớt ra rây.',
        tip: 'Luộc mì Soba không đậy nắp và khuấy nhẹ tay giúp sợi mì chín đều dẻo dai không bị gãy vụn.',
      },
      {
        step: 3,
        title: 'Xả mì Soba qua thau nước đá lạnh rửa sạch tinh bột',
        time: '5 phút',
        heat: 'Lạnh tinh khiết',
        goal: 'Sợi mì Soba mát lạnh giòn sần sật, sạch bóng tinh bột thừa trên bề mặt',
        actionPoints: [
          'Vớt mì Soba ra rây, xả dưới vòi nước lạnh vừa xả vừa vò nhẹ tay để rửa sạch tinh bột thừa.',
          'Thả toàn bộ mì Soba vào thau nước đá lạnh ướp trong 3 - 5 phút cho sợi mì săn giòn mát lạnh. Vớt mì ra rây cuộn thành từng vắt nhỏ.',
        ],
        description:
          'Vò nhẹ mì Soba dưới vòi nước lạnh rửa trôi tinh bột thừa. Ngâm mì vào thau nước đá 5 phút cho sợi mì giòn mát sảng khoái.',
        tip: 'Vò mì nhẹ tay dưới nước chảy rồi ngâm thau nước đá là bí quyết giúp mì Soba lạnh giữ độ giòn mát sảng khoái.',
      },
      {
        step: 4,
        title: 'Chuẩn bị gia vị Wasabi, củ cải bào & rong biển Nori',
        time: '3 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Gia vị củ cải bào mịn, Wasabi xanh mượt thơm nồng ngạt ngào',
        actionPoints: [
          'Củ cải trắng gọt vỏ, bào nhuyễn rồi vắt ráo bớt nước đắng.',
          'Hành lá xắt siêu mỏng. Rong biển Nori cắt sợi mỏng. Nặn 1 viên mù tạt Wasabi tươi xanh mượt.',
        ],
        description:
          'Bào nhuyễn củ cải trắng vắt ráo. Xắt nhỏ hành lá, cắt sợi rong biển Nori và nặn viên mù tạt Wasabi tươi.',
        tip: 'Vắt ráo nước củ cải bào giúp củ cải giữ vị ngọt mát không làm loãng chén nước chấm Tsuyu Dashi.',
      },
      {
        step: 5,
        title: 'Xếp mì Soba lên khay tre Lạnh & thưởng thức thanh mát',
        time: '2 phút',
        heat: 'Dùng mát lạnh',
        goal: 'Khay mì Soba kiều mạch rực rỡ, nhúng đẫm sốt Tsuyu Dashi mát lạnh xộc vị Wasabi cay nồng',
        actionPoints: [
          'Xếp vắt mì Soba kiều mạch lên khay tre Zaru (hoặc đĩa đá lạnh), rắc rong biển Nori sợi và mè rang vàng.',
          'Rót nước chấm Tsuyu đã ướp mát lạnh ra chén nhỏ, thả củ cải bào, hành lá và chút Wasabi vào khuấy đều.',
          'Gắp vắt mì Soba nhúng đẫm vào chén nước chấm Tsuyu mát lạnh. Thưởng thức ngay khi sợi mì Soba dai mát xộc vị Wasabi cay nồng sảng khoái.',
        ],
        description:
          'Bày mì Soba lên khay tre, rắc rong biển mè rang. Rót sốt Tsuyu mát lạnh ra chén khuấy củ cải Wasabi nhúng đẫm thưởng thức.',
        tip: 'Khuấy đều Wasabi và củ cải bào vào sốt Tsuyu trước khi nhúng mì giúp hương vị cay nồng thanh mát bùng nổ tuyệt hảo.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng nấu mì Soba lạnh nước dùng thanh ngọt chuẩn vị gia đình: 1. Dùng tảo biển Kombu & cá ngừ bào hầm nước dùng Dashi: Tạo vị ngọt thanh tự nhiên Umami tinh tế chuẩn phong vị Nhật; 2. Rửa sạch tinh bột thừa & ngâm mì Soba vào thau nước đá: Giúp sợi mì Soba kiều mạch giòn mát sảng khoái không bị dính bệt; 3. Dùng kèm củ cải trắng bào & Wasabi tươi: Cân bằng vị ngọt thanh dịu của nước dùng Dashi, mang lại cảm giác thanh nhiệt nhẹ bụng tuyệt vời.',
    recommendedSauce:
      'Chén nước sốt chấm Tsuyu Dashi ướp mát lạnh chua ngọt Umami dịu mát, quyện mù tạt Wasabi cay nồng xộc mũi, nhúng đẫm vắt mì Soba kiều mạch giòn mát lạnh, rắc rong biển Nori và củ cải bào thanh nhiệt sảng khoái ngày hè.',
  },
  'mien-ga-ta-dui-xe': {
    dishId: 'mien-ga-ta-dui-xe',
    dishName: 'Miến Gà Ta Đùi Xé Nước Dùng Thanh Ngọt Chuẩn Vị',
    seoTitle: 'Cách Nấu Miến Gà Ta Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    ratingValue: '4.9',
    reviewCount: 448,
    prepTime: '20 phút (sơ chế gà ta thả vườn với muối gừng, ngâm miến dong & xắt nấm hương mộc nhĩ)',
    cookTime: '35 phút (luộc gà lấy nước dùng trong vắt thanh ngọt, xé đùi gà & ngâm miến dong)',
    difficulty: 'Dễ',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Gà Ta Thả Vườn & Nước Dùng Hầm Trong Vắt',
        items: [
          '1 con gà ta thả vườn (khoảng 1.3 - 1.5kg, thịt chắc dai ngọt)',
          '2 củ hành tím nướng thơm, 1 củ gừng tươi nướng đập dập',
          '1 thìa canh muối hạt, 2 thìa canh rượu trắng (ngâm rửa sạch khử mùi da gà)',
          '1 thìa canh nước mắm ngon, 1/2 thìa cà phê hạt nêm, 1/2 thìa cà phê tiêu sọ xay',
        ],
      },
      {
        category: 'Miến Dong Điện Biên, Nấm Hương & Mộc Nhĩ',
        items: [
          '300g miến dong Điện Biên / miến mộc (sợi xám trong, dai giòn không bị trương nhão)',
          '10 tai nấm hương khô (ngâm nở, rửa sạch thái lát mỏng)',
          '3 tai mộc nhĩ (nấm mèo ngâm nở, rửa sạch thái sợi mỏng)',
          '1 lòng mề gà (mề gà, gan gà, lòng gà xào thơm)',
        ],
      },
      {
        category: 'Rau Thơm & Gia Vị Ăn Kèm Chuẩn Vị',
        items: [
          '1 bó rau răm, 1 bó hành lá, 1 củ hành tây thái lát mỏng',
          '5 lá lá chanh tươi thái sợi siêu mỏng',
          '1 chén muối hạt ớt hiểm xắt chanh tươi chấm thịt gà xé',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Khử tanh gà ta & luộc lấy nước dùng ngọt lịm',
        time: '25 phút',
        heat: 'Lửa vừa',
        goal: 'Nước dùng gà trong vắt thanh ngọt đậm đà, da gà giòn sần sật mọng nước',
        actionPoints: [
          'Gà ta xát muối hạt pha rượu trắng và gừng đập dập 5 phút rồi rửa sạch hoàn toàn.',
          'Thả gà vào nồi lớn ngập 2.5 lít nước, thả hành tím nướng và gừng nướng đập dập vào.',
          'Đun sôi hớt bọt, luộc lửa vừa sôi lăn tăn 20 - 25 phút cho gà chín tới, vớt gà ra ngâm ngay thau nước đá lạnh.',
        ],
        description:
          'Khử mùi gà bằng muối gừng rượu trắng. Luộc gà với hành gừng nướng 25 phút hớt bọt cho nước trong vắt, vớt gà ngâm nước đá.',
        tip: 'Vớt gà luộc ra ngâm ngay thau nước đá lạnh giúp da gà vàng ươm giòn sần sật, thịt mọng nước không bị thâm khô.',
      },
      {
        step: 2,
        title: 'Lọc thịt gà xé phay & xào lòng mề nấm hương mộc nhĩ',
        time: '10 phút',
        heat: 'Lửa lớn',
        goal: 'Thịt gà xé miếng mềm mọng, nấm hương mộc nhĩ xào chín thơm nức ngạt ngào',
        actionPoints: [
          'Lọc thịt đùi và lườn gà xé hoặc thái miếng vừa ăn. Xương gà thả lại vào nồi đun hầm 15 phút lấy trọn vị ngọt.',
          'Phi thơm hành tím, cho mề gà thái nhỏ, nấm hương thái lát và mộc nhĩ thái sợi vào xào chín tới trên lửa lớn 3 phút với 1 thìa nước mắm và tiêu xay.',
        ],
        description:
          'Xé thịt đùi gà ta miếng vừa ăn. Xào thơm mề gà, nấm hương và mộc nhĩ thái sợi với nước mắm ngon và tiêu xay trong 3 phút.',
        tip: 'Xào nấm hương mộc nhĩ với mắm ngon trước giúp bùng tỏa hương thơm ngạt ngào bám chặt vào từng lát nấm.',
      },
      {
        step: 3,
        title: 'Trút nấm hương xào vào nồi nước dùng & nêm thanh ngọt',
        time: '10 phút',
        heat: 'Lửa nhỏ',
        goal: 'Nước dùng miến gà thanh ngọt béo nhẹ, bùng tỏa hương thơm nấm hương & gia vị truyền thống',
        actionPoints: [
          'Trút toàn bộ nấm hương, mộc nhĩ và mề gà xào thơm vào nồi nước dùng gà hầm.',
          'Nêm 1.5 thìa canh nước mắm ngon, 1 thìa cà phê hạt nêm, 1/2 thìa cà phê tiêu sọ xay. Đun sôi lăn tăn trên lửa nhỏ.',
        ],
        description:
          'Trút nấm hương mộc nhĩ xào vào nồi nước dùng gà. Nêm nước mắm ngon và tiêu sọ đun sôi lăn tăn bùng tỏa mùi thơm.',
        tip: 'Nêm nước mắm ngon nguyên chất lúc nước dùng sôi nhẹ giúp vị ngọt thanh tự nhiên đậm đà không bị chua.',
      },
      {
        step: 4,
        title: 'Ngâm chần miến dong Điện Biên dai giòn',
        time: '5 phút',
        heat: 'Lửa lớn',
        goal: 'Sợi miến dong ngấm đẫm vị ngọt đậm đà, giữ độ dai giòn sần sật không bị nát',
        actionPoints: [
          'Miến dong ngâm nước ấm 10 phút cho mềm rồi cắt khúc vừa ăn (15cm).',
          'Cho miến dong vào vợt chần qua nồi nước dùng sôi bùng trong 1 phút cho sợi miến ngấm ngáp vị ngọt đậm đà.',
        ],
        description:
          'Ngâm miến dong 10 phút, chần qua nồi nước dùng gà sôi bùng 1 phút rồi vớt ra tô.',
        tip: 'Chần miến dong đúng 1 phút trong nước dùng đang sôi giúp sợi miến dai giòn sần sật không bị nhão.',
      },
      {
        step: 5,
        title: 'Múc miến ra tô, xếp thịt gà xé & thưởng thức nóng hổi',
        time: '3 phút',
        heat: 'Dùng nóng hổi',
        goal: 'Tô miến gà thơm lừng bốc khói, thịt gà ta xé ngọt lịm ngập nấm hương, lá chanh & rau răm',
        actionPoints: [
          'Bốc miến dong đã chần ra tô lớn.',
          'Xếp thịt gà ta xé phay, mề gà nấm hương mộc nhĩ xào thơm, rắc hành lá, rau răm xắt nhỏ và lá chanh thái sợi siêu mỏng.',
          'Chan ngập nước dùng gà nấm hương nóng hổi bốc khói ngạt ngào.',
          'Thưởng thức ngay khi còn nóng hổi ăn kèm muối tiêu chanh ớt hiểm chấm thịt gà xé.',
        ],
        description:
          'Xếp miến chần ra tô, bày gà xé phay, mề gà nấm hương, rắc lá chanh răm, chan nước dùng bốc khói ăn kèm muối tiêu chanh.',
        tip: 'Rắc lá chanh thái sợi siêu mỏng và rau răm lúc vừa chan nước dùng bốc khói để hương thơm lá chanh bùng tỏa ngào ngạt.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng nấu miến gà ta nước dùng thanh ngọt chuẩn vị gia đình: 1. Luộc gà lửa vừa & ngâm ngay thau nước đá: Giúp da gà vàng ươm giòn sần sật, thịt ngọt mềm mọng không bị khô rách; 2. Chọn miến dong Điện Biên mộc: Sợi miến dai giòn sần sật ăn lâu không bị trương nhão hay đục nước; 3. Xào nấm hương mộc nhĩ với mắm ngon trước khi thả vào nước dùng: Bùng tỏa aroma nấm hương ngạt ngào quyện lá chanh răm thơm lừng.',
    recommendedSauce:
      'Tô miến gà bốc khói nghi ngút ngạt ngào mùi nấm hương và lá chanh tươi, sợi miến dong dai giòn trong vắt ngấm đẫm nước dùng gà ngọt lịm từ xương, thịt gà ta xé phay giòn da mọng nước chấm muối hạt tiêu chanh ớt hiểm ngon tuyệt đỉnh.',
  },
  'banh-canh-ghe-nguyen-con': {
    dishId: 'banh-canh-ghe-nguyen-con',
    dishName: 'Bánh Canh Ghẹ Nguyên Con Nước Dùng Thanh Ngọt Chuẩn Vị',
    seoTitle: 'Cách Nấu Bánh Canh Ghẹ Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình',
    ratingValue: '4.9',
    reviewCount: 462,
    prepTime: '25 phút (sơ chế ghẹ xanh tươi sống, hấp sơ tách gạch, hầm xương heo & nhào bột bánh canh)',
    cookTime: '35 phút (hầm nước dùng ghẹ sánh sệt béo ngậy, thả bánh canh bột lọc & chưng gạch ghẹ)',
    difficulty: 'Trung bình',
    servings: '4 - 5 người',
    ingredients: [
      {
        category: 'Ghẹ Biển Tươi Xanh & Nước Dùng Hầm Xương Heo Thanh Ngọt',
        items: [
          '3 - 4 con ghẹ xanh tươi sống (khoảng 1.2kg, chắc thịt mẩy gạch)',
          '500g xương ống heo (chần sạch hầm lấy 2 lít nước dùng trong ngọt)',
          '2 củ hành tím băm, 1 củ hành tây, 2 thìa canh dầu màu điều (chưng gạch tạo màu đỏ cam sánh mượt)',
          '1 thìa canh nước mắm ngon, 1/2 thìa cà phê hạt nêm, 1 thìa canh đường phèn',
        ],
      },
      {
        category: 'Sợi Bánh Canh Bột Lọc / Bột Gạo Mắt Rùa Sần Sật',
        items: [
          '500g bánh canh bột lọc / bột gạo tươi (sợi đục dẻo dai sần sật không bở)',
          '200g chả cá mỏng chiên vàng / chả cua hấp',
          '200g mết huyết heo (tiết heo) luộc chín xắt khối',
          '2 thìa canh bột năng (hòa nước tạo độ sánh kẹo nhẹ cho nước dùng)',
        ],
      },
      {
        category: 'Rau Thơm & Gia Vị Ăn Kèm Chuẩn Vị Vùng Biển',
        items: [
          '1 bó hành lá, 1 bó ngò rí, 1/2 thìa cà phê tiêu sọ xay',
          '1 chén muối ớt xắt chanh tươi / nước mắm ớt hiểm chấm thịt ghẹ ngọt lịm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế ghẹ tươi & hầm nước dùng xương heo thanh ngọt',
        time: '40 phút',
        heat: 'Lửa nhỏ',
        goal: 'Nước dùng xương ống heo trong ngọt đậm đà, ghẹ xanh sơ chế sạch bùn cát',
        actionPoints: [
          'Xương ống heo chần nước sôi 3 phút rồi rửa sạch, hầm với 2.2 lít nước và 1 củ hành tây nướng 40 phút hớt bọt lấy 2 lít nước hầm ngọt lịm.',
          'Ghẹ xanh tươi đâm ức ngắt bặt, rửa sạch. Tách mai ghẹ khều gạch để riêng vào chén nhỏ, gỡ yếm và phổi.',
        ],
        description:
          'Hầm 500g xương ống heo với 2.2 lít nước 40 phút hớt bọt lấy nước dùng ngọt. Ghẹ xanh đâm ức rửa sạch, tách mai khều gạch riêng.',
        tip: 'Tách mai ghẹ nhẹ tay giữ nguyên khối gạch ghẹ béo bùi không bị nát.',
      },
      {
        step: 2,
        title: 'Hấp ghẹ xanh chín tới đỏ au & gỡ thịt / giữ nguyên con',
        time: '12 phút',
        heat: 'Lửa vừa',
        goal: 'Ghẹ xanh chín tới đỏ au rực rỡ, thịt ghẹ căng mọng ngọt lịm không bị khô',
        actionPoints: [
          'Hấp ghẹ xanh với vài cọng sả đập dập 10 - 12 phút cho ghẹ vừa chuyển màu đỏ cam rực rỡ.',
          'Vớt ghẹ ra. Tùy thích gỡ phần thịt thân và càng ghẹ để riêng, hoặc giữ nguyên con ghẹ hấp phục vụ cho bắt mắt.',
        ],
        description:
          'Hấp ghẹ xanh với sả đập dập 12 phút cho chín tới đỏ au mọng ngọt. Vớt ra gỡ thịt hoặc giữ nguyên con.',
        tip: 'Hấp ghẹ với sả tươi giúp thịt ghẹ bít kín vị ngọt mọng tự nhiên và bùng tỏa mùi thơm quyến rũ.',
      },
      {
        step: 3,
        title: 'Chưng gạch ghẹ màu đỏ điều & nấu nước dùng bánh canh sánh béo',
        time: '10 phút',
        heat: 'Lửa vừa',
        goal: 'Nước dùng bánh canh màu đỏ cam óng mượt, sánh kẹo nhẹ béo bùi ngạt ngào hương biển',
        actionPoints: [
          'Phi thơm hành tím với dầu màu điều, trút chén gạch ghẹ vào chưng 2 phút cho ngả màu đỏ cam óng mượt.',
          'Trút gạch ghẹ chưng cùng nước hấp ghẹ vào nồi nước hầm xương heo. Nêm nước mắm ngon, đường phèn, hạt nêm và tiêu sọ.',
          'Rưới nước bột năng đun sôi khuấy nhẹ tay cho nước dùng đạt độ sánh kẹo nhẹ béo ngậy.',
        ],
        description:
          'Chưng gạch ghẹ với dầu màu điều 2 phút. Trút vào nồi nước hầm xương, nêm mắm ngon, đường phèn và rưới bột năng tạo độ sánh kẹo.',
        tip: 'Chưng gạch ghẹ với dầu màu điều giúp bát bánh canh ghẹ có sắc đỏ cam rực rỡ béo ngậy chuẩn phong vị vùng biển.',
      },
      {
        step: 4,
        title: 'Trụng sợi bánh canh bột lọc dẻo dai sần sật',
        time: '5 phút',
        heat: 'Lửa vừa',
        goal: 'Sợi bánh canh ngấm đẫm vị béo ngọt của nước dùng, dẻo dai sần sật không bị bở',
        actionPoints: [
          'Bánh canh bột lọc chần qua nước sôi 1 phút cho tơi.',
          'Thả trực tiếp bánh canh vào nồi nước dùng ghẹ đun rim 3 - 5 phút cho sợi bánh canh ngấm ngáp vị béo ngọt bùi.',
        ],
        description:
          'Chần tơi bánh canh bột lọc qua nước sôi rồi thả vào nồi nước dùng đun rim 5 phút cho ngấm đẫm gia vị.',
        tip: 'Thả bánh canh bột lọc đun rim trực tiếp trong nồi nước dùng giúp sợi bánh canh trong suốt dẻo dai sần sật tuyệt hảo.',
      },
      {
        step: 5,
        title: 'Múc bánh canh, bày ghẹ đỏ au & thưởng thức nóng hổi',
        time: '3 phút',
        heat: 'Dùng nóng hổi',
        goal: 'Tô bánh canh ghẹ rực rỡ bốc khói, thịt ghẹ chắc mẩy ngọt lịm, nước dùng sánh sệt béo ngậy',
        actionPoints: [
          'Múc sợi bánh canh dẻo dai và nước dùng sánh sệt màu đỏ cam ngạt ngào hương thơm ra tô lớn.',
          'Xếp nguyên con ghẹ đỏ au (hoặc thịt ghẹ gỡ), chả cá chiên, huyết heo luộc và hành lá ngò rí xắt nhỏ, rắc tiêu sọ xay.',
          'Thưởng thức ngay khi còn nóng hổi chấm thịt ghẹ vào muối ớt chanh cay nồng.',
        ],
        description:
          'Múc bánh canh và nước dùng sánh đỏ cam ra tô, bày con ghẹ đỏ au, chả cá chiên, rắc hành ngò tiêu sọ và dùng nóng với muối ớt chanh.',
        tip: 'Ăn kèm muối ớt chanh cay nồng giúp bùng nổ vị ngọt lịm của thịt ghẹ biển mọng nước.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng nấu bánh canh ghẹ nước dùng thanh ngọt chuẩn vị gia đình: 1. Hấp ghẹ với sả tươi trước khi nấu: Giúp thịt ghẹ săn chắc đỏ au ngấm trọn độ ngọt mọng tự nhiên mà không bị tan thịt vào nước dùng; 2. Chưng gạch ghẹ với dầu màu điều: Giúp nước dùng bánh canh có màu đỏ cam óng mượt béo bùi bắt mắt ngạt ngào aroma biển; 3. Tạo độ sánh sệt nhẹ bằng bột năng & nêm đường phèn: Giữ độ béo kẹo nhẹ cho sợi bánh canh bám đẫm gia vị ngọt thanh Umami.',
    recommendedSauce:
      'Tô bánh canh ghẹ bốc khói nghi ngút rực rỡ sắc đỏ cam gạch ghẹ, con ghẹ xanh mẩy căng chắc thịt ngọt đậm đà, sợi bánh canh bột lọc dai giòn sần sật quyện nước dùng sánh béo ngậy thơm lừng tiêu sọ, chấm cùng chén muối ớt chanh tươi cay nồng ngon quên lối về.',
  },
  'mien-xao-cua': {
    dishId: 'mien-xao-cua',
    dishName: 'Miến Xào Cua Mềm Mượt Tơi Săn',
    seoTitle: 'Cách Làm Miến Xào Cua Mềm Mượt, Tơi Săn',
    ratingValue: '4.9',
    reviewCount: 418,
    prepTime: '20 phút (sơ chế cua biển luộc gỡ thịt, ngâm miến dong, thái bắp cải & cà rốt sợi)',
    cookTime: '15 phút (xào thịt cua gạch cua thơm lừng & xào miến dong tơi săn không bị vón nát)',
    difficulty: 'Dễ',
    servings: '3 - 4 người',
    ingredients: [
      {
        category: 'Thịt Cua Biển Tươi & Gạch Cua Béo Bùi',
        items: [
          '250g thịt cua biển gỡ sẵn (hoặc 1 con cua thịt 700g luộc gỡ thịt)',
          '1 chén gạch cua biển tươi',
          '1 thìa canh dầu màu điều (chưng gạch cua đỏ cam)',
          '1 thìa canh nước mắm ngon, 1/2 thìa cà phê tiêu sọ xay, 1 thìa cà phê hạt nêm',
        ],
      },
      {
        category: 'Miến Dong Điện Biên Tơi Săn & Rau Củ Tươi',
        items: [
          '250g miến dong Điện Biên / miến mộc (sợi xám trong, dai ngon)',
          '100g cà rốt (thái sợi mỏng)',
          '100g bắp cải / giá đỗ (rửa sạch xắt sợi)',
          '5 tai mộc nhĩ (nấm mèo ngâm nở, thái sợi mỏng)',
          '3 tép tỏi băm, 2 củ hành tím băm nhuyễn, 2 nhánh hành lá, 1 bó rau ngò rí',
        ],
      },
      {
        category: 'Sốt Xào Miến Cua Đậm Đà Kẹo Nhẹ',
        items: [
          '1.5 thìa canh dầu hàu thượng hạng, 1 thìa canh nước tương (xì dầu)',
          '1 thìa canh dầu mè thơm, 1/2 thìa cà phê hạt nêm, 1/2 thìa cà phê tiêu sọ',
          '1 chén nước tương xì dầu xắt ớt hiểm dùng kèm mì xào',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế thịt cua biển, gạch cua & ướp thấm vị',
        time: '15 phút',
        heat: 'Nhiệt độ phòng',
        goal: 'Thịt cua biển thấm gia vị thơm nức, không bị tanh hay nát vụn',
        actionPoints: [
          'Thịt cua biển gỡ vắt nhẹ ráo nước, ướp với 1 thìa cà phê nước mắm ngon, 1/2 thìa cà phê tiêu sọ xay và 1 thìa cà phê hành tím băm nhuyễn trong 10 phút.',
          'Cà rốt và bắp cải thái sợi mỏng. Mộc nhĩ ngâm nở rửa sạch thái sợi.',
        ],
        description:
          'Ướp thịt cua biển với nước mắm ngon, tiêu sọ và hành tím băm 10 phút. Thái sợi cà rốt, bắp cải và mộc nhĩ.',
        tip: 'Ướp thịt cua nhẹ tay với chút nước mắm ngon và tiêu sọ giúp thịt cua săn chắc thơm ngạt ngào khi xào.',
      },
      {
        step: 2,
        title: 'Ngâm chần miến dong tơi mềm & xả nước lạnh trộn dầu mè',
        time: '5 phút',
        heat: 'Lửa lớn',
        goal: 'Sợi miến dong tơi bóng dẻo dai, không bị dính bệt hay vón nát khi xào',
        actionPoints: [
          'Miến dong ngâm nước ấm 10 phút cho sợi miến mềm dẻo.',
          'Thả miến dong vào nồi nước sôi trụng nhanh 30 - 45 giây cho chín tới 80%, vớt ra ngay thau nước lạnh rồi vắt ráo.',
          'Trộn miến dong với 1 thìa canh dầu mè thơm cho từng sợi miến tơi bóng.',
        ],
        description:
          'Trụng miến dong 30 giây trong nước sôi, xả ngay nước lạnh vắt ráo rồi trộn 1 thìa dầu mè thơm cho tơi bóng.',
        tip: 'Trụng miến 30 giây rồi xả nước lạnh trộn dầu mè là bí quyết giúp miến xào cua tơi săn từng sợi không bao giờ vón cục.',
      },
      {
        step: 3,
        title: 'Xào thịt cua & chưng gạch cua thơm lừng rực rỡ',
        time: '3 phút',
        heat: 'Lửa lớn',
        goal: 'Gạch cua chưng dầu màu điều đỏ cam béo bùi, thịt cua săn thơm ngạt ngào',
        actionPoints: [
          'Đun nóng 1 thìa canh dầu màu điều, phi thơm tỏi băm và hành tím băm. Trút gạch cua vào chưng 1 phút cho béo ngậy.',
          'Trút thịt cua biển gỡ xé sợi vào đảo nhẹ tay trên lửa lớn trong 2 phút cho thịt cua săn lại thơm phức rồi trút ra đĩa riêng.',
        ],
        description:
          'Chưng gạch cua với dầu màu điều 1 phút, trút thịt cua vào xào lửa lớn 2 phút cho săn thơm rồi trút ra đĩa.',
        tip: 'Xào thịt cua trên lửa lớn nhanh tay 2 phút rồi trút ra đĩa riêng giúp thịt cua giữ trọn độ mọng ngọt không bị trích nước.',
      },
      {
        step: 4,
        title: 'Xào rau củ giòn ngọt & đảo miến dong tơi săn ngấm sốt',
        time: '3 phút',
        heat: 'Lửa lớn',
        goal: 'Rau củ giòn xanh mượt, sợi miến dong săn tơi ngấm đẫm sốt dầu hàu đậm đà',
        actionPoints: [
          'Phi thơm tỏi hành còn lại, trút cà rốt, mộc nhĩ và bắp cải/giá đỗ vào xào lửa lớn 2 phút.',
          'Trút miến dong đã trụng tơi vào chảo, rưới hỗn hợp sốt xào miến. Đảo tơi nhẹ tay dồn dập trên lửa lớn 2 phút cho sợi miến săn bóng ngấm đẫm gia vị.',
        ],
        description:
          'Xào cà rốt mộc nhĩ bắp cải 2 phút. Trút miến dong vào chảo rưới sốt xào đảo tơi nhẹ tay lửa lớn 2 phút cho miến săn ngấm vị.',
        tip: 'Dùng đũa xới tơi miến liên tục trên lửa lớn giúp sợi miến hấp thụ hết nước sốt trở nên bóng mượt ngạt ngào.',
      },
      {
        step: 5,
        title: 'Trút thịt cua vào đảo bốc khói & thưởng thức nóng hổi',
        time: '2 phút',
        heat: 'Dùng nóng hổi',
        goal: 'Đĩa miến xào cua biển bốc khói ngạt ngào, sợi miến tơi săn quyện thịt cua đỏ au béo ngậy',
        actionPoints: [
          'Trút đĩa thịt cua xào gạch cua vào chảo miến. Đảo nhẹ tay dồn dập trên lửa lớn trong 1 phút cho nguyên liệu hòa quyện ngạt ngào rồi tắt bếp.',
          'Múc miến xào cua ra đĩa lớn, rắc hành lá ngò rí, tiêu sọ xay và hành phi giòn rụm.',
          'Thưởng thức ngay khi còn nóng hổi từng sợi miến tơi săn mềm mượt, thịt cua béo bùi ngọt lịm chấm xì dầu ớt hiểm.',
        ],
        description:
          'Trút thịt cua vào chảo miến đảo nhẹ 1 phút bốc khói ngạt ngào, múc ra đĩa rắc tiêu hành phi và dùng nóng.',
        tip: 'Rắc hành phi giòn rụm và tiêu sọ xay lúc mì bốc khói nghi ngút giúp aroma thịt cua bùng tỏa tuyệt đỉnh.',
      },
    ],
    chefSecret:
      '3 bí quyết vàng làm miến xào cua biển mềm mượt tơi săn chuẩn bếp trưởng: 1. Trụng miến 30 giây & xả nước lạnh trộn dầu mè: Giúp từng sợi miến dong tơi bóng dẻo dai, xào lâu không bị bết dính hay vón nát; 2. Chưng gạch cua với dầu màu điều trước khi xào thịt cua: Giúp món miến xào cua bùi béo bốc mùi thơm rực rỡ óng ánh màu đỏ cam; 3. Đảo miến dồn dập trên lửa lớn với sốt dầu hàu: Giúp sợi miến săn lại và bám đẫm nước sốt đậm đà ngọt vị cua tự nhiên.',
    recommendedSauce:
      'Đĩa miến xào cua bốc khói ngào ngạt hương dầu mè, từng sợi miến dong tơi săn bóng mượt ngập thịt cua biển đỏ au béo ngậy, quyện mộc nhĩ cà rốt giòn ngọt sần sật, chấm thêm muỗng xì dầu tỏi ớt hiểm cay nồng ngon tuyệt đỉnh.',
  },
};

/**
 * Generate standard SEO Title for Recipe Articles ("Cách Nấu Món Ngon")
 * Follows Vietnamese search-intent best practices (Cách nấu / Cách làm + Tên món + Đặc tính hấp dẫn chuẩn vị)
 */
export function getRecipeArticleTitle(dish: Dish, recipe?: DishRecipe): string {
  if (recipe?.seoTitle) {
    return recipe.seoTitle;
  }
  const curated = CURATED_RECIPES[dish.id] || (RECIPE_SLUG_ALIASES[dish.id] ? CURATED_RECIPES[RECIPE_SLUG_ALIASES[dish.id]] : undefined) || (Object.keys(RECIPE_SLUG_ALIASES).find((k) => RECIPE_SLUG_ALIASES[k] === dish.id) ? CURATED_RECIPES[Object.keys(RECIPE_SLUG_ALIASES).find((k) => RECIPE_SLUG_ALIASES[k] === dish.id)!] : undefined);
  if (curated?.seoTitle) {
    return curated.seoTitle;
  }

  const rawName = dish.vietnameseName || dish.name || '';
  const cleanName = rawName
    .replace(/^cách nấu\s+/i, '')
    .replace(/^cách làm\s+/i, '')
    .replace(/^hướng dẫn nấu\s+/i, '')
    .replace(/^hướng dẫn làm\s+/i, '')
    .trim();

  const lowerName = cleanName.toLowerCase();
  const cat = dish.category;

  // 0. Món chay
  if (cat === 'do_chay' || lowerName.includes('chay')) {
    return `Cách Làm ${cleanName} Thanh Đạm, Đậm Đà Chuẩn Cơm Chay`;
  }

  // 1. Món bánh mì, gỏi cuốn, phở cuốn, nem (Ưu tiên kiểm tra trước bún/phở/mì để tránh dính chữ 'mì' trong 'bánh mì' hay 'phở' trong 'phở cuốn')
  if (lowerName.includes('bánh mì que')) {
    return `Cách Làm ${cleanName} Patê Béo Ngậy Giòn Rụm Chuẩn Vị Đất Cảng`;
  }
  if (lowerName.includes('bánh mì')) {
    return `Cách Làm ${cleanName} Giòn Rụm, Đậm Đà Chuẩn Vị Đường Phố`;
  }
  if (lowerName.includes('bánh cuốn')) {
    return `Cách Làm ${cleanName} Vỏ Mỏng Mướt, Nước Chấm Ấm Nóng Chuẩn Vị Hà Nội`;
  }
  if (
    cat === 'banhmi_cuon' ||
    lowerName.includes('phở cuốn') ||
    lowerName.includes('gỏi cuốn') ||
    lowerName.includes('bò bía') ||
    lowerName.includes('nem cuốn')
  ) {
    return `Cách Làm ${cleanName} Tươi Ngon, Nước Chấm Chua Ngọt Chuẩn Vị`;
  }

  // 2. Phở, Bún, Miến, Mì, Hủ tiếu, Bánh canh
  if (lowerName.includes('bún chả') && !lowerName.includes('chả giò') && !lowerName.includes('chả cá')) {
    return `Cách Làm ${cleanName} Thịt Nướng Than Hoa, Nước Chấm Đậm Đà Chuẩn Vị`;
  }
  if (lowerName.includes('chả cá lã vọng')) {
    return `Cách Làm ${cleanName} Nướng Than Hoa, Xèo Xèo Chảo Mỡ Chuẩn Vị Phố Cổ`;
  }
  if (lowerName.includes('bún chả cá')) {
    return `Cách Nấu ${cleanName} Thơm Ngon Đậm Đà Chuẩn Vị`;
  }
  if (lowerName.includes('chả cá')) {
    return `Cách Làm ${cleanName} Dai Giòn Thơm Ngon Chuẩn Vị`;
  }
  if (lowerName.includes('bún đậu')) {
    return `Cách Làm ${cleanName} Thơm Ngon, Đầy Đủ Topping Chuẩn Vị Hà Thành`;
  }
  if (lowerName.includes('bún thịt nướng') || lowerName.includes('bún nem nướng')) {
    return `Cách Làm ${cleanName} Đậm Đà, Nước Mắm Chua Ngọt Chuẩn Vị Nam Bộ`;
  }
  if (lowerName.includes('phở xào') || lowerName.includes('mì xào') || lowerName.includes('hủ tiếu xào')) {
    return `Cách Làm ${cleanName} Thơm Lừng, Đậm Đà Chuẩn Bếp Trưởng`;
  }
  if (
    lowerName.includes('trộn') ||
    lowerName.includes('hủ tiếu khô') ||
    lowerName.includes('mì khô') ||
    lowerName.includes('phở khô')
  ) {
    return `Cách Làm ${cleanName} Sốt Chua Ngọt Đậm Đà Chuẩn Vị`;
  }
  if (lowerName.includes('mì quảng')) {
    return `Cách Nấu ${cleanName} Đậm Đà Chuẩn Vị Xứ Quảng Tại Nhà`;
  }
  if (lowerName.includes('bò né')) {
    return `Cách Làm ${cleanName} Mềm Mọng, Bơ Tỏi Pate Chuẩn Vị Sài Gòn`;
  }
  if (
    cat === 'bun_pho_mi' ||
    cat === 'bun_pho' ||
    lowerName.includes('bún') ||
    (lowerName.includes('phở') && !lowerName.includes('cuốn')) ||
    lowerName.includes('miến') ||
    (lowerName.includes('mì') && !lowerName.includes('bánh mì')) ||
    lowerName.includes('hủ tiếu') ||
    lowerName.includes('bánh canh')
  ) {
    return `Cách Nấu ${cleanName} Nước Dùng Thanh Ngọt Chuẩn Vị Gia Đình`;
  }

  // 2. Lẩu
  if (cat === 'lau_chao' && lowerName.includes('lẩu')) {
    return `Cách Nấu ${cleanName} Chua Cay Đậm Đà Chuẩn Vị Gia Đình`;
  }

  // 3. Cháo, Súp
  if (lowerName.includes('cháo') || lowerName.includes('súp')) {
    return `Cách Nấu ${cleanName} Bổ Dưỡng, Thơm Ngon Cho Cả Nhà`;
  }

  // 4. Canh
  if (lowerName.includes('canh')) {
    return `Cách Nấu ${cleanName} Thanh Mát, Đậm Đà Chuẩn Cơm Nhà`;
  }

  // 5. Kho, Hầm, Rim, Tiềm, Om, Sốt cà
  if (
    lowerName.includes('kho') ||
    lowerName.includes('hầm') ||
    lowerName.includes('rim') ||
    lowerName.includes('tiềm') ||
    lowerName.includes('om') ||
    lowerName.includes('sốt cà')
  ) {
    return `Cách Nấu ${cleanName} Đậm Đà, Mềm Mọng Chuẩn Vị Mẹ Nấu`;
  }

  // 6. Cơm chiên / Cơm rang
  if (lowerName.includes('cơm rang') || lowerName.includes('cơm chiên')) {
    return `Cách Làm ${cleanName} Hạt Cơm Săn Giòn, Thơm Ngon Chuẩn Vị`;
  }

  // 7. Cơm tấm, Cơm niêu, Cơm gà, Xôi
  if (lowerName.includes('cơm gà hội an')) {
    return `Cách Làm ${cleanName} Hạt Cơm Vàng Óng, Gỏi Gà Xé Đậm Đà Chuẩn Vị Phố Cổ`;
  }
  if (lowerName.includes('xôi')) {
    return `Cách Nấu ${cleanName} Dẻo Thơm Óng Ả Chuẩn Vị Truyền Thống`;
  }
  if (cat === 'com_xoi' || cat === 'com' || lowerName.includes('cơm')) {
    return `Cách Làm ${cleanName} Thơm Ngon Đậm Đà Chuẩn Quán`;
  }

  // 8. Bánh mì, Bánh xèo, Bánh cuốn, Bánh khọt, Nem rán, Chả giò
  if (lowerName.includes('nem rán') || lowerName.includes('chả giò') || lowerName.includes('nem chua rán')) {
    return `Cách Làm ${cleanName} Vàng Ruộm, Giòn Rụm Bất Bại Tại Nhà`;
  }
  if (lowerName.includes('bánh xèo') || lowerName.includes('bánh khọt')) {
    return `Cách Làm ${cleanName} Vàng Giòn Rụm, Chuẩn Vị Nam Bộ`;
  }
  if (lowerName.includes('bánh mì')) {
    return `Cách Làm ${cleanName} Giòn Rụm, Đậm Đà Chuẩn Vị Đường Phố`;
  }
  if (
    lowerName.includes('cuốn') ||
    lowerName.includes('gỏi cuốn') ||
    lowerName.includes('nem cuốn')
  ) {
    return `Cách Làm ${cleanName} Tươi Ngon, Nước Chấm Đậm Đà Chuẩn Vị`;
  }
  if (lowerName.includes('bánh')) {
    return `Cách Làm ${cleanName} Thơm Ngon, Đơn Giản Dễ Làm Tại Nhà`;
  }

  // 9. Nộm, Gỏi, Salad
  if (cat === 'salad_monnhe' || lowerName.includes('gỏi') || lowerName.includes('nộm') || lowerName.includes('salad')) {
    return `Cách Làm ${cleanName} Chua Ngọt Giòn Tan, Giải Ngấy Cực Tốt`;
  }

  // 10. Nướng, Quay, Chiên, Rán, Xào
  if (lowerName.includes('nướng') || lowerName.includes('quay')) {
    return `Cách Làm ${cleanName} Da Giòn Thịt Mềm, Thơm Lừng Khói Than`;
  }
  if (lowerName.includes('chiên') || lowerName.includes('rán')) {
    return `Cách Làm ${cleanName} Vàng Giòn Rụm, Thơm Ngon Bất Bại`;
  }
  if (lowerName.includes('xào')) {
    return `Cách Làm ${cleanName} Giòn Ngon, Xanh Mướt Chuẩn Bếp Trưởng`;
  }

  // 11. Món nhậu, Ăn vặt
  if (cat === 'mon_nhau' || cat === 'an_vat' || lowerName.includes('ốc') || lowerName.includes('chân gà') || lowerName.includes('lòng')) {
    return `Cách Làm ${cleanName} Đậm Đà Cay Nồng, Bén Mồi Chuẩn Quán`;
  }

  // 12. Đồ uống, Chè, Trà
  if (cat === 'do_uong' || lowerName.includes('chè') || lowerName.includes('trà') || lowerName.includes('cà phê') || lowerName.includes('sinh tố')) {
    return `Cách Làm ${cleanName} Thơm Mát Giải Nhiệt, Đơn Giản Tại Nhà`;
  }

  // Default fallback
  return `Cách Nấu ${cleanName} Thơm Ngon Chuẩn Vị Gia Đình`;
}

/**
 * Intelligent Recipe Generator for any dish from INITIAL_DISHES
 * If a hand-crafted recipe exists in CURATED_RECIPES, returns it.
 * Otherwise, generates a structured, culturally accurate Vietnamese recipe based on the dish characteristics.
 */
export function getDishRecipe(dish: Dish): DishRecipe {
  let curated = CURATED_RECIPES[dish.id];
  if (!curated) {
    const aliasId = RECIPE_SLUG_ALIASES[dish.id] || Object.keys(RECIPE_SLUG_ALIASES).find((k) => RECIPE_SLUG_ALIASES[k] === dish.id);
    if (aliasId && CURATED_RECIPES[aliasId]) {
      curated = CURATED_RECIPES[aliasId];
    }
  }
  if (curated) {
    return {
      ...curated,
      steps: curated.steps || (curated as any).instructions || [],
    };
  }

  // Derive cooking method & ingredients intelligently based on categories and tags
  const isRollOrBanhMi =
    dish.category === 'banhmi_cuon' ||
    dish.name.toLowerCase().includes('bánh mì') ||
    dish.name.toLowerCase().includes('cuốn') ||
    dish.name.toLowerCase().includes('gỏi cuốn') ||
    dish.name.toLowerCase().includes('bò bía') ||
    (dish.name.toLowerCase().includes('nem') && !dish.name.toLowerCase().includes('nem chua rán'));

  const isHotpot =
    !isRollOrBanhMi &&
    (dish.name.toLowerCase().includes('lẩu') || (dish.category === 'lau_chao' && dish.id.startsWith('lau')));

  const isSoupOrNoodle =
    !isRollOrBanhMi &&
    !isHotpot &&
    (dish.category === 'bun_pho_mi' ||
      dish.category === 'bun_pho' ||
      dish.category === 'lau_chao' ||
      dish.name.toLowerCase().includes('bún') ||
      (dish.name.toLowerCase().includes('phở') && !dish.name.toLowerCase().includes('cuốn')) ||
      dish.name.toLowerCase().includes('hủ tiếu') ||
      (dish.name.toLowerCase().includes('mì') && !dish.name.toLowerCase().includes('bánh mì')) ||
      dish.name.toLowerCase().includes('canh'));

  const isRiceOrStickyRice =
    dish.category === 'com_xoi' ||
    dish.category === 'com' ||
    dish.name.toLowerCase().includes('cơm') ||
    dish.name.toLowerCase().includes('xôi');

  const isGrillOrFried =
    dish.category === 'nuong_chien' ||
    dish.category === 'mon_nhau' ||
    dish.name.toLowerCase().includes('nướng') ||
    dish.name.toLowerCase().includes('chiên') ||
    dish.name.toLowerCase().includes('xào');

  // Hotpot fallback template
  if (isHotpot) {
    return {
      dishId: dish.id,
      dishName: dish.name,
      seoTitle: getRecipeArticleTitle(dish),
      prepTime: '30 phút (sơ chế thịt & nhặt rau nấm)',
      cookTime: '45 - 60 phút (ninh nước dùng lẩu)',
      difficulty: 'Trung bình',
      servings: '4 - 6 người ăn',
      ingredients: [
        {
          category: 'Đồ nhúng lẩu chính',
          items: [
            `Phần thịt / hải sản tươi ngon đặc trưng của ${dish.vietnameseName}`,
            'Xương ống heo hoặc xương gà hầm lấy nước dùng ngọt thanh tự nhiên',
            'Đậu phụ tươi, nấm các loại (nấm kim châm, nấm đùi gà, nấm rơm)',
          ],
        },
        {
          category: 'Gia vị & Hương liệu nước lẩu',
          items: [
            'Hành tím nướng, gừng tươi đập dập, sả cây, cà chua chín đỏ',
            'Gia vị chua cay đặc trưng (giấm bỗng, me hoặc sa tế chua cay)',
            'Nước mắm cốt truyền thống, muối hạt, đường phèn, tiêu sọ',
          ],
        },
        {
          category: 'Rau nhúng & Đồ ăn kèm',
          items: [
            'Rau muống, cải cúc, cải ngọt, hoa chuối hoặc các loại rau đồng nội',
            'Bún tươi sợi nhỏ hoặc mì gói, bánh đa ăn kèm',
            'Nước mắm ớt cay, muối tiêu chanh hoặc sa tế tôm chấm lẩu',
          ],
        },
      ],
      steps: [
        {
          step: 1,
          title: 'Ninh nước dùng xương ngọt thanh tự nhiên',
          time: '45 phút',
          heat: 'Lửa liu riu sau khi sôi',
          goal: 'Nước hầm xương trong veo, ngọt đậm đà từ tủy xương, không lẫn mùi tanh',
          actionPoints: [
            'Chặt xương ống thành khúc, chần qua nước sôi gừng muối trong 3 phút rồi rửa xả lại thật sạch.',
            'Cho xương vào nồi cùng 2.5 - 3 lít nước lọc, đun sôi bùng rồi hớt sạch bọt.',
            'Hạ lửa nhỏ liu riu ninh trong 45 phút cùng hành tím nướng để nước dùng có vị ngọt thanh sâu lắng.',
          ],
          description:
            'Chần xương qua nước sôi gừng muối để khử sạch bọt bẩn. Rửa lại nước lạnh rồi cho vào nồi ninh liu riu cùng hành nướng cho nước dùng ngọt thanh.',
          tip: 'Không đậy kín vung và hớt bọt thường xuyên để nước dùng luôn trong suốt.',
        },
        {
          step: 2,
          title: 'Sơ chế thịt, hải sản và rau nấm nhúng lẩu',
          time: '20 phút',
          heat: 'Nhiệt độ phòng',
          goal: 'Đồ nhúng tươi ngon, sạch sẽ, thái lát mỏng đẹp mắt sẵn sàng lên bàn',
          actionPoints: [
            `Thịt và hải sản cho ${dish.vietnameseName} rửa sạch, thái lát mỏng vừa ăn để nhúng nhanh chín mềm.`,
            'Rau nhúng và các loại nấm nhặt rửa sạch, ngâm nước muối loãng 10 phút rồi vớt ra vẩy ráo nước.',
            'Bày biện các loại thịt, hải sản, đậu phụ và rau nấm ra từng đĩa riêng đẹp mắt.',
          ],
          description:
            `Thịt và hải sản rửa sạch thái mỏng vừa ăn. Rau nấm ngâm rửa sạch ráo nước. Xếp gọn gàng ra từng đĩa riêng để chuẩn bị nhúng lẩu.`,
          tip: 'Thịt bò hoặc thịt nạc nhúng lẩu thái thật mỏng ngang thớ để khi nhúng vào nước sôi chín tái mềm mọng, không bị dai.',
        },
        {
          step: 3,
          title: 'Nấu nước lẩu chuẩn vị đậm đà thơm lừng',
          time: '15 phút',
          heat: 'Lửa vừa',
          goal: 'Nước lẩu dậy mùi thơm nức, màu sắc óng ả, vị chua cay mặn ngọt hài hòa',
          actionPoints: [
            'Phi thơm hành tỏi và ớt với chút dầu màu điều, xào cà chua chín tới cho lên màu đẹp.',
            'Trút phần nước hầm xương vào nồi lẩu, đun sôi lăn tăn.',
            'Nêm nếm gia vị chua cay, nước mắm ngon, hạt nêm và chút đường phèn cho tròn vị đậm đà.',
          ],
          description:
            'Phi thơm hành tỏi xào cà chua lấy màu óng ả. Đổ nước dùng xương vào đun sôi rồi nêm nếm gia vị chua cay, nước mắm ngon vừa khẩu vị gia đình.',
          tip: 'Đường phèn giúp làm dịu vị chua và tạo hậu vị ngọt thanh tao cho nồi nước lẩu.',
        },
        {
          step: 4,
          title: 'Bày bàn tiệc lẩu & Thưởng thức quây quần nóng hổi',
          time: '5 phút',
          heat: 'Bếp lẩu sôi nhẹ trên bàn ăn',
          goal: 'Nồi lẩu sôi sùng sục nghi ngút khói, đồ nhúng tươi giòn ngọt tự nhiên',
          actionPoints: [
            'Đặt nồi nước lẩu lên bếp từ/bếp cồn giữa bàn ăn, thả đậu phụ và nấm vào trước.',
            'Khi nước sôi, gắp từng miếng thịt, hải sản và rau xanh nhúng vừa chín tới.',
            'Gắp đồ ăn kèm bún tươi, chan nước lẩu chua cay nóng hổi và chấm đẫm nước chấm gia vị đậm đà.',
          ],
          description:
            'Đặt bếp lẩu giữa bàn ăn. Nước lẩu sôi thì nhúng thịt, hải sản và rau nấm ăn kèm bún tươi. Thưởng thức nóng hổi cùng gia đình!',
          tip: 'Nhúng đồ ăn đến đâu ăn đến đó để thịt giữ được độ ngọt mọng và rau giữ nguyên độ giòn tươi xanh.',
        },
      ],
      chefSecret:
        'Bí quyết nồi lẩu ngon bất bại: Ninh xương lấy nước ngọt tự nhiên thay vì dùng bột ngọt, phi hành tỏi xào cà chua lấy màu đỏ óng ả, và luôn giữ nước lẩu sôi nhẹ trên bàn để đồ nhúng chín tới hoàn hảo.',
      recommendedSauce:
        'Nước mắm mặn ớt xiêm cay xé lưỡi hoặc đĩa muối tiêu chanh ớt và sa tế tôm tự chưng.',
    };
  }

  // Generic customized template tailored to the dish
  if (isSoupOrNoodle) {
    return {
      dishId: dish.id,
      dishName: dish.name,
      seoTitle: getRecipeArticleTitle(dish),
      prepTime: '25 phút',
      cookTime: '60 - 90 phút (nước dùng ngọt thanh)',
      difficulty: 'Trung bình',
      servings: '3 - 4 người',
      ingredients: [
        {
          category: 'Thành phần món chính',
          items: [
            `Phần đạm chính: Thịt/Hải sản tươi ngon đặc trưng cho ${dish.vietnameseName}`,
            'Sợi bún/phở/mì tươi sạch hoặc hủ tiếu dai ngon',
            'Xương ống heo hoặc xương gà hầm lấy nước dùng ngọt tự nhiên',
          ],
        },
        {
          category: 'Rau thơm & Gia vị nước lèo',
          items: [
            'Hành tím nướng, gừng đập dập khử mùi tanh',
            'Hành lá chẻ sợi, rau mùi (ngò rí), ngò gai, húng quế',
            'Gia vị: Nước mắm cốt truyền thống, muối hạt, đường phèn, tiêu sọ xay',
          ],
        },
        {
          category: 'Rau ăn kèm & Đồ chấm',
          items: ['Giá đỗ tươi chần hoặc sống', 'Chanh tươi, ớt hiểm, ớt sa tế tự chưng cay nồng'],
        },
      ],
      steps: [
        {
          step: 1,
          title: 'Sơ chế sạch nguyên liệu và ninh nước dùng ngọt thanh',
          time: '45 - 60 phút',
          heat: 'Lửa liu riu sau khi sôi',
          goal: 'Nước dùng trong veo thanh khiết, tủy xương tiết vị ngọt tự nhiên, không lẫn bọt cặn',
          actionPoints: [
            'Chần xương và thịt qua nước sôi có gừng đập dập trong 3 phút để khử sạch cặn bọt bẩn và mùi tanh.',
            'Rửa lại thật sạch dưới vòi nước lạnh rồi cho vào nồi hầm cùng 3 - 4 lít nước lọc.',
            'Thêm hành tím nướng thơm đập dập, đun sôi bùng rồi hạ lửa liu riu, hớt bọt thường xuyên.',
          ],
          description:
            'Chần xương và các loại thịt qua nước sôi có gừng đập dập để khử sạch cặn bọt. Rửa lại nước lạnh rồi cho vào nồi ninh liu riu cùng hành tím nướng.',
          tip: 'Hớt bọt thường xuyên và không đậy kín nắp để nước dùng luôn trong và thanh ngọt.',
        },
        {
          step: 2,
          title: 'Chế biến phần thịt / nhân món mọng nước',
          time: '15 phút',
          heat: 'Lửa vừa',
          goal: 'Thịt hoặc hải sản chín tới mềm ngọt, đượm vị tiêu mắm, giữ nguyên độ tươi',
          actionPoints: [
            `Tẩm ướp thịt/hải sản của ${dish.vietnameseName} với 1 thìa nước mắm ngon, tiêu sọ, hành tím băm.`,
            'Xào săn nhanh tay trên lửa lớn hoặc luộc vừa chín tới trong nồi nước dùng rồi vớt ra ngâm nước nguội.',
            'Thái lát mỏng hoặc xếp gọn ra đĩa để chuẩn bị bày tô.',
          ],
          description:
            `Tẩm ướp thịt hoặc hải sản với chút nước mắm ngon, tiêu và hành tỏi băm. Xào săn hoặc luộc vừa chín tới để giữ trọn vị ngọt mọng nước của ${dish.vietnameseName}.`,
        },
        {
          step: 3,
          title: 'Nêm nếm nồi nước lèo chuẩn tỷ lệ vàng',
          time: '10 phút',
          heat: 'Lửa vừa sôi lăn tăn',
          goal: 'Vị nước lèo đậm đà vừa vặn, thơm nức mũi mùi đầu hành và gia vị truyền thống',
          actionPoints: [
            'Nêm nước mắm cốt nhĩ, đường phèn và muối hạt vào nồi nước dùng theo khẩu vị gia đình.',
            'Thả một ít đầu hành chẻ hoặc hành tây thái mỏng vào nồi để nước lèo dậy hương ngào ngạt.',
            'Giữ nồi nước lèo luôn sôi nhẹ trên bếp sẵn sàng chan tô.',
          ],
          description:
            'Nêm nước mắm cốt nhĩ, đường phèn và muối hạt cho vừa miệng. Cho một ít đầu hành chẻ vào nồi để nước dùng dậy mùi thơm ngào ngạt.',
        },
        {
          step: 4,
          title: 'Trần sợi bún/phở và chan nước dùng thưởng thức',
          time: '5 phút',
          heat: 'Nước sôi sùng sục',
          goal: 'Tô bún phở bốc khói ngùn ngụt, sợi mì bún nóng dẻo, nước ngập thơm nức',
          actionPoints: [
            'Chần sợi bún/phở qua nước sôi trong 15 giây, vẩy thật ráo nước rồi cho vào tô lớn.',
            'Xếp thịt, chả, hải sản và rau thơm cắt nhỏ lên mặt tô.',
            'Múc nước dùng đang sôi sùng sục chan đều ngập mặt bún và thưởng thức ngay khi còn nóng hổi.',
          ],
          description:
            `Trần sợi bún/phở qua nước sôi, xếp vào tô. Xếp các loại thịt và rau thơm lên mặt rồi chan nước dùng sôi sùng sục. Thưởng thức ngay khi còn bốc khói!`,
        },
      ],
      chefSecret:
        'Dùng một chút đường phèn kết hợp xương hầm nhiều giờ sẽ tạo ra vị ngọt hậu sâu lắng cho nước dùng mà không cần dùng đến mì chính hay bột ngọt.',
      recommendedSauce: 'Ăn kèm chén nước mắm mặn dầm ớt xiêm xanh và một góc chanh tươi thơm mát.',
    };
  }

  if (isRiceOrStickyRice) {
    return {
      dishId: dish.id,
      dishName: dish.name,
      seoTitle: getRecipeArticleTitle(dish),
      prepTime: '20 phút',
      cookTime: '30 - 45 phút',
      difficulty: 'Dễ',
      servings: '3 - 4 người',
      ingredients: [
        {
          category: 'Nguyên liệu chính',
          items: [
            'Gạo dẻo thơm hạt dài hoặc nếp cái hoa vàng chuẩn vị',
            `Thịt / Hải sản / Topping đặc trưng của ${dish.vietnameseName}`,
            'Mỡ hành lá phi thơm hoặc hành phi giòn rụm',
          ],
        },
        {
          category: 'Gia vị tẩm ướp',
          items: [
            'Nước mắm nhĩ, dầu hào, tiêu xay, đường thốt nốt',
            'Tỏi và hành tím băm nhuyễn vắt lấy nước cốt',
            'Một chút mật ong hoặc dầu màu điều cho màu sắc óng ả',
          ],
        },
        {
          category: 'Đồ ăn kèm giải ngấy',
          items: ['Dưa leo, cà chua thái lát mỏng', 'Đồ chua củ cải cà rốt ngâm giấm đường giòn rụm'],
        },
      ],
      steps: [
        {
          step: 1,
          title: 'Nấu cơm dẻo tơi xốp / Hấp xôi thơm lừng',
          time: '30 phút',
          heat: 'Nồi cơm điện hoặc xửng hấp lửa vừa',
          goal: 'Từng hạt cơm/xôi bóng bẩy, dẻo thơm nguyên hạt, không bị khô sượng hay nhão nát',
          actionPoints: [
            'Vo sạch gạo, đong nước vừa vặn theo loại gạo (thêm 1 thìa cà phê dầu ăn để hạt cơm bóng bẩy).',
            'Nếu là xôi: ngâm nếp trước 4 - 6 tiếng, để ráo rồi hấp cách thủy 30 phút cho hạt xôi căng mọng dẻo dai.',
          ],
          description:
            'Vo sạch gạo, canh lượng nước vừa vặn để hạt cơm chín tới nở đều, tơi xốp và không bị nhão. Nếu là xôi, ngâm nếp trước 4 - 6 tiếng để hạt dẻo dai mọng căng.',
        },
        {
          step: 2,
          title: 'Tẩm ướp phần đạm ngấm gia vị sâu',
          time: '20 - 30 phút',
          heat: 'Nhiệt độ phòng mát',
          goal: 'Gia vị thấm đều vào từng thớ thịt, dậy mùi thơm mắm tỏi hành sả',
          actionPoints: [
            `Ướp phần thịt hoặc nguyên liệu chính của ${dish.vietnameseName} với sốt gia vị: nước mắm nhĩ, tiêu, dầu hào, hành tỏi băm.`,
            'Đảo đều tay và để nghỉ 20 - 30 phút cho ngấm sâu gia vị trước khi chế biến nhiệt.',
          ],
          description:
            `Ướp thịt hoặc nguyên liệu chính của ${dish.vietnameseName} với sốt gia vị mắm tỏi tiêu trong 30 phút để ngấm sâu vào từng thớ thịt.`,
        },
        {
          step: 3,
          title: 'Chế biến phần nhân vàng óng kẹo sốt',
          time: '15 - 20 phút',
          heat: 'Lửa vừa rồi hạ nhỏ',
          goal: 'Thịt xém vàng hấp dẫn, nước sốt sánh mịn bao quanh bề mặt óng ánh',
          actionPoints: [
            'Nướng hoặc áp chảo, rim đảo thịt trên lửa vừa cho săn đều hai mặt.',
            'Rưới phần nước sốt ướp vào đun liu riu cho nước sốt keo lại bám đều quanh từng miếng thịt óng ả.',
          ],
          description:
            'Nướng hoặc rim đảo thịt trên lửa vừa cho ngấm sốt sánh kẹo, dậy mùi thơm nức mũi và có màu vàng óng ả hấp dẫn.',
        },
        {
          step: 4,
          title: 'Bày đĩa, rưới mỡ hành thơm nức & thưởng thức',
          time: '5 phút',
          heat: 'Thưởng thức khi cơm nóng sốt',
          goal: 'Đĩa cơm đầy đặn màu sắc, hạt cơm bóng bẩy mỡ hành, đồ chua thanh mát kích thích vị giác',
          actionPoints: [
            'Xới cơm/xôi nóng ra đĩa hoặc mẹt tre, bày phần thịt lên trên.',
            'Rưới mỡ hành lá óng ả, rắc hành phi vàng giòn và xếp dưa leo, đồ chua bên cạnh.',
            'Dọn kèm chén nước mắm chua ngọt sánh tỏi ớt hoặc nước tương tỏi cay.',
          ],
          description:
            'Xới cơm ra đĩa hoặc mẹt tre, bày thịt nướng/rim lên trên. Rưới thêm một thìa mỡ hành tóp mỡ béo ngậy và rắc hành phi vàng giòn.',
        },
      ],
      chefSecret:
        'Thêm một thìa cà phê dầu ăn hoặc mỡ gà khi nấu cơm sẽ giúp từng hạt cơm bóng bẩy, thơm dẻo và giữ được độ mềm suốt cả ngày.',
      recommendedSauce: 'Nước mắm chua ngọt sánh tỏi ớt băm bồng bềnh hoặc nước tương tỏi ớt đậm đà.',
    };
  }

  if (isRollOrBanhMi) {
    return {
      dishId: dish.id,
      dishName: dish.name,
      seoTitle: getRecipeArticleTitle(dish),
      prepTime: '20 phút',
      cookTime: '15 - 20 phút',
      difficulty: 'Dễ',
      servings: '2 - 4 người',
      ingredients: [
        {
          category: 'Vỏ bánh & Nhân chính',
          items: [
            'Bánh mì giòn rụm hoặc bánh tráng dẻo mỏng cuốn',
            `Thịt / Tôm / Chả đặc trưng của ${dish.vietnameseName}`,
            'Pate thơm béo, bơ trứng gà hoặc sốt mayonnaise',
          ],
        },
        {
          category: 'Rau tươi & Đồ chua kèm theo',
          items: [
            'Rau răm, ngò rí, húng quế, xà lách, dưa leo giòn mát',
            'Đồ chua củ cải cà rốt ngâm giấm đường chua ngọt',
            'Ớt sừng cắt lát cay tê kích thích vị giác',
          ],
        },
      ],
      steps: [
        {
          step: 1,
          title: 'Sơ chế rau sống và đồ chua giòn rụm',
          time: '10 phút',
          heat: 'Nhiệt độ phòng mát',
          goal: 'Rau sống tươi xanh mướt, ráo sạch nước hoàn toàn, đồ chua giòn tan chua ngọt vừa vặn',
          actionPoints: [
            'Rửa sạch các loại rau sống, ngâm nước muối loãng 5 phút rồi vẩy thật ráo nước.',
            'Dưa chuột chẻ thanh dài hoặc thái lát mỏng.',
            'Làm đồ chua: Cà rốt và củ cải bào sợi bóp muối, xả sạch rồi ngâm giấm đường tỷ lệ 1:1 trong 15 phút.',
          ],
          description:
            'Rửa sạch các loại rau sống và vẩy ráo. Làm đồ chua củ cải cà rốt giòn ngọt để cân bằng vị béo của món ăn.',
        },
        {
          step: 2,
          title: 'Chế biến nhân thịt đượm vị thơm lừng',
          time: '15 phút',
          heat: 'Lửa vừa hoặc nướng than hoa',
          goal: 'Nhân thịt chín tới mềm ngọt, dậy mùi tiêu tỏi, màu sắc hấp dẫn',
          actionPoints: [
            `Tẩm ướp thịt/tôm đặc trưng của ${dish.vietnameseName} với mắm ngon, tiêu và tỏi băm.`,
            'Xào săn hoặc nướng xém cạnh cho thịt thơm nức mùi khói.',
          ],
          description:
            'Chế biến phần nhân đạm cho chín tới, dậy mùi thơm đặc trưng và ngấm đều gia vị đậm đà.',
        },
        {
          step: 3,
          title: 'Pha nước chấm đặc sánh hoặc làm sốt bánh mì',
          time: '5 phút',
          heat: 'Nhiệt độ phòng',
          goal: 'Nước chấm tương bơ đậu phộng béo bùi sánh quyện hoặc sốt nước mắm chua ngọt bồng bềnh',
          actionPoints: [
            'Pha nước chấm phù hợp: Sốt tương bơ đậu phộng sánh béo hoặc nước mắm chua ngọt tỏi ớt nổi bề mặt.',
            'Nếm lại gia vị cân bằng vị mặn ngọt thanh nhẹ.',
          ],
          description:
            'Pha chế phần nước sốt chấm hoặc nước chan đậm đà, quyết định 50% độ ngon của món ăn.',
        },
        {
          step: 4,
          title: 'Cuốn bánh đẹp mắt hoặc kẹp bánh mì giòn tan',
          time: '5 phút',
          heat: 'Thưởng thức tươi giòn',
          goal: 'Cuốn chắc tay không rách vỏ, hoặc ổ bánh mì giòn rụm đầy ắp nhân hấp dẫn',
          actionPoints: [
            'Trải bánh tráng hoặc xẻ dọc ổ bánh mì giòn nướng nóng.',
            'Phết sốt, xếp đều rau thơm, đồ chua và nhân thịt vào giữa.',
            'Cuốn chặt tay hoặc kẹp kín bánh mì, thưởng thức ngay với chén nước sốt đậm đà.',
          ],
          description:
            'Gói ghém các nguyên liệu hài hòa, thưởng thức từng miếng cắn giòn rụm tươi mát hòa quyện.',
        },
      ],
      chefSecret:
        'Thấm khô hoàn toàn nước ở rau sống trước khi cuốn hoặc kẹp bánh mì để bánh luôn giữ được độ giòn rụm và bánh tráng không bị nhũn rách.',
      recommendedSauce: 'Nước chấm tương đậu phộng béo ngậy hoặc nước mắm chua ngọt tỏi ớt.',
    };
  }

  // Fallback for grilled, snack or general dish
  return {
    dishId: dish.id,
    dishName: dish.name,
    seoTitle: getRecipeArticleTitle(dish),
    prepTime: '20 phút',
    cookTime: '25 phút',
    difficulty: 'Dễ',
    servings: '2 - 4 người',
    ingredients: [
      {
        category: 'Nguyên liệu cốt lõi',
        items: [
          `Nguyên liệu tươi sạch đặc trưng: ${dish.vietnameseName}`,
          'Rau sống các loại: Xà lách xoăn, tía tô, kinh giới, dưa chuột tươi giòn',
          'Gia vị: Tỏi, ớt sừng, chanh tươi, nước mắm ngon, tiêu thơm',
        ],
      },
      {
        category: 'Gia vị tẩm ướp & Nấu',
        items: [
          'Hành tím băm nhỏ, dầu hào, đường, hạt nêm nguyên chất',
          'Dầu ăn sạch hoặc mỡ nước thơm',
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế nguyên liệu tươi sạch',
        time: '10 phút',
        heat: 'Nhiệt độ phòng mát',
        goal: 'Nguyên liệu sạch sẽ, ráo nước hoàn toàn để khi chế biến không bị bắn dầu hay ra nước',
        actionPoints: [
          `Rửa sạch thịt/hải sản và rau củ của món ${dish.vietnameseName} dưới vòi nước chảy.`,
          'Dùng khăn giấy thấm thật ráo nước bề mặt thịt cá.',
          'Thái miếng vừa ăn đều nhau để chín đồng đều khi nấu.',
        ],
        description:
          `Rửa sạch thịt/hải sản và rau củ. Thấm ráo nước hoàn toàn để khi chế biến ${dish.vietnameseName} không bị bắn dầu và giữ trọn dưỡng chất.`,
      },
      {
        step: 2,
        title: 'Tẩm ướp gia vị cân bằng chuẩn tỷ lệ',
        time: '20 phút',
        heat: 'Nhiệt độ phòng mát',
        goal: 'Gia vị ngấm sâu vào từng thớ thịt, dậy mùi thơm mắm tiêu hành tỏi',
        actionPoints: [
          'Trộn đều nguyên liệu với 1 thìa nước mắm ngon, 1/2 thìa tiêu sọ, chút dầu hào và tỏi băm.',
          'Để nghỉ trong 20 phút cho gia vị hòa quyện sâu vào nguyên liệu.',
        ],
        description:
          'Trộn đều nguyên liệu với nước mắm, tiêu sọ, chút dầu hào và tỏi băm. Để nghỉ trong 20 phút cho thấm sâu.',
      },
      {
        step: 3,
        title: 'Chế biến đúng độ lửa chuẩn đầu bếp',
        time: '15 phút',
        heat: 'Lửa vừa đến lớn tùy công đoạn',
        goal: 'Bên ngoài chín vàng thơm nức, bên trong giữ trọn vị ngọt mọng nước tự nhiên',
        actionPoints: [
          'Căn chỉnh nhiệt độ chảo/bếp nướng chuẩn xác.',
          'Đảo đều hoặc lật mặt đúng thời điểm để mặt ngoài xém thơm vàng óng mà không bị khô cứng.',
        ],
        description:
          'Căn chỉnh nhiệt độ lửa chuẩn xác để bề ngoài vàng giòn hoặc thơm ngậy mà bên trong vẫn mọng nước, giữ nguyên độ ngọt tự nhiên.',
        tip: 'Không nấu quá lâu để tránh làm khô thịt hoặc mất đi độ giòn tươi của rau củ.',
      },
      {
        step: 4,
        title: 'Bày biện đẹp mắt & Thưởng thức nóng',
        time: '5 phút',
        heat: 'Thưởng thức khi còn nóng hổi',
        goal: 'Đĩa món ăn bắt mắt, trang trí hài hòa, chấm kèm sốt chuẩn vị thơm ngon khó cưỡng',
        actionPoints: [
          'Gắp món ăn ra đĩa lớn có lót rau xanh tươi mát.',
          'Trang trí ớt tỉa hoa hoặc rắc chút tiêu xay, hành lá lên bề mặt.',
          'Dọn kèm chén nước chấm chua ngọt hoặc muối tiêu chanh cay nồng.',
        ],
        description:
          'Gắp ra đĩa có lót rau xanh tươi mát, trang trí ớt tỉa hoa và dọn kèm chén nước chấm chua ngọt chuẩn bài.',
      },
    ],
    chefSecret:
      'Độ tươi ngon của nguyên liệu quyết định 80% thành công của món ăn. Hãy chọn nguyên liệu có nguồn gốc sạch sẽ và chế biến khi còn tươi mới.',
    recommendedSauce: 'Nước chấm pha tỏi ớt chua ngọt hoặc sốt chấm tương bơ đậu phộng béo bùi.',
  };
}

/**
 * Danh sách các món ăn hiển thị bài viết công thức trong trang "/cach-nau-mon-ngon".
 * Chỉ hiển thị 2 bài công thức chuẩn vị: Cơm Tấm Sườn Bì Chả & Cơm Gà Xối Mỡ.
 * Tất cả các món ăn khác trên các trang khác (Vòng quay, Thực đơn tuần, Món ngon, Ẩm thực vùng miền...) vẫn giữ nguyên đầy đủ.
 */
export const ACTIVE_RECIPE_DISH_IDS: string[] = [
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
  'com-tam-suon-bi-cha',
  'com-ga-xoi-mo',
  'com-rang-dua-bo',
];

export const CUSTOM_RECIPE_SLUGS: Record<string, string> = {
  'muc-mot-nang-nuong-sa-te': 'cach-lam-muc-mot-nang-nuong-sa-te',
  'heo-quay-banh-hoi': 'cach-lam-heo-quay-banh-hoi',
  'be-thui': 'cach-lam-be-thui',
  'banh-dap-mam-nem': 'cach-lam-banh-dap-mam-nem',
  'banh-beo': 'cach-lam-banh-beo',
  'nem-lui-nuong-cuon': 'cach-lam-nem-lui-nuong-cuon',
  'banh-mi-cha-ca-nong': 'cach-lam-banh-mi-cha-ca-nong',
  'de-tai-chanh-tuong-ban': 'cach-lam-de-tai-chanh',
  'banh-mi-chao-xiu-mai': 'cach-lam-banh-mi-chao',
  'banh-mi-thit-nuong': 'cach-lam-banh-mi-thit-nuong',
  'banh-mi-heo-quay-gion': 'cach-lam-banh-mi-heo-quay',
  'banh-mi-pate-thap-cam': 'cach-lam-banh-mi-pate-thap-cam',
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
  'cach-nau-bun-ca-ngu-nuoc-dung-thanh-ngot-chuan-vi-gia-dinh': 'bun-ca-ngu-phu-yen',
  'cach-lam-bun-ca-ngu-nuoc-dung-thanh-ngot-chuan-vi-gia-dinh': 'bun-ca-ngu-phu-yen',
  'mi-xao-bo-rau-cai': 'mi-xao-bo-rau-cai',
  'mi-xao-bo': 'mi-xao-bo-rau-cai',
  'cach-lam-mi-xao-bo': 'mi-xao-bo-rau-cai',
  'cach-nau-mi-xao-bo': 'mi-xao-bo-rau-cai',
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
  'cach-nau-nem-lui-nuong-cuon': 'nem-lui-nuong-cuon',
  'cach-lam-nem-lui-nuong-cuon': 'nem-lui-nuong-cuon',
  'nem-lui-hue': 'nem-lui-nuong-cuon',
  'cach-nau-nem-lui-hue': 'nem-lui-nuong-cuon',
  'cach-lam-nem-lui-hue': 'nem-lui-nuong-cuon',

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


