function generateHooks() {
  const topic = document.getElementById('hookTopic').value.trim() || 'ye topic';
  const hooks = [
    "Agar tum " + topic + " se related ho to ye video skip mat karna...",
    "Main " + topic + " mein 30 din mein ye result laaya — bina kisi paid course ke",
    topic + " wale log ye galti karte hain...",
    "Ye 1 cheez " + topic + " mein sabse zyada important hai",
    "Log kehte hain " + topic + " mushkil hai, lekin...",
    "Agar tumhara goal " + topic + " hai to ye try karo",
    "Mainne " + topic + " mein ye galti ki thi, ab mat karna",
    topic + " se related ye secret almost koi nahi batata",
    "Bas 15 second mein " + topic + " ka best tip",
    "Ye dekhne ke baad tum " + topic + " differently sochoge"
  ];
  showResult('hookResult', hooks.join('\n\n'));
}

function generateCaptions() {
  const topic = document.getElementById('captionTopic').value.trim() || 'ye topic';
  const captions = [
    "Kabhi kabhi sirf shuruat karna hi kaafi hota hai.\n\n" + topic + " journey start karo aaj se.\n\n#" + topic.replace(/\s+/g,'') + " #motivation",
    "Consistency > Motivation\n\nRoz thoda sa better banne ki koshish karo.\n\n" + topic + " mein progress dikhega.",
    "Ye post unke liye hai jo " + topic + " mein serious hain.\n\nSave kar lo.",
    "Small steps every day.\n\n" + topic + " mastery aise hi aati hai.",
    "Don't wait for perfect moment.\n\nStart with what you have — " + topic
  ];
  showResult('captionResult', captions.join('\n\n--------------------\n\n'));
}

function generateHashtags() {
  const topic = document.getElementById('hashtagTopic').value.trim().toLowerCase() || 'instagram';
  const tags = [
    "#" + topic,
    "#" + topic + "tips",
    "#" + topic + "reels",
    "#" + topic + "india",
    "#" + topic + "creator",
    "#reelsinstagram",
    "#explorepage",
    "#viralreels",
    "#instagood",
    "#contentcreator",
    "#indiancreators",
    "#" + topic + "community",
    "#growth",
    "#motivation",
    "#dailyreels"
  ];
  showResult('hashtagResult', tags.join(' '));
}

function generateBio() {
  const niche = document.getElementById('bioNiche').value.trim() || 'Creator';
  const bios = [
    niche + " | Helping you grow \nDaily tips & free tools\n Link in bio for free resources",
    "Building in public | " + niche + "\nSharing what works\n Free tools ↓",
    niche + " Content Creator\nHelping 10K+ creators\n Free tools in bio",
    "Just a " + niche + " sharing real journey\nNo fluff, only value\n Tools ↓",
    niche + " | Consistency > Talent\nFree resources for creators\n Link below"
  ];
  showResult('bioResult', bios.join('\n\n--------------------\n\n'));
}

function generateScript() {
  const topic = document.getElementById('scriptTopic').value.trim() || 'ye topic';
  const script = "Hook (0-3 sec):\n\"Agar tum " + topic + " se struggle kar rahe ho to ye dekh lo...\"\n\nProblem (3-8 sec):\n\"Sab kehte hain ye karo, wo karo... lekin koi practical nahi batata.\"\n\nSolution (8-20 sec):\n\"Mainne ye 3 simple steps follow kiye:\n1. ...\n2. ...\n3. ...\"\n\nCTA (last 5 sec):\n\"Agar useful laga to follow + save kar lo. Link bio mein free tools hain.\"";
  showResult('scriptResult', script);
}

function generateIdeas() {
  const niche = document.getElementById('ideasNiche').value.trim() || 'your niche';
  const ideas = [
    "1. " + niche + " mein common myths bust karo",
    "2. \"Day in my life as a " + niche + "\" reel",
    "3. 5 tools jo " + niche + " creators use karte hain",
    "4. Before vs After transformation",
    "5. " + niche + " related Q&A reel",
    "6. \"Things I wish I knew earlier about " + niche + "\"",
    "7. Free vs Paid resources comparison",
    "8. Weekly " + niche + " tips series",
    "9. Collaborations / shoutout ideas",
    "10. Behind the scenes of your process"
  ];
  showResult('ideasResult', ideas.join('\n'));
}

function showResult(id, text) {
  const el = document.getElementById(id);
  if (el) {
    el.innerText = text;
    el.classList.add('show');
    el.style.display = 'block';
  }
}
