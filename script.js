require('readmore-js');

var post_ge="სახელი";
var post_en="name";
var date="01/01/2023";

// dark mode
function gashaveba() {
  var element = document.body;
  element.dataset.bsTheme =
  element.dataset.bsTheme == "dark" ? "light" : "dark";
}
function stepFunction(event) {
  debugger;
  var element = document.getElementsByClassName("collapse");
  for (var i = 0; i < element.length; i++) {
  if (element[i] !== event.target.ariaControls) {
    element[i].classList.remove("show");
  }
  }
}

// cvladebi//
var translations = {
"title": "გეოფორუმები",
"home": "მთავარი",
"forums": "ფორუმები",
"members": "წევრები",
"about": "ჩვენს შესახებ",
"contact": "კონტაქტი",
"lp": "უახლესი პოსტები",
"pt": post_ge,
"lp2": "პოპულარული",
"pt2": post_ge,
"po": "დადებულია " + date ,
"po2": "დადებულია " + date ,
"categor": "კატეგორიები",
};

var originalTexts = {
"title": "GeoForums",
"home": "Home",
"forums": "Forums",
"members": "Members",
"about": "About",
"contact": "Contact",
"lp": "Last posts",
"pt": post_en,
"lp2": "Trending",
"pt2": post_en,
"po": "posted on " + date,
"po2": "posted on " + date,
"categor": "Categories",
};

function translateToGeorgian() {
// Loop through each element in the translations object
for (var key in translations) {
if (translations.hasOwnProperty(key)) {
    // Get the HTML element with the corresponding id
    var element = document.getElementById(key);
    if (element) {
        // Replace the element's text with its translation
        element.innerText = translations[key];
    }
}
}
}

function restoreOriginalLanguage() {
// Loop through each element in the translations object
for (var key in translations) {
if (translations.hasOwnProperty(key)) {
    // Get the HTML element with the corresponding id
    var element = document.getElementById(key);
    if (element) {
        // Replace the element's text with its original text
        element.innerText = originalTexts[key];
    }
}
}
}


$(document).ready(function() {
  var showChar = 100;
  var ellipsestext = "...";
  var moretext = "Read More";
  var lesstext = "Read Less";
  
  $('.card-text').each(function() {
    var content = $(this).html();
    
    if(content.length > showChar) {
      var c = content.substr(0, showChar);
      var h = content.substr(showChar, content.length - showChar);
      var html = c + '<span class="moreellipses">' + ellipsestext + '</span><span class="morecontent"><span>' + h + '</span><a href="" class="morelink">' + moretext + '</a></span>';
      
      $(this).html(html);
    }
  });
  
  $(".morelink").click(function() {
    if($(this).hasClass("less")) {
      $(this).removeClass("less");
      $(this).html(moretext);
    } else {
      $(this).addClass("less");
      $(this).html(lesstext);
    }
    
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    
    return false;
  });
});


jQuery(function ($) {
  function AddReadMore() {
     //This limit you can set after how much characters you want to show Read More.
     var carLmt = 10;
     // Text to show when text is collapsed
     var readMoreTxt = " ...read more";
     // Text to show when text is expanded
     var readLessTxt = " read less";


     //Traverse all selectors with this class and manipulate HTML part to show Read More
     $(".add-read-more").each(function () {
        if ($(this).find(".first-section").length)
           return;

        var allstr = $(this).text();
        if (allstr.length > carLmt) {
           var firstSet = allstr.substring(0, carLmt);
           var secdHalf = allstr.substring(carLmt, allstr.length);
           var strtoadd = firstSet + "<span class='second-section'>" + secdHalf + "</span><span class='read-more'  title='Click to Show More'>" + readMoreTxt + "</span><span class='read-less' title='Click to Show Less'>" + readLessTxt + "</span>";
           $(this).html(strtoadd);
        }
     });

     //Read More and Read Less Click Event binding
     $(document).on("click", ".read-more,.read-less", function () {
        $(this).closest(".add-read-more").toggleClass("show-less-content show-more-content");
     });
  }

  AddReadMore();
});

fetch('/register', {
  method: 'post',
  body: JSON.stringify({
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  }),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  window.location.href = '/login';
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});
