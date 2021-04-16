const express = require("express");
const uuid = require("uuid");
const memberRouter = express.Router();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const members = [
  {
    _id: "60799f0ff1db10c3d9421be9",
    index: 0,
    guid: "5ee3fa49-d576-48e7-8304-dfe4b14b9a5d",
    isActive: false,
    balance: "$3,150.71",
    picture: "http://placehold.it/32x32",
    age: 27,
    eyeColor: "blue",
    name: "Tracey Young",
    gender: "female",
    company: "SURELOGIC",
    email: "traceyyoung@surelogic.com",
    phone: "+1 (984) 481-2775",
    address: "817 Broadway , Marysville, Oklahoma, 5378",
    about:
      "Reprehenderit sunt incididunt veniam occaecat fugiat amet sint ipsum eiusmod qui laboris ipsum anim. Ipsum ad velit velit cillum non commodo cupidatat aute. Aliqua et esse laborum non.\r\n",
    registered: "2017-07-24T09:14:37 -06:-30",
    latitude: 18.971143,
    longitude: 116.90411,
    tags: ["occaecat", "Lorem", "ipsum", "ex", "eu", "non", "eiusmod"],
    friends: [
      {
        id: 0,
        name: "Christina Mann",
      },
      {
        id: 1,
        name: "Jarvis Hendrix",
      },
      {
        id: 2,
        name: "Natalia Mejia",
      },
    ],
    greeting: "Hello, Tracey Young! You have 3 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "60799f0f140c09a1cd47017f",
    index: 1,
    guid: "3232fc3d-7348-40a4-9dfd-0541241cbe22",
    isActive: true,
    balance: "$2,354.61",
    picture: "http://placehold.it/32x32",
    age: 34,
    eyeColor: "blue",
    name: "Frieda Levy",
    gender: "female",
    company: "ZUVY",
    email: "friedalevy@zuvy.com",
    phone: "+1 (926) 429-3034",
    address: "102 Highland Avenue, Fairlee, Indiana, 7786",
    about:
      "Enim dolore aliqua ad minim irure ipsum minim excepteur sit deserunt est reprehenderit. Laborum id quis esse pariatur consectetur nostrud reprehenderit deserunt minim non duis fugiat amet id. Duis eu nostrud Lorem amet culpa amet. Nulla nulla consequat excepteur est aute. Ut qui esse sint consequat pariatur enim Lorem consectetur voluptate in proident occaecat nisi labore. Sunt veniam ad do nisi ut est velit mollit laborum ad ut.\r\n",
    registered: "2017-12-28T01:03:02 -06:-30",
    latitude: -50.847424,
    longitude: 134.305475,
    tags: [
      "reprehenderit",
      "cupidatat",
      "culpa",
      "id",
      "eiusmod",
      "consequat",
      "in",
    ],
    friends: [
      {
        id: 0,
        name: "Petersen Lucas",
      },
      {
        id: 1,
        name: "Diana Wolfe",
      },
      {
        id: 2,
        name: "Solomon Whitley",
      },
    ],
    greeting: "Hello, Frieda Levy! You have 5 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "60799f0f099685d10e5cf51a",
    index: 2,
    guid: "8af305cd-029c-49fc-a503-600b0337cfa7",
    isActive: true,
    balance: "$1,323.23",
    picture: "http://placehold.it/32x32",
    age: 39,
    eyeColor: "blue",
    name: "Harding Ortega",
    gender: "male",
    company: "TALKOLA",
    email: "hardingortega@talkola.com",
    phone: "+1 (947) 530-3371",
    address: "957 Bay Street, Crisman, Marshall Islands, 9228",
    about:
      "Nostrud magna enim veniam deserunt quis sit minim id anim ut enim mollit et. Laboris officia ut exercitation in. Ut irure quis id do nostrud eiusmod nulla minim irure ipsum. Ullamco in dolore enim est non tempor eiusmod consectetur.\r\n",
    registered: "2018-06-12T06:59:24 -06:-30",
    latitude: 41.529652,
    longitude: -26.880014,
    tags: [
      "dolore",
      "laboris",
      "incididunt",
      "nisi",
      "cillum",
      "dolor",
      "amet",
    ],
    friends: [
      {
        id: 0,
        name: "Poole Mendoza",
      },
      {
        id: 1,
        name: "Bowen Hewitt",
      },
      {
        id: 2,
        name: "Cecile Allison",
      },
    ],
    greeting: "Hello, Harding Ortega! You have 2 unread messages.",
    favoriteFruit: "banana",
  },
  {
    _id: "60799f0f1a1522faedf36cb2",
    index: 3,
    guid: "49848bd3-e2bc-43bd-91ee-1719b61217fe",
    isActive: true,
    balance: "$1,326.59",
    picture: "http://placehold.it/32x32",
    age: 37,
    eyeColor: "blue",
    name: "Clarissa Parks",
    gender: "female",
    company: "INSURITY",
    email: "clarissaparks@insurity.com",
    phone: "+1 (816) 524-2482",
    address: "588 Cleveland Street, Iberia, Ohio, 8549",
    about:
      "Magna irure eiusmod magna mollit velit et ex id ut labore do proident. Cillum nostrud eiusmod quis velit voluptate magna sit exercitation nulla qui exercitation sint voluptate excepteur. Pariatur labore eu elit dolore dolore anim labore nisi amet. Laboris consequat pariatur fugiat adipisicing nisi culpa reprehenderit quis commodo velit. Nisi dolor est eiusmod nulla occaecat enim ut tempor qui id tempor nostrud dolore.\r\n",
    registered: "2020-10-19T06:53:46 -06:-30",
    latitude: -46.419092,
    longitude: -80.954022,
    tags: [
      "quis",
      "adipisicing",
      "aliquip",
      "incididunt",
      "sunt",
      "sit",
      "nisi",
    ],
    friends: [
      {
        id: 0,
        name: "Francesca Castaneda",
      },
      {
        id: 1,
        name: "Melendez Hurley",
      },
      {
        id: 2,
        name: "Nelda Sherman",
      },
    ],
    greeting: "Hello, Clarissa Parks! You have 8 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "60799f0f541f5f25b4657fa4",
    index: 4,
    guid: "9fcbf01d-36bd-4ae3-a30f-204b033c98fa",
    isActive: true,
    balance: "$2,666.46",
    picture: "http://placehold.it/32x32",
    age: 37,
    eyeColor: "blue",
    name: "Hardin Harmon",
    gender: "male",
    company: "MEDESIGN",
    email: "hardinharmon@medesign.com",
    phone: "+1 (839) 504-2231",
    address: "905 Wyckoff Avenue, Wattsville, District Of Columbia, 1343",
    about:
      "Enim qui veniam aliqua proident tempor Lorem. Consequat eu labore consectetur excepteur cillum ad in in minim in consectetur. Est adipisicing sint voluptate laborum id non. Sunt magna sit laboris nulla esse nostrud. Qui voluptate eiusmod minim proident eiusmod officia dolore veniam quis. Ut amet occaecat occaecat sunt fugiat fugiat deserunt magna nisi exercitation.\r\n",
    registered: "2016-03-25T05:13:53 -06:-30",
    latitude: 83.219351,
    longitude: 148.104472,
    tags: ["pariatur", "mollit", "eu", "reprehenderit", "do", "Lorem", "est"],
    friends: [
      {
        id: 0,
        name: "Aurora Mcgee",
      },
      {
        id: 1,
        name: "Knowles Fox",
      },
      {
        id: 2,
        name: "Nadine Mack",
      },
    ],
    greeting: "Hello, Hardin Harmon! You have 8 unread messages.",
    favoriteFruit: "strawberry",
  },
];

//Get all the members
memberRouter.get("/", (req, res) => {
  res.json(members);
});

memberRouter.get("/:id", (req, res) => {
  const found = members.some(
    member => member.index === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      members.filter(member => member.index === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `No Member with ${req.params.id} not found` });
  }
});

//Create a member
memberRouter.post("/", (req, res) => {
  console.log("member router post");
  console.log(req.body);
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please include a name or email" });
  }
  members.push(newMember);
  res.json(members);
});

//Update a member
memberRouter.put("/:id", (req, res) => {
  const found = members.some(
    member => member.index === parseInt(req.params.id)
  );
  if (found) {
    const updateMember = req.body;
    members.forEach(member => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updateMember.name ? updateMember.name : req.body.name;
        member.email = updateMember.email ? updateMember.email : req.body.email;
        res.json({ msg: "Member was updated ", member });
      }
    });
  } else {
    res.status(400).json({ msg: `No Member with ${req.params.id} not found` });
  }
});
module.exports = memberRouter;
