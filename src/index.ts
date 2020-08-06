import { Student } from "./class/Student";

// const newStudent: Student = new Student();
// const action: string = process.argv[2];

// switch (action) {
//   case "createStudent":
//     newStudent.createStudent(process.argv[3], process.argv[4], process.argv[5]);
//     console.log(
//       "Parabéns " + process.argv[3] + "!. Sua conta foi criada com sucesso!"
//     );
//     break;

//   default:
//     break;
//}

const studentIsrael: Student = new Student(
  "01",
  "Israel Cavalcanti",
  "israel@labenu.com",
  "05/05/1994",
  ["video-games", "futebol"]
);

console.log(studentIsrael.createStudent());
