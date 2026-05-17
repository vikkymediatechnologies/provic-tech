export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  category: string
  images: string[]
  rating: number
  reviews: number
  reviewList?: {
    id: number
    author: string
    avatar: string
    rating: number
    date: string
    comment: string
  }[]
  inStock: boolean
  featured: boolean
  specifications?: Record<string, string>
  warranty?: string
  deliveryTime?: string
  whatsInTheBox?: string[]
  freeGift?: string
}
 
export interface Category {
  id: string
  name: string
  icon: string
  productCount: number
}
export interface Category {
  id: string
  name: string
  description: string
  icon: string
  productCount: number
}

export interface Testimonial {
  id: string
  name: string
  role: string
  avatar: string
  content: string
  rating: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export const categories: Category[] = [
  {
    id: 'laptops',
    name: 'Laptops',
    description: 'Powerful laptops for work and creativity',
    icon: 'Laptop',
    productCount: 4,
  },
  {
    id: 'earbuds',
    name: 'Earbuds',
    description: 'Premium wireless audio experience',
    icon: 'Headphones',
    productCount: 4,
  },
  {
    id: 'keyboards',
    name: 'Keyboards',
    description: 'Mechanical and wireless keyboards',
    icon: 'Keyboard',
    productCount: 4,
  },
  {
    id: 'power-banks',
    name: 'Power Banks',
    description: 'Stay charged on the go',
    icon: 'Battery',
    productCount: 4,
  },
  {
    id: 'smartwatches',
    name: 'Smartwatches',
    description: 'Smart fitness and lifestyle trackers',
    icon: 'Watch',
    productCount: 4,
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Essential tech accessories',
    icon: 'Cable',
    productCount: 4,
  },
]


export const products: Product[] = [
 
  // ══════════════════════════════════════════
  // LAPTOPS
  // ══════════════════════════════════════════
  {
    id: 'Hp-Probook-11',
    name: 'HP ProBook 11 Laptop',
    description: 'HP ProBook 11 Touchscreen — 256GB SSD / 4GB RAM, Intel Pentium Quad Core, WIN 11 Pro. Compact, durable, and perfect for students and everyday productivity.',
    price: 221000,
    originalPrice: 500000,
    category: 'laptops',
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.8,
    reviews: 10,
    reviewList: [
      { id: 1, author: 'Chukwuemeka O.', avatar: 'CO', rating: 5, date: '2024-12-10', comment: 'Great laptop for the price! Very fast and the touchscreen works perfectly. Highly recommended.' },
      { id: 2, author: 'Fatima A.', avatar: 'FA', rating: 5, date: '2024-12-05', comment: 'Delivery was fast and the laptop was well packaged. WIN 11 Pro is already activated.' },
      { id: 3, author: 'Tunde B.', avatar: 'TB', rating: 4, date: '2024-11-28', comment: 'Good value for money. The mouse and USB light included were a nice bonus.' },
    ],
    inStock: true,
    featured: true,
    specifications: {
      'Processor': 'Intel Pentium Quad Core N3710',
      'RAM': '4GB DDR3',
      'Storage': '256GB SSD',
      'Display': '11.6" HD Touchscreen (1366×768)',
      'Operating System': 'Windows 11 Pro (Activated)',
      'Graphics': 'Intel HD Graphics 405',
      'Battery': 'Up to 8 hours',
      'Ports': 'USB 3.0 × 2, HDMI, SD Card, 3.5mm',
      'Weight': '1.35kg',
    },
    whatsInTheBox: [
      'HP ProBook 11 Laptop',
      'Original AC Power Adapter',
      'Wireless Mouse',
      'USB LED Light',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '6 Months Provic Warranty',
    deliveryTime: '1-2 business days (Lagos), 3-5 days (Outside Lagos)',
  },
 
  {
    id: 'Hp-EliteBook-840-G5',
    name: 'HP EliteBook 840 G5',
    description: 'HP EliteBook 840 G5 Touchscreen — Core i5 8th Gen, 16GB RAM / 256GB SSD, Backlit Keyboard, Fingerprint Reader, WIN 11 Pro. A powerhouse business laptop built for performance.',
    price: 495000,
    originalPrice: 1160000,
    category: 'laptops',
    images: [
      'https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.8,
    reviews: 10,
    reviewList: [
      { id: 1, author: 'Adebayo K.', avatar: 'AK', rating: 5, date: '2024-12-10', comment: 'Absolutely love this laptop. The touchscreen and backlit keyboard make working at night so easy.' },
      { id: 2, author: 'Ngozi E.', avatar: 'NE', rating: 5, date: '2024-12-05', comment: 'Very sleek and professional. 16GB RAM handles everything I throw at it with no lag.' },
      { id: 3, author: 'Emeka R.', avatar: 'ER', rating: 4, date: '2024-11-28', comment: 'Solid business laptop. Fingerprint reader works great. Came with the bag as promised.' },
    ],
    inStock: true,
    featured: true,
    specifications: {
      'Processor': 'Intel Core i5-8250U (8th Gen, 1.6–3.4GHz)',
      'RAM': '16GB DDR4',
      'Storage': '256GB NVMe SSD',
      'Display': '14" FHD IPS Touchscreen (1920×1080)',
      'Graphics': 'Intel UHD 620',
      'Keyboard': 'Backlit, Spill-resistant',
      'Security': 'Fingerprint Reader, TPM 2.0',
      'Operating System': 'Windows 11 Pro (Activated)',
      'Battery': 'Up to 12 hours',
      'Ports': 'USB-C × 2, USB 3.0 × 2, HDMI, SD Card, SmartCard',
      'Weight': '1.48kg',
    },
    whatsInTheBox: [
      'HP EliteBook 840 G5 Laptop',
      'Original AC Power Adapter (65W)',
      'Laptop Carry Bag',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '6 Months Provic Warranty',
    deliveryTime: '1-2 business days (Lagos), 3-5 days (Outside Lagos)',
  },
 
  {
    id: 'dell-latitude-5490',
    name: 'Dell Latitude 5490',
    description: 'Dell Latitude 5490 — Core i7 8th Gen, 16GB RAM / 512GB SSD, Full HD display, WIN 11 Pro. Enterprise-grade performance for developers and power users.',
    price: 580000,
    originalPrice: 950000,
    category: 'laptops',
    images: [
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.7,
    reviews: 24,
    reviewList: [
      { id: 1, author: 'Ibrahim S.', avatar: 'IS', rating: 5, date: '2024-12-11', comment: 'Blazing fast i7 with 16GB RAM. Runs VS Code, Docker, and Chrome tabs all at once without breaking a sweat.' },
      { id: 2, author: 'Amina T.', avatar: 'AT', rating: 5, date: '2024-12-03', comment: '512GB SSD means everything opens instantly. Great build quality — feels very premium.' },
      { id: 3, author: 'Ola P.', avatar: 'OP', rating: 4, date: '2024-11-22', comment: 'Excellent machine for programming. The display is crisp and colour-accurate.' },
    ],
    inStock: true,
    featured: false,
    specifications: {
      'Processor': 'Intel Core i7-8650U (8th Gen, 1.9–4.2GHz)',
      'RAM': '16GB DDR4',
      'Storage': '512GB NVMe SSD',
      'Display': '14" FHD Anti-Glare (1920×1080)',
      'Graphics': 'Intel UHD 620',
      'Operating System': 'Windows 11 Pro (Activated)',
      'Battery': 'Up to 11 hours',
      'Ports': 'USB-C (Thunderbolt 3), USB 3.0 × 3, HDMI, SD Card, RJ45',
      'Security': 'Fingerprint Reader, Smart Card, TPM',
      'Weight': '1.58kg',
    },
    whatsInTheBox: [
      'Dell Latitude 5490 Laptop',
      'Original Dell 65W Power Adapter',
      'Laptop Sleeve',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '6 Months Provic Warranty',
    deliveryTime: '1-2 business days (Lagos), 4-6 days (Outside Lagos)',
  },
 
  {
    id: 'lenovo-thinkpad-x1-carbon',
    name: 'Lenovo ThinkPad X1 Carbon Gen 9',
    description: 'Lenovo ThinkPad X1 Carbon Gen 9 — Core i7 11th Gen, 16GB RAM / 512GB SSD, 2K IPS display, ultra-light at 1.13kg. The ultimate ultrabook for professionals.',
    price: 720000,
    originalPrice: 1200000,
    category: 'laptops',
    images: [
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.9,
    reviews: 41,
    reviewList: [
      { id: 1, author: 'Chibuzor M.', avatar: 'CM', rating: 5, date: '2024-12-12', comment: 'The lightest laptop I have ever used that still feels premium. 2K display is stunning.' },
      { id: 2, author: 'Halima D.', avatar: 'HD', rating: 5, date: '2024-12-04', comment: 'ThinkPad keyboard is still the best in the industry. i7 11th Gen runs everything fast.' },
      { id: 3, author: 'Dare F.', avatar: 'DF', rating: 5, date: '2024-11-26', comment: 'Battery life is incredible — I got 13 hours on a single charge. Absolutely love this machine.' },
    ],
    inStock: true,
    featured: false,
    specifications: {
      'Processor': 'Intel Core i7-1165G7 (11th Gen, up to 4.7GHz)',
      'RAM': '16GB LPDDR4X',
      'Storage': '512GB NVMe SSD',
      'Display': '14" 2K IPS Anti-glare (2560×1600), 400 nits',
      'Graphics': 'Intel Iris Xe Graphics',
      'Operating System': 'Windows 11 Pro (Activated)',
      'Battery': 'Up to 15 hours',
      'Ports': 'Thunderbolt 4 × 2, USB-A × 2, HDMI 2.0, 3.5mm',
      'Weight': '1.13kg',
      'Keyboard': 'Backlit, Spill-resistant, TrackPoint',
    },
    whatsInTheBox: [
      'Lenovo ThinkPad X1 Carbon Gen 9',
      'Lenovo 65W USB-C Power Adapter',
      'Premium Carry Bag',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '1 Year Lenovo + 6 Months Provic Warranty',
    deliveryTime: '2-3 business days (Lagos), 5-7 days (Outside Lagos)',
  },
 
  // ══════════════════════════════════════════
  // EARBUDS
  // ══════════════════════════════════════════
  {
    id: 'airpods-pro-2',
    name: 'Apple AirPods Pro 2',
    description: 'Apple AirPods Pro 2 with Active Noise Cancellation, Adaptive Audio, Transparency mode, and Personalized Spatial Audio with dynamic head tracking. The gold standard of wireless earbuds.',
    price: 185000,
    originalPrice: 210000,
    category: 'earbuds',
    images: [
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1617625802912-cde586faf331?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.9,
    reviews: 312,
    reviewList: [
      { id: 1, author: 'Seun A.', avatar: 'SA', rating: 5, date: '2024-12-08', comment: 'The noise cancellation is insane. I can finally focus on work without distractions.' },
      { id: 2, author: 'Bola T.', avatar: 'BT', rating: 5, date: '2024-12-01', comment: 'Spatial Audio on Apple Music is a completely different experience. Worth every naira.' },
      { id: 3, author: 'David O.', avatar: 'DO', rating: 5, date: '2024-11-20', comment: 'Battery life is great and the case charges super fast. Best earbuds I have ever owned.' },
    ],
    inStock: true,
    featured: true,
    specifications: {
      'Chip': 'Apple H2',
      'Active Noise Cancellation': 'Yes — Adaptive ANC',
      'Transparency Mode': 'Yes — Adaptive',
      'Spatial Audio': 'Personalized with Head Tracking',
      'Battery (Earbuds)': '6 hours ANC on, 30 hours with case',
      'Connectivity': 'Bluetooth 5.3',
      'Water Resistance': 'IPX4 (Earbuds & Case)',
      'Controls': 'Force Sensor, Touch Control',
      'Charging': 'Lightning, MagSafe, Qi Wireless',
    },
    whatsInTheBox: [
      'AirPods Pro (2nd Generation) × 2',
      'MagSafe Charging Case with Lightning Connector',
      'Lightning to USB-C Cable',
      'Ear Tips (XS, S, M, L)',
      'Documentation',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '1 Year Apple International Warranty',
    deliveryTime: '1-2 business days (Lagos), 3-4 days (Outside Lagos)',
  },
 
  {
    id: 'samsung-buds2-pro',
    name: 'Samsung Galaxy Buds2 Pro',
    description: 'Samsung Galaxy Buds2 Pro with 24-bit Hi-Fi audio, intelligent ANC, and seamless Galaxy ecosystem integration. Superior sound quality meets comfort.',
    price: 145000,
    originalPrice: 165000,
    category: 'earbuds',
    images: [
      'https://images.unsplash.com/photo-1628815113969-0487917f6da7?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.6,
    reviews: 234,
    reviewList: [
      { id: 1, author: 'Kolade M.', avatar: 'KM', rating: 5, date: '2024-12-07', comment: 'The 24bit audio quality is stunning. Pairs seamlessly with my Galaxy phone.' },
      { id: 2, author: 'Amaka J.', avatar: 'AJ', rating: 4, date: '2024-11-30', comment: 'Comfortable fit and great ANC. Slightly smaller battery than AirPods but audio is top tier.' },
      { id: 3, author: 'Femi G.', avatar: 'FG', rating: 5, date: '2024-11-15', comment: '360 Audio is a game changer for movies and music. Really impressed with this purchase.' },
    ],
    inStock: true,
    featured: true,
    specifications: {
      'Driver': 'Coaxial 2-way (Woofer + Tweeter)',
      'Audio Quality': '24-bit Hi-Fi, Samsung 360 Audio',
      'ANC': 'Intelligent Active Noise Cancellation',
      'Battery (Earbuds)': '5 hours ANC on',
      'Battery (With Case)': 'Up to 18 hours',
      'Connectivity': 'Bluetooth 5.3, Auto Switch',
      'Water Resistance': 'IPX7 (Earbuds), IPX2 (Case)',
      'Voice Detect': 'Yes — Auto switches to Ambient Sound',
    },
    whatsInTheBox: [
      'Samsung Galaxy Buds2 Pro × 2',
      'Wireless Charging Case',
      'USB-C Charging Cable',
      'Ear Tips (S, M, L)',
      'Quick Start Guide',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '1 Year Samsung Warranty',
    deliveryTime: '1-2 business days (Lagos), 3-4 days (Outside Lagos)',
  },
 
  {
    id: 'jabra-elite-85t',
    name: 'Jabra Elite 85t',
    description: 'Jabra Elite 85t — Advanced ANC, 6-microphone call technology, and comfortable semi-open fit. Crystal-clear calls and rich audio for professionals.',
    price: 110000,
    originalPrice: 135000,
    category: 'earbuds',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.6,
    reviews: 178,
    reviewList: [
      { id: 1, author: 'Chidi W.', avatar: 'CW', rating: 5, date: '2024-12-09', comment: 'Call quality is unmatched. My team says I sound like I\'m in a studio even on the go.' },
      { id: 2, author: 'Ify S.', avatar: 'IS', rating: 4, date: '2024-12-01', comment: 'Comfortable for long hours. ANC is very effective in busy environments.' },
      { id: 3, author: 'Jide O.', avatar: 'JO', rating: 5, date: '2024-11-18', comment: 'The adjustable ANC is great — I can let in just the right amount of sound.' },
    ],
    inStock: true,
    featured: false,
    specifications: {
      'Microphones': '6-mic technology (3 per earbud)',
      'ANC': 'Advanced Hybrid ANC (10 levels)',
      'Battery (Earbuds)': '7 hours',
      'Battery (With Case)': 'Up to 25 hours',
      'Connectivity': 'Bluetooth 5.1, Multipoint (2 devices)',
      'Water Resistance': 'IP55',
      'Equalizer': 'MySound app — personalized EQ',
      'Fit': 'Semi-open, secure',
    },
    whatsInTheBox: [
      'Jabra Elite 85t Earbuds × 2',
      'Wireless Charging Case',
      'USB-C Charging Cable',
      'Ear Tips (S, M, L)',
      'Jabra MySound App Guide',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '2 Years Jabra Warranty',
    deliveryTime: '2-3 business days (Lagos), 4-6 days (Outside Lagos)',
  },
 
  {
    id: 'sony-wf-1000xm5',
    name: 'Sony WF-1000XM5',
    description: 'Sony WF-1000XM5 — Industry-leading noise cancellation with HD Voice calls, LDAC codec for Hi-Res Audio, and 8-hour battery life. Sony\'s finest earbuds yet.',
    price: 220000,
    originalPrice: 260000,
    category: 'earbuds',
    images: [
      'https://images.unsplash.com/photo-1617625802912-cde586faf331?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1628815113969-0487917f6da7?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.9,
    reviews: 289,
    reviewList: [
      { id: 1, author: 'Taiwo P.', avatar: 'TP', rating: 5, date: '2024-12-10', comment: 'LDAC codec with Hi-Res Audio is absolutely mind-blowing. These are on another level.' },
      { id: 2, author: 'Kemi B.', avatar: 'KB', rating: 5, date: '2024-12-02', comment: 'Sony\'s noise cancellation beats everything else in this category. Worth every penny.' },
      { id: 3, author: 'Nnamdi R.', avatar: 'NR', rating: 5, date: '2024-11-22', comment: '8 hours battery is great. The new smaller size fits my ears so much better than XM4.' },
    ],
    inStock: true,
    featured: false,
    specifications: {
      'Driver': '8.4mm, Dynamic',
      'ANC': 'Industry-leading (V2 chip + HD Noise Cancelling Processor QN2e)',
      'Codec': 'LDAC (Hi-Res Wireless), AAC, SBC',
      'Battery (Earbuds)': '8 hours (ANC on)',
      'Battery (With Case)': 'Up to 24 hours',
      'Connectivity': 'Bluetooth 5.3, Multipoint',
      'Water Resistance': 'IPX4',
      'Speak-to-Chat': 'Yes — Auto pause when speaking',
    },
    whatsInTheBox: [
      'Sony WF-1000XM5 Earbuds × 2',
      'Charging Case',
      'USB-C Charging Cable',
      'Ear Tips — Foam (S, M, L) + Silicone (SS, S, M, L, LL)',
      'Quick Start Guide & Safety Guide',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '1 Year Sony Warranty',
    deliveryTime: '1-2 business days (Lagos), 3-5 days (Outside Lagos)',
  },
 
  // ══════════════════════════════════════════
  // KEYBOARDS
  // ══════════════════════════════════════════
  {
    id: 'keychron-q1-pro',
    name: 'Keychron Q1 Pro',
    description: 'Keychron Q1 Pro — Premium wireless mechanical keyboard with QMK/VIA support, gasket mount, and hot-swappable switches. The ultimate 75% keyboard for typists.',
    price: 125000,
    category: 'keyboards',
    images: [
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.9,
    reviews: 89,
    reviewList: [
      { id: 1, author: 'Tobi F.', avatar: 'TF', rating: 5, date: '2024-12-09', comment: 'The gasket mount typing feel is absolutely premium. Best keyboard I have ever typed on.' },
      { id: 2, author: 'Chisom V.', avatar: 'CV', rating: 5, date: '2024-12-02', comment: 'QMK support means I can customise every single key. Wireless and wired modes both work flawlessly.' },
      { id: 3, author: 'Lanre P.', avatar: 'LP', rating: 4, date: '2024-11-22', comment: 'Beautiful build quality. Heavy and solid. The hot-swap feature is great for trying new switches.' },
    ],
    inStock: true,
    featured: true,
    specifications: {
      'Layout': '75% (84 keys)',
      'Switches': 'Gateron G Pro 3.0 Red (Hot-swappable)',
      'Connectivity': 'Bluetooth 5.1, USB-C Wired',
      'Battery': '4000mAh',
      'Mount': 'Gasket Mount (dampened typing)',
      'Case Material': 'Anodised Aluminium',
      'Backlight': 'South-facing RGB per-key',
      'Firmware': 'QMK / VIA fully programmable',
      'Polling Rate': '1000Hz (wired)',
    },
    whatsInTheBox: [
      'Keychron Q1 Pro Keyboard',
      'USB-C to USB-A Braided Cable',
      'Keycap & Switch Puller',
      'Extra Switches × 3',
      'Carrying Pouch',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '1 Year Keychron Warranty',
    deliveryTime: '3-5 business days (Lagos), 7-10 days (Outside Lagos)',
  },
 
  {
    id: 'keychron-k8-pro',
    name: 'Keychron K8 Pro',
    description: 'Keychron K8 Pro TKL — Wireless mechanical keyboard with hot-swappable switches, per-key RGB, and multi-device Bluetooth. Great value for developers and gamers.',
    price: 85000,
    originalPrice: 95000,
    category: 'keyboards',
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.8,
    reviews: 134,
    reviewList: [
      { id: 1, author: 'Yemi S.', avatar: 'YS', rating: 5, date: '2024-12-06', comment: 'The RGB lighting is beautiful and the TKL layout is perfect for my desk setup. Great buy!' },
      { id: 2, author: 'Ola N.', avatar: 'ON', rating: 5, date: '2024-11-29', comment: 'Switches out of the box are smooth and quiet. Can connect to 3 devices via Bluetooth seamlessly.' },
      { id: 3, author: 'Kola D.', avatar: 'KD', rating: 4, date: '2024-11-18', comment: 'Great keyboard at this price point. Hot-swap is a huge plus. Very happy with this purchase.' },
    ],
    inStock: true,
    featured: true,
    specifications: {
      'Layout': 'TKL — 87 keys',
      'Switches': 'Gateron G Pro Red (Hot-swappable)',
      'Connectivity': 'Bluetooth 5.1 (3-device), USB-C Wired',
      'Battery': '4000mAh',
      'Case Material': 'Plastic Frame, Aluminium top plate',
      'Backlight': 'Per-key RGB',
      'Firmware': 'QMK / VIA',
      'Mac/Windows': 'Dual-mode toggle switch',
    },
    whatsInTheBox: [
      'Keychron K8 Pro Keyboard',
      'USB-C to USB-A Braided Cable',
      'Keycap & Switch Puller',
      'Extra Switches × 3',
      'Mac & Windows Keycap Set',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '1 Year Keychron Warranty',
    deliveryTime: '3-5 business days (Lagos), 7-10 days (Outside Lagos)',
  },
 
  {
    id: 'logitech-mx-keys',
    name: 'Logitech MX Keys Advanced',
    description: 'Logitech MX Keys — Illuminated wireless keyboard with Smart Illumination, comfortable spherical keys, and Easy-Switch for up to 3 devices. Built for professionals.',
    price: 95000,
    originalPrice: 115000,
    category: 'keyboards',
    images: [
      'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.7,
    reviews: 203,
    reviewList: [
      { id: 1, author: 'Funke A.', avatar: 'FA', rating: 5, date: '2024-12-08', comment: 'The best typing experience I\'ve had on a membrane keyboard. Spherical keys are so comfortable.' },
      { id: 2, author: 'Razaq B.', avatar: 'RB', rating: 4, date: '2024-11-30', comment: 'Smart backlighting that turns on when your hands approach is very cool. Pairs easily with Mac and PC.' },
      { id: 3, author: 'Esther K.', avatar: 'EK', rating: 5, date: '2024-11-19', comment: 'Easy-Switch between 3 devices is seamless. A must-have for anyone with multiple computers.' },
    ],
    inStock: true,
    featured: false,
    specifications: {
      'Layout': 'Full-size (UK/US)',
      'Key Type': 'Scissor-switch (premium membrane)',
      'Connectivity': 'Bluetooth (3-device), Logi Bolt USB',
      'Battery': 'Up to 10 days (backlit), 5 months (no backlight)',
      'Backlight': 'Per-key Smart Illumination (proximity sensor)',
      'Charging': 'USB-C',
      'Easy-Switch': '3-device toggle',
      'OS Support': 'Windows, macOS, Linux, iOS, Android',
    },
    whatsInTheBox: [
      'Logitech MX Keys Keyboard',
      'USB-C to USB-A Charging Cable',
      'Logi Bolt USB Receiver',
      'Documentation',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '2 Years Logitech Warranty',
    deliveryTime: '2-3 business days (Lagos), 5-7 days (Outside Lagos)',
  },
 
  {
    id: 'anne-pro-2',
    name: 'Anne Pro 2 60% Mechanical',
    description: 'Anne Pro 2 — Compact 60% wireless mechanical keyboard with full RGB, programmable keys, and Bluetooth. Perfect for minimalist setups and portability.',
    price: 55000,
    originalPrice: 70000,
    category: 'keyboards',
    images: [
      'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.5,
    reviews: 167,
    reviewList: [
      { id: 1, author: 'Samuel T.', avatar: 'ST', rating: 5, date: '2024-12-07', comment: 'Love the compact size. Took it to uni and it fits perfectly in my bag. RGB looks amazing.' },
      { id: 2, author: 'Joy M.', avatar: 'JM', rating: 4, date: '2024-11-28', comment: 'Bluetooth works great with my iPad and phone. Switches feel satisfying right out of the box.' },
      { id: 3, author: 'Frank O.', avatar: 'FO', rating: 4, date: '2024-11-16', comment: 'Great value for a mechanical 60%. Anne Pro app lets me customise everything.' },
    ],
    inStock: true,
    featured: false,
    specifications: {
      'Layout': '60% (61 keys)',
      'Switches': 'Gateron Red (Smooth Linear)',
      'Connectivity': 'Bluetooth 4.0, USB-C Wired',
      'Battery': '1900mAh (up to 8 hours wireless)',
      'Backlight': 'Full RGB per-key',
      'Programmable': 'Yes — ObinsKit software',
      'Keycaps': 'PBT double-shot',
      'Tap-to-Layer': 'Yes — dual function keys',
    },
    whatsInTheBox: [
      'Anne Pro 2 Keyboard',
      'USB-C Charging Cable',
      'Keycap Puller',
      'Extra Keycap Set',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '1 Year Anne Pro Warranty',
    deliveryTime: '3-5 business days (Lagos), 7-10 days (Outside Lagos)',
  },
 
  // ══════════════════════════════════════════
  // POWER BANKS
  // ══════════════════════════════════════════
  {
    id: 'EASYPIE-20000',
    name: 'EASYPIE Power Bank 20000mAh',
    description: 'EASYPIE 20000mAh Ultra Slim Power Bank with Fast Charging and Dual USB Ports. Charge two devices simultaneously — perfect for students and travellers.',
    price: 10000,
    originalPrice: 20000,
    category: 'power-banks',
    images: [
      'https://images.unsplash.com/photo-1609592806596-c72e67dbc20e?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1585338447937-7082f8fc763d?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.8,
    reviews: 10,
    reviewList: [
      { id: 1, author: 'Chukwuemeka O.', avatar: 'CO', rating: 5, date: '2024-12-10', comment: 'Excellent power bank! Charges my phone super fast and the battery life is amazing.' },
      { id: 2, author: 'Fatima A.', avatar: 'FA', rating: 5, date: '2024-12-05', comment: 'Very slim and portable. Great value for the price.' },
      { id: 3, author: 'Tunde B.', avatar: 'TB', rating: 4, date: '2024-11-28', comment: 'Good product. Delivery was fast too.' },
    ],
    inStock: true,
    featured: true,
    specifications: {
      'Capacity': '20,000mAh',
      'Output Ports': 'USB-A × 2 (5V/2.4A each)',
      'Input': 'Micro-USB (5V/2A)',
      'Fast Charging': 'Yes — 12W per port',
      'Form Factor': 'Ultra Slim (14mm)',
      'LED Indicator': '4-level battery display',
      'Simultaneous Charging': 'Yes — 2 devices',
      'Weight': '360g',
    },
    whatsInTheBox: [
      'EASYPIE 20000mAh Power Bank',
      'Micro-USB Charging Cable',
      'User Manual',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '6 Months Provic Warranty',
    deliveryTime: '1-2 business days (Lagos), 3-4 days (Outside Lagos)',
  },
 
  {
    id: 'FOOMEE-AF32',
    name: 'FOOMEE AF32 Power Bank 30000mAh',
    description: 'FOOMEE AF32 30000mAh 22.5W Type-C Fast Charging Power Bank with Built-in Strap and LED Flashlight. The only power bank you\'ll ever need.',
    price: 30000,
    originalPrice: 40000,
    category: 'power-banks',
    images: [
      'https://images.unsplash.com/photo-1585338447937-7082f8fc763d?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1609592806596-c72e67dbc20e?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.8,
    reviews: 10,
    reviewList: [
      { id: 1, author: 'Victor O.', avatar: 'VO', rating: 5, date: '2024-12-10', comment: 'The 30000mAh capacity is massive. Charged my phone 6 times from zero. The flashlight is a great bonus.' },
      { id: 2, author: 'Kehinde A.', avatar: 'KA', rating: 5, date: '2024-12-05', comment: '22.5W fast charging is noticeably quicker than my old power bank. The strap makes it easy to carry.' },
      { id: 3, author: 'Babatunde B.', avatar: 'BB', rating: 4, date: '2024-11-28', comment: 'Very durable build. The Type-C port is convenient. Good product overall.' },
    ],
    inStock: true,
    featured: true,
    specifications: {
      'Capacity': '30,000mAh',
      'Max Output': '22.5W Fast Charging (Type-C)',
      'Output Ports': 'USB-A × 2, USB-C × 1',
      'Input': 'USB-C (22.5W)',
      'Extra Features': 'LED Flashlight, Built-in Carry Strap',
      'LED Indicator': 'Digital battery percentage display',
      'Simultaneous Charging': 'Yes — 3 devices',
      'Weight': '580g',
    },
    whatsInTheBox: [
      'FOOMEE AF32 30000mAh Power Bank',
      'USB-C to USB-C Cable',
      'User Manual',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '6 Months Provic Warranty',
    deliveryTime: '1-2 business days (Lagos), 3-4 days (Outside Lagos)',
  },
 
  {
    id: 'baseus-65w-pb',
    name: 'Baseus 65W Power Bank 20000mAh',
    description: 'Baseus 65W Power Bank — Charges your laptop, phone, and tablet simultaneously. Supports 65W output for rapid laptop charging. The traveller\'s best companion.',
    price: 48000,
    originalPrice: 60000,
    category: 'power-banks',
    images: [
      'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1609592806596-c72e67dbc20e?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.7,
    reviews: 89,
    reviewList: [
      { id: 1, author: 'Gbenga L.', avatar: 'GL', rating: 5, date: '2024-12-09', comment: 'This actually charges my MacBook Air! The 65W output is real and works perfectly.' },
      { id: 2, author: 'Blessing T.', avatar: 'BT', rating: 5, date: '2024-12-01', comment: 'I can charge my phone, tablet, and earbuds all at the same time. Amazing product.' },
      { id: 3, author: 'Musa W.', avatar: 'MW', rating: 4, date: '2024-11-21', comment: 'Great build quality. The digital display is accurate. A bit heavy but worth it for the capacity.' },
    ],
    inStock: true,
    featured: false,
    specifications: {
      'Capacity': '20,000mAh',
      'Max Output (USB-C 1)': '65W PD (Laptop charging)',
      'Max Output (USB-C 2)': '18W PD',
      'Max Output (USB-A)': '22.5W SCP',
      'Total Simultaneous Output': '65W',
      'Input': 'USB-C (65W)',
      'Recharge Time': '~2.5 hours (65W input)',
      'Digital Display': 'Yes — percentage & wattage',
      'Weight': '420g',
    },
    whatsInTheBox: [
      'Baseus 65W Power Bank',
      'USB-C to USB-C 100W Cable',
      'User Manual',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '1 Year Baseus Warranty',
    deliveryTime: '1-2 business days (Lagos), 3-5 days (Outside Lagos)',
  },
 
  {
    id: 'anker-powercore-10000',
    name: 'Anker PowerCore 10000 Slim',
    description: 'Anker PowerCore 10000 Slim — Ultra-compact 10000mAh power bank with PowerIQ and VoltageBoost for the fastest possible charge. Fits in any pocket.',
    price: 22000,
    originalPrice: 28000,
    category: 'power-banks',
    images: [
      'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1585338447937-7082f8fc763d?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1609592806596-c72e67dbc20e?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.8,
    reviews: 412,
    reviewList: [
      { id: 1, author: 'Ada S.', avatar: 'AS', rating: 5, date: '2024-12-08', comment: 'So small and light! I forget it\'s in my bag. Charges my iPhone from 0% in under 2 hours.' },
      { id: 2, author: 'Temi O.', avatar: 'TO', rating: 5, date: '2024-11-30', comment: 'Anker quality as always. This is my third Anker power bank and it never disappoints.' },
      { id: 3, author: 'Bayo R.', avatar: 'BR', rating: 4, date: '2024-11-19', comment: 'Great pocket power bank. PowerIQ detects my device perfectly and charges at max speed.' },
    ],
    inStock: true,
    featured: false,
    specifications: {
      'Capacity': '10,000mAh',
      'Output': 'USB-A × 2 (PowerIQ + VoltageBoost)',
      'Max Output': '12W per port',
      'Input': 'Micro-USB (18W)',
      'Size': 'Credit card footprint (slim)',
      'Technology': 'Anker PowerIQ, VoltageBoost',
      'Weight': '180g',
      'LED Indicator': '4 dots',
    },
    whatsInTheBox: [
      'Anker PowerCore 10000 Slim',
      'Micro-USB Charging Cable',
      'Travel Pouch',
      'Welcome Card',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '18 Months Anker Warranty',
    deliveryTime: '1-2 business days (Lagos), 3-4 days (Outside Lagos)',
  },
 
  // ══════════════════════════════════════════
  // SMARTWATCHES
  // ══════════════════════════════════════════
  {
    id: 'apple-watch-9',
    name: 'Apple Watch Series 9',
    description: 'Apple Watch Series 9 with S9 chip, double-tap gesture, precision finding for iPhone, and 2000-nit always-on display. The most powerful Apple Watch ever.',
    price: 350000,
    originalPrice: 380000,
    category: 'smartwatches',
    images: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.9,
    reviews: 198,
    reviewList: [
      { id: 1, author: 'Adaeze C.', avatar: 'AC', rating: 5, date: '2024-12-09', comment: 'The double tap gesture is so useful. Feels like the future on your wrist. Love this watch.' },
      { id: 2, author: 'Rotimi K.', avatar: 'RK', rating: 5, date: '2024-12-03', comment: 'Health tracking is incredibly accurate. ECG and blood oxygen features are genuinely useful.' },
      { id: 3, author: 'Sola W.', avatar: 'SW', rating: 5, date: '2024-11-25', comment: 'Always-On display looks gorgeous. Battery easily lasts through the day. 10 out of 10.' },
    ],
    inStock: true,
    featured: true,
    specifications: {
      'Chip': 'Apple S9 SiP (4-core Neural Engine)',
      'Display': 'Always-On Retina LTPO OLED, 2000 nits',
      'Case Sizes': '41mm / 45mm Aluminium',
      'Battery': 'Up to 18 hours (36hr Low Power Mode)',
      'Gesture': 'Double Tap',
      'Sensors': 'Blood Oxygen, ECG, Skin Temperature, Crash Detection',
      'GPS': 'Precision dual-band L1/L5',
      'Water Resistance': '50m WR',
      'Connectivity': 'Bluetooth 5.3, Wi-Fi 802.11b/g/n, UWB',
    },
    whatsInTheBox: [
      'Apple Watch Series 9 (41mm or 45mm)',
      'Sport Band (S/M and M/L)',
      'Magnetic Fast Charger to USB-C Cable (1m)',
      'Documentation',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '1 Year Apple International Warranty',
    deliveryTime: '2-3 business days (Lagos), 4-6 days (Outside Lagos)',
  },
 
  {
    id: 'apple-watch-ultra-2',
    name: 'Apple Watch Ultra 2',
    description: 'Apple Watch Ultra 2 — The most rugged and capable Apple Watch with a 49mm titanium case, 3000-nit display, 60-hour battery, and dual-frequency GPS for extreme adventures.',
    price: 580000,
    originalPrice: 620000,
    category: 'smartwatches',
    images: [
      'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.9,
    reviews: 87,
    reviewList: [
      { id: 1, author: 'Dayo H.', avatar: 'DH', rating: 5, date: '2024-12-08', comment: 'Built like a tank. Took it hiking and it handled everything perfectly. 60-hour battery is real.' },
      { id: 2, author: 'Ifeanyi L.', avatar: 'IL', rating: 5, date: '2024-11-28', comment: 'The 3000 nit display is readable even in direct sunlight. Dual GPS is extremely accurate.' },
      { id: 3, author: 'Zainab Q.', avatar: 'ZQ', rating: 4, date: '2024-11-18', comment: 'Premium product at a premium price. The titanium case feels incredible on the wrist.' },
    ],
    inStock: true,
    featured: true,
    specifications: {
      'Chip': 'Apple S9 SiP',
      'Case': '49mm Titanium (Grade 5)',
      'Display': 'Always-On Retina LTPO2, 3000 nits',
      'Battery': 'Up to 60 hours (Low Power Mode)',
      'GPS': 'Precision dual-band L1 + L5',
      'Depth': 'Depth gauge, Water temp sensor, EN13319',
      'Siren': '86dB emergency siren',
      'Sensors': 'Blood Oxygen, ECG, Crash & Fall Detection',
      'Connectivity': 'Bluetooth 5.3, LTE/UMTS, UWB, Wi-Fi 802.11b/g/n/ax',
    },
    whatsInTheBox: [
      'Apple Watch Ultra 2 (49mm Titanium)',
      'Alpine Loop Band or Ocean Band (choice)',
      'Magnetic Fast Charger to USB-C Cable (1m)',
      'USB-C Power Adapter',
      'Documentation',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '1 Year Apple International Warranty',
    deliveryTime: '2-3 business days (Lagos), 5-7 days (Outside Lagos)',
  },
 
  {
    id: 'samsung-galaxy-watch-6',
    name: 'Samsung Galaxy Watch 6 Classic',
    description: 'Samsung Galaxy Watch 6 Classic with rotating bezel, Advanced Sleep Coaching, BIA sensor for body composition, and 3-day battery. The premium Android smartwatch.',
    price: 195000,
    originalPrice: 230000,
    category: 'smartwatches',
    images: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.7,
    reviews: 143,
    reviewList: [
      { id: 1, author: 'Emeka P.', avatar: 'EP', rating: 5, date: '2024-12-10', comment: 'The rotating bezel is a joy to use. Feels so premium and the battery lasts 3 full days.' },
      { id: 2, author: 'Shade F.', avatar: 'SF', rating: 4, date: '2024-12-02', comment: 'Body composition tracking is scarily accurate. Great companion for my Samsung phone.' },
      { id: 3, author: 'Lekan G.', avatar: 'LG', rating: 5, date: '2024-11-24', comment: 'Best Android smartwatch hands down. The display is beautiful and the health features are excellent.' },
    ],
    inStock: true,
    featured: false,
    specifications: {
      'Case Sizes': '43mm / 47mm Stainless Steel',
      'Display': 'Super AMOLED Sapphire Crystal',
      'Bezel': 'Physical Rotating Bezel',
      'Battery': 'Up to 3 days (40-hour)',
      'Health': 'BIA Body Composition, ECG, Blood Pressure, SpO2',
      'Sleep': 'Advanced Sleep Coaching with AI',
      'GPS': 'GPS + GLONASS + BeiDou + Galileo',
      'Water Resistance': '5ATM + IP68',
      'Connectivity': 'Bluetooth 5.3, Wi-Fi, NFC',
    },
    whatsInTheBox: [
      'Samsung Galaxy Watch 6 Classic',
      'Classic Leather Band',
      'Wireless Charging Puck',
      'USB-C Cable',
      'Documentation',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '1 Year Samsung Warranty',
    deliveryTime: '2-3 business days (Lagos), 4-6 days (Outside Lagos)',
  },
 
  {
    id: 'garmin-venu-3',
    name: 'Garmin Venu 3',
    description: 'Garmin Venu 3 — AMOLED GPS smartwatch with up to 14-day battery, wheelchair mode, nap detection, and over 30 sports apps. Fitness tracking meets luxury design.',
    price: 310000,
    originalPrice: 370000,
    category: 'smartwatches',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.8,
    reviews: 76,
    reviewList: [
      { id: 1, author: 'Taiwo K.', avatar: 'TK', rating: 5, date: '2024-12-11', comment: 'The 14-day battery is no joke. I went on a 10-day trip without a charger. Garmin never lies.' },
      { id: 2, author: 'Ngozi P.', avatar: 'NP', rating: 5, date: '2024-12-03', comment: 'AMOLED display is gorgeous and the workout tracking is the most accurate I\'ve ever used.' },
      { id: 3, author: 'Kunle T.', avatar: 'KT', rating: 4, date: '2024-11-23', comment: 'Best fitness watch for serious athletes. Over 30 sports profiles and GPS accuracy is excellent.' },
    ],
    inStock: true,
    featured: false,
    specifications: {
      'Display': '1.4" AMOLED (454×454 px)',
      'Battery (Smartwatch)': 'Up to 14 days',
      'Battery (GPS Mode)': 'Up to 20 hours',
      'GPS': 'Multi-GNSS (GPS, GLONASS, Galileo)',
      'Health': 'SpO2, Pulse Ox, Stress, HRV Status, Body Battery',
      'Sleep': 'Advanced Sleep + Nap Detection',
      'Sports': '30+ built-in activity profiles',
      'Water Resistance': '5ATM',
      'Connectivity': 'Bluetooth, ANT+, Wi-Fi',
    },
    whatsInTheBox: [
      'Garmin Venu 3 Smartwatch',
      'Silicone Sport Band',
      'Garmin Charging Cable',
      'Documentation',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '1 Year Garmin Warranty',
    deliveryTime: '3-5 business days (Lagos), 7-10 days (Outside Lagos)',
  },
 
  // ══════════════════════════════════════════
  // ACCESSORIES
  // ══════════════════════════════════════════
  {
    id: 'anker-12in1-hub',
    name: 'Anker 12-in-1 USB-C Hub',
    description: 'Anker 12-in-1 USB-C Hub with dual 4K HDMI, Gigabit Ethernet, SD/microSD slots, and 100W pass-through charging. The ultimate docking station for any laptop.',
    price: 65000,
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.7,
    reviews: 234,
    reviewList: [
      { id: 1, author: 'Kunle B.', avatar: 'KB', rating: 5, date: '2024-12-07', comment: 'Perfect for my MacBook setup. Dual HDMI lets me run two external monitors. Works flawlessly.' },
      { id: 2, author: 'Nneka S.', avatar: 'NS', rating: 5, date: '2024-11-27', comment: '100W pass-through charges my laptop at full speed while using all other ports simultaneously.' },
      { id: 3, author: 'Emeka T.', avatar: 'ET', rating: 4, date: '2024-11-16', comment: 'Reliable and compact. All 12 ports actually work. Great build quality from Anker as always.' },
    ],
    inStock: true,
    featured: true,
    specifications: {
      'Total Ports': '12',
      'Video Output': 'Dual HDMI 2.0 (4K@60Hz each)',
      'USB Data': 'USB-A 3.0 × 3 (5Gbps), USB-A 2.0 × 1',
      'Power Delivery': '100W USB-C PD Pass-through',
      'Card Readers': 'SD 3.0 + microSD 3.0',
      'Network': 'Gigabit Ethernet (RJ45)',
      'Audio': '3.5mm combo jack',
      'Cable Length': '25cm (built-in)',
      'Compatible': 'Windows, macOS, ChromeOS',
    },
    whatsInTheBox: [
      'Anker 12-in-1 USB-C Hub',
      'Quick Setup Guide',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '18 Months Anker Warranty',
    deliveryTime: '1-2 business days (Lagos), 3-5 days (Outside Lagos)',
  },
 
  {
    id: 'rain-design-mstand',
    name: 'Rain Design mStand Laptop Stand',
    description: 'Rain Design mStand — Elegant single-column aluminium laptop stand that elevates your screen to eye level. Built-in cable management and non-slip base.',
    price: 45000,
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.8,
    reviews: 167,
    reviewList: [
      { id: 1, author: 'Bisi A.', avatar: 'BA', rating: 5, date: '2024-12-06', comment: 'My neck pain disappeared after a week of using this. Perfect height and rock solid stability.' },
      { id: 2, author: 'Uche M.', avatar: 'UM', rating: 5, date: '2024-11-26', comment: 'Beautiful aluminium finish that matches my MacBook perfectly. The cable management is a nice touch.' },
      { id: 3, author: 'Grace O.', avatar: 'GO', rating: 4, date: '2024-11-14', comment: 'Sturdy and elegant. My laptop sits very securely. Great addition to any desk setup.' },
    ],
    inStock: true,
    featured: true,
    specifications: {
      'Material': 'Anodised Aluminium',
      'Elevation Height': '15cm / 5.9"',
      'Cable Management': 'Built-in routing channel',
      'Base': 'Non-slip rubber',
      'Laptop Cradle': 'Rubber-padded (no scratch)',
      'Compatible': 'All laptops 11"–17"',
      'Weight': '1.4kg',
      'Dimensions': '24.1 × 23.6 × 15cm',
    },
    whatsInTheBox: [
      'Rain Design mStand',
      'Cleaning Cloth',
      'Product Guide',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '5 Years Rain Design Warranty',
    deliveryTime: '2-3 business days (Lagos), 4-6 days (Outside Lagos)',
  },
 
  {
    id: 'logitech-mx-master-3s',
    name: 'Logitech MX Master 3S Mouse',
    description: 'Logitech MX Master 3S — 8000 DPI optical sensor, MagSpeed electromagnetic scrolling, near-silent clicks, and 7 buttons. Works on any surface including glass.',
    price: 75000,
    originalPrice: 90000,
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.9,
    reviews: 298,
    reviewList: [
      { id: 1, author: 'Oluwaseun B.', avatar: 'OB', rating: 5, date: '2024-12-10', comment: 'MagSpeed scrolling is absolutely insane. I scroll through entire documents in a second. Game changer.' },
      { id: 2, author: 'Chioma T.', avatar: 'CT', rating: 5, date: '2024-12-02', comment: 'Works on my glass desk! The 8000 DPI sensor is precise for Figma and photo editing.' },
      { id: 3, author: 'Biodun S.', avatar: 'BS', rating: 5, date: '2024-11-23', comment: 'The silent clicks are so satisfying in meetings. Best productivity mouse I\'ve ever used.' },
    ],
    inStock: true,
    featured: false,
    specifications: {
      'Sensor': 'Darkfield 8000 DPI (any surface + glass)',
      'Scrolling': 'MagSpeed Electromagnetic (1000 lines/sec)',
      'Buttons': '7 programmable',
      'Clicks': 'Near-silent (90% quieter)',
      'Connectivity': 'Bluetooth, Logi Bolt USB',
      'Multi-device': 'Easy Switch up to 3 devices',
      'Battery': 'Up to 70 days, USB-C charging',
      'Software': 'Logi Options+ (full customisation)',
    },
    whatsInTheBox: [
      'Logitech MX Master 3S Mouse',
      'USB-C to USB-A Charging Cable',
      'Logi Bolt USB Receiver',
      'Documentation',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '2 Years Logitech Warranty',
    deliveryTime: '1-2 business days (Lagos), 3-4 days (Outside Lagos)',
  },
 
  {
    id: 'samsung-t7-ssd',
    name: 'Samsung T7 Portable SSD 1TB',
    description: 'Samsung T7 Portable SSD — 1TB of blazing fast NVMe storage in a pocket-sized metal body. Up to 1050MB/s read speed. Perfect for photographers, video editors, and students.',
    price: 85000,
    originalPrice: 105000,
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=600&fit=crop&q=80',
    ],
    rating: 4.8,
    reviews: 341,
    reviewList: [
      { id: 1, author: 'Victor A.', avatar: 'VA', rating: 5, date: '2024-12-09', comment: '1050MB/s is real. I transferred 50GB of footage in under a minute. Incredible.' },
      { id: 2, author: 'Adunola F.', avatar: 'AF', rating: 5, date: '2024-12-01', comment: 'So compact and light. Fits in my pocket. Works perfectly with my MacBook and Windows laptop.' },
      { id: 3, author: 'Tola W.', avatar: 'TW', rating: 4, date: '2024-11-20', comment: 'Great SSD. Build quality is solid metal. The included cables cover both USB-C and USB-A.' },
    ],
    inStock: true,
    featured: false,
    specifications: {
      'Capacity': '1TB',
      'Read Speed': 'Up to 1,050MB/s',
      'Write Speed': 'Up to 1,000MB/s',
      'Interface': 'USB 3.2 Gen 2 (10Gbps)',
      'Connector': 'USB-C',
      'Case Material': 'Aluminium (drop resistant up to 2m)',
      'Encryption': 'AES 256-bit (Password protected)',
      'Compatibility': 'USB-C & USB-A (cables included)',
      'Dimensions': '85 × 57 × 8mm, 58g',
    },
    whatsInTheBox: [
      'Samsung T7 Portable SSD 1TB',
      'USB-C to USB-C Cable (40cm)',
      'USB-C to USB-A Cable (40cm)',
      'User Manual',
      'Provic Technologies Sticker (Free Gift) 🎁',
    ],
    freeGift: 'Provic Technologies Sticker',
    warranty: '3 Years Samsung Warranty',
    deliveryTime: '1-2 business days (Lagos), 3-5 days (Outside Lagos)',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Adebayo Johnson',
    role: 'Software Developer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    content: 'Provic Technologies delivered my MacBook Pro in just 2 days! The packaging was premium and the laptop was exactly as described. Best tech vendor in Ibadan.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Chioma Okonkwo',
    role: 'UI/UX Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    content: 'I was skeptical at first, but Provic exceeded my expectations. The customer support team helped me choose the perfect keyboard for my design work.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emmanuel Okafor',
    role: 'Computer Science Student',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    content: 'As a student, budget is tight. Provic helped me find quality earbuds at an affordable price. The installment payment option was a lifesaver!',
    rating: 5,
  },
  {
    id: '4',
    name: 'Blessing Adekunle',
    role: 'Content Creator',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    content: 'My webcam and ring light from Provic Technologies elevated my content quality significantly. Fast delivery to Abuja and excellent follow-up service.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Tunde Bakare',
    role: 'Startup Founder',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    content: 'Provic set up our entire office with laptops and accessories. Professional service, bulk discounts, and they even provided tech consultation. Highly recommend!',
    rating: 5,
  },
]

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How long does delivery take?',
    answer: 'We offer fast delivery across Nigeria. Lagos deliveries typically take 1-2 business days, while deliveries to other major cities take 3-5 business days. Remote areas may take up to 7 business days.',
    category: 'delivery',
  },
  {
    id: '2',
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers, card payments (Visa, Mastercard), mobile money, and cash on delivery in Lagos. We also offer installment payment plans for purchases above N100,000.',
    category: 'payment',
  },
  {
    id: '3',
    question: 'Do your products come with warranty?',
    answer: 'Yes! All our products come with manufacturer warranty. The warranty period varies by product and brand, typically ranging from 6 months to 3 years. We also offer extended warranty options.',
    category: 'warranty',
  },
  {
    id: '4',
    question: 'What is your return policy?',
    answer: 'We offer a 7-day return policy for unopened products and a 14-day exchange policy for defective items. Products must be in original packaging with all accessories included.',
    category: 'refunds',
  },
  {
    id: '5',
    question: 'Are your products original and authentic?',
    answer: 'Absolutely! We only source from authorized distributors and verified vendors. All our products are 100% authentic with valid serial numbers that can be verified with manufacturers.',
    category: 'authenticity',
  },
  {
    id: '6',
    question: 'How can I track my order?',
    answer: 'Once your order is shipped, you will receive a tracking number via SMS and email. You can track your order through our website or WhatsApp. Our team also provides proactive updates.',
    category: 'tracking',
  },
  {
    id: '7',
    question: 'Do you offer corporate or bulk discounts?',
    answer: 'Yes! We offer special pricing for bulk orders and corporate clients. Contact our sales team for customized quotes and dedicated account management for your organization.',
    category: 'payment',
  },
  {
    id: '8',
    question: 'Can you source specific products not listed?',
    answer: 'Absolutely! Our device sourcing service can help you find specific gadgets not in our catalog. Just tell us what you need, and we will source it from trusted suppliers worldwide.',
    category: 'delivery',
  },
]

export const services: Service[] = [
  {
    id: '1',
    title: 'Gadget Sales',
    description: 'Premium tech gadgets sourced from trusted vendors worldwide. Laptops, earbuds, keyboards, smartwatches, and more.',
    icon: 'ShoppingBag',
    features: [
      'Authentic products only',
      'Competitive pricing',
      'Multiple payment options',
      'Fast nationwide delivery',
    ],
  },
  {
    id: '2',
    title: 'Device Sourcing',
    description: 'Can\'t find what you need? We source specific gadgets and tech products from verified global suppliers.',
    icon: 'Search',
    features: [
      'Global supplier network',
      'Custom specifications',
      'Competitive quotes',
      'Quality assurance',
    ],
  },
  {
    id: '3',
    title: 'Tech Consultation',
    description: 'Expert advice to help you choose the right tech for your needs, budget, and use case.',
    icon: 'MessageCircle',
    features: [
      'Personalized recommendations',
      'Budget optimization',
      'Future-proof guidance',
      'Comparison analysis',
    ],
  },
  {
    id: '4',
    title: 'Workspace Setup Guidance',
    description: 'Complete guidance for setting up your ideal home office or creative workspace.',
    icon: 'Monitor',
    features: [
      'Ergonomic setup advice',
      'Equipment recommendations',
      'Cable management tips',
      'Productivity optimization',
    ],
  },
  {
    id: '5',
    title: 'Student Tech Assistance',
    description: 'Special support for students with budget-friendly options and educational discounts.',
    icon: 'GraduationCap',
    features: [
      'Student discounts',
      'Installment plans',
      'Budget recommendations',
      'Academic tool advice',
    ],
  },
]

export const trustedBrands = [
  'Berrytech',
  'Logitech',
  'Stofile',
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(product => product.category === categoryId)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured)
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id)
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit)
}
