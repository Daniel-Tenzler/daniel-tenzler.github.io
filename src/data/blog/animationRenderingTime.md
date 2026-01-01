---
title: 'How a Small Image Placeholder Change Increased Painting Time by Nearly 50%'
description: 'Recently, one of our Android app developers flagged an unusual issue...'
pubDate: 'Aug 08 2025'
heroImage: '/blog-placeholder-2.jpg'
tags: ['web dev', 'react', 'app dev', 'jsx']
---

Recently, one of our Android app developers flagged an unusual issue: their logger was being flooded with `setRequestFrameRate` messages while loading a specific page in a WebView. The log showed hundreds of these messages per second, pointing to a potential performance bottleneck.

Interestingly, this issue was not reproducible on other devices or in the emulator, which made it even more puzzling.

After some investigation, we found that these messages are triggered when the Chromium WebView requests a change in the rendering frame rate(typically a sign that the page is processing resource-intensive animations).

But this page wasn’t supposed to have any animations... or so we thought.

## The Cause

As it turns out, a recent change to our gallery image component introduced a subtle but costly regression. We had updated the component to show a `blurhash` as a placeholder until the actual image finished loading. However, the way this placeholder was implemented changed: instead of replacing the placeholder with the `blurhash` or final image, the animated placeholder (a simple shifting gradient) was moved into the parent container and layered beneath the image.

This meant the animation continued playing, even after the image loaded, now hidden but still being rendered.

## Why It Was Hard to Catch

A simple mistake, but not a very visible one and almost impossible to notice while developing. The only reason it was even discovered was due to the fact that the webview logged the frame rate changes. In this particular page, we had up to 10 placeholder images which means at 60fps we could feasibly have 600 paints per second (Although i have to admit here that i do not know the inner workings/optimization of the browser).

After correcting the component so that the placeholder is properly replaced once the image or `blurhash` is ready, I ran two sets of performance tests before and after the fix.

> Painting time dropped by nearly 50%.
