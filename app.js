function solve() {
    let[sectionAdd, sectionOpen, sectionInProgress, sectionComplete] = [...document.querySelectorAll('section')]

    let Task = document.getElementById('task');
    let Description = document.getElementById('description');
    let Date = document.getElementById('date');
    let btnAdd = document.getElementById('add');

    btnAdd.addEventListener('click', e => {
        e.preventDefault()
        let regex = /((^\d+)\.(\d+)\.(\d+)$)/
        let isValid = regex.test(Date.value)
        if (Task.value && Description.value && isValid) {
            let articleOpen = document.createElement('article');
            let inputDate = Date;
            let inputDescription = Description;
            let inputTask = Task;

            let h3 = document.createElement('h3');
            h3.textContent = `${inputTask.value}`;
            articleOpen.appendChild(h3);

            let p1 = document.createElement('p');
            p1.textContent = `Description: ${inputDescription.value}`;
            articleOpen.appendChild(p1);

            let p2 = document.createElement('p');
            p2.textContent = `Due Date: ${inputDate.value}`;
            articleOpen.appendChild(p2);

            let btnsDiv = document.createElement('div');
            btnsDiv.setAttribute('class', 'flex');
            articleOpen.appendChild(btnsDiv);

            let btnStart = document.createElement('button');
            btnStart.setAttribute('class', 'green');
            btnStart.textContent = 'Start';
            btnsDiv.appendChild(btnStart);

            let btnDelete = document.createElement('button');
            btnDelete.setAttribute('class', 'red');
            btnDelete.textContent = 'Delete';
            btnsDiv.appendChild(btnDelete);

            let divOpen = sectionOpen.children[1];
            divOpen.appendChild(articleOpen);

            let btnFinish = document.createElement('button');
            //btns for section inProgress
            btnStart.addEventListener('click', e => {
                sectionInProgress.children[1].appendChild(articleOpen);

                btnFinish.setAttribute('class', 'orange');
                btnFinish.textContent = 'Finish';
                btnsDiv.removeChild(btnStart);
                btnsDiv.appendChild(btnFinish);
            })

            //btnDelete event
            btnDelete.addEventListener('click', e => {
                articleOpen.remove();
            })

            //btnFinish event
            btnFinish.addEventListener('click', e => {
                sectionComplete.children[1].appendChild(articleOpen);
                articleOpen.removeChild(btnsDiv);
            })
            Date.value = ''
            Description.value = ''
            Task.value = '';
        }
    })
}