require("dotenv").config();
const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URL;
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const productMongo = new mongoose.Schema({
  id: Number,
  name: String,
  category: String,
  description: String,
  image: String,
  price: Number,
});

const products = [
  {
    id: 1,
    name: "Monky D. Luffy",
    category: "Men",
    description: "Monkey D. Luffy is the captain of the Straw Hat Pirates, and dreamt of being a pirate since childhood from the influence of his idol and mentor Red-Haired Shanks.",
    image: "https://i.imgur.com/s0nHDDs.jpeg",
    price: 150
  },
  {
    id: 2,
    name: "Gyomei Himejima",
    category: "Men",
    description: "Gyomei Himejima is a Demon Slayer of the Demon Slayer Corps and the current Stone Hashira",
    image: "https://i.imgur.com/kAp89Gh.jpeg",
    price: 80
  },
  {
    id: 3,
    name: "Donquixote Doflamingo",
    category: "Men",
    description: "Donquixote Doflamingo, is the captain of the Donquixote Pirates. Prior to his imprisonment, he was a member of the Seven Warlords of the Sea",
    image: "https://i.imgur.com/Fc9WJyp.jpeg",
    price: 90
  },
  {
    id: 4,
    name: "Roronoa Zoro",
    category: "Men",
    description: "Roronoa Zoro, is a main combatant of the Straw Hat Pirates, one of their two swordsmen, one of the Senior Officers of the Straw Hat Grand Fleet",
    image: "https://i.imgur.com/wvqPA09.jpeg",
    price: 100
  },
  {
    id: 5,
    name: "Shoto Todoroki",
    category: "Men",
    description: "Shoto Todoroki, is the tritagonist of My Hero Academia. He is a student in Class 1-A at U.A. High School, where he got in through official recommendations and is training to become a Pro Hero.",
    image: "https://i.imgur.com/zIKLBPw.jpeg",
    price: 90
  },
  {
    id: 6,
    name: "Yuno Grinberryall",
    category: "Men",
    description: "Yuno Grinberryall, is an orphan who was left under the care of a church in Hage after the downfall of House Grinberryall, the former royal family of the Spade Kingdom. He wields a four-leaf clover grimoire and is a Magic Knight of the Clover Kingdom's Golden Dawn and Royal Knights squads.",
    image: "https://i.imgur.com/LixgNsU.jpeg",
    price: 350
  },
  {
    id: 7,
    name: "Megumi Fushiguro",
    category: "Men",
    description: "Megumi Fushiguro, is the deuteragonist of the Jujutsu Kaisen series. He is a grade 2 jujutsu sorcerer and first-year student at Tokyo Jujutsu High",
    image: "https://i.imgur.com/kHoeWjU.jpeg",
    price: 90
  },
  {
    id: 8,
    name: "Trafalgar D. Water Law",
    category: "Men",
    description: "Trafalgar D. Water Law, more commonly known as just Trafalgar Law and by his epithet as the Surgeon of Death, is a pirate from the North Blue and the captain and doctor of the Heart Pirates.",
    image: "https://i.imgur.com/5IrUAbU.jpeg",
    price: 120
  },
  {
    id: 9,
    name: "Dabi",
    category: "Men",
    description: "Dabi, real name Toya Todoroki, is one of the main antagonists in the My Hero Academia manga and anime series.He is the eldest son of the Pro Hero Endeavor, driven insane due to his neglectful and selfish actions, and becoming a villain to enact revenge.",
    image: "https://i.imgur.com/RH2NQQf.jpeg",
    price: 120
  },
  {
    id: 10,
    name: "Monkey D. Luffy - Egghead",
    category: "Men",
    description: "Monkey D. Luffy is the captain of the Straw Hat Pirates, and dreamt of being a pirate since childhood from the influence of his idol and mentor Red-Haired Shanks.",
    image: "https://i.imgur.com/b5q2KHp.jpeg",
    price: 130
  },
  {
    id: 11,
    name: "Sakura Haruno",
    category: "Women",
    description: "Sakura Haruno is a kunoichi of Konohagakure. When assigned to Team 7, Sakura quickly finds herself ill-prepared for the duties of a shinobi. However, after training under the Sannin Tsunade, she overcomes this, and becomes recognised as one of the greatest medical-nin in the world.",
    image: "https://i.imgur.com/DEf0EXE.jpeg",
    price: 100
  },
  {
    id: 12,
    name: "Hinata Hyūga",
    category: "Women",
    description: "Hinata Hyūga is a kunoichi of Konohagakure. Formerly the heiress of the Hyūga clan, she lost the position upon being deemed unsuited for the responsibilities of leading the clan.",
    image: "https://i.imgur.com/HHi74kR.jpeg",
    price: 120
  },
  {
    id: 13,
    name: "Lucy Heartfilia",
    category: "Women",
    description: "Lucy Heartfilia is a Mage of the Fairy Tail Guild, wherein she is a member of Team Natsu.",
    image: "https://i.imgur.com/vuIFmRh.jpeg",
    price: 90
  },
  {
    id: 14,
    name: "Nami",
    category: "Women",
    description: "Cat Burglar Nami is the navigator of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. She is the third member of the crew and the second to join, doing so during the Orange Town Arc.",
    image: "https://i.imgur.com/clfN8ll.jpeg",
    price: 340
  },
  {
    id: 15,
    name: "Nico Robin",
    category: "Women",
    description: "Nico Robin, also known by her epithet Devil Child and the Light of the Revolution, is the archaeologist of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet.",
    image: "https://i.imgur.com/KYRkGgX.jpeg",
    price: 170
  },
  {
    id: 16,
    name: "Nefertari Vivi",
    category: "Women",
    description: "Nefertari Vivi is the princess of the Arabasta Kingdom. She is the daughter of Nefertari Cobra and Titi",
    image: "https://i.imgur.com/37YtCAU.jpeg",
    price: 110
  },
  {
    id: 17,
    name: "Erza Scarlet",
    category: "Women",
    description: "Erza Scarlet is an S-Class Mage of the Fairy Tail Guild, wherein she is a member of Team Natsu. She also served as the guild's 7th Guild Master during Makarov's absence in X792.",
    image: "https://i.imgur.com/INQ0FYM.jpeg",
    price: 80
  },
  {
    id: 18,
    name: "Artoria Caster",
    category: "Women",
    description: "Artoria Caster, Class Name Caster, is a Caster-class Servant summoned by Ritsuka Fujimaru in the Grand Orders of Fate/Grand Order.",
    image: "https://i.imgur.com/Hdb9LUN.jpeg",
    price: 70
  },
  {
    id: 19,
    name: "Artoria Pendragon",
    category: "Women",
    description: "Artoria Pendragon, also romanized as Arturia and Altria, Class Name Saber, is one of the main characters of Fate/Zero and one of the three main heroines of Fate/stay night.",
    image: "https://i.imgur.com/8xVQmL6.jpeg",
    price: 120
  },
  {
    id: 20,
    name: "Jeanne d'Arc Alter",
    category: "Women",
    description: "Jeanne d'Arc Alter, Class Name Avenger, is an Avenger-class Servant summoned by Ritsuka Fujimaru in the Grand Orders of Fate/Grand Order. She is also a boss-only character under the Ruler-class during the events of the Orleans Singularity.",
    image: "https://i.imgur.com/1lcqkRs.jpeg",
    price: 120
  },
  {
    id: 21,
    name: "Tony Tony Chopper",
    category: "Mythical Creatures",
    description: "Tony Tony Chopper, also known as Cotton Candy Lover Chopper, is the doctor of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet.",
    image: "https://i.imgur.com/KVyWBYY.jpeg",
    price: 90
  },
  {
    id: 22,
    name: "Charizard",
    category: "Mythical Creatures",
    description: "Charizard is a dual-type Fire/Flying Pokémon introduced in Generation I.",
    image: "https://i.imgur.com/TiE0q10.jpeg",
    price: 110
  },
  {
    id: 23,
    name: "Totoro",
    category: "Mythical Creatures",
    description: "My Neighbor Totoro is a 1988 Japanese animated fantasy film written and directed by Hayao Miyazaki and animated by Studio Ghibli for Tokuma Shoten",
    image: "https://i.imgur.com/DcaOgH6.jpeg",
    price: 80
  },
  {
    id: 24,
    name: "Cerberus",
    category: "Mythical Creatures",
    description: "Cerberus, is one of the two Guardians of the Clow Cards created by Clow Reed, along with Yue. Before his death, Clow appointed Kero as the one to select the potential candidate to be the next master of the cards ",
    image: "https://i.imgur.com/X5fANLm.jpeg",
    price: 150
  },
  {
    id: 25,
    name: "Kirara",
    category: "Mythical Creatures",
    description: "Kirara, is Sango's faithful nekomata companion and main method of transportation. After the destruction of Naraku and the Sacred Jewel, Kirara became Kohaku's traveling partner and companion",
    image: "https://i.imgur.com/NjJvTVZ.jpeg",
    price: 70
  },
  {
    id: 26,
    name: "Gengar",
    category: "Mythical Creatures",
    description: "Gengar is a dual-type Ghost/Poison Pokémon introduced in Generation I. It evolves from Haunter when traded or when exposed to a Linking Cord. It is the final form of Gastly.",
    image: "https://i.imgur.com/0EwiWlL.jpeg",
    price: 200
  },
  {
    id: 27,
    name: "Psyduck",
    category: "Mythical Creatures",
    description: "Psyduck is a Water-type Pokémon introduced in Generation I. It evolves into Golduck starting at level 33.",
    image: "https://i.imgur.com/U44YvKR.jpeg",
    price: 250
  },
  {
    id: 28,
    name: "Squirtle",
    category: "Mythical Creatures",
    description: "Squirtle is a Water-type Pokémon introduced in Generation I. Along with Bulbasaur and Charmander, Squirtle is one of the three first partner Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen.",
    image: "https://i.imgur.com/FLH8tPB.jpeg",
    price: 90
  },
  {
    id: 29,
    name: "Cyndaquil",
    category: "Mythical Creatures",
    description: "Cyndaquil Along with Chikorita and Totodile, Cyndaquil is one of the three first partner Pokémon of Johto available at the beginning of Pokémon Gold, Silver, Crystal, HeartGold, and SoulSilver. Cyndaquil is also one of the three first partner Pokémon of Hisui in Pokémon Legends: Arceus, alongside Rowlet and Oshawott. ",
    image: "https://i.imgur.com/6fBFdbu.jpeg",
    price: 140
  },
  {
    id: 30,
    name: "Chikorita",
    category: "Mythical Creatures",
    description: "Chikorita Along with Cyndaquil and Totodile, Chikorita is one of the three first partner Pokémon of Johto available at the beginning of Pokémon Gold, Silver, Crystal, HeartGold, and SoulSilver.",
    image: "https://i.imgur.com/vx8ICfG.jpeg",
    price: 120
  }
];

const Product = mongoose.model('Product', productMongo);
Product.insertMany(products)
  .then(() => {
    console.log('Data inserted successfully');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error inserting data:', err);
    mongoose.connection.close();
  });
