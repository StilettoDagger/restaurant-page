import bgImg from '../assets/restaurant.jpg'

export default function renderHero() {
    const heroSection = document.createElement("selection");
    
    heroSection.id = "hero";
    heroSection.className = "h-screen bg-black relative block";
    
    const divContainer = document.createElement("div");
    divContainer.className = "z-10 text-2xl sm:text-3xl absolute top-1/2 -translate-y-1/2 text-red-300 text-center w-5/6 -translate-x-1/2 left-1/2"
    heroSection.appendChild(divContainer);
    
    const title = document.createElement("h1");
    title.className = "font-bold text-5xl lg:text-7xl leading-relaxed underline underline-offset-8 tracking-wider";
    title.textContent = "Welcome to The Shrouded Diner!";
    
    const subTitle = document.createElement("p");
    subTitle.className = "mt-12 text-slate-200 leading-relaxed italic";
    subTitle.textContent = "We serve you the most delicious food with our first class ingredients and exclusive recipes.";
    
    divContainer.appendChild(title);
    divContainer.appendChild(subTitle);
    
    const img = new Image();
    img.src = bgImg;
    img.className = "h-full w-full object-cover brightness-[0.2] grayscale blur-sm";
    img.alt = "Wine Glasses on Table";
    
    heroSection.appendChild(img);
    
    document.getElementById("content").appendChild(heroSection);
}
