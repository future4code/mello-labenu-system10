import { User } from "./User";
import { JSONFileManager } from "./JSONFileManager";
import * as moment from "moment";

export class Student implements User {
  // Para ler e escrever os dados no arquivo students.json:
  private fileManager: JSONFileManager = new JSONFileManager();
  private student: User[] = [];

  constructor(
    public id: string,
    public name: string,
    public email: string,
    public birthDate: string,
    public hobbies: string[]
  ) {}

  public getAge(): number {
    return moment().diff(this.birthDate, "years");
  }

  public createStudent(
    id: string,
    name: string,
    email: string,
    birthDate: string,
    hobbies: string[]
  ): void {
    // O dado de data de nascimento inserido pelo usuário precisa ser tradado:
    const birthDateAsObject = moment(birthDate, "DD/MM/YYYY");

    // Agora pode-se criar um novo estudante:
    this.student.push(new User(id, name, email));

    // Para salvar os dados inseridos pelo usuário no students.json:
    this.fileManager.writeToDataBase(this.student);
  }
}
