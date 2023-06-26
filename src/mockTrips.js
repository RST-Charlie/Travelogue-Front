
import ani from './assets/turkey.jpg';
import sunset from './assets/sunset.jpg';
import austrailia from './assets/austrailia.jpeg';
import istockphoto from './assets/istockphoto-147049964-612x612.jpg';
import hawaii from './assets/hawaii.webp';

let mockTrips = [
    {
        id: 1,
        title: "Ancient structures at Ani",
        entry: "So cool being in one of the oldest cities in the world",
        photo: ani,
        start_date: "2021-08-01",
        end_date: "2021-08-20",
        city: "ani",
        state: "Kars",
        country: "Turkey",
        region: "Asia",
        international: true,
        user_id: 4
    },
    {
        id: 2,
        title: "OB sunny days and hilly walks",
        entry: "Great to visit the fam and hit the beaches! Leo loved playing with Lizzi at dog beach.",
        photo: sunset,
        start_date: "2022-04-20",
        end_date: "2022-05-25",
        city: "San Diego",
        state: "California",
        country: "United States",
        region: "North America",
        international: false,
        user_id: 4
    },
    {
        id: 3,
        title: "So lit",
        entry: "It was an interesting time",
        photo: austrailia,
        start_date: "2019-01-10",
        end_date: "2019-01-17",
        city: "Brisbane",
        state: "",
        country: "Australia",
        region: "OCeania",
        international: true,
        user_id: 3
    },
    {
        id: 4,
        title: "fun, hot, and exciting",
        entry: "This was my favorite trip! Years and years and years ago",
        photo: istockphoto,
        start_date: "2002-06-05",
        end_date: "2002-06-10",
        city: "",
        state: "",
        country: "Bahamas",
        region: "North America",
        international: true,
        user_id: 2
    },
    {
        id: 5,
        title: "peaceful easy feeling",
        entry: "Hawaii was gorgeous! The beaches, mountains, forests...such a magical place",
        photo: hawaii,
        start_date: "2023-12-23",
        end_date: "2023-12-30",
        city: "Kawaii",
        state: "Hawaii",
        country: "United States",
        region: "Oceania",
        international: false,
        user_id: 1
    }
]

export default mockTrips