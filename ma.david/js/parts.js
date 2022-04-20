

const makeStepList = templater(o=>`
<li class="animal-list-item">
   <a href="#step-profile-page" class="js-step-jump" data-id="${o.id}">
      <div class="step-list-image"><img src="${o.img}" alt=""></div>
      <div class="step-list-body">
         <div class="step-list-name">${o.name}</div>
         <div class="step-list-type">Type: ${o.type}</div>
         <div class="step-list-breed">Breed: ${o.breed}</div>
      </div>
   </a>
</li>
`);


const makeProfilePage = o => `
<img src="${o.img}">
<h2>${o.name}</h2>
<div>
   <div><strong>Username</strong> @${o.username}</div>
   <div><strong>Email</strong> ${o.email}</div>
   <a href="#user-edit-page">Edit</a>
</div>
`;


const makeStepProfileDescription = o => `
<h2>${o.name}</h2>
<div>${o.type}</div>
<div>${o.breed}</div>
`;