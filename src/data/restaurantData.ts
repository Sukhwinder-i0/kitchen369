export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'mains' | 'chinese' | 'pizza' | 'breads' | 'beverages';
  price: number;
  description: string;
  image: string;
  isVeg: boolean;
  isBestseller?: boolean;
  isChefSpecial?: boolean;
  spiceLevel?: 1 | 2 | 3;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  source: string;
}

export const RESTAURANT_INFO = {
  name: "Farmers Kitchen",
  locationTagline: "Dine-in: Surajpur, Greater Noida | Express Delivery: Sector 73, Noida",
  phone: "+91 97171 76252",
  phoneRaw: "9717176252",
  instagram: "@farmerskitchennoida",
  cuisines: ["North Indian", "Chinese", "Tandoor"],
  primaryColor: "#5C1600",
  hours: "11:00 AM - 11:30 PM (Mon - Sun)",
  dineInAddress: "Surajpur, Greater Noida, UP",
  deliveryAddress: "Sector 73, Noida, UP",
  zomatoUrl: "https://www.zomato.com/noida/farmers-kitchen",
  swiggyUrl: "https://www.swiggy.com/restaurants/farmers-kitchen-sector-73-noida",
};

export const MENU_ITEMS: MenuItem[] = [
  // Starters & Kebabs
  {
    id: "st-1",
    name: "Farmers Special Paneer Malai Tikka",
    category: "starters",
    price: 340,
    description: "Cottage cheese marinated in rich cream, cashew paste, cardamom & char-grilled in tandoor.",
    image: "/images/pic1.png",
    isVeg: true,
    isBestseller: true,
    spiceLevel: 1
  },
  {
    id: "st-2",
    name: "Tandoori Chicken Angara",
    category: "starters",
    price: 420,
    description: "Succulent chicken marinated in hung curd, Kashmiri chilli & cooked over smoldering coals.",
    image: "/images/pic1.png",
    isVeg: false,
    isBestseller: true,
    spiceLevel: 3
  },
  {
    id: "st-3",
    name: "Dahi ke Kebab",
    category: "starters",
    price: 310,
    description: "Crispy outer shell filled with spiced hung curd, coriander, and subtle herbs.",
    image: "/images/pic7.png",
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 1
  },
  {
    id: "st-4",
    name: "Afghani Tangdi Kebab",
    category: "starters",
    price: 390,
    description: "Chicken drumsticks steeped in white marinade, cream, cheese and mild white pepper.",
    image: "/images/pic1.png",
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 1
  },

  // Mains (North Indian)
  {
    id: "mn-1",
    name: "Signature Dal Makhani",
    category: "mains",
    price: 320,
    description: "Slow-cooked black lentils simmered overnight with fresh butter, vine tomatoes & churned white cream.",
    image: "/images/pic6.png",
    isVeg: true,
    isBestseller: true,
    spiceLevel: 1
  },
  {
    id: "mn-2",
    name: "Farmers Shahi Paneer",
    category: "mains",
    price: 360,
    description: "Cubes of fresh paneer cooked in smooth aromatic gravy of melon seeds, cashews & butter.",
    image: "/images/pic6.png",
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 1
  },
  {
    id: "mn-3",
    name: "Butter Chicken (Boneless)",
    category: "mains",
    price: 460,
    description: "Tandoori chicken tikka simmered in silky satin tomato gravy infused with fenugreek.",
    image: "/images/pic6.png",
    isVeg: false,
    isBestseller: true,
    spiceLevel: 2
  },
  {
    id: "mn-4",
    name: "Kadhai Paneer Special",
    category: "mains",
    price: 350,
    description: "Paneer tossed with bell peppers, onion petals and crushed roasted spices.",
    image: "/images/pic7.png",
    isVeg: true,
    spiceLevel: 2
  },
  {
    id: "mn-5",
    name: "Mutton Rogan Josh",
    category: "mains",
    price: 520,
    description: "Tender goat meat braised with Kashmiri red chillies, alkanet root & aromatic spices.",
    image: "/images/pic6.png",
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 3
  },

  // Chinese Wok
  {
    id: "cn-1",
    name: "Chilli Paneer Gravy",
    category: "chinese",
    price: 330,
    description: "Golden paneer cubes tossed with capsicum, green chillies & dark soya reduction.",
    image: "/images/pic7.png",
    isVeg: true,
    spiceLevel: 2
  },
  {
    id: "cn-2",
    name: "Chicken Hakka Noodles",
    category: "chinese",
    price: 290,
    description: "Wok-tossed noodles with shredded chicken, julienned veggies & sesame drizzle.",
    image: "/images/pic2.png",
    isVeg: false,
    isBestseller: true,
    spiceLevel: 2
  },
  {
    id: "cn-3",
    name: "Crispy Vegetable Manchurian",
    category: "chinese",
    price: 280,
    description: "Fried vegetable balls in spicy coriander & garlic scallion sauce.",
    image: "/images/pic7.png",
    isVeg: true,
    spiceLevel: 2
  },

  // Italian & Artisan Pizza
  {
    id: "pz-1",
    name: "Farmhouse Gourmet Pizza",
    category: "pizza",
    price: 420,
    description: "Thin crust artisan pizza topped with bell peppers, olives, corn, mushrooms & mozzarella.",
    image: "/images/pic7.png",
    isVeg: true,
    isBestseller: true,
    spiceLevel: 1
  },
  {
    id: "pz-2",
    name: "Creamy Penne Arrabbiata Pasta",
    category: "pizza",
    price: 350,
    description: "Penne pasta in rich spicy tomato cream sauce served with herb toasted garlic bread.",
    image: "/images/pic2.png",
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 2
  },

  // Breads
  {
    id: "br-1",
    name: "Garlic Butter Naan",
    category: "breads",
    price: 75,
    description: "Leavened refined flour bread brushed with melted butter and roasted minced garlic.",
    image: "/images/pic7.png",
    isVeg: true
  },
  {
    id: "br-2",
    name: "Cheese Stuffed Naan",
    category: "breads",
    price: 110,
    description: "Fluffy naan stuffed with molten mozzarella cheese & green herbs.",
    image: "/images/pic7.png",
    isVeg: true
  },
  {
    id: "br-3",
    name: "Lachha Paratha",
    category: "breads",
    price: 65,
    description: "Multi-layered whole wheat tandoori flatbread with crispy folds.",
    image: "/images/pic7.png",
    isVeg: true
  }
];

