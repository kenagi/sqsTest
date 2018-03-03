const AWS = require('aws-sdk');
const sqs = new AWS.SQS({ region: 'ap-northeast-1' });

const url = process.env.SQSURL;

const message = {
    text: 'hogeeeeeeee',
};
const params = {
    MessageBody: JSON.stringify(message),
    QueueUrl: url,
    DelaySeconds: 0,
};

sqs.sendMessage(params).promise().then((data) => {
    console.log(data);
}).catch(err => {
    console.log(err, err.stack);
})

