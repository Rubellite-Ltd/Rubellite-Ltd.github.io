const { MongoClient } = require('mongodb');

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    const data = JSON.parse(event.body);

    const client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        await client.connect();
        const database = client.db('your-database-name');
        const collection = database.collection('ContactForm');
        await collection.insertOne(data);

        return {
            statusCode: 200,
            body: 'Form submitted successfully',
        };
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        return {
            statusCode: 500,
            body: 'Internal Server Error',
        };
    } finally {
        await client.close();
    }
};
