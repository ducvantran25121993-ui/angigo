import { Dish, DishRecipe } from '../types';
import { getRecipeArticleTitle } from './recipeSlugs';
import { CURATED_RECIPE_META, RecipeCardMeta, resolveCuratedRecipeKey } from './recipeMeta';

const recipeCache = new Map<string, DishRecipe>();
const inFlightFetches = new Map<string, Promise<DishRecipe>>();

/**
 * Lightweight synchronous metadata lookup for recipe cards & initial headers
 * without bundling the 1.2 MB CURATED_RECIPES payload.
 */
export function getDishRecipeMeta(dish: Dish): RecipeCardMeta {
  const key = resolveCuratedRecipeKey(dish.id);
  if (key && CURATED_RECIPE_META[key]) {
    return CURATED_RECIPE_META[key];
  }

  const lowerName = dish.name.toLowerCase();
  const isRollOrBanhMi =
    dish.category === 'banhmi_cuon' ||
    lowerName.includes('bánh mì') ||
    lowerName.includes('cuốn') ||
    lowerName.includes('gỏi cuốn') ||
    lowerName.includes('bò bía') ||
    (lowerName.includes('nem') && !lowerName.includes('nem chua rán'));

  const isHotpot =
    !isRollOrBanhMi &&
    (lowerName.includes('lẩu') || (dish.category === 'lau_chao' && dish.id.startsWith('lau')));

  const isSoupOrNoodle =
    !isRollOrBanhMi &&
    !isHotpot &&
    (dish.category === 'bun_pho_mi' ||
      dish.category === 'bun_pho' ||
      dish.category === 'lau_chao' ||
      lowerName.includes('bún') ||
      (lowerName.includes('phở') && !lowerName.includes('cuốn')) ||
      lowerName.includes('hủ tiếu') ||
      (lowerName.includes('mì') && !lowerName.includes('bánh mì')) ||
      lowerName.includes('canh'));

  const isRiceOrStickyRice =
    dish.category === 'com_xoi' ||
    dish.category === 'com' ||
    lowerName.includes('cơm') ||
    lowerName.includes('xôi');

  if (isHotpot) {
    return { cookTime: '45 - 60 phút', difficulty: 'Trung bình', seoTitle: getRecipeArticleTitle(dish) };
  }
  if (isSoupOrNoodle) {
    return { cookTime: '60 - 90 phút', difficulty: 'Trung bình', seoTitle: getRecipeArticleTitle(dish) };
  }
  if (isRiceOrStickyRice) {
    return { cookTime: '30 - 45 phút', difficulty: 'Dễ', seoTitle: getRecipeArticleTitle(dish) };
  }
  if (isRollOrBanhMi) {
    return { cookTime: '15 - 20 phút', difficulty: 'Dễ', seoTitle: getRecipeArticleTitle(dish) };
  }
  return { cookTime: '25 phút', difficulty: 'Dễ', seoTitle: getRecipeArticleTitle(dish) };
}

/**
 * Return already-cached curated recipe synchronously if available.
 */
export function getCachedDishRecipe(dish: Dish): DishRecipe | null {
  const key = resolveCuratedRecipeKey(dish.id);
  if (key && recipeCache.has(key)) {
    return recipeCache.get(key)!;
  }
  if (!key) {
    return generateFallbackRecipe(dish);
  }
  return null;
}

/**
 * Fetch a single curated recipe JSON (~4-10 KB) on demand, cached in memory & HTTP cache.
 * Non-curated dishes resolve synchronously from the lightweight template generator.
 */
export async function fetchDishRecipe(dish: Dish): Promise<DishRecipe> {
  const key = resolveCuratedRecipeKey(dish.id);
  if (!key) {
    return generateFallbackRecipe(dish);
  }

  const cached = recipeCache.get(key);
  if (cached) {
    return cached;
  }

  const existingPromise = inFlightFetches.get(key);
  if (existingPromise) {
    return existingPromise;
  }

  const fetchPromise = (async (): Promise<DishRecipe> => {
    try {
      const res = await fetch(`/recipes/${encodeURIComponent(key)}.json`);
      if (res.ok) {
        const contentType = res.headers.get('content-type') || '';
        if (contentType.includes('application/json')) {
          const data = (await res.json()) as DishRecipe;
          const normalized: DishRecipe = {
            ...data,
            steps: data.steps || (data as any).instructions || [],
          };
          recipeCache.set(key, normalized);
          return normalized;
        }
      }
    } catch {
      // Fall back to generated template offline
    } finally {
      inFlightFetches.delete(key);
    }
    return generateFallbackRecipe(dish);
  })();

  inFlightFetches.set(key, fetchPromise);
  return fetchPromise;
}

/**
 * Lightweight template generator for dishes without a dedicated JSON file
 * or while a single recipe JSON is in flight.
 */
export function generateFallbackRecipe(dish: Dish): DishRecipe {
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
