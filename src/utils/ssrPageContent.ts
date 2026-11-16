function escapeHtml(unsafe: string): string {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export const AI_ADVISOR_FAQS: Array<{ question: string; answer: string }> = [
  {
    question: 'Trợ lý gợi ý món ăn dựa vào những thông tin gì?',
    answer:
      'Trợ lý sẽ lắng nghe thời điểm trong ngày (bữa sáng, trưa hay tối), mức tiền bạn muốn chi, cảm xúc hiện tại của bạn, thời tiết bên ngoài và cả những mong muốn riêng như thích ăn thanh đạm, ăn chay hay hạn chế đồ dầu mỡ.',
  },
  {
    question: 'Món ăn được gợi ý có dễ tìm mua trên các app giao hàng không?',
    answer:
      'Rất dễ tìm! Toàn bộ hơn 160 món ăn trong danh sách đều là những món ăn quen thuộc, phổ biến khắp mọi ngõ phố Việt Nam. Kèm theo mỗi món luôn có sẵn nút mở nhanh ShopeeFood, GrabFood hoặc BeFood để bạn đặt ngay.',
  },
  {
    question: 'Dùng trợ lý gợi ý món ăn có mất phí hay bắt buộc đăng ký không?',
    answer:
      'Hoàn toàn miễn phí và không cần đăng ký tài khoản! Bạn có thể thoải mái hỏi và nhận gợi ý món ăn bao nhiêu lần tùy thích mỗi ngày mà không bị làm phiền bởi quảng cáo.',
  },
  {
    question: 'Nếu mình bị dị ứng đồ ăn hay ăn chay thì trợ lý có giúp được không?',
    answer:
      "Chắc chắn có! Bạn chỉ cần gõ yêu cầu như 'mình không ăn được hải sản', 'hôm nay mình ăn chay' hay 'không ăn cay', trợ lý sẽ tự động chọn lọc những món an toàn và thơm ngon nhất cho bạn.",
  },
  {
    question: 'Trợ lý có biết mình ở thành phố nào để gợi ý đúng món địa phương không?',
    answer:
      'Có! Bạn có thể chọn nhanh tỉnh/thành phố trên thanh menu hoặc cho phép định vị. Trợ lý sẽ ưu tiên những món ăn mang nét đặc sắc và các quán ngon đúng điệu quanh nơi bạn sinh sống.',
  },
  {
    question: 'Nếu muốn tự nấu cơm tại nhà thì có xem được nguyên liệu không?',
    answer:
      'Có sẵn luôn! Mỗi món ăn đều có ghi rõ nguyên liệu chính, mức calo ước tính và mẹo nhỏ khi ăn giúp bạn dễ dàng ghé chợ mua đồ và vào bếp nấu bữa cơm ấm cúng cho gia đình.',
  },
];

export function buildAiAdvisorSchemaJsonLd(): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://angigio.com/ai-goi-y-mon-an#webpage',
        url: 'https://angigio.com/ai-goi-y-mon-an',
        name: 'Trợ Lý AI Gợi Ý Món Ăn - Chọn Món Ngon Theo Gu & Đặt Ship Gần Bạn | Ăn Gì Giờ',
        description:
          'Gợi ý món ăn thông minh và gần gũi: Chọn món ngon mỗi ngày theo tâm trạng, thời tiết, ngân sách và sở thích ăn uống. Tự động kết nối quán ngon gần bạn.',
        inLanguage: 'vi-VN',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://angigio.com/#website',
          name: 'Hôm Nay Ăn Gì',
          url: 'https://angigio.com/',
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Trợ Lý Gợi Ý Món Ăn - Hôm Nay Ăn Gì',
        operatingSystem: 'Web, iOS, Android',
        applicationCategory: 'FoodAndDrinkApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'VND',
        },
        description: 'Người bạn đồng hành giải đáp câu hỏi Hôm nay ăn gì mỗi ngày theo tâm trạng, thời tiết và ngân sách.',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://angigio.com/ai-goi-y-mon-an#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Trang Chủ',
            item: 'https://angigio.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Trợ Lý Gợi Ý Món Ăn',
            item: 'https://angigio.com/ai-goi-y-mon-an',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://angigio.com/ai-goi-y-mon-an#faq',
        mainEntity: AI_ADVISOR_FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export function buildAiAdvisorSsrHtml(): string {
  const faqHtml = AI_ADVISOR_FAQS.map(
    (faq, idx) =>
      `<article style="padding: 1rem 1.125rem; background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 0.75rem;">
        <h3 style="font-size: 1rem; font-weight: 700; color: #1c1917; margin: 0 0 0.4rem 0;">${idx + 1}. ${escapeHtml(faq.question)}</h3>
        <p style="font-size: 0.925rem; color: #57534e; margin: 0; line-height: 1.65;">${escapeHtml(faq.answer)}</p>
      </article>`
  ).join('\n');

  return `<main id="prerender-content" style="max-width: 58rem; margin: 2rem auto; padding: 0 1rem; font-family: 'Be Vietnam Pro', system-ui, sans-serif; color: #1c1917; line-height: 1.7;">
        <nav aria-label="Breadcrumb" style="font-size: 0.85rem; color: #78716c; margin-bottom: 1rem;">
          <a href="/" style="color: #ea580c; text-decoration: none;">Trang chủ</a> &rsaquo;
          <span>Trợ Lý AI Gợi Ý Món Ăn</span>
        </nav>

        <header style="margin-bottom: 2rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e7e5e4;">
          <h1 style="font-size: 1.9rem; font-weight: 800; line-height: 1.3; margin: 0 0 0.9rem 0; color: #0c0a09;">Trợ Lý AI Gợi Ý Món Ăn - Chọn Món Ngon Theo Gu &amp; Đặt Ship Gần Bạn</h1>
          <p style="color: #44403c; font-size: 1rem; line-height: 1.7; margin: 0 0 0.85rem 0;">
            Mỗi ngày cứ đến bữa trưa hay bữa tối, câu hỏi quen thuộc nhất mà ai trong chúng ta cũng từng băn khoăn là: <strong>&ldquo;Hôm nay ăn gì bây giờ?&rdquo;</strong>. Thay vì lướt app giao đồ ăn hàng chục phút mà vẫn chưa chốt được, Trợ Lý AI Gợi Ý Món Ăn của <strong>Hôm Nay Ăn Gì</strong> sẽ lắng nghe đúng tâm trạng, thời tiết, ngân sách và nguyên liệu bạn thích để đề xuất ngay những món Việt chuẩn vị nhất.
          </p>
          <p style="color: #57534e; font-size: 0.95rem; line-height: 1.65; margin: 0 0 1.25rem 0;">
            Hỗ trợ gợi ý nhanh từ kho hơn 160+ món ăn 3 miền Bắc – Trung – Nam, từ cơm nhà bình dân 35.000đ, bún phở nóng hổi ngày mưa, thực đơn Eat Clean ít calo đến lẩu nướng tụ tập bạn bè, kèm liên kết mở nhanh ShopeeFood, GrabFood, BeFood hoặc xem công thức tự nấu tại nhà.
          </p>
          <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem; list-style: none; padding: 0; margin: 0;">
            <li style="padding: 0.75rem 1rem; background: #fff7ed; border: 1px solid #fed7aa; border-radius: 0.75rem;"><strong>Chọn món trong vài giây:</strong> Chốt ngay bữa trưa, bữa tối không đắn đo.</li>
            <li style="padding: 0.75rem 1rem; background: #fff7ed; border: 1px solid #fed7aa; border-radius: 0.75rem;"><strong>160+ món thuần Việt:</strong> Cơm văn phòng, món nước, đặc sản 3 miền, đồ chay.</li>
            <li style="padding: 0.75rem 1rem; background: #fff7ed; border: 1px solid #fed7aa; border-radius: 0.75rem;"><strong>Vừa túi tiền 30k–300k:</strong> Linh hoạt theo ví sinh viên hoặc tiệc nhóm.</li>
            <li style="padding: 0.75rem 1rem; background: #fff7ed; border: 1px solid #fed7aa; border-radius: 0.75rem;"><strong>Tìm quán quanh bạn:</strong> Mở nhanh ShopeeFood, GrabFood, BeFood &amp; Google Maps.</li>
          </ul>
        </header>

        <section style="margin-bottom: 2rem;">
          <h2 style="font-size: 1.35rem; font-weight: 800; color: #0c0a09; margin: 0 0 0.75rem 0;">5 Tiêu Chí Giúp Trợ Lý AI Hiểu Đúng Khẩu Vị Của Bạn</h2>
          <ol style="padding-left: 1.25rem; margin: 0; color: #44403c; display: grid; gap: 0.65rem;">
            <li><strong>Tâm trạng &amp; năng lượng hôm nay:</strong> Mệt mỏi cần tô phở bò nóng hổi hồi sức, hay vui vẻ cuối tuần tụ tập cùng bún đậu, lẩu riêu cua bắp bò.</li>
            <li><strong>Tiết trời nắng nóng hay mưa se lạnh:</strong> Trưa hè oi ả ưu tiên canh chua thanh mát, gỏi cuốn; chiều mưa rả rích chọn món kho đậm đà hoặc lẩu ấm bụng.</li>
            <li><strong>Ngân sách chi tiêu thực tế:</strong> Gợi ý chính xác suất cơm bình dân 35.000đ – 55.000đ, combo văn phòng hoặc bữa tiệc gia đình 150.000đ – 300.000đ.</li>
            <li><strong>Chế độ ăn uống &amp; dị ứng riêng:</strong> Dễ dàng lọc món Eat Clean, ăn chay mùng một rằm, ít dầu mỡ, không cay hoặc tránh hải sản.</li>
            <li><strong>Địa điểm quán ngon gần khu vực:</strong> Ưu tiên món phổ biến dễ tìm tại Hà Nội, TP.HCM, Đà Nẵng, Hải Phòng, Cần Thơ để đặt giao nhanh còn nóng hổi.</li>
          </ol>
        </section>

        <section style="margin-bottom: 2rem;">
          <h2 style="font-size: 1.35rem; font-weight: 800; color: #0c0a09; margin: 0 0 0.75rem 0;">6 Kịch Bản &amp; Câu Hỏi Mẫu Bạn Có Thể Nhờ Trợ Lý Tư Vấn</h2>
          <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 0.75rem;">
            <li style="padding: 0.9rem 1rem; background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem;">
              <strong>Bữa trưa văn phòng ngày mưa (50k–60k):</strong> <em>&ldquo;Trưa nay trời mưa se lạnh, ví còn khoảng 50k–60k, ăn gì cho ấm bụng mà tỉnh táo làm việc chiều?&rdquo;</em> &rarr; Gợi ý Cơm niêu bò sốt tiêu đen hoặc Bún bò Huế.
            </li>
            <li style="padding: 0.9rem 1rem; background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem;">
              <strong>Bữa tối nhẹ bụng, ít dầu mỡ:</strong> <em>&ldquo;Tối nay muốn ăn thanh đạm, nhiều rau xanh, ít calo để dễ tiêu và ngủ ngon.&rdquo;</em> &rarr; Gợi ý Gỏi cuốn tôm thịt, Salad ức gà áp chảo hoặc Canh chua cá lóc.
            </li>
            <li style="padding: 0.9rem 1rem; background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem;">
              <strong>Tụ tập hội bạn 4 người cuối tuần:</strong> <em>&ldquo;Tối thứ 7 nhóm 4 người muốn ăn gì lai rai vui vẻ tầm 120k mỗi người.&rdquo;</em> &rarr; Gợi ý Lẩu riêu cua bắp bò, Lẩu gà lá é hoặc Nướng ngói.
            </li>
            <li style="padding: 0.9rem 1rem; background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem;">
              <strong>Mở tủ lạnh còn thịt heo chưa biết nấu gì:</strong> <em>&ldquo;Trong tủ đang có thịt băm và sườn non, gợi ý giúp mình món canh thanh ngọt dễ nấu.&rdquo;</em> &rarr; Xem ngay bộ <a href="/thit-heo-nau-canh-gi-ngon-goi-y-12-mon-canh-de-nau" style="color: #ea580c;">12 món canh thịt heo dễ nấu</a>.
            </li>
            <li style="padding: 0.9rem 1rem; background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem;">
              <strong>Chống ngán ngày nắng nóng:</strong> <em>&ldquo;Mấy hôm nay ngán đồ chiên kho quá, có món gì chua ngọt đổi vị dễ ăn không?&rdquo;</em> &rarr; Khám phá gợi ý <a href="/an-gi-cho-do-ngan-goi-y-mon-ngon-doi-vi-de-an-cho-ca-nha" style="color: #ea580c;">ăn gì cho đỡ ngán đổi vị cả nhà</a>.
            </li>
            <li style="padding: 0.9rem 1rem; background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem;">
              <strong>Ngày ăn chay / Eat Clean lành mạnh:</strong> <em>&ldquo;Hôm nay mình ăn chay, không ăn hành tỏi, gợi ý 3 món đủ đạm thực vật.&rdquo;</em> &rarr; Đậu hũ sốt cà chua nấm rơm, Bún chả giò chay, Canh chua nấm đậu hũ.
            </li>
          </ul>
        </section>

        <section style="margin-bottom: 2rem;">
          <h2 style="font-size: 1.35rem; font-weight: 800; color: #0c0a09; margin: 0 0 0.75rem 0;">Hướng Dẫn 3 Bước Dùng Trợ Lý AI Chọn Món Nhanh</h2>
          <ol style="padding-left: 1.25rem; margin: 0; color: #44403c; display: grid; gap: 0.5rem;">
            <li><strong>Bước 1 – Chia sẻ nhu cầu bữa ăn:</strong> Chọn nhanh thẻ gợi ý sẵn (bữa trưa, bữa tối, tiết kiệm, trời mưa, ăn nhẹ) hoặc nhập tự nhiên mong muốn của bạn.</li>
            <li><strong>Bước 2 – Nhận phân tích &amp; 3–5 món chuẩn gu:</strong> Hệ thống gợi ý ngay món phù hợp kèm mô tả hương vị, mức calo tham khảo và lý do hợp bối cảnh.</li>
            <li><strong>Bước 3 – Đặt ship hoặc xem công thức tự nấu:</strong> Nhấn mở quán gần bạn trên ShopeeFood, GrabFood, BeFood hoặc bấm xem công thức nấu tại nhà chi tiết từng bước.</li>
          </ol>
        </section>

        <section style="margin-bottom: 2rem;">
          <h2 style="font-size: 1.35rem; font-weight: 800; color: #0c0a09; margin: 0 0 0.85rem 0;">Câu Hỏi Thường Gặp Về Trợ Lý AI Gợi Ý Món Ăn (FAQ)</h2>
          <section style="display: grid; gap: 0.75rem;">
            ${faqHtml}
          </section>
        </section>

        <footer style="padding-top: 1.25rem; border-top: 1px solid #e7e5e4; font-size: 0.92rem; color: #57534e;">
          <p style="margin: 0 0 0.5rem 0;"><strong>Khám phá thêm trên Hôm Nay Ăn Gì:</strong></p>
          <nav aria-label="Liên kết nội bộ" style="display: flex; flex-wrap: wrap; gap: 0.75rem 1.25rem;">
            <a href="/" style="color: #ea580c;">Tarot Ẩm Thực 12 Cung Hoàng Đạo</a>
            <a href="/vong-quay" style="color: #ea580c;">Vòng Quay Ăn Gì Trong 3 Giây</a>
            <a href="/lich-an-theo-tuan" style="color: #ea580c;">Lịch Ăn Theo Tuần 7 Ngày</a>
            <a href="/mon-ngon" style="color: #ea580c;">Thực Đơn 160+ Món Ngon</a>
            <a href="/cach-nau-mon-ngon" style="color: #ea580c;">Công Thức Nấu Món Ngon</a>
            <a href="/quan-ngon" style="color: #ea580c;">Top Quán Ngon Gần Bạn</a>
            <a href="/blog" style="color: #ea580c;">Blog Ẩm Thực &amp; Mẹo Nhà Bếp</a>
          </nav>
        </footer>
      </main>`;
}

