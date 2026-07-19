import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE } from '../config/site';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf(),
  );

  return rss({
    title: `${SITE.name} — Blog & Insights`,
    description:
      'Practical writing on medical billing, revenue cycle operations, and Texas practice management.',
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.publishedDate,
      link: `/blog/${post.id}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
