import { Student } from "./class/Student";
import { FullTimeMission } from "./class/FulltimeMission";
import { NightMission } from "./class/NightMission";
import * as moment from "moment";
import { Teacher } from "./class/Teacher";
import { TEACHER_SPECIALTY } from "./class/Teacher";

// Nao da pra chamar Missions diretamente por ser Abstrata, mas suas filhas sim (Fullmission e NightMission)

// CRIAR ESTUDANTES
//(Israel)
const studentMello01: Student = new Student(
  "01",
  "Israel Cavalcanti",
  "israel@labenu.com",
  moment("05/05/1994", "DD/MM/YYYY"),
  ["video-games", "futebol"]
);

//(Alexandre)
const studentMello02: Student = new Student(
  "02",
  "Alexandre Gessone",
  "alexandre@labenu.com",
  moment("12/02/1982", "DD/MM/YYYY"),
  ["jogar baralho", "assistir filmes"]
);

// ============================================================================

// CRIAR PROFESSORES
//(Soter)
const teacherA01: Teacher = new Teacher("01", "Soter", "soter@labenu.com", [
  TEACHER_SPECIALTY.CSS,
  TEACHER_SPECIALTY.TESTES,
]);

//(João)
const teacherA02: Teacher = new Teacher("02", "João", "joao@labenu.com", [
  TEACHER_SPECIALTY.BACKEND,
  TEACHER_SPECIALTY.OOP,
]);

//(Matheus)
const teacherA03: Teacher = new Teacher("03", "Matheus", "matheus@labenu.com", [
  TEACHER_SPECIALTY.BACKEND,
  TEACHER_SPECIALTY.TYPESCRIPT,
]);

//(Caio)
const teacherA04: Teacher = new Teacher("04", "Caio", "caio@labenu.com", [
  TEACHER_SPECIALTY.CSS,
  TEACHER_SPECIALTY.TESTES,
]);

// ============================================================================

// CRIAR NOVA TURMA INTEGRAL(FullTimeMission)
const missionA01: FullTimeMission = new FullTimeMission(
  "A01",
  moment("10/01/2020", "DD/MM/YYYY"),
  moment("10/07/2020", "DD/MM/YYYY"),
  [],
  []
);

// CRIAR NOVA TURMA NOTURNA(night-mission)
const missionA02: NightMission = new NightMission(
  "A01",
  moment("15/02/2020", "DD/MM/YYYY"),
  moment("15/08/2020", "DD/MM/YYYY"),
  [],
  []
);

// ============================================================================

// ADICIONAR O ESTUDANTE NA TURMA INTEGRAL (mission)
missionA01.addStudent(studentMello01);

// ADICIONAR O PROFESSOR NA NOVA TURMA INTEGRAL(NightMission)
missionA02.addTeacher(teacherA01);
missionA02.addTeacher(teacherA02);

// ADICIONAR O ESTUDANTE NA TURMA NOTURNA (night-mission)
missionA02.addStudent(studentMello02);

// ADICIONAR O PROFESSOR NA NOVA TURMA NOTURNA(NightMission)
missionA02.addTeacher(teacherA03);
missionA02.addTeacher(teacherA04);

console.log(missionA01);
console.log(missionA02);
