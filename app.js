/**
 * GRAPHIFY - Simplified Recommendation Simulator
 * Symmetric Movie and Shorts Collaborative Filtering Engine
 */

// ==========================================
// 1. DATASETS (MOVIES & SHORTS)
// ==========================================

const MOVIE_DATABASE = {
    'Avengers': { category: 'Action', desc: 'Earth\'s mightiest heroes join forces to fight Loki.', year: 2012, match: '98%', poster: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' },
    'Iron Man': { category: 'Action', desc: 'A billionaire engineer builds a high-tech armored suit.', year: 2008, match: '95%', poster: 'linear-gradient(135deg, #b20a2c 0%, #fffbd5 100%)' },
    'Spider-Man': { category: 'Action', desc: 'Bitten by a radioactive spider, a teen fights crime.', year: 2002, match: '97%', poster: 'linear-gradient(135deg, #0f2027 0%, #29323c 100%)' },
    'Giga Fast': { category: 'Action', desc: 'Neon streets and hyper-engine fast-paced drift action.', year: 2024, match: '88%', poster: 'linear-gradient(135deg, #d3cbb8 0%, #6f2232 100%)' },
    
    'Inception': { category: 'Sci-Fi', desc: 'A thief steals corporate secrets through dream-sharing.', year: 2010, match: '99%', poster: 'linear-gradient(135deg, #000428 0%, #004e92 100%)' },
    'Quantum Theory': { category: 'Sci-Fi', desc: 'Treading the boundary of subatomic dimensions.', year: 2025, match: '92%', poster: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' },
    'Neon Dreams': { category: 'Sci-Fi', desc: 'A replicant discovers a secret in cyberpunk Tokyo.', year: 2023, match: '94%', poster: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 100%)' },
    'Space Voyage': { category: 'Sci-Fi', desc: 'A colony ship ventures into an uncharted black hole.', year: 2022, match: '90%', poster: 'linear-gradient(135deg, #0f0c20 0%, #92000a 100%)' },
    
    'Batman': { category: 'Drama', desc: 'The dark knight rises to protect Gotham City from chaos.', year: 2008, match: '96%', poster: 'linear-gradient(135deg, #141e30 0%, #243b55 100%)' },
    'Interstellar': { category: 'Drama', desc: 'Explorers travel through a wormhole in search of a new home.', year: 2014, match: '97%', poster: 'linear-gradient(135deg, #093028 0%, #237a57 100%)' },
    'Retro Wave': { category: 'Drama', desc: '80s synth adventures inside a virtual simulation.', year: 2026, match: '85%', poster: 'linear-gradient(135deg, #4ef0e8 0%, #aa076b 100%)' },
    'Binary Star': { category: 'Drama', desc: 'A story of two astronauts stranded in deep orbit.', year: 2021, match: '89%', poster: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)' },
    
    'Bug or Feature?': { category: 'Comedy', desc: 'A hilarious take on the chaos of software debugging.', year: 2024, match: '91%', poster: 'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)' },
    'The Keyboard Warriors': { category: 'Comedy', desc: 'Two internet trolls accidentally trigger a global mainframe audit.', year: 2025, match: '87%', poster: 'linear-gradient(135deg, #ffe259 0%, #ffa751 100%)' },
    'Merge Conflict': { category: 'Comedy', desc: 'Romance and compiler errors collide in tech school.', year: 2023, match: '89%', poster: 'linear-gradient(135deg, #ed4264 0%, #ffedbc 100%)' },
    'Infinite Loop': { category: 'Comedy', desc: 'Waking up on a Monday morning over and over and over.', year: 2022, match: '93%', poster: 'linear-gradient(135deg, #2b5876 0%, #4e4376 100%)' }
};

const SHORTS_DATABASE = {
    'Python Pro Tips': { category: 'Technology', desc: 'Slicing lists and generator secrets.', year: 'Shorts', match: '98%', poster: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' },
    'CSS Secrets': { category: 'Technology', desc: 'Clean layouts using modern CSS grids.', year: 'Shorts', match: '96%', poster: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 100%)' },
    'Deep Space Rover': { category: 'Technology', desc: 'Mars Rover snaps high-res pictures.', year: 'Shorts', match: '92%', poster: 'linear-gradient(135deg, #0f0c20 0%, #302b63 100%)' },
    'Holo Glass Hacks': { category: 'Technology', desc: 'Making glasses display holographic texts.', year: 'Shorts', match: '88%', poster: 'linear-gradient(135deg, #093028 0%, #237a57 100%)' },
    
    'GTA VI Concept': { category: 'Gaming', desc: 'Fan-made mapping details leaked.', year: 'Shorts', match: '97%', poster: 'linear-gradient(135deg, #2b5876 0%, #4e4376 100%)' },
    'Minecraft Speedrun': { category: 'Gaming', desc: 'Breaking world record inside 5 minutes.', year: 'Shorts', match: '94%', poster: 'linear-gradient(135deg, #141e30 0%, #243b55 100%)' },
    'Portal Speedrun': { category: 'Gaming', desc: 'Glitches that break the test chamber layouts.', year: 'Shorts', match: '90%', poster: 'linear-gradient(135deg, #cc2b5e 0%, #753a88 100%)' },
    'Retro Arcade Resto': { category: 'Gaming', desc: 'Restoring an old Pacman arcade machine cabinet.', year: 'Shorts', match: '89%', poster: 'linear-gradient(135deg, #f9d423 0%, #ff4e50 100%)' },
    
    'Lo-Fi Night Ride': { category: 'Music', desc: 'Smooth beats to code and study to.', year: 'Shorts', match: '90%', poster: 'linear-gradient(135deg, #aa076b 0%, #61045f 100%)' },
    'Acoustic Guitar Riffs': { category: 'Music', desc: 'Learn top chord patterns in 10s.', year: 'Shorts', match: '89%', poster: 'linear-gradient(135deg, #ffe259 0%, #ffa751 100%)' },
    'Salsa Drum Beats': { category: 'Music', desc: 'Visualizing polyrhythms using LED drumsets.', year: 'Shorts', match: '85%', poster: 'linear-gradient(135deg, #fc00ff 0%, #00dbde 100%)' },
    'DJ Deck Scratching': { category: 'Music', desc: 'Techniques from scratching specialists.', year: 'Shorts', match: '91%', poster: 'linear-gradient(135deg, #aa076b 0%, #61045f 100%)' },
    
    'Reverse Sear Tomahawk': { category: 'Cooking', desc: 'Perfect steak cooked under 60 seconds.', year: 'Shorts', match: '95%', poster: 'linear-gradient(135deg, #b20a2c 0%, #fffbd5 100%)' },
    'Chocolate Soufflé': { category: 'Cooking', desc: 'Baking soufflé using only 3 ingredients.', year: 'Shorts', match: '93%', poster: 'linear-gradient(135deg, #ed4264 0%, #ffedbc 100%)' },
    'Knife Skills 101': { category: 'Cooking', desc: 'Chop onions like a Michelin star chef.', year: 'Shorts', match: '91%', poster: 'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)' },
    'Quick Desserts': { category: 'Cooking', desc: 'No-bake cookie recipes in a mug.', year: 'Shorts', match: '88%', poster: 'linear-gradient(135deg, #ffe259 0%, #ffa751 100%)' }
};

const USER_DATA = {
    Rahul: {
        movies: ['Avengers', 'Iron Man', 'Spider-Man', 'Inception'],
        shorts: ['Python Pro Tips', 'CSS Secrets', 'Deep Space Rover', 'GTA VI Concept'],
        color: '#E50914',
        avatarClass: 'avatar-1',
        initials: 'R'
    },
    Sneha: {
        movies: ['Avengers', 'Iron Man', 'Spider-Man', 'Batman', 'Interstellar', 'Inception'],
        shorts: ['Python Pro Tips', 'CSS Secrets', 'Deep Space Rover', 'GTA VI Concept', 'Acoustic Guitar Riffs', 'Reverse Sear Tomahawk'],
        color: '#FFCC00',
        avatarClass: 'avatar-2',
        initials: 'S'
    },
    Aman: {
        movies: ['Batman', 'Interstellar', 'Inception'],
        shorts: ['Acoustic Guitar Riffs', 'Reverse Sear Tomahawk', 'GTA VI Concept'],
        color: '#00F2FE',
        avatarClass: 'avatar-3',
        initials: 'A'
    },
    Priya: {
        movies: ['Avengers', 'Spider-Man', 'Interstellar'],
        shorts: ['Python Pro Tips', 'Acoustic Guitar Riffs', 'Reverse Sear Tomahawk'],
        color: '#F35588',
        avatarClass: 'avatar-4',
        initials: 'P'
    }
};

// ==========================================
// 2. STATE MANAGER
// ==========================================

const DEFAULT_MOVIES_LIST = ['Avengers', 'Iron Man', 'Spider-Man'];
const DEFAULT_SHORTS_LIST = ['Python Pro Tips', 'CSS Secrets', 'Deep Space Rover'];

let activeMode = 'movies'; // 'movies' or 'shorts'
let soundEnabled = false;
let activeUser = null;
let watchedState = {
    movies: [...DEFAULT_MOVIES_LIST],
    shorts: [...DEFAULT_SHORTS_LIST]
};
let recommendedState = {
    movies: [],
    shorts: []
};

// Simulation Presentation Steps:
// 1 = Dashboard, 2 = Overlay open & loading, 3 = Graph loaded, 4 = Metrics count up, 5 = Recommended row, 6 = Split Screen cross-check, 7 = Math info.
let simulationStage = 1; 

// ==========================================
// 3. AUDIO API SYNTHESIZER
// ==========================================

class AudioSynth {
    constructor() {
        this.ctx = null;
    }

    init() {
        try {
            if (!this.ctx) {
                this.ctx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (this.ctx && this.ctx.state === 'suspended') {
                this.ctx.resume().catch(() => {});
            }
        } catch (e) {
            console.warn("AudioContext init blocked", e);
        }
    }

    playTaDum() {
        if (!soundEnabled) return;
        try {
            this.init();
            if (!this.ctx) return;
            const t = this.ctx.currentTime;
            
            this.createDrum(t, 90, 0.4);
            this.createDrum(t + 0.12, 110, 0.5);
            
            const osc = this.ctx.createOscillator();
            const gainNode = this.ctx.createGain();
            osc.connect(gainNode);
            gainNode.connect(this.ctx.destination);
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(55, t);
            osc.frequency.exponentialRampToValueAtTime(110, t + 0.8);
            
            gainNode.gain.setValueAtTime(0, t);
            gainNode.gain.linearRampToValueAtTime(0.3, t + 0.1);
            gainNode.gain.exponentialRampToValueAtTime(0.001, t + 1.2);
            
            osc.start(t);
            osc.stop(t + 1.3);
        } catch (e) {
            console.warn("Audio fail", e);
        }
    }

    createDrum(time, freq, gainVal) {
        if (!this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gainNode = this.ctx.createGain();
            osc.connect(gainNode);
            gainNode.connect(this.ctx.destination);
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, time);
            osc.frequency.exponentialRampToValueAtTime(25, time + 0.22);
            
            gainNode.gain.setValueAtTime(gainVal, time);
            gainNode.gain.exponentialRampToValueAtTime(0.001, time + 0.25);
            
            osc.start(time);
            osc.stop(time + 0.28);
        } catch (e) {}
    }

    playTick() {
        if (!soundEnabled) return;
        try {
            this.init();
            if (!this.ctx) return;
            const t = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gainNode = this.ctx.createGain();
            osc.connect(gainNode);
            gainNode.connect(this.ctx.destination);
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(1800, t);
            gainNode.gain.setValueAtTime(0.02, t);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);
            
            osc.start(t);
            osc.stop(t + 0.05);
        } catch (e) {
            console.warn("Audio fail", e);
        }
    }

    playLaserSweep() {
        if (!soundEnabled) return;
        try {
            this.init();
            if (!this.ctx) return;
            const t = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gainNode = this.ctx.createGain();
            osc.connect(gainNode);
            gainNode.connect(this.ctx.destination);
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(120, t);
            osc.frequency.exponentialRampToValueAtTime(1200, t + 0.6);
            
            gainNode.gain.setValueAtTime(0.06, t);
            gainNode.gain.exponentialRampToValueAtTime(0.001, t + 0.62);
            
            osc.start(t);
            osc.stop(t + 0.65);
        } catch (e) {
            console.warn("Audio fail", e);
        }
    }
}
const audioSynthInstance = new AudioSynth();


// ==========================================
// 4. JACCARD COLLABORATIVE ENGINE
// ==========================================

function computeRecommendation() {
    const targetSet = new Set(watchedState[activeMode]);
    let bestSimilarity = -1;
    let closestUser = null;
    let peersArray = {};

    for (const [username, userData] of Object.entries(USER_DATA)) {
        if (username === activeUser) continue;
        
        // Select profile watched titles based on active category mode
        const peerWatchedList = activeMode === 'movies' ? userData.movies : userData.shorts;
        const peerSet = new Set(peerWatchedList);
        
        // Jaccard Intersections
        const intersection = new Set([...targetSet].filter(x => peerSet.has(x)));
        const union = new Set([...targetSet, ...peerSet]);
        const similarity = union.size > 0 ? (intersection.size / union.size) : 0;
        
        peersArray[username] = {
            similarity: similarity,
            intersection: Array.from(intersection),
            union: Array.from(union),
            watched: peerWatchedList
        };

        if (similarity > bestSimilarity) {
            bestSimilarity = similarity;
            closestUser = username;
        }
    }

    // Recommendation diff list
    const closestTitlesList = activeMode === 'movies' ? USER_DATA[closestUser].movies : USER_DATA[closestUser].shorts;
    const finalRecs = closestTitlesList.filter(item => !targetSet.has(item));

    recommendedState[activeMode] = finalRecs;

    return {
        scores: peersArray,
        closest: closestUser,
        recList: finalRecs
    };
}


// ==========================================
// 5. FORCE-DIRECTED GRAPH PHYSICS ENGINE
// ==========================================

class NetworkGraph {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.nodes = [];
        this.edges = [];
        this.draggedNode = null;
        this.zoomScale = 1;
        this.centerX = 0;
        this.centerY = 0;
        this.activeCalculations = null;

        this.initEventListeners();
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        const bounds = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = bounds.width;
        this.canvas.height = bounds.height;
        this.centerX = this.canvas.width / 2;
        this.centerY = this.canvas.height / 2;
    }

    initEventListeners() {
        this.canvas.addEventListener('mousedown', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            // Hit test nodes
            for (let node of this.nodes) {
                const distance = Math.hypot(node.x - clickX, node.y - clickY);
                if (distance < node.radius + 10) {
                    this.draggedNode = node;
                    audioSynthInstance.playTick();
                    break;
                }
            }
        });

        this.canvas.addEventListener('mousemove', (e) => {
            if (this.draggedNode) {
                const rect = this.canvas.getBoundingClientRect();
                this.draggedNode.x = e.clientX - rect.left;
                this.draggedNode.y = e.clientY - rect.top;
            }
        });

        this.canvas.addEventListener('mouseup', () => { this.draggedNode = null; });
        this.canvas.addEventListener('mouseleave', () => { this.draggedNode = null; });
    }

    buildGraphData(recsResult) {
        this.nodes = [];
        this.edges = [];
        this.activeCalculations = recsResult;

        // 1. Center Target profile User Node
        const targetNode = {
            id: activeUser,
            label: `${activeUser} (You)`,
            type: 'user',
            x: this.centerX,
            y: this.centerY,
            vx: 0, vy: 0,
            radius: 26,
            color: '#E50914'
        };
        this.nodes.push(targetNode);

        // 2. Add Peer Nodes
        const peerUsers = Object.keys(USER_DATA).filter(name => name !== activeUser);
        const radiusLayout = 240;
        peerUsers.forEach((name, idx) => {
            const angle = (idx / peerUsers.length) * Math.PI * 2;
            const peerNode = {
                id: name,
                label: name,
                type: 'peer',
                x: this.centerX + Math.cos(angle) * radiusLayout,
                y: this.centerY + Math.sin(angle) * radiusLayout,
                vx: 0, vy: 0,
                radius: 20,
                color: USER_DATA[name].color
            };
            this.nodes.push(peerNode);
        });

        // 3. Add Movie/Short Item Nodes
        const itemsList = activeMode === 'movies' ? MOVIE_DATABASE : SHORTS_DATABASE;
        const titles = Object.keys(itemsList);
        
        titles.forEach((title, idx) => {
            const angle = (idx / titles.length) * Math.PI * 2;
            const dist = 140 + (idx % 2 === 0 ? 30 : 0);
            
            const isRec = recsResult.recList.includes(title);
            const itemNode = {
                id: title,
                label: title,
                type: 'item',
                x: this.centerX + Math.cos(angle) * dist,
                y: this.centerY + Math.sin(angle) * dist,
                vx: 0, vy: 0,
                radius: 12,
                color: isRec ? '#FFE066' : '#2A2A39' // Yellow highlight if recommended in simulation
            };
            this.nodes.push(itemNode);
        });

        // 4. Create Edges
        // User to watched items
        const userWatched = watchedState[activeMode];
        userWatched.forEach(title => {
            const targetNodeEl = this.nodes.find(n => n.id === title);
            if (targetNodeEl) {
                this.edges.push({ source: targetNode, target: targetNodeEl, weight: 3 });
            }
        });

        // Peers to their watched titles
        peerUsers.forEach(peerName => {
            const peerNodeEl = this.nodes.find(n => n.id === peerName);
            const peerWatchedList = activeMode === 'movies' ? USER_DATA[peerName].movies : USER_DATA[peerName].shorts;
            
            peerWatchedList.forEach(title => {
                const itemNodeEl = this.nodes.find(n => n.id === title);
                if (peerNodeEl && itemNodeEl) {
                    this.edges.push({ source: peerNodeEl, target: itemNodeEl, weight: 1.5 });
                }
            });
        });
    }

    updatePhysics() {
        const repulsionStrength = 8000;
        const attractionStrength = 0.055;
        const damping = 0.85;

        // Repulsion between all nodes
        for (let i = 0; i < this.nodes.length; i++) {
            const n1 = this.nodes[i];
            if (n1 === this.draggedNode) continue;

            for (let j = i + 1; j < this.nodes.length; j++) {
                const n2 = this.nodes[j];
                const dx = n2.x - n1.x;
                const dy = n2.y - n1.y;
                const dist = Math.hypot(dx, dy) || 1;

                if (dist < 260) {
                    const force = repulsionStrength / (dist * dist);
                    const fx = (dx / dist) * force;
                    const fy = (dy / dist) * force;

                    n1.vx -= fx;
                    n1.vy -= fy;
                    n2.vx += fx;
                    n2.vy += fy;
                }
            }
        }

        // Attraction along edge paths
        this.edges.forEach(edge => {
            const dx = edge.target.x - edge.source.x;
            const dy = edge.target.y - edge.source.y;
            const dist = Math.hypot(dx, dy) || 1;
            const displacement = dist - 130;
            const force = displacement * attractionStrength * edge.weight;

            const fx = (dx / dist) * force;
            const fy = (dy / dist) * force;

            if (edge.source !== this.draggedNode) {
                edge.source.vx += fx;
                edge.source.vy += fy;
            }
            if (edge.target !== this.draggedNode) {
                edge.target.vx -= fx;
                edge.target.vy -= fy;
            }
        });

        // Apply velocities
        this.nodes.forEach(node => {
            if (node === this.draggedNode) return;

            // Soft pull back to view center
            node.vx += (this.centerX - node.x) * 0.01;
            node.vy += (this.centerY - node.y) * 0.01;

            node.x += node.vx;
            node.y += node.vy;
            node.vx *= damping;
            node.vy *= damping;
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw spring connection loops
        this.edges.forEach(edge => {
            this.ctx.beginPath();
            this.ctx.moveTo(edge.source.x, edge.source.y);
            this.ctx.lineTo(edge.target.x, edge.target.y);
            
            // Faded style for thin links, bright red for active user selection
            if (edge.source.id === activeUser) {
                this.ctx.strokeStyle = 'rgba(229, 9, 20, 0.45)';
                this.ctx.lineWidth = 2.5;
            } else {
                this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
                this.ctx.lineWidth = 1;
            }
            this.ctx.stroke();
        });

        // Draw nodes
        this.nodes.forEach(node => {
            this.ctx.save();
            
            // Add lighting border glow for primary user and peers
            if (node.type === 'user' || node.id === this.activeCalculations.closest) {
                this.ctx.shadowBlur = 12;
                this.ctx.shadowColor = node.color;
            }

            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = node.color;
            this.ctx.fill();
            this.ctx.strokeStyle = 'rgba(255,255,255,0.12)';
            this.ctx.lineWidth = 1.5;
            this.ctx.stroke();

            this.ctx.restore();

            // Label text inside/below node
            this.ctx.fillStyle = '#fff';
            this.ctx.textAlign = 'center';
            
            if (node.type === 'item') {
                this.ctx.font = '500 9.5px Outfit';
                this.ctx.fillText(node.label, node.x, node.y + 20);
            } else {
                // Circle initial labels
                this.ctx.font = '700 11px Space Grotesk';
                this.ctx.textBaseline = 'middle';
                const initial = node.type === 'user' ? node.id.charAt(0) : USER_DATA[node.id].initials;
                this.ctx.fillText(initial, node.x, node.y);
                
                this.ctx.textBaseline = 'alphabetic';
                this.ctx.font = '700 10.5px Space Grotesk';
                this.ctx.fillStyle = '#C0C3D0';
                this.ctx.fillText(node.label, node.x, node.y + node.radius + 16);
            }
        });
    }

    tickLoop() {
        if (simulationStage >= 3 && simulationStage <= 7) {
            this.updatePhysics();
            this.draw();
            requestAnimationFrame(() => this.tickLoop());
        }
    }

    resetZoom() {
        // Recenter coords
        this.nodes.forEach(node => {
            node.vx = 0; node.vy = 0;
        });
        this.resize();
    }
}
let networkGraphInstance = null;


// ==========================================
// 6. UI PAGES & GRID GENERATOR
// ==========================================

function switchCategoryTab(mode) {
    if (activeMode === mode) return;
    audioSynthInstance.playTick();
    activeMode = mode;

    // Toggle navigation tab links
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === mode);
    });

    // Populate data cards depending on toggle
    populateDashboardGrids();
}

