import * as fs from 'node:fs/promises';

import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();

    contacts.push(createFakeContact());
    console.log(`Додано контакт`);

    return fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2));
  } catch (error) {
    console.error('Помилка при читанні файлу:', error.message);
    throw error;
  }
};

addOneContact();
