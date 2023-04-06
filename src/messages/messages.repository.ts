import { readFile, writeFile } from 'fs/promises';

const FILE_NAME = 'messages.json';

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile(FILE_NAME, 'utf-8');

    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await readFile(FILE_NAME, 'utf-8');

    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await readFile(FILE_NAME, 'utf-8');

    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);
    messages[id] = {
      id: {
        id: id,
        content: content,
      },
    };

    await writeFile(FILE_NAME, JSON.stringify(messages));
    return messages;
  }
}
