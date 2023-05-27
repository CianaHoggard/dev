let previewContainer = document.querySelector('.project-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.projects-container .project').forEach(project =>{
  project.onclick = () =>{
    previewContainer.style.display = 'flex';
    let name = project.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    previewContainer.style.display = 'none';
  };
});
