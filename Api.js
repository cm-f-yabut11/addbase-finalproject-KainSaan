/* Shared data layer for the public page and /admin.
   USE_MOCK = true stores data in this browser (localStorage) so edits made in
   /admin show up on the public page. Set it to false once the Express API is ready. */
const USE_MOCK = true;
const API = "/api/restaurants";
const MOCK_KEY = "kainsaan_mock_v4";

const SEED = [
  {"restaurant_id": 1, "name": "Bale Dutung", "cuisine": "Kapampangan", "address": "Paul Ave, Villa Gloria Subdivision, Angeles City, 2009 Pampanga", "rating": 4.4, "contact": "+63 933 823 3967"},
  {"restaurant_id": 2, "name": "Aling Lucing Sisig", "cuisine": "Kapampangan", "address": "Glaciano Valdez St, Angeles City, Pampanga", "rating": 4.0, "contact": "+63 906 288 8905"},
  {"restaurant_id": 3, "name": "Angeles Fried Chicken", "cuisine": "Filipino", "address": "1992 Marlim Ave, Balibago, Angeles City, 2009 Pampanga", "rating": 4.2, "contact": "+63 45 625 7644"},
  {"restaurant_id": 4, "name": "Mila's Tokwa't Baboy", "cuisine": "Kapampangan", "address": "San Andres St, Brgy. San Angelo, Angeles City, Pampanga", "rating": 4.4, "contact": "+63 992 583 5825"},
  {"restaurant_id": 5, "name": "Piccolo Padre Restaurant B29", "cuisine": "Italian", "address": "Villa B29, Oasis Hotel, Angeles City, 2009 Pampanga", "rating": 4.6, "contact": "+63 919 887 2195"},
  {"restaurant_id": 6, "name": "HOLA PARADE", "cuisine": "Western", "address": "3rd Floor, SRD Bldg. (Bldg. 2103), E. Jacinto St, C.M. Recto Hwy, Clark Freeport Zone, Angeles, 2009 Pampanga", "rating": 4.9, "contact": "+63 915 286 7507"},
  {"restaurant_id": 7, "name": "Namari Japanese Bistro", "cuisine": "Japanese", "address": "G/F Unit 1, Best Western Metro Clark Savers Mall, MacArthur Hwy, Balibago, Angeles City, 2009 Pampanga", "rating": 4.1, "contact": "+63 999 227 7935"},
  {"restaurant_id": 8, "name": "Wendy's - Friendship Highway", "cuisine": "Fast food", "address": "Fil-Am Friendship Hwy, Angeles, Pampanga", "rating": 4.2, "contact": "+63 945 517 1392"},
  {"restaurant_id": 9, "name": "Jollibee Pampang Angeles", "cuisine": "Fast food", "address": "Lot 7, 8, 9 Arayat Blvd, Angeles, Pampanga", "rating": 3.6, "contact": "#87000"},
  {"restaurant_id": 10, "name": "RICH Taste", "cuisine": "Fast food", "address": "3-8 Magalang Ave, Angeles, Pampanga", "rating": 4.4, "contact": "+63 45 281 0927"},
  {"restaurant_id": 11, "name": "McDonald's Porac Pampanga", "cuisine": "Fast food", "address": "Angeles - Porac - Floridablanca - Dinalupihan Rd, Angeles, 1992 Pampanga", "rating": 3.6, "contact": "+63 2 8888 6236"},
  {"restaurant_id": 12, "name": "Matam-ih", "cuisine": "Kapampangan", "address": "M.A. Roxas Highway, Clark Freeport Zone, Angeles City", "rating": 4.1, "contact": "+63 933 989 2382"},
  {"restaurant_id": 13, "name": "Consuelo by Chef Vince Garcia", "cuisine": "Filipino", "address": "Barn House Bldg, 2092 R.C. Santos, Clark Freeport Zone", "rating": 4.9, "contact": "Not listed"},
  {"restaurant_id": 14, "name": "Tito Boy by Chef Bong Sagmit", "cuisine": "Filipino", "address": "Clark Freeport Zone, Angeles City", "rating": 4.5, "contact": "+63 969 574 8192"},
  {"restaurant_id": 15, "name": "Binulo Restaurant", "cuisine": "Kapampangan", "address": "Bldg. N6410-6413 M.A. Roxas Highway, Clark Freeport Zone", "rating": 4.1, "contact": "Not listed"},
  {"restaurant_id": 16, "name": "Rustica", "cuisine": "Filipino", "address": "Fil-Am Friendship Hwy, Angeles City", "rating": 4.3, "contact": "Not listed"},
  {"restaurant_id": 17, "name": "Wooden Table Lutong Bahay", "cuisine": "Filipino", "address": "Clark Freeport Zone, Angeles City", "rating": 4.0, "contact": "Not listed"},
  {"restaurant_id": 18, "name": "25 Seeds", "cuisine": "Filipino", "address": "2F Dycaico Ancestral House, Barangay Sto. Rosario, Angeles City", "rating": 4.3, "contact": "Not listed"},
  {"restaurant_id": 19, "name": "19 Copung Copung", "cuisine": "Filipino", "address": "MacArthur Highway, Balibago, Angeles City", "rating": 4.0, "contact": "Not listed"},
  {"restaurant_id": 20, "name": "Garden Dine", "cuisine": "Filipino", "address": "Abad Santos Street, Angeles City", "rating": 4.2, "contact": "Not listed"},
  {"restaurant_id": 21, "name": "The Vintage Hall - 24 hour Brunch Club", "cuisine": "Western", "address": "ABC Hotel, 21st Street, Don Juico Ave, Angeles City", "rating": 4.8, "contact": "+63 917 701 5880"},
  {"restaurant_id": 22, "name": "The Fireplace by Steak Experience PH", "cuisine": "Western", "address": "46-5 Aniceto Gueco St, Pulung Maragul, Angeles City", "rating": 4.6, "contact": "Not listed"},
  {"restaurant_id": 23, "name": "Trattoria Altrove Angeles City", "cuisine": "Italian", "address": "Don Juico Ave, Angeles City", "rating": 4.3, "contact": "Facebook Messenger"},
  {"restaurant_id": 24, "name": "Amare by Chef Chris", "cuisine": "Italian", "address": "Royce Hotel, M.A. Roxas Highway, Clark Freeport Zone", "rating": 4.6, "contact": "+63 45 499 7888"},
  {"restaurant_id": 25, "name": "Sage by Ardesia", "cuisine": "International", "address": "Ardesia Resort and Spa, Jose P Laurel Ave, Brgy. Margot, Angeles City", "rating": 4.5, "contact": "Ardesia Resort front desk"},
  {"restaurant_id": 26, "name": "El Espanol Restaurant", "cuisine": "Spanish", "address": "Nepo Center, Cluster II-D, Plaridel Street, Angeles City", "rating": 4.8, "contact": "+63 917 132 8425"},
  {"restaurant_id": 27, "name": "Chez Suzette Philippines", "cuisine": "European", "address": "CDC Barn House 2080, Clark Freeport Zone", "rating": 5.0, "contact": "Not listed"},
  {"restaurant_id": 28, "name": "ESTOS Clark", "cuisine": "European", "address": "Unit A8 G/F, Central Park Square, Clark", "rating": 4.6, "contact": "Not listed"},
  {"restaurant_id": 29, "name": "Goji Kitchen + Bar", "cuisine": "International", "address": "Clark Marriott Hotel, 5398 Manuel A. Roxas Highway, Clark Freeport Zone", "rating": 4.4, "contact": "+63 45 598 5002"},
  {"restaurant_id": 30, "name": "Markt", "cuisine": "European", "address": "Swissôtel Clark, M.A. Roxas Highway, Clark Freeport Zone", "rating": 4.3, "contact": "Swissôtel Clark concierge"},
  {"restaurant_id": 31, "name": "Clarkton Restaurant", "cuisine": "International", "address": "620 Don Juico Ave, Balibago, Angeles City", "rating": 4.8, "contact": "+63 45 322 3424"},
  {"restaurant_id": 32, "name": "Babar: Fashionable Elevated Dining", "cuisine": "International", "address": "Don Juico Ave, Angeles City", "rating": 4.5, "contact": "Not listed"},
  {"restaurant_id": 33, "name": "The Veranda Herbs and Spices", "cuisine": "International", "address": "MacArthur Hwy, Angeles City", "rating": 4.7, "contact": "Not listed"},
  {"restaurant_id": 34, "name": "Uncle Joe's Italian Restaurant", "cuisine": "Italian", "address": "Mount Arayat St, Malabañas, Angeles City", "rating": 4.6, "contact": "Not listed"},
  {"restaurant_id": 35, "name": "Al Bacio Italian Restaurant", "cuisine": "Italian", "address": "442 21st St, Angeles City", "rating": 4.3, "contact": "Not listed"},
  {"restaurant_id": 36, "name": "Swiss Chalet", "cuisine": "European", "address": "A. Santos St, Balibago, Angeles City", "rating": 4.2, "contact": "+63 969 481 2585"},
  {"restaurant_id": 37, "name": "House of Chops", "cuisine": "Western", "address": "Lot 1 Manuel A. Roxas Hwy, Clark Freeport Zone", "rating": 4.1, "contact": "Not listed"},
  {"restaurant_id": 38, "name": "Baker J Cafe Clark", "cuisine": "Cafe & bakery", "address": "Country Club Dr, Filinvest Mimosa+, Clark Freeport Zone", "rating": 3.9, "contact": "Not listed"},
  {"restaurant_id": 39, "name": "Wu Xing", "cuisine": "Chinese", "address": "Clark Freeport Zone, Mabalacat/Angeles border", "rating": 4.4, "contact": "Clark Marriott reservations"},
  {"restaurant_id": 40, "name": "Smoki Moto", "cuisine": "Korean", "address": "Clark Marriott Hotel Rooftop, Clark Freeport Zone", "rating": 4.2, "contact": "Clark Marriott reservations"},
  {"restaurant_id": 41, "name": "Fortune Hong Kong Seafood Restaurant", "cuisine": "Chinese", "address": "MacArthur Highway, Balibago, Angeles City", "rating": 4.1, "contact": "Not listed"},
  {"restaurant_id": 42, "name": "Jiro Izakaya", "cuisine": "Japanese", "address": "Friendship Highway, Angeles City", "rating": 4.2, "contact": "Not listed"},
  {"restaurant_id": 43, "name": "Friendship Garden Restaurant", "cuisine": "Chinese", "address": "Enclave Commercial Complex, Fil-Am Friendship Hwy, Angeles City", "rating": 4.5, "contact": "Facebook"},
  {"restaurant_id": 44, "name": "52Stone Family Restaurant", "cuisine": "International", "address": "167 Fil-Am Friendship Hwy, Angeles City", "rating": 4.3, "contact": "+63 45 436 1782"},
  {"restaurant_id": 45, "name": "Kynd Dining", "cuisine": "International", "address": "Brgy. Sapangbato, Angeles City", "rating": 4.3, "contact": "Instagram or Facebook"},
  {"restaurant_id": 46, "name": "Herrys Bistro", "cuisine": "International", "address": "Unit 7 Fil-Am Friendship Hwy, Angeles City", "rating": 4.7, "contact": "Not listed"},
  {"restaurant_id": 47, "name": "Couscousi Mediterranean Grill", "cuisine": "Mediterranean", "address": "Parade Grounds Barnhouse 2079, Clark Freeport Zone", "rating": 4.3, "contact": "Not listed"},
  {"restaurant_id": 48, "name": "Recado by Carlos Villaflor", "cuisine": "International", "address": "Filinvest Mimosa+, Mabalacat/Clark", "rating": 4.9, "contact": "Not listed"},
  {"restaurant_id": 49, "name": "Cioccolo Carat Cafe", "cuisine": "Cafe & bakery", "address": "Royal Garden Estate, Fil-Am Friendship Hwy, Angeles City", "rating": 4.4, "contact": "Not listed"},
  {"restaurant_id": 50, "name": "Didi's Pizza", "cuisine": "Western", "address": "MacArthur Highway, Balibago, Angeles City", "rating": 4.2, "contact": "Not listed"},
  {"restaurant_id": 51, "name": "Rare Bar & Grill", "cuisine": "Western", "address": "Mimosa Leisure Estate Filinvest Mimosa+ Leisure City, Mimosa Dr, Clark Freeport", "rating": 4.7, "contact": "+63 998 587 8166"},
  {"restaurant_id": 52, "name": "The Dine by Tony Jung", "cuisine": "Korean", "address": "Unit 104 8th Avenue, Lifestyle Mall, M.A. Roxas Highway, Clark", "rating": 4.9, "contact": "Not listed"},
  {"restaurant_id": 53, "name": "Barn by Conti’s", "cuisine": "Filipino", "address": "5GJF+XG9, Clark Freeport, Angeles City", "rating": 4.5, "contact": "Not listed"},
  {"restaurant_id": 54, "name": "Shaking Prawn - The Infinity", "cuisine": "Seafood", "address": "The Infinity, Angeles City", "rating": 4.7, "contact": "Not listed"},
  {"restaurant_id": 55, "name": "Koyang Ry Sizzling House - Friendship Branch", "cuisine": "Filipino", "address": "Fil-Am Friendship Hwy, Angeles City", "rating": 4.5, "contact": "Not listed"},
  {"restaurant_id": 56, "name": "Lu Cia's Grill and Resto", "cuisine": "Filipino", "address": "Korean Town, Grance St. corner Don Juico Ave, Anunas, Angeles City", "rating": 4.1, "contact": "Not listed"},
  {"restaurant_id": 57, "name": "Crabs N Crack - Timog Friendship", "cuisine": "Seafood", "address": "Fil-Am Friendship Hwy, Angeles City", "rating": 4.7, "contact": "Not listed"},
  {"restaurant_id": 58, "name": "Crabs N Crack - Korean Town", "cuisine": "Seafood", "address": "Rexsun Building, Fil-Am Friendship Hwy, Angeles City", "rating": 4.6, "contact": "Not listed"},
  {"restaurant_id": 59, "name": "Crab N Bites Angeles", "cuisine": "Seafood", "address": "Fil-Am Friendship Hwy, Angeles City", "rating": 4.6, "contact": "Not listed"},
  {"restaurant_id": 60, "name": "Clark Lomi House", "cuisine": "Filipino", "address": "Manuel L Quezon Ave, Clark Freeport", "rating": 4.0, "contact": "Not listed"},
  {"restaurant_id": 61, "name": "U-RACK Angeles Branch", "cuisine": "Filipino", "address": "2nd Floor, Century Hotel Complex, Pagcor Drive, Balibago", "rating": 4.8, "contact": "Facebook"},
  {"restaurant_id": 62, "name": "Sayam House", "cuisine": "Filipino", "address": "2089 R. C. Santos, Clark Freeport Zone", "rating": 4.6, "contact": "Not listed"},
  {"restaurant_id": 63, "name": "Aranci Blú Ristorante", "cuisine": "Italian", "address": "212 Fil-Am Friendship Hwy Phase II, Angeles City", "rating": 4.6, "contact": "Not listed"},
  {"restaurant_id": 64, "name": "Al Forno by the Veranda", "cuisine": "Italian", "address": "Unit B1 2nd Floor Tower 1, Clark City Front Mall, M.A. Roxas Hwy", "rating": 4.3, "contact": "Not listed"},
  {"restaurant_id": 65, "name": "Bayernstubn Bistro & Deli", "cuisine": "European", "address": "14 Rizal St. corner Plaridel St, Plaridel, Angeles City", "rating": 4.6, "contact": "Not listed"},
  {"restaurant_id": 66, "name": "Five44 Bar & Restaurant", "cuisine": "Western", "address": "544 Don Juico Ave, Angeles City", "rating": 4.3, "contact": "Not listed"},
  {"restaurant_id": 67, "name": "Olive", "cuisine": "Mediterranean", "address": "Hilton Clark Sun Valley Resort, Jose Abad Santos Ave, Clark", "rating": 4.5, "contact": "Hilton Clark concierge"},
  {"restaurant_id": 68, "name": "de Paolo's Restaurant", "cuisine": "Italian", "address": "Fil-Am Friendship Hwy, Angeles City", "rating": 4.4, "contact": "Not listed"},
  {"restaurant_id": 69, "name": "Mitsuki", "cuisine": "Japanese", "address": "First Clark Hotel & Residences, Clark Freeport Zone", "rating": 4.6, "contact": "First Clark Hotel front desk"},
  {"restaurant_id": 70, "name": "Matnamui Gwangjang (Matjib Restaurant)", "cuisine": "Korean", "address": "Fil-Am Friendship Hwy, Angeles City", "rating": 4.4, "contact": "+63 966 166 2215"},
  {"restaurant_id": 71, "name": "Yuzu Hana & Reserve Restaurant", "cuisine": "Japanese", "address": "Top G Bldg, Unit B Lot 14-20 Kamputpot St, Fil-Am Friendship Hwy", "rating": 5.0, "contact": "Not listed"},
  {"restaurant_id": 72, "name": "MAPO GALBI", "cuisine": "Korean", "address": "Fil-Am Friendship Hwy, Angeles City", "rating": 4.4, "contact": "Not listed"},
  {"restaurant_id": 73, "name": "Changkat Asian Kitchen & Bar", "cuisine": "Southeast Asian", "address": "243 A Santos Rd, Balibago, Angeles City", "rating": 4.6, "contact": "Not listed"},
  {"restaurant_id": 74, "name": "Dwaeji Galbi Restaurant", "cuisine": "Korean", "address": "7 Fil-Am Friendship Hwy, Angeles City", "rating": 3.8, "contact": "Not listed"},
  {"restaurant_id": 75, "name": "K-Food Kitchen", "cuisine": "Korean", "address": "Blk 29, Lot 13 Fil-Am Friendship Hwy, Cutcut", "rating": 4.6, "contact": "Not listed"},
  {"restaurant_id": 76, "name": "Huwon by Kiwa", "cuisine": "Korean", "address": "5GHJ+H7M, Clark/Angeles Area", "rating": 4.4, "contact": "Casino front desk"},
  {"restaurant_id": 77, "name": "Moumou Unlimited Hotpot & Grill", "cuisine": "Asian fusion", "address": "Fil-Am Friendship Hwy, Angeles City", "rating": 4.2, "contact": "+63 908 811 8186"},
  {"restaurant_id": 78, "name": "Sit-n-Bull Clark Restaurant", "cuisine": "Asian fusion", "address": "Philexcel Business Park, Pavilion Mall, M.A. Roxas Hwy", "rating": 4.6, "contact": "Not listed"},
  {"restaurant_id": 79, "name": "Grumpy Joe Angeles - Friendship Hwy", "cuisine": "Western", "address": "Fil-Am Friendship Hwy, Angeles City (Opposite Westfields International)", "rating": 3.9, "contact": "+63 954 471 9837"},
  {"restaurant_id": 80, "name": "Remember Cafe", "cuisine": "Cafe & bakery", "address": "Lot 1-2 Fil-Am Friendship Hwy, Angeles City", "rating": 4.4, "contact": "Not listed"},
  {"restaurant_id": 81, "name": "VG Bakery + Bistro - Clark", "cuisine": "Cafe & bakery", "address": "SRD Bldg, 2062-B G/F E. Jacinto, Clark Freeport Zone", "rating": 4.7, "contact": "Not listed"},
  {"restaurant_id": 82, "name": "Cafe Retro 252", "cuisine": "Cafe & bakery", "address": "Bldg Lot 13-15-17-19, Block 5, Friendship Highway, Cutcut", "rating": 4.4, "contact": "+63 915 752 7000"},
  {"restaurant_id": 83, "name": "Piña Kitchen and Coffee", "cuisine": "Cafe & bakery", "address": "Bliss, Sapangbato, Angeles City", "rating": 4.1, "contact": "Facebook"},
  {"restaurant_id": 84, "name": "Day One Restaurant - Angeles Branch", "cuisine": "Asian fusion", "address": "Block 29, Unit 104-106, Omnistellar Building, Brgy. Cutcut", "rating": 4.4, "contact": "Instagram"},
  {"restaurant_id": 85, "name": "The Clouds Bar", "cuisine": "Bar & lounge", "address": "One Euphoria Residences Upper Deck, 52 A. Santos Rd", "rating": 4.8, "contact": "One Euphoria front desk"},
  {"restaurant_id": 86, "name": "TIMES CAFE - Rooftop Bar & Restaurant", "cuisine": "International", "address": "B22 L7-12 Fil-Am Friendship Hwy, Angeles City", "rating": 4.8, "contact": "Not listed"},
  {"restaurant_id": 87, "name": "Wildspices Café Infinity", "cuisine": "International", "address": "5J74+8W4, Angeles City Area", "rating": 4.6, "contact": "Not listed"},
  {"restaurant_id": 88, "name": "YUKI RIRI", "cuisine": "Asian fusion", "address": "Unit D, JH Sky Building, Angeles City", "rating": 4.9, "contact": "Not listed"},
  {"restaurant_id": 89, "name": "Mario’s Clark", "cuisine": "Western", "address": "2084 R. C. Santos, Clark Freeport Zone", "rating": 4.4, "contact": "Not listed"},
  {"restaurant_id": 90, "name": "Jollibee - Friendship Highway", "cuisine": "Fast food", "address": "Fil-Am Friendship Hwy, Angeles City", "rating": 3.8, "contact": "#87000"},
  {"restaurant_id": 91, "name": "McDonald's - SM City Clark", "cuisine": "Fast food", "address": "G/F SM City Clark, M.A. Roxas Hwy, Malabanias", "rating": 4.0, "contact": "+63 2 8888 6236"},
  {"restaurant_id": 92, "name": "KFC - Balibago", "cuisine": "Fast food", "address": "MacArthur Hwy, Balibago, Angeles City", "rating": 3.9, "contact": "+63 2 8887 8888"},
  {"restaurant_id": 93, "name": "Burger King - Clark", "cuisine": "Fast food", "address": "M.A. Roxas Highway, Clark Freeport Zone", "rating": 4.1, "contact": "#22222"},
  {"restaurant_id": 94, "name": "Chowking - Nepo Mart", "cuisine": "Fast food", "address": "Nepo Mart Complex, Plaridel St, Angeles City", "rating": 3.7, "contact": "#98888"},
  {"restaurant_id": 95, "name": "Greenwich - SM City Clark", "cuisine": "Fast food", "address": "SM City Clark, M.A. Roxas Hwy, Malabanias", "rating": 3.8, "contact": "#55555"},
  {"restaurant_id": 96, "name": "Pizza Hut - Balibago", "cuisine": "Fast food", "address": "MacArthur Hwy, Balibago, Angeles City", "rating": 3.9, "contact": "+63 2 8911 1111"},
  {"restaurant_id": 97, "name": "Mang Inasal - Nepo Quad", "cuisine": "Fast food", "address": "Nepo Quadrangle, Plaridel St, Angeles City", "rating": 4.0, "contact": "Not listed"},
  {"restaurant_id": 98, "name": "Shakey's Pizza Parlor - Clark", "cuisine": "Fast food", "address": "M.A. Roxas Highway, Clark Freeport Zone", "rating": 4.2, "contact": "+63 2 8777 7777"}
];