function selectProfile(username) {
    activeUser = username;
    
    // Set user-watched lists from USER_DATA templates
    watchedState.movies = [...USER_DATA[username].movies];
    watchedState.shorts = [...USER_DATA[username].shorts];
    
    // Reset recommend row
    recommendedState.movies = [];
    recommendedState.shorts = [];

    //audioSynthInstance.playTaDum();

    // Transition view
    const profileView = document.getElementById('view-profiles');
    const homepageView = document.getElementById('view-homepage');

    profileView.classList.remove('active');
    
    // Update mini-avatar indicator
    const pickAvatar = document.querySelector('.current-profile-indicator .mini-avatar');
    pickAvatar.className = `mini-avatar ${USER_DATA[username].avatarClass}`;
    document.querySelector('.current-profile-indicator span').innerText = username;

    homepageView.classList.add('active');
    simulationStage = 2; // stage: homepage active
    populateDashboardGrids();
}

function populateDashboardGrids() {
    const dataset = activeMode === 'movies' ? MOVIE_DATABASE : SHORTS_DATABASE;
    const categories = activeMode === 'movies' ? ['Action', 'Sci-Fi', 'Drama', 'Comedy'] : ['Technology', 'Gaming', 'Music', 'Cooking'];
    
    const containerAction = document.getElementById('row-action-container');
    const containerSciFi = document.getElementById('row-sci-fi-container');
    const containerDrama = document.getElementById('row-drama-container');
    const containerComedy = document.getElementById('row-comedy-container');

    // Title overlays depending on active mode
    const titles = document.querySelectorAll('.streaming-rows .movie-row:not(.recommended-row) .movie-row-title');
    if (titles.length >= 4) {
        titles[0].innerHTML = activeMode === 'movies' ? 'Action Blockbusters' : 'Technology & Science';
        titles[1].innerHTML = activeMode === 'movies' ? 'Mind-Bending Sci-Fi' : 'Gameplay Highlight Reels';
        titles[2].innerHTML = activeMode === 'movies' ? 'Dramas & Thrillers' : 'Music Sessions & Beats';
        titles[3].innerHTML = activeMode === 'movies' ? 'Tech Comedy' : 'Cooking in 60s';
    }

    // Hero banner update
    const heroTitle = document.getElementById('hero-title-ref');
    const heroDesc = document.getElementById('hero-desc-ref');
    const heroBannerMain = document.getElementById('hero-banner-main');
    if (heroTitle && heroDesc && heroBannerMain) {
        if (activeMode === 'movies') {
            heroTitle.innerText = 'Avengers: Endgame';
            heroDesc.innerText = "Earth's mightiest heroes assemble to repair the cosmos in a cinematic blockbuster.";
            heroBannerMain.style.backgroundImage = "linear-gradient(to right, rgba(7,7,10,0.92) 20%, rgba(7,7,10,0) 80%), radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(7,7,10,1) 100%), url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1425')";
        } else {
            heroTitle.innerText = 'Python Pro Tips';
            heroDesc.innerText = 'Learn list comprehension, generator functions, and clean data processing loops in under 60 seconds.';
            heroBannerMain.style.backgroundImage = "linear-gradient(to right, rgba(7,7,10,0.92) 20%, rgba(7,7,10,0) 80%), radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(7,7,10,1) 100%), url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470')";
        }
    }

    // Clear grid containers
    [containerAction, containerSciFi, containerDrama, containerComedy].forEach(c => c.innerHTML = '');

    Object.entries(dataset).forEach(([title, item]) => {
        const isWatched = watchedState[activeMode].includes(title);
        
        let container = null;
        if (item.category === categories[0]) container = containerAction;
        else if (item.category === categories[1]) container = containerSciFi;
        else if (item.category === categories[2]) container = containerDrama;
        else if (item.category === categories[3]) container = containerComedy;

        if (container) {
            container.insertAdjacentHTML('beforeend', `
                <div class="movie-card" style="background-image: ${item.poster};" onclick="toggleWatchStatus('${title}')">
                    <div class="movie-card-overlay">
                        <div class="movie-card-title">${title}</div>
                        <div class="movie-card-info">
                            <span class="movie-match-score">${item.match} match</span>
                            <span class="movie-card-badge">${item.year}</span>
                        </div>
                        <div class="movie-card-status ${isWatched ? 'watched' : 'not-watched'}">
                            ${isWatched ? '✓ Watched' : '○ Not Watched'}
                        </div>
                    </div>
                </div>
            `);
        }
    });

    // Populate recommendation row
    renderRecommendedRow();
}

