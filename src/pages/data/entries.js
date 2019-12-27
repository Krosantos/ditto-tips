/* eslint-disable import/max-dependencies */
import destinyknot from '@images/items/destinyknot.png';
import everstone from '@images/items/everstone.png';
import laxincense from '@images/items/laxincense.png';
import fullincense from '@images/items/fullincense.png';
import oddincense from '@images/items/oddincense.png';
import rockincense from '@images/items/rockincense.png';
import roseincense from '@images/items/roseincense.png';
import waveincense from '@images/items/waveincense.png';
import mintAttack from '@images/items/mint_attack.png';
import mintDefense from '@images/items/mint_defense.png';
import mintSpatk from '@images/items/mint_spatk.png';
import mintSpdef from '@images/items/mint_spdef.png';
import mintSpeed from '@images/items/mint_speed.png';
import mintNeutral from '@images/items/mint_neutral.png';
import hpup from '@images/items/hpup.png';
import protein from '@images/items/protein.png';
import iron from '@images/items/iron.png';
import calcium from '@images/items/calcium.png';
import zinc from '@images/items/zinc.png';
import carbos from '@images/items/carbos.png';
import powerweight from '@images/items/powerweight.png';
import powerbracer from '@images/items/powerbracer.png';
import powerbelt from '@images/items/powerbelt.png';
import powerlens from '@images/items/powerlens.png';
import powerband from '@images/items/powerband.png';
import poweranklet from '@images/items/poweranklet.png';
import bottlecap from '@images/items/bottlecap.png';
import goldcap from '@images/items/goldcap.png';
import abilitycapsule from '@images/items/abilitycapsule.png';
import pokerusinfected from '@images/pokerusinfected.png';
import ovalcharm from '@images/items/ovalcharm.png';
import shinycharm from '@images/items/shinycharm.png';
import dynamaxcandy from '@images/items/dynamaxcandy.png';
import ditto from '@images/mon/ditto.png';
import egg from '@images/mon/egg.png';

