import * as React from 'react';
import Link from 'next/link';
import { CheckIcon, ChevronRight } from 'lucide-react';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import { SiteHeading } from '@/components/marketing/fragments/site-heading';
import { buttonVariants } from '@/components/ui/button';
import { Routes } from '@/constants/routes';
import { cn } from '@/lib/utils';

export function PricingPlans(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container space-y-20 py-20">
        <SiteHeading
          badge="Pricing"
          title="Flexible, Task-Based Pricing"
          description="No per-seat fees. Pay only for the tasks or inspections you need, from quick errands to deep factory audits, tailored for your China operations."
        />

        <div className="max-w-7xl">
          <div className="flex justify-center">
            <div className="grid w-full max-w-6xl gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <QuickTasksCard />
              <StandardInspectionCard />
              <RecurringInspectionPlanCard />
              <CustomRecurringPlanCard />
            </div>
          </div>
        </div>
      </div>
    </GridSection>
  );
}

function QuickTasksCard(): React.JSX.Element {
  return (
    <div className="flex h-full flex-col rounded-lg border p-8">
      <div className="relative z-10 grow">
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-medium">Quick Tasks</h2>
          <div className="mb-2 flex items-baseline">
            <span className="text-4xl font-bold">From $75</span>
            <span className="ml-2 text-muted-foreground">/task</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Perfect for one-off needs like sourcing samples, dropshipping
            coordination, or supplier calls.
          </p>
        </div>
        <ul className="mb-8 space-y-4">
          <li className="flex items-start">
            <CheckIcon className="mt-1 size-4 text-muted-foreground" />
            <div className="ml-3 text-sm">
              Simple Tasks – $75 (e.g., document pickup, supplier calls)
            </div>
          </li>
          <li className="flex items-start">
            <CheckIcon className="mt-1 size-4 text-muted-foreground" />
            <div className="ml-3 text-sm">
              Moderate Tasks – $200 (e.g., small component sourcing,
              dropshipping setup)
            </div>
          </li>
          <li className="flex items-start">
            <CheckIcon className="mt-1 size-4 text-muted-foreground" />
            <div className="ml-3 text-sm">
              Rush option (+50% for urgent tasks)
            </div>
          </li>
        </ul>
      </div>
      <Link
        href={Routes.Contact}
        className={cn(
          buttonVariants({ variant: 'outline' }),
          'group mt-auto h-11 w-full rounded-xl text-sm font-medium shadow-none transition-colors'
        )}
      >
        Request a Task
        <ChevronRight className="ml-1 size-4 group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}

function StandardInspectionCard(): React.JSX.Element {
  return (
    <div className="relative flex h-full flex-col rounded-lg border border-primary p-8">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium uppercase text-primary-foreground">
          Popular
        </span>
      </div>
      <div className="relative z-10 grow border-b">
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-medium">Standard Inspection</h2>
          <div className="mb-2 flex items-baseline">
            <span className="text-4xl font-bold">$300</span>
            <span className="ml-2 text-muted-foreground">/inspection</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Thorough factory checks, from capacity to compliance, plus guidance
            to the right city.
          </p>
        </div>
        <ul className="mb-8 space-y-4">
          <li className="flex items-start">
            <CheckIcon className="mt-1 size-4" />
            <div className="ml-3 text-sm">
              Facility, equipment, and quality audits
            </div>
          </li>
          <li className="flex items-start">
            <CheckIcon className="mt-1 size-4" />
            <div className="ml-3 text-sm">
              Production capacity and compliance checks
            </div>
          </li>
          <li className="flex items-start">
            <CheckIcon className="mt-1 size-4" />
            <div className="ml-3 text-sm">
              City guidance for sourcing (e.g., Shenzhen, Yiwu)
            </div>
          </li>
        </ul>
      </div>
      <Link
        href={Routes.Contact}
        className={cn(
          buttonVariants({ variant: 'default' }),
          'group mt-auto h-11 w-full rounded-xl text-sm font-medium transition-colors'
        )}
      >
        Book Inspection
        <ChevronRight className="ml-1 size-4 group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}

function RecurringInspectionPlanCard(): React.JSX.Element {
  return (
    <div className="relative flex h-full flex-col rounded-lg border p-8">
      <div className="relative z-10 grow">
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-medium">
            Recurring Inspection Plan
          </h2>
          <div className="mb-2 flex items-baseline">
            <span className="text-4xl font-bold">$1,200</span>
            <span className="ml-2 text-muted-foreground">/month</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Ongoing deep inspections with technical analysis, R&D insights, and
            supply chain support.
          </p>
        </div>
        <ul className="mb-8 space-y-4">
          <li className="flex items-start">
            <CheckIcon className="mt-1 size-4" />
            <div className="ml-3 text-sm">
              2 deep inspections (technical, R&D, quality)
            </div>
          </li>
          <li className="flex items-start">
            <CheckIcon className="mt-1 size-4" />
            <div className="ml-3 text-sm">
              Supply chain and environmental audits
            </div>
          </li>
          <li className="flex items-start">
            <CheckIcon className="mt-1 size-4" />
            <div className="ml-3 text-sm">Photos, videos, detailed reports</div>
          </li>
        </ul>
      </div>
      <Link
        href={Routes.Contact}
        className={cn(
          buttonVariants({ variant: 'default' }),
          'group mt-auto h-11 w-full rounded-xl text-sm font-medium transition-colors'
        )}
      >
        Subscribe Now
        <ChevronRight className="ml-1 size-4 group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}

function CustomRecurringPlanCard(): React.JSX.Element {
  return (
    <div className="flex h-full flex-col rounded-lg border p-8">
      <div className="relative z-10 grow">
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-medium">Custom Recurring Plan</h2>
          <div className="mb-2 flex items-baseline">
            <span className="text-4xl font-bold">Contact Us</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Tailored subscriptions for mixed tasks, inspections, or dropshipping
            support.
          </p>
        </div>
        <ul className="mb-8 space-y-4">
          <li className="flex items-start">
            <CheckIcon className="mt-1 size-4 text-muted-foreground" />
            <div className="ml-3 text-sm">
              Custom mix of tasks and inspections
            </div>
          </li>
          <li className="flex items-start">
            <CheckIcon className="mt-1 size-4 text-muted-foreground" />
            <div className="ml-3 text-sm">
              Priority support and flexible scheduling
            </div>
          </li>
          <li className="flex items-start">
            <CheckIcon className="mt-1 size-4 text-muted-foreground" />
            <div className="ml-3 text-sm">Community discounts available</div>
          </li>
        </ul>
      </div>
      <Link
        href={Routes.Contact}
        className={cn(
          buttonVariants({ variant: 'outline' }),
          'group mt-auto h-11 w-full rounded-xl text-sm font-medium shadow-none transition-colors'
        )}
      >
        Get a Quote
        <ChevronRight className="ml-1 size-4 group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}