let mem = null; // fallback when the browser blocks localStorage (some file:// setups)
function readMock() {
  try { const s = localStorage.getItem(MOCK_KEY); if (s) return JSON.parse(s); } catch (e) {}
  if (!mem) mem = structuredClone(SEED);
  return structuredClone(mem);
}
function writeMock(list) {
  mem = structuredClone(list);
  try { localStorage.setItem(MOCK_KEY, JSON.stringify(list)); } catch (e) {}
}

async function request(url, options) {
  const res = await fetch(url, { headers: { "Content-Type": "application/json" }, ...options });
  if (!res.ok) throw new Error((await res.json().catch(() => ({}))).message || "Request failed");
  return res.json();
}

const api = {
  async list() {
    return USE_MOCK ? readMock() : request(API);
  },
  async create(data) {
    if (!USE_MOCK) return request(API, { method: "POST", body: JSON.stringify(data) });
    const list = readMock();
    const id = list.reduce((m, r) => Math.max(m, r.restaurant_id), 0) + 1;
    list.push({ restaurant_id: id, ...data });
    writeMock(list);
  },
  async update(id, data) {
    if (!USE_MOCK) return request(`${API}/${id}`, { method: "PUT", body: JSON.stringify(data) });
    writeMock(readMock().map(r => (r.restaurant_id === id ? { restaurant_id: id, ...data } : r)));
  },
  async remove(id) {
    if (!USE_MOCK) return request(`${API}/${id}`, { method: "DELETE" });
    writeMock(readMock().filter(r => r.restaurant_id !== id));
  }
};