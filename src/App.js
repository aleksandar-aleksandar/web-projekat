import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import slika1 from "./imgs/slika1.jpg"
import slika2 from "./imgs/slika2.jpg"
import slika3 from "./imgs/slika3.jpg"
import slika4 from "./imgs/slika4.jpg"
import slika5 from "./imgs/slika5.jpg"
import slika6 from "./imgs/slika6.jpg"
import slika7 from "./imgs/slika7.jpg"
import slika8 from "./imgs/slika8.jpg"
import "./styles/app.css"
import OrganizatorDetalji from "./pages/OrganizatorDetalji";
import FestivalDetalji from "./pages/FestivalDetalji";
import Festivals from "./pages/Festivals";
import AddOrganizer from "./pages/AddOrganizer";
import AddFestival from "./pages/AddFestival";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Footer from "./components/Footer";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC217-2u88waiXW37gY01OOBBd3CLv-lnA",
  authDomain: "organizacija-festivala-2590d.firebaseapp.com",
  projectId: "organizacija-festivala-2590d",
  storageBucket: "organizacija-festivala-2590d.appspot.com",
  messagingSenderId: "408593214855",
  appId: "1:408593214855:web:28419f57c68606e2cbb722",
  measurementId: "G-PYXMJEEJ00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const organizatori = [
  {
    id: 1,
    name: 'Event Management Co.',
    festivals: ['Music Fest', 'Food Fest', 'Fashion Show', 'Art Exhibition', 'Film Festival', 'Tech Conference', 'Fitness Expo'],
    description: `Event Management Co. is a renowned organizer of cultural and entertainment events. Established in 1990 in the bustling city of New York, we have been at the forefront of bringing diverse communities together through our vibrant festivals and gatherings. With a rich history spanning over three decades, our passion for organizing memorable events has made us a household name. From the electrifying Music Fest to the tantalizing Food Fest, we cater to all tastes and preferences.`,
    image: slika1
  },
  {
    id: 2,
    name: 'Cultural Arts Group',
    festivals: ['Art Expo', 'Film Fest', 'Literary Festival', 'Dance Showcase', 'Photography Exhibition', 'Music Concert', 'Craft Fair'],
    description: `Cultural Arts Group is dedicated to promoting and preserving diverse forms of art and culture. Founded in 1975 in the heart of Paris, our organization has played a pivotal role in nurturing artistic talent and fostering creativity. For over four decades, we have curated exceptional cultural events that celebrate the richness of human expression. From the prestigious Art Expo to the enchanting Film Fest, we strive to inspire, educate, and entertain audiences of all ages.`,
    image: slika2,
  },
  {
    id: 3,
    name: 'Adventure Tours Inc.',
    festivals: ['Outdoor Fest', 'Adventure Rally', 'Nature Retreat', 'Extreme Sports Expo', 'Wildlife Safari', 'Mountain Climbing Expedition', 'Campfire Music Festival'],
    description: `Adventure Tours Inc. is a leading provider of thrilling outdoor adventures and adrenaline-pumping experiences. Established in 1985 amidst the rugged landscapes of Colorado, our company has been a pioneer in promoting eco-friendly tourism and sustainable travel practices. With a legacy spanning nearly four decades, we have introduced countless adventurers to the wonders of the great outdoors. Whether it's the exhilarating Outdoor Fest or the heart-pounding Adventure Rally, we offer unforgettable journeys into the wild.`,
    image: slika3
  },
  {
    id: 4,
    name: 'Tech Events Ltd.',
    festivals: ['Tech Summit', 'Innovation Expo', 'Startup Showcase', 'AI Conference', 'Blockchain Symposium', 'Robotics Expo', 'Digital Transformation Forum'],
    description: `Tech Events Ltd. is a premier organizer of technology-focused conferences and expos. Founded in 2000 in the innovation hub of Silicon Valley, our company has been at the forefront of showcasing cutting-edge technologies and fostering collaboration within the tech community. With over two decades of experience, we have facilitated knowledge exchange and networking opportunities for industry leaders and innovators worldwide. From the groundbreaking Tech Summit to the visionary Innovation Expo, we drive the conversation on the future of technology.`,
    image: slika4
  },
  {
    id: 5,
    name: 'Green Living Organization',
    festivals: ['Eco Fair', 'Sustainability Expo', 'Renewable Energy Symposium', 'Zero Waste Festival', 'Organic Farming Fair', 'Climate Action Summit', 'Green Technology Showcase'],
    description: `Green Living Organization is dedicated to promoting environmental sustainability and eco-conscious living. Established in 1995 in the lush countryside of Oregon, our organization has been a catalyst for positive change in the green movement. With a mission to inspire and empower individuals to adopt eco-friendly practices, we organize a diverse range of events and initiatives. From the informative Eco Fair to the transformative Sustainability Expo, we strive to create a greener and more sustainable future for all.`,
    image: slika5
  },
  {
    id: 6,
    name: 'Fashion Events Group',
    festivals: ['Fashion Week', 'Style Expo', 'Fashion Designer Awards', 'Model Search Contest', 'Accessory Showcase', 'Beauty Pageant', 'Textile Trade Fair'],
    description: `Fashion Events Group is synonymous with glamour, style, and haute couture. Established in 1988 amidst the bustling streets of Milan, our organization has been a global trendsetter in the fashion industry. With an illustrious history spanning over three decades, we have showcased the talents of renowned designers and models from around the world. From the iconic Fashion Week to the elegant Style Expo, we curate unforgettable experiences that celebrate the artistry and creativity of fashion.`,
    image: slika6
  },
  {
    id: 7,
    name: 'Community Events Collective',
    festivals: ['Local Fest', 'Community Fair', 'Neighborhood Picnic', 'Cultural Celebration', 'Family Fun Day', 'Community Cleanup Drive', 'Street Food Festival'],
    description: `Community Events Collective is committed to fostering a sense of belonging and togetherness within neighborhoods and communities. Founded in 2005 in the vibrant city of Rio de Janeiro, our organization has been instrumental in organizing inclusive and diverse community events. With a focus on building social cohesion and promoting community engagement, we curate a wide range of festivals and gatherings. From the lively Local Fest to the multicultural Community Fair, we create spaces where people can come together, celebrate, and connect.`,
    image: slika7
  },
  {
    id: 8,
    name: 'Sports Events Inc.',
    festivals: ['Sports Fest', 'Fitness Expo', 'Athletic Championship', 'Health & Wellness Fair', 'Outdoor Adventure Race', 'Yoga Retreat', 'Extreme Sports Showcase'],
    description: `Sports Events Inc. is dedicated to promoting health, fitness, and active lifestyles through exciting sports events and experiences. Established in 1998 in the energetic city of Sydney, our organization has been a driving force in the sports and wellness industry. With a passion for promoting physical activity and well-being, we organize a variety of events that cater to athletes, fitness enthusiasts, and adventure seekers alike. From the dynamic Sports Fest to the invigorating Fitness Expo, we inspire individuals to push their limits and embrace the thrill of sports.`,
    image: slika8
  },
];

