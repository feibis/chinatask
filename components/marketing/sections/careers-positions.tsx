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
      'Need a contract or sample picked up fast? We’ll retrieve documents from suppliers or offices anywhere in China, saving you time and travel.',
    type: '$75',
    location: 'China-Based'
  },
  {
    title: 'Supplier Phone Call',
    department: 'Errands',
    description:
      'We’ll make quick calls to confirm supplier details or resolve issues, bridging time zones so you don’t have to stay up late.',
    type: '$75',
    location: 'China-Based'
  },
  {
    title: 'Small Component Sourcing',
    department: 'Sourcing',
    description:
      'Looking for specific parts like screws or beads? We’ll find reliable suppliers in cities like Shenzhen or Dongguan, perfect for small orders.',
    type: '$200',
    location: 'China-Based'
  },
  {
    title: 'Sample Sourcing',
    department: 'Sourcing',
    description:
      'Need product samples to test quality? We’ll source and ship samples from trusted factories, ensuring you get the right specs.',
    type: '$200',
    location: 'China-Based'
  },
  {
    title: 'Dropshipping Coordination',
    department: 'Logistics',
    description:
      'We’ll set up or manage your dropshipping suppliers, ensuring stock availability and timely shipments for your online store.',
    type: '$200',
    location: 'China-Based'
  },
  {
    title: 'Supply Replenishment',
    department: 'Logistics',
    description:
      'Running low on inventory? We’ll coordinate with suppliers to restock your supplies quickly, keeping your operations smooth.',
    type: '$200',
    location: 'China-Based'
  },
  {
    title: 'City Sourcing Guidance',
    department: 'Consulting',
    description:
      'Unsure where to source? We’ll guide you to the best cities (e.g., Yiwu for small goods, Shenzhen for electronics) with local tips.',
    type: '$200',
    location: 'China-Based'
  },
  {
    title: 'Supplier Verification',
    department: 'Verification',
    description:
      'We’ll check a supplier’s credentials and legitimacy, reducing fraud risks and ensuring you partner with reliable factories.',
    type: '$200',
    location: 'China-Based'
  },
  {
    title: 'Freight Coordination',
    department: 'Logistics',
    description:
      'We’ll manage freight handlers to ensure your shipments, like container loading, are on time and error-free, saving you delays.',
    type: '$200',
    location: 'China-Based'
  },
  {
    title: 'Standard Factory Inspection',
    department: 'Inspections',
    description:
      'Comprehensive factory audit covering capacity, quality, compliance, and equipment, plus city guidance for sourcing.',
    type: '$300',
    location: 'China-Based'
  }
];

export function OneOffTaskPlans(): React.JSX.Element {
  return (
    <GridSection>
      <div className="space-y-12 py-20">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">
          One-Off Task Plans
        </h2>
        <div className="container mx-auto grid max-w-4xl grid-cols-1 gap-2 divide-y">
          {DATA.map((task, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-dashed py-6 md:flex-row md:items-center"
            >
              <div className="flex-1">
                <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center">
                  <h3 className="mb-1 text-lg font-semibold">{task.title}</h3>
                  <Badge
                    variant="outline"
                    className="w-fit rounded-full"
                  >
                    {task.department}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{task.description}</p>
                <div className="mt-4 flex gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-auto w-4" />
                    {task.type}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-auto w-4" />
                    {task.location}
                  </div>
                </div>
              </div>
              <div className="mt-4 shrink-0 md:mt-0">
                <Button
                  type="button"
                  variant="default"
                  className="rounded-xl"
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GridSection>
  );
}
