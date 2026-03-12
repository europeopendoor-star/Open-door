## 2024-03-12 - Missing Memoization for Filtering Large Static Arrays
**Learning:** Found a missing `useMemo` pattern when dealing with static arrays like `JOBS` in `src/App.tsx` and `blogPosts` in `src/Blog.tsx`. The arrays are filtered on every re-render (e.g. search, location updates), doing an O(N) operation unnecessarily when other state changes.
**Action:** When filtering static arrays or large lists based on state, always wrap the filtering operation in `useMemo` so that the recalculation only occurs when the specific filter states change.
