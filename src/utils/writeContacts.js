import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  const data = await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts));
  return data;
};
writeContacts();