function renderRecommendedRow() {
    const currentRecList = recommendedState[activeMode];
    const homepage = document.getElementById('view-homepage');
    
    // Check if recommended row exists, otherwise insert it at the top of streaming-rows
    let recRow = document.getElementById('active-rec-row');
    if (currentRecList.length > 0) {
        if (!recRow) {
            const rowsContainer = document.querySelector('.streaming-rows');
            rowsContainer.insertAdjacentHTML('afterbegin', `
                <div class="movie-row recommended-row" id="active-rec-row">
                    <h2 class="movie-row-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 0 0-4 0H7a6 6 0 0 1 12 0c0 1.04-.42 1.99-1.07 2.75z"/></svg>
                        AI Recommendations: Because you watched ${watchedState[activeMode][watchedState[activeMode].length - 1] || 'Spider-Man'}
                    </h2>
                    <div class="movie-cards-container" id="row-recommended-container"></div>
                </div>
            `);
            recRow = document.getElementById('active-rec-row');
        }

        const grid = document.getElementById('row-recommended-container');
        grid.innerHTML = '';
        
        const database = activeMode === 'movies' ? MOVIE_DATABASE : SHORTS_DATABASE;

        currentRecList.forEach((title, index) => {
            const item = database[title];
            grid.insertAdjacentHTML('beforeend', `
                <div class="movie-card" style="background-image: ${item.poster}; animation: slideGlowIn 0.8s ${index * 0.25}s forwards">
                    <div class="movie-card-overlay">
                        <div class="movie-card-title">${title}</div>
                        <div class="movie-card-info">
                            <span class="movie-match-score" style="color: #FFE066 !important">★ Recommended</span>
                        </div>
                        <div class="movie-card-status not-watched">○ Unwatched</div>
                    </div>
                </div>
            `);
        });
    } else {
        if (recRow) recRow.remove();
    }
}

