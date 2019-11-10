export const config = {
    username: "jumboFED",
    password: "jumbofrontendcodeproject",
    api_base_url: "https://api.themoviedb.org/3",
    api_key: "6ed12e064b90ae1290fa326ce9e790ff",

    card_image_base: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/",
    backdrop_base: "https://image.tmdb.org/t/p/w1000_and_h563_face/",

    mobile_card_base: "https://image.tmdb.org/t/p/w185_and_h278_bestv2",
    mobile_backdrop_base: "https://image.tmdb.org/t/p/w500_and_h282_face",

    // Below was hard coded data from the request used for development
    // in order to avoid making unnecessary requests or hitting rate limits
    popular_example: {
        "page": 1,
        "total_results": 10000,
        "total_pages": 500,
        "results": [
            {
                "popularity": 403.525,
                "vote_count": 4936,
                "video": false,
                "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
                "id": 475557,
                "adult": false,
                "backdrop_path": "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
                "original_language": "en",
                "original_title": "Joker",
                "genre_ids": [
                    80,
                    18,
                    53
                ],
                "title": "Joker",
                "vote_average": 8.5,
                "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
                "release_date": "2019-10-04"
            }
        ]
    },

    details_examlpe: {
        "adult": false,
        "backdrop_path": "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
        "belongs_to_collection": null,
        "budget": 55000000,
        "genres": [
            {
                "id": 80,
                "name": "Crime"
            },
            {
                "id": 53,
                "name": "Thriller"
            },
            {
                "id": 18,
                "name": "Drama"
            }
        ],
        "homepage": "http://www.jokermovie.net/",
        "id": 475557,
        "imdb_id": "tt7286456",
        "original_language": "en",
        "original_title": "Joker",
        "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        "popularity": 394.256,
        "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        "production_companies": [
            {
                "id": 9993,
                "logo_path": "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
                "name": "DC Entertainment",
                "origin_country": "US"
            },
            {
                "id": 174,
                "logo_path": "/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png",
                "name": "Warner Bros. Pictures",
                "origin_country": "US"
            },
            {
                "id": 429,
                "logo_path": "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
                "name": "DC Comics",
                "origin_country": "US"
            },
            {
                "id": 83036,
                "logo_path": null,
                "name": "Joint Effort",
                "origin_country": "US"
            },
            {
                "id": 79,
                "logo_path": "/tpFpsqbleCzEE2p5EgvUq6ozfCA.png",
                "name": "Village Roadshow Pictures",
                "origin_country": "US"
            },
            {
                "id": 13240,
                "logo_path": "/aTc07YaNHo8WNgkQSnvLmG6w4nW.png",
                "name": "Bron Studios",
                "origin_country": "CA"
            }
        ],
        "production_countries": [
            {
                "iso_3166_1": "US",
                "name": "United States of America"
            }
        ],
        "release_date": "2019-10-02",
        "revenue": 936887108,
        "runtime": 122,
        "spoken_languages": [
            {
                "iso_639_1": "en",
                "name": "English"
            }
        ],
        "status": "Released",
        "tagline": "Put on a happy face.",
        "title": "Joker",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 4991
    },

    search_example: {
        "page": 1,
        "total_results": 7,
        "total_pages": 1,
        "results": [
            {
                "popularity": 7.952,
                "vote_count": 7340,
                "video": false,
                "poster_path": "/z4x0Bp48ar3Mda8KiPD1vwSY3D8.jpg",
                "id": 277834,
                "adult": false,
                "backdrop_path": "/oWU6dgu3RgdSZElkhbZuoPtkWAJ.jpg",
                "original_language": "en",
                "original_title": "Moana",
                "genre_ids": [
                    12,
                    16,
                    35,
                    10751
                ],
                "title": "Moana",
                "vote_average": 7.5,
                "overview": "In Ancient Polynesia, when a terrible curse incurred by Maui reaches an impetuous Chieftain's daughter's island, she answers the Ocean's call to seek out the demigod to set things right.",
                "release_date": "2016-11-23"
            },
            {
                "popularity": 3.895,
                "id": 94727,
                "video": false,
                "vote_count": 17,
                "vote_average": 6.5,
                "title": "Moana",
                "release_date": "2015-11-13",
                "original_language": "en",
                "original_title": "Moana",
                "genre_ids": [
                    99
                ],
                "backdrop_path": "/5qZFIH4NMqCKglcTW0zZKiiBIQS.jpg",
                "adult": false,
                "overview": "Robert J. Flaherty's South Seas follow-up to Nanook of the North is a Gauguin idyll moved by \"pride of beauty... pride of strength.\"",
                "poster_path": "/dkSM2bfwYaqY0k6cEFwej1LRWAk.jpg"
            },
            {
                "popularity": 1.349,
                "id": 45890,
                "video": false,
                "vote_count": 12,
                "vote_average": 7.2,
                "title": "Moana",
                "release_date": "2009-11-01",
                "original_language": "it",
                "original_title": "Moana",
                "genre_ids": [
                    18,
                    10770
                ],
                "backdrop_path": "/r6AAwtnGKKgBmryMkioAXj9krHN.jpg",
                "adult": false,
                "overview": "The life story of Italian iconic pornographic actress Moana Pozzi. The actress Ilona Staller sued the production of the film for the unauthorized use of the character \"Cicciolina\", of which she owned the rights.",
                "poster_path": "/tQYW0qsdm7iri3svsnrordmdb0A.jpg"
            },
            {
                "popularity": 0.6,
                "id": 268516,
                "video": false,
                "vote_count": 0,
                "vote_average": 0,
                "title": "Moana",
                "release_date": "1959-01-01",
                "original_language": "en",
                "original_title": "Moana",
                "genre_ids": [
                    99
                ],
                "backdrop_path": null,
                "adult": false,
                "overview": "Documentary focused on underwater shootings and hawaiian dances.",
                "poster_path": "/w6ObwrtxkVOmrPQaoTq7z0cN8gj.jpg"
            },
            {
                "popularity": 0.6,
                "id": 534297,
                "video": true,
                "vote_count": 0,
                "vote_average": 0,
                "title": "Moana",
                "release_date": "",
                "original_language": "en",
                "original_title": "Moana",
                "genre_ids": [],
                "backdrop_path": null,
                "adult": false,
                "overview": "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.",
                "poster_path": null
            },
            {
                "popularity": 1.948,
                "id": 327317,
                "video": false,
                "vote_count": 9,
                "vote_average": 5.6,
                "title": "Summer Temptations",
                "release_date": "1988-11-25",
                "original_language": "it",
                "original_title": "Provocazione",
                "genre_ids": [
                    18
                ],
                "backdrop_path": "/gOjhdgIFobrYry4WdH10yGuptlo.jpg",
                "adult": false,
                "overview": "In a villa on an island (St. Peter) a little out of season, inhabit Vanessa, a young widow, and stepdaughters Kikki and alive. Vanessa had married their father above all because it was very rich. After her husband's death, Vanessa decided to keep him Alive and Kikki and also call Roberto, her former lover, now a professor with the aim of preparing the two girls to the maturity examination. Shortly after his arrival, he establishes an atmosphere heavy with half-empty Island the villa that seems almost a luxury prison do understand immediately that the stepmother and stepdaughters will hate and despise each other.",
                "poster_path": "/9ugI7lGDCa7CyEPda4fFC3geBr4.jpg"
            },
            {
                "popularity": 0.6,
                "id": 631526,
                "video": false,
                "vote_count": 0,
                "vote_average": 0,
                "title": "Moananuiakea: One Ocean, One People, One Canoe",
                "release_date": "",
                "original_language": "en",
                "original_title": "Moananuiakea: One Ocean, One People, One Canoe",
                "genre_ids": [],
                "backdrop_path": null,
                "adult": false,
                "overview": "From 2019 Maui Film Festival This powerful documentary celebrates the historic Malama Honua Worldwide Voyage that connected countless individuals and communities from around the globe. A voyage that also represented the fulfillment of the vision of Nainoa Thompson and his contemporaries, the passing of the mantle to the next generation of kanaka maoli who will retain the skills of their ancestors and perpetuate this tradition for generations to come so the legacy of Hokulea can last for 1,000 generations.",
                "poster_path": null
            }
        ]
    }
};