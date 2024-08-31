import { NextRequest, NextResponse } from "next/server";
import dbConnect from '../../../lib/mongodb';
import Events from '../../models/events';

// export default async function handler() {
//   const { method } = NextRequest;

//   await dbConnect();

//   switch (method) {
//     case "GET":
//       try {
//         const events = await Events.find({}); /* find all the data in our database */
//         NextResponse.json({ success: true, data: events });
//       } catch (error) {
//         NextResponse.json({ success: false });
//       }
//       break;
//     case "POST":
//       try {
//         const events = await Events.create(
//           NextRequest.body,
//         ); /* create a new model in the database */
//         NextResponse.json({ success: true, data: events });
//       } catch (error) {
//         NextResponse.json({ success: false });
//       }
//       break;
//     default:
//       NextResponse.json({ success: false });
//       break;
//   }
// }


export async function GET() {
  await dbConnect();

  try {
    const events = await Events.find({});
    return NextResponse.json(events);
  } catch (err) {
    return NextResponse.json(err);
  }
}

export async function POST(NextRequest) {
  console.log('NextRequest', NextRequest)
  await dbConnect();
  try {
    const events = await Events.create(
      NextRequest.body,
    ); /* create a new model in the database */
    NextResponse.json({ success: true, data: events });
  } catch (error) {
    NextResponse.json({ success: false });
  }
}