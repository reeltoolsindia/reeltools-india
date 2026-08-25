function generateHooks() {
  const topic = document.getElementById('hookTopic').value.trim() || 'ye topic';
  const hooks = [
    `Agar tum ${topic} se related ho to ye video skip mat karna...`,
    `Main ${topic} mein 30 din mein ye result laaya — bina kisi paid course ke`,
    `${topic} wale log ye galti karte hain...`,
    `Ye 1 cheez ${topic} mein sabse zyada important hai`,
    `Log kehte hain ${topic} mushkil hai, lekin...`,
    `Agar tumhara goal ${topic} hai to ye try karo`,
    `Mainne ${topic} mein ye galti ki thi, ab mat karna`,
    `${topic} se related ye secret almost koi nahi batata`,
    `Bas 15 second mein ${topic} ka best tip`,
    `Ye dekhne ke baad tum ${topic} differently sochoge`
  ];
  showResult('hookResult', hooks.join('\n\n'));
}

function generateCaptions() {
  const topic = document.getElementById('captionTopic').value.trim() || 'ye topic';
  const captions = [
    `Kabhi kabhi sirf shuruat karna hi kaafi hota hai.\n\n\( {topic} journey start karo aaj se.\n\n# \){topic.replace(/\s+/g,'')} #motivation`,
    `Consistency > Motivation\n\nRoz thoda sa better banne ki koshish karo.\n\n${topic} mein progress dikhega.`,
    `Ye post unke liye hai jo ${topic} mein serious hain.\n\nSave kar lo.`,
    `Small steps every day.\n\n${topic} mastery aise hi aati hai.`,
    `Don't wait for perfect moment.\n\nStart with what you have — ${topic}`
  ];
  showResult('captionResult', captions.join('\n\n--------------------\n\n'));
}

function generateHashtags() {
  const topic = document.getElementById('hashtagTopic').value.trim().toLowerCase() || 'instagram';
  const tags = [
    `#${topic}`,
    `#${topic}tips`,
    `#${topic}reels`,
    `#${topic}india`,
    `#${topic}creator`,
    `#reelsinstagram`,
    `#explorepage`,
    `#viralreels`,
    `#instagood`,
    `#contentcreator`,
    `#indiancreators`,
    `#${topic}community`,
    `#growth`,
    `#motivation`,
    `#dailyreels`
