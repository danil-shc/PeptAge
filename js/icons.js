function iconsLoading() {

   const linkElement = $('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700">');
   linkElement.on('load', function () {
      $("head").prepend("<style>.material-symbols-outlined {font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24} .fw-100 {font-variation-settings:'wght' 100} .fw-200 {font-variation-settings:'wght' 200} .fw-300 {font-variation-settings:'wght' 300} .fw-400 {font-variation-settings:'wght' 400} .fw-500 {font-variation-settings:'wght' 500} .filled-icon {font-variation-settings:'FILL' 1}</style>");

      let fontSize;
      $("*[data-icon]").each(function () {
         fontSize = $(this).css('width');
         $(this).text($(this).data("icon"));
         $(this).css({ fontSize: fontSize });
      });
   });

   $("head").prepend(linkElement);
}

function mso() {

   let fontSize, fw;
   $("*[data-icon]").each(function () {
      if ($(this).data("fw") !== undefined) fw = $(this).data("fw");
      else fw = 500;

      fontSize = $(this).css('font-size');
      $(this).css({ fontSize: '0', width: fontSize, minWidth: fontSize, height: fontSize, minHeight: fontSize, display: 'block' })
      $(this).addClass("material-symbols-outlined");
      $(this).addClass("fw-" + fw);
   });

   iconsLoading();
}

$(document).ready(function () {

   mso();
});