function toggleWatchStatus(title) {
    audioSynthInstance.playTick();
    const watchedList = watchedState[activeMode];
    const index = watchedList.indexOf(title);

    if (index >= 0) {
        // Prevent clearing all watches
        if (watchedList.length > 1) {
            watchedList.splice(index, 1);
        }
    } else {
        watchedList.push(title);
    }

    populateDashboardGrids();
}


// ==========================================
// 7. COLLABORATIVE OVERLAYS (STAGES TIMELINE)
// ==========================================

function triggerRecommendationPipeline() {
    audioSynthInstance.playLaserSweep();
    simulationStage = 3; // Stage: overlay active, show loader

    const overlay = document.getElementById('visualization-overlay');
    overlay.classList.add('active');

    // Reset loader styles
    document.querySelector('.hud-center').classList.add('active');
    document.querySelector('.hud-progress-fill').style.width = '0%';
    document.querySelector('.hud-ai-status').innerText = 'AI is calculating overlaps...';

    // Disable sidebar contents initially
    document.querySelector('.hud-sidebar-right').style.opacity = '0';
    document.querySelector('.hud-sidebar-right').style.transform = 'translateY(-50%) scale(0.95)';
    document.querySelector('.math-explanation-sidebar').classList.remove('active');

    // Run calculations
    const calculations = computeRecommendation();
    networkGraphInstance.buildGraphData(calculations);

    // Dynamic loader bar simulation
    setTimeout(() => {
        document.querySelector('.hud-progress-fill').style.width = '100%';
        
        setTimeout(() => {
            advancePresentationStage(); // Stage 4: load graph nodes
        }, 800);
    }, 400);
}

