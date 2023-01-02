# 2022-Database-project

<br>

## 실행 환경
Visual Studio Code

<br>

## 서버 실행 방법
1. 레포지토리 복사 
    > 1. git clone <원격저장소 주소>
    > 2. 해당 폴더 이동 
    > 3. npm install
    > 4. npm run start

<br>

2. database/sql.js 파일 내부에서 본인의 데이터베이스 정보 입력
<pre> 
<code>
    const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root',
    database: 'car_dealer', // 본인의 데이터베이스 이름
    password: 'password', // 본인의 데이터베이스 password
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

</code> 
</pre>

<br>
