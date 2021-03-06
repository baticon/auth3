export const mainPagePosts = () => {
  const mainPagePost = document.createElement('div');

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const page = params.page ? params.page : 1;

  mainPagePost.innerHTML = `
  <form class="mainpage">
      <div class="mainpage-header">
        <span class="bestMVP">πBest MVP</span>
        <button class="mainpage-button">π Main page</button>
        <span>|</span>
        <button id="mainpageAddPost" class="mainpage-button">
          β Add a post
        </button>
        <span>|</span>
        <button id="mainpageMyProfile" class="mainpage-button">
        π¨β  My profile
        </button>
        <span>|</span>
        <button id="mainpageExit" class="mainpage-button">π΄ Exit</button>
      </div>
      <div class="postwire-header">
        <span class="postwire-header-text">Postwire</span>
        <div class="postwire-header-message">
          <span id="post-correct" class="postwire-header-correct" hidden="true">
            <span> β </span>
            <span>Post has been succesfully added!</span>
          </span>
          <span id="post-incorrect" class="postwire-header-error" hidden="true">
            <span> β οΈ</span>
            <span>Error, post has no input!</span>
          </span>
        </div>
      </div>
      <div class="posts-container">
        <div id="posts" class="posts"></div>
      </div>
      <div id="addTaskWindow" class="add-post-window">
        <div class="add-post-header-container">
          <span class="add-post-header">Add a post</span>
        </div>
        <div class="new-post-input-container">
          <input class="new-post-border" type="text" id="new-post-input" />
        </div>
        <div class="add-post-button-container">
          <button id="add-post-button" class="add-post-button">Add</button>
        </div>
      </div>
      <div id="profile-container" class="profile-container" hidden>
          <div id="profile" class="profile">
            <h2>My profile</h2>
            <label>Email:</label>
            <input type="text" id="profile-email">
            <span id="profile-wrong-email" hidden>Email β ΡΡΠ°Π½Π΄Π°ΡΡΠ½Π°Ρ ΠΏΡΠΎΠ²Π΅ΡΠΊΠ°: Π»Π°ΡΠΈΠ½ΠΈΡΠ°, ΠΌΠΎΠΆΠ΅Ρ ΡΠΎΠ΄Π΅ΡΠΆΠ°ΡΡ ΡΠΏΠ΅ΡΡΠΈΠΌΠ²ΠΎΠ»Ρ ΠΈ
            ΡΠΈΡΡΡ, ΠΎΠ±ΡΠ·Π°ΡΠ΅Π»ΡΠ½ΠΎ Π΄ΠΎΠ»ΠΆΠ½Π° Π±ΡΡΡ Β«ΡΠΎΠ±Π°ΡΠΊΠ°Β» (@) ΠΈ ΡΠΎΡΠΊΠ° ΠΏΠΎΡΠ»Π΅ Π½Π΅Ρ, Π½ΠΎ
            ΠΏΠ΅ΡΠ΅Π΄ ΡΠΎΡΠΊΠΎΠΉ ΠΎΠ±ΡΠ·Π°ΡΠ΅Π»ΡΠ½ΠΎ Π΄ΠΎΠ»ΠΆΠ½Ρ Π±ΡΡΡ Π±ΡΠΊΠ²Ρ</span>

            <label>Name:</label>
            <input type="text" id="profile-name">
            <span id="profile-wrong-name" hidden>ΠΠΎΠ³ΠΈΠ½ β ΠΎΡ 3 Π΄ΠΎ 15 ΡΠΈΠΌΠ²ΠΎΠ»ΠΎΠ², ΡΠΎΠ»ΡΠΊΠΎ Π»Π°ΡΠΈΠ½ΠΈΡΠ°. ΠΠ΅Π· ΠΏΡΠΎΠ±Π΅Π»ΠΎΠ², Π±Π΅Π·
            ΡΠΏΠ΅ΡΡΠΈΠΌΠ²ΠΎΠ»ΠΎΠ², ΠΊΡΠΎΠΌΠ΅ Π½ΠΈΠΆΠ½Π΅Π³ΠΎ ΠΏΠΎΠ΄ΡΠ΅ΡΠΊΠΈΠ²Π°Π½ΠΈΡ ΠΈ Π΄Π΅ΡΠΈΡΠ°. ΠΠΎΠΆΠ΅Ρ ΡΠΎΠ΄Π΅ΡΠΆΠ°ΡΡ
            ΡΠΈΡΠ»Π°, Π½ΠΎ Π½Π΅ ΠΏΠΎΠ»Π½ΠΎΡΡΡΡ ΡΠΎΡΡΠΎΡΡΡ ΠΈΠ· Π½ΠΈΡ.</span>

            <label>Last Name:</label>
            <input type="text" id="profile-surname">
            <span id="profile-wrong-surname" hidden>ΠΠΎΠ³ΠΈΠ½ β ΠΎΡ 3 Π΄ΠΎ 15 ΡΠΈΠΌΠ²ΠΎΠ»ΠΎΠ², ΡΠΎΠ»ΡΠΊΠΎ Π»Π°ΡΠΈΠ½ΠΈΡΠ°. ΠΠ΅Π· ΠΏΡΠΎΠ±Π΅Π»ΠΎΠ², Π±Π΅Π·
            ΡΠΏΠ΅ΡΡΠΈΠΌΠ²ΠΎΠ»ΠΎΠ², ΠΊΡΠΎΠΌΠ΅ Π½ΠΈΠΆΠ½Π΅Π³ΠΎ ΠΏΠΎΠ΄ΡΠ΅ΡΠΊΠΈΠ²Π°Π½ΠΈΡ ΠΈ Π΄Π΅ΡΠΈΡΠ°. ΠΠΎΠΆΠ΅Ρ ΡΠΎΠ΄Π΅ΡΠΆΠ°ΡΡ
            ΡΠΈΡΠ»Π°, Π½ΠΎ Π½Π΅ ΠΏΠΎΠ»Π½ΠΎΡΡΡΡ ΡΠΎΡΡΠΎΡΡΡ ΠΈΠ· Π½ΠΈΡ.</span>

            <label>Login: </label>
            <input type="text" id="profile-login">
            <span id="profile-wrong-login" hidden>ΠΠΎΠ³ΠΈΠ½ β ΠΎΡ 3 Π΄ΠΎ 15 ΡΠΈΠΌΠ²ΠΎΠ»ΠΎΠ², ΡΠΎΠ»ΡΠΊΠΎ Π»Π°ΡΠΈΠ½ΠΈΡΠ°. ΠΠ΅Π· ΠΏΡΠΎΠ±Π΅Π»ΠΎΠ², Π±Π΅Π·
            ΡΠΏΠ΅ΡΡΠΈΠΌΠ²ΠΎΠ»ΠΎΠ², ΠΊΡΠΎΠΌΠ΅ Π½ΠΈΠΆΠ½Π΅Π³ΠΎ ΠΏΠΎΠ΄ΡΠ΅ΡΠΊΠΈΠ²Π°Π½ΠΈΡ ΠΈ Π΄Π΅ΡΠΈΡΠ°. ΠΠΎΠΆΠ΅Ρ ΡΠΎΠ΄Π΅ΡΠΆΠ°ΡΡ
            ΡΠΈΡΠ»Π°, Π½ΠΎ Π½Π΅ ΠΏΠΎΠ»Π½ΠΎΡΡΡΡ ΡΠΎΡΡΠΎΡΡΡ ΠΈΠ· Π½ΠΈΡ.</span>

            <label>Phone Number: </label>
            <input type="tel" id="profile-phone">
            <span id="profile-wrong-phone" hidden>Π’Π΅Π»Π΅ΡΠΎΠ½ β ΠΎΡ 8 Π΄ΠΎ 15 ΡΠΈΠΌΠ²ΠΎΠ»ΠΎΠ², ΡΠΎΡΡΠΎΠΈΡ ΠΈΠ· ΡΠΈΡΡ, ΠΌΠΎΠΆΠ΅Ρ Π½Π°ΡΠΈΠ½Π°ΡΡΡΡ Ρ ΠΏΠ»ΡΡΠ°.</span>

            <span>Please change your personal data and click 'Save' button afterwards</span>
          <button id="profile-save" class="button" type="submit">Save</button>
          </div>
        </div>
    </form>
    <div class="pagination">
      <a href="/mainpage?page=${Number(page) - 1}" id="previousPage">&laquo;</a>
      <span id="pageNumber">${Number(page)}</span>
      <a href="/mainpage?page=${Number(page) + 1}" id="nextPage">&raquo;</a>
    </div>     

    `;
  return mainPagePost;
};

export default mainPagePosts;
