const sampleListings = [
    {
        title: "Tropical Paradise Resort",
        description: "A luxurious beachside resort with stunning ocean views and premium amenities.",
        image: "https://unsplash.com/photos/3d-render-of-luxury-hotel-lobby-and-reception-FNAURWZ6Mqc",
        price: 120000,
        location: "Maldives",
        country: "Maldives"
    },
    {
        title: "Royal Heritage Hotel",
        description: "A grand heritage hotel offering a blend of tradition and luxury.",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbeach-resort&psig=AOvVaw1SFtbeaMfP2rdbDtewFGWl&ust=1740593287076000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDCsbi134sDFQAAAAAdAAAAABAI",
        price: 25000,
        location: "Jaipur, Rajasthan",
        country: "India"
    },
    {
        title: "Hilltop Luxury Villa",
        description: "A modern villa perched atop a hill, providing breathtaking sunset views.",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fresort%2F&psig=AOvVaw1SFtbeaMfP2rdbDtewFGWl&ust=1740593287076000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDCsbi134sDFQAAAAAdAAAAABAQ",
        price: 180000,
        location: "Lonavala, Maharashtra",
        country: "India"
    },
    {
        title: "Secluded Jungle Retreat",
        description: "An eco-friendly retreat in the middle of lush greenery for a peaceful escape.",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fresort%2F&psig=AOvVaw1SFtbeaMfP2rdbDtewFGWl&ust=1740593287076000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDCsbi134sDFQAAAAAdAAAAABAg",
        price: 80000,
        location: "Coorg, Karnataka",
        country: "India"
    },
    {
        title: "Skyline Penthouse Hotel",
        description: "A high-rise penthouse with a panoramic view of the city's skyline.",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fresort&psig=AOvVaw1SFtbeaMfP2rdbDtewFGWl&ust=1740593287076000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDCsbi134sDFQAAAAAdAAAAABAo",
        price: 60000,
        location: "Dubai",
        country: "UAE"
    },
    {
        title: "Countryside Stone Cottage",
        description: "A charming stone cottage surrounded by vast fields and rolling hills.",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeach%2520resort%2F&psig=AOvVaw1SFtbeaMfP2rdbDtewFGWl&ust=1740593287076000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDCsbi134sDFQAAAAAdAAAAABAw",
        price: 40000,
        location: "Shimla, Himachal Pradesh",
        country: "India"
    },
    {
        title: "Cliffside Ocean Resort",
        description: "A stunning resort located on the cliffs, offering mesmerizing ocean views.",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%2Fimages%3Fk%3Dbeach%2520resort%2520hotel&psig=AOvVaw1SFtbeaMfP2rdbDtewFGWl&ust=1740593287076000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDCsbi134sDFQAAAAAdAAAAABA4",
        price: 220000,
        location: "Santorini",
        country: "Greece"
    },
    {
        title: "Alpine Ski Lodge",
        description: "A cozy ski lodge nestled in the snowy mountains, ideal for winter sports lovers.",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fresort.html&psig=AOvVaw1SFtbeaMfP2rdbDtewFGWl&ust=1740593287076000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDCsbi134sDFQAAAAAdAAAAABBA",
        price: 150000,
        location: "Aspen, Colorado",
        country: "USA"
    },
    {
        title: "Beachfront Bungalow",
        description: "A private bungalow with direct beach access and a tropical ambiance.",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fresort&psig=AOvVaw1SFtbeaMfP2rdbDtewFGWl&ust=1740593287076000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDCsbi134sDFQAAAAAdAAAAABBI",
        price: 95000,
        location: "Bali",
        country: "Indonesia"
    },
    {
        title: "Safari Adventure Lodge",
        description: "An adventurous stay in the wild with an authentic safari experience.",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fbeach-resort&psig=AOvVaw1SFtbeaMfP2rdbDtewFGWl&ust=1740593287076000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDCsbi134sDFQAAAAAdAAAAABBQ",
        price: 120000,
        location: "Serengeti",
        country: "Tanzania"
    },
    {
        title: "Lakeview Boutique Hotel",
        description: "A boutique hotel overlooking a serene lake, perfect for relaxation.",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fisland-beach-resort%2F3&psig=AOvVaw1SFtbeaMfP2rdbDtewFGWl&ust=1740593287076000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDCsbi134sDFQAAAAAdAAAAABBY",
        price: 70000,
        location: "Udaipur, Rajasthan",
        country: "India"
    },
    {
        title: "Luxury Desert Resort",
        description: "A lavish resort in the heart of the desert with private sand dunes.",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fresort&psig=AOvVaw1SFtbeaMfP2rdbDtewFGWl&ust=1740593287076000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDCsbi134sDFQAAAAAdAAAAABBg",
        price: 200000,
        location: "Dubai",
        country: "UAE"
    },
    {
        title: "Forest Hideaway Cottage",
        description: "A secluded wooden cottage surrounded by a dense forest, perfect for solitude.",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fluxury-villa&psig=AOvVaw1wr0sEWPJzlBhdIZkYwuKq&ust=1740593488088000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjEzJa234sDFQAAAAAdAAAAABAE",
        price: 60000,
        location: "Munnar, Kerala",
        country: "India"
    },
    {
        title: "Water Villa with Infinity Pool",
        description: "A stunning water villa featuring an infinity pool overlooking the ocean.",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dvilla&psig=AOvVaw1wr0sEWPJzlBhdIZkYwuKq&ust=1740593488088000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjEzJa234sDFQAAAAAdAAAAABAI",
        price: 300000,
        location: "Maldives",
        country: "Maldives"
    },
    {
        title: "Winter Wonderland Chalet",
        description: "A cozy wooden chalet offering an enchanting winter experience.",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dvilla&psig=AOvVaw1wr0sEWPJzlBhdIZkYwuKq&ust=1740593488088000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjEzJa234sDFQAAAAAdAAAAABAQ",
        price: 180000,
        location: "Zermatt",
        country: "Switzerland"
    },
    {
        title: "Island Private Resort",
        description: "An exclusive private island resort with crystal-clear waters.",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvilla&psig=AOvVaw1wr0sEWPJzlBhdIZkYwuKq&ust=1740593488088000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjEzJa234sDFQAAAAAdAAAAABAY",
        price: 500000,
        location: "Fiji",
        country: "Fiji"
    },
    {
        title: "Colonial Luxury Mansion",
        description: "A grand colonial-style mansion with a historical touch.",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fhotels%2F&psig=AOvVaw29TEiwb5kxGzULmBZ5QZPQ&ust=1740593553290000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDgvra234sDFQAAAAAdAAAAABAE",
        price: 450000,
        location: "Havana",
        country: "Cuba"
    },
    {
        title: "Tranquil Hill Resort",
        description: "A peaceful hilltop resort with lush greenery and mountain views.",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fhotels%2F&psig=AOvVaw29TEiwb5kxGzULmBZ5QZPQ&ust=1740593553290000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDgvra234sDFQAAAAAdAAAAABAJ",
        price: 140000,
        location: "Ooty, Tamil Nadu",
        country: "India"
    },
    {
        title: "Grand City Hotel",
        description: "A luxury hotel in the heart of the city, providing premium services.",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fhotels%2F&psig=AOvVaw29TEiwb5kxGzULmBZ5QZPQ&ust=1740593553290000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDgvra234sDFQAAAAAdAAAAABAZ",
        price: 90000,
        location: "New York",
        country: "USA"
    },
    {
        title: "Seaside Cliff Villa",
        description: "A beautiful villa built on a cliff, overlooking the vast ocean.",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dhotel&psig=AOvVaw29TEiwb5kxGzULmBZ5QZPQ&ust=1740593553290000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDgvra234sDFQAAAAAdAAAAABAh",
        price: 270000,
        location: "Phuket",
        country: "Thailand"
    }
];


module.exports= { data : sampleListings };