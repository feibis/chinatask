import * as React from 'react';
import {
  CalendarIcon,
  LineChartIcon,
  MapPinIcon,
  TagsIcon,
  User2Icon
} from 'lucide-react';

import { AiAdvisorCard } from '@/components/marketing/cards/ai-advisor-card';
import { GridSection } from '@/components/marketing/fragments/grid-section';
import { Badge } from '@/components/ui/badge';

export function Solution(): React.JSX.Element {
  return (
    <GridSection>
      <div>
        <div className="flex flex-col gap-24 bg-background">
          <div className="container relative space-y-10">
            <div className="grid gap-10 sm:container lg:grid-cols-2">
              {/* Text Section */}
              <div className="order-1 lg:order-2">
                <h2 className="mb-2.5 mt-8 text-3xl font-semibold md:text-5xl">
                  Project spotlight
                </h2>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <User2Icon className="size-4 text-muted-foreground" />
                    <span className="w-20 text-sm text-muted-foreground">
                      CEO
                    </span>
                    <span className="text-sm">Guillermo Rauch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="size-4 text-muted-foreground" />
                    <span className="w-20 text-sm text-muted-foreground">
                      Founded
                    </span>
                    <span className="text-sm">2015</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LineChartIcon className="size-4 text-muted-foreground" />
                    <span className="w-20 text-sm text-muted-foreground">
                      Est. ARR
                    </span>
                    <span className="text-sm">$100-120M</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="size-4 text-muted-foreground" />
                    <span className="w-20 text-sm text-muted-foreground">
                      Location
                    </span>
                    <span className="text-sm">California, USA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TagsIcon className="size-4 text-muted-foreground" />
                    <span className="w-20 text-sm text-muted-foreground">
                      Tags
                    </span>
                    <div className="flex gap-1">
                      <Badge
                        variant="secondary"
                        className="whitespace-nowrap pl-2 text-xs"
                      >
                        SaaS
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="whitespace-nowrap pl-2 text-xs"
                      >
                        B2B
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image/Card Section */}
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
