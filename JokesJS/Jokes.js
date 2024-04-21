var Jokes = {
	
	UsedJokes: [],
	
	GetRandomJoke: function () {
		
		var randomJoke = {
			"Setup":"No matching jokes found",
			"Punchline":"",
			"Tags":""
		}
		
		var randomJokeInt = Jokes.GetUniqueRandomInt(0,Jokes.JokeList.length-1,Jokes.UsedJokes);
		if (randomJokeInt != -1){
			Jokes.UsedJokes.push(randomJokeInt);
			randomJoke = Jokes.JokeList[randomJokeInt];
		}
		
		return randomJoke;
	},
	
	GetUniqueRandomInt: function(min,max,usedInts){
		if (usedInts == undefined){
			usedInts = [];
		}
		min = Math.ceil(min);
		max = Math.floor(max);
		randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
		
		//if we've used up all the ints
		if (max+1 == usedInts.length){
			return -1;
		}
		
		//if we've used up this particular int
		if (usedInts.includes(randomInt)){
			console.log("used int " + randomInt + " trying again");
			return randomInt = Jokes.GetUniqueRandomInt(min,max,usedInts);
		} else {
			return randomInt;
		}
		
		
	},
	

	JokeList: [
		{
		 "Setup":"I went to a museum with a pair of magnetic handcuffs",
		 "Punchline":"It was a two-wrist attraction"
		},
		{
		 "Setup":"How do sprinters like their eggs?",
		 "Punchline":"Runny"
		},
		{
		 "Setup":"Lance is an uncommon name now",
		 "Punchline":"But people used to be named Lance a lot"
		},
		{
		 "Setup":"A priest, a pastor, and a rabbit donate blood",
		 "Punchline":"The rabbit says, I think I'm a type O"
		},
		{
		 "Setup":"I went to a haunted French restaurant",
		 "Punchline":"It was full of escarghosts"
		},
		{
		 "Setup":"I tried to look through the holes of a colander",
		 "Punchline":"But I ended up straining my eyes"
		},
		{
		 "Setup":"I'm missing the main ingredient for an omelette",
		 "Punchline":"I'm having an eggs-essential crisis"
		},
		{
		 "Setup":"I tried to figure out which wave would hit the shore first",
		 "Punchline":"But they tide"
		},
		{
		 "Setup":"I had my left leg up in the air at midnight",
		 "Punchline":"I wanted to start 2024 off on the right foot"
		},
		{
		 "Setup":"I met a guitarist with writer's block",
		 "Punchline":"He had nothing to fret about"
		},
		{
		 "Setup":"What nationality is Santa Claus?",
		 "Punchline":"North Polish"
		},
		{
		 "Setup":"I like to give abacus beads as a present",
		 "Punchline":"It's the little things that count"
		},
		{
		 "Setup":"You can't order a fountain drink larger than 8 ounces in St. Paul",
		 "Punchline":"It's mini-soda law"
		},
		{
		 "Setup":"Never invest in a company that makes skis",
		 "Punchline":"The whole sport is going downhill fast"
		},
		{
		 "Setup":"What's antique wax?",
		 "Punchline":"It sounds like a strong duck repellent"
		},
		{
		 "Setup":"After I sold my rearview mirror",
		 "Punchline":"I never looked back"
		},
		{
		 "Setup":"In my home country, people fight to the death all the time",
		 "Punchline":"I have duel citizenship"
		},
		{
		 "Setup":"How do you cut a group of musicians in half?",
		 "Punchline":"With a band saw"
		},
		{
		 "Setup":"The front parts of my feet fell asleep",
		 "Punchline":"They're coma-toes"
		},
		{
		 "Setup":"I saw a pirate wearing a paper towel as a hat",
		 "Punchline":"He had a Bounty on his head"
		},
		{
		 "Setup":"I saw a magician driving a tractor",
		 "Punchline":"He turned it into a field"
		},
		{
		 "Setup":"The only way to kill a French vampire is with a baguette",
		 "Punchline":"It's a pain-staking process"
		},
		{
		 "Setup":"A mime looked like he wanted to tell me something",
		 "Punchline":"But it wasn't aloud"
		},
		{
		 "Setup":"I built a wine cellar with an elevator",
		 "Punchline":"It lifts my spirits"
		},
		{
		 "Setup":"Almost all small garden statues have pointy red hats",
		 "Punchline":"It's a little gnome fact"
		},
		{
		 "Setup":"I clean my own house and wash my own dishes",
		 "Punchline":"I'm a self-maid man"
		},
		{
		 "Setup":"I can't help it that I'm gaining weight",
		 "Punchline":"I've had a lot on my plate lately"
		},
		{
		 "Setup":"Saw a girl lining her dolls up on top of a grill",
		 "Punchline":"It was a Barbie queue"
		},
		{
		 "Setup":"I heard about these spies who planted microphones in a box of tic-tacs",
		 "Punchline":"They were in four mints"
		},
		{
		 "Setup":"I'm going to teach people about dried out grapes",
		 "Punchline":"It's all about raisin awareness"
		},
		{
		 "Setup":"My banker doesn't have any friends",
		 "Punchline":"He's too much of a loaner"
		},
		{
		 "Setup":"They didn't believe I was wearing a harp costume",
		 "Punchline":"I think they were calling me a lyre"
		},
		{
		 "Setup":"Trees don't have teeth",
		 "Punchline":"They're all bark and no bite"
		},
		{
		 "Setup":"Ducks keep attacking my dog",
		 "Punchline":"Because he's a pure-bread"
		},
		{
		 "Setup":"How do communists measure time?",
		 "Punchline":"With an our-glass"
		},
		{
		 "Setup":"I can't move a chicken coop by myself",
		 "Punchline":"It's too heavy of a bird den"
		},
		{
		 "Setup":"The Lord of the Rings pinball machine doesn't take quarters",
		 "Punchline":"Only Tolkiens"
		},
		{
		 "Setup":"The police figured out what the murder weapon was pretty quickly",
		 "Punchline":"It was a brief case"
		},
		{
		 "Setup":"What's the most famous rock group in American history?",
		 "Punchline":"Mount Rushmore"
		},
		{
		 "Setup":"I don't trust people who swim every day",
		 "Punchline":"They seem a little fishy to me"
		},
		{
		 "Setup":"They say the part of the hospital with the least privacy",
		 "Punchline":"Is the ICU"
		},
		{
		 "Setup":"How do you make Holy Water?",
		 "Punchline":"You take regular water and boil the hell out of it"
		},
		{
		 "Setup":"I asked the doctor if I could do my own anesthesia",
		 "Punchline":"He said \"Sure, knock yourself out\""
		},
		{
		 "Setup":"There are no losers in a hot dog eating contest",
		 "Punchline":"Only wieners"
		},
		{
		 "Setup":"What's a dragon's favorite snack?",
		 "Punchline":"Fire crackers"
		},
		{
		 "Setup":"I'm gonna buy a race car bed",
		 "Punchline":"Soon I'll be fast asleep"
		},
		{
		 "Setup":"Stop telling tree jokes?",
		 "Punchline":"You're not the balsa me."
		},
		{
		 "Setup":"We need more books in prison libraries",
		 "Punchline":"The prose will outweigh the cons"
		},
		{
		 "Setup":"My tailor also runs a moving service",
		 "Punchline":"He's always hemming and hauling"
		},
		{
		 "Setup":"I didn't mean to glue my autobiography to my hand",
		 "Punchline":"That's my story and I'm sticking to it"
		},
		{
		 "Setup":"I trained a dog to bring me a glass of wine",
		 "Punchline":"He's a bordeaux collie"
		},
		{
		 "Setup":"You shouldn't joke about someone playing the tuba",
		 "Punchline":"It's a low blow"
		},
		{
		 "Setup":"I want to sell these gloves because they are too tight",
		 "Punchline":"Can someone take them off my hands?"
		},
		{
		 "Setup":"Did you know Darth Vader had a sister?",
		 "Punchline":"Her name was Ella"
		},
		{
		 "Setup":"What's one foot long and slippery?",
		 "Punchline":"A slipper"
		},
		{
		 "Setup":"The first time I saw an escalator",
		 "Punchline":"I stopped and staired"
		},
		{
		 "Setup":"It's not a law that dudes have to eat together",
		 "Punchline":"That's a mandate"
		},
		{
		 "Setup":"If my current career doesn't work out I'm gonna become a honey farmer",
		 "Punchline":"It's my Plan Bee"
		},
		{
		 "Setup":"I only buy corn from pirates.",
		 "Punchline":"I always pay a buccaneer"
		},
		{
		 "Setup":"Why did the archaeopteryx get the worm?",
		 "Punchline":"Because it's an early bird"
		},
		{
		 "Setup":"I got an email explaining how to read maps backwards",
		 "Punchline":"It was spam"
		},
		{
		 "Setup":"For the next 40 days, I'm giving up Word docs in favor of spreadsheets",
		 "Punchline":"It's gonna be Excel lent"
		},
		{
		 "Setup":"Some people are unsure about driving transparent cars",
		 "Punchline":"I will be steering clear"
		},
		{
		 "Setup":"I want to get better at bowling",
		 "Punchline":"But I don't have any good roll models"
		},
		{
		 "Setup":"Dr. Pepper doesn't hate society",
		 "Punchline":"He actually loves pop culture"
		},
		{
		 "Setup":"Did you hear about the sick juggler?",
		 "Punchline":"He couldn't stop throwing up"
		},
		{
		 "Setup":"Ducks don't like being stressed out",
		 "Punchline":"They quack under pressure"
		},
		{
		 "Setup":"Which side of a sheep has the most wool?",
		 "Punchline":"The outside"
		},
		{
		 "Setup":"You shouldn't eat tin foil",
		 "Punchline":"You might sheet metal"
		},
		{
		 "Setup":"Ghosts don't like rain",
		 "Punchline":"It dampens their spirits"
		},
		{
		 "Setup":"Saw a sign that said 'Falling Rocks'",
		 "Punchline":"It doesn't"
		},
		{
		 "Setup":"The Australians cheered when I brought out dessert",
		 "Punchline":"Which is weird, they usually boo meringue"
		},
		{
		 "Setup":"You don't audition to wear Iron Man's armor",
		 "Punchline":"They cast you"
		},
		{
		 "Setup":"Can't believe someone stole my limbo bar",
		 "Punchline":"I mean how low can you get"
		},
		{
		 "Setup":"My boss thinks it's weird I'm only sick Monday through Friday",
		 "Punchline":"But I have a weekend immune system"
		},
		{
		 "Setup":"I told the manufacturer my air mattress is lumpy",
		 "Punchline":"They said I'm blowing it out of proportion"
		},
		{
		 "Setup":"The only thing Flat Earthers fear",
		 "Punchline":"Is sphere itself"
		},
		{
		 "Setup":"Gonna start a goth dating app called Graveyard",
		 "Punchline":"Instead of liking people, you dig them"
		},
		{
		 "Setup":"When I was in high school I ran a maratho",
		 "Punchline":"I never finished it"
		},
		{
		 "Setup":"I asked the bartender for something harder than water",
		 "Punchline":"He gave me ice"
		},
		{
		 "Setup":"The only way to prove you have de-feeted your enemy",
		 "Punchline":"Is to take a foe-toe"
		},
		{
		 "Setup":"I thought my shadow puppet theatre would make a fortune",
		 "Punchline":"Had too much faith in projected figures"
		},
		{
		 "Setup":"Today's my first day working at the spice factory",
		 "Punchline":"It's a seasonal job"
		},
		{
		 "Setup":"I built a car out of old washing machines",
		 "Punchline":"Can't wait to take it for a spin"
		},
		{
		 "Setup":"The first three Roman poisons will kill you",
		 "Punchline":"The fourth one, Poison IV, just makes you itchy"
		},
		{
		 "Setup":"The triangle is my least favorite instrument",
		 "Punchline":"It's just one ting after another"
		},
		{
		 "Setup":"I'm nervous about wearing this wool sweater in public",
		 "Punchline":"It makes me feel sheepish"
		},
		{
		 "Setup":"I broke a leg during my audition",
		 "Punchline":"But I still ended up in the cast"
		},
		{
		 "Setup":"A termite walks up to the counter of a saloon and asks",
		 "Punchline":"'Where\\'s the bar tender?'"
		},
		{
		 "Setup":"My friend got a huge water bill",
		 "Punchline":"I sent him a 'get well soon' card"
		},
		{
		 "Setup":"Not sure who ripped the final pages out of my comic books",
		 "Punchline":"But I'm drawing my own conclusions"
		},
		{
		 "Setup":"I love helium",
		 "Punchline":"I can't speak highly enough about it"
		},
		{
		 "Setup":"I wanted to be an astronaut",
		 "Punchline":"But my parents told me the sky's the limit"
		},
		{
		 "Setup":"I attempted to list out my favorite knots",
		 "Punchline":"But they were all tied"
		},
		{
		 "Setup":"You can hear blood in your veins",
		 "Punchline":"If you listen varicosely"
		},
		{
		 "Setup":"I told the doctor I broke my arm in three places",
		 "Punchline":"He said, \"don't go to those places\""
		},
		{
		 "Setup":"What do you call an elk with no name?",
		 "Punchline":"Anonymoose"
		},
		{
		 "Setup":"I'm getting a 4k monitor tomorrow",
		 "Punchline":"It'll be my New Year's resolution"
		},
		{
		 "Setup":"When is a door not a door? ",
		 "Punchline":"When it's ajar"
		},
		{
		 "Setup":"A man tried to sell me a coffin today",
		 "Punchline":"I told him that's the last thing I need"
		},
		{
		 "Setup":"How do you make a squid smile?",
		 "Punchline":"Give it ten tickles"
		},
		{
		 "Setup":"What do you call a bear with no teeth?",
		 "Punchline":"A gummy bear"
		},
		{
		 "Setup":"She told me to stop acting like a flamingo",
		 "Punchline":"I had to put my foot down"
		},
		{
		 "Setup":"I forgot about the sun one night",
		 "Punchline":"Then it dawned on me"
		},
		{
		 "Setup":"I told her she drew her eyebrows on too high",
		 "Punchline":"She looked surprised"
		},
		{
		 "Setup":"I hate Russian nesting dolls",
		 "Punchline":"They're so full of themselves"
		},
		{
		 "Setup":"Last night I dreamed I was a muffler",
		 "Punchline":"I woke up exhausted"
		},
		{
		 "Setup":"Not sure what the best thing is about Switzerland",
		 "Punchline":"But their flag is a big plus"
		},
		{
		 "Setup":"If I had a dollar for everything I did out of spite",
		 "Punchline":"I wouldn't even take the money"
		},
		{
		 "Setup":"My ex-wife is a housekeeper",
		 "Punchline":"She kept the house"
		},
		{
		 "Setup":"Pediatricians get frustrated",
		 "Punchline":"Because they have very little patients"
		},
		{
		 "Setup":"You didn't see the ninja parade yesterday?",
		 "Punchline":"That means it went perfectly"
		},
		{
		 "Setup":"I wanted a dog that wouldn't bark",
		 "Punchline":"So I got a hush puppy"
		},
		{
		 "Setup":"Nobody likes archers",
		 "Punchline":"They're too arrow-gant"
		},
		{
		 "Setup":"She told me to stop singing Wonderwall",
		 "Punchline":"I said maybe"
		},
		{
		 "Setup":"A priest, a rabbi and a giraffe walk into a bar",
		 "Punchline":"The bartender says, \"What is this, a joke?\""
		},
		{
		 "Setup":"If I'm ever comatose and on life support, please turn it off",
		 "Punchline":"And then turn it on again. See if that works"
		},
		{
		 "Setup":"Did you hear about the grizzly that killed those campers?",
		 "Punchline":"He used his bear hands"
		},
		{
		 "Setup":"What do you call a dead bee?",
		 "Punchline":"A was"
		},
		{
		 "Setup":"I'm never hungry at the beach",
		 "Punchline":"Because of all the sand which is there"
		},
		{
		 "Setup":"I was offered a job building tombs for pharaohs",
		 "Punchline":"It turned out to be a pyramid scheme"
		},
		{
		 "Setup":"I got so drunk the other night that I lost my glasses",
		 "Punchline":"The rest is a blur"
		},
		{
		 "Setup":"I wasn't going to get a brain transplant",
		 "Punchline":"But then I changed my mind"
		},
		{
		 "Setup":"I broke my finger",
		 "Punchline":"On the other hand, I'm completely fine"
		},
		{
		 "Setup":"I wasn't sure about having a beard",
		 "Punchline":"But it grew on me"
		},
		{
		 "Setup":"My friend told me to stop pushing him around and talking behind his back",
		 "Punchline":"I told him it's not my fault he's in a wheelchair"
		},
		{
		 "Setup":"I got mugged by a tattoo artist last night",
		 "Punchline":"He drew a gun on me"
		},
		{
		 "Setup":"I was doing alright at water polo",
		 "Punchline":"Until my horse drowned"
		},
		{
		 "Setup":"The inventor of knock knock jokes should get a no-bell prize",
		 "Punchline":""
		},
		{
		 "Setup":"Did you hear about the chameleon who couldn't change color?",
		 "Punchline":"He had a reptile dysfunction",
		 "Tags":"nsfw"
		},
		{
		 "Setup":"Did you hear about the cannibal who got home late for dinner?",
		 "Punchline":"All he got was the cold shoulder"
		},
		{
		 "Setup":"I poured some root beer into a square cup",
		 "Punchline":"Now it's just beer"
		},
		{
		 "Setup":"I quit my job at the helium factory today",
		 "Punchline":"I refuse to be spoken to in that tone"
		},
		{
		 "Setup":"Kleptomaniacs don't get metaphors",
		 "Punchline":"because they take everything...literally"
		},
		{
		 "Setup":"People say filling animals with helium is wrong",
		 "Punchline":"Hey, whatever floats your goat"
		},
		{
		 "Setup":"I used a universal remote control once",
		 "Punchline":"It changed everything"
		},
		{
		 "Setup":"My friends used to laugh when I told them I was going to be a comedian",
		 "Punchline":"They're not laughing now"
		},
		{
		 "Setup":"Asked a friend what it's like in North Korea",
		 "Punchline":"He said he can't complain"
		},
		{
		 "Setup":"I've developed a phobia of elevators",
		 "Punchline":"I'm taking steps to avoid them"
		},
		{
		 "Setup":"Why do tigers have stripes?",
		 "Punchline":"Because they don't want to be spotted"
		},
		{
		 "Setup":"I entered 10 puns in a contest, hoping one would win",
		 "Punchline":"No pun in ten did"
		},
		{
		 "Setup":"I could see myself working in a mirror factory",
		 "Punchline":""
		},
		{
		 "Setup":"What do you get when you cross a rhetorical question with a joke?",
		 "Punchline":""
		},
		{
		 "Setup":"The first rule of mime club is",
		 "Punchline":""
		},
		{
		 "Setup":"Rest in peace, boiling water",
		 "Punchline":"You will be mist"
		},
		{
		 "Setup":"You know why you don't ever see elephants hiding in trees?",
		 "Punchline":"Because they're really good at it"
		},
		{
		 "Setup":"I used to be addicted to soap",
		 "Punchline":"I'm clean now"
		},
		{
		 "Setup":"I saw they were giving away free parachutes",
		 "Punchline":"No strings attached"
		},
		{
		 "Setup":"If you took a picture of your own aura",
		 "Punchline":"Would that be a soulfie?"
		},
		{
		 "Setup":"I don't understand magnets",
		 "Punchline":"I just can't see the attraction"
		},
		{
		 "Setup":"You shouldn't wear two monocles at once",
		 "Punchline":"Because that'd be a spectacle"
		},
		{
		 "Setup":"I need to stop meating vegetarians",
		 "Punchline":""
		},
		{
		 "Setup":"BMW stopped including turn signals in their cars in 2003",
		 "Punchline":"Not a single BMW owner has complained"
		},
		{
		 "Setup":"Don't date a tennis player",
		 "Punchline":"Love means nothing to them"
		},
		{
		 "Setup":"I have a stepladder",
		 "Punchline":"I never knew my real ladder"
		},
		{
		 "Setup":"My maid found my winning lottery ticket",
		 "Punchline":"She really cleaned up"
		},
		{
		 "Setup":"I wanted to become a vampire",
		 "Punchline":"So I went to batting practice"
		},
		{
		 "Setup":"A good pun is its own re-word",
		 "Punchline":""
		},
		{
		 "Setup":"My debt has been with me since college",
		 "Punchline":"I can't budge it"
		},
		{
		 "Setup":"They stole everything except my soap",
		 "Punchline":"Those dirty bastards",
		 "Tags":"nsfw"
		},
		{
		 "Setup":"I'm afraid of being trapped in a chimney with Santa",
		 "Punchline":"I'm Claustrophobic"
		},
		{
		 "Setup":"Santa doesn't have helpers",
		 "Punchline":"He has subordinate Clauses"
		},
		{
		 "Setup":"All the pages in my new thesarus are blank",
		 "Punchline":"I have no words to describe how angry I am"
		},
		{
		 "Setup":"If you get cold, go stand in a corner",
		 "Punchline":"They're usually around 90 degrees"
		},
		{
		 "Setup":"Coding in C# keeps breaking my keyboards",
		 "Punchline":"Because it's strongly-typed"
		},
		{
		 "Setup":"I ran through a screen door once when I was a kid",
		 "Punchline":"I really strained myself"
		},
		{
		 "Setup":"How do people get letters if envelopes are stationery?",
		 "Punchline":""
		},
		{
		 "Setup":"What's a pirate's favorite letter?",
		 "Punchline":"It's not R or C. It's P. Without it he's irate"
		},
		{
		 "Setup":"Saw a 'no trespassing' sign at a funeral home",
		 "Punchline":"People must be dying to get in there"
		},
		{
		 "Setup":"She told me there was a hole in the wall of the ladies' locker room",
		 "Punchline":"I told her I would look into it"
		},
		{
		 "Setup":"Small babies may get delivered by storks",
		 "Punchline":"But very heavy babies get delivered by a crane"
		},
		{
		 "Setup":"The store was really busy because all the paddles were on sale",
		 "Punchline":"It was quite an oar deal"
		},
		{
		 "Setup":"I don't trust acupuncturists",
		 "Punchline":"They're always stabbing you in the back"
		},
		{
		 "Setup":"I held the door open for a clown today",
		 "Punchline":"Seemed like a nice jester"
		},
		{
		 "Setup":"The cops caught a 3 year old who wouldn't take a nap",
		 "Punchline":"They said he was resisting a rest"
		},
		{
		 "Setup":"Why do French people eat snails?",
		 "Punchline":"They don't like fast food"
		},
		{
		 "Setup":"What do you call a girl who can't draw?",
		 "Punchline":"Tracy"
		},
		{
		 "Setup":"I get so mad when I see someone with their wallet chained to their belt",
		 "Punchline":"I literally can't take it"
		},
		{
		 "Setup":"If you ever get attacked by a group of clowns, remember",
		 "Punchline":"Go for the juggler"
		},
		{
		 "Setup":"Saw a dirty guy on the street muttering about something",
		 "Punchline":"What a vague rant"
		},
		{
		 "Setup":"My computer crashed",
		 "Punchline":"It must have had a bad driver"
		},
		{
		 "Setup":"One time a guy asked me for a small donation for the local swimming pool",
		 "Punchline":"I gave him a glass of water"
		},
		{
		 "Setup":"My cardboard girlfriend fell apart when I tried to hug her",
		 "Punchline":"Guess she wasn't cut out for that sort of thing"
		},
		{
		 "Setup":"What washes up on tiny beaches?",
		 "Punchline":"Microwaves"
		},
		{
		 "Setup":"I had a very small problem with my car",
		 "Punchline":"So I took it to a quantum mechanic"
		},
		{
		 "Setup":"There's a fine line between a numerator and a denominator",
		 "Punchline":""
		},
		{
		 "Setup":"If the USSR gets back together",
		 "Punchline":"Will they call it the Soviet Reunion?"
		},
		{
		 "Setup":"I will stop at nothing to avoid negative numbers",
		 "Punchline":""
		},
		{
		 "Setup":"Never trust a guy with graph paper",
		 "Punchline":"He's probably plotting something"
		},
		{
		 "Setup":"Why did Boba Fett work alone?",
		 "Punchline":"He was hunting Solo"
		},
		{
		 "Setup":"Reverse psychology is when you make your therapist cry",
		 "Punchline":""
		},
		{
		 "Setup":"The Sahara desert walks into a bar",
		 "Punchline":"The bartender says, \"Long time no sea\""
		},
		{
		 "Setup":"I got punched in the mouth once",
		 "Punchline":"It really hurt my fillings"
		},
		{
		 "Setup":"What did the pop star do when she locked herself out of her room?",
		 "Punchline":"She sang until she found the right key"
		},
		{
		 "Setup":"One time I fell through the roof of a French bakery",
		 "Punchline":"I was in a world of pain"
		},
		{
		 "Setup":"If chocolate cookies are made of chocolate and peanut butter cookies are made of peanut butter...",
		 "Punchline":"What are girl scout cookies made of?"
		},
		{
		 "Setup":"A girl walked into a bar and asked a bartender for a double entendre",
		 "Punchline":"So he gave it to her"
		},
		{
		 "Setup":"I saw a documentary on how ships are kept together",
		 "Punchline":"It was riveting"
		},
		{
		 "Setup":"I just finished my final exam for culinary school",
		 "Punchline":"It was a piece of cake"
		},
		{
		 "Setup":"I hate those people who knock on your door and tell you that you need to be 'saved' or you'll 'burn'",
		 "Punchline":"Firemen"
		},
		{
		 "Setup":"I always wear two pairs of pants when I go golfing",
		 "Punchline":"In case I get a hole in one"
		},
		{
		 "Setup":"A man with authority walked into a bar",
		 "Punchline":"He ordered everyone a round"
		},
		{
		 "Setup":"I want anarchy",
		 "Punchline":"My keyboad doesn't have one"
		},
		{
		 "Setup":"They're making a movie about Tetris",
		 "Punchline":"It's gonna be a real blockbuster"
		},
		{
		 "Setup":"I'll never forget my father's last words",
		 "Punchline":"\"Hold this ladder steady for me\""
		},
		{
		 "Setup":"My bread factory burned down",
		 "Punchline":"Now my business is toast"
		},
		{
		 "Setup":"I wanted my motorcycle to go faster",
		 "Punchline":"But it was two-tired"
		},
		{
		 "Setup":"I can cut a log just by looking at it",
		 "Punchline":"It's true! I saw it with my own eyes"
		},
		{
		 "Setup":"I love the Earth's rotation",
		 "Punchline":"It really makes my day"
		},
		{
		 "Setup":"A limbo champion walked into a bar",
		 "Punchline":"And immediately lost his title"
		},
		{
		 "Setup":"To everyone who ever talked about me behind my back",
		 "Punchline":"You discussed me"
		},
		{
		 "Setup":"I always went the extra mile at my last job, and they still fired me",
		 "Punchline":"I wasn't cut out to be a taxi driver"
		},
		{
		 "Setup":"Riot police like to get to work early",
		 "Punchline":"So they can beat the crowds"
		},
		{
		 "Setup":"My parents were happy for nineteen years",
		 "Punchline":"And then they got married"
		},
		{
		 "Setup":"I work for a company that makes bicycle wheels",
		 "Punchline":"I'm the spokesperson"
		},
		{
		 "Setup":"The computer usually beats me at chess",
		 "Punchline":"But I'm undefeated when it comes to kickboxing"
		},
		{
		 "Setup":"One of my friends won a lifetime supply of lotion",
		 "Punchline":"He won't stop rubbing it in"
		},
		{
		 "Setup":"I tried to get a lapdance",
		 "Punchline":"But she told me she was clothed for the night",
		 "Tags":"nsfw"
		},
		{
		 "Setup":"Becoming a vegan was a big missed steak",
		 "Punchline":""
		},
		{
		 "Setup":"A procrastinator's work is never done",
		 "Punchline":""
		},
		{
		 "Setup":"I like to keep my dreams alive",
		 "Punchline":"By hitting the snooze button"
		},
		{
		 "Setup":"I want to learn sign language",
		 "Punchline":"It looks really handy"
		},
		{
		 "Setup":"When I'm asked for an emergency contact I always write 'a very good doctor'",
		 "Punchline":""
		},
		{
		 "Setup":"If the toothbrush was invented anywhere but West Virginia it'd be called a teethbrush",
		 "Punchline":""
		},
		{
		 "Setup":"Ants don't get sick",
		 "Punchline":"It's because of their little anty bodies"
		},
		{
		 "Setup":"I only believe in 12.5 percent of the Bible",
		 "Punchline":"I'm an eighth-thiest"
		},
		{
		 "Setup":"Space heaters make great housewarming gifts",
		 "Punchline":""
		},
		{
		 "Setup":"Young girls always walk around in odd-numbered groups",
		 "Punchline":"Because they can't even"
		},
		{
		 "Setup":"When I was nine years old, my parents told me I was adopted",
		 "Punchline":"And that I needed to start packing"
		},
		{
		 "Setup":"I drank a vampire's blood once",
		 "Punchline":"It was iron-y"
		},
		{
		 "Setup":"I swallowed one of my teeth when I was a kid",
		 "Punchline":"It came back to bite me in the ass",
		 "Tags":"nsfw"
		},
		{
		 "Setup":"Some nights I just lie down and stare up at the stars and I wonder",
		 "Punchline":"What happened to my roof?"
		},
		{
		 "Setup":"I went to a fight in Canada once",
		 "Punchline":"A hockey game broke out"
		},
		{
		 "Setup":"One time, I threw a boomerang and it never came back",
		 "Punchline":"I've lived in fear ever since"
		},
		{
		 "Setup":"Someone threw a can of soda at me today",
		 "Punchline":"Luckily, it was a soft drink"
		},
		{
		 "Setup":"I fell into a big hole in the ground",
		 "Punchline":"Because I couldn't see that well"
		},
		{
		 "Setup":"People say they hate getting stuck in revolving doors",
		 "Punchline":"But they'll come around, eventually"
		},
		{
		 "Setup":"This cardboard belt is a waist of paper",
		 "Punchline":""
		},
		{
		 "Setup":"I have my doubts about this dermatologist",
		 "Punchline":"He makes a lot of rash decisions"
		},
		{
		 "Setup":"I have some bad news about shortbread",
		 "Punchline":"They're not making it any longer"
		},
		{
		 "Setup":"I'm against protesting",
		 "Punchline":"But I don't know how to show it"
		},
		{
		 "Setup":"I read that most accidents occur less than a mile from home",
		 "Punchline":"So I moved"
		},
		{
		 "Setup":"If you don't pay your exorcist",
		 "Punchline":"You might get repossessed"
		},
		{
		 "Setup":"I got this book to help with my OCD",
		 "Punchline":"I can't put it down"
		},
		{
		 "Setup":"What's the difference between a hippo and a Zippo?",
		 "Punchline":"One's a little lighter"
		},
		{
		 "Setup":"This cute German girl gave me her phone number",
		 "Punchline":"It's 999-9999"
		},
		{
		 "Setup":"If a blind girl says it's really big",
		 "Punchline":"She's probably just pulling your leg",
		 "Tags":"nsfw"
		},
		{
		 "Setup":"I got attacked by a group of mimes",
		 "Punchline":"They did unspeakable things to me"
		},
		{
		 "Setup":"There's only one vampire on Sesame Street",
		 "Punchline":"At least, only one who counts"
		},
		{
		 "Setup":"After all the blood, sweat, and tears I've put into this job...",
		 "Punchline":"They won't let me be a DNA tester anymore"
		},
		{
		 "Setup":"The most inbred dogs are hot dogs",
		 "Punchline":""
		},
		{
		 "Setup":"I tried online dating",
		 "Punchline":"But couldn't find anyone who clicked"
		},
		{
		 "Setup":"The Mafia hired me to do some cleaning",
		 "Punchline":"Now I'm a maid man"
		},
		{
		 "Setup":"Someone stole all my lamps yesterday",
		 "Punchline":"I was de-lighted"
		},
		{
		 "Setup":"When Beethoven died..",
		 "Punchline":"he became a de-composer"
		},
		{
		 "Setup":"I saw a faith healer giving a demonstration yesterday",
		 "Punchline":"He was so bad, a guy in a wheelchair got up and walked out halfway through"
		},
		{
		 "Setup":"Why was six afraid of seven?",
		 "Punchline":"Because seven was a six offender"
		},
		{
		 "Setup":"They asked why I'd make a good waiter",
		 "Punchline":"I told them I bring a lot to the table"
		},
		{
		 "Setup":"I used to be addicted to the Hokey Pokey",
		 "Punchline":"But I turned myself around"
		},
		{
		 "Setup":"There used to be only 25 letters in the alphabet",
		 "Punchline":"Nobody knew y"
		},
		{
		 "Setup":"I always wanted to be a juggler",
		 "Punchline":"But I never had the balls",
		 "Tags":"nsfw"
		},
		{
		 "Setup":"If her feet point away from you, she's not interested",
		 "Punchline":"But if they're behind her ears, that's a sign she might be into you",
		 "Tags":"nsfw"
		},
		{
		 "Setup":"I went to an overweight psychic once",
		 "Punchline":"She was a four-chin teller"
		},
		{
		 "Setup":"I knew the vampire was sick",
		 "Punchline":"I could tell by his coffin"
		},
		{
		 "Setup":"I used to be a narcissist",
		 "Punchline":"But look at me now"
		},
		{
		 "Setup":"What's the first thing they teach you in plumbing school?",
		 "Punchline":"Not to chew your fingernails"
		},
		{
		 "Setup":"Did you know Spock had three ears?",
		 "Punchline":"The left ear, the right ear, and the final, front ear"
		},
		{
		 "Setup":"I wanted to order duck",
		 "Punchline":"But I didn't want to deal with the bill"
		},
		{
		 "Setup":"If I had a dog, I'd name him Rolex",
		 "Punchline":"He'd be my watch dog"
		},
		{
		 "Setup":"I gave away all my used batteries...",
		 "Punchline":"Free of charge"
		},
		{
		 "Setup":"A lady at the bank asked me to help check her balance",
		 "Punchline":"So I pushed her over"
		},
		{
		 "Setup":"She hates when I joke about her weight",
		 "Punchline":"She needs to lighten up"
		},
		{
		 "Setup":"Studies have shown that women who are slightly overweight live longer...",
		 "Punchline":"Than men who comment on it"
		},
		{
		 "Setup":"I couldn't think of a cornea pun about eyes",
		 "Punchline":""
		},
		{
		 "Setup":"I wanted to major in history",
		 "Punchline":"But there's no future in it"
		},
		{
		 "Setup":"Where did Noah keep his bees?",
		 "Punchline":"In the ark hives"
		},
		{
		 "Setup":"My grandpa told me that young people were too dependent on technology",
		 "Punchline":"So I unplugged his life support"
		},
		{
		 "Setup":"She called me immature",
		 "Punchline":"So I kicked her out of my pillow fort"
		},
		{
		 "Setup":"I spanked a statue once",
		 "Punchline":"I guess you could say I hit rock bottom"
		},
		{
		 "Setup":"Jokes about communism aren't funny",
		 "Punchline":"Unless everyone gets them"
		},
		{
		 "Setup":"When we see typos and do nothing",
		 "Punchline":"The errorists win"
		},
		{
		 "Setup":"Two guys stole a calendar",
		 "Punchline":"They each got six months"
		}
	]
}
