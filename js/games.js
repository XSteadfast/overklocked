// Game library data + search for games.html
// To add a game: put its exact title in the right genre below. It shows up in both views automatically.
const GAME_CATEGORIES = {
    "Shooters": [
        "Aim Lab", "Aliens: Fireteam Elite", "Anger Foot", "Arma 3", "Atomic Heart", "Back 4 Blood", "Battalion 1944", "BattleBit Remastered", "Battlefield 2042", "Black Mesa", "Bodycam", "Counter Strike", "Counter Strike 2", "Counter Strike: Global Offensive", "Counter Strike: Source", "Crime Boss: Rockay City", "Crossfire", "Deathloop", "Deceive Inc.", "Deep Rock Galactic", "Destiny 2", "Dirty Bomb", "DOOM", "DOOM Eternal", "Due Process", "Far Cry 5", "Far Cry 6", "Far Cry New Dawn", "Generation Zero", "Gray Zone Warfare", "GTFO", "Half Life", "Halo Infinite", "Hell Let Loose", "HELLDIVERS 2", "HELLDIVERS: Dive Harder Edition", "High On Life", "Hunt: Showdown", "Insurgency Sandstorm", "KovaaK 2.0", "Left 4 Dead", "Left 4 Dead 2", "Meet Your Maker", "Metal: Hellsinger", "Metro Exodus", "My Friend Pedro", "Neon White", "Overwatch 2", "Paladins", "Payday 3", "POSTAL 4: No Regerts", "Quake Champions", "Quake Live", "Ready or Not", "Remnant II", "Remnant: From the Ashes", "Rising Storm 2: Vietnam", "Roboquest", "SCP: Pandemic", "Serious Sam 4", "Serious Sam: Siberian Mayhem", "Shotgun Farmers", "Splitgate", "Squad", "STAR WARS: Battlefront Classic Collection", "Starship Troopers: Extermination", "Team Fortress 2", "Team Fortress Classic", "The Anacrusis", "The Ascent", "THE FINALS", "Tom Clancy's Rainbow Six Siege", "TRIBES 3: Rivals", "Turok", "Ultrakill", "Valorant", "Warframe", "Warhammer 40,000: Boltgun", "Warhammer 40,000: Darktide", "World War Z: Aftermath", "Zero Hour", "ZERO Sievert"
    ],
    "Battle Royale": [
        "Apex Legends", "Battlerite Royale", "Blazing Sails: Pirate Battle Royale", "Farlight 84", "Fortnite", "King of Crabs", "Knightfall: A Daring Journey", "NARAKA: BLADEPOINT", "PLAYERUNKNOWN'S BATTLEGROUNDS", "Realm Royale", "Super Animal Royale", "Vampire: The Masquerade: Bloodhunt"
    ],
    "MOBA & Arena": [
        "Awesomenauts", "Battlerite", "Century: Age of Ashes", "Deadlock", "Dota 2", "Gigantic: Rampage Edition", "Heroes of Newerth", "Heroes of the Storm", "League of Legends", "Predecessor", "SMITE", "SMITE 2"
    ],
    "Fighting": [
        "Absolver", "BlazBlue Centralfiction", "BlazBlue Cross Tag Battle", "Brawlhalla", "Capcom Fighting Collection", "Demon Slayer Kimetsu no Yaiba The Hinokami Chronicles", "Divine Knockout (DKO)", "DNF Duel", "Dragon Ball FighterZ", "GAROU: MARK OF THE WOLVES", "GigaBash", "Granblue Fantasy Versus: Rising", "Granblue Fantasy: Versus", "GUILTY GEAR STRIVE", "GUILTY GEAR Xrd REVELATOR", "GUILTY GEAR XX ACCENT CORE PLUS R", "Injustice 2", "JoJo's Bizarre Adventure: All Star Battle R", "Jujutsu Kaisen Cursed Clash", "Killer Instinct", "Lethal League Blaze", "Marvel vs Capcom: Infinite", "MELTY BLOOD: TYPE LUMINA", "Mortal Kombat 1", "Mortal Kombat 11", "MultiVersus", "MY HERO ONE'S JUSTICE 2", "Nickelodeon All Star Brawl", "Persona 4 Arena Ultimax", "Rivals of Aether", "Skullgirls 2nd Encore", "SOULCALIBUR VI", "Street Fighter 30th Anniversary Collection", "Street Fighter 6", "Street Fighter V", "Street Fighter X Tekken", "TEKKEN 7", "TEKKEN 8", "The King of Fighters XIII", "The King of Fighters XV", "Ultimate Marvel vs Capcom 3", "Ultra Street Fighter IV", "Under Night IN BIRTH Exe:Late[cl r]", "UNDER NIGHT IN BIRTH II Sys:Celes", "Your Only Move Is HUSTLE"
    ],
    "Strategy": [
        "Age of Empires Definitive Edition", "Age of Empires II (2013)", "Age of Empires II: Definitive Edition", "Age of Empires III Complete Collection", "Age of Empires III: Definitive Edition", "Age of Empires IV", "Age of Mythology Extended Edition", "Age of Mythology: Retold", "Age of Wonders 4", "As Far As The Eye", "Bloons TD 6", "Bomber Crew", "Civilization: Beyond Earth", "Command & Conquer Remastered", "Company of Heroes 3", "Creeper World 4", "Crusader Kings III", "Delve Deeper", "Desperados III", "Dictators:No Peace Countryballs", "Door Kickers 2", "Dota Underlords", "Dune: Spice Wars", "Dungeons 4", "Element TD 2", "Endless Legend", "Europa Universalis IV", "Grey Goo", "Halo Wars: Definitive Edition", "Hearts of Iron IV", "Heroes of Might & Magic III: HD Edition", "Homeworld 3", "Humankind", "Into the Breach", "Iron Harvest", "Kingdom Two Crowns", "Legion TD 2", "Manor Lords", "Mindustry", "Mutant Year Zero: Road to Eden", "Northgard", "Orcs Must Die! 3", "Partisans 1941", "Pit People", "Rise of Nations Extended Edition", "Rogue Tower", "Shadow Tactics: Blades of the Shogun", "Sid Meier's Civilization V", "Sid Meier's Civilization VI", "Sins of a Solar Empire II", "Songs of Conquest", "Space Crew", "Starcraft II", "Starcraft Remastered", "Starship Troopers: Terran Command", "Stellaris", "Stormgate", "Symphony of War: The Nephilim Saga", "The Battle of Polytopia", "The Last Spell", "The Riftbreaker", "They are Billions", "Thronefall", "Tooth and Tail", "Total War: THREE KINGDOMS", "Total War: WARHAMMER III", "Warcraft III Reforged", "Warpips"
    ],
    "Simulation & Building": [
        "Against the Storm", "Airborne Kingdoms", "American Truck Simulator", "ANNO 1800", "Avorion", "Before We Leave", "Besiege", "Cities Skylines II", "Cities: Skylines", "Cooking Simulator", "Cosmoteer: Starship Architect & Commander", "Dinkum", "Disney Dreamlight Valley", "Dorfromantik", "Dwarf Fortress", "Euro Truck Simulator 2", "Fabledom", "Factorio", "Factory Town", "Forager", "Foundation", "Frostpunk", "Gladiator Guild Manager", "Going Medieval", "Graveyard Keeper", "Hardspace: Shipbreaker", "Hydroneer", "Islanders", "Jurassic World Evolution", "Kerbal Space Program", "Kingdoms and Castles", "Little Witch in the Woods", "Megaquarium", "Mind Over Magic", "My Time at Portia", "Oddsparks: An Automation Adventure", "Oxygen Not Included", "Parkasaurus", "Parkitect", "People Playground", "Planet Coaster", "Prison Architect", "Reus 2", "RimWorld", "Rise of Industry", "Roots of Pacha", "Rusty's Retirement", "Satisfactory", "Slime Rancher", "Slime Rancher 2", "SnowRunner", "Spiritfarer", "Stardew Valley", "Sun Haven", "Surviving Mars", "Teardown", "Terra Nil", "The Sims 3", "The Wandering Village", "theHunter: Call of the Wild", "Timberborn", "Totally Accurate Battle Simulator", "Trailmakers", "Travellers Rest", "Tropico 6", "Ultimate Epic Battle Simulator 2", "Wobbledogs", "WolfQuest: Anniversary Edition", "WorldBox: God Simulator"
    ],
    "RPG": [
        "Archvale", "Baldur's Gate 3", "Black Book", "Chrono Trigger", "Cyberpunk 2077", "DARK SOULS III", "Diablo II Resurrected", "Diablo III", "Diablo IV", "Divinity: Original Sin 2", "ELDEN RING", "Fallout 4", "Fallout 76", "Fallout New Vegas", "Fell Seal: Arbiter's Mark", "FINAL FANTASY VII REMAKE INTERGRADE", "For The King", "Genshin Impact", "Hero Siege", "Hogwarts Legacy", "Honkai: Star Rail", "I am Setsuna", "Melvor Idle", "Monster Hunter Rise", "Monster Sanctuary", "Mount & Blade II: Bannerlord", "Nobody Saves the World", "Octopath Traveler", "Octopath Traveler II", "Path of Exile", "Pyre", "Rogue Heroes: Ruins of Tasos", "Ruined King: A League of Legends Story", "Secrets of Grindea", "South Park: The Fractured but Whole", "South Park: The Stick of Truth", "Starfield", "Stolen Realm", "TemTem", "The Banner Saga", "The Banner Saga 2", "The Banner Saga 3", "The Outer Worlds", "The Witcher 3: Wild Hunt", "TRIANGLE STRATEGY", "Undertale", "Wartales", "Wasteland 3", "West of Loathing", "Wildermyth"
    ],
    "Action & Adventure": [
        "A Short Hike", "Another Crab's Treasure", "Aragami 2", "ARMORED CORE VI FIRES OF RUBICON", "Batman: Arkham Asylum", "Batman: Arkham City", "Batman: Arkham Knight", "Batman: Arkham Origins", "Black Myth: Wukong", "Brothers: A Tale of Two Sons", "Brothers: A Tale of Two Sons Remake", "Bugsnax", "Chivalry 2", "Chivalry: Medieval Warfare", "Clone Drone in the Danger Zone", "Cloudpunk", "Control Ultimate Edition", "DAVE THE DIVER", "Days Gone", "Dead Island 2", "Death's Door", "Detroit Become Human", "Devil May Cry 5", "DRAGON BALL Z: KAKAROT", "DREDGE", "Dying Light 2", "Evil West", "Firewatch", "Ghostrunner", "Ghostwire Tokyo", "God of War", "Grand Theft Auto V", "Hi Fi RUSH", "HITMAN World of Assassination", "Journey", "Journey To The Savage Planet", "Kena: Bridge of Spirits", "Laika: Aged Through Blood", "LEGO Star Wars: The Skywalker Saga", "Lies of P", "Little Kitty, Big City", "Marvel's Spider Man: Miles Morales", "Marvel’s Spider Man Remastered", "Middle Earth: Shadow of War", "Mordhau", "Olija", "Orwell's Animal Farm", "Outer Wilds", "Paint the Town Red", "Red Dead Redemption 2", "Road 96", "Sekiro Shadows Die Twice", "Shadow of the Tomb Raider: Definitive Edition", "Shadows of Doubt", "Sherlock Holmes Chapter One", "Sherlock Holmes The Awakened", "Sifu", "Song of Nunu: A League of Legends Story", "SOUTH PARK: SNOW DAY!", "Squirrel with a Gun", "Star Wars Jedi Fallen Order", "Stray", "System Shock", "The Forgotten City", "The Invincible", "The Last of Us Part I", "The Mageseeker: A League of Legends Story", "The Walking Dead: The Telltale Definitive Series", "Warhammer 40,000: Space Marine 2", "Warhammer Vermintide 2", "We Happy Few", "What Remains of Edith Finch"
    ],
    "Survival & Crafting": [
        "Abiotic Factor", "ARK: Survival Ascended", "Astroneer", "Barotrauma", "Bellwright", "Breathedge", "Core Keeper", "Craftopia", "Cryofall", "DayZ", "Deadside", "Don't Starve", "Don't Starve Together", "Drake Hollow", "Dread Hunger", "Enshrouded", "Frozen Flame", "Grounded", "Icarus", "Keplerth", "Minecraft", "Muck", "Necesse", "No Man's Sky", "Once Human", "Osiris: New Dawn", "Pacific Drive", "Palworld", "Project Winter", "Project Zomboid", "Raft", "Rust", "Sons Of The Forest", "Soulmask", "Starbound", "Subnautica", "Subnautica: Below Zero", "Terraria", "The Forest", "The Long Dark", "The Lord of the Rings: Return to Moria", "The Planet Crafter", "The Survivalists", "tModLoader", "Tribes of Midgard", "Unturned", "V Rising", "Valheim", "Voidtrain", "Volcanoids", "Wizard with a Gun"
    ],
    "Horror": [
        "Amnesia: Rebirth", "Amnesia: The Bunker", "Bendy and the Dark Revival", "Bendy and the Ink Machine", "Bigfoot", "Bramble: The Mountain King", "Buckshot Roulette", "Choo Choo Charles", "Content Warning", "DARQ", "Dead by Daylight", "Deceit", "Demonologist", "DEVOUR", "DON'T SCREAM", "Escape the Backrooms", "Five Nights at Freddy's: HELP WANTED", "Five Nights at Freddy's: Security Breach", "FOREWARNED", "Friday the 13th: The Game", "Ghost Watchers", "Golden Light", "Hello Neighbor 2", "In Silence", "Killer Klowns from Outer Space: The Game", "Labyrinthine", "Lethal Company", "Little Nightmares", "Little Nightmares 2", "Midnight Ghost Hunt", "Moons of Madness", "Outlast", "Phasmophobia", "POOLS", "Poppy Playtime", "Propnight", "Resident Evil 3", "Scarlet Hollow", "Scorn", "SCP: Secret Laboratory", "Secret Neighbor", "SIGNALIS", "Slay the Princess", "Still Wakes the Deep", "The Blackout Club", "The Outlast Trials", "The Park", "The Quarry", "The Texas Chain Saw Massacre"
    ],
    "Party & Team Games": [
        "Among Us", "Battletoads", "Biped", "Bopl Battle", "Chained Together", "Crab Game", "Dale & Dawson Stationery Supplies", "DEEEER Simulator: Your Average Everyday Deer", "Embr", "Fall Guys", "Feed the Cups", "Filthy Animals Heist Simulator", "Fling to the Finish", "Gang Beasts", "Garry's Mod", "Gauntlet", "Goat Simulator", "Goat Simulator 3", "Golf With Your Friends", "Goose Goose Duck", "Human Fall Flat", "Just Act Natural", "LOCKDOWN Protocol", "MageQuit", "Magicka", "Magicka 2", "Monaco: What's Yours Is Mine", "Monster Prom", "Monster Prom 2: Monster Camp", "Monster Prom 3: Monster Roadtrip", "Mount Your Friends", "Move or Die", "Oh Deer", "Operation: Tango", "Overcooked!", "OverCooked! 2", "Party Animals", "Pico Park", "PlateUp!", "Pummel Party", "ROUNDS", "Rubber Bandits", "Sea of Thieves", "Shift Happens", "SpeedRunners", "Stick Fight: The Game", "Streets of Rage 4", "Stumble Guys", "Super Bunny Man", "Surgeon Simulator", "Surgeon Simulator 2", "Teenage Mutant Ninja Turtles: Shredder's Revenge", "The Escapists 2", "ToeJam & Earl: Back in the Groove", "Ultimate Chicken Horse", "Unrailed!", "VRChat", "We need to go deeper", "Witch It", "Wobbly Life", "Worms Reloaded", "Worms Rumble", "Worms W.M.D."
    ],
    "Roguelike": [
        "10 Miles To Safety", "20 Minutes Till Dawn", "Atomicrops", "Brotato", "Children of Morta", "Cobalt Core", "Crab Champions", "Cult of the Lamb", "Curse of the Dead Gods", "Darkest Dungeon", "Darkest Dungeon II", "Dead Cells", "Death Must Die", "Deep Rock Galactic: Survivor", "Deflector", "Desktop Dungeons: Rewind", "Ember Knights", "ENDLESS Dungeon", "Enter the Gungeon", "Exit the Gungeon", "FTL: Faster Than Light", "Gunfire Reborn", "Hades", "Hades II", "Have a Nice Death", "Inkbound", "Loop Hero", "Moonlighter", "Neon Abyss", "Noita", "Nordic Ashes: Survivors of Ragnarok", "Peglin", "Rabbit and Steel", "Ravenswatch", "Returnal", "Risk of Rain", "Risk of Rain 2", "Risk of Rain Returns", "Rogue Legacy 2", "Rotwood", "Ship of Fools", "Skul: The Hero Slayer", "Soulstone Survivors", "Streets of Rogue", "The Binding of Isaac: Rebirth", "This Means Warp", "Vampire Survivors", "Wall World", "We Who Are About To Die"
    ],
    "Platformers": [
        "A Difficult Game About Climbing", "A Hat in Time", "ANIMAL WELL", "Bang On Balls: Chronicles", "Blasphemous", "Bloodstained: Ritual of the Night", "Carrion", "Celeste", "Crash Bandicoot N. Sane Trilogy", "Cuphead", "Dark Light", "Getting Over It", "Hollow Knight", "Hot Lava", "Katana Zero", "Only Up!", "Ori and the Blind Forest Definitive Edition", "Phantom Abyss", "Pizza Tower", "Psychonauts 2", "Rain World", "Shovel Knight: Treasure Trove", "Sonic Frontiers", "SpongeBob SquarePants: Battle for Bikini Bottom: Rehydrated", "Spyro Reignited Trilogy", "Super Meat Boy", "The Game of Sisyphus", "The Messenger", "Tiny Terry's Turbo Trip", "Trine 4", "Trine 5", "Webbed"
    ],
    "Puzzle": [
        "Baba Is You", "Blanc", "Carto", "Escape Academy", "Escape Simulator", "Helltaker", "How 2 Escape", "Impostor Factory", "Jusant", "Myst", "Papers Please", "Poly Bridge 2", "Poly Bridge 3", "Portal", "Portal 2", "Portal Reloaded", "Return of the Obra Dinn", "Riven", "Röki", "Superliminal", "Supraland", "The House of Da Vinci", "The House of Da Vinci 2", "The House of Da Vinci 3", "The Past Within", "The Pedestrian", "The Room", "The Room 4: Old Sins", "The Room Three", "The Room Two", "The Stanley Parable", "The Stanley Parable: Ultra Deluxe", "The Talos Principle 2", "There Is No Game: Wrong Dimension", "TOEM: A Photo Adventure", "Unboxing the Cryptic Killer", "Untitled Goose Game", "Viewfinder", "We Were Here Forever", "We Were Here Together"
    ],
    "Card & Board": [
        "Across the Obelisk", "Artifact", "Duelists of Eden", "Gloomhaven", "Griftlands", "Hearthstone", "HELLCARD", "Inscryption", "Legends of Runeterra", "Magic The Gathering Online", "Monster Train", "Roguebook", "Slay the Spire", "Stacklands", "Super Auto Pets", "Tabletop Simulator", "Trials of Fire", "Vault of the Void", "Wildfrost", "Wingspan", "Yu Gi Oh! Duel Links"
    ],
    "Racing & Sports": [
        "Assetto Corsa Competizione", "BeamNG.drive", "DiRT Rally 2.0", "DRONE The Game", "Freestyle 2 Street Basketball", "Garfield Kart: Furious Racing", "Harry Potter: Quidditch Champions", "HOT WHEELS UNLEASHED", "Make Way", "Road Redemption", "Rocket League", "Steep", "Turbo Golf Racing", "Undisputed", "Wreckfest"
    ],
    "Vehicle Combat": [
        "Everspace 2", "MechWarrior 5: Mercenaries", "MechWarrior Online Solaris 7", "Robocraft", "War Thunder", "World of Tanks", "World of Warships"
    ],
    "MMO": [
        "Albion Online", "EVE Online", "FINAL FANTASY XIV Online", "Legends of Idleon MMO", "Lost Ark", "New World", "Realm of the Mad God Exalt", "World of Warcraft", "World of Warcraft Classic"
    ],
    "Arcade & Rhythm": [
        "Beat Hazard 3", "Crypt of the NecroDancer", "Geometry Dash", "Hextech Mayhem: A League of Legends Story", "Just Shapes & Beats", "Melatonin", "Muse Dash", "Puyo Puyo Tetris 2", "Snake Force", "Super Hexagon", "Tetris Effect: Connected"
    ]
};

