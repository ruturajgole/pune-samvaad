import { Event } from "./event";

interface Form {
  readonly event: Event;
  readonly email: string;
  readonly name: string;
  readonly mobile: string;
  readonly isStudent: boolean;
  readonly institution: string;
  readonly questions: string;
}

export default Form;