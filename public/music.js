/* Stores all information about albums and tracks. Using a structured object makes it easy to add new albums without writing more HTML/JS logic. */
const trackData = {
album1Tracks: [
{ name: "Hello, ZEROSE!", meaning: "Introduction", youtubeId: "wala" },
{ name: "I'm SUNG HAN BIN", meaning: "Introduction", youtubeId: "wala" },
{ name: "I'm KIM JI WOONG", meaning: "Introduction", youtubeId: "wala" },
{ name: "I'm ZHANG HAO", meaning: "Introduction", youtubeId: "wala" },
{ name: "I'm SEOK MATTHEW", meaning: "Introduction", youtubeId: "wala" },
{ name: "I'm KIM TAE RAE", meaning: "Introduction", youtubeId: "wala" },
{ name: "I'm RICKY", meaning: "Introduction", youtubeId: "wala" },
{ name: "I'm KIM GYU VIN", meaning: "Introduction", youtubeId: "wala" },
{ name: "I'm PARK GUN WOOK", meaning: "Introduction", youtubeId: "wala" },
{ name: "I'm HAN YU JIN", meaning: "Introduction", youtubeId: "wala" },
],

album2Tracks: [
{ name: "Back to Zerobase", meaning: "This opening track is an atmospheric drum and bass song that captures the blissful, almost unbelievable emotion the members feel as their dream of debuting as ZEROBASEONE finally comes true, expressing anticipation for their new journey.", youtubeId: "zCRSWzC1-6c" },
{ name: "In Bloom (Title Track)", meaning: "The lead single is a bright, synth-pop track that samples A-ha's 'Take On Me,' symbolizing the courage to take a first meaningful step forward despite the potential instability and 'shadow' of youth.", youtubeId: "gfBvOd00M4k" },
{ name: "New Kidz on the Block", meaning: "A high-energy dance-pop track with UK garage elements that serves as a confident anthem, declaring the group's bold ambition and determination to quickly rise to the top of the K-pop industry.", youtubeId: "vE_9e5kY3sE" },
{ name: "And I (우주먼지)", meaning: "This is a warm R&B pop song that lyrically captures the sweet, secretive admiration for someone, like watching them from afar on social media and enjoying the private delight of the moment.", youtubeId: "mLy2ZS6ASXs" },
{ name: "Our Season", meaning: "A heartfelt pop song that focuses on the members' unity and friendship, discussing their shared excitement for the memorable moments they will experience and the dreams they will realize together as a group.", youtubeId: "lTn7Dadj-m8" },
{ name: "Always (Zhang Hao Solo)", meaning: "A solo alternative R&B track performed by Zhang Hao (as the Boys Planet first-place winner), where he expresses deep appreciation and gratitude to the fans (ZEROSE), promising to always be with them.", youtubeId: "CboS6z_iVKs" },
],

album3Tracks: [
{ name: "Melting Point", meaning: "The opening track is a Jersey Club-genre song that compares the intense, overwhelming feeling of falling deeply in love to the gradual 'melting' of a frozen heart, resulting in a giddy, emotional rush.", youtubeId: "LK7ca_PWEoY" },
{ name: "Take My Hand", meaning: "This hopeful track features a dynamic mix of fast and slow beats, serving as an invitation to the listener to hold hands and jump into a brand-new, worry-free world of endless possibilities, fueled by a feeling of destiny.", youtubeId: "2cyomSjolRw" },
{ name: "Crush (가시) (Title Track)", meaning: "The powerful lead single is an intense track expressing the group's firm commitment to their fans; the members vow to become the 'thorns of roses' to protect them, even if it means they must break or be crushed down in the process.", youtubeId: "AZoZbtI67Yk" },
{ name: "Kidz Zone", meaning: "A bright, nostalgic pop song that embraces a carefree and youthful spirit, with lyrics about wanting to stay in a simple place of fun and zero worries, suggesting a desire to remain young forever.", youtubeId: "4C5xJpKvMOM" },
{ name: "Good Night", meaning: "This sentimental ballad closes the album as a gentle lullaby, featuring prominent piano and strings, where the members offer heartfelt consolation and assurance to their fans, transforming a simple nightly greeting into a sincere declaration of affection.", youtubeId: "Q196EZFiodQ" },
],

album4Tracks: [
{ name: "Good Night", meaning: "This sentimental ballad closes the album as a gentle lullaby, featuring prominent piano and strings, where the members offer heartfelt consolation and assurance to their fans, transforming a simple nightly greeting into a sincere declaration of affection.", youtubeId: "PlTLdVAmwLE" },
],

album5Tracks: [
{ name: "ゆらゆら -運命の花- (Yura Yura - Flower of Destiny) (Title Track)", meaning: "This bright and buoyant original Japanese pop song captures the exciting, wavering feeling of a heart fluttering with anticipation over a destined romantic meeting, perfectly suited for the spring season.", youtubeId: "xx8qT6H8bkM" },
{ name: "In Bloom (Japanese Ver.)", meaning: "A Japanese rendition of their debut title track, this synth-pop song retains its message of having the courage to take a first step into a new journey, but is delivered with updated Japanese lyrics.", youtubeId: "7tYQujUL3G0" },
{ name: "CRUSH (가시) (Japanese Ver.)", meaning: "This is the Japanese version of their powerful second title track, maintaining its intense beat and commitment-focused lyrics about acting as the 'thorns of roses' to protect their cherished fans.", youtubeId: "HgnZ7GgZGKY" },
],

album6Tracks: [
{ name: "Solar Power", meaning: "A dynamic hip-hop track featuring a strong beat and electric guitar sounds, which lyrically celebrates the powerful, brightening effect their fans have had on the group's journey and success.", youtubeId: "GUnJTbal6o8" },
{ name: "Feel the POP (Title Track)", meaning: "The lead single is an addictive, high-energy pop song that fuses various genres like D&B and UK garage, conveying a message to shed all worries and hesitations to fully enjoy the present moment.", youtubeId: "L9Ts6kiEAts" },
{ name: "Dear Eclipse", meaning: "An R&B song that uses the imagery of an eclipse to express the emotional intensity and maturity found in the border between day and night, melting the feelings of a sudden, all-consuming attraction.", youtubeId: "XiBtUnubuz4" },
{ name: "Sweat (Pre-release Single)", meaning: "This exhilarating house-genre dance track with a prominent synth melody focuses on the pure, immediate joy of dancing with a loved one, where nothing else matters except being focused on that shared, rhythmic moment.", youtubeId: "6J2tyiQ_V6s" },
{ name: "Sunday Ride", meaning: "A light and cheerful medium-tempo pop song that captures the simple desire to escape the daily routine and go on a relaxing trip, embodying a carefree, feel-good vibe perfect for a summer drive.", youtubeId: "4yeL0B9YLHQ" },
{ name: "Hello", meaning: "A heartfelt, emotional ballad with a lyrical acoustic guitar melody, this is the group's first official fan song, written by DAY6's Young K, containing ZEROBASEONE's deep affection and well-wishes for their fans (ZEROSE).", youtubeId: "yf4DwFbHlVM" },
{ name: "Feel the POP (Sped Up ver.)", meaning: "An accelerated version of the title track, offering a slightly different, even more energetic vibe to the main song.", youtubeId: "Y_BI1FxSL88" },
],

album7Tracks: [
{ name: "Good So Bad (Title Track)", meaning: "This energetic electronic synth-pop anthem captures the ambivalence and intense passion of a love that is both 'good' and 'bad,' expressing their unique commitment to a precious person who has become the center of their world.", youtubeId: "V5ACuj_jOnc" },
{ name: "Kill The Romeo", meaning: "A dynamic and dramatic track that flips the classic Romeo and Juliet story; lyrically, it's a bold declaration to rewrite a pre-destined, tragic fate and create a new, desired ending with their love by their own will.", youtubeId: "C6ZVGUuwGls" },
{ name: "The Sea (바다) (ZB1 Remake)", meaning: "This is a refreshing remake of the popular 1997 summer K-pop hit by the group UP, reinterpreted with ZEROBASEONE's signature youthful energy to provide a pure, joyful, feel-good summer vibe.", youtubeId: "tFv1f0LdZXk" },
{ name: "Insomnia", meaning: "A dreamy track featuring hypnotic synths and fast-paced drumming that captures the overwhelming feeling of lovesickness, where thoughts of the person keep them awake all night long, resulting in a chic and alluring pop sound.", youtubeId: "Zpb26JP8-5g" },
{ name: "Road Movie", meaning: "A unique and uplifting track with surprising tempo shifts that uses the imagery of a road trip to represent the journey of chasing dreams, driven by an 'over-positive mind' and a strong belief in their destiny.", youtubeId: "kQ10nNUmBx0" },
{ name: "Eternity", meaning: "An emotional pop ballad that showcases the members' clear vocals, acting as an anthemic declaration of an unchanging, eternal love and affection for the fans, giving the feeling of a warm, comforting embrace.", youtubeId: "m8rpy7f_OHs" },
{ name: "Yura Yura (Korean Version)", meaning: "The Korean version of their Japanese debut single, this buoyant pop song maintains its theme of a heart happily 'wavering' with excitement over a destined meeting, concluding the album with a cheerful energy.", youtubeId: "G1z05Ruz35o" },
],

album8Tracks: [
{ name: "Reaching for you", meaning: "It is an upbeat and refreshing pop track filled with optimistic energy, perfectly fitting the romantic-comedy drama's themes of a budding relationship. Lyrically, the song captures the fervent desire to overcome the distance—both physical and emotional—to finally 'reach' the one they are destined to be with and start a brilliant new love story, showcasing the group's bright and clean vocal delivery.", youtubeId: "Av10eIyOF90" },
],

album9Tracks: [
{ name: "Checkmate", meaning: "It is an intense and dramatic pop track designed to amplify the high-stakes energy of a fierce dance battle. The track is built around a dynamic, powerful beat and soaring vocals, capturing the confident, winning mentality needed to achieve the final, decisive move—the 'Checkmate'—in the competition. Notably, the song incorporates an interpolation of Mozart's 40th Symphony, blending classical and modern elements to fit the show's concept of different dance genres colliding.", youtubeId: "k7SNegFY3NA" },
],

album10Tracks: [
{ name: "NOW OR NEVER (Title Track)", meaning: "This energetic new Japanese original combines drums, bass, and rock elements to convey a heartfelt message of an enduring connection, stating that despite physical separation, the group has returned with the feeling that they will always be with their fans.", youtubeId: "whrNetEPe_M" },
{ name: "Only One Story (Double Title Track)", meaning: "Serving as an opening theme for the Pokémon Horizons anime, this is a cheerful and encouraging pop song that assures listeners that everything will be okay as they embark on their own unique adventure, giving them the courage to take the first step.", youtubeId: "9guUZL1Yuv8" },
{ name: "Firework", meaning: "A disco-house track with an emotional melody and powerful synth bass that captures the excitement of limitless potential, anticipating that every moment they experience will transcend expectations and light up their journey like a colorful firework show.", youtubeId: "ZnKHHc1qv0M" },
{ name: "HANA", meaning: "This is the group's first official Japanese fan song; its title cleverly combines the Japanese word for 'flower' (Hana) and the Korean word for 'one' (Hana), symbolizing the destined connection between the group and their fans (ZEROSE), where each petal/member comes together to form one beautiful flower.", youtubeId: "DtOH-Y6s38I" },
{ name: "Feel the POP (Japanese Ver.)", meaning: "Japanese renditions of their popular Korean title tracks, maintaining their original themes of celebrating joy and embracing intense, dualistic love, but delivered with lyrics updated for the Japanese audience.", youtubeId: "y99Sg9pNzHQ" },
{ name: "GOOD SO BAD (Japanese Ver.)", meaning: "Japanese renditions of their popular Korean title tracks, maintaining their original themes of celebrating joy and embracing intense, dualistic love, but delivered with lyrics updated for the Japanese audience.", youtubeId: "vawXSe5ZqZ4" },
],

album11Tracks: [
{ name: "BLUE (Title Track)", meaning: "This alternative pop-dance song explores the bittersweet complexity of fated love using the color blue, which represents both the sadness and the beautiful radiance of an intense, unforgettable connection, and is lyrically dedicated to their fans (ZEROSE).", youtubeId: "2hwiRN8t8Ok" },
{ name: "Devil Game", meaning: "A funky and groovy track with a strong bassline that explores the allure of temptation and inner conflict; the lyrics speak of a burning, risky desire for someone who feels like a 'devil' to them, yet they continue the chase.", youtubeId: "ROQOe3Y-NEA" },
{ name: "Doctor! Doctor! (Pre-release Single)", meaning: "This contemporary R&B ballad uses the metaphor of lovesickness as an urgent disease, with the members cheekily pleading for a 'doctor' to cure them of their racing heart and burning fever caused by an all-consuming affection.", youtubeId: "9BXF8gSpEwY" },
{ name: "Out of Love (Unit Track)", meaning: "Performed by Kim Ji-woong, Zhang Hao, and Kim Gyu-vin, this is an energetic pop-rock track with a strong band sound that captures the feeling of wanting to rush toward a loved one and embrace them tightly, embodying youth and fresh sincerity.", youtubeId: "XdTS2xsNlgo" },
{ name: "Step Back (Unit Track)", meaning: "Performed by Ricky, Park Gun-wook, and Han Yu-jin, this hip-hop-influenced track conveys a tough, self-protective warning to a lover to 'step back,' hinting at a realization of their tragic fate as a temporary group while trying to maintain emotional distance.", youtubeId: "fI0aounBV1E" },
{ name: "Cruel (Unit Track)", meaning: "Performed by Sung Han-bin, Seok Matthew, and Kim Tae-rae, this track is an experimental song with a punk-like melody and high-tension vocals that speaks of the denial and difficulty of their painful circumstances, trying to pretend their reality is not 'cruel.'", youtubeId: "6pGQFuY9Cfw" },
],

album12Tracks: [
{ name: "D-DAY", meaning: "It is an upbeat, driving pop track infused with a rock and drum and bass rhythm. Lyrically, the song captures the intense, exhilarating anticipation of a crucial moment—the designated 'D-Day'—when a deep friendship is about to transform into a romantic relationship. It perfectly soundtracks the main characters' decision to finally confess their feelings and take the leap toward a destined new beginning in their love story.", youtubeId: "RXU8w3vTIMw" },
],

album13Tracks: [
{ name: "Slam Dunk (Pre-release Single)", meaning: "An energetic hip-hop dance track that uses the basketball term as a metaphor for unyielding ambition and confidence; the lyrics express the drive to pursue dreams with all-out effort, pushing through challenges to achieve an undeniable victory.", youtubeId: "05P1XXRmOYI" },
{ name: "ICONIK (Title Track)", meaning: "The powerful nu-disco title track serves as a bold statement of self-belief and identity, declaring that the group defines what it means to be iconic on their own terms, defying limits and gravity to shine brighter than anyone else.", youtubeId: "HnYtDIW7elY" },
{ name: "Goosebumps", meaning: "A soft, bubbly, and sweet pop song that perfectly encapsulates the initial, thrilling emotions of liking someone; it captures the refreshing and light feeling of a new love that gives you 'goosebumps.'", youtubeId: "CfSdxvS-3SM" },
{ name: "Star Eyes", meaning: "An energetic and emotional track that represents the group's journey and bond with their fans, focusing on the feeling of seeing their dreams fully realized and cherishing the beautiful light that guides them.", youtubeId: "FzD64x_423w" },
{ name: "Lovesick Game", meaning: "A track with a darker, intoxicating atmosphere that explores themes of temptation and surrender; the lyrics capture an all-consuming, inescapable yearning for a loved one, likening the relationship to a risky and hypnotizing game.", youtubeId: "2w81JaWekys" },
{ name: "Dumb", meaning: "A bright, fun, and easy-to-listen-to pop song that represents the group's lighter side, focusing on the carefree, simple joy of being so excited and overwhelmed by love that you feel a little 'dumb.'", youtubeId: "nSnoGF_1VbA" },
{ name: "Long Way Back", meaning: "An emotionally charged pop ballad with heavy R&B influence and delicate piano work, expressing deep heartbreak and longing for a lost love, where the narrator is willing to take the difficult journey back to save the relationship.", youtubeId: "BfeNyhTUOzg" },
{ name: "I Know U Know", meaning: "The album's heartfelt closing ballad is dedicated to their fans (ZEROSE), reflecting on how the members' lives have changed for the better because of that unconditional love, and expressing their deep desire for an enduring, forever bond.", youtubeId: "8Shkl4TGiys" },
],

album14Tracks: [
{ name: "ICONIK (Japanese Ver.) (Title Track)", meaning: "A bold declaration of self-belief and ambition, asserting the group's confidence that they can define what it means to be iconic on their own terms, delivered with an energetic nu-disco groove.", youtubeId: "E19cnb56dRI" },
{ name: "Slam Dunk (Japanese Ver.)", meaning: "Uses a basketball metaphor to express the group's unyielding drive and determination to achieve their goals with maximum effort, pushing through any challenges to achieve an undeniable victory.", youtubeId: "ixbnpgKy9WM" },
{ name: "BLUE (Japanese Ver.)", meaning: "Explores the bittersweet beauty and complex sadness of a fated, intense, and unforgettable love, reflecting the dual emotions associated with deep affection.", youtubeId: "BQSl6HqL0u4" },
],
};