function advancePresentationStage() {
    if (simulationStage === 3) {
        // Stage 4: Fade out loader and show graph particles
        document.querySelector('.hud-center').classList.remove('active');
        audioSynthInstance.playTaDum();
        simulationStage = 4;
        
        // Dynamic sidebars fade in
        const rightSidebar = document.querySelector('.hud-sidebar-right');
        rightSidebar.style.opacity = '1';
        rightSidebar.style.transform = 'translateY(-50%) scale(1)';

        // Start force canvas tick
        networkGraphInstance.resetZoom();
        networkGraphInstance.tickLoop();

        // Load algorithm checklist and peer similarity slots
        renderSimilarityChecks();

    } else if (simulationStage === 4) {
        // Stage 5: Begin counting similarity index metrics
        simulationStage = 5;
        triggerSimulatedTallyMetrics();
    }
}

function renderSimilarityChecks() {
    // 1. Ingest checklist HUD steps
    const listContainer = document.querySelector('.algo-steps-list');
    listContainer.innerHTML = `
        <div class="algo-step active" id="step-1"><span class="algo-step-num">Step 1</span>Map user-media bipartite graph</div>
        <div class="algo-step" id="step-2"><span class="algo-step-num">Step 2</span>Calculate Jaccard user intersect scores</div>
        <div class="algo-step" id="step-3"><span class="algo-step-num">Step 3</span>Highlight closest taste profile match</div>
        <div class="algo-step" id="step-4"><span class="algo-step-num">Step 4</span>Publish recommendations back to homepage</div>
    `;

    // 2. Clear similarity runner container
    const runner = document.querySelector('.similarity-runner');
    runner.innerHTML = '';

    const peersList = Object.keys(USER_DATA).filter(n => n !== activeUser);
    peersList.forEach(name => {
        runner.insertAdjacentHTML('beforeend', `
            <div class="user-similarity-row" id="row-similarity-${name}">
                <div class="sim-user-info">
                    <div class="sim-avatar-circle" style="background:${USER_DATA[name].color}">${USER_DATA[name].initials}</div>
                    <strong>${name}</strong>
                </div>
                <div class="sim-score-wrapper">
                    <span class="sim-score-pct">- %</span>
                    <span class="sim-status-label">Standby</span>
                </div>
            </div>
        `);
    });
}

