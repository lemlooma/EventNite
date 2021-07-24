'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Events', [

     {
       name: 'Open Mic',
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F134043613%2F299927553585%2F1%2Foriginal.20201010-150903?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C179%2C1500%2C750&s=cd1aa010d7932dabdbca687d9d628d68',
       location: 'Lems Mic • New York, NY',
       time: 'Sat, July 23, 9:00 PM',
       detail: 'You got a mouth we got a mic! Stage is open to all, just be nice. Also a plus if you actually have talent!',
       ticketCost: '0.00',
       categoryId: 1
     },

      {
       name: 'Bryant Park BedTime Yoga',
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F136547037%2F20334375168%2F1%2Foriginal.20210525-164953?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=94%2C197%2C2306%2C1153&s=81b23e0f42ae7cb9c6bac37408497309',
       location: 'Bryant Park • New York, NY',
       time: 'Wed, Jul 21, 6:00 PM',
       detail: "Bryant Park Yoga returns for a 10-week summer series beginning June 16! Our socially distanced classes will ensure that yogi's who join in-person feel comfortable and safe. To comply with state guidelines all yogi's must pre-register to attend a class. We are not able to accept walk-ins this summer as we are closely monitoring event capacity. Participants will be asked to bring their own mat this summer to help our sanitation efforts.",
       ticketCost: '0.00',
       categoryId: 1
     },

      {
       name: 'Home Remedies Free Workshop',
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F132260253%2F527865999361%2F1%2Foriginal.20210415-001903?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C105%2C566%2C283&s=7a51671923ebc36e384a1eca12075db1',
       location: 'Lem Store• New York, NY',
       time: 'Wed, Jul 21, 6:00 PM',
       detail: "Now is the perfect time to get your mental and phsyical health in order. We continue to bring you opportunities to connect and learn something new until we get back to full time in-person events.There are many home health remedies available to us that are simple to make or take at home that can truly build vitality or even lessen the severity of an illness. Many of these are recipes passed down from our grandmothers and have been used for hundreds of years. Even though many of these health remedies are folk medicine, their effectiveness has been backed up by science. In this workshop, you will learn remedies essential for health and to have on hand for several common situations including nausea, cough, sore throat, burns, infections, digestive issues, insomnia, fever, bites/stings, rashes, bruises and joint issues just to name a few. Many of these health remedies are quite simple.",
       ticketCost: '0.00',
       categoryId: 1
     },
        {
       name: 'NYC Comedy Show!',
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F141082057%2F90195081735%2F1%2Foriginal.20210629-173440?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C221%2C1080%2C540&s=489346654abca3a4968aac84f6cfc8be',
       location: 'The Three Monkeys • New York, NY',
       time: 'Tue, Sep 15, 7:45 PM',
       detail: "One of the best shows in LES features comedians from Conan, Late Night, Comedy Central and much more!Our headliner of the evening is a MA native and has been killing it all across the country, you've seen him on Conan, Comedy Central, and multiple festivals, it's the incredible Orlando Baxter!",
       ticketCost: '0.00',
       categoryId: 1
     },

       {
       name: 'Free Hip-Hop Dance Class',
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F132785781%2F527865999361%2F1%2Foriginal.20210420-125153?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C92%2C1266%2C633&s=6b9f6b5601902c37a184a3f6c1c708ea',
       location: ' Lem Dance Studio • New York, NY',
       time: 'Sun, Dec 1, 9:45 PM',
       detail: "Even though we are spending more time at home than 'normal', that doesnt mean we still can't dance every once in a while! With this masterclass we continue our series on keeping you active during these challenging times.Have you always wanted to learn how to house dance but the steps just seemed too difficult? Do you never know how to start? This course is designed to not only teach you the foundation of house dancing but also to show how to unleash your inner creativity",
       ticketCost: '0.00',
       categoryId: 1
     },

           {
       name: 'Star Gazing Workshop',
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F132047449%2F527865999361%2F1%2Foriginal.20210413-115904?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C33%2C826%2C413&s=e1c78adaffdd64582071ecc05165c6b2',
       location: ' Central Park • New York, NY',
       time: 'Wed, Aug  26, 10:00 PM',
       detail: "No matter where you live, you can find a spot to enjoy the final frontier, sky and space! Take a tour of the most mysterious and beautiful phenomena of Earth's sky with this course packed with stunning images from telescopes and detailed animations.",
       ticketCost: '0.00',
       categoryId: 1
     },

       {
       name: 'Networking Event In NYC',
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F121284241%2F195573731624%2F1%2Foriginal.jpg?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C67%2C582%2C291&s=e4ebb3cf3b6e823f0ce633cc0bbdfeb9',
       location: ' NYC Midtown Rooftop Lounge • New York, NY',
       time: 'Thu, August 12, 6:30',
       detail: "Whether you are an entrepreneur, small business owner or business professional, this event is the perfect opportunity to get away from your desk, have some cocktails and network with potential business partners, investors, industry professionals and new clients.... Or just come on out and make some new friends! We've witnessed countless business connections and friendships form at our past events.",
       ticketCost: '0.00',
       categoryId: 1
     },

       {
       name: 'Good Vibez Only',
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F139997585%2F181984346177%2F1%2Foriginal.20210627-183602?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C75%2C794%2C397&s=66a61c9219062d6add8368819182238f',
       location: ' NYC Midtown Gems Bar and Lounge • Brooklyn, NY Lounge • New York, NY',
       time: 'Thu, Jul 22, 7:00 PM ',
       detail: 'The time has come for Shaazaam Productions to vibe in NYC by popular demand !Located at the popular Gems Lounge and Bar in Brooklyn NYC, we present to you all the "Good Vibez Only" series. A New York based series bringing the Shaazaam Prod effect to our New York and New Jersey crowd ! Everything you need for a great time and much more ! SO RSVP and lets enjoy this Summer !',
       ticketCost: '0.00',
       categoryId: 1
     },
     

      {
       name: 'NYC Yacht Party',
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F133188817%2F195573731624%2F1%2Foriginal.20210423-173531?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C40%2C640%2C320&s=55910bd572fa63042998be31f70eb380',
       location: 'Skyport Marina • New York, NY',
       time: 'Fri, Aug 13, 7:00 PM',
       detail: 'Join us aboard the Jewels Yacht NYC For the next hours, you and your friends will enjoy an incredible live, well-stocked cash bars, and beautiful views of the Manhattan skyline.Come ready to party & have wonderful experience on the nyc yacht party cruise. But get your tickets soon because this event is going to sell out fast.',
       ticketCost: '70.00',
       categoryId: 2
     },
      {
       name: 'AfroHouse / Afro Dance',
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F137068771%2F80065352537%2F1%2Foriginal.20210530-210741?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=d5c059b859287c1314535bcef27cb948',
       location: 'Ripley-Grier Studios • Manhattan, NY',
       time: 'Thu, Jul 22, 8:00 PM',
       detail: '"AFRO DANCE STYLES / AFROBEATS with Meka" brings you the hottest AFRO dance moves from all over Africa filled with fun, energy, passion and lots of laughs.​ All level dancers are welcome!',
       ticketCost: '35.00',
       categoryId: 2
     },
      {
       name: 'Flicks & Vibes',
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F141972539%2F147353769241%2F1%2Foriginal.20210718-162225?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C377%2C2000%2C1000&s=eaa67ac5d858791763356e1e20fd83de',
       location: 'Eleven956 • Manhattan, NY',
       time: 'Mon, July 22, 12:00 AM',
       detail: 'Introducing the new BLACK outdoor movie night experience. Showing films starring black actors every other Friday in our outdoor garden.',
       ticketCost: '15.00',
       categoryId: 2
     },
     {
       name: 'A Drinking Game Space Jam',
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F140064261%2F180412965978%2F1%2Foriginal.20210628-145816?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C2901%2C3300%2C1650&s=164c02194bc9407d5bfdea3626d093ea',
       location: 'The Bell House • Brooklyn, NY',
       time: 'Fri, Jul 23, 8:00 PM',
       detail: "What's 'A Drinking Game'? Well, take your favorite 80s or 90s flick, mix in a live staged reading, add a dash of your favorite beverage, and you've got one hell of a cocktailEach movie comes with a list of buzzwords and phrases–when you hear one, a bell rings and everybody drinks! The actors are in on the fun, too. Plus, when someone says a name, the actor playing that character has to drink. So as the evening progresses, the show's bound to get a little wacky.",
       ticketCost: '18.00',
       categoryId: 2
     },
      {
       name: "Stella Blue's Band",
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F140475731%2F545846403273%2F1%2Foriginal.20210701-221915?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C20%2C2160%2C1080&s=d999c6d4ff33d2ed23cff0d6935ee022',
       location: 'Tennis Club of Hastings • Hastings-on-Hudson, NY',
       time: 'Sat, Jul 24, 7:00 PM',
       detail: "Live from Court 4, The Tennis Club of Hastings presents an evening with Stella Blue's Band! Backdropped by the magnificent cliffs of the Palisades and Hudson River, Stella Blue's Band, the country's premier Grateful Dead tribute act will bring the magic of the Dead to the tennis courts of Hastings. This show will be one to remember!",
       ticketCost: '25.00',
       categoryId: 2
     },
      {
       name: "Sound Healing Performances ",
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F141219615%2F177235263687%2F1%2Foriginal.20210709-212152?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C67%2C6720%2C3360&s=50d0e0f24e6c032182ffee3e23f4ad0d',
       location: 'Queens Museum • Corona, NY',
       time: 'Sun, Jul 25, 2:00 PM',
       detail: "Join us for an afternoon of sound-based meditation and experimental music performance presented in conjunction with artist Asif Mian’s exhibition RAF: Prosthetic Location.Prosthetic Location is the newest iteration of Mian’s multi-chapter project RAF that investigates how ritual, behavior, and memory are impacted by violence and its perception. The narrative in Prosthetic Location surrounds an unsolved trauma from the artist's own life, not as a linear or static occurrence, but rather a continuum of interpretations, reenactments, and reverberations. For Mian, producing the work is a form of investigative therapy for processing the events and forces that haunt him. Like artmaking, meditation has served an essential and grounding role in Mian’s healing process, often woven into his interdisciplinary practice through a ruminating and introspective approach to sculptural materials as well as incorporation of humming and vibratory sound.",
       ticketCost: '30.00',
       categoryId: 2
     },
       {
       name: "BEETHOVEN FEST! 1808 REDUX",
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F138100071%2F338493478465%2F1%2Foriginal.20200410-041752?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C246%2C998%2C499&s=245f9cc6dbc4fe8ec2fab740b0553e44',
       location: 'West Side Symphony Orchestra • Manhattan, NY ',
       time: 'Fri, Feb 25, 6:30 PM',
       detail: "A major two-concert event re-creating the, “most remarkable evening in classical music” – Beethoven’s infamous concert of 1808. Symphony No. 5,Fantasia, Op.77,Sanctus from Mass in C,Featuring Rockland Symphony & Friends, Ah! Perfido",
       ticketCost: '65.00',
       categoryId: 2
     },
       {
       name: "Ballet Nepantla 3rd Annula Gala",
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F137587419%2F213850104920%2F1%2Foriginal.20210604-015726?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C7744%2C3872&s=c58ede059ff02d7a2de154b864bbf577',
       location: 'Ballet Casa • Brooklyn, NY',
       time: 'Fri, Oct 15, 7:00 PM',
       detail: "Choreography: Chiara Ajkun after Marius Petipa & Lev Ivanov. Music: Pyotr Ilych Tchaikovsky. Join Ballet Nepantla for their Día De Los Muertos themed, 3rd annual gala!Don't miss this magical Día De Los Muertos themed event October 15, 2021! The evening will include Ballet Nepantla performances, silent auction, dinner, dancing, live music, and OPEN BAR! This is a night not to be missed!!! Get your tickets today",
       ticketCost: '45.00',
       categoryId: 2
     },
     {
       name: "The Secret Eats ",
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F141359535%2F78468053165%2F1%2Foriginal.20190211-153119?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C3264%2C1632&s=4b1e59783cd52436d9e32b399cdb2e57',
       location: 'Columbus Park (Corner of Bayard St & Mulberry St) • New York, NY',
       time: 'Sun, Aug 1, 6:30 PM',
       detail: "While Chinatown might seem touristy these days, it's still hiding some of the best bites in NYC...if you know where to look. Get ready to experience a food crawl that will lead you to the neighborhood's best-kept secrets (if you can keep it hush-hush).Join New York Adventure Club as we journey through the twisted back streets of present-day Chinatown to eat at some of the neighborhood’s best culinary destinations, while learning about the highs and lows it has endured over the past several generations. Come hungry!",
       ticketCost: '50.00',
       categoryId: 3
     },
      {
       name: "Williamsburg Bite Nites ",
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F138774233%2F107125007415%2F1%2Foriginal.20210615-141705?h=2000&w=720&auto=format%2Ccompress&q=75&sharp=10&s=27443904d73714314269231472fbeab0',
       location: 'Williamsburg Mini Mall • New York, NY',
       time: 'Tues, Aug 2, 8:45 PM',
       detail: "Williamsburg, one of Brooklyn’s most desirable neighborhoods, straddles old and new. You can enjoy the lively arts, music, and boutique scene here, chill in numerous cafes, dine in some very good restaurants — and soak up the unique vibe.During this gastro experience, discover the cultural delights and delectable bites of Brooklyn, by the hand of local food experts. Delve into the rich culinary history of the area as you visit iconic institutions to sample tasty treats.",
       ticketCost: '56.00',
       categoryId: 3
     },
      {
       name: "Natural Dyeing Food Scraps Workshop",
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F140207705%2F196599321851%2F1%2Foriginal.20210629-172502?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C648%2C3888%2C1944&s=4da6332c04e50d724d2b0dc6e0c9cd2a',
       location: 'LES Ecology Center • New York, NY',
       time: 'Thu, Jul 22, 6:00 PM',
       detail: "Not your average natural dye workshop! Join us for a hands-on workshop and learn how your food scraps can be used to create color and dye fabric before they end up in a compost pile. Beyond the basics of dyeing, we'll also discuss food waste, waste reduction and how you can compost in NYC. Participants will learn how to extract color from food waste and leave with their very own natural dyed handkerchief.Materials including small fabric swatches, and natural dyes will be provided. You may wish to bring some more fabrics to test along with you. If you have any natural dyes you wish to try feel free to bring these on the day.",
       ticketCost: '32.00',
       categoryId: 3
     },

      {
       name: " Bar-Hopping With Lema Tour",
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F141700251%2F1365761876%2F1%2Foriginal.jpg?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=18%2C0%2C288%2C144&s=4f20bc5cb0ad1f22c467dd53f441f234',
       location: 'At a traffic island across • New York, NY',
       time: 'All Night ',
       detail: "New York City is the ultimate melting pot of cuisines and cultures. There are food tours focusing on taking tourists and locals to taste a wide variety of foods but what about the drinks? New York Food Tours features the Original and FIRST Multicultural Bar Hopping Tour. This is not a tour that can be found anywhere else in the world! We leverage the unique cultural mix of NYC and our knowledge of local food- and drinks-lovers to tailor this diverse and authentic multicultural drinking tour. Through bar hopping, you will learn about the history, culture, and development of each ethnic wine or beer, and more importantly, experience and taste the delicious drinks! Moreover, you will explore one of the oldest and most diverse neighborhoods in NYC while having the most memorable, exotic, and pleasant happy hour!",
       ticketCost: '150.00',
       categoryId: 3
     },
      {
       name: "Drink & Munch & Paint ",
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F141985791%2F30844815821%2F1%2Foriginal.20210718-215732?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=4%2C0%2C2160%2C1080&s=3ad77ec21489fcc71f38dbd66ae1f481',
       location: 'The Living Gallery • Brooklyn, NY',
       time: 'Mon, Jul 26, 7:00 PM',
       detail: "Join us for for two hours of live figure drawing/painting, with two models! All skill levels welcome. We provide drawing supplies and wine. Or, you can bring your favorite art-making tools and/or BYOB. Just don't eat your paint.",
       ticketCost: '20.00',
       categoryId: 3
     },
      {
       name: "Yard Beats & Eats",
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F138816755%2F18589607695%2F1%2Foriginal.20210615-192957?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1466%2C733&s=30ecd89130757a8b52b32eb278adb779',
       location: 'Brooklyn Navy Yard Building 77 • Brooklyn, NY',
       time: 'Thu, Jul 22, 5:00 PM ',
       detail: "Listen to live music or DJs spinning the summers perfect set while enjoying food and drink made by businesses that call the Yard home. Activities such as book giveaways for kids, fashion pop-ups, and artist-led discussions will be added to the roster to complement the great tastes and sounds..... stay tuned for more!",
       ticketCost: '30.00',
       categoryId: 3
     },
      {
       name: "Freakiest & Funniest Food Tour™ ",
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F141701139%2F1365761876%2F1%2Foriginal.jpg?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=24%2C0%2C400%2C200&s=711cbefa23ad140bfe0e2a1da019659e',
       location: 'Get Freaky • New York, NY ',
       time: 'Sat, Jul 24, 7:00 PM',
       detail: "Are you ready for an exotic, adventurous, extreme, and yet delicious, and fun food tour? You are going to explore a wide variety of foods that you have never thought of tasting before. Some of you may have never even heard of these foods! They are, however, the favorite foods of millions of people worldwide. Aren’t you curious about why others love these foods so much? Is it because of their taste or nutritional benefits? Are you daring enough to explore them yourself?  Do you want to see your friends, family, or fellow tourists’ funky facial expressions as they try new exotic foods? Furthermore, we are going to have a chicken foot eating competition! This freaky tour is not only about food tastings but also about having a hilarious time with your friends, family, and/or fellow tourists. Come join us today for an adventurous food tour for only $75. All tastings are included.",
       ticketCost: '50.00',
       categoryId: 3
     },

     {
       name: "WASTED AFTER WORK WEDNESDAYS",
       pic: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F136730819%2F76934168611%2F1%2Foriginal.20210526-224101?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C139%2C680%2C340&s=458ee40606e8a4ac34fa55887a6398b9',
       location: 'Taj II Lounge and Event Space • New York, NY ',
       time: 'Sat, Jul 24, 7:00 PM',
       detail: "Are you tired of working? Had a bad day? Hate your boss? You need a drink mate. Come get wasted after work with us at Taj. We will call your uber home and talk bad about your boss with you. Open till 5AM. Muisc | Food | Drinks ",
       ticketCost: '50.00',
       categoryId: 3
     },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
