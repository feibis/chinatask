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
          title="Monthly Sourcing Subscriptions"
          description="Affordable, tailored support to source products, verify suppliers, and negotiate low MOQs in China, with premium services like trade show and office visits."
        />

        <div className="max-w-7xl">
          <div className="flex justify-center">
            <div className="grid w-full max-w-6xl gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <StarterPlanCard />
              <ProPlanCard />
              <EnterprisePlanCard />
            </div>
          </div>
        </div>
      </div>
    </GridSection>
  );
}

function StarterPlanCard(): React.JSX.Element {
  return (
    <div className="flex h-full flex-col rounded-lg border p-8">
      <div className="relative z-10 grow">
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-medium">Starter Plan</h2>
          <div className="mb-2 flex items-baseline">
            <span className="text-4xl font-bold">$49</span>
            <span className="ml-2 text-muted-foreground">/month</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Quick tasks (1-3 hours each) to verify suppliers or source products
            like plumbing fittings or women’s clothing.
          </p>
        </div>
        <ul className="mb-8 space-y-4">
          <li className="flex items-start">
            <CheckIcon className="mt-1 size-4 text-muted-foreground" />
            <div className="ml-3 text-sm">
              4 small tasks/month (e.g., verify supplier for sanitary fittings,
              document pickup)
            </div>
          </li>
          <li className="flex items-start">
            <CheckIcon className="mt-1 size-4 text-muted-foreground" />
            <div className="ml-3 text-sm">
              City guidance (e.g., Ningbo for plumbing, Guangzhou for denim)
            </div>
          </li>
          <li className="flex items-start">
            <CheckIcon className="mt-1 size-4 text-muted-foreground" />
            <div className="ml-3 text-sm">
              Basic low MOQ negotiation (e.g., for small clothing batches)
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
        Start Subscription
        <ChevronRight className="ml-1 size-4 group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}

function ProPlanCard(): React.JSX.Element {
  return (
    <div className="relative flex h-full flex-col rounded-lg border border-primary p-8">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium uppercase text-primary-foreground">
          Popular
        </span>
      </div>
      <div className="relative z-10 grow border-b">
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-medium">Pro Plan</h2>
          <div className="mb-2 flex items-baseline">
            <span className="text-4xl font-bold">$199</span>
            <span className="ml-2 text-muted-foreground">/month</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Medium tasks (1-2 days each) to source samples, check products, or
            visit schools/offices for mobile accessories or training clothes.
          </p>
        </div>
        <ul className="mb-8 space-y-4">
          <li className="flex items-start">
            <CheckIcon className="mt-1 size-4" />
            <div className="ml-3 text-sm">
              3 medium tasks/month (e.g., sample sourcing for mobile
              accessories, quality checks for denim)
            </div>
          </li>
          <li className="flex items-start">
            <CheckIcon className="mt-1 size-4" />
            <div className="ml-3 text-sm">
              1 premium school/office visit (e.g., due diligence for supplier’s
              office)
            </div>
          </li>
          <li className="flex items-start">
            <CheckIcon className="mt-1 size-4" />
            <div className="ml-3 text-sm">
              Advanced low MOQ negotiation (e.g., for laptop parts)
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
        Start Subscription
        <ChevronRight className="ml-1 size-4 group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}

function EnterprisePlanCard(): React.JSX.Element {
  return (
    <div className="relative flex h-full flex-col rounded-lg border p-8">
      <div className="relative z-10 grow">
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-medium">Enterprise Plan</h2>
          <div className="mb-2 flex items-baseline">
            <span className="text-4xl font-bold">$999</span>
            <span className="ml-2 text-muted-foreground">/month</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Large tasks (week-long or month-long) for trade show visits or
            supply chain management for concrete panels or laptop parts.
          </p>
        </div>
        <ul className="mb-8 space-y-4">
          <li className="flex items-start">
            <CheckIcon className="mt-1 size-4" />
            <div className="ml-3 text-sm">
              3 large tasks/month (e.g., Canton Fair visit for supplier
              sourcing)
            </div>
          </li>
          <li className="flex items-start">
            <CheckIcon className="mt-1 size-4" />
            <div className="ml-3 text-sm">
              Ongoing supplier management (e.g., low MOQ deals for plumbing
              fittings)
            </div>
          </li>
          <li className="flex items-start">
            <CheckIcon className="mt-1 size-4" />
            <div className="ml-3 text-sm">
              Dedicated account manager & priority support
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
        Start Subscription
        <ChevronRight className="ml-1 size-4 group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}
