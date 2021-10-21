'use strict';

const AWS = require('aws-sdk');
exports.handler = async (event, context) =>{
  const docmentClient = new AWS.DynamoDB.DocumentClient();

  let responseBody = '';
  let statusCode = 0;


  const params = {
    TableName: 'testelambda',
    Key: {
      id: '0001',
      name:'Mateus'
    }

  }

  try {
    const data = await  docmentClient.delete(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 204
  } catch (err){
    responseBody = `Falha ao deletar item: ${err}`
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
