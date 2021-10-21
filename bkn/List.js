'use strict';

const AWS = require('aws-sdk');
exports.handler = async (event, context) =>{
  const docmentClient = new AWS.DynamoDB.DocumentClient();

  let responseBody = '';
  let statusCode = 0;


  const params = {
    TableName: 'testelambda',

  }

  try {
    const data = await  docmentClient.scan(params).promise();
    responseBody = JSON.stringify(data.Items);
    statusCode = 200
  } catch (err){
    responseBody = `Falha ao retornar item: ${err}`
    statusCode = 403
  }

  const response = {
    statusCode:statusCode,
    headers:{
      'content-Type':'application/json'
    },
    body:responseBody
  }
  return response
}
