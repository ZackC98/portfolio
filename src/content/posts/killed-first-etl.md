---
title: "Why I killed my first ETL on day three"
date: 2025-04-07
outcome: killed
project: "onboarding-tracker"
summary: "Built a pipeline to pull ABS data. Hit rate limits, then date formatting issues, then realised I was solving the wrong problem."
---

## What I was trying to build

A pipeline that pulled daily employment data from the ABS API, 
cleaned it with pandas, and sent a formatted summary to email via n8n.

Seemed straightforward.

## What actually happened

**Day one** — API worked fine. Got data. Felt good.

**Day two** — Date formatting broke on one of the series. 
The ABS uses a non-standard date format in some endpoints 
(`2025-Q1` instead of `2025-01-01`). Pandas didn't like it.

Fixed that. Moved on.

**Day three** — Hit the rate limit. The ABS API is more 
restrictive than I expected. Free tier is 100 requests/day. 
My pipeline was making ~140.

I could have worked around this. But when I sat down to figure 
out how, I asked myself: *why am I pulling this data daily?* 
The employment numbers come out monthly. I was over-engineering 
the pipeline for data that barely changes.

## Why I killed it

The thing I was building didn't match the actual problem. 
Daily automation for monthly data is waste. The right solution 
is a script that runs on release day and caches the result.

That's a simpler build and a better product. 

## What I salvaged

The pandas date-cleaning logic is genuinely useful — I've put 
it in a `utils.py` file I'll reuse. The n8n workflow structure 
is also worth keeping, just triggered differently.

## What I'd do differently

Start with the data's update frequency before designing the pipeline. 
It's the first question. I skipped it because I was excited to build.

Classic mistake. Worth documenting.

## The IC/SA connection

This is exactly what scope creep feels like from the inside. 
You start building, add complexity, and lose sight of whether 
the complexity is solving the actual problem. The discipline is 
stopping and asking *why* before adding the next layer.
