import * as fs from 'node:fs/promises';
import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }
    const updateContacts = [...contacts, ...newContacts];
    console.log(
      `Згенеровано контактів: ${number}\nБуло у масиві до генерації: ${contacts.length}`,
    );

    return fs.writeFile(PATH_DB, JSON.stringify(updateContacts, undefined, 2));
  } catch (error) {
    console.error('Помилка при читанні файлу:', error.message);
    throw error;
  }
};

generateContacts(5);
