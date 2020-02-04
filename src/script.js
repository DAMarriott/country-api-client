function toggleDarkMode() {
  $("#dark-toggle").click(e => {
    event.preventDefault();
    $("#body-theme").toggleClass("dark");
  });
}
