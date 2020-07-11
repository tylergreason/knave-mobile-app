let notes = [{
    // id for where it goes in the DOM 
    // title for what to show before click 
    // text for what to show after click 
    id: 'characterCreation1',
    text: '“Ability defense” is my term for what is normally called ability scores. I refer to them this way to make it clearer how they work during opposed saves, explained later.'
    },
    {
        id: "characterCreation2",
        text: "Rolling for starting equipment dramatically speeds up the character creation process, which is important if you’re playing a high-lethality game like Knave. If you want to permit shopping for equipment, however, have players roll 3d6x20 to find their starting copper pieces. Note that spell books are not normally available to new PCs, but you could always add “random spellbook” to the Dungeoneering Gear table, or simply allow new PCs to roll a random spell in exchange for not starting with any armor."
    },
    {
        id: "characterCreation3",
        text: "Item slots make tracking encumbrance very fast and easy, which is important since resource management is an important aspect of the game. They also represent character customization slots, since what a Knave is carrying goes a long way towards determining their playstyle and role in the party."
    }, 
    {
        id: "characterCreation4", 
        text: "“Armor defense” is essentially the same concept as armor class in most OSR games. It’s been renamed to emphasize the connection between the way it and ability defenses work. The armor bonus exists in order to allow combat to be run entirely player-facing, as explained in the combat section."
    },
    {
        id: "characterCreation5",
        text: "All hit dice are assumed to be d8s in Knave, for PCs, NPCs, and monsters. This simplifies the game and keeps things compatible with the stats in most OSR books. Note that a PC’s Constitution bonus is not added to their hit point rolls. Referees who don’t want starting PCs to be quite as fragile might want to allow starting HP to be rerolled if it is below 5."
    },
    {
        id: "characterCreation6",
        text: "Randomizing most of a PC’s traits speeds up character creation, but it also has the effect of creating surprising, unique characters that most players wouldn’t think to invent or play."
    }, 
    {
        id: "abilities1",
        text: "In a system that relies so heavily on the six abilities, it’s important for each of them to play an important role, to discourage dump stats. Non-magical characters tend to dump the mental abilities, for example, so I increased their usefulness."
    },
    {
        id: "itemSlots1",
        text: "Using item slots makes encumbrance simple enough that players will be willing to track it. Slots are also the key to character customization, as a PC’s gear helps determine who they are. Raising Constitution, therefore, will probably be a priority for most characters."
    },
    {
        id: "savingThrows1",
        text: "Requiring saves to exceed 15 means that new PCs have around a 25% chance of success, while level 10 characters have around a 75% chance of success, since ability bonuses can get up to +10 by level 10. This reflects the general pattern found in the save mechanics of early D&D."
    },
    {
        id: "savingThrows2",
        text: "An ability’s defense score is essentially its average roll. Requiring the rolling side to beat the opposing defense allows contests to be settled more quickly, eliminates the possibility of ties, and allows the game to be run with players doing all of the rolling if they so choose, since the odds of success are the same no matter which side rolls."
    },
    {
        id: "savingThrows3",
        text: "The referee is of course free to impose positive or negative modifiers rather than use the advantage system, but most players seem to enjoy it and it simplifies the math."
    },
    {
        id: "combat1",
        text: "Using simple group initiative speeds up combat, keeps all of the players engaged, and avoids bookkeeping. Rerolling initiative every round makes combat more dangerous, since it’s possible for one side to go twice in a row."
    },
    {
        id: "combat2",
        text: "In other words, attacks are resolved the same way as opposed saves, just using Armor in place of an ability."
    },
    {
        id: "stunts1",
        text: "The slow degradation of their gear is another resource clock ticking down during long dungeon raids alongside hit points, spells, torches, and so on."
    },
    {
        id: "advancement1",
        text: "You can also raise abilities randomly if you want. My preferred method is to roll a d20 for each ability, in any order, raising that ability by 1 if the roll is less than that ability’s defense. Keep cycling through the abilities, stopping when three abilities have advanced, and skipping any abilities that have maxed out. In this method, natural talents will tend to advance faster than weaknesses, which makes PCs more varied and specialized."
    },
    {
        id: "magic1",
        text: "It’s always seemed odd to me that spell levels don’t correspond to PC level in most OSR games. Well, now they do. I also took the abstract notion of spell slots and turned them into something concrete; PCs can cast as many spells as they can physically carry. Boost Constitution if you want your PC to carry around that mobile library."
    },
    {
        id: "magic2",
        text: "Note that spell books can be easily re-skinned as rune stones, clay tablets, potions, scrolls, or whatever else fits your campaign. If you wanted a more dangerous, low-magic setting for example, you could make spell books potions or scrolls that are only used once and then lost forever. The random spell generator found in my other game, Maze Rats, can be useful for generating ideas for new spells."
    }
]

// iterate through notes and append them to their appropriate divs 
notes.forEach(note => {
    // find this note's element 
    let targetEle = document.getElementById(note.id); 
    if (targetEle){
        // create fragment 
        let frag = document.createRange().createContextualFragment(`
        <div class='designerNotes__title'>
            Designer's Note:
        </div>
            ${note.text}
        `)
        
        // append to target 
        targetEle.appendChild(frag); 
    }
})