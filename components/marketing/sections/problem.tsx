import * as React from 'react';
import { BarChartIcon, UserPlusIcon, WorkflowIcon } from 'lucide-react';

import { BlurFade } from '@/components/marketing/fragments/blur-fade';
import { GridSection } from '@/components/marketing/fragments/grid-section';

const DATA = [
  {
    icon: <UserPlusIcon className="size-5 shrink-0" />,
    title: 'No Local Presence in China',
    description:
      'Managing China projects remotely is tough without local contacts. You struggle to verify suppliers or pick up documents, delaying timelines and risking costly errors.'
  },
  {
    icon: <BarChartIcon className="size-5 shrink-0" />,
    title: 'Logistics Delays and Uncertainty',
    description:
      'Uncertain shipment statuses, like unchecked container loading, disrupt your supply chain. Without on-ground checks, delays pile up, frustrating customers and hurting profits.'
  },
  {
    icon: <WorkflowIcon className="size-5 shrink-0" />,
    title: 'Coordinating Across Time Zones',
    description:
      'Making urgent supplier calls or arranging freight handlers across time zones is a headache. These small tasks stall your operations, eating time you can’t spare.'
  }
];

export function Problem(): React.JSX.Element {
  return (
    <GridSection>
      <div className="grid divide-y border-t border-dashed md:grid-cols-3 md:divide-x md:divide-y-0">
        {DATA.map((statement, index) => (
          <BlurFade
            key={index}
            inView
            delay={0.2 + index * 0.2}
            className="border-dashed px-8 py-12"
          >
            <div className="mb-7 flex size-12 items-center justify-center rounded-2xl border bg-background shadow">
              {statement.icon}
            </div>
            <h3 className="mb-3 text-lg font-semibold">{statement.title}</h3>
            <p className="text-muted-foreground">{statement.description}</p>
          </BlurFade>
        ))}
      </div>
    </GridSection>
  );
}
