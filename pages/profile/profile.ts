const Profile = () => {
  const profile = document.createElement('div');

  profile.innerHTML = `
  <form class="mainpage">
  <div class="mainpage-header">
    <span class="bestMVP">👍Best MVP</span>
    <button class="mainpage-button">🚀 Main page</button>
    <span>|</span>
    <button id="mainpageExit" class="mainpage-button">🔴 Exit</button>
    <div>My profile</div>
    <div>
        <input type="email" id="profile-email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
        <input type="text" id="profile-login" pattern="(?=.*[a-zA-Z-].*)[a-zA-Z0-9-_]+">
        <input type="text" id="profile-name" pattern="^[а-яА-ЯёЁa-zA-Z-]{0,}$">
        <input type="tel" id="profile-phone" pattern="[+]?[0-9]{8,15}">
        <input type="text" id="profile-surname" pattern="^[а-яА-ЯёЁa-zA-Z-]{0,}$">
        <button id="profile-save" class="button" type="submit">Save</button>

    </div>
</form>
  `;
  return profile;
};

export default Profile;
