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
      "brutal 1",
      "precise 1"
    ]
    attacks: [
      {
        type: "range",
        dice: [
          "white",
          "blue"
        ]
      },
      {
        type: "melee",
        dice: [
          "white",
          "blue"
        ]
      }
    ],
    formations: [
      {
        trays: 1,
        columns: 1,
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
          stance: "blue",
          value: 2
        },
        {
          initiative: 4,
          type: "march",
          stance: "blue",
          value: 3
        },
        {
          initiative: 2,
          type: "reform",
          stance: "green",
        },
        {
          initiative: 2,
          type: "skill",
          stance: "green",
        },
        {
          initiative: 2,
          type: "ranged",
          stance: "green",
        },
        {
          initiative: 5,
          type: "shift",
          stance: "green",
          value: 1
        },
        {
          initiative: 4,
          type: "melee",
          stance: "red"
        }
      ],
      modifiers: [
        {
          type: "turn",
          stance: "blue"
        },
        {
          type: "wheel",
          stance: "blue"
          value: -1
        },
        {
          type: "charge",
          stance: "blue"
        },
        {
          type: "turningCharge",
          stance: "blue"
          value: -1
        },
        {
          type: "defend",
          stance: "green"
          value: 1
        },
        {
          type: "surge",
          stance: "red"
          value: 1
        },
        {
          type: "accuracy",
          stance: "red"
          value: 1
        },
        {
          type: "rally",
          stance: "white"
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
        type: "skill",
        text: "Each other ally at range 1-3 receives 1 inspiration token"
      }
    ],
    passiveAbilities: [
      "brutal 1"
    ]
    attacks: [
      {
        type: "melee",
        dice: [
          "white",
          "red"
        ]
      }
    ],
    formations: [
      {
        trays: 1,
        columns: 1,
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
          stance: "blue",
          value: 2
        },
        {
          initiative: 4,
          type: "march",
          stance: "blue",
          value: 3
        },
        {
          initiative: 6,
          type: "march",
          stance: "blue",
          value: 4
        },
        {
          initiative: 2,
          type: "reform",
          stance: "green",
        },
        {
          initiative: 5,
          type: "shift",
          stance: "green",
          value: 1
        },
        {
          initiative: 6,
          type: "melee",
          stance: "red"
        },
        {
          initiative: 2,
          type: "skill",
          stance: "yellow"
        },
        {
          initiative: 2,
          type: "melee",
          stance: "yellow"
        }
      ],
      modifiers: [
        {
          type: "turn",
          stance: "blue",
          value: -1
        },
        {
          type: "charge",
          stance: "blue"
        },
        {
          type: "turningCharge",
          stance: "blue"
          value: -1
        },
        {
          type: "hit",
          stance: "red"
          value: 1
        },
        {
          type: "rally",
          stance: "white"
        },
        {
          type: "defense",
          stance: "white",
          value: 1
        }
      ]
    }
  }
]

// New Character
// {
//   name: "",
//   faction: "",
//   unique: ,
//   defense: ,
//   health: ,
//   type: "",
//   setupAbilities: [
//     {
//       name: "",
//       text: ""
//     }
//   ]
//   activatedAbilities: [
//     {
//       type: "",
//       cost: "",
//       text: ""
//     }
//   ],
//   passiveAbilities: [
//     ""
//   ]
//   attacks: [
//     {
//       type: "",
//       dice: [
//         ""
//       ]
//     }
//   ],
//   formations: [
//     {
//       trays: ,
//       columns: ,
//       ranks: ,
//       cost: ,
//       availableUpgrades: [
//         ""
//       ]
//     }
//   ]
//   commandWheel: {
//     actions: [
//       {
//         initiative: ,
//         type: "",
//         stance: "",
//         value:
//       }
//     ],
//     modifiers: [
//       {
//         type: "",
//         stance: "",
//         value:
//       }
//     ]
//   }
// }
