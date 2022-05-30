function mainpageAddPostWindow(e: Event) {
  e.preventDefault();
  document.getElementById('addTaskWindow')!.style.display = 'inline';
  document.getElementById('profile-container')!.style.display = 'none';
}

export default mainpageAddPostWindow;
