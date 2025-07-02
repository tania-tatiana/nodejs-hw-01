import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  const data = await fs.writeFile(PATH_DB, JSON.stringify([]));
  console.log('Видалено усі контакти');

  return data;
};

removeAllContacts();
