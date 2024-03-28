import { MongoClient } from 'mongodb'
import { NextResponse } from 'next/server';

// Replace the uri string with your connection string.

export async function POST(request) {
 
let body=await request.json();
const uri ="mongodb+srv://saharahmad:904Sahar@cluster1.29rocox.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

const client = new MongoClient(uri);

  try {
    const database = client.db('Data');
    const values = database.collection('value');

    // Query for a movie that has the title 'Back to the Future'
    const data = await values.insertOne(body);
return NextResponse.json({ok:true,data})
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
