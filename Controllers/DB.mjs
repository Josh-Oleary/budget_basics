import { Client } from 'pg'
import * as dotenv from 'dotenv'
dotenv.config()

class DB {
    
    client 

    constructor (database) {
        this.database = database
    }

    async connect () {
        this.client = new Client({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PW
        })

        try {
            await this.client.connect()
            console.log('DB Client connected')
        } catch (error) {
            console.error(error)
        }
    }

    close () {
        try {
            this.client.end()
        } catch (error) {
            console.error(error)
        }
    }
}