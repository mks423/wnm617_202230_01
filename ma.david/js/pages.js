
const HomePage = async() => {
   //destructuring
   let {result:steps} = await query({
      type:'steps_by_user_id',
      params:[sessionStorage.userId]
   })

   console.log(steps)
   $("#home-page .path-title").html(makeStepList(steps));

}