// Global variables to keep track of current state
let currentTracks;
let disableSongClick = false;

/* Populates the album-view with selected album data. */
function openModal(imageSrc, title, description, tracksKey, isAlbum1) {
const modal = document.getElementById('myModal');

// Assign tracks from the trackData object based on the key passed from HTML
currentTracks = trackData[tracksKey] || [];
// Control if tracks are clickable (for intro only albums)
disableSongClick = isAlbum1;

// Update text and images
document.getElementById('modal-album-image').src = imageSrc;
document.getElementById('modal-album-title').textContent = title;
document.getElementById('modal-album-description').textContent = description;

// Clear and rebuild the tracklist <ul>
const tracklist = document.getElementById('modal-tracklist');
tracklist.innerHTML = '';

currentTracks.forEach(track => {
const li = document.createElement('li');
li.textContent = track.name;

// If the album is clickable and not "wala", add a click event
if (!disableSongClick) {
li.onclick = () => openSongDetails(track.name);
} else {
li.style.cursor = 'default';
li.style.fontWeight = 'normal';
}

tracklist.appendChild(li);
});

// Ensure we start at the album tracklist view
document.getElementById('album-view').style.display = 'block';
document.getElementById('song-detail-view').style.display = 'none';

modal.style.display = 'block';
}

