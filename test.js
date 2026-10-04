import fs from 'fs';
const content = fs.readFileSync('node_modules/lucide-react/dist/lucide-react.d.ts', 'utf8');
const match = content.match(/export declare const (Git[a-zA-Z]+)/g);
console.log(match);
