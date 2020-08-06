import { Teacher } from "./Teacher";
import { Student } from "./Student";

export abstract class Mission {
  private name: string = "";
  // não colocamos no construtor,
  // porque o nome da turma de noite tem restrição
  // então é melhor controlar isso com um set
  private currentModule?: number = undefined; // Estava dentro do Constructor

  constructor(
    private id: string,
    private startDate: moment.Moment,
    private endDate: moment.Moment,
    private teachers: Teacher[] = [],
    private students: Student[] = []
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(name: string): string {
    return this.name;
  }

  public getStartDate(): moment.Moment {
    return this.startDate;
  }

  public getEndDate(): moment.Moment {
    return this.endDate;
  }

  public getCurrentModule(): number | undefined {
    return this.currentModule;
  }

  public addTeacher(teacher: Teacher) {
    this.teachers.push(teacher);
  }

  public addStudent(student: Student) {
    this.students.push(student);
  }

  public setName(name: string) {
    this.name = name;
  }
}
