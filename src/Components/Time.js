
function Time(){
  // const [time ,setTime] = useState([])
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const yearMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
 
  let today = new Date();
  let day = today.getDay();
  let date = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  let hour = today.getHours();
  let minute = today.getMinutes();


  console.log(`${weekDays[day]}  ${date} ${yearMonths[month]} ${year}`)

  return(
    <div>
      <h3>{hour}:{minute} <span>hrs</span></h3>
      <h3>{weekDays[day]} , {date} {yearMonths[month]} {year}</h3>

    </div>
  )

}


export default Time;