(function () {
    const search = document.getElementById('gameSearch');
    const grid = document.getElementById('gameGrid');
    const catNav = document.getElementById('catNav');
    const countEl = document.getElementById('gameCount');
    const suggest = document.getElementById('searchSuggest');
    const library = document.getElementById('library');
    const viewBtns = document.querySelectorAll('[data-view]');

    const ALL = Object.entries(GAME_CATEGORIES)
        .flatMap(([cat, games]) => games.map(title => ({ title, cat })))
        .sort((a, b) => a.title.localeCompare(b.title));

    let view = 'az';
    try { view = localStorage.getItem('ok-game-view') || 'az'; } catch (e) {}

    const slug = s => 'genre-' + s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    function tiles(list) {
        const wrap = document.createElement('div');
        wrap.className = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3';
        list.forEach(g => {
            const el = document.createElement('div');
            el.className = 'game-tile';
            el.textContent = g.title;
            el.title = `${g.title} · ${g.cat}`;
            wrap.appendChild(el);
        });
        return wrap;
    }

    // Search ignores dashes and extra spaces, so "counter-strike" finds "Counter Strike"
    const normalize = v => v.replace(/[-–—]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
    const escapeHtml = t => t.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

    function render() {
        const q = normalize(search.value);
        const matches = ALL.filter(g => g.title.toLowerCase().includes(q));

        countEl.textContent = matches.length;
        viewBtns.forEach(b => b.setAttribute('aria-pressed', b.dataset.view === view));
        grid.innerHTML = '';
        catNav.innerHTML = '';
        catNav.hidden = view !== 'cat';

        if (!matches.length) {
            grid.innerHTML = '<p class="game-empty">No match yet. Ask our staff, we\'re always adding new titles!</p>';
            return;
        }

        if (view === 'az') {
            grid.appendChild(tiles(matches));
            return;
        }

        // By genre: chip nav + one section per genre that has matches
        Object.keys(GAME_CATEGORIES).forEach(cat => {
            const list = matches.filter(g => g.cat === cat);
            if (!list.length) return;

            const chip = document.createElement('a');
            chip.href = '#' + slug(cat);
            chip.className = 'genre-chip';
            chip.innerHTML = `${cat} <span>${list.length}</span>`;
            catNav.appendChild(chip);

            const section = document.createElement('section');
            section.id = slug(cat);
            section.className = 'mb-10';
            section.innerHTML = `<h3 class="genre-heading">${cat} <span>${list.length}</span></h3>`;
            section.appendChild(tiles(list));
            grid.appendChild(section);
        });
    }

    viewBtns.forEach(b => b.addEventListener('click', () => {
        view = b.dataset.view;
        try { localStorage.setItem('ok-game-view', view); } catch (e) {}
        render();
    }));
    // ---- Live suggestions under the search box ----
    let options = [];
    let active = -1;

    function closeSuggestions() {
        suggest.hidden = true;
        search.setAttribute('aria-expanded', 'false');
        search.removeAttribute('aria-activedescendant');
        active = -1;
    }

    function highlight(i) {
        active = i;
        suggest.querySelectorAll('[role="option"]').forEach((li, n) => li.setAttribute('aria-selected', n === i));
        if (i >= 0) {
            search.setAttribute('aria-activedescendant', 'suggest-' + i);
            suggest.children[i].scrollIntoView({ block: 'nearest' });
        } else {
            search.removeAttribute('aria-activedescendant');
        }
    }

    function showSuggestions() {
        const q = normalize(search.value);
        if (!q) { closeSuggestions(); return; }

        // Titles that start with the search come first, then ones that contain it
        options = ALL.filter(g => g.title.toLowerCase().includes(q))
            .sort((a, b) => (b.title.toLowerCase().startsWith(q) - a.title.toLowerCase().startsWith(q)) || a.title.localeCompare(b.title))
            .slice(0, 8);

        suggest.innerHTML = options.length
            ? options.map((g, i) => {
                const at = g.title.toLowerCase().indexOf(q);
                const name = escapeHtml(g.title.slice(0, at)) + '<mark>' + escapeHtml(g.title.slice(at, at + q.length)) + '</mark>' + escapeHtml(g.title.slice(at + q.length));
                return `<li id="suggest-${i}" role="option" aria-selected="false" data-i="${i}"><span>${name}</span><span class="suggest-genre">${g.cat}</span></li>`;
            }).join('')
            : '<li class="suggest-empty">No match yet. Ask our staff, we\'re always adding new titles!</li>';

        active = -1;
        suggest.hidden = false;
        search.setAttribute('aria-expanded', 'true');
    }

    function choose(i) {
        search.value = options[i].title;
        closeSuggestions();
        render();
        library.scrollIntoView({ block: 'start' });
    }

    search.addEventListener('input', () => { render(); showSuggestions(); });
    search.addEventListener('focus', showSuggestions);
    search.addEventListener('blur', () => setTimeout(closeSuggestions, 120));
    search.addEventListener('keydown', e => {
        const count = suggest.hidden ? 0 : options.length;
        if (e.key === 'ArrowDown' && count) { e.preventDefault(); highlight((active + 1) % count); }
        else if (e.key === 'ArrowUp' && count) { e.preventDefault(); highlight((active - 1 + count) % count); }
        else if (e.key === 'Enter') {
            e.preventDefault();
            if (active >= 0) choose(active);
            else { closeSuggestions(); if (search.value.trim()) library.scrollIntoView({ block: 'start' }); }
        }
        else if (e.key === 'Escape') closeSuggestions();
    });
    // mousedown (not click) so the choice lands before the search box loses focus
    suggest.addEventListener('mousedown', e => {
        const li = e.target.closest('[role="option"]');
        if (!li) return;
        e.preventDefault();
        choose(Number(li.dataset.i));
    });

    render();
})();
