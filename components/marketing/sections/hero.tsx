'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Routes } from '@/constants/routes';
import { cn } from '@/lib/utils';

function HeroPill(): React.JSX.Element {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)', opacity: 0, y: -20 }}
      animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center"
    >
      <Link href="#">
        <Badge
          variant="outline"
          className="group h-8 rounded-full px-3 text-xs font-medium shadow-sm duration-200 hover:bg-accent/50 sm:text-sm"
        >
          <div className="w-fit py-0.5 text-center text-xs text-blue-500 sm:text-sm">
            Free consult!
          </div>
          <Separator
            orientation="vertical"
            className="mx-2"
          />
          Whatsapp US
          <ChevronRightIcon className="ml-1.5 size-3 shrink-0 text-foreground transition-transform group-hover:translate-x-0.5" />
        </Badge>
      </Link>
    </motion.div>
  );
}

function HeroTitle(): React.JSX.Element {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
      animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      <h1 className="mt-6 text-center text-[36px] font-bold leading-[42px] tracking-[-1.2px] [font-kerning:none] sm:text-[40px] md:text-[48px] lg:text-[56px] lg:leading-[64px] lg:tracking-[-2px]">
        Fast third-party
        <br /> China tasks assistant
      </h1>
    </motion.div>
  );
}

function HeroDescription(): React.JSX.Element {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="mx-auto mt-3 max-w-[560px] text-balance text-center text-lg leading-[26px] text-muted-foreground sm:text-xl lg:mt-6"
    >
      ChinaTasks simplifies the small stuff—suppliers, payments, logistics,
      pros. Your China fixer, done right.
    </motion.p>
  );
}

function HeroButtons(): React.JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="mx-auto flex w-full flex-col gap-2 px-7 sm:w-auto sm:flex-row sm:px-0"
    >
      <Link
        href={Routes.SignUp}
        className={cn(
          buttonVariants({ variant: 'default' }),
          'h-10 rounded-xl sm:h-9'
        )}
      >
        Start for free
      </Link>
      <Link
        href={Routes.Contact}
        className={cn(
          buttonVariants({ variant: 'outline' }),
          'h-10 rounded-xl sm:h-9'
        )}
      >
        Talk to US
      </Link>
    </motion.div>
  );
}

export function Hero(): React.JSX.Element {
  return (
    <GridSection className="overflow-x-hidden">
      {/* 🔥 Removed MainDashedGridLines */}
      <div className="mx-auto mt-8 flex flex-col gap-6 px-2 pb-16 sm:mt-10 sm:px-1 md:mt-12 lg:mt-16">
        <div className="gap-2">
          <HeroPill />
          <HeroTitle />
        </div>
        <HeroDescription />
        <HeroButtons />
      </div>
    </GridSection>
  );
}
