import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  BookOpen,
  Search,
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Tag,
  PlusCircle,
  Check,
  Copy,
  ChefHat,
  ChevronRight,
  Utensils,
  ExternalLink,
  X,
  Eye,
  Edit3,
  Home,
  Database,
  AlertCircle,
} from 'lucide-react';
import {
  BlogPost,
  BLOG_CATEGORIES,
  INITIAL_BLOG_POSTS,
  getBlogPostBySlug,
  getCustomBlogPosts,
  getDeletedPostSlugs,
  syncDeletedPosts,
  fetchAndSyncCustomPosts,
  normalizeBlogPost,
} from '../data/blogPosts';
import { INITIAL_DISHES } from '../data/dishes';
import { findDishByRecipeSlug, getRecipePath } from '../data/recipes';
import { Dish } from '../types';
import { TabType } from '../utils/navigation';

interface BlogPageProps {
  onNavigate?: (tab: TabType) => void;
  onSelectDish?: (dish: Dish) => void;
}

const LOCAL_STORAGE_CUSTOM_POSTS = 'angigio_custom_blog_posts';

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, onSelectDish }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất Cả');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [customPosts, setCustomPosts] = useState<BlogPost[]>(() => {
    return getCustomBlogPosts().map(normalizeBlogPost);
  });
  const [deletedSlugs, setDeletedSlugs] = useState<Set<string>>(() => getDeletedPostSlugs());

  // Current active post when viewing detail
  const [activePost, setActivePost] = useState<BlogPost | null>(() => {
    if (typeof window === 'undefined') return null;
    try {
      const hash = window.location.hash;
      if (hash && hash.includes('post_data=')) {
        const match = hash.match(/post_data=([^&]+)/);
        if (match && match[1]) {
          const jsonStr = decodeURIComponent(match[1]);
          const postObj = JSON.parse(jsonStr);
          if (postObj && postObj.slug) {
            const normalized = normalizeBlogPost(postObj);
            const existingRaw = localStorage.getItem('angigio_custom_blog_posts');
            const list = existingRaw ? JSON.parse(existingRaw) : [];
            if (!list.some((p: any) => p.slug === normalized.slug)) {
              list.unshift(normalized);
              localStorage.setItem('angigio_custom_blog_posts', JSON.stringify(list));
              (window as any).__INITIAL_CUSTOM_POSTS__ = list;
            }
            return normalized;
          }
        }
      }
    } catch {}

    const pathname = window.location.pathname.replace(/\/$/, '') || '';
    if (pathname === '/blog' || pathname === '') return null;
    if (pathname.startsWith('/blog/')) {
      const slug = pathname.replace('/blog/', '');
      const found = getBlogPostBySlug(slug);
      return found ? normalizeBlogPost(found) : null;
    }
    const slug = pathname.replace(/^\//, '');
    const found = getBlogPostBySlug(slug);
    return found ? normalizeBlogPost(found) : null;
  });
  const [isSyncingPost, setIsSyncingPost] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const pathname = window.location.pathname.replace(/\/$/, '') || '';
    return pathname !== '/blog' && pathname !== '' && pathname !== '/';
  });

  // Modal create post state
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedShareLink, setCopiedShareLink] = useState(false);

  // Form state for creating new post
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<BlogPost['category']>('Mẹo Nhà Bếp');
  const [newExcerpt, setNewExcerpt] = useState('');
  const [newCoverImage, setNewCoverImage] = useState(
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&auto=format&fit=crop&q=80'
  );
  const [newAuthorName, setNewAuthorName] = useState('Bếp Trưởng Hôm Nay Ăn Gì');
  const [newAuthorRole, setNewAuthorRole] = useState('Chuyên gia ẩm thực');
  const [newTags, setNewTags] = useState('Món ngon, Mẹo nhà bếp, Nấu ăn ngon');
  const [newReadTime, setNewReadTime] = useState('5 phút đọc');
  const [newContent, setNewContent] = useState('');
  const [previewMode, setPreviewMode] = useState(false);

  // All posts combined: custom posts come FIRST so newly published posts from admin appear at the very top!
  const allPosts = useMemo(() => {
    const postMap = new Map<string, BlogPost>();
    // 1. Custom posts first (most recently added/edited by admin)
    (customPosts || []).forEach((p) => {
      if (p && (p.slug || p.id)) {
        const s = (p.slug || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
        const id = (p.id || '').toLowerCase().trim();
        if (!deletedSlugs.has(s) && !deletedSlugs.has(id)) {
          const normalized = normalizeBlogPost(p);
          postMap.set(normalized.slug, normalized);
        }
      }
    });
    // 2. Add initial blog posts if not overridden and NOT DELETED
    INITIAL_BLOG_POSTS.forEach((p) => {
      const s = (p.slug || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      const id = (p.id || '').toLowerCase().trim();
      if (!deletedSlugs.has(s) && !deletedSlugs.has(id)) {
        // Check if overridden by ANY custom post
        const isOverridden = (customPosts || []).some((cp) => {
          const cpSlug = (cp.slug || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
          const cpId = (cp.id || '').toLowerCase().trim();
          const cpOldSlug = ((cp as any).oldSlug || (cp as any).previousSlug || '').toLowerCase().trim();
          return cpSlug === s || cpId === id || cpId === s || cpOldSlug === s || cpOldSlug === id;
        });
        if (!isOverridden && !postMap.has(p.slug)) {
          postMap.set(p.slug, normalizeBlogPost(p));
        }
      }
    });
    return Array.from(postMap.values());
  }, [customPosts, deletedSlugs]);

  // Helper to reliably resolve post across all data sources
  const resolvePostFromPath = useCallback((rawPathname?: string): BlogPost | null => {
    if (typeof window === 'undefined') return null;
    const pathname = (rawPathname ?? window.location.pathname).replace(/\/$/, '') || '';
    if (pathname === '/blog' || pathname === '') return null;
    let clean = pathname.startsWith('/blog/') ? pathname.replace('/blog/', '') : pathname.replace(/^\//, '');
    try {
      clean = decodeURIComponent(clean);
    } catch {}
    clean = clean.toLowerCase().trim();
    if (!clean) return null;

    // 1. Try getBlogPostBySlug
    const bySlug = getBlogPostBySlug(clean);
    if (bySlug) return normalizeBlogPost(bySlug);

    // 2. Try in customPosts
    const inCustom = customPosts.find((p) => {
      const s = (p.slug || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      const id = (p.id || '').toLowerCase().trim();
      return s === clean || id === clean;
    });
    if (inCustom) return normalizeBlogPost(inCustom);

    // 3. Try in allPosts
    const inAll = allPosts.find((p) => {
      const s = (p.slug || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      const id = (p.id || '').toLowerCase().trim();
      return s === clean || id === clean;
    });
    if (inAll) return normalizeBlogPost(inAll);

    // 4. Try in localStorage directly for zero-delay response
    try {
      const raw = localStorage.getItem('angigio_custom_blog_posts');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          const inLocal = parsed.find((p: any) => {
            const s = (p.slug || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
            const id = (p.id || '').toLowerCase().trim();
            return s === clean || id === clean;
          });
          if (inLocal) return normalizeBlogPost(inLocal);
        }
      }
    } catch {}

    // 5. Try in window.__INITIAL_CUSTOM_POSTS__
    if (Array.isArray((window as any).__INITIAL_CUSTOM_POSTS__)) {
      const inInit = (window as any).__INITIAL_CUSTOM_POSTS__.find((p: any) => {
        const s = (p.slug || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
        const id = (p.id || '').toLowerCase().trim();
        return s === clean || id === clean;
      });
      if (inInit) return normalizeBlogPost(inInit);
    }

    return null;
  }, [customPosts, allPosts]);

  // Load latest posts and deleted posts from server API / Firestore on mount
  useEffect(() => {
    let isMounted = true;
    const fetchLatestPosts = async () => {
      await syncDeletedPosts();
      if (!isMounted) return;
      setDeletedSlugs(getDeletedPostSlugs());
      const synced = await fetchAndSyncCustomPosts();
      if (!isMounted) return;
      if (synced && synced.length > 0) {
        setCustomPosts(synced);
      }
      setDeletedSlugs(getDeletedPostSlugs());
      const resolved = resolvePostFromPath();
      if (resolved) {
        setActivePost(resolved);
      }
      setIsSyncingPost(false);
    };
    fetchLatestPosts();

    const handleCustomPostsUpdated = () => {
      setDeletedSlugs(getDeletedPostSlugs());
      const latest = getCustomBlogPosts().map(normalizeBlogPost);
      setCustomPosts(latest);
      const resolved = resolvePostFromPath();
      if (resolved) {
        setActivePost(resolved);
        setIsSyncingPost(false);
      }
    };
    window.addEventListener('custom-posts-updated', handleCustomPostsUpdated);
    return () => {
      isMounted = false;
      window.removeEventListener('custom-posts-updated', handleCustomPostsUpdated);
    };
  }, [resolvePostFromPath]);

  // Sync browser back/forward and URL change
  useEffect(() => {
    const handleUrlChange = () => {
      const pathname = window.location.pathname.replace(/\/$/, '') || '';
      if (pathname === '/blog' || pathname === '') {
        setActivePost(null);
        setIsSyncingPost(false);
      } else {
        const resolved = resolvePostFromPath(pathname);
        if (resolved) {
          setActivePost(resolved);
          setIsSyncingPost(false);
        } else {
          // Attempt rapid re-sync
          setIsSyncingPost(true);
          fetchAndSyncCustomPosts().then((posts) => {
            if (posts && posts.length > 0) setCustomPosts(posts);
            const secondResolved = resolvePostFromPath(pathname);
            if (secondResolved) {
              setActivePost(secondResolved);
            }
            setIsSyncingPost(false);
          });
        }
      }
    };
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('locationchange', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('locationchange', handleUrlChange);
    };
  }, [resolvePostFromPath]);

  // Auto-resolve active post if allPosts updates (e.g. after API fetch finishes)
  useEffect(() => {
    const pathname = window.location.pathname.replace(/\/$/, '') || '';
    if (pathname !== '/blog' && pathname !== '') {
      const resolved = resolvePostFromPath(pathname);
      if (
        resolved &&
        (!activePost ||
          activePost.id !== resolved.id ||
          activePost.slug !== resolved.slug ||
          activePost.title !== resolved.title ||
          activePost.content !== resolved.content ||
          activePost.coverImage !== resolved.coverImage ||
          activePost.excerpt !== resolved.excerpt ||
          activePost.publishDate !== resolved.publishDate ||
          activePost.updatedAt !== resolved.updatedAt)
      ) {
        setActivePost(resolved);
      }
    }
  }, [allPosts, resolvePostFromPath]);

  // Update document title, meta tags, and structured JSON-LD schema when activePost changes
  useEffect(() => {
    if (activePost) {
      document.title = `${activePost.title} | Blog Ẩm Thực Hôm Nay Ăn Gì`;
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', `https://angigio.com/${activePost.slug}`);
      }

      // Smoothly normalize address bar to canonical URL if opened via an alias
      if (typeof window !== 'undefined') {
        const currentPath = window.location.pathname.replace(/\/$/, '') || '';
        if (currentPath && currentPath !== `/${activePost.slug}` && !currentPath.startsWith('/blog/')) {
          window.history.replaceState({ tab: 'blog', slug: activePost.slug }, '', `/${activePost.slug}`);
        }
      }

      // Update description & OG tags
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', activePost.excerpt);

      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', `${activePost.title} | Blog Ẩm Thực Hôm Nay Ăn Gì`);
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', activePost.excerpt);
      let ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) ogImage.setAttribute('content', activePost.coverImage);

      // JSON-LD Schema for Article & Breadcrumbs
      const scriptId = 'blog-post-jsonld';
      let script = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BlogPosting',
            '@id': `https://angigio.com/${activePost.slug}#article`,
            isPartOf: {
              '@type': 'WebSite',
              '@id': 'https://angigio.com/#website',
              name: 'Hôm Nay Ăn Gì',
              url: 'https://angigio.com/',
            },
            headline: activePost.title,
            description: activePost.excerpt,
            image: [activePost.coverImage],
            datePublished: '2026-09-28T08:00:00+07:00',
            dateModified: '2026-09-29T00:00:00+07:00',
            author: {
              '@type': 'Person',
              name: activePost.author.name,
              jobTitle: activePost.author.role,
            },
            publisher: {
              '@type': 'Organization',
              name: 'Hôm Nay Ăn Gì',
              url: 'https://angigio.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://angigio.com/logo.png',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://angigio.com/${activePost.slug}`,
            },
          },
          {
            '@type': 'BreadcrumbList',
            '@id': `https://angigio.com/${activePost.slug}#breadcrumb`,
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Trang chủ',
                item: 'https://angigio.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog Ẩm Thực',
                item: 'https://angigio.com/blog',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: activePost.title,
                item: `https://angigio.com/${activePost.slug}`,
              },
            ],
          },
        ],
      });
    } else {
      document.title = 'Blog Ẩm Thực - Cẩm Nang Món Ngon & Bí Quyết Nấu Nướng | Hôm Nay Ăn Gì';
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', 'https://angigio.com/blog');
      }
      const existingScript = document.getElementById('blog-post-jsonld');
      if (existingScript) existingScript.remove();
    }
  }, [activePost]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchCategory =
        selectedCategory === 'Tất Cả' || post.category === selectedCategory;
      const matchSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.tags || []).some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [allPosts, selectedCategory, searchQuery]);

  // Open an article detail (Concise root URL without blog/)
  const handleOpenPost = (post: BlogPost) => {
    setActivePost(post);
    window.history.pushState({ tab: 'blog', slug: post.slug }, '', `/${post.slug}`);
    window.dispatchEvent(new Event('locationchange'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Back to blog list
  const handleBackToList = () => {
    setActivePost(null);
    window.history.pushState({ tab: 'blog' }, '', '/blog');
    window.dispatchEvent(new Event('locationchange'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Copy share link
  const handleCopyShareLink = () => {
    if (typeof window !== 'undefined' && activePost) {
      try {
        const payload = encodeURIComponent(JSON.stringify(activePost));
        const shareUrl = `${window.location.origin}/${activePost.slug}#post_data=${payload}`;
        navigator.clipboard.writeText(shareUrl);
        setCopiedShareLink(true);
        setTimeout(() => setCopiedShareLink(false), 2500);
      } catch {
        navigator.clipboard.writeText(window.location.href);
        setCopiedShareLink(true);
        setTimeout(() => setCopiedShareLink(false), 2500);
      }
    }
  };

  // Handle create new post submit
  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) {
      return;
    }

    const slug = newTitle
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[đĐ]/g, 'd')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');

    const createdPost: BlogPost = {
      id: slug || `post-${Date.now()}`,
      slug: slug || `post-${Date.now()}`,
      title: newTitle.trim(),
      excerpt:
        newExcerpt.trim() ||
        newContent.replace(/[#*`>]/g, '').slice(0, 160).trim() + '...',
      coverImage: newCoverImage.trim() || '/images/an-gi-cho-do-ngan.jpg',
      category: newCategory,
      tags: newTags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      author: {
        name: newAuthorName.trim() || 'Bếp Trưởng Hôm Nay Ăn Gì',
        role: newAuthorRole.trim() || 'Người yêu ẩm thực',
        avatar:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      },
      publishDate: new Date().toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
      readTime: newReadTime.trim() || '5 phút đọc',
      content: newContent.trim(),
    };

    // 1. Sync to server API
    try {
      await fetch('/api/admin/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(createdPost),
      });
    } catch (err) {
      console.warn('API post error:', err);
    }

    // 2. Persist locally
    const updated = [createdPost, ...customPosts.filter((p) => p.slug !== createdPost.slug)];
    setCustomPosts(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_CUSTOM_POSTS, JSON.stringify(updated));
    } catch {
      // LocalStorage quota fallback
    }

    window.dispatchEvent(new Event('custom-posts-updated'));

    setIsCreateModalOpen(false);
    // Reset form
    setNewTitle('');
    setNewExcerpt('');
    setNewContent('');
    setActivePost(createdPost);
    window.history.pushState({ tab: 'blog', slug: createdPost.slug }, '', `/${createdPost.slug}`);
    window.dispatchEvent(new Event('locationchange'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate code snippet to paste into blogPosts.ts
  const generatePostCodeSnippet = () => {
    const slug = newTitle
      ? newTitle
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[đĐ]/g, 'd')
          .replace(/[^a-z0-9\s-]/g, '')
          .trim()
          .replace(/\s+/g, '-')
      : 'tieu-de-bai-viet';

    return `  {
    id: '${slug}',
    slug: '${slug}',
    title: '${newTitle.replace(/'/g, "\\'") || 'Tiêu đề bài viết'}',
    excerpt: '${newExcerpt.replace(/'/g, "\\'") || 'Tóm tắt bài viết...'}',
    coverImage: '${newCoverImage}',
    category: '${newCategory}',
    tags: ${JSON.stringify(newTags.split(',').map((t) => t.trim()).filter(Boolean))},
    author: {
      name: '${newAuthorName}',
      role: '${newAuthorRole}',
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=200&auto=format&fit=crop&q=80',
    },
    publishDate: '${new Date().toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })}',
    readTime: '${newReadTime}',
    content: \`
${newContent}
\`,
  },`;
  };

  // Helper to render high-contrast, fully interactive clickable anchor link with SPA routing
  const renderClickableLink = (label: string, href: string, keyIdx: number) => {
    let isInternal = href.startsWith('/');
    let targetPath = href;

    if (!isInternal) {
      try {
        const urlObj = new URL(href, typeof window !== 'undefined' ? window.location.origin : 'https://angigio.com');
        if (urlObj.hostname === 'angigio.com' || (typeof window !== 'undefined' && urlObj.hostname === window.location.hostname)) {
          isInternal = true;
          targetPath = urlObj.pathname + urlObj.search + urlObj.hash;
        }
      } catch {
        if (href.startsWith('angigio.com/')) {
          isInternal = true;
          targetPath = '/' + href.replace(/^angigio\.com\/?/, '');
        }
      }
    }

    const handleClick = (e: React.MouseEvent) => {
      if (e.ctrlKey || e.metaKey || e.button === 1) return;
      if (isInternal) {
        e.preventDefault();

        // 1. Check if this link points to a dish recipe (e.g. /suon-nuong-bbq or /cach-nau-suon-nuong-bbq)
        const matchedDish = findDishByRecipeSlug(targetPath, INITIAL_DISHES);
        if (matchedDish) {
          const targetRecipePath = getRecipePath(matchedDish);
          window.history.pushState({ section: 'recipe', dishId: matchedDish.id }, '', targetRecipePath);
          window.dispatchEvent(new Event('locationchange'));
          if (onSelectDish) onSelectDish(matchedDish);
          if (onNavigate) onNavigate('discover');
          window.scrollTo({ top: 0, behavior: 'instant' });
          return;
        }

        // 2. Check if this link points to a blog post slug
        const cleanSlug = targetPath.replace(/^\//, '').replace(/^blog\//, '').split('?')[0].split('#')[0];
        const matchedPost = allPosts.find((p) => p.slug === cleanSlug || p.id === cleanSlug);
        if (matchedPost) {
          setActivePost(matchedPost);
          window.history.pushState({ tab: 'blog', slug: matchedPost.slug }, '', `/${matchedPost.slug}`);
          window.dispatchEvent(new Event('locationchange'));
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // 3. Homepage
        if (targetPath === '/' || targetPath === '') {
          if (onNavigate) onNavigate('tarot');
          window.history.pushState(null, '', '/');
          window.dispatchEvent(new Event('locationchange'));
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // 4. Any other internal path
        window.history.pushState(null, '', targetPath);
        window.dispatchEvent(new Event('locationchange'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    return (
      <a
        key={`inline-link-${keyIdx}`}
        href={href}
        onClick={handleClick}
        className="text-orange-600 hover:text-orange-700 underline font-bold decoration-orange-300 hover:decoration-orange-600 transition-colors cursor-pointer inline"
        {...(!isInternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {label}
      </a>
    );
  };

  // Helper to parse CSS style string into React.CSSProperties
  const parseInlineCss = (styleStr: string): React.CSSProperties => {
    const res: Record<string, string> = {};
    if (!styleStr) return res;
    styleStr.split(';').forEach((pair) => {
      const idx = pair.indexOf(':');
      if (idx > -1) {
        const prop = pair.slice(0, idx).trim().toLowerCase();
        const val = pair.slice(idx + 1).trim();
        if (prop && val) {
          const camel = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
          res[camel] = val;
        }
      }
    });
    return res as React.CSSProperties;
  };

  // Helper to parse inline markdown & HTML: images, bold, colors, underlines, highlights, and links
  const parseInlineContent = (text: string): React.ReactNode => {
    if (!text) return null;

    // Normalize non-breaking spaces
    let enriched = text.replace(/\u00a0/g, ' ');

    // Auto-enrich any "Xem thêm: <URL/Title>" without markdown link
    const xemThemMatch = enriched.match(/^(?:💡\s*)?(?:Xem thêm|xem thêm)[:\s]+(.+)$/i);
    if (xemThemMatch && !enriched.includes('](') && !enriched.includes('<a')) {
      const targetQuery = xemThemMatch[1].trim();
      for (const p of allPosts) {
        if (
          targetQuery.toLowerCase().includes(p.slug.toLowerCase()) ||
          targetQuery.toLowerCase().includes(p.title.toLowerCase().trim()) ||
          p.title.toLowerCase().includes(targetQuery.toLowerCase())
        ) {
          enriched = `Xem thêm: [${p.title}](https://angigio.com/${p.slug})`;
          break;
        }
      }
    }

    // Tokenizer regex: matches markdown images, links, html styled spans, u, mark, sub, sup, bold, italic, del, or raw URLs
    const TOKEN_REGEX = /(!\[[^\]]*\]\([^)]+\)|\[[^\]]+\]\([^)]+\)|<a\s+[^>]*>.*?<\/a>|<span\s+[^>]*>.*?<\/span>|<mark\s*[^>]*>.*?<\/mark>|<u>.*?<\/u>|<sub>.*?<\/sub>|<sup>.*?<\/sup>|~~[^~]+~~|\*\*[^*]+\*\*|\*[^*]+\*|https?:\/\/[^\s<)"']+|(?:\b)angigio\.com\/[^\s<)"']+)/gi;
    const parts = enriched.split(TOKEN_REGEX);

    return parts.map((part, index) => {
      if (!part) return null;

      // 1. Markdown image: ![alt](src)
      const imgMatch = part.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
      if (imgMatch) {
        const [, alt, src] = imgMatch;
        return (
          <figure
            key={`inline-img-${index}`}
            className="my-8 mx-auto w-full max-w-[420px] sm:max-w-[460px] rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs bg-stone-50 block text-center"
          >
            <div className="w-full aspect-square overflow-hidden bg-stone-100 flex items-center justify-center">
              <img
                src={src}
                alt={alt || 'Hình ảnh minh họa'}
                loading="lazy"
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            {alt && (
              <figcaption className="text-center text-xs sm:text-sm text-stone-600 py-2.5 px-4 bg-stone-100/80 italic font-medium border-t border-stone-200/60">
                {alt}
              </figcaption>
            )}
          </figure>
        );
      }

      // 2. Markdown link: [label](href)
      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        const [, rawLabel, rawHref] = linkMatch;
        return renderClickableLink(rawLabel.trim(), rawHref.trim(), index);
      }

      // 3. HTML anchor tag: <a ...href="url"...>label</a>
      const htmlLinkMatch = part.match(/^<a\s+(?:[^>]*?\s+)?href=["']([^"']*)["'][^>]*>(.*?)<\/a>$/i);
      if (htmlLinkMatch) {
        const [, rawHref, rawLabel] = htmlLinkMatch;
        return renderClickableLink(rawLabel.trim() || rawHref.trim(), rawHref.trim(), index);
      }

      // 4. HTML Styled span (<span style="...">...</span>)
      const spanMatch = part.match(/^<span\s+[^>]*style=["']([^"']*)["'][^>]*>(.*?)<\/span>$/i);
      if (spanMatch) {
        const [, styleStr, inner] = spanMatch;
        return (
          <span key={`span-${index}`} style={parseInlineCss(styleStr)}>
            {parseInlineContent(inner)}
          </span>
        );
      }

      // 5. HTML Underline (<u>...</u>)
      const uMatch = part.match(/^<u>(.*?)<\/u>$/i);
      if (uMatch) {
        return (
          <u key={`u-${index}`} className="underline underline-offset-2">
            {parseInlineContent(uMatch[1])}
          </u>
        );
      }

      // 6. HTML Mark (<mark style="...">...</mark>)
      const markMatch = part.match(/^<mark(?:\s+[^>]*style=["']([^"']*)["'])?[^>]*>(.*?)<\/mark>$/i);
      if (markMatch) {
        const [, styleStr, inner] = markMatch;
        return (
          <mark
            key={`mark-${index}`}
            className="bg-amber-200/80 px-1 py-0.5 rounded-xs text-stone-900"
            style={styleStr ? parseInlineCss(styleStr) : undefined}
          >
            {parseInlineContent(inner)}
          </mark>
        );
      }

      // 7. HTML sub / sup
      const subMatch = part.match(/^<sub>(.*?)<\/sub>$/i);
      if (subMatch) {
        return <sub key={`sub-${index}`}>{parseInlineContent(subMatch[1])}</sub>;
      }
      const supMatch = part.match(/^<sup>(.*?)<\/sup>$/i);
      if (supMatch) {
        return <sup key={`sup-${index}`}>{parseInlineContent(supMatch[1])}</sup>;
      }

      // 8. Strikethrough ~~text~~
      const delMatch = part.match(/^~~([^~]+)~~$/);
      if (delMatch) {
        return (
          <del key={`del-${index}`} className="line-through text-stone-400">
            {parseInlineContent(delMatch[1])}
          </del>
        );
      }

      // 9. Bare / Raw URL: https://... or angigio.com/...
      if (/^(?:https?:\/\/[^\s<)"']+|(?:\b)angigio\.com\/[^\s<)"']+)$/i.test(part.trim())) {
        const rawUrl = part.trim();
        const fullHref = rawUrl.startsWith('http') ? rawUrl : `https://${rawUrl}`;
        const slugPart = rawUrl.split('/').filter(Boolean).pop()?.toLowerCase();
        const matchedPost = allPosts.find((p) => p.slug.toLowerCase() === slugPart);
        const displayLabel = matchedPost ? matchedPost.title : rawUrl;
        return renderClickableLink(displayLabel, fullHref, index);
      }

      // 10. Bold: **text** (recursively parse inside so bold links work)
      const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
      if (boldMatch) {
        return (
          <strong key={`inline-bold-${index}`} className="font-extrabold text-stone-900">
            {parseInlineContent(boldMatch[1])}
          </strong>
        );
      }

      // 11. Italic: *text*
      const italicMatch = part.match(/^\*([^*]+)\*$/);
      if (italicMatch) {
        return (
          <em key={`inline-italic-${index}`} className="italic">
            {parseInlineContent(italicMatch[1])}
          </em>
        );
      }

      return <React.Fragment key={`inline-txt-${index}`}>{part}</React.Fragment>;
    });
  };

  // Render markdown-like text nicely (Headings, Tables, Blockquotes, Callout Tip Boxes, Lists, Links, Paragraphs)
  const renderFormattedContent = (content: string) => {
    // Normalize content
    const normalizedContent = (content || '').replace(/\u00a0/g, ' ');
    const lines = normalizedContent.split('\n');
    const elements: React.ReactNode[] = [];
    let currentKey = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      if (!trimmed) continue;
      if (trimmed === '</div>' || trimmed === '</span>' || trimmed === '</p>') continue;

      // 0. Callout Box :::tip ... :::
      if (trimmed.startsWith(':::tip') || trimmed.startsWith(':::callout')) {
        const tipLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].trim().startsWith(':::')) {
          if (lines[i].trim()) tipLines.push(lines[i].trim());
          i++;
        }
        let customHeader = 'Mẹo Nấu Ngon Từ Bếp Trưởng:';
        const displayLines: string[] = [];
        for (const tl of tipLines) {
          if (/^(\*\*|\*)?💡?\s*Mẹo/i.test(tl.trim()) && displayLines.length === 0) {
            customHeader = tl.replace(/[*_#]/g, '').trim();
          } else {
            displayLines.push(tl);
          }
        }
        elements.push(
          <div
            key={`tip-box-${currentKey++}`}
            className="my-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50/80 border-l-4 border-orange-500 text-stone-800 shadow-2xs space-y-2 border border-orange-100/60 not-prose"
          >
            <div className="flex items-center gap-2 font-black text-orange-950 text-base sm:text-lg">
              <span className="text-xl">💡</span>
              <span>{customHeader}</span>
            </div>
            <div className="space-y-1.5 text-stone-700 leading-relaxed text-sm sm:text-base">
              {(displayLines.length > 0 ? displayLines : tipLines).map((tl, tlIdx) => (
                <div key={tlIdx}>{parseInlineContent(tl)}</div>
              ))}
            </div>
          </div>
        );
        continue;
      }

      // 0.5 Raw HTML Callout Box (<div class="...blog-callout-box" or border-orange)
      if (line.includes('blog-callout-box') || (line.includes('<div') && (line.includes('border-orange') || line.includes('bg-orange')))) {
        const divLines: string[] = [line];
        if (!line.includes('</div>')) {
          i++;
          while (i < lines.length && !lines[i].includes('</div>')) {
            divLines.push(lines[i]);
            i++;
          }
          if (i < lines.length) divLines.push(lines[i]);
        }
        const innerText = divLines
          .join('\n')
          .replace(/<div[^>]*>/i, '')
          .replace(/<\/div>/i, '')
          .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '$1\n')
          .replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n')
          .trim();

        elements.push(
          <div
            key={`html-callout-${currentKey++}`}
            className="my-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50/80 border-l-4 border-orange-500 text-stone-800 shadow-2xs space-y-2 border border-orange-100/60 not-prose"
          >
            <div className="flex items-center gap-2 font-black text-orange-950 text-base sm:text-lg">
              <span className="text-xl">💡</span>
              <span>Mẹo Nấu Ngon Từ Bếp Trưởng:</span>
            </div>
            <div className="space-y-1.5 text-stone-700 leading-relaxed text-sm sm:text-base">
              {innerText.split('\n').filter(Boolean).map((tl, tlIdx) => (
                <div key={tlIdx}>{parseInlineContent(tl)}</div>
              ))}
            </div>
          </div>
        );
        continue;
      }

      // 0.7 Standalone Chef Tip Box in body (e.g. "**💡 Mẹo nấu ngon từ Bếp Trưởng:**" followed by tip/links)
      if (line.includes('💡 Mẹo nấu ngon từ Bếp Trưởng') || line.includes('💡 Mẹo Hay Từ Bếp Trưởng')) {
        const tipLines: string[] = [];
        i++;
        // Gather following lines until next heading or hr or blank line separator
        while (i < lines.length && !lines[i].startsWith('#') && lines[i].trim() !== '---') {
          if (lines[i].trim()) {
            tipLines.push(lines[i].trim());
          }
          i++;
        }
        i--; // Step back one line

        elements.push(
          <div
            key={`standalone-tip-${currentKey++}`}
            className="my-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50/80 border-l-4 border-orange-500 text-stone-800 shadow-2xs space-y-2.5 border border-orange-100/60 not-prose"
          >
            <div className="flex items-center gap-2 font-black text-orange-950 text-base sm:text-lg">
              <span className="text-xl">💡</span>
              <span>Mẹo Nấu Ngon Từ Bếp Trưởng:</span>
            </div>
            {tipLines.length > 0 && (
              <div className="space-y-1.5 text-stone-700 leading-relaxed text-sm sm:text-base">
                {tipLines.map((tl, tlIdx) => (
                  <div key={tlIdx}>{parseInlineContent(tl)}</div>
                ))}
              </div>
            )}
          </div>
        );
        continue;
      }

      // 1. Markdown Table Check (Supports standard markdown tables, tables without trailing pipe, and tables with/without separator)
      const isTableRowLine = (l: string) => {
        const trimmed = l.trim();
        return trimmed.startsWith('|') && (trimmed.endsWith('|') || trimmed.includes('|'));
      };

      if (isTableRowLine(line)) {
        const tableLines: string[] = [];
        while (i < lines.length && isTableRowLine(lines[i])) {
          tableLines.push(lines[i].trim());
          i++;
        }
        i--; // Step back one line since loop increments

        if (tableLines.length >= 1) {
          const parseRowCells = (rowText: string): string[] => {
            let trimmed = rowText.trim();
            if (trimmed.startsWith('|')) trimmed = trimmed.slice(1);
            if (trimmed.endsWith('|')) trimmed = trimmed.slice(0, -1);
            return trimmed.split('|').map((c) => c.trim());
          };

          const firstRowCells = parseRowCells(tableLines[0]);
          let isSeparatorRow = false;
          let bodyStartIdx = 1;

          if (tableLines.length > 1) {
            const row1 = tableLines[1].trim();
            if (/^\|?(\s*[-:]+\s*\|?)+$/.test(row1)) {
              isSeparatorRow = true;
              bodyStartIdx = 2;
            }
          }

          const effectiveHeaders = isSeparatorRow ? firstRowCells : [];
          const effectiveBody = isSeparatorRow ? tableLines.slice(bodyStartIdx).map(parseRowCells) : tableLines.map(parseRowCells);

          elements.push(
            <div
              key={`table-${currentKey++}`}
              className="overflow-x-auto my-6 rounded-2xl border border-stone-200/90 shadow-2xs bg-white not-prose"
            >
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                {effectiveHeaders.length > 0 && (
                  <thead className="bg-orange-50/90 border-b border-orange-200 text-orange-950 font-black">
                    <tr>
                      {effectiveHeaders.map((h, hIdx) => (
                        <th key={hIdx} className="px-4 py-3 font-black text-stone-900 border-r border-orange-100/60 last:border-r-0">
                          {parseInlineContent(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                )}
                <tbody className="divide-y divide-stone-100">
                  {effectiveBody.map((r, rIdx) => (
                    <tr
                      key={rIdx}
                      className={rIdx % 2 === 0 ? 'bg-white hover:bg-orange-50/20' : 'bg-stone-50/70 hover:bg-orange-50/30'}
                    >
                      {r.map((c, cIdx) => (
                        <td key={cIdx} className="px-4 py-3 text-stone-700 leading-relaxed font-medium border-r border-stone-100 last:border-r-0">
                          {parseInlineContent(c)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
          continue;
        }
      }

      // 1.2 Raw HTML Table Check (<table>...</table>)
      if (line.includes('<table')) {
        const rawTableLines: string[] = [line];
        if (!line.includes('</table>')) {
          i++;
          while (i < lines.length && !lines[i].includes('</table>')) {
            rawTableLines.push(lines[i]);
            i++;
          }
          if (i < lines.length) rawTableLines.push(lines[i]);
        }
        const fullTableHtml = rawTableLines.join('\n');
        const rowMatches = fullTableHtml.match(/<tr[^>]*>[\s\S]*?<\/tr>/gi) || [];
        if (rowMatches.length > 0) {
          const rowsData = rowMatches.map((rowHtml) => {
            const cells = (rowHtml.match(/<(th|td)[^>]*>([\s\S]*?)<\/(th|td)>/gi) || []).map((c) =>
              c.replace(/<\/?(th|td)[^>]*>/gi, '').trim()
            );
            const isHead = rowHtml.toLowerCase().includes('<th');
            return { cells, isHead };
          });

          const headRow = rowsData.find((r) => r.isHead) || (rowsData.length > 1 ? rowsData[0] : null);
          const bodyRows = headRow ? rowsData.filter((r) => r !== headRow) : rowsData;

          elements.push(
            <div
              key={`html-table-${currentKey++}`}
              className="overflow-x-auto my-6 rounded-2xl border border-stone-200/90 shadow-2xs bg-white not-prose"
            >
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                {headRow && (
                  <thead className="bg-orange-50/90 border-b border-orange-200 text-orange-950 font-black">
                    <tr>
                      {headRow.cells.map((h, hIdx) => (
                        <th key={hIdx} className="px-4 py-3 font-black text-stone-900 border-r border-orange-100/60 last:border-r-0">
                          {parseInlineContent(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                )}
                <tbody className="divide-y divide-stone-100">
                  {bodyRows.map((r, rIdx) => (
                    <tr
                      key={rIdx}
                      className={rIdx % 2 === 0 ? 'bg-white hover:bg-orange-50/20' : 'bg-stone-50/70 hover:bg-orange-50/30'}
                    >
                      {r.cells.map((c, cIdx) => (
                        <td key={cIdx} className="px-4 py-3 text-stone-700 leading-relaxed font-medium border-r border-stone-100 last:border-r-0">
                          {parseInlineContent(c)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
          continue;
        }
      }

      // 1.5 Horizontal Rule (--- or ***)
      if (line.trim() === '---' || line.trim() === '***') {
        elements.push(
          <hr key={`hr-${currentKey++}`} className="my-8 border-t border-stone-200" />
        );
        continue;
      }

      // 2. Headings
      if (line.startsWith('### ')) {
        const headingText = line.replace('### ', '');
        elements.push(
          <h3
            key={`h3-${currentKey++}`}
            className="text-xl sm:text-2xl font-black text-stone-900 mt-8 mb-4 flex items-center gap-2 border-b border-orange-100 pb-2.5"
          >
            <span className="w-2 h-6 bg-orange-500 rounded-full inline-block shrink-0" />
            <span>{parseInlineContent(headingText)}</span>
          </h3>
        );
      } else if (line.startsWith('## ')) {
        const headingText = line.replace('## ', '');
        elements.push(
          <h2
            key={`h2-${currentKey++}`}
            className="text-2xl sm:text-3xl font-black text-stone-900 mt-10 mb-4"
          >
            {parseInlineContent(headingText)}
          </h2>
        );
      } else if (line.startsWith('# ')) {
        const headingText = line.replace('# ', '');
        elements.push(
          <h2
            key={`h1-as-h2-${currentKey++}`}
            className="text-2xl sm:text-3xl font-black text-stone-900 mt-10 mb-4"
          >
            {parseInlineContent(headingText)}
          </h2>
        );
      } else if (line.startsWith('> ')) {
        // Collect consecutive blockquote lines together into a single card!
        const bqLines: string[] = [];
        while (i < lines.length && lines[i].startsWith('> ')) {
          bqLines.push(lines[i].replace(/^>\s?/, ''));
          i++;
        }
        i--; // Step back one line

        const isTipBlock = bqLines.some((l) => l.includes('💡') || /Mẹo\s(nấu|nhỏ|hay|bếp)/i.test(l));

        elements.push(
          <blockquote
            key={`quote-${currentKey++}`}
            style={{
              borderLeft: '4px solid #ea580c',
              borderTop: 'none',
              borderRight: 'none',
              borderBottom: 'none',
              backgroundColor: '#fff7ed',
              padding: '0.625rem 1.25rem',
              margin: '1.25rem 0',
              fontStyle: 'italic',
              color: '#44403c',
              borderRadius: '0 0.5rem 0.5rem 0',
            }}
            className={`my-5 leading-relaxed text-sm sm:text-base border-l-4 border-solid border-orange-600 bg-orange-50/80 text-stone-800 italic rounded-r-lg shadow-2xs space-y-1 ${
              isTipBlock
                ? 'bg-gradient-to-r from-amber-50 to-orange-50/80 border-orange-500 font-normal border-r border-t border-b border-orange-100/60'
                : ''
            }`}
          >
            {isTipBlock && (
              <div className="flex items-center gap-1.5 font-black text-orange-950 text-sm sm:text-base not-italic mb-1">
                <span>💡</span>
                <span>Mẹo Hay & Gợi Ý Thêm:</span>
              </div>
            )}
            {bqLines.map((bql, bqIdx) => (
              <p key={bqIdx} className={isTipBlock ? 'not-italic my-0.5 text-stone-700' : 'my-0.5'}>
                {parseInlineContent(bql)}
              </p>
            ))}
          </blockquote>
        );
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        const itemText = line.startsWith('- ') ? line.replace('- ', '') : line.replace('* ', '');
        elements.push(
          <li
            key={`li-${currentKey++}`}
            className="ml-5 list-disc text-stone-700 my-2 leading-relaxed text-sm sm:text-base"
          >
            {parseInlineContent(itemText)}
          </li>
        );
      } else if (/^!\[([^\]]*)\]\(([^)]+)\)$/.test(line.trim())) {
        const imgMatch = line.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
        if (imgMatch) {
          const [, alt, src] = imgMatch;
          elements.push(
            <figure
              key={`img-${currentKey++}`}
              className="my-8 mx-auto w-full max-w-[420px] sm:max-w-[460px] rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs bg-stone-50 text-center"
            >
              <div className="w-full aspect-square overflow-hidden bg-stone-100 flex items-center justify-center">
                <img
                  src={src}
                  alt={alt || 'Hình ảnh món ngon'}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              {alt && (
                <figcaption className="text-center text-xs sm:text-sm text-stone-600 py-2.5 px-4 bg-stone-100/80 font-medium italic border-t border-stone-200/60">
                  {alt}
                </figcaption>
              )}
            </figure>
          );
        }
      } else if (line.trim().match(/^<div\s+[^>]*style=["'][^"']*text-align:\s*(center|right|justify)/i)) {
        const alignMatch = line.match(/text-align:\s*(center|right|justify)/i);
        const alignDir = alignMatch ? alignMatch[1] : 'left';
        let innerHtml = line.replace(/^<div\s+[^>]*style=["'][^"']*text-align:\s*(center|right|justify)[^"']*["'][^>]*>/i, '');
        if (innerHtml.includes('</div>')) {
          innerHtml = innerHtml.replace(/<\/div>.*$/, '');
        } else {
          const innerLines: string[] = [innerHtml];
          while (i + 1 < lines.length && !lines[i + 1].includes('</div>')) {
            i++;
            innerLines.push(lines[i]);
          }
          if (i + 1 < lines.length && lines[i + 1].includes('</div>')) {
            i++;
            innerLines.push(lines[i].replace(/<\/div>.*$/, ''));
          }
          innerHtml = innerLines.join('\n');
        }
        elements.push(
          <div
            key={`aligned-${currentKey++}`}
            className="my-3 leading-relaxed text-sm sm:text-base text-stone-700"
            style={{ textAlign: alignDir as any }}
          >
            {parseInlineContent(innerHtml.trim())}
          </div>
        );
      } else if (line.trim().startsWith('<p') && line.trim().endsWith('</p>')) {
        const innerText = line.trim().replace(/^<p[^>]*>/i, '').replace(/<\/p>$/i, '');
        if (!innerText.trim() || innerText.trim() === '&nbsp;') {
          elements.push(<div key={`spacer-${currentKey++}`} className="h-3" />);
        } else {
          elements.push(
            <p
              key={`p-html-${currentKey++}`}
              className="text-stone-700 my-3 leading-relaxed text-sm sm:text-base"
            >
              {parseInlineContent(innerText)}
            </p>
          );
        }
      } else if (line.trim().length > 0) {
        elements.push(
          <p
            key={`p-${currentKey++}`}
            className="text-stone-700 my-3 leading-relaxed text-sm sm:text-base"
          >
            {parseInlineContent(line)}
          </p>
        );
      }
    }

    return elements;
  };

  // Find related dishes for active post
  const relatedDishes = useMemo(() => {
    if (!activePost) return [];
    if (activePost.relatedDishIds && activePost.relatedDishIds.length > 0) {
      const matched = INITIAL_DISHES.filter((d) => activePost.relatedDishIds?.includes(d.id));
      if (matched.length > 0) return matched;
    }
    const slug = activePost.slug.toLowerCase();
    if (slug.includes('thit-heo') || slug.includes('ba-chi') || slug.includes('suon')) {
      return INITIAL_DISHES.filter((d) => ['com-thit-kho-tau', 'suon-nuong-bbq', 'heo-quay-banh-hoi'].includes(d.id));
    }
    if (slug.includes('ga')) {
      return INITIAL_DISHES.filter((d) => ['pho-ga-ta-la-chanh', 'ga-nuong-com-lam'].includes(d.id));
    }
    if (slug.includes('bo')) {
      return INITIAL_DISHES.filter((d) => ['pho-cuon-thit-bo', 'com-rang-dua-bo'].includes(d.id));
    }
    return INITIAL_DISHES.filter((d) => ['com-thit-kho-tau', 'suon-nuong-bbq'].includes(d.id));
  }, [activePost]);

  // Featured post for hero section
  const featuredPost = useMemo(() => {
    return allPosts.find((p) => p.featured) || allPosts[0];
  }, [allPosts]);

  return (
    <div className="min-h-screen bg-stone-50/60 pb-16">
      {/* 1. ARTICLE DETAIL VIEW */}
      {activePost ? (
        <article className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 animate-fade-in">
          {/* Action Header: Back button & Share */}
          <div className="flex items-center justify-between gap-3 mb-6">
            <button
              onClick={handleBackToList}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-stone-600 hover:text-orange-600 bg-white hover:bg-orange-50 px-3.5 py-2 rounded-xl border border-stone-200 shadow-2xs transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Tất cả bài viết</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyShareLink}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-orange-600 bg-white px-3 py-2 rounded-xl border border-stone-200 shadow-2xs transition-all cursor-pointer"
                title="Sao chép liên kết bài viết"
              >
                {copiedShareLink ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-600">Đã chép link!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span>Chia sẻ</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Article Header Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-200/80 shadow-xs mb-8">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-black uppercase tracking-wider rounded-lg">
                {activePost.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-stone-500">
                <Calendar className="w-3.5 h-3.5" />
                {activePost.publishDate}
              </span>
              <span className="text-stone-300">•</span>
              <span className="inline-flex items-center gap-1 text-xs text-stone-500">
                <Clock className="w-3.5 h-3.5" />
                {activePost.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-black text-stone-900 leading-tight mb-4 tracking-tight">
              {activePost.title}
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-stone-600 leading-relaxed font-medium mb-6 max-w-5xl">
              {activePost.excerpt}
            </p>

            {/* Author info */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-stone-100">
              <img
                src={activePost.author?.avatar || 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=120&auto=format&fit=crop&q=80'}
                alt={activePost.author?.name || 'Bếp Trưởng Hôm Nay Ăn Gì'}
                className="w-11 h-11 rounded-full object-cover ring-2 ring-orange-500/20 shadow-2xs"
              />
              <div>
                <div className="font-extrabold text-stone-900 text-sm">
                  {activePost.author?.name || 'Bếp Trưởng Hôm Nay Ăn Gì'}
                </div>
                <div className="text-xs text-stone-500">{activePost.author?.role || 'Chuyên gia ẩm thực'}</div>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="rounded-3xl overflow-hidden shadow-md border border-stone-200 mb-8 max-h-[520px] aspect-16/9 sm:aspect-21/9 bg-stone-100">
            <img
              src={activePost.coverImage}
              alt={activePost.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Article Content */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-200/80 shadow-xs mb-8 prose prose-stone max-w-none">
            {(activePost.htmlContent || (activePost.content && /<[a-z][\s\S]*>/i.test(activePost.content) && !activePost.content.trim().startsWith('#'))) ? (
              <div
                className="blog-rich-content leading-relaxed text-stone-700 font-normal space-y-4"
                dangerouslySetInnerHTML={{
                  __html: (() => {
                    let raw = activePost.htmlContent || activePost.content || '';
                    // Convert markdown blockquotes in content if present
                    raw = raw.replace(/^>\s+(.*)$/gm, '<blockquote class="border-l-4 border-orange-500 bg-orange-50/80 px-4 py-3 my-4 italic text-stone-700 rounded-r-xl shadow-2xs">$1</blockquote>');
                    // Clean and style any HTML blockquotes that have browser execCommand inline styles (border: none, margin: 0 0 0 40px)
                    raw = raw.replace(/<blockquote(?:\s+style="[^"]*")?(?:\s+class="[^"]*")?[^>]*>/gi, '<blockquote class="border-l-4 border-orange-500 bg-orange-50/80 px-4 py-3 my-4 italic text-stone-700 rounded-r-xl shadow-2xs">');
                    // Format standard markdown if present
                    raw = raw
                      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-orange-600 underline font-semibold hover:text-orange-700">$1</a>')
                      .replace(/^##\s+(.*)$/gm, '<h2 class="text-2xl sm:text-3xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-stone-200">$1</h2>')
                      .replace(/^###\s+(.*)$/gm, '<h3 class="text-xl sm:text-2xl font-bold text-stone-900 mt-8 mb-3 text-stone-800">$1</h3>');
                    return raw;
                  })()
                }}
                onClick={(e) => {
                  const target = e.target as HTMLElement;
                  const link = target.closest('a');
                  if (link && link.href) {
                    try {
                      const url = new URL(link.href, window.location.origin);
                      if (url.origin === window.location.origin) {
                        e.preventDefault();
                        const path = url.pathname + url.search + url.hash;
                        window.history.pushState({}, '', path);
                        window.dispatchEvent(new Event('popstate'));
                        window.dispatchEvent(new Event('locationchange'));
                      }
                    } catch {}
                  }
                }}
              />
            ) : (
              <div className="blog-rich-content leading-relaxed text-stone-700 font-normal space-y-4">
                {renderFormattedContent(activePost.content)}
              </div>
            )}

            {/* Tags footer */}
            <div className="mt-10 pt-6 border-t border-stone-100">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
                <Tag className="w-3.5 h-3.5" />
                Thẻ chủ đề:
              </div>
              <div className="flex flex-wrap gap-2">
                {(activePost.tags || []).map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 bg-stone-100 text-stone-700 text-xs font-semibold rounded-lg hover:bg-orange-50 hover:text-orange-700 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Related Dishes / Recipes section */}
          {relatedDishes.length > 0 && (
            <div className="bg-gradient-to-br from-orange-50/80 via-white to-amber-50/50 rounded-3xl p-6 sm:p-8 border border-orange-200/60 shadow-xs mb-8">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-xl bg-orange-600 text-white flex items-center justify-center shadow-xs">
                  <ChefHat className="w-4 h-4" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-stone-900">
                  Món Ngon & Công Thức Đề Xuất Trong Bài Viết
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 mb-5">
                Bấm vào món để xem ngay công thức nấu chuẩn vị và thông tin dinh dưỡng chi tiết:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {relatedDishes.map((dish) => (
                  <div
                    key={dish.id}
                    onClick={() => onSelectDish && onSelectDish(dish)}
                    className="group bg-white rounded-2xl p-3 border border-orange-100 shadow-2xs hover:shadow-md hover:border-orange-300 transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative rounded-xl overflow-hidden aspect-4/3 mb-2.5 bg-stone-100">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold rounded-md">
                          {dish.calories}
                        </span>
                      </div>
                      <h4 className="font-extrabold text-orange-600 text-sm line-clamp-1 mb-1 group-hover:text-orange-700 transition-colors">
                        {dish.vietnameseName || dish.name}
                      </h4>
                      <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                        {dish.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-xs">
                      <span className="font-bold text-orange-600">{dish.priceRange}</span>
                      <span className="inline-flex items-center gap-0.5 font-bold text-orange-600 group-hover:text-orange-700">
                        Xem công thức <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Articles */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs mb-8">
            <h3 className="text-lg sm:text-xl font-black text-stone-900 mb-5 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-orange-600" />
              Bài Viết Cùng Chuyên Mục
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {allPosts
                .filter((p) => p.id !== activePost.id)
                .slice(0, 4)
                .map((post) => (
                  <div
                    key={post.id}
                    onClick={() => handleOpenPost(post)}
                    className="flex gap-3.5 p-3 rounded-2xl hover:bg-stone-50 border border-transparent hover:border-stone-200 transition-all cursor-pointer group"
                  >
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-20 h-20 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-black uppercase text-orange-700 bg-orange-50 px-2 py-0.5 rounded">
                        {post.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-orange-600 transition-colors line-clamp-2 mt-1 mb-1">
                        {post.title}
                      </h4>
                      <div className="text-[11px] text-stone-400 flex items-center gap-2">
                        <span>{post.publishDate}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </article>
      ) : typeof window !== 'undefined' && window.location.pathname.replace(/\/$/, '') !== '' && window.location.pathname.replace(/\/$/, '') !== '/blog' ? (
        /* 1.5 POST NOT FOUND OR LOADING VIEW */
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {isSyncingPost ? (
            <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-stone-200/80 shadow-sm space-y-4">
              <div className="w-12 h-12 mx-auto border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
              <h2 className="text-xl font-black text-stone-900">Đang tải bài viết...</h2>
              <p className="text-sm text-stone-500">Hệ thống đang đồng bộ dữ liệu bài viết mới nhất từ máy chủ.</p>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-6 sm:p-10 text-center border border-stone-200/80 shadow-sm space-y-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200">
                <AlertCircle className="w-8 h-8" />
              </div>
              <div className="space-y-2 max-w-lg mx-auto">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900">
                  Không tìm thấy bài viết này
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Đường dẫn bài viết có thể chưa được lưu, chưa được nhập từ file dữ liệu sao lưu hoặc đã đổi đường dẫn (slug).
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    window.history.pushState({}, '', '/blog');
                    window.dispatchEvent(new Event('popstate'));
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Về trang Blog tổng hợp</span>
                </button>

                {onNavigate && (
                  <button
                    type="button"
                    onClick={() => onNavigate('admin')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs sm:text-sm rounded-xl border border-stone-300 transition-colors cursor-pointer"
                  >
                    <Edit3 className="w-4 h-4 text-orange-600" />
                    <span>Vào Quản Trị / Nhập Data</span>
                  </button>
                )}
              </div>

              {/* Suggested popular articles */}
              <div className="pt-8 border-t border-stone-100 text-left">
                <h3 className="text-sm font-black text-stone-900 mb-4 flex items-center gap-2">
                  <ChefHat className="w-4 h-4 text-orange-600" />
                  <span>Bài viết gợi ý dành cho bạn:</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {allPosts.slice(0, 3).map((post) => (
                    <div
                      key={post.id}
                      onClick={() => handleOpenPost(post)}
                      className="p-3 bg-stone-50 hover:bg-orange-50/50 rounded-xl border border-stone-200/80 hover:border-orange-200 transition-colors cursor-pointer group flex flex-col justify-between"
                    >
                      <h4 className="text-xs font-bold text-stone-900 group-hover:text-orange-600 line-clamp-2 mb-2">
                        {post.title}
                      </h4>
                      <span className="text-[10px] text-stone-400 font-medium">
                        {post.publishDate}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* 2. BLOG LIST & DISCOVERY VIEW */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
          {/* Hero Banner Header */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white p-6 sm:p-12 mb-8 shadow-lg">
            <div className="relative z-10 max-w-3xl lg:max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
                <BookOpen className="w-3.5 h-3.5 text-amber-200" />
                <span>Cẩm Nang Ẩm Thực & Bếp Việt</span>
              </div>
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-[42px] font-black leading-tight mb-4 tracking-tight sm:whitespace-nowrap">
                Blog Ẩm Thực Hôm Nay Ăn Gì
              </h1>
              <p className="text-sm sm:text-base text-orange-50 leading-relaxed font-medium mb-6 max-w-2xl">
                Kho tàng mẹo vặt nhà bếp, kinh nghiệm đi chợ, cẩm nang nấu ăn chuẩn vị và những câu chuyện văn hóa mâm cơm ba miền Việt Nam.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsCreateModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-orange-700 hover:bg-amber-50 font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95"
                >
                  <PlusCircle className="w-4 h-4 text-orange-600" />
                  <span>Viết bài mới</span>
                </button>

                {onNavigate && (
                  <button
                    onClick={() => onNavigate('discover')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-xl border border-white/20 backdrop-blur-xs transition-all cursor-pointer"
                  >
                    <Utensils className="w-4 h-4" />
                    <span>Xem 211+ công thức món ngon</span>
                  </button>
                )}
              </div>
            </div>

            {/* Background decorative illustrations */}
            <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-15 pointer-events-none hidden md:block">
              <svg viewBox="0 0 200 200" className="w-full h-full text-white fill-current">
                <path d="M45,-75C58,-69,69,-58,76,-45C83,-32,86,-16,84,-1C82,14,75,28,67,41C59,54,50,66,38,73C26,80,13,82,-1,84C-15,86,-30,88,-43,82C-56,76,-67,62,-74,47C-81,32,-84,16,-82,1C-80,-14,-73,-28,-64,-40C-55,-52,-44,-62,-32,-68C-20,-74,-10,-76,3,-81C16,-86,32,-81,45,-75Z" transform="translate(100 100)" />
              </svg>
            </div>
          </div>

          {/* Search bar & Category filters */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/80 shadow-xs mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm bài viết, mẹo vặt, chủ đề..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              {Array.from(new Set(BLOG_CATEGORIES)).map((cat, idx) => (
                <button
                  key={`blog-cat-${cat}-${idx}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-orange-600 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post Card (Show when viewing "Tất Cả" and no search query) */}
          {selectedCategory === 'Tất Cả' && !searchQuery && featuredPost && (
            <a
              href={`/${featuredPost.slug}`}
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                  e.preventDefault();
                  handleOpenPost(featuredPost);
                }
              }}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 mb-10 cursor-pointer grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="lg:col-span-7 relative overflow-hidden aspect-16/10 lg:aspect-auto min-h-[260px] lg:min-h-[380px]">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-orange-600 text-white text-xs font-black uppercase tracking-wider rounded-lg shadow-sm">
                    Bài viết nổi bật
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-xs text-stone-500 mb-3 font-semibold">
                    <span className="text-orange-600 font-extrabold uppercase">
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredPost.publishDate}
                    </span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-stone-900 group-hover:text-orange-600 transition-colors leading-snug mb-3">
                    {featuredPost.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium line-clamp-3 mb-4">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {(featuredPost.tags || []).slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 bg-stone-100 text-stone-600 text-[11px] font-semibold rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={featuredPost.author?.avatar || 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=120&auto=format&fit=crop&q=80'}
                      alt={featuredPost.author?.name || 'Bếp Trưởng Hôm Nay Ăn Gì'}
                      className="w-9 h-9 rounded-full object-cover ring-2 ring-orange-100"
                    />
                    <div>
                      <div className="text-xs font-bold text-stone-900">
                        {featuredPost.author?.name || 'Bếp Trưởng Hôm Nay Ăn Gì'}
                      </div>
                      <div className="text-[11px] text-stone-400">
                        {featuredPost.author?.role || 'Chuyên gia ẩm thực'}
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 font-bold text-xs sm:text-sm text-orange-600 group-hover:translate-x-1 transition-transform">
                    Đọc tiếp <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </a>
          )}

          {/* Posts Grid */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-black text-stone-900">
              {searchQuery
                ? `Kết quả tìm kiếm cho "${searchQuery}" (${filteredPosts.length})`
                : selectedCategory === 'Tất Cả'
                ? 'Tất Cả Bài Viết'
                : `Chuyên mục: ${selectedCategory} (${filteredPosts.length})`}
            </h2>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('admin');
                  } else {
                    window.location.href = '/admin';
                  }
                }}
                className="text-xs font-bold text-stone-600 hover:text-stone-900 inline-flex items-center gap-1 cursor-pointer transition-colors px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-stone-200"
                title="Quản trị bài viết & Mục Lưu Data"
              >
                <Database className="w-3.5 h-3.5 text-emerald-600" />
                <span>Mục Lưu Data</span>
              </button>

              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="text-xs font-bold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1 hover:underline cursor-pointer"
              >
                <PlusCircle className="w-4 h-4" />
                Thêm bài viết mới
              </button>
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 shadow-xs">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mx-auto mb-4 text-orange-500">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-stone-900 mb-2">
                Chưa có bài viết nào
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mb-6 max-w-md mx-auto leading-relaxed">
                Tất cả bài viết mẫu đã được dọn sạch. Bạn hãy bấm vào nút bên dưới để viết những bài viết ẩm thực mới của riêng bạn nhé!
              </p>
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Bắt đầu viết bài mới</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <a
                  key={post.slug || post.id}
                  href={`/${post.slug}`}
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                      e.preventDefault();
                      handleOpenPost(post);
                    }
                  }}
                  className="group bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-2xs hover:shadow-lg hover:border-orange-200 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-black/60 backdrop-blur-xs text-white text-[11px] font-bold rounded-lg">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center gap-2 text-xs text-stone-400 mb-2 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.publishDate}
                        </span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-extrabold text-stone-900 group-hover:text-orange-600 transition-colors line-clamp-2 leading-snug mb-2">
                        {post.title}
                      </h3>

                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {(post.tags || []).slice(0, 2).map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-stone-100 text-stone-600 text-[10px] font-semibold rounded"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-5 sm:p-6 pt-0 border-t border-stone-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author?.avatar || 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=120&auto=format&fit=crop&q=80'}
                        alt={post.author?.name || 'Bếp Trưởng Hôm Nay Ăn Gì'}
                        className="w-7 h-7 rounded-full object-cover ring-1 ring-orange-100"
                      />
                      <span className="text-xs font-bold text-stone-800 truncate max-w-[120px]">
                        {post.author?.name || 'Bếp Trưởng Hôm Nay Ăn Gì'}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 group-hover:translate-x-0.5 transition-transform">
                      Đọc tiếp <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 3. MODAL CREATE NEW BLOG POST */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-stone-200 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-xs z-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-orange-600 text-white flex items-center justify-center shadow-xs">
                  <Edit3 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-black text-stone-900 text-lg">Viết Bài Blog Mới</h3>
                  <p className="text-xs text-stone-500">
                    Thêm bài viết mới vào trang blog và tạo mã nguồn lưu trữ
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPreviewMode(!previewMode)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition-colors flex items-center gap-1.5 cursor-pointer ${
                    previewMode
                      ? 'bg-orange-600 text-white border-orange-600'
                      : 'bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{previewMode ? 'Sửa' : 'Xem trước'}</span>
                </button>
                <button
                  onClick={() => setIsCreateModalOpen(false)}
                  className="p-1.5 text-stone-400 hover:text-stone-600 rounded-xl hover:bg-stone-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            {previewMode ? (
              <div className="p-6 sm:p-8 space-y-4">
                <div className="aspect-16/9 rounded-2xl overflow-hidden bg-stone-100">
                  <img
                    src={newCoverImage}
                    alt={newTitle || 'Ảnh bài viết'}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-orange-100 text-orange-800 text-xs font-bold rounded">
                    {newCategory}
                  </span>
                  <span className="text-xs text-stone-400">{newReadTime}</span>
                </div>
                <h2 className="text-2xl font-black text-stone-900">
                  {newTitle || 'Tiêu đề bài viết sẽ hiển thị ở đây'}
                </h2>
                <p className="text-stone-600 text-sm italic border-l-2 border-orange-400 pl-3">
                  {newExcerpt || 'Đoạn tóm tắt bài viết...'}
                </p>
                <div className="prose text-sm text-stone-700 pt-3 border-t border-stone-100">
                  {renderFormattedContent(newContent || 'Nội dung bài viết sẽ hiển thị ở đây...')}
                </div>
              </div>
            ) : (
              <form onSubmit={handleCreatePost} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Tiêu đề bài viết *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Ví dụ: Bí quyết nấu phở bò Hà Nội thơm nức..."
                    className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Chuyên mục
                    </label>
                    <select
                      value={newCategory}
                      onChange={(e) =>
                        setNewCategory(e.target.value as BlogPost['category'])
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 cursor-pointer"
                    >
                      <option value="Mẹo Nhà Bếp">Mẹo Nhà Bếp</option>
                      <option value="Bí Quyết Nấu Ăn">Bí Quyết Nấu Ăn</option>
                      <option value="Văn Hóa Ẩm Thực">Văn Hóa Ẩm Thực</option>
                      <option value="Dinh Dưỡng & Sức Khỏe">Dinh Dưỡng & Sức Khỏe</option>
                      <option value="Gợi Ý Thực Đơn">Gợi Ý Thực Đơn</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Thời gian đọc
                    </label>
                    <input
                      type="text"
                      value={newReadTime}
                      onChange={(e) => setNewReadTime(e.target.value)}
                      placeholder="5 phút đọc"
                      className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Link ảnh bìa (Cover Image URL)
                  </label>
                  <input
                    type="url"
                    value={newCoverImage}
                    onChange={(e) => setNewCoverImage(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Tóm tắt ngắn (Excerpt)
                  </label>
                  <textarea
                    rows={2}
                    value={newExcerpt}
                    onChange={(e) => setNewExcerpt(e.target.value)}
                    placeholder="Mô tả ngắn gọn trong 1 - 2 câu để hấp dẫn người đọc..."
                    className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Nội dung bài viết * (Hỗ trợ tiêu đề ###, gạch đầu dòng -, in đậm **)
                  </label>
                  <textarea
                    rows={8}
                    required
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder={`### 1. Bí quyết đầu tiên\nNội dung chi tiết...\n\n- Điểm lưu ý 1\n- Điểm lưu ý 2\n\n> Lời khuyên của đầu bếp...`}
                    className="w-full px-3.5 py-2.5 text-sm font-mono bg-stone-50 border border-stone-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Tác giả
                    </label>
                    <input
                      type="text"
                      value={newAuthorName}
                      onChange={(e) => setNewAuthorName(e.target.value)}
                      placeholder="Tên tác giả"
                      className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Thẻ tags (cách nhau bằng dấu phẩy)
                    </label>
                    <input
                      type="text"
                      value={newTags}
                      onChange={(e) => setNewTags(e.target.value)}
                      placeholder="Mẹo vặt, Nấu ăn, Phở bò"
                      className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* Code Generator & Actions */}
                <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(generatePostCodeSnippet());
                      setCopiedCode(true);
                      setTimeout(() => setCopiedCode(false), 2500);
                    }}
                    className="px-3.5 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                    title="Sao chép mã JSON để dán vào file src/data/blogPosts.ts"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700">Đã chép mã!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Sao chép mã vào blogPosts.ts</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsCreateModalOpen(false)}
                      className="px-4 py-2 text-xs font-bold text-stone-600 hover:text-stone-800 rounded-xl cursor-pointer"
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                    >
                      Đăng bài ngay
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
