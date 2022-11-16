// const yaml = require('js-yaml');
// const fs = require('fs');
// const util = require('util');
// console.log(util.inspect(dst, { showHidden: false, depth: null }));
import yaml from 'js-yaml';
import fs from 'fs';
import { exec } from 'child_process';
import node_modules from 'node_modules-path';


/**
 * yaml 주소를 string 형태로 입력받아 전체 렌더링된 페이지를 띄워줍니다.
 * @param {string} json yaml파일 주소
 */
export const renderPage = (json) => { // 
    const path = node_modules();
    try {
        const dst = JSON.stringify(yaml.load(fs.readFileSync(json, 'utf-8')));
        exec(`cd ${path}/y2r && cat <<EOF > ./dst.json\n ${dst}`);
    } catch (e) {
        console.log(e);
    }
    exec(`cd ${path}/y2r && npm run dev`);
    console.log('Vite app is running...');
}

/**
 * yaml 주소를 string 형태로 입력받아 dst.json을 새로 작성함. 이후 RenderWithJSON 함수를 앱 내 원하는 곳에서 호출해야 함.
 * @param {string} json yaml파일 주소
 */
export const renderComponent = (json) => {
    const path = node_modules();
    try {
        const dst = JSON.stringify(yaml.load(fs.readFileSync(json, 'utf-8')));
        exec(`cd ${path}/y2r && cat <<EOF > ./dst.json\n ${dst}`);
    } catch (e) {
        console.log(e);
    }
}