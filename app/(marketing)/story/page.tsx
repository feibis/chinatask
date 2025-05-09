import * as React from 'react';
import type { Metadata } from 'next';

import { Solution } from '@/components/marketing/sections/solution';
import { StoryHero } from '@/components/marketing/sections/story-hero';
import { StoryTeam } from '@/components/marketing/sections/story-team';
import { StoryTimeline } from '@/components/marketing/sections/story-timeline';
import { StoryValues } from '@/components/marketing/sections/story-values';
import { StoryVision } from '@/components/marketing/sections/story-vision';
import { createTitle } from '@/lib/utils';

export const metadata: Metadata = {
  title: createTitle('Story')
};

export default function StoryPage(): React.JSX.Element {
  return (
    <>
      <StoryHero />
      <Solution />
      <StoryVision />
      <StoryTeam />
      <StoryTimeline />
      <StoryValues />
    </>
  );
}
