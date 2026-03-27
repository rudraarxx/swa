export interface BlogPost {
  id: string;
  title: string;
  category: "Architecture" | "Interior" | "Design" | "Sustainability" | "Nagpur";
  date: string;
  readingTime: string;
  image: string;
  excerpt: string;
  content: string;
  slug: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "The Soul of Minimalism in Urban Homes",
    category: "Architecture",
    date: "March 15, 2026",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
    excerpt: "Exploring how modern architectural principles can create tranquility within the chaos of metropolitan life.",
    content: `
      <p>Architecture is often viewed as the art of building, but in its truest form, it is the art of subtraction. In the dense, chaotic landscapes of modern cities, the home should serve as a sanctuary—a place where the mind can find rest from the sensory overload of urban existence.</p>
      
      <h3>The Geometry of Silence</h3>
      <p>Minimalism isn't just about white walls or a lack of furniture. It's about the intentional use of space and light to create a sense of order. When we remove the unnecessary, the essential begins to speak. A single window, perfectly placed to capture the morning sun, becomes more powerful than a room filled with decorative objects.</p>
      
      <p>Our recent projects in Mumbai have focused on this "Geometry of Silence." By using raw concrete, natural wood, and vast glass panels, we create a dialogue between the interior and the sky. The result is a home that doesn't just house its occupants but actively contributes to their well-being.</p>
      
      <blockquote>
        "Minimalism is not a lack of something. It is simply the perfect amount of something."
      </blockquote>
      
      <h3>Materiality and Touch</h3>
      <p>In a world increasingly dominated by screens, the tactile quality of a building matters more than ever. We choose materials that age gracefully—stone that reveals its history through wear, and timber that warms the soul. These elements ground us, providing a physical connection to the earth even ten stories above the street.</p>
    `,
    slug: "soul-of-minimalism",
  },
  {
    id: "2",
    title: "Nagpur’s Evolving Skyline: A 2026 Perspective",
    category: "Nagpur",
    date: "February 28, 2026",
    readingTime: "4 min read",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200",
    excerpt: "How local heritage meets contemporary design in the burgeoning architectural landscape of Nagpur.",
    content: `
      <p>Nagpur is at a tipping point. Once known primarily as the "Orange City" and its administrative significance, it is now rapidly becoming a hub for innovative architecture in Central India.</p>
      
      <h3>Bridging Heritage and Progress</h3>
      <p>The challenge for architects in Nagpur today is to respect the city's colonial and vernacular past while embracing the needs of a modern metropolis. We are seeing a shift away from generic glass boxes toward climate-responsive structures that use local stone and traditional courtyard principles.</p>
      
      <p>Our work at SWA Architects within the city aims to celebrate this transition. We believe that Nagpur doesn't need to look like Dubai or Singapore; it needs to look like a better version of itself—shaded, ventilated, and deeply rooted in its unique geography.</p>
    `,
    slug: "nagpur-skyline-2026",
  },
  {
    id: "3",
    title: "Sustainable Materials for Tropical Climates",
    category: "Sustainability",
    date: "February 12, 2026",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200",
    excerpt: "Diving into the world of eco-friendly building blocks that keep homes cool naturally.",
    content: `
      <p>As temperatures rise, the energy demand for cooling in tropical regions has become a critical architectural challenge. The solution isn't better air conditioning—it's better building envelopes.</p>
      
      <h3>Beyond Concrete</h3>
      <p>While concrete is the default in modern India, its high thermal mass often works against us in the tropics, radiating heat long into the night. We are exploring alternatives like stabilized earth blocks, bamboo composites, and lime-based plasters that breathe.</p>
      
      <p>These materials aren't revolutionary; they are a return to common sense. By combining traditional wisdom with modern engineering, we can create homes that are not only beautiful but also carbon-neutral and naturally comfortable.</p>
    `,
    slug: "sustainable-materials",
  },
  {
    id: "4",
    title: "The Art of Natural Light in Interior Spaces",
    category: "Interior",
    date: "January 20, 2026",
    readingTime: "7 min read",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
    excerpt: "Strategic placement of openings to maximize daylight and create emotional resonance in rooms.",
    content: `
      <p>Light is the most powerful material an architect has. It costs nothing yet can transform a dull room into a dramatic experience. In interior design, we treat light as a sculpting tool.</p>
      
      <h3>Chasing Shadows</h3>
      <p>Good lighting isn't just about brightness; it's about the interplay of light and shadow. Shadows give objects weight and depth. By using skylights, clerestory windows, and light wells, we can bring depth into the innermost parts of a floor plan.</p>
    `,
    slug: "art-of-natural-light",
  },
  {
    id: "5",
    title: "Biophilic Design: Bringing the Outside In",
    category: "Design",
    date: "January 05, 2026",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=1200",
    excerpt: "Why the human connection to nature is essential for successful contemporary living spaces.",
    content: `
      <p>Humans have an innate desire to connect with nature. Biophilic design is the practice of incorporating natural elements—light, air, water, and plants—into our built environment.</p>
    `,
    slug: "biophilic-design",
  },
  {
    id: "6",
    title: "Retrofitting Heritage Structures in Modern India",
    category: "Architecture",
    date: "December 18, 2025",
    readingTime: "8 min read",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200",
    excerpt: "The delicate balance of preserving the past while implementing future-ready structural solutions.",
    content: `
      <p>Preservation is not just about keeping a building standing; it's about giving it a new life. Retrofitting heritage structures requires a surgical approach.</p>
    `,
    slug: "retrofitting-heritage",
  },
  {
    id: "7",
    title: "The Psychology of Color in Office Environments",
    category: "Interior",
    date: "December 02, 2025",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
    excerpt: "How intentional color selection can boost productivity and well-being in corporate settings.",
    content: `
      <p>Color is more than just an aesthetic choice; it's a psychological one. In office design, color can influence everything from mood to focus.</p>
    `,
    slug: "psychology-of-color",
  },
  {
    id: "8",
    title: "Bespoke Furniture: A Silent Architecture",
    category: "Design",
    date: "November 15, 2025",
    readingTime: "4 min read",
    image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1200",
    excerpt: "When industrial design and architecture blur to create functional sculptures for the home.",
    content: `
      <p>Furniture is the architecture of the immediate. While a building defines our experience of space, furniture defines our experience of life within that space.</p>
    `,
    slug: "bespoke-furniture",
  },
];
