import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

let updateTicketData = {};
const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  console.log(EDITMODE, updateTicketData)
  return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;