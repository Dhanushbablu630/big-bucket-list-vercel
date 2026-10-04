export const trips = [
  {
    name: "Coorg & the Western Ghats", slug: "coorg-western-ghats", tag: "HILLS · COFFEE · WATERFALLS", mood: "GREEN ON EVERY SIDE",
    images: ["coorg-wayanad.jpg", "coorg-chikmagalur.jpg", "wayanad-hills.jpg", "wayanad-bandipur.jpg"],
    alt: "Misty Western Ghats hills and coffee country", blurb: "Choose a coffee-country break, a Wayanad nature escape or a longer hill circuit across Karnataka and Kerala.",
    detail: "Coffee estates · hill views · forest", session: "Weekend and multi-day options",
    packages: ["Coorg & Wayanad", "Coorg & Chikmagalur", "Wayanad Hills Escape", "Wayanad & Bandipur"],
    nearby: "Mysore, Kabini and Bandipur can be considered as longer regional extensions; the route depends on the selected package."
  },
  {
    name: "Ooty & the Nilgiris", slug: "ooty-nilgiris", tag: "HILLS · TEA COUNTRY · HERITAGE", mood: "NILGIRI DAYDREAMS",
    images: ["ooty.webp", "coonoor.jpg", "mysore.jpg", "bandipur.jpg"],
    alt: "Ooty and Coonoor tea hills", blurb: "One Nilgiri collection with the Ooty–Coonoor hill break and the longer Ooty–Bandipur–Mysore circuit.",
    detail: "Tea gardens · viewpoints · heritage", session: "Weekend and multi-day options",
    packages: ["Ooty & Coonoor", "Ooty, Bandipur & Mysore"],
    nearby: "Coonoor is a nearby Nilgiri hill town. Mysore and Bandipur belong to the longer circuit rather than a short local add-on."
  },
  {
    name: "Gokarna & the Karnataka Coast", slug: "gokarna-karnataka-coast", tag: "COAST · WATERFALLS · ADVENTURE", mood: "SALT AIR, FULL HEART",
    images: ["dandeli-gokarna.jpg", "scuba.jpg", "jog-falls.jpg"],
    alt: "Karnataka coast and beach trails", blurb: "Compare coastal Gokarna breaks with the longer Dandeli, scuba or Jog Falls combinations.",
    detail: "Beach trails · river · waterfalls", session: "Weekend and multi-day options",
    packages: ["Gokarna & Dandeli", "Gokarna, Dandeli & Scuba", "Gokarna & Jog Falls"],
    nearby: "Murudeshwar and Vibhuti Falls are regional extensions. Dandeli and Jog Falls require extra travel, so they are shown as longer package options."
  },
  {
    name: "Kerala Highlights", slug: "kerala-highlights", tag: "HILLS · BACKWATERS · COAST", mood: "GOD’S OWN COUNTRY",
    images: ["kerala.jpg"], alt: "Kerala green hills and tropical backwaters", blurb: "A multi-stop Kerala escape combining hill-country scenery, backwater experiences and coastal time.",
    detail: "Munnar · Alleppey · Varkala", session: "Multi-day journey",
    packages: ["Kerala Highlights"], nearby: "The exact order and stops vary with the selected itinerary."
  },
  {
    name: "Pondicherry & the Coromandel Coast", slug: "pondicherry-coromandel-coast", tag: "COAST · CULTURE · BACKWATERS", mood: "A LITTLE FRENCH, A LOT OF SEA",
    images: ["pondicherry-street.jpg", "pichavaram.jpg"], alt: "Pondicherry streets and Pichavaram mangroves", blurb: "Pair Pondicherry’s heritage quarter and cafés with an optional Pichavaram mangrove outing.",
    detail: "French Quarter · Auroville · mangroves", session: "Weekend journey",
    packages: ["Pondicherry Coastal Escape", "Pondicherry & Pichavaram"], nearby: "Pichavaram is a separate excursion from Pondicherry; it is included as an extended coastal package option."
  },
  {
    name: "Goa Coast & Heritage", slug: "goa-coast-heritage", tag: "BEACHES · CULTURE · COAST", mood: "GOA, AT YOUR OWN PACE",
    images: ["goa.jpg", "goa1.jpg", "goachurch.jpg"], alt: "Goa coastline and historic church", blurb: "A relaxed Goa escape for beach time, local flavours and heritage lanes.",
    detail: "Coast · old-town heritage", session: "Multi-day journey",
    packages: ["Goa Coastal Escape"], nearby: "Trip plans can focus on North Goa, South Goa or heritage areas, depending on the selected package."
  },
  {
    name: "Vizag & Araku Valley", slug: "vizag-araku-valley", tag: "COAST · HILLS · SCENIC RAIL", mood: "WHERE THE HILLS MEET THE SEA",
    images: ["vizag.jpg", "vizag1.jpg", "vizag2.jpg", "araku.jpg", "araku1.jpg"], alt: "Visakhapatnam coast and Araku Valley", blurb: "Move from Visakhapatnam’s Bay of Bengal coastline to Araku’s valley scenery and viewpoints.",
    detail: "Vizag coast · Araku Valley", session: "Weekend and multi-day options",
    packages: ["Vizag & Araku Valley"], nearby: "Borra Caves and Araku viewpoints may be considered as itinerary stops; confirm inclusions for the chosen trip."
  },
  {
    name: "Ananthagiri Hills Camping", slug: "ananthagiri-hills-camping", tag: "CAMPING · BIKING · OUTDOORS", mood: "SLEEP UNDER THE STARS",
    images: ["ananthagiri.jpg", "ananthagiri1.jpeg"], alt: "Green Ananthagiri Hills near Hyderabad", blurb: "A close-to-home nature break with a hill ride, camping, bonfire and group activities.",
    detail: "Hills · camping · outdoor fun", session: "Weekend camping",
    packages: ["Ananthagiri Hills Camping"], nearby: "Vikarabad is the nearest town and common access point for the hills."
  },
  {
    name: "Himachal & the Himalayan Valleys", slug: "himachal-himalayan-valleys", tag: "HIMALAYAS · VALLEYS · ADVENTURE", mood: "TAKE THE LONG WAY NORTH",
    images: ["shimla.jpg", "shimla.png", "manali.png", "kasol.jpg", "jibhi.jpg", "manali.jpg"], alt: "Himachal hill towns and Himalayan valleys", blurb: "Several north-India itineraries gathered together, from classic hill towns to the Parvati and Tirthan valleys.",
    detail: "Shimla · Manali · Kasol · Jibhi", session: "Multi-day options",
    packages: ["Shimla, Manali & Kasol", "Manali, Kasol & Jibhi", "Himachal & Amritsar extended route"],
    nearby: "Kullu and the Parvati and Tirthan valleys are regional stops. Amritsar is a separate long-distance extension, not a nearby hill-town add-on."
  },
  {
    name: "Dudhsagar & Dandeli", slug: "dudhsagar-dandeli", tag: "WATERFALLS · RAINFOREST · RIVER", mood: "RIVER RUNS & RAINFOREST",
    images: ["western-ghats.png"], alt: "Lush Western Ghats forest", blurb: "A cross-region nature itinerary around Dudhsagar Falls and Dandeli forest and river experiences.",
    detail: "Waterfalls · forest · river", session: "Multi-day journey",
    packages: ["Dudhsagar & Dandeli"], nearby: "These stops span the Goa–Karnataka region and involve intercity travel; confirm the route and activities for the selected trip."
  },
  {
    name: "Amarnath Yatra", slug: "amarnath-yatra", tag: "PILGRIMAGE · KASHMIR HIMALAYAS", mood: "A PILGRIMAGE TO THE HOLY CAVE",
    images: ["amarnath-1.jpg", "amarnath-2.jpg"], alt: "The Amarnath holy cave in the Kashmir Himalayas", blurb: "A dedicated pilgrimage journey to the Shri Amarnathji Holy Cave in the Kashmir Himalayas.",
    detail: "Holy Cave · Pahalgam or Baltal route", session: "Pilgrimage journey",
    packages: ["Amarnath Yatra"], nearby: "The Shrine Board lists traditional access via Pahalgam and an alternate Baltal route. Registration, health and route requirements are set by the Shrine Board and must be checked for each yatra.", officialSource: "https://www.jksasb.nic.in/yatra.html", sourceLabel: "Shri Amarnathji Shrine Board route information"
  },
  {
    name: "Char Dham Yatra", slug: "char-dham-yatra", tag: "PILGRIMAGE · UTTARAKHAND", mood: "FOUR SACRED HIMALAYAN SHRINES",
    images: ["yamunotri.jpg", "gangathri1.jpg", "kedarnath_temple.jpg", "badrinath_temple.jpg"], alt: "Yamunotri, Gangotri, Kedarnath and Badrinath temples", blurb: "The Uttarakhand Char Dham circuit through Yamunotri, Gangotri, Kedarnath and Badrinath.",
    detail: "Yamunotri · Gangotri · Kedarnath · Badrinath", session: "Pilgrimage journey",
    packages: ["Char Dham Yatra", "Kedarnath & Badrinath · Do Dham", "Kedarnath focus", "Kedarnath, Tungnath & Rishikesh extended route"],
    templeDetails: ["Yamunotri — shrine dedicated to Goddess Yamuna", "Gangotri — shrine dedicated to Goddess Ganga", "Kedarnath — Lord Shiva shrine and one of the 12 Jyotirlingas", "Badrinath — Lord Vishnu shrine, also called Badrinarayan"],
    nearby: "The listed four shrines form Uttarakhand’s Char Dham. Do Dham is the Kedarnath–Badrinath pairing; Tungnath and Rishikesh are separate extensions, not part of the four-shrine circuit.", officialSource: "https://www.uttarakhandtourism.gov.in/experiences/char-dham", sourceLabel: "Uttarakhand Tourism — Char Dham"
  },
  {
    name: "Mathura & Vrindavan", slug: "mathura-vrindavan", tag: "CULTURE · TEMPLES · HERITAGE", mood: "FOLLOW THE STORIES OF KRISHNA",
    images: ["mathura.jpg", "vrindavan.jpg"], alt: "Temple architecture in Mathura and Vrindavan", blurb: "A spiritual visit through Krishna-associated temple towns, sacred ghats and historic lanes.",
    detail: "Temples · ghats · local markets", session: "Multi-day journey",
    packages: ["Mathura & Vrindavan"], templeDetails: ["Mathura — birthplace tradition and Shri Krishna Janmabhoomi area", "Vrindavan — temples and sites associated with Krishna’s childhood stories"], nearby: "The two towns are commonly visited together; confirm the specific temple stops for the selected itinerary."
  },
  {
    name: "Ujjain & Omkareshwar", slug: "ujjain-omkareshwar", tag: "PILGRIMAGE · TEMPLES · NARMADA", mood: "A SACRED CENTRAL INDIA TRAIL",
    images: ["ujjini.jpg", "omkareshwar.jpg"], alt: "Temple towns of Ujjain and Omkareshwar", blurb: "A Central India pilgrimage pairing Ujjain’s Mahakaleshwar with Omkareshwar on the Narmada.",
    detail: "Mahakaleshwar · Omkareshwar", session: "Pilgrimage journey",
    packages: ["Ujjain & Omkareshwar"], templeDetails: ["Ujjain — Mahakaleshwar Jyotirlinga, dedicated to Lord Shiva", "Omkareshwar — island shrine on the Narmada, also a Jyotirlinga site"], nearby: "These are separate temple towns linked as a multi-stop pilgrimage; they are not next-door destinations."
  },
  {
    name: "South India Temple Circuit", slug: "south-india-temple-circuit", tag: "PILGRIMAGE · HERITAGE · TEMPLES", mood: "A JOURNEY THROUGH SACRED SITES",
    images: ["south-indian-temples.jpg", "southindian-temple.jpg", "southindian-temple1.jpg", "southindian-temple2.png"], alt: "South Indian temple towers and heritage architecture", blurb: "A temple-focused route through selected sites in Andhra Pradesh and Tamil Nadu.",
    detail: "Srikalahasti · Tiruvannamalai · Chidambaram · Kanchipuram", session: "Multi-day journey",
    packages: ["South India Temple Circuit"], templeDetails: ["Srikalahasti — Shiva temple associated with Vayu (air)", "Tiruvannamalai — Arunachaleswarar temple associated with Agni (fire)", "Chidambaram — Nataraja temple associated with Akasha (space)", "Kanchipuram — Ekambareswarar temple associated with Prithvi (earth)", "A complete Pancha Bhoota circuit also includes Jambukeswarar at Tiruvanaikaval, associated with water; confirm whether it is part of the selected package."], nearby: "This is a multi-city route across Andhra Pradesh and Tamil Nadu; temples and order should be confirmed against the chosen trip plan.", officialSource: "https://www.tamilnadutourism.com/tour-packages/temple-tour/panchasthala-tour", sourceLabel: "Tamil Nadu Tourism — Pancha Bhoota temples"
  }
];
