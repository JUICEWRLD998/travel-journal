// Central data store for journal entries
// Each entry should match the props expected by <JournalEntry />
// fields: id, images (array of src strings), location, title, date, description, mapLink

const entries = [
  {
    id: 1,
    images: [
      '/japan/japan.png',
      '/japan/Tokyo.jpg',
      '/japan/temples.jpg',
      '/japan/samurai.jpg',
      '/japan/sushi.jpg'
    ],
    location: '📍Japan',
    title: 'Exploring Japan',
    date: '12 Jan, 2024 - 24 Jan, 2024',
    description:
      "Japan is an amazing country with a rich culture and history. From the bustling streets of Tokyo to the serene temples of Kyoto, every moment was unforgettable. The food was delicious, and the people were incredibly kind. I can't wait to visit again!",
    mapLink: 'https://www.google.com/maps/place/Tokyo,+Japan'
  },

  {
    id: 2,
    images: [
      '/australia/australia.png',
      '/australia/sydney.jpg',
      '/australia/melbourne.jpg',
      '/australia/adelaide.jpg',
      '/australia/australian-cuisines.jpg'
    ],
    location: '📍Australia',
    title: 'Coastlines & Outback',
    date: '05 Mar, 2023 - 20 Mar, 2023',
    description:
      "From the iconic Sydney Opera House to long stretches of empty beaches and rust-red outback roads, Australia felt endlessly vast and generous. Highlights: coastal drives, local seafood, and meeting friendly locals.",
    mapLink: 'https://www.google.com/maps/place/Sydney,+Australia'
  }
  ,
  {
    id: 3,
    images: [
      '/norway/norway-flag.png',
      '/norway/oslo.jpg',
      '/norway/fjord.jpg',
      '/norway/mountains.jpg',
      '/norway/norway-food.jpg'
    ],
    location: '📍Norway',
    title: 'Fjords & Northern Lights',
    date: '10 Feb, 2022 - 18 Feb, 2022',
    description:
      "Norway offered dramatic fjords, crisp air, and nights lit by the aurora. From Oslo's cozy cafes to the towering cliffs and mirror-like waters, it was one of the most scenic trips I've taken.",
    mapLink: 'https://www.google.com/maps/place/Oslo,+Norway'
  }
]

export default entries
