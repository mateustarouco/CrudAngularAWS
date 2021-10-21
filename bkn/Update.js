'use strict';

const AWS = require('aws-sdk');
exports.handler = async (event, context) =>{
  const docmentClient = new AWS.DynamoDB.DocumentClient();

  let responseBody = '';
  let statusCode = 0;

//  const {id,name,company} = JSON.parse(event.body)

  const params = {
    TableName: 'testelambda',
    Key:{
      id: '0001',
      name: 'Mateus'
    }
  }
  const update = {
    Set : {
      id:'0001',
      name:'Mateus Tarouco',
      company: 'EvoOne'
    }
  }

  try {
    const data = await  docmentClient.update(params,update).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201
  } catch (err){
    responseBody = `Falha ao atualizar item: ${err}`
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


///ainda não funciona
