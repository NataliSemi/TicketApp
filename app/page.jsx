import TicketCard from "./(components)/TicketCard"

const Dashboard  = () => {
  return (
    <div className="text-white p-5">
      <div className="g:grid grid-cols-2 xl:grid-cols-4 ">
      <TicketCard />
      <TicketCard />
      <TicketCard />
      </div>
    </div>
  )
}

export default Dashboard 
