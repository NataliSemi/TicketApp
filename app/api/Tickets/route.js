import Ticket from "../../(models)/Ticket";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  console.log("POST request received");
  try {
    const body = await req.json();
    console.log("Request body:", body);
    
    const ticketData = body.formData;
    if (!ticketData) {
      console.log("Missing ticket data");
      return NextResponse.json({ message: "Missing ticket data" }, { status: 400 });
    }
    
    console.log("Creating ticket with data:", ticketData);
    const newTicket = await Ticket.create(ticketData);
    console.log("Ticket created successfully:", newTicket);
    
    return NextResponse.json({ message: "Ticket Created", ticket: newTicket }, { status: 201 });
  } catch (err) {
    console.error("Error in POST handler:", err);
    return NextResponse.json({ message: "Error", error: err.message }, { status: 500 });
  }

}