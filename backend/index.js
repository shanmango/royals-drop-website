const express = require('express')
const app = express()

let mobs = [
  {
    "id": "100100",
    "maps": [
      "40000",
      "40001",
      "40002",
      "50000",
      "1000000",
      "1000002",
      "1000003",
      "1000004",
      "1010004",
      "1020001",
      "104000100",
      "104000200"
    ],
    "drops": [
      {
        "name": "Snail Shell",
        "desc": "Shell removed from a snail",
        "id": "4000019"
      },
      {
        "name": "Red Potion",
        "desc": "A potion made out of red herbs.\\nRecovers 50 HP.",
        "id": "2000000"
      },
      {
        "name": "Scroll for Helmet for DEF 10%",
        "desc": "Improves helmet def.\\nSuccess Rate:10%, weapon def.+5, magic def.+3, accuracy+1. ",
        "id": "2040002"
      },
      {
        "name": "Scroll for Cape for Magic Def. 60%",
        "desc": "Improves magic def. on the cape.\\nSuccess rate:60%, magic def.+3, weapon def.+1. ",
        "id": "2041001"
      },
      {
        "name": "Arrow for Bow",
        "desc": "A barrel full of arrows. Only usable with bows.\\nAttack +1",
        "id": "2060000"
      },
      {
        "name": "Bronze Ore",
        "desc": "The ore of a light and weak bronze.",
        "id": "4010000"
      },
      {
        "name": "Garnet Ore",
        "desc": "The ore of a red jewel.",
        "id": "4020000"
      },
      {
        "name": "Arrow for Crossbow",
        "desc": "A barrel full of arrows. Only usable with crossbows.\\nAttack +1",
        "id": "2061000"
      },
      {
        "name": "Green Headband",
        "desc": "",
        "id": "1002067"
      },
      {
        "name": "Green Apple",
        "desc": "Sour and crunchy green apple.\\nRecovers MP +30.",
        "id": "2010009"
      }
    ],
    "name": "Snail"
  },
  {
    "id": "100101",
    "maps": [
      "40001",
      "40002",
      "50000",
      "50001",
      "1000000",
      "1000001",
      "1000002",
      "1000004",
      "1000005",
      "1000006",
      "1010004",
      "1020001",
      "100010000",
      "101040000",
      "104000100",
      "104000200",
      "104000300",
      "104000400",
      "104040000"
    ],
    "drops": [
      {
        "name": "Blue Snail Shell",
        "desc": "A shell removed from a snail",
        "id": "4000000"
      },
      {
        "name": "Arrow for Bow",
        "desc": "A barrel full of arrows. Only usable with bows.\\nAttack +1",
        "id": "2060000"
      },
      {
        "name": "Arrow for Crossbow",
        "desc": "A barrel full of arrows. Only usable with crossbows.\\nAttack +1",
        "id": "2061000"
      },
      {
        "name": "Green Apple",
        "desc": "Sour and crunchy green apple.\\nRecovers MP +30.",
        "id": "2010009"
      },
      {
        "name": "Red Potion",
        "desc": "A potion made out of red herbs.\\nRecovers 50 HP.",
        "id": "2000000"
      },
      {
        "name": "Steel Ore",
        "desc": "The ore of a tough steel",
        "id": "4010001"
      },
      {
        "name": "Undershirt",
        "desc": "",
        "id": "1040006"
      },
      {
        "name": "Blue One-Lined T-Shirt",
        "desc": "",
        "id": "1040013"
      },
      {
        "name": "Grey Thick Sweat Pants",
        "desc": "",
        "id": "1060004"
      },
      {
        "name": "Red-Striped T-Shirt",
        "desc": "",
        "id": "1041012"
      },
      {
        "name": "Grey / Brown Training Pants",
        "desc": "",
        "id": "1060013"
      },
      {
        "name": "Grey / Brown Training Shirt",
        "desc": "",
        "id": "1040017"
      },
      {
        "name": "Scroll for Cape for HP 100%",
        "desc": "Improves MaxHP on the cape.\\nSuccess rate:100%, MaxHP+5",
        "id": "2041006"
      },
      {
        "name": "Amethyst Ore",
        "desc": "The ore of a purple jewel.",
        "id": "4020001"
      },
      {
        "name": "Scroll for Cape for Magic Def. 60%",
        "desc": "Improves magic def. on the cape.\\nSuccess rate:60%, magic def.+3, weapon def.+1. ",
        "id": "2041001"
      }
    ],
    "name": "Blue Snail"
  },
  {
    "id": "1110100",
    "maps": [
      "100000002",
      "100000003",
      "100040003",
      "100050000",
      "101010102",
      "102020100",
      "103030000",
      "103030100",
      "104030001",
      "104040001",
      "104040002",
      "800010000"
    ],
    "drops": [
      {
        "name": "Green Mushroom Cap",
        "desc": "A cap removed from a mushroom",
        "id": "4000012"
      },
      {
        "name": "Arrow for Bow",
        "desc": "A barrel full of arrows. Only usable with bows.\\nAttack +1",
        "id": "2060000"
      },
      {
        "name": "Arrow for Crossbow",
        "desc": "A barrel full of arrows. Only usable with crossbows.\\nAttack +1",
        "id": "2061000"
      },
      {
        "name": "Blue Potion",
        "desc": "A potion made out of blue herbs.\\nRecovers 100 MP.",
        "id": "2000003"
      },
      {
        "name": "Red Potion",
        "desc": "A potion made out of red herbs.\\nRecovers 50 HP.",
        "id": "2000000"
      },
      {
        "name": "Orange Potion",
        "desc": "A concentrated potion made out of red herbs.\\nRecovers 150 HP.",
        "id": "2000001"
      },
      {
        "name": "AquaMarine Ore",
        "desc": "The ore of a blue jewel.",
        "id": "4020002"
      },
      {
        "name": "Silver Ore",
        "desc": "The ore of a shiny silver",
        "id": "4010004"
      },
      {
        "name": "Grey Able Armor",
        "desc": "",
        "id": "1041063"
      },
      {
        "name": "Grey Able Skirt",
        "desc": "",
        "id": "1061059"
      },
      {
        "name": "Green Bennis Chainmail",
        "desc": "",
        "id": "1040022"
      },
      {
        "name": "Red Nightshift",
        "desc": "",
        "id": "1041044"
      },
      {
        "name": "Old Wisconsin",
        "desc": "",
        "id": "1002033"
      },
      {
        "name": "Red Nightshift Pants",
        "desc": "",
        "id": "1061037"
      },
      {
        "name": "Blue Pao Bottom",
        "desc": "",
        "id": "1060031"
      },
      {
        "name": "Single Earring",
        "desc": "",
        "id": "1032001"
      },
      {
        "name": "Brown Winter Hat",
        "desc": "",
        "id": "1002010"
      },
      {
        "name": "Brown Lagger Slipper",
        "desc": "",
        "id": "1072285"
      },
      {
        "name": "Green Arianne",
        "desc": "",
        "id": "1041018"
      },
      {
        "name": "Purple Arianne",
        "desc": "",
        "id": "1041017"
      },
      {
        "name": "Purple Arianne Skirt",
        "desc": "",
        "id": "1061012"
      },
      {
        "name": "Green Matty",
        "desc": "",
        "id": "1002143"
      },
      {
        "name": "Scroll for Pet Equip. for Jump 100%",
        "desc": "Improves jump on pet equip.\\nSuccess rate:100%, jump+1",
        "id": "2048003"
      },
      {
        "name": "Scroll for Pet Equip. for Speed 100%",
        "desc": "Improves speed on pet equip.\\nSuccess rate:100%, speed+1",
        "id": "2048000"
      },
      {
        "name": "Emerald Ore",
        "desc": "The ore of a green jewel.",
        "id": "4020003"
      },
      {
        "name": "Scroll for Shield for DEF 10%",
        "desc": "Improves weapon def. on the shield.\\nSuccess rate 10%, weapon def.+5, magic def.+3, MaxHP+10. ",
        "id": "2040902"
      },
      {
        "name": "Pan Lid",
        "desc": "",
        "id": "1092008"
      },
      {
        "name": "Scroll for Cape for DEX 10%",
        "desc": "Improves DEX on the cape.\\nSuccess rate:10%, DEX+3. ",
        "id": "2041020"
      },
      {
        "name": "Scroll for One-Handed Axe for ATT 10%",
        "desc": "Improves attack on one-handed axe.\\nSuccess rate: 10%, weapon attack +5, STR+3, weapon def. +1.",
        "id": "2043102"
      },
      {
        "name": "Composite Bow",
        "desc": "",
        "id": "1452003"
      },
      {
        "name": "Battle Crossbow",
        "desc": "",
        "id": "1462002"
      },
      {
        "name": "Mace",
        "desc": "",
        "id": "1322000"
      },
      {
        "name": "Long Sword",
        "desc": "",
        "id": "1302007"
      },
      {
        "name": "Aqua Snowboard",
        "desc": "",
        "id": "1442013"
      },
      {
        "name": "Iron Axe",
        "desc": "",
        "id": "1412012"
      },
      {
        "name": "Zeco",
        "desc": "",
        "id": "1432005"
      },
      {
        "name": "Leather Arms",
        "desc": "",
        "id": "1482001"
      },
      {
        "name": "Scroll for Claw for ATT 60%",
        "desc": "Improves attack on claw.\\nSuccess rate:60%, weapon attack+2, accuracy+1. ",
        "id": "2044701"
      },
      {
        "name": "Scroll for Pet Equip. for Speed 60%",
        "desc": "Improves speed on pet equip.\\nSuccess rate:60%, moving speed+2. ",
        "id": "2048001"
      }
    ],
    "name": "Green Mushroom"
  }
]