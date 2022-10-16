import axios from 'axios';

const a = async () => {
    try{
        const data = await axios.get('http://apis.data.go.kr/B490007/qualExamSchd/getQualExamSchdList?serviceKey=h0s66po6sZAkb4Zx6EzM3pt79xH05dw1ReWavwvGpdxBHhbF%2FYTZqna5FZ3j8XBByBp6Ep7ccXM8j3Zdibxx9g%3D%3D&numOfRows=20&pageNo=1&dataFormat=json&implYy=2022&qualgbCd=T&jmCd=0752')
        console.log(data.data.body.items);
    }catch(e){
        console.log(e);
    }
}

a();