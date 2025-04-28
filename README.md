# Deriv Partners Website Wireframe

This repository contains a wireframe for the Deriv Partners website built with Next.js and Tailwind CSS.

## Project Structure

- `pages/` - Contains the main page routes
  - `index.tsx` - Main homepage
  - `partners/index.tsx` - Dedicated partners page
- `components/` - Reusable UI components
  - `Header.tsx` - Site navigation
  - `PartnerPaths.tsx` - Different partner type options
  - `PremiumPrograms.tsx` - Premium partner opportunities
  - `PartnerHero.tsx` - Hero section for partners page
  - `PartnerFAQ.tsx` - FAQ section for partners
  - `CommissionPlans.tsx` - Commission structure and tiers
  - `EarningsCalculator.tsx` - Interactive calculator for potential earnings
  - `ValueProposition.tsx` - Partner benefits and value proposition
  - `TopPayouts.tsx` - Showcase of top partner earnings
  - `SuccessStories.tsx` - Partner success stories
  - And various other components...
- `styles/` - CSS and Tailwind configuration

## Required Dependencies

For this project to function properly, you need to install:

```bash
npm install next react react-dom react-icons typescript @types/react @types/node tailwindcss postcss autoprefixer
```

## Running the Project

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev
```

## Running with TypeScript Errors

If you encounter TypeScript errors due to missing dependencies, you can bypass them temporarily:

```bash
# Run Next.js in development mode bypassing TypeScript errors
npx next dev --no-typescript
```

This will allow you to view the wireframe even with TypeScript errors present. The partners page will be available at:

```
http://localhost:3000/partners
```

## Partner Types Available

The partner page showcases several partnership options:

1. **Generate Passive Income** - For those looking to earn commissions through referrals
2. **For Trading Professionals** - For experienced traders who want to monetize their expertise
3. **Monetize Your Audience** - For content creators and influencers
4. **Refer Your Network** - For casual referrers
5. **Just Exploring?** - For those just starting their journey

## Premium Programs

The following premium programs are highlighted:

1. **121 Partner Program** - Dedicated support and strategic guidance
2. **Master Partner Program** - Build a network of sub-partners
3. **Seminars & Events** - Co-sponsored events and speaking opportunities

## Implementation Notes

### Recent Improvements:

1. **Fixed Missing Components**:
   - Added CommissionPlans, EarningsCalculator, TopPayouts components
   - Improved existing components with better UX/UI

2. **Enhanced Partner Paths**:
   - Updated the "Build a Brokerage Business" path to "For Trading Professionals"
   - Enhanced descriptions and benefits for each partner type

3. **Added Value Proposition**:
   - Created comprehensive value proposition section
   - Added partner satisfaction metrics and key benefits

4. **Improved User Experience**:
   - Interactive card components with flip animations
   - Better visual hierarchy and information organization
   - Mobile-responsive design improvements

### Future Enhancements Planned:

1. **Create Dedicated Landing Pages** for each partner type
2. **Add Partner Type Quiz/Selector** to help users find their best path
3. **Implement Enhanced Navigation** with clear user journeys
4. **Add More Educational Content** for each partner type
5. **Develop Interactive Comparison Tools** for partner types 