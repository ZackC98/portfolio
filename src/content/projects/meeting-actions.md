---
title: "Meeting to Action Items"
date: 2025-04-07
status: live
summary: "Paste in raw meeting notes, get back structured owners, actions, and deadlines. Built because every IC I know spends 30 minutes after every call doing this manually."
stack: ["Python", "Claude API", "Streamlit"]
liveUrl: "https://your-streamlit-app.streamlit.app"
githubUrl: "https://github.com/yourusername/meeting-actions"
---

## The problem

After every client call, someone has to turn messy notes into 
structured action items with owners and deadlines. It takes 20-30 
minutes and nobody enjoys it.

## What I built

A Streamlit app with a single text input. Paste in raw meeting notes — 
messy, unstructured, however they were taken. Hit a button. Get back:

- **Actions** — what needs to happen
- **Owners** — who is responsible  
- **Deadlines** — when it needs to happen by
- **Decisions made** — what was agreed in the call

The output is formatted for copy-paste into a Confluence page or email.

## How it works

```python
prompt = f"""
You are an implementation consultant summarising a client meeting.

Extract from these notes:
1. Action items (with owner and deadline if mentioned)
2. Decisions made
3. Open questions that need answers
4. Any risks flagged

Format clearly. If owner or deadline is unclear, flag it as [TBC].

Meeting notes:
{notes}
"""
```

That's the core of it. The AI does the heavy lifting; I just built 
a clean interface around it.

## What broke

The first version had no structure in the prompt — it just asked for 
a summary. The output was inconsistent. Adding the explicit numbered 
list format fixed it immediately.

ElevenLabs character limits hit me on day two of testing. Switched to 
browser-native Web Speech API for the voice readback feature. Sounds 
slightly worse but costs nothing.

## What I'd do differently

Add an option to paste in a Zoom transcript directly — the format 
is consistent enough to parse more precisely than raw notes.

Also: the prompt needs a "confidence" field. Sometimes the AI invents 
an owner when none was mentioned. I'd rather it say [TBC] than guess.

## Lessons for IC/SA work

Prompt engineering is basically requirements gathering. The clearer 
you are about the output format you need, the better the result. 
Same skill, different context.
