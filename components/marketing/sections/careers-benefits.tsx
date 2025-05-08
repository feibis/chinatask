import * as React from 'react';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import { SiteHeading } from '@/components/marketing/fragments/site-heading';
import { AppInfo } from '@/constants/app-info';

export function CareersBenefits(): React.JSX.Element {
  return (
    <GridSection>
      <div className="space-y-20 pt-20">
        <div className="container">
          <SiteHeading
            title="One-off tasks"
            description={`Explore our curated China task plans below for immediate operational support. If your specific need isn’t listed, contact us directly—we’ll design a bespoke solution within 24 hours.`}
          />
        </div>
      </div>
    </GridSection>
  );
}