export const GALLERY_IMAGES = [
  { url: "/images/pic4.png", title: "Rooftop Terrace Seating", location: "Surajpur Dine-In", subtitle: "Starlight outdoor dining under ambient festoon lights" },
  { url: "/images/pic5.png", title: "Cane Lounge Interior", location: "Surajpur Fine Dining", subtitle: "Warm ambient indoor lighting with handcrafted cane furniture" },
  { url: "/images/pic3.png", title: "VIP Hospitality", location: "Surajpur Outlet", subtitle: "Dedicated servers ensuring royal guest hospitality" },
  { url: "/images/pic7.png", title: "Grand Culinary Feast", location: "Kitchen Specialty", subtitle: "Full spread of North Indian, Tandoor & Artisan Pizzas" },
  { url: "/images/pic6.png", title: "Rich Handi Curries", location: "Chef Special", subtitle: "Authentic Dal Makhani & Paneer Butter Gravy" },
  { url: "/images/pic1.png", title: "Char-Grilled Kebabs", location: "Tandoor Station", subtitle: "Masterfully roasted Tandoori kebabs with mint dip" },
  { url: "/images/pic2.png", title: "Gourmet Pasta & Breads", location: "Continental Fusion", subtitle: "Penne Arrabbiata served with crispy garlic bread" }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Rohan Verma",
    rating: 5,
    date: "1 week ago",
    comment: "The rooftop setup in Surajpur is fantastic! Amazing Dal Makhani and Paneer Tikka. Best family dinner spot in Greater Noida.",
    source: "Google Reviews"
  },
  {
    id: "r2",
    name: "Pooja Sharma",
    rating: 5,
    date: "2 weeks ago",
    comment: "Ordered delivery to Sector 73. Food arrived piping hot within 30 minutes! The garlic naan and boneless butter chicken were perfection.",
    source: "Zomato"
  },
  {
    id: "r3",
    name: "Amitabh Roy",
    rating: 5,
    date: "3 weeks ago",
    comment: "Celebrated my wife's birthday on the terrace. Staff service was top notch and hospitality was warm. Highly recommend the tandoori platter!",
    source: "Swiggy"
  }
];

export const PITCH_SOLUTIONS = [
  {
    id: "sol-1",
    title: "Direct WhatsApp Delivery Engine (0% Commission)",
    tagline: "Save ₹40,000 - ₹1,20,000 Monthly on Swiggy/Zomato Fees",
    description: "Instead of giving away 25-30% of every delivery order to aggregators, launch direct WhatsApp ordering with automated cart & UPI links. Customers order directly from your website menu!",
    icon: "MessageSquare",
    highlight: "Saves ~₹300 per ₹1000 order"
  },
  {
    id: "sol-2",
    title: "QR Code Smart Table Ordering",
    tagline: "Instant Mobile Ordering at Surajpur Rooftop Tables",
    description: "Place custom QR stands on each table. Guests scan the QR code to view the live digital menu, add items, and place orders directly to the kitchen display.",
    icon: "QrCode",
    highlight: "Increases table turnover by 35%"
  },
  {
    id: "sol-3",
    title: "Automated Catering & Bulk Order Calculator",
    tagline: "Capture High-Value Corporate & Birthday Bookings",
    description: "An interactive party menu builder on the website that lets corporate clients & event planners calculate per-plate pricing and submit instant party inquiries.",
    icon: "Calculator",
    highlight: "Converts 4x more event leads"
  },
  {
    id: "sol-4",
    title: "Google Review & Loyalty Booster",
    tagline: "Turn Happy Diners into 5-Star Online Reviews",
    description: "Automated post-dining SMS/WhatsApp message offering a 10% discount on their next visit when guests submit a Google review.",
    icon: "Star",
    highlight: "Boosts Google rating to 4.9★"
  }
];
