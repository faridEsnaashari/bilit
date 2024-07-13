const seen=[];
async function check(){
  try{
    const data=await axios.get("https://fp.snapptrip.com/bus-listing-go/v2/availability/11320000/to/21310000/on/2024-07-14?filter=true")
    terminal=data.data.solutions.map(async (s)=>{
      if(seen.find(se=>se===(s.departureTime+s.provider+s.originTerminal.name+s.destinationTerminal.name).toString())){
        return
      }
      await axios.post(`https://api.telegram.org/bot1143862654:AAGhppoql_wjQzJ-SXCDS1ZA98lFLgbbvBQ/sendMessage?`,{chat_id:58235922,text:(new Date()).toLocaleTimeString()})

      text=`${s.originTerminal?.name} -> ${s.destinationTerminal?.name}
      ${s.departureTime}
https://pwa.snapptrip.com/bus/search?origin=11320000&originCity=%D8%AA%D9%87%D8%B1%D8%A7%D9%86&dest=21310000&destCity=%D8%A7%D8%B5%D9%81%D9%87%D8%A7%D9%86&date=2024-07-14&abroad=false
      `
      await axios.post(`https://api.telegram.org/bot1143862654:AAGhppoql_wjQzJ-SXCDS1ZA98lFLgbbvBQ/sendMessage?`,{chat_id:58235922,text})

      seen.push((s.departureTime+s.provider+s.originTerminal.name+s.destinationTerminal.name).toString())

    })
  }
  catch(err){
    console.log(err);
  }
}

setInterval(check,60*1000)
check()
