/**
 * Travel Journal Data Source
 * 
 * This file contains the central data store for all travel journal entries.
 * Each entry object should match the props expected by the <JournalEntry /> component.
 * 
 * Entry Structure:
 * - id: Unique identifier (used as React key)
 * - images: Array of image paths (relative to /public folder)
 * - location: Location name with emoji (e.g., "📍Japan")
 * - title: Entry title/headline
 * - date: Travel date range as a string
 * - description: Entry text (can be plain string or JSX with formatting)
 * - mapLink: Google Maps URL for the location
 * 
 * Note: Images in the images array are automatically animated via CSS
 * (see @keyframes slide in index.css)
 */

const entries = [
  // Entry 1: Japan
  {
    id: 1,
    images: [
      '/japan/japan.png',         // Japan flag/icon
      '/japan/Tokyo.jpg',         // Tokyo cityscape
      '/japan/temples.jpg',       // Traditional temples
      '/japan/samurai.jpg',       // Samurai culture
      '/japan/sushi.jpg'          // Japanese cuisine
    ],
    location: '📍Japan',
    title: 'Exploring Japan',
    date: '12 Jan, 2024 - 24 Jan, 2024',
    description:
      "Japan is an amazing country with a rich culture and history. From the bustling streets of Tokyo to the serene temples of Kyoto, every moment was unforgettable. The food was delicious, and the people were incredibly kind. I can't wait to visit again!",
    mapLink: 'https://www.google.com/maps/place/Tokyo,+Japan'
  },

  // Entry 2: Australia
  {
    id: 2,
    images: [
      '/australia/australia.png',           // Australia flag/icon
      '/australia/sydney.jpg',              // Sydney Opera House
      '/australia/melbourne.jpg',           // Melbourne cityscape
      '/australia/adelaide.jpg',            // Adelaide views
      '/australia/australian-cuisines.jpg'  // Local food
    ],
    location: '📍Australia',
    title: 'Coastlines & Outback',
    date: '05 Mar, 2023 - 20 Mar, 2023',
    description:
      "From the iconic Sydney Opera House to long stretches of empty beaches and rust-red outback roads, Australia felt endlessly vast and generous. Highlights: coastal drives, local seafood, and meeting friendly locals.",
    mapLink: 'https://www.google.com/maps/place/Sydney,+Australia'
  },

  // Entry 3: Norway
  {
    id: 3,
    images: [
      '/norway/norway-flag.png',   // Norway flag
      '/norway/oslo.jpg',          // Oslo cityscape
      '/norway/fjord.jpg',         // Norwegian fjords
      '/norway/mountains.jpg',     // Mountain landscapes
      '/norway/norway-food.jpg'    // Norwegian cuisine
    ],
    location: '📍Norway',
    title: 'Fjords & Northern Lights',
    date: '10 Feb, 2022 - 18 Feb, 2022',
    description:
      "Norway offered dramatic fjords, crisp air, and nights lit by the aurora. From Oslo's cozy cafes to the towering cliffs and mirror-like waters, it was one of the most scenic trips I've taken.",
    mapLink: 'https://www.google.com/maps/place/Oslo,+Norway'
  }
]

// Export the entries array as the default export
export default entries
