document.addEventListener("DOMContentLoaded", function () {
    const pageContainer = document.getElementById("page-container");

    // Définir le contenu de chaque infobulle
    const infobulleContents = [
        { fakeNews: "Il faisait 37°C pendant un mois à Paris en 1895", infoDetail: "FAUX !  Pourquoi ? Premièrement, la température moyenne de 37°C entre mi-août et mi-septembre 1895 à Paris est fausse. Entre le 15 août et le 15 septembre 1895, celle-ci était de 20,3°C, selon les relevés de la station de Paris Montsouris communiqués par Météo-France. Même en faisant la moyenne des températures maximales de chaque journée dans la capitale : celle-ci n’était que de 27,1°C. Seule une journée semble se rapprocher des 37°C mentionnés : le 7 septembre 1895, où la température maximale a été de 36,2°C." },
        { fakeNews: "Il y avait déjà des sécheresses hivernales il y a vingt ans", infoDetail: "VRAI !  Pourquoi ? Les climatosceptiques affirment que, même si personne ne semble s’en souvenir, la France a déjà traversé une longue période de sécheresse hivernale, au début des années 1990." },
        { fakeNews: "Les températures ont toujours varié au cours de l’histoire", infoDetail: "Non pertinent (FAUX) !  Pourquoi ? Ces fluctuations dont les climatosceptiques parlent sont en réalité dûes à de nombreuses choses : l’orbite de la Terre, les variations d’activités du soleil, la dérive des continents ou encore l’activité volcanique. En plus, ces fluctuations se sont faites sur des milliers d’années. Alors qu’actuellement, l’augmentation des températures depuis l’âge industriel est brutale." },
        { fakeNews: "Il a neigé en Arabie saoudite pour la première fois depuis cent ans", infoDetail: "FAUX !  Pourquoi ? Contrairement aux idées reçues, il neige désormais régulièrement dans la région montagneuse de Tabouk, dans le nord de l’Arabie saoudite. Ce fut le cas en 2022, 2021 (date réelle de cette vidéo), 2018, 2016, 2015, ou encore 2013 (la vidéo d’un Saoudien en pleine glissade avait alors fait le tour du Web). Il s’agit même d’un argument touristique de la région." },
        { fakeNews: "New York ensevelie par les eaux n'est que de la science-fiction", infoDetail: "FAUX !  Les villes construites en dessous du niveau de la mer pourront à l’avenir être menacées par la montée des océans. On peut citer New York, mais aussi Miami, Amsterdam ou Tokyo." },
        { fakeNews: "Les actions individuelles n’ont pas d’impact face aux bouleversements écologiques", infoDetail: "FAUX ! Si chacun se mobilise, change son mode de vie, utilise des énergies propres, diminue sa consommation, boycotte les entreprises polluantes… des résultats peuvent intervenir. Le changement climatique est provoqué par l’homme, lui seul peut influer sur le destin de la planète." },
        { fakeNews: "Certaines espèces d'oiseaux vont disparaitre", infoDetail: " VRAI ! En effet, certains oiseaux migrateurs profitent de la précocité du développement de leur source de nourriture (les insectes) en revenant plus tôt, tandis que d'autres reviennent trop tard pour exploiter les pics de pullulation d'insectes. Pour ces derniers, en effet, c'est la photopériode (longueur du jour), indépendante du réchauffement climatique, qui détermine le retour printanier, et non la température. Par conséquent, la répartition des espèces se trouve affectée et les effectifs de certaines peuvent chuter."}
    ];

    const tailleBulle = infobulleContents.length;
    // Créer six infobulles avec contenu dynamique
    for (let i = 0; i < tailleBulle ; i++) {
        const infobulleContent = infobulleContents[i];
        const infobulle = createInfobulle(infobulleContent);
        positionInfobulle(infobulle, i);
        pageContainer.appendChild(infobulle);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.5 }); // Adjust the threshold as needed

    const hiddenElems = document.querySelectorAll('.infobulle');
    hiddenElems.forEach((el) => {
        el.classList.add('hidden'); // Ensure 'hidden' class is initially added
        observer.observe(el);
    });

    function checkSequence(sequence) {
        // Vérifier si la séquence est Haut -> Bas -> Gauche -> Droite
        return (
            sequence[0] === 38 && // Fleche Haut
            sequence[1] === 40 && // Fleche Bas
            sequence[2] === 37 && // Fleche Gauche
            sequence[3] === 39    // Fleche Droite
        );
    }
    });



    function createInfobulle(content) {
        const infobulle = document.createElement("div");
        infobulle.classList.add("infobulle");

        const fakeNews = document.createElement("div");
        fakeNews.classList.add("fake-news");
        fakeNews.textContent = content.fakeNews;

        const infoDetail = document.createElement("div");
        infoDetail.classList.add("info-detail");
        infoDetail.textContent = content.infoDetail;

        infobulle.appendChild(fakeNews);
        infobulle.appendChild(infoDetail);

        return infobulle;
    }

    function positionInfobulle(infobulle, index) {
        const leftPositions = [];
        for (let i = 0; i < 7; i++) {
            leftPositions.push(i % 2 === 0 ? 15 : 70);
        }

        const windowHeight = window.innerHeight * 2.5; // Get the height of the window

        const topPositions = [];
        for (let i = 0; i < 7; i++) {
            const position = (i / (7 - 1)) * windowHeight;
            topPositions.push(position);
        }
        
        console.log(topPositions);
        const percentageLeft = leftPositions[index];
        const topPosition = topPositions[index];

        // Convertir le pourcentage en pixels
        const randomX = (percentageLeft / 100) * window.innerWidth;

        // Espacement minimal de 30px
        infobulle.style.left = `${randomX}px`;
        infobulle.style.top = `${topPosition}px`;
    }

    /*
    document.addEventListener('DOMContentLoaded', function () {
        var infobulle = document.querySelector('.infobulle');
        var root = document.documentElement;
    
        // Update colors based on the scroll position
        window.addEventListener('scroll', function () {
            // Calculate the percentage of how far down the page is scrolled
            var scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    
            // Darken the colors based on the scroll percentage
            var darkenedColor = darkenColor('#008ffd', scrollPercentage);
            var darkenedHoverColor = darkenColor(darkenedColor, 0.2); // Darken hover color by an additional 20%
    
            // Set the new colors using CSS variables
            root.style.setProperty('--bulle-color', darkenedColor);
            root.style.setProperty('--bulle-hover', darkenedHoverColor);
        });
    
        // Function to darken a color based on a percentage
        function darkenColor(color, percentage) {
            // Convert hex to RGB
            var r = parseInt(color.substring(1, 3), 16);
            var g = parseInt(color.substring(3, 5), 16);
            var b = parseInt(color.substring(5, 7), 16);
    
            // Darken the RGB values
            r = Math.round(r * (1 - percentage));
            g = Math.round(g * (1 - percentage));
            b = Math.round(b * (1 - percentage));
    
            // Convert back to hex
            var newColor = '#' + (r < 16 ? '0' : '') + r.toString(16) + (g < 16 ? '0' : '') + g.toString(16) + (b < 16 ? '0' : '') + b.toString(16);
            return newColor;
        }
    });

    */
    
    