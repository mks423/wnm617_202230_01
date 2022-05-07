
const makeStepList = templater(o=>`
<li class="step-list-item">
<a href="#step-profile-page" id="${o.id}">
    <div class="step-list-image"><img src="${o.img}" alt=""></div>
    <div class="step-list-body">
        <div class="step-list-name">${o.steps}</div>
        <div class="step-list-progress">${o.progress}</div>
    </div>
</a>
</li>
`);