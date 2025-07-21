import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  doc_id: number
  email: string | undefined

  constructor(doc_id: number, name: string, accountNumber: number, email: string){
    super(name, accountNumber)
    this.doc_id = doc_id;
    this.email = email;
  }
}