function triggerSimulatedTallyMetrics() {
    const listSteps = document.querySelectorAll('.algo-step');
    const peers = Object.keys(USER_DATA).filter(n => n !== activeUser);

    listSteps[0].className = 'algo-step completed';
    listSteps[1].className = 'algo-step active';

    let index = 0;
    
    function tallyRow() {
        if (index >= peers.length) {
            // Done computing Jaccard indexes
            listSteps[1].className = 'algo-step completed';
            listSteps[2].className = 'algo-step active';
            
            // Highlight best match
            const closestPeer = networkGraphInstance.activeCalculations.closest;
            const topRow = document.getElementById(`row-similarity-${closestPeer}`);
            topRow.className = 'user-similarity-row match';
            topRow.querySelector('.sim-status-label').innerText = 'Best Match';

            audioSynthInstance.playTaDum();
            simulationStage = 6; // Jaccard calculations visual complete

            // Setup Math explanations
            generateMathDetailsPageHTML();
            return;
        }

        const peerName = peers[index];
        const row = document.getElementById(`row-similarity-${peerName}`);
        row.className = 'user-similarity-row comparing';
        row.querySelector('.sim-status-label').innerText = 'Intersecting';
        audioSynthInstance.playTick();

        // Count up similarity percentage score
        const targetSimPct = Math.round(networkGraphInstance.activeCalculations.scores[peerName].similarity * 100);
        let currentProgressPct = 0;
        
        const countTimer = setInterval(() => {
            currentProgressPct += 5;
            if (currentProgressPct >= targetSimPct) {
                currentProgressPct = targetSimPct;
                clearInterval(countTimer);
                
                row.className = 'user-similarity-row done';
                row.querySelector('.sim-score-pct').innerText = `${currentProgressPct}%`;
                row.querySelector('.sim-status-label').innerText = 'Done';
                
                index++;
                setTimeout(tallyRow, 400);
            }
            row.querySelector('.sim-score-pct').innerText = `${currentProgressPct}%`;
        }, 40);
    }

    tallyRow();
}

