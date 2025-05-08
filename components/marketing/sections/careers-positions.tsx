import * as React from 'react';
import { ClockIcon, MapPinIcon } from 'lucide-react';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const DATA = [
  {
    title: 'Document Pickup',
    department: 'Errands',
    description:
      'Need a contract or sample picked up? We’ll retrieve documents from suppliers or offices in China, saving you time and travel costs.',
    type: '$75',
    location: 'China-Based'
  },
  {
    title: 'Supplier Phone Call',
    department: 'Errands',
    description:
      'We’ll call suppliers to confirm details, resolve issues, or negotiate terms, handling time zone gaps so you don’t have to.',
    type: '$75',
    location: 'China-Based'
  },
  {
    title: 'Small Component Sourcing',
    department: 'Sourcing',
    description:
      'Looking for small parts like screws or fittings? We’ll find reliable suppliers in cities like Shenzhen or Dongguan for your needs.',
    type: '$200',
    location: 'China-Based'
  },
  {
    title: 'Sample Sourcing',
    department: 'Sourcing',
    description:
      'Test products before committing. We’ll source and ship samples from trusted factories, ensuring they match your specifications.',
    type: '$200',
    location: 'China-Based'
  },
  {
    title: 'Dropshipping Coordination',
    department: 'Logistics',
    description:
      'Keep your store running smoothly. We’ll manage dropshipping suppliers to ensure stock availability and fast shipments.',
    type: '$200',
    location: 'China-Based'
  },
  {
    title: 'Supply Replenishment',
    department: 'Logistics',
    description:
      'Running low on stock? We’ll coordinate with suppliers to replenish your inventory quickly, avoiding costly delays.',
    type: '$200',
    location: 'China-Based'
  },
  {
    title: 'City Sourcing Guidance',
    department: 'Consulting',
    description:
      'Unsure where to source? We’ll guide you to the right cities, like Yiwu for small goods or Shenzhen for electronics, with local tips.',
    type: '$200',
    location: 'China-Based'
  },
  {
    title: 'Supplier Verification',
    department: 'Verification',
    description:
      'Avoid scams with our supplier checks. We’ll verify credentials and reliability to ensure you work with trusted partners.',
    type: '$200',
    location: 'China-Based'
  },
  {
    title: 'Freight Coordination',
    department: 'Logistics',
    description:
      'We’ll manage freight handlers and check container loading to ensure your shipments arrive on time and error-free.',
    type: '$200',
    location: 'China-Based'
  },
  {
    title: 'Standard Factory Inspection',
    department: 'Inspections',
    description:
      'Get a thorough factory audit—capacity, quality, compliance, and equipment—plus sourcing city guidance for reliable production.',
    type: '$300',
    location: 'China-Based'
  }
];

export function CareersPositions(): React.JSX.Element {
  return (
    <GridSection>
      <div className="space-y-12 py-20">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">
          One off tasks
        </h2>
        <div className="container mx-auto grid max-w-4xl grid-cols-1 gap-2 divide-y">
          {DATA.map((position, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-dashed py-6 md:flex-row  md:items-center"
            >
              <div className="flex-1">
                <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center">
                  <h3 className="mb-1 text-lg font-semibold">
                    {position.title}
                  </h3>
                  <Badge
                    variant="outline"
                    className="w-fit rounded-full"
                  >
                    {position.department}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{position.description}</p>
                <div className="mt-4 flex gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-auto w-4" />
                    {position.type}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-auto w-4" />
                    {position.location}
                  </div>
                </div>
              </div>
              <div className="mt-4 shrink-0 md:mt-0">
                <Button
                  type="button"
                  variant="default"
                  className="rounded-xl"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GridSection>
  );
}
