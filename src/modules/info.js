const featureList = [
    {
        title: "Mystical Cuisine",
        content: `Step into a world of flavors cloaked in mystery. Our chefs craft
                dishes that tantalize your taste buds and ignite your curiosity.
                From smoky appetizers to desserts that glow in the dark, each
                plate tells a story.`,
    },
    {
        title: "The Veiled Lounge",
        content: `Unwind in an ambiance like no other. Dim lights, velvety seating,
                and a curated playlist transport you to a serene escape. Perfect
                for a quiet dinner or an intimate gathering.`,
    },
    {
        title: "Shadow Feasts",
        content: `Gather your allies for a feast fit for adventurers. Our shadowy
                platters are designed for sharing, featuring a medley of tastes
                that will leave you in awe.`,
    },
    {
        title: "Interactive Dining Experience",
        content: `At The Shrouded Diner, you're part of the story. Solve riddles to
                unlock menu items, uncover hidden messages, and immerse yourself
                in a dining experience like no other.`,
    },
];

export default function renderInfo() {
    const infoSection = document.createElement("section");

    infoSection.id = "info";
    infoSection.className =
        "min-h-[60vh] bg-gradient-to-b from-indigo-200 to-gray-400 p-6";

    const sectionHeading = document.createElement("h1");
    sectionHeading.className =
        "text-6xl text-center font-semibold underline underline-offset-8";
    sectionHeading.textContent = "What we offer";
    infoSection.appendChild(sectionHeading);

    const gridContainer = document.createElement("div");
    gridContainer.className =
        "text-xl font-inter grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 content-center";
    infoSection.appendChild(gridContainer);

    featureList.forEach((feat) => {
        const featCard = document.createElement("div");
        featCard.className =
            "bg-stone-200 border border-black rounded-lg shadow-lg shadow-gray-400 hover:scale-105 transition hover:bg-red-900 hover:text-gray-200";

        const cardHeading = document.createElement("h1");
        cardHeading.className =
            "font-semibold font-playfair text-3xl p-2 border-b border-gray-400";
        cardHeading.textContent = feat.title;
        featCard.appendChild(cardHeading);

        const cardContent = document.createElement("div");
        cardContent.className = "p-2";
        cardContent.textContent = feat.content;
        featCard.appendChild(cardContent);

        gridContainer.appendChild(featCard);
    });

    document.getElementById("content").appendChild(infoSection);
}
