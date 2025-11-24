FROM node:22

#작업 디렉토리 설정
WORKDIR /app

# 패키지 설치를 위한 복사
COPY package*.json ./

#종속성
RUN npm install

#소스코드
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]