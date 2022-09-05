const AWS = require('aws-sdk');
const tableName = 'Resonance-User';
const key = {
  accessKeyId: '', // 개인 Access key 를 넣어준다.
  secretAccessKey: '',
  region: 'ap-northeast-2',
};

AWS.config.update(key);
const dynamoDB = new AWS.DynamoDB.DocumentClient();

// const put = {
//     TableName : tableName,
//     Item : {
//         User: "Geun-Oh", // 항목을 구분하는 기준이 된다!
//         Age: 22,
//         Email: "kandy1002@naver.com"
//     }
// }
// dynamoDB.put(put, (e,d) => {
//     console.log(put.Item)
// });

const params = {
  TableName: tableName,
  Key: {
    User: 'Geun-Oh',
  },
};

dynamoDB.get(params, (e, d) => {
  console.log(d);
});
