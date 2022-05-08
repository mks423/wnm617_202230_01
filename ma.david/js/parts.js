
const makeStepList = templater(o=>`
<li class="step-list-item">
<a href="#step-profile-page" class="js-step-jump" id="${o.id}">
    <div class="step-list-image"><img src="${o.img}" alt=""></div>
    <div class="step-list-body">
        <div class="step-list-name">${o.steps}</div>
        <div class="step-list-progress">${o.progress}</div>
    </div>
</a>
</li>
`);


const makeUserprofilePage = o => `
<img src="${o.img}">
<h2>${o.name}</h2>
<div>
   <div><strong>Username</strong>@${o.username}</div>
   <div><strong>Email</strong>${o.email}</div>
</div>
`;