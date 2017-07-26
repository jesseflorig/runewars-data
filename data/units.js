[
  {
    name: "Kari Wraithstalker",
    faction: "Daqan",
    unique: true,
    defense: 3,
    health: 4,
    type: "infantry",
    setupAbilities: [
      {
        name: "Aymhelin Allies",
        text: "Your army can include one non-unique infantry unit from the Latari Elves."
      }
    ]
    activatedAbilities: [
      {
        type: "attack",
        cost: "surge+",
        text: "Chose another enemey unit at range 1-5. That enemy suffers 2 damage per [SURGE] spent"
      }
    ],
    passiveAbilities: [
      {
        type: "brutal",
        amount: 1
      },
      {
        type: "precise",
        amount: 1
      }
    ]
    attacks: [
      {
        type: "range",
        white: 1,
        blue: 1
      },
      {
        type: "melee",
        white: 1,
        blue: 1
      }
    ],
    formations: [
      {
        trays: 1,
        rows: 1,
        ranks: 1,
        cost: 32,
        availableUpgrades: [
          "artifact",
          "unique"
        ]
      }
    ]
    commandWheel: {
      actions: [
        {
          initiative: 3,
          type: "march",
          color: "blue",
          speed: 2
        },
        {
          initiative: 4,
          type: "march",
          color: "blue",
          speed: 3
        },
        {
          initiative: 2,
          type: "rotate",
          color: "green",
        },
        {
          initiative: 2,
          type: "special",
          color: "green",
        },
        {
          initiative: 2,
          type: "ranged",
          color: "green",
        },
        {
          initiative: 5,
          type: "shift",
          color: "green",
          speed: 1
        },
        {
          initiative: 4,
          type: "melee",
          color: "red"
        }
      ],
      modifiers: [
        {
          type: "bank",
          color: "blue"
        },
        {
          type: "turn",
          color: "blue"
          mod: -1
        },
        {
          type: "charge",
          color: "blue"
        },
        {
          type: "turnCharge",
          color: "blue"
          mod: -1
        },
        {
          type: "defend",
          color: "green"
          mod: 1
        },
        {
          type: "surge",
          color: "red"
          mod: 1
        },
        {
          type: "aim",
          color: "red"
          mod: 1
        },
        {
          type: "rally",
          color: "white"
        }
      ]
    }
  },
  {
    name: "Lord Hawthorne",
    faction: "Daqan",
    unique: true,
    defense: 3,
    health: 4,
    type: "cavalry",
    setupAbilities: [
      {
        name: "Lessons of Seragart",
        text: "You may reconfigure your trays in each of your units before setup. No units can be more than 4 trays wide or 4 trays deep after reconfiguring, and each rank must be a full rank."
      }
    ]
    activatedAbilities: [
      {
        type: "attack",
        cost: "surge2",
        text: "After you perform a [MELEE] you may perform a [MELEE] against another enemy that has not been targeted by your [MELEE] durnig this activation."
      },
      {
        type: "special",
        text: "Each other ally at range 1-3 receives 1 inspiration token"
      }
    ],
    passiveAbilities: [
      {
        type: "brutal",
        amount: 1
      }
    ]
    attacks: [
      {
        type: "melee",
        white: 1,
        red: 1
      }
    ],
    formations: [
      {
        trays: 1,
        rows: 1,
        ranks: 1,
        cost: 34,
        availableUpgrades: [
          "artifact",
          "unique"
        ]
      }
    ]
    commandWheel: {
      actions: [
        {
          initiative: 3,
          type: "march",
          color: "blue",
          speed: 2
        },
        {
          initiative: 4,
          type: "march",
          color: "blue",
          speed: 3
        },
        {
          initiative: 6,
          type: "march",
          color: "blue",
          speed: 4
        },
        {
          initiative: 2,
          type: "rotate",
          color: "green",
        },
        {
          initiative: 5,
          type: "shift",
          color: "green",
          speed: 1
        },
        {
          initiative: 6,
          type: "melee",
          color: "red"
        },
        {
          initiative: 2,
          type: "special",
          color: "yellow"
        },
        {
          initiative: 2,
          type: "melee",
          color: "yellow"
        }
      ],
      modifiers: [
        {
          type: "bank",
          color: "blue",
          mod: -1
        },
        {
          type: "charge",
          color: "blue"
        },
        {
          type: "turnCharge",
          color: "blue"
          mod: -1
        },
        {
          type: "hit",
          color: "red"
          mod: 1
        },
        {
          type: "rally",
          color: "white"
        },
        {
          type: "defense",
          color: "white",
          mod: 1
        }
      ]
    }
  }
]