export interface BlogSsrCardItem {
  slug: string;
  title: string;
  excerpt?: string;
  category?: string;
  publishDate?: string;
  updatedAt?: string;
}

export function renderBlogSsrCardLi(post: BlogSsrCardItem): string {
  const cleanSlug = String(post.slug || '')
    .toLowerCase()
    .trim()
    .replace(/^\//, '')
    .replace(/\/$/, '');
  const title = String(post.title || cleanSlug).trim();
  const excerpt = String(post.excerpt || '').trim();
  const category = String(post.category || 'Cẩm Nang Ẩm Thực').trim();
  const publishDate = String(post.publishDate || '').trim();
  const metaText = [category, publishDate].filter(Boolean).join(' • ');

  return `<li data-blog-slug="${escapeHtml(cleanSlug)}" style="padding: 1rem 1.125rem; background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.85rem;">
            <article>
              ${metaText ? `<p style="font-size: 0.78rem; color: #78716c; margin: 0 0 0.3rem 0;">${escapeHtml(metaText)}</p>` : ''}
              <h3 style="font-size: 1.08rem; font-weight: 700; margin: 0 0 0.4rem 0; line-height: 1.4;">
                <a href="/${escapeHtml(cleanSlug)}" style="color: #0c0a09; text-decoration: none;">${escapeHtml(title)}</a>
              </h3>
              ${excerpt ? `<p style="font-size: 0.9rem; color: #57534e; margin: 0 0 0.5rem 0; line-height: 1.6;">${escapeHtml(excerpt)}</p>` : ''}
              <p style="font-size: 0.85rem; margin: 0;"><a href="/${escapeHtml(cleanSlug)}" style="color: #ea580c; font-weight: 600; text-decoration: none;">Đọc chi tiết &rarr;</a></p>
            </article>
          </li>`;
}

export function buildBlogIndexSchemaJsonLd(posts: BlogSsrCardItem[]): Record<string, any> {
  const activePosts = posts.filter((p) => p && p.slug).slice(0, 40);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://angigio.com/blog#webpage',
        url: 'https://angigio.com/blog',
        name: 'Blog Ẩm Thực - Cẩm Nang Món Ngon & Bí Quyết Nấu Nướng | Ăn Gì Giờ',
        description:
          'Chuyên trang chia sẻ kiến thức ẩm thực, cẩm nang nấu ăn, mẹo vặt nhà bếp, thực đơn gia đình và bí quyết chế biến món Việt chuẩn vị.',
        inLanguage: 'vi-VN',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://angigio.com/#website',
          name: 'Hôm Nay Ăn Gì',
          url: 'https://angigio.com/',
        },
      },
      {
        '@type': 'Blog',
        '@id': 'https://angigio.com/blog#blog',
        url: 'https://angigio.com/blog',
        name: 'Blog Ẩm Thực Hôm Nay Ăn Gì',
        description: 'Cẩm nang món ngon mỗi ngày, bí quyết nấu ăn và thực đơn gia đình Việt.',
        publisher: {
          '@id': 'https://angigio.com/#organization',
        },
      },
      {
        '@type': 'ItemList',
        '@id': 'https://angigio.com/blog#itemlist',
        numberOfItems: activePosts.length,
        itemListElement: activePosts.map((post, idx) => {
          const cleanSlug = String(post.slug).toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
          return {
            '@type': 'ListItem',
            position: idx + 1,
            name: post.title || cleanSlug,
            url: `https://angigio.com/${cleanSlug}`,
          };
        }),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://angigio.com/blog#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Trang Chủ',
            item: 'https://angigio.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog Ẩm Thực',
            item: 'https://angigio.com/blog',
          },
        ],
      },
    ],
  };
}

