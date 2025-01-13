const fs = require('fs');
const path = require('path');

// .env 파일 경로 (필요에 따라 수정)

// 환경 변수에서 'env' 값을 가져옵니다. 기본값은 'local'로 설정합니다.
const env = process.env.env || 'local';

const envFilePath = path.resolve(__dirname, `.env.${env}`);
const outputFilePath = path.resolve(__dirname, 'auto.d.ts');

try {
    // .env 파일 읽기
    const envContent = fs.readFileSync(envFilePath, 'utf-8');

    // 각 라인을 파싱하여 키 추출
    const keys = envContent
        .split('\n') // 줄바꿈으로 분리
        .filter((line) => line.trim() && !line.startsWith('#')) // 빈 줄 및 주석 제거
        .map((line) => line.split('=')[0].trim()); // 키만 추출

    // 타입 선언 생성
    const typeDeclarations = keys
        .map((key) => `  export const ${key}: string;`) // 각 키에 타입 선언 추가
        .join('\n');

    const outputContent = `declare module '@env' {\n${typeDeclarations}\n}\n`;

    // auto.d.ts 파일 생성 또는 업데이트
    fs.writeFileSync(outputFilePath, outputContent, 'utf-8');
    console.log(`Generated type declarations in ${outputFilePath}`);
} catch (error) {
    console.error('Error generating env types:', error);
}
