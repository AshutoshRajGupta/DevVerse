// 'use client'
//
// import posthog from 'posthog-js'
// import { PostHogProvider as PHProvider } from 'posthog-js/react'
// import { useEffect } from 'react'
//
// export function PostHogProvider({ children }: { children: React.ReactNode }) {
//   useEffect(() => {
//     posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
//       api_host: '/ingest',
//       ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
//       capture_pageview: false,
//       capture_pageleave: true,
//     })
//   }, [])
//
//   return <PHProvider client={posthog}>{children}</PHProvider>
// }
'use client';

import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect, useState } from 'react';

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [posthog, setPosthog] = useState<any>(null);

  useEffect(() => {
    let isMounted = true;

    import('posthog-js').then((ph) => {
      if (!isMounted) return;

      const posthogInstance = ph.default;

      posthogInstance.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: '/ingest',
        ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageview: false,
        capture_pageleave: true,
      });

      setPosthog(posthogInstance);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  // Avoid rendering until PostHog is ready
  if (!posthog) return <>{children}</>;

  return <PHProvider client={posthog}>{children}</PHProvider>;
}