function exitGraphVizToHome() {
    audioSynthInstance.playTick();
    const overlay = document.getElementById('visualization-overlay');
    overlay.classList.remove('active');
    
    // Stop physics constraint loop
    simulationStage = 2; // homepage stage
}

function publishRecommendationsToHomepage() {
    audioSynthInstance.playLaserSweep();
    exitGraphVizToHome();
    
    // Reload dashboard to slide recommendations row in
    populateDashboardGrids();

    setTimeout(() => {
        // Auto open the comparison matrix modal to show similarities
        triggerVisualCrossCheckMatrix();
    }, 1000);
}

function triggerVisualCrossCheckMatrix() {
    audioSynthInstance.playTaDum();
    const modal = document.getElementById('split-screen-modal');
    modal.classList.add('active');

    const calculations = networkGraphInstance.activeCalculations;
    const closest = calculations.closest;

    // Render left side You watched checklist
    const leftSide = document.querySelector('.current-user-side');
    leftSide.innerHTML = `
        <div class="split-user-avatar" style="background:#E50914">${activeUser.charAt(0)}</div>
        <h3 class="split-user-name">${activeUser} (You)</h3>
        <div class="movie-checklist">
            ${generateChecklistHTML(watchedState[activeMode], true)}
        </div>
        <div class="split-explanation-box">
            You watched <span class="highlight-cyan">${watchedState[activeMode].length} titles</span>. We need to match you with someone who shares these titles to recommend new ones.
        </div>
    `;

    // Render right side closest match watched checklist
    const rightSide = document.querySelector('.closest-user-side');
    const recommendedList = calculations.recList;
    
    // All items watched by closest peer
    const peerWatchedList = activeMode === 'movies' ? USER_DATA[closest].movies : USER_DATA[closest].shorts;

    rightSide.innerHTML = `
        <div class="split-user-avatar" style="background:${USER_DATA[closest].color}">${USER_DATA[closest].initials}</div>
        <h3 class="split-user-name">${closest}</h3>
        <div class="movie-checklist">
            ${generateChecklistHTML(peerWatchedList, false, recommendedList)}
        </div>
        <div class="split-explanation-box">
            ${closest} shares a high overlap of <span class="highlight-magenta">${Math.round(calculations.scores[closest].similarity * 100)}% similarity</span>. Since she watched: <strong>${recommendedList.join(', ')}</strong>, the AI recommends them to you!
        </div>
    `;
}

