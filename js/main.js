 // Sample Digimon data
      const sampleDigimon = [
    {
        id: 1,
        name: "Agumon",
        level: "Rookie",
        elements: ["Fire"],
        description: "A small dinosaur Digimon with sharp claws. Despite its small size, it's very brave and always ready to fight for its friends. Its signature attack is 'Pepper Breath' where it exhales a ball of fire.",
        attack: "Pepper Breath",
        image: "https://digimon.shadowsmith.com/img/agumon.jpg",
        rarity: "Common",
        partner: "Tai Kamiya",
        evolution: {
            "Fresh": "Botamon",
            "In-Training": "Koromon",
            "Rookie": "Agumon",
            "Champion": "Greymon",
            "Ultimate": "MetalGreymon",
            "Mega": "WarGreymon"
        }
    },
    {
        id: 2,
        name: "Gabumon",
        level: "Rookie",
        elements: ["Water", "Earth"],
        description: "A reptilian Digimon that wears the pelt of a Garurumon. Shy but loyal, Gabumon will do anything to protect its friends. Its signature attack is 'Blue Blaster' where it fires a blue flame from its mouth.",
        attack: "Blue Blaster",
        image: "https://digimon.shadowsmith.com/img/gabumon.jpg",
        rarity: "Common",
        partner: "Matt Ishida",
        evolution: {
            "Fresh": "Punimon",
            "In-Training": "Tsunomon",
            "Rookie": "Gabumon",
            "Champion": "Garurumon",
            "Ultimate": "WereGarurumon",
            "Mega": "MetalGarurumon"
        }
    },
    {
        id: 3,
        name: "Patamon",
        level: "Rookie",
        elements: ["Wind", "Light"],
        description: "A flying mammal Digimon with large ears that allow it to fly. Patamon is cheerful and optimistic, always looking for the good in others. Its signature attack is 'Boom Bubble' where it fires explosive bubbles from its mouth.",
        attack: "Boom Bubble",
        image: "https://digimon.shadowsmith.com/img/patamon.jpg",
        rarity: "Common",
        partner: "T.K. Takaishi",
        evolution: {
            "Fresh": "Yuramon",
            "In-Training": "Tanemon",
            "Rookie": "Patamon",
            "Champion": "Angemon",
            "Ultimate": "MagnaAngemon",
            "Mega": "Seraphimon"
        }
    },
    {
        id: 4,
        name: "Gatomon",
        level: "Champion",
        elements: ["Light", "Electric"],
        description: "A cat-like Digimon with a golden ring on its tail. Gatomon is independent and strong-willed, but deeply cares for its friends. Its signature attack is 'Lightning Paw' where it delivers an electrified slash with its claws.",
        attack: "Lightning Paw",
        image: "https://digimon.shadowsmith.com/img/gatomon.jpg",
        rarity: "Rare",
        partner: "Kari Kamiya",
        evolution: {
            "Fresh": "Nyaromon",
            "In-Training": "Salamon",
            "Rookie": "Plotmon",
            "Champion": "Gatomon",
            "Ultimate": "Angewomon",
            "Mega": "Magnadramon"
        }
    },
    {
        id: 5,
        name: "Imperialdramon",
        level: "Mega",
        elements: ["Fire", "Wind", "Metal"],
        description: "A mighty dragon Digimon that combines the powers of WarGreymon and MetalGarurumon. Imperialdramon is one of the most powerful Digimon, capable of destroying entire planets. Its signature attack is 'Giga Crusher' where it fires an incredibly powerful energy blast from its mouth.",
        attack: "Giga Crusher",
        image: "https://digimon.shadowsmith.com/img/imperialdramon.jpg",
        rarity: "Legendary",
        origin: "Created from the DNA of WarGreymon and MetalGarurumon during the final battle against the Dark Masters. Imperialdramon represents the ultimate fusion of courage and friendship, combining the strengths of two legendary warriors to form an unstoppable force for justice.",
        evolution: {
            "Fresh": "Chibomon",
            "In-Training": "Chibickmon",
            "Rookie": "Veemon",
            "Champion": "ExVeemon",
            "Ultimate": "Paildramon",
            "Mega": "Imperialdramon"
        }
    },
    {
        id: 6,
        name: "Aeroveedramon",
        level: "Ultimate",
        elements: ["Wind", "Electric"],
        description: "A dragon Digimon that can fly at incredible speeds. Aeroveedramon is known for its agility and powerful wind attacks. Its signature attack is 'Aero Tornado' where it creates a powerful whirlwind.",
        attack: "Aero Tornado",
        image: "https://digimon.shadowsmith.com/img/aeroveedramon.jpg",
        rarity: "Rare",
        partner: "None",
        evolution: {
            "Fresh": "None",
            "In-Training": "None",
            "Rookie": "None",
            "Champion": "None",
            "Ultimate": "Aeroveedramon",
            "Mega": "None"
        }
    },
    {
        id: 7,
        name: "Airdramon",
        level: "Champion",
        elements: ["Wind"],
        description: "A dragon-like Digimon that can control the winds. Airdramon is known for its speed and aerial combat skills. Its signature attack is 'Wind Cutter' where it slashes enemies with wind blades.",
        attack: "Wind Cutter",
        image: "https://digimon.shadowsmith.com/img/airdramon.jpg",
        rarity: "Uncommon",
        partner: "None",
        evolution: {
            "Fresh": "None",
            "In-Training": "None",
            "Rookie": "None",
            "Champion": "Airdramon",
            "Ultimate": "None",
            "Mega": "None"
        }
    },
    {
        id: 8,
        name: "Akatorimon",
        level: "Rookie",
        elements: ["Fire"],
        description: "A small bird-like Digimon that can breathe fire. Akatorimon is playful and loves to fly around. Its signature attack is 'Fire Breath' where it exhales a small flame.",
        attack: "Fire Breath",
        image: "https://digimon.shadowsmith.com/img/akatorimon.jpg",
        rarity: "Common",
        partner: "None",
        evolution: {
            "Fresh": "None",
            "In-Training": "None",
            "Rookie": "Akatorimon",
            "Champion": "None",
            "Ultimate": "None",
            "Mega": "None"
        }
    },
    {
        id: 9,
        name: "Andromon",
        level: "Champion",
        elements: ["Metal"],
        description: "A humanoid Digimon with a robotic appearance. Andromon is known for its strength and durability. Its signature attack is 'Metal Cannon' where it fires a powerful energy blast.",
        attack: "Metal Cannon",
        image: "https://digimon.shadowsmith.com/img/andromon.jpg",
        rarity: "Rare",
        partner: "None",
        evolution: {
            "Fresh": "None",
            "In-Training": "None",
            "Rookie": "None",
            "Champion": "Andromon",
            "Ultimate": "None",
            "Mega": "None"
        }
    },
    {
        id: 10,
        name: "Angemon",
        level: "Champion",
        elements: ["Light"],
        description: "A holy Digimon that embodies the power of light. Angemon is known for its bravery and protective nature. Its signature attack is 'Heaven's Knuckle' where it delivers a powerful punch infused with light.",
        attack: "Heaven's Knuckle",
        image: "https://digimon.shadowsmith.com/img/angemon.jpg",
        rarity: "Rare",
        partner: "T.K. Takaishi",
        evolution: {
            "Fresh": "None",
            "In-Training": "None",
            "Rookie": "None",
            "Champion": "Angemon",
            "Ultimate": "None",
            "Mega": "None"
        }
    },
    {
        id: 11,
        name: "Angewomon",
        level: "Ultimate",
        elements: ["Light"],
        description: "A powerful angelic Digimon that protects the digital world. Angewomon is known for its grace and strength. Its signature attack is 'Heaven's Charm' where it unleashes a wave of light.",
        attack: "Heaven's Charm",
        image: "https://digimon.shadowsmith.com/img/angewomon.jpg",
        rarity: "Legendary",
        partner: "Kari Kamiya",
        evolution: {
            "Fresh": "None",
            "In-Training": "None",
            "Rookie": "None",
            "Champion": "None",
            "Ultimate": "Angewomon",
            "Mega": "None"
        }
    },
    {
        id: 12,
        name: "Ankylomon",
        level: "Champion",
        elements: ["Earth"],
        description: "A dinosaur-like Digimon with a tough shell. Ankylomon is known for its defensive capabilities. Its signature attack is 'Tail Hammer' where it slams its tail into the ground.",
        attack: "Tail Hammer",
        image: "https://digimon.shadowsmith.com/img/ankylomon.jpg",
        rarity: "Uncommon",
        partner: "None",
        evolution: {
            "Fresh": "None",
            "In-Training": "None",
            "Rookie": "None",
            "Champion": "Ankylomon",
            "Ultimate": "None",
            "Mega": "None"
        }
    },
    {
        id: 13,
        name: "Apocalymon",
        level: "Mega",
        elements: ["Darkness"],
        description: "A powerful and evil Digimon that seeks to destroy the digital world. Apocalymon is known for its destructive abilities. Its signature attack is 'Darkness Wave' where it unleashes a wave of dark energy.",
        attack: "Darkness Wave",
        image: "https://digimon.shadowsmith.com/img/apocalymon.jpg",
        rarity: "Legendary",
        partner: "None",
        evolution: {
            "Fresh": "None",
            "In-Training": "None",
            "Rookie": "None",
            "Champion": "None",
            "Ultimate": "None",
            "Mega": "Apocalymon"
        }
    },
    {
        id: 14,
        name: "Aquillamon",
        level: "Rookie",
        elements: ["Water"],
        description: "A bird-like Digimon that can swim and fly. Aquillamon is known for its agility and grace. Its signature attack is 'Aqua Wing' where it creates a wave of water.",
        attack: "Aqua Wing",
        image: "https://digimon.shadowsmith.com/img/aquillamon.jpg",
        rarity: "Common",
        partner: "None",
        evolution: {
            "Fresh": "None",
            "In-Training": "None",
            "Rookie": "Aquillamon",
            "Champion": "None",
            "Ultimate": "None",
            "Mega": "None"
        }
    },
    {
        id: 15,
        name: "Armadillomon",
        level: "Rookie",
        elements: ["Earth"],
        description: "A small armadillo-like Digimon that can curl into a ball. Armadillomon is known for its defensive abilities. Its signature attack is 'Rolling Attack' where it rolls into enemies.",
        attack: "Rolling Attack",
        image: "https://digimon.shadowsmith.com/img/armadillomon.jpg",
        rarity: "Common",
        partner: "None",
        evolution: {
            "Fresh": "None",
            "In-Training": "None",
            "Rookie": "Armadillomon",
            "Champion": "None",
            "Ultimate": "None",
            "Mega": "None"
        }
    },
    {
        id: 16,
        name: "Aruraumon",
        level: "Rookie",
        elements: ["Wind"],
        description: "A small dragon-like Digimon that can control the winds. Aruraumon is known for its playful nature. Its signature attack is 'Wind Slash' where it creates a gust of wind.",
        attack: "Wind Slash",
        image: "https://digimon.shadowsmith.com/img/aruraumon.jpg",
        rarity: "Common",
        partner: "None",
        evolution: {
            "Fresh": "None",
            "In-Training": "None",
            "Rookie": "Aruraumon",
            "Champion": "None",
            "Ultimate": "None",
            "Mega": "None"
        }
    },
    {
        id: 17,
        name: "Azulongmon",
        level: "Mega",
        elements: ["Water", "Electric"],
        description: "A dragon-like Digimon that embodies the power of the ocean. Azulongmon is known for its wisdom and strength. Its signature attack is 'Oceanic Wave' where it unleashes a massive wave.",
        attack: "Oceanic Wave",
        image: "https://digimon.shadowsmith.com/img/azulongmon.jpg",
        rarity: "Legendary",
        partner: "None",
        evolution: {
            "Fresh": "None",
            "In-Training": "None",
            "Rookie": "None",
            "Champion": "None",
            "Ultimate": "None",
            "Mega": "Azulongmon"
        }
    },
    {
        id: 18,
        name: "Babamon",
        level: "Champion",
        elements: ["Earth"],
        description: "A wise old Digimon that is known for its knowledge of the digital world. Babamon is often seen giving advice to younger Digimon. Its signature attack is 'Earthquake' where it shakes the ground.",
        attack: "Earthquake",
        image: "https://digimon.shadowsmith.com/img/babamon.jpg",
        rarity: "Rare",
        partner: "None",
        evolution: {
            "Fresh": "None",
            "In-Training": "None",
            "Rookie": "None",
            "Champion": "Babamon",
            "Ultimate": "None",
            "Mega": "None"
        }
    },
    {
        id: 19,
        name: "Baihumon",
        level: "Mega",
        elements: ["Earth", "Ice"],
        description: "A powerful beast Digimon that embodies the spirit of the white tiger. Baihumon is known for its strength and agility. Its signature attack is 'White Tiger Strike' where it delivers a powerful slash.",
        attack: "White Tiger Strike",
        image: "https://digimon.shadowsmith.com/img/baihumon.jpg",
        rarity: "Legendary",
        partner: "None",
        evolution: {
            "Fresh": "None",
            "In-Training": "None",
            "Rookie": "None",
            "Champion": "None",
            "Ultimate": "None",
            "Mega": "Baihumon"
        }
    },
    {
        id: 20,
        name: "Bakemon",
        level: "Rookie",
        elements: ["Darkness"],
        description: "A ghost-like Digimon that can scare its enemies. Bakemon is known for its mischievous nature. Its signature attack is 'Ghostly Wail' where it emits a terrifying scream.",
        attack: "Ghostly Wail",
        image: "https://digimon.shadowsmith.com/img/bakemon.jpg",
        rarity: "Common",
        partner: "None",
        evolution: {
            "Fresh": "None",
            "In-Training": "None",
            "Rookie": "Bakemon",
            "Champion": "None",
            "Ultimate": "None",
            "Mega": "None"
        }
    },
    {
        id: 21,
        name: "Betamon",
        level: "Rookie",
        elements: ["Water"],
        description: "A small amphibious Digimon that can swim and breathe underwater. Betamon is known for its playful nature. Its signature attack is 'Electric Shock' where it releases a jolt of electricity.",
        attack: "Electric Shock",
        image: "https://digimon.shadowsmith.com/img/betamon.jpg",
        rarity: "Common",
        partner: "None",
        evolution: {
            "Fresh": "None",
            "In-Training": "None",
            "Rookie": "Betamon",
            "Champion": "None",
            "Ultimate": "None",
            "Mega": "None"
        }
    },
    {
        id: 22,
        name: "Birdramon",
        level: "Champion",
        elements: ["Fire", "Wind"],
        description: "A bird-like Digimon that can fly at high speeds. Birdramon is known for its agility and aerial combat skills. Its signature attack is 'Fire Wing' where it unleashes flames from its wings.",
        attack: "Fire Wing",
        image: "https://digimon.shadowsmith.com/img/birdramon.jpg",
        rarity: "Uncommon",
        partner: "None",
        evolution: {
            "Fresh": "None",
            "In-Training": "None",
            "Rookie": "None",
            "Champion": "Birdramon",
            "Ultimate": "None",
            "Mega": "None"
        }
    },
    {
        id: 23,
        name: "Biyomon",
        level: "Rookie",
        elements: ["Wind"],
        description: "A small bird-like Digimon that is known for its cheerful personality. Biyomon is often seen singing and flying around. Its signature attack is 'Spiral Twister' where it creates a whirlwind.",
        attack: "Spiral Twister",
        image: "https://digimon.shadowsmith.com/img/biyomon.jpg",
        rarity: "Common",
        partner: "None",
        evolution: {
            "Fresh": "None",
            "In-Training": "None",
            "Rookie": "Biyomon",
            "Champion": "None",
            "Ultimate": "None",
            "Mega": "None"
        }
    },
];

        // Initialize localStorage with sample data if empty
        if (!localStorage.getItem('digimonData')) {
            localStorage.setItem('digimonData', JSON.stringify(sampleDigimon));
        }

        if (!localStorage.getItem('registeredUsers')) {
            localStorage.setItem('registeredUsers', JSON.stringify([]));
        }

        if (!localStorage.getItem('usedAttackNames')) {
            const attacks = sampleDigimon.map(d => d.attack);
            localStorage.setItem('usedAttackNames', JSON.stringify(attacks));
        }

        

        // DOM Elements
        const sections = {
            home: document.getElementById('home-section'),
            register: document.getElementById('register-section'),
            submitDigimon: document.getElementById('submit-digimon-section'),
            showcase: document.getElementById('showcase-section')
        };

        const navLinks = document.querySelectorAll('.nav-link');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const featuredDigimonContainer = document.getElementById('featured-digimon');
        const digimonGrid = document.getElementById('digimon-grid');
        const digimonLoading = document.getElementById('digimon-loading');
        const evolutionModal = document.getElementById('evolution-modal');
        const closeModalBtn = document.querySelector('.close-btn');
        const evolutionTreeContainer = document.getElementById('evolution-tree-container');
        const modalDigimonName = document.getElementById('modal-digimon-name');
        const modalDigimonDescription = document.getElementById('modal-digimon-description');
        const modalDigimonAttack = document.getElementById('modal-digimon-attack');
        const modalDigimonOrigin = document.getElementById('modal-digimon-origin');
        const modalOriginStoryContainer = document.getElementById('modal-origin-story-container');
        const randomDigimonBtn = document.getElementById('random-digimon-btn');
        const filterBtn = document.getElementById('filter-btn');
        const filterPanel = document.getElementById('filter-panel');
        const applyFiltersBtn = document.getElementById('apply-filters-btn');
        const resetFiltersBtn = document.getElementById('reset-filters-btn');
        const searchDigimonInput = document.getElementById('search-digimon');
        const filterLevel = document.getElementById('filter-level');
        const filterElement = document.getElementById('filter-element');
        const filterRarity = document.getElementById('filter-rarity');

        // Form elements
        const registrationForm = document.getElementById('registration-form');
        const digimonForm = document.getElementById('digimon-form');
        const originStoryContainer = document.getElementById('origin-story-container');
        const legendaryRadio = document.getElementById('legendary');

        // Current state
        let currentFilters = {
            level: '',
            element: '',
            rarity: '',
            search: ''
        };

        // Event Listeners
        document.addEventListener('DOMContentLoaded', function() {
            // Load featured digimon
            loadFeaturedDigimon();
            
            // Load all digimon for showcase
            loadDigimonShowcase();
            
            // Setup navigation
            setupNavigation();
            
            // Setup form validation
            setupFormValidation();
            
            // Setup modal
            setupModal();
            
            // Setup filters
            setupFilters();
        });

        // Functions
        function setupNavigation() {
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const section = this.getAttribute('data-section');
                    showSection(section);
                    
                    // Update active state
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Update mobile menu links
                    const mobileLinks = document.querySelectorAll('#mobile-menu a');
                    mobileLinks.forEach(l => {
                        if (l.getAttribute('data-section') === section) {
                            l.classList.add('text-blue-600');
                        } else {
                            l.classList.remove('text-blue-600');
                        }
                    });
                });
            });

            // Mobile menu toggle
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });

            // Section buttons
            document.querySelectorAll('[data-section]').forEach(btn => {
                if (!btn.classList.contains('nav-link')) {
                    btn.addEventListener('click', function(e) {
                        if (this.tagName === 'BUTTON') {
                            e.preventDefault();
                            const section = this.getAttribute('data-section');
                            showSection(section);
                            
                            // Update active nav link
                            navLinks.forEach(l => {
                                l.classList.remove('active');
                                if (l.getAttribute('data-section') === section) {
                                    l.classList.add('active');
                                }
                            });
                        }
                    });
                }
            });
        }

        function showSection(sectionName) {
            // Hide all sections
            Object.values(sections).forEach(section => {
                section.classList.remove('active');
            });
            
            // Show requested section
            sections[sectionName].classList.add('active');
            
            // Special handling for showcase section
            if (sectionName === 'showcase') {
                loadDigimonShowcase();
            }
            
            // Scroll to top
            window.scrollTo(0, 0);
        }

        function loadFeaturedDigimon() {
            const digimonData = JSON.parse(localStorage.getItem('digimonData'));
            const featured = digimonData.slice(0, 4); // Get first 4 digimon
            
            featuredDigimonContainer.innerHTML = '';
            
            featured.forEach(digimon => {
                const digimonCard = createDigimonCard(digimon, true);
                featuredDigimonContainer.appendChild(digimonCard);
            });
        }

        function loadDigimonShowcase(filters = {}) {
            digimonLoading.style.display = 'block';
            digimonGrid.innerHTML = '';
            
            setTimeout(() => {
                const digimonData = JSON.parse(localStorage.getItem('digimonData'));
                let filteredDigimon = [...digimonData];
                
                // Apply filters
                if (filters.level) {
                    filteredDigimon = filteredDigimon.filter(d => d.level === filters.level);
                }
                
                if (filters.element) {
                    filteredDigimon = filteredDigimon.filter(d => d.elements.includes(filters.element));
                }
                
                if (filters.rarity) {
                    filteredDigimon = filteredDigimon.filter(d => d.rarity === filters.rarity);
                }
                
                if (filters.search) {
                    const searchTerm = filters.search.toLowerCase();
                    filteredDigimon = filteredDigimon.filter(d => 
                        d.name.toLowerCase().includes(searchTerm) || 
                        d.description.toLowerCase().includes(searchTerm)
                    );
                }
                
                // Display digimon
                if (filteredDigimon.length === 0) {
                    digimonGrid.innerHTML = `
                        <div class="col-span-full text-center py-10">
                            <h3 class="text-xl font-bold mb-2">No Digimon Found</h3>
                            <p>Try adjusting your filters or search term</p>
                        </div>
                    `;
                } else {
                    filteredDigimon.forEach(digimon => {
                        const digimonCard = createDigimonCard(digimon);
                        digimonGrid.appendChild(digimonCard);
                    });
                }
                
                digimonLoading.style.display = 'none';
            }, 500); // Simulate loading
        }

        function createDigimonCard(digimon, isFeatured = false) {
            const card = document.createElement('div');
            card.className = `digi-card ${digimon.rarity.toLowerCase()} relative`;
            
            // Determine badge color based on level
            let badgeClass = '';
            switch(digimon.level) {
                case 'In-Training': badgeClass = 'in-training'; break;
                case 'Rookie': badgeClass = 'rookie'; break;
                case 'Champion': badgeClass = 'champion'; break;
                case 'Ultimate': badgeClass = 'ultimate'; break;
                case 'Mega': badgeClass = 'mega'; break;
            }
            
            // Create elements
            const elementsHTML = digimon.elements.map(el => 
                `<span class="element-tag ${el.toLowerCase()}">${el}</span>`
            ).join('');
            
            const shortDescription = digimon.description.length > 100 
                ? digimon.description.substring(0, 100) + '...' 
                : digimon.description;
            
            card.innerHTML = `
                <div class="p-4">
                    <div class="relative">
                        <img src="${digimon.image}" alt="${digimon.name}" class="w-full h-48 object-cover rounded-lg mb-3">
                        <span class="level-badge ${badgeClass}">${digimon.level}</span>
                    </div>
                    <h3 class="text-xl font-bold mb-1">${digimon.name}</h3>
                    <div class="mb-2">
                        ${elementsHTML}
                    </div>
                    <p class="text-sm text-gray-600 mb-3">${shortDescription}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-sm font-medium ${digimon.rarity === 'Common' ? 'text-gray-600' : digimon.rarity === 'Rare' ? 'text-yellow-600' : 'text-red-600'}">
                            ${digimon.rarity}
                        </span>
                        <button class="digi-btn view-evolution-btn" data-digimon-id="${digimon.id}">
                            Evolution
                        </button>
                    </div>
                </div>
            `;
            
            // Add event listener to evolution button
            if (!isFeatured) {
                card.querySelector('.view-evolution-btn').addEventListener('click', function() {
                    showEvolutionModal(digimon.id);
                });
            }
            
            return card;
        }

        function showEvolutionModal(digimonId) {
            const digimonData = JSON.parse(localStorage.getItem('digimonData'));
            const digimon = digimonData.find(d => d.id === digimonId);
            
            if (!digimon) return;
            
            // Set modal content
            modalDigimonName.textContent = `${digimon.name} Evolution Tree`;
            modalDigimonDescription.textContent = digimon.description;
            modalDigimonAttack.textContent = `Signature Attack: ${digimon.attack}`;
            
            if (digimon.origin) {
                modalDigimonOrigin.textContent = digimon.origin;
                modalOriginStoryContainer.style.display = 'block';
            } else {
                modalOriginStoryContainer.style.display = 'none';
            }
            
            // Build evolution tree
            evolutionTreeContainer.innerHTML = '';
            
            if (digimon.evolution) {
                const stages = ['Fresh', 'In-Training', 'Rookie', 'Champion', 'Ultimate', 'Mega'];
                
                stages.forEach(stage => {
                    const digimonName = digimon.evolution[stage];
                    if (digimonName) {
                        const stageDiv = document.createElement('div');
                        stageDiv.className = 'evolution-stage';
                        
                        const stageName = document.createElement('h4');
                        stageName.className = 'font-bold mb-2';
                        stageName.textContent = stage;
                        
                        const digimonImg = document.createElement('div');
                        digimonImg.className = 'w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-sm text-center';
                        digimonImg.textContent = digimonName;
                        
                        stageDiv.appendChild(stageName);
                        stageDiv.appendChild(digimonImg);
                        
                        evolutionTreeContainer.appendChild(stageDiv);
                        
                        // Add connecting line except after last stage
                        if (stage !== 'Mega') {
                            const lineDiv = document.createElement('div');
                            lineDiv.className = 'evolution-line';
                            evolutionTreeContainer.appendChild(lineDiv);
                        }
                    }
                });
            } else {
                evolutionTreeContainer.innerHTML = '<p>No evolution data available for this Digimon.</p>';
            }
            
            // Show modal
            evolutionModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function setupModal() {
            closeModalBtn.addEventListener('click', function() {
                evolutionModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
            
            window.addEventListener('click', function(e) {
                if (e.target === evolutionModal) {
                    evolutionModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        }

        function setupFormValidation() {
            // Registration form validation
            registrationForm.addEventListener('submit', function(e) {
                e.preventDefault();
                if (validateRegistrationForm()) {
                    // Simulate form submission
                    alert('Registration successful! Welcome to DigiWorld!');
                    showSection('home');
                    
                    // Save user to localStorage (simulated)
                    const users = JSON.parse(localStorage.getItem('registeredUsers'));
                    const newUser = {
                        username: document.getElementById('username').value,
                        email: document.getElementById('email').value
                    };
                    users.push(newUser);
                    localStorage.setItem('registeredUsers', JSON.stringify(users));
                    
                    // Reset form
                    this.reset();
                    document.getElementById('avatar-preview').style.display = 'none';
                }
            });
            
            // Avatar preview
            document.getElementById('avatar').addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        const preview = document.getElementById('avatar-preview');
                        preview.src = event.target.result;
                        preview.style.display = 'block';
                    };
                    reader.readAsDataURL(file);
                }
            });
            
            // Digimon form validation
            digimonForm.addEventListener('submit', function(e) {
                e.preventDefault();
                if (validateDigimonForm()) {
                    // Create new digimon
                    const newDigimon = {
                        id: Date.now(), // Simple unique ID
                        name: document.getElementById('digimon-name').value,
                        level: document.querySelector('input[name="level"]:checked').value,
                        elements: Array.from(document.querySelectorAll('input[name="element"]:checked')).map(el => el.value),
                        description: document.getElementById('description').value,
                        attack: document.getElementById('attack-name').value,
                        image: 'https://via.placeholder.com/300.png?text=Digimon', // Placeholder for actual image
                        rarity: document.querySelector('input[name="rarity"]:checked').value,
                        partner: document.getElementById('partner-tamer').value || null
                    };
                    
                    // Add origin story if legendary
                    if (newDigimon.rarity === 'Legendary') {
                        newDigimon.origin = document.getElementById('origin-story').value;
                    }
                    
                    // Add to localStorage
                    const digimonData = JSON.parse(localStorage.getItem('digimonData'));
                    digimonData.push(newDigimon);
                    localStorage.setItem('digimonData', JSON.stringify(digimonData));
                    
                    // Add attack name to used attacks
                    const usedAttacks = JSON.parse(localStorage.getItem('usedAttackNames'));
                    usedAttacks.push(newDigimon.attack);
                    localStorage.setItem('usedAttackNames', JSON.stringify(usedAttacks));
                    
                    // Show success message
                    alert(`${newDigimon.name} has been added to the Digimon Encyclopedia!`);
                    showSection('showcase');
                    
                    // Reset form
                    this.reset();
                    document.getElementById('digimon-image-preview').style.display = 'none';
                    originStoryContainer.style.display = 'none';
                }
            });
            
            // Digimon image preview
            document.getElementById('digimon-image').addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        const preview = document.getElementById('digimon-image-preview');
                        preview.src = event.target.result;
                        preview.style.display = 'block';
                    };
                    reader.readAsDataURL(file);
                }
            });
            
            // Show/hide origin story based on rarity
            document.querySelectorAll('input[name="rarity"]').forEach(radio => {
                radio.addEventListener('change', function() {
                    if (this.value === 'Legendary') {
                        originStoryContainer.style.display = 'block';
                    } else {
                        originStoryContainer.style.display = 'none';
                    }
                });
            });
            
            // Real-time password match validation
            document.getElementById('confirm-password').addEventListener('input', function() {
                const password = document.getElementById('password').value;
                const confirmPassword = this.value;
                
                if (password && confirmPassword) {
                    if (password !== confirmPassword) {
                        document.getElementById('confirm-password-error').style.display = 'block';
                        this.classList.add('input-error');
                        this.classList.remove('input-success');
                    } else {
                        document.getElementById('confirm-password-error').style.display = 'none';
                        this.classList.remove('input-error');
                        this.classList.add('input-success');
                    }
                }
            });
            
            // Username availability check
            document.getElementById('username').addEventListener('blur', function() {
                const username = this.value;
                const users = JSON.parse(localStorage.getItem('registeredUsers'));
                
                if (username && users.some(u => u.username === username)) {
                    document.getElementById('username-taken').style.display = 'block';
                    this.classList.add('input-error');
                    this.classList.remove('input-success');
                }
            });
            
            // Email availability check
            document.getElementById('email').addEventListener('blur', function() {
                const email = this.value;
                const users = JSON.parse(localStorage.getItem('registeredUsers'));
                
                if (email && users.some(u => u.email === email)) {
                    document.getElementById('email-taken').style.display = 'block';
                    this.classList.add('input-error');
                    this.classList.remove('input-success');
                }
            });
            
            // Digimon name availability check
            document.getElementById('digimon-name').addEventListener('blur', function() {
                const name = this.value;
                const digimonData = JSON.parse(localStorage.getItem('digimonData'));
                
                if (name && digimonData.some(d => d.name.toLowerCase() === name.toLowerCase())) {
                    document.getElementById('digimon-name-taken').style.display = 'block';
                    this.classList.add('input-error');
                    this.classList.remove('input-success');
                }
            });
            
            // Attack name availability check
            document.getElementById('attack-name').addEventListener('blur', function() {
                const attack = this.value;
                const usedAttacks = JSON.parse(localStorage.getItem('usedAttackNames'));
                
                if (attack && usedAttacks.some(a => a.toLowerCase() === attack.toLowerCase())) {
                    document.getElementById('attack-name-taken').style.display = 'block';
                    this.classList.add('input-error');
                    this.classList.remove('input-success');
                }
            });
        }

        function validateRegistrationForm() {
            let isValid = true;
            
            // Full name
            const fullName = document.getElementById('full-name').value;
            if (!fullName) {
                document.getElementById('full-name-error').style.display = 'block';
                document.getElementById('full-name').classList.add('input-error');
                isValid = false;
            } else {
                document.getElementById('full-name-error').style.display = 'none';
                document.getElementById('full-name').classList.remove('input-error');
            }
            
            // Username
            const username = document.getElementById('username').value;
            const usernameRegex = /^[a-zA-Z0-9]{5,12}$/;
            if (!usernameRegex.test(username)) {
                document.getElementById('username-error').style.display = 'block';
                document.getElementById('username').classList.add('input-error');
                isValid = false;
            } else {
                document.getElementById('username-error').style.display = 'none';
                document.getElementById('username').classList.remove('input-error');
            }
            
            // Email
            const email = document.getElementById('email').value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('email-error').style.display = 'block';
                document.getElementById('email').classList.add('input-error');
                isValid = false;
            } else {
                document.getElementById('email-error').style.display = 'none';
                document.getElementById('email').classList.remove('input-error');
            }
            
            // Password
            const password = document.getElementById('password').value;
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            if (!passwordRegex.test(password)) {
                document.getElementById('password-error').style.display = 'block';
                document.getElementById('password').classList.add('input-error');
                isValid = false;
            } else {
                document.getElementById('password-error').style.display = 'none';
                document.getElementById('password').classList.remove('input-error');
            }
            
            // Confirm password
            const confirmPassword = document.getElementById('confirm-password').value;
            if (password !== confirmPassword) {
                document.getElementById('confirm-password-error').style.display = 'block';
                document.getElementById('confirm-password').classList.add('input-error');
                isValid = false;
            } else {
                document.getElementById('confirm-password-error').style.display = 'none';
                document.getElementById('confirm-password').classList.remove('input-error');
            }
            
            // Favorite Digimon
            const favoriteDigimon = document.getElementById('favorite-digimon').value;
            if (!favoriteDigimon) {
                document.getElementById('favorite-digimon-error').style.display = 'block';
                document.getElementById('favorite-digimon').classList.add('input-error');
                isValid = false;
            } else {
                document.getElementById('favorite-digimon-error').style.display = 'none';
                document.getElementById('favorite-digimon').classList.remove('input-error');
            }
            
            // Region
            const region = document.getElementById('region').value;
            if (!region) {
                document.getElementById('region-error').style.display = 'block';
                document.getElementById('region').classList.add('input-error');
                isValid = false;
            } else {
                document.getElementById('region-error').style.display = 'none';
                document.getElementById('region').classList.remove('input-error');
            }
            
            // Avatar (optional)
            const avatar = document.getElementById('avatar').files[0];
            if (avatar) {
                const validTypes = ['image/jpeg', 'image/png'];
                if (!validTypes.includes(avatar.type) || avatar.size > 1024 * 1024) {
                    document.getElementById('avatar-error').style.display = 'block';
                    document.getElementById('avatar').classList.add('input-error');
                    isValid = false;
                } else {
                    document.getElementById('avatar-error').style.display = 'none';
                    document.getElementById('avatar').classList.remove('input-error');
                }
            }
            
            // Terms
            const terms = document.getElementById('terms').checked;
            if (!terms) {
                document.getElementById('terms-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('terms-error').style.display = 'none';
            }
            
            return isValid;
        }

        function validateDigimonForm() {
            let isValid = true;
            
            // Digimon name
            const digimonName = document.getElementById('digimon-name').value;
            const nameRegex = /^[a-zA-Z0-9 ]{3,20}$/;
            if (!nameRegex.test(digimonName)) {
                document.getElementById('digimon-name-error').style.display = 'block';
                document.getElementById('digimon-name').classList.add('input-error');
                isValid = false;
            } else {
                document.getElementById('digimon-name-error').style.display = 'none';
                document.getElementById('digimon-name').classList.remove('input-error');
            }
            
            // Level
            const levelSelected = document.querySelector('input[name="level"]:checked');
            if (!levelSelected) {
                document.getElementById('level-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('level-error').style.display = 'none';
            }
            
            // Elements
            const elementsSelected = document.querySelectorAll('input[name="element"]:checked');
            if (elementsSelected.length === 0) {
                document.getElementById('element-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('element-error').style.display = 'none';
            }
            
            // Description
            const description = document.getElementById('description').value;
            if (description.length < 100) {
                document.getElementById('description-error').style.display = 'block';
                document.getElementById('description').classList.add('input-error');
                isValid = false;
            } else {
                document.getElementById('description-error').style.display = 'none';
                document.getElementById('description').classList.remove('input-error');
            }
            
            // Attack name
            const attackName = document.getElementById('attack-name').value;
            if (!attackName) {
                document.getElementById('attack-name-error').style.display = 'block';
                document.getElementById('attack-name').classList.add('input-error');
                isValid = false;
            } else {
                document.getElementById('attack-name-error').style.display = 'none';
                document.getElementById('attack-name').classList.remove('input-error');
            }
            
            // Image
            const digimonImage = document.getElementById('digimon-image').files[0];
            if (!digimonImage) {
                document.getElementById('digimon-image-error').style.display = 'block';
                document.getElementById('digimon-image').classList.add('input-error');
                isValid = false;
            } else {
                const validTypes = ['image/jpeg', 'image/png'];
                if (!validTypes.includes(digimonImage.type) || digimonImage.size > 2 * 1024 * 1024) {
                    document.getElementById('digimon-image-error').style.display = 'block';
                    document.getElementById('digimon-image').classList.add('input-error');
                    isValid = false;
                } else {
                    document.getElementById('digimon-image-error').style.display = 'none';
                    document.getElementById('digimon-image').classList.remove('input-error');
                }
            }
            
            // Origin story (if legendary)
            const rarity = document.querySelector('input[name="rarity"]:checked').value;
            if (rarity === 'Legendary') {
                const originStory = document.getElementById('origin-story').value;
                if (originStory.length < 150) {
                    document.getElementById('origin-story-error').style.display = 'block';
                    document.getElementById('origin-story').classList.add('input-error');
                    isValid = false;
                } else {
                    document.getElementById('origin-story-error').style.display = 'none';
                    document.getElementById('origin-story').classList.remove('input-error');
                }
            }
            
            return isValid;
        }

        function setupFilters() {
            // Toggle filter panel
            filterBtn.addEventListener('click', function() {
                filterPanel.classList.toggle('hidden');
            });
            
            // Apply filters
            applyFiltersBtn.addEventListener('click', function() {
                currentFilters = {
                    level: filterLevel.value,
                    element: filterElement.value,
                    rarity: filterRarity.value,
                    search: searchDigimonInput.value.toLowerCase()
                };
                
                loadDigimonShowcase(currentFilters);
                filterPanel.classList.add('hidden');
            });
            
            // Reset filters
            resetFiltersBtn.addEventListener('click', function() {
                filterLevel.value = '';
                filterElement.value = '';
                filterRarity.value = '';
                searchDigimonInput.value = '';
                
                currentFilters = {
                    level: '',
                    element: '',
                    rarity: '',
                    search: ''
                };
                
                loadDigimonShowcase(currentFilters);
                filterPanel.classList.add('hidden');
            });
            
            // Search input
            searchDigimonInput.addEventListener('input', function() {
                currentFilters.search = this.value.toLowerCase();
                loadDigimonShowcase(currentFilters);
            });

           
    // Handle section switching
    const navLinks = document.querySelectorAll('.nav-link, .digi-btn');
    const sections = document.querySelectorAll('.form-section');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const target = link.getAttribute('data-section');
            if (target) {
                sections.forEach(section => {
                    section.classList.remove('active');
                    section.style.display = 'none';
                });

                const activeSection = document.getElementById(`${target}-section`);
                if (activeSection) {
                    activeSection.classList.add('active');
                    activeSection.style.display = 'block';
                }

                // Optionally scroll to top of new section
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    // Initialize: hide all except home
    window.addEventListener('DOMContentLoaded', () => {
        sections.forEach(section => {
            section.style.display = section.classList.contains('active') ? 'block' : 'none';
        });
    });


            
            // Random digimon button
            randomDigimonBtn.addEventListener('click', function() {
                const digimonData = JSON.parse(localStorage.getItem('digimonData'));
                if (digimonData.length > 0) {
                    const randomIndex = Math.floor(Math.random() * digimonData.length);
                    showEvolutionModal(digimonData[randomIndex].id);
                }
            });
        }