# Homepage unit autocomplete

## Build
- Replace the placeholder search fields with two accessible autocomplete inputs backed by the existing length-unit list.
- Match suggestions by unit name, symbol, and identifier while keeping the list compact and keyboard-friendly.
- Keep each selected unit visible, allow either field to be changed, and prevent same-unit pairs.
- Once both units are selected, provide a normal link to the canonical conversion-pair URL so the destination remains crawlable and uses traditional page navigation.

## Technical details
- Reuse the existing `lengthUnits`, `unitLabel`, and `pairSlug` data helpers.
- Keep all interaction local to the homepage search component; no new storage or backend work.
- Verify mouse, keyboard, mobile layout, destination URL, and current build diagnostics.
