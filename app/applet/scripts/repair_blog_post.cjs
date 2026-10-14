const fs = require('fs');
const path = require('path');

function repair() {
  const filePath = path.join(process.cwd(), 'dist', 'custom_blog_posts.json');
  const posts = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const post = posts[0];

  // Extract H2 headings
  const h2List = [];
  const h2Matches = post.content.matchAll(/^##\s+(?:<span[^>]*>)?(.*?)(?:<\/span>)?$/gm);
  for (const m of h2Matches) {
    h2List.push(m[1].trim());
  }

  // Extract H3 headings
  const h3List = [];
  const h3Matches = post.content.matchAll(/^###\s+(?:<span[^>]*>)?(.*?)(?:<\/span>)?$/gm);
  for (const m of h3Matches) {
    h3List.push(m[1].trim());
  }

  console.log('Found H2 count:', h2List.length);
  console.log('Found H3 count:', h3List.length);

  // Replace empty <h2 ...></h2> in post.htmlContent with corresponding H2
  let h2Idx = 0;
  let rebuiltHtml = post.htmlContent.replace(/<h2 class="text-2xl font-bold text-stone-900 mt-8 mb-4 pb-2 border-b border-stone-200"><\/h2>/g, () => {
    const title = h2List[h2Idx++] || '';
    return `<h2 class="text-2xl sm:text-3xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-stone-200">${title}</h2>`;
  });

  // Replace empty <h3 ...></h3> with corresponding H3
  let h3Idx = 0;
  rebuiltHtml = rebuiltHtml.replace(/<h3 class="text-xl font-bold text-stone-900 mt-6 mb-3 text-stone-800"><\/h3>/g, () => {
    const title = h3List[h3Idx++] || '';
    return `<h3 class="text-xl sm:text-2xl font-bold text-stone-900 mt-8 mb-3 text-stone-800">${title}</h3>`;
  });

  // Fill in the 3 step titles in section 8
  const steps = [
    'Bước 1: Xác định nguyên nhân khiến bạn chán ăn',
    'Bước 2: Thay đổi một yếu tố thay vì toàn bộ',
    'Bước 3: Ghi nhớ những gì phù hợp'
  ];
  let stepIdx = 0;
  rebuiltHtml = rebuiltHtml.replace(/<strong><\/strong>/g, () => {
    const s = steps[stepIdx++];
    return s ? `<strong class="font-bold text-stone-900">${s}</strong>` : '<strong>Bước tiếp theo</strong>';
  });

  // Fill in the link to https://angigio.com/
  rebuiltHtml = rebuiltHtml.replace(
    /<a href="" class="text-orange-600 underline font-semibold hover:text-orange-700"><\/a>/g,
    '<a href="https://angigio.com/" class="text-orange-600 underline font-semibold hover:text-orange-700">Ăn Gì Hôm Nay?</a>'
  );

  // Replace empty bold tags if any
  rebuiltHtml = rebuiltHtml.replace(/Nếu đang tìm hiểu <strong><\/strong>/g, 'Nếu đang tìm hiểu <strong class="font-bold text-stone-900">ăn gì cho đỡ ngán</strong>');

  // Build clean Markdown as well
  // To create clean markdown from rebuiltHtml:
  // Convert <h2>...</h2> to ## ...
  // Convert <h3>...</h3> to ### ...
  // Convert <div style="text-align: justify;">...</div> to paragraphs
  let markdown = rebuiltHtml
    .replace(/<h2[^>]*>(.*?)<\/h2>/g, '\n\n## $1\n\n')
    .replace(/<h3[^>]*>(.*?)<\/h3>/g, '\n\n### $1\n\n')
    .replace(/<a\s+href="([^"]+)"[^>]*>(.*?)<\/a>/g, '[$2]($1)')
    .replace(/<strong[^>]*>(.*?)<\/strong>/g, '**$1**')
    .replace(/<div style="text-align:\s*justify;">([\s\S]*?)<\/div>/g, '\n\n<div style="text-align: justify;">$1</div>\n\n')
    .replace(/<span style="[^"]*">([\s\S]*?)<\/span>/g, '$1')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  post.htmlContent = rebuiltHtml;
  post.content = markdown;
  post.updatedAt = new Date().toISOString();

  fs.writeFileSync(path.join(process.cwd(), 'public', 'custom_blog_posts.json'), JSON.stringify(posts, null, 2), 'utf8');
  fs.writeFileSync(path.join(process.cwd(), 'dist', 'custom_blog_posts.json'), JSON.stringify(posts, null, 2), 'utf8');

  console.log('Success! HTML length:', rebuiltHtml.length);
  console.log('Markdown length:', markdown.length);
}

repair();
