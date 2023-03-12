const fs = require('fs')
const stram = require('stream')
const { google } = require('googleapis')
const path = require('path')
const { dirname } = require('path')

const GOOGLE_API_FOLDER_ID = '1nOMpI0i9wYbgbTOiE7tGFudZUEokpGIB'

const uploadFile = async (file)=>{

    
    try{
        const auth = new google.auth.GoogleAuth({
            keyFile: path.join(__dirname, "googleDrive.json"),
            scopes: ['https://www.googleapis.com/auth/drive']
        })

        const bufferStream = new stram.PassThrough()
        bufferStream.end(file.buffer)

        const {data} = await google.drive({
            version: 'v3',
            auth
        }).files.create({
            media: {
                mimeType: file.mimeType,
                body: bufferStream
            },
            requestBody: {
                name: file.originalname,
                parents: [GOOGLE_API_FOLDER_ID]
            },
            fields: "id,name"
        })

        return data.id

    }catch(err){
        console.log('Upload file error', err)
    }
}

module.exports = uploadFile