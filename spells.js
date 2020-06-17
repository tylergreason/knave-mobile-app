const spellsList = ["1. Adhere: Object is covered in extremely sticky slime. ",
"2. Animate Object: Object obeys your commands as best it can. It can walk 15ft per round.",
"3. Anthropomorphize: A touched animal either gains human intelligence or human appearance for L days. ",
"4. Arcane Eye: You can see through a magical floating eyeball that flies around at your command.",
"5. Astral Prison: An object is frozen in time and space within an invulnerable crystal shell.",
"6. Attract: L+1 objects are strongly magnetically attracted to each other if they come within 10 feet.",
"7. Auditory Illusion: You create illusory sounds that seem to come from a direction of your choice.",
"8. Babble: A creature must loudly and clearly repeat everything you think. It is otherwise mute.",
"9. Beast Form: You and your possessions transform into a mundane animal.",
"10. Befuddle: L creatures of your choice are unable to form new short-term memories for the duration of the spell.",
"11. Bend Fate: Roll L+1 d20s. Whenever you must roll a d20 after casting the spell, you must choose and then discard one of the rolled results until they are all gone. ",
"12. Bird Person: Your arms turn into huge bird wings. ",
"13. Body Swap: You switch bodies with a creature you touch. If one body dies, the other dies as well.",
"14. Catherine: A woman wearing a blue dress appears until end of spell. She will obey polite, safe requests. ",
"15. Charm: L creatures treat you like a friend.",
"16. Command: A creature obeys a single, three-word command that does not harm it.",
"17. Comprehend:You become fluent in all languages.",
"18. Control Plants: Nearby plants and trees obey you and gain the ability to move at 5 feet per round.",
"19. Control Weather: You may alter the type of weather at will, but you do not otherwise control it.",
"20. Counterspell: Make an opposed Intelligence save against the Intelligence of the caster of a nearby spell. You may do this out of turn as a reaction, or against an ongoing magical effect. On a success, you may can- cel the spell.",
"21. Deafen: All nearby creatures are deafened.",
"22. Detect Magic: You hear nearby magical auras singing. Volume and harmony signify the aura’s power and refinement.",
"23. Disassemble: Any of your body parts may be detached and reattached at will, without causing pain or damage. You can still control them.",
"24. Disguise: You may alter the appearance of L characters at will as long as they remain humanoid. Attempts to duplicate other characters will seem uncanny.",
"25. Displace: An object appears to be up to L×10ft from its actual position.",
"26. Earthquake: The ground begins shaking violently. Structures may be damaged or collapse.",
"27. Elasticity:Your body can stretch up to L×10ft.",
"28. Elemental Wall: A straight wall of ice or fire L×40ft long and 10ft high rises from the ground.",
"29. Filch: L visible items teleport to your hands.",
"30. Fog Cloud: Dense fog spreads out from you.",
"31. Frenzy: L creatures erupt in a frenzy of violence.",
"32. Gate: A portal to a random plane opens.",
"33. Gravity Shift: You can change the direction of gravity (for yourself only) up to once per round.",
"34. Greed: L creatures develop an overwhelming urge to possess a visible item of your choice.",
"35. Haste: Your movement speed is tripled.",
"36. Hatred: L creatures develop a deep hatred of another creature or group of creatures and wish to destroy it. ",
"37. Hear Whispers: You can hear faint sounds clearly. ",
"38. Hover: An object hovers, frictionless, 2ft above the ground. It can hold up to L humanoids.",
"39. Hypnotize: A creature enters a trance and will truthfully answer L yes or no questions you ask it.",
"40. Icy Touch: A thick ice layer spreads across a touched surface, up to L×10ft in radius.",
"41. Illuminate: A floating light moves as you command.",
"42. Increase Gravity: The gravity in an area triples. ",
"43. Invisible Tether: Two objects within 10ft of each other cannot be moved more than 10ft apart.",
"44. Knock: L nearby mundane or magical locks unlock.",
"45. Leap: You can jump up to L×10ft in the air.",
"46. Liquid Air: The air around you becomes swimmable.",
"47. Magic Dampener: All nearby magical effects have their effectiveness halved. 69.",
"48. Manse: A sturdy, furnished cottage appears for L×12 hours. You can permit and forbid entry to it at will.",
"49. Marble Madness: Your pockets are full of marbles, and will refill every round.",
"50. Masquerade: L characters’ appearances and voices become identical to a touched character.",
"51. Miniaturize: You and L other touched creatures are reduced to the size of a mouse.",
"52. Mirror Image: L illusory duplicates of yourself appear under your control.",
"53. Mirrorwalk: A mirror becomes a gateway to another mirror that you looked into today.",
"54. Multiarm: You gain L extra arms.",
"55. Night Sphere: An L×40ft wide sphere of darkness displaying the night sky appears.",
"56. Objectify: You become any inanimate object between the size of a grand piano and an apple.",
"57. Ooze Form: You become a living jelly.",
"58. Pacify: L creatures have an aversion to violence. ",
"59. Phantom Coach: A ghostly coach appears until end of spell. It moves unnaturally fast over any terrain, including water.",
"60. Phobia: L creatures become terrified of an object of your choice.",
"61. Pit: A pit 10ft wide and L×5ft deep opens in the ground.",
"62. Primeval Surge: An object grows to the size of an elephant. If it is an animal, it is enraged.",
"63. Psychometry: The referee answers L yes or no questions about a touched object.",
"64. Pull: An object of any size is pulled directly towards you with the strength of L men for one round.",
"65. Push: An object of any size is pushed directly away from you with the strength of L men for one round.",
"66. Raise Dead: L skeletons rise from the ground to serve you. They are incredibly stupid and can only obey simple orders.",
"67. Raise Spirit: The spirit of a dead body manifests and will answer L questions.",
"68. Read Mind: You can hear the surface thoughts of nearby creatures.",
"69. Repel: L+1 objects are strongly magnetically repelled from each other if they come within 10 feet.",
"70. Scry: You can see through the eyes of a creature you touched earlier today.",
"71. Sculpt Elements: All inanimate material behaves like clay in your hands.",
"72. Shroud: L creatures are invisible until they move. ",
"73. Shuffle: L creatures instantly switch places. Deter- mine where they end up randomly.",
"74. Sleep: L creatures fall into a light sleep.",
"75. Smoke Form: Your body becomes living smoke. ",
"76. Snail Knight: 10 minutes after casting, a knight sitting astride a giant snail rides into view. He is able to answer most questions related to quests and chivalry, and may aid you if he finds you worthy.",
"77. Sniff: You can smell even the faintest traces of scents. ",
"78. Sort: Inanimate items sort themselves according to categories you set. The categories must be visually verifiable.",
"79. Spectacle: A clearly unreal but impressive illusion of your choice appears, under your control. It may be up to the size of a palace and has full motion and sound. ",
"80. Spellseize: Cast this as a reaction to another spell going off to make a temporary copy of it that you can cast at any time before this spell ends.",
"81. Spider Climb: You can climb surfaces like a spider. ",
"82. Summon Cube: Once per second, (6 times per round) you may summon or banish a 3-foot-wide cube of earth. New cubes must be affixed to the earth or to other cubes.",
"83. Swarm: You become a swarm of crows, rats, or piranhas. You only take damage from area effects. ",
"84. Telekinesis: You may mentally move L items. ",
"85. Telepathy: L+1 creatures can hear each other’s thoughts, no matter how far apart they move.",
"86. Teleport: An object disappears and reappears on the ground in a visible, clear area up to L×40ft away.",
"87. Thaumaturgic Anchor: Object becomes the target of every spell cast near it.",
"88. Thicket: A thicket of trees and dense brush up to L×40ft wide suddenly sprouts up.",
"89. Time Jump: An object disappears as it jumps L×10 minutes into the future. When it returns, it appears in the unoccupied area nearest to where it left.",
"90. Summon Idol: A carved stone statue the size of a four poster bed rises from the ground.",
"91. Time Rush: Time in a 40ft bubble starts moving 10 times faster.",
"92. Time Slow: Time in a 40ft bubble slows to 10%.",
"93. True Sight: You see through all nearby illusions.",
"94. Upwell: A spring of seawater appears.",
"95. Vision: You completely control what a creature sees. ",
"96. Visual Illusion: A silent, immobile, illusion of your choice appears, up to the size of a bedroom.",
"97. Ward: A silver circle 40ft across appears on the ground. Choose one thing that cannot cross it: living creatures, dead creatures, projectiles or metal.",
"98. Web: Your wrists can shoot thick webbing.",
"99. Wizard Mark: Your finger can shoot a stream of ulfire-colored paint. This paint is only visible to you, and can be seen at any distance, even through solid objects.",
"100. X-Ray Vision: You gain X-Ray vision."]

// array to push spell objects to 
let spells = []; 
// iterate through array of strings, make an object of each string (with number, name, description), then push that object to spells array 
spellsList.forEach(spell => {
    let newSpell = {}; 
    // find period after number  
    let decimal = spell.indexOf('.');
    let spellNumber = parseInt(spell.slice(0,decimal));
    newSpell.number = spellNumber;

    // find name of spell 
    let colon = spell.indexOf(':'); 
    let spellName = spell.slice(decimal+1, colon); 
    newSpell.name = spellName.trim(); 

    // find spell description 
    let spellDescription = spell.slice(colon+1); 
    newSpell.description = spellDescription.trim();

    spells.push(newSpell)
})

console.log(spells[0]);
console.log(spells[10]);
console.log(spells[spells.length-1]);
console.log(spells)