function generateChecklistHTML(watchedList, isUser, recs = []) {
    const databaseList = activeMode === 'movies' ? MOVIE_DATABASE : SHORTS_DATABASE;
    
    // Gather all unique items in comparison
    let allTitles = new Set([...watchedState[activeMode]]);
    const closestPeer = networkGraphInstance.activeCalculations.closest;
    const peerWatchedList = activeMode === 'movies' ? USER_DATA[closestPeer].movies : USER_DATA[closestPeer].shorts;
    peerWatchedList.forEach(t => allTitles.add(t));

    let html = '';
    allTitles.forEach(title => {
        const itemInList = watchedList.includes(title);
        const isRecVal = recs.includes(title);

        let iconHTML = '';
        let cardBgClass = '';
        if (itemInList) {
            iconHTML = '<span class="checkmark-symbol yes">✓ Watched</span>';
            cardBgClass = 'watched';
        } else if (isRecVal) {
            iconHTML = '<span class="checkmark-symbol rec">★ RECOMMEND</span>';
            cardBgClass = 'recommend-highlight';
        } else {
            iconHTML = '<span class="checkmark-symbol no">✕ Unwatched</span>';
            cardBgClass = 'not-watched';
        }

        html += `
            <div class="checklist-item ${cardBgClass}">
                <span>${title}</span>
                ${iconHTML}
            </div>
        `;
    });
    return html;
}

function closeSplitScreenModal() {
    audioSynthInstance.playTick();
    const modal = document.getElementById('split-screen-modal');
    modal.classList.remove('active');
}


// ==========================================
// 8. GRAPH THEORY MATHEMATICS OVERLAYS
// ==========================================

function toggleMathematicsPanel() {
    audioSynthInstance.playTick();
    const mathSidebar = document.querySelector('.math-explanation-sidebar');
    mathSidebar.classList.toggle('active');

    // Trigger visual highlights in canvas
    if (mathSidebar.classList.contains('active')) {
        generateMathDetailsPageHTML();
        const closestPeerName = networkGraphInstance.activeCalculations.closest;
        const targetNode = networkGraphInstance.nodes.find(n => n.id === activeUser);
        const matchNode = networkGraphInstance.nodes.find(n => n.id === closestPeerName);
        
        if (targetNode && matchNode) {
            // Pull camera scale slightly to highlight comparison link
            targetNode.radius = 34;
            matchNode.radius = 28;
        }
    } else {
        networkGraphInstance.nodes.forEach(node => {
            node.radius = node.type === 'user' ? 26 : (node.type === 'peer' ? 20 : 12);
        });
    }
}

function generateMathDetailsPageHTML() {
    const calculations = networkGraphInstance.activeCalculations;
    const closest = calculations.closest;
    const stats = calculations.scores[closest];

    const body = document.querySelector('.math-box-body');
    const titleTypeLabel = activeMode === 'movies' ? 'Movies list' : 'Shorts list';

    body.innerHTML = `
        <p>
            The Jaccard Similarity Index measures the mathematical size of intersection divided by union of sets:
        </p>
        <div class="math-box-formula">
            J(You, peer) = |Intersection| / |Union|
        </div>
        <p>
            Calculating overlap between <strong>You</strong> and <strong>${closest}</strong> (${titleTypeLabel}):
        </p>
        <ul style="margin: 0.8rem 0; padding-left: 1.2rem; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.82rem; color: #ACAFBF;">
            <li>Intersection (Shared watches): <strong style="color:var(--neon-cyan)">${stats.intersection.length}</strong> [${stats.intersection.join(', ')}]</li>
            <li>Union (Combined unique watches): <strong style="color:var(--neon-magenta)">${stats.union.length}</strong> [${stats.union.join(', ')}]</li>
            <li>Jaccard Index Math: <strong>${stats.intersection.length} &divide; ${stats.union.length} = ${Math.round(stats.similarity*100)}% Match!</strong></li>
        </ul>
        <p>
            Since ${closest} is the closest matching profile user node, the algorithm predictions create link paths to recommending unwatched titles.
        </p>
    `;
}


// ==========================================
// 9. EVENT REGISTRATION & SPACEBAR ADVANCER
// ==========================================

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault(); // Stop window browser default scrolling
        
        // Progress stage sequencer
        if (simulationStage === 4) {
            advancePresentationStage(); // step to Stage 5: run similarity metrics
        } else if (simulationStage === 6) {
            // Step to Stage 5 recommended row publishing
            publishRecommendationsToHomepage();
        }
    }
});

// Window startup binds
window.addEventListener('DOMContentLoaded', () => {
    // 1. Initialise canvas graph object
    networkGraphInstance = new NetworkGraph('graph-canvas');

    // 2. Profile cards selector triggers
    document.querySelectorAll('.profile-card').forEach(card => {
        card.addEventListener('click', () => {
            const user = card.dataset.user;
            selectProfile(user);
        });
    });

    // 3. sound toggle button
    document.getElementById('sound-toggle').addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        const btn = document.getElementById('sound-toggle');
        if (soundEnabled) {
            btn.innerText = '🎵 Sound: ON';
            audioSynthInstance.init();
            audioSynthInstance.playTick();
        } else {
            btn.innerText = '🔇 Sound: OFF';
        }
    });
});
