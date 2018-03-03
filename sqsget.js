//モジュールの読み込み
var AWS = require('aws-sdk');
var sqs = new AWS.SQS({ region: 'ap-northeast-1' });

const url = process.env.SQSURL;

var params = {
    QueueUrl: url
};

sqs.receiveMessage(params).promise().then(data => {
    console.log(data);
    if (data.Messages) {
        data.Messages.forEach(message => {
            const delParams = {
                QueueUrl: url,
                ReceiptHandle: message.ReceiptHandle
            }
            sqs.deleteMessage(delParams).promise().then(data2 => {
                console.log(data2)
            })
        })
    }
}).catch(err => {
    console.log(err, err.stack);
});