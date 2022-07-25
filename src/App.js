import {BiCalendar } from "react-icons/bi"
import {Search} from './componets/Search'
import {AddAppointment} from './componets/AddAppointment'
import { AppointmentInfo } from "./componets/AppointmentInfo"
import { useEffect,useState,useCallback } from "react"

function App() {

  let [appointmentData,setAppointmentData] = useState([]);
  let [query,setQuery] = useState("");
  let [sortBy, setSortBy] = useState('petName');
  let [orderBy,setOrderBy] = useState("asc")
  
  let orderAndSort = (a,b) => {
    let order = (orderBy === "asc") ? 1 : -1;
    return a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order;
  }
  
  const filteredAppointments = appointmentData.filter(
    item => {
    return (item.petName.toLowerCase().includes(query.toLowerCase()) ||
    item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
    item.aptNotes.toLowerCase().includes(query.toLowerCase()))
  })
  .sort(orderAndSort);


  // Mocking API Call

  const fetchData = useCallback ( () =>{
    fetch('./data.json')
    .then(response => response.json())
    .then(data=>{
      setAppointmentData(data)})
  },[])

  useEffect(() =>
  {
    fetchData()
  },[fetchData])

  return (
    <>
    <div className="App container  mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <BiCalendar className="inline-block justify-items-center text-red-500" />
        Appointments</h1>  

    <AddAppointment
    onPublishAppointment = {(newApt) => setAppointmentData([...appointmentData,newApt])}
    lastId = {appointmentData.reduce((max,item) => Number(item.id) > max ? Number(item.id) : max,0)}
    />

    <Search 
    query={query} 
    onQueryChange = {customQuery => setQuery(customQuery)}
    sortBy = {sortBy}
    onSortByChanged = {sortBy => setSortBy(sortBy)}
    orderBy = {orderBy}
    onOrderByChanged = {orderBy => setOrderBy(orderBy)}
    />

    <AppointmentList 
    appointmentData ={filteredAppointments} 
    setAppointmentData = {setAppointmentData}
    />
    </div>
    </>
  );
}



const AppointmentList = ({appointmentData,setAppointmentData}) => {
  let deleteAppointment = (aptId) => {
    setAppointmentData(appointmentData.filter(item => item.id !== aptId))
  }
  return(
    <ul className="divide-y divide-gray-200">

    {appointmentData.map(appointment => (
    <AppointmentInfo 
    key={appointment.id}
    appointment ={appointment} 
    onDeleteAppointment = {deleteAppointment}
    />
    ) )}
     </ul>
  )
}

export default App;
