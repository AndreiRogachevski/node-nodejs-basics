import fs from 'fs';
import { constants } from 'fs';
const create = async () => {
  try {
    // try {
    //   await fs.promises.access('src/fs/files/fresh.txt', constants.f_OK);
    // } catch (error) {
    //   console.error('FS operation failed');
    // }
    await fs.promises.writeFile(
      'src/fs/files/fresh.txt',
      'I am fresh and young',
      function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      }
    );
  } catch (error) {
    console.log(error);
  }
};

await create();
