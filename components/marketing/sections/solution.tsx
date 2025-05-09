import * as React from 'react';
import {
  CalendarIcon,
  CircleCheckBigIcon,
  DollarSignIcon,
  GlobeIcon,
  LineChartIcon,
  MapPinIcon,
  TagsIcon,
  User2Icon
} from 'lucide-react';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

function SpotlightIcon(): React.JSX.Element {
  return (
    <svg
      height="20"
      width="20"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      aria-label="Spotlight Logo"
      className="text-black dark:text-white"
    >
      <circle
        cx="8"
        cy="8"
        r="7.25"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4.5L11.5 10.625H4.5L8 4.5Z"
        fill="white"
      />
    </svg>
  );
}

export function Solution(): React.JSX.Element {
  return (
    <GridSection>
      <div className="flex justify-center">
        <Card className="w-full max-w-3xl">
          <CardContent className="pt-6">
            <div className="mb-3 flex items-center gap-2">
              <SpotlightIcon />
              <h2 className="text-xl font-semibold">UrbanNest Furniture</h2>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <GlobeIcon className="size-4 text-muted-foreground" />
                <span className="w-24 text-sm text-muted-foreground">
                  Industry
                </span>
                <span className="text-sm">Furniture</span>
              </div>
              <div className="flex items-center gap-2">
                <User2Icon className="size-4 text-muted-foreground" />
                <span className="w-24 text-sm text-muted-foreground">
                  Client
                </span>
                <span className="text-sm">UrbanNest</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="size-4 text-muted-foreground" />
                <span className="w-24 text-sm text-muted-foreground">
                  Completed
                </span>
                <span className="text-sm">Q4 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <LineChartIcon className="size-4 text-muted-foreground" />
                <span className="w-24 text-sm text-muted-foreground">
                  Results
                </span>
                <span className="text-sm">
                  ↓30% lead time, ↓15% cost, ↑20% satisfaction
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="size-4 text-muted-foreground" />
                <span className="w-24 text-sm text-muted-foreground">
                  Location
                </span>
                <span className="text-sm">Foshan, China</span>
              </div>
              <div className="flex items-center gap-2">
                <TagsIcon className="size-4 text-muted-foreground" />
                <span className="w-24 text-sm text-muted-foreground">
                  Services
                </span>
                <div className="flex gap-1">
                  <Badge
                    variant="secondary"
                    className="pl-2 text-xs"
                  >
                    Sourcing
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="pl-2 text-xs"
                  >
                    QC
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="pl-2 text-xs"
                  >
                    Logistics
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <DollarSignIcon className="size-4 text-muted-foreground" />
                <span className="w-24 text-sm text-muted-foreground">
                  Savings
                </span>
                <span className="text-sm">Estimated $42,000/year</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start space-y-4 rounded-b-xl bg-neutral-50 pt-6 dark:bg-neutral-900">
            <h3 className="text-base font-semibold sm:text-lg">What we did</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                'Sourced reliable mid-quality suppliers in Foshan',
                'Conducted on-site product quality comparisons',
                'Optimized packing and shipping logistics'
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2"
                >
                  <CircleCheckBigIcon className="size-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </CardFooter>
        </Card>
      </div>
    </GridSection>
  );
}
