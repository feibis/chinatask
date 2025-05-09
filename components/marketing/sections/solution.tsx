import * as React from 'react';
import { CircleCheckBigIcon } from 'lucide-react';

import { AiAdvisorCard } from '@/components/marketing/cards/ai-advisor-card';
import { GridSection } from '@/components/marketing/fragments/grid-section';

export function Solution(): React.JSX.Element {
  return (
    <GridSection>
      <div>
        <div className="flex flex-col gap-24 bg-background py-20 lg:mx-12 lg:border-x">
          <div className="container relative space-y-10">
            <div className="grid gap-10 sm:container lg:grid-cols-2">
              <div className="order-1 lg:order-2">
                <h2 className="mb-2.5 mt-8 text-3xl font-semibold md:text-5xl">
                  Project spotlight
                </h2>
                <p className="mt-1 text-muted-foreground md:mt-6">
                  By leveraging strategic supplier sourcing, on-site quality
                  comparisons, and logistics optimization, ChinaTasks reduced
                  UrbanNest Furniture’s lead times by 30%, lowered sourcing
                  costs by 15%, and boosted customer satisfaction by 20%.
                </p>
                <ul className="mt-6 list-none flex-wrap items-center gap-6 space-y-3 md:flex md:space-y-0">
                  {[
                    'Sourced reliable mid-quality suppliers in Foshan',
                    'Conducted on-site product quality comparisons',
                    'Optimized packing and shipping logistics',
                    'Achieved 15% cost reduction per unit',
                    'Reduced customer returns from 35% to 10%',
                    'Improved on-time delivery to 98%'
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex flex-row items-center gap-2"
                    >
                      <CircleCheckBigIcon className="size-4 shrink-0 text-primary" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-2 md:order-1">
                <AiAdvisorCard className="w-full max-w-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
