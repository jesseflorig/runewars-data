[
  {
    name: "Kari Wraithstalker",
    faction: "Daqan",
    unique: true,
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
        cost: "surge"
        costCount: "+"
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
          initiative: 3
          type: "march",
          color: "blue",
          speed: "2"
        }
      ],
      modifiers: [

      ]
    }
  }
]
