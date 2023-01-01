import express from "express";
import { deleteSql } from "../database/sql";

const router = express.Router();

router.post('/', async (req, res) => { // 구매 예약 차량 예약 삭제 버튼 클릭 시 동작
    
    var Vin_value = req.body.delBtn;
    
    const data = {
        Vin: Vin_value, 
    }; 

    await deleteSql.deleteReservation(data); // 해당 차대 번호의 차량을 예약 table에서 삭제

    res.redirect('/reservation_accept_admin');
});

module.exports = router;