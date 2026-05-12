import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";
import { siteUrl } from "@/data/siteContent";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteUrl}/blog/${post.slug}`,
      type: "article",
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

function ArticleSection({ section }) {
  return (
    <section className="mt-10">
      <h2 className="text-3xl font-black leading-tight text-white">{section.heading}</h2>
      {section.body?.map((paragraph) => (
        <p key={paragraph} className="mt-5 text-base leading-8 text-white/72">
          {paragraph}
        </p>
      ))}
      {section.bullets ? (
        <ul className="mt-5 grid gap-3 text-base leading-7 text-white/72">
          {section.bullets.map((item) => (
            <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        image: `${siteUrl}${post.image}`,
        datePublished: post.updated,
        dateModified: post.updated,
        author: { "@type": "Organization", name: post.author },
        publisher: { "@type": "Organization", name: "Travel-Hub", url: siteUrl },
        mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <main className="bg-ink text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <article>
        <section className="relative min-h-[78vh] overflow-hidden bg-black">
          <Image src={post.image} alt={post.title} fill priority sizes="100vw" className="object-cover opacity-58" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-black/64 to-black/20" />
          <div className="relative mx-auto flex min-h-[78vh] max-w-5xl items-end px-5 pb-14 pt-28 md:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-light">{post.category}</p>
              <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">{post.title}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/72">{post.description}</p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-white/58">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.minutes}</span>
                <span>•</span>
                <span>Updated {post.updated}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 md:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_320px]">
            <div className="min-w-0">
              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 text-sm leading-7 text-white/72 md:p-7">
                <p className="font-black text-white">Quick answer</p>
                <p className="mt-2">{post.excerpt}</p>
              </div>

              {post.sections.map((section) => (
                <ArticleSection key={section.heading} section={section} />
              ))}

              <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.05] p-6">
                <h2 className="text-3xl font-black">FAQs</h2>
                <div className="mt-5 grid gap-3">
                  {post.faqs.map(([question, answer]) => (
                    <details key={question} className="rounded-2xl bg-black/35 p-5">
                      <summary className="cursor-pointer font-black">{question}</summary>
                      <p className="mt-3 text-sm leading-6 text-white/68">{answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-white/10 bg-black/56 p-6 backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-light">Plan this route</p>
                <h2 className="mt-3 text-2xl font-black">Want the trip version?</h2>
                <p className="mt-3 text-sm leading-6 text-white/62">
                  See fixed departures, inclusions, pickup points and WhatsApp booking support.
                </p>
                <Link href={post.relatedPackage} className="mt-5 inline-flex w-full justify-center rounded-full bg-brand px-5 py-4 text-sm font-black text-white">
                  View Related Trip
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </article>

      <section className="px-5 pb-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black">Read next</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-light">{item.category}</p>
                <h3 className="mt-3 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