/* Hides the UI and resets video */
function closeModal() {
const modal = document.getElementById('myModal');
modal.style.display = 'none';

document.getElementById('detail-youtube-performance').innerHTML = '';
}

function openSongDetails(songName) {
const track = currentTracks.find(t => t.name === songName);

if (!track) return;
document.getElementById('detail-song-title').textContent = songName;
document.getElementById('detail-song-meaning').textContent = track.meaning;

const youtubeContainer = document.getElementById('detail-youtube-performance');
youtubeContainer.innerHTML = `
<iframe src="https://www.youtube.com/embed/${track.youtubeId}"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen>
</iframe>
`;

document.getElementById('album-view').style.display = 'none';
document.getElementById('song-detail-view').style.display = 'block';
}

function backToAlbumView() {
document.getElementById('detail-youtube-performance').innerHTML = '';

document.getElementById('album-view').style.display = 'block';
document.getElementById('song-detail-view').style.display = 'none';
}

function toggleSidebar() {
const sidebar = document.getElementById('sidebar');
const toggle = document.getElementById('sidebar-toggle');
sidebar.classList.toggle('active');
toggle.classList.toggle('active');
}


window.onclick = function(event) {
const modal = document.getElementById('myModal');
if (event.target === modal) {
closeModal();
}
}

document.addEventListener('DOMContentLoaded', () => {
document.getElementById('sidebar-toggle').addEventListener('click', toggleSidebar);

const albumItems = document.querySelectorAll('.item');

const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('fade-in');
observer.unobserve(entry.target);
}
});
}, {
root: null,
rootMargin: '0px',
threshold: 0.2
});

for (let i = 4; i < albumItems.length; i++) {
observer.observe(albumItems[i]);
}
});