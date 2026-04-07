import fs from 'fs';
import path from 'path';

const assetsDir = './src/assets';
const appFile = './src/App.tsx';

let appContent = fs.readFileSync(appFile, 'utf-8');

const assets = [
  'hero-video.mp4',
  'studio.jpg',
  'IMG_5367.jpg',
  'IMG_5593.jpg',
  'IMG_7647.jpg',
  'IMG_7667.jpg',
  'IMG_7780.jpg',
  'IMG_8037.jpg',
  'IMG_8048.jpg',
  'IMG_8059.jpg'
];

const assetMap = {
  'hero-video.mp4': 'heroVideo',
  'studio.jpg': 'studioImg',
  'IMG_5367.jpg': 'insta1',
  'IMG_5593.jpg': 'insta2',
  'IMG_7647.jpg': 'insta3',
  'IMG_7667.jpg': 'insta4',
  'IMG_7780.jpg': 'insta5',
  'IMG_8037.jpg': 'insta6',
  'IMG_8048.jpg': 'insta7',
  'IMG_8059.jpg': 'insta8'
};

assets.forEach(asset => {
  const filePath = path.join(assetsDir, asset);
  if (fs.existsSync(filePath)) {
    const ext = path.extname(asset).slice(1);
    const mimeType = ext === 'mp4' ? 'video/mp4' : 'image/jpeg';
    const base64 = fs.readFileSync(filePath).toString('base64');
    const dataUrl = `data:${mimeType};base64,${base64}`;
    
    const varName = assetMap[asset];
    // Replace import with const
    const importRegex = new RegExp(`import ${varName} from ["']\\./assets/${asset}["'];?`, 'g');
    const commentedImportRegex = new RegExp(`// import ${varName} from ["']\\./assets/${asset}["'];?`, 'g');
    
    appContent = appContent.replace(importRegex, `const ${varName} = "${dataUrl}";`);
    appContent = appContent.replace(commentedImportRegex, `const ${varName} = "${dataUrl}";`);
    
    // Also handle the case where I might have already replaced it with an empty string
    const emptyVarRegex = new RegExp(`const ${varName} = "";`, 'g');
    appContent = appContent.replace(emptyVarRegex, `const ${varName} = "${dataUrl}";`);
  }
});

fs.writeFileSync(appFile, appContent);
console.log('Assets inlined in App.tsx');
