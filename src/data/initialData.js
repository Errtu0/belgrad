export const initialData = {
  tripTitle: "Belgrade Trip 🇷🇸",
  dates: "5–9 February",
  groupSize: 7,
  accommodations: [
    { id: 1, address: "Terazije 12, Beograd", type: "Nuran/Shams/Furkan" },
    { id: 2, address: "Svetozara Radića 9, Beograd", type: "Fatya/Eren" },
    { id: 3, address: "...", type: "..." }
  ],
  itinerary: {
    1: [
      { id: "d1-1", time: "14:30", place: "Airbnb (Terazije 12)", category: "Walk", distance: "—", notes: "Check-in & drop bags", done: false },
      { id: "d1-2", time: "16:00", place: "Kafeterija (Terazije)", category: "Cafe", distance: "3 min walk", notes: "First Serbian coffee", done: false },
      { id: "d1-3", time: "16:45", place: "Hotel Moskva", category: "Landmark", distance: "2 min walk", notes: "Iconic hotel & cake", done: false },
      { id: "d1-4", time: "17:20", place: "Republic Square", category: "Walk", distance: "5 min walk", notes: "Central meeting point", done: false },
      { id: "d1-5", time: "17:30", place: "National Museum of Serbia", category: "Museum", distance: "At square", notes: "History fix", done: false },
      { id: "d1-6", time: "19:30", place: "Kultura Restaurant", category: "Food", distance: "6 min walk", notes: "Dinner time", done: false },
      { id: "d1-7", time: "21:30", place: "The Black Turtle Pub", category: "Bar", distance: "8 min walk", notes: "Local craft beer", done: false }
    ],
    2: [
      { id: "d2-1", time: "09:30", place: "Bakery / Kultura", category: "Food", distance: "5 min walk", notes: "Breakfast", done: false },
      { id: "d2-2", time: "10:30", place: "Knez Mihailova Street", category: "Walk", distance: "2 min walk", notes: "Shopping & vibes", done: false },
      { id: "d2-3", time: "11:30", place: "Kalemegdan Fortress", category: "Landmark", distance: "8 min walk", notes: "Victory statue & views", done: false },
      { id: "d2-4", time: "14:30", place: "Manufaktura", category: "Food", distance: "10 min walk", notes: "Traditional lunch", done: false },
      { id: "d2-5", time: "16:30", place: "Boutique Café", category: "Cafe", distance: "6 min walk", notes: "Afternoon break", done: false },
      { id: "d2-6", time: "20:30", place: "Dorćol Bars", category: "Bar", distance: "Walkable", notes: "Zaokret, Blaznavac hopping", done: false }
    ],
    3: [
      { id: "d3-1", time: "10:45", place: "Nikola Tesla Museum", category: "Museum", distance: "—", notes: "Science experiments!", done: false },
      { id: "d3-2", time: "12:30", place: "Church of Saint Sava", category: "Landmark", distance: "12 min walk", notes: "One of the world's largest churches", done: false },
      { id: "d3-3", time: "14:30", place: "Franš", category: "Food", distance: "8 min walk", notes: "High-end dining", done: false },
      { id: "d3-4", time: "22:30", place: "Hype Belgrade", category: "Club", distance: "10 min taxi", notes: "MAIN CLUB NIGHT", done: false }
    ],
    4: [
      { id: "d4-1", time: "10:30", place: "Late Breakfast", category: "Food", distance: "—", notes: "Recovery morning", done: false },
      { id: "d4-2", time: "12:30", place: "Funland Arcade (Ušće)", category: "Fun", distance: "10 min taxi", notes: "Claw machines & plushies!", done: false },
      { id: "d4-3", time: "15:30", place: "Princess Puff", category: "Food", distance: "10 min taxi", notes: "Famous Serbian desserts", done: false },
      { id: "d4-4", time: "20:00", place: "Salon 1905", category: "Food", distance: "8 min walk", notes: "Farewell dinner", done: false },
      { id: "d4-5", time: "22:00", place: "Last Drinks (Dorćol)", category: "Bar", distance: "Walkable", notes: "Final toast", done: false }
    ],
    5: [
      { id: "d5-1", time: "Morning", place: "Coffee & Departure", category: "Walk", distance: "—", notes: "Pack bags & head out", done: false }
    ]
  },
  places: [
  { id: 1, name: "National Museum", category: "Museum", emoji: "🏛️", desc: "Central museum on Republic Square with huge art and history collections." },
  { id: 2, name: "Kalemegdan Fortress", category: "Landmark", emoji: "🏰", desc: "Historic fortress and park at the river confluence." },
  { id: 3, name: "Nikola Tesla Museum", category: "Museum", emoji: "⚡", desc: "Interactive experiments and the archives of Nikola Tesla." },
  { id: 4, name: "Church of Saint Sava", category: "Landmark", emoji: "⛪", desc: "Massive, iconic church; a symbol of Belgrade." },
  { id: 5, name: "Hotel Moskva", category: "Landmark", emoji: "🏨", desc: "Legendary Art Nouveau hotel and cafe in the city center." },
  { id: 6, name: "Kafeterija", category: "Cafe", emoji: "☕", desc: "Multi-level coffee house in a beautiful historic building." },
  { id: 7, name: "Boutique Café", category: "Cafe", emoji: "🍹", desc: "Trendy spot on Republic Square for coffee and people-watching." },
  { id: 8, name: "Kultura Restaurant", category: "Food", emoji: "🥘", desc: "Fusion of world tastes and traditional hospitality." },
  { id: 9, name: "Manufaktura", category: "Food", emoji: "⛱️", desc: "Famous for red umbrellas and traditional Balkan dishes." },
  { id: 10, name: "Franš", category: "Food", emoji: "🍷", desc: "Luxury dining with an incredible garden and elite service." },
  { id: 11, name: "Salon 1905", category: "Food", emoji: "✨", desc: "Fine dining in the espectacular Geozavod building." },
  { id: 12, name: "The Black Turtle", category: "Bar", emoji: "🐢", desc: "Belgrade's famous pub known for unique fruit beers." },
  { id: 13, name: "Blaznavac", category: "Bar", emoji: "🦄", desc: "Eccentric garden bar with colorful, surreal decor." },
  { id: 14, name: "Zaokret", category: "Bar", emoji: "🎧", desc: "Hip spot in the Cetinjska district; cafe by day, bar by night." },
  { id: 15, name: "Drugstore Bar", category: "Bar", emoji: "🔊", desc: "Industrial vibe bar inside a former slaughterhouse." },
  { id: 16, name: "Leo Party House", category: "Fun", emoji: "🧸", desc: "Arcade at Terazije 8 packed with claw machines and plushies." },
  { id: 17, name: "Funland Arcade", category: "Fun", emoji: "🕹️", desc: "Entertainment center in Ušće Mall with games and prizes." },
  { id: 18, name: "Hype Belgrade", category: "Club", emoji: "🔥", desc: "Luxury nightclub with top-tier sound and lighting." }
],
  clubs: [
    { name: "Hype Belgrade", style: "Main Club / Luxury", isSelected: true },
    { name: "Freestyler", style: "River Club (Splav)", isSelected: false },
    { name: "Drugstore", style: "Industrial Techno", isSelected: false },
    { name: "Lafayette", style: "Cabaret Show & Club", isSelected: false }
  ]
};