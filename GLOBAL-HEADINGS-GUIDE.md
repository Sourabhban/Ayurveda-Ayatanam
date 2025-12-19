# Global Heading Styles Implementation Guide

## What Was Created
A global CSS file (`global-headings.css`) with consistent heading styles for all pages.

## Heading Styles Applied
- **Font**: Playfair Display (serif)
- **Color**: Brand Green (#1a4d2e)
- **Sizes**:
  - H1: 2.5rem (40px) - Main page titles
  - H2: 2rem (32px) - Section headings
  - H3: 1.75rem (28px) - Subsection headings
  - H4: 1.5rem (24px) - Minor headings
  - H5: 1.25rem (20px)
  - H6: 1rem (16px)

## How to Apply to All Pages

Add this line in the `<head>` section of each HTML page, after the Bootstrap CSS link:

```html
<link rel="stylesheet" href="../css/global-headings.css">
```

### Example for pages in `Team C/html/` folder:
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Global Heading Styles -->
    <link rel="stylesheet" href="../css/global-headings.css">
    
    <!-- Other CSS files -->
</head>
```

### Example for pages in `Team D/` folder:
```html
<link rel="stylesheet" href="../Team C/css/global-headings.css">
```

## Pages to Update
1. ✅ `pumsavana-karma.html` - Already has inline styles (can keep or replace with link)
2. `Panchkarma.html`
3. `jyotisha-diagnosis.html`
4. `Jaloo.html` (in Jalookavacharana folder)
5. `Diva.html` (in Daivapipashaya Chikitsa folder)
6. `about-dr-tejas-bharadwaj.html` (Team D)
7. `about-ayurveda-ayatanam.html` (Team D)
8. `index.html` (main homepage)

## Benefits
- **Consistency**: All headings look the same across all pages
- **Easy Maintenance**: Change one file to update all pages
- **Professional**: Unified brand identity
- **Responsive**: Automatically adjusts for mobile devices

## File Location
`d:\Final Copy\Team C\css\global-headings.css`
