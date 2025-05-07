import * as React from 'react';
import Link from 'next/link';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { AppInfo } from '@/constants/app-info';
import { Routes } from '@/constants/routes';

const DATA = [
  {
    question: `What does ${AppInfo.APP_NAME} do?`,
    answer: `ChinaTasks is your on-ground ally for tackling small but critical tasks in China, like checking container loading at ports, making calls to confirm supplier details, or picking up urgent documents. Unlike sourcing agencies, we focus on the last-mile errands that keep your projects—business or personal—moving smoothly, no matter where you are.`
  },
  {
    question: 'How will ChinaTasks benefit my business?',
    answer: `By handling time-consuming tasks like supplier calls or shipment inspections, ChinaTasks saves you hours and stress. Our local expertise ensures reliable results, from coordinating with freight handlers to verifying supplier credentials, so you can focus on growing your business with confidence.`
  },
  {
    question: 'Can I trust ChinaTasks with sensitive tasks?',
    answer: `Absolutely. We prioritize reliability and transparency, acting as your trusted eyes and ears in China. Whether it’s verifying a supplier or managing a document pickup, our team delivers clear, professional results you can count on.`
  },
  {
    question: 'What kind of tasks can ChinaTasks handle?',
    answer: `From routine errands like making supplier calls to urgent fixes like checking container loading or connecting you with local pros (e.g., interpreters, couriers), ChinaTasks adapts to your needs. No task is too small to keep your China project on track.`
  },
  {
    question: 'How quickly can ChinaTasks get started?',
    answer: `We’re built for speed. Share your task via our Substack chat or email, and we’ll jump in—often within hours. Our local team ensures fast turnarounds, whether it’s a shipment check or a last-minute supplier call.`
  },
  {
    question: 'Who can use ChinaTasks’ services?',
    answer: `ChinaTasks serves everyone from startups scaling a Douyin shop to seasoned pros managing supply chains, and even individuals with personal projects in China. If you’re working remotely and need a local fix, we’ve got you covered.`
  },
  {
    question: 'Can ChinaTasks customize solutions for my needs?',
    answer: `Yes. Whether you need a one-off document pickup or ongoing support for supplier coordination, we tailor our services to fit your unique challenges, making China feel like an extension of your desk.`
  }
];

export function FAQ(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container py-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="text-center lg:text-left">
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 hidden text-muted-foreground md:block lg:max-w-[75%]">
              Haven't found what you're looking for? Try{' '}
              <Link
                href={Routes.Contact}
                className="font-normal text-inherit underline hover:text-foreground"
              >
                contacting
              </Link>{' '}
              us, we are glad to help.
            </p>
          </div>
          <div className="mx-auto flex w-full max-w-xl flex-col">
            <Accordion
              type="single"
              collapsible
            >
              {DATA.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={index.toString()}
                >
                  <AccordionTrigger className="text-left text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
