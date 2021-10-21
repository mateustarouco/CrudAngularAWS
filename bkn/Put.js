'use strict';

const AWS = require('aws-sdk');
exports.handler = async (event, context) =>{
  const docmentClient = new AWS.DynamoDB.DocumentClient();

  let responseBody = '';
  let statusCode = 0;


  const params = {
    TableName: 'testelambda',
    item:{
      id: '0001',
      name: 'Mateus',
      company: 'EvoOne'
    }

  }

  try {
    const data = await  docmentClient.put(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201
  } catch (err){
    responseBody = `Falha ao inserir item: ${err}`
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
