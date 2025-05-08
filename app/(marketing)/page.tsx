import * as React from 'react';

import { BlogPosts } from '@/components/marketing/sections/blog-posts'; // ✅ Import BlogPosts
import { CTA } from '@/components/marketing/sections/cta';
import { FAQ } from '@/components/marketing/sections/faq';
import { Hero } from '@/components/marketing/sections/hero';
import { Solution } from '@/components/marketing/sections/solution';
import { Testimonials } from '@/components/marketing/sections/testimonials';

export default function IndexPage(): React.JSX.Element {
  return (
    <>
      <Hero />
      <Solution />
      <Testimonials />
      <FAQ />
      <BlogPosts /> {/* ✅ Add BlogPosts section here */}
      <CTA />
    </>
  );
}
