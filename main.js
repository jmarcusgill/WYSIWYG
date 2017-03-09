console.log("I'm pooping")
var batFamily =
[
   {
     title : "Batman",
     name : "Bruce Wayne",
     bio : "Batman is a superhero co-created by artist Bob Kane and writer Bill Finger and published by DC Comics. The character made his first appearance in Detective Comics #27 (May, 1939). Batman is the secret identity of Bruce Wayne. Witnessing the murder of his parents as a child leads him to train himself to physical and intellectual perfection and don a bat-themed costume in order to fight crime. Batman operates in Gotham City, assisted by various supporting characters including his sidekick Robin and his butler Alfred Pennyworth, and fights an assortment of villains influenced by the characters' roots in film and pulp magazines. Unlike most superheroes, he does not possess any superpowers; he makes use (to the best that he can) of intellect, detective skills, science and technology, wealth, physical prowess, and intimidation in his war on crime.",
     image : "http://vignette3.wikia.nocookie.net/batman/images/7/72/Detective_Comics_Vol_2-19_Cover-1_Teaser.jpg/revision/latest?cb=20130116215324",
     lifespan : {
       birth : 1939,
       death : "still alive"
     }
   },
   {
     title : "Nightwing",
     name : "Richard (Dick) Grayson",
     bio : "Richard John 'Dick' Grayson was once Batman's first sidekick Robin, before going on to become Nightwing. Once he took up the mantle of Batman when Bruce was thought to be dead, but became Nightwing once again after the events of Flashpoint. After Forever Evil, Dick's identity was revealed to the world and Bruce convinced him to give up being Nightwing to become an agent of Spyral. He was created by artist Bob Kane, writter Bill Finger and by illustrator Jerry Robinson, he first appeared in Detective Comics #38 in April 1940.",
     image : "http://vignette1.wikia.nocookie.net/marvel_dc/images/f/fd/Nightwing_0005.jpg/revision/latest?cb=20150330223416",
     lifespan : {
       birth : 1940,
       death : "still alive"
     }
   },
   {
     title : "Batgirl",
     name : "Barbara 'Barb' Gordon",
     bio : "Barbara Gordon is a fictional character appearing in comic books published by DC Comics and in related media, created by Gardner Fox and Carmine Infantino. From 1967 to 1988, she was the superheroine Batgirl; from 1989 to November, 2011, she had been known as Oracle. In Batgirl Vol 4 #1, she recovered from her injuries and hit the streets as Batgirl once again. Introduced as the daughter of Gotham City police commissioner James Gordon, Barbara Gordon made her first comic book appearance in a story published in Detective Comics #359 titled 'The Million Dollar Debut of Batgirl' (January 1967).",
     image : "http://vignette1.wikia.nocookie.net/batman/images/b/b1/2062307-batgirl2011_large.jpg/revision/latest?cb=20111103195225",
     lifespan : {
       birth : 1967,
       death : "Shot by Joker and became Oracle"
     }
   },
   {
     title : "Red Hood",
     name : "Jason Todd",
     bio : "Jason Peter Todd is a fictional character appearing in comic books published by DC Comics. Jason Todd first appeared in Batman #357 (1983) and became the second Robin, sidekick to the superhero Batman, when the previous Robin, Dick Grayson went on to star in The New Teen Titans under the moniker of Nightwing.",
     image : "http://vignette2.wikia.nocookie.net/batman/images/f/f1/199633-jason-todd_400.jpg/revision/latest?cb=20080527194201",
     lifespan : {
       birth : 1983,
       death : "Died multiple times"
     }
   },
   {
     title : "Red Hood",
     name : "Tim Drake",
     bio : "Tim Drake (also known as Tim Wayne) is a fictional comic book superhero from the DC Comics universe. As the third Robin in the Batman comics, he served as Batman's sidekick, and he is a superhero in his own right. He currently uses the superhero identity of Red Robin.",
     image : "http://vignette3.wikia.nocookie.net/batman/images/8/8d/New_52_Tim_Drake.png/revision/latest?cb=20120130032620",
     lifespan : {
       birth : 1989,
       death : "still alive"
     }
   },
   {
     title : "Robin",
     name : "Damian Wayne",
     bio : "Damian Wayne is a fictional character in the DC Universe. Damian is the child of Bruce Wayne and Talia al Ghul and thus the grandson of Batman's villain, Ra's al Ghul. The character was created by Mike W. Barr, and first appeared in Batman: Son of the Demon (1987).",
     image : "http://vignette4.wikia.nocookie.net/batman/images/5/5b/2150927-7.jpg/revision/latest?cb=20120110214559",
     lifespan : {
       birth : 2007,
       death : "Has died multiple times"
     }
   }
]

var counter = 0;
var outputEl = document.getElementById("output");
var newFamilyMember = "";
for (; counter < batFamily.length; counter++) {
  var currentMember = batFamily[counter];
  // Give each person element a unique identifier
   newFamilyMember += `<div class="person_container col-sm-6 col-md-4" id="person--${counter}">`;
   newFamilyMember += `<div class="thumbnail">`
   newFamilyMember += `<img src="${currentMember.image}">`;
   newFamilyMember += `<div class="caption">`;
   newFamilyMember += `<h3>${currentMember.title}</h3>`
   newFamilyMember += `<p>${currentMember.bio}</p>`
   newFamilyMember += `</div></div></div>`;

   outputEl.innerHTML = newFamilyMember;


}

// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName("person_container");

// Event listeners are created
for (var i = 0; i < containerEl.length; i++) {
  containerEl[i].addEventListener("click", function (event) {
    // Logic to execute when the element is clicked
  });
};








