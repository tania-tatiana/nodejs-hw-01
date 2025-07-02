import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    const updateContacts = [...contacts];

    if (updateContacts.length > 0) {
      console.log('Видалено останній контакт');
      updateContacts.pop();
    } else {
      console.log('Контакти відсутні');
    }

    return fs.writeFile(PATH_DB, JSON.stringify(updateContacts, undefined, 2));
  } catch (error) {
    console.error('Помилка при читанні файлу:', error.message);
    throw error;
  }
};

removeLastContact();
