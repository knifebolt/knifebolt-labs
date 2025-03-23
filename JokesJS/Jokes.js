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
		},
		{
		 "Setup":"I used to know a skunk breeder",
		 "Punchline":"He was a man of phew words"
		},
		{
		 "Setup":"I trust undertakers",
		 "Punchline":"They're the last ones to let you down"
		},
		{
		 "Setup":"Watch out for candy salesmen",
		 "Punchline":"They're always trying to sweet talk you"
		},
		{
		 "Setup":"Libraries are always multi-story buildings",
		 "Punchline":""
		},
		{
		 "Setup":"I'm obsessed with monorails",
		 "Punchline":"I've been told I have a one-track mind"
		},
		{
		 "Setup":"If you're skilled with a chainsaw",
		 "Punchline":"You might get promoted to branch manager"
		},
		{
		 "Setup":"I hate it when food goes to waist",
		 "Punchline":""
		},
		{
		 "Setup":"I'm addicted to brake fluid",
		 "Punchline":"But I can stop anytime I want"
		},
		{
		 "Setup":"When bees finish building their hive",
		 "Punchline":"They have a house-swarming party"
		},
		{
		 "Setup":"Growing up, I used to think of my parents as all no-ing",
		 "Punchline":""
		},
		{
		 "Setup":"She told me she doesn't like cocaine",
		 "Punchline":"She just likes the way it smells"
		},
		{
		 "Setup":"Prison walls should never be built to scale",
		 "Punchline":""
		},
		{
		 "Setup":"I tried to lie to an X-ray technician once",
		 "Punchline":"He saw right through me"
		},
		{
		 "Setup":"Be careful making offhand comments around Captain Hook",
		 "Punchline":""
		},
		{
		 "Setup":"I laundered some money recently",
		 "Punchline":"It was a tidy sum"
		},
		{
		 "Setup":"One time I saw a frustrated cannibal throw up his hands",
		 "Punchline":""
		},
		{
		 "Setup":"I went to the Grand Canyon once",
		 "Punchline":"It was just gorges"
		},
		{
		 "Setup":"Taller people sleep longer in bed",
		 "Punchline":""
		},
		{
		 "Setup":"Ships are more fuel-efficent than cars",
		 "Punchline":"You used to be able to get thousands of miles to the galleon"
		},
		{
		 "Setup":"I walked into a room where the curtains were drawn",
		 "Punchline":"The rest of the furniture was real"
		},
		{
		 "Setup":"I used to know a careless pyromaniac",
		 "Punchline":"He made an ash of himself"
		},
		{
		 "Setup":"Getting a lobotomy seems like a no-brainer",
		 "Punchline":""
		},
		{
		 "Setup":"I don't like needles",
		 "Punchline":"They really get under my skin"
		},
		{
		 "Setup":"I decide which beer to drink on a case-by-case basis",
		 "Punchline":""
		},
		{
		 "Setup":"Abstinence leaves a lot to be desired",
		 "Punchline":""
		},
		{
		 "Setup":"Did you hear about these new reversible jackets?",
		 "Punchline":"I'm excited to see how they turn out"
		},
		{
		 "Setup":"You can't trust ceiling fan installers",
		 "Punchline":"They're always screwing up"
		},
		{
		 "Setup":"Bugs have very diverse religious views",
		 "Punchline":"They're all in sects"
		},
		{
		 "Setup":"Calves don't mind bottles",
		 "Punchline":"One nipple's as good as an udder"
		},
		{
		 "Setup":"I bought a state-of-the-art weed whacker",
		 "Punchline":"It's cutting-hedge technology"
		},
		{
		 "Setup":"If you got rid of all the southpaws",
		 "Punchline":"There would be no one left"
		},
		{
		 "Setup":"My friend got fired from the hot dog stand for putting her hair in a bun",
		 "Punchline":""
		},
		{
		 "Setup":"Did you hear about the two cannonballs who got married?",
		 "Punchline":"They had BBs"
		},
		{
		 "Setup":"I like collecting candy canes",
		 "Punchline":"They're always in mint condition"
		},
		{
		 "Setup":"Where are average things made?",
		 "Punchline":"In a satis-factory"
		},
		{
		 "Setup":"I hate elevators",
		 "Punchline":"They really drive me up a wall"
		},
		{
		 "Setup":"I read somewhere that the least-spoken language in the world is sign language",
		 "Punchline":""
		},
		{
		 "Setup":"How do they figure out the price of hammers?",
		 "Punchline":"Per pound"
		},
		{
		 "Setup":"A sleeping bag should be called a nap sack",
		 "Punchline":""
		},
		{
		 "Setup":"I had to flip my hourglass after 30 minutes",
		 "Punchline":"Turns out it was full of quicksand"
		},
		{
		 "Setup":"When she discovered I switched our bed with a trampoline",
		 "Punchline":"She really hit the roof"
		},
		{
		 "Setup":"I was fine until I got a sled",
		 "Punchline":"After that, I went downhill fast"
		},
		{
		 "Setup":"I'M GOING TO POST IN ALL CAPS FROM NOW ON",
		 "Punchline":"BECAUSE I HATE SMALL TALK"
		},
		{
		 "Setup":"They told me I'm not fit to be a mime",
		 "Punchline":"I think it was because of something I said"
		},
		{
		 "Setup":"How many of you believe in telekinesis?",
		 "Punchline":"Raise my hand"
		},
		{
		 "Setup":"I don't know if I just got hit by freezing rain",
		 "Punchline":"But it hurt like hail"
		},
		{
		 "Setup":"I wrote a book about religious women",
		 "Punchline":"You can find it in the nun fiction section"
		},
		{
		 "Setup":"A book just fell on my head",
		 "Punchline":"I've only got my shelf to blame"
		},
		{
		 "Setup":"In college, I was so poor I couldn't pay my electric bills",
		 "Punchline":"Those were dark times"
		},
		{
		 "Setup":"We all know Albert Einstein was a genius",
		 "Punchline":"But his brother Frank was a monster"
		},
		{
		 "Setup":"A pebble is tougher than a stick",
		 "Punchline":"It's always a little boulder"
		},
		{
		 "Setup":"I ordered 2000 pounds of Chinese soup",
		 "Punchline":"It was won ton"
		},
		{
		 "Setup":"I can't stop buying graphing paper",
		 "Punchline":"I just don't know where to draw the line"
		},
		{
		 "Setup":"As long as we use the imperial system",
		 "Punchline":"A ruler will be afoot"
		},
		{
		 "Setup":"I was having trouble understanding lightning",
		 "Punchline":"Then it struck me"
		},
		{
		 "Setup":"Someone gets stabbed in London every nine minutes",
		 "Punchline":"Poor bastard"
		},
		{
		 "Setup":"I wasn't sure about gluing a propeller to my face",
		 "Punchline":"But now I'm a big fan"
		},
		{
		 "Setup":"I didn't think that chiropractor would help me",
		 "Punchline":"But I stand corrected"
		},
		{
		 "Setup":"If a kangaroo can't jump, it's completely hopless",
		 "Punchline":""
		},
		{
		 "Setup":"An optometrist fell into a lens grinder",
		 "Punchline":"He made a spectacle of himself"
		},
		{
		 "Setup":"I wanted to learn how to drive a stick shift",
		 "Punchline":"But I couldn't find a manual"
		},
		{
		 "Setup":"I sued the airline for misplacing my luggage",
		 "Punchline":"They lost the case"
		},
		{
		 "Setup":"I, for one, like Roman numerals",
		 "Punchline":""
		},
		{
		 "Setup":"I quit my job as a personal trainer because I wasn't fit enough",
		 "Punchline":"I handed in my too weak notice"
		},
		{
		 "Setup":"Working from home is great",
		 "Punchline":"Unless you're a firefighter"
		},
		{
		 "Setup":"I'm not sure how many trains I've derailed",
		 "Punchline":"It's so hard to keep track"
		},
		{
		 "Setup":"They don't have training for garbagemen",
		 "Punchline":"You're supposed to pick things up as you go along"
		},
		{
		 "Setup":"I'm getting rid of this calendar soon",
		 "Punchline":"Its days are numbered"
		},
		{
		 "Setup":"My friend tried to annoy me with bird puns",
		 "Punchline":"Well, toucan play at that game"
		},
		{
		 "Setup":"Pirates can't recite the alphabet",
		 "Punchline":"They get lost at 'C'"
		},
		{
		 "Setup":"I know a guy who married his ex-wife",
		 "Punchline":"I think he's only with her for his money"
		},
		{
		 "Setup":"Thinking about selling my vacuum cleaner",
		 "Punchline":"All it does is collect dust"
		},
		{
		 "Setup":"Parallel lines have so much in common",
		 "Punchline":"It's a shame they'll never meet"
		},
		{
		 "Setup":"My neighbors are listening to great music",
		 "Punchline":"Whether they like it or not"
		},
		{
		 "Setup":"How do you grow electricity?",
		 "Punchline":"With a power plant"
		},
		{
		 "Setup":"I had a cross-eyed teacher in high school",
		 "Punchline":"She couldn't control her pupils"
		},
		{
		 "Setup":"I'd forgotten what it's like to throw a boomerang",
		 "Punchline":"but it's coming back to me"
		},
		{
		 "Setup":"Six thirty is the best time of the day",
		 "Punchline":"Hands down"
		},
		{
		 "Setup":"I accidentally handed my girlfriend a glue stick instead of her lipstick",
		 "Punchline":"She still isn't speaking to me"
		},
		{
		 "Setup":"One time I saw four people beating a guy up so I stepped in to help",
		 "Punchline":"He didn't stand a chance against the five of us"
		},
		{
		 "Setup":"I've been at her grave all day",
		 "Punchline":"She thinks I'm digging a fish pond"
		},
		{
		 "Setup":"My porcupine committed suicide",
		 "Punchline":"He quilled himself"
		},
		{
		 "Setup":"Where do fish keep their money?",
		 "Punchline":"In a river bank"
		},
		{
		 "Setup":"I really wanted to buy a camouflage shirt",
		 "Punchline":"But I couldn't find one"
		},
		{
		 "Setup":"Why do .NET developers wear glasses?",
		 "Punchline":"Because it's difficult to C#"
		},
		{
		 "Setup":"What do you call a communist sniper?",
		 "Punchline":"A Marxman"
		},
		{
		 "Setup":"I have a black hole on my coffee table",
		 "Punchline":"It really brings the room together"
		},
		{
		 "Setup":"I got fired from my job as a magician",
		 "Punchline":"I was completely disillusioned"
		},
		{
		 "Setup":"Santa's a pure capitalist",
		 "Punchline":"He's an elf-made man"
		},
		{
		 "Setup":"I got hit by a ball of hail once",
		 "Punchline":"I was knocked out cold"
		},
		{
		 "Setup":"I tried to multiply a negative and a positive number together but I ended up nonplussed",
		 "Punchline":""
		},
		{
		 "Setup":"I tried to make a boat out of stone",
		 "Punchline":"It was a real hardship"
		},
		{
		 "Setup":"You don't need to cook stolen eggs",
		 "Punchline":"They're already poached"
		},
		{
		 "Setup":"I used to be really fixated on stealing road signs",
		 "Punchline":"I pulled out all the stops"
		},
		{
		 "Setup":"I bought my prosthetic arm at a second-hand store",
		 "Punchline":""
		},
		{
		 "Setup":"I took my dog to a flea circus",
		 "Punchline":"He stole the show"
		},
		{
		 "Setup":"I decided to learn karate",
		 "Punchline":"Just for kicks"
		},
		{
		 "Setup":"One time I got a transfusion in Taiwan",
		 "Punchline":"It was Taipei blood"
		},
		{
		 "Setup":"I'd be a terrible mountain climber",
		 "Punchline":"I'm not in peak condition"
		},
		{
		 "Setup":"I would never join a dangerous cult",
		 "Punchline":"I prefer safe sects"
		},
		{
		 "Setup":"I tried opening a bank in southern California",
		 "Punchline":"But it ended up in de fault"
		},
		{
		 "Setup":"I saw a note on a broken perfume bottle that said 'out of odor'",
		 "Punchline":""
		},
		{
		 "Setup":"I used to stumble around drunk as a toddler",
		 "Punchline":"It really messed up my kid knees"
		},
		{
		 "Setup":"I saw a really huge fan today",
		 "Punchline":"I was completely blown away"
		},
		{
		 "Setup":"I thought I'd make money as a submarine captain",
		 "Punchline":"But I couldn't keep my head above water"
		},
		{
		 "Setup":"I had a bad masseuse",
		 "Punchline":"He really rubbed me the wrong way"
		},
		{
		 "Setup":"It's never hard to find work as a garbage man",
		 "Punchline":"Business is always picking up"
		},
		{
		 "Setup":"I thought my unemployed cowboy friend was crazy",
		 "Punchline":"Turns out he was just de-ranged"
		},
		{
		 "Setup":"Why do ducks have tailfeathers?",
		 "Punchline":"To hide their butt-quacks"
		},
		{
		 "Setup":"I'm no good at setting up tents",
		 "Punchline":"Too many missed stakes"
		},
		{
		 "Setup":"I saw a thief running out of a store with a bunch of soap",
		 "Punchline":"He made a clean getaway"
		},
		{
		 "Setup":"I had a dream I wrote 'The Hobbit'",
		 "Punchline":"But it turns out I was just Tolkien in my sleep"
		},
		{
		 "Setup":"I know a guy who trains walruses and elephants at the same time",
		 "Punchline":"He's great at multi-tusking"
		},
		{
		 "Setup":"What do you call an Italian hooker?",
		 "Punchline":"A pastatute",
		 "Tags":"nsfw"
		},
		{
		 "Setup":"I used to pretend I was my identical twin",
		 "Punchline":"But I couldn't live with myself"
		},
		{
		 "Setup":"Bass players usually aren't flashy",
		 "Punchline":"They're too low-key"
		},
		{
		 "Setup":"I saw an average ghost once",
		 "Punchline":"He was mean-spirited"
		},
		{
		 "Setup":"Electricians are always shopping at outlet stores",
		 "Punchline":""
		},
		{
		 "Setup":"I go to the paint store instead of the gym",
		 "Punchline":"I heard I can get thinner there"
		},
		{
		 "Setup":"Spelling errors are a big deal at Hogwarts",
		 "Punchline":""
		},
		{
		 "Setup":"My psychiatrist isn't helping with my kleptomania",
		 "Punchline":"He keeps telling me I should be taking something"
		},
		{
		 "Setup":"When milking a cow, take care not to strain your calf",
		 "Punchline":""
		},
		{
		 "Setup":"I know a guy who's always stealing board games",
		 "Punchline":"He's a huge Risk-taker"
		},
		{
		 "Setup":"She said my name wasn't on the list, but I had my reservations",
		 "Punchline":""
		},
		{
		 "Setup":"When winter ends, the trees are re-leaved",
		 "Punchline":""
		},
		{
		 "Setup":"I don't trust priests",
		 "Punchline":"They always seem to have an altar ego"
		},
		{
		 "Setup":"I can't stop coming up with jokes about monorails",
		 "Punchline":"I'm obsessed with one-liners"
		},
		{
		 "Setup":"British cannibals love eating fish and chaps",
		 "Punchline":""
		},
		{
		 "Setup":"I tried to join the debate team in high school",
		 "Punchline":"But they talked me out of it"
		},
		{
		 "Setup":"Nobody taught me how to use a zipper",
		 "Punchline":"I had to learn on the fly"
		},
		{
		 "Setup":"I was confused when the stationery store moved across the street",
		 "Punchline":""
		},
		{
		 "Setup":"I know a dealer who dusts all his marijuana with sugar",
		 "Punchline":"I think he's trying to sweeten the pot"
		},
		{
		 "Setup":"I partied with some construction workers last night",
		 "Punchline":"They really knew how to raise the roof"
		},
		{
		 "Setup":"I met a narcissistic cannibal once",
		 "Punchline":"He was full of himself"
		},
		{
		 "Setup":"They say 'icy' is the easiest word to spell",
		 "Punchline":"I see why"
		},
		{
		 "Setup":"The toughest position at UPS is 'Professional Boxer'",
		 "Punchline":""
		},
		{
		 "Setup":"Did you like the puppet show?",
		 "Punchline":"I had a hand in it"
		},
		{
		 "Setup":"The best time to sneak past a panther is when he's taking a catnap",
		 "Punchline":""
		},
		{
		 "Setup":"Have you seen my new measuring stick?",
		 "Punchline":"I got it at a yard sale"
		},
		{
		 "Setup":"How do you get a one-armed guy out of a tree?",
		 "Punchline":"Wave at him"
		},
		{
		 "Setup":"I got attacked by a guy waving a pickaxe",
		 "Punchline":"I escaped with miner injuries"
		},
		{
		 "Setup":"Who is a librarian's worst enemy?",
		 "Punchline":"A bookkeeper"
		},
		{
		 "Setup":"How do you cut the ocean in half?",
		 "Punchline":"With a sea saw"
		},
		{
		 "Setup":"As I gain weight, my favorite outfits get harder to pull off",
		 "Punchline":""
		},
		{
		 "Setup":"If you hate puns, you might be laughtose intolerant",
		 "Punchline":""
		},
		{
		 "Setup":"I spent my whole life as a counterfeiter",
		 "Punchline":"I never made any real money"
		},
		{
		 "Setup":"I quit my job as a deep-sea diver",
		 "Punchline":"I couldn't handle working under pressure"
		},
		{
		 "Setup":"I turned down a bite of her pork sandwich",
		 "Punchline":"I don't like ham-me-downs"
		},
		{
		 "Setup":"I used to be obsessed with tornadoes",
		 "Punchline":"I got a little carried away"
		},
		{
		 "Setup":"What has two butts and kills people?",
		 "Punchline":"An assassin"
		},
		{
		 "Setup":"What would bears be without bees?",
		 "Punchline":"Ears"
		},
		{
		 "Setup":"I slept like a log at work",
		 "Punchline":"And then I got axed"
		},
		{
		 "Setup":"Dynamite was a ground-breaking invention",
		 "Punchline":""
		},
		{
		 "Setup":"I'm so good at being lazy I expect to get atrophy",
		 "Punchline":""
		},
		{
		 "Setup":"She said she didn't understand cloning",
		 "Punchline":"I told her that makes two of us"
		},
		{
		 "Setup":"It's hard to make friends with chauffeurs",
		 "Punchline":"They're always trying to drive you away"
		},
		{
		 "Setup":"I heard they won't be making yard sticks any longer",
		 "Punchline":""
		},
		{
		 "Setup":"Old artists don't retire",
		 "Punchline":"They withdraw"
		},
		{
		 "Setup":"How can you tell if a sniper likes you?",
		 "Punchline":"He misses you"
		},
		{
		 "Setup":"I finally found a stone wall with carvings on it",
		 "Punchline":"It was a huge relief"
		},
		{
		 "Setup":"The police aren't sure who stole my diet pills",
		 "Punchline":"The suspect is still at large"
		},
		{
		 "Setup":"Joking about antigravity never goes down very well",
		 "Punchline":""
		},
		{
		 "Setup":"A group of crows can't be called a 'murder' without probable caws",
		 "Punchline":""
		},
		{
		 "Setup":"Saw two pirates ramming their ships into each other",
		 "Punchline":"Maybe they need anchor-management counseling"
		},
		{
		 "Setup":"When students get kicked out of Hogwarts, are they ex-spelled?",
		 "Punchline":""
		},
		{
		 "Setup":"I tried taking a picture of a field of wheat",
		 "Punchline":"But it was too grainy"
		},
		{
		 "Setup":"One of my great uncles owned a perfume factory",
		 "Punchline":"When he died, he didn't leave us a single scent"
		},
		{
		 "Setup":"He tried to convince me it was a gator-skin shoe",
		 "Punchline":"But I knew it was a Croc"
		},
		{
		 "Setup":"A carpenter stopped by to build me a new door frame",
		 "Punchline":"He made quite an entrance"
		},
		{
		 "Setup":"You can't defeat an octopus",
		 "Punchline":"They're too well-armed"
		},
		{
		 "Setup":"If you wear a sport coat while hiking, does that make it a trailblazer?",
		 "Punchline":""
		},
		{
		 "Setup":"Claustrophobic people really need to think outside the box",
		 "Punchline":""
		},
		{
		 "Setup":"I entered a measuring competition but I didn't win",
		 "Punchline":"I was overruled"
		},
		{
		 "Setup":"I can picture myself taking a selfie",
		 "Punchline":""
		},
		{
		 "Setup":"I wanted to show people how to scoop ice cream",
		 "Punchline":"So I got a job as a sundae school teacher"
		},
		{
		 "Setup":"I just won a Twister contest",
		 "Punchline":"Hands down"
		},
		{
		 "Setup":"I saw a snail struggling to move around without a shell",
		 "Punchline":"It looked sluggish"
		},
		{
		 "Setup":"An invisible guy married an invisible girl",
		 "Punchline":"Their kids weren't much to look at, either"
		},
		{
		 "Setup":"My father wants me to run our family's clown college",
		 "Punchline":"But those are awfully big shoes to fill"
		},
		{
		 "Setup":"Sometimes, when I'm lying on the floor, I feel like the whole world is against me",
		 "Punchline":""
		},
		{
		 "Setup":"Someone made fun of me for majoring in Art History",
		 "Punchline":"It was a first-degree burn"
		},
		{
		 "Setup":"The teacher asked us who ate all the paste",
		 "Punchline":"But my lips were sealed"
		},
		{
		 "Setup":"Don't listen to horses",
		 "Punchline":"They're a bunch of neigh-sayers"
		},
		{
		 "Setup":"I saw two seeing-eye dogs walking side-by-side",
		 "Punchline":"Turns out they were on a blind date"
		},
		{
		 "Setup":"The older I get, the more youthless I feel",
		 "Punchline":""
		},
		{
		 "Setup":"I only like raw meat on rare occasions",
		 "Punchline":""
		},
		{
		"Setup":"What's made of leather and sounds like a sneeze?",
		"Punchline":"A shoe",
		},
		{
		"Setup":"The opposite of a dominatrix is a sub-contractor",
		"Punchline":"",
		"Tags":"nsfw"
		},
		{
		"Setup":"I'm thinking of joining a gym",
		"Punchline":"This is how I keep my mind active",
		},
		{
		"Setup":"I took a pole",
		"Punchline":"100 percent of people hated it when their tent collapsed",
		},
		{
		"Setup":"My kid asked if we were pyromaniacs",
		"Punchline":"I said, \"Yes, we arson\"",
		},
		{
		"Setup":"Bears can't survive in Australia",
		"Punchline":"Unless they are fully koala-fied",
		},
		{
		"Setup":"I tried to start a conversation by talking about the Titanic",
		"Punchline":"But I guess that wasn't a good enough icebreaker",
		},
		{
		"Setup":"They won't let me drive trains anymore",
		"Punchline":"Due to my bad track record",
		},
		{
		"Setup":"I was being Frank when I told them about my split personalities",
		"Punchline":"",
		},
		{
		"Setup":"I wish I could be ugly for just one day",
		"Punchline":"Instead of all of them",
		},
		{
		"Setup":"I heard all the dentists are going on strike next month",
		"Punchline":"We'll have to brace ourselves",
		},
		{
		"Setup":"I saw my telepathic friend across the street",
		"Punchline":"I greeted him with a brain wave",
		},
		{
		"Setup":"When I was a kid, I kept chewing on electrical cords",
		"Punchline":"So they grounded me",
		},
		{
		"Setup":"I've heard Argentina is starting to get a little colder",
		"Punchline":"In fact, it's bordering on Chile",
		},
		{
		"Setup":"Why are oysters so reluctant to give up their pearls?",
		"Punchline":"Because they're shellfish",
		},
		{
		"Setup":"I'll never be as brave as my pet rock",
		"Punchline":"He'll always be a little boulder",
		},
		{
		"Setup":"I was trying to figure out why this guy at the library was throwing Stephen King books at everyone",
		"Punchline":"Then IT hit me",
		},
		{
		"Setup":"I don't trust staircases",
		"Punchline":"They're always up to something",
		},
		{
		"Setup":"I thought my dentist did a great job",
		"Punchline":"I left him a little plaque",
		},
		{
		"Setup":"I got mugged by six dwarves today",
		"Punchline":"Not Happy",
		},
		{
		"Setup":"Thinking back about all the people I've lost over the years",
		"Punchline":"I probably should not have become a tour guide",
		},
		{
		"Setup":"You never see an unhealthy fish",
		"Punchline":"They're full of vitamin sea",
		},
		{
		"Setup":"I bought the Mortal Kombat soundtrack",
		"Punchline":"But it turned out every track was a Finnish hymn",
		},
		{
		"Setup":"I bought some stocks today: beef, chicken, and vegetable",
		"Punchline":"Someday I'll be a bouillonaire",
		},
		{
		"Setup":"I saw a guy turn into a vampire before he was even bitten",
		"Punchline":"It was premature edraculation",
		"Tags":"nsfw"
		},
		{
		"Setup":"I upset some hipsters today",
		"Punchline":"It turns out they prefer to be called 'conjoined twins'",
		},
		{
		"Setup":"There are only two of us working on this Dracula figurine production line",
		"Punchline":"I have to make every second Count",
		},
		{
		"Setup":"I was feeling lonely so I bought some stocks",
		"Punchline":"It's nice to have a bit of company",
		},
		{
		"Setup":"Geologists don't like it when you take sedimentary rocks for granite",
		"Punchline":"",
		},
		{
		"Setup":"Nearly-headless Nick was a poorly-executed character",
		"Punchline":"",
		},
		{
		"Setup":"Why do dogs float in water?",
		"Punchline":"Because they're good buoys",
		},
		{
		"Setup":"Don't get upset if someone calls you fat",
		"Punchline":"You're bigger than that",
		},
		{
		"Setup":"The only thing worse than raining cats and dogs is hailing taxis",
		"Punchline":"",
		},
		{
		"Setup":"What's the best way to talk to a giant?",
		"Punchline":"Use big words",
		},
		{
		"Setup":"I found a 5,280 foot-long rock",
		"Punchline":"It must be some kind of milestone",
		},
		{
		"Setup":"2020 really proved that laughter is contagious",
		"Punchline":"",
		},
		{
		"Setup":"You rarely see naked elephants",
		"Punchline":"They even bathe with their trunks on",
		},
		{
		"Setup":"I was named after my father",
		"Punchline":"But I was named before my younger sisters",
		},
		{
		"Setup":"I have a friend who is a performance artist",
		"Punchline":"She's great at drawing crowds",
		},
		{
		"Setup":"The ugliest creature in Jurassic Park was the Eyesaur",
		"Punchline":"",
		},
		{
		"Setup":"I always secretly thought I might be a goat",
		"Punchline":"It started when I was a little kid",
		},
		{
		"Setup":"Necromancers are great at raising children",
		"Punchline":"",
		},
		{
		"Setup":"Ever since I took up baking, every day has been crumby",
		"Punchline":"",
		},
		{
		"Setup":"I never picked my nose",
		"Punchline":"I was born with it",
		},
		{
		"Setup":"Ireland is one sea away from Iceland",
		"Punchline":"",
		},
		{
		"Setup":"A delivery guy tried to make me pay for a pizza I didn't order",
		"Punchline":"It was uncalled for",
		},
		{
		"Setup":"I bought a refrigerator magnet",
		"Punchline":"So far, I've gotten six refrigerators",
		},
		{
		"Setup":"I'm reading a horror story in Braille",
		"Punchline":"It feels like something bad is about to happen",
		},
		{
		"Setup":"I'm being haunted by the ghost of a chicken",
		"Punchline":"I think it's a poultry-geist",
		},
		{
		"Setup":"My ceiling isn't quite the best",
		"Punchline":"But it's up there",
		},
		{
		"Setup":"I had a dream I was drowning in orange soda",
		"Punchline":"But it was just a Fanta-sea",
		},
		{
		"Setup":"I know a guy who started his mosquito repellant business from scratch",
		"Punchline":"",
		},
		{
		"Setup":"How do you make a waterbed bouncy?",
		"Punchline":"Fill it with spring water",
		},
		{
		"Setup":"Someone stole all the wheels off a cop car",
		"Punchline":"Police are working tirelessly to catch them",
		},
		{
		"Setup":"Zombies get their strength from doing lots of deadlifts",
		"Punchline":"",
		},
		{
		"Setup":"I always wake up thinking I'm going to make pancakes, but end up waffling",
		"Punchline":"",
		},
		{
		"Setup":"I know a loan shark who takes a lot of interest in his work",
		"Punchline":"",
		},
		{
		"Setup":"I was told my odorless perfumes were complete non-scents",
		"Punchline":"",
		},
		{
		"Setup":"The female version of a dad bod is an auntie body",
		"Punchline":"",
		},
		{
		"Setup":"Grandma gets mad when I borrow her kitchen utensils",
		"Punchline":"But it's a whisk I'm willing to take",
		},
		{
		"Setup":"I got injured while I was playing peekaboo",
		"Punchline":"They sent me to the ICU",
		},
		{
		"Setup":"I got fired from the keyboard factory",
		"Punchline":"They said I wasn't putting in enough shifts",
		},
		{
		"Setup":"They say the invention of the drill bit was a real turning point",
		"Punchline":"",
		},
		{
		"Setup":"I'm an expert at shoplifting candy bars",
		"Punchline":"I've still got a few Twix up my sleeve",
		},
		{
		"Setup":"Telemarketers don't have managers",
		"Punchline":"They have ring leaders",
		},
		{
		"Setup":"Every national anthem is technically a country song",
		"Punchline":"",
		},
		{
		"Setup":"I asked if my insurance would pay for volcano eruptions",
		"Punchline":"They told me I'd be covered",
		},
		{
		"Setup":"Pyramids are square",
		"Punchline":"But only up to a point",
		},
		{
		"Setup":"I thought I had a Korean friend when I was a kid",
		"Punchline":"But it was just my imagin-asian",
		},
		{
		"Setup":"I tried to get a job teaching meditation",
		"Punchline":"But I didn't have a good inner view",
		},
		{
		"Setup":"I prefer using pregnant mares to pull my stuff around",
		"Punchline":"They have twice as much horsepower",
		},
		{
		"Setup":"My therapist says I'm obsessed with revenge",
		"Punchline":"I'll show him",
		},
		{
		"Setup":"Erasable pens must have seemed like a good idea",
		"Punchline":"On paper",
		},
		{
		"Setup":"I want to be a bodybuilder like my hero, Dr. Frankenstein",
		"Punchline":"",
		},
		{
		"Setup":"I stopped talking to my kinky hairstylist",
		"Punchline":"She was always brushing people off",
		},
		{
		"Setup":"I wanted to open a chiropractic clinic",
		"Punchline":"But I couldn't find any backers",
		},
		{
		"Setup":"If we pool our resources and work together...",
		"Punchline":"We can defeat socialism",
		},
		{
		"Setup":"Getting paid to participate in a sleep study is my dream job",
		"Punchline":"",
		},
		{
		"Setup":"Two silkworms had a race",
		"Punchline":"It resulted in a tie",
		},
		{
		"Setup":"My friend said his food tasted funny",
		"Punchline":"But I noticed he wasn't laughing",
		},
		{
		"Setup":"My friend went on a diet",
		"Punchline":"I've been seeing less of him lately",
		},
		{
		"Setup":"They say the best way to drive cattle is with a steering wheel",
		"Punchline":"",
		},
		{
		"Setup":"The most underhanded person I know is a softball pitcher",
		"Punchline":"",
		},
		{
		"Setup":"The main ingredient in dog biscuits is collie flour",
		"Punchline":"",
		},
		{
		"Setup":"I knew a guy with a stutter who went to prison",
		"Punchline":"He died before he could finish his sentence",
		},
		{
		"Setup":"I got banned from my secret cooking club for spilling the beans",
		"Punchline":"",
		},
		{
		"Setup":"The patron saint of panhandlers is Saint Nickel-less",
		"Punchline":"",
		},
		{
		"Setup":"Two of my neighbors started dating",
		"Punchline":"It's a lawn-distance relationship",
		},
		{
		"Setup":"I got viking letters tattooed all over my body",
		"Punchline":"Now my skin is completely runed",
		},
		{
		"Setup":"I avoid frostbite survivors",
		"Punchline":"I'm lack-toes intolerant",
		},
		{
		"Setup":"You won't get away with stealing my glasses",
		"Punchline":"I'll find you--I have contacts",
		},
		{
		"Setup":"Once I find out who took my guillotine, heads are gonna roll",
		"Punchline":"",
		},
		{
		"Setup":"Farming rabbits is a hare-raising experience",
		"Punchline":"",
		},
		{
		"Setup":"It turns out shepherds don't like being referred to as \"ewe-people\"",
		"Punchline":"",
		},
		{
		"Setup":"Oceanographers are always knowledgeable about current events",
		"Punchline":"",
		},
		{
		"Setup":"He said he was going to push be off a cliff",
		"Punchline":"But it was a bluff",
		},
		{
		"Setup":"CDs may not be cool anymore",
		"Punchline":"But records will always be groovy",
		},
		{
		"Setup":"I know a flashy guy who is half man and half horse",
		"Punchline":"He loves to be the centaur of attention",
		},
		{
		"Setup":"When fence builders go on strike...",
		"Punchline":"Do they stop picketing?",
		},
		{
		"Setup":"One time I met a guy who couldn't get angry",
		"Punchline":"He was a nomad",
		},
	]
}
