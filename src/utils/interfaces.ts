// https://www.typescriptlang.org/docs/handbook/interfaces.html

// Type interface enforcing shape of database entry
export interface DatabaseEntry {
  id?: string;
  name: string;
  link: string;
  description: string;
  user: string;
  category: number;
  userid: string | null;
}