const festivali = [
  {
    id: 1,
    organizerId: 1,
    name: 'Music Fest',
    month: 'July',
    genre: 'Music',
    description: 'The Music Fest is an annual celebration of diverse musical talents from around the world. Founded in 1992, this iconic festival has become a highlight of the summer season in New York City. From rock and pop to jazz and classical, the Music Fest offers something for every music lover.',
  },
  {
    id: 2,
    organizerId: 1,
    name: 'Food Fest',
    month: 'September',
    genre: 'Food & Drink',
    description: 'The Food Fest is a gastronomic extravaganza that showcases the culinary delights of New York City and beyond. Held annually since 1995, this festival features a mouthwatering array of cuisines, from gourmet street food to Michelin-starred dining experiences.',
  },
  {
    id: 3,
    organizerId: 1,
    name: 'Fashion Show',
    month: 'February',
    genre: 'Fashion',
    description: 'The Fashion Show is a dazzling showcase of the latest trends and styles in the fashion industry. Established in 1988, this prestigious event attracts top designers, models, and fashion enthusiasts from around the world. From haute couture to ready-to-wear, the Fashion Show sets the stage for glamour and elegance.',
  },
  {
    id: 4,
    organizerId: 1,
    name: 'Art Exhibition',
    month: 'April',
    genre: 'Visual Arts',
    description: 'The Art Exhibition is a vibrant celebration of contemporary art and creativity. Since its inception in 1990, this annual event has been a platform for emerging and established artists to showcase their work. From paintings and sculptures to multimedia installations, the Art Exhibition offers a diverse range of artistic expressions.',
  },
  {
    id: 5,
    organizerId: 1,
    name: 'Film Festival',
    month: 'October',
    genre: 'Film',
    description: 'The Film Festival is a prestigious showcase of cinematic excellence and storytelling. Founded in 1985, this internationally acclaimed event attracts filmmakers, actors, and film enthusiasts from around the globe. From indie gems to blockbuster premieres, the Film Festival celebrates the art of filmmaking in all its forms.',
  },
  {
    id: 6,
    organizerId: 1,
    name: 'Tech Conference',
    month: 'November',
    genre: 'Technology',
    description: 'The Tech Conference is a leading forum for innovation and technology trends. Established in 2000, this annual conference brings together industry leaders, entrepreneurs, and tech enthusiasts to explore the latest advancements in technology and its impact on society. From AI and blockchain to cybersecurity and digital transformation, the Tech Conference covers a wide range of topics shaping the future of technology.',
  },
  {
    id: 7,
    organizerId: 1,
    name: 'Fitness Expo',
    month: 'June',
    genre: 'Fitness & Wellness',
    description: 'The Fitness Expo is a dynamic event dedicated to health, fitness, and active lifestyles. Since its inception in 1998, this expo has been a hub for fitness enthusiasts, athletes, and wellness professionals to discover the latest trends and products in the industry. From workout demos and nutrition workshops to fitness challenges and wellness retreats, the Fitness Expo offers something for everyone committed to living their best life.',
  },
  {
    id: 8,
    organizerId: 2,
    name: 'Art Expo',
    month: 'March',
    genre: 'Visual Arts',
    description: 'The Art Expo is a premier showcase of contemporary art from around the globe. Established in 1980, this prestigious event attracts art collectors, enthusiasts, and industry professionals alike. From paintings and sculptures to digital art and installations, the Art Expo celebrates creativity in all its forms.',
  },
  {
    id: 9,
    organizerId: 2,
    name: 'Film Fest',
    month: 'October',
    genre: 'Film',
    description: 'The Film Fest is a celebration of cinematic excellence and storytelling. Founded in 1985, this esteemed festival brings together filmmakers, actors, and cinephiles for a week-long extravaganza of screenings, premieres, and panel discussions.',
  },
  {
    id: 10,
    organizerId: 2,
    name: 'Literary Festival',
    month: 'June',
    genre: 'Literature',
    description: 'The Literary Festival is a gathering of authors, poets, and literary enthusiasts from around the world. Since its inception in 1992, this festival has been a platform for celebrating literature in all its forms. From book readings and author signings to panel discussions and workshops, the Literary Festival fosters a love of reading and storytelling.',
  },
  {
    id: 11,
    organizerId: 2,
    name: 'Dance Showcase',
    month: 'August',
    genre: 'Dance',
    description: 'The Dance Showcase is a mesmerizing display of talent and creativity in the world of dance. Established in 1998, this annual event brings together dancers, choreographers, and dance enthusiasts to celebrate the art of movement. From ballet and contemporary to hip-hop and traditional dance forms, the Dance Showcase offers a diverse and captivating lineup of performances.',
  },
  {
    id: 12,
    organizerId: 2,
    name: 'Photography Exhibition',
    month: 'May',
    genre: 'Photography',
    description: 'The Photography Exhibition is a visual journey through the lens of talented photographers from around the world. Since its inception in 2005, this exhibition has showcased stunning images that capture moments, emotions, and stories. From landscapes and portraits to street photography and documentary work, the Photography Exhibition offers a diverse and captivating showcase of photographic artistry.',
  },
  {
    id: 13,
    organizerId: 2,
    name: 'Music Concert',
    month: 'July',
    genre: 'Music',
    description: 'The Music Concert is an electrifying showcase of musical talent and performance. Founded in 1990, this annual concert series features a diverse lineup of artists and bands spanning various genres and styles. From rock and pop to jazz and classical, the Music Concert offers unforgettable live music experiences for audiences of all ages.',
  },
  {
    id: 14,
    organizerId: 2,
    name: 'Craft Fair',
    month: 'November',
    genre: 'Crafts',
    description: 'The Craft Fair is a celebration of handmade craftsmanship and artisanal goods. Established in 1987, this annual fair brings together makers, artisans, and craft enthusiasts to showcase their creations and talents. From handmade jewelry and pottery to textiles and woodworking, the Craft Fair offers a unique shopping experience filled with creativity and craftsmanship.',
  },
  {
    id: 15,
    organizerId: 3,
    name: 'Outdoor Fest',
    month: 'June',
    genre: 'Adventure',
    description: 'The Outdoor Fest is an adrenaline-fueled adventure extravaganza set amidst the breathtaking landscapes of Colorado. Since its inception in 1990, this festival has been a magnet for outdoor enthusiasts seeking thrills and excitement. From hiking and mountain biking to whitewater rafting and zip-lining, the Outdoor Fest offers a wide range of exhilarating activities.',
  },
  {
    id: 16,
    organizerId: 3,
    name: 'Adventure Rally',
    month: 'August',
    genre: 'Adventure',
    description: 'The Adventure Rally is a high-octane rally event that pushes participants to their limits in a series of adrenaline-pumping challenges. Established in 1998, this thrilling rally attracts daredevils and thrill-seekers from around the world. From off-road racing and rock climbing to skydiving and bungee jumping, the Adventure Rally promises an unforgettable adventure.',
  },
  {
    id: 17,
    organizerId: 3,
    name: 'Nature Retreat',
    month: 'September',
    genre: 'Nature',
    description: 'The Nature Retreat is a peaceful escape into the beauty of the natural world. Founded in 2003, this retreat offers participants the opportunity to reconnect with nature and rejuvenate their spirits. From guided hikes and wildlife spotting to yoga sessions and meditation, the Nature Retreat provides a sanctuary for relaxation and reflection.',
  },
  {
    id: 18,
    organizerId: 3,
    name: 'Extreme Sports Expo',
    month: 'July',
    genre: 'Extreme Sports',
    description: 'The Extreme Sports Expo is a showcase of daring feats and adrenaline-fueled adventures. Since its inception in 2005, this expo has been a playground for extreme sports enthusiasts and thrill-seekers. From base jumping and paragliding to BMX biking and skateboarding, the Extreme Sports Expo pushes the boundaries of whats possible in the world of extreme sports.',
  },
  {
    id: 19,
    organizerId: 3,
    name: 'Wildlife Safari',
    month: 'October',
    genre: 'Wildlife',
    description: 'The Wildlife Safari is an immersive journey into the heart of the wilderness. Established in 1995, this safari offers participants the chance to encounter majestic wildlife in their natural habitat. From safari drives and bushwalks to birdwatching and photography, the Wildlife Safari provides unforgettable wildlife encounters and conservation experiences.',
  },
  {
    id: 20,
    organizerId: 3,
    name: 'Mountain Climbing Expedition',
    month: 'May',
    genre: 'Adventure',
    description: 'The Mountain Climbing Expedition is a challenging ascent to the summit of towering peaks. Since its inception in 1992, this expedition has attracted climbers and mountaineers from around the world. From technical routes and high-altitude climbs to breathtaking views and camaraderie, the Mountain Climbing Expedition offers the ultimate adventure for thrill-seekers and outdoor enthusiasts.',
  },
  {
    id: 21,
    organizerId: 3,
    name: 'Campfire Music Festival',
    month: 'August',
    genre: 'Music & Camping',
    description: 'The Campfire Music Festival is a celebration of music, friendship, and outdoor adventure. Founded in 2008, this festival brings together music lovers and camping enthusiasts for a weekend of live performances, campfire sing-alongs, and outdoor activities. From folk and bluegrass to indie and rock, the Campfire Music Festival offers a laid-back and intimate music experience under the stars.',
  },
  {
    id: 22,
    organizerId: 4,
    name: 'Tech Summit',
    month: 'February',
    genre: 'Technology',
    description: 'The Tech Summit is a premier gathering of tech industry leaders, innovators, and enthusiasts. Established in 2000, this summit explores the latest trends and developments shaping the future of technology. From keynote speeches and panel discussions to product demos and networking opportunities, the Tech Summit provides valuable insights and connections for professionals in the tech sector.',
  },
  {
    id: 23,
    organizerId: 4,
    name: 'Innovation Expo',
    month: 'September',
    genre: 'Innovation',
    description: 'The Innovation Expo is a showcase of cutting-edge technologies and groundbreaking innovations. Since its inception in 2005, this expo has been a hub for innovators, entrepreneurs, and investors to connect and collaborate. From AI and robotics to biotech and clean energy, the Innovation Expo highlights the latest advancements shaping the future of business and society.',
  },
  {
    id: 24,
    organizerId: 4,
    name: 'Startup Showcase',
    month: 'June',
    genre: 'Entrepreneurship',
    description: 'The Startup Showcase is a platform for emerging startups to pitch their ideas and products to investors and industry experts. Founded in 2010, this showcase provides startups with valuable exposure and networking opportunities to accelerate their growth. From pitch competitions and demo booths to investor meetings and mentorship sessions, the Startup Showcase supports the next generation of innovators and entrepreneurs.',
  },
  {
    id: 25,
    organizerId: 4,
    name: 'AI Conference',
    month: 'October',
    genre: 'Artificial Intelligence',
    description: 'The AI Conference is a deep dive into the world of artificial intelligence and machine learning. Since its inception in 2015, this conference has been a gathering point for AI researchers, developers, and practitioners to exchange ideas and insights. From technical workshops and research presentations to industry case studies and expert panels, the AI Conference explores the latest advancements and applications in AI technology.',
  },
  {
    id: 26,
    organizerId: 4,
    name: 'Blockchain Symposium',
    month: 'November',
    genre: 'Blockchain',
    description: 'The Blockchain Symposium is a forum for exploring the transformative potential of blockchain technology. Established in 2018, this symposium brings together blockchain enthusiasts, developers, and industry leaders to discuss the latest trends and innovations in the blockchain space. From decentralized finance and digital identity to supply chain management and tokenization, the Blockchain Symposium examines the diverse applications of blockchain technology across industries.',
  },
  {
    id: 27,
    organizerId: 4,
    name: 'Robotics Expo',
    month: 'April',
    genre: 'Robotics',
    description: 'The Robotics Expo is a showcase of the latest advancements in robotics and automation. Founded in 2013, this expo brings together robotics engineers, researchers, and enthusiasts to demonstrate cutting-edge robotic technologies. From industrial robots and drones to humanoid robots and autonomous vehicles, the Robotics Expo highlights the potential of robotics to revolutionize various sectors and improve human lives.',
  },
  {
    id: 28,
    organizerId: 4,
    name: 'Digital Transformation Forum',
    month: 'August',
    genre: 'Digital Transformation',
    description: 'The Digital Transformation Forum is a platform for discussing the digital disruptions reshaping industries and societies. Since its inception in 2016, this forum has brought together thought leaders, policymakers, and industry experts to explore the opportunities and challenges of digital transformation. From cloud computing and cybersecurity to IoT and data analytics, the Digital Transformation Forum examines the strategies and technologies driving digital innovation and change.',
  },
  {
    id: 29,
    organizerId: 5,
    name: 'Eco Fair',
    month: 'April',
    genre: 'Sustainability',
    description: 'The Eco Fair is a celebration of sustainable living and environmental stewardship. Established in 1998, this fair showcases eco-friendly products, practices, and initiatives that promote a greener planet. From renewable energy solutions and zero-waste lifestyle tips to organic farming and conservation projects, the Eco Fair inspires individuals and communities to adopt sustainable habits and protect the environment.',
  },
  {
    id: 30,
    organizerId: 5,
    name: 'Sustainability Expo',
    month: 'October',
    genre: 'Sustainability',
    description: 'The Sustainability Expo is a platform for showcasing innovative solutions and initiatives for building a sustainable future. Since its inception in 2005, this expo has been a gathering point for sustainability advocates, businesses, and policymakers to exchange ideas and collaborate on sustainability projects. From green technologies and circular economy practices to climate action initiatives and sustainable development goals, the Sustainability Expo drives conversations and actions towards a more sustainable world.',
  },
  {
    id: 31,
    organizerId: 5,
    name: 'Renewable Energy Symposium',
    month: 'July',
    genre: 'Renewable Energy',
    description: 'The Renewable Energy Symposium is a forum for exploring the latest advancements and trends in renewable energy technologies. Founded in 2010, this symposium brings together renewable energy experts, policymakers, and industry stakeholders to discuss the opportunities and challenges of transitioning to a renewable energy future. From solar and wind power to hydroelectric and geothermal energy, the Renewable Energy Symposium examines the role of renewable energy in mitigating climate change and promoting energy independence.',
  },
  {
    id: 32,
    organizerId: 5,
    name: 'Zero Waste Festival',
    month: 'September',
    genre: 'Zero Waste',
    description: 'The Zero Waste Festival is a celebration of waste reduction, recycling, and resource conservation. Established in 2015, this festival promotes a zero-waste lifestyle and showcases practical solutions for reducing waste and minimizing environmental impact. From upcycling workshops and composting demos to sustainable fashion exhibits and package-free shopping, the Zero Waste Festival empowers individuals and communities to embrace sustainable living practices and protect the planet.',
  },
  {
    id: 33,
    organizerId: 5,
    name: 'Organic Farming Fair',
    month: 'May',
    genre: 'Organic Farming',
    description: 'The Organic Farming Fair is a tribute to the farmers and growers committed to organic agriculture and sustainable food production. Since its inception in 2008, this fair has been a platform for showcasing organic farming practices, products, and innovations. From farm tours and farmer s markets to organic gardening workshops and seed swaps, the Organic Farming Fair celebrates the benefits of organic food and farming for health, environment, and community.',
  },
  {
    id: 34,
    organizerId: 5,
    name: 'Climate Action Summit',
    month: 'November',
    genre: 'Climate Action',
    description: 'The Climate Action Summit is a call to action for addressing the urgent challenges of climate change and global warming. Founded in 2017, this summit brings together climate activists, policymakers, and stakeholders to discuss strategies and solutions for mitigating climate change and adapting to its impacts. From carbon reduction initiatives and renewable energy projects to climate resilience planning and advocacy campaigns, the Climate Action Summit mobilizes efforts towards a sustainable and resilient future for all.',
  },
  {
    id: 35,
    organizerId: 5,
    name: 'Green Technology Showcase',
    month: 'August',
    genre: 'Green Technology',
    description: 'The Green Technology Showcase is a showcase of innovative technologies and solutions for environmental sustainability. Established in 2012, this showcase highlights cutting-edge green technologies that address environmental challenges and promote sustainable development. From clean energy innovations and eco-friendly materials to smart cities and sustainable transportation, the Green Technology Showcase demonstrates the potential of technology to create a greener and more sustainable world.',
  },
  {
    id: 36,
    organizerId: 6,
    name: 'Fashion Week',
    month: 'September',
    genre: 'Fashion',
    description: 'Fashion Week is the epitome of style, glamour, and haute couture. Established in 1995, this iconic event showcases the latest trends and collections from top designers and fashion houses. From runway shows and designer showcases to exclusive parties and industry events, Fashion Week attracts fashionistas, celebrities, and industry insiders from around the world.',
  },
  {
    id: 37,
    organizerId: 6,
    name: 'Style Expo',
    month: 'April',
    genre: 'Fashion',
    description: 'Style Expo is a celebration of fashion, beauty, and personal style. Founded in 2008, this expo brings together fashion enthusiasts, beauty experts, and style influencers to explore the latest trends and innovations in fashion and beauty. From style workshops and makeup tutorials to fashion pop-ups and beauty demos, Style Expo offers a unique experience for anyone passionate about fashion and style.',
  },
  {
    id: 38,
    organizerId: 6,
    name: 'Fashion Designer Awards',
    month: 'June',
    genre: 'Fashion',
    description: 'Fashion Designer Awards is a prestigious event honoring excellence and creativity in the fashion industry. Since its inception in 2012, these awards recognize the outstanding achievements of fashion designers, stylists, and industry professionals. From runway presentations and red carpet galas to award ceremonies and after-parties, Fashion Designer Awards celebrates the visionaries shaping the future of fashion.',
  },
  {
    id: 39,
    organizerId: 6,
    name: 'Model Search Contest',
    month: 'October',
    genre: 'Fashion',
    description: 'Model Search Contest is a platform for discovering new talent and aspiring models. Established in 2010, this contest provides aspiring models with the opportunity to showcase their potential and kick-start their modeling careers. From casting calls and auditions to photo shoots and runway walks, Model Search Contest offers a gateway to the glamorous world of fashion modeling.',
  },
  {
    id: 40,
    organizerId: 6,
    name: 'Accessory Showcase',
    month: 'February',
    genre: 'Fashion',
    description: 'Accessory Showcase is a showcase of accessories and embellishments that add the finishing touch to any outfit. Founded in 2015, this showcase highlights the work of accessory designers and artisans creating unique pieces that complement and elevate fashion looks. From jewelry and handbags to shoes and scarves, Accessory Showcase offers a curated selection of accessories for every style and occasion.',
  },
  {
    id: 41,
    organizerId: 6,
    name: 'Beauty Pageant',
    month: 'August',
    genre: 'Fashion & Beauty',
    description: 'Beauty Pageant is a celebration of beauty, poise, and talent. Since its inception in 2000, this pageant has been a platform for empowering women and promoting diversity and inclusivity in beauty standards. From talent showcases and evening gown competitions to interviews and community service projects, Beauty Pageant recognizes the inner and outer beauty of contestants from diverse backgrounds and cultures.',
  },
  {
    id: 42,
    organizerId: 6,
    name: 'Textile Trade Fair',
    month: 'March',
    genre: 'Fashion',
    description: 'Textile Trade Fair is a marketplace for textiles, fabrics, and materials used in fashion and design. Established in 2018, this fair connects textile manufacturers, suppliers, and designers from around the world to showcase their latest collections and innovations. From fabric samples and textile machinery to sustainable materials and eco-friendly dyes, Textile Trade Fair offers a comprehensive platform for the textile industry to network, collaborate, and do business.',
  },
  {
    id: 43,
    organizerId: 7,
    name: 'Local Fest',
    month: 'July',
    genre: 'Community',
    description: 'Local Fest is a celebration of the unique culture, heritage, and spirit of local communities. Established in 2003, this festival showcases the talents, traditions, and flavors of the local area. From live music performances and artisan markets to food tastings and cultural exhibits, Local Fest brings residents and visitors together to celebrate and support the vibrant diversity of the community.',
  },
  {
    id: 44,
    organizerId: 7,
    name: 'Community Fair',
    month: 'October',
    genre: 'Community',
    description: 'Community Fair is a gathering of neighbors and friends to enjoy fun activities, delicious food, and live entertainment. Founded in 2007, this fair promotes community spirit and camaraderie by providing a platform for local businesses, organizations, and artisans to showcase their products and services. From carnival games and bouncy castles to craft vendors and community performances, Community Fair offers something for everyone to enjoy.',
  },
  {
    id: 45,
    organizerId: 7,
    name: 'Neighborhood Picnic',
    month: 'June',
    genre: 'Community',
    description: 'Neighborhood Picnic is a time-honored tradition of bringing neighbors together for food, fun, and fellowship. Since its inception in 1995, this picnic has been a highlight of the summer season, providing an opportunity for residents to socialize and strengthen community bonds. From potluck lunches and barbecue cookouts to games and activities for all ages, Neighborhood Picnic creates lasting memories and fosters a sense of belonging.',
  },
  {
    id: 46,
    organizerId: 7,
    name: 'Cultural Celebration',
    month: 'September',
    genre: 'Culture',
    description: 'Cultural Celebration is a tribute to the diverse cultural heritage and traditions of the community. Established in 2001, this celebration showcases the music, dance, cuisine, and customs of various ethnic and cultural groups that call the community home. From multicultural performances and art exhibitions to workshops and storytelling sessions, Cultural Celebration promotes cultural understanding, appreciation, and unity.',
  },
  {
    id: 47,
    organizerId: 7,
    name: 'Family Fun Day',
    month: 'May',
    genre: 'Family',
    description: 'Family Fun Day is a day of laughter, joy, and quality time spent with loved ones. Founded in 2010, this event offers a variety of family-friendly activities and entertainment for all ages. From outdoor games and sports competitions to arts and crafts activities and live entertainment, Family Fun Day provides families with an opportunity to create cherished memories and strengthen bonds.',
  },
  {
    id: 48,
    organizerId: 7,
    name: 'Community Cleanup Drive',
    month: 'April',
    genre: 'Community Service',
    description: 'Community Cleanup Drive is a collective effort to beautify and improve the local environment. Since its inception in 2008, this drive brings together volunteers, community groups, and local businesses to clean up litter and debris from parks, streets, and public spaces. From tree planting and graffiti removal to litter pick-up and recycling initiatives, Community Cleanup Drive promotes civic engagement and environmental stewardship.',
  },
  {
    id: 49,
    organizerId: 7,
    name: 'Street Food Festival',
    month: 'August',
    genre: 'Food & Culture',
    description: 'Street Food Festival is a culinary adventure celebrating the diverse flavors and cuisines of the world. Established in 2015, this festival transforms the streets into a vibrant marketplace of food trucks, vendors, and pop-up stalls offering a variety of delicious street foods. From gourmet sandwiches and exotic desserts to global specialties and local favorites, Street Food Festival tantalizes taste buds and celebrates the rich tapestry of culinary traditions.',
  },
  {
    id: 50,
    organizerId: 8,
    name: 'Sports Fest',
    month: 'July',
    genre: 'Sports',
    description: 'Sports Fest is a celebration of athleticism, teamwork, and competition. Established in 1999, this festival brings together sports enthusiasts of all ages to participate in a variety of athletic events and activities. From team sports tournaments and individual competitions to fitness challenges and obstacle courses, Sports Fest offers something for everyone to enjoy and be active.',
  },
  {
    id: 51,
    organizerId: 8,
    name: 'Fitness Expo',
    month: 'March',
    genre: 'Fitness',
    description: 'Fitness Expo is a showcase of the latest trends, products, and innovations in the fitness industry. Since its inception in 2005, this expo has been a gathering point for fitness enthusiasts, health professionals, and industry experts to explore the world of fitness and wellness. From fitness equipment demos and workout classes to nutrition seminars and wellness workshops, Fitness Expo inspires individuals to lead healthier and more active lifestyles.',
  },
  {
    id: 52,
    organizerId: 8,
    name: 'Athletic Championship',
    month: 'September',
    genre: 'Sports',
    description: 'Athletic Championship is a premier sporting event that showcases the talent and dedication of athletes from around the world. Founded in 2008, this championship features a variety of athletic disciplines, including track and field, gymnastics, swimming, and more. From thrilling competitions and record-breaking performances to inspiring stories of perseverance and triumph, Athletic Championship celebrates the spirit of sportsmanship and excellence.',
  },
  {
    id: 53,
    organizerId: 8,
    name: 'Health & Wellness Fair',
    month: 'April',
    genre: 'Health & Wellness',
    description: 'Health & Wellness Fair is a holistic event promoting physical, mental, and emotional well-being. Established in 2012, this fair offers a range of activities and resources to help individuals live healthier and happier lives. From health screenings and fitness assessments to stress management workshops and mindfulness sessions, Health & Wellness Fair empowers attendees to take charge of their health and wellness.',
  },
  {
    id: 54,
    organizerId: 8,
    name: 'Outdoor Adventure Race',
    month: 'June',
    genre: 'Adventure Sports',
    description: 'Outdoor Adventure Race is an adrenaline-fueled competition that tests participants’ endurance, navigation, and outdoor survival skills. Since its inception in 2015, this race has challenged adventurers to navigate through rugged terrain, conquer obstacles, and complete physical challenges in the great outdoors. From trail running and mountain biking to kayaking and orienteering, Outdoor Adventure Race offers a thrilling experience for outdoor enthusiasts and adrenaline junkies.',
  },
  {
    id: 55,
    organizerId: 8,
    name: 'Yoga Retreat',
    month: 'October',
    genre: 'Yoga & Wellness',
    description: 'Yoga Retreat is a serene getaway that offers participants the opportunity to rejuvenate mind, body, and soul through yoga, meditation, and relaxation. Founded in 2009, this retreat provides a peaceful sanctuary away from the hustle and bustle of daily life, allowing participants to deepen their yoga practice and connect with nature. From sunrise yoga sessions and guided meditations to healthy meals and holistic wellness workshops, Yoga Retreat promotes inner peace and holistic well-being.',
  },
  {
    id: 56,
    organizerId: 8,
    name: 'Extreme Sports Showcase',
    month: 'August',
    genre: 'Extreme Sports',
    description: 'Extreme Sports Showcase is a showcase of adrenaline-pumping sports and activities that push the limits of human performance. Established in 2017, this showcase features thrilling demonstrations and performances by top athletes in sports such as skateboarding, BMX, parkour, and more. From gravity-defying stunts and jaw-dropping tricks to high-speed races and daring feats, Extreme Sports Showcase exhilarates audiences and celebrates the daring spirit of extreme sports.',
  },
  
];


function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element = {<Home festivali = {festivali} organizatori = {organizatori} />} />
          <Route path="/festivals" element = {<Festivals festivali = {festivali} organizatori = {organizatori} />} />
          <Route path="/organizator/:id" element={<OrganizatorDetalji festivali = {festivali} organizatori = {organizatori}/>} />
          <Route path="/festival/:id" element={<FestivalDetalji festivali = {festivali} organizatori = {organizatori}/>} />
          <Route path="/add-new-organizer" element={<AddOrganizer />}/>
          <Route path="/add-new-festival" element={<AddFestival />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
