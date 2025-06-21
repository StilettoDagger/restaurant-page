import tableImage from "../assets/restaurant_table.jpg";

const paragraphs = [
	`
    Welcome to The Shrouded Diner, where every meal is wrapped in
    mystery and served with a dash of intrigue. Nestled in the heart
	of the city, our diner is more than just a place to eat—it's an
	experience.
    `,
	`
	From the moment you step through our doors, you’ll be transported
	to a world of warmth and wonder. With its dimly lit, atmospheric
	interiors and a menu full of culinary surprises, The Shrouded
	Diner promises an adventure for your taste buds. Our chefs craft
	dishes that combine bold flavors with a touch of the unexpected,
	drawing inspiration from cuisines around the globe.
	`,
	`
	Whether you're seeking a cozy corner for an intimate dinner or a
    lively space to gather with friends, our diner offers something
	for everyone. And for those who dare, our "Secret Menu" offers
	hidden gems for the curious and brave.
	`,
	`
	At The Shrouded Diner, every meal tells a story. Come join us and
	let us share ours with you.
	`,
];

export default function renderAbout() {
	const aboutSection = document.createElement("section");
	aboutSection.id = "about";
	aboutSection.className =
		"min-h-screen lg:h-screen bg-neutral-900 flex items-center justify-center";

	const aboutCard = document.createElement("div");
	aboutCard.classList.add("about-card");
	aboutSection.appendChild(aboutCard);

	const imgContainer = document.createElement("div");
	imgContainer.className = "flex-1";

	const img = new Image();
	img.src = tableImage;
	img.alt = "Plates and Wine Glass on Table - by Tembela Bohle";
	img.classList.add("about-img");
	imgContainer.appendChild(img);
	aboutCard.appendChild(imgContainer);

	const textContainer = document.createElement("div");
	textContainer.classList.add("about-text-container");
	aboutCard.appendChild(textContainer);

	const aboutHeading = document.createElement("h2");
	aboutHeading.classList.add("about-text-container");
	aboutHeading.textContent = "About Us";
	textContainer.appendChild(aboutHeading);

    paragraphs.forEach(para => {
        const aboutPara = document.createElement("p");
        aboutPara.textContent = para;
        textContainer.appendChild(aboutPara);
    });

    document.getElementById("content").appendChild(aboutSection);
}
