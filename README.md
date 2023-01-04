# 2022-Database-project

<br>

## 📌 실행 환경
Visual Studio Code

MySQL Workbench

<br>

## 📌 서버 실행 방법
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

## 📌 설계 내용
#### 1. EER Diagram

![image](https://user-images.githubusercontent.com/88774870/210204108-668f47f1-7926-4702-8dbc-e43472555a7f.png)

<br>

#### 2. Relational Schema

![image](https://user-images.githubusercontent.com/88774870/210204326-87433595-476c-4ece-a382-3030e0dce8e8.png)

<br>

## 📌 Service 소개
### 1. Main Page

![image](https://user-images.githubusercontent.com/88774870/210205197-110ca198-55d8-48ed-80ce-35ab230558d7.png)

✔ Main Page에서는 사용자의 **로그인을 유도**하는 문구를 띄어줍니다!

<br>

![image](https://user-images.githubusercontent.com/88774870/210246025-cdf763a2-2930-4e73-950d-c1dfe43dd5f8.png)

✔ 사용자 계정으로 로그인한 경우 **구매자 전용 Page**가 나타나며 **왼쪽 메뉴 버튼 클릭을 유도**하는 문구를 띄어줍니다!

<br>

![image](https://user-images.githubusercontent.com/88774870/210245479-b048190c-4d6b-45ea-a1b8-873c80e380a1.png)

✔ 관리자 계정으로 로그인한 경우 **판매자 전용 Page**가 나타나며 **왼쪽 메뉴 버튼 클릭을 유도**하는 문구를 띄어줍니다!

<br>

### 2. 사용자 페이지

![image](https://user-images.githubusercontent.com/88774870/210260053-24e296a3-86a4-4cf7-a51e-cb639fae2f21.png)

✔ **차량 구매 예약 Page**에서는 현재 **예약이 가능한 모든 차량**이 차종 별로 출력됩니다! 

✔ 예약 날짜를 설정하고 예약 신청 버튼 클릭 시 **예약이 진행**됩니다! -> "GV80" 차량을 예약해 보았습니다.

<br>

![image](https://user-images.githubusercontent.com/88774870/210254846-8a23a10a-9e78-40ed-a69c-02d5c097224a.png)

✔ 이때, 구매자가 입력한 예약 날짜가 현재 날짜로부터 **이전의 날짜로 선택**된 경우와 **7일 이후의 날짜로 선택**된 경우 

Alert를 띄워 **올바른 예약 날짜를 입력하도록 유도**하는 유효성 검사를 진행합니다! 

<br>

![image](https://user-images.githubusercontent.com/88774870/210258047-7a09337a-8a58-45b0-85ff-740e03d8679b.png)

✔ 입력한 예약 날짜가 유효성 검사를 통과하였다면 정상적으로 **예약이 등록**됩니다! 

<br>

![image](https://user-images.githubusercontent.com/88774870/210259296-2477703c-7137-4c29-ae9d-465be65e82b5.png)

✔ **차량 예약 조회 및 취소 Page**에서는 해당 사용자가 현재 **예약을 등록한 차량 목록**이 출력됩니다! 

✔ 예약 삭제 버튼 클릭 시 **예약이 취소**됩니다!

<br>

### 3. 관리자 페이지

