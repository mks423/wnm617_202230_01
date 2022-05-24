

const makeAnimalList = templater(o=>`
<li class="animal-list-item">
   <a href="#animal-profile-page" class="js-animal-jump" data-id="${o.id}">
      <div class="animal-list-image"><img src="${o.img}" alt=""></div>
      <div class="animal-list-body">
         <div class="animal-list-name">${o.name}</div>
         <div class="animal-list-type">Type: ${o.type}</div>
         <div class="animal-list-breed">Progress: ${o.breed}</div>
      </div>
   </a>
</li>
`);


const makeUserProfilePage = o => `
<div class="user-profile-head">
   <img src="${o.img}">
   <a href="#user-edit-photo-page" class="floater right bottom"><img src="img/icons/camera_trans.png" class="icon"></a>
</div>
<div class="user-profile-body">
   <h2>${o.name}</h2>
   <div class="user-profile-description">
      <div><strong>Username</strong> @${o.username}</div>
      <div><strong>Email</strong> ${o.email}</div>
   </div>
</div>
`;


const makeAnimalProfileDescription = o => `
<h2>${o.name}</h2>
<div>${o.type}</div>
<div>${o.breed}</div>
<div>${o.description}</div>

`;





const makeAnimalPopupBody = o => `
<div class="display-flex js-animal-jump noclick-children" data-id="${o.id}">
   <div class="animal-list-image list-image-thumbnail"><img src="${o.img}" alt=""></div>
   <div>
      <h2 class="modal-popup-title">${o.name}</h2>
      <div class="modal-popup-text">${o.type}</div>
      <div class="modal-popup-text">${o.breed}</div>
   </div>
</div>
`;



const FormControlInput = ({namespace,name,displayname,type,placeholder,value=""}) => {
   return `<div class="form-control">
      <label class="form-label" for="#${namespace}-${name}">${displayname}</label>
      <input data-role="none" class="form-input" type="${type}" placeholder="${placeholder}" id="${namespace}-${name}" value="${value}">
   </div>`;
}
const FormControlTextarea = ({namespace,name,displayname,placeholder,value=""}) => {
   return `<div class="form-control">
      <label class="form-label" for="#${namespace}-${name}">${displayname}</label>
      <textarea data-role="none" class="form-input" placeholder="${placeholder}" id="${namespace}-${name}">${value}</textarea>
   </div>`;
}

const SelectOptions = templater(o => `
   <option value="${o.value}" ${o.selected?'selected':''}>${o.text}</option>
`);
const FormSelect = (options,namespace,name,value="") => {
   return `
   <div class="form-select">
      <select id="${namespace}-${name}" data-role="none">
         ${SelectOptions(options.map(o=>({
            ...o,
            ...(o.id==value && {selected: true})
         })))}
      </select>
   </div>`;
}
const FormControlSelect = (options,namespace,name,displayname,value="") => {
   return `<div class="form-control">
      <label class="form-label" for="#${namespace}-${name}">${displayname}</label>
      ${FormSelect(options,namespace,name,value)}
   </div>`;
}


const makeAnimalForm = (animal,namespace = "animal-add") => {
return `
${FormControlInput({
   namespace,
   name:"name",
   displayname:"Name",
   type:"text",
   placeholder:"Name",
   value:animal.name,
})}
${FormControlInput({
   namespace,
   name:"type",
   displayname:"Type",
   type:"text",
   placeholder:"Type",
   value:animal.type,
})}
${FormControlInput({
   namespace,
   name:"breed",
   displayname:"Progress",
   type:"text",
   placeholder:"Progress",
   value:animal.breed,
})}
${FormControlTextarea({
   namespace,
   name:"description",
   displayname:"Description",
   placeholder:"Description",
   value:animal.description,
})}
`;
}


const makeUserForm = (user,namespace = "user-edit") => {
return `
${FormControlInput({
   namespace,
   name:"name",
   displayname:"Name",
   type:"text",
   placeholder:"Type a Name",
   value:user.name,
})}
${FormControlInput({
   namespace,
   name:"username",
   displayname:"Username",
   type:"text",
   placeholder:"Type a Username",
   value:user.username,
})}
${FormControlInput({
   namespace,
   name:"email",
   displayname:"Email",
   type:"text",
   placeholder:"Type an Email",
   value:user.email,
})}
`;
}







const makeAnimalListSet = (animals, target="#list-page .animal-list") => {
   $(".filter-bar").html(makeFilterList(animals));
   $(target).html(makeAnimalList(animals));
}

const capitalize = s => (s[0]||"").toUpperCase()+s.slice(1);

const filterList = (animals,type) => {
   let a = [...(new Set(animals.map(o=>o[type])))];
   return templater(o=>o?`<span data-filter="${type}" data-value="${o}">${capitalize(o)}</span>`:'')(a);
}

const makeFilterList = (animals) => {
   return `
   <span data-filter="type" data-value="">All</span>
   |
   ${filterList(animals,'type')}
   |
   ${filterList(animals,'breed')}
   `;
}