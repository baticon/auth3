export const mainPagePosts = () => {
  const mainPagePost = document.createElement('div');

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const page = params.page ? params.page : 1;

  mainPagePost.innerHTML = `
  <form class="mainpage">
      <div class="mainpage-header">
        <span class="bestMVP">👍Best MVP</span>
        <button class="mainpage-button">🚀 Main page</button>
        <span>|</span>
        <button id="mainpageAddPost" class="mainpage-button">
          ✅ Add a post
        </button>
        <span>|</span>
        <button id="mainpageMyProfile" class="mainpage-button">
        👨‍  My profile
        </button>
        <span>|</span>
        <button id="mainpageExit" class="mainpage-button">🔴 Exit</button>
      </div>
      <div class="postwire-header">
        <span class="postwire-header-text">Postwire</span>
        <div class="postwire-header-message">
          <span id="post-correct" class="postwire-header-correct" hidden="true">
            <span> ✓ </span>
            <span>Post has been succesfully added!</span>
          </span>
          <span id="post-incorrect" class="postwire-header-error" hidden="true">
            <span> ⚠️</span>
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
            <span id="profile-wrong-email" hidden>Email — стандартная проверка: латиница, может содержать спецсимволы и
            цифры, обязательно должна быть «собачка» (@) и точка после неё, но
            перед точкой обязательно должны быть буквы</span>

            <label>Name:</label>
            <input type="text" id="profile-name">
            <span id="profile-wrong-name" hidden>Логин — от 3 до 15 символов, только латиница. Без пробелов, без
            спецсимволов, кроме нижнего подчеркивания и дефиса. Может содержать
            числа, но не полностью состоять из них.</span>

            <label>Last Name:</label>
            <input type="text" id="profile-surname">
            <span id="profile-wrong-surname" hidden>Логин — от 3 до 15 символов, только латиница. Без пробелов, без
            спецсимволов, кроме нижнего подчеркивания и дефиса. Может содержать
            числа, но не полностью состоять из них.</span>

            <label>Login: </label>
            <input type="text" id="profile-login">
            <span id="profile-wrong-login" hidden>Логин — от 3 до 15 символов, только латиница. Без пробелов, без
            спецсимволов, кроме нижнего подчеркивания и дефиса. Может содержать
            числа, но не полностью состоять из них.</span>

            <label>Phone Number: </label>
            <input type="tel" id="profile-phone">
            <span id="profile-wrong-phone" hidden>Телефон — от 8 до 15 символов, состоит из цифр, может начинаться с плюса.</span>

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
