
const HomePage = async() => {
   //destructuring
   let {result:steps} = await query({
      type:'step_by_id',
      params:[sessionStorage.userId]
   })

   console.log(steps)
   $("#home-page .step-list").html(makeStepList(steps));

}

const StepPage = async() => {
   //destructuring
   let {result:steps} = await query({
      type:'steps_by_user_id',
      params:[sessionStorage.userId]
   })

   console.log(steps)
   $("#step-page [data-role='main']").html(makeStepList(steps));

}

const UserProfilePage = async() => {
   let {result:users} = await query({
      type:'user_by_id',
      params:[sessionStorage.userId]
   })
   let [user] = users;
   console.log(user)
   $("#profile-page [data-role='main']").html(makeUserprofilePage(user));

}

const MapPage = async() => {

   let {result} = await query({
      type:'location_by_id',
      params:[sessionStorage.userId]
   })
   console.log(result);

   let map_el = await makeMap("#location-page .map");
   console.log(map_el.data())
   makeMarkers(map_el,result)
}