const entries = {
	Ability: {
		description: 'An innate power or attribute of a pokémon. Examples inclue Zigzagoon\'s Pickup, Solrock\'s Levitate, or Scorbunny\'s Blaze. A mother pokémon has an 80% chance to pass her ability to her children. Most species can have one of two normal abilities, or a Hidden Ability. Some species (like Gengar, Dhelmise, or Rotom) only ever have one ability. You can switch between standard abilities by using an Ability Capsule, available for purchase inside the Battle Tower.',
		images: [abilitycapsule],
	},
	Bottlecaps: {
		description: 'Spent in the Battle Tower to Hyper Train a level 100 pokémon. Hyper Training replaces the effective IV of a pokémon with a perfect 31. Found by the Digging Duo, or purchased for BP in the Battle Tower.',
		images: [bottlecap, goldcap],
	},
	'Destiny Knot': {
		description: 'A held item. If a parent holds onto this when laying eggs, 5 of each child\'s 6IVs will be selected from a random parent, instead of generated randomly. (This is what enables most pokémon breeding.) Can be purchased for 10BP from the BP shop in the middle Hammerlocke pokécenter, or found underneath the ghostly little girl who gives you the letter above the train station in Hammerlocke.',
		images: [destinyknot],
	},
	Ditto: {
		description: 'The only species of pokémon capable of breeding with any species able to reproduce. Any pokémon left in the nursery with Ditto is considered female for breeding purposes, including pokémon which do not usually have a gender (and which are hence unable to reproduce otherwise). Can be caught in the Lake of Outrage in the Wild Area, or in Max Raids.',
		images: [ditto],
	},
	'Dynamax Candy': {
		description: 'An item, received from beating Max Raids, which raises your pokémon\'s Dynamax Level by 1. A pokémon\'s Dynamax Level maxes out at 10, at which point it gains a whopping 2x HP multiplier when it Dynamaxes or Gigantimaxes.',
		images: [dynamaxcandy],
	},
	'Egg Group': {
		description: 'A group of pokémon capable of breeding amongst themselves. A pokémon can belong to up to two egg groups. Pokémon from non-overlapping egg groups cannot produce offspring.',
		images: [egg],
	},
	Everstone: {
		description: 'A held item. A parent holding an everstone will pass their Nature to their children. A mother holding an Everstone will pass her regional form to her children. Found by the Digging Duo, or by pokémon returning from pokéjobs.',
		images: [everstone],
	},
	EVs: {
		description: 'Effort Values -- a number from 0 to 252 representing the amount of growth and training a pokémon has received in each of the six stats. For every 4EVs in a stat, a pokémon will gain 1 point at level 100. A pokémon can only have 510 EVs across all stats. Raised by defeating enemy pokémon, consuming nutrient items (such as Calcium), or going to training pokéjobs. Specific values not visible directly -- you\'ll need to track a pokémon\'s growth yourself.',
		images: [hpup, protein, iron, calcium, zinc, carbos],
	},
	'Hidden Ability': {
		description: 'A different, hard-to-acquire ability for a pokémon species, which can open up new strategies for that species. Examples include Darmanitan\'s Zen Mode (which enables it to transform), Sylveon\'s Pixilate (which turns Normal moves into Fairy moves), or Hatterene\'s Magic Bounce (which reflects status moves back at the user). Pokémon can appear with their hidden abilities in 4 or 5 star raids. A mother has a 60% chance to pass her Hidden Ability to a child, which will otherwise have one of that species\' standard abilities.',
	},
	Incense: {
		description: 'A collection of held items. For certain species, if the mother holds the correct incense item, she will produce baby species, instead of basic species when laying eggs. Specifically, Wobuffet can produce Wynaut, Snorlax can produce Munchlax, Mr. Mime/Mr. Rime can produce Mime Jr., Sudowoodo can produce Bonsly, Roselia/Roserade can produce Budew, and Mantine can produce Mantyke.',
		images: [laxincense, fullincense, oddincense, rockincense, roseincense, waveincense],
	},
	IVs: {
		description: 'Individual Values -- a number from 0 to 31 representing one of a pokémon\'s six stats, HP, Attack, Defense, Special Attack, Special Defense, and Speed. Viewable (roughly) in the box via the IV Judge after clearing 10 battles in the Battle Tower. At level 100, you can spend bottlecaps to Hyper Train a pokémon, which will cause the game to treat their IVs as 31 for combat (but not breeding) purposes. Pokémon caught in Max Raids frequently have multiple perfect (31) IV stats.',
		images: [bottlecap, goldcap],
	},
	Nature: {
		description: 'One of 26 different values, a pokémon\'s nature usually raises one of its non-HP stats by 10%, and reduces another by 10%. (Some natures are neutral, and affect no stats). A pokémon\'s nature is randomly determined, but a parent holding an Everstone will pass their nature to any offspring. Mints, acquired for 50BP each from the Battle Tower, can be used to change a pokémon\'s nature for combat, but not breeding purposes.',
		images: [mintAttack, mintDefense, mintSpatk, mintSpdef, mintSpeed, mintNeutral],
	},
	Nursery: {
		description: 'Two buildings, one on Route 5, one in the Wild Area, where pokémon can be left to breed. Compatible pokémon left in the nursery will produce eggs, which hatch into pokémon.',
	},
	'Oval Charm': {
		description: 'A key item. When possessed, compatible pokémon in the nursery are twice as likely to produce an egg. You can acquire it from the Game Director (who looks like a policeman) in the Hotel Ionia in Circhester, if you defeat his team after becoming Champion.',
		images: [ovalcharm],
	},
	Pokérus: {
		description: 'A beneficial, infectious disease. Infected pokémon gain double EVs from all activities. The infection has a chance to be passed to adjacent party pokémon after each battle (even if you run). After a period, the infection is "cured". A cured pokémon is no longer contagious, but retains the benefits of infection. The cure progress is paused for pokémon in boxes.',
		images: [pokerusinfected],
	},
	'Power Items': {
		description: 'A series of held items, each corresponding to one of the six stats, acquired for 10BP each from the BP saleswoman in the middle Pokécenter in Hammerlocke. When held, a pokémon will gain 8 additional EVs of the matching stat per battle. A parent holding a power item will pass their IV for the matching stat to all offspring.',
		images: [powerweight, powerbracer, powerbelt, powerlens, powerband, poweranklet],
	},
	'Shiny Charm': {
		description: 'A key item. If you possess it, pokémon you hatch or encounter are twice as likely to be shiny. Acquired by showing a complete, 400-mon pokédex to the game director (who looks like a tired doctor), in the second floor of the Hotel Ionia in Circhester.',
		images: [shinycharm],
	},
	Species: {
		description: 'A kind of pokémon, unique by pokédex number. Pokémon of the same family can be different species (e.g., Elektrike and Manectric are related, but different species.) Some breeding inheritance relies on both parents being the same species. An egg will always hatch into least-evolved species of the family of the mother who hatched it.',
	},
};

export default entries;
