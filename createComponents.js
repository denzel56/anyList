import { existsSync, mkdir, writeFile } from "fs";

const componentName = process.argv[2];
const componentPath = process.argv[3];

const componentTemplate = `
import { FC } from 'react'
import s from './${componentName}.module.css';

const ${componentName}: FC = () => {
  return (
    <div className={s.root}>
      
    </div>
  );
};

export default ${componentName};`;

const indexTemplate = `import ${componentName} from './${componentName}';

export default ${componentName};`;

const createComponents = new Promise((resolve, reject) => {
  const path = `./src/${componentPath}/${componentName}`;

  if (existsSync(path)) {
    reject("Components is exist");
  }

  mkdir(path, { recursive: true }, (err) => {
    if (err !== null) {
      reject(err);
    } else {
      resolve(path);
    }
  });
});

console.log(`>>>>: Я начал создавать компонент ${componentName}`);
createComponents
  .then(async (dirPath) => {
    writeFile(`${dirPath}/${componentName}.tsx`, componentTemplate, (err) => {
      if (err !== null) {
        Promise.reject(err);
      }
    });

    return dirPath;
  })
  .then(async (dirPath) => {
    writeFile(
      `${dirPath}/${componentName}.module.css`,
      ".root {\n\n}",
      (err) => {
        if (err !== null) {
          Promise.reject(err);
        }
      }
    );

    return dirPath;
  })
  .then(async (dirPath) => {
    writeFile(`${dirPath}/index.tsx`, indexTemplate, (err) => {
      if (err !== null) {
        console.log("Something wrong ", err);
      }
    });
    console.log(
      `>>>>: Я закончил создавать компонент ${componentName}, его вы найдете по пути ${dirPath}`
    );
  })
  .catch((err) => {
    console.log("####: THIS IS ERROR - ", err);
  });
