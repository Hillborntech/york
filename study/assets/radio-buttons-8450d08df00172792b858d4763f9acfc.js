//# sourceMappingURL=radio-buttons.js.map
$(document).ready(function(){$("input[type=radio]").on("change",function(){var a=$("input[type=radio]:checked").val();$("#showAllCourses").attr("href",function(c,b){return b.split("?")[0]+"?mode="+a})})});