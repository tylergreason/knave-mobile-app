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
        text: "Designer’s Note: “Armor defense” is essentially the same concept as armor class in most OSR games. It’s been renamed to emphasize the connection between the way it and ability defenses work. The armor bonus exists in order to allow combat to be run entirely player-facing, as explained in the combat section."
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