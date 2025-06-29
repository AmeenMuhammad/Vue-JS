function getMyChildrens(childs) {
    if(childs.length > 0) {
        childs.forEach(
            (c) => {
                console.log(c)
            }
            );
    } else {
        console.log("No bacha available");
    }
}

function getMyEducation(eDetails) {
    if(eDetails.length > 0) {
    eDetails.forEach(
        (e) => {
            console.log(e.name, e.type, e.grade);
        }
        );
    } else {
        console.log("No educational details");
    }
}
const obj = [
    {
    name: "Ali",
    age: 23,
    childrens: ["a", "b", "c"],
    educationalDetails: [
        {
            name: "abc school",
            type: "primary",
            grade: "A-"
        },
        {
            name: "abc college",
            type: "secondary",
            grade: "A-"
        },
        ]
    },
    {
    name: "Hasnain",
    age: 52,
    childrens: ["a", "d"],
    educationalDetails: [
        {
            name: "abc school",
            type: "primary",
            grade: "A-"
        },
        {
            name: "abc college",
            type: "secondary",
            grade: "A-"
        },
        {
            name: "abc uni",
            type: "bachelors",
            grade: "A-"
        },
        ]
    },
     {
    name: "Taha",
    age: 52,
    childrens: [],
    educationalDetails: [
        ]
    },
    ]

obj.forEach(
     (o) => {
         console.log(o.name, o.age);
         getMyChildrens(o.childrens);
         getMyEducation(o.educationalDetails);
     }
    );

//===================================================

// <template>
// <h1>{{ ageValidator() }}</h1>
// <p v-if="age > 18">You are an adult</p>
// <p v-else-if="age < 18 && age > 3">You are a child</p>
// <p v-else>You are an infant</p>
// </template>

// <script>
// import { defineComponent } from 'vue'
// import { ROUTES } from '../constants/routes.js'

// export default defineComponent({
//   name: 'Home',
//   data() {
//     return {
//       age: 25,
//     }
//   },
//   computed: {
   
//   },
//   methods: {
//    ageValidator() {
//     const myAge = this.age;
//     if(myAge > 18) {
//       return "You are an adult";
//     } else if( myAge < 18 && myAge > 3) {
//       return "You are a child";
//     } else {
//       return "You are an infant";
//     }
//    }
//   }
// })
// </script>

// <style scoped>
// .home {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   min-height: 100vh;
//   text-align: center;
// }

// h1 {
//   font-size: 4rem;
//   margin-bottom: 2rem;
//   color: #42b883;
// }

// .btn {
//   padding: 12px 24px;
//   font-size: 1.2rem;
//   background-color: #42b883;
//   color: white;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: background-color 0.3s;
// }

// .btn:hover {
//   background-color: #369870;
// }
// </style>
