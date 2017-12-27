var mongoose  = require("mongoose"),
    Book      = require("./models/index")



var data = 
{
  "books": [
    {
      "id": 1,
      "author": "Miguel De Cervantes",
      "title": "Don Quixote",
      "isbn": "0060934344",
      "pages": 992,
      "publisherId": 1,
      "formatId": 1,
      "description": "This is a great book!",
      "price": 129.32
    },
    {
      "id": 2,
      "author": "Marcel Proust",
      "title": "In Search of Lost Time",
      "isbn": "0812969642",
      "pages": 4211,
      "publisherId": 25,
      "formatId": 2,
      "description": "Twice amended to bring it to documentary decorum and the kind of textual completion Proust himself could never achieve.",
      "price": 321.00
    },
    {
      "id": 3,
      "author": "James Joyce",
      "title": "Ulysses",
      "isbn": "0679722769",
      "pages": 783,
      "publisherId": 33,
      "formatId": 3,
      "description": "To my mind one of the most significant and beautiful books of our time.",
      "price": 223.32
    },
    {
      "id": 4,
      "author": "Homer",
      "title": "The Odyssey",
      "isbn": "0140268863",
      "pages": 560,
      "publisherId": 1,
      "formatId": 4,
      "description": " The hardback is stitched and bound to keep, so it is worth your money.",
      "price": 777.00
    }
  ],
  "formats": [
    {
      "id": 1,
      "name": "Paperback"
    },
    {
      "id": 2,
      "name": "Hardcover"
    },
    {
      "id": 3,
      "name": "Audiobook"
    },
    {
      "id": 4,
      "name": "Leather Bound"
    },
    {
      "id": 5,
      "name": "Spiral Bound"
    }
  ],
  "countries": [
    {
      "id": 1,
      "name": "United States of America"
    },
    {
      "id": 2,
      "name": "England"
    },
    {
      "id": 3,
      "name": "France"
    },
    {
      "id": 4,
      "name": "Germany"
    }
  ],
  "cities": [
    {
      "id": 1,
      "countryId": 1,
      "name": "Washington"
    },
    {
      "id": 2,
      "countryId": 1,
      "name": "Los Angeles"
    },
    {
      "id": 3,
      "countryId": 1,
      "name": "New York"
    },
    {
      "id": 4,
      "countryId": 1,
      "name": "Chicago"
    },
    {
      "id": 5,
      "countryId": 1,
      "name": "Dallas"
    },
    {
      "id": 6,
      "countryId": 2,
      "name": "London"
    },
    {
      "id": 7,
      "countryId": 2,
      "name": "Birmingham"
    },
    {
      "id": 8,
      "countryId": 2,
      "name": "Manchester"
    },
    {
      "id": 9,
      "countryId": 2,
      "name": "Liverpool"
    },
    {
      "id": 10,
      "countryId": 2,
      "name": "Newcastle"
    },
    {
      "id": 11,
      "countryId": 3,
      "name": "Paris"
    },
    {
      "id": 12,
      "countryId": 3,
      "name": "Marseille"
    },
    {
      "id": 13,
      "countryId": 3,
      "name": "Lyon"
    },
    {
      "id": 14,
      "countryId": 3,
      "name": "Toulouse"
    },
    {
      "id": 15,
      "countryId": 3,
      "name": "Nice"
    },
    {
      "id": 16,
      "countryId": 4,
      "name": "Berlin"
    },
    {
      "id": 17,
      "countryId": 4,
      "name": "Hamburg"
    },
    {
      "id": 18,
      "countryId": 4,
      "name": "Munich"
    },
    {
      "id": 19,
      "countryId": 4,
      "name": "Frankfurt"
    },
    {
      "id": 20,
      "countryId": 4,
      "name": "Stuttgart"
    }
  ],
  "publishers": [
    {
      "id": 1,
      "cityId": 5,
      "name": "UPDAT"
    },
    {
      "id": 2,
      "cityId": 15,
      "name": "MARKETOID"
    },
    {
      "id": 3,
      "cityId": 6,
      "name": "ZAGGLE"
    },
    {
      "id": 4,
      "cityId": 19,
      "name": "RODEOLOGY"
    },
    {
      "id": 5,
      "cityId": 12,
      "name": "FILODYNE"
    },
    {
      "id": 6,
      "cityId": 8,
      "name": "ZIDANT"
    },
    {
      "id": 7,
      "cityId": 20,
      "name": "SCHOOLIO"
    },
    {
      "id": 8,
      "cityId": 14,
      "name": "PHARMEX"
    },
    {
      "id": 9,
      "cityId": 13,
      "name": "ZANILLA"
    },
    {
      "id": 10,
      "cityId": 11,
      "name": "MOTOVATE"
    },
    {
      "id": 11,
      "cityId": 20,
      "name": "MAGNINA"
    },
    {
      "id": 12,
      "cityId": 6,
      "name": "GEOFORMA"
    },
    {
      "id": 13,
      "cityId": 3,
      "name": "EXTRO"
    },
    {
      "id": 14,
      "cityId": 8,
      "name": "TALKALOT"
    },
    {
      "id": 15,
      "cityId": 12,
      "name": "COMTEXT"
    },
    {
      "id": 16,
      "cityId": 16,
      "name": "GEOLOGIX"
    },
    {
      "id": 17,
      "cityId": 6,
      "name": "BITREX"
    },
    {
      "id": 18,
      "cityId": 18,
      "name": "SYNTAC"
    },
    {
      "id": 19,
      "cityId": 10,
      "name": "OMNIGOG"
    },
    {
      "id": 20,
      "cityId": 9,
      "name": "SNORUS"
    },
    {
      "id": 21,
      "cityId": 7,
      "name": "GENESYNK"
    },
    {
      "id": 22,
      "cityId": 9,
      "name": "RENOVIZE"
    },
    {
      "id": 23,
      "cityId": 11,
      "name": "BYTREX"
    },
    {
      "id": 24,
      "cityId": 19,
      "name": "APPLIDEC"
    },
    {
      "id": 25,
      "cityId": 11,
      "name": "XUMONK"
    },
    {
      "id": 26,
      "cityId": 8,
      "name": "ORBALIX"
    },
    {
      "id": 27,
      "cityId": 20,
      "name": "SURELOGIC"
    },
    {
      "id": 28,
      "cityId": 20,
      "name": "SPRINGBEE"
    },
    {
      "id": 29,
      "cityId": 8,
      "name": "TELEQUIET"
    },
    {
      "id": 30,
      "cityId": 4,
      "name": "BRAINQUIL"
    },
    {
      "id": 31,
      "cityId": 2,
      "name": "ELECTONIC"
    },
    {
      "id": 32,
      "cityId": 10,
      "name": "AVIT"
    },
    {
      "id": 33,
      "cityId": 10,
      "name": "ACCEL"
    },
    {
      "id": 34,
      "cityId": 11,
      "name": "MAXEMIA"
    },
    {
      "id": 35,
      "cityId": 8,
      "name": "NIXELT"
    },
    {
      "id": 36,
      "cityId": 4,
      "name": "TERSANKI"
    },
    {
      "id": 37,
      "cityId": 19,
      "name": "MIXERS"
    },
    {
      "id": 38,
      "cityId": 5,
      "name": "CEDWARD"
    },
    {
      "id": 39,
      "cityId": 14,
      "name": "QUORDATE"
    },
    {
      "id": 40,
      "cityId": 13,
      "name": "TROLLERY"
    },
    {
      "id": 41,
      "cityId": 8,
      "name": "LIMAGE"
    },
    {
      "id": 42,
      "cityId": 13,
      "name": "QUAREX"
    },
    {
      "id": 43,
      "cityId": 6,
      "name": "NIQUENT"
    },
    {
      "id": 44,
      "cityId": 4,
      "name": "VORATAK"
    },
    {
      "id": 45,
      "cityId": 10,
      "name": "NURALI"
    },
    {
      "id": 46,
      "cityId": 17,
      "name": "APEXIA"
    },
    {
      "id": 47,
      "cityId": 18,
      "name": "MAGNEMO"
    },
    {
      "id": 48,
      "cityId": 20,
      "name": "DIGIFAD"
    },
    {
      "id": 49,
      "cityId": 10,
      "name": "BLUPLANET"
    },
    {
      "id": 50,
      "cityId": 15,
      "name": "EMOLTRA"
    },
    {
      "id": 51,
      "cityId": 14,
      "name": "LETPRO"
    },
    {
      "id": 52,
      "cityId": 5,
      "name": "COGNICODE"
    },
    {
      "id": 53,
      "cityId": 14,
      "name": "TINGLES"
    },
    {
      "id": 54,
      "cityId": 4,
      "name": "VERBUS"
    },
    {
      "id": 55,
      "cityId": 2,
      "name": "ZOSIS"
    },
    {
      "id": 56,
      "cityId": 16,
      "name": "SOLAREN"
    },
    {
      "id": 57,
      "cityId": 18,
      "name": "BLUEGRAIN"
    },
    {
      "id": 58,
      "cityId": 8,
      "name": "ACCUFARM"
    },
    {
      "id": 59,
      "cityId": 19,
      "name": "DIGIGENE"
    },
    {
      "id": 60,
      "cityId": 9,
      "name": "ZIORE"
    },
    {
      "id": 61,
      "cityId": 6,
      "name": "ZENCO"
    },
    {
      "id": 62,
      "cityId": 20,
      "name": "BOILCAT"
    },
    {
      "id": 63,
      "cityId": 19,
      "name": "RAMEON"
    },
    {
      "id": 64,
      "cityId": 4,
      "name": "BUZZOPIA"
    },
    {
      "id": 65,
      "cityId": 20,
      "name": "KYAGURU"
    },
    {
      "id": 66,
      "cityId": 12,
      "name": "INTERODEO"
    },
    {
      "id": 67,
      "cityId": 16,
      "name": "PYRAMI"
    },
    {
      "id": 68,
      "cityId": 9,
      "name": "LINGOAGE"
    },
    {
      "id": 69,
      "cityId": 11,
      "name": "MAZUDA"
    },
    {
      "id": 70,
      "cityId": 15,
      "name": "QUOTEZART"
    },
    {
      "id": 71,
      "cityId": 13,
      "name": "QUILITY"
    },
    {
      "id": 72,
      "cityId": 13,
      "name": "RODEMCO"
    },
    {
      "id": 73,
      "cityId": 13,
      "name": "CONFERIA"
    },
    {
      "id": 74,
      "cityId": 14,
      "name": "ACCUPRINT"
    },
    {
      "id": 75,
      "cityId": 14,
      "name": "SYBIXTEX"
    },
    {
      "id": 76,
      "cityId": 14,
      "name": "ACRODANCE"
    },
    {
      "id": 77,
      "cityId": 5,
      "name": "EARTHWAX"
    },
    {
      "id": 78,
      "cityId": 18,
      "name": "GEEKULAR"
    },
    {
      "id": 79,
      "cityId": 18,
      "name": "KOOGLE"
    },
    {
      "id": 80,
      "cityId": 2,
      "name": "SPLINX"
    },
    {
      "id": 81,
      "cityId": 7,
      "name": "SNACKTION"
    },
    {
      "id": 82,
      "cityId": 3,
      "name": "RADIANTIX"
    },
    {
      "id": 83,
      "cityId": 16,
      "name": "JUMPSTACK"
    },
    {
      "id": 84,
      "cityId": 7,
      "name": "URBANSHEE"
    },
    {
      "id": 85,
      "cityId": 14,
      "name": "SCENTRIC"
    },
    {
      "id": 86,
      "cityId": 9,
      "name": "DUOFLEX"
    },
    {
      "id": 87,
      "cityId": 3,
      "name": "OPTICON"
    },
    {
      "id": 88,
      "cityId": 1,
      "name": "ESCENTA"
    },
    {
      "id": 89,
      "cityId": 6,
      "name": "FIBEROX"
    },
    {
      "id": 90,
      "cityId": 6,
      "name": "ISOLOGIA"
    },
    {
      "id": 91,
      "cityId": 9,
      "name": "MAKINGWAY"
    },
    {
      "id": 92,
      "cityId": 4,
      "name": "DEMINIMUM"
    },
    {
      "id": 93,
      "cityId": 19,
      "name": "OZEAN"
    },
    {
      "id": 94,
      "cityId": 3,
      "name": "ENDIPINE"
    },
    {
      "id": 95,
      "cityId": 14,
      "name": "TURNLING"
    },
    {
      "id": 96,
      "cityId": 10,
      "name": "GINKOGENE"
    },
    {
      "id": 97,
      "cityId": 16,
      "name": "ISOSURE"
    },
    {
      "id": 98,
      "cityId": 16,
      "name": "REALYSIS"
    },
    {
      "id": 99,
      "cityId": 4,
      "name": "MEDIFAX"
    },
    {
      "id": 100,
      "cityId": 5,
      "name": "NAXDIS"
    },
    {
      "id": 101,
      "cityId": 20,
      "name": "ENDIPIN"
    },
    {
      "id": 102,
      "cityId": 8,
      "name": "PYRAMIA"
    },
    {
      "id": 103,
      "cityId": 6,
      "name": "BEDLAM"
    },
    {
      "id": 104,
      "cityId": 19,
      "name": "AFFLUEX"
    },
    {
      "id": 105,
      "cityId": 18,
      "name": "BUZZWORKS"
    },
    {
      "id": 106,
      "cityId": 17,
      "name": "XSPORTS"
    },
    {
      "id": 107,
      "cityId": 19,
      "name": "CANOPOLY"
    },
    {
      "id": 108,
      "cityId": 17,
      "name": "TRIBALOG"
    },
    {
      "id": 109,
      "cityId": 8,
      "name": "ACUMENTOR"
    },
    {
      "id": 110,
      "cityId": 9,
      "name": "TASMANIA"
    },
    {
      "id": 111,
      "cityId": 4,
      "name": "UXMOX"
    },
    {
      "id": 112,
      "cityId": 16,
      "name": "VETRON"
    },
    {
      "id": 113,
      "cityId": 14,
      "name": "VIAGRAND"
    },
    {
      "id": 114,
      "cityId": 7,
      "name": "NORSUL"
    },
    {
      "id": 115,
      "cityId": 5,
      "name": "PORTICO"
    },
    {
      "id": 116,
      "cityId": 18,
      "name": "EYERIS"
    },
    {
      "id": 117,
      "cityId": 8,
      "name": "ANACHO"
    },
    {
      "id": 118,
      "cityId": 10,
      "name": "HAIRPORT"
    },
    {
      "id": 119,
      "cityId": 2,
      "name": "GENMY"
    },
    {
      "id": 120,
      "cityId": 2,
      "name": "AQUASURE"
    },
    {
      "id": 121,
      "cityId": 13,
      "name": "PLASMOS"
    },
    {
      "id": 122,
      "cityId": 15,
      "name": "PANZENT"
    },
    {
      "id": 123,
      "cityId": 4,
      "name": "RECRISYS"
    },
    {
      "id": 124,
      "cityId": 4,
      "name": "PHARMACON"
    },
    {
      "id": 125,
      "cityId": 12,
      "name": "VELOS"
    },
    {
      "id": 126,
      "cityId": 10,
      "name": "WEBIOTIC"
    },
    {
      "id": 127,
      "cityId": 12,
      "name": "DATACATOR"
    },
    {
      "id": 128,
      "cityId": 7,
      "name": "RONBERT"
    },
    {
      "id": 129,
      "cityId": 15,
      "name": "PORTALIS"
    },
    {
      "id": 130,
      "cityId": 5,
      "name": "DIGITALUS"
    },
    {
      "id": 131,
      "cityId": 15,
      "name": "EXOTECHNO"
    },
    {
      "id": 132,
      "cityId": 18,
      "name": "GENEKOM"
    },
    {
      "id": 133,
      "cityId": 14,
      "name": "KIDSTOCK"
    },
    {
      "id": 134,
      "cityId": 8,
      "name": "ZENSUS"
    },
    {
      "id": 135,
      "cityId": 20,
      "name": "REVERSUS"
    },
    {
      "id": 136,
      "cityId": 14,
      "name": "SECURIA"
    },
    {
      "id": 137,
      "cityId": 7,
      "name": "APEXTRI"
    },
    {
      "id": 138,
      "cityId": 12,
      "name": "ISOSWITCH"
    },
    {
      "id": 139,
      "cityId": 10,
      "name": "HOPELI"
    },
    {
      "id": 140,
      "cityId": 7,
      "name": "DREAMIA"
    },
    {
      "id": 141,
      "cityId": 2,
      "name": "ZOLAR"
    },
    {
      "id": 142,
      "cityId": 3,
      "name": "MOMENTIA"
    },
    {
      "id": 143,
      "cityId": 5,
      "name": "ZERBINA"
    },
    {
      "id": 144,
      "cityId": 10,
      "name": "ORBIN"
    },
    {
      "id": 145,
      "cityId": 12,
      "name": "QUIZKA"
    },
    {
      "id": 146,
      "cityId": 14,
      "name": "UTARIAN"
    },
    {
      "id": 147,
      "cityId": 3,
      "name": "GRUPOLI"
    },
    {
      "id": 148,
      "cityId": 2,
      "name": "JAMNATION"
    },
    {
      "id": 149,
      "cityId": 8,
      "name": "ENTHAZE"
    },
    {
      "id": 150,
      "cityId": 10,
      "name": "SONGBIRD"
    },
    {
      "id": 151,
      "cityId": 16,
      "name": "TERRAGEN"
    },
    {
      "id": 152,
      "cityId": 9,
      "name": "DEEPENDS"
    },
    {
      "id": 153,
      "cityId": 2,
      "name": "NIPAZ"
    },
    {
      "id": 154,
      "cityId": 17,
      "name": "SHOPABOUT"
    },
    {
      "id": 155,
      "cityId": 10,
      "name": "TWIIST"
    },
    {
      "id": 156,
      "cityId": 2,
      "name": "BEDDER"
    },
    {
      "id": 157,
      "cityId": 5,
      "name": "ZANYMAX"
    },
    {
      "id": 158,
      "cityId": 16,
      "name": "DIGIPRINT"
    },
    {
      "id": 159,
      "cityId": 3,
      "name": "OPTICALL"
    },
    {
      "id": 160,
      "cityId": 2,
      "name": "LUMBREX"
    },
    {
      "id": 161,
      "cityId": 2,
      "name": "PYRAMIS"
    },
    {
      "id": 162,
      "cityId": 15,
      "name": "ZILLAR"
    },
    {
      "id": 163,
      "cityId": 1,
      "name": "OTHERWAY"
    },
    {
      "id": 164,
      "cityId": 12,
      "name": "MEDALERT"
    },
    {
      "id": 165,
      "cityId": 7,
      "name": "DYNO"
    },
    {
      "id": 166,
      "cityId": 10,
      "name": "MEDCOM"
    },
    {
      "id": 167,
      "cityId": 11,
      "name": "COSMOSIS"
    },
    {
      "id": 168,
      "cityId": 12,
      "name": "HALAP"
    },
    {
      "id": 169,
      "cityId": 3,
      "name": "CORMORAN"
    },
    {
      "id": 170,
      "cityId": 5,
      "name": "ZOUNDS"
    },
    {
      "id": 171,
      "cityId": 11,
      "name": "DOGNOST"
    },
    {
      "id": 172,
      "cityId": 6,
      "name": "MOLTONIC"
    },
    {
      "id": 173,
      "cityId": 6,
      "name": "ATGEN"
    },
    {
      "id": 174,
      "cityId": 8,
      "name": "EBIDCO"
    },
    {
      "id": 175,
      "cityId": 13,
      "name": "PROGENEX"
    },
    {
      "id": 176,
      "cityId": 4,
      "name": "REMOTION"
    },
    {
      "id": 177,
      "cityId": 9,
      "name": "BUZZMAKER"
    },
    {
      "id": 178,
      "cityId": 11,
      "name": "CIPROMOX"
    },
    {
      "id": 179,
      "cityId": 7,
      "name": "WAZZU"
    },
    {
      "id": 180,
      "cityId": 16,
      "name": "EGYPTO"
    },
    {
      "id": 181,
      "cityId": 4,
      "name": "YURTURE"
    },
    {
      "id": 182,
      "cityId": 6,
      "name": "ZOGAK"
    },
    {
      "id": 183,
      "cityId": 9,
      "name": "BIFLEX"
    },
    {
      "id": 184,
      "cityId": 3,
      "name": "BOVIS"
    },
    {
      "id": 185,
      "cityId": 8,
      "name": "CINCYR"
    },
    {
      "id": 186,
      "cityId": 12,
      "name": "GREEKER"
    },
    {
      "id": 187,
      "cityId": 20,
      "name": "GINKLE"
    },
    {
      "id": 188,
      "cityId": 11,
      "name": "PLUTORQUE"
    },
    {
      "id": 189,
      "cityId": 1,
      "name": "GENMOM"
    },
    {
      "id": 190,
      "cityId": 2,
      "name": "BLURRYBUS"
    },
    {
      "id": 191,
      "cityId": 16,
      "name": "PRISMATIC"
    },
    {
      "id": 192,
      "cityId": 13,
      "name": "CODACT"
    },
    {
      "id": 193,
      "cityId": 13,
      "name": "ROUGHIES"
    },
    {
      "id": 194,
      "cityId": 6,
      "name": "NEBULEAN"
    },
    {
      "id": 195,
      "cityId": 5,
      "name": "COMDOM"
    },
    {
      "id": 196,
      "cityId": 9,
      "name": "NURPLEX"
    },
    {
      "id": 197,
      "cityId": 7,
      "name": "VIRXO"
    },
    {
      "id": 198,
      "cityId": 19,
      "name": "DAYCORE"
    },
    {
      "id": 199,
      "cityId": 8,
      "name": "ARTIQ"
    }
  ]
}

function seedDB(){
  // clear the DB
  Book.remove({}, function(err){
    if (err) {
      console.log(err);
    }
    console.log('cleared DB');
    // add info to the DB
    /*
    data.forEach(function(seed){
      Book.create(seed, function(err, data){
        if(err){
          console.log(err);
        } else {
          console.log('info added');
        }
      });
    });
    */
    /*
    Object.keys(data).forEach(function(key) {
      console.log(key, data[key]);
      console.log('-----')
      Book.create(data, function(err, data){
        if(err){
          console.log(err);
        } else {
          console.log('info added');
        }
      });
    });
    */
    // for (var i = 0; i < data.books.length; i++) {
    //   var books = data.books[i];
    //   console.log(books.author)
    // }
    
    // for (var i = 0; i < data.formats.length; i++) {
    //   var formats = data.formats[i];
    //   console.log(formats.name)
    // }

  });
}

module.exports = seedDB;