export function buildBlogIndexSsrHtml(posts: BlogSsrCardItem[]): string {
  const seen = new Set<string>();
  const uniquePosts: BlogSsrCardItem[] = [];
  for (const post of posts) {
    const cleanSlug = String(post.slug || '')
      .toLowerCase()
      .trim()
      .replace(/^\//, '')
      .replace(/\/$/, '');
    if (!cleanSlug || seen.has(cleanSlug)) continue;
    seen.add(cleanSlug);
    uniquePosts.push({ ...post, slug: cleanSlug });
  }

  const listItemsHtml = uniquePosts.map(renderBlogSsrCardLi).join('\n');

  return `<main id="prerender-content" style="max-width: 60rem; margin: 2rem auto; padding: 0 1rem; font-family: 'Be Vietnam Pro', system-ui, sans-serif; color: #1c1917; line-height: 1.7;">
        <nav aria-label="Breadcrumb" style="font-size: 0.85rem; color: #78716c; margin-bottom: 1rem;">
          <a href="/" style="color: #ea580c; text-decoration: none;">Trang chủ</a> &rsaquo;
          <span>Blog Ẩm Thực</span>
        </nav>

        <header style="margin-bottom: 1.75rem; padding-bottom: 1.25rem; border-bottom: 1px solid #e7e5e4;">
          <h1 style="font-size: 1.9rem; font-weight: 800; line-height: 1.3; margin: 0 0 0.75rem 0; color: #0c0a09;">Blog Ẩm Thực - Cẩm Nang Món Ngon &amp; Bí Quyết Nấu Nướng</h1>
          <p style="color: #57534e; font-size: 0.98rem; line-height: 1.65; margin: 0;">
            Chuyên trang chia sẻ kiến thức ẩm thực Việt Nam, gợi ý thực đơn cơm nhà hằng ngày, bí quyết sơ chế thực phẩm sạch ngon và hàng trăm công thức món ngon dễ làm cho gia đình.
          </p>
        </header>

        <section aria-label="Danh sách bài viết Blog Ẩm Thực">
          <h2 style="font-size: 1.3rem; font-weight: 800; margin: 0 0 1rem 0; color: #0c0a09;">Tất Cả Bài Viết &amp; Cẩm Nang Nấu Ăn (${uniquePosts.length} bài viết)</h2>
          <ul id="blog-ssr-list" style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem;">
            ${listItemsHtml}
          </ul>
        </section>

        <footer style="margin-top: 2rem; padding-top: 1.25rem; border-top: 1px solid #e7e5e4; font-size: 0.92rem; color: #57534e;">
          <nav aria-label="Khám phá công cụ" style="display: flex; flex-wrap: wrap; gap: 0.75rem 1.25rem;">
            <a href="/" style="color: #ea580c;">Trang chủ Hôm Nay Ăn Gì</a>
            <a href="/vong-quay" style="color: #ea580c;">Vòng Quay Ăn Gì</a>
            <a href="/ai-goi-y-mon-an" style="color: #ea580c;">Trợ Lý AI Gợi Ý Món Ăn</a>
            <a href="/lich-an-theo-tuan" style="color: #ea580c;">Lịch Ăn Theo Tuần</a>
            <a href="/cach-nau-mon-ngon" style="color: #ea580c;">Công Thức Món Ngon</a>
          </nav>
        </footer>
      </main>`;
}
