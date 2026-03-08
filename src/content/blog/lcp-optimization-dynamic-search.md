---
title: 'LCP Optimization for Dynamic Search Results'
description: 'Improving LCP for client-side search results without moving logic to the backend.'
pubDate: 'Mar 08 2026'
heroImage: '/images/portfolio/blog-placeholder-2.jpg'
tags: ['web dev', 'performance', 'pagespeed', 'react']
---

Our landing page renders search results based on the user's last query stored in localStorage, with a default fallback. The search runs after the `load` event so the rest of the page becomes interactive immediately.

This approach worked while the search logic was simple. As the query and result processing became more complex, the LCP score dropped significantly.

## Why Moving the Search Earlier Was Not an Option

Typical recommendations suggest moving the search to the backend or executing it earlier in the page lifecycle.

Moving the search to the backend controller would place the API request on the critical rendering path. The search request takes roughly 300 ms, which would delay the initial render and slow the time until the page becomes usable.

Executing the search after `DOMContentLoaded` but before `load` appears safer, but introduces another issue. If the API request finishes before the `load` event fires, the returned images begin loading immediately. This increases network and rendering work during the initial page lifecycle and can delay when the page becomes fully interactive.

Because the results depend on a user-specific query stored in localStorage, moving the search to the backend was not practical in this case. The goal was therefore to keep the client-side search while improving LCP.

## Root Cause

The page already includes a static skeleton layout in the initial HTML. During hydration, React replaces it, and the search result component renders its own loading skeleton while waiting for the API response.

Conceptually the placeholder, skeleton, and final result represent the same visual element evolving over time. The browser’s LCP algorithm does not track a semantic “chain” of elements, but it does continuously update the largest visible paint candidate. If the placeholder qualifies as a candidate, it can be replaced later by the final image without resetting the measurement entirely.

In this implementation the static placeholder for result images used a styled `div` with a background color. The LCP algorithm only considers elements that render image resources or text as candidates. Because the placeholder did not reference an image resource, it was ignored by the browser’s LCP detection.

When the real result image eventually appeared, it became the first valid LCP candidate and was measured at its render time. This made the page appear slower in LCP measurements even though a visual placeholder had been present from the start.

## Fix

The static placeholder was replaced with a real `<img>` element using a lightweight placeholder asset.

Once the placeholder referenced an image resource, it became a valid LCP candidate. When the final result image replaced it later, the browser treated the visual transition as an update to the same candidate rather than a completely new element.

## Result

After the change, LCP improved from roughly **4.0 s to about 1.9 s** on Lighthouse test runs. The Lighthouse performance score contribution for LCP increased from **2 / 25** to **23 / 25**.

## Related Considerations

This issue appeared in a client-rendered search result component, but the same principle applies to many dynamic layouts. When an image is likely to become the LCP element, several additional optimizations are commonly used:

- prioritizing the LCP image using `fetchpriority="high"`
- preloading the hero image via `<link rel="preload">`
- ensuring stable layout dimensions to avoid layout shifts
- using responsive image sizing (`srcset` and `sizes`)

These were not necessary to resolve the issue here, but they are standard tools when working on LCP-sensitive pages.

## Takeaway

When optimizing LCP on pages with client-rendered content, ensure that the initial visual placeholder qualifies as a valid LCP candidate.

For image placeholders this means referencing an actual image resource, typically with an `<img>` element. If the placeholder is only a styled container, the browser may ignore it for LCP and instead measure the final image render much later in the page lifecycle.